const config = require('../config/webpack.config.prod');
const fs = require('fs')
const fsExtra = require('fs-extra')
const webpack = require('webpack')
const webpackCompiler  = require('webpack-dev-server')



process.on('unhandledRejection', err => {
    throw err;
});

var compiler;
// Makes the script crash on unhandled rejections instead of silently
// ignoring them.
console.log("Production build in process....")
copyFiles()
function makeBuild() {

     compiler =  new webpackCompiler( webpack(config), {stats:  "errors-only"})
    return new Promise((resolve, reject) => {
        compiler.listen((err) => {

            if (err) {
                return reject(err)
            }

            else {
              return resolve("Production build completed !")
            }
        })



    })
}


makeBuild().then((result) => {
    console.log(result)

  compiler.close()
  
}).catch((err) => {
    console.log(err)
})



function copyFiles() {
    fsExtra.emptyDirSync('./build');
    fsExtra.copySync('./public', './build', { dereference: true,
    filter: file => file !== './src/index.html'})
}
