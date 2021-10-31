module.exports = eleventyConfig => {
    // Copy our static assets to the output folder
    // eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/favicon');
    // eleventyConfig.addPassthroughCopy('src/fonts');

  
    // Returning something from the configuration function is optional
    return {
      markdownTemplateEngine: "njk",
      dir: {
        input: 'src',
        output: '_site'
      }
    };
  };