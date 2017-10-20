import { combineReducers } from 'redux';
import { stack, drawer } from './NavReducer';

export default combineReducers({
  stack,
  drawer
});
