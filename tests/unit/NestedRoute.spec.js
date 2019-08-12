import { shallowMount } from '@vue/test-utils'
import NestedRoute from '@/components/NestedRoute'
import routes from '@/routes'

describe('NestedRoute', () => {
  it('renders a username from query string', () => {
    const username = 'alice'
    const wrapper = shallowMount(NestedRoute, {
      mocks: {
        $route: {
          params: { username }
        }
      }
    })

    expect(wrapper.find('.username').text()).toBe(username)
  })
})
