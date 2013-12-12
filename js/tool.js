function makeHtml(data, templates, element) {
    var source = $(templates).html();
    var template = Handlebars.compile(source);
    var context = eval('(' + data + ')');
    var html = template(context);
    $(element).html(html);
}



function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}


function getAjax(url,data,cb){
    $.ajax({
        async: false,
        dataType: 'jsonp',
        jsonp: 'callbackparam',
        jsonpCallback: "success_jsonpCallback",
        url: url,
        data: data,
        success: function (result) {
            cb(result)
        }
    });
}


//显示加载器
function showLoader() {
    //显示加载器.for jQuery Mobile 1.2.0
    $.mobile.loading('show', {
        text: '加载中...', //加载器中显示的文字
        textVisible: true, //是否显示文字
        theme: 'b',        //加载器主题样式a-e
        textonly: false,   //是否只显示文字
        html: ""           //要显示的html内容，如图片等
    });
}

//隐藏加载器.for jQuery Mobile 1.2.0
function hideLoader()
{
    //隐藏加载器
    $.mobile.loading('hide');
    }
