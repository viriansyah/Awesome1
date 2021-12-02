import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../shared/Header'
import RoboAdvisor from '../pages/RoboAdvisor';

const Stack = createNativeStackNavigator();
export default function RoboAdvisorStack() {
    return (

            <Stack.Navigator>
                <Stack.Screen
                    name="roboadvisor"
                    component={RoboAdvisor}
                    options={({navigation}) =>  {
                        return{
                            headerTitle: () => <Header navigation={navigation} title='Robo Advisor'/>,
                        }
                    }}
                />
            </Stack.Navigator>

    );
}