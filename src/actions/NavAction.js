import { BACK,
  TOGGLE_DRAWER,
  GO_TO_DASHBOARD,
  GO_TO_BOOKING  } from './types';

export const back = () => { return { type: BACK }; }
export const toggleDrawer = () => { return { type: TOGGLE_DRAWER }; }
export const goToWelcome = () => { return { type: GO_TO_WELCOME }; }
export const goToDashboard = () => { return { type: GO_TO_DASHBOARD }; }
export const goToBooking = () => { return { type: GO_TO_BOOKING }; }
