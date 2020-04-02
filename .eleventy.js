module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "jpg",
    "gif",
    "png"
  ]);

  eleventyConfig.addShortcode("oneColImage", function(image, alt) {
    return `<img class="project-asset" src="${image}" alt="${alt}">`;
  });

  }