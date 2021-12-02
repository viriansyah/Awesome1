import React from 'react'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function VideoYT({ route, navigation }) {
const {video_url}=route.params;
    return (
    <SafeAreaView>
        <View>
            <YoutubePlayer
            height={300}
            play={false}
            videoId={video_url}
            fullscreen={false}
        />
        <Button title="Bahan yang diperlukan" onPress={() => {navigation.navigate('Detail') }} />
        </View>
    </SafeAreaView>
    )
}
