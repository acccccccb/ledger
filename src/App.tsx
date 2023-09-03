/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
// import AntDesign from 'react-native-vector-icons/AntDesign';
const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  ...DefaultTheme.colors,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    primary: '#69b476',
    secondary: '#f1c40f',
    secondaryContainer: '#69b476',
    tertiary: '#a1b2c3',
  },
};
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {router} from './routers';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {globalStyles} from './styles/global';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: theme.colors.primary,
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      }}>
      {router.children.map(item => {
        return (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={{
              title: item.title,
              tabBarLabel: item.title,
              tabBarActiveTintColor: theme.colors.primary,
              tabBarIcon: ({color}) => (
                <Ionicons name={item.icon} color={color} size={26}></Ionicons>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const config = {
  animation: 'timing', // 使用'timing'动画类型
  config: {
    duration: 500, // 动画持续时间（毫秒）
  },
  from: {
    translateX: -100, // 起始位置，例如从左边界开始
  },
  to: {
    translateX: 100, // 终点位置，例如滑向右边界
  },
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator
          screenOptions={{
            presentation: 'card',
            animationTypeForReplace: 'push',
          }}>
          <Stack.Screen
            name="Entry"
            component={Tabs}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

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
