"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[3036],{3036:(x,f,n)=>{n.r(f),n.d(f,{AdminIngredientsHomeComponent:()=>Z});var t=n(4496),p=n(1368),s=n(6504),m=n(3797),i=n(3480),A=n(5e3),l=n(8212),_=n(1512),u=n(1560),P=n(1236),r=n(9052),C=n(5892),I=n(8432),b=n(1128),$=n(5657),k=n(3412),B=n(2300),L=n(9212),g=n(4704),R=n(1192),O=n(6684),T=n(3616),S=n(8824),U=n(4872),Y=n(1343),j=n(8256),H=n(7936);function z(c,v){1&c&&(t.SAx(0),t.aS0(1,13),t.k70())}function e(c,v){1&c&&(t.SAx(0),t.aS0(1,14),t.k70())}function M(c,v){1&c&&(t.SAx(0),t.aS0(1,15),t.k70())}const o=(c,v)=>v.id;function E(c,v){1&c&&t.C_f(0)}function h(c,v){1&c&&t.C_f(0)}function G(c,v){1&c&&t.C_f(0)}function K(c,v){1&c&&t.C_f(0)}function F(c,v){1&c&&t.C_f(0)}function X(c,v){1&c&&t.C_f(0)}function J(c,v){if(1&c){const a=t.KQA();t.I0R(0,"tr")(1,"td")(2,"span",20),t.yuY(3,K,1,0,"ng-container",18),t.C$Y(),t.wR5(4,"app-show-image",21),t.C$Y(),t.I0R(5,"td")(6,"span",20),t.yuY(7,F,1,0,"ng-container",18),t.C$Y(),t.I0R(8,"span"),t.OEk(9),t.C$Y()(),t.I0R(10,"td")(11,"span",20),t.yuY(12,X,1,0,"ng-container",18),t.C$Y(),t.I0R(13,"span"),t.OEk(14),t.C$Y()(),t.I0R(15,"td")(16,"div",22)(17,"a",23)(18,"mat-icon"),t.OEk(19,"edit"),t.C$Y()(),t.I0R(20,"button",24),t.qCj("click",function(){const N=t.usT(a).$implicit,y=t.GaO(2);return t.CGJ(y.delete(N.id))}),t.I0R(21,"mat-icon"),t.OEk(22,"delete"),t.C$Y()()()()()}if(2&c){const a=v.$implicit;t.GaO(2);const d=t.Gew(23),D=t.Gew(19),N=t.Gew(21);t.yG2(3),t.E7m("ngTemplateOutlet",d),t.yG2(),t.E7m("image",a.image),t.yG2(3),t.E7m("ngTemplateOutlet",D),t.yG2(2),t.cNF(a.name),t.yG2(3),t.E7m("ngTemplateOutlet",N),t.yG2(2),t.cNF(a.description),t.yG2(3),t._6D("routerLink",a.id)}}const Q=()=>[10,20,50,100];function V(c,v){if(1&c){const a=t.KQA();t.I0R(0,"table",16)(1,"thead")(2,"tr")(3,"th",17),t.yuY(4,E,1,0,"ng-container",18),t.C$Y(),t.I0R(5,"th",17),t.yuY(6,h,1,0,"ng-container",18),t.C$Y(),t.I0R(7,"th",17),t.yuY(8,G,1,0,"ng-container",18),t.C$Y(),t.wR5(9,"th"),t.C$Y()(),t.I0R(10,"tbody"),t.c53(11,J,23,7,"tr",null,o),t.C$Y()(),t.I0R(13,"tui-table-pagination",19),t.qCj("paginationChange",function(D){t.usT(a);const N=t.GaO();return t.CGJ(N.paginationChange(D))}),t.C$Y()}if(2&c){const a=t.GaO(),d=t.Gew(23),D=t.Gew(19),N=t.Gew(21);let y;t.yG2(4),t.E7m("ngTemplateOutlet",d),t.yG2(2),t.E7m("ngTemplateOutlet",D),t.yG2(2),t.E7m("ngTemplateOutlet",N),t.yG2(3),t.oho(a.items()),t.yG2(2),t.E7m("items",t.q4q(5,Q))("total",null!==(y=null==(y=a.data())||null==y.metadata?null:y.metadata.total_count)&&void 0!==y?y:0)}}let Z=(()=>{class c{constructor(){this.loading=(0,t.OCB)(!1),this.data=(0,t.OCB)(null),this.items=(0,t.S6b)(()=>this.data()?.items||[]),this.service=(0,t.uUt)(I.K),this.notifications=(0,t.uUt)(b.E),this.destroy$=(0,t.uUt)(i.UF),this.form=new s.WC({query:new s.Ku(""),offset:new s.Ku(0,[s.AQ.min(0),s.AQ.required]),per_page:new s.Ku(10,[s.AQ.min(1),s.AQ.required])}),this.search$=new $.E,this._filter$=(0,k.U)(this.form.get("query").valueChanges.pipe((0,B.o)(1e3),(0,L.y)(()=>this.form.patchValue({offset:0},{emitEvent:!1})),(0,g.k)(()=>"query")),...["offset","per_page"].map(a=>this.form.get(a).valueChanges.pipe((0,R.o)(10),(0,g.k)(()=>"filters"))),this.search$.pipe((0,g.k)(()=>"search"))).pipe((0,g.k)(a=>[a,this.form.value]),(0,g.k)(()=>this.form.value),(0,U.ay)(),(0,O.I)(()=>this.form.valid),(0,L.y)(a=>{const d={...a};d.query&&"string"==typeof d.query&&d.query.length>0||delete d.query,this.search(d)})).subscribe((0,Y.I)())}ngOnInit(){this.search(),this.form.valueChanges.pipe((0,T.a)(this.destroy$)).subscribe(()=>this.search())}formSubmit(){this.search()}delete(a){a&&this.notifications.confirm("Are you sure you want to delete this ingredient?").subscribe({next:d=>{d&&this.confirmedDelete(a)}})}confirmedDelete(a){this.loading.set(!0),this.service.destroy(a).pipe((0,T.a)(this.destroy$),(0,S.U)(()=>{this.loading.set(!1),this.search()})).subscribe({error:d=>{this.notifications.error((0,j.mk)(d)||"Something went wrong with the cancellation.")}})}search(a=this.form.value){this.loading.set(!0),this.service.search(a).pipe((0,T.a)(this.destroy$),(0,S.U)(()=>this.loading.set(!1))).subscribe({next:d=>{this.data.set(d)}})}paginationChange(a){this.form.patchValue({offset:a.page,per_page:a.size})}static#t=this.\u0275fac=function(d){return new(d||c)};static#n=this.\u0275cmp=t.In1({type:c,selectors:[["app-admin-ingredients-home"]],standalone:!0,features:[t.M5G([i.UF]),t.UHJ],decls:26,vars:4,consts:()=>{let a,d,D,N,y,w;return a="Ingredients",d="Filter ingredients",D="New",N="Name",y="Description",w="Image",[a,[1,"flex","items-center","mb-3"],[1,"me-2",3,"formGroup","ngSubmit"],["formControlName","query",1,"!inline-block","min-w-[250px]",3,"tuiAutoFocus"],d,["tuiTextfield",""],["type","submit","tuiIconButton","","appearance","flat",1,"ms-2",3,"showLoader"],["routerLink","new","tuiLink",""],[1,"flex","items-center"],D,["nameCol",""],["descriptionCol",""],["imageCol",""],N,y,w,[1,"responsive-table","collapse-md"],[1,"text-start"],[4,"ngTemplateOutlet"],[1,"my-2",3,"items","total","paginationChange"],[1,"collapse-header"],[2,"max-width","100px",3,"image"],[1,"flex","items-baseline"],["size","m","tuiIconButton","","appearance","flat",1,"me-1",3,"routerLink"],["size","m","type","button","tuiIconButton","","appearance","secondary-destructive",3,"click"]]},template:function(d,D){1&d&&(t.I0R(0,"h1"),t.SAx(1),t.aS0(2,0),t.k70(),t.C$Y(),t.I0R(3,"div",1)(4,"form",2),t.qCj("ngSubmit",function(){return D.formSubmit()}),t.I0R(5,"tui-input",3),t.SAx(6),t.aS0(7,4),t.k70(),t.wR5(8,"input",5),t.C$Y(),t.I0R(9,"button",6)(10,"mat-icon"),t.OEk(11,"search"),t.C$Y()()(),t.I0R(12,"a",7)(13,"span",8)(14,"mat-icon"),t.OEk(15,"add"),t.C$Y(),t.SAx(16),t.aS0(17,9),t.k70(),t.C$Y()()(),t.yuY(18,z,2,0,"ng-template",null,10,t.gJz)(20,e,2,0,"ng-template",null,11,t.gJz)(22,M,2,0,"ng-template",null,12,t.gJz)(24,V,14,6),t.wR5(25,"router-outlet")),2&d&&(t.yG2(4),t.E7m("formGroup",D.form),t.yG2(),t.E7m("tuiAutoFocus",!0),t.yG2(4),t.E7m("showLoader",D.loading()),t.yG2(15),t.C0Y(24,D.data()?24:-1))},dependencies:[p.MD,p.XV,s.sl,s.sz,s.ue,s.u,s.uW,s.Wo,m.CQ,m.Oo,m.cP,H.b,A.m6,A.gJ,l.CI,l.Kw,u.qL,P.ER,_.w,_.C,P.cP,r.y,C.yy,C.Ws],encapsulation:2})}return c})()},9052:(x,f,n)=>{n.d(f,{y:()=>_});var t=n(4496),p=n(7760),s=n(6700),m=n(7368),i=n(2700),A=n(1368);function l(u,P){if(1&u&&(t.wR5(0,"img",1),t.wVc(1,"async")),2&u){const r=t.GaO();t.m8U(r.imgClass),t._6D("src",t.kDX(1,5,r.imageSrc$),t.K6U),t.E7m("draggable",!1)}}let _=(()=>{class u{constructor(){this.noImage="/assets/img/no-image.jpg",this.imagesService=(0,t.uUt)(p.U),this.imgClass="block rounded",this.image$=new s.g(null),this.imageSrc$=this.image$.pipe((0,m.G)(r=>r instanceof Blob?(0,i.of)(URL.createObjectURL(r)):r&&r.id?this.imagesService.downloadUrl(r.id):(0,i.of)(this.noImage)))}set image(r){this.image$.next(r??null)}static#t=this.\u0275fac=function(C){return new(C||u)};static#n=this.\u0275cmp=t.In1({type:u,selectors:[["app-show-image"]],inputs:{imgClass:"imgClass",image:"image"},standalone:!0,features:[t.UHJ],decls:2,vars:3,consts:[[3,"draggable","class","src"],[3,"draggable","src"]],template:function(C,I){1&C&&(t.yuY(0,l,2,7,"img",0),t.wVc(1,"async")),2&C&&t.C0Y(0,t.kDX(1,1,I.imageSrc$)?0:-1)},dependencies:[A.a],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;min-height:100px}"],changeDetection:0})}return u})()},2264:(x,f,n)=>{n.d(f,{W:()=>p});var t=n(8400);class p extends t.w{constructor(m){super(m),this.filename=m.filename,this.status=m.status,this.key=m.key,this.original_id=m.original_id,this.tag=m.tag,this.url=m.url}}},532:(x,f,n)=>{n.d(f,{e:()=>s});var t=n(8400),p=n(2264);class s extends t.w{constructor(i){super(i),this.name=i.name,this.description=i.description,this.status=i.status,this.other=i.other,this.translations={...i.translations},i.image&&(this.image=new p.W(i.image))}}},7760:(x,f,n)=>{n.d(f,{U:()=>m});var t=n(6012),p=n(2264),s=n(4496);let m=(()=>{class i extends t.s{constructor(){super(p.W,"images")}removeFromRecord(l,_){return this.patch(`${l}/remove_from_record`,{record_type:_.record_type,record_id:_.record_id})}updateRecord(l,_){return this.patch("record",{image_ids:_,record_type:l.record_type,record_id:l.record_id})}downloadUrl(l){return this.url(`${l}/download`)}static#t=this.\u0275fac=function(_){return new(_||i)};static#n=this.\u0275prov=s.wxM({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},8432:(x,f,n)=>{n.d(f,{K:()=>m});var t=n(6012),p=n(532),s=n(4496);let m=(()=>{class i extends t.s{constructor(){super(p.e,"admin/menu/ingredients")}static#t=this.\u0275fac=function(_){return new(_||i)};static#n=this.\u0275prov=s.wxM({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},5892:(x,f,n)=>{n.d(f,{Ws:()=>H,yy:()=>z});var t=n(4496),p=n(2528),s=n(4472);(0,p.W0)((0,s.u)("showHideText"));const i=(0,p.W0)((0,s.u)("paginationTexts"));var A=n(466),l=n(1512),_=n(4336),u=n(3656),P=n(8212),r=n(5944),C=n(1368),I=n(1040);function b(e,M){if(1&e&&(t.SAx(0),t.OEk(1),t.I0R(2,"strong",6),t.OEk(3),t.C$Y(),t.k70()),2&e){const o=t.GaO().ngIf,E=t.GaO();t.yG2(),t.oRS(" ",o.pages," "),t.yG2(2),t.cNF(E.pages)}}function $(e,M){if(1&e&&(t.SAx(0),t.OEk(1),t.k70()),2&e){const o=M.polymorpheusOutlet;t.yG2(),t.oRS(" ",o," ")}}function k(e,M){if(1&e&&t.wR5(0,"tui-svg",13),2&e){const o=t.GaO(4);t.E7m("src",o.commonIcons.check)}}function B(e,M){1&e&&t.wR5(0,"span",14)}const L=(e,M)=>({$implicit:e,total:M});function g(e,M){if(1&e){const o=t.KQA();t.SAx(0),t.I0R(1,"button",9),t.qCj("click",function(){const G=t.usT(o).$implicit,K=t.GaO(3);return t.CGJ(K.onItem(G))}),t.yuY(2,$,2,1,"ng-container",10)(3,k,1,1,"tui-svg",11)(4,B,1,0,"ng-template",null,12,t.gJz),t.C$Y(),t.k70()}if(2&e){const o=M.$implicit,E=t.Gew(5),h=t.GaO(3);t.yG2(2),t.E7m("polymorpheusOutlet",h.options.sizeOptionContent)("polymorpheusOutletContext",t.IBC(4,L,o,h.total)),t.yG2(),t.E7m("ngIf",o===h.size)("ngIfElse",E)}}function R(e,M){if(1&e&&(t.I0R(0,"tui-data-list",7),t.yuY(1,g,6,7,"ng-container",8),t.C$Y()),2&e){const o=t.GaO(2);t.yG2(),t.E7m("ngForOf",o.items)}}function O(e,M){if(1&e){const o=t.KQA();t.SAx(0),t.I0R(1,"button",15),t.qCj("click",function(){t.usT(o);const h=t.GaO(2);return t.CGJ(h.back())}),t.C$Y(),t.I0R(2,"button",16),t.qCj("click",function(){t.usT(o);const h=t.GaO(2);return t.CGJ(h.forth())}),t.C$Y(),t.k70()}if(2&e){const o=M.ngIf,E=t.GaO(2);t.yG2(),t.E7m("disabled",E.leftDisabled)("icon",E.icons.decrement)("title",o[0]),t.yG2(),t.E7m("disabled",E.rightDisabled)("icon",E.icons.increment)("title",o[1])}}function T(e,M){if(1&e){const o=t.KQA();t.SAx(0),t.I0R(1,"span",1),t.yuY(2,b,4,2,"ng-container",0),t.C$Y(),t.I0R(3,"span",2),t.OEk(4),t.I0R(5,"tui-hosted-dropdown",3),t.iHE("openChange",function(h){t.usT(o);const G=t.GaO();return t.kNx(G.open,h)||(G.open=h),t.CGJ(h)}),t.I0R(6,"button",4)(7,"strong"),t.OEk(8),t.C$Y()(),t.yuY(9,R,2,1,"ng-template",null,5,t.gJz),t.C$Y(),t.OEk(11),t.I0R(12,"strong",6),t.OEk(13),t.C$Y()(),t.yuY(14,O,3,6,"ng-container",0),t.wVc(15,"async"),t.k70()}if(2&e){const o=M.ngIf,E=t.Gew(10),h=t.GaO();t.yG2(2),t.E7m("ngIf",h.options.showPages),t.yG2(2),t.oRS(" ",o.linesPerPage," "),t.yG2(),t.E7m("content",E),t.OKB("open",h.open),t.yG2(3),t.CAO("",h.start+1,"\u2013",h.end,""),t.yG2(3),t.oRS(" ",o.of," "),t.yG2(2),t.cNF(h.total),t.yG2(),t.E7m("ngIf",t.kDX(15,9,h.spinTexts$))}}const Y=(0,p.AL)({sizeOptionContent:function S({$implicit:e}){return`${e}`},showPages:!0,items:[10,20,50,100],size:10});let H=(()=>{class e{constructor(o,E,h,G,K){this.icons=o,this.spinTexts$=E,this.texts$=h,this.options=G,this.commonIcons=K,this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.pageChange=new t._w7,this.sizeChange=new t._w7,this.paginationChange=new t._w7,this.open=!1}get pages(){return Math.ceil(this.total/this.size)}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}onItem(o){const{start:E}=this;this.size=o,this.sizeChange.emit(o),this.open=!1,this.page=Math.floor(E/this.size),this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}back(){this.page--,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}forth(){this.page++,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}}return e.\u0275fac=function(o){return new(o||e)(t.GI1(r.KY),t.GI1(r.s1),t.GI1(i),t.GI1(Y),t.GI1(r.QJ))},e.\u0275cmp=t.In1({type:e,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{pageChange:"pageChange",sizeChange:"sizeChange",paginationChange:"paginationChange"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],[3,"content","open","openChange"],["tuiLink","","type","button"],["content",""],[1,"t-strong"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"src",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"src"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","icon","title","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","icon","title","click"]],template:function(o,E){1&o&&(t.yuY(0,T,16,11,"ng-container",0),t.wVc(1,"async")),2&o&&t.E7m("ngIf",t.kDX(1,1,E.texts$))},dependencies:[A.Qw,l.C,_.yi,_.sP,u.Wu,P.Kw,C.u_,C.ay,I.Af,C.a],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),e})(),z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.a4G({type:e}),e.\u0275inj=t.s3X({imports:[[C.MD,P.CI,l.w,A.GE,_.A$,u.Yt,I.Ux]]}),e})()},1512:(x,f,n)=>{n.d(f,{C:()=>B,w:()=>L});var t=n(4496),p=n(900),s=n(4392),m=n(4164),i=n(3480),A=n(4680),l=n(3972),_=n(5944),u=n(3412),P=n(4704),r=n(3656),C=n(1368);const I=["tuiLink",""];function b(g,R){if(1&g&&t.wR5(0,"tui-svg",3),2&g){const O=t.GaO();t.E7m("src",O.icon||"")}}function $(g,R){if(1&g&&t.wR5(0,"tui-svg",4),2&g){const O=t.GaO();t.E7m("src",O.icon||"")}}const k=["*"];let B=(()=>{class g{constructor(O,T,S){this.el=O,this.mode$=T,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,u.U)((0,p.Ax)(this.el.nativeElement,"focusin").pipe((0,P.k)(s.Ml)),(0,p.Ax)(this.el.nativeElement,"focusout").pipe((0,P.k)(s.so))),S.subscribe(U=>{this.focusVisible=U})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,m.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return g.\u0275fac=function(O){return new(O||g)(t.GI1(t.GMv),t.GI1(_.Yx),t.GI1(i.MF))},g.\u0275cmp=t.In1({type:g,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(O,T){1&O&&t.qCj("$.data-mode.attr",function(){return T.mode$}),2&O&&(t.e48("data-host-mode",T.mode),t.eAK("_pseudo",T.pseudo)("_icon-rotated",T.iconRotated)("_focus-visible",T.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,A.NK)(g),i.MF,i.UF,l.Ir])],attrs:I,ngContentSelectors:k,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(O,T){1&O&&(t.kPM(),t.yuY(0,b,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,$,1,1,"tui-svg",2)),2&O&&(t.E7m("ngIf",T.iconAlignLeft),t.yG2(3),t.E7m("ngIf",T.iconAlignRight))},dependencies:[r.Wu,C.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),g})(),L=(()=>{class g{}return g.\u0275fac=function(O){return new(O||g)},g.\u0275mod=t.a4G({type:g}),g.\u0275inj=t.s3X({imports:[[C.MD,r.Yt]]}),g})()},4872:(x,f,n)=>{n.d(f,{ay:()=>m});var t=n(4496),p=n(3252),s=n(3616);function m(l){l||((0,t.yAg)(m),l=(0,t.uUt)(t.eM9));const _=new p._(u=>l.onDestroy(u.next.bind(u)));return u=>u.pipe((0,s.a)(_))}}}]);