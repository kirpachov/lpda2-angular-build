"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[1248],{9064:(f,d,n)=>{n.d(d,{w:()=>I});var e=n(4496),h=n(6504),t=n(3480),_=n(6700),l=n(3616),i=n(6684),E=n(3797),o=n(8588),s=n(1368),r=n(9956),C=n(1292);function P(p,g){if(1&p&&(e.I0R(0,"tui-textarea",2),e.OEk(1),e.C$Y()),2&p){const c=e.GaO().$implicit,a=e.GaO();e.E7m("formControl",c.control),e.yG2(),e.oRS(" ",a.getFullLang(c.lang)," ")}}function T(p,g){if(1&p&&(e.I0R(0,"tui-input",2),e.OEk(1),e.C$Y()),2&p){const c=e.GaO().$implicit,a=e.GaO();e.E7m("formControl",c.control),e.yG2(),e.oRS(" ",a.getFullLang(c.lang)," ")}}const R=p=>({"mb-3":p});function A(p,g){if(1&p&&(e.SAx(0),e.I0R(1,"div",1),e.yuY(2,P,2,2,"tui-textarea",2)(3,T,2,2),e.wR5(4,"app-errors",3),e.C$Y(),e.k70()),2&p){const c=g.$implicit,a=g.last,v=e.GaO();e.yG2(),e.E7m("ngClass",e.S45(3,R,!a)),e.yG2(),e.C0Y(2,v.long?2:3),e.yG2(2),e.E7m("errors",c.control.errors)}}const D=["*"];let I=(()=>{class p{constructor(){this.destroy$=new t.UF,this.long=!1,this.controls=(0,e.OCB)({}),this.controlsArr=(0,e.S6b)(()=>{const c=this.controls();return Object.keys(c).map(a=>({lang:a,control:c[a]}))}),this.touched$=new _.g(!1),this.value$=new _.g({})}ngAfterViewInit(){this.addLang("it"),this.addLang("en")}ngOnInit(){}registerOnChange(c){this.value$.pipe((0,l.a)(this.destroy$)).subscribe({next:a=>c(a)})}registerOnTouched(c){this.touched$.pipe((0,i.I)(a=>!0===a)).subscribe({next:()=>c()})}writeValue(c){this.patchValue(c??{}),this.touched$.next(!1)}wasTouched(){this.touched$.next(!0)}getFullLang(c){return C.S[c]??c}controlChanged(c){this.value$.next({...this.value$.value,[c]:this.controls()[c].value})}patchValue(c){Object.keys(c).forEach(a=>this.addLang(a)),Object.keys(this.controls()).forEach(a=>{this.controls()[a].patchValue(c[a]??null)})}addLang(c){if(this.controls()[c])return;const a=new h.Ku;a.valueChanges.subscribe({next:()=>this.controlChanged(c)}),this.controls.set({...this.controls(),[c]:a})}static#t=this.\u0275fac=function(a){return new(a||p)};static#e=this.\u0275cmp=e.In1({type:p,selectors:[["app-i18n-input"]],inputs:{long:"long"},standalone:!0,features:[e.M5G([{provide:h.Y6,useExisting:(0,e.wd)(()=>p),multi:!0},t.UF]),e.UHJ],ngContentSelectors:D,decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngClass"],[3,"formControl"],[3,"errors"]],template:function(a,v){1&a&&(e.kPM(),e._Xx(0),e.yuY(1,A,5,5,"ng-container",0)),2&a&&(e.yG2(),e.E7m("ngForOf",v.controlsArr()))},dependencies:[h.sl,h.ue,h.ug,E.CQ,E.Oo,E.cP,s.Iw,r.g,s.QF,o.Y3,o.wp,o.kd],changeDetection:0})}return p})()},8868:(f,d,n)=>{n.r(d),n.d(d,{CreateDishModule:()=>$});var e=n(1236),h=n(7552),t=n(4496),_=n(3480),l=n(9088),i=n(8676),E=n(1128),o=n(6504),s=n(3616),r=n(8824),C=n(4704),P=n(6684),T=n(4e3),R=n(9938),A=n(8256),D=n(1512),I=n(8212),p=n(9064),g=n(9956),c=n(1712);function a(O,U){if(1&O&&(t.I0R(0,"div",3)(1,"span",12),t.SAx(2),t.aS0(3,13),t.k70(),t.C$Y(),t.I0R(4,"a",14),t.wVc(5,"urlTo"),t.OEk(6),t.C$Y()()),2&O){const m=t.GaO();let u,M;t.yG2(4),t.E7m("routerLink",t.g7$(5,2,null==(u=m.category())?null:u.id,"menuCategory.show")),t.yG2(2),t.cNF(null==(M=m.category())?null:M.name)}}let v=(()=>{class O{constructor(){this.categoriesService=(0,t.uUt)(c.S),this.service=(0,t.uUt)(i.k),this.destroy$=(0,t.uUt)(_.UF),this.router=(0,t.uUt)(e.E5),this.route=(0,t.uUt)(e.gV),this.notifications=(0,t.uUt)(E.E),this.afterUrl=this.route.snapshot.queryParams.afterUrl,this.form=new o.WC({name:new o.Ku(null)}),this.category=(0,t.OCB)(null),this.loading=(0,t.OCB)(!1),this.submitted=!1,this.e=this.errorsFor}ngOnInit(){this.listenForEvents(this.route.queryParams),this.listenForEvents(this.route.params),this.route.parent&&this.listenForEvents(this.route.parent.params),this.route.parent?.parent&&this.listenForEvents(this.route.parent?.parent.params)}submit(){this.submitted=!0,!this.form.invalid&&(this.loading.set(!0),this.service.create(this.formData()).pipe((0,s.a)(this.destroy$),(0,r.U)(()=>this.loading.set(!1))).subscribe({next:m=>{"string"==typeof this.afterUrl&&this.afterUrl.length>0?this.router.navigateByUrl(this.afterUrl):this.router.navigate([`../dish/${m.id}`],{relativeTo:this.route}),this.notifications.fireSnackBar("Dish created.")},error:m=>{R.y.assignErrorsToForm(this.form,m),this.notifications.error((0,A.mk)(m)||"Something went wrong in saving the dish.")}}))}cancel(){this.router.navigate([this.afterUrl||".."],{relativeTo:this.route})}formData(){const m=this.form.value;return m.category_id=this.category()?.id??null,m}errorsFor(m){const u=this.form.get(m);return u&&(u.dirty||u.touched||this.submitted)?u.errors:null}loadCategory(m){this.categoriesService.show(m).pipe((0,s.a)(this.destroy$)).subscribe({next:u=>{this.category.set(u)},error:u=>{this.category.set(null),console.error(u),this.notifications.error("There have been some mistakes.")}})}listenForEvents(m){m.pipe((0,s.a)(this.destroy$),(0,C.k)(u=>Number(u.category_id||u.parent_id)),(0,P.I)(u=>"number"==typeof u&&!isNaN(u)&&u>0),(0,T.a)()).subscribe({next:u=>this.loadCategory(u)})}static#t=this.\u0275fac=function(u){return new(u||O)};static#e=this.\u0275cmp=t.In1({type:O,selectors:[["ng-component"]],standalone:!0,features:[t.M5G([_.UF]),t.UHJ],decls:17,vars:5,consts:()=>{let m,u,M,y,L;return m="Create new dish",u="Name of the dish",M="Confirm",y="Cancel",L="The dish will be created within the category.",[m,["class","mb-3"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["formControlName","name"],u,[3,"errors"],[1,"flex"],["tuiButton","","type","submit","size","l",1,"me-2",3,"showLoader"],M,["tuiButton","","type","button","appearance","icon","size","l",3,"showLoader","click"],y,[1,"me-2","text-slate-400"],L,["tuiLink","",3,"routerLink"]]},template:function(u,M){1&u&&(t.I0R(0,"h1"),t.SAx(1),t.aS0(2,0),t.k70(),t.C$Y(),t.yuY(3,a,7,5,"div",1),t.I0R(4,"form",2),t.qCj("ngSubmit",function(){return M.submit()}),t.I0R(5,"div",3)(6,"app-i18n-input",4),t.SAx(7),t.aS0(8,5),t.k70(),t.C$Y(),t.wR5(9,"app-errors",6),t.C$Y(),t.I0R(10,"div",7)(11,"button",8),t.SAx(12),t.aS0(13,9),t.k70(),t.C$Y(),t.I0R(14,"button",10),t.qCj("click",function(){return M.cancel()}),t.SAx(15),t.aS0(16,11),t.k70(),t.C$Y()()()),2&u&&(t.yG2(3),t.C0Y(3,M.category()?3:-1),t.yG2(),t.E7m("formGroup",M.form),t.yG2(5),t.E7m("errors",M.e("name")),t.yG2(2),t.E7m("showLoader",M.loading()),t.yG2(3),t.E7m("showLoader",M.loading()))},dependencies:[l.S,e.ER,D.w,D.C,o.sl,o.sz,o.ue,o.u,o.uW,o.Wo,p.w,g.g,I.CI,I.Kw],encapsulation:2,changeDetection:0})}return O})(),$=(()=>{class O{static#t=this.\u0275fac=function(u){return new(u||O)};static#e=this.\u0275mod=t.a4G({type:O});static#o=this.\u0275inj=t.s3X({imports:[e.qQ.forChild([(0,h.VV)(v,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return O})()},1292:(f,d,n)=>{n.d(d,{S:()=>e});const e={it:"Italian",en:"English",es:"Spanish",fr:"French",de:"German",pt:"Portuguese",ru:"Russian",zh:"Chinese",ja:"Japanese",ar:"Arabic",hi:"Hindi",bn:"Bengali",pa:"Punjabi",ms:"Malaysian"}},4824:(f,d,n)=>{n.d(d,{o:()=>t});var e=n(8400),h=n(2264);class t extends e.w{constructor(l){super(l),this.name=l.name,this.description=l.description,this.status=l.status,this.other=l.other,this.translations={...l.translations},l.image&&(this.image=new h.W(l.image))}}},5891:(f,d,n)=>{n.d(d,{S:()=>i});var e=n(8400),h=n(2264),t=n(355),_=n(4824),l=n(532);class i extends e.w{constructor(o){super(o),this.name=o.name,this.description=o.description,this.status=o.status,this.price=o.price,this.translations=o.translations,this.images=o.images?o.images.map(s=>new h.W(s)):[],this.suggestions=o.suggestions?o.suggestions.map(s=>new i(s)):[],this.tags=o.tags?o.tags.map(s=>new t.E(s)):[],this.allergens=o.allergens?o.allergens.map(s=>new _.o(s)):[],this.ingredients=o.ingredients?o.ingredients.map(s=>new l.e(s)):[]}}},2264:(f,d,n)=>{n.d(d,{W:()=>h});var e=n(8400);class h extends e.w{constructor(_){super(_),this.filename=_.filename,this.status=_.status,this.key=_.key,this.original_id=_.original_id,this.tag=_.tag,this.url=_.url}}},532:(f,d,n)=>{n.d(d,{e:()=>t});var e=n(8400),h=n(2264);class t extends e.w{constructor(l){super(l),this.name=l.name,this.description=l.description,this.status=l.status,this.other=l.other,this.translations={...l.translations},l.image&&(this.image=new h.W(l.image))}}},5820:(f,d,n)=>{n.d(d,{Q:()=>_});var e=n(8400);class h extends e.w{constructor(i){super(i),this.public_visible=i.public_visible,this.public_from=i.public_from?new Date(i.public_from):void 0,this.public_to=i.public_to?new Date(i.public_to):void 0,this.private_visible=i.private_visible,this.daily_from=i.daily_from?new Date(i.daily_from):void 0,this.daily_to=i.daily_to?new Date(i.daily_to):void 0}}var t=n(2264);class _ extends e.w{constructor(i){super(i),this.name=i.name,this.description=i.description,this.status=i.status,this.price=i.price,this.parent_id=i.parent_id,this.index=i.index,this.secret=i.secret,this.secret_desc=i.secret_desc,this.visibility_id=i.visibility_id,this.visibility=i.visibility?new h(i.visibility):void 0,this.parent=i.parent?new _(i.parent):void 0,this.children=i.children?i.children.map(E=>new _(E)):[],this.images=i.images?i.images.map(E=>new t.W(E)):[],this.translations=i.translations,this.public_visible=i.public_visible,this.stats=i.stats}}},355:(f,d,n)=>{n.d(d,{E:()=>t});var e=n(8400),h=n(2264);class t extends e.w{constructor(l){super(l),this.name=l.name,this.description=l.description,this.status=l.status,this.other=l.other,this.translations={...l.translations},this.color=l.color,l.image&&(this.image=new h.W(l.image))}}},9088:(f,d,n)=>{n.d(d,{S:()=>t});var e=n(4496);const h={menuCategory:{show:"/admin/menu/{itemId}",duplicate:"/admin/menu/{itemId}/duplicate",export:"/admin/menu/{itemId}/export",createChild:"/admin/menu/{itemId}/create-category",linkCategory:"/admin/menu/{itemId}/link-category",createDish:"/admin/menu/{itemId}/create-dish",linkDish:"/admin/menu/{itemId}/link-dish",private:"/menu/{itemId}",public:"/menu/{itemId}"},dish:{show:"/admin/menu/{categoryId}/dish/{itemId}"}};let t=(()=>{class _{transform(i,E){const o=h[E.split(".")[0]];if(!o)throw new Error(`Resource not found: ${E} (resouce: ${E.split(".")[0]})`);const s=E.split(".")[1];if(!o[s])throw new Error(`Action not found: ${E} (action: ${s})`);if(typeof i>"u"||null===i)return null;if("number"==typeof i&&(i=i.toString()),"object"==typeof i&&null!==i&&!Array.isArray(i)){let r=o[s];if(Object.keys(i).forEach(C=>{const P=i[C];void 0!==P&&r.includes(`{${C}}`)&&(r=r.replace(`{${C}}`,P??""))}),r.includes("{{"))throw new Error(`Unresolved interpolation: ${r}`);return r}if("string"!=typeof i)throw new Error(`Invalid itemId: ${i} (type: ${typeof i})`);return o[s].replace("{itemId}",i)}static#t=this.\u0275fac=function(E){return new(E||_)};static#e=this.\u0275pipe=e.UTH({name:"urlTo",type:_,pure:!0,standalone:!0})}return _})()},8676:(f,d,n)=>{n.d(d,{k:()=>l});var e=n(6012),h=n(5891),t=n(4704),_=n(4496);let l=(()=>{class i extends e.s{constructor(){super(h.S,"admin/menu/dishes")}bulkUpdateStatus(o){return this.patch(`bulk_status/${o.status}`,{dish_ids:o.dish_ids})}relocate(o){return this.patch("relocate",o)}updatePrices(o){return(null==o.filters||null==o.filters)&&delete o.filters,this.patch("update_prices",o)}copy(o,s){return this.post(`${o}/copy`,s).pipe((0,t.k)(r=>this.mapItem(r)))}move(o,s){return this.patch(`${o}/move`,s).pipe((0,t.k)(r=>this.mapItem(r)))}moveIngredient(o,s,r){return this.patch(`${o}/ingredients/${s}/move`,{to_index:r}).pipe((0,t.k)(C=>this.mapItem(C)))}moveTag(o,s,r){return this.patch(`${o}/tags/${s}/move`,{to_index:r}).pipe((0,t.k)(C=>this.mapItem(C)))}moveAllergen(o,s,r){return this.patch(`${o}/allergens/${s}/move`,{to_index:r}).pipe((0,t.k)(C=>this.mapItem(C)))}updateStatus(o,s){return this.patch(`${o}/status/${s}`,{}).pipe((0,t.k)(r=>this.mapItem(r)))}addIngredient(o,s){return this.post(`${o}/ingredients/${s}`,{}).pipe((0,t.k)(r=>this.mapItem(r)))}removeIngredient(o,s){return this.delete(`${o}/ingredients/${s}`).pipe((0,t.k)(r=>this.mapItem(r)))}addTag(o,s){return this.post(`${o}/tags/${s}`,{}).pipe((0,t.k)(r=>this.mapItem(r)))}removeTag(o,s){return this.delete(`${o}/tags/${s}`).pipe((0,t.k)(r=>this.mapItem(r)))}addAllergen(o,s){return this.post(`${o}/allergens/${s}`,{}).pipe((0,t.k)(r=>this.mapItem(r)))}removeAllergen(o,s){return this.delete(`${o}/allergens/${s}`).pipe((0,t.k)(r=>this.mapItem(r)))}references(o){return this.get(`${o}/references`).pipe((0,t.k)(s=>s))}addSuggestion(o,s){return this.post(`${o}/suggestions/${s}`,{}).pipe((0,t.k)(r=>this.mapItem(r)))}removeSuggestion(o,s){return this.delete(`${o}/suggestions/${s}`).pipe((0,t.k)(r=>this.mapItem(r)))}static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275prov=_.wxM({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},1712:(f,d,n)=>{n.d(d,{S:()=>l});var e=n(6012),h=n(5820),t=n(4704),_=n(4496);let l=(()=>{class i extends e.s{constructor(){super(h.Q,"admin/menu/categories")}addCategory(o,s,r={}){return this.post(`${o}/add_category/${s}`,r)}addDish(o,s){return this.post(`${o}/dishes/${s}`,{})}removeDish(o,s){return this.delete(`${o}/dishes/${s}`,{})}orderDishes(o,s){return this.patch(`${o}/order_dishes`,{field:s})}dashboardData(o){return this.get(`${o}/dashboard_data`)}updateVisibility(o,s){return this.patch(`${o}/visibility`,s).pipe((0,t.k)(r=>this.mapItem(r)))}copy(o,s){return this.post(`${o}/copy`,s).pipe((0,t.k)(r=>this.mapItem(r)))}move(o,s){return this.patch(`${o}/move/${s}`,{}).pipe((0,t.k)(r=>this.mapItem(r)))}static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275prov=_.wxM({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},1512:(f,d,n)=>{n.d(d,{C:()=>I,w:()=>p});var e=n(4496),h=n(900),t=n(4392),_=n(4164),l=n(3480),i=n(4680),E=n(3972),o=n(5944),s=n(3412),r=n(4704),C=n(3656),P=n(1368);const T=["tuiLink",""];function R(g,c){if(1&g&&e.wR5(0,"tui-svg",3),2&g){const a=e.GaO();e.E7m("src",a.icon||"")}}function A(g,c){if(1&g&&e.wR5(0,"tui-svg",4),2&g){const a=e.GaO();e.E7m("src",a.icon||"")}}const D=["*"];let I=(()=>{class g{constructor(a,v,$){this.el=a,this.mode$=v,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,s.U)((0,h.Ax)(this.el.nativeElement,"focusin").pipe((0,r.k)(t.Ml)),(0,h.Ax)(this.el.nativeElement,"focusout").pipe((0,r.k)(t.so))),$.subscribe(O=>{this.focusVisible=O})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,_.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return g.\u0275fac=function(a){return new(a||g)(e.GI1(e.GMv),e.GI1(o.Yx),e.GI1(l.MF))},g.\u0275cmp=e.In1({type:g,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(a,v){1&a&&e.qCj("$.data-mode.attr",function(){return v.mode$}),2&a&&(e.e48("data-host-mode",v.mode),e.eAK("_pseudo",v.pseudo)("_icon-rotated",v.iconRotated)("_focus-visible",v.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[e.M5G([(0,i.NK)(g),l.MF,l.UF,E.Ir])],attrs:T,ngContentSelectors:D,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(a,v){1&a&&(e.kPM(),e.yuY(0,R,1,1,"tui-svg",0),e.I0R(1,"span",1),e._Xx(2),e.C$Y(),e.yuY(3,A,1,1,"tui-svg",2)),2&a&&(e.E7m("ngIf",v.iconAlignLeft),e.yG2(3),e.E7m("ngIf",v.iconAlignRight))},dependencies:[C.Wu,P.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),g})(),p=(()=>{class g{}return g.\u0275fac=function(a){return new(a||g)},g.\u0275mod=e.a4G({type:g}),g.\u0275inj=e.s3X({imports:[[P.MD,C.Yt]]}),g})()}}]);