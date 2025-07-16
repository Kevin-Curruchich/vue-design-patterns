<template>
  <div class="container">
    <h2>Builder Pattern Example</h2>
    <div class="buttons">
      <button @click="onBuildDashboard">Build Dashboard</button>
    </div>
    <div class="dashboard-container">
      <component :is="dashboardComponent" />
    </div>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue';
import { DashboardDirector } from './director';
import { DashboardBuilder } from './builder';

//This shallowRef will contain all the user preference
const dashboardComponent = shallowRef(null);

//simulate user preferences fetched from server
const userPreferences = {
  widgets: [
    { type: 'WelcomeWidget', config: { user: 'John Doe' } },
    { type: 'ChartWidget', config: { chartType: 'line', data: [10, 20, 30] } },
    { type: 'TableWidget', config: { headers: ['ID', 'Name'], rows: [[1, 'Alice'], [2, 'Bob']] } },
    { type: 'TableWidget', config: { headers: ['ID', 'Name'], rows: [[2, 'Kevin'], [3, 'Luis']] } },
  ],
};

//Method to build the dashboard
const onBuildDashboard = () => {
  //This method create a new Dashboard Director (the only way to construct) and then build the dashboard
  const director = new DashboardDirector(new DashboardBuilder());
  //shallowRef dashboardComponent is expecting to get Vue components list
  dashboardComponent.value = director.build(userPreferences).getDashboard();
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.buttons {
  display: flex;
  gap: 10px;
}
.dashboard-container {
  margin-top: 20px;
  width: 100%;
}
</style>