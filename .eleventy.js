module.exports = eleventyConfig => {
    // Copy our static assets to the output folder
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('favicon');
    eleventyConfig.addPassthroughCopy('node_modules/jquery/dist');
    eleventyConfig.addPassthroughCopy('node_modules/jquery-ui-dist');
    // eleventyConfig.addPassthroughCopy('.node_modules/jquery-ui-dist/jquery-ui.theme.min.css');
    // eleventyConfig.addPassthroughCopy('images');
  
    // Returning something from the configuration function is optional
    return {
      markdownTemplateEngine: "njk",
      dir: {
        output: 'cnit133'
      }
    };
  };