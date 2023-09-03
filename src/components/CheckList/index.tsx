import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  WingBlank,
  View,
  Card,
  WhiteSpace,
  Button,
  Flex,
  List,
} from '@ant-design/react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme, globalStyles} from '../../styles/global';
import {Money} from '../Money';

interface CheckListProps {
  title: String;
  data: {
    id: Number;
    amount: Number;
    amountType: 1 | 2;
    typeName: String;
    icon: String;
    created: String;
  }[];
}

export const CheckList = (props: CheckListProps) => {
  const styles = StyleSheet.create({
    text: {
      color: '#fff',
    },
    listIcon: {
      backgroundColor: theme.brand_primary,
      width: 32,
      height: 32,
      borderRadius: theme.radius_lg,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
  });

  return (
    <View>
      <List
        renderHeader={
          <View style={{marginBottom: 8}}>
            <Text>{props.title}</Text>
          </View>
        }>
        {props.data.map(item => {
          return (
            <List.Item key={item.id}>
              <View
                style={{
                  ...globalStyles.mtXs,
                  ...globalStyles.mbXs,
                  ...globalStyles.flexSpace,
                  ...globalStyles.alignCenter,
                }}>
                <View
                  style={{
                    ...globalStyles.mtXs,
                    ...globalStyles.mbXs,
                    ...globalStyles.flexStart,
                    ...globalStyles.alignCenter,
                  }}>
                  <View style={styles.listIcon}>
                    <Ionicons name={item.icon} size={18} color="#fff" />
                  </View>
                  <View>
                    <Text style={{...globalStyles.textColorDefault}}>
                      {item.typeName}
                    </Text>
                    <Text>{item.created}</Text>
                  </View>
                </View>
                <View>
                  {item.amountType === 1 ? (
                    <Money
                      color={theme.brand_error}
                      size="small"
                      money={item.amount}></Money>
                  ) : (
                    <Money
                      color={theme.brand_success}
                      size="small"
                      money={-item.amount}></Money>
                  )}
                </View>
              </View>
            </List.Item>
          );
        })}
      </List>
    </View>
  );
};
