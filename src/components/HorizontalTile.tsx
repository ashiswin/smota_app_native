import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Linking,
  ImageBackground,
  Image,
} from 'react-native';
import {TileData} from '../../DummyTiles';

type Props = {
  tileData: TileData;
  navigation: any;
};

const HorizontalTile: React.FC<Props> = ({tileData, navigation}) => {
  return (
    <TouchableHighlight
      style={{borderRadius: 8, elevation: 12, marginBottom: 8}}
      onPress={() =>
        tileData.isLink
          ? navigation.navigate('WebpageScreen', {
              uri: tileData.target,
              title: tileData.title,
            })
          : navigation.navigate(tileData.target)
      }>
      <View
        style={{
          flexDirection: 'row',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          backgroundColor: 'white',
        }}>
        <Image
          source={typeof(tileData.background) === 'string' ? {uri: tileData.background} : tileData.background}
          style={styles.image}
          resizeMode="cover"
          borderTopLeftRadius={8}
          borderBottomLeftRadius={8}
        />
        <View
          style={{
              flex: 1,
            flexDirection: 'column',
            marginLeft: 8,
            marginTop: -4,
            justifyContent: 'center',
          }}>
          <Text style={styles.tile_title}>{tileData.title}</Text>
          {
              tileData.description === undefined
                ? null
                : <Text>{tileData.description}</Text>
          }
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 76,
    height: 76,
  },
  tile_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HorizontalTile;
