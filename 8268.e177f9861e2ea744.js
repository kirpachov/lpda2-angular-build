"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[8268],{3516:(N,O,o)=>{o.r(O),o.d(O,{LinkCategoryModule:()=>S});var e=o(1236),E=o(7552),t=o(4496),c=o(3480),g=o(1712),d=o(6504),l=o(3616),u=o(4704),m=o(4e3),f=o(8824),r=o(1128),M=o(8256),R=o(2368),A=o(8212),L=o(4436),I=o(1512),y=o(9088);function G(i,$){if(1&i&&(t.I0R(0,"p"),t.OEk(1," La categoria attuale \xe8 "),t.I0R(2,"b"),t.OEk(3),t.C$Y()()),2&i){const n=t.GaO(2);let s;t.yG2(3),t.cNF(null==(s=n.parent())?null:s.name)}}function a(i,$){if(1&i&&(t.I0R(0,"p"),t.aS0(1,10),t.C$Y(),t.yuY(2,G,4,1,"p"),t.I0R(3,"p"),t.aS0(4,11),t.C$Y()),2&i){const n=t.GaO();t.yG2(2),t.C0Y(2,n.parent()?2:-1)}}const v=i=>({except:i});function _(i,$){if(1&i){const n=t.KQA();t.I0R(0,"form",12),t.qCj("ngSubmit",function(){t.usT(n);const h=t.GaO();return t.CGJ(h.submit())}),t.I0R(1,"app-menu-category-select",13),t.SAx(2),t.aS0(3,14),t.k70(),t.C$Y(),t.I0R(4,"div",0)(5,"button",15),t.SAx(6),t.aS0(7,16),t.k70(),t.C$Y(),t.I0R(8,"button",17),t.qCj("click",function(){t.usT(n);const h=t.GaO();return t.CGJ(h.cancel())}),t.SAx(9),t.aS0(10,18),t.k70(),t.C$Y()()()}if(2&i){const n=t.GaO();t.E7m("formGroup",n.form),t.yG2(),t.E7m("filters",t.S45(3,v,n.parentId))("formControlName","category")}}let C=(()=>{class i{constructor(){this.service=(0,t.uUt)(g.S),this.destroy$=(0,t.uUt)(c.UF),this.route=(0,t.uUt)(e.gV),this.router=(0,t.uUt)(e.E5),this.notifications=(0,t.uUt)(r.E),this.loading=(0,t.OCB)(!1),this.parent=(0,t.OCB)(null),this.parentId=null,this.form=new d.WC({category:new d.Ku(null)})}ngOnInit(){this.route.parent?.parent?.params.pipe((0,l.a)(this.destroy$),(0,u.k)(n=>n.category_id),(0,m.a)()).subscribe({next:n=>{this.parentId=n,this.loadParent()}})}submit(){const n=this.parentId,s=this.form.value?.category?.id;n&&s?this.form.invalid||(this.loading.set(!0),this.service.addCategory(n,s).pipe((0,l.a)(this.destroy$),(0,f.U)(()=>this.loading.set(!1))).subscribe({next:()=>{this.navigateBack(),this.notifications.fireSnackBar("Categoria duplicata e associata.","Fatto",{duration:3e3})},error:h=>{this.notifications.error((0,M.mk)(h)||"Qualcosa \xE8 andato storto nell'associazione tra i record.")}})):console.error("something invalid.",{parentId:n,childId:s})}cancel(){confirm("Sei sicuro di voler annullare questa azione?")&&this.navigateBack()}navigateBack(){const n=this.route.snapshot.queryParams.afterUrl;n?this.router.navigateByUrl(n):this.router.navigate([".."],{relativeTo:this.route})}loadParent(){this.parent.set(null),this.parentId&&this.service.show(this.parentId).pipe((0,l.a)(this.destroy$)).subscribe({next:n=>{this.parent.set(n)},error:n=>{this.notifications.error((0,M.mk)(n)||"Qualcosa \xE8 andato storto nel caricamento della categoria padre.")}})}static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-link-category"]],standalone:!0,features:[t.M5G([c.UF]),t.UHJ],decls:15,vars:7,consts:()=>{let n,s,h,D,T,P,k;return n="Associa categoria esistente",s="La categoria selezionata verr\xE0 aggiunta alla categoria",h="La categoria che sceglierai verr\xE0 duplicata con tutti gli eventuali piatti e categorie che contiene. L'elemento appena creato verr\xE0 poi associato alla categoria attuale. ",D=" Ci\xF2 significa che le eventuali modifiche alla categoria appena creata non avranno effetto sulla categoria originale e viceversa. ",T="Categoria da associare",P="Conferma",k="Annulla",[[1,"flex","items-center"],[1,"me-2"],n,[3,"content"],[1,"mb-3"],[1,"me-2","text-slate-400"],s,["tuiLink","",3,"routerLink"],["helpMsg",""],[3,"formGroup"],h,D,[3,"formGroup","ngSubmit"],[1,"block","mb-3",3,"filters","formControlName"],T,["tuiButton","","type","submit","size","l","appearance","primary",1,"me-2"],P,["tuiButton","","type","button","size","l","appearance","outline",3,"click"],k]},template:function(s,h){if(1&s&&(t.I0R(0,"span",0)(1,"h1",1),t.SAx(2),t.aS0(3,2),t.k70(),t.C$Y(),t.wR5(4,"tui-tooltip",3),t.C$Y(),t.I0R(5,"div",4)(6,"span",5),t.SAx(7),t.aS0(8,6),t.k70(),t.C$Y(),t.I0R(9,"a",7),t.wVc(10,"urlTo"),t.OEk(11),t.C$Y()(),t.yuY(12,a,5,1,"ng-template",null,8,t.gJz)(14,_,11,5,"form",9)),2&s){const D=t.Gew(13);let T,P;t.yG2(4),t.E7m("content",D),t.yG2(5),t.E7m("routerLink",t.g7$(10,4,null==(T=h.parent())?null:T.id,"menuCategory.show")),t.yG2(2),t.cNF(null==(P=h.parent())?null:P.name),t.yG2(3),t.C0Y(14,h.parentId?14:-1)}},dependencies:[R.a,d.sl,d.sz,d.ue,d.u,d.uW,d.Wo,A.CI,A.Kw,L.a,L.i,I.w,I.C,e.ER,y.S]})}return i})(),S=(()=>{class i{static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275mod=t.a4G({type:i});static#o=this.\u0275inj=t.s3X({imports:[e.qQ.forChild([(0,E.VV)(C,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return i})()},9052:(N,O,o)=>{o.d(O,{y:()=>u});var e=o(4496),E=o(7760),t=o(6700),c=o(7368),g=o(2700),d=o(1368);function l(m,f){if(1&m&&(e.wR5(0,"img",1),e.wVc(1,"async")),2&m){const r=e.GaO();e.uQ9("max-w-[100%] h-auto min-h-[50px] md:min-h-[100px] ",r.imgClass,""),e._6D("src",e.kDX(1,5,r.imageSrc$),e.K6U),e.E7m("draggable",!1)}}let u=(()=>{class m{constructor(){this.noImage="/assets/img/no-image.jpg",this.imagesService=(0,e.uUt)(E.U),this.imgClass="block rounded",this.image$=new t.g(null),this.imageSrc$=this.image$.pipe((0,c.G)(r=>r instanceof Blob?(0,g.of)(URL.createObjectURL(r)):r&&r.id?this.imagesService.downloadUrl(r.id):(0,g.of)(this.noImage)))}set image(r){this.image$.next(r??null)}static#t=this.\u0275fac=function(M){return new(M||m)};static#e=this.\u0275cmp=e.In1({type:m,selectors:[["app-show-image"]],inputs:{imgClass:"imgClass",image:"image"},standalone:!0,features:[e.UHJ],decls:2,vars:3,consts:[[3,"draggable","class","src"],[3,"draggable","src"]],template:function(M,R){1&M&&(e.yuY(0,l,2,7,"img",0),e.wVc(1,"async")),2&M&&e.C0Y(0,e.kDX(1,1,R.imageSrc$)?0:-1)},dependencies:[d.a],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}"],changeDetection:0})}return m})()},2264:(N,O,o)=>{o.d(O,{W:()=>E});var e=o(8400);class E extends e.w{constructor(c){super(c),this.filename=c.filename,this.status=c.status,this.key=c.key,this.original_id=c.original_id,this.tag=c.tag,this.url=c.url}}},7760:(N,O,o)=>{o.d(O,{U:()=>c});var e=o(6012),E=o(2264),t=o(4496);let c=(()=>{class g extends e.s{constructor(){super(E.W,"images")}removeFromRecord(l,u){return this.patch(`${l}/remove_from_record`,{record_type:u.record_type,record_id:u.record_id})}updateRecord(l,u){return this.patch("record",{image_ids:u,record_type:l.record_type,record_id:l.record_id})}downloadUrl(l){return this.url(`${l}/download`)}static#t=this.\u0275fac=function(u){return new(u||g)};static#e=this.\u0275prov=t.wxM({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()},1512:(N,O,o)=>{o.d(O,{C:()=>y,w:()=>G});var e=o(4496),E=o(900),t=o(4392),c=o(4164),g=o(3480),d=o(4680),l=o(3972),u=o(5944),m=o(3412),f=o(4704),r=o(3656),M=o(1368);const R=["tuiLink",""];function A(a,v){if(1&a&&e.wR5(0,"tui-svg",3),2&a){const _=e.GaO();e.E7m("src",_.icon||"")}}function L(a,v){if(1&a&&e.wR5(0,"tui-svg",4),2&a){const _=e.GaO();e.E7m("src",_.icon||"")}}const I=["*"];let y=(()=>{class a{constructor(_,C,S){this.el=_,this.mode$=C,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,m.U)((0,E.Ax)(this.el.nativeElement,"focusin").pipe((0,f.k)(t.Ml)),(0,E.Ax)(this.el.nativeElement,"focusout").pipe((0,f.k)(t.so))),S.subscribe(i=>{this.focusVisible=i})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,c.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return a.\u0275fac=function(_){return new(_||a)(e.GI1(e.GMv),e.GI1(u.Yx),e.GI1(g.MF))},a.\u0275cmp=e.In1({type:a,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(_,C){1&_&&e.qCj("$.data-mode.attr",function(){return C.mode$}),2&_&&(e.e48("data-host-mode",C.mode),e.eAK("_pseudo",C.pseudo)("_icon-rotated",C.iconRotated)("_focus-visible",C.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[e.M5G([(0,d.NK)(a),g.MF,g.UF,l.Ir])],attrs:R,ngContentSelectors:I,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(_,C){1&_&&(e.kPM(),e.yuY(0,A,1,1,"tui-svg",0),e.I0R(1,"span",1),e._Xx(2),e.C$Y(),e.yuY(3,L,1,1,"tui-svg",2)),2&_&&(e.E7m("ngIf",C.iconAlignLeft),e.yG2(3),e.E7m("ngIf",C.iconAlignRight))},dependencies:[r.Wu,M.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),a})(),G=(()=>{class a{}return a.\u0275fac=function(_){return new(_||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({imports:[[M.MD,r.Yt]]}),a})()}}]);