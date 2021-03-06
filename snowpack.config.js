const antdModules = [
  'affix',
  'anchor',
  'auto-complete',
  'alert',
  'avatar',
  'back-top',
  'badge',
  'breadcrumb',
  'button',
  'calendar',
  'card',
  'collapse',
  'carousel',
  'cascader',
  'checkbox',
  'col',
  'comment',
  'config-provider',
  'date-picker',
  'descriptions',
  'divider',
  'dropdown',
  'drawer',
  'empty',
  'form',
  'grid',
  'input',
  'image',
  'input-number',
  'layout',
  'list',
  'message',
  'menu',
  'mentions',
  'modal',
  'statistic',
  'notification',
  'page-header',
  'pagination',
  'popconfirm',
  'popover',
  'progress',
  'radio',
  'rate',
  'result',
  'row',
  'select',
  'skeleton',
  'slider',
  'space',
  'spin',
  'steps',
  'switch',
  'table',
  'transfer',
  'tree',
  'tree-select',
  'tabs',
  'tag',
  'time-picker',
  'timeline',
  'tooltip',
  'typography',
  'upload',
  'version',
]

function getInstallModules(arr) {
  const esComponents = arr.map(item => `antd/es/${item}`);
  const esStyles = arr.map(item => `antd/es/${item}/style/css`);
  return [
    ...esComponents,
    ...esStyles,
  ]
}
module.exports = {
  mount: {
    public: "/",
    src: "/build",
  },
  plugins: [
    "@snowpack/plugin-babel", // 👈 have to add babel here
    "@snowpack/plugin-react-refresh",
  ],
  devOptions: {
    port: 3000,
    // fallback: 'index.html',
  },
  install: [
    "react/jsx-runtime",
    ...getInstallModules(antdModules)
  ],

  experiments: {
    optimize: {
      bundle: true,
      minify: true,
      target: "es2018",
    },
  },
};
