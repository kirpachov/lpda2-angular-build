"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4744],{9064:(D,v,i)=>{i.d(v,{w:()=>y});var t=i(4496),g=i(6504),o=i(3480),r=i(6700),_=i(3616),e=i(6684),n=i(3797),d=i(8588),s=i(1368),l=i(9956),m=i(1292);function M(C,p){if(1&C&&(t.I0R(0,"tui-textarea",2),t.OEk(1),t.C$Y()),2&C){const u=t.GaO().$implicit,a=t.GaO();t.E7m("formControl",u.control),t.yG2(),t.oRS(" ",a.getFullLang(u.lang)," ")}}function f(C,p){if(1&C&&(t.I0R(0,"tui-input",2),t.OEk(1),t.C$Y()),2&C){const u=t.GaO().$implicit,a=t.GaO();t.E7m("formControl",u.control),t.yG2(),t.oRS(" ",a.getFullLang(u.lang)," ")}}const P=C=>({"mb-3":C});function A(C,p){if(1&C&&(t.SAx(0),t.I0R(1,"div",1),t.yuY(2,M,2,2,"tui-textarea",2)(3,f,2,2),t.wR5(4,"app-errors",3),t.C$Y(),t.k70()),2&C){const u=p.$implicit,a=p.last,E=t.GaO();t.yG2(),t.E7m("ngClass",t.S45(3,P,!a)),t.yG2(),t.C0Y(2,E.long?2:3),t.yG2(2),t.E7m("errors",u.control.errors)}}const R=["*"];let y=(()=>{class C{constructor(){this.destroy$=new o.UF,this.long=!1,this.controls=(0,t.OCB)({}),this.controlsArr=(0,t.S6b)(()=>{const u=this.controls();return Object.keys(u).map(a=>({lang:a,control:u[a]}))}),this.touched$=new r.g(!1),this.value$=new r.g({})}ngAfterViewInit(){this.addLang("it"),this.addLang("en")}ngOnInit(){}registerOnChange(u){this.value$.pipe((0,_.a)(this.destroy$)).subscribe({next:a=>u(a)})}registerOnTouched(u){this.touched$.pipe((0,e.I)(a=>!0===a)).subscribe({next:()=>u()})}writeValue(u){this.patchValue(u??{}),this.touched$.next(!1)}wasTouched(){this.touched$.next(!0)}getFullLang(u){return m.S[u]??u}controlChanged(u){this.value$.next({...this.value$.value,[u]:this.controls()[u].value})}patchValue(u){Object.keys(u).forEach(a=>this.addLang(a)),Object.keys(this.controls()).forEach(a=>{this.controls()[a].patchValue(u[a]??null)})}addLang(u){if(this.controls()[u])return;const a=new g.Ku;a.valueChanges.subscribe({next:()=>this.controlChanged(u)}),this.controls.set({...this.controls(),[u]:a})}static#t=this.\u0275fac=function(a){return new(a||C)};static#i=this.\u0275cmp=t.In1({type:C,selectors:[["app-i18n-input"]],inputs:{long:"long"},standalone:!0,features:[t.M5G([{provide:g.Y6,useExisting:(0,t.wd)(()=>C),multi:!0},o.UF]),t.UHJ],ngContentSelectors:R,decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngClass"],[3,"formControl"],[3,"errors"]],template:function(a,E){1&a&&(t.kPM(),t._Xx(0),t.yuY(1,A,5,5,"ng-container",0)),2&a&&(t.yG2(),t.E7m("ngForOf",E.controlsArr()))},dependencies:[g.sl,g.ue,g.ug,n.CQ,n.Oo,n.cP,s.Iw,l.g,s.QF,d.Y3,d.wp,d.kd],changeDetection:0})}return C})()},2544:(D,v,i)=>{i.r(v),i.d(v,{CreateCategoryModule:()=>N});var t=i(2992),g=i(7552),o=i(4496),r=i(8212),_=i(8976),e=i(4436),n=i(1512),d=i(9956),s=i(9064),l=i(6504),m=i(3480),M=i(1712),f=i(3616),P=i(4704),A=i(6684),R=i(8824),y=i(5820),C=i(9088),p=i(9938),u=i(1128),a=i(8256),E=i(5704),b=i(8392);function S(O,k){if(1&O&&(o.I0R(0,"h1",10)(1,"span"),o.aS0(2,11),o.C$Y()(),o.I0R(3,"div",1)(4,"span",12),o.SAx(5),o.aS0(6,13),o.k70(),o.C$Y(),o.I0R(7,"a",14),o.wVc(8,"urlTo"),o.OEk(9),o.C$Y()()),2&O){const c=o.GaO();let h,T;o.yG2(7),o.E7m("routerLink",o.g7$(8,2,null==(h=c.parent())?null:h.id,"menuCategory.show")),o.yG2(2),o.cNF(null==(T=c.parent())?null:T.name)}}function G(O,k){1&O&&(o.I0R(0,"h1"),o.SAx(1),o.aS0(2,15),o.k70(),o.C$Y())}let U=(()=>{class O{constructor(){this.service=(0,o.uUt)(M.S),this.destroy$=(0,o.uUt)(m.UF),this.router=(0,o.uUt)(t.E5),this.route=(0,o.uUt)(t.gV),this.urlTo=(0,o.uUt)(C.S),this.notifications=(0,o.uUt)(u.E),this.afterUrl=this.route.snapshot.queryParams.afterUrl,this.form=new l.WC({name:new l.Ku(null)}),this.parentId=null,this.parent=(0,o.OCB)(null),this.loading=(0,o.OCB)(!1),this.submitted=!1,this.e=this.errorsFor}ngOnInit(){this.route.parent?.parent?.params.pipe((0,f.a)(this.destroy$),(0,P.k)(c=>Number(c.category_id)),(0,A.I)(c=>"number"==typeof c&&!isNaN(c)&&c>0)).subscribe({next:c=>{this.parentId=c,this.loadParent()}})}submit(){this.submitted=!0,!this.form.invalid&&(this.loading.set(!0),this.service.create(this.formData()).pipe((0,f.a)(this.destroy$),(0,R.U)(()=>this.loading.set(!1))).subscribe({next:c=>{const h=this.afterUrl||this.urlTo.transform(c.id,"menuCategory.show");console.assert(h,`URL for menu category ${c.id} not found`),this.router.navigate([h],{relativeTo:this.route}),this.notifications.fireSnackBar("Category created.")},error:c=>{p.y.assignErrorsToForm(this.form,c),this.notifications.error((0,a.mk)(c)||b.a)}}))}formData(){const c=this.form.value,h=this.parent();return h instanceof y.Q&&(c.parent_id=h.id),c}errorsFor(c){const h=this.form.get(c);return h&&(h.dirty||h.touched||this.submitted)?h.errors:null}cancel(){this.router.navigate([this.afterUrl||".."],{relativeTo:this.route})}loadParent(c=this.parentId){c&&(this.loading.set(!0),this.service.show(c).pipe((0,f.a)(this.destroy$),(0,R.U)(()=>this.loading.set(!1))).subscribe({next:h=>{this.parent.set(h)},error:h=>{this.notifications.error((0,a.mk)(h)||b.a)}}))}static#t=this.\u0275fac=function(h){return new(h||O)};static#i=this.\u0275cmp=o.In1({type:O,selectors:[["app-create-category"]],standalone:!0,features:[o.M5G([m.UF,C.S]),o.UHJ],decls:15,vars:5,consts:()=>{let c,h,T,L,$,x;return c="Name",h="Confirm",T="Cancel",L="Create new category",$="The category will be created as a subcategory of",x="Create new menu",[[3,"formGroup","ngSubmit"],[1,"mb-3"],["formControlName","name"],c,[3,"errors"],[1,"flex"],["tuiButton","","type","submit","size","l",1,"me-2",3,"showLoader"],h,["tuiButton","","type","button","appearance","icon","size","l",3,"showLoader","click"],T,[1,"flex","items-center"],L,[1,"me-2","text-slate-400"],$,["tuiLink","",3,"routerLink"],x]},template:function(h,T){1&h&&(o.yuY(0,S,10,5)(1,G,3,0),o.I0R(2,"form",0),o.qCj("ngSubmit",function(){return T.submit()}),o.I0R(3,"div",1)(4,"app-i18n-input",2),o.SAx(5),o.aS0(6,3),o.k70(),o.C$Y(),o.wR5(7,"app-errors",4),o.C$Y(),o.I0R(8,"div",5)(9,"button",6),o.SAx(10),o.aS0(11,7),o.k70(),o.C$Y(),o.I0R(12,"button",8),o.qCj("click",function(){return T.cancel()}),o.SAx(13),o.aS0(14,9),o.k70(),o.C$Y()()()),2&h&&(o.C0Y(0,T.parent()?0:1),o.yG2(2),o.E7m("formGroup",T.form),o.yG2(5),o.E7m("errors",T.e("name")),o.yG2(2),o.E7m("showLoader",T.loading()),o.yG2(3),o.E7m("showLoader",T.loading()))},dependencies:[r.CI,r.Kw,d.g,s.w,l.sl,l.sz,l.ue,l.u,l.uW,l.Wo,_.Gy,E.W,e.a,n.w,n.C,t.ER,C.S],encapsulation:2,changeDetection:0})}return O})(),N=(()=>{class O{static#t=this.\u0275fac=function(h){return new(h||O)};static#i=this.\u0275mod=o.a4G({type:O});static#o=this.\u0275inj=o.s3X({imports:[t.qQ.forChild([(0,g.VV)(U,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return O})()},1292:(D,v,i)=>{i.d(v,{S:()=>t});const t={it:"Italian",en:"English",es:"Spanish",fr:"French",de:"German",pt:"Portuguese",ru:"Russian",zh:"Chinese",ja:"Japanese",ar:"Arabic",hi:"Hindi",bn:"Bengali",pa:"Punjabi",ms:"Malaysian"}},2264:(D,v,i)=>{i.d(v,{W:()=>g});var t=i(8400);class g extends t.w{constructor(r){super(r),this.filename=r.filename,this.status=r.status,this.key=r.key,this.original_id=r.original_id,this.tag=r.tag,this.url=r.url}}},5820:(D,v,i)=>{i.d(v,{Q:()=>r});var t=i(8400);class g extends t.w{constructor(e){super(e),this.public_visible=e.public_visible,this.public_from=e.public_from?new Date(e.public_from):void 0,this.public_to=e.public_to?new Date(e.public_to):void 0,this.private_visible=e.private_visible,this.daily_from=e.daily_from?new Date(e.daily_from):void 0,this.daily_to=e.daily_to?new Date(e.daily_to):void 0}}var o=i(2264);class r extends t.w{constructor(e){super(e),this.name=e.name,this.description=e.description,this.status=e.status,this.price=e.price,this.parent_id=e.parent_id,this.index=e.index,this.secret=e.secret,this.secret_desc=e.secret_desc,this.visibility_id=e.visibility_id,this.visibility=e.visibility?new g(e.visibility):void 0,this.parent=e.parent?new r(e.parent):void 0,this.children=e.children?e.children.map(n=>new r(n)):[],this.images=e.images?e.images.map(n=>new o.W(n)):[],this.translations=e.translations}}},9088:(D,v,i)=>{i.d(v,{S:()=>o});var t=i(4496);const g={menuCategory:{show:"/admin/menu/{itemId}",duplicate:"/admin/menu/{itemId}/duplicate",export:"/admin/menu/{itemId}/export",createChild:"/admin/menu/{itemId}/create-category",linkCategory:"/admin/menu/{itemId}/link-category",createDish:"/admin/menu/{itemId}/create-dish",linkDish:"/admin/menu/{itemId}/link-dish",private:"/menu/{itemId}",public:"/menu/{itemId}"},dish:{show:"/admin/menu/{categoryId}/dish/{itemId}"}};let o=(()=>{class r{transform(e,n){const d=g[n.split(".")[0]];if(!d)throw new Error(`Resource not found: ${n} (resouce: ${n.split(".")[0]})`);const s=n.split(".")[1];if(!d[s])throw new Error(`Action not found: ${n} (action: ${s})`);if(typeof e>"u"||null===e)return null;if("number"==typeof e&&(e=e.toString()),"object"==typeof e&&null!==e&&!Array.isArray(e)){let l=d[s];if(Object.keys(e).forEach(m=>{const M=e[m];void 0!==M&&l.includes(`{${m}}`)&&(l=l.replace(`{${m}}`,M??""))}),l.includes("{{"))throw new Error(`Unresolved interpolation: ${l}`);return l}if("string"!=typeof e)throw new Error(`Invalid itemId: ${e} (type: ${typeof e})`);return d[s].replace("{itemId}",e)}static#t=this.\u0275fac=function(n){return new(n||r)};static#i=this.\u0275pipe=t.UTH({name:"urlTo",type:r,pure:!0,standalone:!0})}return r})()},1712:(D,v,i)=>{i.d(v,{S:()=>_});var t=i(6012),g=i(5820),o=i(4704),r=i(4496);let _=(()=>{class e extends t.s{constructor(){super(g.Q,"admin/menu/categories")}addCategory(d,s,l={}){return this.post(`${d}/add_category/${s}`,l)}addDish(d,s){return this.post(`${d}/dishes/${s}`,{})}removeDish(d,s){return this.delete(`${d}/dishes/${s}`,{})}orderDishes(d,s){return this.patch(`${d}/order_dishes`,{field:s})}dashboardData(d){return this.get(`${d}/dashboard_data`)}updateVisibility(d,s){return this.patch(`${d}/visibility`,s).pipe((0,o.k)(l=>this.mapItem(l)))}copy(d,s){return this.post(`${d}/copy`,s).pipe((0,o.k)(l=>this.mapItem(l)))}move(d,s){return this.patch(`${d}/move/${s}`,{}).pipe((0,o.k)(l=>this.mapItem(l)))}static#t=this.\u0275fac=function(s){return new(s||e)};static#i=this.\u0275prov=r.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},7656:(D,v,i)=>{i.d(v,{W:()=>o,g:()=>g});var t=i(4496);let g=(()=>{class r{constructor(){this.indeterminate=!1,this.checked=!1,this.tuiCheckedChange=new t._w7}get isChecked(){return this.checked}get isIndeterminate(){return this.indeterminate}set tuiChecked(e){this.checked=e||!1,this.indeterminate=null===e}onChange({checked:e}){this.checked=e,this.indeterminate=!1,this.tuiCheckedChange.emit(e)}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275dir=t.Sc5({type:r,selectors:[["input","tuiChecked",""],["input","tuiCheckedChange",""]],hostVars:2,hostBindings:function(e,n){1&e&&t.qCj("change",function(s){return n.onChange(s.target)}),2&e&&t.SoX("checked",n.isChecked)("indeterminate",n.isIndeterminate)},inputs:{tuiChecked:"tuiChecked"},outputs:{tuiCheckedChange:"tuiCheckedChange"}}),r})(),o=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.a4G({type:r}),r.\u0275inj=t.s3X({}),r})()},832:(D,v,i)=>{i.d(v,{I:()=>r,w:()=>o});var t=i(4496),g=i(3480);let o=(()=>{class _{constructor(n){this.tuiFocusVisibleChange=n}}return _.\u0275fac=function(n){return new(n||_)(t.GI1(g.MF))},_.\u0275dir=t.Sc5({type:_,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[t.M5G([g.UF,g.MF])]}),_})(),r=(()=>{class _{}return _.\u0275fac=function(n){return new(n||_)},_.\u0275mod=t.a4G({type:_}),_.\u0275inj=t.s3X({}),_})()},1096:(D,v,i)=>{i.d(v,{O:()=>l,h:()=>s});var t=i(4496),g=i(900),o=i(4164),r=i(3412),_=i(4704),e=i(5568),n=i(4e3),d=i(2644);let s=(()=>{class m{constructor({nativeElement:f},P){this.tuiFocusedChange=(0,r.U)((0,g.Ax)(f,"focusin"),(0,g.Ax)(f,"focusout")).pipe((0,_.k)(()=>(0,o.ER)(f)),(0,e.W)(!1),(0,n.a)(),(0,d.s)(1),(0,g.OA)(P))}}return m.\u0275fac=function(f){return new(f||m)(t.GI1(t.GMv),t.GI1(t.WW2))},m.\u0275dir=t.Sc5({type:m,selectors:[["","tuiFocusedChange",""]],outputs:{tuiFocusedChange:"tuiFocusedChange"}}),m})(),l=(()=>{class m{}return m.\u0275fac=function(f){return new(f||m)},m.\u0275mod=t.a4G({type:m}),m.\u0275inj=t.s3X({}),m})()},8976:(D,v,i)=>{i.d(v,{Gy:()=>e,Ko:()=>_});var t=i(4496),g=i(3480),o=i(1368);let r=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=t.In1({type:n,selectors:[["ng-component"]],hostAttrs:[1,"tui-group-styles"],decls:0,vars:0,template:function(s,l){},styles:[".tui-group{position:relative;display:flex;isolation:isolate}.tui-group>*{flex:1 1 0;min-width:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin-right:-1px}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-height:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-bottom-left-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:last-child{border-top-right-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--tui-radius-m);border-top-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-top-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:last-child{border-bottom-left-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-m)}}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_vertical{width:100%}.tui-group_adaptive.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical>*:not(:last-child){margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_horizontal{flex-direction:column;width:100%}.tui-group_adaptive.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal>*:not(:last-child){margin-right:0;margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}.tui-group__auto-width-item{min-width:auto;flex:0 0 auto}.tui-group .tui-group__inherit-item{border-radius:inherit}\n"],encapsulation:2,changeDetection:0}),n})(),_=(()=>{class n{constructor(s){this.orientation="horizontal",this.adaptive=!1,this.collapsed=!1,this.rounded=!0,this.size="m",s.addComponent(r)}get orientationHorizontal(){return"horizontal"===this.orientation}get orientationVertical(){return"vertical"===this.orientation}get sizeLarge(){return"l"===this.size}}return n.\u0275fac=function(s){return new(s||n)(t.GI1(g.WS))},n.\u0275dir=t.Sc5({type:n,selectors:[["","tuiGroup","",5,"ng-container"]],hostAttrs:["role","group",1,"tui-group"],hostVars:12,hostBindings:function(s,l){2&s&&t.eAK("tui-group_adaptive",l.adaptive)("tui-group_collapsed",l.collapsed)("tui-group_rounded",l.rounded)("tui-group_orientation_horizontal",l.orientationHorizontal)("tui-group_orientation_vertical",l.orientationVertical)("tui-group_radius_large",l.sizeLarge)},inputs:{orientation:"orientation",adaptive:"adaptive",collapsed:"collapsed",rounded:"rounded",size:"size"}}),n})(),e=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.a4G({type:n}),n.\u0275inj=t.s3X({imports:[[o.MD]]}),n})()},1512:(D,v,i)=>{i.d(v,{C:()=>y,w:()=>C});var t=i(4496),g=i(900),o=i(4392),r=i(4164),_=i(3480),e=i(4680),n=i(3972),d=i(5944),s=i(3412),l=i(4704),m=i(3656),M=i(1368);const f=["tuiLink",""];function P(p,u){if(1&p&&t.wR5(0,"tui-svg",3),2&p){const a=t.GaO();t.E7m("src",a.icon||"")}}function A(p,u){if(1&p&&t.wR5(0,"tui-svg",4),2&p){const a=t.GaO();t.E7m("src",a.icon||"")}}const R=["*"];let y=(()=>{class p{constructor(a,E,b){this.el=a,this.mode$=E,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,s.U)((0,g.Ax)(this.el.nativeElement,"focusin").pipe((0,l.k)(o.Ml)),(0,g.Ax)(this.el.nativeElement,"focusout").pipe((0,l.k)(o.so))),b.subscribe(S=>{this.focusVisible=S})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,r.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return p.\u0275fac=function(a){return new(a||p)(t.GI1(t.GMv),t.GI1(d.Yx),t.GI1(_.MF))},p.\u0275cmp=t.In1({type:p,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(a,E){1&a&&t.qCj("$.data-mode.attr",function(){return E.mode$}),2&a&&(t.e48("data-host-mode",E.mode),t.eAK("_pseudo",E.pseudo)("_icon-rotated",E.iconRotated)("_focus-visible",E.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,e.NK)(p),_.MF,_.UF,n.Ir])],attrs:f,ngContentSelectors:R,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(a,E){1&a&&(t.kPM(),t.yuY(0,P,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,A,1,1,"tui-svg",2)),2&a&&(t.E7m("ngIf",E.iconAlignLeft),t.yG2(3),t.E7m("ngIf",E.iconAlignRight))},dependencies:[m.Wu,M.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),p})(),C=(()=>{class p{}return p.\u0275fac=function(a){return new(a||p)},p.\u0275mod=t.a4G({type:p}),p.\u0275inj=t.s3X({imports:[[M.MD,m.Yt]]}),p})()}}]);