import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Button,
  TextInput,
  RadioButton,
  SegmentedButtons,
  List,
} from 'react-native-paper';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DefaultLayout} from '../../../layouts/DefaultLayout';
import {globalStyles, theme} from '../../../styles/global';
import {dateFormatter} from '../../../utils';
export const AddRecord = ({navigation}) => {
  const [typeExpanded, setTypeExpanded] = React.useState(false);
  const [accountExpanded, setAccountExpanded] = React.useState(false);
  const [typeList, setTypeList] = React.useState([
    {
      id: 1,
      name: '餐饮',
      icon: 'fast-food',
    },
    {
      id: 2,
      name: '彩票',
      icon: 'ticket',
    },
  ]);
  const [accountList, setAccountList] = React.useState([
    {
      id: 1,
      name: '微信钱包',
      icon: 'logo-wechat',
    },
    {
      id: 2,
      name: '支付宝',
      icon: 'logo-alipay',
    },
    {
      id: 3,
      name: '现金',
      icon: 'cash',
    },
  ]);
  const [amountType, setAmountType] = React.useState(1);
  const [account, setAccount] = React.useState({
    id: 0,
    name: '',
    icon: '',
  });
  const [type, setType] = React.useState({
    id: 0,
    name: '',
    icon: '',
  });

  const [date, setDate] = React.useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <DefaultLayout>
      <View style={{...globalStyles.margin}}>
        <SegmentedButtons
          style={{...globalStyles.mt}}
          value={amountType}
          onValueChange={value => setAmountType(value)}
          buttons={[
            {
              value: 1,
              label: (
                <Text
                  style={{
                    color: amountType === 2 ? theme.brand_primary : '#fff',
                  }}>
                  <Ionicons
                    name="remove"
                    color={amountType === 2 ? theme.brand_primary : '#fff'}
                  />{' '}
                  支出
                </Text>
              ),
            },
            {
              value: 2,
              label: (
                <Text
                  style={{
                    color: amountType === 1 ? theme.brand_primary : '#fff',
                  }}>
                  <Ionicons
                    name="add"
                    color={amountType === 1 ? theme.brand_primary : '#fff'}
                  />
                  收入
                </Text>
              ),
            },
          ]}
        />
        <TextInput
          style={{...globalStyles.mt}}
          mode="outlined"
          label="消费金额"
          placeholder="0.00"
          keyboardType="numeric"
          right={<TextInput.Affix text="元" />}
        />
        <List.Section title="消费类型">
          <List.Accordion
            title={type.name || '选择消费类型'}
            expanded={typeExpanded}
            onPress={() => setTypeExpanded(!typeExpanded)}
            right={props => (
              <View
                style={{
                  ...globalStyles.alignCenter,
                  ...globalStyles.flexCenter,
                  ...globalStyles.ml,
                }}>
                <Ionicons
                  name={type.icon || 'chevron-down'}
                  size={24}
                  color={theme.brand_primary}
                />
              </View>
            )}>
            {typeList.map(item => {
              return (
                <List.Item
                  key={item.id}
                  style={{
                    backgroundColor: '#fff',
                    ...globalStyles.pl,
                    ...globalStyles.pr,
                  }}
                  title={item.name}
                  right={props => (
                    <View
                      style={{
                        ...globalStyles.alignCenter,
                        ...globalStyles.flexCenter,
                      }}>
                      <Ionicons
                        name={item.icon}
                        size={24}
                        color={theme.brand_primary}
                      />
                    </View>
                  )}
                  onPress={() => {
                    console.log('onPress', item);
                    setType(item);
                    setTypeExpanded(false);
                  }}
                />
              );
            })}
          </List.Accordion>
        </List.Section>
        <List.Section title="消费账户">
          <List.Accordion
            title={account.name || '选择消费账户'}
            expanded={accountExpanded}
            onPress={() => setAccountExpanded(!accountExpanded)}
            right={props => (
              <View
                style={{
                  ...globalStyles.alignCenter,
                  ...globalStyles.flexCenter,
                  ...globalStyles.ml,
                }}>
                <Ionicons
                  name={account.icon || 'chevron-down'}
                  size={24}
                  color={theme.brand_primary}
                />
              </View>
            )}>
            {accountList.map(item => {
              return (
                <List.Item
                  key={item.id}
                  style={{
                    backgroundColor: '#fff',
                    ...globalStyles.pl,
                    ...globalStyles.pr,
                  }}
                  title={item.name}
                  right={props => (
                    <View
                      style={{
                        ...globalStyles.alignCenter,
                        ...globalStyles.flexCenter,
                      }}>
                      <Ionicons
                        name={item.icon}
                        size={24}
                        color={theme.brand_primary}
                      />
                    </View>
                  )}
                  onPress={() => {
                    console.log('onPress', item);
                    setAccount(item);
                    setAccountExpanded(false);
                  }}
                />
              );
            })}
          </List.Accordion>
        </List.Section>
        <TextInput
          style={{...globalStyles.mt}}
          mode="outlined"
          label="消费明细"
          placeholder=""
        />
        <List.Item
          onPress={showDatepicker}
          style={{
            backgroundColor: '#fff',
            ...globalStyles.mt,
            ...globalStyles.pl,
            ...globalStyles.pr,
          }}
          left={props => (
            <View
              style={{
                ...globalStyles.alignCenter,
                ...globalStyles.flexCenter,
              }}>
              <Ionicons name="calendar" size={16} color={theme.brand_primary} />
            </View>
          )}
          title={<Text>{dateFormatter.format(date) || '选择日期'}</Text>}
        />

        <Button
          style={{...globalStyles.mt}}
          icon={() => <Ionicons name="calendar" size={16} color="#fff" />}
          mode="contained"
          onPress={() => {
            navigation.navigate('Home');
          }}>
          保存
        </Button>
        <Button
          style={{...globalStyles.mt}}
          icon={() => (
            <Ionicons name="close" size={16} color={theme.brand_primary} />
          )}
          mode="text"
          onPress={() => {
            navigation.navigate('Home');
          }}>
          取消
        </Button>
      </View>
    </DefaultLayout>
  );
};
