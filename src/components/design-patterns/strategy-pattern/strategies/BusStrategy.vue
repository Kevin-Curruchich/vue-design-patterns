<template>
  <div>
    <h3>Bus Strategy</h3>
    <p>Estimated time: {{ estimatedTime }}</p>
    <p>Cost: {{ cost }} * {{ tripPartners }} = {{ strategyTotalCost }} </p>
    <p>Stops:</p>
    <div>
      <span v-for="(stop, index) in stops" :key="stop">
        {{ stop }} <span v-if="index < stops.length - 1"> -> </span>
      </span>
    </div>
    <button
      @click="onRecalculate"
    >
      <span>Recalculate</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useTrip from '../composables/useTrip';

const props = defineProps<
  {
  stops: string[],
  estimatedTime: String,
  cost: number,
}
>();

const emit = defineEmits<{recalculate: [id: string]}>()

//instances
const { tripPartners, strategyTotalCost } = useTrip({
  costPerPartner: props.cost
})

const onRecalculate = ()=>{
  emit('recalculate', 'bus')
}


</script>
