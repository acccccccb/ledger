import {Home} from '../pages/Home';
import {Mine} from '../pages/Mine';
export const router = {
  name: 'root',
  children: [
    {
      name: 'Home',
      title: '首页',
      icon: 'home',
      component: Home,
    },
    {
      name: 'Mine',
      title: '我的',
      icon: 'user',
      component: Mine,
    },
  ],
};
