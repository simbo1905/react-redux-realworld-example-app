const withSass = require('@zeit/next-sass')
module.exports = withSass({
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }
      // {
      //   test: /\.(css|scss)/,
      //   loader: 'emit-file-loader',
      //   options: {
      //     name: 'dist/[path][name].[ext]'
      //   }
      // }
    // ,
    //   {
    //     test: /\.css$/,
    //     use: ['babel-loader', 'raw-loader', 'postcss-loader']
    //   }
    // ,
    //   {
    //     test: /\.s(a|c)ss$/,
    //     use: ['babel-loader', 'raw-loader', 'postcss-loader',
    //       { loader: 'sass-loader',
    //         options: {
    //           includePaths: ['styles', 'node_modules']
    //             .map((d) => path.join(__dirname, d))
    //             .map((g) => glob.sync(g))
    //             .reduce((a, c) => a.concat(c), [])
    //         }
    //       }
    //     ]
    //   }
    )
    return config
  }
});
