import * as React from 'react';
import {IconFill, IconOutline} from '@ant-design/icons-react-native';
import {Button, TabBar, Icon} from '@ant-design/react-native';
import {DefaultLayout} from '../../layouts/DefaultLayout';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export const Mine = ({navigation}) => {
  return (
    <DefaultLayout>
      <View>
        <Button>导出数据</Button>
        <Button>导入数据</Button>
        <Button
          onPress={() => {
            navigation.navigate('Home');
          }}>
          首页
        </Button>
      </View>
    </DefaultLayout>
  );
};
