"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[8620],{8620:(B,C,s)=>{s.r(C),s.d(C,{EditPasswordModule:()=>$});var u=s(2992),T=s(7552),e=s(4496),c=s(6504),i=s(1560),U=s(4616),b=s(1128),R=s(5e3),x=s(7692),A=s(8048),I=s(8212),S=s(7568),k=s(7936);function m(n,d){1&n&&(e.I0R(0,"p",18),e.OEk(1,"La password inserita non \xe8 corretta!"),e.C$Y())}function X(n,d){1&n&&(e.I0R(0,"p",18),e.aS0(1,19),e.C$Y())}function P(n,d){1&n&&(e.I0R(0,"p",18),e.OEk(1,"Il tuo account \xe8 stato bloccato, quindi non \xe8 possibile modificare la password!"),e.C$Y())}function M(n,d){1&n&&e.yuY(0,m,2,0,"p",17)(1,X,2,0,"p",17)(2,P,2,0,"p",17),2&n&&(e.C0Y(0,d.invalid?0:-1),e.yG2(),e.C0Y(1,d.required?1:-1),e.yG2(),e.C0Y(2,d.userBlocked?2:-1))}function F(n,d){1&n&&(e.I0R(0,"p",20),e.aS0(1,21),e.C$Y())}function O(n,d){1&n&&(e.I0R(0,"p",18),e.aS0(1,22),e.C$Y())}function w(n,d){if(1&n&&(e.I0R(0,"p",18),e.OEk(1),e.C$Y()),2&n){const _=e.GaO();e.yG2(),e.cNF(_.tooShort)}}function L(n,d){1&n&&e.yuY(0,O,2,0,"p",17)(1,w,2,1,"p",17),2&n&&(e.C0Y(0,d.required?0:-1),e.yG2(),e.C0Y(1,d.tooShort?1:-1))}function y(n,d){1&n&&(e.I0R(0,"p",20),e.aS0(1,23),e.C$Y())}function h(n,d){1&n&&(e.I0R(0,"mat-icon"),e.OEk(1,"vpn_key"),e.C$Y())}let W=(()=>{class n{constructor(){this.submitting=!1,this.current_password=new c.Ku(null,[c.AQ.required]),this.new_password=new c.Ku(null,[c.AQ.required]),this.form=new c.WC({current_password:this.current_password,new_password:this.new_password}),this.profile=(0,e.uUt)(U.x),this.router=(0,e.uUt)(u.E5),this.activeRoute=(0,e.uUt)(u.gV),this.notification=(0,e.uUt)(b.E)}submit(){this.form.invalid||(this.submitting=!0,this.profile.changePassword(this.current_password.value,this.new_password.value).subscribe({next:()=>{this.submitting=!1,this.router.navigate([".."],{relativeTo:this.activeRoute}),this.notification.fireSnackBar("Password aggiornata con successo!")},error:_=>{this.submitting=!1,422===_.status&&_.error.errors.forEach(a=>{const E=`${a.field}:${a.code}`;switch(E){case"current_password:missing":case"current_password:blank":this.current_password.setErrors({required:!0});break;case"current_password:invalid":this.current_password.setErrors({invalid:a.message});break;case"new_password:missing":case"new_password:blank":this.new_password.setErrors({required:!0});break;case"new_password:too_short":this.new_password.setErrors({tooShort:a.message});break;case"user:blocked":this.current_password.setErrors({userBlocked:a.message});break;default:console.error(`Unhandled error: ${E}: ${a.message}`)}})}}))}static#e=this.\u0275fac=function(f){return new(f||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-edit-password"]],standalone:!0,features:[e.UHJ],decls:32,vars:9,consts:()=>{let _,f,a,E,p,D,g;return _="Modifica password",f="\n          Inserisci la tua password corrente e scegli una nuova password, quindi\n          premi \n          " + "\ufffd#8\ufffd" + "\n          Avanti\n          " + "\ufffd/#8\ufffd" + "\n           per proseguire\n        ",a="Avanti",E="La password non pu\xF2 essere vuota!",p="Inserisci la tua password attuale",D="La password non pu\xF2 essere vuota!",g="Scegli una nuova password per il tuo account",[[1,"text-2xl","font-bold","uppercase","|","flex","items-center","justify-center","|","border-b-2","border-b-slate-100","|","pb-4","mb-4"],["inline","",1,"me-3"],_,[3,"showLoader","overlay"],[1,"mb-2"],f,[3,"formGroup","ngSubmit"],[1,"mb-3"],["tuiHintContent","","formControlName","current_password","data-cy","password-field","tuiAutoFocus","",3,"tuiTextfieldIconLeft"],["password",""],["tuiTextfield","","type","password","autocomplete","password"],["tuiHintContent","","formControlName","new_password","data-cy","password-field",3,"tuiTextfieldIconLeft"],[1,"flex","flex-row","justify-between","items-center"],["tuiButton","","appearance","secondary-destructive","routerLink",".."],["tuiButton","","type","submit","data-cy","submit-btn",3,"showLoader","disabled"],a,["keyIcon",""],["class","form-text error"],[1,"form-text","error"],E,[1,"form-text"],p,D,g]},template:function(f,a){if(1&f&&(e.I0R(0,"h1",0)(1,"mat-icon",1),e.OEk(2,"lock"),e.C$Y(),e.SAx(3),e.aS0(4,2),e.k70(),e.C$Y(),e.I0R(5,"tui-loader",3)(6,"p",4),e.Mff(7,5),e.wR5(8,"strong"),e.U7j(),e.C$Y(),e.I0R(9,"form",6),e.qCj("ngSubmit",function(){return a.submit()}),e.I0R(10,"div")(11,"div",7)(12,"tui-input-password",8,9),e.OEk(14," Password attuale "),e.wR5(15,"input",10),e.C$Y(),e.yuY(16,M,3,3)(17,F,2,0),e.C$Y(),e.I0R(18,"div",7)(19,"tui-input-password",11,9),e.OEk(21," Scegli una nuova password "),e.wR5(22,"input",10),e.C$Y(),e.yuY(23,L,2,2)(24,y,2,0),e.C$Y(),e.I0R(25,"div",12)(26,"a",13),e.OEk(27,"Annulla"),e.C$Y(),e.I0R(28,"button",14),e.aS0(29,15),e.C$Y()()()()(),e.yuY(30,h,2,0,"ng-template",null,16,e.gJz)),2&f){const E=e.Gew(31);let p,D,g;e.yG2(5),e.E7m("showLoader",a.submitting)("overlay",!0),e.yG2(4),e.E7m("formGroup",a.form),e.yG2(3),e.E7m("tuiTextfieldIconLeft",E),e.yG2(4),e.C0Y(16,(p=(null==(D=a.form.get("current_password"))?null:D.touched)&&(null==(D=a.form.get("current_password"))?null:D.errors))?16:17,p),e.yG2(3),e.E7m("tuiTextfieldIconLeft",E),e.yG2(4),e.C0Y(23,(p=(null==(g=a.form.get("new_password"))?null:g.touched)&&(null==(g=a.form.get("new_password"))?null:g.errors))?23:24,p),e.yG2(5),e.E7m("showLoader",a.submitting)("disabled",a.form.invalid)}},dependencies:[u.qQ,u.ER,c.sl,c.sz,c.ue,c.u,c.uW,c.Wo,x.Sk,x.Cb,S.eW,S.Mt,S.Ki,k.b,A.aS,A.Ep,R.m6,R.gJ,I.CI,I.Kw,i.oB,i.qL]})}return n})(),$=(()=>{class n{static#e=this.\u0275fac=function(f){return new(f||n)};static#t=this.\u0275mod=e.a4G({type:n});static#i=this.\u0275inj=e.s3X({imports:[u.qQ.forChild([(0,T.VV)(W,{path:"",closeable:!0,dismissible:!1,size:"s"})])]})}return n})()},8048:(B,C,s)=>{s.d(C,{$K:()=>p,CU:()=>P,E9:()=>d,Ep:()=>$,Gk:()=>L,Id:()=>E,W:()=>v,We:()=>f,a4:()=>O,aS:()=>g,cn:()=>z,es:()=>M,me:()=>S,rD:()=>D,uU:()=>h});var u=s(2528),T=s(1800),e=s(3480),c=s(900),i=s(4496),U=s(5944),b=s(3412),R=s(792),x=s(3616);class A{constructor(o,l,r,G,N,Y,Q,K,j,H,V,J,Z){this.change$=o,this.options=l,this.legacyAppearance=r,this.appearanceDirective=G,this.cleanerDirective=N,this.customContentDirective=Y,this.iconDirective=Q,this.iconLeftDirective=K,this.labelOutsideDirective=j,this.sizeDirective=H,this.prefixDirective=V,this.postfixDirective=J,this.fillerDirective=Z}get appearance(){return this.appearanceDirective.appearance||this.legacyAppearance}get cleaner(){return this.cleanerDirective.cleaner}get customContent(){return this.customContentDirective.customContent||""}get icon(){return this.iconDirective.icon}get iconLeft(){return this.iconLeftDirective.iconLeft}get labelOutside(){return this.labelOutsideDirective.labelOutside}get size(){return this.sizeDirective.size}get prefix(){return this.prefixDirective.prefix}get postfix(){return this.postfixDirective.postfix}get filler(){return this.fillerDirective.filler}}const S=(0,u.AL)({iconCleaner:"tuiIconClose",hintOnDisabled:!1}),m=(0,u.W0)(()=>new X);let X=(()=>{class t extends T.QD{constructor(){super(...arguments),this.appearance=""}}return t.\u0275fac=(()=>{let o;return function(r){return(o||(o=i.otF(t)))(r||t)}})(),t.\u0275dir=i.Sc5({type:t,selectors:[["","tuiTextfieldAppearance",""]],inputs:{appearance:[i.Wk5.None,"tuiTextfieldAppearance","appearance"]},features:[i.M5G([{provide:m,useExisting:(0,i.wd)(()=>t)}]),i.eg9]}),t})();const P=(0,u.W0)(()=>new M);let M=(()=>{class t extends T.QD{constructor(){super(...arguments),this.cleaner=!1}}return t.\u0275fac=(()=>{let o;return function(r){return(o||(o=i.otF(t)))(r||t)}})(),t.\u0275dir=i.Sc5({type:t,selectors:[["","tuiTextfieldCleaner",""]],inputs:{cleaner:[i.Wk5.None,"tuiTextfieldCleaner","cleaner"]},features:[i.M5G([{provide:P,useExisting:(0,i.wd)(()=>t)}]),i.eg9]}),t})();const F=(0,u.W0)(()=>new O);let O=(()=>{class t extends T.QD{}return t.\u0275fac=(()=>{let o;return function(r){return(o||(o=i.otF(t)))(r||t)}})(),t.\u0275dir=i.Sc5({type:t,selectors:[["","tuiTextfieldCustomContent",""]],inputs:{customContent:[i.Wk5.None,"tuiTextfieldCustomContent","customContent"]},features:[i.M5G([{provide:F,useExisting:(0,i.wd)(()=>t)}]),i.eg9]}),t})();const w=(0,u.W0)(()=>new L);let L=(()=>{class t extends T.QD{constructor(){super(...arguments),this.filler=""}}return t.\u0275fac=(()=>{let o;return function(r){return(o||(o=i.otF(t)))(r||t)}})(),t.\u0275dir=i.Sc5({type:t,selectors:[["","tuiTextfieldFiller",""]],inputs:{filler:[i.Wk5.None,"tuiTextfieldFiller","filler"]},features:[i.M5G([{provide:w,useExisting:(0,i.wd)(()=>t)}]),i.eg9]}),t})();const y=(0,u.W0)(()=>new h);let h=(()=>{class t extends T.QD{}return t.\u0275fac=(()=>{let o;return function(r){return(o||(o=i.otF(t)))(r||t)}})(),t.\u0275dir=i.Sc5({type:t,selectors:[["","tuiTextfieldIcon",""]],inputs:{icon:[i.Wk5.None,"tuiTextfieldIcon","icon"]},features:[i.M5G([{provide:y,useExisting:(0,i.wd)(()=>t)}]),i.eg9]}),t})();const W=(0,u.W0)(()=>new $);let $=(()=>{class t extends T.QD{}return t.\u0275fac=(()=>{let o;return function(r){return(o||(o=i.otF(t)))(r||t)}})(),t.\u0275dir=i.Sc5({type:t,selectors:[["","tuiTextfieldIconLeft",""]],inputs:{iconLeft:[i.Wk5.None,"tuiTextfieldIconLeft","iconLeft"]},features:[i.M5G([{provide:W,useExisting:(0,i.wd)(()=>t)}]),i.eg9]}),t})();const n=(0,u.W0)(()=>new d);let d=(()=>{class t extends T.QD{constructor(){super(...arguments),this.labelOutside=!1}}return t.\u0275fac=(()=>{let o;return function(r){return(o||(o=i.otF(t)))(r||t)}})(),t.\u0275dir=i.Sc5({type:t,selectors:[["","tuiTextfieldLabelOutside",""]],inputs:{labelOutside:[i.Wk5.None,"tuiTextfieldLabelOutside","labelOutside"]},features:[i.M5G([{provide:n,useExisting:(0,i.wd)(()=>t)}]),i.eg9]}),t})();const _=(0,u.W0)(()=>new f);let f=(()=>{class t extends T.QD{constructor(){super(...arguments),this.postfix=""}}return t.\u0275fac=(()=>{let o;return function(r){return(o||(o=i.otF(t)))(r||t)}})(),t.\u0275dir=i.Sc5({type:t,selectors:[["","tuiTextfieldPostfix",""]],inputs:{postfix:[i.Wk5.None,"tuiTextfieldPostfix","postfix"]},features:[i.M5G([{provide:_,useExisting:(0,i.wd)(()=>t)}]),i.eg9]}),t})();const a=(0,u.W0)(()=>new E);let E=(()=>{class t extends T.QD{constructor(){super(...arguments),this.prefix=""}}return t.\u0275fac=(()=>{let o;return function(r){return(o||(o=i.otF(t)))(r||t)}})(),t.\u0275dir=i.Sc5({type:t,selectors:[["","tuiTextfieldPrefix",""]],inputs:{prefix:[i.Wk5.None,"tuiTextfieldPrefix","prefix"]},features:[i.M5G([{provide:a,useExisting:(0,i.wd)(()=>t)}]),i.eg9]}),t})();const p=(0,u.W0)(()=>new D);let D=(()=>{class t extends T.QD{constructor(){super(...arguments),this.size="l"}}return t.\u0275fac=(()=>{let o;return function(r){return(o||(o=i.otF(t)))(r||t)}})(),t.\u0275dir=i.Sc5({type:t,selectors:[["","tuiTextfieldSize",""]],inputs:{size:[i.Wk5.None,"tuiTextfieldSize","size"]},features:[i.M5G([{provide:p,useExisting:(0,i.wd)(()=>t)}]),i.eg9]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=i.a4G({type:t}),t.\u0275inj=i.s3X({}),t})();const v=new i.UbH("[TUI_TEXTFIELD_WATCHED_CONTROLLER]"),z=[e.UF,{provide:v,deps:[i.kD9,e.UF,S,U.k9,m,P,F,y,W,n,p,a,_,w],useFactory:(t,o,l,r,...G)=>{const N=(0,b.U)(...G.map(({change$:Y})=>Y||R.C)).pipe((0,c.iQ)(t),(0,x.a)(o));return N.subscribe(),new A(N,l,r,...G)}}]}}]);