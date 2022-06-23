const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')
const fs = require('fs')
const WriteFilePlugin = require('write-file-webpack-plugin');


const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: resolveApp('build'), filename: 'static/js/main.js',
        // publicPath : './public'
    },
    
    module: {

        rules: [
            // {
            //     test: /\.(js|jsx|mjs)$/,
            //     enforce: 'pre',
            //     use: [
            //       {
            //         options: {
            //           formatter: eslintFormatter,
            //           eslintPath: require.resolve('eslint'),
        
            //         },
            //         loader: require.resolve('eslint-loader'),
            //       },
            //     ],
            //     include: paths.appSrc,
            //   },
              {
                
                oneOf: [
                
                  {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    loader: require.resolve('url-loader'),
                    options: {
                      limit: 10000,
                      name: 'static/media/[name].[hash:8].[ext]',
                    },
                  },
                  // Process JS with Babel.
                  {
                    test: /\.(js|jsx|mjs)$/,
                    include: resolveApp('src'),
                    loader: require.resolve('babel-loader'),
                    options: {
        
                      compact: true,
                    },
                  },
             
                  {
                    test: /\.css$/,
                    use: [
                        { loader: require.resolve('style-loader') ,
                        options: {
                            hmr: false,
                          },
                        },
                        { loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            minimize: true,
                            sourceMap: true,
                          },
                        }
                      ]
                    
                        // extractTextPluginOptions
                    
                
                    // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
                  },
                  // "file" loader makes sure assets end up in the `build` folder.
                  // When you `import` an asset, you get its filename.
                  // This loader doesn't use a "test" so it will catch all modules
                  // that fall through the other loaders.
                  {
                    loader: require.resolve('file-loader'),
                    // Exclude `js` files to keep "css" loader working as it injects
                    // it's runtime that would otherwise processed through "file" loader.
                    // Also exclude `html` and `json` extensions so they get processed
                    // by webpacks internal loaders.
                    exclude: [/\.js$/, /\.html$/, /\.json$/],
                    options: {
                      name: 'static/media/[name].[hash:8].[ext]',
                    },
                  },
                  // ** STOP ** Are you adding a new loader?
                  // Make sure to add the new loader(s) before the "file" loader.
                ],
              },
        ],

    }
    ,
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: './public/index.html'
        }),

        new WriteFilePlugin({}),

        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //       warnings: false,
      
        //       comparisons: false,
        //     },
        //     mangle: {
        //       safari10: true,
        //     },
        //     output: {
        //       comments: false,
        //       ascii_only: true,
        //     },
        //     sourceMap: true,
        //   }),

        
    ],

    
}