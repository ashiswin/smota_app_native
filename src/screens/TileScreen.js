import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Tile from '../components/Tile';
import {DummyTiles} from '../../DummyTiles';
import HorizontalTile from '../components/HorizontalTile';
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {SliderBox} from 'react-native-image-slider-box';

const TileScreen = ({navigation, title, route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
    height: '100%',
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 4,
          }}
          key={index}>
          <Tile
            tileData={pair[0]}
            key={pair[0].title}
            navigation={navigation}
          />
          {pair.length > 1 ? (
            <Tile
              tileData={pair[1]}
              key={pair[1].title}
              navigation={navigation}
            />
          ) : null}
        </View>
      );
    });
  } else {
    tiles = DummyTiles[title].map(tile => {
      return (
        <HorizontalTile
          tileData={tile}
          key={tile.title}
          navigation={navigation}
        />
      );
    });
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={{flexDirection: 'column', flexGrow: 1, height: '100%'}}>
          <View style={{width: '100%', height: 196, backgroundColor: 'black'}}>
            {isHome ? (
              <SliderBox
                images={[
                  require('../../assets/images/smota-jumbotron.jpg'),
                  require('../../assets/images/smota-jumbotron-2.jpg'),
                  require('../../assets/images/smota-jumbotron-3.jpg'),
                ]}
                autoplay={true}
                circleLoop={true}
              />
            ) : (
              <ImageBackground
                source={route.params.headerImage}
                style={{width: '100%', height: 196, backgroundColor: 'black'}}
                imageStyle={{opacity: 0.6}}
                resizeMode="cover">
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                  <View
                    style={{
                      flexDirection: 'row',
                      height: 48,
                      alignItems: 'center',
                      paddingHorizontal: 16,
                    }}>
                    <Icon name="md-arrow-back" size={24} color="white" />
                  </View>
                </TouchableWithoutFeedback>
              </ImageBackground>
            )}
            <Text
              style={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                fontWeight: 'bold',
                color: 'white',
                fontSize: 24,
              }}>
              {title}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
              paddingVertical: 16,
              paddingHorizontal: 16,
            }}>
            {tiles}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
