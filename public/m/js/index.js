$(function(){
    // 初始化轮播图插件  可以实现自动轮播图
    // 获得slide插件对象
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval: 1000 // 自动轮播图周期,若为0则不自动播放,默认为0;
    });

    // 初始化区域滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005  // flick 减速系数,系数越大,滚动速度越慢,滚动距离越小,默认值0.006
    });
});