// == Import
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import firstThingReducer from '../reducers/firstThingReducer';
import secondThingReducer from '../reducers/secondThingReducer';
import firstMiddleware from '../middlewares/firstMiddleware';
import secondMiddleware from '../middlewares/secondMiddleware';

const rootReducer = combineReducers({
  firstThing: firstThingReducer,
  secondThing: secondThingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers(applyMiddleware(
  firstMiddleware,
  secondMiddleware,
));

const store = createStore(
  rootReducer,
  middlewares,
);

export default store;
