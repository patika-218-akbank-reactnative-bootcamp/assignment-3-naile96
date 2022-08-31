import * as React from 'react';
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Ionicons from 'react-native-vector-icons/Ionicons';
import Welcome from './src/pages/Welcome';
import MemberSign from './src/pages/MemberSign';
import MainPage from './src/pages/main/MainPage';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Ionicons name="mic-outline" />
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="WelcomeScreen" component={Welcome} />
            <Stack.Screen name="MemberSignScreen" component={MemberSign} />
            <Stack.Screen name="MainScreen" component={MainPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
