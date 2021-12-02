import * as React from 'react';
import {SafeAreaView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Chats({navigation}){
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('RoomChat')}>
            <View>
              <Text>
                Chats
              </Text>
            </View>
          </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});
