"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[3020],{3020:(L,N,o)=>{o.d(N,{M:()=>Wt});var t=o(4496),p=o(1236),g=o(1512),E=o(466),M=o(8212),_=o(5193),m=o(4336),l=o(8048),C=o(7692),S=o(5656),$=o(4436),Z=o(1560),y=o(6376),q=o(1104),h=o(3797),v=o(4856),D=o(1368),tt=o(1712),P=o(3480),x=o(5e3),R=o(3616),et=o(4e3),it=o(2300),nt=o(9212),f=o(8824),ot=o(1128),G=o(8256),_t=o(9052),st=o(9088),O=o(6504),b=o(5892),A=o(3400),at=o(1343),rt=o(6772),lt=o(7048),Ct=o(8128),Y=o(3252),ct=o(9144);let Et=(()=>{class e extends rt.A{constructor(){super("admin/menu")}export(){return new Y._(i=>{this.get("export",{responseType:"blob",observe:"response"}).pipe((0,ct.a)(n=>(console.error("ExportMenuService.export() error:",n),i.error(n),new Y._))).subscribe(n=>{if(n instanceof lt.WA&&n.body){const s=(0,Ct.k)(n.headers?.get("Content-Disposition"))??"Menu.xlsx",c=n.headers?.get("Content-Type")??"application/octet-stream",T=window.URL.createObjectURL(new Blob([n.body],{type:c})),d=document.createElement("a");d.href=T,d.download=s,d.click(),i.complete()}})})}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275prov=t.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var St=o(7936);const ut=(e,a)=>a.id;function gt(e,a){1&e&&(t.SAx(0),t.aS0(1,17),t.k70())}function Ot(e,a){1&e&&(t.SAx(0),t.aS0(1,18),t.k70())}function Tt(e,a){if(1&e&&(t.I0R(0,"span",19),t.OEk(1),t.C$Y()),2&e){const i=t.GaO();let n;t.yG2(),t.oRS("(",null==(n=i.data())||null==n.metadata?null:n.metadata.total_count,")")}}function dt(e,a){if(1&e&&(t.I0R(0,"a",21),t.wVc(1,"urlTo"),t.I0R(2,"span",1)(3,"mat-icon",19),t.OEk(4,"share"),t.C$Y(),t.SAx(5),t.aS0(6,23),t.k70(),t.C$Y()()),2&e){const i=t.GaO(2);t.E7m("routerLink",t.g7$(1,1,i.parentCategoryId,"menuCategory.linkCategory"))}}function pt(e,a){if(1&e&&(t.I0R(0,"tui-data-list",20)(1,"a",21),t.wVc(2,"urlTo"),t.I0R(3,"span",1)(4,"mat-icon",19),t.OEk(5,"add_circle"),t.C$Y(),t.I0R(6,"span"),t.aS0(7,22),t.C$Y()()(),t.yuY(8,dt,7,4,"a",21),t.C$Y()),2&e){const i=t.GaO();let n;t.yG2(),t.E7m("routerLink",t.g7$(2,2,null!==(n=i.parentCategoryId)&&void 0!==n?n:"","menuCategory.createChild")),t.yG2(7),t.C0Y(8,i.parentCategoryId?8:-1)}}function mt(e,a){1&e&&(t.SAx(0),t.aS0(1,28),t.k70())}function Rt(e,a){1&e&&(t.SAx(0),t.aS0(1,29),t.k70())}function It(e,a){if(1&e){const i=t.KQA();t.I0R(0,"tui-data-list",20)(1,"button",24),t.qCj("click",function(){t.usT(i);const s=t.GaO();return t.CGJ(s.triggerFiltering())}),t.I0R(2,"span",1)(3,"mat-icon",19),t.OEk(4,"search"),t.C$Y(),t.SAx(5),t.aS0(6,25),t.k70(),t.C$Y()(),t.I0R(7,"button",24),t.qCj("click",function(){t.usT(i);const s=t.GaO();return t.CGJ(s.exportAllMenu())}),t.I0R(8,"tui-loader",26)(9,"span",1)(10,"mat-icon",19),t.OEk(11,"download"),t.C$Y(),t.SAx(12),t.aS0(13,27),t.k70(),t.C$Y()()(),t.I0R(14,"button",24),t.qCj("click",function(){t.usT(i);const s=t.GaO();return t.CGJ(s.triggerOrdering())}),t.I0R(15,"span",1)(16,"mat-icon",19),t.OEk(17,"sort_by_alpha"),t.C$Y(),t.yuY(18,mt,2,0,"ng-container")(19,Rt,2,0),t.C$Y()()()}if(2&e){const i=t.GaO();t.yG2(8),t.E7m("overlay",!0)("showLoader",i.exporting()),t.yG2(10),t.C0Y(18,i.ordering()?18:19)}}function Nt(e,a){if(1&e){const i=t.KQA();t.I0R(0,"div",30)(1,"form",31),t.qCj("ngSubmit",function(){t.usT(i);const s=t.GaO();return t.CGJ(s.submitFilters())}),t.I0R(2,"button",32)(3,"mat-icon"),t.OEk(4,"search"),t.C$Y()(),t.I0R(5,"tui-input",33),t.SAx(6),t.aS0(7,34),t.k70(),t.wR5(8,"input",35),t.C$Y()()()}if(2&e){const i=t.GaO();t.yG2(),t.E7m("formGroup",i.filters),t.yG2(),t.E7m("showLoader",i.searching()),t.yG2(3),t.E7m("tuiTextfieldSize","m"),t.yG2(3),t.E7m("autocomplete",!1)}}function Mt(e,a){if(1&e&&(t.I0R(0,"a",48),t.wVc(1,"urlTo"),t.I0R(2,"span",1)(3,"mat-icon",19),t.OEk(4,"link"),t.C$Y(),t.I0R(5,"span"),t.aS0(6,51),t.C$Y()()()),2&e){const i=t.GaO(3).$implicit;t.E7m("routerLink",t.g7$(1,1,i.id,"menuCategory.public"))}}function ft(e,a){if(1&e&&(t.I0R(0,"a",48),t.wVc(1,"urlTo"),t.I0R(2,"span",1)(3,"mat-icon",19),t.OEk(4,"share"),t.C$Y(),t.I0R(5,"span"),t.aS0(6,52),t.C$Y()()()),2&e){const i=t.GaO(3).$implicit;t.E7m("routerLink",t.g7$(1,1,i.secret,"menuCategory.private"))}}function At(e,a){if(1&e){const i=t.KQA();t.I0R(0,"tui-data-list",20)(1,"a",21),t.wVc(2,"urlTo"),t.I0R(3,"span",1)(4,"mat-icon",19),t.OEk(5,"visibility"),t.C$Y(),t.I0R(6,"span"),t.aS0(7,46),t.C$Y()()(),t.I0R(8,"a",21),t.wVc(9,"urlTo"),t.I0R(10,"span",1)(11,"mat-icon",19),t.OEk(12,"content_copy"),t.C$Y(),t.I0R(13,"span"),t.aS0(14,47),t.C$Y()()(),t.yuY(15,Mt,7,4,"a",48)(16,ft,7,4,"a",48),t.I0R(17,"button",49),t.qCj("click",function(){t.usT(i);const s=t.GaO(2).$implicit,c=t.GaO();return t.CGJ(c.remove(s))}),t.I0R(18,"span",1)(19,"mat-icon",19),t.OEk(20,"delete"),t.C$Y(),t.I0R(21,"span"),t.aS0(22,50),t.C$Y()()()()}if(2&e){const i=t.GaO(2).$implicit;t.yG2(),t.E7m("routerLink",t.g7$(2,4,i.id,"menuCategory.show")),t.yG2(7),t.E7m("routerLink",t.g7$(9,7,i.id,"menuCategory.duplicate")),t.yG2(7),t.C0Y(15,!0===(null==i.visibility?null:i.visibility.public_visible)?15:-1),t.yG2(),t.C0Y(16,!0===(null==i.visibility?null:i.visibility.private_visible)?16:-1)}}function ht(e,a){if(1&e&&t.yuY(0,At,23,10,"tui-data-list",45),2&e){const i=t.GaO().$implicit;t.E7m("ngIf",i)}}function Gt(e,a){if(1&e&&t.wR5(0,"app-show-image",53),2&e){const i=t.GaO().$implicit;t.E7m("image",i.images[0])}}function Lt(e,a){1&e&&(t.SAx(0),t.aS0(1,60),t.k70())}function $t(e,a){if(1&e&&(t.SAx(0),t.aS0(1,58),t.k70(),t.yuY(2,Lt,2,0,"ng-template",null,59,t.gJz),t.wR5(4,"tui-tooltip",5)),2&e){const i=t.Gew(3);t.yG2(4),t.E7m("content",i)}}function yt(e,a){1&e&&(t.SAx(0)(1),t.aS0(2,61),t.k70()())}const vt=e=>({"text-red-400":e});function Dt(e,a){if(1&e&&(t.I0R(0,"p",55),t.yuY(1,$t,5,1,"ng-template",null,56,t.gJz)(3,yt,3,0,"ng-container",57),t.C$Y()),2&e){const i=t.Gew(2),n=t.GaO(2).$implicit;t.E7m("ngClass",t.S45(3,vt,!1===n.visibility.public_visible)),t.yG2(3),t.E7m("ngIf",!0===n.visibility.public_visible)("ngIfElse",i)}}function Pt(e,a){if(1&e&&(t.SAx(0),t.yuY(1,Dt,4,5,"p",54),t.k70()),2&e){const i=t.GaO().$implicit;t.yG2(),t.E7m("ngIf",i.visibility)}}function xt(e,a){1&e&&(t.SAx(0),t.aS0(1,66),t.k70())}function bt(e,a){if(1&e&&(t.I0R(0,"p",63),t.SAx(1),t.aS0(2,64),t.k70(),t.yuY(3,xt,2,0,"ng-template",null,65,t.gJz),t.wR5(5,"tui-tooltip",5),t.C$Y()),2&e){const i=t.Gew(4);t.yG2(5),t.E7m("content",i)}}function Yt(e,a){if(1&e&&(t.SAx(0),t.yuY(1,bt,6,1,"p",62),t.k70()),2&e){const i=t.GaO().$implicit;t.yG2(),t.E7m("ngIf",!(i.stats&&i.stats.dishes&&i.stats.dishes.active&&i.stats.dishes.active>0))}}function kt(e,a){if(1&e&&(t.I0R(0,"p",67),t.OEk(1),t.I0R(2,"span",68),t.aS0(3,69),t.C$Y()()),2&e){const i=t.GaO().$implicit;t.yG2(),t.oRS(" ",i.stats.dishes.inactive," ")}}function Ut(e,a){1&e&&(t.I0R(0,"button",44)(1,"mat-icon",70),t.OEk(2,"drag_handle"),t.C$Y()())}function Bt(e,a){if(1&e&&(t.I0R(0,"tui-hosted-dropdown",5)(1,"button",44)(2,"mat-icon"),t.OEk(3,"more_vert"),t.C$Y()()()),2&e){t.GaO();const i=t.Gew(1);t.E7m("content",i)}}function zt(e,a){if(1&e&&(t.yuY(0,ht,1,1,"ng-template",null,36,t.gJz),t.I0R(2,"tui-island",37)(3,"div",38)(4,"span",1)(5,"a",39),t.wVc(6,"urlTo"),t.yuY(7,Gt,1,1,"app-show-image",40),t.C$Y(),t.I0R(8,"div")(9,"a",41),t.wVc(10,"urlTo"),t.OEk(11),t.C$Y(),t.yuY(12,Pt,2,1,"ng-container",42)(13,Yt,2,1,"ng-container",42)(14,kt,4,1,"p",43),t.C$Y()(),t.yuY(15,Ut,3,0,"button",44)(16,Bt,4,1),t.C$Y()()),2&e){const i=a.$implicit,n=t.GaO();t.yG2(5),t.E7m("routerLink",t.g7$(6,8,i.id,"menuCategory.show")),t.yG2(2),t.E7m("ngIf",i&&i.images&&i.images.length>0),t.yG2(2),t.E7m("routerLink",t.g7$(10,11,i.id,"menuCategory.show")),t.yG2(2),t.cNF(i.name),t.yG2(),t.E7m("ngIf",!n.parentCategoryId),t.yG2(),t.E7m("ngIf",n.parentCategoryId),t.yG2(),t.C0Y(14,i.stats&&i.stats.dishes&&i.stats.dishes.inactive?14:-1),t.yG2(),t.C0Y(15,n.ordering()?15:16)}}function Ht(e,a){1&e&&t.wR5(0,"tui-loader",71),2&e&&t.E7m("showLoader",!0)}function Xt(e,a){1&e&&(t.I0R(0,"p",72),t.SAx(1),t.aS0(2,73),t.k70(),t.C$Y())}function Ft(e,a){if(1&e&&t.yuY(0,Ht,1,1,"tui-loader",71)(1,Xt,3,0),2&e){const i=t.GaO();t.C0Y(0,i.searching()?0:1)}}const wt=()=>[10,20,50,100];function Vt(e,a){if(1&e){const i=t.KQA();t.I0R(0,"tui-table-pagination",74),t.qCj("paginationChange",function(s){t.usT(i);const c=t.GaO();return t.CGJ(c.paginationChange(s))}),t.C$Y()}if(2&e){const i=t.GaO();let n;t.E7m("items",t.q4q(2,wt))("total",null!==(n=null==(n=i.data())||null==n.metadata?null:n.metadata.total_count)&&void 0!==n?n:0)}}const Jt=e=>({rotate180:e}),jt=e=>({invisible:e}),Qt=e=>({"allow-reorder":e});let Wt=(()=>{class e{constructor(){this.service=(0,t.uUt)(tt.S),this.destroy$=(0,t.uUt)(P.UF),this.notifications=(0,t.uUt)(ot.E),this.router=(0,t.uUt)(p.E5),this.exportService=(0,t.uUt)(Et),this.data=(0,t.OCB)(null),this.items=(0,t.S6b)(()=>this.data()?.items??[]),this.filtering=(0,t.OCB)(!1),this.ordering=(0,t.OCB)(!1),this.exporting=(0,t.OCB)(!1),this.searching=(0,t.OCB)(!1),this.deleting=(0,t.OCB)(!1),this.moving=(0,t.OCB)(!1),this.loading=(0,t.S6b)(()=>this.searching()||this.deleting()||this.moving()||this.exporting()),this.reorderEnabled=(0,t.OCB)(!0),this.filters=new O.WC({query:new O.Ku(null)}),this.offset=0,this.per_page=10,this.parentCategoryId=null}ngOnInit(){this.search(),this.filters.valueChanges.pipe((0,R.a)(this.destroy$),(0,et.a)(),(0,it.o)(200),(0,nt.y)(()=>this.offset=0)).subscribe({next:()=>this.search()}),this.router.events.pipe((0,R.a)(this.destroy$)).subscribe({next:i=>{i instanceof p.MT&&this.search()}})}ngOnChanges(i){i.parentCategoryId&&this.search()}triggerFiltering(){this.filtering.set(!this.filtering()),this.search()}submitFilters(){this.search()}paginationChange(i){this.per_page=i.size,this.offset=i.page,this.search()}search(i=this.parseFilters()){this.searchSub?.unsubscribe(),this.searching.set(!0),this.searchSub=this.service.search(i).pipe((0,R.a)(this.destroy$),(0,f.U)(()=>this.searching.set(!1))).subscribe({next:n=>this.data.set(n),error:n=>{this.data.set(null),this.notifications.error((0,G.mk)(n)||"Something went wrong. Please try again later.")}})}parseFilters(){const i=this.filters.value,n={per_page:this.per_page,offset:this.offset};return this.filtering()&&i.query&&(n.query=i.query),n.parent_id=this.parentCategoryId??"",n}remove(i){this.notifications.confirm("Are you sure you want to delete the category?",{yes:"Yes, delete the category.",no:"Cancel"}).pipe((0,R.a)(this.destroy$)).subscribe({next:n=>{this.deleteCategory(i)}})}deleteCategory(i){const n=i?.id;n&&(this.deleting.set(!0),this.service.destroy(n).pipe((0,R.a)(this.destroy$),(0,f.U)(()=>this.deleting.set(!1))).subscribe({next:()=>{this.notifications.fireSnackBar("Category deleted."),this.search()},error:s=>{this.notifications.error((0,G.mk)(s)||"Something went wrong.")}}))}drop(i){if(i.previousIndex===i.currentIndex)return;const n=this.items(),s=n[i.previousIndex]?.id;s&&((0,A.qv)(n,i.previousIndex,i.currentIndex),this.moving.set(!0),this.service.move(s,i.currentIndex).pipe((0,R.a)(this.destroy$),(0,f.U)(()=>this.moving.set(!1)),(0,f.U)(()=>this.search())).subscribe({error:c=>this.notifications.error((0,G.mk)(c)||"Something went wrong.")}))}triggerOrdering(){this.ordering()||this.notifications.fireSnackBar("\n           Reorder the categories by dragging them with the button on the right\n          side of each category. \n        ","Understood.",{duration:5e3}),this.ordering.set(!this.ordering())}exportAllMenu(){this.exporting.set(!0),this.exportService.export().pipe((0,R.a)(this.destroy$),(0,f.U)(()=>this.exporting.set(!1))).subscribe((0,at.I)())}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-list-categories"]],inputs:{parentCategoryId:"parentCategoryId"},standalone:!0,features:[t.M5G([P.UF]),t.SYr,t.UHJ],decls:32,vars:19,consts:()=>{let i,n,s,c,T,d,I,u,k,U,B,z,H,X,F,w,V,J,j,Q,W,K;return i="Add",n="Categories",s="Menu",c="Create new",T="Associate existing",d="Filter elements",I="Export everything",u="Done.",k="Reorganize",U="Filter by name or description",B="Show",z="Duplicate",H="Remove",X="Public link preview",F="Private link preview",w="NOT public",V="\n           To make it public, open the menu, then open the details and edit the\n          Visibility. \n        ",J="Public",j="NOT public",Q="There are no active dishes in this category.",W="Disabled dishes",K="There are no categories.",[[1,"flex","items-center","justify-between"],[1,"flex","items-center"],[1,"me-1",3,"click"],["class","me-1"],["addItemDropdownContent",""],[3,"content"],["addDropdown",""],["tuiButton","","appearance","flat","type","button","size","m"],i,[1,"animation-speed-2",3,"ngClass"],["categoriesOptions",""],["tuiIconButton","","size","m","appearance","outline","type","button"],["class","mt-3"],["tuiProgressBar","","max","100",3,"ngClass","size","value"],[1,"text-slate-400","my-3"],["cdkDropList","",1,"items-list",3,"ngClass","cdkDropListDisabled","cdkDropListDropped"],["class","my-2",3,"items","total"],n,s,[1,"me-1"],["role","menu"],["tuiOption","",3,"routerLink"],c,T,["tuiOption","",3,"click"],d,[3,"overlay","showLoader"],I,u,k,[1,"mt-3"],[1,"flex","items-center",3,"formGroup","ngSubmit"],["type","submit","tuiIconButton","","appearance","flat",1,"me-2",3,"showLoader"],["formControlName","query","tuiAutoFocus","",1,"grow",3,"tuiTextfieldSize"],U,["type","text","tuiTextfield","",3,"autocomplete"],["actions",""],["cdkDrag","",1,"mb-2"],[1,"flex","justify-between","items-center"],[3,"routerLink"],["style","max-width: 100px;","class","inline-block rounded me-2",3,"image",4,"ngIf"],["tuiLink","",1,"text-lg",3,"routerLink"],[4,"ngIf"],["class","tui-island__category"],["cdkDragHandle","","size","m","appearance","outline","type","button","tuiIconButton",""],["role","menu",4,"ngIf"],B,z,["type","button","tuiOption","",3,"routerLink"],["type","button","tuiOption","",3,"click"],H,X,F,[1,"inline-block","rounded","me-2",2,"max-width","100px",3,"image"],["class","tui-island__category",3,"ngClass",4,"ngIf"],[1,"tui-island__category",3,"ngClass"],["notVisiblePublic",""],[4,"ngIf","ngIfElse"],w,["notPublicMenu",""],V,J,["class","text-red-400 tui-island__category",4,"ngIf"],[1,"text-red-400","tui-island__category"],j,["notPublicCategory",""],Q,[1,"tui-island__category"],[1,"ms-1"],W,[1,"drag-shake"],["size","m",3,"showLoader"],[1,"text-center"],K,[1,"my-2",3,"items","total","paginationChange"]]},template:function(n,s){if(1&n&&(t.I0R(0,"div",0)(1,"div",1)(2,"h2",2),t.qCj("click",function(){return s.search()}),t.yuY(3,gt,2,0,"ng-container")(4,Ot,2,0),t.C$Y(),t.yuY(5,Tt,2,1,"span",3)(6,pt,9,5,"ng-template",null,4,t.gJz),t.I0R(8,"tui-hosted-dropdown",5,6)(10,"button",7)(11,"span",1)(12,"mat-icon"),t.OEk(13,"add"),t.C$Y(),t.I0R(14,"span"),t.aS0(15,8),t.C$Y(),t.I0R(16,"mat-icon",9),t.OEk(17,"expand_more"),t.C$Y()()()()(),t.yuY(18,It,20,3,"ng-template",null,10,t.gJz),t.I0R(20,"tui-hosted-dropdown",5)(21,"button",11)(22,"mat-icon"),t.OEk(23,"more_vert"),t.C$Y()()()(),t.yuY(24,Nt,9,4,"div",12),t.wR5(25,"progress",13)(26,"hr",14),t.I0R(27,"div",15),t.qCj("cdkDropListDropped",function(T){return s.drop(T)}),t.c53(28,zt,17,14,null,null,ut,!1,Ft,2,1),t.C$Y(),t.yuY(31,Vt,1,3,"tui-table-pagination",16)),2&n){const c=t.Gew(7),T=t.Gew(9),d=t.Gew(19);let I,u;t.yG2(3),t.C0Y(3,s.parentCategoryId?3:4),t.yG2(2),t.C0Y(5,null!=(I=s.data())&&null!=I.metadata&&I.metadata.total_count?5:-1),t.yG2(3),t.E7m("content",c),t.yG2(8),t.E7m("ngClass",t.S45(13,Jt,T.open)),t.yG2(4),t.E7m("content",d),t.yG2(4),t.C0Y(24,s.filtering()?24:-1),t.yG2(),t.E7m("ngClass",t.S45(15,jt,!s.loading()))("size","s")("value",void 0),t.yG2(2),t.E7m("ngClass",t.S45(17,Qt,s.reorderEnabled()))("cdkDropListDisabled",!s.reorderEnabled()),t.yG2(),t.oho(s.items()),t.yG2(3),t.C0Y(31,null!=(u=s.data())&&null!=u.metadata&&u.metadata.next_page||null!=(u=s.data())&&null!=u.metadata&&u.metadata.prev_page?31:-1)}},dependencies:[p.ER,g.w,g.C,Z.qL,E.GE,E.Qw,M.CI,M.Kw,y.k,y.C,q.t,_.ms,m.A$,m.yi,m.sP,D.u_,_t.y,st.S,O.sl,O.sz,O.ue,O.u,O.uW,O.Wo,h.CQ,h.Oo,h.cP,St.b,x.m6,x.gJ,l.aS,l.rD,C.Sk,C.Cb,D.QF,b.yy,b.Ws,A.Cm,A.w5,A.A3,S.WY,v.Gs,v.qA,$.a,$.i],styles:["[_nghost-%COMP%]   .items-list.allow-reorder.cdk-drop-list-dragging[_ngcontent-%COMP%]   tui-island[cdkDrag][_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}[_nghost-%COMP%]   .items-list.allow-reorder[_ngcontent-%COMP%]   .cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   .items-list.allow-reorder[_ngcontent-%COMP%]   .cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}[_nghost-%COMP%]   [cdkDragHandle][_ngcontent-%COMP%]{cursor:move}"]})}return e})()},5820:(L,N,o)=>{o.d(N,{Q:()=>E});var t=o(8400);class p extends t.w{constructor(_){super(_),this.public_visible=_.public_visible,this.public_from=_.public_from?new Date(_.public_from):void 0,this.public_to=_.public_to?new Date(_.public_to):void 0,this.private_visible=_.private_visible,this.daily_from=_.daily_from?new Date(_.daily_from):void 0,this.daily_to=_.daily_to?new Date(_.daily_to):void 0}}var g=o(2264);class E extends t.w{constructor(_){super(_),this.name=_.name,this.description=_.description,this.status=_.status,this.price=_.price,this.parent_id=_.parent_id,this.index=_.index,this.secret=_.secret,this.secret_desc=_.secret_desc,this.visibility_id=_.visibility_id,this.visibility=_.visibility?new p(_.visibility):void 0,this.parent=_.parent?new E(_.parent):void 0,this.children=_.children?_.children.map(m=>new E(m)):[],this.images=_.images?_.images.map(m=>new g.W(m)):[],this.translations=_.translations,this.stats=_.stats}}},1712:(L,N,o)=>{o.d(N,{S:()=>M});var t=o(6012),p=o(5820),g=o(4704),E=o(4496);let M=(()=>{class _ extends t.s{constructor(){super(p.Q,"admin/menu/categories")}addCategory(l,C,S={}){return this.post(`${l}/add_category/${C}`,S)}addDish(l,C){return this.post(`${l}/dishes/${C}`,{})}removeDish(l,C){return this.delete(`${l}/dishes/${C}`,{})}orderDishes(l,C){return this.patch(`${l}/order_dishes`,{field:C})}dashboardData(l){return this.get(`${l}/dashboard_data`)}updateVisibility(l,C){return this.patch(`${l}/visibility`,C).pipe((0,g.k)(S=>this.mapItem(S)))}copy(l,C){return this.post(`${l}/copy`,C).pipe((0,g.k)(S=>this.mapItem(S)))}move(l,C){return this.patch(`${l}/move/${C}`,{}).pipe((0,g.k)(S=>this.mapItem(S)))}static#t=this.\u0275fac=function(C){return new(C||_)};static#e=this.\u0275prov=E.wxM({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);