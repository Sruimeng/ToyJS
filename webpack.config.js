module.exports = {

    mode: 'development',

    //入口

    entry: __dirname + '/src/toy.ts',

    //出口

    output: {

        path: __dirname + '/build',

        filename: 'toy.js',

    },

    module: {

        rules: [
            {
              test: /\.(tsx|ts)$/,
              loader: 'ts-loader'，
      　　　　　options: {
                  configFile: path.resolve(__dirname, '../typescript.json')
      　　　　　}
            }
          ] 

    },

    resolve: {

        extensions: [".ts", ".js"],

        alias: {

            "@": __dirname + "/src",

            // "@component": __dirname + "src/component",

            // "@pages": __dirname + "src/pages",

            // "@utils": __dirname + "src/utils",

        },

    }

}
