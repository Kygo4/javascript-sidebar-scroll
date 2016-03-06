window.onload = function(){
    var $ = function(id){
        return document.getElementById(id);
    };
    var screenH = document.documentElement.clientHeight || document.body.clientHeight;
    var addEvent = function(obj,event,fn){
        if(obj.addEventListener){
            obj.addEventListener(event,fn,false);
        }else if(obj.attachEvent){
            obj.attachEvent('on'+event,fn);
        }
    };
    var scrollEvent = function(){
        var scrollH = document.documentElement.scrollTop || document.body.scrollTop,
            obodyH = document.body.scrollHeight,// 网页正文全文高
            omainH = $("main").offsetHeight,
            oarticleH = $("article").offsetHeight,
            osidebar = $("sidebar"),
            osidebarH = osidebar.offsetHeight,
            ofooterH = $("footer").offsetHeight;
        if(oarticleH > osidebarH){// 右边文章主体高度大于左边侧边栏高度
            if(scrollH + screenH > osidebarH){
                osidebar.style.cssText = "position:fixed;top:" + (-(osidebarH-screenH)) + "px;";
                if(scrollH >= obodyH - ofooterH - screenH - 35){// 35是类main的margin-bottom的属性值
                    osidebar.style.cssText = "position:absolute;top:auto;bottom:0px;";
                }
            }else{
                osidebar.style.cssText = "position:absolute;top:0px;";
            }
        }
    };
    addEvent(window,'scroll',function(){// 当执行滚动时触发scrollEvent事件
        scrollEvent();
    });
    addEvent(window,'resize',function(){// 当resize时触发scrollEvent事件
        scrollEvent();
    });
};