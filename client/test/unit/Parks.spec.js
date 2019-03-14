import { shallowMount, createLocalVue } from '@vue/test-utils'
import parksStore from '../../src/store/modules/parks'

describe('parks store', () => {
  let state;
  
  beforeEach((done) => {
    state = {
      parks: [],
      park: null
    }
    done();
  })

  describe('setParks', () => {
    it('should mutate the parks state', () => {
      const parks = [
        {
          name: 'Mission Delores',
          address: '123 Best street'
        }, {
          name: 'Golden Gate Park',
          address: '456 Haight street'
        }
      ];
      parksStore.mutations.setParks(state, { parks });
      expect(state.parks).toEqual({parks: parks});
    })
  })

  describe('setPark', () => {
    it('should mutate the park state', () => {
      const park = [
        {
          name: 'Mission Delores',
          address: '123 Best street'
        }
      ];
      parksStore.mutations.setPark(state, { park });
      expect(state.park).toEqual({park: park});
    })
  })

})
