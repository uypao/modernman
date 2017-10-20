import { StackNavigator } from 'react-navigation';
import Welcome from '../../components/welcome/WelcomePage';
import Login from '../../components/login/LoginPage';
import Dashboard from '../../components/dashboard/DashboardPage';
import Booking from '../../components/booking/BookingPage';


const routeConfiguration = {
  Dashboard: { screen: Dashboard },
  Login: { screen: Login },
  Welcome: { screen: Welcome },
  Booking: { screen: Booking }

};

const stackNavigatorConfiguration = { headerMode: 'none'  };
export const Stack = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
