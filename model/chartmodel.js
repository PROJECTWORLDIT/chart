var pool = require('../dbcon');

var obj = { 

listChart:function(cb)
{
    var sql ="SELECT * FROM `state`";
    console.log('query: '+sql);
    pool.getConnection(function(error, connection){
        if (error) {
            console.log('connection error'+error);
        }
        else{
            connection.query(sql, function(error, result){
               // console.log('result ka data', error,result)
                if (error) {
                    cb(error, null);
                }
                else{
                    cb(null, result);
                }
            });
        }
        connection.release();
    });
}
}

module.exports = obj;