"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[3516],{3516:($,M,o)=>{o.r(M),o.d(M,{LinkCategoryModule:()=>P});var e=o(2992),E=o(7552),t=o(4496),v=o(3480),u=o(1712),l=o(6504),C=o(3616),L=o(4704),S=o(4e3),p=o(8824),f=o(4388),O=o(8256),I=o(6524),T=o(8212),R=o(4436),N=o(1512),D=o(9088);function G(i,k){if(1&i&&(t.I0R(0,"p"),t.OEk(1," La categoria attuale \xe8 "),t.I0R(2,"b"),t.OEk(3),t.C$Y()()),2&i){const n=t.GaO(2);let s;t.yG2(3),t.cNF(null==(s=n.parent())?null:s.name)}}function a(i,k){if(1&i&&(t.I0R(0,"p"),t.aS0(1,10),t.C$Y(),t.yuY(2,G,4,1,"p"),t.I0R(3,"p"),t.aS0(4,11),t.C$Y()),2&i){const n=t.GaO();t.yG2(2),t.C0Y(2,n.parent()?2:-1)}}const g=i=>({except:i});function r(i,k){if(1&i){const n=t.KQA();t.I0R(0,"form",12),t.qCj("ngSubmit",function(){t.usT(n);const c=t.GaO();return t.CGJ(c.submit())}),t.I0R(1,"app-menu-category-select",13),t.SAx(2),t.aS0(3,14),t.k70(),t.C$Y(),t.I0R(4,"div",0)(5,"button",15),t.SAx(6),t.aS0(7,16),t.k70(),t.C$Y(),t.I0R(8,"button",17),t.qCj("click",function(){t.usT(n);const c=t.GaO();return t.CGJ(c.cancel())}),t.SAx(9),t.aS0(10,18),t.k70(),t.C$Y()()()}if(2&i){const n=t.GaO();t.E7m("formGroup",n.form),t.yG2(),t.E7m("filters",t.S45(3,g,n.parentId))("formControlName","category")}}let _=(()=>{class i{constructor(){this.service=(0,t.uUt)(u.S),this.destroy$=(0,t.uUt)(v.UF),this.route=(0,t.uUt)(e.gV),this.router=(0,t.uUt)(e.E5),this.notifications=(0,t.uUt)(f.E),this.loading=(0,t.OCB)(!1),this.parent=(0,t.OCB)(null),this.parentId=null,this.form=new l.WC({category:new l.Ku(null)})}ngOnInit(){this.route.parent?.parent?.params.pipe((0,C.a)(this.destroy$),(0,L.k)(n=>n.category_id),(0,S.a)()).subscribe({next:n=>{this.parentId=n,this.loadParent()}})}submit(){const n=this.parentId,s=this.form.value?.category?.id;n&&s?this.form.invalid||(this.loading.set(!0),this.service.addCategory(n,s).pipe((0,C.a)(this.destroy$),(0,p.U)(()=>this.loading.set(!1))).subscribe({next:()=>{this.navigateBack(),this.notifications.fireSnackBar("Categoria duplicata e associata.","Fatto",{duration:3e3})},error:c=>{this.notifications.error((0,O.mk)(c)||"Qualcosa \xE8 andato storto nell'associazione tra i record.")}})):console.error("something invalid.",{parentId:n,childId:s})}cancel(){confirm("Sei sicuro di voler annullare questa azione?")&&this.navigateBack()}navigateBack(){const n=this.route.snapshot.queryParams.afterUrl;n?this.router.navigateByUrl(n):this.router.navigate([".."],{relativeTo:this.route})}loadParent(){this.parent.set(null),this.parentId&&this.service.show(this.parentId).pipe((0,C.a)(this.destroy$)).subscribe({next:n=>{this.parent.set(n)},error:n=>{this.notifications.error((0,O.mk)(n)||"Qualcosa \xE8 andato storto nel caricamento della categoria padre.")}})}static#t=this.\u0275fac=function(s){return new(s||i)};static#o=this.\u0275cmp=t.In1({type:i,selectors:[["app-link-category"]],standalone:!0,features:[t.M5G([v.UF]),t.UHJ],decls:15,vars:7,consts:()=>{let n,s,c,A,h,m,y;return n="Associa categoria esistente",s="La categoria selezionata verr\xE0 aggiunta alla categoria",c="La categoria che sceglierai verr\xE0 duplicata con tutti gli eventuali piatti e categorie che contiene. L'elemento appena creato verr\xE0 poi associato alla categoria attuale. ",A=" Ci\xF2 significa che le eventuali modifiche alla categoria appena creata non avranno effetto sulla categoria originale e viceversa. ",h="Categoria da associare",m="Conferma",y="Annulla",[[1,"flex","items-center"],[1,"me-2"],n,[3,"content"],[1,"mb-3"],[1,"me-2","text-slate-400"],s,["tuiLink","",3,"routerLink"],["helpMsg",""],[3,"formGroup"],c,A,[3,"formGroup","ngSubmit"],[1,"block","mb-3",3,"filters","formControlName"],h,["tuiButton","","type","submit","size","l","appearance","primary",1,"me-2"],m,["tuiButton","","type","button","size","l","appearance","outline",3,"click"],y]},template:function(s,c){if(1&s&&(t.I0R(0,"span",0)(1,"h1",1),t.SAx(2),t.aS0(3,2),t.k70(),t.C$Y(),t.wR5(4,"tui-tooltip",3),t.C$Y(),t.I0R(5,"div",4)(6,"span",5),t.SAx(7),t.aS0(8,6),t.k70(),t.C$Y(),t.I0R(9,"a",7),t.wVc(10,"urlTo"),t.OEk(11),t.C$Y()(),t.yuY(12,a,5,1,"ng-template",null,8,t.gJz)(14,r,11,5,"form",9)),2&s){const A=t.Gew(13);let h,m;t.yG2(4),t.E7m("content",A),t.yG2(5),t.E7m("routerLink",t.g7$(10,4,null==(h=c.parent())?null:h.id,"menuCategory.show")),t.yG2(2),t.cNF(null==(m=c.parent())?null:m.name),t.yG2(3),t.C0Y(14,c.parentId?14:-1)}},dependencies:[I.a,l.sl,l.sz,l.ue,l.u,l.uW,l.Wo,T.CI,T.Kw,R.a,R.i,N.w,N.C,e.ER,D.S]})}return i})(),P=(()=>{class i{static#t=this.\u0275fac=function(s){return new(s||i)};static#o=this.\u0275mod=t.a4G({type:i});static#e=this.\u0275inj=t.s3X({imports:[e.qQ.forChild([(0,E.VV)(_,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return i})()},1512:($,M,o)=>{o.d(M,{C:()=>D,w:()=>G});var e=o(4496),E=o(900),t=o(4392),v=o(4164),u=o(3480),l=o(4680),C=o(3972),L=o(5944),S=o(3412),p=o(4704),f=o(3656),O=o(1368);const I=["tuiLink",""];function T(a,g){if(1&a&&e.wR5(0,"tui-svg",3),2&a){const r=e.GaO();e.E7m("src",r.icon||"")}}function R(a,g){if(1&a&&e.wR5(0,"tui-svg",4),2&a){const r=e.GaO();e.E7m("src",r.icon||"")}}const N=["*"];let D=(()=>{class a{constructor(r,_,P){this.el=r,this.mode$=_,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,S.U)((0,E.Ax)(this.el.nativeElement,"focusin").pipe((0,p.k)(t.Ml)),(0,E.Ax)(this.el.nativeElement,"focusout").pipe((0,p.k)(t.so))),P.subscribe(i=>{this.focusVisible=i})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,v.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return a.\u0275fac=function(r){return new(r||a)(e.GI1(e.GMv),e.GI1(L.Yx),e.GI1(u.MF))},a.\u0275cmp=e.In1({type:a,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(r,_){1&r&&e.qCj("$.data-mode.attr",function(){return _.mode$}),2&r&&(e.e48("data-host-mode",_.mode),e.eAK("_pseudo",_.pseudo)("_icon-rotated",_.iconRotated)("_focus-visible",_.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[e.M5G([(0,l.NK)(a),u.MF,u.UF,C.Ir])],attrs:I,ngContentSelectors:N,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(r,_){1&r&&(e.kPM(),e.yuY(0,T,1,1,"tui-svg",0),e.I0R(1,"span",1),e._Xx(2),e.C$Y(),e.yuY(3,R,1,1,"tui-svg",2)),2&r&&(e.E7m("ngIf",_.iconAlignLeft),e.yG2(3),e.E7m("ngIf",_.iconAlignRight))},dependencies:[f.Wu,O.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),a})(),G=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[[O.MD,f.Yt]]}),a})()}}]);