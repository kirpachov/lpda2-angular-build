"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[8056],{5004:(v,f,i)=>{i.d(f,{O:()=>D});var e=i(4496),C=i(8016),_=i(8212),T=i(1560),n=i(1040),c=i(3480),x=i(3616),o=i(6504),a=i(9064),d=i(9956);let M=(()=>{class g{constructor(m){this.context=m,this.submitted=!1,this.form=new o.WC({name:new o.Ku(null),description:new o.Ku(null)}),this.form.patchValue(this.context.data)}submit(){this.submitted=!0,!this.form.invalid&&this.context.completeWith(this.form.value)}cancel(){this.context.completeWith(null)}e(m){const p=this.form.get(m);return p&&(this.submitted||p.dirty||p.touched)?p.errors:null}static#e=this.\u0275fac=function(p){return new(p||g)(e.GI1(n.C0))};static#t=this.\u0275cmp=e.In1({type:g,selectors:[["app-edit-name-desc-modal"]],standalone:!0,features:[e.UHJ],decls:18,vars:4,consts:()=>{let m,p,E,S;return m="Name",p="Description",E="Confirm",S="Cancel",[[3,"formGroup","ngSubmit"],[1,"mb-3"],["formControlName","name"],m,[3,"errors"],["formControlName","description",3,"long"],p,[1,"flex","items-center"],["type","submit","tuiButton","","size","l","appearance","primary",1,"me-2"],E,["type","button","tuiButton","","size","l","appearance","outline",3,"click"],S]},template:function(p,E){1&p&&(e.I0R(0,"form",0),e.qCj("ngSubmit",function(){return E.submit()}),e.I0R(1,"div",1)(2,"app-i18n-input",2),e.SAx(3),e.aS0(4,3),e.k70(),e.C$Y(),e.wR5(5,"app-errors",4),e.C$Y(),e.I0R(6,"div",1)(7,"app-i18n-input",5),e.SAx(8),e.aS0(9,6),e.k70(),e.C$Y(),e.wR5(10,"app-errors",4),e.C$Y(),e.I0R(11,"div",7)(12,"button",8),e.SAx(13),e.aS0(14,9),e.k70(),e.C$Y(),e.I0R(15,"button",10),e.qCj("click",function(){return E.cancel()}),e.SAx(16),e.aS0(17,11),e.k70(),e.C$Y()()()),2&p&&(e.E7m("formGroup",E.form),e.yG2(5),e.E7m("errors",E.e("name")),e.yG2(2),e.E7m("long",!0),e.yG2(3),e.E7m("errors",E.e("description")))},dependencies:[o.sl,o.sz,o.ue,o.u,o.uW,o.Wo,a.w,d.g,_.CI,_.Kw],encapsulation:2})}return g})();function b(g,A){if(1&g&&e.OEk(0),2&g){const m=e.GaO();e.oRS(" ",m.translations.name.it," ")}}function G(g,A){if(1&g&&e.OEk(0),2&g){const m=e.GaO();e.oRS(" ",m.translations.description.it," ")}}function $(g,A){if(1&g&&e.OEk(0),2&g){const m=e.GaO();e.oRS(" ",m.translations.name.en," ")}}function w(g,A){if(1&g&&e.OEk(0),2&g){const m=e.GaO();e.oRS(" ",m.translations.description.en," ")}}let D=(()=>{class g{constructor(){this.dialogs=(0,e.uUt)(C._k),this.injector=(0,e.uUt)(e.zZn),this.destroy$=(0,e.uUt)(c.UF),this.submittedChanges=new e._w7}showDialog(){this.dialogs.open(new n.WO(M,this.injector),{data:this.translations,dismissible:!1,label:"Edit name or description"}).pipe((0,x.a)(this.destroy$)).subscribe({next:m=>{m&&this.submittedChanges.emit(m)},error:m=>{console.warn("completed with error",m)},complete:()=>{}})}static#e=this.\u0275fac=function(p){return new(p||g)};static#t=this.\u0275cmp=e.In1({type:g,selectors:[["app-name-desc-eip"]],inputs:{translations:"translations"},outputs:{submittedChanges:"submittedChanges"},standalone:!0,features:[e.M5G([c.UF]),e.UHJ],decls:35,vars:4,consts:()=>{let m,p,E,S,O,R;return m="Language",p="Name",E="Description",S="Italian",O="English",R="Edit name or description",[[1,"tui-table"],[1,"tui-table__tr"],[1,"tui-table__th"],m,p,E,[1,"tui-table__tr","tui-table__tr_border_none"],[1,"tui-table__td"],S,[1,"tui-table__td","tui-table__td_last"],O,["size","m","tuiButton","","appearance","flat","type","button",3,"click"],[1,"flex","items-center"],[1,"me-1"],R]},template:function(p,E){1&p&&(e.I0R(0,"table",0)(1,"thead")(2,"tr",1)(3,"th",2),e.SAx(4),e.aS0(5,3),e.k70(),e.C$Y(),e.I0R(6,"th",2),e.SAx(7),e.aS0(8,4),e.k70(),e.C$Y(),e.I0R(9,"th",2),e.SAx(10),e.aS0(11,5),e.k70(),e.C$Y()()(),e.I0R(12,"tbody")(13,"tr",6)(14,"td",7)(15,"span"),e.aS0(16,8),e.C$Y()(),e.I0R(17,"td",7),e.yuY(18,b,1,1),e.C$Y(),e.I0R(19,"td",9),e.yuY(20,G,1,1),e.C$Y()(),e.I0R(21,"tr",6)(22,"td",7)(23,"span"),e.aS0(24,10),e.C$Y()(),e.I0R(25,"td",7),e.yuY(26,$,1,1),e.C$Y(),e.I0R(27,"td",9),e.yuY(28,w,1,1),e.C$Y()()()(),e.I0R(29,"button",11),e.qCj("click",function(){return E.showDialog()}),e.I0R(30,"span",12)(31,"mat-icon",13),e.OEk(32,"edit"),e.C$Y(),e.SAx(33),e.aS0(34,14),e.k70(),e.C$Y()()),2&p&&(e.yG2(18),e.C0Y(18,E.translations&&E.translations.name?18:-1),e.yG2(2),e.C0Y(20,E.translations&&E.translations.description?20:-1),e.yG2(6),e.C0Y(26,E.translations&&E.translations.name?26:-1),e.yG2(2),e.C0Y(28,E.translations&&E.translations.description?28:-1))},dependencies:[_.CI,_.Kw,T.qL],encapsulation:2,changeDetection:0})}return g})()},1264:(v,f,i)=>{i.d(f,{g:()=>q});var e=i(4496),C=i(668),_=i(6376),T=i(8896),n=i(8016),c=i(8212),x=i(7692),o=i(9052),a=i(1560),d=i(3480),M=i(1040),b=i(7760),G=i(9880),$=i(466),w=i(4336),D=i(6504),g=i(4152),A=i(1128),m=i(1368),p=i(3616),E=i(9144),S=i(2700),O=i(4e3),R=i(6684),I=i(8824),y=i(8256);let L=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.a4G({type:s}),s.\u0275inj=e.s3X({}),s})();var P=i(3400);const k=(s,u)=>u.id;function z(s,u){if(1&s){const t=e.KQA();e.I0R(0,"div",11)(1,"span",12),e.aS0(2,13),e.C$Y(),e.I0R(3,"button",14),e.qCj("click",function(){e.usT(t);const l=e.GaO().$implicit,h=e.GaO(3);return e.CGJ(h.removeImage(l))}),e.SAx(4),e.aS0(5,15),e.k70(),e.C$Y()()}}function F(s,u){if(1&s&&(e.I0R(0,"div",3)(1,"div",4)(2,"div",5)(3,"button",6)(4,"mat-icon"),e.OEk(5,"drag_indicator"),e.C$Y()(),e.wR5(6,"app-show-image",7),e.C$Y(),e.yuY(7,z,6,0,"ng-template",null,8,e.gJz),e.I0R(9,"div",5)(10,"tui-hosted-dropdown",9)(11,"button",10)(12,"mat-icon"),e.OEk(13,"delete"),e.C$Y()()()()()()),2&s){const t=u.$implicit,r=e.Gew(8);e.yG2(6),e.E7m("image",t),e.yG2(4),e.E7m("content",r)}}function B(s,u){if(1&s){const t=e.KQA();e.I0R(0,"div",2),e.qCj("cdkDropListDropped",function(l){e.usT(t);const h=e.GaO(2);return e.CGJ(h.drop(l))}),e.c53(1,F,14,2,"div",16,k),e.C$Y()}if(2&s){const t=e.GaO(2);e.yG2(),e.oho(t.images())}}function Y(s,u){1&s&&(e.I0R(0,"p"),e.aS0(1,17),e.C$Y())}const H=s=>({scale:s});function U(s,u){if(1&s&&(e.yuY(0,B,3,0,"div",1)(1,Y,2,0),e.wR5(2,"app-image-input",0)),2&s){const t=e.GaO();e.C0Y(0,t.images().length>0?0:1),e.yG2(2),e.E7m("cropperSettings",e.S45(4,H,3/4))("loading",t.savingImage())("formControl",t.newImage)}}function W(s,u){if(1&s&&(e.I0R(0,"p",18),e.SAx(1),e.aS0(2,19),e.k70(),e.C$Y(),e.wR5(3,"pre",20),e.wVc(4,"json")),2&s){const t=e.GaO();e.yG2(3),e.E7m("innerText",e.kDX(4,1,t.contextData))}}let j=(()=>{class s{constructor(t){this.context=t,this.destroy$=(0,e.uUt)(d.UF),this.service=(0,e.uUt)(b.U),this.notifications=(0,e.uUt)(A.E),this.newImage=new D.Ku(null),this.data=(0,e.OCB)(null),this.images=(0,e.S6b)(()=>this.data()?.items??[]),this.reordering=(0,e.OCB)(!1),this.removing=(0,e.OCB)(!1),this.savingImage=(0,e.OCB)(!1),this.loadingImages=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.loadingImages()||this.savingImage()||this.removing()||this.reordering()),this.contextData=this.context.data??null}ngOnInit(){this.loadImages(),this.newImage.valueChanges.pipe((0,p.a)(this.destroy$),(0,E.a)(()=>(0,S.of)(null)),(0,O.a)(),(0,R.I)(t=>null!=t)).subscribe({next:()=>this.saveNewImage()})}drop(t){let r=this.images();if((0,P.qv)(r,t.previousIndex,t.currentIndex),!(this.contextData&&this.contextData.record_type&&this.contextData.record_id))return;this.reorderSub?.unsubscribe();const l=this.images().map(h=>h.id).filter(h=>"number"==typeof h&&Number(h)>0);this.reordering.set(!0),this.reorderSub=this.service.updateRecord(this.contextData,l).pipe((0,p.a)(this.destroy$),(0,I.U)(()=>this.reordering.set(!1))).subscribe({next:()=>{this.loadImages()},error:h=>{this.notifications.error((0,y.mk)(h)||"Something went wrong.")}})}removeImage(t){const r=t.id;r&&r>0&&this.contextData&&this.contextData.record_type&&this.contextData.record_id&&(this.removeSub?.unsubscribe(),this.removing.set(!0),this.removeSub=this.service.removeFromRecord(r,this.contextData).pipe((0,p.a)(this.destroy$),(0,I.U)(()=>this.removing.set(!1))).subscribe({next:()=>{this.loadImages()},error:l=>{this.notifications.error((0,y.mk)(l)||"Something went wrong.")}}))}cancel(){this.context.completeWith(null)}saveNewImage(){this.uploadSub?.unsubscribe(),this.savingImage.set(!0),this.uploadSub=this.service.create(this.newImageFormData()).pipe((0,p.a)(this.destroy$),(0,I.U)(()=>this.savingImage.set(!1))).subscribe({next:t=>{this.newImage.setValue(null),this.loadImages()},error:t=>{this.notifications.error((0,y.mk)(t)||"Something went wrong.")}})}loadImages(){this.contextData&&this.contextData.record_type&&this.contextData.record_id&&(this.loadSub?.unsubscribe(),this.loadingImages.set(!0),this.service.search({record_type:this.contextData.record_type,record_id:this.contextData.record_id}).pipe((0,p.a)(this.destroy$),(0,I.U)(()=>this.loadingImages.set(!1))).subscribe({next:t=>{this.data.set(t)},error:t=>{this.notifications.error((0,y.mk)(t)||"Something went wrong.")}}))}newImageFormData(){if(!(this.contextData&&this.contextData.record_type&&this.contextData.record_id))throw new Error("Invalid context data.");if(!this.newImage.valid||!this.newImage.value)throw new Error("Invalid new image.");const t=new FormData;return t.append("image",this.newImage.value),t.append("record_type",this.contextData?.record_type),t.append("record_id",this.contextData?.record_id?.toString()),t}static#e=this.\u0275fac=function(r){return new(r||s)(e.GI1(M.C0))};static#t=this.\u0275cmp=e.In1({type:s,selectors:[["app-images-edit-modal"]],standalone:!0,features:[e.M5G([d.UF]),e.UHJ],decls:2,vars:1,consts:()=>{let t,r,l,h;return t="Are you sure you want to remove this image?",r="Remove image",l="No image.",h="Something went wrong. Please try again later.",[[3,"cropperSettings","loading","formControl"],["cdkDropList","","class","example-list mb-5"],["cdkDropList","",1,"example-list","mb-5",3,"cdkDropListDropped"],["cdkDrag","",1,"mb-3","p-3"],[1,"flex","justify-between","items-center"],[1,"flex","items-center"],["cdkDragHandle","","tuiIconButton","","appearance","icon","size","m","type","button"],[1,"mb-2",2,"max-width","200px",3,"image"],["removeImageContent",""],[3,"content"],["type","button","tuiIconButton","","appearance","icon"],[1,"p-3"],[1,"block","mb-2","text-lg"],t,["type","button","appearance","secondary-destructive","size","m","tuiButton","",3,"click"],r,["cdkDrag","","class","mb-3 p-3"],l,[1,"text-red"],h,[3,"innerText"]]},template:function(r,l){1&r&&e.yuY(0,U,3,6,"app-image-input",0)(1,W,5,3),2&r&&e.C0Y(0,l.contextData&&l.contextData.record_type&&l.contextData.record_id?0:1)},dependencies:[g.c,D.sl,D.ue,D.ug,G.kh,c.CI,c.Kw,m.ED,x.Sk,L,o.y,a.qL,P.Cm,P.w5,P.A3,$.GE,$.Qw,w.A$],styles:[".example-list[_ngcontent-%COMP%]{width:500px;max-width:100%;border:solid 1px #ccc;min-height:60px;display:block;background:#fff;border-radius:4px;overflow:hidden}.example-box[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"],changeDetection:0})}return s})();var X=i(1588);function K(s,u){if(1&s){const t=e.KQA();e.I0R(0,"tui-island",10),e.qCj("click",function(){e.usT(t);const l=e.GaO(3);return e.CGJ(l.showDetails())}),e.wR5(1,"app-show-image",11),e.C$Y()}if(2&s){const t=e.GaO().$implicit;e.yG2(),e.E7m("image",t)}}function Q(s,u){1&s&&e.yuY(0,K,2,1,"tui-island",9)}function J(s,u){if(1&s){const t=e.KQA();e.I0R(0,"tui-island",13),e.qCj("click",function(){e.usT(t);const l=e.GaO(3);return e.CGJ(l.showDetails())}),e.wR5(1,"app-show-image",11),e.C$Y()}2&s&&(e.yG2(),e.E7m("image",null))}function V(s,u){1&s&&e.yuY(0,J,2,1,"tui-island",12)}function Z(s,u){if(1&s){const t=e.KQA();e.I0R(0,"div",0)(1,"button",1),e.qCj("click",function(){e.usT(t);const l=e.Gew(3);return e.CGJ(l.prev())}),e.C$Y(),e.I0R(2,"tui-carousel",2,3),e.qCj("indexChange",function(l){e.usT(t);const h=e.GaO();return e.CGJ(h.cIndex.set(l))}),e.c53(4,Q,1,0,"tui-island",14,e.oxv,!1,V,1,0,"tui-island",15),e.C$Y(),e.I0R(7,"button",4),e.qCj("click",function(){e.usT(t);const l=e.Gew(3);return e.CGJ(l.next())}),e.C$Y()(),e.I0R(8,"button",5),e.qCj("click",function(){e.usT(t);const l=e.GaO();return e.CGJ(l.showDetails())}),e.I0R(9,"span",6)(10,"mat-icon",7),e.OEk(11,"edit"),e.C$Y(),e.I0R(12,"span"),e.aS0(13,8),e.C$Y()()()}if(2&s){const t=e.GaO();e.yG2(),e.E7m("disabled",0===t.cIndex()),e.yG2(),e.E7m("index",t.cIndex()),e.yG2(2),e.oho(t.images),e.yG2(3),e.E7m("disabled",0==t.images.length||t.cIndex()===t.images.length-1)}}let q=(()=>{class s{constructor(){this.dialogs=(0,e.uUt)(n._k),this.injector=(0,e.uUt)(e.zZn),this.images=[],this.cIndex=(0,e.OCB)(0)}showDetails(){this.dialogs.open(new M.WO(j,this.injector),{data:{record_type:this.recordType,record_id:this.recordId},dismissible:!0,closeable:!0,label:"Edit images"}).subscribe({next:t=>{},error:t=>{console.warn("completed with error",t)},complete:()=>{}})}static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275cmp=e.In1({type:s,selectors:[["app-show-images"]],inputs:{images:"images",recordType:"recordType",recordId:"recordId"},standalone:!0,features:[e.M5G([d.UF]),e.UHJ],decls:1,vars:1,consts:()=>{let t;return t="Edit images",[["tuiCarouselButtons","",1,"flex","items-center","mb-2"],["icon","tuiIconChevronLeftLarge","title","Previous","size","s","tuiIconButton","","type","button",3,"disabled","click"],[1,"max-w-[150px]",3,"index","indexChange"],["carousel",""],["icon","tuiIconChevronRightLarge","size","s","title","Next","tuiIconButton","","type","button",3,"disabled","click"],["type","button","tuiButton","","appearance","flat","size","m",3,"click"],[1,"flex","items-center"],[1,"me-1"],t,["class","cursor-pointer",3,"click",4,"tuiItem"],[1,"cursor-pointer",3,"click"],[2,"max-width","100px",3,"image"],["class","!flex cursor-pointer items-center justify-center",3,"click",4,"tuiItem"],[1,"!flex","cursor-pointer","items-center","justify-center",3,"click"],["class","cursor-pointer"],["class","!flex cursor-pointer items-center justify-center"]]},template:function(r,l){1&r&&e.yuY(0,Z,14,4),2&r&&e.C0Y(0,l.images?0:-1)},dependencies:[C.uG,C.iy,C.Ep,C.a2,X.S,c.CI,c.Kw,_.k,_.C,x.Sk,T.g,o.y,a.qL],encapsulation:2,changeDetection:0})}return s})()},2904:(v,f,i)=>{i.d(f,{c:()=>C});var e=i(4496);let C=(()=>{class _{constructor(){this.showDescription=!1,this.configs={}}get validStatus(){return this.validStatusFor(this.status)}get validConfig(){return this.validConfigFor(this.status)}get humanStatus(){return this.humanStatusFor(this.status)}get color(){return this.colorFor(this.status)}get icon(){return this.iconFor(this.status)}get humanDescription(){return this.humanDescriptionFor(this.status)}settingFor(n,c=this.configs){if(this.validStatusFor(n)&&this.validConfigFor(n))return c[n]}validConfigFor(n,c=this.configs){return-1!=Object.keys(c).indexOf(n)}validStatusFor(n){return"string"==typeof n&&null!=n&&null!=n&&n.length>0}humanStatusFor(n,c=this.configs){return this.validStatusFor(n)?this.validConfigFor(n)?c[n].text:n:"(undefined)"}colorFor(n,c=this.configs){return this.validStatusFor(n)&&this.validConfigFor(n)?c[n].color:"inherit"}iconFor(n,c=this.configs){return this.validStatusFor(n)&&this.validConfigFor(n)?c[n].icon:""}humanDescriptionFor(n,c=this.configs){return this.validStatusFor(n)&&this.validConfigFor(n)?c[n].description:""}static#e=this.\u0275fac=function(c){return new(c||_)};static#t=this.\u0275cmp=e.In1({type:_,selectors:[["app-common-item-status"]],inputs:{status:"status",showDescription:"showDescription"},standalone:!0,features:[e.UHJ],decls:1,vars:0,template:function(c,x){1&c&&e.OEk(0,"./common-item.status.html")},encapsulation:2,changeDetection:0})}return _})()},4824:(v,f,i)=>{i.d(f,{o:()=>_});var e=i(8400),C=i(2264);class _ extends e.w{constructor(n){super(n),this.name=n.name,this.description=n.description,this.status=n.status,this.other=n.other,this.translations={...n.translations},n.image&&(this.image=new C.W(n.image))}}},5891:(v,f,i)=>{i.d(f,{S:()=>c});var e=i(8400),C=i(2264),_=i(355),T=i(4824),n=i(532);class c extends e.w{constructor(o){super(o),this.name=o.name,this.description=o.description,this.status=o.status,this.price=o.price,this.translations=o.translations,this.images=o.images?o.images.map(a=>new C.W(a)):[],this.suggestions=o.suggestions?o.suggestions.map(a=>new c(a)):[],this.tags=o.tags?o.tags.map(a=>new _.E(a)):[],this.allergens=o.allergens?o.allergens.map(a=>new T.o(a)):[],this.ingredients=o.ingredients?o.ingredients.map(a=>new n.e(a)):[]}}},532:(v,f,i)=>{i.d(f,{e:()=>_});var e=i(8400),C=i(2264);class _ extends e.w{constructor(n){super(n),this.name=n.name,this.description=n.description,this.status=n.status,this.other=n.other,this.translations={...n.translations},n.image&&(this.image=new C.W(n.image))}}},355:(v,f,i)=>{i.d(f,{E:()=>_});var e=i(8400),C=i(2264);class _ extends e.w{constructor(n){super(n),this.name=n.name,this.description=n.description,this.status=n.status,this.other=n.other,this.translations={...n.translations},this.color=n.color,n.image&&(this.image=new C.W(n.image))}}},8676:(v,f,i)=>{i.d(f,{k:()=>n});var e=i(6012),C=i(5891),_=i(4704),T=i(4496);let n=(()=>{class c extends e.s{constructor(){super(C.S,"admin/menu/dishes")}copy(o,a){return this.post(`${o}/copy`,a).pipe((0,_.k)(d=>this.mapItem(d)))}move(o,a){return this.patch(`${o}/move`,a).pipe((0,_.k)(d=>this.mapItem(d)))}moveIngredient(o,a,d){return this.patch(`${o}/ingredients/${a}/move`,{to_index:d}).pipe((0,_.k)(M=>this.mapItem(M)))}moveTag(o,a,d){return this.patch(`${o}/tags/${a}/move`,{to_index:d}).pipe((0,_.k)(M=>this.mapItem(M)))}moveAllergen(o,a,d){return this.patch(`${o}/allergens/${a}/move`,{to_index:d}).pipe((0,_.k)(M=>this.mapItem(M)))}updateStatus(o,a){return this.patch(`${o}/status/${a}`,{}).pipe((0,_.k)(d=>this.mapItem(d)))}addIngredient(o,a){return this.post(`${o}/ingredients/${a}`,{}).pipe((0,_.k)(d=>this.mapItem(d)))}removeIngredient(o,a){return this.delete(`${o}/ingredients/${a}`).pipe((0,_.k)(d=>this.mapItem(d)))}addTag(o,a){return this.post(`${o}/tags/${a}`,{}).pipe((0,_.k)(d=>this.mapItem(d)))}removeTag(o,a){return this.delete(`${o}/tags/${a}`).pipe((0,_.k)(d=>this.mapItem(d)))}addAllergen(o,a){return this.post(`${o}/allergens/${a}`,{}).pipe((0,_.k)(d=>this.mapItem(d)))}removeAllergen(o,a){return this.delete(`${o}/allergens/${a}`).pipe((0,_.k)(d=>this.mapItem(d)))}references(o){return this.get(`${o}/references`).pipe((0,_.k)(a=>a))}addSuggestion(o,a){return this.post(`${o}/suggestions/${a}`,{}).pipe((0,_.k)(d=>this.mapItem(d)))}removeSuggestion(o,a){return this.delete(`${o}/suggestions/${a}`).pipe((0,_.k)(d=>this.mapItem(d)))}static#e=this.\u0275fac=function(a){return new(a||c)};static#t=this.\u0275prov=T.wxM({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()}}]);