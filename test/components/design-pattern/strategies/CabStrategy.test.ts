import { mount } from "@vue/test-utils"
import CabStrategy from "@/components/design-patterns/strategy-pattern/strategies/CabStrategy.vue"

describe('<CabStrategy />', ()=> {

    const props = {
        cost: '10',
        stops: ['Stop A', 'Stop B', 'Airport'],
        estimatedTime: '1 hour'
    }

    const wrapper = mount(CabStrategy, 
        {
            props
        }
    )

    test('Show cost of the trip using', ()=> {
        expect(wrapper.find('p[data-test-id="cost"]').exists()).toBe(true)
        expect(wrapper.find('p[data-test-id="cost"]').text()).toContain(props.cost)
        
    })

    test('Show estimated time of the trip using', ()=> {
        expect(wrapper.find('p[data-test-id="estimated-time"]').exists()).toBe(true)
        expect(wrapper.find('p[data-test-id="estimated-time"]').text()).toContain(props.estimatedTime)
    })


    test('Show unordered list of stops', ()=>{
        expect(wrapper.find('ul').exists()).toBeTruthy()

        const listItems = wrapper.findAll('li[class="stop"]')

        expect(listItems.length).toBe(props.stops.length)

        props.stops.forEach((stop, index)=>{
            expect(listItems[index].text()).toContain(stop)
        })

    })
    
})