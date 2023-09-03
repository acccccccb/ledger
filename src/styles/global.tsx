import {StyleSheet} from 'react-native';
import antTheme from './theme';

const gap = 8;

export const theme = antTheme;

export const globalStyles = StyleSheet.create({
  primaryColor: {
    color: theme.brand_primary,
  },
  margin: {
    margin: gap * 2,
  },
  marginXs: {
    margin: gap,
  },
  padding: {
    padding: gap * 2,
  },
  paddingXs: {
    padding: gap * 2,
  },
  mt: {
    marginTop: gap * 2,
  },
  mb: {
    marginBottom: gap * 2,
  },
  ml: {
    marginLeft: gap * 2,
  },
  mr: {
    marginRight: gap * 2,
  },
  // 添加 margin-top-xs, margin-bottom-xs, margin-left-xs, margin-right-xs 样式
  mtXs: {
    marginTop: gap,
  },
  mbXs: {
    marginBottom: gap,
  },
  mlXs: {
    marginLeft: gap,
  },
  mrXs: {
    marginRight: gap,
  },
  // 添加 padding-top-xs, padding-bottom-xs, padding-left-xs, padding-right-xs 样式
  ptXs: {
    paddingTop: gap,
  },
  pbXs: {
    paddingBottom: gap,
  },
  plXs: {
    paddingLeft: gap,
  },
  prXs: {
    paddingRight: gap,
  },
  // bg
  primaryBg: {
    backgroundColor: theme.brand_primary,
  },
  // Text
  textColorDefault: {
    color: '#000',
  },
  // flex
  flexStart: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  flexSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
});
