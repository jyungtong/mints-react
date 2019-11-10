module.exports = ({ webpack: { mode }}) => ({
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': mode === 'production' ? {} : false
  }
});