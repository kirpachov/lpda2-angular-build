(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[3632],{83632:(v,h,i)=>{"use strict";i.r(h),i.d(h,{DuplicateDishModule:()=>q});var s=i(31236),m=i(7552),e=i(54496),M=i(83480),a=i(11712),D=i(1128),y=i(45820),n=i(6504),t=i(89852),o=i(53616),u=i(54704),g=i(66684),_=i(68824),A=i(38256),R=i(48392),L=i(9938),d=i(99956),S=i(58212),r=i(78976),c=i(19880),f=i(41512),N=i(27692),H=i(75704),$=i(32204),U=i(49088),F=i(38676),V=i(6524),j=i(91368),C=i(8560);function Q(O,B){if(1&O&&(e.I0R(0,"div",6)(1,"p",18),e.aS0(2,19),e.C$Y(),e.I0R(3,"div",20)(4,"tui-radio-block",21),e.SAx(5),e.aS0(6,22),e.k70(),e.C$Y(),e.I0R(7,"tui-radio-block",23),e.SAx(8),e.aS0(9,24),e.k70(),e.C$Y(),e.I0R(10,"tui-radio-block",25),e.OEk(11," No "),e.C$Y()(),e.wR5(12,"app-errors",10),e.C$Y(),e.I0R(13,"div",6)(14,"p",18),e.aS0(15,26),e.C$Y(),e.I0R(16,"div",20)(17,"tui-radio-block",27),e.SAx(18),e.aS0(19,28),e.k70(),e.C$Y(),e.I0R(20,"tui-radio-block",29),e.OEk(21," No "),e.C$Y()(),e.wR5(22,"app-errors",10),e.C$Y(),e.I0R(23,"div",6)(24,"p",18),e.aS0(25,30),e.C$Y(),e.I0R(26,"div",20)(27,"tui-radio-block",31),e.SAx(28),e.aS0(29,32),e.k70(),e.C$Y(),e.I0R(30,"tui-radio-block",33),e.OEk(31," No "),e.C$Y()(),e.wR5(32,"app-errors",10),e.C$Y(),e.I0R(33,"div",6)(34,"p",18),e.aS0(35,34),e.C$Y(),e.I0R(36,"div",20)(37,"tui-radio-block",35),e.SAx(38),e.aS0(39,36),e.k70(),e.C$Y(),e.I0R(40,"tui-radio-block",37),e.OEk(41," No "),e.C$Y()(),e.wR5(42,"app-errors",10),e.C$Y()),2&O){const l=e.GaO();e.yG2(3),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(2),e.E7m("errors",l.e("copy_images")),e.yG2(4),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(2),e.E7m("errors",l.e("copy_ingredients")),e.yG2(4),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(2),e.E7m("errors",l.e("copy_tags")),e.yG2(4),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(2),e.E7m("errors",l.e("copy_allergens"))}}const J=(O,B)=>({categoryId:O,itemId:B});let Z=(()=>{class O{constructor(){this.destroy$=(0,e.uUt)(M.UF),this.router=(0,e.uUt)(s.E5),this.route=(0,e.uUt)(s.gV),this.service=(0,e.uUt)(a.S),this.dishesService=(0,e.uUt)(F.k),this.notifications=(0,e.uUt)(D.E),this.urlTo=(0,e.uUt)(U.S),this.submitted=!1,this.category=(0,e.OCB)(null),this.dish=(0,e.OCB)(null),this.form=new n.WC({category:new n.Ku(null,[n.AQ.required,t.S.instanceof(y.Q)]),copy_images:new n.Ku("full",[n.AQ.required,t.S.in(["full","link","none"])]),copy_ingredients:new n.Ku("link",[n.AQ.required,t.S.in(["link","none"])]),copy_tags:new n.Ku("link",[n.AQ.required,t.S.in(["link","none"])]),copy_allergens:new n.Ku("link",[n.AQ.required,t.S.in(["link","none"])])}),this.loadingCategory=(0,e.OCB)(!1),this.loadingDish=(0,e.OCB)(!1),this.saving=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.saving()||this.loadingDish()||this.loadingCategory()),this.e=this.getErrorsFor}ngOnInit(){this.route.parent?.parent?.params.pipe((0,o.a)(this.destroy$),(0,u.k)(l=>Number(l.category_id)),(0,g.I)(l=>"number"==typeof l&&!isNaN(l)&&l>0)).subscribe({next:l=>this.loadCategory(l)}),this.route.params.pipe((0,o.a)(this.destroy$),(0,u.k)(l=>Number(l.dish_id)),(0,g.I)(l=>"number"==typeof l&&!isNaN(l)&&l>0)).subscribe({next:l=>this.loadDish(l)})}submit(){if(this.submitted=!0,this.form.invalid)return;const l=this.dish()?.id,E=this.formValue(),p=E.category_id;if(!l||!p)throw new Error(`some invalid id: dishId=${l}; categoryId=${p}`);this.saving.set(!0),this.dishesService.copy(l,E).pipe((0,o.a)(this.destroy$),(0,_.U)(()=>this.saving.set(!1))).subscribe({next:I=>{this.notifications.fireSnackBar(C.$localize`Duplicato.`);const P=this.urlTo.transform({itemId:I.id,categoryId:p},"dish.show");P?this.router.navigateByUrl(P):(console.error("no url for dish",I,p),this.navigateBack())},error:I=>{this.manageError(I)}})}cancel(){(this.form.touched||this.form.dirty)&&!confirm(C.$localize`Sei sicuro di voler annullare le modifiche fatte?`)||(this.notifications.fireSnackBar(C.$localize`Operazione annullata`),this.navigateBack())}formValue(){return{copy_tags:this.form.value.copy_tags,copy_images:this.form.value.copy_images,copy_ingredients:this.form.value.copy_ingredients,copy_allergens:this.form.value.copy_allergens,category_id:this.form.value.category?.id}}navigateBack(){this.router.navigate([".."],{relativeTo:this.route})}manageError(l){422==l.status?L.y.assignErrorsToForm(this.form,l):this.notifications.error((0,A.mk)(l)||R.a)}getErrorsFor(l){const E=this.form.get(l);return E&&(this.submitted||E.touched||E.dirty)?E.errors:null}loadCategory(l){l&&(this.loadingCategory.set(!0),this.service.show(l).pipe((0,o.a)(this.destroy$),(0,_.U)(()=>this.loadingCategory.set(!1))).subscribe({next:E=>{this.category.set(E),!this.form.touched&&!this.form.dirty&&this.form.patchValue({category:E})},error:E=>{this.notifications.error((0,A.mk)(E)||R.a)}}))}loadDish(l){l&&(this.loadingDish.set(!0),this.dishesService.show(l).pipe((0,o.a)(this.destroy$),(0,_.U)(()=>this.loadingDish.set(!1))).subscribe({next:E=>this.dish.set(E),error:E=>{this.notifications.error((0,A.mk)(E)||R.a)}}))}static#e=this.\u0275fac=function(E){return new(E||O)};static#t=this.\u0275cmp=e.In1({type:O,selectors:[["app-duplicate-dish"]],standalone:!0,features:[e.M5G([M.UF,U.S]),e.UHJ],decls:30,vars:18,consts:()=>{let l,E,p,I,P,G,x,k,z,W,K,X,Y,b,w;return l=C.$localize`Copia piatto`,E=C.$localize`Associa il nuovo piatto alla categoria`,p=C.$localize`Seleziona una categoria`,I=C.$localize`Dettagli`,P=C.$localize`Conferma`,G=C.$localize`Annulla`,x=C.$localize`Copiare immagini?`,k=C.$localize`Copia`,z=C.$localize`Associa esistenti`,W=C.$localize`Copiare ingredienti?`,K=C.$localize`Associa esistenti`,X=C.$localize`Copiare tag?`,Y=C.$localize`Associa esistenti`,b=C.$localize`Copiare allergeni?`,w=C.$localize`Associa esistenti`,[["size","l",3,"showLoader","overlay"],[1,"flex","items-center"],l,[1,"ml-2"],["tuiLink","",3,"routerLink"],[3,"formGroup","ngSubmit"],[1,"mb-3"],E,[3,"formControlName"],p,[3,"errors"],I,["tuiAccordionItemContent",""],[3,"innerText"],["type","submit","size","l","tuiButton","",1,"me-2",3,"appearance"],P,["type","button","size","l","tuiButton","",1,"me-2",3,"appearance","click"],G,[1,"mb-1"],x,["tuiGroup","",1,"group",3,"collapsed"],["contentAlign","right","formControlName","copy_images","item","full","size","l",3,"hideRadio"],k,["contentAlign","right","formControlName","copy_images","item","link","size","l",3,"hideRadio"],z,["contentAlign","right","formControlName","copy_images","item","none","size","l",3,"hideRadio"],W,["contentAlign","right","formControlName","copy_ingredients","item","link","size","l",3,"hideRadio"],K,["contentAlign","right","formControlName","copy_ingredients","item","none","size","l",3,"hideRadio"],X,["contentAlign","right","formControlName","copy_tags","item","link","size","l",3,"hideRadio"],Y,["contentAlign","right","formControlName","copy_tags","item","none","size","l",3,"hideRadio"],b,["contentAlign","right","formControlName","copy_allergens","item","link","size","l",3,"hideRadio"],w,["contentAlign","right","formControlName","copy_allergens","item","none","size","l",3,"hideRadio"]]},template:function(E,p){if(1&E&&(e.I0R(0,"tui-loader",0)(1,"div",1)(2,"h1"),e.aS0(3,2),e.C$Y(),e.I0R(4,"span",3)(5,"a",4),e.wVc(6,"urlTo"),e.OEk(7),e.C$Y()()(),e.I0R(8,"form",5),e.qCj("ngSubmit",function(){return p.submit()}),e.I0R(9,"div",6)(10,"p"),e.aS0(11,7),e.C$Y(),e.I0R(12,"app-menu-category-select",8),e.SAx(13),e.aS0(14,9),e.k70(),e.C$Y(),e.wR5(15,"app-errors",10),e.C$Y(),e.I0R(16,"tui-accordion",6)(17,"tui-accordion-item"),e.SAx(18),e.aS0(19,11),e.k70(),e.yuY(20,Q,43,17,"ng-template",12),e.C$Y()(),e.wR5(21,"pre",13),e.wVc(22,"json"),e.I0R(23,"div",1)(24,"button",14),e.SAx(25),e.aS0(26,15),e.k70(),e.C$Y(),e.I0R(27,"button",16),e.qCj("click",function(){return p.cancel()}),e.SAx(28),e.aS0(29,17),e.k70(),e.C$Y()()()()),2&E){let I,P;e.E7m("showLoader",p.loading())("overlay",!0),e.yG2(5),e.E7m("routerLink",e.g7$(6,10,e.IBC(15,J,null==(I=p.category())?null:I.id,null==(I=p.dish())?null:I.id),"dish.show")),e.yG2(2),e.cNF(null==(P=p.dish())?null:P.name),e.yG2(),e.E7m("formGroup",p.form),e.yG2(4),e.E7m("formControlName","category"),e.yG2(3),e.E7m("errors",p.e("category")),e.yG2(6),e.E7m("innerText",e.kDX(22,13,p.formValue())),e.yG2(3),e.E7m("appearance","primary"),e.yG2(3),e.E7m("appearance","outline")}},dependencies:[d.g,S.CI,S.Kw,H.W,H.I,n.sl,n.sz,n.ue,n.u,n.uW,n.Wo,r.Gy,r.Ko,c.kh,s.ER,f.w,f.C,U.S,V.a,$.Ep,$.Ix,$._Q,$.Up,j.ED,N.Sk,N.Cb],changeDetection:0})}return O})(),q=(()=>{class O{static#e=this.\u0275fac=function(E){return new(E||O)};static#t=this.\u0275mod=e.a4G({type:O});static#n=this.\u0275inj=e.s3X({imports:[s.qQ.forChild([(0,m.VV)(Z,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return O})()},89852:(v,h,i)=>{"use strict";i.d(h,{S:()=>y});var s=i(6504),m=i(400),e=i(19664);const a=n=>null!=n&&""!=`${n}`;class y extends s.AQ{static formWeeklyFromTo(t,o){return u=>{if(!(u instanceof s.WC))return console.warn("formWeeklyFromTo: param is not a FormGroup",u),null;const g=u,_=g.get(t),A=g.get(o);return _&&A&&_.value instanceof m.uc&&A.value instanceof m.uc&&_.value&&A.value&&_.value.toAbsoluteMilliseconds()>=A.value.toAbsoluteMilliseconds()?{formWeeklyFromTo:!0}:null}}static canBeBlankIf(t,o,u){const g=u?.message||e.$localize`La form non è valida.`;return _=>{if(!(_ instanceof s.WC))throw new Error("canBeBlankIf: thisIsAFormGroup is not a FormGroup");const R=_.get(t);if(!R)throw new Error("canBeBlankIf: control is blank. control name: "+t);return a(R.value)||o()?null:{[`${t}canBeBlankIf`]:g}}}static listOfEmails(t){const o=t.value;if(!o||"string"!=typeof o||!o.length)return null;const u=new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$","i");return o.split(/\,|\s+/gm).map(g=>g.trim()).filter(g=>g.length).forEach(g=>{if(!u.test(g))return{listOfEmails:!0}}),null}static mustBeArray(t){return Array.isArray(t.value)?null:{mustBeArray:!0}}static objectNotEmpty(t){return a(t.value)&&"object"==typeof t.value&&0===Object.keys(t.value).length&&0===Object.values(t.value).filter(u=>a(u)).length?{objectNotEmpty:!0}:null}static arrayMinLength(t){return o=>Array.isArray(o.value)&&o.value.length<t?{arrayMinLength:{requiredLength:t,actualLength:o.value?.length??0}}:null}static validateArray(t){return o=>{if(!Array.isArray(o.value))return null;const u={};for(const g of o.value){const _=t(new s.yM(g));_&&Object.assign(u,_)}return Object.keys(u).length?u:null}}static percentage(t){return a(t.value)&&(isNaN(t.value)||t.value<0||t.value>100)?{percentage:!0}:null}static phoneIT(t){const o=g=>g?null:{phoneIT:!0},u=`${t.value}`.trim().replace(/\s+/gm,"").replace(/^\+39/gm,"");return a(u)?o(!((n=u).length<9||isNaN(Number(n))||n.length>14)):o(!0);var n}static instanceof(t){return o=>!a(o.value)||o.value instanceof t?null:{instanceof:!0}}static#e=this.instanceOf=this.instanceof;static numerical(t){return a(t.value)&&isNaN(t.value)?{numerical:!0}:null}static moreThan(t){return o=>o.value<=t?{moreThan:!0}:null}static in(t){return this.inclusion(t)}static inclusion(t){return o=>a(o.value)&&!t.includes(o.value)?{inclusion:!0}:null}}},34824:(v,h,i)=>{"use strict";i.d(h,{o:()=>e});var s=i(58400),m=i(22264);class e extends s.w{constructor(a){super(a),this.name=a.name,this.description=a.description,this.status=a.status,this.other=a.other,this.translations={...a.translations},a.image&&(this.image=new m.W(a.image))}}},28272:(v,h,i)=>{"use strict";i.d(h,{S:()=>D});var s=i(58400),m=i(22264),e=i(70355),M=i(34824),a=i(60532);class D extends s.w{constructor(n){super(n),this.name=n.name,this.description=n.description,this.status=n.status,this.price=n.price,this.translations=n.translations,this.images=n.images?n.images.map(t=>new m.W(t)):[],this.suggestions=n.suggestions?n.suggestions.map(t=>new D(t)):[],this.tags=n.tags?n.tags.map(t=>new e.E(t)):[],this.allergens=n.allergens?n.allergens.map(t=>new M.o(t)):[],this.ingredients=n.ingredients?n.ingredients.map(t=>new a.e(t)):[]}}},60532:(v,h,i)=>{"use strict";i.d(h,{e:()=>e});var s=i(58400),m=i(22264);class e extends s.w{constructor(a){super(a),this.name=a.name,this.description=a.description,this.status=a.status,this.other=a.other,this.translations={...a.translations},a.image&&(this.image=new m.W(a.image))}}},70355:(v,h,i)=>{"use strict";i.d(h,{E:()=>e});var s=i(58400),m=i(22264);class e extends s.w{constructor(a){super(a),this.name=a.name,this.description=a.description,this.status=a.status,this.other=a.other,this.translations={...a.translations},this.color=a.color,a.image&&(this.image=new m.W(a.image))}}},38676:(v,h,i)=>{"use strict";i.d(h,{k:()=>a});var s=i(36012),m=i(28272),e=i(54704),M=i(54496);let a=(()=>{class D extends s.s{constructor(){super(m.S,"admin/menu/dishes")}copy(n,t){return this.post(`${n}/copy`,t).pipe((0,e.k)(o=>this.mapItem(o)))}move(n,t){return this.patch(`${n}/move`,t).pipe((0,e.k)(o=>this.mapItem(o)))}moveIngredient(n,t,o){return this.patch(`${n}/ingredients/${t}/move`,{to_index:o}).pipe((0,e.k)(u=>this.mapItem(u)))}moveTag(n,t,o){return this.patch(`${n}/tags/${t}/move`,{to_index:o}).pipe((0,e.k)(u=>this.mapItem(u)))}moveAllergen(n,t,o){return this.patch(`${n}/allergens/${t}/move`,{to_index:o}).pipe((0,e.k)(u=>this.mapItem(u)))}updateStatus(n,t){return this.patch(`${n}/status/${t}`,{}).pipe((0,e.k)(o=>this.mapItem(o)))}addIngredient(n,t){return this.post(`${n}/ingredients/${t}`,{}).pipe((0,e.k)(o=>this.mapItem(o)))}removeIngredient(n,t){return this.delete(`${n}/ingredients/${t}`).pipe((0,e.k)(o=>this.mapItem(o)))}addTag(n,t){return this.post(`${n}/tags/${t}`,{}).pipe((0,e.k)(o=>this.mapItem(o)))}removeTag(n,t){return this.delete(`${n}/tags/${t}`).pipe((0,e.k)(o=>this.mapItem(o)))}addAllergen(n,t){return this.post(`${n}/allergens/${t}`,{}).pipe((0,e.k)(o=>this.mapItem(o)))}removeAllergen(n,t){return this.delete(`${n}/allergens/${t}`).pipe((0,e.k)(o=>this.mapItem(o)))}references(n){return this.get(`${n}/references`).pipe((0,e.k)(t=>t))}addSuggestion(n,t){return this.post(`${n}/suggestions/${t}`,{}).pipe((0,e.k)(o=>this.mapItem(o)))}removeSuggestion(n,t){return this.delete(`${n}/suggestions/${t}`).pipe((0,e.k)(o=>this.mapItem(o)))}static#e=this.\u0275fac=function(t){return new(t||D)};static#t=this.\u0275prov=M.wxM({token:D,factory:D.\u0275fac,providedIn:"root"})}return D})()},19880:(v,h,i)=>{"use strict";i.d(h,{kP:()=>g,kh:()=>L,st:()=>R});var s=i(54496),m=i(83480),e=i(64392),M=i(83120),a=i(53616),D=i(27692),y=i(91368);const n=["wrapper"];function t(d,S){if(1&d&&(s.I0R(0,"tui-loader",4),s.C_f(1,5),s.C$Y()),2&d){const r=s.GaO(2);s.E7m("overlay",!0)("showLoader",r.loading),s.yG2(),s.E7m("ngTemplateOutlet",r.content)}}function o(d,S){if(1&d&&(s.SAx(0),s._Xx(1),s.yuY(2,t,2,3,"tui-loader",3),s.k70()),2&d){const r=s.GaO();s.yG2(2),s.E7m("ngIf",r.async)("ngIfElse",r.content)}}const u=["*"];let g=(()=>{class d{}return d.\u0275fac=function(r){return new(r||d)},d.\u0275dir=s.Sc5({type:d,selectors:[["","tuiExpandContent",""]]}),d})();let R=(()=>{class d{constructor(r,c){this.cdr=r,this.destroy$=c,this.state=0,this.async=!1,this.content=null,this.expanded=null}set expandedSetter(r){if(null!==this.expanded)return 0!==this.state?(this.expanded=r,void(this.state=3)):(this.expanded=r,void this.retrigger(this.async&&r?1:3));this.expanded=r}get overflow(){return 0!==this.state}get loading(){return!!this.expanded&&this.async&&1===this.state}get height(){const{expanded:r,state:c,contentWrapper:f}=this;return r&&2===c||!r&&3===c?0:f&&(!r&&2===c||r&&3===c)?f.nativeElement.offsetHeight:f&&r&&1===c?Math.max(f.nativeElement.offsetHeight,48):null}get contentVisible(){return this.expanded||0!==this.state}onTransitionEnd({propertyName:r}){"opacity"===r&&3===this.state&&(this.state=0)}onExpandLoaded(r){r.stopPropagation(),1===this.state&&this.retrigger(3)}retrigger(r){this.state=2,(0,M.k)(0).pipe((0,a.a)(this.destroy$)).subscribe(()=>{2===this.state&&(this.state=r,this.cdr.markForCheck())})}}return d.\u0275fac=function(r){return new(r||d)(s.GI1(s.kD9),s.GI1(m.UF,2))},d.\u0275cmp=s.In1({type:d,selectors:[["tui-expand"]],contentQueries:function(r,c,f){if(1&r&&s.szK(f,g,5,s.Yw2),2&r){let N;s.wto(N=s.Gqi())&&(c.content=N.first)}},viewQuery:function(r,c){if(1&r&&s.CC$(n,5),2&r){let f;s.wto(f=s.Gqi())&&(c.contentWrapper=f.first)}},hostVars:9,hostBindings:function(r,c){1&r&&s.qCj("transitionend.self",function(N){return c.onTransitionEnd(N)})("tui-expand-loaded",function(N){return c.onExpandLoaded(N)}),2&r&&(s.e48("aria-expanded",c.expanded),s.m4B("height",c.height,"px"),s.eAK("_expanded",c.expanded)("_overflow",c.overflow)("_loading",c.loading))},inputs:{async:"async",expandedSetter:[s.Wk5.None,"expanded","expandedSetter"]},features:[s.M5G([m.UF])],ngContentSelectors:u,decls:3,vars:3,consts:[[1,"t-wrapper"],["wrapper",""],[4,"ngIf"],["size","l",3,"overlay","showLoader",4,"ngIf","ngIfElse"],["size","l",3,"overlay","showLoader"],[3,"ngTemplateOutlet"]],template:function(r,c){1&r&&(s.kPM(),s.I0R(0,"div",0,1),s.yuY(2,o,3,2,"ng-container",2),s.C$Y()),2&r&&(s.E7m("@tuiParentAnimation",void 0)("@.disabled",c.overflow),s.yG2(2),s.E7m("ngIf",c.contentVisible))},dependencies:[D.Cb,y.u_,y.XV],styles:['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],data:{animation:[e.cI]},changeDetection:0}),d})(),L=(()=>{class d{}return d.\u0275fac=function(r){return new(r||d)},d.\u0275mod=s.a4G({type:d}),d.\u0275inj=s.s3X({imports:[[y.MD,D.Sk]]}),d})()},8560:()=>{}}]);