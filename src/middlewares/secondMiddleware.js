// == Import
import {
  DO_SOMETHING_TO_SECOND_THING,
} from '../actions/secondThingActions';
import {
  actionDoSomethingToFirstThing,
} from '../actions/firstThingActions';

const secondMiddleware = (store) => (next) => (action) => {
  /* if (action.type === DO_SOMETHING_TO_SECOND_THING) {
    const state = store.getState();
    store.dispatch(actionDoSomethingToFirstThing('Action second middleware'));
    return undefined;
  } */
  const result = next(action);
  return result;
};

export default secondMiddleware;
