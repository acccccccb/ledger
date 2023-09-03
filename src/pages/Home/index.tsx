import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {WingBlank, View, WhiteSpace} from '@ant-design/react-native';
import {DefaultLayout} from '../../layouts/DefaultLayout';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-paper';
import {Board} from '../../components/Board';
import {CheckList} from '../../components/CheckList';
import {theme, globalStyles} from '../../styles/global';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {router} from '../../routers';

const Stack = createNativeStackNavigator();

export const HomeStackScreen = ({navigation}) => {
  const styles = StyleSheet.create({
    text: {
      color: theme.color_text_base_inverse,
    },
    listIcon: {
      backgroundColor: theme.brand_primary,
      width: 32,
      height: 32,
      borderRadius: 16,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
  });

  const listData = [
    {
      id: 1,
      icon: 'ticket',
      typeName: '彩票中奖',
      amount: 5000000,
      amountType: 1,
      created: '13:18',
    },
    {
      id: 2,
      icon: 'fast-food',
      typeName: '炸鸡啤酒',
      amount: 30,
      amountType: 2,
      created: '13:18',
    },
    {
      id: 3,
      icon: 'shirt',
      typeName: '短袖衬衫',
      amount: 50,
      amountType: 2,
      created: '13:18',
    },
  ];

  return (
    <DefaultLayout>
      <WingBlank size="lg">
        <Board income={9358} expense={3831}></Board>
        <WhiteSpace size="lg" />
        <View>
          <Button
            icon={() => <Ionicons name="save" size={16} color="#fff" />}
            mode="contained"
            onPress={() => {
              navigation.navigate('AddRecord');
            }}>
            添加记录
          </Button>
        </View>
        {[1, 2, 3, 4, 5].map(item => {
          return (
            <View key={item}>
              <WhiteSpace size="lg" />
              <CheckList title="2023/9/2" data={listData}></CheckList>
            </View>
          );
        })}
      </WingBlank>
      <WhiteSpace size="lg" />
    </DefaultLayout>
  );
};

export const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={HomeStackScreen}
        options={{
          title: router.children[0].title,
          headerShown: false,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: theme.brand_primary,
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
        }}
      />
      {router.children.map(item => {
        if (Array.isArray(item.children)) {
          return item.children.map(childItem => {
            return (
              <Stack.Screen
                name={childItem.name}
                component={childItem.component}
                options={{
                  title: childItem.title,
                  headerShown: true,
                  headerStyle: {
                    backgroundColor: '#fff',
                  },
                  headerTintColor: theme.brand_primary,
                  headerTitleStyle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                  },
                }}
              />
            );
          });
        } else {
          return null;
        }
      })}
    </Stack.Navigator>
  );
};
