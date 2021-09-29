import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    useColorScheme,
    View,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParamList';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

type Props = {
    route: RouteProp<RootStackParamList, 'WebpageScreen'>,
}

const WebpageScreen: React.FC<Props> = ({ route }) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'WebpageScreen'>>();
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ width: '100%', flexDirection: 'row', backgroundColor: 'white', height: 48, alignItems: 'center' }}>
                <TouchableWithoutFeedback
                    style={{ /* Put your style here */ }}
                    onPress={() => navigation.goBack()} >
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 48, alignItems: 'center', paddingHorizontal: 8 }}>
                        <Icon name="md-close-outline" size={24} color="black" />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={{ alignSelf: 'center' }}>{route.params.title}</Text>
            </View>
            <WebView
                source={{ uri: route.params.uri }}
            />
        </View>);
}

export default WebpageScreen;