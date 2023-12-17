// App.js
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native'
import store from './src/store';
import AddAgentProfile from './src/screens/addAgentProfile';
import AddAgent from './src/screens/addAgent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import 'react-native-gesture-handler';
import AgentList from './src/screens/agentList';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AddAgent" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="AddAgent" component={AddAgent} />
          <Stack.Screen name="AddAgentProfile" component={AddAgentProfile} />
          <Stack.Screen name="AgentList" component={AgentList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;