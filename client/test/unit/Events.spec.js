import { shallowMount, createLocalVue } from '@vue/test-utils'
import eventsStore from '../../src/store/modules/events'

describe('events store mutations', () => {
  let state;
  let currentEvents;
  let currentEvent;
  
  beforeEach((done) => {
    state = {
      events: [],
      event: null
    }

    currentEvents = [
      {
        name: 'Afropunk Fest',
        address: 'Central Park'
      }, {
        name: 'Shaky Knees',
        address: 'Centennial Park'
      }
    ]

    currentEvent = {
      name: 'Afropunk Fest',
      address: 'Central Park',
      reviews: [
        {
          userId: 1,
          eventId: 1,
          body: 'Great lineup this year',
          rating: 5
        }
      ]
    }
    done();
  })

  describe('setEvents', () => {
    it('should mutate the events state', () => {
      eventsStore.mutations.setEvents(state, { currentEvents });
      expect(state.events).toEqual({currentEvents: currentEvents});
    })
  })

  describe('setEvent', () => {
    it('should mutate the event state', () => {
      eventsStore.mutations.setEvent(state, { currentEvent });
      expect(state.event).toEqual({currentEvent: currentEvent});
    })
  })

  describe('setNewEventReview', () => {
    it('should push a new review to the current event', () => {
      eventsStore.mutations.setEvent(state, {
        name: 'Beer fest',
        address: 'Atlantic Station',
        reviews: [
          {
            userId: 1,
            eventId: 1,
            body: 'Great beer, great vibes',
            rating: 5
          }
        ]
      })

      var newReview = {
        userId: 2,
        eventId: 1,
        body: 'Seasonal brews are great',
        rating: 4
      }
      eventsStore.mutations.setNewEventReview(state, { newReview });
      expect(state.event.reviews[1]).toEqual({newReview});
    })
  })

  describe('deleteEventReview', () => {
    it('should delete the passed in review by Id', () => {
      eventsStore.mutations.setEvent(state, {
        name: 'Wine and cheese fest',
        address: 'Buckhead',
        reviews: [
          {
            userId: 1,
            eventId: 1,
            body: 'Pass the red',
            rating: 4
          }
        ]
      })
      eventsStore.mutations.deleteEventReview(state, state.event.reviews[0].id);
      expect(state.event.reviews).toEqual([]);
    })
  })

})
