const initialStrategyData: any = {
    bus: {
        stops: ['Stop A', 'Stop B', 'Airport'],
        estimatedTime: '1 hour',
        cost: 10,
    },
    cab: {
        stops: ['Your Location', 'Airport'],
        estimatedTime: '1 hour',
        cost: 5,
    },
    bicycle: {
        stops: [{ name: 'Your Location', timeInStop: 10 }, { name: 'Scenic Route', timeInStop: 5 }, { name: 'Airport', timeInStop: 15 }],
        estimatedTime: '2 hours',
        cost: 2,
    },
};

const recalculatedStrategyData: any = {
    bus: {
        stops: ['Stop B', 'Stop C', 'Airport'],
        estimatedTime: '1 hour 30 minutes',
        cost: 10,
    },
    cab: {
        stops: ['Your Location A', 'Airport B'],
        estimatedTime: '1 hour 15 minutes',
        cost: 5,
    },
    bicycle: {
        stops: [{ name: 'Your Location', timeInStop: 15 }, { name: 'Scenic Route', timeInStop: 15 }, { name: 'Airport', timeInStop: 15 }],
        estimatedTime: '2 hours 10 minutes',
        cost: 2,
    },
}

// Simulate an API call to get initial data
export const getInitialStrategiesData = (): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(initialStrategyData);
        }, 500);
    });
};


// Simulate an API call to get recalculated data for a strategy
export const getRecalculatedStrategyData = (strategyKey: string): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(recalculatedStrategyData[strategyKey]);
        }, 300);
    });
};
