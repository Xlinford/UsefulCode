// 将主要内容移动到 body
$("body").prepend($("main"));
 
// 移除掉body中的其他节点
// 不移除脚本和 style 是因为要保持样式
$.each($("body").children(), function(index, obj) {
    var tag = obj.tagName;
    if (!(tag=="MAIN" || tag=="SCRIPT" || tag=="STYLE")) {
        obj.remove();
    } 
});
 
// 内容宽度为页面的100% 
$("main").css("width", "100%");
// 移除掉用户信息工具栏
$("#toolBarBox").remove();
//如果有专栏，去掉专栏
if ( $("#blogColumnPayAdvert").length > 0 ){
    $("#blogColumnPayAdvert").remove();
}
//去掉作者栏
$(".article-info-box").remove();
//除去相关推荐对你有帮助吗栏
$("#recommendNps").remove();
//除去评价栏
$("#pcCommentBox").remove();
//除去底部
$(".template-box").remove();
$(".blog-footer-bottom").remove();
$(".recommend-box").remove();
//如果有链接元素，循环点击图片链接
if ( $(".look-more-preCode").length > 0 ){
    $.each($(".look-more-preCode"), function(index, obj) {
    obj.click();
});
}
 
// 进行打印，保存PDF
// 设置 500 毫秒等待时间是因为要等待页面设置完成
// 否则页面可能会有部分样式没有加载出来
setTimeout(function(){window.print()}, 500);
