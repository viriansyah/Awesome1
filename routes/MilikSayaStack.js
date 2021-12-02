import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../shared/Header'
import MilikSaya from '../pages/MilikSaya';

const Stack = createNativeStackNavigator();
export default function MilikSayaStack() {
    return (

            <Stack.Navigator>
                <Stack.Screen
                    name="miliksaya"
                    component={MilikSaya}
                    options={({navigation}) =>  {
                        return{
                            headerTitle: () => <Header navigation={navigation} title='Milik Saya'/>,
                        }
                    }}
                />
            </Stack.Navigator>

    );
}