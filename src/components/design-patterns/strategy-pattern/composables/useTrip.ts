import { computed, onMounted, reactive, readonly, toRef } from "vue"

interface TripStrategyData {
    costPerPartner: number,
}

const state = reactive({
    tripPartners: 1
})


export default (tripStrategyData: TripStrategyData = {costPerPartner: 10}) => {


    const increaseTripPartners = () => {
        state.tripPartners += 1
    }

    const decreaseTripPartners = () => {

        if(state.tripPartners <= 1) return

        state.tripPartners -= 1
    }

    const initializeTripPartners = (value: number = 1) => {

        if(value <= 0) {
            state.tripPartners = 1
            return
        }

        state.tripPartners = value
    }

    const strategyTotalCost = computed(()=> tripStrategyData.costPerPartner * state.tripPartners )

    onMounted(() => {
        initializeTripPartners()
    })


    return {
        tripPartners: readonly(toRef(state,'tripPartners')),
        increaseTripPartners,
        decreaseTripPartners,
        initializeTripPartners,
        strategyTotalCost
    }
    

}