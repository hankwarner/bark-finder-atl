import { shallowMount, createLocalVue } from '@vue/test-utils'
import parksStore from '../../src/store/modules/parks'

describe('parks store mutations', () => {
  let state;
  let currentParks;
  let currentPark;
  
  beforeEach((done) => {
    state = {
      parks: null,
      park: null
    }

    currentParks = [
      {
        name: 'Mission Delores',
        address: '123 Best street'
      }, {
        name: 'Golden Gate Park',
        address: '456 Haight street'
      }
    ]

    currentPark = {
      name: 'Twin Peaks',
      address: '501 Vista Point',
      reviews: [
        {
          userId: 1,
          parkId: 1,
          body: 'Best place in town',
          rating: 5
        }
      ]
    }
    done();
  })

  describe('setParks', () => {
    it('should mutate the parks state', () => {
      parksStore.mutations.setParks(state, { currentParks });
      expect(state.parks).toEqual({currentParks: currentParks});
    })
  })

  describe('setPark', () => {
    it('should mutate the park state', () => {
      parksStore.mutations.setPark(state, { currentPark });
      expect(state.park).toEqual({currentPark: currentPark});
    })
  })

  describe('setNewParkReview', () => {
    it('should push a new review to the current park', () => {
      parksStore.mutations.setPark(state, {
        name: 'Lake Merced Park',
        address: '1800 Harding Rd.',
        reviews: [
          {
            userId: 1,
            parkId: 1,
            body: 'Scenic views',
            rating: 5
          }
        ]
      })

      var newReview = {
        userId: 2,
        parkId: 1,
        body: 'Nice place to hang out by the water',
        rating: 4
      }
      parksStore.mutations.setNewParkReview(state, { newReview });
      expect(state.park.reviews[1]).toEqual({newReview});
    })
  })

  describe('deleteParkReview', () => {
    it('should delete the passed in review by Id', () => {
      parksStore.mutations.setPark(state, {
        name: 'Lake Merced Park',
        address: '1800 Harding Rd.',
        reviews: [
          {
            userId: 1,
            parkId: 1,
            body: 'Scenic views',
            rating: 5
          }
        ]
      })
      parksStore.mutations.deleteParkReview(state, state.park.reviews[0].id);
      expect(state.park.reviews).toEqual([]);
    })
  })

})
