// services/api.js
import axios from 'axios';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const API = axios.create({
  baseURL: 'https://mock.apidog.com/m1/912109-894454-default',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;

