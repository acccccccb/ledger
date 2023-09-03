/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import theme from './styles/theme';
import * as React from 'react';
import {IconFill, IconOutline} from '@ant-design/icons-react-native';
import {Provider, Button, TabBar, Icon} from '@ant-design/react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
import {globalStyles} from './styles/global';
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider theme={theme}>
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.fill_base,
            },
            headerTintColor: theme.brand_primary,
            headerTitleStyle: {
              fontSize: theme.font_size_caption,
              fontWeight: 'bold',
            },
            tabBarStyle: {
              backgroundColor: theme.fill_base,
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
                  tabBarActiveTintColor: theme.brand_primary,
                  tabBarIcon: ({color}) => (
                    <AntDesign
                      name={item.icon}
                      color={color}
                      size={26}></AntDesign>
                  ),
                }}
              />
            );
          })}
        </Tab.Navigator>
      </Provider>
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
