module.exports = {
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
    "antd/**/*.*"
  ],
  mount: {
    public: "/",
    src: "/build",
  },
  experiments: {
    optimize: {
      bundle: true,
      minify: true,
      target: "es2018",
    },
  },
};
