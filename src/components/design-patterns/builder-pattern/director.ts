export class DashboardDirector {
  
  //initialize the builder property
  constructor(builder) {
    this.builder = builder;
  }

  //Method to build the dashboard
  //Build expect the user preferences and return an array of Vue components
  build(preferences) {
    
    preferences.widgets.forEach((widgetInfo) => {
      //each widget is an object with type and config (pas to component as props)
      const { type, config } = widgetInfo;

      switch (type) {
        case 'WelcomeWidget':
          this.builder.addWelcomeWidget(config);
          break;
        case 'ChartWidget':
          this.builder.addChartWidget(config);
          break;
        case 'TableWidget':
          this.builder.addTableWidget(config);
          break;
        default:
          console.warn(`Unknown widget type: ${type}`);
      }
    });

    //After process all the widgets, return the build instance for after render all the widgets
    return this.builder;
  }
}
