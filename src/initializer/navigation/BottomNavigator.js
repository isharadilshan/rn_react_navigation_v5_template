import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeView from './../../modules/HomeView';
import MessageView from './../../modules/MessageView';
import NotificationView from './../../modules/NotificationView';
import SettingsView from './../../modules/SettingsView';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Messages" component={MessageView} />
      <Tab.Screen name="Notifications" component={NotificationView} />
      <Tab.Screen name="Settings" component={SettingsView} />
    </Tab.Navigator>
  );
};