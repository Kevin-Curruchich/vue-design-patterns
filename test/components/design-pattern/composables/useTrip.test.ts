import useTrip from "@/components/design-patterns/strategy-pattern/composables/useTrip"
import { withSetup } from "../../../utils/with-setup"

describe('useTrip', ()=>{


    test('Should initialize with the default values', ()=>{

        const [result, app] = withSetup(useTrip)

        // after change the strategy, the tripPartners should initialize with 1
        expect(result.tripPartners.value).toBe(1)




    })


})