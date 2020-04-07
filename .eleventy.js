module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "jpg",
    "gif",
    "png"
  ]);

  eleventyConfig.addShortcode("image", function(image, alt) {
    return `<img class="project-asset" src="${image}" alt="${alt}">`;
  });

  eleventyConfig.addPairedShortcode("multiColumns", function(item1, item2) {
    return `<div class="project-asset-container">
      ${item1}
      ${item2}
    </div>`;
  });

  }