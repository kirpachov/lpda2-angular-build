"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[6648],{6648:(F,T,e)=>{e.r(T),e.d(T,{UpdateModule:()=>Y});var u=e(1236),v=e(7552),m=e(7048),t=e(4496),a=e(6504),N=e(8256),M=e(9938),P=e(8392),y=e(5324),I=e(1128),_=e(3480),f=e(5e3),h=e(8212),l=e(7692),U=e(8048),c=e(3616),O=e(4704),G=e(6684),D=e(4e3),S=e(9212),g=e(8824),R=e(4792),d=e(6264);const $=["*"];let L=(()=>{class s{constructor(){this.showLoader=!1}static#t=this.\u0275fac=function(n){return new(n||s)};static#o=this.\u0275cmp=t.In1({type:s,selectors:[["app-no-item"]],inputs:{showLoader:"showLoader"},standalone:!0,features:[t.UHJ],ngContentSelectors:$,decls:4,vars:3,consts:[[1,"block","w-100","h-100",3,"overlay","showLoader","size"],["alt","not found","src","assets/img/not-found.svg","tuiSlot","top",1,"image"]],template:function(n,i){1&n&&(t.kPM(),t.I0R(0,"tui-loader",0)(1,"tui-block-status"),t.wR5(2,"img",1),t._Xx(3),t.C$Y()()),2&n&&t.E7m("overlay",!0)("showLoader",i.showLoader)("size","xl")},dependencies:[l.Sk,l.Cb,d.eA,d.M$,d.Gu],encapsulation:2})}return s})();var C=e(3797),x=e(9956);function k(s,E){if(1&s){const o=t.KQA();t.I0R(0,"p",1),t.OEk(1),t.wVc(2,"humanizeContactKey"),t.C$Y(),t.I0R(3,"form",2),t.qCj("ngSubmit",function(){t.usT(o);const i=t.GaO();return t.CGJ(i.submit())}),t.I0R(4,"div",3)(5,"tui-input",4),t.OEk(6),t.wVc(7,"humanizeContactKey"),t.C$Y(),t.wR5(8,"app-errors",5),t.C$Y(),t.wR5(9,"app-errors",5),t.I0R(10,"div",6)(11,"button",7),t.SAx(12),t.aS0(13,8),t.k70(),t.C$Y(),t.I0R(14,"button",9),t.qCj("click",function(){t.usT(o);const i=t.GaO();return t.CGJ(i.cancel())}),t.SAx(15),t.aS0(16,10),t.k70(),t.C$Y()()()}if(2&s){const o=t.GaO();let n,i;t.yG2(),t.oRS(" ",t.kDX(2,8,null==(n=o.item())?null:n.key)," "),t.yG2(2),t.E7m("formGroup",o.form),t.yG2(2),t.E7m("tuiAutoFocus",!0)("formControl",o.valueControl),t.yG2(),t.oRS(" ",t.kDX(7,10,null==(i=o.item())?null:i.key)," "),t.yG2(2),t.E7m("errors",o.valueControl.errors),t.yG2(),t.E7m("errors",o.form.errors),t.yG2(2),t.E7m("showLoader",o.loading())}}function z(s,E){1&s&&t.wR5(0,"tui-loader",11),2&s&&t.E7m("size","l")}function X(s,E){if(1&s){const o=t.KQA();t.I0R(0,"app-no-item"),t.SAx(1),t.aS0(2,12),t.k70(),t.I0R(3,"button",9),t.qCj("click",function(){t.usT(o);const i=t.GaO();return t.CGJ(i.close())}),t.SAx(4),t.aS0(5,13),t.k70(),t.C$Y()()}}let b=(()=>{class s{constructor(){this.service=(0,t.uUt)(y.s),this.router=(0,t.uUt)(u.E5),this.route=(0,t.uUt)(u.gV),this.destroy=(0,t.uUt)(_.UF),this.notifications=(0,t.uUt)(I.E),this.item=(0,t.OCB)(null),this.key=(0,t.OCB)(null),this.downloading=(0,t.OCB)(!1),this.saving=(0,t.OCB)(!1),this.loading=(0,t.S6b)(()=>this.downloading()||this.saving()),this.valueControl=new a.Ku(null),this.form=new a.WC({value:this.valueControl}),this.formDefaultValue=this.form.value}ngOnInit(){this.route.params.pipe((0,c.a)(this.destroy),(0,O.k)(o=>o.key),(0,G.I)(o=>"string"==typeof o&&o.length>0),(0,D.a)(),(0,S.y)(o=>this.key.set(o)),(0,S.y)(()=>this.reload())).subscribe()}submit(){const o=this.key();if(this.form.invalid||!o)return;const n=this.valueControl.value||"";this.saving.set(!0),this.service.update(o,n).pipe((0,c.a)(this.destroy),(0,g.U)(()=>this.saving.set(!1))).subscribe({next:()=>this.close(),error:i=>{i instanceof m.gj?M.y.assignErrorsToForm(this.form,i):this.notifications.error()}})}cancel(){confirm("Sei sicuro di voler annullare? Tutte le modifiche non salvate andranno perse.")&&this.close()}close(){this.router.navigate([".."],{relativeTo:this.route})}reload(){this.item.set(null);const o=this.key();o?(this.downloading.set(!0),this.service.show(o).pipe((0,c.a)(this.destroy),(0,g.U)(()=>this.downloading.set(!1))).subscribe({next:n=>this.itemLoaded(n),error:n=>this.notifications.error(n instanceof m.gj?(0,N.mk)(n):P.a)})):console.error("invalid key")}itemLoaded(o){this.item.set(o),o?this.form.patchValue({value:o.value??null}):this.form.reset(this.formDefaultValue)}static#t=this.\u0275fac=function(n){return new(n||s)};static#o=this.\u0275cmp=t.In1({type:s,selectors:[["app-update"]],standalone:!0,features:[t.M5G([_.UF]),t.UHJ],decls:5,vars:1,consts:()=>{let o,n,i,p,A;return o="Modifica contatto",n="Conferma",i="Annulla",p="Non abbiamo trovato il contatto che cercavi :'(",A="Esci",[o,[1,"text-xl"],[3,"formGroup","ngSubmit"],[1,"block","mb-3"],[3,"tuiAutoFocus","formControl"],[3,"errors"],[1,"flex","items-center"],["type","submit","tuiButton","",1,"me-2",3,"showLoader"],n,["type","button","tuiButton","","appearance","icon",3,"click"],i,[3,"size"],p,A]},template:function(n,i){1&n&&(t.I0R(0,"h1"),t.aS0(1,0),t.C$Y(),t.yuY(2,k,17,12)(3,z,1,1)(4,X,6,0)),2&n&&(t.yG2(2),t.C0Y(2,i.item()?2:i.loading()?3:4))},dependencies:[a.sl,a.sz,a.ue,a.u,a.ug,a.uW,h.CI,h.Kw,l.Sk,l.Cb,R.M,L,C.CQ,C.Oo,C.cP,U.aS,f.m6,f.gJ,x.g],encapsulation:2,changeDetection:0})}return s})(),Y=(()=>{class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#o=this.\u0275mod=t.a4G({type:s});static#e=this.\u0275inj=t.s3X({imports:[u.qQ.forChild([(0,v.VV)(b,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return s})()}}]);