import React from 'react';
import {ColorValue, StyleSheet, Text} from 'react-native';

interface MoneyProps {
  size: 'normal' | 'small';
  money: Number;
  color?: ColorValue;
}

export const Money = ({size = 'normal', money, color = '#000'}: MoneyProps) => {
  let signFontSize = 16;
  let moneyFontSize = 24;

  switch (size) {
    case 'normal':
      signFontSize = 16;
      moneyFontSize = 24;
      break;
    case 'small':
      signFontSize = 12;
      moneyFontSize = 16;
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
      fontWeight: '500',
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
      <Text style={styles.sign}>￥</Text>
      <Text style={styles.money}>{moneyFormat(money)}</Text>
    </Text>
  );
};
