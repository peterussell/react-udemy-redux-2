import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      /* Remember, we must always return *new* state from a Reducer, we can't
         mutate existing state and then return that.

         The '...' syntax means expand the array, so in this case we're saying
         'create a new array, include the new piece of data, then expand the
         existing state and add each entry to the new array'. */
      return [ action.payload.data, ...state ];
  }
  return state;
}
