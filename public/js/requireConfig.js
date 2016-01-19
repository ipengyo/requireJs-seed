(function(require){

var urlArgs ="v=" + (new Date()).getTime() ;
if(window.Xarch && !window.Xarch.isDebug){
	urlArgs = window.Xarch.appVersion;
}


require.config({
        //"baseUrl": Xarch.staticsDomain,
        "urlArgs": urlArgs,
        //常用的插件
        map: {
         '*': {
            'css': 'public/lib/require-css/css.min'
        	}
    	},
        "paths": {
            "jquery": "public/lib/jquery/dist/jquery.min",
            "jquery-base64": "public/lib/jquery-base64/jquery.base64.min",
            "jquery-MD5": "public/lib/jquery-MD5/jquery.md5.min",
            "jquery-dateFormat": "public/lib/jquery-dateFormat/dist/jquery-dateFormat.min",
            "lazyload": "public/lib/lazyload/lazyload.min",
            "layer-mobile": "public/lib/layerMobile/layer",
            "swiper-jquery": "public/lib/swiper/swiper-3.2.7.jquery.min",
            "base-m": "public/js/base-m"
        },
        shim: {
		  'jquery-base64': ['jquery'],
		  'jquery-dateFormat': ['jquery'],
		  'jquery-MD5': ['jquery'],
		  'lazyload': ['jquery'],
		  'swiper-jquery':['jquery'],
		  'base-m': ['jquery'],
		  'layer-mobile': ['css!public/lib/layerMobile/need/layer']
   		 },
   		
    }
);

})(require)

