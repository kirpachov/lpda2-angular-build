"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4864],{4864:(O,g,e)=>{e.r(g),e.d(g,{ResetPasswordComponent:()=>L});var t=e(4496),P=e(1368),n=e(6504),h=e(9956),s=e(3480),l=e(5e3),o=e(8212),i=e(7692),a=e(8048),E=e(3797),d=e(7568),f=e(2992),c=e(3468),M=e(4872),C=e(9212),D=e(2300),p=e(3616),S=e(4964),A=e(1128),y=e(8256),T=e(8392),v=e(4476),I=e(7936);function U(u,R){if(1&u&&t.wR5(0,"app-errors",12),2&u){const r=t.GaO();t.E7m("errors",r.e("password"))}}function W(u,R){if(1&u&&t.wR5(0,"app-errors",12),2&u){const r=t.GaO();t.E7m("errors",r.e("code"))}}function b(u,R){if(1&u&&t.wR5(0,"app-errors",12),2&u){const r=t.GaO();t.E7m("errors",r.form.errors)}}let L=(()=>{class u{constructor(){this.auth=(0,t.uUt)(S.o),this.router=(0,t.uUt)(f.E5),this.configs=(0,t.uUt)(c.m),this.route=(0,t.uUt)(f.gV),this.notifications=(0,t.uUt)(A.E),this._=(0,t.uUt)(v.OY).setTitle("Update password | La Porta D'Acqua"),this.form=new n.WC({code:new n.Ku(null,[n.AQ.required]),password:new n.Ku(null,[n.AQ.required])}),this.destroy$=(0,t.uUt)(s.UF),this.loading=!1,this.typing=!1,this.type$=this.form.valueChanges.pipe((0,M.ay)(),(0,C.y)(()=>this.typing=!0),(0,D.o)(1e3),(0,C.y)(()=>this.typing=!1)).subscribe(),this.submitted=!1}se(r){if(this.typing||!this.submitted)return!1;const _=this.form.get(r);return!!_&&_.invalid&&(_.dirty||_.touched)}e(r){const _=this.form.get(r);return _?_.errors:null}ngOnInit(){this.setMinPasswordLength(),this.readCodeFromRoute()}submit(){this.submitted=!0,!this.form.invalid&&(this.loading=!0,this.auth.resetPassword(this.formValue()).pipe((0,p.a)(this.destroy$)).subscribe({next:()=>{this.loading=!1,this.router.navigate(["/auth"]),this.notifications.success("The password has been successfully reset. You can now log in.")},error:r=>{this.loading=!1,this.notifications.error((0,y.mk)(r)||T.a),console.error("resetPassword",r),this.form.setErrors({...this.form.errors,server:r.error.message})}}))}formValue(){const r=this.form.value;return{code:r.code,password:r.password}}setMinPasswordLength(){this.configs.get("minPasswordLength").subscribe(r=>{r&&!isNaN(r)&&r>0&&this.form.get("password")?.setValidators([n.AQ.required,n.AQ.minLength(r)])})}readCodeFromRoute(){this.route.params.subscribe(r=>{r.code&&this.form.get("code")?.setValue(r.code)})}static#t=this.\u0275fac=function(_){return new(_||u)};static#e=this.\u0275cmp=t.In1({type:u,selectors:[["app-reset-password"]],standalone:!0,features:[t.M5G([s.UF]),t.UHJ],decls:25,vars:9,consts:()=>{let r,_;return r="Code",_="Password",[[1,"flex","justify-center","h-full"],[1,"flex","flex-col","justify-center"],[1,"flex","flex-col",3,"formGroup","ngSubmit"],[1,"mb-1"],[1,"text-slate-400","mb-3"],[1,"mb-2","hidden"],["formControlName","code",3,"tuiAutoFocus","tuiTextfieldSize"],r,["tuiTextfield","","type","text"],[1,"mb-2"],["formControlName","password",3,"tuiAutoFocus","tuiTextfieldSize"],_,[3,"errors"],[1,"flex","justify-between"],["routerLink","/auth","tuiButton","","appearance","secondary","type","button",1,"me-2"],["tuiButton","","type","submit",1,"ms-2",3,"showLoader"]]},template:function(_,m){1&_&&(t.I0R(0,"div",0)(1,"div",1)(2,"form",2),t.qCj("ngSubmit",function(){return m.submit()}),t.I0R(3,"h2",3),t.OEk(4,"Reimposta la password."),t.C$Y(),t.I0R(5,"span",4),t.OEk(6,"Inserisci la nuova password."),t.C$Y(),t.I0R(7,"div",5)(8,"tui-input",6),t.SAx(9),t.aS0(10,7),t.k70(),t.wR5(11,"input",8),t.C$Y()(),t.I0R(12,"div",9)(13,"tui-input-password",10),t.SAx(14),t.aS0(15,11),t.k70(),t.wR5(16,"input",8),t.C$Y(),t.yuY(17,U,1,1,"app-errors",12),t.C$Y(),t.yuY(18,W,1,1,"app-errors",12)(19,b,1,1,"app-errors",12),t.I0R(20,"div",13)(21,"button",14),t.OEk(22,"Annulla"),t.C$Y(),t.I0R(23,"button",15),t.OEk(24,"Conferma"),t.C$Y()()()()()),2&_&&(t.yG2(2),t.E7m("formGroup",m.form),t.yG2(6),t.E7m("tuiAutoFocus",!0)("tuiTextfieldSize","l"),t.yG2(5),t.E7m("tuiAutoFocus",!0)("tuiTextfieldSize","l"),t.yG2(4),t.C0Y(17,m.se("password")?17:-1),t.yG2(),t.C0Y(18,m.se("code")?18:-1),t.yG2(),t.C0Y(19,m.submitted?19:-1),t.yG2(4),t.E7m("showLoader",m.loading))},dependencies:[P.MD,n.sl,n.sz,n.ue,n.u,n.uW,n.Wo,o.CI,o.Kw,E.CQ,E.Oo,E.cP,I.b,h.g,l.m6,l.gJ,i.Sk,d.eW,d.Mt,d.Ki,a.aS,a.rD,f.qQ,f.ER],styles:["[_nghost-%COMP%]{display:block;height:100%}"]})}return u})()},8256:(O,g,e)=>{function t(s,l){return s.error?.message?s.error.message:500==s.status?`${s.error.error} ${s.error.exception}`.replace(/\</gm,"").replace(/\>+/gm,""):504==s.status?"Server unreachable, check your connection and try again.":P(function h(s){if("object"==typeof s.error&&"object"==typeof s.error.details&&Array.isArray(s.error.details)&&s.error.details.length>0){const l=s.error.details.filter(o=>"object"==typeof o&&null!=o&&o instanceof Object&&Object.keys(o).length>0).filter(o=>"string"==typeof o.attribute&&o.attribute.length>0&&("string"==typeof o.message&&o.message.length>0||Array.isArray(o.message)&&o.message.length>0));if(l.length>0)return l}return[]}(s),l)}function P(s,l){if(0==s.length)return null;const o=l?.joinChar??", ",i=s.map(a=>`${a.attribute} ${a.message}`);return i.length?function n(s){return[...new Set(s)]}(i).join(o):null}e.d(g,{Yj:()=>P,mk:()=>t})},8392:(O,g,e)=>{e.d(g,{a:()=>t});const t="Something went wrong."},4872:(O,g,e)=>{e.d(g,{ay:()=>h});var t=e(4496),P=e(3252),n=e(3616);function h(o){o||((0,t.yAg)(h),o=(0,t.uUt)(t.eM9));const i=new P._(a=>o.onDestroy(a.next.bind(a)));return a=>a.pipe((0,n.a)(i))}}}]);