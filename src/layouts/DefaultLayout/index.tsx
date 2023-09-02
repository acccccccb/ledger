import {TabBar, View} from '@ant-design/react-native';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export const DefaultLayout = ({children}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      fontSize: 25,
      fontWeight: '500',
    },
  });
  return (
    <ScrollView>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
};
