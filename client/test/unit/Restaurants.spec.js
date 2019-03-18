import { shallowMount, createLocalVue } from '@vue/test-utils'
import restaurantsStore from '../../src/store/modules/restaurants'

describe('restaurants store', () => {
  let state;
  let currentRestaurants;
  let currentRestaurant;
  
  beforeEach((done) => {
    state = {
      restaurants: [],
      restaurant: null
    }

    currentRestaurants = [
      {
        name: 'Lee\'s Bakery',
        address: '4005 Buford Hwy'
      }, {
        name: 'El Rey del Taco',
        address: '5288 Buford Hwy'
      }
    ];

    currentRestaurant = [
      {
        name: 'Lee\'s Bakery',
        address: '4005 Buford Hwy'
      }
    ];
    done();
  })

  describe('setRestaurants', () => {
    it('should mutate the restaurants state', () => {
      restaurantsStore.mutations.setRestaurants(state, { currentRestaurants });
      expect(state.restaurants).toEqual({currentRestaurants: currentRestaurants});
    })
  })

  describe('setRestaurant', () => {
    it('should mutate the restaurant state', () => {
      restaurantsStore.mutations.setRestaurant(state, { currentRestaurant });
      expect(state.restaurant).toEqual({currentRestaurant: currentRestaurant});
    })
  })

  describe('setNewRestaurantReview', () => {
    it('should push a new review to the current restaurant', () => {
      restaurantsStore.mutations.setRestaurant(state, {
        name: 'Quoc Huong',
        address: ' 5150 Buford Hwy',
        reviews: [
          {
            userId: 1,
            eventId: 1,
            body: 'Best Bahn Mi in town',
            rating: 5
          }
        ]
      })

      var newReview = {
        userId: 2,
        eventId: 1,
        body: 'Remember to bring cash',
        rating: 4
      }
      restaurantsStore.mutations.setNewRestaurantReview(state, { newReview });
      expect(state.restaurant.reviews[1]).toEqual({newReview});
    })
  })

  describe('deleteRestaurantReview', () => {
    it('should delete the passed in review by Id', () => {
      restaurantsStore.mutations.setRestaurant(state, {
        name: 'Quoc Huong',
        address: ' 5150 Buford Hwy',
        reviews: [
          {
            userId: 1,
            eventId: 1,
            body: 'Best Bahn Mi in town',
            rating: 5
          }
        ]
      })
      restaurantsStore.mutations.deleteRestaurantReview(state, state.restaurant.reviews[0].id);
      expect(state.restaurant.reviews).toEqual([]);
    })
  })

})
