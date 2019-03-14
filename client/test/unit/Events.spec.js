import { shallowMount, createLocalVue } from '@vue/test-utils'
import eventsStore from '../../src/store/modules/events'

describe('events store', () => {
  let state;
  
  beforeEach((done) => {
    state = {
      events: [],
      event: null
    }
    done();
  })

  describe('setEvents', () => {
    it('should mutate the events state', () => {
      const events = [
        {
          name: 'Afropunk Fest',
          address: 'Central Park'
        }, {
          name: 'Shakey Knees',
          address: 'Centennial Park'
        }
      ];
      eventsStore.mutations.setEvents(state, { events });
      expect(state.events).toEqual({events: events});
    })
  })

  describe('setEvent', () => {
    it('should mutate the event state', () => {
      const event = [
        {
            name: 'Afropunk Fest',
            address: 'Central Park'
        }
      ];
      eventsStore.mutations.setEvent(state, { event });
      expect(state.event).toEqual({event: event});
    })
  })

})
