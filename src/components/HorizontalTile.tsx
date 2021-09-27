import React from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    Linking,
} from 'react-native';
import { TileData } from '../../DummyTiles';

type Props = {
    tileData: TileData,
    navigation: any,
}

const HorizontalTile: React.FC<Props> = ({ tileData, navigation }) => {
    return (
        <View style={{ marginVertical: 4 }}>
            <TouchableHighlight style={{borderRadius: 8}} onPress={() => tileData.isLink ? navigation.navigate('WebpageScreen', {uri: tileData.target, title: tileData.title}) : navigation.navigate(tileData.target)}>
                <View style={styles.tile}>
                    <Text style={styles.tile_title}>{tileData.title}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    tile: {
        backgroundColor: 'black',
        width: '100%',
        height: 64,
        borderRadius: 8,
        alignContent: "center",
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    tile_title: {
        color: "white",
        fontSize: 24
    }
});

export default HorizontalTile;