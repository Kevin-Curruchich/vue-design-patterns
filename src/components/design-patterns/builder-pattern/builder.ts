import { h } from 'vue';
import Dashboard from './Dashboard.vue';
import WelcomeWidget from './widgets/WelcomeWidget.vue';
import ChartWidget from './widgets/ChartWidget.vue';
import TableWidget from './widgets/TableWidget.vue';

export class DashboardBuilder {
  constructor() {
    // Initialize the widgets array.
    // This will be useful to save all the widgets and then render them in the Dashboard component
    this.widgets = [];
  }

  addWelcomeWidget(config) {
    // Example of specific logic: Capitalize the user's name
    const processedConfig = {
      ...config,
      user: config.user.toUpperCase(),
    };
    this.widgets.push({ component: WelcomeWidget, props: processedConfig });
    return this;
  }

  addChartWidget(config) {
    // Example of specific logic: Ensure data is valid
    if (!Array.isArray(config.data)) {
      console.error('ChartWidget data must be an array.');
      return this; // Skip adding this widget
    }
    this.widgets.push({ component: ChartWidget, props: config });
    return this;
  }

  addTableWidget(config) {
    // Example of specific logic: Add a timestamp to each row
    const processedConfig = {
      ...config,
      headers: [...config.headers, 'Timestamp'],
      rows: config.rows.map((row) => [...row, new Date().toLocaleTimeString()]),
    };
    this.widgets.push({ component: TableWidget, props: processedConfig });
    return this;
  }

  getDashboard() {
    // Take the Dashboard component and use hyperscript (h) to render all the components.
    // Dashboard component required widgets what is a prop to render all components using v-for directive
    
    return h(Dashboard, { widgets: this.widgets });
  }
}
