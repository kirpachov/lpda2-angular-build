"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[2544],{9064:(O,m,o)=>{o.d(m,{w:()=>D});var e=o(4496),h=o(6504),t=o(3480),c=o(6700),f=o(3616),n=o(6684),C=o(3797),a=o(8588),u=o(1368),_=o(9956),p=o(1292);function T(E,R){if(1&E&&(e.I0R(0,"tui-textarea",2),e.OEk(1),e.C$Y()),2&E){const i=e.GaO().$implicit,r=e.GaO();e.E7m("formControl",i.control),e.yG2(),e.oRS(" ",r.getFullLang(i.lang)," ")}}function M(E,R){if(1&E&&(e.I0R(0,"tui-input",2),e.OEk(1),e.C$Y()),2&E){const i=e.GaO().$implicit,r=e.GaO();e.E7m("formControl",i.control),e.yG2(),e.oRS(" ",r.getFullLang(i.lang)," ")}}const S=E=>({"mb-3":E});function N(E,R){if(1&E&&(e.SAx(0),e.I0R(1,"div",1),e.yuY(2,T,2,2,"tui-textarea",2)(3,M,2,2),e.wR5(4,"app-errors",3),e.C$Y(),e.k70()),2&E){const i=R.$implicit,r=R.last,A=e.GaO();e.yG2(),e.E7m("ngClass",e.S45(3,S,!r)),e.yG2(),e.C0Y(2,A.long?2:3),e.yG2(2),e.E7m("errors",i.control.errors)}}const $=["*"];let D=(()=>{class E{constructor(){this.destroy$=new t.UF,this.long=!1,this.controls=(0,e.OCB)({}),this.controlsArr=(0,e.S6b)(()=>{const i=this.controls();return Object.keys(i).map(r=>({lang:r,control:i[r]}))}),this.touched$=new c.g(!1),this.value$=new c.g({})}ngAfterViewInit(){this.addLang("it"),this.addLang("en")}ngOnInit(){}registerOnChange(i){this.value$.pipe((0,f.a)(this.destroy$)).subscribe({next:r=>i(r)})}registerOnTouched(i){this.touched$.pipe((0,n.I)(r=>!0===r)).subscribe({next:()=>i()})}writeValue(i){this.patchValue(i??{}),this.touched$.next(!1)}wasTouched(){this.touched$.next(!0)}getFullLang(i){return p.S[i]??i}controlChanged(i){this.value$.next({...this.value$.value,[i]:this.controls()[i].value})}patchValue(i){Object.keys(i).forEach(r=>this.addLang(r)),Object.keys(this.controls()).forEach(r=>{this.controls()[r].patchValue(i[r]??null)})}addLang(i){if(this.controls()[i])return;const r=new h.Ku;r.valueChanges.subscribe({next:()=>this.controlChanged(i)}),this.controls.set({...this.controls(),[i]:r})}static#t=this.\u0275fac=function(r){return new(r||E)};static#e=this.\u0275cmp=e.In1({type:E,selectors:[["app-i18n-input"]],inputs:{long:"long"},standalone:!0,features:[e.M5G([{provide:h.Y6,useExisting:(0,e.wd)(()=>E),multi:!0},t.UF]),e.UHJ],ngContentSelectors:$,decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngClass"],[3,"formControl"],[3,"errors"]],template:function(r,A){1&r&&(e.kPM(),e._Xx(0),e.yuY(1,N,5,5,"ng-container",0)),2&r&&(e.yG2(),e.E7m("ngForOf",A.controlsArr()))},dependencies:[h.sl,h.ue,h.ug,C.CQ,C.Oo,C.cP,u.Iw,_.g,u.QF,a.Y3,a.wp,a.kd],changeDetection:0})}return E})()},2544:(O,m,o)=>{o.r(m),o.d(m,{CreateCategoryModule:()=>b});var e=o(2100),h=o(7552),t=o(4496),c=o(8212),f=o(8976),n=o(4436),C=o(1512),a=o(9956),u=o(9064),_=o(6504),p=o(3480),T=o(1712),M=o(3616),S=o(4704),N=o(6684),$=o(8824),D=o(5820),E=o(9088),R=o(9938),i=o(4388),r=o(8256),A=o(5704),I=o(8392);function U(d,B){if(1&d&&(t.I0R(0,"h1",10)(1,"span"),t.aS0(2,11),t.C$Y()(),t.I0R(3,"div",1)(4,"span",12),t.SAx(5),t.aS0(6,13),t.k70(),t.C$Y(),t.I0R(7,"a",14),t.wVc(8,"urlTo"),t.OEk(9),t.C$Y()()),2&d){const s=t.GaO();let l,g;t.yG2(7),t.E7m("routerLink",t.g7$(8,2,null==(l=s.parent())?null:l.id,"menuCategory.show")),t.yG2(2),t.cNF(null==(g=s.parent())?null:g.name)}}function L(d,B){1&d&&(t.I0R(0,"h1"),t.SAx(1),t.aS0(2,15),t.k70(),t.C$Y())}let Y=(()=>{class d{constructor(){this.service=(0,t.uUt)(T.S),this.destroy$=(0,t.uUt)(p.UF),this.router=(0,t.uUt)(e.E5),this.route=(0,t.uUt)(e.gV),this.urlTo=(0,t.uUt)(E.S),this.notifications=(0,t.uUt)(i.E),this.afterUrl=this.route.snapshot.queryParams.afterUrl,this.form=new _.WC({name:new _.Ku(null)}),this.parentId=null,this.parent=(0,t.OCB)(null),this.loading=(0,t.OCB)(!1),this.submitted=!1,this.e=this.errorsFor}ngOnInit(){this.route.parent?.parent?.params.pipe((0,M.a)(this.destroy$),(0,S.k)(s=>Number(s.category_id)),(0,N.I)(s=>"number"==typeof s&&!isNaN(s)&&s>0)).subscribe({next:s=>{this.parentId=s,this.loadParent()}})}submit(){this.submitted=!0,!this.form.invalid&&(this.loading.set(!0),this.service.create(this.formData()).pipe((0,M.a)(this.destroy$),(0,$.U)(()=>this.loading.set(!1))).subscribe({next:s=>{const l=this.afterUrl||this.urlTo.transform(s.id,"menuCategory.show");console.assert(l,`URL for menu category ${s.id} not found`),this.router.navigate([l],{relativeTo:this.route}),this.notifications.fireSnackBar("Categoria creata.")},error:s=>{R.y.assignErrorsToForm(this.form,s),this.notifications.error((0,r.mk)(s)||I.a)}}))}formData(){const s=this.form.value,l=this.parent();return l instanceof D.Q&&(s.parent_id=l.id),s}errorsFor(s){const l=this.form.get(s);return l&&(l.dirty||l.touched||this.submitted)?l.errors:null}cancel(){this.router.navigate([this.afterUrl||".."],{relativeTo:this.route})}loadParent(s=this.parentId){s&&(this.loading.set(!0),this.service.show(s).pipe((0,M.a)(this.destroy$),(0,$.U)(()=>this.loading.set(!1))).subscribe({next:l=>{this.parent.set(l)},error:l=>{this.notifications.error((0,r.mk)(l)||I.a)}}))}static#t=this.\u0275fac=function(l){return new(l||d)};static#e=this.\u0275cmp=t.In1({type:d,selectors:[["app-create-category"]],standalone:!0,features:[t.M5G([p.UF,E.S]),t.UHJ],decls:15,vars:5,consts:()=>{let s,l,g,y,P,G;return s="Nome",l="Conferma",g="Annulla",y="Crea nuova categoria",P="La categoria verr\xE0 creata come sottocategoria di",G="Crea nuovo men\xF9",[[3,"formGroup","ngSubmit"],[1,"mb-3"],["formControlName","name"],s,[3,"errors"],[1,"flex"],["tuiButton","","type","submit","size","l",1,"me-2",3,"showLoader"],l,["tuiButton","","type","button","appearance","icon","size","l",3,"showLoader","click"],g,[1,"flex","items-center"],y,[1,"me-2","text-slate-400"],P,["tuiLink","",3,"routerLink"],G]},template:function(l,g){1&l&&(t.yuY(0,U,10,5)(1,L,3,0),t.I0R(2,"form",0),t.qCj("ngSubmit",function(){return g.submit()}),t.I0R(3,"div",1)(4,"app-i18n-input",2),t.SAx(5),t.aS0(6,3),t.k70(),t.C$Y(),t.wR5(7,"app-errors",4),t.C$Y(),t.I0R(8,"div",5)(9,"button",6),t.SAx(10),t.aS0(11,7),t.k70(),t.C$Y(),t.I0R(12,"button",8),t.qCj("click",function(){return g.cancel()}),t.SAx(13),t.aS0(14,9),t.k70(),t.C$Y()()()),2&l&&(t.C0Y(0,g.parent()?0:1),t.yG2(2),t.E7m("formGroup",g.form),t.yG2(5),t.E7m("errors",g.e("name")),t.yG2(2),t.E7m("showLoader",g.loading()),t.yG2(3),t.E7m("showLoader",g.loading()))},dependencies:[c.CI,c.Kw,a.g,u.w,_.sl,_.sz,_.ue,_.u,_.uW,_.Wo,f.Gy,A.W,n.a,C.w,C.C,e.ER,E.S],encapsulation:2,changeDetection:0})}return d})(),b=(()=>{class d{static#t=this.\u0275fac=function(l){return new(l||d)};static#e=this.\u0275mod=t.a4G({type:d});static#n=this.\u0275inj=t.s3X({imports:[e.qQ.forChild([(0,h.VV)(Y,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return d})()},1292:(O,m,o)=>{o.d(m,{S:()=>e});const e={it:"Italiano",en:"Inglese",es:"Spagnolo",fr:"Francese",de:"Tedesco",pt:"Portoghese",ru:"Russo",zh:"Cinese",ja:"Giapponese",ar:"Arabo",hi:"Hindi",bn:"Bengalese",pa:"Punjabi",ms:"Malese"}},2264:(O,m,o)=>{o.d(m,{W:()=>h});var e=o(8400);class h extends e.w{constructor(c){super(c),this.filename=c.filename,this.status=c.status,this.key=c.key,this.original_id=c.original_id,this.tag=c.tag,this.url=c.url}}},5820:(O,m,o)=>{o.d(m,{Q:()=>c});var e=o(8400);class h extends e.w{constructor(n){super(n),this.public_visible=n.public_visible,this.public_from=n.public_from?new Date(n.public_from):void 0,this.public_to=n.public_to?new Date(n.public_to):void 0,this.private_visible=n.private_visible,this.daily_from=n.daily_from?new Date(n.daily_from):void 0,this.daily_to=n.daily_to?new Date(n.daily_to):void 0}}var t=o(2264);class c extends e.w{constructor(n){super(n),this.name=n.name,this.description=n.description,this.status=n.status,this.price=n.price,this.parent_id=n.parent_id,this.index=n.index,this.secret=n.secret,this.secret_desc=n.secret_desc,this.visibility_id=n.visibility_id,this.visibility=n.visibility?new h(n.visibility):void 0,this.parent=n.parent?new c(n.parent):void 0,this.children=n.children?n.children.map(C=>new c(C)):[],this.images=n.images?n.images.map(C=>new t.W(C)):[],this.translations=n.translations}}},9088:(O,m,o)=>{o.d(m,{S:()=>t});var e=o(4496);const h={menuCategory:{show:"/admin/menu/{itemId}",duplicate:"/admin/menu/{itemId}/duplicate",export:"/admin/menu/{itemId}/export",createChild:"/admin/menu/{itemId}/create-category",linkCategory:"/admin/menu/{itemId}/link-category",createDish:"/admin/menu/{itemId}/create-dish",linkDish:"/admin/menu/{itemId}/link-dish",private:"/menu/{itemId}",public:"/menu/{itemId}"},dish:{show:"/admin/menu/{categoryId}/dish/{itemId}"}};let t=(()=>{class c{transform(n,C){const a=h[C.split(".")[0]];if(!a)throw new Error(`Resource not found: ${C} (resouce: ${C.split(".")[0]})`);const u=C.split(".")[1];if(!a[u])throw new Error(`Action not found: ${C} (action: ${u})`);if(typeof n>"u"||null===n)return null;if("number"==typeof n&&(n=n.toString()),"object"==typeof n&&null!==n&&!Array.isArray(n)){let _=a[u];if(Object.keys(n).forEach(p=>{const T=n[p];void 0!==T&&_.includes(`{${p}}`)&&(_=_.replace(`{${p}}`,T??""))}),_.includes("{{"))throw new Error(`Unresolved interpolation: ${_}`);return _}if("string"!=typeof n)throw new Error(`Invalid itemId: ${n} (type: ${typeof n})`);return a[u].replace("{itemId}",n)}static#t=this.\u0275fac=function(C){return new(C||c)};static#e=this.\u0275pipe=e.UTH({name:"urlTo",type:c,pure:!0,standalone:!0})}return c})()},1712:(O,m,o)=>{o.d(m,{S:()=>f});var e=o(6012),h=o(5820),t=o(4704),c=o(4496);let f=(()=>{class n extends e.s{constructor(){super(h.Q,"admin/menu/categories")}addCategory(a,u,_={}){return this.post(`${a}/add_category/${u}`,_)}addDish(a,u){return this.post(`${a}/dishes/${u}`,{})}removeDish(a,u){return this.delete(`${a}/dishes/${u}`,{})}orderDishes(a,u){return this.patch(`${a}/order_dishes`,{field:u})}dashboardData(a){return this.get(`${a}/dashboard_data`)}updateVisibility(a,u){return this.patch(`${a}/visibility`,u).pipe((0,t.k)(_=>this.mapItem(_)))}copy(a,u){return this.post(`${a}/copy`,u).pipe((0,t.k)(_=>this.mapItem(_)))}move(a,u){return this.patch(`${a}/move/${u}`,{}).pipe((0,t.k)(_=>this.mapItem(_)))}static#t=this.\u0275fac=function(u){return new(u||n)};static#e=this.\u0275prov=c.wxM({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);