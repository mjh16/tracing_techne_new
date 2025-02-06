module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/bundle.css");
    eleventyConfig.addPassthroughCopy("./src/img");
};

module.exports.config = {
    dir: {
        input: "src",
    },
};
