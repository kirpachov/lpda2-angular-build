"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[1780],{8108:(A,E,e)=>{e.r(E),e.d(E,{ShowModule:()=>W});var s=e(2992),R=e(7552),t=e(4496),u=e(4251),O=e(3480),d=e(7692),T=e(1512),_=e(8212),S=e(3616),a=e(8824),c=e(7748),m=e(6424),f=e(1368),G=e(1128),h=e(9722);function $(n,N){if(1&n){const o=t.KQA();t.I0R(0,"table",1)(1,"tbody")(2,"tr",2)(3,"td",3)(4,"span",4),t.aS0(5,5),t.C$Y()(),t.I0R(6,"td",3),t.OEk(7),t.C$Y()(),t.I0R(8,"tr",2)(9,"td",3)(10,"span",4),t.aS0(11,6),t.C$Y()(),t.I0R(12,"td",3),t.wR5(13,"app-preorder-reservation-group-preorder-type",7),t.C$Y()(),t.I0R(14,"tr",2)(15,"td",3)(16,"span",4),t.aS0(17,8),t.C$Y()(),t.I0R(18,"td",3),t.OEk(19),t.wVc(20,"currency"),t.C$Y()(),t.I0R(21,"tr",2)(22,"td",3)(23,"span",4),t.aS0(24,9),t.C$Y()(),t.I0R(25,"td",3),t.wR5(26,"app-preorder-reservation-group-status",10),t.C$Y()()()(),t.I0R(27,"h2",11),t.aS0(28,12),t.C$Y(),t.wR5(29,"app-select-turns-paymentv2",13),t.I0R(30,"div")(31,"a",14),t.SAx(32),t.aS0(33,15),t.k70(),t.C$Y(),t.I0R(34,"div")(35,"button",16),t.qCj("click",function(){t.usT(o);const r=t.GaO();return t.CGJ(r.delete())}),t.SAx(36),t.aS0(37,17),t.k70(),t.C$Y()()()}if(2&n){const o=t.GaO();let i;t.yG2(7),t.oRS(" ",o.item().title," "),t.yG2(6),t.E7m("type",null==(i=o.item())?null:i.preorder_type),t.yG2(6),t.oRS(" ",t.kDX(20,6,o.item().payment_value)," "),t.yG2(7),t.E7m("item",o.item()),t.yG2(3),t.E7m("item",o.item())("editable",!1)}}function v(n,N){1&n&&t.wR5(0,"tui-loader",18),2&n&&t.E7m("showLoader",!0)}function D(n,N){1&n&&(t.I0R(0,"p"),t.SAx(1),t.aS0(2,19),t.k70(),t.C$Y())}let y=(()=>{class n{constructor(){this.service=(0,t.uUt)(u.e),this.destroy$=(0,t.uUt)(O.UF),this.router=(0,t.uUt)(s.E5),this.route=(0,t.uUt)(s.gV),this.notifications=(0,t.uUt)(G.E),this.item=(0,t.OCB)(null),this.loading=(0,t.OCB)(!1),this.itemId=null}ngOnInit(){this.route.params.pipe((0,S.a)(this.destroy$)).subscribe({next:o=>{this.itemId=Number(o.id),isNaN(this.itemId)?this.item.set(null):this.load(this.itemId)}})}delete(){this.notifications.confirm("Eliminando questo elemento, non verra pi\xF9 chiesto il pagamento alla prenotazione per i casi che prevedeva.").pipe((0,S.a)(this.destroy$)).subscribe({next:o=>{o&&this.confirmedDelete()}})}confirmedDelete(){this.itemId&&(this.loading.set(!0),this.service.destroy(this.itemId).pipe((0,S.a)(this.destroy$),(0,a.U)(()=>{this.loading.set(!1),this.router.navigate(["../"],{relativeTo:this.route})})).subscribe())}load(o){this.loading.set(!0),this.service.show(o).pipe((0,S.a)(this.destroy$),(0,a.U)(()=>this.loading.set(!1))).subscribe({next:i=>this.item.set(i)})}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.In1({type:n,selectors:[["app-show"]],standalone:!0,features:[t.M5G([O.UF]),t.UHJ],decls:5,vars:1,consts:()=>{let o,i,r,I,M,P,g,p,C;return o="Dettagli pagamento alla prenotazione",i="Titolo",r="Tipologia pagamento",I="Valore pagamento",M="Stato",P="Quando sono richiesti pagamenti?",g="Modifica",p="Elimina",C="Non trovato :'(",[o,[1,"tui-table","mb-3"],[1,"tui-table__tr","tui-table__tr_border_none"],[1,"tui-table__td"],[1,"text-xl"],i,r,[3,"type"],I,M,[3,"item"],[1,"mb-3","text-2xl"],P,[1,"block","mb-3",3,"item","editable"],["routerLink","edit","tuiButton","","appearance","flat",1,"mb-3"],g,["tuiButton","","appearance","secondary-destructive","type","button",3,"click"],p,[3,"showLoader"],C]},template:function(i,r){1&i&&(t.I0R(0,"h1"),t.aS0(1,0),t.C$Y(),t.yuY(2,$,38,8)(3,v,1,1)(4,D,3,0)),2&i&&(t.yG2(2),t.C0Y(2,r.item()?2:r.loading()?3:4))},dependencies:[d.Sk,d.Cb,c.c,m.w,f.cf,T.w,s.qQ,s.ER,_.CI,_.Kw,h.t],encapsulation:2,changeDetection:0})}return n})(),W=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.a4G({type:n});static#o=this.\u0275inj=t.s3X({imports:[s.qQ.forChild([(0,R.VV)(y,{path:"",closeable:!0,dismissible:!0,size:"l"})])]})}return n})()},6988:(A,E,e)=>{e.d(E,{E:()=>d,Q:()=>T});var s=e(4496),R=e(3480),t=e(3840),u=e(3120),O=e(3616);let d=(()=>{class _{constructor(a,c){this.el=a,this.destroy$=c}set tuiScrollIntoView(a){a&&(0,u.k)(0).pipe((0,O.a)(this.destroy$)).subscribe(()=>{this.el.nativeElement.dispatchEvent(new CustomEvent(t.dG,{bubbles:!0,detail:this.el.nativeElement}))})}}return _.\u0275fac=function(a){return new(a||_)(s.GI1(s.GMv),s.GI1(R.UF,2))},_.\u0275dir=s.Sc5({type:_,selectors:[["","tuiScrollIntoView",""]],inputs:{tuiScrollIntoView:"tuiScrollIntoView"},features:[s.M5G([R.UF])]}),_})(),T=(()=>{class _{}return _.\u0275fac=function(a){return new(a||_)},_.\u0275mod=s.a4G({type:_}),_.\u0275inj=s.s3X({}),_})()}}]);