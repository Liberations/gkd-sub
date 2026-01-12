import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.music',
  name: '音乐',
  groups: [
    {
      key: 1,
      name: '不再提示',
      rules: 'android.widget.TextView[id="com.heytap.music:id/noShowAgain"]',
    },
    {
      key: 2,
      name: '关闭',
      rules: 'android.widget.ImageView[id="com.heytap.music:id/close"]',
    },
    {
      key: 3,
      name: '解锁30分钟关闭',
      rules: 'android.widget.ImageView[id="id="com.heytap.music:id/iv_close"]',
    },
  ],
});
