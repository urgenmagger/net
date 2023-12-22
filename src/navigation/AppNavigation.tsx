import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackList, Screens } from './types';
import { Details } from 'screens/details/Details';
import { MainScreen } from 'screens/main/MainScreen';
import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createNativeStackNavigator<RootStackList>();
const Stack = createStackNavigator<RootStackList>();

// корневой stack navigation
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen name={Screens.Main} component={MainScreen} />
          <Stack.Screen
            name={Screens.Details}
            component={Details}
            options={{ headerShown: false }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
