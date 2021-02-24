// vue.config.js file to be place in the root of your repository

module.exports = {
    transpileDependencies: ["vuetify"],
    publicPath: process.env.NODE_ENV === "production" ? "/public" : "/",
};