import React from 'react'
// import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context'
// import Animated from 'react-native-reanimated';
import header from './shared/Header';

import Beranda from './pages/Beranda'
import Artikel from './pages/Artikel'
import Belanja from './pages/Belanja'
import Chats from './pages/Chats'
import { createStackNavigator } from '@react-navigation/stack';
import ResepNew from './pages/ResepNew';
import PalingSering from './pages/PalingSering';
import Trending from './pages/Trending';
import RoboAdvisor from './pages/RoboAdvisor';
import MilikSaya from './pages/MilikSaya';

import Router from './routes/Drawer'

export default function App(){
  return(
    <Router/>
  )
}