import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.music',
  name: '音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: [
        'android.widget.TextView[id="com.heytap.music:id/noShowAgain"]',
        'android.widget.ImageView[id="com.heytap.music:id/close"]',
        'android.widget.ImageView[id="com.heytap.music:id/iv_close"]',
        'android.widget.ImageButton[id="com.heytap.music:id/ibClose"]',
      ],
    },
  ],
});
