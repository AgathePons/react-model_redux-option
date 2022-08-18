// == Import
import {
  DO_SOMETHING_TO_FIRST_THING,
} from '../actions/firstThingActions';
import {
  actionDoSomethingToSecondThing,
} from '../actions/secondThingActions';

const firstMiddleware = (store) => (next) => (action) => {
  /* if (action.type === DO_SOMETHING_TO_FIRST_THING) {
    const state = store.getState();
    store.dispatch(actionDoSomethingToSecondThing('Action first middleware'));
    return undefined;
  } */
  const result = next(action);
  return result;
};

export default firstMiddleware;
