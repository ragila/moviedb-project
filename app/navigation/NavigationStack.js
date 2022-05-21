import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Feather } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Feather';
import { Host } from 'react-native-portalize';

import {
  MoviesStackScreen,
  SearchStackScreen,
  ConfigurationStackScreen,
  WatchlistStackScreen
} from './screens';
import { ROUTES, TABS } from './routes';

import { darkBlue, white, pink, blue } from '../utils/colors';

enableScreens();

const defaultNavigationOptions = {
  headerTintColor: darkBlue,
  headerStyle: {
    backgroundColor: white
  },
  
};

const Tab = createBottomTabNavigator();
const TabsConfig = {
  tabBarOptions: {
    activeTintColor: pink,
    inactiveTintColor: blue,
    labelStyle: {
      margin: 0,
      padding: 1
    },
    style: {
      backgroundColor: white
    }
  }
};

const AppNavigator = () => (
  <NavigationContainer>
    <Host>
      <Tab.Navigator initialRouteName={ROUTES.MOVIE_LIST} {...TabsConfig}>
        <Tab.Screen
          name={TABS.HOME}
          component={MoviesStackScreen}
          options={{
            ...defaultNavigationOptions,
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={20} color={color} />
            )
          }}
        />
        <Tab.Screen
          name={TABS.SEARCH}
          component={SearchStackScreen}
          options={{
            ...defaultNavigationOptions,
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon name="search" size={20} color={color} />
            )
          }}
        />
        <Tab.Screen
          name={'Watchlist'}
          component={WatchlistStackScreen}
          options={{
            ...defaultNavigationOptions,
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon name="star" size={20} color={color} />
            )
          }}
        />
        <Tab.Screen
          name={TABS.CONFIGURATION}
          component={ConfigurationStackScreen}
          options={{
            ...defaultNavigationOptions,
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon name="settings" size={20} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </Host>
  </NavigationContainer>
);

export default AppNavigator;
