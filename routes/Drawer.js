import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

import BerandaStack from './BerandaStack';
import ArtikelStack from './ArtikelStack';
import BelanjaStack from './BelanjaStack';
import ChatsStack from './ChatsStack';
import MilikSayaStack from './MilikSayaStack';
import PalingSeringStack from './PalingSeringStack';
import ResepNewStack from './ResepNewStack';
import RoboAdvisorStack from './RoboAdvisorStack';
import TrendingStack from './TrendingStack';

const Drawer = createDrawerNavigator();

export default function drawer() {
    return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen options={{ headerShown: false }} name="Beranda" component={BerandaStack} />
        <Drawer.Screen options={{ headerShown: false }} name="Resep New" component={ResepNewStack} />
        <Drawer.Screen options={{ headerShown: false }} name="Paling Sering" component={PalingSeringStack} />
        <Drawer.Screen options={{ headerShown: false }} name="Trending" component={TrendingStack} />
        <Drawer.Screen options={{ headerShown: false }} name="Robo Advisor" component={RoboAdvisorStack} />
        <Drawer.Screen options={{ headerShown: false }} name="Milik Saya" component={MilikSayaStack} />
        <Drawer.Screen options={{ headerShown: false }} name="Artikel" component={ArtikelStack} />
        <Drawer.Screen options={{ headerShown: false }} name="Belanja" component={BelanjaStack} />
        <Drawer.Screen options={{ headerShown: false }} name="Chats" component={ChatsStack} />
      </Drawer.Navigator>
    </NavigationContainer>
    )
}