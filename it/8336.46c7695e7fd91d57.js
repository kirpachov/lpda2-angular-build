"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[8336],{8336:(v,N,o)=>{o.r(N),o.d(N,{DuplicateCategoryModule:()=>X});var t=o(2992),R=o(7552),e=o(4496),S=o(1712),h=o(3480),a=o(6504),n=o(9852),r=o(3616),E=o(8824),d=o(1128),c=o(5820),f=o(8256),_=o(9938),P=o(6524),I=o(9956),D=o(8976),s=o(8212),g=o(9880),i=o(1512),l=o(5704),T=o(8392),m=o(9088);let H=(()=>{class p{constructor(){this.destroy$=(0,e.uUt)(h.UF),this.router=(0,e.uUt)(t.E5),this.route=(0,e.uUt)(t.gV),this.service=(0,e.uUt)(S.S),this.notifications=(0,e.uUt)(d.E),this.submitted=!1,this.category=(0,e.OCB)(null),this.form=new a.WC({copy_dishes:new a.Ku("full",[a.AQ.required,n.S.in(["full","link","none"])]),copy_images:new a.Ku("full",[a.AQ.required,n.S.in(["full","link","none"])]),copy_children:new a.Ku("full",[a.AQ.required,n.S.in(["full","none"])]),create_as_root:new a.Ku(!1),parent:new a.Ku(null,[n.S.instanceof(c.Q)])}),this.saving=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.saving()),this.e=this.getErrorsFor}ngOnInit(){this.route.parent?.parent?.params.pipe((0,r.a)(this.destroy$)).subscribe({next:C=>{this.loadCategory(C.category_id)}})}submit(){if(this.submitted=!0,this.form.invalid)return;const C=this.category()?.id;if(!C)throw new Error(`Category id invalid: ${C}`);this.saving.set(!0),this.service.copy(C,this.formValue()).pipe((0,r.a)(this.destroy$),(0,E.U)(()=>this.saving.set(!1))).subscribe({next:u=>{this.notifications.fireSnackBar("Duplicato."),this.router.navigate(["../..",u.id],{relativeTo:this.route})},error:u=>{this.manageError(u)}})}cancel(){(this.form.touched||this.form.dirty)&&!confirm("Sei sicuro di voler annullare le modifiche fatte?")||(this.notifications.fireSnackBar("Operazione annullata"),this.navigateBack())}formValue(){return{copy_dishes:this.form.value.copy_dishes,copy_images:this.form.value.copy_images,copy_children:this.form.value.copy_children,parent_id:this.form.value.create_as_root?null:this.form.value.parent?.id??null}}navigateBack(){this.router.navigate([".."],{relativeTo:this.route})}manageError(C){422==C.status?_.y.assignErrorsToForm(this.form,C):this.notifications.error((0,f.mk)(C)||T.a)}getErrorsFor(C){const u=this.form.get(C);return u&&(this.submitted||u.touched||u.dirty)?u.errors:null}loadCategory(C){C&&this.service.show(C).pipe((0,r.a)(this.destroy$)).subscribe({next:u=>{this.category.set(u)},error:u=>{this.notifications.error((0,f.mk)(u)||T.a)}})}static#e=this.\u0275fac=function(u){return new(u||p)};static#t=this.\u0275cmp=e.In1({type:p,selectors:[["app-duplicate-category"]],standalone:!0,features:[e.M5G([h.UF]),e.UHJ],decls:67,vars:33,consts:()=>{let C,u,O,M,y,G,L,$,U,Y,B,x,k,z;return C="Copia categoria",u="Creare la nuova categoria come:",O="Men\xF9 principale",M="Categoria padre della nuova categoria:",y="Copiare sotto-categorie?",G="Copia",L="Copiare piatti?",$="Copia",U="Associa esistenti",Y="Copiare immagini?",B="Copia",x="Associa esistenti",k="Conferma",z="Annulla",[[1,"flex","items-center"],C,[1,"ml-2"],["tuiLink","",3,"routerLink"],[3,"formGroup","ngSubmit"],[1,"mb-3"],u,["tuiGroup","",1,"group",3,"collapsed"],["contentAlign","right","size","l",3,"hideRadio","formControlName","item"],O,[3,"errors"],[3,"expanded"],[3,"formControlName"],M,y,["contentAlign","right","formControlName","copy_children","item","full","size","l",3,"hideRadio"],G,["contentAlign","right","formControlName","copy_children","item","none","size","l",3,"hideRadio"],L,["contentAlign","right","formControlName","copy_dishes","item","full","size","l",3,"hideRadio"],$,["contentAlign","right","formControlName","copy_dishes","item","link","size","l",3,"hideRadio"],U,["contentAlign","right","formControlName","copy_dishes","item","none","size","l",3,"hideRadio"],Y,["contentAlign","right","formControlName","copy_images","item","full","size","l",3,"hideRadio"],B,["contentAlign","right","formControlName","copy_images","item","link","size","l",3,"hideRadio"],x,["contentAlign","right","formControlName","copy_images","item","none","size","l",3,"hideRadio"],["type","submit","size","l","tuiButton","",1,"me-2",3,"appearance"],k,["type","button","size","l","tuiButton","",1,"me-2",3,"appearance","click"],z]},template:function(u,O){if(1&u&&(e.I0R(0,"div",0)(1,"h1"),e.aS0(2,1),e.C$Y(),e.I0R(3,"span",2)(4,"a",3),e.wVc(5,"urlTo"),e.OEk(6),e.C$Y()()(),e.I0R(7,"form",4),e.qCj("ngSubmit",function(){return O.submit()}),e.I0R(8,"div",5)(9,"p"),e.aS0(10,6),e.C$Y(),e.I0R(11,"div",7)(12,"tui-radio-block",8),e.SAx(13),e.aS0(14,9),e.k70(),e.C$Y(),e.I0R(15,"tui-radio-block",8),e.OEk(16," Sotto-categoria "),e.C$Y()(),e.wR5(17,"app-errors",10),e.C$Y(),e.I0R(18,"tui-expand",11)(19,"div",5)(20,"app-menu-category-select",12),e.SAx(21),e.aS0(22,13),e.k70(),e.C$Y(),e.wR5(23,"app-errors",10),e.C$Y()(),e.I0R(24,"div",5)(25,"p"),e.aS0(26,14),e.C$Y(),e.I0R(27,"div",7)(28,"tui-radio-block",15),e.SAx(29),e.aS0(30,16),e.k70(),e.C$Y(),e.I0R(31,"tui-radio-block",17),e.OEk(32," No "),e.C$Y()(),e.wR5(33,"app-errors",10),e.C$Y(),e.I0R(34,"div",5)(35,"p"),e.aS0(36,18),e.C$Y(),e.I0R(37,"div",7)(38,"tui-radio-block",19),e.SAx(39),e.aS0(40,20),e.k70(),e.C$Y(),e.I0R(41,"tui-radio-block",21),e.SAx(42),e.aS0(43,22),e.k70(),e.C$Y(),e.I0R(44,"tui-radio-block",23),e.OEk(45," No "),e.C$Y()(),e.wR5(46,"app-errors",10),e.C$Y(),e.I0R(47,"div",5)(48,"p"),e.aS0(49,24),e.C$Y(),e.I0R(50,"div",7)(51,"tui-radio-block",25),e.SAx(52),e.aS0(53,26),e.k70(),e.C$Y(),e.I0R(54,"tui-radio-block",27),e.SAx(55),e.aS0(56,28),e.k70(),e.C$Y(),e.I0R(57,"tui-radio-block",29),e.OEk(58," No "),e.C$Y()(),e.wR5(59,"app-errors",10),e.C$Y(),e.I0R(60,"div",0)(61,"button",30),e.SAx(62),e.aS0(63,31),e.k70(),e.C$Y(),e.I0R(64,"button",32),e.qCj("click",function(){return O.cancel()}),e.SAx(65),e.aS0(66,33),e.k70(),e.C$Y()()()),2&u){let M,y;e.yG2(4),e.E7m("routerLink",e.g7$(5,30,null==(M=O.category())?null:M.id,"menuCategory.show")),e.yG2(2),e.cNF(null==(y=O.category())?null:y.name),e.yG2(),e.E7m("formGroup",O.form),e.yG2(4),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0)("formControlName","create_as_root")("item",!0),e.yG2(3),e.E7m("hideRadio",!0)("formControlName","create_as_root")("item",!1),e.yG2(2),e.E7m("errors",O.e("create_as_root")),e.yG2(),e.E7m("expanded",!O.form.value.create_as_root),e.yG2(2),e.E7m("formControlName","parent"),e.yG2(3),e.E7m("errors",O.e("parent")),e.yG2(4),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(2),e.E7m("errors",O.e("copy_children")),e.yG2(4),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(2),e.E7m("errors",O.e("copy_dishes")),e.yG2(4),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(2),e.E7m("errors",O.e("copy_images")),e.yG2(2),e.E7m("appearance","primary"),e.yG2(3),e.E7m("appearance","outline")}},dependencies:[a.sl,a.sz,a.ue,a.u,a.uW,a.Wo,P.a,I.g,D.Gy,D.Ko,l.W,l.I,s.CI,s.Kw,g.kh,g.st,i.w,i.C,t.ER,m.S],changeDetection:0})}return p})(),X=(()=>{class p{static#e=this.\u0275fac=function(u){return new(u||p)};static#t=this.\u0275mod=e.a4G({type:p});static#n=this.\u0275inj=e.s3X({imports:[t.qQ.forChild([(0,R.VV)(H,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return p})()},9852:(v,N,o)=>{o.d(N,{S:()=>h});var t=o(6504),R=o(400);const e=a=>null!=a&&""!=`${a}`;class h extends t.AQ{static formWeeklyFromTo(n,r){return E=>{if(!(E instanceof t.WC))return console.warn("formWeeklyFromTo: param is not a FormGroup",E),null;const d=E,c=d.get(n),f=d.get(r);return c&&f&&c.value instanceof R.uc&&f.value instanceof R.uc&&c.value&&f.value&&c.value.toAbsoluteMilliseconds()>=f.value.toAbsoluteMilliseconds()?{formWeeklyFromTo:!0}:null}}static canBeBlankIf(n,r,E){const d=E?.message||"La form non \xE8 valida.";return c=>{if(!(c instanceof t.WC))throw new Error("canBeBlankIf: thisIsAFormGroup is not a FormGroup");const _=c.get(n);if(!_)throw new Error("canBeBlankIf: control is blank. control name: "+n);return e(_.value)||r()?null:{[`${n}canBeBlankIf`]:d}}}static listOfEmails(n){const r=n.value;if(!r||"string"!=typeof r||!r.length)return null;const E=new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$","i");return r.split(/\,|\s+/gm).map(d=>d.trim()).filter(d=>d.length).forEach(d=>{if(!E.test(d))return{listOfEmails:!0}}),null}static mustBeArray(n){return Array.isArray(n.value)?null:{mustBeArray:!0}}static objectNotEmpty(n){return e(n.value)&&"object"==typeof n.value&&0===Object.keys(n.value).length&&0===Object.values(n.value).filter(E=>e(E)).length?{objectNotEmpty:!0}:null}static arrayMinLength(n){return r=>Array.isArray(r.value)&&r.value.length<n?{arrayMinLength:{requiredLength:n,actualLength:r.value?.length??0}}:null}static validateArray(n){return r=>{if(!Array.isArray(r.value))return null;const E={};for(const d of r.value){const c=n(new t.yM(d));c&&Object.assign(E,c)}return Object.keys(E).length?E:null}}static percentage(n){return e(n.value)&&(isNaN(n.value)||n.value<0||n.value>100)?{percentage:!0}:null}static phoneIT(n){const r=d=>d?null:{phoneIT:!0},E=`${n.value}`.trim().replace(/\s+/gm,"").replace(/^\+39/gm,"");return e(E)?r(!((a=E).length<9||isNaN(Number(a))||a.length>14)):r(!0);var a}static instanceof(n){return r=>!e(r.value)||r.value instanceof n?null:{instanceof:!0}}static#e=this.instanceOf=this.instanceof;static numerical(n){return e(n.value)&&isNaN(n.value)?{numerical:!0}:null}static moreThan(n){return r=>r.value<=n?{moreThan:!0}:null}static in(n){return this.inclusion(n)}static inclusion(n){return r=>e(r.value)&&!n.includes(r.value)?{inclusion:!0}:null}}},9880:(v,N,o)=>{o.d(N,{kP:()=>f,kh:()=>D,st:()=>I});var t=o(4496),R=o(3480),e=o(4392),S=o(3120),h=o(3616),a=o(7692),n=o(1368);const r=["wrapper"];function E(s,g){if(1&s&&(t.I0R(0,"tui-loader",4),t.C_f(1,5),t.C$Y()),2&s){const i=t.GaO(2);t.E7m("overlay",!0)("showLoader",i.loading),t.yG2(),t.E7m("ngTemplateOutlet",i.content)}}function d(s,g){if(1&s&&(t.SAx(0),t._Xx(1),t.yuY(2,E,2,3,"tui-loader",3),t.k70()),2&s){const i=t.GaO();t.yG2(2),t.E7m("ngIf",i.async)("ngIfElse",i.content)}}const c=["*"];let f=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275dir=t.Sc5({type:s,selectors:[["","tuiExpandContent",""]]}),s})();let I=(()=>{class s{constructor(i,l){this.cdr=i,this.destroy$=l,this.state=0,this.async=!1,this.content=null,this.expanded=null}set expandedSetter(i){if(null!==this.expanded)return 0!==this.state?(this.expanded=i,void(this.state=3)):(this.expanded=i,void this.retrigger(this.async&&i?1:3));this.expanded=i}get overflow(){return 0!==this.state}get loading(){return!!this.expanded&&this.async&&1===this.state}get height(){const{expanded:i,state:l,contentWrapper:T}=this;return i&&2===l||!i&&3===l?0:T&&(!i&&2===l||i&&3===l)?T.nativeElement.offsetHeight:T&&i&&1===l?Math.max(T.nativeElement.offsetHeight,48):null}get contentVisible(){return this.expanded||0!==this.state}onTransitionEnd({propertyName:i}){"opacity"===i&&3===this.state&&(this.state=0)}onExpandLoaded(i){i.stopPropagation(),1===this.state&&this.retrigger(3)}retrigger(i){this.state=2,(0,S.k)(0).pipe((0,h.a)(this.destroy$)).subscribe(()=>{2===this.state&&(this.state=i,this.cdr.markForCheck())})}}return s.\u0275fac=function(i){return new(i||s)(t.GI1(t.kD9),t.GI1(R.UF,2))},s.\u0275cmp=t.In1({type:s,selectors:[["tui-expand"]],contentQueries:function(i,l,T){if(1&i&&t.szK(T,f,5,t.Yw2),2&i){let m;t.wto(m=t.Gqi())&&(l.content=m.first)}},viewQuery:function(i,l){if(1&i&&t.CC$(r,5),2&i){let T;t.wto(T=t.Gqi())&&(l.contentWrapper=T.first)}},hostVars:9,hostBindings:function(i,l){1&i&&t.qCj("transitionend.self",function(m){return l.onTransitionEnd(m)})("tui-expand-loaded",function(m){return l.onExpandLoaded(m)}),2&i&&(t.e48("aria-expanded",l.expanded),t.m4B("height",l.height,"px"),t.eAK("_expanded",l.expanded)("_overflow",l.overflow)("_loading",l.loading))},inputs:{async:"async",expandedSetter:[t.Wk5.None,"expanded","expandedSetter"]},features:[t.M5G([R.UF])],ngContentSelectors:c,decls:3,vars:3,consts:[[1,"t-wrapper"],["wrapper",""],[4,"ngIf"],["size","l",3,"overlay","showLoader",4,"ngIf","ngIfElse"],["size","l",3,"overlay","showLoader"],[3,"ngTemplateOutlet"]],template:function(i,l){1&i&&(t.kPM(),t.I0R(0,"div",0,1),t.yuY(2,d,3,2,"ng-container",2),t.C$Y()),2&i&&(t.E7m("@tuiParentAnimation",void 0)("@.disabled",l.overflow),t.yG2(2),t.E7m("ngIf",l.contentVisible))},dependencies:[a.Cb,n.u_,n.XV],styles:['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],data:{animation:[e.cI]},changeDetection:0}),s})(),D=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.a4G({type:s}),s.\u0275inj=t.s3X({imports:[[n.MD,a.Sk]]}),s})()}}]);