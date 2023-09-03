import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WhiteSpace} from '@ant-design/react-native';
import {Card, Text} from 'react-native-paper';
// import AntDesign from 'react-native-vector-icons/AntDesign';
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
    <View>
      <WhiteSpace size="lg" />
      <Card style={styles.card}>
        <Card.Content>
          <View>
            <View style={{padding: 16}}>
              <View
                style={{
                  ...globalStyles.mbXs,
                  ...globalStyles.flexStart,
                  ...globalStyles.alignCenter,
                }}>
                <Text style={{...styles.text}}>月结余</Text>
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
              <View style={{...globalStyles.flexCenter, ...globalStyles.mtXs}}>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      ...globalStyles.flexCenter,
                      ...globalStyles.alignCenter,
                    }}>
                    <View style={{flex: 1}}>
                      <View style={styles.moneyIcon}>
                        <Ionicons
                          name="trending-up"
                          size={18}
                          color={theme.brand_primary}
                        />
                      </View>
                    </View>
                    <View style={{flex: 3}}>
                      <Text style={{marginLeft: 4, ...styles.text}}>
                        月收入
                      </Text>
                      <Money
                        color={theme.color_text_base_inverse}
                        size="small"
                        money={props.income}></Money>
                    </View>
                  </View>
                </View>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      ...globalStyles.flexCenter,
                      ...globalStyles.alignCenter,
                    }}>
                    <View style={{flex: 1}}>
                      <View style={styles.moneyIcon}>
                        <Ionicons
                          name="trending-down"
                          size={18}
                          color={theme.brand_primary}
                        />
                      </View>
                    </View>
                    <View style={{flex: 3}}>
                      <Text style={{marginLeft: 4, ...styles.text}}>
                        月支出
                      </Text>
                      <Money
                        color={theme.color_text_base_inverse}
                        size="small"
                        money={props.expense}></Money>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
      {/* <Card style={styles.card}>
        <Card.Body>
          
        </Card.Body>
      </Card> */}
    </View>
  );
};
