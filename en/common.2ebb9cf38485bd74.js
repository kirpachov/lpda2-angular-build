"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[9312],{6800:(L,v,e)=>{e.d(v,{y:()=>D});var t=e(4496),o=e(3480),m=e(8139),p=e(8212),c=e(466),C=e(4336),_=e(1560),r=e(1368),P=e(7364);function g(T,O){if(1&T){const h=t.KQA();t.I0R(0,"button",9),t.qCj("click",function(){t.usT(h);const y=t.GaO().$implicit,A=t.GaO(2);return t.CGJ(A.setLanguage(y))}),t.I0R(1,"span",3)(2,"span",4),t.OEk(3),t.wVc(4,"language"),t.C$Y(),t.I0R(5,"mat-icon"),t.OEk(6,"open_in_new"),t.C$Y()()()}if(2&T){const h=t.GaO().$implicit;t.yG2(3),t.cNF(t.kDX(4,1,h))}}function a(T,O){if(1&T&&t.yuY(0,g,7,3,"button",8),2&T){const h=O.$implicit,d=t.GaO(2);t.C0Y(0,h!=d.session.language()?0:-1)}}function M(T,O){if(1&T&&(t.I0R(0,"tui-data-list",7),t.c53(1,a,1,1,null,null,t.oxv),t.C$Y()),2&T){const h=t.GaO();t.yG2(),t.oho(h.languages)}}const I=T=>({rotate180:T});let D=(()=>{class T{constructor(){this.destroy$=(0,t.uUt)(o.UF),this.session=(0,t.uUt)(m.U),this.languages=["en","it"]}setLanguage(h){this.session.setLanguage(h),window.location.reload()}static#t=this.\u0275fac=function(d){return new(d||T)};static#e=this.\u0275cmp=t.In1({type:T,selectors:[["app-admin-language-switcher"]],standalone:!0,features:[t.M5G([o.UF]),t.UHJ],decls:11,vars:7,consts:[[3,"content"],["dropdown",""],["appearance","outline","tuiButton","","size","s","type","button"],[1,"flex","items-center"],[1,"me-1"],[1,"animation-speed-2",3,"ngClass"],["content",""],["size","m"],["tuiOption","","type","button"],["tuiOption","","type","button",3,"click"]],template:function(d,y){if(1&d&&(t.I0R(0,"tui-hosted-dropdown",0,1)(2,"button",2)(3,"span",3)(4,"span",4),t.OEk(5),t.wVc(6,"language"),t.C$Y(),t.I0R(7,"mat-icon",5),t.OEk(8,"expand_more"),t.C$Y()()()(),t.yuY(9,M,3,0,"ng-template",null,6,t.gJz)),2&d){const A=t.Gew(1),K=t.Gew(10);t.E7m("content",K),t.yG2(5),t.cNF(t.kDX(6,3,y.session.language())),t.yG2(2),t.E7m("ngClass",t.S45(5,I,A.open))}},dependencies:[p.CI,p.Kw,c.GE,c.Qw,_.qL,C.A$,C.yi,C.sP,P.e,r.QF],encapsulation:2,changeDetection:0})}return T})()},3040:(L,v,e)=>{e.d(v,{M:()=>_});var t=e(4496),o=e(1128),m=e(8212),p=e(1560);function c(r,P){if(1&r){const g=t.KQA();t.I0R(0,"button",1),t.qCj("click",function(){t.usT(g);const M=t.GaO();return t.CGJ(M.copy())}),t.I0R(1,"mat-icon"),t.OEk(2,"content_copy"),t.C$Y()()}if(2&r){const g=t.GaO();t.E7m("appearance",g.appearance)("size",g.size)}}function C(r,P){if(1&r){const g=t.KQA();t.I0R(0,"button",1),t.qCj("click",function(){t.usT(g);const M=t.GaO();return t.CGJ(M.copy())}),t.I0R(1,"mat-icon"),t.OEk(2,"content_copy"),t.C$Y()()}if(2&r){const g=t.GaO();t.E7m("appearance",g.appearance)("size",g.size)}}let _=(()=>{class r{constructor(){this.notifications=(0,t.uUt)(o.E),this.onlyIcon=!0,this.appearance="outline",this.size="m",this.copyHandler=this.defaultCopyHandler,this.message="Copied"}copy(){this.copyHandler(this.content??null)}defaultCopyHandler(g){g&&navigator.clipboard.writeText(g).then(a=>{this.notifications.fireSnackBar(this.message)})}static#t=this.\u0275fac=function(a){return new(a||r)};static#e=this.\u0275cmp=t.In1({type:r,selectors:[["app-copy-content"]],inputs:{content:"content",onlyIcon:"onlyIcon",appearance:"appearance",size:"size",copyHandler:"copyHandler",message:"message"},standalone:!0,features:[t.UHJ],decls:2,vars:1,consts:[["tuiIconButton","","type","button",3,"appearance","size"],["tuiIconButton","","type","button",3,"appearance","size","click"]],template:function(a,M){1&a&&t.yuY(0,c,3,2,"button",0)(1,C,3,2),2&a&&t.C0Y(0,M.onlyIcon?0:1)},dependencies:[m.CI,m.Kw,p.qL],changeDetection:0})}return r})()},1552:(L,v,e)=>{e.d(v,{O:()=>g});var t=e(7692),o=e(4496),m=e(1368);const p=[[["","tuiSlot","top"]],[["h1"],["h2"],["h3"],["h4"],["h5"],["h6"]],"*",[["a"],["button"],["","tuiSlot","action"]]],c=["[tuiSlot='top']","h1,h2,h3,h4,h5,h6","*","a,button,[tuiSlot='action']"];let C=(()=>{class a{constructor(){this.card=!1}}return a.\u0275fac=function(I){return new(I||a)},a.\u0275cmp=o.In1({type:a,selectors:[["tui-block-status"]],hostVars:2,hostBindings:function(I,D){2&I&&o.eAK("_card",D.card)},inputs:{card:"card"},ngContentSelectors:c,decls:7,vars:0,consts:[[1,"t-block-image"],[1,"t-block-text"],[1,"t-block-actions"]],template:function(I,D){1&I&&(o.kPM(p),o.I0R(0,"div",0),o._Xx(1),o.C$Y(),o._Xx(2,1),o.I0R(3,"div",1),o._Xx(4,2),o.C$Y(),o.I0R(5,"div",2),o._Xx(6,3),o.C$Y())},styles:["tui-block-status{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-sizing:border-box;overflow:hidden;width:100%;height:100%}tui-root._mobile tui-block-status{padding:2rem}tui-block-status._card{border-radius:var(--tui-radius-xl);padding:2rem}tui-root._mobile tui-block-status._card{padding:1.25rem}tui-root._mobile tui-block-status._card .t-block-image{margin-top:.75rem}tui-block-status .t-block-image{margin-bottom:2rem}tui-root._mobile tui-block-status .t-block-image{margin-bottom:1.5rem}tui-block-status .t-block-text{font:var(--tui-font-text-m);color:var(--tui-text-02);margin-bottom:2rem;white-space:pre-line}tui-root._mobile tui-block-status .t-block-text{margin-bottom:1.5rem}tui-block-status .t-block-actions{display:flex;flex-direction:column;align-items:center;width:100%}tui-block-status h1,tui-block-status h2,tui-block-status h3,tui-block-status h4,tui-block-status h5,tui-block-status h6{font:var(--tui-font-heading-4);margin-top:0;margin-bottom:1rem}tui-root._mobile tui-block-status h1,tui-root._mobile tui-block-status h2,tui-root._mobile tui-block-status h3,tui-root._mobile tui-block-status h4,tui-root._mobile tui-block-status h5,tui-root._mobile tui-block-status h6{font:var(--tui-font-heading-5);margin-bottom:.5rem}tui-block-status img{width:9rem;height:9rem}tui-root._mobile tui-block-status img{width:8rem;height:8rem}tui-block-status a:not(:last-child),tui-block-status button:not(:last-child){margin-bottom:.75rem}tui-root._mobile tui-block-status a:not(:last-child),tui-root._mobile tui-block-status button:not(:last-child){margin-bottom:.5rem}\n"],encapsulation:2,changeDetection:0}),a})(),_=(()=>{class a{constructor(){this.tuiSlot="top"}}return a.\u0275fac=function(I){return new(I||a)},a.\u0275dir=o.Sc5({type:a,selectors:[["","tuiSlot",""]],inputs:{tuiSlot:"tuiSlot"}}),a})(),r=(()=>{class a{}return a.\u0275fac=function(I){return new(I||a)},a.\u0275mod=o.a4G({type:a}),a.\u0275inj=o.s3X({imports:[[m.MD]]}),a})();const P=["*"];let g=(()=>{class a{constructor(){this.showLoader=!1}static#t=this.\u0275fac=function(D){return new(D||a)};static#e=this.\u0275cmp=o.In1({type:a,selectors:[["app-no-items"]],inputs:{showLoader:"showLoader"},standalone:!0,features:[o.UHJ],ngContentSelectors:P,decls:4,vars:3,consts:[[1,"block","w-100","h-100",3,"overlay","showLoader","size"],["alt","not found","src","assets/img/not-found.svg","tuiSlot","top",1,"image"]],template:function(D,T){1&D&&(o.kPM(),o.I0R(0,"tui-loader",0)(1,"tui-block-status"),o.wR5(2,"img",1),o._Xx(3),o.C$Y()()),2&D&&o.E7m("overlay",!0)("showLoader",T.showLoader)("size","xl")},dependencies:[t.Sk,t.Cb,r,C,_]})}return a})()},7748:(L,v,e)=>{e.d(v,{c:()=>p});var t=e(5656),o=e(4496);function m(c,C){if(1&c&&(o.I0R(0,"span",0),o.OEk(1),o.C$Y()),2&c){const _=o.GaO();o.E7m("tuiHint",_.trans[_.type].long),o.yG2(),o.cNF(_.trans[_.type].short)}}let p=(()=>{class c{constructor(){this.trans={nexi_payment:{short:"Payment CC with nexi",long:"\n           A payment with a credit card of the specified amount will be required\n          at the time of booking. \n        "}}}set item(_){this.type=_?.preorder_type}static#t=this.\u0275fac=function(r){return new(r||c)};static#e=this.\u0275cmp=o.In1({type:c,selectors:[["app-preorder-reservation-group-preorder-type"]],inputs:{item:"item",type:"type"},standalone:!0,features:[o.UHJ],decls:1,vars:1,consts:[[3,"tuiHint"]],template:function(r,P){1&r&&o.yuY(0,m,2,2,"span",0),2&r&&o.C0Y(0,P.type?0:-1)},dependencies:[t.WY,t.lh,t.SL,t.i6,t.IT]})}return c})()},6424:(L,v,e)=>{e.d(v,{w:()=>p});var t=e(4496);function o(c,C){1&c&&(t.I0R(0,"div",0),t.SAx(1),t.aS0(2,1),t.k70(),t.C$Y())}function m(c,C){1&c&&(t.I0R(0,"div",2),t.SAx(1),t.aS0(2,3),t.k70(),t.C$Y())}let p=(()=>{class c{ngOnChanges(){this.status="active"==this.item?.status?"active":"inactive"}static#t=this.\u0275fac=function(r){return new(r||c)};static#e=this.\u0275cmp=t.In1({type:c,selectors:[["app-preorder-reservation-group-status"]],inputs:{item:"item"},standalone:!0,features:[t.SYr,t.UHJ],decls:2,vars:1,consts:()=>{let _,r;return _="Active",r="Inactive",[[1,"text-xl","border-success-dark","rounded","text-success-dark"],_,[1,"text-xl","border-secondary","rounded","text-secondary"],r]},template:function(r,P){if(1&r&&t.yuY(0,o,3,0)(1,m,3,0),2&r){let g;t.C0Y(0,"active"===(g=P.status)?0:"inactive"===g?1:-1)}}})}return c})()},3264:(L,v,e)=>{e.d(v,{Y:()=>T});var t=e(4496),o=e(6504),m=e(3480),p=e(1183),c=e(3616),C=e(4e3),_=e(6684),r=e(5188),P=e(4336),g=e(8048),a=e(1368);function M(O,h){if(1&O&&(t.SAx(0),t.I0R(1,"button",3),t.OEk(2),t.C$Y(),t.k70()),2&O){const d=h.$implicit;t.yG2(),t.E7m("value",d),t.yG2(),t.cNF(d)}}function I(O,h){if(1&O&&(t.I0R(0,"tui-data-list"),t.yuY(1,M,3,2,"ng-container",2),t.C$Y()),2&O){const d=t.GaO();t.yG2(),t.E7m("ngForOf",d.statuses)}}const D=["*"];let T=(()=>{class O{constructor(){this.destroy$=(0,t.uUt)(m.UF),this.control=new o.Ku(null),this.statuses=[...p.I],this.inputSize="m",this.valueChanges$=this.control.valueChanges.pipe((0,c.a)(this.destroy$),(0,C.a)(),(0,_.I)(()=>this.control.valid))}ngOnInit(){}registerOnChange(d){this.valueChanges$.subscribe(d)}registerOnTouched(d){this.valueChanges$.subscribe(d)}setDisabledState(d){d?this.control.disable():this.control.enable()}writeValue(d){if(null==d||"string"==typeof d)return this.control.setValue(d);console.warn("Invalid value for reservation status select:",d)}static#t=this.\u0275fac=function(y){return new(y||O)};static#e=this.\u0275cmp=t.In1({type:O,selectors:[["app-reservation-status-select"]],inputs:{inputSize:"inputSize"},standalone:!0,features:[t.M5G([{provide:o.Y6,useExisting:(0,t.wd)(()=>O),multi:!0},m.UF]),t.UHJ],ngContentSelectors:D,decls:3,vars:3,consts:[[3,"tuiTextfieldCleaner","tuiTextfieldSize","formControl"],[4,"tuiDataList"],[4,"ngFor","ngForOf"],["tuiOption","",3,"value"]],template:function(y,A){1&y&&(t.kPM(),t.I0R(0,"tui-select",0),t._Xx(1),t.yuY(2,I,2,1,"tui-data-list",1),t.C$Y()),2&y&&t.E7m("tuiTextfieldCleaner",!0)("tuiTextfieldSize",A.inputSize)("formControl",A.control)},dependencies:[o.sl,o.ue,o.ug,r.my,r.cP,r.uO,P.A$,P.yi,P.sP,P.Ux,a.ay,g.aS,g.es,g.rD],styles:["[_nghost-%COMP%]{display:block;min-width:150px}"],changeDetection:0})}return O})()},8780:(L,v,e)=>{e.d(v,{I:()=>I});var t=e(4496),o=e(8304),m=e(3480),p=e(1560),c=e(8212),C=e(2992),_=e(1128),r=e(3616),P=e(8824),g=e(9938),a=e(8256),M=e(2208);let I=(()=>{class D{constructor(){this.service=(0,t.uUt)(o.S),this.destroy$=(0,t.uUt)(m.UF),this.route=(0,t.uUt)(C.gV),this.notifications=(0,t.uUt)(_.E),this.loading=(0,t.OCB)(!1),this.created=new t._w7,this.cancelled=new t._w7}submit(O){this.loading.set(!0),this.service.create(O).pipe((0,r.a)(this.destroy$),(0,P.U)(()=>this.loading.set(!1))).subscribe({next:h=>{this.notifications.fireSnackBar("Reservation saved."),this.created.emit(h)},error:h=>{this.formComponent&&g.y.assignErrorsToForm(this.formComponent.form,h),this.notifications.error((0,a.mk)(h)||"Something went wrong in the save.")}})}cancel(){confirm("Are you sure you want to cancel?")&&this.cancelled.emit()}static#t=this.\u0275fac=function(h){return new(h||D)};static#e=this.\u0275cmp=t.In1({type:D,selectors:[["app-create-reservation"]],viewQuery:function(h,d){if(1&h&&t.CC$(M.G,5),2&h){let y;t.wto(y=t.Gqi())&&(d.formComponent=y.first)}},outputs:{created:"created",cancelled:"cancelled"},standalone:!0,features:[t.M5G([m.UF]),t.UHJ],decls:8,vars:1,consts:()=>{let O;return O="New reservation",[[1,"flex","items-center","justify-between"],O,["type","button","tuiIconButton","","appearance","icon",3,"click"],[3,"loading","cancelled","formSubmit"]]},template:function(h,d){1&h&&(t.I0R(0,"div",0)(1,"h1"),t.SAx(2),t.aS0(3,1),t.k70(),t.C$Y(),t.I0R(4,"button",2),t.qCj("click",function(){return d.cancel()}),t.I0R(5,"mat-icon"),t.OEk(6,"close"),t.C$Y()()(),t.I0R(7,"app-admin-reservation-form",3),t.qCj("cancelled",function(){return d.cancel()})("formSubmit",function(A){return d.submit(A)}),t.C$Y()),2&h&&(t.yG2(7),t.E7m("loading",d.loading()))},dependencies:[M.G,p.qL,c.CI,c.Kw],encapsulation:2})}return D})()},9860:(L,v,e)=>{e.d(v,{EF:()=>t,Qn:()=>o,Y9:()=>m});const t=["home-landing","home-about","home-menu","home-instagram","home-reserve","new-reservation-form","existing-reservation-form","openings_monday","openings_tuesday","openings_wednesday","openings_thursday","openings_friday","openings_saturday","openings_sunday","cancel-reservation"];function o(p){return"string"==typeof p&&p.length>0&&t.includes(p)}const m={"home-landing":"Main page, right after the first section.","home-about":"Main page, right after the 'about us' section.","home-menu":"Main page, right after the 'menu' section.","home-instagram":"Main page, right after the Instagram section.","home-reserve":"Main page, inside the booking section.","new-reservation-form":"Public booking form.","existing-reservation-form":"Existing booking page.",openings_monday:"Opening hours for Monday.",openings_tuesday:"Opening hours for Tuesday.",openings_wednesday:"Opening hours for Wednesday.",openings_thursday:"Opening hours for Thursday.",openings_friday:"Opening hours for Friday.",openings_saturday:"Opening hours for Saturday.",openings_sunday:"Opening hours for Sunday.","cancel-reservation":"Message displayed to those who wish to cancel the reservation."}},1183:(L,v,e)=>{e.d(v,{I:()=>t,s:()=>o});const t=["active","arrived","deleted","noshow","cancelled"];function o(m){return"string"==typeof m&&[...t].includes(m)}},1480:(L,v,e)=>{e.d(v,{s:()=>m});var t=e(9860),o=e(4496);let m=(()=>{class p{transform(C){return(0,t.Qn)(C)?`[${C}]: ${t.Y9[C]??""}`:null}static#t=this.\u0275fac=function(_){return new(_||p)};static#e=this.\u0275pipe=o.UTH({name:"publicMessageKey",type:p,pure:!0,standalone:!0})}return p})()},6500:(L,v,e)=>{e.d(v,{o:()=>c});var t=e(6012),o=e(8400);class m extends o.w{constructor(_){super(_),this.key=_.key,this.text=_.text,this.translations=_.translations}}var p=e(4496);let c=(()=>{class C extends t.s{constructor(){super(m,"admin/public_messages")}static#t=this.\u0275fac=function(P){return new(P||C)};static#e=this.\u0275prov=p.wxM({token:C,factory:C.\u0275fac,providedIn:"root"})}return C})()},3732:(L,v,e)=>{e.d(v,{u:()=>p});var t=e(6012),o=e(5812),m=e(4496);let p=(()=>{class c extends t.s{constructor(){super(o.i,"admin/users")}static#t=this.\u0275fac=function(r){return new(r||c)};static#e=this.\u0275prov=m.wxM({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},2204:(L,v,e)=>{e.d(v,{Ep:()=>J,Ix:()=>Q,Up:()=>E,_Q:()=>U});var t=e(4496),o=e(168),m=e(1096),p=e(832),c=e(1800),C=e(4164),_=e(4680),r=e(4392),P=e(900),g=e(2528),a=e(3480),M=e(3412),I=e(528),D=e(7036),T=e(4704),O=e(6684),h=e(7368),d=e(3616),y=e(3656),A=e(9880),K=e(8976),z=e(5944),F=e(3972),N=e(7176),w=e(1040),W=e(1368);const Y=["focusableElement"];function H(i,f){if(1&i&&t.wR5(0,"tui-svg",9),2&i){const n=f.polymorpheusOutlet,l=t.GaO(2);t.eAK("t-icon_open",l.open),t.E7m("src",n)}}function $(i,f){if(1&i&&(t.SAx(0),t.yuY(1,H,1,3,"tui-svg",8),t.k70()),2&i){const n=t.GaO();t.yG2(),t.E7m("polymorpheusOutlet",n.options.iconLarge)}}function k(i,f){if(1&i&&(t.SAx(0),t.OEk(1),t.k70()),2&i){const n=f.polymorpheusOutlet;t.yG2(),t.oRS(" ",n," ")}}function Z(i,f){if(1&i&&(t.I0R(0,"div",11),t.yuY(1,k,2,1,"ng-container",12),t.C$Y()),2&i){const n=t.GaO(2);t.yG2(),t.E7m("polymorpheusOutlet",n.lazyContent)}}function V(i,f){if(1&i&&t.yuY(0,Z,2,1,"div",10),2&i){const n=t.GaO();t.E7m("ngIf",n.lazyContent)}}function j(i,f){1&i&&(t.I0R(0,"div",13),t._Xx(1,1),t.C$Y())}const X=["*",[["","tuiAccordionItemContent",""]]],s=["*","[tuiAccordionItemContent]"],R=[[["tui-accordion-item"]]],u=["tui-accordion-item"];let E=(()=>{class i extends w.sv{constructor(n,l){super(n,l)}}return i.\u0275fac=function(n){return new(n||i)(t.GI1(t.Yw2,2),t.GI1(t.kD9))},i.\u0275dir=t.Sc5({type:i,selectors:[["ng-template","tuiAccordionItemContent",""]],features:[t.eg9]}),i})(),S=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275dir=t.Sc5({type:i,selectors:[["","tuiAccordionItemContent","",5,"ng-template"]]}),i})(),U=(()=>{class i extends c.mK{constructor(n,l,b){super(),this.cdr=n,this.mode$=l,this.options=b,this.noPadding=!1,this.showArrow=!0,this.borders="all",this.size="m",this.disabled=!1,this.disableHover=!1,this.open=!1,this.async=!1,this.openChange=new t._w7}get nativeFocusableElement(){return this.disabled||!this.focusableElement?null:this.focusableElement.nativeElement}get focused(){return(0,C.ER)(this.nativeFocusableElement)}onFocused(n){this.updateFocused(n)}onFocusVisible(n){this.updateFocusVisible(n)}onRowToggle(){this.disabled||this.updateOpen(!this.open)}onItemKeyDownEsc(n){this.open&&(n.stopPropagation(),this.updateOpen(!1))}close(){this.updateOpen(!1),this.cdr.markForCheck()}updateOpen(n){this.open!==n&&(this.open=n,this.openChange.emit(n))}}return i.\u0275fac=function(n){return new(n||i)(t.GI1(t.kD9),t.GI1(z.Yx),t.GI1(N.qu))},i.\u0275cmp=t.In1({type:i,selectors:[["tui-accordion-item"]],contentQueries:function(n,l,b){if(1&n&&(t.szK(b,S,5),t.szK(b,E,5)),2&n){let x;t.wto(x=t.Gqi())&&(l.eagerContent=x.first),t.wto(x=t.Gqi())&&(l.lazyContent=x.first)}},viewQuery:function(n,l){if(1&n&&t.CC$(Y,5),2&n){let b;t.wto(b=t.Gqi())&&(l.focusableElement=b.first)}},hostVars:8,hostBindings:function(n,l){1&n&&t.qCj("$.data-mode.attr",function(){return l.mode$}),2&n&&(t.e48("data-borders",l.borders)("data-size",l.size),t.eAK("_no-padding",l.noPadding)("_has-arrow",l.showArrow)("_disabled",l.disabled))},inputs:{noPadding:"noPadding",showArrow:"showArrow",borders:"borders",size:"size",disabled:"disabled",disableHover:"disableHover",open:"open",async:"async"},outputs:{openChange:"openChange"},features:[t.M5G([(0,_.NK)(i),F.Ir]),t.eg9],ngContentSelectors:s,decls:9,vars:10,consts:[["automation-id","tui-accordion__item-wrapper",1,"t-wrapper"],["automation-id","tui-accordion__item-header","type","button",1,"t-header",3,"disabled","tuiFocusable","click","keydown.esc","tuiFocusedChange","tuiFocusVisibleChange"],["focusableElement",""],["automation-id","tui-accordion__item-title",1,"t-title"],[4,"ngIf"],[3,"async","expanded"],["tuiExpandContent",""],["class","t-content",4,"ngIf"],["automation-id","tui-accordion__item-arrow","class","t-icon",3,"t-icon_open","src",4,"polymorpheusOutlet"],["automation-id","tui-accordion__item-arrow",1,"t-icon",3,"src"],["automation-id","tui-accordion__item-content","class","t-content",4,"ngIf"],["automation-id","tui-accordion__item-content",1,"t-content"],[4,"polymorpheusOutlet"],[1,"t-content"]],template:function(n,l){1&n&&(t.kPM(X),t.I0R(0,"div",0)(1,"button",1,2),t.qCj("click",function(){return l.onRowToggle()})("keydown.esc",function(x){return l.onItemKeyDownEsc(x)})("tuiFocusedChange",function(x){return l.onFocused(x)})("tuiFocusVisibleChange",function(x){return l.onFocusVisible(x)}),t.I0R(3,"span",3),t._Xx(4),t.C$Y(),t.yuY(5,$,2,1,"ng-container",4),t.C$Y(),t.I0R(6,"tui-expand",5),t.yuY(7,V,1,1,"ng-template",6)(8,j,2,0,"div",7),t.C$Y()()),2&n&&(t.yG2(),t.eAK("t-header_hoverable",!l.disableHover)("t-header_open",l.open),t.E7m("disabled",l.computedDisabled)("tuiFocusable",l.computedFocusable),t.yG2(4),t.E7m("ngIf",l.showArrow),t.yG2(),t.E7m("async",l.async)("expanded",l.open),t.yG2(2),t.E7m("ngIf",l.eagerContent))},dependencies:[y.Wu,A.st,o.O,m.h,p.w,W.u_,w.Af,A.kP],styles:['[_nghost-%COMP%]{position:relative;display:block;overflow:hidden;border-radius:var(--tui-radius-l)}[data-borders=top-bottom][_nghost-%COMP%]{border-radius:0!important}.t-wrapper[_ngcontent-%COMP%]{position:relative;border-radius:inherit}.t-wrapper[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;width:100%;height:100%;content:"";box-sizing:border-box;border-radius:inherit;border:1px solid var(--tui-base-04);pointer-events:none}[_nghost-%COMP%]:not([data-borders])   .t-wrapper[_ngcontent-%COMP%]:after{border-width:0}[data-borders=all][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-width:1px}[data-borders=top-bottom][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:0}[data-borders=top][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:0;border-bottom-width:0}[data-borders=bottom][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:0;border-top-width:0}[data-mode=onDark][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-color:var(--tui-base-03)}[data-mode=onLight][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-color:var(--tui-text-01)}._focus-visible[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border:2px solid var(--tui-focus)}[_nghost-%COMP%]:not([data-mode])   .t-wrapper[_ngcontent-%COMP%]{background:var(--tui-base-01)}.t-header[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;width:100%;font:var(--tui-font-text-l);align-items:center;box-sizing:border-box;border-bottom:1px solid var(--tui-base-04);min-height:var(--tui-height-l);padding:.75rem 1.25rem;color:var(--tui-text-01);cursor:pointer;text-align:left;outline:none}[data-mode=onDark][_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{color:var(--tui-text-01-night);border-color:var(--tui-base-03)}[data-mode=onLight][_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{border-color:var(--tui-text-01)}[_nghost-%COMP%]:not([data-borders])   .t-header[_ngcontent-%COMP%]{border-bottom-width:0;box-shadow:none}._has-arrow[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{padding-right:.75rem}[data-mode=onDark][_nghost-%COMP%]   .t-header_open[_ngcontent-%COMP%]{background:var(--tui-clear-inverse)}[data-mode=onLight][_nghost-%COMP%]   .t-header_open[_ngcontent-%COMP%]{background:var(--tui-clear)}[data-size=s][_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{font:var(--tui-font-text-m);min-height:var(--tui-height-m);padding:.625rem .75rem .625rem 1rem}._no-padding[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{padding-left:0;padding-right:0}._disabled[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{cursor:default}.t-wrapper[_ngcontent-%COMP%]:hover:not([data-mode]) > .t-header_hoverable[_ngcontent-%COMP%]{background:var(--tui-base-02)}.t-wrapper[_ngcontent-%COMP%]:hover[data-mode=onDark] > .t-header_hoverable[_ngcontent-%COMP%]{background:var(--tui-clear-inverse)}.t-wrapper[_ngcontent-%COMP%]:hover[data-mode=onLight] > .t-header_hoverable[_ngcontent-%COMP%]{background:var(--tui-clear)}.t-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:0;flex-grow:1}._has-arrow[_nghost-%COMP%]   .t-title[_ngcontent-%COMP%]{margin-right:.5rem}.t-icon[_ngcontent-%COMP%]{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:1.5rem;height:1.5rem;margin-left:auto;color:var(--tui-base-06)}.t-icon_open[_ngcontent-%COMP%]{transform:rotate(180deg)}[data-mode][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}[_nghost-%COMP%]:hover[data-mode]   .t-icon[_ngcontent-%COMP%]{opacity:.8}[data-mode=onDark][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onLight][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{color:var(--tui-text-01)}[_nghost-%COMP%]:hover:not([data-mode])   .t-icon[_ngcontent-%COMP%]{color:var(--tui-base-07)}.t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-m);padding:1.25rem;word-wrap:break-word}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-s);padding:1rem}'],changeDetection:0}),i})(),Q=(()=>{class i{constructor(n){this.destroy$=n,this.closeOthers=!0,this.rounded=!0,this.accordionItems=r.Jh}ngAfterContentInit(){const{accordionItems:n}=this,l=(0,P.jv)(n),b=l.pipe((0,D.c)(),(0,T.k)(([G,B])=>B.find(q=>!G.includes(q)&&q.open)),(0,O.I)(g.kF));(0,M.U)(l.pipe((0,h.G)(G=>(0,M.U)(...G.map(B=>B.openChange.pipe((0,O.I)(I.Z),(0,T.k)(()=>B)))))),b).pipe((0,O.I)(()=>this.closeOthers),(0,d.a)(this.destroy$)).subscribe(G=>{n.forEach(B=>{G!==B&&B.close()})})}}return i.\u0275fac=function(n){return new(n||i)(t.GI1(a.UF,2))},i.\u0275cmp=t.In1({type:i,selectors:[["tui-accordion"]],contentQueries:function(n,l,b){if(1&n&&t.szK(b,U,4),2&n){let x;t.wto(x=t.Gqi())&&(l.accordionItems=x)}},inputs:{closeOthers:"closeOthers",rounded:"rounded"},features:[t.M5G([a.UF])],ngContentSelectors:u,decls:2,vars:2,consts:[["automation-id","tui-accordion__group","orientation","vertical","size","l","tuiGroup","",1,"t-group",3,"collapsed","rounded"]],template:function(n,l){1&n&&(t.kPM(R),t.I0R(0,"div",0),t._Xx(1),t.C$Y()),2&n&&t.E7m("collapsed",!0)("rounded",l.rounded)},dependencies:[K.Ko],styles:["[_nghost-%COMP%]{display:block}.t-group[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),i})(),J=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.a4G({type:i}),i.\u0275inj=t.s3X({imports:[[W.MD,m.O,p.I,o.C,w.Ux,y.Yt,K.Gy,A.kh]]}),i})()},7568:(L,v,e)=>{e.d(v,{Ki:()=>j,Mt:()=>V,eW:()=>X});var t=e(4496),o=e(6504),m=e(2528),p=e(1800),c=e(4680),C=e(8987),_=e(7936),r=e(3656),P=e(8048),g=e(4108),a=e(5656),M=e(5944),I=e(3972),D=e(9371),T=e(3012),O=e(8960),h=e(6040),d=e(4704),y=e(5568),A=e(1040),K=e(1368);function z(s,R){if(1&s){const u=t.KQA();t.I0R(0,"tui-svg",7),t.qCj("click",function(){t.usT(u);const S=t.GaO(3);return t.CGJ(S.togglePasswordVisibility())}),t.wVc(1,"async"),t.C$Y()}if(2&s){const u=R.polymorpheusOutlet,E=t.GaO().ngIf,S=t.Gew(3),U=t.GaO(2);t.E7m("src",u)("tuiHint",E[0]&&E[1]&&S)("tuiHintAppearance",t.kDX(1,4,U.computedAppearance$)||"")("tuiHintDirection",(null==U.hintOptions?null:U.hintOptions.direction)||"bottom-left")}}function F(s,R){if(1&s&&t.OEk(0),2&s){const u=t.GaO().ngIf,E=t.GaO(2);t.oRS(" ",E.isPasswordHidden?u[0]:u[1]," ")}}const N=s=>({$implicit:s});function w(s,R){if(1&s&&(t.SAx(0),t.yuY(1,z,2,6,"tui-svg",4)(2,F,1,1,"ng-template",5,6,t.gJz),t.k70()),2&s){const u=t.GaO(2);t.yG2(),t.E7m("polymorpheusOutlet",u.icon)("polymorpheusOutletContext",t.S45(2,N,u.size))}}function W(s,R){if(1&s&&(t.yuY(0,w,4,4,"ng-container",3),t.wVc(1,"async")),2&s){const u=t.GaO();t.E7m("ngIf",t.kDX(1,1,u.passwordTexts$))}}const Y=["*",[["input"]]],H=["*","input"],k=(0,m.AL)({icons:{hide:({$implicit:s})=>"s"===s?"tuiIconEyeOff":"tuiIconEyeOffLarge",show:({$implicit:s})=>"s"===s?"tuiIconEye":"tuiIconEyeLarge"}});let V=(()=>{class s extends p._y{constructor(u,E,S,U,Q,J,i){var f;super(u,E),this.textfieldSize=S,this.passwordTexts$=U,this.options=Q,this.hintOptions=J,this.mode$=i,this.directive$=(null===(f=this.hintOptions)||void 0===f?void 0:f.change$)||O.k,this.isPasswordHidden=!0,this.computedAppearance$=(0,h.E)([this.mode$.pipe((0,d.k)(n=>"onDark"===n?"onDark":"")),this.directive$.pipe((0,y.W)(null),(0,d.k)(()=>{var n;return(null===(n=this.hintOptions)||void 0===n?void 0:n.appearance)||""}))]).pipe((0,d.k)(([n,l])=>l||n),(0,y.W)(""))}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){var u;return!(null===(u=this.textfield)||void 0===u||!u.focused)}get icon(){return this.isPasswordHidden?this.options.icons.hide:this.options.icons.show}get inputType(){return this.isPasswordHidden||!this.interactive?"password":"text"}onValueChange(u){this.value=u}onFocused(u){this.updateFocused(u)}togglePasswordVisibility(){this.isPasswordHidden=!this.isPasswordHidden}getFallbackValue(){return""}}return s.\u0275fac=function(u){return new(u||s)(t.GI1(o.eq,10),t.GI1(t.kD9),t.GI1(P.$K),t.GI1(T.M9),t.GI1(k),t.GI1(a.cb,8),t.GI1(M.Yx))},s.\u0275cmp=t.In1({type:s,selectors:[["tui-input-password"]],viewQuery:function(u,E){if(1&u&&t.CC$(_.y_,5),2&u){let S;t.wto(S=t.Gqi())&&(E.textfield=S.first)}},hostVars:1,hostBindings:function(u,E){2&u&&t.e48("data-size",E.size)},features:[t.M5G([(0,c.NK)(s),(0,p.q4)(s),I.Ir]),t.eg9],ngContentSelectors:H,decls:5,vars:11,consts:[[1,"t-textfield",3,"disabled","focusable","invalid","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldIcon","value","valueChange","focusedChange"],[3,"polymorpheus"],["iconContent","polymorpheus"],[4,"ngIf"],["appearance","icon","automation-id","tui-password__icon","tuiWrapper","","class","t-icon",3,"src","tuiHint","tuiHintAppearance","tuiHintDirection","click",4,"polymorpheusOutlet","polymorpheusOutletContext"],["polymorpheus",""],["hintContent","polymorpheus"],["appearance","icon","automation-id","tui-password__icon","tuiWrapper","",1,"t-icon",3,"src","tuiHint","tuiHintAppearance","tuiHintDirection","click"]],template:function(u,E){if(1&u&&(t.kPM(Y),t.I0R(0,"tui-primitive-textfield",0),t.iHE("valueChange",function(U){return t.kNx(E.value,U)||(E.value=U),U}),t.qCj("focusedChange",function(U){return E.onFocused(U)}),t._Xx(1),t._Xx(2,1,["ngProjectAs","input",5,["input"]]),t.C$Y(),t.yuY(3,W,2,3,"ng-template",1,2,t.gJz)),2&u){const S=t.Gew(4);t.E7m("disabled",E.computedDisabled)("focusable",E.focusable)("invalid",E.computedInvalid)("nativeId",E.nativeId)("pseudoActive",E.pseudoActive)("pseudoFocus",E.pseudoFocus)("pseudoHover",E.pseudoHover)("readOnly",E.readOnly)("tuiTextfieldIcon",E.interactive?S:""),t.OKB("value",E.value),t.yG2(3),t.E7m("polymorpheus",E.type)}},dependencies:[_.y_,r.Wu,_.KQ,P.uU,A.sv,K.u_,A.Af,g.S,a.lh,a.SL,a.i6,a.IT,K.a],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}.t-icon[_ngcontent-%COMP%]{cursor:pointer;pointer-events:auto}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),s})(),j=(()=>{class s extends D.Cm{onValueChange(u){this.host.onValueChange(u)}process(u){this.input=u}ngDoCheck(){this.host.nativeFocusableElement&&(0,C.kZ)(this.host.nativeFocusableElement)&&(this.host.nativeFocusableElement.type=this.host.inputType)}}return s.\u0275fac=(()=>{let R;return function(E){return(R||(R=t.otF(s)))(E||s)}})(),s.\u0275dir=t.Sc5({type:s,selectors:[["tui-input-password"]],features:[t.M5G([(0,M.iu)(s)]),t.eg9]}),s})(),X=(()=>{class s{}return s.\u0275fac=function(u){return new(u||s)},s.\u0275mod=t.a4G({type:s}),s.\u0275inj=t.s3X({imports:[[K.MD,o.y,A.Ux,g.g,r.Yt,a.WY,_.KA,P.aS]]}),s})()}}]);