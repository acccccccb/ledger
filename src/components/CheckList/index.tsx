import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
    listStyle: {
      backgroundColor: '#fff',
    },
    listIcon: {
      backgroundColor: theme.brand_primary,
      width: 32,
      height: 32,
      borderRadius: theme.radius_lg,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View>
      <View style={{overflow: 'hidden'}}>
        <View style={{marginBottom: 8, ...globalStyles.flexSpace}}>
          <View>
            <Text style={{color: theme.color_text_secondary}}>
              {props.title}
            </Text>
          </View>
          <View
            style={{
              ...globalStyles.flexEnd,
              ...globalStyles.alignCenter,
            }}>
            <View style={{...globalStyles.mrXs}}>
              <Money
                fontWeight="normal"
                prefix="收入"
                size="mini"
                color={theme.color_text_secondary}
                money={199}></Money>
            </View>
            <View>
              <Money
                fontWeight="normal"
                prefix="支出"
                size="mini"
                color={theme.color_text_secondary}
                money={199}></Money>
            </View>
          </View>
        </View>
        {props.data.map(item => {
          return (
            <View
              style={{
                ...styles.listStyle,
                ...globalStyles.pl,
                ...globalStyles.pr,
                ...globalStyles.mbXs,
                ...globalStyles.borderRadius,
              }}
              key={item.id}>
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
                  <View style={{...styles.listIcon, ...globalStyles.mr}}>
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
            </View>
          );
        })}
      </View>
    </View>
  );
};
