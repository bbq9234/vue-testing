import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import NestedRoute from '@/components/NestedRoute'
import routes from '@/routes'

const localVue = createLocalVue()
localVue.use(VueRouter)

jest.mock('@/components/NestedRoute', () => ({
  name: 'NestedRoute',
  render: h => h('div')
}))

describe('App', () => {
  it('renders a child component via routing', () => {
    const router = new VueRouter({ routes })
    const wrapper = mount(App, { localVue, router })

    router.push('/nested-route')

    expect(wrapper.find(NestedRoute).exists()).toBe(true)
  })
})
