"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[2136],{4488:(C,h,e)=>{e.r(h),e.d(h,{MenuRootComponent:()=>i});var t=e(4496),l=e(2992),v=e(6354),r=e(4476);let i=(()=>{class _{constructor(){this._=(0,t.uUt)(r.OY).setTitle("Modifica men\xF9 | La Porta D'Acqua")}static#t=this.\u0275fac=function(s){return new(s||_)};static#e=this.\u0275cmp=t.In1({type:_,selectors:[["app-menu-root"]],hostAttrs:[1,"grow","flex","flex-col"],standalone:!0,features:[t.UHJ],decls:2,vars:0,consts:[[1,"border-solid","border-slate-200","p-2","rounded-md","border"]],template:function(s,m){1&s&&t.wR5(0,"app-list-categories",0)(1,"router-outlet")},dependencies:[l.cP,v.M],encapsulation:2})}return _})()},9052:(C,h,e)=>{e.d(h,{y:()=>a});var t=e(4496),l=e(7760),v=e(6700),r=e(7368),i=e(2700),_=e(1368);function o(s,m){if(1&s&&(t.wR5(0,"img",1),t.wVc(1,"async")),2&s){const g=t.GaO();t.m8U(g.imgClass),t._6D("src",t.kDX(1,5,g.imageSrc$),t.K6U),t.E7m("draggable",!1)}}let a=(()=>{class s{constructor(){this.noImage="/assets/img/no-image.jpg",this.imagesService=(0,t.uUt)(l.U),this.imgClass="block rounded",this.image$=new v.g(null),this.imageSrc$=this.image$.pipe((0,r.G)(g=>g instanceof File?(0,i.of)(URL.createObjectURL(g)):g&&g.id?this.imagesService.downloadUrl(g.id):(0,i.of)(this.noImage)))}set image(g){this.image$.next(g??null)}static#t=this.\u0275fac=function(O){return new(O||s)};static#e=this.\u0275cmp=t.In1({type:s,selectors:[["app-show-image"]],inputs:{imgClass:"imgClass",image:"image"},standalone:!0,features:[t.UHJ],decls:2,vars:3,consts:[[3,"draggable","class","src"],[3,"draggable","src"]],template:function(O,P){1&O&&(t.yuY(0,o,2,7,"img",0),t.wVc(1,"async")),2&O&&t.C0Y(0,t.kDX(1,1,P.imageSrc$)?0:-1)},dependencies:[_.a],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}"],changeDetection:0})}return s})()},2264:(C,h,e)=>{e.d(h,{W:()=>l});var t=e(8400);class l extends t.w{constructor(r){super(r),this.filename=r.filename,this.status=r.status,this.key=r.key,this.original_id=r.original_id,this.tag=r.tag,this.url=r.url}}},7760:(C,h,e)=>{e.d(h,{U:()=>r});var t=e(6012),l=e(2264),v=e(4496);let r=(()=>{class i extends t.s{constructor(){super(l.W,"images")}removeFromRecord(o,a){return this.patch(`${o}/remove_from_record`,{record_type:a.record_type,record_id:a.record_id})}updateRecord(o,a){return this.patch("record",{image_ids:a,record_type:o.record_type,record_id:o.record_id})}downloadUrl(o){return this.url(`${o}/download`)}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275prov=v.wxM({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},832:(C,h,e)=>{e.d(h,{I:()=>r,w:()=>v});var t=e(4496),l=e(3480);let v=(()=>{class i{constructor(o){this.tuiFocusVisibleChange=o}}return i.\u0275fac=function(o){return new(o||i)(t.GI1(l.MF))},i.\u0275dir=t.Sc5({type:i,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[t.M5G([l.UF,l.MF])]}),i})(),r=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.a4G({type:i}),i.\u0275inj=t.s3X({}),i})()},4259:(C,h,e)=>{e.d(h,{U9:()=>_,_k:()=>i});var t=e(4496),l=e(7232);class r{constructor(a){this.$implicit=a}}let i=(()=>{class o{constructor(s,m){this.viewContainer=s,this.templateRef=m}set tuiRepeatTimesOf(s){const m=Math.floor((0,l.K6)(s,0,65536)),{length:g}=this.viewContainer;s<g?this.removeContainers(g-s):this.addContainers(m)}addContainers(s){for(let m=this.viewContainer.length;m<s;m++)this.viewContainer.createEmbeddedView(this.templateRef,new r(m))}removeContainers(s){for(let m=0;m<s;m++)this.viewContainer.remove()}}return o.\u0275fac=function(s){return new(s||o)(t.GI1(t.y8U),t.GI1(t.Yw2))},o.\u0275dir=t.Sc5({type:o,selectors:[["","tuiRepeatTimes","","tuiRepeatTimesOf",""]],inputs:{tuiRepeatTimesOf:"tuiRepeatTimesOf"}}),o})(),_=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({}),o})()},1512:(C,h,e)=>{e.d(h,{C:()=>I,w:()=>R});var t=e(4496),l=e(900),v=e(4392),r=e(4164),i=e(3480),_=e(4680),o=e(3972),a=e(5944),s=e(3412),m=e(4704),g=e(3656),O=e(1368);const P=["tuiLink",""];function f(M,u){if(1&M&&t.wR5(0,"tui-svg",3),2&M){const c=t.GaO();t.E7m("src",c.icon||"")}}function D(M,u){if(1&M&&t.wR5(0,"tui-svg",4),2&M){const c=t.GaO();t.E7m("src",c.icon||"")}}const T=["*"];let I=(()=>{class M{constructor(c,n,d){this.el=c,this.mode$=n,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,s.U)((0,l.Ax)(this.el.nativeElement,"focusin").pipe((0,m.k)(v.Ml)),(0,l.Ax)(this.el.nativeElement,"focusout").pipe((0,m.k)(v.so))),d.subscribe(p=>{this.focusVisible=p})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,r.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return M.\u0275fac=function(c){return new(c||M)(t.GI1(t.GMv),t.GI1(a.Yx),t.GI1(i.MF))},M.\u0275cmp=t.In1({type:M,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(c,n){1&c&&t.qCj("$.data-mode.attr",function(){return n.mode$}),2&c&&(t.e48("data-host-mode",n.mode),t.eAK("_pseudo",n.pseudo)("_icon-rotated",n.iconRotated)("_focus-visible",n.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,_.NK)(M),i.MF,i.UF,o.Ir])],attrs:P,ngContentSelectors:T,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(c,n){1&c&&(t.kPM(),t.yuY(0,f,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,D,1,1,"tui-svg",2)),2&c&&(t.E7m("ngIf",n.iconAlignLeft),t.yG2(3),t.E7m("ngIf",n.iconAlignRight))},dependencies:[g.Wu,O.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),M})(),R=(()=>{class M{}return M.\u0275fac=function(c){return new(c||M)},M.\u0275mod=t.a4G({type:M}),M.\u0275inj=t.s3X({imports:[[O.MD,g.Yt]]}),M})()},4736:(C,h,e)=>{e.d(h,{M:()=>r,O:()=>i});var t=e(4496),l=e(5944),v=e(4704);let r=(()=>{class _{constructor(a){this.months$=a}transform({month:a}){return this.months$.pipe((0,v.k)(s=>s[a]))}}return _.\u0275fac=function(a){return new(a||_)(t.GI1(l.GU,16))},_.\u0275pipe=t.UTH({name:"tuiMonth",type:_,pure:!0}),_})(),i=(()=>{class _{}return _.\u0275fac=function(a){return new(a||_)},_.\u0275mod=t.a4G({type:_}),_.\u0275inj=t.s3X({}),_})()},3797:(C,h,e)=>{e.d(h,{CQ:()=>M,Oo:()=>I,cP:()=>R});var t=e(4496),l=e(6504),v=e(3044),r=e(1800),i=e(4164),_=e(4680),o=e(466),a=e(7936),s=e(8048),m=e(4336),g=e(5944),O=e(9371),P=e(796),f=e(1368);const D=["*",[["input"]]],T=["*","input"];let I=(()=>{class u extends r._y{constructor(n,d,p,E){super(n,d,E),this.textfieldSize=p,this.open=!1}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return(0,i.ER)(this.nativeFocusableElement)||!!this.hostedDropdown&&this.hostedDropdown.focused}get canOpen(){return this.interactive&&!!this.datalist}onValueChange(n){this.value=n,this.open=!0}onActiveZone(n){this.updateFocused(n)}handleOption(n){this.setNativeValue(String(n)),this.focusInput(),this.value=String(n),this.open=!1}getFallbackValue(){return""}focusInput(n=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:n})}setNativeValue(n){this.nativeFocusableElement&&(this.nativeFocusableElement.value=n)}}return u.\u0275fac=function(n){return new(n||u)(t.GI1(l.eq,10),t.GI1(t.kD9),t.GI1(s.$K),t.GI1(r.cn,8))},u.\u0275cmp=t.In1({type:u,selectors:[["tui-input"]],contentQueries:function(n,d,p){if(1&n&&t.szK(p,m.Ux,5,t.Yw2),2&n){let E;t.wto(E=t.Gqi())&&(d.datalist=E.first)}},viewQuery:function(n,d){if(1&n&&(t.CC$(o.Qw,5),t.CC$(a.y_,5)),2&n){let p;t.wto(p=t.Gqi())&&(d.hostedDropdown=p.first),t.wto(p=t.Gqi())&&(d.textfield=p.first)}},hostVars:1,hostBindings:function(n,d){2&n&&t.e48("data-size",d.size)},features:[t.M5G([P.g3,(0,_.NK)(u),(0,g.UH)(u),(0,r.q4)(u)],[P.YL]),t.eg9],ngContentSelectors:T,decls:4,vars:11,consts:[[1,"t-hosted",3,"canOpen","content","open","openChange","tuiActiveZoneChange"],["automation-id","tui-input__textfield",1,"t-textfield",3,"disabled","focusable","invalid","nativeId","pseudoFocus","pseudoHover","readOnly","value","valueChange"]],template:function(n,d){1&n&&(t.kPM(D),t.I0R(0,"tui-hosted-dropdown",0),t.iHE("openChange",function(E){return t.kNx(d.open,E)||(d.open=E),E}),t.qCj("tuiActiveZoneChange",function(E){return d.onActiveZone(E)}),t.I0R(1,"tui-primitive-textfield",1),t.qCj("valueChange",function(E){return d.onValueChange(E)}),t._Xx(2),t._Xx(3,1,["ngProjectAs","input",5,["input"]]),t.C$Y()()),2&n&&(t.E7m("canOpen",d.canOpen)("content",d.datalist||""),t.OKB("open",d.open),t.yG2(),t.E7m("disabled",d.computedDisabled)("focusable",d.computedFocusable)("invalid",d.computedInvalid)("nativeId",d.nativeId)("pseudoFocus",d.computedFocused)("pseudoHover",d.pseudoHover)("readOnly",d.readOnly)("value",d.value))},dependencies:[o.Qw,a.y_,v.M,a.KQ],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}._disabled[_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),u})(),R=(()=>{class u extends O.Cm{onValueChange(n){this.host.onValueChange(n)}}return u.\u0275fac=(()=>{let c;return function(d){return(c||(c=t.otF(u)))(d||u)}})(),u.\u0275dir=t.Sc5({type:u,selectors:[["tui-input"]],features:[t.M5G([(0,g.iu)(u)]),t.eg9]}),u})(),M=(()=>{class u{}return u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=t.a4G({type:u}),u.\u0275inj=t.s3X({imports:[[f.MD,v.L,a.KA,o.GE]]}),u})()},796:(C,h,e)=>{e.d(h,{YL:()=>g,g3:()=>O}),e(4736);var l=e(5193),v=e(5944),_=(e(3012),e(2700),e(528)),a=(e(4704),e(4496)),s=e(6504);const g=(0,l.Sk)({limitWidth:"fixed",align:"right"}),O={provide:v.Y9,deps:[[new a.T7N,new a.Yiy,s.Y6]],useFactory:_.Z}},1496:(C,h,e)=>{e.d(h,{I:()=>v});var t=e(112),l=e(3120);function v(r=0,i=t.M){return r<0&&(r=0),(0,l.k)(r,r,i)}}}]);