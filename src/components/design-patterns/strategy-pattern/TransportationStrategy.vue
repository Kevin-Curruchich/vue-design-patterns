<template>
  <div>
    <h2>Transportation Strategy</h2>
    <p>Select a transportation strategy to get to the airport:</p>
    <select v-model="selectedStrategy" :disabled="loading">
      <option v-for="key in Object.keys(strategies)" :key="key" :value="key">
        {{ key.charAt(0).toUpperCase() + key.slice(1) }}
      </option>
    </select>

    <div>
      <button @click="decreaseTripPartners">-</button>
      <span>{{ tripPartners }}</span>
      <button @click="increaseTripPartners">+</button>
    </div>

    <div v-if="loading">
      <p>Loading strategy data...</p>
    </div>
    <div v-else-if="selectedStrategy && strategies[selectedStrategy]">
      <component
        :is="strategies[selectedStrategy].component"
        :stops="strategies[selectedStrategy].stops"
        :estimated-time="strategies[selectedStrategy].estimatedTime"
        :cost="strategies[selectedStrategy].cost"
        @recalculate="onRecalculate"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, markRaw } from 'vue';
import useTrip from './composables/useTrip';
import BusStrategy from './strategies/BusStrategy.vue';
import CabStrategy from './strategies/CabStrategy.vue';
import BicycleStrategy from './strategies/BicycleStrategy.vue';
import { getInitialStrategiesData, getRecalculatedStrategyData } from './api/strategyData.ts';

const {
  tripPartners,
  increaseTripPartners,
  decreaseTripPartners,
  initializeTripPartners
} = useTrip();

const selectedStrategy = ref('bus');
const loading = ref(true);

const strategies = reactive({
  bus: {
    component: markRaw(BusStrategy),
    stops: [],
    estimatedTime: '',
    cost: 0,
  },
  cab: {
    component: markRaw(CabStrategy),
    stops: [],
    estimatedTime: '',
    cost: 0,
  },
  bicycle: {
    component: markRaw(BicycleStrategy),
    stops: [],
    estimatedTime: '',
    cost: 0,
  },
});

onMounted(async () => {
  loading.value = true;
  const initialData = await getInitialStrategiesData();
  for (const key in initialData) {
    if (strategies[key]) {
      strategies[key].stops = initialData[key].stops;
      strategies[key].estimatedTime = initialData[key].estimatedTime;
      strategies[key].cost = initialData[key].cost;
    }
  }
  loading.value = false;
});

const onRecalculate = async (strategyKey: string) => {
  initializeTripPartners(1);
  const recalculatedData = await getRecalculatedStrategyData(strategyKey);
  if (strategies[strategyKey]) {
    strategies[strategyKey].stops = recalculatedData.stops;
    strategies[strategyKey].estimatedTime = recalculatedData.estimatedTime;
    strategies[strategyKey].cost = recalculatedData.cost;
  }
};
</script>
