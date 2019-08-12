import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ComponentWithGetters from '@/components/ComponentWithGetters'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    firstName: 'Alice',
    lastName: 'Doe'
  },

  getters: {
    fullname: state => state.firstName + ' ' + state.lastName
  }
})

describe('ComponentWithGetters', () => {
  it('renders a username using a real Vuex getter', () => {
    const wrapper = shallowMount(ComponentWithGetters, {
      store,
      localVue
    })

    expect(wrapper.find('.fullname').text()).toBe('Alice Doe')
  })

  it('renders a username using computed mounting options', () => {
    const wrapper = shallowMount(ComponentWithGetters, {
      computed: {
        fullname: () => 'Alice Doe'
      }
    })

    expect(wrapper.find('.fullname').text()).toBe('Alice Doe')
  })
})
