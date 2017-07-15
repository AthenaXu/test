/**
 * Created by Athena Xu on 2017/6/22.
 */
var webpack=require('webpack');
module.exports={
    entry:"./index.js",
    output:{
        path:__dirname,
        filename:"main.js"
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:"style-loader!css-loader"}
        ]
    },
    plugins:[
        new webpack.BannerPlugin('菜鸟学习教程测试版')
    ]
};