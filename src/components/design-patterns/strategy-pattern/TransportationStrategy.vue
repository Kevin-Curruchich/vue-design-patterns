<template>
  <div>
    <h2>Transportation Strategy</h2>
    <p>Select a transportation strategy to get to the airport:</p>
    <select v-model="selectedStrategy">
      <option value="bus">Bus</option>
      <option value="cab">Cab</option>
      <option value="bicycle">Bicycle</option>
    </select>
    <div v-if="selectedStrategy">
      <component
        :is="strategies[selectedStrategy].component"
        :stops="strategies[selectedStrategy].stops"
        :estimated-time="strategies[selectedStrategy].estimatedTime"
        :cost="strategies[selectedStrategy].cost"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BusStrategy from './strategies/BusStrategy.vue';
import CabStrategy from './strategies/CabStrategy.vue';
import BicycleStrategy from './strategies/BicycleStrategy.vue';

const selectedStrategy = ref('bus');

const strategies = {
  bus: {
    component: BusStrategy,
    stops: ['Stop A', 'Stop B', 'Airport'],
    estimatedTime: '1 hour',
    cost: '$5',
  },
  cab: {
    component: CabStrategy,
    stops: ['Your Location', 'Airport'],
    estimatedTime: '1 hour',
    cost: '$5',
  },
  bicycle: {
    component: BicycleStrategy,
    stops: [{name: 'Your Location', timeInStop: 10}, {name: 'Scenic Route', timeInStop: 5}, {name: 'Airport', timeInStop: 15}],
    estimatedTime: '2 hours',
    cost: '$0',
  },
};
</script>
