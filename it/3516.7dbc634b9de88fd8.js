"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[3516],{3516:(T,h,o)=>{o.r(h),o.d(h,{LinkCategoryModule:()=>I});var n=o(1236),C=o(7552),t=o(4496),s=o(3480),v=o(1712),e=o(6504),d=o(3616),a=o(4704),r=o(4e3),l=o(8824),E=o(1128),M=o(8256),D=o(6524),N=o(8212),A=o(4436),L=o(1512),S=o(9088);function $(c,k){if(1&c&&(t.I0R(0,"p"),t.OEk(1," La categoria attuale \xe8 "),t.I0R(2,"b"),t.OEk(3),t.C$Y()()),2&c){const i=t.GaO(2);let u;t.yG2(3),t.cNF(null==(u=i.parent())?null:u.name)}}function _(c,k){if(1&c&&(t.I0R(0,"p"),t.aS0(1,10),t.C$Y(),t.yuY(2,$,4,1,"p"),t.I0R(3,"p"),t.aS0(4,11),t.C$Y()),2&c){const i=t.GaO();t.yG2(2),t.C0Y(2,i.parent()?2:-1)}}const O=c=>({except:c});function g(c,k){if(1&c){const i=t.KQA();t.I0R(0,"form",12),t.qCj("ngSubmit",function(){t.usT(i);const p=t.GaO();return t.CGJ(p.submit())}),t.I0R(1,"app-menu-category-select",13),t.SAx(2),t.aS0(3,14),t.k70(),t.C$Y(),t.I0R(4,"div",0)(5,"button",15),t.SAx(6),t.aS0(7,16),t.k70(),t.C$Y(),t.I0R(8,"button",17),t.qCj("click",function(){t.usT(i);const p=t.GaO();return t.CGJ(p.cancel())}),t.SAx(9),t.aS0(10,18),t.k70(),t.C$Y()()()}if(2&c){const i=t.GaO();t.E7m("formGroup",i.form),t.yG2(),t.E7m("filters",t.S45(3,O,i.parentId))("formControlName","category")}}let m=(()=>{class c{constructor(){this.service=(0,t.uUt)(v.S),this.destroy$=(0,t.uUt)(s.UF),this.route=(0,t.uUt)(n.gV),this.router=(0,t.uUt)(n.E5),this.notifications=(0,t.uUt)(E.E),this.loading=(0,t.OCB)(!1),this.parent=(0,t.OCB)(null),this.parentId=null,this.form=new e.WC({category:new e.Ku(null)})}ngOnInit(){this.route.parent?.parent?.params.pipe((0,d.a)(this.destroy$),(0,a.k)(i=>i.category_id),(0,r.a)()).subscribe({next:i=>{this.parentId=i,this.loadParent()}})}submit(){const i=this.parentId,u=this.form.value?.category?.id;i&&u?this.form.invalid||(this.loading.set(!0),this.service.addCategory(i,u).pipe((0,d.a)(this.destroy$),(0,l.U)(()=>this.loading.set(!1))).subscribe({next:()=>{this.navigateBack(),this.notifications.fireSnackBar("Categoria duplicata e associata.","Fatto",{duration:3e3})},error:p=>{this.notifications.error((0,M.mk)(p)||"Qualcosa \xE8 andato storto nell'associazione tra i record.")}})):console.error("something invalid.",{parentId:i,childId:u})}cancel(){confirm("Sei sicuro di voler annullare questa azione?")&&this.navigateBack()}navigateBack(){const i=this.route.snapshot.queryParams.afterUrl;i?this.router.navigateByUrl(i):this.router.navigate([".."],{relativeTo:this.route})}loadParent(){this.parent.set(null),this.parentId&&this.service.show(this.parentId).pipe((0,d.a)(this.destroy$)).subscribe({next:i=>{this.parent.set(i)},error:i=>{this.notifications.error((0,M.mk)(i)||"Qualcosa \xE8 andato storto nel caricamento della categoria padre.")}})}static#t=this.\u0275fac=function(u){return new(u||c)};static#e=this.\u0275cmp=t.In1({type:c,selectors:[["app-link-category"]],standalone:!0,features:[t.M5G([s.UF]),t.UHJ],decls:15,vars:7,consts:()=>{let i,u,p,y,R,P,G;return i="Associa categoria esistente",u="La categoria selezionata verr\xE0 aggiunta alla categoria",p="La categoria che sceglierai verr\xE0 duplicata con tutti gli eventuali piatti e categorie che contiene. L'elemento appena creato verr\xE0 poi associato alla categoria attuale. ",y=" Ci\xF2 significa che le eventuali modifiche alla categoria appena creata non avranno effetto sulla categoria originale e viceversa. ",R="Categoria da associare",P="Conferma",G="Annulla",[[1,"flex","items-center"],[1,"me-2"],i,[3,"content"],[1,"mb-3"],[1,"me-2","text-slate-400"],u,["tuiLink","",3,"routerLink"],["helpMsg",""],[3,"formGroup"],p,y,[3,"formGroup","ngSubmit"],[1,"block","mb-3",3,"filters","formControlName"],R,["tuiButton","","type","submit","size","l","appearance","primary",1,"me-2"],P,["tuiButton","","type","button","size","l","appearance","outline",3,"click"],G]},template:function(u,p){if(1&u&&(t.I0R(0,"span",0)(1,"h1",1),t.SAx(2),t.aS0(3,2),t.k70(),t.C$Y(),t.wR5(4,"tui-tooltip",3),t.C$Y(),t.I0R(5,"div",4)(6,"span",5),t.SAx(7),t.aS0(8,6),t.k70(),t.C$Y(),t.I0R(9,"a",7),t.wVc(10,"urlTo"),t.OEk(11),t.C$Y()(),t.yuY(12,_,5,1,"ng-template",null,8,t.gJz)(14,g,11,5,"form",9)),2&u){const y=t.Gew(13);let R,P;t.yG2(4),t.E7m("content",y),t.yG2(5),t.E7m("routerLink",t.g7$(10,4,null==(R=p.parent())?null:R.id,"menuCategory.show")),t.yG2(2),t.cNF(null==(P=p.parent())?null:P.name),t.yG2(3),t.C0Y(14,p.parentId?14:-1)}},dependencies:[D.a,e.sl,e.sz,e.ue,e.u,e.uW,e.Wo,N.CI,N.Kw,A.a,A.i,L.w,L.C,n.ER,S.S]})}return c})(),I=(()=>{class c{static#t=this.\u0275fac=function(u){return new(u||c)};static#e=this.\u0275mod=t.a4G({type:c});static#o=this.\u0275inj=t.s3X({imports:[n.qQ.forChild([(0,C.VV)(m,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return c})()},2264:(T,h,o)=>{o.d(h,{W:()=>C});var n=o(8400);class C extends n.w{constructor(s){super(s),this.filename=s.filename,this.status=s.status,this.key=s.key,this.original_id=s.original_id,this.tag=s.tag,this.url=s.url}}},5820:(T,h,o)=>{o.d(h,{Q:()=>s});var n=o(8400);class C extends n.w{constructor(e){super(e),this.public_visible=e.public_visible,this.public_from=e.public_from?new Date(e.public_from):void 0,this.public_to=e.public_to?new Date(e.public_to):void 0,this.private_visible=e.private_visible,this.daily_from=e.daily_from?new Date(e.daily_from):void 0,this.daily_to=e.daily_to?new Date(e.daily_to):void 0}}var t=o(2264);class s extends n.w{constructor(e){super(e),this.name=e.name,this.description=e.description,this.status=e.status,this.price=e.price,this.parent_id=e.parent_id,this.index=e.index,this.secret=e.secret,this.secret_desc=e.secret_desc,this.visibility_id=e.visibility_id,this.visibility=e.visibility?new C(e.visibility):void 0,this.parent=e.parent?new s(e.parent):void 0,this.children=e.children?e.children.map(d=>new s(d)):[],this.images=e.images?e.images.map(d=>new t.W(d)):[],this.translations=e.translations}}},9088:(T,h,o)=>{o.d(h,{S:()=>t});var n=o(4496);const C={menuCategory:{show:"/admin/menu/{itemId}",duplicate:"/admin/menu/{itemId}/duplicate",export:"/admin/menu/{itemId}/export",createChild:"/admin/menu/{itemId}/create-category",linkCategory:"/admin/menu/{itemId}/link-category",createDish:"/admin/menu/{itemId}/create-dish",linkDish:"/admin/menu/{itemId}/link-dish",private:"/menu/{itemId}",public:"/menu/{itemId}"},dish:{show:"/admin/menu/{categoryId}/dish/{itemId}"}};let t=(()=>{class s{transform(e,d){const a=C[d.split(".")[0]];if(!a)throw new Error(`Resource not found: ${d} (resouce: ${d.split(".")[0]})`);const r=d.split(".")[1];if(!a[r])throw new Error(`Action not found: ${d} (action: ${r})`);if(typeof e>"u"||null===e)return null;if("number"==typeof e&&(e=e.toString()),"object"==typeof e&&null!==e&&!Array.isArray(e)){let l=a[r];if(Object.keys(e).forEach(E=>{const M=e[E];void 0!==M&&l.includes(`{${E}}`)&&(l=l.replace(`{${E}}`,M??""))}),l.includes("{{"))throw new Error(`Unresolved interpolation: ${l}`);return l}if("string"!=typeof e)throw new Error(`Invalid itemId: ${e} (type: ${typeof e})`);return a[r].replace("{itemId}",e)}static#t=this.\u0275fac=function(d){return new(d||s)};static#e=this.\u0275pipe=n.UTH({name:"urlTo",type:s,pure:!0,standalone:!0})}return s})()},1712:(T,h,o)=>{o.d(h,{S:()=>v});var n=o(6012),C=o(5820),t=o(4704),s=o(4496);let v=(()=>{class e extends n.s{constructor(){super(C.Q,"admin/menu/categories")}addCategory(a,r,l={}){return this.post(`${a}/add_category/${r}`,l)}addDish(a,r){return this.post(`${a}/dishes/${r}`,{})}removeDish(a,r){return this.delete(`${a}/dishes/${r}`,{})}orderDishes(a,r){return this.patch(`${a}/order_dishes`,{field:r})}dashboardData(a){return this.get(`${a}/dashboard_data`)}updateVisibility(a,r){return this.patch(`${a}/visibility`,r).pipe((0,t.k)(l=>this.mapItem(l)))}copy(a,r){return this.post(`${a}/copy`,r).pipe((0,t.k)(l=>this.mapItem(l)))}move(a,r){return this.patch(`${a}/move/${r}`,{}).pipe((0,t.k)(l=>this.mapItem(l)))}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275prov=s.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},1512:(T,h,o)=>{o.d(h,{C:()=>S,w:()=>$});var n=o(4496),C=o(900),t=o(4392),s=o(4164),v=o(3480),e=o(4680),d=o(3972),a=o(5944),r=o(3412),l=o(4704),E=o(3656),M=o(1368);const D=["tuiLink",""];function N(_,O){if(1&_&&n.wR5(0,"tui-svg",3),2&_){const g=n.GaO();n.E7m("src",g.icon||"")}}function A(_,O){if(1&_&&n.wR5(0,"tui-svg",4),2&_){const g=n.GaO();n.E7m("src",g.icon||"")}}const L=["*"];let S=(()=>{class _{constructor(g,m,I){this.el=g,this.mode$=m,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,r.U)((0,C.Ax)(this.el.nativeElement,"focusin").pipe((0,l.k)(t.Ml)),(0,C.Ax)(this.el.nativeElement,"focusout").pipe((0,l.k)(t.so))),I.subscribe(c=>{this.focusVisible=c})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,s.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return _.\u0275fac=function(g){return new(g||_)(n.GI1(n.GMv),n.GI1(a.Yx),n.GI1(v.MF))},_.\u0275cmp=n.In1({type:_,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(g,m){1&g&&n.qCj("$.data-mode.attr",function(){return m.mode$}),2&g&&(n.e48("data-host-mode",m.mode),n.eAK("_pseudo",m.pseudo)("_icon-rotated",m.iconRotated)("_focus-visible",m.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[n.M5G([(0,e.NK)(_),v.MF,v.UF,d.Ir])],attrs:D,ngContentSelectors:L,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(g,m){1&g&&(n.kPM(),n.yuY(0,N,1,1,"tui-svg",0),n.I0R(1,"span",1),n._Xx(2),n.C$Y(),n.yuY(3,A,1,1,"tui-svg",2)),2&g&&(n.E7m("ngIf",m.iconAlignLeft),n.yG2(3),n.E7m("ngIf",m.iconAlignRight))},dependencies:[E.Wu,M.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),_})(),$=(()=>{class _{}return _.\u0275fac=function(g){return new(g||_)},_.\u0275mod=n.a4G({type:_}),_.\u0275inj=n.s3X({imports:[[M.MD,E.Yt]]}),_})()}}]);