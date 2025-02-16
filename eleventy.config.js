module.exports = async function (eleventyConfig) {
    const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/bundle.css");
    eleventyConfig.addPassthroughCopy("./src/img");
};

module.exports.config = {
    dir: {
        input: "src",
        output: "docs",
    },
    pathPrefix: "/michael.healy/",
};
