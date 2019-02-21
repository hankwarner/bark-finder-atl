import Vue from 'vue'
import Landing from '@/components/Landing'

describe('Landing.vue', () => {
  it('should render the landing page', () => {
    const Constructor = Vue.extend(Landing)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toContain('BarkFSinder ATL')
  })
})
