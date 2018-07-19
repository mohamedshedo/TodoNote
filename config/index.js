let configValues=require('./config');

module.exports={
    getdbConnectionString:function(){
        return 'mongodb://'+configValues.uname+':'+configValues.password+'@ds235251.mlab.com:35251/sssss'
    }
}