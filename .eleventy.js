module.exports = function(config) {

  config.addPassthroughCopy('src/js');
  config.addPassthroughCopy('styles');

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };

};