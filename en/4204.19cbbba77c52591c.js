"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4204],{4488:(v,d,e)=>{e.r(d),e.d(d,{MenuRootComponent:()=>o});var t=e(4496),r=e(2992),u=e(6354),a=e(4476);let o=(()=>{class h{constructor(){this._=(0,t.uUt)(a.OY).setTitle("Edit men\xF9 | La Porta D'Acqua")}static#t=this.\u0275fac=function(i){return new(i||h)};static#e=this.\u0275cmp=t.In1({type:h,selectors:[["app-menu-root"]],hostAttrs:[1,"grow","flex","flex-col"],standalone:!0,features:[t.UHJ],decls:2,vars:0,consts:[[1,"border-solid","border-slate-200","p-2","rounded-md","border"]],template:function(i,g){1&i&&t.wR5(0,"app-list-categories",0)(1,"router-outlet")},dependencies:[r.cP,u.M],encapsulation:2})}return h})()},9052:(v,d,e)=>{e.d(d,{y:()=>c});var t=e(4496),r=e(7760),u=e(6700),a=e(7368),o=e(2700),h=e(1368);function n(i,g){if(1&i&&(t.wR5(0,"img",1),t.wVc(1,"async")),2&i){const _=t.GaO();t.m8U(_.imgClass),t._6D("src",t.kDX(1,5,_.imageSrc$),t.K6U),t.E7m("draggable",!1)}}let c=(()=>{class i{constructor(){this.noImage="/assets/img/no-image.jpg",this.imagesService=(0,t.uUt)(r.U),this.imgClass="block rounded",this.image$=new u.g(null),this.imageSrc$=this.image$.pipe((0,a.G)(_=>_ instanceof File?(0,o.of)(URL.createObjectURL(_)):_&&_.id?this.imagesService.downloadUrl(_.id):(0,o.of)(this.noImage)))}set image(_){this.image$.next(_??null)}static#t=this.\u0275fac=function(M){return new(M||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-show-image"]],inputs:{imgClass:"imgClass",image:"image"},standalone:!0,features:[t.UHJ],decls:2,vars:3,consts:[[3,"draggable","class","src"],[3,"draggable","src"]],template:function(M,O){1&M&&(t.yuY(0,n,2,7,"img",0),t.wVc(1,"async")),2&M&&t.C0Y(0,t.kDX(1,1,O.imageSrc$)?0:-1)},dependencies:[h.a],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}"],changeDetection:0})}return i})()},2264:(v,d,e)=>{e.d(d,{W:()=>r});var t=e(8400);class r extends t.w{constructor(a){super(a),this.filename=a.filename,this.status=a.status,this.key=a.key,this.original_id=a.original_id,this.tag=a.tag,this.url=a.url}}},7760:(v,d,e)=>{e.d(d,{U:()=>a});var t=e(6012),r=e(2264),u=e(4496);let a=(()=>{class o extends t.s{constructor(){super(r.W,"images")}removeFromRecord(n,c){return this.patch(`${n}/remove_from_record`,{record_type:c.record_type,record_id:c.record_id})}updateRecord(n,c){return this.patch("record",{image_ids:c,record_type:n.record_type,record_id:n.record_id})}downloadUrl(n){return this.url(`${n}/download`)}static#t=this.\u0275fac=function(c){return new(c||o)};static#e=this.\u0275prov=u.wxM({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},832:(v,d,e)=>{e.d(d,{I:()=>a,w:()=>u});var t=e(4496),r=e(3480);let u=(()=>{class o{constructor(n){this.tuiFocusVisibleChange=n}}return o.\u0275fac=function(n){return new(n||o)(t.GI1(r.MF))},o.\u0275dir=t.Sc5({type:o,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[t.M5G([r.UF,r.MF])]}),o})(),a=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({}),o})()},4259:(v,d,e)=>{e.d(d,{U9:()=>h,_k:()=>o});var t=e(4496),r=e(7232);class a{constructor(c){this.$implicit=c}}let o=(()=>{class n{constructor(i,g){this.viewContainer=i,this.templateRef=g}set tuiRepeatTimesOf(i){const g=Math.floor((0,r.K6)(i,0,65536)),{length:_}=this.viewContainer;i<_?this.removeContainers(_-i):this.addContainers(g)}addContainers(i){for(let g=this.viewContainer.length;g<i;g++)this.viewContainer.createEmbeddedView(this.templateRef,new a(g))}removeContainers(i){for(let g=0;g<i;g++)this.viewContainer.remove()}}return n.\u0275fac=function(i){return new(i||n)(t.GI1(t.y8U),t.GI1(t.Yw2))},n.\u0275dir=t.Sc5({type:n,selectors:[["","tuiRepeatTimes","","tuiRepeatTimesOf",""]],inputs:{tuiRepeatTimesOf:"tuiRepeatTimesOf"}}),n})(),h=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.a4G({type:n}),n.\u0275inj=t.s3X({}),n})()},1512:(v,d,e)=>{e.d(d,{C:()=>D,w:()=>T});var t=e(4496),r=e(900),u=e(4392),a=e(4164),o=e(3480),h=e(4680),n=e(3972),c=e(5944),i=e(3412),g=e(4704),_=e(3656),M=e(1368);const O=["tuiLink",""];function P(s,C){if(1&s&&t.wR5(0,"tui-svg",3),2&s){const l=t.GaO();t.E7m("src",l.icon||"")}}function p(s,C){if(1&s&&t.wR5(0,"tui-svg",4),2&s){const l=t.GaO();t.E7m("src",l.icon||"")}}const E=["*"];let D=(()=>{class s{constructor(l,m,f){this.el=l,this.mode$=m,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,i.U)((0,r.Ax)(this.el.nativeElement,"focusin").pipe((0,g.k)(u.Ml)),(0,r.Ax)(this.el.nativeElement,"focusout").pipe((0,g.k)(u.so))),f.subscribe(L=>{this.focusVisible=L})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,a.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return s.\u0275fac=function(l){return new(l||s)(t.GI1(t.GMv),t.GI1(c.Yx),t.GI1(o.MF))},s.\u0275cmp=t.In1({type:s,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(l,m){1&l&&t.qCj("$.data-mode.attr",function(){return m.mode$}),2&l&&(t.e48("data-host-mode",m.mode),t.eAK("_pseudo",m.pseudo)("_icon-rotated",m.iconRotated)("_focus-visible",m.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,h.NK)(s),o.MF,o.UF,n.Ir])],attrs:O,ngContentSelectors:E,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(l,m){1&l&&(t.kPM(),t.yuY(0,P,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,p,1,1,"tui-svg",2)),2&l&&(t.E7m("ngIf",m.iconAlignLeft),t.yG2(3),t.E7m("ngIf",m.iconAlignRight))},dependencies:[_.Wu,M.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),s})(),T=(()=>{class s{}return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=t.a4G({type:s}),s.\u0275inj=t.s3X({imports:[[M.MD,_.Yt]]}),s})()},1496:(v,d,e)=>{e.d(d,{I:()=>u});var t=e(112),r=e(3120);function u(a=0,o=t.M){return a<0&&(a=0),(0,r.k)(a,a,o)}}}]);