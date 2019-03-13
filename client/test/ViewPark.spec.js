import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue';
import Vuex from 'vuex'
import Vuetify from 'vuetify';
import ViewPark from '@/components/ViewPark'

Vue.use(Vuetify);

const localVue = createLocalVue()

localVue.use(Vuex)

describe('ViewParks.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {}
    store = new Vuex.Store({
      actions
    })
  })

  const wrapper = shallowMount(ViewPark)

  it('does not contain an error', () => {
    expect(wrapper.contains('error')).toBe(false)
  })
})
