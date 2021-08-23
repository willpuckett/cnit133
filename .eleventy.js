module.exports = eleventyConfig => {
    // Copy our static assets to the output folder
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('Skeleton');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('images');
  
    // Returning something from the configuration function is optional
    return {
      markdownTemplateEngine: "njk",
      dir: {
        output: 'cnit133'
      }
    };
  };