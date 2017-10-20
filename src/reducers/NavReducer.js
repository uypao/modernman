import { NavigationActions } from 'react-navigation';
import { Stack } from '../router/stack/StackConfig';
import { Drawer } from '../router/drawer/DrawerConfig';
import { BACK,
  TOGGLE_DRAWER,
  GO_TO_WELCOME,
  GO_TO_DASHBOARD,
  GO_TO_BOOKING } from '../actions/types';

  export function stack(state, action) {
    let routeName;

    switch (action.type) {
      case BACK: {
        const navigationAction = NavigationActions.back({});
        return Stack.router.getStateForAction(navigationAction, state);
      }
      case GO_TO_WELCOME: { routeName = 'Welcome'; break; }
      case GO_TO_DASHBOARD: { routeName = 'Dashboard'; break; }
      case GO_TO_BOOKING: { routeName = 'Booking'; break; }
      default: return Stack.router.getStateForAction(action, state);
    }

    {/* if we get far to this code, we return the routename provided  */}
    const navigationAction = NavigationActions.navigate({
      routeName,
      params: { ...action },
    });

    return Stack.router.getStateForAction(navigationAction, state);
  }

  const initialNavState = Drawer.router.getStateForAction(
    Drawer.router.getActionForPathAndParams('DrawerClose'));

  export function drawer(state = initialNavState, action) {
    switch (action.type) {
      case TOGGLE_DRAWER: {
        const navigationAction = NavigationActions.navigate({
          routeName: state.routes[state.index].routeName === 'DrawerOpen' ? 'DrawerClose' : 'DrawerOpen',
        });
        return Drawer.router.getStateForAction(navigationAction, state);
      }
      default:
        return Drawer.router.getStateForAction(action, state) || state;
    }
  }
