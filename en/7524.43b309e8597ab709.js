"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[7524],{7524:(N,l,s)=>{s.r(l),s.d(l,{NewModule:()=>E});var r=s(1236),h=s(7552),t=s(4496),c=s(1690),m=s(8256),f=s(9938),v=s(8392),d=s(6820),p=s(1128),u=s(3480),g=s(3616),y=s(8824);let C=(()=>{class i{constructor(){this.service=(0,t.uUt)(d.I),this.destroy$=(0,t.uUt)(u.UF),this.router=(0,t.uUt)(r.E5),this.route=(0,t.uUt)(r.gV),this.notifications=(0,t.uUt)(p.E),this.loading=(0,t.OCB)(!1)}submit(o){this.loading()||(this.loading.set(!0),this.service.create(o).pipe((0,g.a)(this.destroy$),(0,y.U)(()=>this.loading.set(!1))).subscribe({next:()=>{this.router.navigate(["../"],{relativeTo:this.route})},error:e=>{this.manageErrors(e)}}))}cancel(){this.router.navigate(["../"],{relativeTo:this.route})}manageErrors(o){this.notifications.error((0,m.mk)(o)||v.a);const e=this.form?.findForm();if(!e)throw new Error("Form not found");422==o.status&&f.y.assignErrorsToForm(e,o)}static#t=this.\u0275fac=function(e){return new(e||i)};static#s=this.\u0275cmp=t.In1({type:i,selectors:[["app-new"]],viewQuery:function(e,n){if(1&e&&t.CC$(c.O,5),2&e){let a;t.wto(a=t.Gqi())&&(n.form=a.first)}},standalone:!0,features:[t.M5G([u.UF]),t.UHJ],decls:3,vars:0,consts:[[3,"submitEvent","cancelEvent"]],template:function(e,n){1&e&&(t.I0R(0,"h1"),t.OEk(1,"Nuova chiusura"),t.C$Y(),t.I0R(2,"app-holiday-form",0),t.qCj("submitEvent",function(U){return n.submit(U)})("cancelEvent",function(){return n.cancel()}),t.C$Y())},dependencies:[c.O],encapsulation:2,changeDetection:0})}return i})(),E=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#s=this.\u0275mod=t.a4G({type:i});static#e=this.\u0275inj=t.s3X({imports:[r.qQ.forChild([(0,h.VV)(C,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return i})()}}]);