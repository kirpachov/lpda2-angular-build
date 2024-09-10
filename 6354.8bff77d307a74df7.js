"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[6354],{6354:(G,I,o)=>{o.d(I,{M:()=>Dt});var t=o(4496),f=o(2992),g=o(1512),u=o(466),h=o(8212),s=o(5193),m=o(4336),r=o(8048),l=o(7692),E=o(5656),X=o(1560),L=o(6376),j=o(1104),A=o(3797),y=o(4856),v=o(1368),D=o(1712),Q=o(3480),x=o(5e3),T=o(3616),V=o(4e3),J=o(2300),W=o(9212),M=o(8824),K=o(4388),$=o(8256),Z=o(9052),q=o(9088),S=o(6504),P=o(5892),N=o(3400),tt=o(3724),et=o(6772),it=o(7048),b=o(3252),ot=o(9144);let st=(()=>{class i extends et.A{constructor(){super("admin/menu")}export(){return new b._(e=>{this.get("export",{responseType:"blob",observe:"response"}).pipe((0,ot.a)(n=>(console.error("ExportMenuService.export() error:",n),e.error(n),new b._))).subscribe(n=>{if(n instanceof it.WA&&n.body){const _=function nt(i){if(!i)return null;const a=i.match(/filename="(.+)"/);return a?a[1]:null}(n.headers?.get("Content-Disposition"))??"gigi-menu.xlsx",C=n.headers?.get("Content-Type")??"application/octet-stream",O=window.URL.createObjectURL(new Blob([n.body],{type:C})),p=document.createElement("a");p.href=O,p.download=_,p.click(),e.complete()}})})}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275prov=t.wxM({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var _t=o(7936);const at=(i,a)=>a.id;function rt(i,a){1&i&&(t.SAx(0),t.aS0(1,17),t.k70())}function lt(i,a){1&i&&(t.SAx(0),t.aS0(1,18),t.k70())}function ct(i,a){if(1&i&&(t.I0R(0,"span",19),t.OEk(1),t.C$Y()),2&i){const e=t.GaO();let n;t.yG2(),t.oRS("(",null==(n=e.data())||null==n.metadata?null:n.metadata.total_count,")")}}function Ct(i,a){if(1&i&&(t.I0R(0,"a",21),t.wVc(1,"urlTo"),t.I0R(2,"span",1)(3,"mat-icon",19),t.OEk(4,"share"),t.C$Y(),t.SAx(5),t.aS0(6,23),t.k70(),t.C$Y()()),2&i){const e=t.GaO(2);t.E7m("routerLink",t.g7$(1,1,e.parentCategoryId,"menuCategory.linkCategory"))}}function ut(i,a){if(1&i&&(t.I0R(0,"tui-data-list",20)(1,"a",21),t.wVc(2,"urlTo"),t.I0R(3,"span",1)(4,"mat-icon",19),t.OEk(5,"add_circle"),t.C$Y(),t.I0R(6,"span"),t.aS0(7,22),t.C$Y()()(),t.yuY(8,Ct,7,4,"a",21),t.C$Y()),2&i){const e=t.GaO();let n;t.yG2(),t.E7m("routerLink",t.g7$(2,2,null!==(n=e.parentCategoryId)&&void 0!==n?n:"","menuCategory.createChild")),t.yG2(7),t.C0Y(8,e.parentCategoryId?8:-1)}}function Et(i,a){1&i&&(t.SAx(0),t.aS0(1,28),t.k70())}function dt(i,a){1&i&&(t.SAx(0),t.aS0(1,29),t.k70())}function gt(i,a){if(1&i){const e=t.KQA();t.I0R(0,"tui-data-list",20)(1,"button",24),t.qCj("click",function(){t.usT(e);const _=t.GaO();return t.CGJ(_.triggerFiltering())}),t.I0R(2,"span",1)(3,"mat-icon",19),t.OEk(4,"search"),t.C$Y(),t.SAx(5),t.aS0(6,25),t.k70(),t.C$Y()(),t.I0R(7,"button",24),t.qCj("click",function(){t.usT(e);const _=t.GaO();return t.CGJ(_.exportAllMenu())}),t.I0R(8,"tui-loader",26)(9,"span",1)(10,"mat-icon",19),t.OEk(11,"download"),t.C$Y(),t.SAx(12),t.aS0(13,27),t.k70(),t.C$Y()()(),t.I0R(14,"button",24),t.qCj("click",function(){t.usT(e);const _=t.GaO();return t.CGJ(_.triggerOrdering())}),t.I0R(15,"span",1)(16,"mat-icon",19),t.OEk(17,"sort_by_alpha"),t.C$Y(),t.yuY(18,Et,2,0,"ng-container")(19,dt,2,0),t.C$Y()()()}if(2&i){const e=t.GaO();t.yG2(8),t.E7m("overlay",!0)("showLoader",e.exporting()),t.yG2(10),t.C0Y(18,e.ordering()?18:19)}}function St(i,a){if(1&i){const e=t.KQA();t.I0R(0,"div",30)(1,"form",31),t.qCj("ngSubmit",function(){t.usT(e);const _=t.GaO();return t.CGJ(_.submitFilters())}),t.I0R(2,"button",32)(3,"mat-icon"),t.OEk(4,"search"),t.C$Y()(),t.I0R(5,"tui-input",33),t.SAx(6),t.aS0(7,34),t.k70(),t.wR5(8,"input",35),t.C$Y()()()}if(2&i){const e=t.GaO();t.yG2(),t.E7m("formGroup",e.filters),t.yG2(),t.E7m("showLoader",e.searching()),t.yG2(3),t.E7m("tuiTextfieldSize","m"),t.yG2(3),t.E7m("autocomplete",!1)}}function Ot(i,a){if(1&i&&(t.I0R(0,"a",47),t.wVc(1,"urlTo"),t.I0R(2,"span",1)(3,"mat-icon",19),t.OEk(4,"link"),t.C$Y(),t.I0R(5,"span"),t.aS0(6,50),t.C$Y()()()),2&i){const e=t.GaO(3).$implicit;t.E7m("routerLink",t.g7$(1,1,e.id,"menuCategory.public"))}}function pt(i,a){if(1&i&&(t.I0R(0,"a",47),t.wVc(1,"urlTo"),t.I0R(2,"span",1)(3,"mat-icon",19),t.OEk(4,"share"),t.C$Y(),t.I0R(5,"span"),t.aS0(6,51),t.C$Y()()()),2&i){const e=t.GaO(3).$implicit;t.E7m("routerLink",t.g7$(1,1,e.secret,"menuCategory.private"))}}function mt(i,a){if(1&i){const e=t.KQA();t.I0R(0,"tui-data-list",20)(1,"a",21),t.wVc(2,"urlTo"),t.I0R(3,"span",1)(4,"mat-icon",19),t.OEk(5,"visibility"),t.C$Y(),t.I0R(6,"span"),t.aS0(7,45),t.C$Y()()(),t.I0R(8,"a",21),t.wVc(9,"urlTo"),t.I0R(10,"span",1)(11,"mat-icon",19),t.OEk(12,"content_copy"),t.C$Y(),t.I0R(13,"span"),t.aS0(14,46),t.C$Y()()(),t.yuY(15,Ot,7,4,"a",47)(16,pt,7,4,"a",47),t.I0R(17,"button",48),t.qCj("click",function(){t.usT(e);const _=t.GaO(2).$implicit,C=t.GaO();return t.CGJ(C.remove(_))}),t.I0R(18,"span",1)(19,"mat-icon",19),t.OEk(20,"delete"),t.C$Y(),t.I0R(21,"span"),t.aS0(22,49),t.C$Y()()()()}if(2&i){const e=t.GaO(2).$implicit;t.yG2(),t.E7m("routerLink",t.g7$(2,4,e.id,"menuCategory.show")),t.yG2(7),t.E7m("routerLink",t.g7$(9,7,e.id,"menuCategory.duplicate")),t.yG2(7),t.C0Y(15,!0===(null==e.visibility?null:e.visibility.public_visible)?15:-1),t.yG2(),t.C0Y(16,!0===(null==e.visibility?null:e.visibility.private_visible)?16:-1)}}function Tt(i,a){if(1&i&&t.yuY(0,mt,23,10,"tui-data-list",44),2&i){const e=t.GaO().$implicit;t.E7m("ngIf",e)}}function Rt(i,a){if(1&i&&t.wR5(0,"app-show-image",52),2&i){const e=t.GaO().$implicit;t.E7m("image",e.images[0])}}function It(i,a){1&i&&(t.I0R(0,"button",43)(1,"mat-icon",53),t.OEk(2,"drag_handle"),t.C$Y()())}function ft(i,a){if(1&i&&(t.I0R(0,"tui-hosted-dropdown",5)(1,"button",43)(2,"mat-icon"),t.OEk(3,"more_vert"),t.C$Y()()()),2&i){t.GaO();const e=t.Gew(1);t.E7m("content",e)}}function ht(i,a){if(1&i&&(t.yuY(0,Tt,1,1,"ng-template",null,36,t.gJz),t.I0R(2,"tui-island",37)(3,"div",38)(4,"span",1)(5,"a",39),t.wVc(6,"urlTo"),t.yuY(7,Rt,1,1,"app-show-image",40),t.C$Y(),t.I0R(8,"div")(9,"a",41),t.wVc(10,"urlTo"),t.OEk(11),t.C$Y(),t.I0R(12,"p",42),t.OEk(13),t.C$Y()()(),t.yuY(14,It,3,0,"button",43)(15,ft,4,1),t.C$Y()()),2&i){const e=a.$implicit,n=t.GaO();t.yG2(5),t.E7m("routerLink",t.g7$(6,6,e.id,"menuCategory.show")),t.yG2(2),t.E7m("ngIf",e&&e.images&&e.images.length>0),t.yG2(2),t.E7m("routerLink",t.g7$(10,9,e.id,"menuCategory.show")),t.yG2(2),t.cNF(e.name),t.yG2(2),t.cNF(e.status),t.yG2(),t.C0Y(14,n.ordering()?14:15)}}function Mt(i,a){1&i&&t.wR5(0,"tui-loader",54),2&i&&t.E7m("showLoader",!0)}function Nt(i,a){1&i&&(t.I0R(0,"p",55),t.SAx(1),t.aS0(2,56),t.k70(),t.C$Y())}function At(i,a){if(1&i&&t.yuY(0,Mt,1,1,"tui-loader",54)(1,Nt,3,0),2&i){const e=t.GaO();t.C0Y(0,e.searching()?0:1)}}const $t=()=>[10,20,50,100];function Gt(i,a){if(1&i){const e=t.KQA();t.I0R(0,"tui-table-pagination",57),t.qCj("paginationChange",function(_){t.usT(e);const C=t.GaO();return t.CGJ(C.paginationChange(_))}),t.C$Y()}if(2&i){const e=t.GaO();let n;t.E7m("items",t.q4q(2,$t))("total",null!==(n=null==(n=e.data())||null==n.metadata?null:n.metadata.total_count)&&void 0!==n?n:0)}}const Lt=i=>({rotate180:i}),yt=i=>({invisible:i}),vt=i=>({"allow-reorder":i});let Dt=(()=>{class i{constructor(){this.service=(0,t.uUt)(D.S),this.destroy$=(0,t.uUt)(Q.UF),this.notifications=(0,t.uUt)(K.E),this.exportService=(0,t.uUt)(st),this.data=(0,t.OCB)(null),this.items=(0,t.S6b)(()=>this.data()?.items??[]),this.filtering=(0,t.OCB)(!1),this.ordering=(0,t.OCB)(!1),this.exporting=(0,t.OCB)(!1),this.searching=(0,t.OCB)(!1),this.deleting=(0,t.OCB)(!1),this.moving=(0,t.OCB)(!1),this.loading=(0,t.S6b)(()=>this.searching()||this.deleting()||this.moving()||this.exporting()),this.reorderEnabled=(0,t.OCB)(!0),this.filters=new S.WC({query:new S.Ku(null)}),this.offset=0,this.per_page=10,this.parentCategoryId=null}ngOnInit(){this.search(),this.filters.valueChanges.pipe((0,T.a)(this.destroy$),(0,V.a)(),(0,J.o)(200),(0,W.y)(()=>this.offset=0)).subscribe({next:()=>this.search()})}ngOnChanges(e){e.parentCategoryId&&this.search()}triggerFiltering(){this.filtering.set(!this.filtering()),this.search()}submitFilters(){this.search()}paginationChange(e){this.per_page=e.size,this.offset=e.page,this.search()}search(e=this.parseFilters()){this.searchSub?.unsubscribe(),this.searching.set(!0),this.searchSub=this.service.search(e).pipe((0,T.a)(this.destroy$),(0,M.U)(()=>this.searching.set(!1))).subscribe({next:n=>this.data.set(n),error:n=>{this.data.set(null),this.notifications.error((0,$.mk)(n)||"Qualcosa \xE8 andato storto. Riprova pi\xF9 tardi.")}})}parseFilters(){const e=this.filters.value,n={per_page:this.per_page,offset:this.offset};return this.filtering()&&e.query&&(n.query=e.query),n.parent_id=this.parentCategoryId??"",n}remove(e){this.notifications.confirm("Sei sicuro di voler eliminare la categoria?",{yes:"S\xEC, elimina la categoria",no:"Annulla"}).pipe((0,T.a)(this.destroy$)).subscribe({next:n=>{this.deleteCategory(e)}})}deleteCategory(e){const n=e?.id;n&&(this.deleting.set(!0),this.service.destroy(n).pipe((0,T.a)(this.destroy$),(0,M.U)(()=>this.deleting.set(!1))).subscribe({next:()=>{this.notifications.fireSnackBar("Categoria eliminata."),this.search()},error:_=>{this.notifications.error((0,$.mk)(_)||"Qualcosa \xE8 andato storto.")}}))}drop(e){if(e.previousIndex===e.currentIndex)return;const n=this.items(),_=n[e.previousIndex]?.id;_&&((0,N.qv)(n,e.previousIndex,e.currentIndex),this.moving.set(!0),this.service.move(_,e.currentIndex).pipe((0,T.a)(this.destroy$),(0,M.U)(()=>this.moving.set(!1)),(0,M.U)(()=>this.search())).subscribe({error:C=>this.notifications.error((0,$.mk)(C)||"Qualcosa \xE8 andato storto.")}))}triggerOrdering(){this.ordering()||this.notifications.fireSnackBar("\n          Sposta le categorie trascinandole con il bottone sul lato destro di\n          ciascuna categoria.\n        ","Capito",{duration:5e3}),this.ordering.set(!this.ordering())}exportAllMenu(){this.exporting.set(!0),this.exportService.export().pipe((0,T.a)(this.destroy$),(0,M.U)(()=>this.exporting.set(!1))).subscribe((0,tt.I)())}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-list-categories"]],inputs:{parentCategoryId:"parentCategoryId"},standalone:!0,features:[t.M5G([D.S]),t.SYr,t.UHJ],decls:32,vars:19,consts:()=>{let e,n,_,C,O,p,R,d,k,Y,B,U,z,w,F,H;return e="Aggiungi",n="Categorie",_="Men\xF9",C="Crea nuovo",O="Associa esistente",p="Filtra elementi",R="Esporta tutto",d="Fatto.",k="Riordina",Y="Filtra per nome o descrizione",B="Visualizza",U="Duplica",z="Rimuovi",w="Anteprima link pubblico",F="Anteprima link privato",H="Non ci sono categorie",[[1,"flex","items-center","justify-between"],[1,"flex","items-center"],[1,"me-1",3,"click"],["class","me-1"],["addItemDropdownContent",""],[3,"content"],["addDropdown",""],["tuiButton","","appearance","flat","type","button","size","m"],e,[1,"animation-speed-2",3,"ngClass"],["categoriesOptions",""],["tuiIconButton","","size","m","appearance","outline","type","button"],["class","mt-3"],["tuiProgressBar","","max","100",3,"ngClass","size","value"],[1,"text-slate-400","my-3"],["cdkDropList","",1,"items-list",3,"ngClass","cdkDropListDisabled","cdkDropListDropped"],["class","my-2",3,"items","total"],n,_,[1,"me-1"],["role","menu"],["tuiOption","",3,"routerLink"],C,O,["tuiOption","",3,"click"],p,[3,"overlay","showLoader"],R,d,k,[1,"mt-3"],[1,"flex","items-center",3,"formGroup","ngSubmit"],["type","submit","tuiIconButton","","appearance","flat",1,"me-2",3,"showLoader"],["formControlName","query","tuiAutoFocus","",1,"grow",3,"tuiTextfieldSize"],Y,["type","text","tuiTextfield","",3,"autocomplete"],["actions",""],["cdkDrag","",1,"mb-2"],[1,"flex","justify-between","items-center"],[3,"routerLink"],["style","max-width: 100px;","class","inline-block rounded me-2",3,"image",4,"ngIf"],["tuiLink","",1,"text-lg",3,"routerLink"],[1,"tui-island__category"],["cdkDragHandle","","size","m","appearance","outline","type","button","tuiIconButton",""],["role","menu",4,"ngIf"],B,U,["type","button","tuiOption","",3,"routerLink"],["type","button","tuiOption","",3,"click"],z,w,F,[1,"inline-block","rounded","me-2",2,"max-width","100px",3,"image"],[1,"drag-shake"],["size","m",3,"showLoader"],[1,"text-center"],H,[1,"my-2",3,"items","total","paginationChange"]]},template:function(n,_){if(1&n&&(t.I0R(0,"div",0)(1,"div",1)(2,"h2",2),t.qCj("click",function(){return _.search()}),t.yuY(3,rt,2,0,"ng-container")(4,lt,2,0),t.C$Y(),t.yuY(5,ct,2,1,"span",3)(6,ut,9,5,"ng-template",null,4,t.gJz),t.I0R(8,"tui-hosted-dropdown",5,6)(10,"button",7)(11,"span",1)(12,"mat-icon"),t.OEk(13,"add"),t.C$Y(),t.I0R(14,"span"),t.aS0(15,8),t.C$Y(),t.I0R(16,"mat-icon",9),t.OEk(17,"expand_more"),t.C$Y()()()()(),t.yuY(18,gt,20,3,"ng-template",null,10,t.gJz),t.I0R(20,"tui-hosted-dropdown",5)(21,"button",11)(22,"mat-icon"),t.OEk(23,"more_vert"),t.C$Y()()()(),t.yuY(24,St,9,4,"div",12),t.wR5(25,"progress",13)(26,"hr",14),t.I0R(27,"div",15),t.qCj("cdkDropListDropped",function(O){return _.drop(O)}),t.c53(28,ht,16,12,null,null,at,!1,At,2,1),t.C$Y(),t.yuY(31,Gt,1,3,"tui-table-pagination",16)),2&n){const C=t.Gew(7),O=t.Gew(9),p=t.Gew(19);let R,d;t.yG2(3),t.C0Y(3,_.parentCategoryId?3:4),t.yG2(2),t.C0Y(5,null!=(R=_.data())&&null!=R.metadata&&R.metadata.total_count?5:-1),t.yG2(3),t.E7m("content",C),t.yG2(8),t.E7m("ngClass",t.S45(13,Lt,O.open)),t.yG2(4),t.E7m("content",p),t.yG2(4),t.C0Y(24,_.filtering()?24:-1),t.yG2(),t.E7m("ngClass",t.S45(15,yt,!_.loading()))("size","s")("value",void 0),t.yG2(2),t.E7m("ngClass",t.S45(17,vt,_.reorderEnabled()))("cdkDropListDisabled",!_.reorderEnabled()),t.yG2(),t.oho(_.items()),t.yG2(3),t.C0Y(31,null!=(d=_.data())&&null!=d.metadata&&d.metadata.next_page||null!=(d=_.data())&&null!=d.metadata&&d.metadata.prev_page?31:-1)}},dependencies:[f.ER,g.w,g.C,X.qL,u.GE,u.Qw,h.CI,h.Kw,L.k,L.C,j.t,s.ms,m.A$,m.yi,m.sP,v.u_,Z.y,q.S,S.sl,S.sz,S.ue,S.u,S.uW,S.Wo,A.CQ,A.Oo,A.cP,_t.b,x.m6,x.gJ,r.aS,r.rD,l.Sk,l.Cb,v.QF,P.yy,P.Ws,N.Cm,N.w5,N.A3,E.WY,y.Gs,y.qA],styles:["[_nghost-%COMP%]   .items-list.allow-reorder.cdk-drop-list-dragging[_ngcontent-%COMP%]   tui-island[cdkDrag][_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}[_nghost-%COMP%]   .items-list.allow-reorder[_ngcontent-%COMP%]   .cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   .items-list.allow-reorder[_ngcontent-%COMP%]   .cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}[_nghost-%COMP%]   [cdkDragHandle][_ngcontent-%COMP%]{cursor:move}"]})}return i})()},5820:(G,I,o)=>{o.d(I,{Q:()=>u});var t=o(8400);class f extends t.w{constructor(s){super(s),this.public_visible=s.public_visible,this.public_from=s.public_from?new Date(s.public_from):void 0,this.public_to=s.public_to?new Date(s.public_to):void 0,this.private_visible=s.private_visible,this.daily_from=s.daily_from?new Date(s.daily_from):void 0,this.daily_to=s.daily_to?new Date(s.daily_to):void 0}}var g=o(2264);class u extends t.w{constructor(s){super(s),this.name=s.name,this.description=s.description,this.status=s.status,this.price=s.price,this.parent_id=s.parent_id,this.index=s.index,this.secret=s.secret,this.secret_desc=s.secret_desc,this.visibility_id=s.visibility_id,this.visibility=s.visibility?new f(s.visibility):void 0,this.parent=s.parent?new u(s.parent):void 0,this.children=s.children?s.children.map(m=>new u(m)):[],this.images=s.images?s.images.map(m=>new g.W(m)):[],this.translations=s.translations}}},1712:(G,I,o)=>{o.d(I,{S:()=>h});var t=o(6012),f=o(5820),g=o(4704),u=o(4496);let h=(()=>{class s extends t.s{constructor(){super(f.Q,"admin/menu/categories")}addCategory(r,l,E={}){return this.post(`${r}/add_category/${l}`,E)}addDish(r,l){return this.post(`${r}/dishes/${l}`,{})}removeDish(r,l){return this.delete(`${r}/dishes/${l}`,{})}orderDishes(r,l){return this.patch(`${r}/order_dishes`,{field:l})}dashboardData(r){return this.get(`${r}/dashboard_data`)}updateVisibility(r,l){return this.patch(`${r}/visibility`,l).pipe((0,g.k)(E=>this.mapItem(E)))}copy(r,l){return this.post(`${r}/copy`,l).pipe((0,g.k)(E=>this.mapItem(E)))}move(r,l){return this.patch(`${r}/move/${l}`,{}).pipe((0,g.k)(E=>this.mapItem(E)))}static#t=this.\u0275fac=function(l){return new(l||s)};static#e=this.\u0275prov=u.wxM({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()}}]);