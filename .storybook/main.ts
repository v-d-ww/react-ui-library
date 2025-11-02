import type { StorybookConfig } from "@storybook/react-webpack5";
import type { RuleSetRule } from "webpack";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    // 移除热更新插件
    if (config.plugins) {
      config.plugins = config.plugins.filter(
        (plugin: Plugin | undefined) =>
          plugin &&
          !["ReactRefreshWebpackPlugin", "HotModuleReplacementPlugin"].includes(
            plugin.constructor.name
          )
      );
    }

    // 移除 react-refresh loader 规则
    if (config.module?.rules) {
      config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (rule && rule.use) {
          if (Array.isArray(rule.use)) {
            rule.use = rule.use.filter(
              (loader: string | Record<string, unknown>) =>
                typeof loader !== "string" ||
                !((loader as string).includes("react-refresh"))
            );
          } else if (
            typeof rule.use === "object" &&
            !Array.isArray(rule.use) &&
            typeof (rule.use as { loader: string }).loader === "string"
          ) {
            if ((rule.use as { loader: string }).loader.includes("react-refresh")) {
              return {} as RuleSetRule;
            }
          }
        }
        return rule;
      });
    }

    // 禁用 devServer 热更新
    (config as any).devServer = {
      ...((config as any).devServer || {}),
      hot: false,
      liveReload: true,
    };

    return config;
  },
};

export default config;
