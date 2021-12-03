import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Modal, Button } from 'react-native'
// import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  
  export default function header({ navigation, title }) {
      return (
          <View style={styles.header}>
              <MaterialIcons name="menu" size={28} onPress={() => navigation.openDrawer()} style={styles.icon}/>
              <View>
                  <Text style={styles.headerText}>{ title }</Text>
              </View>
                  
          </View>
      )
  }
  
  const styles = StyleSheet.create({
      header: {
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          //alignItems: 'center',
          justifyContent: 'center',
      },
      headerText: {
          fontWeight: 'bold',
          fontSize: 20,
          color: '#333',
          letterSpacing: 1,
      },
      icon: {
          position: 'absolute',
          left: 13
      },
      icon2: {
          position: 'absolute',
          right: 23
      }
  });