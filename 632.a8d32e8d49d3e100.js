"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[632],{4606:(O,u,n)=>{n.r(u),n.d(u,{EditModule:()=>i});var t=n(1236),d=n(7552),g=n(7048),e=n(4496),s=n(4056),p=n(8256),v=n(8392),m=n(7492),f=n(1128),C=n(3480),E=n(7692),P=n(1512),T=n(8212),M=n(3616),D=n(8824);function I(o,_){if(1&o){const c=e.KQA();e.I0R(0,"app-table-type-form",2),e.qCj("onSubmit",function(h){e.usT(c);const A=e.GaO();return e.CGJ(A.submit(h))})("onCancel",function(){e.usT(c);const h=e.GaO();return e.CGJ(h.cancel())}),e.C$Y()}if(2&o){const c=e.GaO();e.E7m("item",c.item())("loading",c.loading())}}function L(o,_){1&o&&e.wR5(0,"tui-loader",3),2&o&&e.E7m("showLoader",!0)}function r(o,_){1&o&&(e.I0R(0,"p"),e.SAx(1),e.aS0(2,4),e.k70(),e.C$Y())}let a=(()=>{class o{constructor(){this.service=(0,e.uUt)(m.W),this.destroy$=(0,e.uUt)(C.UF),this.router=(0,e.uUt)(t.E5),this.route=(0,e.uUt)(t.gV),this.notifications=(0,e.uUt)(f.E),this.item=(0,e.OCB)(null),this.loading=(0,e.OCB)(!1),this.itemId=null}ngOnInit(){this.route.params.pipe((0,M.a)(this.destroy$)).subscribe({next:c=>{this.itemId=Number(c.id),isNaN(this.itemId)?this.item.set(null):this.load(this.itemId)}})}submit(c){const l=this.itemId;l&&(this.loading.set(!0),this.service.update(l,c).pipe((0,M.a)(this.destroy$)).subscribe({next:()=>{this.close()},error:h=>{this.notifications.error(h instanceof g.gj?(0,p.mk)(h):v.a)}}))}cancel(){this.close()}close(){this.router.navigate(["../"],{relativeTo:this.route})}load(c){this.loading.set(!0),this.service.show(c).pipe((0,M.a)(this.destroy$),(0,D.U)(()=>this.loading.set(!1))).subscribe({next:l=>this.item.set(l)})}static#t=this.\u0275fac=function(l){return new(l||o)};static#o=this.\u0275cmp=e.In1({type:o,selectors:[["app-edit"]],standalone:!0,features:[e.M5G([C.UF]),e.UHJ],decls:5,vars:2,consts:()=>{let c,l;return c="Modifica tipologia di tavolo " + "\ufffd0\ufffd" + "",l="Non trovato :'(",[c,[3,"item","loading"],[3,"item","loading","onSubmit","onCancel"],[3,"showLoader"],l]},template:function(l,h){if(1&l&&(e.I0R(0,"h1"),e.aS0(1,0),e.C$Y(),e.yuY(2,I,1,2,"app-table-type-form",1)(3,L,1,1)(4,r,3,0)),2&l){let A;e.yG2(),e.oBb(null==(A=h.item())?null:A.name),e.Ylm(1),e.yG2(),e.C0Y(2,h.item()?2:h.loading()?3:4)}},dependencies:[E.Sk,E.Cb,s.c,P.w,t.qQ,T.CI],encapsulation:2,changeDetection:0})}return o})(),i=(()=>{class o{static#t=this.\u0275fac=function(l){return new(l||o)};static#o=this.\u0275mod=e.a4G({type:o});static#n=this.\u0275inj=e.s3X({imports:[t.qQ.forChild([(0,d.VV)(a,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return o})()},1920:(O,u,n)=>{n.d(u,{w:()=>L});var t=n(4496),d=n(6504),g=n(3480),e=n(6700),s=n(3616),p=n(6684),v=n(3797),m=n(8588),f=n(1368),C=n(9956),E=n(1292);function P(r,a){if(1&r&&(t.I0R(0,"tui-textarea",2),t.OEk(1),t.C$Y()),2&r){const i=t.GaO().$implicit,o=t.GaO();t.E7m("formControl",i.control),t.yG2(),t.oRS(" ",o.getFullLang(i.lang)," ")}}function T(r,a){if(1&r&&(t.I0R(0,"tui-input",2),t.OEk(1),t.C$Y()),2&r){const i=t.GaO().$implicit,o=t.GaO();t.E7m("formControl",i.control),t.yG2(),t.oRS(" ",o.getFullLang(i.lang)," ")}}const M=r=>({"mb-3":r});function D(r,a){if(1&r&&(t.SAx(0),t.I0R(1,"div",1),t.yuY(2,P,2,2,"tui-textarea",2)(3,T,2,2),t.wR5(4,"app-errors",3),t.C$Y(),t.k70()),2&r){const i=a.$implicit,o=a.last,_=t.GaO();t.yG2(),t.E7m("ngClass",t.S45(3,M,!o)),t.yG2(),t.C0Y(2,_.long?2:3),t.yG2(2),t.E7m("errors",i.control.errors)}}const I=["*"];let L=(()=>{class r{constructor(){this.destroy$=new g.UF,this.long=!1,this.controls=(0,t.OCB)({}),this.controlsArr=(0,t.S6b)(()=>{const i=this.controls();return Object.keys(i).map(o=>({lang:o,control:i[o]}))}),this.touched$=new e.g(!1),this.value$=new e.g({})}ngAfterViewInit(){this.addLang("it"),this.addLang("en")}ngOnInit(){}registerOnChange(i){this.value$.pipe((0,s.a)(this.destroy$)).subscribe({next:o=>i(o)})}registerOnTouched(i){this.touched$.pipe((0,p.I)(o=>!0===o)).subscribe({next:()=>i()})}writeValue(i){this.patchValue(i??{}),this.touched$.next(!1)}wasTouched(){this.touched$.next(!0)}getFullLang(i){return E.S[i]??i}controlChanged(i){this.value$.next({...this.value$.value,[i]:this.controls()[i].value})}patchValue(i){Object.keys(i).forEach(o=>this.addLang(o)),Object.keys(this.controls()).forEach(o=>{this.controls()[o].patchValue(i[o]??null)})}addLang(i){if(this.controls()[i])return;const o=new d.Ku;o.valueChanges.subscribe({next:()=>this.controlChanged(i)}),this.controls.set({...this.controls(),[i]:o})}static#t=this.\u0275fac=function(o){return new(o||r)};static#o=this.\u0275cmp=t.In1({type:r,selectors:[["app-i18n-input"]],inputs:{long:"long"},standalone:!0,features:[t.M5G([{provide:d.Y6,useExisting:(0,t.wd)(()=>r),multi:!0},g.UF]),t.UHJ],ngContentSelectors:I,decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngClass"],[3,"formControl"],[3,"errors"]],template:function(o,_){1&o&&(t.kPM(),t._Xx(0),t.yuY(1,D,5,5,"ng-container",0)),2&o&&(t.yG2(),t.E7m("ngForOf",_.controlsArr()))},dependencies:[d.sl,d.ue,d.ug,v.CQ,v.Oo,v.cP,f.Iw,C.g,f.QF,m.Y3,m.wp,m.kd],changeDetection:0})}return r})()},1292:(O,u,n)=>{n.d(u,{S:()=>t});const t={it:"Italiano",en:"Inglese",es:"Spagnolo",fr:"Francese",de:"Tedesco",pt:"Portoghese",ru:"Russo",zh:"Cinese",ja:"Giapponese",ar:"Arabo",hi:"Hindi",bn:"Bengalese",pa:"Punjabi",ms:"Malese"}},2264:(O,u,n)=>{n.d(u,{W:()=>d});var t=n(8400);class d extends t.w{constructor(e){super(e),this.filename=e.filename,this.status=e.status,this.key=e.key,this.original_id=e.original_id,this.tag=e.tag,this.url=e.url}}},9064:(O,u,n)=>{n.d(u,{g:()=>g});var t=n(8400),d=n(2264);class g extends t.w{constructor(s){super(s),this.name=s.name,this.description=s.description,this.default_people_per_turn=s.default_people_per_turn,this.default_price=s.default_price,this.notes=s.notes,this.status=s.status,this.translations=s.translations,this.images=s.images?s.images.map(p=>new d.W(p)):[]}}},7492:(O,u,n)=>{n.d(u,{W:()=>e});var t=n(6012),d=n(9064),g=n(4496);let e=(()=>{class s extends t.s{constructor(){super(d.g,"admin/table_types")}static#t=this.\u0275fac=function(m){return new(m||s)};static#o=this.\u0275prov=g.wxM({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},1512:(O,u,n)=>{n.d(u,{C:()=>L,w:()=>r});var t=n(4496),d=n(900),g=n(4392),e=n(4164),s=n(3480),p=n(4680),v=n(3972),m=n(5944),f=n(3412),C=n(4704),E=n(3656),P=n(1368);const T=["tuiLink",""];function M(a,i){if(1&a&&t.wR5(0,"tui-svg",3),2&a){const o=t.GaO();t.E7m("src",o.icon||"")}}function D(a,i){if(1&a&&t.wR5(0,"tui-svg",4),2&a){const o=t.GaO();t.E7m("src",o.icon||"")}}const I=["*"];let L=(()=>{class a{constructor(o,_,c){this.el=o,this.mode$=_,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,f.U)((0,d.Ax)(this.el.nativeElement,"focusin").pipe((0,C.k)(g.Ml)),(0,d.Ax)(this.el.nativeElement,"focusout").pipe((0,C.k)(g.so))),c.subscribe(l=>{this.focusVisible=l})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,e.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return a.\u0275fac=function(o){return new(o||a)(t.GI1(t.GMv),t.GI1(m.Yx),t.GI1(s.MF))},a.\u0275cmp=t.In1({type:a,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(o,_){1&o&&t.qCj("$.data-mode.attr",function(){return _.mode$}),2&o&&(t.e48("data-host-mode",_.mode),t.eAK("_pseudo",_.pseudo)("_icon-rotated",_.iconRotated)("_focus-visible",_.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,p.NK)(a),s.MF,s.UF,v.Ir])],attrs:T,ngContentSelectors:I,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(o,_){1&o&&(t.kPM(),t.yuY(0,M,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,D,1,1,"tui-svg",2)),2&o&&(t.E7m("ngIf",_.iconAlignLeft),t.yG2(3),t.E7m("ngIf",_.iconAlignRight))},dependencies:[E.Wu,P.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),a})(),r=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.a4G({type:a}),a.\u0275inj=t.s3X({imports:[[P.MD,E.Yt]]}),a})()}}]);