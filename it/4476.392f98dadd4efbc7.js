"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4476],{2096:(M,l,i)=>{i.r(l),i.d(l,{UpdateModule:()=>T});var r=i(2992),c=i(7552),t=i(4496),h=i(3608),v=i(8256),f=i(9938),p=i(8392),y=i(6820),g=i(1128),d=i(3480),u=i(7692),m=i(3616),U=i(4704),C=i(4e3),E=i(6684),F=i(9212),I=i(7368),G=i(8824);let O=(()=>{class a{constructor(){this.service=(0,t.uUt)(y.I),this.destroy$=(0,t.uUt)(d.UF),this.router=(0,t.uUt)(r.E5),this.route=(0,t.uUt)(r.gV),this.notifications=(0,t.uUt)(g.E),this.id=this.route.snapshot.params.id,this.holiday=(0,t.OCB)(null),this.loading=(0,t.OCB)(!1)}ngOnInit(){this.route.params.pipe((0,m.a)(this.destroy$),(0,U.k)(s=>Number(s.id)),(0,C.a)(),(0,E.I)(s=>"number"==typeof s&&s>0&&!isNaN(s)),(0,F.y)(s=>this.id=s),(0,I.G)(s=>this.service.show(s))).subscribe({next:s=>{this.holiday.set(s)}})}cancel(){this.router.navigate(["../"],{relativeTo:this.route})}submit(s){if(!this.id)throw new Error("ID not provided");this.loading()||(this.loading.set(!0),this.service.update(this.id,s).pipe((0,m.a)(this.destroy$),(0,G.U)(()=>this.loading.set(!1))).subscribe({next:()=>{this.router.navigate(["../"],{relativeTo:this.route})},error:o=>{this.manageErrors(o)}}))}manageErrors(s){this.notifications.error((0,v.mk)(s)||p.a);const o=this.form?.findForm();if(!o)throw new Error("Form not found");422==s.status&&f.y.assignErrorsToForm(o,s)}static#t=this.\u0275fac=function(o){return new(o||a)};static#s=this.\u0275cmp=t.In1({type:a,selectors:[["app-update"]],viewQuery:function(o,e){if(1&o&&t.CC$(h.O,5),2&o){let n;t.wto(n=t.Gqi())&&(e.form=n.first)}},standalone:!0,features:[t.M5G([d.UF]),t.UHJ],decls:4,vars:3,consts:[[3,"showLoader","overlay"],[3,"holiday","cancelEvent","submitEvent"]],template:function(o,e){1&o&&(t.I0R(0,"h1"),t.OEk(1,"Modifica chiusura"),t.C$Y(),t.I0R(2,"tui-loader",0)(3,"app-holiday-form",1),t.qCj("cancelEvent",function(){return e.cancel()})("submitEvent",function($){return e.submit($)}),t.C$Y()()),2&o&&(t.yG2(2),t.E7m("showLoader",null===e.holiday())("overlay",!0),t.yG2(),t.E7m("holiday",e.holiday()))},dependencies:[h.O,u.Sk,u.Cb],changeDetection:0})}return a})(),T=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#s=this.\u0275mod=t.a4G({type:a});static#i=this.\u0275inj=t.s3X({imports:[r.qQ.forChild([(0,c.VV)(O,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return a})()}}]);