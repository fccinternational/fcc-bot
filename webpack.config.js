const merge = require('webpack-merge');
const common = require('./webpack/webpack.common');

module.exports = env => {
    console.log(env);

    const ENV = require(`./webpack.${env.env}.js`);
    const webpackMerge = merge(common, ENV);

    return webpackMerge;
}