"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[9724],{4488:(v,c,e)=>{e.r(c),e.d(c,{MenuRootComponent:()=>o});var t=e(4496),s=e(1236),_=e(3020),a=e(4476);let o=(()=>{class h{constructor(){this._=(0,t.uUt)(a.OY).setTitle("Modifica men\xF9 | La Porta D'Acqua")}static#t=this.\u0275fac=function(i){return new(i||h)};static#e=this.\u0275cmp=t.In1({type:h,selectors:[["app-menu-root"]],hostAttrs:[1,"grow","flex","flex-col"],standalone:!0,features:[t.UHJ],decls:2,vars:0,consts:[[1,"border-solid","border-slate-200","p-2","rounded-md","border"]],template:function(i,l){1&i&&t.wR5(0,"app-list-categories",0)(1,"router-outlet")},dependencies:[s.cP,_.M],encapsulation:2})}return h})()},9052:(v,c,e)=>{e.d(c,{y:()=>d});var t=e(4496),s=e(7760),_=e(6700),a=e(7368),o=e(2700),h=e(1368);function n(i,l){if(1&i&&(t.wR5(0,"img",1),t.wVc(1,"async")),2&i){const u=t.GaO();t.uQ9("max-w-[100%] h-auto min-h-[50px] md:min-h-[100px] ",u.imgClass,""),t._6D("src",t.kDX(1,5,u.imageSrc$),t.K6U),t.E7m("draggable",!1)}}let d=(()=>{class i{constructor(){this.noImage="/assets/img/no-image.jpg",this.imagesService=(0,t.uUt)(s.U),this.imgClass="block rounded",this.image$=new _.g(null),this.imageSrc$=this.image$.pipe((0,a.G)(u=>u instanceof Blob?(0,o.of)(URL.createObjectURL(u)):u&&u.id?this.imagesService.downloadUrl(u.id):(0,o.of)(this.noImage)))}set image(u){this.image$.next(u??null)}static#t=this.\u0275fac=function(M){return new(M||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-show-image"]],inputs:{imgClass:"imgClass",image:"image"},standalone:!0,features:[t.UHJ],decls:2,vars:3,consts:[[3,"draggable","class","src"],[3,"draggable","src"]],template:function(M,f){1&M&&(t.yuY(0,n,2,7,"img",0),t.wVc(1,"async")),2&M&&t.C0Y(0,t.kDX(1,1,f.imageSrc$)?0:-1)},dependencies:[h.a],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}"],changeDetection:0})}return i})()},8128:(v,c,e)=>{function t(s){if(!s)return null;const _=s.match(/filename="(.+)"/);return _?_[1]:null}e.d(c,{k:()=>t})},2264:(v,c,e)=>{e.d(c,{W:()=>s});var t=e(8400);class s extends t.w{constructor(a){super(a),this.filename=a.filename,this.status=a.status,this.key=a.key,this.original_id=a.original_id,this.tag=a.tag,this.url=a.url}}},7760:(v,c,e)=>{e.d(c,{U:()=>a});var t=e(6012),s=e(2264),_=e(4496);let a=(()=>{class o extends t.s{constructor(){super(s.W,"images")}removeFromRecord(n,d){return this.patch(`${n}/remove_from_record`,{record_type:d.record_type,record_id:d.record_id})}updateRecord(n,d){return this.patch("record",{image_ids:d,record_type:n.record_type,record_id:n.record_id})}downloadUrl(n){return this.url(`${n}/download`)}static#t=this.\u0275fac=function(d){return new(d||o)};static#e=this.\u0275prov=_.wxM({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},832:(v,c,e)=>{e.d(c,{I:()=>a,w:()=>_});var t=e(4496),s=e(3480);let _=(()=>{class o{constructor(n){this.tuiFocusVisibleChange=n}}return o.\u0275fac=function(n){return new(n||o)(t.GI1(s.MF))},o.\u0275dir=t.Sc5({type:o,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[t.M5G([s.UF,s.MF])]}),o})(),a=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({}),o})()},4259:(v,c,e)=>{e.d(c,{U9:()=>h,_k:()=>o});var t=e(4496),s=e(7232);class a{constructor(d){this.$implicit=d}}let o=(()=>{class n{constructor(i,l){this.viewContainer=i,this.templateRef=l}set tuiRepeatTimesOf(i){const l=Math.floor((0,s.K6)(i,0,65536)),{length:u}=this.viewContainer;i<u?this.removeContainers(u-i):this.addContainers(l)}addContainers(i){for(let l=this.viewContainer.length;l<i;l++)this.viewContainer.createEmbeddedView(this.templateRef,new a(l))}removeContainers(i){for(let l=0;l<i;l++)this.viewContainer.remove()}}return n.\u0275fac=function(i){return new(i||n)(t.GI1(t.y8U),t.GI1(t.Yw2))},n.\u0275dir=t.Sc5({type:n,selectors:[["","tuiRepeatTimes","","tuiRepeatTimesOf",""]],inputs:{tuiRepeatTimesOf:"tuiRepeatTimesOf"}}),n})(),h=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.a4G({type:n}),n.\u0275inj=t.s3X({}),n})()},1512:(v,c,e)=>{e.d(c,{C:()=>D,w:()=>T});var t=e(4496),s=e(900),_=e(4392),a=e(4164),o=e(3480),h=e(4680),n=e(3972),d=e(5944),i=e(3412),l=e(4704),u=e(3656),M=e(1368);const f=["tuiLink",""];function p(r,C){if(1&r&&t.wR5(0,"tui-svg",3),2&r){const g=t.GaO();t.E7m("src",g.icon||"")}}function P(r,C){if(1&r&&t.wR5(0,"tui-svg",4),2&r){const g=t.GaO();t.E7m("src",g.icon||"")}}const E=["*"];let D=(()=>{class r{constructor(g,m,O){this.el=g,this.mode$=m,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,i.U)((0,s.Ax)(this.el.nativeElement,"focusin").pipe((0,l.k)(_.Ml)),(0,s.Ax)(this.el.nativeElement,"focusout").pipe((0,l.k)(_.so))),O.subscribe(L=>{this.focusVisible=L})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,a.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return r.\u0275fac=function(g){return new(g||r)(t.GI1(t.GMv),t.GI1(d.Yx),t.GI1(o.MF))},r.\u0275cmp=t.In1({type:r,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(g,m){1&g&&t.qCj("$.data-mode.attr",function(){return m.mode$}),2&g&&(t.e48("data-host-mode",m.mode),t.eAK("_pseudo",m.pseudo)("_icon-rotated",m.iconRotated)("_focus-visible",m.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,h.NK)(r),o.MF,o.UF,n.Ir])],attrs:f,ngContentSelectors:E,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(g,m){1&g&&(t.kPM(),t.yuY(0,p,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,P,1,1,"tui-svg",2)),2&g&&(t.E7m("ngIf",m.iconAlignLeft),t.yG2(3),t.E7m("ngIf",m.iconAlignRight))},dependencies:[u.Wu,M.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),r})(),T=(()=>{class r{}return r.\u0275fac=function(g){return new(g||r)},r.\u0275mod=t.a4G({type:r}),r.\u0275inj=t.s3X({imports:[[M.MD,u.Yt]]}),r})()},1496:(v,c,e)=>{e.d(c,{I:()=>_});var t=e(112),s=e(3120);function _(a=0,o=t.M){return a<0&&(a=0),(0,s.k)(a,a,o)}}}]);