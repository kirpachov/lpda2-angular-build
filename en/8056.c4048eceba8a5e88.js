"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[8056],{5004:(D,f,i)=>{i.d(f,{O:()=>v});var e=i(4496),C=i(8016),c=i(8212),M=i(1560),n=i(1040),d=i(3480),x=i(3616),o=i(6504),l=i(9064),_=i(9956);let S=(()=>{class h{constructor(m){this.context=m,this.submitted=!1,this.form=new o.WC({name:new o.Ku(null),description:new o.Ku(null)}),this.form.patchValue(this.context.data)}submit(){this.submitted=!0,!this.form.invalid&&this.context.completeWith(this.form.value)}cancel(){this.context.completeWith(null)}e(m){const p=this.form.get(m);return p&&(this.submitted||p.dirty||p.touched)?p.errors:null}static#e=this.\u0275fac=function(p){return new(p||h)(e.GI1(n.C0))};static#t=this.\u0275cmp=e.In1({type:h,selectors:[["app-edit-name-desc-modal"]],standalone:!0,features:[e.UHJ],decls:18,vars:4,consts:()=>{let m,p,E,I;return m="Name",p="Description",E="Confirm",I="Cancel",[[3,"formGroup","ngSubmit"],[1,"mb-3"],["formControlName","name"],m,[3,"errors"],["formControlName","description",3,"long"],p,[1,"flex","items-center"],["type","submit","tuiButton","","size","l","appearance","primary",1,"me-2"],E,["type","button","tuiButton","","size","l","appearance","outline",3,"click"],I]},template:function(p,E){1&p&&(e.I0R(0,"form",0),e.qCj("ngSubmit",function(){return E.submit()}),e.I0R(1,"div",1)(2,"app-i18n-input",2),e.SAx(3),e.aS0(4,3),e.k70(),e.C$Y(),e.wR5(5,"app-errors",4),e.C$Y(),e.I0R(6,"div",1)(7,"app-i18n-input",5),e.SAx(8),e.aS0(9,6),e.k70(),e.C$Y(),e.wR5(10,"app-errors",4),e.C$Y(),e.I0R(11,"div",7)(12,"button",8),e.SAx(13),e.aS0(14,9),e.k70(),e.C$Y(),e.I0R(15,"button",10),e.qCj("click",function(){return E.cancel()}),e.SAx(16),e.aS0(17,11),e.k70(),e.C$Y()()()),2&p&&(e.E7m("formGroup",E.form),e.yG2(5),e.E7m("errors",E.e("name")),e.yG2(2),e.E7m("long",!0),e.yG2(3),e.E7m("errors",E.e("description")))},dependencies:[o.sl,o.sz,o.ue,o.u,o.uW,o.Wo,l.w,_.g,c.CI,c.Kw],encapsulation:2})}return h})();function y(h,$){if(1&h&&e.OEk(0),2&h){const m=e.GaO();e.oRS(" ",m.translations.name.it," ")}}function G(h,$){if(1&h&&e.OEk(0),2&h){const m=e.GaO();e.oRS(" ",m.translations.description.it," ")}}function R(h,$){if(1&h&&e.OEk(0),2&h){const m=e.GaO();e.oRS(" ",m.translations.name.en," ")}}function w(h,$){if(1&h&&e.OEk(0),2&h){const m=e.GaO();e.oRS(" ",m.translations.description.en," ")}}let v=(()=>{class h{constructor(){this.dialogs=(0,e.uUt)(C._k),this.injector=(0,e.uUt)(e.zZn),this.destroy$=(0,e.uUt)(d.UF),this.submittedChanges=new e._w7}showDialog(){this.dialogs.open(new n.WO(S,this.injector),{data:this.translations,dismissible:!1,label:"Edit name or description"}).pipe((0,x.a)(this.destroy$)).subscribe({next:m=>{m&&this.submittedChanges.emit(m)},error:m=>{console.warn("completed with error",m)},complete:()=>{}})}static#e=this.\u0275fac=function(p){return new(p||h)};static#t=this.\u0275cmp=e.In1({type:h,selectors:[["app-name-desc-eip"]],inputs:{translations:"translations"},outputs:{submittedChanges:"submittedChanges"},standalone:!0,features:[e.M5G([d.UF]),e.UHJ],decls:35,vars:4,consts:()=>{let m,p,E,I,N,P;return m="Language",p="Name",E="Description",I="Italian",N="English",P="Edit name or description",[[1,"tui-table"],[1,"tui-table__tr"],[1,"tui-table__th"],m,p,E,[1,"tui-table__tr","tui-table__tr_border_none"],[1,"tui-table__td"],I,[1,"tui-table__td","tui-table__td_last"],N,["size","m","tuiButton","","appearance","flat","type","button",3,"click"],[1,"flex","items-center"],[1,"me-1"],P]},template:function(p,E){1&p&&(e.I0R(0,"table",0)(1,"thead")(2,"tr",1)(3,"th",2),e.SAx(4),e.aS0(5,3),e.k70(),e.C$Y(),e.I0R(6,"th",2),e.SAx(7),e.aS0(8,4),e.k70(),e.C$Y(),e.I0R(9,"th",2),e.SAx(10),e.aS0(11,5),e.k70(),e.C$Y()()(),e.I0R(12,"tbody")(13,"tr",6)(14,"td",7)(15,"span"),e.aS0(16,8),e.C$Y()(),e.I0R(17,"td",7),e.yuY(18,y,1,1),e.C$Y(),e.I0R(19,"td",9),e.yuY(20,G,1,1),e.C$Y()(),e.I0R(21,"tr",6)(22,"td",7)(23,"span"),e.aS0(24,10),e.C$Y()(),e.I0R(25,"td",7),e.yuY(26,R,1,1),e.C$Y(),e.I0R(27,"td",9),e.yuY(28,w,1,1),e.C$Y()()()(),e.I0R(29,"button",11),e.qCj("click",function(){return E.showDialog()}),e.I0R(30,"span",12)(31,"mat-icon",13),e.OEk(32,"edit"),e.C$Y(),e.SAx(33),e.aS0(34,14),e.k70(),e.C$Y()()),2&p&&(e.yG2(18),e.C0Y(18,E.translations&&E.translations.name?18:-1),e.yG2(2),e.C0Y(20,E.translations&&E.translations.description?20:-1),e.yG2(6),e.C0Y(26,E.translations&&E.translations.name?26:-1),e.yG2(2),e.C0Y(28,E.translations&&E.translations.description?28:-1))},dependencies:[c.CI,c.Kw,M.qL],encapsulation:2,changeDetection:0})}return h})()},1264:(D,f,i)=>{i.d(f,{g:()=>ie});var e=i(4496),C=i(668),c=i(6376),M=i(8896),n=i(8016),d=i(8212),x=i(7692),o=i(9052),l=i(1560),_=i(3480),S=i(1040),y=i(7760),G=i(9880),R=i(466),w=i(4336),v=i(6504),h=i(4152),$=i(1128),m=i(1368),p=i(3616),E=i(9144),I=i(2700),N=i(4e3),P=i(6684),T=i(8824),A=i(8256),F=i(2264);let z=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.a4G({type:s}),s.\u0275inj=e.s3X({}),s})();var b=i(3400);const B=(s,u)=>u.id;function U(s,u){if(1&s){const t=e.KQA();e.I0R(0,"div",11)(1,"span",12),e.aS0(2,13),e.C$Y(),e.I0R(3,"button",14),e.qCj("click",function(){e.usT(t);const a=e.GaO().$implicit,g=e.GaO(3);return e.CGJ(g.removeImage(a))}),e.SAx(4),e.aS0(5,15),e.k70(),e.C$Y()()}}const k=s=>({scale:s});function Y(s,u){if(1&s){const t=e.KQA();e.I0R(0,"div",3)(1,"div",4)(2,"div",5)(3,"button",6)(4,"mat-icon"),e.OEk(5,"drag_indicator"),e.C$Y()(),e.I0R(6,"app-image-input",7),e.qCj("ngModelChange",function(a){const O=e.usT(t).$implicit,L=e.GaO(3);return e.CGJ(L.updateImage(a,O))}),e.C$Y()(),e.yuY(7,U,6,0,"ng-template",null,8,e.gJz),e.I0R(9,"div",5)(10,"tui-hosted-dropdown",9)(11,"button",10)(12,"mat-icon"),e.OEk(13,"delete"),e.C$Y()()()()()()}if(2&s){const t=u.$implicit,r=e.Gew(8),a=e.GaO(3);e.yG2(6),e.E7m("showBorder",!1)("cropperSettings",e.S45(5,k,4/3))("loading",a.savingImage())("ngModel",t),e.yG2(4),e.E7m("content",r)}}function H(s,u){if(1&s){const t=e.KQA();e.I0R(0,"div",2),e.qCj("cdkDropListDropped",function(a){e.usT(t);const g=e.GaO(2);return e.CGJ(g.drop(a))}),e.c53(1,Y,14,7,"div",16,B),e.C$Y()}if(2&s){const t=e.GaO(2);e.yG2(),e.oho(t.images())}}function W(s,u){1&s&&(e.I0R(0,"p"),e.aS0(1,17),e.C$Y())}function j(s,u){if(1&s&&(e.yuY(0,H,3,0,"div",1)(1,W,2,0),e.wR5(2,"app-image-input",0)),2&s){const t=e.GaO();e.C0Y(0,t.images().length>0?0:1),e.yG2(2),e.E7m("cropperSettings",e.S45(4,k,4/3))("loading",t.savingImage())("formControl",t.newImage)}}function X(s,u){if(1&s&&(e.I0R(0,"p",18),e.SAx(1),e.aS0(2,19),e.k70(),e.C$Y(),e.wR5(3,"pre",20),e.wVc(4,"json")),2&s){const t=e.GaO();e.yG2(3),e.E7m("innerText",e.kDX(4,1,t.contextData))}}let K=(()=>{class s{constructor(t){this.context=t,this.destroy$=(0,e.uUt)(_.UF),this.service=(0,e.uUt)(y.U),this.notifications=(0,e.uUt)($.E),this.newImage=new v.Ku(null),this.data=(0,e.OCB)(null),this.images=(0,e.S6b)(()=>this.data()?.items??[]),this.reordering=(0,e.OCB)(!1),this.removing=(0,e.OCB)(!1),this.savingImage=(0,e.OCB)(!1),this.loadingImages=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.loadingImages()||this.savingImage()||this.removing()||this.reordering()),this.contextData=this.context.data??null}ngOnInit(){this.loadImages(),this.newImage.valueChanges.pipe((0,p.a)(this.destroy$),(0,E.a)(()=>(0,I.of)(null)),(0,N.a)(),(0,P.I)(t=>null!=t)).subscribe({next:()=>this.saveNewImage()})}drop(t){let r=this.images();if((0,b.qv)(r,t.previousIndex,t.currentIndex),!(this.contextData&&this.contextData.record_type&&this.contextData.record_id))return;this.reorderSub?.unsubscribe();const a=this.images().map(g=>g.id).filter(g=>"number"==typeof g&&Number(g)>0);this.reordering.set(!0),this.reorderSub=this.service.updateRecord(this.contextData,a).pipe((0,p.a)(this.destroy$),(0,T.U)(()=>this.reordering.set(!1))).subscribe({next:()=>{this.loadImages()},error:g=>{this.notifications.error((0,A.mk)(g)||"Something went wrong.")}})}updateImage(t,r){if(!(t instanceof Blob&&r instanceof F.W&&r.id))return void this.notifications.error();const a=new FormData;a.append("image",t),this.savingImage.set(!0),this.service.update(r.id,a).pipe((0,p.a)(this.destroy$),(0,T.U)(()=>this.savingImage.set(!1))).subscribe({next:()=>this.loadImages(),error:g=>this.notifications.error((0,A.mk)(g))})}removeImage(t){const r=t.id;r&&r>0&&this.contextData&&this.contextData.record_type&&this.contextData.record_id&&(this.removeSub?.unsubscribe(),this.removing.set(!0),this.removeSub=this.service.removeFromRecord(r,this.contextData).pipe((0,p.a)(this.destroy$),(0,T.U)(()=>this.removing.set(!1))).subscribe({next:()=>{this.loadImages()},error:a=>{this.notifications.error((0,A.mk)(a)||"Something went wrong.")}}))}cancel(){this.context.completeWith(null)}saveNewImage(){this.uploadSub?.unsubscribe(),this.savingImage.set(!0),this.uploadSub=this.service.create(this.newImageFormData()).pipe((0,p.a)(this.destroy$),(0,T.U)(()=>this.savingImage.set(!1))).subscribe({next:t=>{this.newImage.setValue(null),this.loadImages()},error:t=>{this.notifications.error((0,A.mk)(t)||"Something went wrong.")}})}loadImages(){this.contextData&&this.contextData.record_type&&this.contextData.record_id&&(this.loadSub?.unsubscribe(),this.loadingImages.set(!0),this.service.search({record_type:this.contextData.record_type,record_id:this.contextData.record_id}).pipe((0,p.a)(this.destroy$),(0,T.U)(()=>this.loadingImages.set(!1))).subscribe({next:t=>{this.data.set(t)},error:t=>{this.notifications.error((0,A.mk)(t)||"Something went wrong.")}}))}newImageFormData(){if(!(this.contextData&&this.contextData.record_type&&this.contextData.record_id))throw new Error("Invalid context data.");if(!this.newImage.valid||!this.newImage.value)throw new Error("Invalid new image.");const t=new FormData;return t.append("image",this.newImage.value),t.append("record_type",this.contextData?.record_type),t.append("record_id",this.contextData?.record_id?.toString()),t}static#e=this.\u0275fac=function(r){return new(r||s)(e.GI1(S.C0))};static#t=this.\u0275cmp=e.In1({type:s,selectors:[["app-images-edit-modal"]],standalone:!0,features:[e.M5G([_.UF]),e.UHJ],decls:2,vars:1,consts:()=>{let t,r,a,g;return t="Are you sure you want to remove this image?",r="Remove image",a="No image.",g="Something went wrong. Please try again later.",[[3,"cropperSettings","loading","formControl"],["cdkDropList","","class","example-list mb-5"],["cdkDropList","",1,"example-list","mb-5",3,"cdkDropListDropped"],["cdkDrag","",1,"mb-3","p-3"],[1,"flex","justify-between","items-center"],[1,"flex","items-center"],["cdkDragHandle","","tuiIconButton","","appearance","icon","size","m","type","button"],[3,"showBorder","cropperSettings","loading","ngModel","ngModelChange"],["removeImageContent",""],[3,"content"],["type","button","tuiIconButton","","appearance","icon"],[1,"p-3"],[1,"block","mb-2","text-lg"],t,["type","button","appearance","secondary-destructive","size","m","tuiButton","",3,"click"],r,["cdkDrag","","class","mb-3 p-3"],a,[1,"text-red"],g,[3,"innerText"]]},template:function(r,a){1&r&&e.yuY(0,j,3,6,"app-image-input",0)(1,X,5,3),2&r&&e.C0Y(0,a.contextData&&a.contextData.record_type&&a.contextData.record_id?0:1)},dependencies:[h.c,v.sl,v.ue,v.ug,G.kh,d.CI,d.Kw,m.ED,x.Sk,z,l.qL,b.Cm,b.w5,b.A3,R.GE,R.Qw,w.A$,v.y,v._G],styles:[".example-list[_ngcontent-%COMP%]{width:500px;max-width:100%;border:solid 1px #ccc;min-height:60px;display:block;background:#fff;border-radius:4px;overflow:hidden}.example-box[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"],changeDetection:0})}return s})();var Q=i(1588);function J(s,u){if(1&s){const t=e.KQA();e.I0R(0,"tui-island",10),e.qCj("click",function(){e.usT(t);const a=e.GaO(3);return e.CGJ(a.showDetails())}),e.wR5(1,"app-show-image",11),e.C$Y()}if(2&s){const t=e.GaO().$implicit;e.yG2(),e.E7m("image",t)}}function V(s,u){1&s&&e.yuY(0,J,2,1,"tui-island",9)}function Z(s,u){if(1&s){const t=e.KQA();e.I0R(0,"tui-island",13),e.qCj("click",function(){e.usT(t);const a=e.GaO(3);return e.CGJ(a.showDetails())}),e.wR5(1,"app-show-image",11),e.C$Y()}2&s&&(e.yG2(),e.E7m("image",null))}function q(s,u){1&s&&e.yuY(0,Z,2,1,"tui-island",12)}function ee(s,u){if(1&s){const t=e.KQA();e.I0R(0,"div",0)(1,"button",1),e.qCj("click",function(){e.usT(t);const a=e.Gew(3);return e.CGJ(a.prev())}),e.C$Y(),e.I0R(2,"tui-carousel",2,3),e.qCj("indexChange",function(a){e.usT(t);const g=e.GaO();return e.CGJ(g.cIndex.set(a))}),e.c53(4,V,1,0,"tui-island",14,e.oxv,!1,q,1,0,"tui-island",15),e.C$Y(),e.I0R(7,"button",4),e.qCj("click",function(){e.usT(t);const a=e.Gew(3);return e.CGJ(a.next())}),e.C$Y()(),e.I0R(8,"button",5),e.qCj("click",function(){e.usT(t);const a=e.GaO();return e.CGJ(a.showDetails())}),e.I0R(9,"span",6)(10,"mat-icon",7),e.OEk(11,"edit"),e.C$Y(),e.I0R(12,"span"),e.aS0(13,8),e.C$Y()()()}if(2&s){const t=e.GaO();e.yG2(),e.E7m("disabled",0===t.cIndex()),e.yG2(),e.E7m("index",t.cIndex()),e.yG2(2),e.oho(t.images),e.yG2(3),e.E7m("disabled",0==t.images.length||t.cIndex()===t.images.length-1)}}function te(s,u){1&s&&e.wR5(0,"tui-loader",16),2&s&&e.E7m("showLoader",!0)}let ie=(()=>{class s{constructor(){this.dialogs=(0,e.uUt)(n._k),this.injector=(0,e.uUt)(e.zZn),this.service=(0,e.uUt)(y.U),this.destroy$=(0,e.uUt)(_.UF),this.notifications=(0,e.uUt)($.E),this.cd=(0,e.uUt)(e.kD9),this.loadingImages=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.loadingImages()),this.images=[],this.cIndex=(0,e.OCB)(0)}showDetails(){this.dialogs.open(new S.WO(K,this.injector),{data:{record_type:this.recordType,record_id:this.recordId},dismissible:!0,closeable:!0,label:"Edit images"}).subscribe({next:t=>{console.log("next with data",t),this.reloadImages()},error:t=>{this.reloadImages(),console.warn("completed with error",t)},complete:()=>{console.log("complete with data"),this.reloadImages()}})}reloadImages(){this.recordType&&this.recordId?(this.loadingImages.set(!0),this.service.search({record_type:this.recordType,record_id:this.recordId}).pipe((0,p.a)(this.destroy$),(0,T.U)(()=>this.loadingImages.set(!1))).subscribe({next:t=>{this.images=t.items,this.cd.markForCheck()},error:t=>{this.notifications.error((0,A.mk)(t))}})):this.notifications.error()}static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275cmp=e.In1({type:s,selectors:[["app-show-images"]],inputs:{images:"images",recordType:"recordType",recordId:"recordId"},standalone:!0,features:[e.M5G([_.UF]),e.UHJ],decls:2,vars:1,consts:()=>{let t;return t="Edit images",[["tuiCarouselButtons","",1,"flex","items-center","mb-2"],["icon","tuiIconChevronLeftLarge","title","Previous","size","s","tuiIconButton","","type","button",3,"disabled","click"],[1,"max-w-[150px]",3,"index","indexChange"],["carousel",""],["icon","tuiIconChevronRightLarge","size","s","title","Next","tuiIconButton","","type","button",3,"disabled","click"],["type","button","tuiButton","","appearance","flat","size","m",3,"click"],[1,"flex","items-center"],[1,"me-1"],t,["class","cursor-pointer",3,"click",4,"tuiItem"],[1,"cursor-pointer",3,"click"],[2,"max-width","100px",3,"image"],["class","!flex cursor-pointer items-center justify-center",3,"click",4,"tuiItem"],[1,"!flex","cursor-pointer","items-center","justify-center",3,"click"],["class","cursor-pointer"],["class","!flex cursor-pointer items-center justify-center"],[3,"showLoader"]]},template:function(r,a){1&r&&e.yuY(0,ee,14,4)(1,te,1,1),2&r&&e.C0Y(0,a.images?0:a.loading()?1:-1)},dependencies:[C.uG,C.iy,C.Ep,C.a2,Q.S,d.CI,d.Kw,c.k,c.C,x.Sk,x.Cb,M.g,o.y,l.qL],encapsulation:2,changeDetection:0})}return s})()},2904:(D,f,i)=>{i.d(f,{c:()=>C});var e=i(4496);let C=(()=>{class c{constructor(){this.showDescription=!1,this.configs={}}get validStatus(){return this.validStatusFor(this.status)}get validConfig(){return this.validConfigFor(this.status)}get humanStatus(){return this.humanStatusFor(this.status)}get color(){return this.colorFor(this.status)}get icon(){return this.iconFor(this.status)}get humanDescription(){return this.humanDescriptionFor(this.status)}settingFor(n,d=this.configs){if(this.validStatusFor(n)&&this.validConfigFor(n))return d[n]}validConfigFor(n,d=this.configs){return-1!=Object.keys(d).indexOf(n)}validStatusFor(n){return"string"==typeof n&&null!=n&&null!=n&&n.length>0}humanStatusFor(n,d=this.configs){return this.validStatusFor(n)?this.validConfigFor(n)?d[n].text:n:"(undefined)"}colorFor(n,d=this.configs){return this.validStatusFor(n)&&this.validConfigFor(n)?d[n].color:"inherit"}iconFor(n,d=this.configs){return this.validStatusFor(n)&&this.validConfigFor(n)?d[n].icon:""}humanDescriptionFor(n,d=this.configs){return this.validStatusFor(n)&&this.validConfigFor(n)?d[n].description:""}static#e=this.\u0275fac=function(d){return new(d||c)};static#t=this.\u0275cmp=e.In1({type:c,selectors:[["app-common-item-status"]],inputs:{status:"status",showDescription:"showDescription"},standalone:!0,features:[e.UHJ],decls:1,vars:0,template:function(d,x){1&d&&e.OEk(0,"./common-item.status.html")},encapsulation:2,changeDetection:0})}return c})()},4824:(D,f,i)=>{i.d(f,{o:()=>c});var e=i(8400),C=i(2264);class c extends e.w{constructor(n){super(n),this.name=n.name,this.description=n.description,this.status=n.status,this.other=n.other,this.translations={...n.translations},n.image&&(this.image=new C.W(n.image))}}},5891:(D,f,i)=>{i.d(f,{S:()=>d});var e=i(8400),C=i(2264),c=i(355),M=i(4824),n=i(532);class d extends e.w{constructor(o){super(o),this.name=o.name,this.description=o.description,this.status=o.status,this.price=o.price,this.translations=o.translations,this.images=o.images?o.images.map(l=>new C.W(l)):[],this.suggestions=o.suggestions?o.suggestions.map(l=>new d(l)):[],this.tags=o.tags?o.tags.map(l=>new c.E(l)):[],this.allergens=o.allergens?o.allergens.map(l=>new M.o(l)):[],this.ingredients=o.ingredients?o.ingredients.map(l=>new n.e(l)):[]}}},532:(D,f,i)=>{i.d(f,{e:()=>c});var e=i(8400),C=i(2264);class c extends e.w{constructor(n){super(n),this.name=n.name,this.description=n.description,this.status=n.status,this.other=n.other,this.translations={...n.translations},n.image&&(this.image=new C.W(n.image))}}},355:(D,f,i)=>{i.d(f,{E:()=>c});var e=i(8400),C=i(2264);class c extends e.w{constructor(n){super(n),this.name=n.name,this.description=n.description,this.status=n.status,this.other=n.other,this.translations={...n.translations},this.color=n.color,n.image&&(this.image=new C.W(n.image))}}},8676:(D,f,i)=>{i.d(f,{k:()=>n});var e=i(6012),C=i(5891),c=i(4704),M=i(4496);let n=(()=>{class d extends e.s{constructor(){super(C.S,"admin/menu/dishes")}updatePrices(o){return(null==o.filters||null==o.filters)&&delete o.filters,this.patch("update_prices",o)}copy(o,l){return this.post(`${o}/copy`,l).pipe((0,c.k)(_=>this.mapItem(_)))}move(o,l){return this.patch(`${o}/move`,l).pipe((0,c.k)(_=>this.mapItem(_)))}moveIngredient(o,l,_){return this.patch(`${o}/ingredients/${l}/move`,{to_index:_}).pipe((0,c.k)(S=>this.mapItem(S)))}moveTag(o,l,_){return this.patch(`${o}/tags/${l}/move`,{to_index:_}).pipe((0,c.k)(S=>this.mapItem(S)))}moveAllergen(o,l,_){return this.patch(`${o}/allergens/${l}/move`,{to_index:_}).pipe((0,c.k)(S=>this.mapItem(S)))}updateStatus(o,l){return this.patch(`${o}/status/${l}`,{}).pipe((0,c.k)(_=>this.mapItem(_)))}addIngredient(o,l){return this.post(`${o}/ingredients/${l}`,{}).pipe((0,c.k)(_=>this.mapItem(_)))}removeIngredient(o,l){return this.delete(`${o}/ingredients/${l}`).pipe((0,c.k)(_=>this.mapItem(_)))}addTag(o,l){return this.post(`${o}/tags/${l}`,{}).pipe((0,c.k)(_=>this.mapItem(_)))}removeTag(o,l){return this.delete(`${o}/tags/${l}`).pipe((0,c.k)(_=>this.mapItem(_)))}addAllergen(o,l){return this.post(`${o}/allergens/${l}`,{}).pipe((0,c.k)(_=>this.mapItem(_)))}removeAllergen(o,l){return this.delete(`${o}/allergens/${l}`).pipe((0,c.k)(_=>this.mapItem(_)))}references(o){return this.get(`${o}/references`).pipe((0,c.k)(l=>l))}addSuggestion(o,l){return this.post(`${o}/suggestions/${l}`,{}).pipe((0,c.k)(_=>this.mapItem(_)))}removeSuggestion(o,l){return this.delete(`${o}/suggestions/${l}`).pipe((0,c.k)(_=>this.mapItem(_)))}static#e=this.\u0275fac=function(l){return new(l||d)};static#t=this.\u0275prov=M.wxM({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()}}]);