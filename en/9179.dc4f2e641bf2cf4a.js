"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[9179],{9179:(U,d,e)=>{e.r(d),e.d(d,{EditModule:()=>$});var r=e(1236),v=e(7552),t=e(4496),u=e(4640),l=e(7048),f=e(8256),h=e(8392),g=e(7556),E=e(1128),m=e(3480),c=e(3616),T=e(4704),C=e(6684),I=e(9212),M=e(7368),p=e(8824),N=e(4476);let S=(()=>{class o{constructor(){this.destroy$=(0,t.uUt)(m.UF),this.service=(0,t.uUt)(g.K),this.notifications=(0,t.uUt)(E.E),this.router=(0,t.uUt)(r.E5),this.route=(0,t.uUt)(r.gV),this._=(0,t.uUt)(N.OY).setTitle("Change reservation shifts | La Porta D'Acqua"),this.loading=(0,t.OCB)(!0),this.item=(0,t.OCB)(null)}ngOnInit(){this.route.params.pipe((0,c.a)(this.destroy$),(0,T.k)(i=>Number(i.id)),(0,C.I)(i=>"number"==typeof i&&i>0&&!isNaN(i)),(0,I.y)(()=>this.loading.set(!0)),(0,M.G)(i=>this.service.show(i).pipe((0,c.a)(this.destroy$),(0,p.U)(()=>this.loading.set(!1))))).subscribe({next:i=>this.item.set(i),error:i=>this.notifications.error(i instanceof l.gj?(0,f.mk)(i):h.a)})}update(i){if(this.loading())return;const n=this.item()?.id;n?(this.loading.set(!0),this.service.update(n,i).pipe((0,c.a)(this.destroy$),(0,p.U)(()=>this.loading.set(!1))).subscribe({next:()=>{this.notifications.fireSnackBar("Modified."),this.close()},error:s=>{this.form&&s instanceof l.gj?this.form.manageHttpError(s):(console.error(s),this.notifications.error(s instanceof l.gj?(0,f.mk)(s):h.a))}})):console.warn("no id")}cancel(){confirm("Are you sure you want to cancel?")&&this.close()}close(){this.router.navigate(["../"],{relativeTo:this.route})}static#t=this.\u0275fac=function(n){return new(n||o)};static#i=this.\u0275cmp=t.In1({type:o,selectors:[["app-edit"]],viewQuery:function(n,s){if(1&n&&t.CC$(u.q,5),2&n){let a;t.wto(a=t.Gqi())&&(s.form=a.first)}},standalone:!0,features:[t.M5G([m.UF]),t.UHJ],decls:3,vars:3,consts:()=>{let i;return i="Change booking shift.",[i,[3,"loading","turn","context","submitted","cancelled"]]},template:function(n,s){1&n&&(t.I0R(0,"h1"),t.aS0(1,0),t.C$Y(),t.I0R(2,"app-reservation-turn-form",1),t.qCj("submitted",function(y){return s.update(y)})("cancelled",function(){return s.cancel()}),t.C$Y()),2&n&&(t.yG2(2),t.E7m("loading",s.loading())("turn",s.item())("context","update"))},dependencies:[u.q],encapsulation:2,changeDetection:0})}return o})(),$=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#i=this.\u0275mod=t.a4G({type:o});static#e=this.\u0275inj=t.s3X({imports:[r.qQ.forChild([(0,v.VV)(S,{path:"",closeable:!0,dismissible:!0,size:"l"})])]})}return o})()}}]);