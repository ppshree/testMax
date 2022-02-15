import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DashBoard from './DashBoard';
import Login from './Login';

export default function App() {
  const Stack = createStackNavigator()
  return (
  <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name='Login' component={Login} />
  <Stack.Screen name='DashBoard' component={DashBoard}/>
</Stack.Navigator>
  </NavigationContainer>
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
