function HelloWorldPlugin(options) {
  // Setup the plugin instance with options...
}

HelloWorldPlugin.prototype.apply = function(compiler) {
  compiler.plugin('environment', function() {
    console.log('Hello environment!'); 
  });
};

module.exports = HelloWorldPlugin;