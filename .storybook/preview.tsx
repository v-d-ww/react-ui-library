import type { Preview } from "@storybook/react";
import '../src/styles/index.scss';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // 新增：在 parameters 中禁用热更新
    storybook: {
      hotReload: false,
    },
  },
  // decorators: [
  //   (Story) => (
  //     <div style={{ margin: '0' }}>
  //       <Story />
  //     </div>
  //   )
  // ]
};

export default preview;
