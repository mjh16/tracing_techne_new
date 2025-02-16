const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/bundle.css");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
};

module.exports.config = {
    dir: {
        input: "src",
        output: "docs",
    },
};
