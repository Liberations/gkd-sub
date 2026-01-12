import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.music',
  name: '音乐',
  groups: [
    {
      key: 1,
      name: '不再提示',
      rules: 'android.widget.TextView[text="不再提示"]',
    },
  ],
});
