import { AppRegistery } from 'react-native';
import App from './src/App';

AppRegistery.registerComponent('auth', () => App);
