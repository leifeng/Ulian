/**
 * Created by zcl on 13-10-25.
 */

function getdata(callback) {
    var nowDate = new Date();
    if (!localStorage.getItem("time") || Math.abs(localStorage.getItem("time") - nowDate.getDate()) > 10) {
        getAjax('http://hs.0372.cn/wap/api/getData.ashx','', function (result) {
            localStorage.setItem("quyu", result.quyu);
            localStorage.setItem("bank", result.bank);
            localStorage.setItem("clas", result.clas);
            localStorage.setItem("time", nowDate.getDate());
            callback(result.quyu, result.bank, result.clas);
        });
    } else {
        callback(localStorage.getItem("quyu"), localStorage.getItem("bank"), localStorage.getItem("clas"));
    }
}


