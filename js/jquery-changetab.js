/**
 * Created by Administrator on 2017-10-13.
 */
//代碼封裝到一個方法中
$.fn.changeTab=function (index) {
    $(this).find("ul:eq("+index+")").show().siblings("ul").hide();
};