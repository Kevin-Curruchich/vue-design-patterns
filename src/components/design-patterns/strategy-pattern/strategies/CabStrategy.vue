<template>
  <div>
    <h3>Cab Strategy</h3>
    <p
      data-test-id="estimated-time"
    >
    Estimated time: {{ estimatedTime }}
    </p>
    <p
      data-test-id="cost"
    >
      Cost: {{ cost }} * {{ tripPartners }}  = {{ strategyTotalCost }}
    </p>
    <div>
      <h4>Route:</h4>
      <ul>
        <li class="stop" v-for="stop in stops" :key="stop">{{ stop }}</li>
      </ul>
    </div>
    <button @click="onRecalculate">
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
const { tripPartners, strategyTotalCost} = useTrip({costPerPartner: props.cost})

const onRecalculate = ()=>{
  emit('recalculate', 'cab')
}

</script>
