(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/component/reporthistory/index"],{"1d37":function(t,e,n){(function(t,e){var o=n("4ea4");n("1ae4"),o(n("66fd"));var a=o(n("f819"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("bc2e").default,n("543d").createPage)},"4e75":function(t,e,n){},"4f89":function(t,e,n){n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=(t.$createElement,t._self._c,t.msg.length),o=t.msg.length,a=o>0?t.__map(t.msg,(function(e,o){return{$orig:t.__get_orig(e),m0:n("dac7"),m1:n("5aba"),l0:t.__map(e.itemList,(function(e,n){return{$orig:t.__get_orig(e),g2:e.value.length}}))}})):null;t.$mp.data=Object.assign({},{$root:{g0:e,g1:o,l1:a}})},a=[]},c5b9:function(t,e,n){var o=n("4e75");n.n(o).a},ca31:function(t,e,n){(function(t){var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("448a")),i=n("9323");e.default={components:{},data:function(){return{totalCount:0,msg:[],msgtype:[],type:1,cl:!0,showSetTabBarPage:!1,list:[],userId:"",form:{userId:"",pageNum:1,pageSize:10,reportType:""}}},onLoad:function(t){this.form.userId=this.$store.state.userId,this.getReportTypeDictin()},onReady:function(){},onShow:function(){},onHide:function(){},onReachBottom:function(){this.totalCount>this.msg.length&&(this.form.pageNum++,this.onlistin())},onPullDownRefresh:function(){this.handleQuery(),t.stopPullDownRefresh()},methods:{getReportTypeDictin:function(){var e=this;t.request({url:e.$store.state.requestUrl+"/open/manage/getReportTypeDict",method:"get",success:function(t){200==t.data.code&&(e.msgtype=t.data.data,e.msgtype.length>0&&e.typein(0))},complete:function(){},fail:function(t){console.log("报告类型获取失败：",t)}})},baogao:function(e){console.log(e.analyzeStatus),0==e.analyzeStatus?t.setStorage({key:"reportId",data:e.reportId,success:function(){console.log("success"),t.setStorage({key:"version",data:e.reportType,success:function(){console.log(e.reportId,e.reportType,"ID和类型"),(0,i.tiaobaogaops)(e.reportId,e.reportType)}})}}):-1==e.analyzeStatus?t.showToast({title:"正在分析中",icon:"none"}):t.showToast({title:"分析失败",icon:"none"})},xiangqing:function(e){t.navigateTo({url:"/pages/tabBar/warning/indexps?json="+JSON.stringify(e)})},handleQuery:function(){this.form.pageNum=1,this.onlistin()},onlistin:function(){var e=this;t.showLoading({mask:!0,title:"加载中"}),t.request({url:e.$store.state.requestUrl+"/open/manage/getHistoryReportByUserId",method:"get",data:e.form,success:function(t){200==t.data.code&&(e.totalCount=t.data.total,1==e.form.pageNum?e.msg=t.data.rows:e.msg=[].concat((0,a.default)(e.msg),(0,a.default)(t.data.rows)))},complete:function(){t.hideLoading()},fail:function(t){console.log("失败：",t)}})},typein:function(t){for(var e=0;e<this.msgtype.length;e++)this.msgtype[e].cl=!1;this.msgtype[t].cl=!0,this.msg=[],this.form.reportType=this.msgtype[t].value,this.handleQuery()}}}}).call(this,n("543d").default)},f819:function(t,e,n){n.r(e);var o=n("4f89"),a=n("feea");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("c5b9");var s=n("f0c5"),r=Object(s.a)(a.default,o.b,o.c,!1,null,"a2c12c6a",null,!1,o.a,void 0);e.default=r.exports},feea:function(t,e,n){n.r(e);var o=n("ca31"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e.default=a.a}},[["1d37","common/runtime","common/vendor"]]]);