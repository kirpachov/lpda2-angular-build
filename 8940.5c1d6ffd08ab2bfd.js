"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[8940],{8940:(I,C,o)=>{o.r(C),o.d(C,{AdminDashboardComponent:()=>K});var t=o(4496),g=o(1368),_=o(4476),f=o(1528),m=o(2540),E=o(6928),b=o(5657),L=o(112),P=o(3252),D=o(5800),O=o(7368);class y{constructor(){this.subject=new m.o(1),this.subscriptions=new E.wH}doFilter(s){this.subject.next(s)}dispose(){this.subscriptions.unsubscribe()}notEmpty(s,n){this.subscriptions.add(this.subject.subscribe(e=>{if(e[s]){const r=e[s].currentValue;null!=r&&n(r)}}))}has(s,n){this.subscriptions.add(this.subject.subscribe(e=>{e[s]&&n(e[s].currentValue)}))}notFirst(s,n){this.subscriptions.add(this.subject.subscribe(e=>{e[s]&&!e[s].isFirstChange()&&n(e[s].currentValue)}))}notFirstAndEmpty(s,n){this.subscriptions.add(this.subject.subscribe(e=>{if(e[s]&&!e[s].isFirstChange()){const r=e[s].currentValue;null!=r&&n(r)}}))}}const M=new t.UbH("NGX_ECHARTS_CONFIG");let i=(()=>{class a{constructor(n,e,r){this.el=e,this.ngZone=r,this.options=null,this.theme=null,this.initOpts=null,this.merge=null,this.autoResize=!0,this.loading=!1,this.loadingType="default",this.loadingOpts=null,this.chartInit=new t._w7,this.optionsError=new t._w7,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartHighlight=this.createLazyEvent("highlight"),this.chartDownplay=this.createLazyEvent("downplay"),this.chartSelectChanged=this.createLazyEvent("selectchanged"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendLegendSelectAll=this.createLazyEvent("legendselectall"),this.chartLegendLegendInverseSelect=this.createLazyEvent("legendinverseselect"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartGraphRoam=this.createLazyEvent("graphroam"),this.chartGeoRoam=this.createLazyEvent("georoam"),this.chartTreeRoam=this.createLazyEvent("treeroam"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartGeoSelectChanged=this.createLazyEvent("geoselectchanged"),this.chartGeoSelected=this.createLazyEvent("geoselected"),this.chartGeoUnselected=this.createLazyEvent("geounselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartGlobalCursorTaken=this.createLazyEvent("globalcursortaken"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.chart$=new m.o(1),this.resize$=new b.E,this.changeFilter=new y,this.resizeObFired=!1,this.echarts=n.echarts,this.theme=n.theme||null}ngOnChanges(n){this.changeFilter.doFilter(n)}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe((0,D.U)(100,L.M,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(n=>{for(const e of n)e.target===this.el.nativeElement&&(this.resizeObFired?this.animationFrameID=window.requestAnimationFrame(()=>{this.resize$.next()}):this.resizeObFired=!0)})),this.resizeOb.observe(this.el.nativeElement)),this.changeFilter.notFirstAndEmpty("options",n=>this.onOptionsChange(n)),this.changeFilter.notFirstAndEmpty("merge",n=>this.setOption(n)),this.changeFilter.has("loading",n=>this.toggleLoading(!!n)),this.changeFilter.notFirst("theme",()=>this.refreshChart())}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.loadingSub&&this.loadingSub.unsubscribe(),this.changeFilter.dispose(),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(n){this.chart?n?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading():this.loadingSub=this.chart$.subscribe(e=>n?e.showLoading(this.loadingType,this.loadingOpts):e.hideLoading())}setOption(n,e){if(this.chart)try{this.chart.setOption(n,e)}catch(r){console.error(r),this.optionsError.emit(r)}}refreshChart(){var n=this;return(0,f.c)(function*(){n.dispose(),yield n.initChart()})()}createChart(){const n=this.el.nativeElement;if(window&&window.getComputedStyle){const e=window.getComputedStyle(n,null).getPropertyValue("height");(!e||"0px"===e)&&(!n.style.height||"0px"===n.style.height)&&(n.style.height="400px")}return this.ngZone.runOutsideAngular(()=>("function"==typeof this.echarts?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:r})=>r(n,this.theme,this.initOpts)))}initChart(){var n=this;return(0,f.c)(function*(){yield n.onOptionsChange(n.options),n.merge&&n.chart&&n.setOption(n.merge)})()}onOptionsChange(n){var e=this;return(0,f.c)(function*(){n&&(e.chart||(e.chart=yield e.createChart(),e.chart$.next(e.chart),e.chartInit.emit(e.chart)),e.setOption(e.options,!0))})()}createLazyEvent(n){return this.chartInit.pipe((0,O.G)(e=>new P._(r=>(e.on(n,S=>this.ngZone.run(()=>r.next(S))),()=>{this.chart&&(this.chart.isDisposed()||e.off(n))}))))}static#t=this.\u0275fac=function(e){return new(e||a)(t.GI1(M),t.GI1(t.GMv),t.GI1(t.WW2))};static#e=this.\u0275dir=t.Sc5({type:a,selectors:[["echarts"],["","echarts",""]],inputs:{options:"options",theme:"theme",initOpts:"initOpts",merge:"merge",autoResize:"autoResize",loading:"loading",loadingType:"loadingType",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartHighlight:"chartHighlight",chartDownplay:"chartDownplay",chartSelectChanged:"chartSelectChanged",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendLegendSelectAll:"chartLegendLegendSelectAll",chartLegendLegendInverseSelect:"chartLegendLegendInverseSelect",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartGraphRoam:"chartGraphRoam",chartGeoRoam:"chartGeoRoam",chartTreeRoam:"chartTreeRoam",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartGeoSelectChanged:"chartGeoSelectChanged",chartGeoSelected:"chartGeoSelected",chartGeoUnselected:"chartGeoUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartGlobalCursorTaken:"chartGlobalCursorTaken",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],standalone:!0,features:[t.SYr]})}return a})();const h=(a={})=>({provide:M,useFactory:()=>({...a,echarts:()=>o.e(8820).then(o.bind(o,8820))})});var T=o(6772),c=o(964);var R=o(4704);let F=(()=>{class a extends T.A{constructor(){super("/admin/stats")}stats(n={}){return this.http.get("",{params:n}).pipe((0,R.k)(e=>function l(a){return"object"==typeof a&&null!==a&&function d(a){return"object"==typeof a&&null!==a&&Object.keys(a).every(s=>"string"==typeof s&&"number"==typeof a[s])}(a["reservations-by-hour"])}(e)?e:(console.warn("Invalid stats response",e),{})),(0,R.k)(e=>function A(a){const s={...a};if(s["reservations-by-hour"]&&a["reservations-by-hour"]){s["reservations-by-hour"]={};for(const[n,e]of Object.entries(a["reservations-by-hour"]))s["reservations-by-hour"][(0,c.Q9)(n)]=e}return s}(e)))}static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275prov=t.wxM({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var G=o(3616),B=o(8824),z=o(3480),x=o(7692),N=o(1128),U=o(7048),k=o(8392),H=o(8256);const j=()=>({});let Y=(()=>{class a{constructor(){this.service=(0,t.uUt)(F),this.destroy$=(0,t.uUt)(z.UF),this.notifications=(0,t.uUt)(N.E),this.datePipe=(0,t.uUt)(g.y),this.loading=(0,t.OCB)(!1),this.fromDate=new Date,this.toDate=new Date}onChartInit(n){this.echart=n,this.refresh()}refresh(){const n=this.datePipe.transform(this.fromDate,"yyyy-MM-dd")||"",e=this.datePipe.transform(this.toDate,"yyyy-MM-dd")||"";this.loading.set(!0),this.service.stats({reservations_date_from:n,reservations_date_to:e,keys:"reservations-by-hour"}).pipe((0,G.a)(this.destroy$),(0,B.U)(()=>this.loading.set(!1))).subscribe({next:r=>{r["reservations-by-hour"]?this.echart?.setOption(this.dataLoadedUpdateChart(r["reservations-by-hour"])):this.notifications.error("No data available :(")},error:r=>{this.notifications.error(r instanceof U.gj?(0,H.mk)(r):k.a)}})}dataLoadedUpdateChart(n){const e=Object.keys(n),r=Object.values(n);return{xAxis:{type:"category",data:e,name:"Data e ora"},yAxis:{type:"value",name:"Prenotati"},series:[{data:r,type:"bar"}]}}static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275cmp=t.In1({type:a,selectors:[["app-reservations-by-hour-bar-chart"]],inputs:{fromDate:"fromDate",toDate:"toDate"},standalone:!0,features:[t.M5G([h(),z.UF]),t.UHJ],decls:2,vars:3,consts:[[3,"showLoader"],["echarts","",3,"options","chartInit"]],template:function(e,r){1&e&&(t.I0R(0,"tui-loader",0)(1,"div",1),t.qCj("chartInit",function(W){return r.onChartInit(W)}),t.C$Y()()),2&e&&(t.E7m("showLoader",r.loading()),t.yG2(),t.E7m("options",t.q4q(2,j)))},dependencies:[i,x.Sk,x.Cb],encapsulation:2,changeDetection:0})}return a})();var $=o(1512),w=o(2992);let K=(()=>{class a{constructor(){this._=(0,t.uUt)(_.OY).setTitle("Dashboard | La Porta D'Acqua")}static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275cmp=t.In1({type:a,selectors:[["app-admin-dashboard"]],standalone:!0,features:[t.UHJ],decls:9,vars:0,consts:()=>{let n,e,r;return n="La porta d'acqua - dashboard",e=" Prenotazioni ",r=" Di seguito la quantit\xE0 di prenotati per oggi. ",[n,["tuiLink","","routerLink","/admin/reservations"],[1,"text-xl"],e,r]},template:function(e,r){1&e&&(t.I0R(0,"h1"),t.aS0(1,0),t.C$Y(),t.I0R(2,"div")(3,"a",1)(4,"span",2),t.aS0(5,3),t.C$Y()(),t.I0R(6,"p"),t.aS0(7,4),t.C$Y(),t.wR5(8,"app-reservations-by-hour-bar-chart"),t.C$Y())},dependencies:[g.MD,Y,$.w,$.C,w.qQ,w.ER]})}return a})()},964:(I,C,o)=>{o.d(C,{Ez:()=>L,In:()=>O,Q1:()=>M,Q9:()=>D,QX:()=>E,Qx:()=>_,_0:()=>y,ay:()=>f,e6:()=>g,yc:()=>m});var t=o(400);const g=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;function _(i,h){return new Date(`${i.formattedYear}-${i.formattedMonthPart}-${i.formattedDayPart} ${h.toString()}`).toISOString()}function f(i){if(!("string"==typeof i&&i.length>0&&i.match(g)))return console.error("Invalid string provided to isoStringToTuiDay",{isoString:i}),null;const h=new Date(i);return new t.EK(h.getFullYear(),h.getMonth()+1,h.getDate())}function m(i){if("string"==typeof i&&i.length>0&&i.match(/^\d{4}-\d{1,2}-\d{1,2}\s{1}00:00$/)&&(i=i.split(" ")[0]),!("string"==typeof i&&i.length>0&&i.match(/^\d{4}-\d{1,2}-\d{1,2}$/)))return console.error("Invalid string provided to stringToTuiDay. Expected format YYYY-MM-DD, got",{str:i}),null;const{day:h,month:v,year:p}=t.EK.parseRawDateString(i,"YMD");return new t.EK(p,v,h)}function E(i){if(!("string"==typeof i&&i.length>0&&i.match(g)))return console.error("Invalid string provided to isoStringToTuiTime",{isoString:i}),null;const h=new Date(i);return new t.uc(h.getHours(),h.getMinutes())}function L(i){return new Date(`1970-01-01 ${i.toString()}`).toISOString()}function D(i){const h=new Date(`${i}Z`);return`${h.getFullYear()}-${String(h.getMonth()+1).padStart(2,"0")}-${String(h.getDate()).padStart(2,"0")} ${String(h.getHours()).padStart(2,"0")}:${String(h.getMinutes()).padStart(2,"0")}`}function O(i){return function P(i){const h=new Date(`1970-01-01 ${i}`);return`${`${h.getUTCHours()}`.padStart(2,"0")}:${`${h.getUTCMinutes()}`.padStart(2,"0")}`}(i.toString())}function y(i){return new t.EK(i.getFullYear(),i.getMonth(),i.getDate())}function M(i){return new t.uc(i.getHours(),i.getMinutes())}},1512:(I,C,o)=>{o.d(C,{C:()=>p,w:()=>T});var t=o(4496),g=o(900),_=o(4392),f=o(4164),m=o(3480),E=o(4680),b=o(3972),L=o(5944),P=o(3412),D=o(4704),O=o(3656),y=o(1368);const M=["tuiLink",""];function i(c,u){if(1&c&&t.wR5(0,"tui-svg",3),2&c){const d=t.GaO();t.E7m("src",d.icon||"")}}function h(c,u){if(1&c&&t.wR5(0,"tui-svg",4),2&c){const d=t.GaO();t.E7m("src",d.icon||"")}}const v=["*"];let p=(()=>{class c{constructor(d,l,A){this.el=d,this.mode$=l,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,P.U)((0,g.Ax)(this.el.nativeElement,"focusin").pipe((0,D.k)(_.Ml)),(0,g.Ax)(this.el.nativeElement,"focusout").pipe((0,D.k)(_.so))),A.subscribe(R=>{this.focusVisible=R})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,f.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return c.\u0275fac=function(d){return new(d||c)(t.GI1(t.GMv),t.GI1(L.Yx),t.GI1(m.MF))},c.\u0275cmp=t.In1({type:c,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(d,l){1&d&&t.qCj("$.data-mode.attr",function(){return l.mode$}),2&d&&(t.e48("data-host-mode",l.mode),t.eAK("_pseudo",l.pseudo)("_icon-rotated",l.iconRotated)("_focus-visible",l.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,E.NK)(c),m.MF,m.UF,b.Ir])],attrs:M,ngContentSelectors:v,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(d,l){1&d&&(t.kPM(),t.yuY(0,i,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,h,1,1,"tui-svg",2)),2&d&&(t.E7m("ngIf",l.iconAlignLeft),t.yG2(3),t.E7m("ngIf",l.iconAlignRight))},dependencies:[O.Wu,y.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),c})(),T=(()=>{class c{}return c.\u0275fac=function(d){return new(d||c)},c.\u0275mod=t.a4G({type:c}),c.\u0275inj=t.s3X({imports:[[y.MD,O.Yt]]}),c})()}}]);