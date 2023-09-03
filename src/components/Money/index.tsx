import React from 'react';
import {ColorValue, StyleSheet, Text} from 'react-native';

interface MoneyProps {
  size: 'normal' | 'small' | 'mini';
  money: Number;
  color?: ColorValue;
  prefix?: String;
  fontWeight?:
    | 'normal'
    | '500'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}

export const Money = ({
  size = 'normal',
  money,
  color = '#000',
  fontWeight = '500',
  prefix,
}: MoneyProps) => {
  let signFontSize = 16;
  let moneyFontSize = 24;

  switch (size) {
    case 'normal':
      signFontSize = 16;
      moneyFontSize = 24;
      break;
    case 'small':
      signFontSize = 14;
      moneyFontSize = 16;
      break;
    case 'mini':
      signFontSize = 12;
      moneyFontSize = 12;
      break;
  }

  const styles = StyleSheet.create({
    sign: {
      fontSize: signFontSize,
      color,
    },
    money: {
      color,
      fontSize: moneyFontSize,
      fontWeight: fontWeight,
    },
  });

  const moneyFormat = (num: Number) => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <Text>
      <Text style={styles.sign}>{prefix}</Text>
      <Text style={styles.sign}>￥</Text>
      <Text style={styles.money}>{moneyFormat(money)}</Text>
    </Text>
  );
};
