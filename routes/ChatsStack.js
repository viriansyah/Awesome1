import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../shared/Header'
import Chats from '../pages/Chats';
import RoomChat from '../pages/RoomChat';

const Stack = createNativeStackNavigator();
export default function ChatsStack() {
    return (

            <Stack.Navigator>
                <Stack.Screen
                    name="chats"
                    component={Chats}
                    options={({navigation}) =>  {
                        return{
                            headerTitle: () => <Header navigation={navigation} title='Chats'/>,
                        }
                    }}
                />
                <Stack.Screen
                    name="RoomChat"
                    component={RoomChat}
                    options={{ title: 'Chat', headerTitleAlign: 'center' }}
                />
            </Stack.Navigator>

    );
}