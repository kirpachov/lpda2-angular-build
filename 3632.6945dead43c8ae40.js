"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[3632],{3632:(h,u,t)=>{t.r(u),t.d(u,{DuplicateDishModule:()=>Z});var l=t(2992),S=t(7552),e=t(4496),c=t(3480),n=t(1712),m=t(1128),W=t(5820),i=t(6504),o=t(9852),_=t(3616),d=t(4704),N=t(6684),I=t(8824),p=t(8256),T=t(8392),x=t(9938),K=t(9956),M=t(8212),R=t(8976),b=t(9880),P=t(1512),f=t(7692),$=t(5704),O=t(2204),A=t(9088),F=t(8676),V=t(6524),Q=t(1368);function j(E,U){if(1&E&&(e.I0R(0,"div",6)(1,"p",18),e.aS0(2,19),e.C$Y(),e.I0R(3,"div",20)(4,"tui-radio-block",21),e.SAx(5),e.aS0(6,22),e.k70(),e.C$Y(),e.I0R(7,"tui-radio-block",23),e.SAx(8),e.aS0(9,24),e.k70(),e.C$Y(),e.I0R(10,"tui-radio-block",25),e.OEk(11," No "),e.C$Y()(),e.wR5(12,"app-errors",10),e.C$Y(),e.I0R(13,"div",6)(14,"p",18),e.aS0(15,26),e.C$Y(),e.I0R(16,"div",20)(17,"tui-radio-block",27),e.SAx(18),e.aS0(19,28),e.k70(),e.C$Y(),e.I0R(20,"tui-radio-block",29),e.OEk(21," No "),e.C$Y()(),e.wR5(22,"app-errors",10),e.C$Y(),e.I0R(23,"div",6)(24,"p",18),e.aS0(25,30),e.C$Y(),e.I0R(26,"div",20)(27,"tui-radio-block",31),e.SAx(28),e.aS0(29,32),e.k70(),e.C$Y(),e.I0R(30,"tui-radio-block",33),e.OEk(31," No "),e.C$Y()(),e.wR5(32,"app-errors",10),e.C$Y(),e.I0R(33,"div",6)(34,"p",18),e.aS0(35,34),e.C$Y(),e.I0R(36,"div",20)(37,"tui-radio-block",35),e.SAx(38),e.aS0(39,36),e.k70(),e.C$Y(),e.I0R(40,"tui-radio-block",37),e.OEk(41," No "),e.C$Y()(),e.wR5(42,"app-errors",10),e.C$Y()),2&E){const s=e.GaO();e.yG2(3),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(2),e.E7m("errors",s.e("copy_images")),e.yG2(4),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(2),e.E7m("errors",s.e("copy_ingredients")),e.yG2(4),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(2),e.E7m("errors",s.e("copy_tags")),e.yG2(4),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(2),e.E7m("errors",s.e("copy_allergens"))}}const w=(E,U)=>({categoryId:E,itemId:U});let J=(()=>{class E{constructor(){this.destroy$=(0,e.uUt)(c.UF),this.router=(0,e.uUt)(l.E5),this.route=(0,e.uUt)(l.gV),this.service=(0,e.uUt)(n.S),this.dishesService=(0,e.uUt)(F.k),this.notifications=(0,e.uUt)(m.E),this.urlTo=(0,e.uUt)(A.S),this.submitted=!1,this.category=(0,e.OCB)(null),this.dish=(0,e.OCB)(null),this.form=new i.WC({category:new i.Ku(null,[i.AQ.required,o.S.instanceof(W.Q)]),copy_images:new i.Ku("full",[i.AQ.required,o.S.in(["full","link","none"])]),copy_ingredients:new i.Ku("link",[i.AQ.required,o.S.in(["link","none"])]),copy_tags:new i.Ku("link",[i.AQ.required,o.S.in(["link","none"])]),copy_allergens:new i.Ku("link",[i.AQ.required,o.S.in(["link","none"])])}),this.loadingCategory=(0,e.OCB)(!1),this.loadingDish=(0,e.OCB)(!1),this.saving=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.saving()||this.loadingDish()||this.loadingCategory()),this.e=this.getErrorsFor}ngOnInit(){this.route.parent?.parent?.params.pipe((0,_.a)(this.destroy$),(0,d.k)(s=>Number(s.category_id)),(0,N.I)(s=>"number"==typeof s&&!isNaN(s)&&s>0)).subscribe({next:s=>this.loadCategory(s)}),this.route.params.pipe((0,_.a)(this.destroy$),(0,d.k)(s=>Number(s.dish_id)),(0,N.I)(s=>"number"==typeof s&&!isNaN(s)&&s>0)).subscribe({next:s=>this.loadDish(s)})}submit(){if(this.submitted=!0,this.form.invalid)return;const s=this.dish()?.id,r=this.formValue(),a=r.category_id;if(!s||!a)throw new Error(`some invalid id: dishId=${s}; categoryId=${a}`);this.saving.set(!0),this.dishesService.copy(s,r).pipe((0,_.a)(this.destroy$),(0,I.U)(()=>this.saving.set(!1))).subscribe({next:C=>{this.notifications.fireSnackBar("Duplicato.");const D=this.urlTo.transform({itemId:C.id,categoryId:a},"dish.show");D?this.router.navigateByUrl(D):(console.error("no url for dish",C,a),this.navigateBack())},error:C=>{this.manageError(C)}})}cancel(){(this.form.touched||this.form.dirty)&&!confirm("Sei sicuro di voler annullare le modifiche fatte?")||(this.notifications.fireSnackBar("Operazione annullata"),this.navigateBack())}formValue(){return{copy_tags:this.form.value.copy_tags,copy_images:this.form.value.copy_images,copy_ingredients:this.form.value.copy_ingredients,copy_allergens:this.form.value.copy_allergens,category_id:this.form.value.category?.id}}navigateBack(){this.router.navigate([".."],{relativeTo:this.route})}manageError(s){422==s.status?x.y.assignErrorsToForm(this.form,s):this.notifications.error((0,p.mk)(s)||T.a)}getErrorsFor(s){const r=this.form.get(s);return r&&(this.submitted||r.touched||r.dirty)?r.errors:null}loadCategory(s){s&&(this.loadingCategory.set(!0),this.service.show(s).pipe((0,_.a)(this.destroy$),(0,I.U)(()=>this.loadingCategory.set(!1))).subscribe({next:r=>{this.category.set(r),!this.form.touched&&!this.form.dirty&&this.form.patchValue({category:r})},error:r=>{this.notifications.error((0,p.mk)(r)||T.a)}}))}loadDish(s){s&&(this.loadingDish.set(!0),this.dishesService.show(s).pipe((0,_.a)(this.destroy$),(0,I.U)(()=>this.loadingDish.set(!1))).subscribe({next:r=>this.dish.set(r),error:r=>{this.notifications.error((0,p.mk)(r)||T.a)}}))}static#e=this.\u0275fac=function(r){return new(r||E)};static#i=this.\u0275cmp=e.In1({type:E,selectors:[["app-duplicate-dish"]],standalone:!0,features:[e.M5G([c.UF,A.S]),e.UHJ],decls:30,vars:18,consts:()=>{let s,r,a,C,D,y,L,v,H,G,B,k,z,X,Y;return s="Copia piatto",r="Associa il nuovo piatto alla categoria",a="Seleziona una categoria",C="Dettagli",D="Conferma",y="Annulla",L="Copiare immagini?",v="Copia",H="Associa esistenti",G="Copiare ingredienti?",B="Associa esistenti",k="Copiare tag?",z="Associa esistenti",X="Copiare allergeni?",Y="Associa esistenti",[["size","l",3,"showLoader","overlay"],[1,"flex","items-center"],s,[1,"ml-2"],["tuiLink","",3,"routerLink"],[3,"formGroup","ngSubmit"],[1,"mb-3"],r,[3,"formControlName"],a,[3,"errors"],C,["tuiAccordionItemContent",""],[3,"innerText"],["type","submit","size","l","tuiButton","",1,"me-2",3,"appearance"],D,["type","button","size","l","tuiButton","",1,"me-2",3,"appearance","click"],y,[1,"mb-1"],L,["tuiGroup","",1,"group",3,"collapsed"],["contentAlign","right","formControlName","copy_images","item","full","size","l",3,"hideRadio"],v,["contentAlign","right","formControlName","copy_images","item","link","size","l",3,"hideRadio"],H,["contentAlign","right","formControlName","copy_images","item","none","size","l",3,"hideRadio"],G,["contentAlign","right","formControlName","copy_ingredients","item","link","size","l",3,"hideRadio"],B,["contentAlign","right","formControlName","copy_ingredients","item","none","size","l",3,"hideRadio"],k,["contentAlign","right","formControlName","copy_tags","item","link","size","l",3,"hideRadio"],z,["contentAlign","right","formControlName","copy_tags","item","none","size","l",3,"hideRadio"],X,["contentAlign","right","formControlName","copy_allergens","item","link","size","l",3,"hideRadio"],Y,["contentAlign","right","formControlName","copy_allergens","item","none","size","l",3,"hideRadio"]]},template:function(r,a){if(1&r&&(e.I0R(0,"tui-loader",0)(1,"div",1)(2,"h1"),e.aS0(3,2),e.C$Y(),e.I0R(4,"span",3)(5,"a",4),e.wVc(6,"urlTo"),e.OEk(7),e.C$Y()()(),e.I0R(8,"form",5),e.qCj("ngSubmit",function(){return a.submit()}),e.I0R(9,"div",6)(10,"p"),e.aS0(11,7),e.C$Y(),e.I0R(12,"app-menu-category-select",8),e.SAx(13),e.aS0(14,9),e.k70(),e.C$Y(),e.wR5(15,"app-errors",10),e.C$Y(),e.I0R(16,"tui-accordion",6)(17,"tui-accordion-item"),e.SAx(18),e.aS0(19,11),e.k70(),e.yuY(20,j,43,17,"ng-template",12),e.C$Y()(),e.wR5(21,"pre",13),e.wVc(22,"json"),e.I0R(23,"div",1)(24,"button",14),e.SAx(25),e.aS0(26,15),e.k70(),e.C$Y(),e.I0R(27,"button",16),e.qCj("click",function(){return a.cancel()}),e.SAx(28),e.aS0(29,17),e.k70(),e.C$Y()()()()),2&r){let C,D;e.E7m("showLoader",a.loading())("overlay",!0),e.yG2(5),e.E7m("routerLink",e.g7$(6,10,e.IBC(15,w,null==(C=a.category())?null:C.id,null==(C=a.dish())?null:C.id),"dish.show")),e.yG2(2),e.cNF(null==(D=a.dish())?null:D.name),e.yG2(),e.E7m("formGroup",a.form),e.yG2(4),e.E7m("formControlName","category"),e.yG2(3),e.E7m("errors",a.e("category")),e.yG2(6),e.E7m("innerText",e.kDX(22,13,a.formValue())),e.yG2(3),e.E7m("appearance","primary"),e.yG2(3),e.E7m("appearance","outline")}},dependencies:[K.g,M.CI,M.Kw,$.W,$.I,i.sl,i.sz,i.ue,i.u,i.uW,i.Wo,R.Gy,R.Ko,b.kh,l.ER,P.w,P.C,A.S,V.a,O.Ep,O.Ix,O._Q,O.Up,Q.ED,f.Sk,f.Cb],changeDetection:0})}return E})(),Z=(()=>{class E{static#e=this.\u0275fac=function(r){return new(r||E)};static#i=this.\u0275mod=e.a4G({type:E});static#t=this.\u0275inj=e.s3X({imports:[l.qQ.forChild([(0,S.VV)(J,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return E})()},4824:(h,u,t)=>{t.d(u,{o:()=>e});var l=t(8400),S=t(2264);class e extends l.w{constructor(n){super(n),this.name=n.name,this.description=n.description,this.status=n.status,this.other=n.other,this.translations={...n.translations},n.image&&(this.image=new S.W(n.image))}}},5891:(h,u,t)=>{t.d(u,{S:()=>m});var l=t(8400),S=t(2264),e=t(355),c=t(4824),n=t(532);class m extends l.w{constructor(i){super(i),this.name=i.name,this.description=i.description,this.status=i.status,this.price=i.price,this.translations=i.translations,this.images=i.images?i.images.map(o=>new S.W(o)):[],this.suggestions=i.suggestions?i.suggestions.map(o=>new m(o)):[],this.tags=i.tags?i.tags.map(o=>new e.E(o)):[],this.allergens=i.allergens?i.allergens.map(o=>new c.o(o)):[],this.ingredients=i.ingredients?i.ingredients.map(o=>new n.e(o)):[]}}},532:(h,u,t)=>{t.d(u,{e:()=>e});var l=t(8400),S=t(2264);class e extends l.w{constructor(n){super(n),this.name=n.name,this.description=n.description,this.status=n.status,this.other=n.other,this.translations={...n.translations},n.image&&(this.image=new S.W(n.image))}}},355:(h,u,t)=>{t.d(u,{E:()=>e});var l=t(8400),S=t(2264);class e extends l.w{constructor(n){super(n),this.name=n.name,this.description=n.description,this.status=n.status,this.other=n.other,this.translations={...n.translations},this.color=n.color,n.image&&(this.image=new S.W(n.image))}}},8676:(h,u,t)=>{t.d(u,{k:()=>n});var l=t(6012),S=t(5891),e=t(4704),c=t(4496);let n=(()=>{class m extends l.s{constructor(){super(S.S,"admin/menu/dishes")}copy(i,o){return this.post(`${i}/copy`,o).pipe((0,e.k)(_=>this.mapItem(_)))}move(i,o){return this.patch(`${i}/move`,o).pipe((0,e.k)(_=>this.mapItem(_)))}moveIngredient(i,o,_){return this.patch(`${i}/ingredients/${o}/move`,{to_index:_}).pipe((0,e.k)(d=>this.mapItem(d)))}moveTag(i,o,_){return this.patch(`${i}/tags/${o}/move`,{to_index:_}).pipe((0,e.k)(d=>this.mapItem(d)))}moveAllergen(i,o,_){return this.patch(`${i}/allergens/${o}/move`,{to_index:_}).pipe((0,e.k)(d=>this.mapItem(d)))}updateStatus(i,o){return this.patch(`${i}/status/${o}`,{}).pipe((0,e.k)(_=>this.mapItem(_)))}addIngredient(i,o){return this.post(`${i}/ingredients/${o}`,{}).pipe((0,e.k)(_=>this.mapItem(_)))}removeIngredient(i,o){return this.delete(`${i}/ingredients/${o}`).pipe((0,e.k)(_=>this.mapItem(_)))}addTag(i,o){return this.post(`${i}/tags/${o}`,{}).pipe((0,e.k)(_=>this.mapItem(_)))}removeTag(i,o){return this.delete(`${i}/tags/${o}`).pipe((0,e.k)(_=>this.mapItem(_)))}addAllergen(i,o){return this.post(`${i}/allergens/${o}`,{}).pipe((0,e.k)(_=>this.mapItem(_)))}removeAllergen(i,o){return this.delete(`${i}/allergens/${o}`).pipe((0,e.k)(_=>this.mapItem(_)))}references(i){return this.get(`${i}/references`).pipe((0,e.k)(o=>o))}addSuggestion(i,o){return this.post(`${i}/suggestions/${o}`,{}).pipe((0,e.k)(_=>this.mapItem(_)))}removeSuggestion(i,o){return this.delete(`${i}/suggestions/${o}`).pipe((0,e.k)(_=>this.mapItem(_)))}static#e=this.\u0275fac=function(o){return new(o||m)};static#i=this.\u0275prov=c.wxM({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()}}]);