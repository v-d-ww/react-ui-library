import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // 移除 "@storybook/preset-create-react-app"
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: { useSWC: true },
      reactOptions: {
        strictMode: true,
      },
    },
  },
  docs: { autodocs: "tag" },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    // SCSS 支持
    (config.module!.rules as any[]).push({
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"],
    });
    // 保险：彻底禁用 react-refresh（若有遗留）
    if (config.plugins) {
      config.plugins = config.plugins.filter(
        (p) => p && p.constructor && p.constructor.name !== "ReactRefreshWebpackPlugin"
      );
    }
    if (config.module && Array.isArray(config.module.rules)) {
      (config.module.rules as any[]).forEach((rule: any) => {
        if (Array.isArray(rule.oneOf)) {
          rule.oneOf.forEach((r: any) => {
            if (Array.isArray(r.use)) {
              r.use = r.use.filter((u: any) => {
                const loader = typeof u === "string" ? u : u?.loader;
                return !loader || !/react-refresh-webpack-plugin[\\/]loader/.test(loader);
              });
            }
          });
        }
      });
    }
    (config as any).devServer = { ...((config as any).devServer || {}), hot: false };
    return config;
  },
};

export default config;