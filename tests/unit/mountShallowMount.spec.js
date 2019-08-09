import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'

const Child = Vue.component('Child', {
  name: 'Child',

  template: '<div>Child component</div>'
})

const Parent = Vue.component('Parent', {
  name: 'Parent',

  template: '<div><child /></div>'
})

describe('mount', () => {
  it('show', () => {
    const shallowWrapper = shallowMount(Parent)
    // const mountWrapper = mount(Parent)
    // console.log(shallowWrapper.html())
    // console.log(mountWrapper.html())
  })
})
