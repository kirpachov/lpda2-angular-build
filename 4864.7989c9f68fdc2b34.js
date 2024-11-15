"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4864],{4864:(h,f,e)=>{e.r(f),e.d(f,{ResetPasswordComponent:()=>w});var t=e(4496),g=e(1368),o=e(6504),P=e(9956),m=e(3480),O=e(5e3),c=e(8212),n=e(7692),i=e(8048),u=e(3797),l=e(7568),E=e(1236),_=e(3468),M=e(4872),C=e(9212),D=e(2300),S=e(3616),p=e(4964),A=e(1128),T=e(8256),v=e(8392),y=e(4476),I=e(7936);function U(a,R){if(1&a&&t.wR5(0,"app-errors",12),2&a){const s=t.GaO();t.E7m("errors",s.e("password"))}}function W(a,R){if(1&a&&t.wR5(0,"app-errors",12),2&a){const s=t.GaO();t.E7m("errors",s.e("code"))}}function L(a,R){if(1&a&&t.wR5(0,"app-errors",12),2&a){const s=t.GaO();t.E7m("errors",s.form.errors)}}let w=(()=>{class a{constructor(){this.auth=(0,t.uUt)(p.o),this.router=(0,t.uUt)(E.E5),this.configs=(0,t.uUt)(_.m),this.route=(0,t.uUt)(E.gV),this.notifications=(0,t.uUt)(A.E),this._=(0,t.uUt)(y.OY).setTitle("Imposta password | La Porta D'Acqua"),this.form=new o.WC({code:new o.Ku(null,[o.AQ.required]),password:new o.Ku(null,[o.AQ.required])}),this.destroy$=(0,t.uUt)(m.UF),this.loading=!1,this.typing=!1,this.type$=this.form.valueChanges.pipe((0,M.ay)(),(0,C.y)(()=>this.typing=!0),(0,D.o)(1e3),(0,C.y)(()=>this.typing=!1)).subscribe(),this.submitted=!1}se(s){if(this.typing||!this.submitted)return!1;const r=this.form.get(s);return!!r&&r.invalid&&(r.dirty||r.touched)}e(s){const r=this.form.get(s);return r?r.errors:null}ngOnInit(){this.setMinPasswordLength(),this.readCodeFromRoute()}submit(){this.submitted=!0,!this.form.invalid&&(this.loading=!0,this.auth.resetPassword(this.formValue()).pipe((0,S.a)(this.destroy$)).subscribe({next:()=>{this.loading=!1,this.router.navigate(["/auth"]),this.notifications.success("La password \xE8 stata reimpostata con successo. Ora puoi effettuare il login.")},error:s=>{this.loading=!1,this.notifications.error((0,T.mk)(s)||v.a),console.error("resetPassword",s),this.form.setErrors({...this.form.errors,server:s.error.message})}}))}formValue(){const s=this.form.value;return{code:s.code,password:s.password}}setMinPasswordLength(){this.configs.get("minPasswordLength").subscribe(s=>{s&&!isNaN(s)&&s>0&&this.form.get("password")?.setValidators([o.AQ.required,o.AQ.minLength(s)])})}readCodeFromRoute(){this.route.params.subscribe(s=>{s.code&&this.form.get("code")?.setValue(s.code)})}static#t=this.\u0275fac=function(r){return new(r||a)};static#e=this.\u0275cmp=t.In1({type:a,selectors:[["app-reset-password"]],standalone:!0,features:[t.M5G([m.UF]),t.UHJ],decls:25,vars:9,consts:()=>{let s,r;return s="Codice",r="Password",[[1,"flex","justify-center","h-full"],[1,"flex","flex-col","justify-center"],[1,"flex","flex-col",3,"formGroup","ngSubmit"],[1,"mb-1"],[1,"text-slate-400","mb-3"],[1,"mb-2","hidden"],["formControlName","code",3,"tuiAutoFocus","tuiTextfieldSize"],s,["tuiTextfield","","type","text"],[1,"mb-2"],["formControlName","password",3,"tuiAutoFocus","tuiTextfieldSize"],r,[3,"errors"],[1,"flex","justify-between"],["routerLink","/auth","tuiButton","","appearance","secondary","type","button",1,"me-2"],["tuiButton","","type","submit",1,"ms-2",3,"showLoader"]]},template:function(r,d){1&r&&(t.I0R(0,"div",0)(1,"div",1)(2,"form",2),t.qCj("ngSubmit",function(){return d.submit()}),t.I0R(3,"h2",3),t.OEk(4,"Reimposta la password."),t.C$Y(),t.I0R(5,"span",4),t.OEk(6,"Inserisci la nuova password."),t.C$Y(),t.I0R(7,"div",5)(8,"tui-input",6),t.SAx(9),t.aS0(10,7),t.k70(),t.wR5(11,"input",8),t.C$Y()(),t.I0R(12,"div",9)(13,"tui-input-password",10),t.SAx(14),t.aS0(15,11),t.k70(),t.wR5(16,"input",8),t.C$Y(),t.yuY(17,U,1,1,"app-errors",12),t.C$Y(),t.yuY(18,W,1,1,"app-errors",12)(19,L,1,1,"app-errors",12),t.I0R(20,"div",13)(21,"button",14),t.OEk(22,"Annulla"),t.C$Y(),t.I0R(23,"button",15),t.OEk(24,"Conferma"),t.C$Y()()()()()),2&r&&(t.yG2(2),t.E7m("formGroup",d.form),t.yG2(6),t.E7m("tuiAutoFocus",!0)("tuiTextfieldSize","l"),t.yG2(5),t.E7m("tuiAutoFocus",!0)("tuiTextfieldSize","l"),t.yG2(4),t.C0Y(17,d.se("password")?17:-1),t.yG2(),t.C0Y(18,d.se("code")?18:-1),t.yG2(),t.C0Y(19,d.submitted?19:-1),t.yG2(4),t.E7m("showLoader",d.loading))},dependencies:[g.MD,o.sl,o.sz,o.ue,o.u,o.uW,o.Wo,c.CI,c.Kw,u.CQ,u.Oo,u.cP,I.b,P.g,O.m6,O.gJ,n.Sk,l.eW,l.Mt,l.Ki,i.aS,i.rD,E.qQ,E.ER],styles:["[_nghost-%COMP%]{display:block;height:100%}"]})}return a})()},4872:(h,f,e)=>{e.d(f,{ay:()=>P});var t=e(4496),g=e(3252),o=e(3616);function P(c){c||((0,t.yAg)(P),c=(0,t.uUt)(t.eM9));const n=new g._(i=>c.onDestroy(i.next.bind(i)));return i=>i.pipe((0,o.a)(n))}}}]);