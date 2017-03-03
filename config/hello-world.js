//https://webpack.js.org/api/plugins/#plugin-interfaces
//https://webpack.js.org/pluginsapi/compiler/

function HelloWorldPlugin(options) {
  // Setup the plugin instance with options...
}

HelloWorldPlugin.prototype.apply = function(compiler) {
  compiler.plugin('environment', function() {
    console.log('Hello environment!'); 
  });
  compiler.plugin('done', function() {
    console.log('Hello done!'); 
  });
  compiler.plugin('normal-module-factory', function() {
    console.log('Hello normal-module-factory!'); 
  });
  compiler.plugin('context-module-factory', function() {
    console.log('Hello context-module-factory!'); 
  });
  compiler.plugin('compile', function() {
    console.log('Hello compile!'); 
  });
  compiler.plugin('emit',(compilation, cb) => {
      console.log('Hello emit!');
      const callback = () => {
        console.log('Bye emit!');
        cb();
      };
      callback();
  });
  compiler.plugin('after-emit',(compilation, cb) => {
      console.log('Hello after-emit!');
      const callback = () => {
        console.log('Bye after-emit!');
        cb();
      };
      callback();
  });
  compiler.plugin('failed', function() {
    console.log('Hello failed!'); 
  });
  // compiler.plugin('run', function() {
  //   console.log('Hello run!'); 
  // });
  // compiler.plugin('watch-run', function() {
  //   console.log('Hello watch-run!'); 
  // });
  // compiler.plugin('compilation', function() {
  //   console.log('Hello compilation!'); 
  // });
  // compiler.plugin('make', function() {
  //   console.log('Hello make!'); 
  // });
  // compiler.plugin('after-compile', function() {
  //   console.log('Hello after-compile!'); 
  // });
};

function FirstPlugin(options) {
  // Setup the plugin instance with options...
}

FirstPlugin.prototype.apply = function(compiler) {
   compiler.plugin('emit',(compilation, cb) => {
      console.log('Hello emit for FirstPlugin!');
      const callback = () => {
        console.log('Bye emit for FirstPlugin!');
        cb();
      };
      callback();
  });
  compiler.plugin('after-emit',(compilation, cb) => {
      console.log('Hello after-emit for FirstPlugin!');
      const callback = () => {
        console.log('Bye after-emit for FirstPlugin!');
        cb();
      };
      callback();
  });
};

function SecondPlugin(options) {
  // Setup the plugin instance with options...
}

SecondPlugin.prototype.apply = function(compiler) {
   compiler.plugin('emit',(compilation, cb) => {
      console.log('Hello emit for SecondPlugin!');
      const callback = () => {
        console.log('Bye emit for SecondPlugin!');
        cb();
      };
      callback();
  });
  compiler.plugin('after-emit',(compilation, cb) => {
      console.log('Hello after-emit for SecondPlugin!');
      const callback = () => {
        console.log('Bye after-emit for SecondPlugin!');
        cb();
      };
      callback();
  });
};

module.exports = {HelloWorldPlugin, FirstPlugin, SecondPlugin};