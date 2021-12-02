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

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function Home() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Beranda" component={Beranda} />
//       <Drawer.Screen name="Resep New" component={ResepNew} />
//       <Drawer.Screen name="Paling Sering" component={PalingSering} />
//       <Drawer.Screen name="Trending" component={Trending} />
//       <Drawer.Screen name="Robo Advisor" component={RoboAdvisor} />
//       <Drawer.Screen name="Milik Saya" component={MilikSaya} />
//       <Drawer.Screen name="Artikel" component={Artikel} />
//       <Drawer.Screen name="Belanja" component={Belanja} />
//       <Drawer.Screen name="Chats" component={Chats} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (

//     <Stack.Navigator>
//         <Stack.Screen
//             name="Home"
//             component={Home}
//             options={({navigation}) =>  {
//                 return{
//                     headerTitle: () => <Header navigation={navigation} title='Home'/>,
//                 }
//             }}
//         />
//         {/* <Stack.Screen
//             name="Detail"
//             component={halamanDetail}
//             options={{ title: 'Details' }}
//         /> */}
//     </Stack.Navigator>

// );

// }


// import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View, Image, Alert, YellowBox} from "react-native";
// import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

// export default class HomeActivity extends Component {

//   constructor(props) {
//      super(props);
//      YellowBox.ignoreWarnings([
//       'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
//     ]);
//    }

//   render() {
//     return (
//       <MenuProvider style={{ flexDirection: "column", padding: 30, backgroundColor:"black" }}>
//         <Menu onSelect={value => alert(`You Clicked : ${value}`)}>

//           <MenuTrigger>
//           <View onSelect={value => alert('You Clicked : ${value}')}>
//                <Image
//                  source={{
//                    uri:
//                      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/menu_icon.png',
//                  }}
//                  style={{width: 30, height: 30, }}
//                />
//            </View>
//           </MenuTrigger >

//           <MenuOptions>
//             <MenuOption value={"Login"}>
//               <Text style={styles.menuContent}>Login</Text>
//             </MenuOption>
//             <MenuOption value={"Register"}>
//               <Text style={styles.menuContent}>Register</Text>
//             </MenuOption>
//             <MenuOption value={"Download"}>
//               <Text style={styles.menuContent}>Download</Text>
//             </MenuOption>
//             <MenuOption value={"Logout"}>
//               <Text style={styles.menuContent}>Logout</Text>
//             </MenuOption>
//             <MenuOption value={3} disabled={true}>
//               <Text style={styles.menuContent}>Disabled Menu</Text>
//             </MenuOption>
//           </MenuOptions>

//         </Menu>
//       </MenuProvider>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     headerText: {
//     fontSize: 20,
//     margin: 10,
//     fontWeight: "bold"
//   },
//   menuContent: {
//     color: "#000",
//     fontWeight: "bold",
//     padding: 2,
//     fontSize: 20
//   }
// });