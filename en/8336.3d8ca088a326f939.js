"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[8336],{9956:(P,M,l)=>{l.d(M,{g:()=>O});var r=l(1368),i=l(4496),e=l(9938),R=l(2528),d=l(7308),n=l(7012),o=l(3972),s=l(5944),u=l(1040);function c(t,_){if(1&t&&(i.SAx(0),i.OEk(1),i.k70()),2&t){const a=_.polymorpheusOutlet;i.yG2(),i.oRS(" ",a," ")}}const m=()=>({});function T(t,_){if(1&t&&(i.I0R(0,"div",1),i.wVc(1,"async"),i.yuY(2,c,2,1,"ng-container",2),i.wVc(3,"async"),i.C$Y()),2&t){const a=i.GaO();i.eAK("t-message-text_light","onDark"===i.kDX(1,6,a.mode$)),i.E7m("@tuiFadeIn",a.animation)("@tuiHeightCollapse",a.animation),i.yG2(2),i.E7m("polymorpheusOutlet",a.error.message||i.kDX(3,8,a.defaultErrorMessage$))("polymorpheusOutletContext",a.error.context||i.q4q(10,m))}}let E=(()=>{class t{constructor(a,f,N){this.animation=a,this.mode$=f,this.defaultErrorMessage$=N,this.error=null,this.visible=!0}set errorSetter(a){this.error=(0,R.gT)(a)?new d.E(a):a}onAnimation(a){this.visible=a}}return t.\u0275fac=function(a){return new(a||t)(i.GI1(s.kp),i.GI1(s.Yx),i.GI1(s.cX))},t.\u0275cmp=i.In1({type:t,selectors:[["tui-error"]],hostBindings:function(a,f){1&a&&i.qCj("animationcancel.self",function(){return f.onAnimation(!1)})("animationstart.self",function(){return f.onAnimation(!0)})},inputs:{errorSetter:[i.Wk5.None,"error","errorSetter"]},features:[i.M5G([o.Ir])],decls:1,vars:1,consts:[["automation-id","tui-error__text","class","t-message-text",3,"t-message-text_light",4,"ngIf"],["automation-id","tui-error__text",1,"t-message-text"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(a,f){1&a&&i.yuY(0,T,4,11,"div",0),2&a&&i.E7m("ngIf",f.error&&f.visible)},dependencies:[r.u_,u.Af,r.a],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);display:block;color:var(--tui-negative);word-wrap:break-word;animation:tuiPresent 1s infinite}.t-message-text[_ngcontent-%COMP%]{margin-top:.25rem;white-space:pre-line}.t-message-text_light[_ngcontent-%COMP%]{color:var(--tui-negative-night)}"],data:{animation:[n.iY,n.K2]},changeDetection:0}),t})(),D=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=i.a4G({type:t}),t.\u0275inj=i.s3X({imports:[[r.MD,u.Ux]]}),t})();function I(t,_){1&t&&i.wR5(0,"tui-error",0),2&t&&i.E7m("error",_.$implicit)}function y(t,_){1&t&&i.C_f(0)}function C(t,_){1&t&&i.yuY(0,y,1,0,"ng-container",1),2&t&&i.E7m("ngTemplateOutlet",_.$implicit)}let O=(()=>{class t{constructor(){this._errors=null}get errors(){return this._errors}set errors(a){this._errors=a}allErrors(){return this.errors||null}errorsToTemplates(){return e.y.formatErrors(this.errors||null).filter(a=>a&&a instanceof i.Yw2)}errorsToStr(){return e.y.formatErrors(this.errors||null).filter(a=>a&&"string"==typeof a)}static#e=this.\u0275fac=function(f){return new(f||t)};static#t=this.\u0275cmp=i.In1({type:t,selectors:[["app-errors"]],inputs:{errors:"errors"},standalone:!0,features:[i.UHJ],decls:4,vars:0,consts:[[3,"error"],[4,"ngTemplateOutlet"]],template:function(f,N){1&f&&(i.c53(0,I,1,1,"tui-error",0,i.oxv),i.c53(2,C,1,1,"ng-container",null,i.oxv)),2&f&&(i.oho(N.errorsToStr()),i.yG2(2),i.oho(N.errorsToTemplates()))},dependencies:[r.MD,r.XV,D,E]})}return t})()},8336:(P,M,l)=>{l.r(M),l.d(M,{DuplicateCategoryModule:()=>H});var r=l(2992),i=l(7552),e=l(4496),R=l(1712),d=l(3480),n=l(6504),o=l(9852),s=l(3616),u=l(8824),c=l(1128),m=l(5820),T=l(8256),E=l(9938),D=l(6524),I=l(9956),y=l(8976),C=l(8212),O=l(9880),t=l(1512),_=l(5704),a=l(8392),f=l(9088);let N=(()=>{class v{constructor(){this.destroy$=(0,e.uUt)(d.UF),this.router=(0,e.uUt)(r.E5),this.route=(0,e.uUt)(r.gV),this.service=(0,e.uUt)(R.S),this.notifications=(0,e.uUt)(c.E),this.submitted=!1,this.category=(0,e.OCB)(null),this.form=new n.WC({copy_dishes:new n.Ku("full",[n.AQ.required,o.S.in(["full","link","none"])]),copy_images:new n.Ku("full",[n.AQ.required,o.S.in(["full","link","none"])]),copy_children:new n.Ku("full",[n.AQ.required,o.S.in(["full","none"])]),create_as_root:new n.Ku(!1),parent:new n.Ku(null,[o.S.instanceof(m.Q)])}),this.saving=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.saving()),this.e=this.getErrorsFor}ngOnInit(){this.route.parent?.parent?.params.pipe((0,s.a)(this.destroy$)).subscribe({next:p=>{this.loadCategory(p.category_id)}})}submit(){if(this.submitted=!0,this.form.invalid)return;const p=this.category()?.id;if(!p)throw new Error(`Category id invalid: ${p}`);this.saving.set(!0),this.service.copy(p,this.formValue()).pipe((0,s.a)(this.destroy$),(0,u.U)(()=>this.saving.set(!1))).subscribe({next:g=>{this.notifications.fireSnackBar("Duplicate."),this.router.navigate(["../..",g.id],{relativeTo:this.route})},error:g=>{this.manageError(g)}})}cancel(){(this.form.touched||this.form.dirty)&&!confirm("Are you sure you want to undo the changes made?")||(this.notifications.fireSnackBar("Operation canceled"),this.navigateBack())}formValue(){return{copy_dishes:this.form.value.copy_dishes,copy_images:this.form.value.copy_images,copy_children:this.form.value.copy_children,parent_id:this.form.value.create_as_root?null:this.form.value.parent?.id??null}}navigateBack(){this.router.navigate([".."],{relativeTo:this.route})}manageError(p){422==p.status?E.y.assignErrorsToForm(this.form,p):this.notifications.error((0,T.mk)(p)||a.a)}getErrorsFor(p){const g=this.form.get(p);return g&&(this.submitted||g.touched||g.dirty)?g.errors:null}loadCategory(p){p&&this.service.show(p).pipe((0,s.a)(this.destroy$)).subscribe({next:g=>{this.category.set(g)},error:g=>{this.notifications.error((0,T.mk)(g)||a.a)}})}static#e=this.\u0275fac=function(g){return new(g||v)};static#t=this.\u0275cmp=e.In1({type:v,selectors:[["app-duplicate-category"]],standalone:!0,features:[e.M5G([d.UF]),e.UHJ],decls:67,vars:33,consts:()=>{let p,g,h,S,$,G,L,U,Y,x,z,B,F,b;return p="Copy category",g="Create the new category as:",h="Main menu",S="Parent category of the new category:",$="Copy subcategories?",G="Copy",L="Copying dishes?",U="Copy",Y="Associate existing",x="Copying images?",z="Copy",B="Associate existing",F="Confirm",b="Cancel",[[1,"flex","items-center"],p,[1,"ml-2"],["tuiLink","",3,"routerLink"],[3,"formGroup","ngSubmit"],[1,"mb-3"],g,["tuiGroup","",1,"group",3,"collapsed"],["contentAlign","right","size","l",3,"hideRadio","formControlName","item"],h,[3,"errors"],[3,"expanded"],[3,"formControlName"],S,$,["contentAlign","right","formControlName","copy_children","item","full","size","l",3,"hideRadio"],G,["contentAlign","right","formControlName","copy_children","item","none","size","l",3,"hideRadio"],L,["contentAlign","right","formControlName","copy_dishes","item","full","size","l",3,"hideRadio"],U,["contentAlign","right","formControlName","copy_dishes","item","link","size","l",3,"hideRadio"],Y,["contentAlign","right","formControlName","copy_dishes","item","none","size","l",3,"hideRadio"],x,["contentAlign","right","formControlName","copy_images","item","full","size","l",3,"hideRadio"],z,["contentAlign","right","formControlName","copy_images","item","link","size","l",3,"hideRadio"],B,["contentAlign","right","formControlName","copy_images","item","none","size","l",3,"hideRadio"],["type","submit","size","l","tuiButton","",1,"me-2",3,"appearance"],F,["type","button","size","l","tuiButton","",1,"me-2",3,"appearance","click"],b]},template:function(g,h){if(1&g&&(e.I0R(0,"div",0)(1,"h1"),e.aS0(2,1),e.C$Y(),e.I0R(3,"span",2)(4,"a",3),e.wVc(5,"urlTo"),e.OEk(6),e.C$Y()()(),e.I0R(7,"form",4),e.qCj("ngSubmit",function(){return h.submit()}),e.I0R(8,"div",5)(9,"p"),e.aS0(10,6),e.C$Y(),e.I0R(11,"div",7)(12,"tui-radio-block",8),e.SAx(13),e.aS0(14,9),e.k70(),e.C$Y(),e.I0R(15,"tui-radio-block",8),e.OEk(16," Sotto-categoria "),e.C$Y()(),e.wR5(17,"app-errors",10),e.C$Y(),e.I0R(18,"tui-expand",11)(19,"div",5)(20,"app-menu-category-select",12),e.SAx(21),e.aS0(22,13),e.k70(),e.C$Y(),e.wR5(23,"app-errors",10),e.C$Y()(),e.I0R(24,"div",5)(25,"p"),e.aS0(26,14),e.C$Y(),e.I0R(27,"div",7)(28,"tui-radio-block",15),e.SAx(29),e.aS0(30,16),e.k70(),e.C$Y(),e.I0R(31,"tui-radio-block",17),e.OEk(32," No "),e.C$Y()(),e.wR5(33,"app-errors",10),e.C$Y(),e.I0R(34,"div",5)(35,"p"),e.aS0(36,18),e.C$Y(),e.I0R(37,"div",7)(38,"tui-radio-block",19),e.SAx(39),e.aS0(40,20),e.k70(),e.C$Y(),e.I0R(41,"tui-radio-block",21),e.SAx(42),e.aS0(43,22),e.k70(),e.C$Y(),e.I0R(44,"tui-radio-block",23),e.OEk(45," No "),e.C$Y()(),e.wR5(46,"app-errors",10),e.C$Y(),e.I0R(47,"div",5)(48,"p"),e.aS0(49,24),e.C$Y(),e.I0R(50,"div",7)(51,"tui-radio-block",25),e.SAx(52),e.aS0(53,26),e.k70(),e.C$Y(),e.I0R(54,"tui-radio-block",27),e.SAx(55),e.aS0(56,28),e.k70(),e.C$Y(),e.I0R(57,"tui-radio-block",29),e.OEk(58," No "),e.C$Y()(),e.wR5(59,"app-errors",10),e.C$Y(),e.I0R(60,"div",0)(61,"button",30),e.SAx(62),e.aS0(63,31),e.k70(),e.C$Y(),e.I0R(64,"button",32),e.qCj("click",function(){return h.cancel()}),e.SAx(65),e.aS0(66,33),e.k70(),e.C$Y()()()),2&g){let S,$;e.yG2(4),e.E7m("routerLink",e.g7$(5,30,null==(S=h.category())?null:S.id,"menuCategory.show")),e.yG2(2),e.cNF(null==($=h.category())?null:$.name),e.yG2(),e.E7m("formGroup",h.form),e.yG2(4),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0)("formControlName","create_as_root")("item",!0),e.yG2(3),e.E7m("hideRadio",!0)("formControlName","create_as_root")("item",!1),e.yG2(2),e.E7m("errors",h.e("create_as_root")),e.yG2(),e.E7m("expanded",!h.form.value.create_as_root),e.yG2(2),e.E7m("formControlName","parent"),e.yG2(3),e.E7m("errors",h.e("parent")),e.yG2(4),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(2),e.E7m("errors",h.e("copy_children")),e.yG2(4),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(2),e.E7m("errors",h.e("copy_dishes")),e.yG2(4),e.E7m("collapsed",!0),e.yG2(),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(3),e.E7m("hideRadio",!0),e.yG2(2),e.E7m("errors",h.e("copy_images")),e.yG2(2),e.E7m("appearance","primary"),e.yG2(3),e.E7m("appearance","outline")}},dependencies:[n.sl,n.sz,n.ue,n.u,n.uW,n.Wo,D.a,I.g,y.Gy,y.Ko,_.W,_.I,C.CI,C.Kw,O.kh,O.st,t.w,t.C,r.ER,f.S],changeDetection:0})}return v})(),H=(()=>{class v{static#e=this.\u0275fac=function(g){return new(g||v)};static#t=this.\u0275mod=e.a4G({type:v});static#o=this.\u0275inj=e.s3X({imports:[r.qQ.forChild([(0,i.VV)(N,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return v})()},9852:(P,M,l)=>{l.d(M,{S:()=>d});var r=l(6504),i=l(400);const e=n=>null!=n&&""!=`${n}`;class d extends r.AQ{static formWeeklyFromTo(o,s){return u=>{if(!(u instanceof r.WC))return console.warn("formWeeklyFromTo: param is not a FormGroup",u),null;const c=u,m=c.get(o),T=c.get(s);return m&&T&&m.value instanceof i.uc&&T.value instanceof i.uc&&m.value&&T.value&&m.value.toAbsoluteMilliseconds()>=T.value.toAbsoluteMilliseconds()?{formWeeklyFromTo:!0}:null}}static canBeBlankIf(o,s,u){const c=u?.message||"The form is not valid.";return m=>{if(!(m instanceof r.WC))throw new Error("canBeBlankIf: thisIsAFormGroup is not a FormGroup");const E=m.get(o);if(!E)throw new Error("canBeBlankIf: control is blank. control name: "+o);return e(E.value)||s()?null:{[`${o}canBeBlankIf`]:c}}}static listOfEmails(o){const s=o.value;if(!s||"string"!=typeof s||!s.length)return null;const u=new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$","i");return s.split(/\,|\s+/gm).map(c=>c.trim()).filter(c=>c.length).forEach(c=>{if(!u.test(c))return{listOfEmails:!0}}),null}static mustBeArray(o){return Array.isArray(o.value)?null:{mustBeArray:!0}}static objectNotEmpty(o){return e(o.value)&&"object"==typeof o.value&&0===Object.keys(o.value).length&&0===Object.values(o.value).filter(u=>e(u)).length?{objectNotEmpty:!0}:null}static arrayMinLength(o){return s=>Array.isArray(s.value)&&s.value.length<o?{arrayMinLength:{requiredLength:o,actualLength:s.value?.length??0}}:null}static validateArray(o){return s=>{if(!Array.isArray(s.value))return null;const u={};for(const c of s.value){const m=o(new r.yM(c));m&&Object.assign(u,m)}return Object.keys(u).length?u:null}}static percentage(o){return e(o.value)&&(isNaN(o.value)||o.value<0||o.value>100)?{percentage:!0}:null}static phoneIT(o){const s=c=>c?null:{phoneIT:!0},u=`${o.value}`.trim().replace(/\s+/gm,"").replace(/^\+39/gm,"");return e(u)?s(!((n=u).length<9||isNaN(Number(n))||n.length>14)):s(!0);var n}static instanceof(o){return s=>!e(s.value)||s.value instanceof o?null:{instanceof:!0}}static#e=this.instanceOf=this.instanceof;static numerical(o){return e(o.value)&&isNaN(o.value)?{numerical:!0}:null}static moreThan(o){return s=>s.value<=o?{moreThan:!0}:null}static in(o){return this.inclusion(o)}static inclusion(o){return s=>e(s.value)&&!o.includes(s.value)?{inclusion:!0}:null}}},9938:(P,M,l)=>{l.d(M,{y:()=>R});var r=l(6504);const i={required:"This field cannot be empty!",email:"This email is not valid!",numbersOnly:"Only numbers allowed!",numberOnly:"Only numbers allowed!",numerical:"Only numbers allowed!",invalid_http_url:"Invalid HTTP connection",minlength:d=>"\n          Text too short: Minimum length: \n          " + d.requiredLength + "\n          , current length: \n          " + d.actualLength + "\n        ",InvalidFormat:d=>"\n          \" \n          " + d.value + "\n           \" is not a valid format. Valid example: \"\n          " + d.validExample + "\n          \"\n        ",pattern:d=>"\n           \" \n          " + d.actualValue + "\n           \" is not a valid format. The format must comply with the following\n          regular expression (RegExp): \" \n          " + d.requiredPattern + "\n           \" \n        ",max:d=>"\n          The entered value is too large! Maximum value: \n          " + d.max + "\n           , current value: \n          " + d.actual + "\n        ",min:d=>"\n           The entered value is too small! Minimum value: \n          " + d.min + "\n           , current value: \n          " + d.actual + "\n        ",maxlength:d=>"\n           The entered value is too long! Maximum length: \n          " + d.requiredLength + "\n           , Current length: \n          " + d.actualLength + "\n        ",phoneIT:"\n           This does not seem to be a valid Italian phone number. Example: +39\n          123 456 7890 \n        ",inclusion:d=>{const n=Array.isArray(d)?"\n           The allowed values are: \n          " + d.join(", ") + "\n           . \n        ":"";return "\n           The entered value is not valid. \n          " + n + "\n        "},arrayMinLength:d=>"\n           You must enter at least \n          " + d.requiredLength + "\n           elements. \n        ",passwordConfirmation:"The passwords do not match!",formWeeklyFromTo:"The start time must be earlier than the end time!"},e={assignToFormUnlessControl:!0};class R{static formatErrors(n,o){return null==n||null==n?[]:new R(n,o).formatErrors()}static assignErrorsToForm(n,o,s={}){const u=o.error?.details;if(!u||!Array.isArray(u))return"object"==typeof u&&Object.keys(u).length>0?this.assignErrorsToFormFromJson(n,u,s):void console.warn("invalid errors provided to assignErrorsToForm",u);this.assignErrorsToFormFromArray(n,u,s)}static assignErrorsToFormFromJson(n,o,s={}){const u={...e,...s};Object.keys(o).forEach(c=>{const m=o[c];m&&Array.isArray(m)?m.forEach(T=>{const E=n.controls[c];E?E.setErrors({[T.attribute]:T.message}):u.assignToFormUnlessControl&&n.setErrors({[T.attribute]:T.message})}):console.warn("assignErrorsToFormFromJson expected an array of ActiveError, but got:",m)})}static assignErrorsToFormFromArray(n,o,s={}){const u={...e,...s};o.forEach(c=>{const m=n instanceof r.WC?n.controls[c.attribute]:n;m?m.setErrors({[c.attribute]:c.message}):u.assignToFormUnlessControl&&n.setErrors({[c.attribute]:c.message})})}constructor(n,o=i){this.defaultMessages=i,this.messages={},this.enableLogging=!1,this.errors=n,o?this.mergeMessages(o):this.assignDefaults()}assignDefaults(){this.messages={},Object.keys(this.defaultMessages).forEach(n=>{this.messages[n]=this.defaultMessages[n]})}mergeMessages(n){[...Object.keys(this.defaultMessages),...Object.keys(n)].forEach(s=>{this.messages[s]=n[s]?n[s]:this.defaultMessages[s]})}formatErrors(){return[...this.errorMsgFromControl()]}warn(...n){this.enableLogging&&console.warn(...n)}errorMsgFromControl(){if(null==this.errors||null==this.errors)return[];var n=[];return Object.keys(this.errors).filter(o=>{if("string"==typeof this.errors[o]&&this.errors[o].length>0)return n.push(this.errors[o]);if(this.messages.hasOwnProperty(o)&&this.messages[o]&&null!=this.messages[o]){const c=this.messages[o];switch(typeof c){case"string":default:n.push(c);break;case"function":n.push(c(this.errors[o]))}}else if(this.warn(`ReactiveFormsErrors missing error message of "${o}". Parser error with your custom logic.`),[!0,!1].includes(this.errors[o])){var u={};u[o]=this.errors[o],"string"!=typeof u&&(u=JSON.stringify(u)),n.push(u)}else n.push(this.errors[o])}),n}}},9880:(P,M,l)=>{l.d(M,{kP:()=>T,kh:()=>y,st:()=>I});var r=l(4496),i=l(3480),e=l(4392),R=l(3120),d=l(3616),n=l(7692),o=l(1368);const s=["wrapper"];function u(C,O){if(1&C&&(r.I0R(0,"tui-loader",4),r.C_f(1,5),r.C$Y()),2&C){const t=r.GaO(2);r.E7m("overlay",!0)("showLoader",t.loading),r.yG2(),r.E7m("ngTemplateOutlet",t.content)}}function c(C,O){if(1&C&&(r.SAx(0),r._Xx(1),r.yuY(2,u,2,3,"tui-loader",3),r.k70()),2&C){const t=r.GaO();r.yG2(2),r.E7m("ngIf",t.async)("ngIfElse",t.content)}}const m=["*"];let T=(()=>{class C{}return C.\u0275fac=function(t){return new(t||C)},C.\u0275dir=r.Sc5({type:C,selectors:[["","tuiExpandContent",""]]}),C})();let I=(()=>{class C{constructor(t,_){this.cdr=t,this.destroy$=_,this.state=0,this.async=!1,this.content=null,this.expanded=null}set expandedSetter(t){if(null!==this.expanded)return 0!==this.state?(this.expanded=t,void(this.state=3)):(this.expanded=t,void this.retrigger(this.async&&t?1:3));this.expanded=t}get overflow(){return 0!==this.state}get loading(){return!!this.expanded&&this.async&&1===this.state}get height(){const{expanded:t,state:_,contentWrapper:a}=this;return t&&2===_||!t&&3===_?0:a&&(!t&&2===_||t&&3===_)?a.nativeElement.offsetHeight:a&&t&&1===_?Math.max(a.nativeElement.offsetHeight,48):null}get contentVisible(){return this.expanded||0!==this.state}onTransitionEnd({propertyName:t}){"opacity"===t&&3===this.state&&(this.state=0)}onExpandLoaded(t){t.stopPropagation(),1===this.state&&this.retrigger(3)}retrigger(t){this.state=2,(0,R.k)(0).pipe((0,d.a)(this.destroy$)).subscribe(()=>{2===this.state&&(this.state=t,this.cdr.markForCheck())})}}return C.\u0275fac=function(t){return new(t||C)(r.GI1(r.kD9),r.GI1(i.UF,2))},C.\u0275cmp=r.In1({type:C,selectors:[["tui-expand"]],contentQueries:function(t,_,a){if(1&t&&r.szK(a,T,5,r.Yw2),2&t){let f;r.wto(f=r.Gqi())&&(_.content=f.first)}},viewQuery:function(t,_){if(1&t&&r.CC$(s,5),2&t){let a;r.wto(a=r.Gqi())&&(_.contentWrapper=a.first)}},hostVars:9,hostBindings:function(t,_){1&t&&r.qCj("transitionend.self",function(f){return _.onTransitionEnd(f)})("tui-expand-loaded",function(f){return _.onExpandLoaded(f)}),2&t&&(r.e48("aria-expanded",_.expanded),r.m4B("height",_.height,"px"),r.eAK("_expanded",_.expanded)("_overflow",_.overflow)("_loading",_.loading))},inputs:{async:"async",expandedSetter:[r.Wk5.None,"expanded","expandedSetter"]},features:[r.M5G([i.UF])],ngContentSelectors:m,decls:3,vars:3,consts:[[1,"t-wrapper"],["wrapper",""],[4,"ngIf"],["size","l",3,"overlay","showLoader",4,"ngIf","ngIfElse"],["size","l",3,"overlay","showLoader"],[3,"ngTemplateOutlet"]],template:function(t,_){1&t&&(r.kPM(),r.I0R(0,"div",0,1),r.yuY(2,c,3,2,"ng-container",2),r.C$Y()),2&t&&(r.E7m("@tuiParentAnimation",void 0)("@.disabled",_.overflow),r.yG2(2),r.E7m("ngIf",_.contentVisible))},dependencies:[n.Cb,o.u_,o.XV],styles:['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],data:{animation:[e.cI]},changeDetection:0}),C})(),y=(()=>{class C{}return C.\u0275fac=function(t){return new(t||C)},C.\u0275mod=r.a4G({type:C}),C.\u0275inj=r.s3X({imports:[[o.MD,n.Sk]]}),C})()}}]);