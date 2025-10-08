const footnote_plugin = require('markdown-it-footnote');

module.exports = async function (eleventyConfig) {
    const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/bundle.css");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/visualizations");
    eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(footnote_plugin));

};

module.exports.config = {
    dir: {
        input: "src",
        output: "docs",
    },
    pathPrefix: "/michael.healy/",
};
