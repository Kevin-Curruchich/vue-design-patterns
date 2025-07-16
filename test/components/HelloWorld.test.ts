import HelloWorld from '@/components/HelloWorld.vue';
import { mount } from '@vue/test-utils';

describe('HelloWorld.vue', () => {
  test('renders a message', () => {

    const msg = 'Hello Vitest!'

    const wrapper = mount(HelloWorld, {
      props: {
        msg
      }
    });

    expect(wrapper.find('h1').text()).toContain(msg);
  });
});
