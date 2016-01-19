define(["jquery","layer-mobile"],function($, layer){

        //设置ajax全局性相关错误处理
        $(document).bind("ajaxSend", function(){
        }).ajaxComplete(function(){
        }).ajaxError(function(event, XMLHttpRequest, ajaxOptions, thrownError){
            switch (XMLHttpRequest.status){
                case(500):
                    console.error("服务器系统内部错误");
                    break;
                case(401):
                    console.error("未登录");
                    break;
                case(403):
                    console.error("无权限执行此操作");
                    break;
                case(408):
                    console.error("请求超时");
                    break;
                case(404):
                    console.error("404地址找不到");
                    break;
                default:
                   console.error("Ajax请求未知错误："+XMLHttpRequest.responseText);
            }
        });
        /* 鼠标按下效果 */
        $(function($) {
            document.body.addEventListener('touchstart', function() {
            });
        });

     var baseJs = {};

    /* 返回上一页 */
    baseJs.goback = function() {
        window.history.length === 1 ?
            window.location.href = Xarch.url("/") :
            window.history.go(-1);
    };
    // 获取url参数
    baseJs.QueryStringByName = function(name) {
        var result = window.location.search.match(new RegExp("[\?\&]" + name
            + "=([^\&]+)", "i"));
        if (result == null || result.length < 0) {
            return "";
        }
        return result[1];// 返回值是数组形式。该数组的内容依赖于 regexp 是否具有全局标志 g。
    };
    //提示消息：过后两秒自动关闭
    baseJs.msg = function(text){
        layer.open({
            style:"min-width:58%;",
            content: text,
            time: 2
        });
    };
    /**
     * alert 传入 文本 按钮名称 按钮点击后的回调
     * 传入都非必选
     */
    baseJs.alert = function(text,btnText,okfn){
        var arr = [];
        btnText = !btnText ? '确定' : btnText;
        arr.push(btnText);
        var indexOpen ;
        indexOpen = layer.open({
            content:text || "暂无信息",
            btn:arr,
            style:"min-width:58%;",
            yes:function(){
                okfn && okfn();
                layer.close(indexOpen);
            }
        })
    };

    /**
     * 给某个元素添加touch事件 或者 click事件
     * @param elem  元素
     * @param fn  事件回调
     * @author myfun0244
     */
    baseJs.touchEvent = function(elem, fn){
        var move;
        if(!/Android|iPhone|SymbianOS|Windows Phone|iPad|iPod/.test(navigator.userAgent)){
            return elem.addEventListener('click', function(e){
                fn.call(this, e);
            }, false);
        }
        elem.addEventListener('touchmove', function(){
            move = true;
        }, false);
        elem.addEventListener('touchend', function(e){
            e.preventDefault();
            move || fn.call(this, e);
            move = false;
        }, false);
    };

    /**
     * baseJs.confirm({
            content:"哈哈",
            btn:["1", "2"],
            yes:function(){
                alert(1);
            },
            no:function(){
                alert(2);
            }
        })
     * @param opts
     */
    baseJs.confirm = function(opts){
        var indexOpen ;
        indexOpen = layer.open(
            {
                content:opts.content || "暂无",
                btn:opts.btn,
                shadeClose: false,
                style:"min-width:58%;",
                yes:function(){
                    opts.yes && opts.yes();
                    layer.close(indexOpen);
                },
                no:function(){
                    opts.no && opts.no();
                    layer.close(indexOpen);
                }
            }
        )
    }
    var loadingIndexStack = [] ;
    /**
     * 打开加载动画
     */
    baseJs.openLoading = function(){
        loadingIndexStack.push(layer.open({type: 2,shadeClose: false,time:7}));
    }
    /**
     * 关闭加载动画
     */
    baseJs.closeLoading = function(){
        var index = loadingIndexStack.pop();
        if(index || index === 0){
            layer.close(index);
        }
    }

    baseJs.localData = {
    		hname : location.hostname ? location.hostname : 'sessionStorage',
    		isLocalStorage : window.sessionStorage ? true : false,
    		dataDom : null,
    		set : function(key, value) {
    			if (this.isLocalStorage) {
    				window.sessionStorage.setItem(key, value);
    			} else {
    				if (this.initDom()) {
    					this.dataDom.load(this.hname);
    					this.dataDom.setAttribute(key, value);
    					this.dataDom.save(this.hname);
    				}
    			}
    		},
    		get : function(key) {
    			if (this.isLocalStorage) {
    				return window.sessionStorage.getItem(key);
    			} else {
    				if (this.initDom()) {
    					this.dataDom.load(this.hname);
    					return this.dataDom.getAttribute(key);
    				}
    			}
    		},
    		remove : function(key) {
    			if (this.isLocalStorage) {
    				sessionStorage.removeItem(key);
    			} else {
    				if (this.initDom()) {
    					this.dataDom.load(this.hname);
    					this.dataDom.removeAttribute(key);
    					this.dataDom.save(this.hname);
    				}
    			}
    		}
        };
	return baseJs;    
});