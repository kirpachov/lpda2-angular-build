"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[668],{668:(R,g,s)=>{s.d(g,{a2:()=>ie,iy:()=>ne,Ep:()=>E,uG:()=>oe});var m=s(1316),n=s(4496),a=s(3480);let c=(()=>{class e{constructor(t){this.tuiPan=t}}return e.\u0275fac=function(t){return new(t||e)(n.GI1(a.qc))},e.\u0275dir=n.Sc5({type:e,selectors:[["","tuiPan",""]],outputs:{tuiPan:"tuiPan"},features:[n.M5G([a.qc])]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.a4G({type:e}),e.\u0275inj=n.s3X({}),e})(),P=(()=>{class e{constructor(t){this.tuiSwipe=t}}return e.\u0275fac=function(t){return new(t||e)(n.GI1(a.SA))},e.\u0275dir=n.Sc5({type:e,selectors:[["","tuiSwipe",""]],outputs:{tuiSwipe:"tuiSwipe"},features:[n.M5G([a.SA])]}),e})(),G=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.a4G({type:e}),e.\u0275inj=n.s3X({}),e})();var l=s(900),v=s(4392),b=s(7232),A=s(4680),T=s(1588),F=s(9392),d=s(1368),N=s(6684),B=s(5800),f=s(4704),H=s(9212),M=s(3252),j=s(7648),O=s(1300);const y=new n.UbH("Root element for IntersectionObserver"),D="0px 0px 0px 0px";function $(e){return e||D}function U(e){return e?.split(",").map(parseFloat)||0}new n.UbH("rootMargin for IntersectionObserver",{providedIn:"root",factory:()=>D}),new n.UbH("threshold for IntersectionObserver",{providedIn:"root",factory:()=>0});const k=typeof IntersectionObserver<"u"?IntersectionObserver:class{constructor(){this.root=null,this.rootMargin="",this.thresholds=[]}observe(){}unobserve(){}disconnect(){}takeRecords(){return[]}};let w=(()=>{class e extends k{constructor(t,i,r){super(u=>{this.callbacks.forEach((p,h)=>{const I=u.filter(({target:_})=>_===h);return I.length&&p(I,this)})},{root:t&&t.nativeElement,rootMargin:$(i),threshold:U(r)}),this.callbacks=new Map}observe(t,i=(()=>{})){super.observe(t),this.callbacks.set(t,i)}unobserve(t){super.unobserve(t),this.callbacks.delete(t)}ngOnDestroy(){this.disconnect()}}return e.\u0275fac=function(t){return new(t||e)(n.GI1(y,8),n.gJ8("waIntersectionRootMargin"),n.gJ8("waIntersectionThreshold"))},e.\u0275dir=n.Sc5({type:e,selectors:[["","waIntersectionObserver",""]],exportAs:["IntersectionObserver"],features:[n.eg9]}),e})(),x=(()=>{class e extends M._{constructor({nativeElement:t},i){return super(r=>(i.observe(t,u=>{r.next(u)}),()=>{i.unobserve(t)})),this.pipe((0,j.o)())}}return e.\u0275fac=function(t){return new(t||e)(n.CoB(n.GMv),n.CoB(w))},e.\u0275prov=n.wxM({token:e,factory:e.\u0275fac}),e})(),L=(()=>{class e{constructor(t){this.waIntersectionObservee=t}}return e.\u0275fac=function(t){return new(t||e)(n.GI1(x))},e.\u0275dir=n.Sc5({type:e,selectors:[["","waIntersectionObservee",""]],outputs:{waIntersectionObservee:"waIntersectionObservee"},features:[n.M5G([x])]}),e})(),K=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=n.Sc5({type:e,selectors:[["","waIntersectionRoot",""]],features:[n.M5G([{provide:y,useExisting:n.GMv}])]}),e})(),X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.a4G({type:e}),e.\u0275inj=n.s3X({}),e})();new n.UbH("Intersection Observer API support",{providedIn:"root",factory:()=>!!(0,n.uUt)(O.sn).IntersectionObserver});var V=s(6700),W=s(3412),Y=s(6040),z=s(1496),J=s(8212),Q=s(4304);function Z(e,o){1&e&&n.C_f(0)}function q(e,o){if(1&e){const t=n.KQA();n.I0R(0,"fieldset",5),n.qCj("waIntersectionObservee",function(r){const p=n.usT(t).index,h=n.GaO();return n.CGJ(h.onIntersection(r[0],p))}),n.C_f(1,6),n.C$Y()}if(2&e){const t=o.$implicit,i=o.index,r=n.GaO();n.E7m("disabled",r.isDisabled(i))("ngStyle",r.getStyle(r.itemsCount)),n.yG2(),n.E7m("ngTemplateOutlet",t)}}let ee=(()=>{class e{constructor(t){this.el=t,this.tuiCarouselScroll=(0,l.Ax)(this.el.nativeElement,"wheel").pipe((0,N.I)(({deltaX:i})=>Math.abs(i)>20),(0,B.U)(500),(0,f.k)(({deltaX:i})=>Math.sign(i)),(0,H.y)(()=>{this.el.nativeElement.scrollLeft=10}))}}return e.\u0275fac=function(t){return new(t||e)(n.GI1(n.GMv))},e.\u0275dir=n.Sc5({type:e,selectors:[["","tuiCarouselScroll",""]],outputs:{tuiCarouselScroll:"tuiCarouselScroll"}}),e})(),E=(()=>{class e extends M._{constructor(t,i){super(r=>this.output$.subscribe(r)),this.el=t,this.visible$=i,this.duration$=new V.g(0),this.running$=(0,W.U)((0,l.Ax)(this.el.nativeElement,"mouseenter").pipe((0,f.k)(v.so)),(0,l.Ax)(this.el.nativeElement,"touchstart").pipe((0,f.k)(v.so)),(0,l.Ax)(this.el.nativeElement,"touchend").pipe((0,f.k)(v.Ml)),(0,l.Ax)(this.el.nativeElement,"mouseleave").pipe((0,f.k)(v.Ml)),this.visible$),this.output$=(0,Y.E)([this.duration$,this.running$]).pipe((0,l.UL)(([r])=>(0,z.I)(r),r=>r.every(Boolean)))}set duration(t){this.duration$.next(t)}set index(t){this.duration$.next(this.duration$.value)}}return e.\u0275fac=function(t){return new(t||e)(n.GI1(n.GMv),n.GI1(O.Mv))},e.\u0275dir=n.Sc5({type:e,selectors:[["tui-carousel"]],inputs:{duration:"duration",index:"index"},features:[n.eg9]}),e})(),te=(()=>{class e{constructor(t){this.tuiCarouselAutoscroll=t}}return e.\u0275fac=function(t){return new(t||e)(n.GI1(E))},e.\u0275dir=n.Sc5({type:e,selectors:[["","tuiCarouselAutoscroll",""]],outputs:{tuiCarouselAutoscroll:"tuiCarouselAutoscroll"}}),e})(),ne=(()=>{class e{constructor(t,i,r){this.cdr=t,this.el=i,this.isMobile=r,this.translate=0,this.draggable=!1,this.itemsCount=1,this.index=0,this.indexChange=new n._w7,this.items=v.Jh,this.transitioned=!0}get transform(){return`translateX(${100*(this.transitioned?this.computedTranslate:this.translate)}%)`}onTransitioned(t){this.transitioned=t,t||(this.translate=this.computedTranslate)}getStyle(t){const i=100/t+"%";return{flexBasis:i,minWidth:i,maxWidth:i}}next(){this.items&&this.index===this.items.length-this.itemsCount||this.updateIndex(this.index+1)}prev(){this.updateIndex(this.index-1)}isDisabled(t){return t<this.index||t>this.index+this.itemsCount}onIntersection({intersectionRatio:t},i){t&&1!==t&&!this.transitioned&&this.updateIndex(i-Math.floor(this.itemsCount/2))}onScroll(t){this.isMobile||this.updateIndex(this.index+t)}onPan(t){if(!this.computedDraggable)return;const{clientWidth:i}=this.el.nativeElement;this.translate=(0,b.K6)(t/i+this.translate,1-this.items.length/this.itemsCount,0)}onSwipe(t){"left"===t?this.next():"right"===t&&this.prev()}onAutoscroll(){this.updateIndex(this.index===this.items.length-1?0:this.index+1)}get computedTranslate(){return-this.index/this.itemsCount}get computedDraggable(){return this.isMobile||this.draggable}updateIndex(t){this.index=(0,b.K6)(t,0,this.items.length-1),this.indexChange.emit(this.index),this.cdr.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(n.GI1(n.kD9),n.GI1(n.GMv),n.GI1(A.Mv))},e.\u0275cmp=n.In1({type:e,selectors:[["tui-carousel"]],contentQueries:function(t,i,r){if(1&t&&n.szK(r,T.S,4,n.Yw2),2&t){let u;n.wto(u=n.Gqi())&&(i.items=u)}},hostVars:4,hostBindings:function(t,i){1&t&&n.qCj("touchstart",function(){return i.onTransitioned(!1)})("touchend",function(){return i.onTransitioned(!0)})("mousedown",function(){return i.onTransitioned(!1)})("mouseup.silent",function(){return i.onTransitioned(!0)},!1,n.wLc),2&t&&n.eAK("_draggable",i.draggable)("_transitioned",i.transitioned)},inputs:{draggable:"draggable",itemsCount:"itemsCount",index:"index"},outputs:{indexChange:"indexChange"},decls:6,vars:6,consts:[[4,"ngIf"],[1,"t-scroller",3,"tuiCarouselScroll"],["waIntersectionObserver","","waIntersectionRoot","","waIntersectionRootMargin","100px 1000000px 100px -51%","waIntersectionThreshold","0,1",1,"t-wrapper"],[1,"t-items",3,"tuiCarouselAutoscroll","tuiPan","tuiSwipe"],["class","t-item",3,"disabled","ngStyle","waIntersectionObservee",4,"ngFor","ngForOf"],[1,"t-item",3,"disabled","ngStyle","waIntersectionObservee"],[3,"ngTemplateOutlet"]],template:function(t,i){1&t&&(n.yuY(0,Z,1,0,"ng-container",0),n.wVc(1,"async"),n.I0R(2,"div",1),n.qCj("tuiCarouselScroll",function(u){return i.onScroll(u)}),n.I0R(3,"div",2)(4,"div",3),n.qCj("tuiCarouselAutoscroll",function(){return i.onAutoscroll()})("tuiPan",function(u){return i.onPan(u[0])})("tuiSwipe",function(u){return i.onSwipe(u.direction)}),n.yuY(5,q,2,3,"fieldset",4),n.C$Y()()()),2&t&&(n.E7m("ngIf",n.kDX(1,4,i.items.changes)),n.yG2(4),n.m4B("transform",i.transform),n.yG2(),n.E7m("ngForOf",i.items))},dependencies:[d.u_,ee,w,K,te,c,P,d.ay,d.Qt,L,d.XV,d.a],styles:['[_nghost-%COMP%]{position:relative;display:block;overflow:hidden}._draggable[_nghost-%COMP%]{-webkit-user-select:none;-moz-user-select:none;user-select:none}._draggable[_nghost-%COMP%]:hover{cursor:grab}._draggable[_nghost-%COMP%]:active{cursor:grabbing}.t-items[_ngcontent-%COMP%]{display:flex}._transitioned[_nghost-%COMP%]   .t-items[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:var(--tui-carousel-padding, 0 1.25rem);flex:1;min-width:100%;max-width:100%;box-sizing:border-box;border:none;margin:0}.t-wrapper[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;left:0;right:0;min-width:100%;overflow:hidden}.t-scroller[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;display:flex;overflow:auto;overscroll-behavior-x:none}.t-scroller[_ngcontent-%COMP%]::-webkit-scrollbar, .t-scroller[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-scroller[_ngcontent-%COMP%]:before, .t-scroller[_ngcontent-%COMP%]:after{content:"";display:block;min-width:1rem}'],changeDetection:0}),(0,m.UN)([F.w7],e.prototype,"getStyle",null),e})(),ie=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=n.Sc5({type:e,selectors:[["","tuiCarouselButtons",""]],features:[n.M5G([(0,J.eE)({appearance:Q.oN.Secondary,shape:"rounded",size:"m"})])]}),e})(),oe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.a4G({type:e}),e.\u0275inj=n.s3X({imports:[[d.MD,X,C,G,T.s]]}),e})()},1496:(R,g,s)=>{s.d(g,{I:()=>a});var m=s(112),n=s(3120);function a(c=0,C=m.M){return c<0&&(c=0),(0,n.k)(c,c,C)}}}]);