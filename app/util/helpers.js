// Redux wiring
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

// Centrally dispatch actions across app
export const mapDispatchToPropsHelper = dispatch => bindActionCreators(ActionCreators, dispatch);

// Elminates the need for having switch statements for each reducer
export const createReducer = (initialState, handlers) => function reducer (state = initialState, action) {
  return handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state;
};

export const addToArray = (state = [], action) => [...state, action.payload];
export const removeFromArray = (state = [], action) => [
  ...state.slice(0, action.payload),
  ...state.slice(action.payload + 1)
];
export const update = (state, mutations) => Object.assign({}, state, mutations);

export const timestamp = options => {
  const format = options || { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date();

  return today.toLocaleDateString('en-US', format);
};
