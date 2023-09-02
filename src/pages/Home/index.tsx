import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
  WingBlank,
  View,
  Card,
  WhiteSpace,
  Button,
  Flex,
  List,
} from '@ant-design/react-native';
import {DefaultLayout} from '../../layouts/DefaultLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Text} from 'react-native';

export const Home = ({navigation}) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#1677ff',
      marginTop: 16,
      borderRadius: 8,
      overflow: 'hidden',
    },
    text: {
      color: '#fff',
    },
    moneyXsSign: {
      color: '#fff',
      fontSize: 12,
      fontWeight: '500',
    },
    moneyXs: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
    },
    moneyIcon: {
      backgroundColor: '#fff',
      width: 32,
      height: 32,
      borderRadius: 16,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    listIcon: {
      backgroundColor: '#1677ff',
      width: 32,
      height: 32,
      borderRadius: 16,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
  });
  return (
    <DefaultLayout>
      <WingBlank size="lg">
        <Card style={styles.card}>
          <Card.Body>
            <View>
              <View style={{padding: 16}}>
                <View>
                  <Text style={{...styles.text}}>总结余</Text>
                </View>
                <View>
                  <Text>
                    <Text style={{fontSize: 16, ...styles.text}}>￥</Text>
                    <Text
                      style={{fontSize: 24, fontWeight: 500, ...styles.text}}>
                      0.00
                    </Text>
                  </Text>
                </View>

                <Flex style={{marginTop: 16}}>
                  <Flex.Item>
                    <View>
                      <Flex justify="start">
                        <Flex.Item style={{flex: 1}}>
                          <View style={styles.moneyIcon}>
                            <AntDesign name="plus" size={18} color="#1677ff" />
                          </View>
                        </Flex.Item>
                        <Flex.Item style={{flex: 3}}>
                          <Text style={{marginLeft: 4, ...styles.text}}>
                            月收入
                          </Text>
                          <Text>
                            <Text style={styles.moneyXsSign}>￥</Text>
                            <Text style={styles.moneyXs}>0.00</Text>
                          </Text>
                        </Flex.Item>
                      </Flex>
                    </View>
                  </Flex.Item>
                  <Flex.Item>
                    <View>
                      <Flex justify="start">
                        <Flex.Item style={{flex: 1}}>
                          <View style={styles.moneyIcon}>
                            <AntDesign name="minus" size={18} color="#1677ff" />
                          </View>
                        </Flex.Item>
                        <Flex.Item style={{flex: 3}}>
                          <Text style={{marginLeft: 4, ...styles.text}}>
                            月支出
                          </Text>
                          <Text>
                            <Text style={styles.moneyXsSign}>￥</Text>
                            <Text style={styles.moneyXs}>0.00</Text>
                          </Text>
                        </Flex.Item>
                      </Flex>
                    </View>
                  </Flex.Item>
                </Flex>
              </View>
            </View>
          </Card.Body>
        </Card>
        <View style={{marginTop: 16}}>
          <List
            renderHeader={
              <View style={{marginBottom: 8}}>
                <Text>9月2日</Text>
              </View>
            }>
            {[0, 1, 2].map(item => {
              return (
                <List.Item key={item}>
                  <Flex>
                    <View style={styles.listIcon}>
                      <Ionicons name="cart" size={18} color="#fff" />
                    </View>
                    <Flex.Item>
                      <Text>购物</Text>
                    </Flex.Item>
                    <Flex.Item>
                      <Text>198.00</Text>
                    </Flex.Item>
                  </Flex>
                </List.Item>
              );
            })}
          </List>
        </View>
        <View style={{marginTop: 16}}>
          <Button type="default">
            <AntDesign name="plus" size={18} />
          </Button>
        </View>
      </WingBlank>
      <WhiteSpace size="lg" />
    </DefaultLayout>
  );
};
