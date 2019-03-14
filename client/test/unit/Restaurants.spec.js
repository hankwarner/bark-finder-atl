import { shallowMount, createLocalVue } from '@vue/test-utils'
import restaurantsStore from '../../src/store/modules/restaurants'

describe('restaurants store', () => {
  let state;
  
  beforeEach((done) => {
    state = {
      restaurants: [],
      restaurant: null
    }
    done();
  })

  describe('setRestaurants', () => {
    it('should mutate the restaurants state', () => {
      const restaurants = [
        {
          name: 'Lee\'s Bakery',
          address: '4005 Buford Hwy'
        }, {
          name: 'El Rey del Taco',
          address: '5288 Buford Hwy'
        }
      ];
      restaurantsStore.mutations.setRestaurants(state, { restaurants });
      expect(state.restaurants).toEqual({restaurants: restaurants});
    })
  })

  describe('setRestaurant', () => {
    it('should mutate the restaurant state', () => {
      const restaurant = [
        {
          name: 'Lee\'s Bakery',
          address: '4005 Buford Hwy'
        }
      ];
      restaurantsStore.mutations.setRestaurant(state, { restaurant });
      expect(state.restaurant).toEqual({restaurant: restaurant});
    })
  })

})
