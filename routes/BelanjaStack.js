import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../shared/Header'
import Belanja from '../pages/Belanja';

const Stack = createNativeStackNavigator();
export default function BelanjaStack() {
    return (

            <Stack.Navigator>
                <Stack.Screen
                    name="belanja"
                    component={Belanja}
                    options={({navigation}) =>  {
                        return{
                            headerTitle: () => <Header navigation={navigation} title='Belanja'/>,
                        }
                    }}
                />
            </Stack.Navigator>

    );
}