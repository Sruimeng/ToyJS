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

                test: /\.tsx?$/,

                use: {

                    loader: 'ts-loader'

                }

            },

        ]

    },
    devServer: {
        historyApiFallback: true,
        inline: true,//注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
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