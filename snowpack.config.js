module.exports = {
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-babel", // 👈 have to add babel here
  ],
  devOptions: {
    port: 3000,
    // fallback: 'index.html',
  },
  install: [
    "react/jsx-runtime",
    "antd/es/space",
    "antd/es/space/style/css",
    "antd/es/button",
    "antd/es/button/style/css",
  ],
  mount: {
    public: "/",
    src: "/dist",
  },
  experiments: {
    optimize: {
      bundle: true,
      minify: true,
      target: "es2018",
    },
  },
};
