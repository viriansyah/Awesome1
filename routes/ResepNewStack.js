import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../shared/Header'
import ResepNew from '../pages/ResepNew';
import RecipeDetail from '../pages/RecipeDetail';
import VideoYT from '../pages/VideoYT';
import RecipeStep from '../pages/RecipeStep';

const Stack = createNativeStackNavigator();
export default function ResepNewStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name="resepnew"
                    component={ResepNew}
                    options={({navigation}) =>  {
                        return{
                            headerTitle: () => <Header navigation={navigation} title='Resep New'/>,
                        }
                    }}
                />
                <Stack.Screen
                    name="Detail"
                    component={RecipeDetail}
                    options={{ title: 'Recipe Detail', headerTitleAlign: 'center' }}
                />
                <Stack.Screen
                    name="Video"
                    component={VideoYT}
                    options={{ title: 'Video', headerTitleAlign: 'center' }}
                />
                <Stack.Screen
                    name="Step"
                    component={RecipeStep}
                    options={{ title: 'Recipe Step', headerTitleAlign: 'center' }}
                />
            </Stack.Navigator>
    );
}