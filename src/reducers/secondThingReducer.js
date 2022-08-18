// == Import Actions
import {
  DO_SOMETHING_TO_SECOND_THING,
} from '../actions/secondThingActions';

// == Initial state
const InitialState = {
  title: 'second title',
  paragraph: 'second paragraph',
};

function secondThingReducer(state = InitialState, action = {}) {
  switch (action.type) {
    case DO_SOMETHING_TO_SECOND_THING:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
}

export default secondThingReducer;
