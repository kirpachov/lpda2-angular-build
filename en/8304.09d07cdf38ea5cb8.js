"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[8304],{78304:(W,r,t)=>{t.r(r),t.d(r,{ListPublicMessagesComponent:()=>K});var _=t(54496),l=t(31236),u=t(83480),L=t(1128),P=t(91368),M=t(53616),A=t(66684),I=t(19212),m=t(68824),p=t(38256),O=t(45656),g=t(58212),c=t(41512),G=t(16500),d=t(31480),h=t(58248),T=t(5892),C=t(6504),U=t(14476);const f=(e,a)=>a.id;function B(e,a){1&e&&(_.SAx(0),_.aS0(1,12),_.k70())}function R(e,a){1&e&&(_.SAx(0),_.aS0(1,13),_.k70())}function D(e,a){1&e&&_.C_f(0)}function N(e,a){1&e&&_.C_f(0)}function $(e,a){1&e&&_.C_f(0)}function y(e,a){1&e&&_.C_f(0)}function v(e,a){if(1&e&&(_.I0R(0,"tr")(1,"td")(2,"span",14),_.yuY(3,$,1,0,"ng-container",10),_.C$Y(),_.I0R(4,"a",15)(5,"span"),_.OEk(6),_.wVc(7,"publicMessageKey"),_.C$Y()()(),_.I0R(8,"td")(9,"span",14),_.yuY(10,y,1,0,"ng-container",10),_.C$Y(),_.wR5(11,"app-show-translations",16),_.C$Y()()),2&e){const n=a.$implicit;_.GaO();const s=_.Gew(7),o=_.Gew(9);_.yG2(3),_.E7m("ngTemplateOutlet",s),_.yG2(),_.E7m("routerLink",n.key),_.yG2(2),_.cNF(_.kDX(7,5,n.key)),_.yG2(4),_.E7m("ngTemplateOutlet",o),_.yG2(),_.E7m("translations",null==n.translations?null:n.translations.text)}}const z=()=>[10,20,50,100];let K=(()=>{class e{constructor(){this.loading=(0,_.OCB)(!1),this.data=(0,_.OCB)(null),this.items=(0,_.S6b)(()=>this.data()?.items||[]),this.service=(0,_.uUt)(G.o),this.notifications=(0,_.uUt)(L.E),this.date=(0,_.uUt)(P.y),this.destroy$=(0,_.uUt)(u.UF),this.router=(0,_.uUt)(l.E5),this._=(0,_.uUt)(U.OY).setTitle("Comunications | La Porta D'Acqua"),this.inputSize="m",this.form=new C.WC({offset:new C.Ku(0),per_page:new C.Ku(10)})}ngOnInit(){this.search(),this.router.events.pipe((0,M.a)(this.destroy$),(0,A.I)(n=>n instanceof l.MT),(0,I.y)(()=>this.search())).subscribe(),this.form.valueChanges.pipe((0,M.a)(this.destroy$),(0,I.y)(()=>this.search())).subscribe({next:()=>{this.search()}})}search(n={}){n={...n,...this.form.value},this.loading.set(!0),this.service.search(n).pipe((0,M.a)(this.destroy$),(0,m.U)(()=>this.loading.set(!1))).subscribe({next:s=>{this.data.set(s)},error:s=>{this.notifications.error((0,p.mk)(s)||"Something went wrong in the research."),console.error(s)}})}paginationChange(n){this.form.patchValue({offset:n.page,per_page:n.size})}static#_=this.\u0275fac=function(s){return new(s||e)};static#t=this.\u0275cmp=_.In1({type:e,selectors:[["app-list-public-messages"]],standalone:!0,features:[_.M5G([u.UF]),_.UHJ],decls:26,vars:5,consts:()=>{let n,s,o,E,S;return n="Communications",s="\n           You can display personalized messages on public pages. For each\n          position, you can put exactly one message translated into multiple\n          languages. \n        ",o="Create new",E="Position",S="Message",[n,[1,"text-slate-400","mb-3"],s,["keyCol",""],["textCol",""],[1,"mb-3"],["size","l","tuiButton","","routerLink","new"],o,[1,"responsive-table","collapse-md"],[1,"text-start"],[4,"ngTemplateOutlet"],[1,"my-2",3,"items","total","paginationChange"],E,S,[1,"collapse-header"],["tuiLink","",3,"routerLink"],[3,"translations"]]},template:function(s,o){if(1&s&&(_.I0R(0,"h1"),_.SAx(1),_.aS0(2,0),_.k70(),_.C$Y(),_.I0R(3,"p",1),_.SAx(4),_.aS0(5,2),_.k70(),_.C$Y(),_.yuY(6,B,2,0,"ng-template",null,3,_.gJz)(8,R,2,0,"ng-template",null,4,_.gJz),_.I0R(10,"div",5)(11,"a",6),_.SAx(12),_.aS0(13,7),_.k70(),_.C$Y()(),_.I0R(14,"table",8)(15,"thead")(16,"tr")(17,"th",9),_.yuY(18,D,1,0,"ng-container",10),_.C$Y(),_.I0R(19,"th",9),_.yuY(20,N,1,0,"ng-container",10),_.C$Y()()(),_.I0R(21,"tbody"),_.c53(22,v,12,7,"tr",null,f),_.C$Y()(),_.I0R(24,"tui-table-pagination",11),_.qCj("paginationChange",function(S){return o.paginationChange(S)}),_.C$Y(),_.wR5(25,"router-outlet")),2&s){const E=_.Gew(7),S=_.Gew(9);let i;_.yG2(18),_.E7m("ngTemplateOutlet",E),_.yG2(2),_.E7m("ngTemplateOutlet",S),_.yG2(2),_.oho(o.items()),_.yG2(2),_.E7m("items",_.q4q(4,z))("total",null!==(i=null==(i=o.data())||null==i.metadata?null:i.metadata.total_count)&&void 0!==i?i:0)}},dependencies:[l.cP,O.WY,g.CI,g.Kw,P.XV,d.s,c.w,c.C,l.ER,h.G,T.yy,T.Ws],encapsulation:2,changeDetection:0})}return e})()}}]);