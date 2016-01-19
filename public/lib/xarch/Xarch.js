/**
 * Xarch JS.
 */
var Xarch = {
	/**资源服务器*/
	staticsDomain: '',
	/**文件服务器*/
	imagesDomain:'',
	/**应用版本*/
	appVersion : '',
	/**上下文路径*/
	contextPath : '',
	/** 是否为debug状态 {} [description] */
	isDebug : true,
	/** 添加项目上下文路径 */
	url : function (url) {
		return this.contextPath+url;
	},
	/**初始化应用*/
	initApp:function(opts){
		if(this.contextPath.length <= 0){
			this.contextPath = opts.contextPath;
		}
		if(this.staticsDomain.length <= 0){
			this.staticsDomain = opts.staticsDomain;
		}
		if(this.imagesDomain.length <= 0){
			this.imagesDomain = opts.imagesDomain;
		}
		if(this.appVersion.length <= 0){
			this.appVersion = opts.appVersion;
		}	
		if(this.isDebug.length <= 0){
			this.isDebug = opts.isDebug;
		}			
	}
};
