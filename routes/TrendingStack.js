import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Trending from '../pages/Trending';
import Header from '../shared/Header'

const Stack = createNativeStackNavigator();
export default function TrendingStack() {
    return (

            <Stack.Navigator>
                <Stack.Screen
                    name="trending"
                    component={Trending}
                    options={({navigation}) =>  {
                        return{
                            headerTitle: () => <Header navigation={navigation} title='Trending'/>,
                        }
                    }}
                />
            </Stack.Navigator>

    );
}