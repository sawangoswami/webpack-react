
 const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

// const settings = {
//     distPath: path.join(__dirname, "dist"),
//     srcPath: path.join(__dirname, "src")
// }

function srcPathExtend(subpath) {
    return path.join(settings.srcPath, subpath)
}

module.exports = {
    
    context: __dirname,
    entry: {
        index: './src/index.js',
},
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                
                loader: 'babel-loader',
                options: { presets: ["@babel/preset-env","@babel/preset-react"]},
            },

            {
                test: /\.scss/,
                use: ["style-loader", "css-loader","sass-loader"]
            },

             

       
        ]
    },


     plugins: [
         new HtmlWebPackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    })
         ]
};