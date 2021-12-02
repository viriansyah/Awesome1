import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Beranda from '../pages/Beranda';
import Header from '../shared/Header'

const Stack = createNativeStackNavigator();
export default function BerandaStack() {
    return (

            <Stack.Navigator>
                <Stack.Screen
                    name="beranda"
                    component={Beranda}
                    options={({navigation}) =>  {
                        return{
                            headerTitle: () => <Header navigation={navigation} title='Beranda'/>,
                        }
                    }}
                />
            </Stack.Navigator>

    );
}