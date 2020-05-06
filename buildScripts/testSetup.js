//Register babel to transpile before running the tests
require('@babel/register')();

//Disable features that mocha doesn't understand
require.extensions['.css'] = function() {};
