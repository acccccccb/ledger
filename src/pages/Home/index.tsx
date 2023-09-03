import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  WingBlank,
  View,
  WhiteSpace,
  Button,
  Flex,
  List,
} from '@ant-design/react-native';
import {DefaultLayout} from '../../layouts/DefaultLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Board} from '../../components/Board';
import {Money} from '../../components/Money';
import {CheckList} from '../../components/CheckList';
import {theme, globalColor, globalStyles} from '../../styles/global';

export const Home = ({navigation}) => {
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
      created: '2023-09-03 13:18',
    },
    {
      id: 2,
      icon: 'fast-food',
      typeName: '炸鸡啤酒',
      amount: 30,
      amountType: 2,
      created: '2023-09-03 13:18',
    },
    {
      id: 3,
      icon: 'shirt',
      typeName: '短袖衬衫',
      amount: 50,
      amountType: 2,
      created: '2023-09-03 13:18',
    },
  ];

  return (
    <DefaultLayout>
      <WingBlank size="lg">
        <Board income={9358} expense={3831}></Board>
        <View style={{marginTop: 16}}>
          <Button
            type="primary"
            activeStyle={{
              backgroundColor: theme.brand_primary_tap,
            }}>
            <Text
              style={{
                color: theme.color_text_base_inverse,
              }}>
              <AntDesign name="plus" size={14} />
              添加
            </Text>
          </Button>
        </View>
        {[1, 2, 3, 4, 5].map(item => {
          return (
            <View key={item} style={{...globalStyles.mt}}>
              <CheckList title="9月2日" data={listData}></CheckList>
            </View>
          );
        })}
      </WingBlank>
      <WhiteSpace size="lg" />
    </DefaultLayout>
  );
};
