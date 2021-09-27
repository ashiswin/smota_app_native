/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import type { ReactNode } from 'react';

import TileScreen from './src/screens/TileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DummyTiles } from './DummyTiles';
import WebpageScreen from './src/screens/WebpageScreen';

const Stack = createStackNavigator();

const App: () => ReactNode = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="Home"
        >
          {props => <TileScreen {...props} title={undefined} />}
        </Stack.Screen>
        {
          Object.keys(DummyTiles).map(title => title !== "Home" ? <Stack.Screen
            name={title}
          >
            {props => <TileScreen {...props} title={title} />}
          </Stack.Screen> : null)
        }
        <Stack.Screen options={{presentation: 'modal'}} name="WebpageScreen" component={WebpageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
