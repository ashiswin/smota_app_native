import React from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    ImageBackground,
} from 'react-native';
import { TileData } from '../../DummyTiles';

type Props = {
    tileData: TileData,
    navigation: any,
}

const Tile: React.FC<Props> = ({ tileData, navigation }) => {
    return (
        <View style={{ flexDirection: "column" }}>
            <TouchableHighlight style={{ borderRadius: 8 }} onPress={() => navigation.navigate(tileData.title, {headerImage: tileData.background})}>
                <ImageBackground 
                    source={{ uri: tileData.background }} 
                    style={styles.tile} 
                    imageStyle={{ borderRadius: 8 }} 
                    resizeMode="cover" />
            </TouchableHighlight>
            <Text style={{ textAlign: "center" }}>{tileData.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tile: {
        backgroundColor: 'grey',
        width: 128,
        height: 128,
        borderRadius: 8,
        alignContent: "center"
    }
});

export default Tile;