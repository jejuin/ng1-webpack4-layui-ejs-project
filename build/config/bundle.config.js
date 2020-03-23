const glob = require('glob');
const path = require('path');
const VIEWS_PATH = path.resolve(__dirname, '../../src/views');
const SRC_PATH = path.resolve(__dirname, '../../src');

module.exports = {
    entry: glob.sync('**/*.main.js', {
        cwd: VIEWS_PATH
    }).reduce((entry, dir) => {
        const key = dir.replace(/\.main\.js/, '');
        entry[key] = path.resolve(VIEWS_PATH, dir);
        return entry;
    }, {}),
    template: glob.sync('views/**/*.html.ejs', {
        cwd: SRC_PATH
    }).reduce((template, dir) => {
        const key = dir.replace(/\.html\.ejs/, '');
        template[key] = path.resolve(SRC_PATH, dir);
        return template;
    }, {})
};
