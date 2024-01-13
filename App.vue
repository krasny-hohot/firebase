<template>
  <div id="app">
    <h1>Стоимость 3D печати</h1>
    <v-form @submit.prevent="saveCalculation">
      <v-text-field
        v-model="printTime"
        label="Время печати (час)"
        required
      ></v-text-field>
      <v-text-field
        v-model="filamentCost"
        label="Стоимость пластика (грам)"
        required
      ></v-text-field>
      <v-text-field
        v-model="electricityCost"
        label="Стоимость электричества (кВ/ч)"
        required
      ></v-text-field>
      <v-text-field
        v-model="printerHourlyCost"
        label="Стоимость работы принтера (час)"
        required
      ></v-text-field>
      <v-btn color="primary" @click="calculateCost">Calculate</v-btn>
      <div v-if="totalCost !== null">
        <h2>Общая стоимость: ${{ totalCost.toFixed(2) }}</h2>
        <p>Время печати (час): {{ printTime }} hours</p>
        <p>
          Стоимость пластика (грам): ${{ (filamentCost *
          filamentUsed).toFixed(2) }}
        </p>
        <p>
          Стоимость электричества (кВ/ч): ${{ (electricityCost *
          printTime).toFixed(2) }}
        </p>
      </div>
    </v-form>
  </div>
</template>

<script>
  import { db } from './firebase'

  export default {
    data() {
      return {
        printTime: 0,
        filamentCost: 0,
        electricityCost: 0,
        printerHourlyCost: 0,
        filamentUsed: 0,
        totalCost: null,
      }
    },
    methods: {
      calculateCost() {
        this.filamentUsed = this.printTime * this.printerHourlyCost
        this.totalCost =
          this.printTime * this.printerHourlyCost +
          this.electricityCost * this.printTime +
          this.filamentCost * this.filamentUsed
      },
      saveCalculation() {
        const calculationData = {
          printTime: this.printTime,
          filamentCost: this.filamentCost,
          electricityCost: this.electricityCost,
          printerHourlyCost: this.printerHourlyCost,
          filamentUsed: this.filamentUsed,
          totalCost: this.totalCost,
        }

        db.collection('calculations')
          .add(calculationData)
          .then(() => {
            console.log('Calculation saved successfully.')
          })
          .catch(error => {
            console.error('Error saving calculation:', error)
          })
      },
    },
  }
</script>
