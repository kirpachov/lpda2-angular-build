"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4054],{4054:(A,P,e)=>{e.r(P),e.d(P,{LoginComponent:()=>j});var t=e(4496),O=e(1368),g=e(2992),p=e(3797),v=e(7568),u=e(8212),l=e(1512),r=e(7692),o=e(6504),_=e(3480),h=e(5e3),C=e(9956),c=e(9212),x=e(2300),T=e(3616),L=e(4964),D=e(4872),b=e(3468),a=e(4616),M=e(6376),d=e(1343);function m(s,E){if(1&s){const n=t.KQA();t.I0R(0,"tui-island",0)(1,"h3",1),t.OEk(2),t.C$Y(),t.I0R(3,"p",2)(4,"button",3),t.qCj("click",function(){t.usT(n);const f=t.GaO();return t.CGJ(f.logout())}),t.OEk(5,"Logout"),t.C$Y()(),t.I0R(6,"a",4),t.OEk(7," Prosegui "),t.C$Y()()}if(2&s){const n=t.GaO();let i;t.E7m("size","l"),t.yG2(2),t.oRS("Bentornato ",(null==(i=n.user())?null:i.fullname)||(null==(i=n.user())?null:i.email),"."),t.yG2(4),t._6D("routerLink",n.redirectUrl)}}let I=(()=>{class s{constructor(){this.auth=(0,t.uUt)(L.o),this.profile=(0,t.uUt)(a.x),this.redirectUrl="/admin",this.user=this.profile.cu}logout(){this.auth.logout().subscribe((0,d.I)())}static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275cmp=t.In1({type:s,selectors:[["app-already-logged-in"]],inputs:{redirectUrl:"redirectUrl"},standalone:!0,features:[t.UHJ],decls:1,vars:1,consts:[[3,"size"],[1,"tui-island__title"],[1,"tui-island__paragraph"],["tuiLink","",3,"click"],["tuiButton","","type","button","appearance","flat","size","m",1,"tui-island__footer-button",3,"routerLink"]],template:function(i,f){1&i&&t.yuY(0,m,8,3,"tui-island",0),2&i&&t.C0Y(0,f.user()?0:-1)},dependencies:[O.MD,M.k,M.C,l.w,l.C,u.CI,u.Kw,g.qQ,g.ER]})}return s})();var R=e(4476),S=e(7936);function U(s,E){if(1&s&&t.wR5(0,"app-already-logged-in",2),2&s){const n=t.GaO();t.E7m("redirectUrl",n.redirectUrl)}}function G(s,E){if(1&s&&t.wR5(0,"app-errors",10),2&s){const n=t.GaO(2);t.E7m("errors",n.e("username"))}}function w(s,E){if(1&s&&t.wR5(0,"app-errors",10),2&s){const n=t.GaO(2);t.E7m("errors",n.e("password"))}}function $(s,E){if(1&s&&t.wR5(0,"app-errors",10),2&s){const n=t.GaO(2);t.E7m("errors",n.form.errors)}}const N=s=>({email:s});function z(s,E){if(1&s){const n=t.KQA();t.I0R(0,"form",3),t.qCj("ngSubmit",function(){t.usT(n);const f=t.GaO();return t.CGJ(f.submit())}),t.I0R(1,"h2",4),t.OEk(2,"Benvenuto."),t.C$Y(),t.I0R(3,"span",5),t.OEk(4,"Accedi per proseguire"),t.C$Y(),t.I0R(5,"div",6)(6,"tui-input",7),t.SAx(7),t.aS0(8,8),t.k70(),t.wR5(9,"input",9),t.C$Y(),t.yuY(10,G,1,1,"app-errors",10),t.C$Y(),t.I0R(11,"div",11)(12,"tui-input-password",12),t.SAx(13),t.aS0(14,13),t.k70(),t.wR5(15,"input",14),t.C$Y(),t.yuY(16,w,1,1,"app-errors",10)(17,$,1,1,"app-errors",10),t.C$Y(),t.I0R(18,"a",15),t.OEk(19,"Password dimenticata?"),t.C$Y(),t.I0R(20,"button",16),t.SAx(21),t.aS0(22,17),t.k70(),t.C$Y()()}if(2&s){const n=t.GaO();t.E7m("formGroup",n.form),t.yG2(6),t.E7m("tuiAutoFocus",!0),t.yG2(4),t.C0Y(10,n.se("username")?10:-1),t.yG2(6),t.C0Y(16,n.se("password")?16:-1),t.yG2(),t.C0Y(17,n.seForm()?17:-1),t.yG2(),t.E7m("routerLink","reset-password")("queryParams",t.S45(9,N,n.username.value)),t.yG2(2),t.E7m("showLoader",n.submitting)("disabled",n.submitting)}}let j=(()=>{class s{constructor(){this.username=new o.Ku(null,[o.AQ.required]),this.password=new o.Ku(null,[o.AQ.required]),this.form=new o.WC({username:this.username,password:this.password}),this.destroy$=(0,t.uUt)(_.UF),this.type$=this.form.valueChanges.pipe((0,D.ay)(),(0,c.y)(()=>this.typing=!0),(0,x.o)(1e3),(0,c.y)(()=>this.typing=!1)).subscribe(),this.route=(0,t.uUt)(g.gV),this.router=(0,t.uUt)(g.E5),this.auth=(0,t.uUt)(L.o),this.configs=(0,t.uUt)(b.m),this.profile=(0,t.uUt)(a.x),this._=(0,t.uUt)(R.OY).setTitle("Login | La Porta D'Acqua"),this.cu=this.profile.cu,this.submitted=!1,this.typing=!1,this.defaultRedirectUrl="/admin",this.redirectUrl=this.defaultRedirectUrl,this.se=this.shouldShowErrors,this.seForm=this.shouldShowErrorsForm,this.e=this.errorsFor}get submitting(){return!1===this.submitSubscription?.closed}ngOnInit(){this.auth.refreshTokenIfNotCalled().subscribe((0,d.I)());const n=this.route.snapshot.queryParams;n.email&&this.username.setValue(n.email),n.username&&this.username.setValue(n.username),n.password&&(0,t.sPQ)()&&this.password.setValue(n.password),n.url&&(this.redirectUrl=n.url.replace(window.location.origin,"").replace("#",""))}submit(){this.submitted=!0,!this.form.invalid&&(this.submitSubscription=this.auth.login(this.form.value).pipe((0,T.a)(this.destroy$)).subscribe(n=>{this.router.navigateByUrl(this.redirectUrl||this.defaultRedirectUrl)},n=>{const i=n.error;if(i.details){const f=Object.keys(i.details).reduce((y,k)=>(y[k]=i.details[k].join(", "),y),{});this.form.setErrors(f)}else i.message&&this.form.setErrors({message:i.message})}))}errorsFor(n){const i=this.control(n);return null!=i?i.errors:null}shouldShowErrors(n){if(this.typing)return!1;const i=this.control(n);return null!=i&&(i.dirty||this.submitted)&&i.invalid}shouldShowErrorsForm(){return!this.typing&&this.form.invalid&&(this.form.dirty||this.submitted)}control(n){return this.form.get(n)}static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275cmp=t.In1({type:s,selectors:[["app-login"]],standalone:!0,features:[t.M5G([_.UF]),t.UHJ],decls:4,vars:1,consts:()=>{let n,i,f;return n="Username or email",i="Password",f="Log in",[[1,"flex","justify-center","h-full"],[1,"flex","flex-col","justify-center","min-w-[300px]"],[3,"redirectUrl"],[1,"flex","flex-col",3,"formGroup","ngSubmit"],[1,"mb-1"],[1,"text-slate-400","mb-3"],[1,"flex","flex-col","mb-2"],["formControlName","username",1,"min-width",3,"tuiAutoFocus"],n,["autocomplete","username","tuiTextfield",""],[3,"errors"],[1,"flex","flex-col","mb-3"],["formControlName","password",1,"min-width"],i,["autocomplete","current-password","tuiTextfield",""],["tuiLink","",1,"mb-1",3,"routerLink","queryParams"],["type","submit","tuiButton","","size","m",3,"showLoader","disabled"],f]},template:function(i,f){1&i&&(t.I0R(0,"div",0)(1,"div",1),t.yuY(2,U,1,1,"app-already-logged-in",2)(3,z,23,11),t.C$Y()()),2&i&&(t.yG2(2),t.C0Y(2,f.cu()?2:3))},dependencies:[O.MD,g.qQ,g.ER,p.CQ,p.Oo,p.cP,S.b,u.CI,u.Kw,l.w,l.C,o.sl,o.sz,o.ue,o.u,o.uW,o.Wo,v.eW,v.Mt,v.Ki,h.m6,h.gJ,C.g,r.Sk,I],styles:["[_nghost-%COMP%]{display:block;height:100%}"]})}return s})()},1512:(A,P,e)=>{e.d(P,{C:()=>D,w:()=>b});var t=e(4496),O=e(900),g=e(4392),p=e(4164),v=e(3480),u=e(4680),l=e(3972),r=e(5944),o=e(3412),_=e(4704),h=e(3656),C=e(1368);const c=["tuiLink",""];function x(a,M){if(1&a&&t.wR5(0,"tui-svg",3),2&a){const d=t.GaO();t.E7m("src",d.icon||"")}}function T(a,M){if(1&a&&t.wR5(0,"tui-svg",4),2&a){const d=t.GaO();t.E7m("src",d.icon||"")}}const L=["*"];let D=(()=>{class a{constructor(d,m,I){this.el=d,this.mode$=m,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,o.U)((0,O.Ax)(this.el.nativeElement,"focusin").pipe((0,_.k)(g.Ml)),(0,O.Ax)(this.el.nativeElement,"focusout").pipe((0,_.k)(g.so))),I.subscribe(R=>{this.focusVisible=R})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,p.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return a.\u0275fac=function(d){return new(d||a)(t.GI1(t.GMv),t.GI1(r.Yx),t.GI1(v.MF))},a.\u0275cmp=t.In1({type:a,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(d,m){1&d&&t.qCj("$.data-mode.attr",function(){return m.mode$}),2&d&&(t.e48("data-host-mode",m.mode),t.eAK("_pseudo",m.pseudo)("_icon-rotated",m.iconRotated)("_focus-visible",m.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,u.NK)(a),v.MF,v.UF,l.Ir])],attrs:c,ngContentSelectors:L,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(d,m){1&d&&(t.kPM(),t.yuY(0,x,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,T,1,1,"tui-svg",2)),2&d&&(t.E7m("ngIf",m.iconAlignLeft),t.yG2(3),t.E7m("ngIf",m.iconAlignRight))},dependencies:[h.Wu,C.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),a})(),b=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=t.a4G({type:a}),a.\u0275inj=t.s3X({imports:[[C.MD,h.Yt]]}),a})()},6376:(A,P,e)=>{e.d(P,{C:()=>p,k:()=>v});var t=e(4496),O=e(1368);const g=["*"];let p=(()=>{class u{constructor(){this.size="m",this.textAlign="left",this.hoverable=!1,this.transparent=!1}get sizeS(){return"s"===this.size}get sizeM(){return"m"===this.size}get sizeL(){return"l"===this.size}get textAlignLeft(){return"left"===this.textAlign}get textAlignCenter(){return"center"===this.textAlign}get textAlignRight(){return"right"===this.textAlign}}return u.\u0275fac=function(r){return new(r||u)},u.\u0275cmp=t.In1({type:u,selectors:[["tui-island"],["a","tuiIsland",""]],hostAttrs:[1,"tui-island"],hostVars:16,hostBindings:function(r,o){2&r&&t.eAK("tui-island_hoverable",o.hoverable)("tui-island_transparent",o.transparent)("tui-island_size_s",o.sizeS)("tui-island_size_m",o.sizeM)("tui-island_size_l",o.sizeL)("tui-island_text-align_left",o.textAlignLeft)("tui-island_text-align_center",o.textAlignCenter)("tui-island_text-align_right",o.textAlignRight)},inputs:{size:"size",textAlign:"textAlign",hoverable:"hoverable",transparent:"transparent"},ngContentSelectors:g,decls:1,vars:0,template:function(r,o){1&r&&(t.kPM(),t._Xx(0))},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),u})(),v=(()=>{class u{}return u.\u0275fac=function(r){return new(r||u)},u.\u0275mod=t.a4G({type:u}),u.\u0275inj=t.s3X({imports:[[O.MD]]}),u})()},4872:(A,P,e)=>{e.d(P,{ay:()=>p});var t=e(4496),O=e(3252),g=e(3616);function p(l){l||((0,t.yAg)(p),l=(0,t.uUt)(t.eM9));const r=new O._(o=>l.onDestroy(o.next.bind(o)));return o=>o.pipe((0,g.a)(r))}}}]);