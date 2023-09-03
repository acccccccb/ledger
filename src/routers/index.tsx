import {Home} from '../pages/Home';
import {AddRecord} from '../pages/Home/AddRecord';
import {Mine} from '../pages/Mine';
export const router = {
  name: 'root',
  children: [
    {
      name: 'Home',
      title: '今日记录',
      icon: 'today',
      component: Home,
      children: [
        {
          name: 'AddRecord',
          title: '添加记录',
          icon: 'plus',
          component: AddRecord,
        },
      ],
    },
    {
      name: 'Mine',
      title: '我的',
      icon: 'person',
      component: Mine,
    },
  ],
};
