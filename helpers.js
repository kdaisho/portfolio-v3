const fs = require("fs");
exports.dump = obj => JSON.stringify(obj, null, 2);

exports.icon = (category, name) =>
    fs.readFileSync(`./public/images/${category}/${name}.svg`);
exports.getYear = () => {
    const date = new Date();
    return date.getFullYear();
};
