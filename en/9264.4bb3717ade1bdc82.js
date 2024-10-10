"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[9264],{864:(I,p,e)=>{e.r(p),e.d(p,{LinkDishModule:()=>c});var s=e(2992),h=e(7552),t=e(4496),u=e(4436),_=e(8212),n=e(1512),d=e(6504),i=e(3716),o=e(1712),r=e(3480),E=e(1128),D=e(3616),v=e(4704),f=e(4e3),P=e(8824),N=e(8256),y=e(9088);function $(a,O){1&a&&(t.I0R(0,"p"),t.aS0(1,10),t.C$Y(),t.I0R(2,"p"),t.aS0(3,11),t.C$Y())}const L=a=>({except_in_category:a});function m(a,O){if(1&a){const l=t.KQA();t.I0R(0,"form",12),t.qCj("ngSubmit",function(){t.usT(l);const C=t.GaO();return t.CGJ(C.submit())}),t.I0R(1,"app-dish-select",13),t.SAx(2),t.aS0(3,14),t.k70(),t.C$Y(),t.I0R(4,"div",0)(5,"button",15),t.SAx(6),t.aS0(7,16),t.k70(),t.C$Y(),t.I0R(8,"button",17),t.qCj("click",function(){t.usT(l);const C=t.GaO();return t.CGJ(C.cancel())}),t.SAx(9),t.aS0(10,18),t.k70(),t.C$Y()()()}if(2&a){const l=t.GaO();t.E7m("formGroup",l.form),t.yG2(),t.E7m("filters",t.S45(3,L,l.categoryId))("formControlName","dish")}}let M=(()=>{class a{constructor(){this.service=(0,t.uUt)(o.S),this.destroy$=(0,t.uUt)(r.UF),this.route=(0,t.uUt)(s.gV),this.router=(0,t.uUt)(s.E5),this.notifications=(0,t.uUt)(E.E),this.loading=(0,t.OCB)(!1),this.category=(0,t.OCB)(null),this.categoryId=null,this.form=new d.WC({dish:new d.Ku(null)})}ngOnInit(){this.route.parent?.parent?.params.pipe((0,D.a)(this.destroy$),(0,v.k)(l=>l.category_id),(0,f.a)()).subscribe({next:l=>{this.categoryId=l,this.loadCategory()}})}submit(){const l=this.categoryId,g=this.form.value?.dish?.id;l&&g?this.form.invalid||(this.loading.set(!0),this.service.addDish(l,g).pipe((0,D.a)(this.destroy$),(0,P.U)(()=>this.loading.set(!1))).subscribe({next:()=>{this.navigateBack(),this.notifications.fireSnackBar("Extra plate.")},error:C=>{this.notifications.error((0,N.mk)(C)||"Something went wrong with the addition of the dish.")}})):console.error("something invalid.",{categoryId:l,dishId:g})}cancel(){(this.form.touched||this.form.dirty)&&!confirm("Are you sure you want to cancel this action?")||this.navigateBack()}navigateBack(){const l=this.route.snapshot.queryParams.afterUrl;l?this.router.navigateByUrl(l):this.router.navigate([".."],{relativeTo:this.route})}loadCategory(){this.category.set(null),this.categoryId&&this.service.show(this.categoryId).pipe((0,D.a)(this.destroy$)).subscribe({next:l=>{this.category.set(l)},error:l=>{this.notifications.error((0,N.mk)(l)||"Something went wrong while loading the parent category.")}})}static#t=this.\u0275fac=function(g){return new(g||a)};static#e=this.\u0275cmp=t.In1({type:a,selectors:[["app-link-dish"]],standalone:!0,features:[t.M5G([r.UF]),t.UHJ],decls:15,vars:7,consts:()=>{let l,g,C,A,S,R,U;return l="Associate existing plate.",g="The dish will be added to the category.",C="\n           Associating an existing dish allows you to keep the exact same dish\n          present in multiple categories. \n        ",A="\n           The advantage is that when you need to make a change to the dish, you\n          only have to do it once. \n        ",S="Dish to pair.",R="Confirm",U="Cancel",[[1,"flex","items-center"],[1,"me-2"],l,[3,"content"],[1,"mb-3"],[1,"me-2","text-slate-400"],g,["tuiLink","",3,"routerLink"],["helpMsg",""],[3,"formGroup"],C,A,[3,"formGroup","ngSubmit"],[1,"block","mb-3",3,"filters","formControlName"],S,["tuiButton","","type","submit","size","l","appearance","primary",1,"me-2"],R,["tuiButton","","type","button","size","l","appearance","outline",3,"click"],U]},template:function(g,C){if(1&g&&(t.I0R(0,"span",0)(1,"h1",1),t.SAx(2),t.aS0(3,2),t.k70(),t.C$Y(),t.wR5(4,"tui-tooltip",3),t.C$Y(),t.I0R(5,"div",4)(6,"span",5),t.SAx(7),t.aS0(8,6),t.k70(),t.C$Y(),t.I0R(9,"a",7),t.wVc(10,"urlTo"),t.OEk(11),t.C$Y()(),t.yuY(12,$,4,0,"ng-template",null,8,t.gJz)(14,m,11,5,"form",9)),2&g){const A=t.Gew(13);let S,R;t.yG2(4),t.E7m("content",A),t.yG2(5),t.E7m("routerLink",t.g7$(10,4,null==(S=C.category())?null:S.id,"menuCategory.show")),t.yG2(2),t.cNF(null==(R=C.category())?null:R.name),t.yG2(3),t.C0Y(14,C.categoryId?14:-1)}},dependencies:[u.a,u.i,d.sl,d.sz,d.ue,d.u,d.uW,d.Wo,i.i,_.CI,_.Kw,n.w,n.C,s.ER,y.S],changeDetection:0})}return a})(),c=(()=>{class a{static#t=this.\u0275fac=function(g){return new(g||a)};static#e=this.\u0275mod=t.a4G({type:a});static#i=this.\u0275inj=t.s3X({imports:[s.qQ.forChild([(0,h.VV)(M,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return a})()},4824:(I,p,e)=>{e.d(p,{o:()=>t});var s=e(8400),h=e(2264);class t extends s.w{constructor(_){super(_),this.name=_.name,this.description=_.description,this.status=_.status,this.other=_.other,this.translations={..._.translations},_.image&&(this.image=new h.W(_.image))}}},5891:(I,p,e)=>{e.d(p,{S:()=>n});var s=e(8400),h=e(2264),t=e(355),u=e(4824),_=e(532);class n extends s.w{constructor(i){super(i),this.name=i.name,this.description=i.description,this.status=i.status,this.price=i.price,this.translations=i.translations,this.images=i.images?i.images.map(o=>new h.W(o)):[],this.suggestions=i.suggestions?i.suggestions.map(o=>new n(o)):[],this.tags=i.tags?i.tags.map(o=>new t.E(o)):[],this.allergens=i.allergens?i.allergens.map(o=>new u.o(o)):[],this.ingredients=i.ingredients?i.ingredients.map(o=>new _.e(o)):[]}}},2264:(I,p,e)=>{e.d(p,{W:()=>h});var s=e(8400);class h extends s.w{constructor(u){super(u),this.filename=u.filename,this.status=u.status,this.key=u.key,this.original_id=u.original_id,this.tag=u.tag,this.url=u.url}}},532:(I,p,e)=>{e.d(p,{e:()=>t});var s=e(8400),h=e(2264);class t extends s.w{constructor(_){super(_),this.name=_.name,this.description=_.description,this.status=_.status,this.other=_.other,this.translations={..._.translations},_.image&&(this.image=new h.W(_.image))}}},5820:(I,p,e)=>{e.d(p,{Q:()=>u});var s=e(8400);class h extends s.w{constructor(n){super(n),this.public_visible=n.public_visible,this.public_from=n.public_from?new Date(n.public_from):void 0,this.public_to=n.public_to?new Date(n.public_to):void 0,this.private_visible=n.private_visible,this.daily_from=n.daily_from?new Date(n.daily_from):void 0,this.daily_to=n.daily_to?new Date(n.daily_to):void 0}}var t=e(2264);class u extends s.w{constructor(n){super(n),this.name=n.name,this.description=n.description,this.status=n.status,this.price=n.price,this.parent_id=n.parent_id,this.index=n.index,this.secret=n.secret,this.secret_desc=n.secret_desc,this.visibility_id=n.visibility_id,this.visibility=n.visibility?new h(n.visibility):void 0,this.parent=n.parent?new u(n.parent):void 0,this.children=n.children?n.children.map(d=>new u(d)):[],this.images=n.images?n.images.map(d=>new t.W(d)):[],this.translations=n.translations}}},355:(I,p,e)=>{e.d(p,{E:()=>t});var s=e(8400),h=e(2264);class t extends s.w{constructor(_){super(_),this.name=_.name,this.description=_.description,this.status=_.status,this.other=_.other,this.translations={..._.translations},this.color=_.color,_.image&&(this.image=new h.W(_.image))}}},9088:(I,p,e)=>{e.d(p,{S:()=>t});var s=e(4496);const h={menuCategory:{show:"/admin/menu/{itemId}",duplicate:"/admin/menu/{itemId}/duplicate",export:"/admin/menu/{itemId}/export",createChild:"/admin/menu/{itemId}/create-category",linkCategory:"/admin/menu/{itemId}/link-category",createDish:"/admin/menu/{itemId}/create-dish",linkDish:"/admin/menu/{itemId}/link-dish",private:"/menu/{itemId}",public:"/menu/{itemId}"},dish:{show:"/admin/menu/{categoryId}/dish/{itemId}"}};let t=(()=>{class u{transform(n,d){const i=h[d.split(".")[0]];if(!i)throw new Error(`Resource not found: ${d} (resouce: ${d.split(".")[0]})`);const o=d.split(".")[1];if(!i[o])throw new Error(`Action not found: ${d} (action: ${o})`);if(typeof n>"u"||null===n)return null;if("number"==typeof n&&(n=n.toString()),"object"==typeof n&&null!==n&&!Array.isArray(n)){let r=i[o];if(Object.keys(n).forEach(E=>{const D=n[E];void 0!==D&&r.includes(`{${E}}`)&&(r=r.replace(`{${E}}`,D??""))}),r.includes("{{"))throw new Error(`Unresolved interpolation: ${r}`);return r}if("string"!=typeof n)throw new Error(`Invalid itemId: ${n} (type: ${typeof n})`);return i[o].replace("{itemId}",n)}static#t=this.\u0275fac=function(d){return new(d||u)};static#e=this.\u0275pipe=s.UTH({name:"urlTo",type:u,pure:!0,standalone:!0})}return u})()},8676:(I,p,e)=>{e.d(p,{k:()=>_});var s=e(6012),h=e(5891),t=e(4704),u=e(4496);let _=(()=>{class n extends s.s{constructor(){super(h.S,"admin/menu/dishes")}copy(i,o){return this.post(`${i}/copy`,o).pipe((0,t.k)(r=>this.mapItem(r)))}move(i,o){return this.patch(`${i}/move`,o).pipe((0,t.k)(r=>this.mapItem(r)))}moveIngredient(i,o,r){return this.patch(`${i}/ingredients/${o}/move`,{to_index:r}).pipe((0,t.k)(E=>this.mapItem(E)))}moveTag(i,o,r){return this.patch(`${i}/tags/${o}/move`,{to_index:r}).pipe((0,t.k)(E=>this.mapItem(E)))}moveAllergen(i,o,r){return this.patch(`${i}/allergens/${o}/move`,{to_index:r}).pipe((0,t.k)(E=>this.mapItem(E)))}updateStatus(i,o){return this.patch(`${i}/status/${o}`,{}).pipe((0,t.k)(r=>this.mapItem(r)))}addIngredient(i,o){return this.post(`${i}/ingredients/${o}`,{}).pipe((0,t.k)(r=>this.mapItem(r)))}removeIngredient(i,o){return this.delete(`${i}/ingredients/${o}`).pipe((0,t.k)(r=>this.mapItem(r)))}addTag(i,o){return this.post(`${i}/tags/${o}`,{}).pipe((0,t.k)(r=>this.mapItem(r)))}removeTag(i,o){return this.delete(`${i}/tags/${o}`).pipe((0,t.k)(r=>this.mapItem(r)))}addAllergen(i,o){return this.post(`${i}/allergens/${o}`,{}).pipe((0,t.k)(r=>this.mapItem(r)))}removeAllergen(i,o){return this.delete(`${i}/allergens/${o}`).pipe((0,t.k)(r=>this.mapItem(r)))}references(i){return this.get(`${i}/references`).pipe((0,t.k)(o=>o))}addSuggestion(i,o){return this.post(`${i}/suggestions/${o}`,{}).pipe((0,t.k)(r=>this.mapItem(r)))}removeSuggestion(i,o){return this.delete(`${i}/suggestions/${o}`).pipe((0,t.k)(r=>this.mapItem(r)))}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275prov=u.wxM({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},1712:(I,p,e)=>{e.d(p,{S:()=>_});var s=e(6012),h=e(5820),t=e(4704),u=e(4496);let _=(()=>{class n extends s.s{constructor(){super(h.Q,"admin/menu/categories")}addCategory(i,o,r={}){return this.post(`${i}/add_category/${o}`,r)}addDish(i,o){return this.post(`${i}/dishes/${o}`,{})}removeDish(i,o){return this.delete(`${i}/dishes/${o}`,{})}orderDishes(i,o){return this.patch(`${i}/order_dishes`,{field:o})}dashboardData(i){return this.get(`${i}/dashboard_data`)}updateVisibility(i,o){return this.patch(`${i}/visibility`,o).pipe((0,t.k)(r=>this.mapItem(r)))}copy(i,o){return this.post(`${i}/copy`,o).pipe((0,t.k)(r=>this.mapItem(r)))}move(i,o){return this.patch(`${i}/move/${o}`,{}).pipe((0,t.k)(r=>this.mapItem(r)))}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275prov=u.wxM({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},4736:(I,p,e)=>{e.d(p,{M:()=>u,O:()=>_});var s=e(4496),h=e(5944),t=e(4704);let u=(()=>{class n{constructor(i){this.months$=i}transform({month:i}){return this.months$.pipe((0,t.k)(o=>o[i]))}}return n.\u0275fac=function(i){return new(i||n)(s.GI1(h.GU,16))},n.\u0275pipe=s.UTH({name:"tuiMonth",type:n,pure:!0}),n})(),_=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=s.a4G({type:n}),n.\u0275inj=s.s3X({}),n})()},3797:(I,p,e)=>{e.d(p,{CQ:()=>L,Oo:()=>y,cP:()=>$});var s=e(4496),h=e(6504),t=e(3044),u=e(1800),_=e(4164),n=e(4680),d=e(466),i=e(7936),o=e(8048),r=e(4336),E=e(5944),D=e(9371),v=e(796),f=e(1368);const P=["*",[["input"]]],N=["*","input"];let y=(()=>{class m extends u._y{constructor(c,a,O,l){super(c,a,l),this.textfieldSize=O,this.open=!1}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return(0,_.ER)(this.nativeFocusableElement)||!!this.hostedDropdown&&this.hostedDropdown.focused}get canOpen(){return this.interactive&&!!this.datalist}onValueChange(c){this.value=c,this.open=!0}onActiveZone(c){this.updateFocused(c)}handleOption(c){this.setNativeValue(String(c)),this.focusInput(),this.value=String(c),this.open=!1}getFallbackValue(){return""}focusInput(c=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:c})}setNativeValue(c){this.nativeFocusableElement&&(this.nativeFocusableElement.value=c)}}return m.\u0275fac=function(c){return new(c||m)(s.GI1(h.eq,10),s.GI1(s.kD9),s.GI1(o.$K),s.GI1(u.cn,8))},m.\u0275cmp=s.In1({type:m,selectors:[["tui-input"]],contentQueries:function(c,a,O){if(1&c&&s.szK(O,r.Ux,5,s.Yw2),2&c){let l;s.wto(l=s.Gqi())&&(a.datalist=l.first)}},viewQuery:function(c,a){if(1&c&&(s.CC$(d.Qw,5),s.CC$(i.y_,5)),2&c){let O;s.wto(O=s.Gqi())&&(a.hostedDropdown=O.first),s.wto(O=s.Gqi())&&(a.textfield=O.first)}},hostVars:1,hostBindings:function(c,a){2&c&&s.e48("data-size",a.size)},features:[s.M5G([v.g3,(0,n.NK)(m),(0,E.UH)(m),(0,u.q4)(m)],[v.YL]),s.eg9],ngContentSelectors:N,decls:4,vars:11,consts:[[1,"t-hosted",3,"canOpen","content","open","openChange","tuiActiveZoneChange"],["automation-id","tui-input__textfield",1,"t-textfield",3,"disabled","focusable","invalid","nativeId","pseudoFocus","pseudoHover","readOnly","value","valueChange"]],template:function(c,a){1&c&&(s.kPM(P),s.I0R(0,"tui-hosted-dropdown",0),s.iHE("openChange",function(l){return s.kNx(a.open,l)||(a.open=l),l}),s.qCj("tuiActiveZoneChange",function(l){return a.onActiveZone(l)}),s.I0R(1,"tui-primitive-textfield",1),s.qCj("valueChange",function(l){return a.onValueChange(l)}),s._Xx(2),s._Xx(3,1,["ngProjectAs","input",5,["input"]]),s.C$Y()()),2&c&&(s.E7m("canOpen",a.canOpen)("content",a.datalist||""),s.OKB("open",a.open),s.yG2(),s.E7m("disabled",a.computedDisabled)("focusable",a.computedFocusable)("invalid",a.computedInvalid)("nativeId",a.nativeId)("pseudoFocus",a.computedFocused)("pseudoHover",a.pseudoHover)("readOnly",a.readOnly)("value",a.value))},dependencies:[d.Qw,i.y_,t.M,i.KQ],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}._disabled[_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),m})(),$=(()=>{class m extends D.Cm{onValueChange(c){this.host.onValueChange(c)}}return m.\u0275fac=(()=>{let M;return function(a){return(M||(M=s.otF(m)))(a||m)}})(),m.\u0275dir=s.Sc5({type:m,selectors:[["tui-input"]],features:[s.M5G([(0,E.iu)(m)]),s.eg9]}),m})(),L=(()=>{class m{}return m.\u0275fac=function(c){return new(c||m)},m.\u0275mod=s.a4G({type:m}),m.\u0275inj=s.s3X({imports:[[f.MD,t.L,i.KA,d.GE]]}),m})()},796:(I,p,e)=>{e.d(p,{YL:()=>E,g3:()=>D}),e(4736);var h=e(5193),t=e(5944),n=(e(3012),e(2700),e(528)),i=(e(4704),e(4496)),o=e(6504);const E=(0,h.Sk)({limitWidth:"fixed",align:"right"}),D={provide:t.Y9,deps:[[new i.T7N,new i.Yiy,o.Y6]],useFactory:n.Z}}}]);