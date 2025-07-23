<template>
  <div>
    <h3>Bicycle Strategy</h3>
    <p>Estimated time: {{ estimatedTime }}</p>
    <p>Cost: {{ cost }} * {{ tripPartners }} = {{ strategyTotalCost }}</p>
    <p>Stops:</p>
    <ol>
      <li v-for="{ name, timeInStop } in stops" :key="name">
        {{ name }} - Estimated Time: {{ timeInStop }}
      </li>
    </ol>
    <button @click="onRecalculate">
      <span>Recalculate</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import useTrip from "../composables/useTrip";

const props = defineProps<{
  stops: { name: string; timeInStop: number }[];
  estimatedTime: String;
  cost: number;
}>();

const emit = defineEmits<{ recalculate: [id: string] }>();

//instances
const { tripPartners, strategyTotalCost } = useTrip({
  costPerPartner: props.cost,
});

const onRecalculate = () => {
  emit("recalculate", "bicycle");
};
</script>
