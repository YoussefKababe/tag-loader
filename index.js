var loaderUtils = require('loader-utils');
var riot = require('riot');

module.exports = function(source) {
  if (this.cacheable) this.cacheable();
  var query = loaderUtils.parseQuery(this.query);
  return 'var riot = require("riot");\n\n' + riot.compile(source, query);
};
