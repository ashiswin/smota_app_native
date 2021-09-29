import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import {TileData} from '../../DummyTiles';

type Props = {
  tileData: TileData;
  navigation: any;
};

const Tile: React.FC<Props> = ({tileData, navigation}) => {
  return (
    <TouchableHighlight
      style={{borderRadius: 8, elevation: 12, marginBottom: 8}}
      onPress={() =>
        navigation.navigate(tileData.title, {headerImage: tileData.background})
      }>
      <View
        style={{
          flexDirection: 'column',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          backgroundColor: 'white',
        }}>
        <ImageBackground
          source={tileData.background}
          style={styles.tile}
          borderTopLeftRadius={8}
          borderTopRightRadius={8}
          resizeMode="cover"
        />
        <Text style={{textAlign: 'center', paddingVertical: 2}}>{tileData.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  tile: {
    backgroundColor: 'grey',
    width: 128,
    height: 128,
    borderRadius: 8,
    alignContent: 'center',
  },
});

export default Tile;
