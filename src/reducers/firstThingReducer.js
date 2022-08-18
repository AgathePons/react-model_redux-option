// == Import Actions
import {
  DO_SOMETHING_TO_FIRST_THING,
} from '../actions/firstThingActions';

// == Initial state
const InitialState = {
  title: 'first title',
  paragraph: 'first paragraph',
};

function firstThingReducer(state = InitialState, action = {}) {
  switch (action.type) {
    case DO_SOMETHING_TO_FIRST_THING:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
}

export default firstThingReducer;
