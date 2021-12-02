import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../shared/Header'
import PalingSering from '../pages/PalingSering';

const Stack = createNativeStackNavigator();
export default function PalingSeringStack() {
    return (

            <Stack.Navigator>
                <Stack.Screen
                    name="palingsering"
                    component={PalingSering}
                    options={({navigation}) =>  {
                        return{
                            headerTitle: () => <Header navigation={navigation} title='Paling Sering'/>,
                        }
                    }}
                />
            </Stack.Navigator>

    );
}