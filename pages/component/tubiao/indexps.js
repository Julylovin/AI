(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/component/tubiao/indexps"],{ae00:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={props:["chartDatain","type"],data:function(){return{chartData:{},opts:{color:["#74C045","#1890FF","#F4A627","#EF5655","#3CA272","#9A60B4","#ea7ccc"],rotate:!1,rotateLock:!1,padding:[5,5,5,5],dataLabel:!1,enableScroll:!1,dataPointShape:!1,legend:{show:!1},title:{name:"",fontSize:8,color:"#666666"},subtitle:{name:"",fontSize:8,color:"#7cb5ec"},extra:{ring:{customRadius:24,ringWidth:10,centerColor:"#fff",activeOpacity:.5,activeRadius:10,offsetAngle:0,border:!1,borderWidth:3,borderColor:"#FFFFFF"}}}}},created:function(){var e=this;setTimeout((function(){var t=null,n=e.chartDatain;if(1==e.type){var a=[];console.log(n);for(var o=0;o<n.data.length;o++)a.push({name:n.data[o].name,value:+n.data[o].value,itemStyle:{color:"#000"}});t={series:[{data:a}]}}e.chartData=JSON.parse(JSON.stringify(t))}),500)},onHide:function(){},methods:{}}},e813:function(e,t,n){n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={qiunDataCharts:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts")]).then(n.bind(null,"a13a"))}},o=function(){this.$createElement;this._self._c},r=[]},ee50:function(e,t,n){n.r(t);var a=n("ae00"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t.default=o.a},f3b6:function(e,t,n){n.r(t);var a=n("e813"),o=n("ee50");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);var c=n("f0c5"),i=Object(c.a)(o.default,a.b,a.c,!1,null,null,null,!1,a.a,void 0);t.default=i.exports}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages/component/tubiao/indexps-create-component",{"pages/component/tubiao/indexps-create-component":function(e,t,n){n("543d").createComponent(n("f3b6"))}},[["pages/component/tubiao/indexps-create-component"]]]);