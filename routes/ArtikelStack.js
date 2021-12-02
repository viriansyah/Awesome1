import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Artikel from '../pages/Artikel';
import Header from '../shared/Header'
import news from '../pages/news';

const Stack = createNativeStackNavigator();

export default function ArtikelStack() {
    return (

            <Stack.Navigator>
                <Stack.Screen
                    name="artikel"
                    component={Artikel}
                    options={({navigation}) =>  {
                        return{
                            headerTitle: () => <Header navigation={navigation} title='Artikel'/>,
                        }
                    }}
                />
                <Stack.Screen
                    name="news"
                    component={news}
                    options={{ title: 'News', headerTitleAlign: 'center' }}
                />
            </Stack.Navigator>
    );
}