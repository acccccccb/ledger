import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View, Card, Flex} from '@ant-design/react-native';
import {DefaultLayout} from '../../layouts/DefaultLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Money} from '../Money';
import {theme, globalStyles} from '../../styles/global';

interface BoardProps {
  income: Number;
  expense: Number;
}

export const Board = (props: BoardProps) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.brand_primary,
      marginTop: 16,
      borderRadius: theme.radius_lg,
      overflow: 'hidden',
    },
    text: {
      color: theme.color_text_base_inverse,
    },
    moneyIcon: {
      backgroundColor: theme.color_text_base_inverse,
      width: 32,
      height: 32,
      borderRadius: theme.radius_lg,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <Card style={styles.card}>
      <Card.Body>
        <View>
          <View style={{padding: 16}}>
            <View
              style={{
                ...globalStyles.mbXs,
                ...globalStyles.flexStart,
                ...globalStyles.alignCenter,
              }}>
              <Text style={{...styles.text}}>总结余</Text>
              <View style={{marginLeft: 5}}>
                <Ionicons
                  color={theme.color_text_base_inverse}
                  name="chevron-down"
                />
              </View>
            </View>
            <View>
              <Money
                color={theme.color_text_base_inverse}
                size="normal"
                money={props.income - props.expense}></Money>
            </View>
            <Flex style={{...globalStyles.mt}}>
              <Flex.Item>
                <View>
                  <Flex justify="start">
                    <Flex.Item style={{flex: 1}}>
                      <View style={styles.moneyIcon}>
                        <Ionicons
                          name="trending-up"
                          size={18}
                          color={theme.brand_primary}
                        />
                      </View>
                    </Flex.Item>
                    <Flex.Item style={{flex: 3}}>
                      <Text style={{marginLeft: 4, ...styles.text}}>
                        月收入
                      </Text>
                      <Money
                        color={theme.color_text_base_inverse}
                        size="small"
                        money={props.income}></Money>
                    </Flex.Item>
                  </Flex>
                </View>
              </Flex.Item>
              <Flex.Item>
                <View>
                  <Flex justify="start">
                    <Flex.Item style={{flex: 1}}>
                      <View style={styles.moneyIcon}>
                        <Ionicons
                          name="trending-down"
                          size={18}
                          color={theme.brand_primary}
                        />
                      </View>
                    </Flex.Item>
                    <Flex.Item style={{flex: 3}}>
                      <Text style={{marginLeft: 4, ...styles.text}}>
                        月支出
                      </Text>
                      <Money
                        color={theme.color_text_base_inverse}
                        size="small"
                        money={props.expense}></Money>
                    </Flex.Item>
                  </Flex>
                </View>
              </Flex.Item>
            </Flex>
          </View>
        </View>
      </Card.Body>
    </Card>
  );
};
