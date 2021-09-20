import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeView} from './src/screens/WelcomeView';
import {AuthProvider} from './src/contexts/AuthProvider';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome View"
            component={WelcomeView}
            options={{title: 'Task Tracker'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

// eslint-disable-next-line no-undef
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

export default App;
