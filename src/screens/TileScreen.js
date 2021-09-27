import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import Tile from '../components/Tile';
import { DummyTiles } from '../../DummyTiles';
import HorizontalTile from '../components/HorizontalTile';

const TileScreen = ({ navigation, title }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        height: '100%'
    };
    const isHome = title === undefined;

    var tiles = [];
    if (isHome) {
        let linkPairs = [];
        for (var i = 0; i < DummyTiles['Home'].length; i += 2) {
            linkPairs.push(DummyTiles['Home'].slice(i, i + 2));
        }

        tiles = linkPairs.map((pair, index) => {
            return (
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginBottom: 4 }} key={index}>
                    <Tile tileData={pair[0]} key={pair[0].title} navigation={navigation} />
                    {
                        pair.length > 1
                            ? <Tile tileData={pair[1]} key={pair[1].title} navigation={navigation} />
                            : null
                    }
                </View>
            );
        });
    } else {
        tiles = DummyTiles[title].map((tile) => {
            return (
                <HorizontalTile tileData={tile} key={tile.title} navigation={navigation} />
            );
        });
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View style={{ flexDirection: 'column', flexGrow: 1, height: '100%' }}>
                    <View style={{ width: '100%', height: 196, backgroundColor: 'black' }}>
                        <Text style={{ position: 'absolute', bottom: 16, left: 16, fontWeight: 'bold', color: 'white', fontSize: 24 }}>{title}</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: isDarkMode ? Colors.black : Colors.white,
                            paddingVertical: 8,
                            paddingHorizontal: 16
                        }}>
                        {tiles}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
export default TileScreen;