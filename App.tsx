import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import BottomNavigator from './src/views/routes/BottomNavigator';
import StackNavigator from './src/views/routes/StackNavigator';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/api/api';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
