import { shallowMount, createLocalVue } from '@vue/test-utils'
import parksStore from '../../src/store/modules/parks'

describe('setParks mutates state.parks', () => {
  const state = {
    parks: []
  }

  const parks = [{name: 'Mission Delores'}, {address: '123 best street'}]
  
  it('should mutate the parks state', () => {
    parksStore.mutations.setParks(state, { parks })
    expect(state.parks).toEqual({parks: parks})
  })

})
