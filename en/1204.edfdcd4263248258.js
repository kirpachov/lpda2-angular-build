"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[1204],{1e3:(f,d,i)=>{i.r(d),i.d(d,{EditIngredientModule:()=>A});var r=i(2100),m=i(7552),t=i(4496),u=i(1512),s=i(8212),E=i(1560),v=i(6504),I=i(3797),p=i(8588),C=i(3480),T=i(4388),N=i(6700),c=i(3616),$=i(6684),M=i(4e3),y=i(7368),h=i(9212),D=i(8824),R=i(9938),S=i(8256),U=i(3724),G=i(8432),g=i(8564);let O=(()=>{class a{constructor(){this.service=(0,t.uUt)(G.K),this.destroy$=(0,t.uUt)(C.UF),this.router=(0,t.uUt)(r.E5),this.route=(0,t.uUt)(r.gV),this.notifications=(0,t.uUt)(T.E),this.loading=(0,t.OCB)(!1),this.item=(0,t.OCB)(null),this.id$=new N.g(null),this.item$=this.id$.pipe((0,c.a)(this.destroy$),(0,$.I)(n=>null!==n),(0,M.a)(),(0,y.G)(n=>this.service.show(n)),(0,h.y)(()=>this.loading.set(!1)),(0,h.y)(n=>this.item.set(n)))}ngOnInit(){this.item$.pipe((0,c.a)(this.destroy$)).subscribe((0,U.I)()),this.route.params.pipe((0,c.a)(this.destroy$)).subscribe({next:n=>{this.id$.next(n.id)}})}submit(n){const e=this.id$.value;if(!e)throw new Error("Ingredient ID is not set");this.loading.set(!0),this.service.update(e,n).pipe((0,c.a)(this.destroy$),(0,D.U)(()=>this.loading.set(!1))).subscribe({next:o=>{this.notifications.fireSnackBar("Changes saved."),this.router.navigate([".."],{relativeTo:this.route})},error:o=>{this.formComponent&&R.y.assignErrorsToForm(this.formComponent.form,o),this.notifications.error((0,S.mk)(o)||"Something went wrong with the saving.")}})}cancel(){this.router.navigate([".."],{relativeTo:this.route})}static#t=this.\u0275fac=function(e){return new(e||a)};static#i=this.\u0275cmp=t.In1({type:a,selectors:[["app-edit-ingredient"]],viewQuery:function(e,o){if(1&e&&t.CC$(g.A,5),2&e){let l;t.wto(l=t.Gqi())&&(o.formComponent=l.first)}},standalone:!0,features:[t.UHJ],decls:8,vars:2,consts:()=>{let n;return n="Edit ingredient",[[1,"flex","items-center","justify-between"],n,["type","button","tuiIconButton","","appearance","icon",3,"click"],[3,"item","loading","cancelled","formSubmit"]]},template:function(e,o){1&e&&(t.I0R(0,"div",0)(1,"h1"),t.SAx(2),t.aS0(3,1),t.k70(),t.C$Y(),t.I0R(4,"button",2),t.qCj("click",function(){return o.cancel()}),t.I0R(5,"mat-icon"),t.OEk(6,"close"),t.C$Y()()(),t.I0R(7,"app-ingredient-form",3),t.qCj("cancelled",function(){return o.cancel()})("formSubmit",function(P){return o.submit(P)}),t.C$Y()),2&e&&(t.yG2(7),t.E7m("item",o.item())("loading",o.loading()))},dependencies:[u.w,E.qL,v.sl,s.CI,s.Kw,I.CQ,p.Y3,g.A],encapsulation:2})}return a})(),A=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#i=this.\u0275mod=t.a4G({type:a});static#n=this.\u0275inj=t.s3X({imports:[r.qQ.forChild([(0,m.VV)(O,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return a})()},532:(f,d,i)=>{i.d(d,{e:()=>t});var r=i(8400),m=i(2264);class t extends r.w{constructor(s){super(s),this.name=s.name,this.description=s.description,this.status=s.status,this.other=s.other,this.translations={...s.translations},s.image&&(this.image=new m.W(s.image))}}}}]);