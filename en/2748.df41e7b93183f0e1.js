"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[2748],{2748:(S,T,n)=>{n.r(T),n.d(T,{AdminTagsHomeComponent:()=>Z});var t=n(4496),a=n(6504),f=n(1368),m=n(3797),i=n(3480),D=n(5e3),g=n(8212),_=n(1512),l=n(1560),P=n(5657),r=n(3412),C=n(2300),M=n(9212),G=n(4704),k=n(1192),B=n(6684),N=n(3616),U=n(8824),d=n(1236),y=n(9052),E=n(5892),v=n(1343),b=n(4872),$=n(1128),Y=n(8256),w=n(9116),H=n(7936);function z(c,I){1&c&&(t.SAx(0),t.aS0(1,13),t.k70())}function e(c,I){1&c&&(t.SAx(0),t.aS0(1,14),t.k70())}function O(c,I){1&c&&(t.SAx(0),t.aS0(1,15),t.k70())}const o=(c,I)=>I.id;function p(c,I){1&c&&t.C_f(0)}function h(c,I){1&c&&t.C_f(0)}function L(c,I){1&c&&t.C_f(0)}function K(c,I){1&c&&t.C_f(0)}function F(c,I){1&c&&t.C_f(0)}function X(c,I){1&c&&t.C_f(0)}function J(c,I){if(1&c){const s=t.KQA();t.I0R(0,"tr")(1,"td")(2,"span",20),t.yuY(3,K,1,0,"ng-container",18),t.C$Y(),t.wR5(4,"app-show-image",21),t.C$Y(),t.I0R(5,"td")(6,"span",20),t.yuY(7,F,1,0,"ng-container",18),t.C$Y(),t.I0R(8,"span"),t.OEk(9),t.C$Y()(),t.I0R(10,"td")(11,"span",20),t.yuY(12,X,1,0,"ng-container",18),t.C$Y(),t.I0R(13,"span"),t.OEk(14),t.C$Y()(),t.I0R(15,"td")(16,"div",22)(17,"a",23)(18,"mat-icon"),t.OEk(19,"edit"),t.C$Y()(),t.I0R(20,"button",24),t.qCj("click",function(){const R=t.usT(s).$implicit,x=t.GaO(2);return t.CGJ(x.delete(R.id))}),t.I0R(21,"mat-icon"),t.OEk(22,"delete"),t.C$Y()()()()()}if(2&c){const s=I.$implicit;t.GaO(2);const u=t.Gew(23),A=t.Gew(19),R=t.Gew(21);t.yG2(3),t.E7m("ngTemplateOutlet",u),t.yG2(),t.E7m("image",s.image),t.yG2(3),t.E7m("ngTemplateOutlet",A),t.yG2(2),t.cNF(s.name),t.yG2(3),t.E7m("ngTemplateOutlet",R),t.yG2(2),t.cNF(s.description),t.yG2(3),t._6D("routerLink",s.id)}}const Q=()=>[10,20,50,100];function V(c,I){if(1&c){const s=t.KQA();t.I0R(0,"table",16)(1,"thead")(2,"tr")(3,"th",17),t.yuY(4,p,1,0,"ng-container",18),t.C$Y(),t.I0R(5,"th",17),t.yuY(6,h,1,0,"ng-container",18),t.C$Y(),t.I0R(7,"th",17),t.yuY(8,L,1,0,"ng-container",18),t.C$Y(),t.wR5(9,"th"),t.C$Y()(),t.I0R(10,"tbody"),t.c53(11,J,23,7,"tr",null,o),t.C$Y()(),t.I0R(13,"tui-table-pagination",19),t.qCj("paginationChange",function(A){t.usT(s);const R=t.GaO();return t.CGJ(R.paginationChange(A))}),t.C$Y()}if(2&c){const s=t.GaO(),u=t.Gew(23),A=t.Gew(19),R=t.Gew(21);let x;t.yG2(4),t.E7m("ngTemplateOutlet",u),t.yG2(2),t.E7m("ngTemplateOutlet",A),t.yG2(2),t.E7m("ngTemplateOutlet",R),t.yG2(3),t.oho(s.items()),t.yG2(2),t.E7m("items",t.q4q(5,Q))("total",null!==(x=null==(x=s.data())||null==x.metadata?null:x.metadata.total_count)&&void 0!==x?x:0)}}let Z=(()=>{class c{constructor(){this.loading=(0,t.OCB)(!1),this.data=(0,t.OCB)(null),this.items=(0,t.S6b)(()=>this.data()?.items||[]),this.service=(0,t.uUt)(w.w),this.notifications=(0,t.uUt)($.E),this.destroy$=(0,t.uUt)(i.UF),this.form=new a.WC({query:new a.Ku(""),offset:new a.Ku(0,[a.AQ.min(0),a.AQ.required]),per_page:new a.Ku(10,[a.AQ.min(1),a.AQ.required])}),this.search$=new P.E,this._filter$=(0,r.U)(this.form.get("query").valueChanges.pipe((0,C.o)(1e3),(0,M.y)(()=>this.form.patchValue({offset:0},{emitEvent:!1})),(0,G.k)(()=>"query")),...["offset","per_page"].map(s=>this.form.get(s).valueChanges.pipe((0,k.o)(10),(0,G.k)(()=>"filters"))),this.search$.pipe((0,G.k)(()=>"search"))).pipe((0,G.k)(s=>[s,this.form.value]),(0,G.k)(()=>this.form.value),(0,b.ay)(),(0,B.I)(()=>this.form.valid),(0,M.y)(s=>{const u={...s};u.query&&"string"==typeof u.query&&u.query.length>0||delete u.query,this.search(u)})).subscribe((0,v.I)())}ngOnInit(){this.search(),this.form.valueChanges.pipe((0,N.a)(this.destroy$)).subscribe(()=>this.search())}formSubmit(){this.search()}delete(s){s&&this.notifications.confirm("Are you sure you want to delete this tag?").subscribe({next:u=>{u&&this.confirmedDelete(s)}})}confirmedDelete(s){this.loading.set(!0),this.service.destroy(s).pipe((0,N.a)(this.destroy$),(0,U.U)(()=>{this.loading.set(!1),this.search()})).subscribe({error:u=>{this.notifications.error((0,Y.mk)(u)||"Something went wrong with the cancellation.")}})}search(s=this.form.value){this.loading.set(!0),this.service.search(s).pipe((0,N.a)(this.destroy$),(0,U.U)(()=>this.loading.set(!1))).subscribe({next:u=>{this.data.set(u)}})}paginationChange(s){this.form.patchValue({offset:s.page,per_page:s.size})}static#t=this.\u0275fac=function(u){return new(u||c)};static#n=this.\u0275cmp=t.In1({type:c,selectors:[["app-admin-tags-home"]],standalone:!0,features:[t.M5G([i.UF]),t.UHJ],decls:26,vars:4,consts:()=>{let s,u,A,R,x,j;return s="Tag menu",u="Filter tags",A="New",R="Name",x="Description",j="Image",[s,[1,"flex","items-center","mb-3"],[1,"me-2",3,"formGroup","ngSubmit"],["formControlName","query",1,"!inline-block","min-w-[250px]",3,"tuiAutoFocus"],u,["tuiTextfield",""],["type","submit","tuiIconButton","","appearance","flat",1,"ms-2",3,"showLoader"],["routerLink","new","tuiLink",""],[1,"flex","items-center"],A,["nameCol",""],["descriptionCol",""],["imageCol",""],R,x,j,[1,"responsive-table","collapse-md"],[1,"text-start"],[4,"ngTemplateOutlet"],[1,"my-2",3,"items","total","paginationChange"],[1,"collapse-header"],[2,"max-width","100px",3,"image"],[1,"flex","items-baseline"],["size","m","tuiIconButton","","appearance","flat",1,"me-1",3,"routerLink"],["size","m","type","button","tuiIconButton","","appearance","secondary-destructive",3,"click"]]},template:function(u,A){1&u&&(t.I0R(0,"h1"),t.SAx(1),t.aS0(2,0),t.k70(),t.C$Y(),t.I0R(3,"div",1)(4,"form",2),t.qCj("ngSubmit",function(){return A.formSubmit()}),t.I0R(5,"tui-input",3),t.SAx(6),t.aS0(7,4),t.k70(),t.wR5(8,"input",5),t.C$Y(),t.I0R(9,"button",6)(10,"mat-icon"),t.OEk(11,"search"),t.C$Y()()(),t.I0R(12,"a",7)(13,"span",8)(14,"mat-icon"),t.OEk(15,"add"),t.C$Y(),t.SAx(16),t.aS0(17,9),t.k70(),t.C$Y()()(),t.yuY(18,z,2,0,"ng-template",null,10,t.gJz)(20,e,2,0,"ng-template",null,11,t.gJz)(22,O,2,0,"ng-template",null,12,t.gJz)(24,V,14,6),t.wR5(25,"router-outlet")),2&u&&(t.yG2(4),t.E7m("formGroup",A.form),t.yG2(),t.E7m("tuiAutoFocus",!0),t.yG2(4),t.E7m("showLoader",A.loading()),t.yG2(15),t.C0Y(24,A.data()?24:-1))},dependencies:[f.MD,f.XV,a.sl,a.sz,a.ue,a.u,a.uW,a.Wo,m.CQ,m.Oo,m.cP,H.b,D.m6,D.gJ,g.CI,g.Kw,l.qL,d.ER,_.w,_.C,d.cP,y.y,E.yy,E.Ws],encapsulation:2})}return c})()},9052:(S,T,n)=>{n.d(T,{y:()=>_});var t=n(4496),a=n(7760),f=n(6700),m=n(7368),i=n(2700),D=n(1368);function g(l,P){if(1&l&&(t.wR5(0,"img",1),t.wVc(1,"async")),2&l){const r=t.GaO();t.m8U(r.imgClass),t._6D("src",t.kDX(1,5,r.imageSrc$),t.K6U),t.E7m("draggable",!1)}}let _=(()=>{class l{constructor(){this.noImage="/assets/img/no-image.jpg",this.imagesService=(0,t.uUt)(a.U),this.imgClass="block rounded",this.image$=new f.g(null),this.imageSrc$=this.image$.pipe((0,m.G)(r=>r instanceof File?(0,i.of)(URL.createObjectURL(r)):r&&r.id?this.imagesService.downloadUrl(r.id):(0,i.of)(this.noImage)))}set image(r){this.image$.next(r??null)}static#t=this.\u0275fac=function(C){return new(C||l)};static#n=this.\u0275cmp=t.In1({type:l,selectors:[["app-show-image"]],inputs:{imgClass:"imgClass",image:"image"},standalone:!0,features:[t.UHJ],decls:2,vars:3,consts:[[3,"draggable","class","src"],[3,"draggable","src"]],template:function(C,M){1&C&&(t.yuY(0,g,2,7,"img",0),t.wVc(1,"async")),2&C&&t.C0Y(0,t.kDX(1,1,M.imageSrc$)?0:-1)},dependencies:[D.a],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}"],changeDetection:0})}return l})()},2264:(S,T,n)=>{n.d(T,{W:()=>a});var t=n(8400);class a extends t.w{constructor(m){super(m),this.filename=m.filename,this.status=m.status,this.key=m.key,this.original_id=m.original_id,this.tag=m.tag,this.url=m.url}}},355:(S,T,n)=>{n.d(T,{E:()=>f});var t=n(8400),a=n(2264);class f extends t.w{constructor(i){super(i),this.name=i.name,this.description=i.description,this.status=i.status,this.other=i.other,this.translations={...i.translations},this.color=i.color,i.image&&(this.image=new a.W(i.image))}}},7760:(S,T,n)=>{n.d(T,{U:()=>m});var t=n(6012),a=n(2264),f=n(4496);let m=(()=>{class i extends t.s{constructor(){super(a.W,"images")}removeFromRecord(g,_){return this.patch(`${g}/remove_from_record`,{record_type:_.record_type,record_id:_.record_id})}updateRecord(g,_){return this.patch("record",{image_ids:_,record_type:g.record_type,record_id:g.record_id})}downloadUrl(g){return this.url(`${g}/download`)}static#t=this.\u0275fac=function(_){return new(_||i)};static#n=this.\u0275prov=f.wxM({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},9116:(S,T,n)=>{n.d(T,{w:()=>m});var t=n(6012),a=n(355),f=n(4496);let m=(()=>{class i extends t.s{constructor(){super(a.E,"admin/menu/tags")}static#t=this.\u0275fac=function(_){return new(_||i)};static#n=this.\u0275prov=f.wxM({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},5892:(S,T,n)=>{n.d(T,{Ws:()=>H,yy:()=>z});var t=n(4496),a=n(2528),f=n(3568);(0,a.W0)((0,f.u)("showHideText"));const i=(0,a.W0)((0,f.u)("paginationTexts"));var D=n(466),g=n(1512),_=n(4336),l=n(3656),P=n(8212),r=n(5944),C=n(1368),M=n(1040);function G(e,O){if(1&e&&(t.SAx(0),t.OEk(1),t.I0R(2,"strong",6),t.OEk(3),t.C$Y(),t.k70()),2&e){const o=t.GaO().ngIf,p=t.GaO();t.yG2(),t.oRS(" ",o.pages," "),t.yG2(2),t.cNF(p.pages)}}function k(e,O){if(1&e&&(t.SAx(0),t.OEk(1),t.k70()),2&e){const o=O.polymorpheusOutlet;t.yG2(),t.oRS(" ",o," ")}}function B(e,O){if(1&e&&t.wR5(0,"tui-svg",13),2&e){const o=t.GaO(4);t.E7m("src",o.commonIcons.check)}}function N(e,O){1&e&&t.wR5(0,"span",14)}const U=(e,O)=>({$implicit:e,total:O});function d(e,O){if(1&e){const o=t.KQA();t.SAx(0),t.I0R(1,"button",9),t.qCj("click",function(){const L=t.usT(o).$implicit,K=t.GaO(3);return t.CGJ(K.onItem(L))}),t.yuY(2,k,2,1,"ng-container",10)(3,B,1,1,"tui-svg",11)(4,N,1,0,"ng-template",null,12,t.gJz),t.C$Y(),t.k70()}if(2&e){const o=O.$implicit,p=t.Gew(5),h=t.GaO(3);t.yG2(2),t.E7m("polymorpheusOutlet",h.options.sizeOptionContent)("polymorpheusOutletContext",t.IBC(4,U,o,h.total)),t.yG2(),t.E7m("ngIf",o===h.size)("ngIfElse",p)}}function y(e,O){if(1&e&&(t.I0R(0,"tui-data-list",7),t.yuY(1,d,6,7,"ng-container",8),t.C$Y()),2&e){const o=t.GaO(2);t.yG2(),t.E7m("ngForOf",o.items)}}function E(e,O){if(1&e){const o=t.KQA();t.SAx(0),t.I0R(1,"button",15),t.qCj("click",function(){t.usT(o);const h=t.GaO(2);return t.CGJ(h.back())}),t.C$Y(),t.I0R(2,"button",16),t.qCj("click",function(){t.usT(o);const h=t.GaO(2);return t.CGJ(h.forth())}),t.C$Y(),t.k70()}if(2&e){const o=O.ngIf,p=t.GaO(2);t.yG2(),t.E7m("disabled",p.leftDisabled)("icon",p.icons.decrement)("title",o[0]),t.yG2(),t.E7m("disabled",p.rightDisabled)("icon",p.icons.increment)("title",o[1])}}function v(e,O){if(1&e){const o=t.KQA();t.SAx(0),t.I0R(1,"span",1),t.yuY(2,G,4,2,"ng-container",0),t.C$Y(),t.I0R(3,"span",2),t.OEk(4),t.I0R(5,"tui-hosted-dropdown",3),t.iHE("openChange",function(h){t.usT(o);const L=t.GaO();return t.kNx(L.open,h)||(L.open=h),t.CGJ(h)}),t.I0R(6,"button",4)(7,"strong"),t.OEk(8),t.C$Y()(),t.yuY(9,y,2,1,"ng-template",null,5,t.gJz),t.C$Y(),t.OEk(11),t.I0R(12,"strong",6),t.OEk(13),t.C$Y()(),t.yuY(14,E,3,6,"ng-container",0),t.wVc(15,"async"),t.k70()}if(2&e){const o=O.ngIf,p=t.Gew(10),h=t.GaO();t.yG2(2),t.E7m("ngIf",h.options.showPages),t.yG2(2),t.oRS(" ",o.linesPerPage," "),t.yG2(),t.E7m("content",p),t.OKB("open",h.open),t.yG2(3),t.CAO("",h.start+1,"\u2013",h.end,""),t.yG2(3),t.oRS(" ",o.of," "),t.yG2(2),t.cNF(h.total),t.yG2(),t.E7m("ngIf",t.kDX(15,9,h.spinTexts$))}}const Y=(0,a.AL)({sizeOptionContent:function b({$implicit:e}){return`${e}`},showPages:!0,items:[10,20,50,100],size:10});let H=(()=>{class e{constructor(o,p,h,L,K){this.icons=o,this.spinTexts$=p,this.texts$=h,this.options=L,this.commonIcons=K,this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.pageChange=new t._w7,this.sizeChange=new t._w7,this.paginationChange=new t._w7,this.open=!1}get pages(){return Math.ceil(this.total/this.size)}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}onItem(o){const{start:p}=this;this.size=o,this.sizeChange.emit(o),this.open=!1,this.page=Math.floor(p/this.size),this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}back(){this.page--,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}forth(){this.page++,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}}return e.\u0275fac=function(o){return new(o||e)(t.GI1(r.KY),t.GI1(r.s1),t.GI1(i),t.GI1(Y),t.GI1(r.QJ))},e.\u0275cmp=t.In1({type:e,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{pageChange:"pageChange",sizeChange:"sizeChange",paginationChange:"paginationChange"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],[3,"content","open","openChange"],["tuiLink","","type","button"],["content",""],[1,"t-strong"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"src",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"src"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","icon","title","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","icon","title","click"]],template:function(o,p){1&o&&(t.yuY(0,v,16,11,"ng-container",0),t.wVc(1,"async")),2&o&&t.E7m("ngIf",t.kDX(1,1,p.texts$))},dependencies:[D.Qw,g.C,_.yi,_.sP,l.Wu,P.Kw,C.u_,C.ay,M.Af,C.a],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),e})(),z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.a4G({type:e}),e.\u0275inj=t.s3X({imports:[[C.MD,P.CI,g.w,D.GE,_.A$,l.Yt,M.Ux]]}),e})()},1512:(S,T,n)=>{n.d(T,{C:()=>N,w:()=>U});var t=n(4496),a=n(900),f=n(4392),m=n(4164),i=n(3480),D=n(4680),g=n(3972),_=n(5944),l=n(3412),P=n(4704),r=n(3656),C=n(1368);const M=["tuiLink",""];function G(d,y){if(1&d&&t.wR5(0,"tui-svg",3),2&d){const E=t.GaO();t.E7m("src",E.icon||"")}}function k(d,y){if(1&d&&t.wR5(0,"tui-svg",4),2&d){const E=t.GaO();t.E7m("src",E.icon||"")}}const B=["*"];let N=(()=>{class d{constructor(E,v,b){this.el=E,this.mode$=v,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,l.U)((0,a.Ax)(this.el.nativeElement,"focusin").pipe((0,P.k)(f.Ml)),(0,a.Ax)(this.el.nativeElement,"focusout").pipe((0,P.k)(f.so))),b.subscribe($=>{this.focusVisible=$})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,m.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return d.\u0275fac=function(E){return new(E||d)(t.GI1(t.GMv),t.GI1(_.Yx),t.GI1(i.MF))},d.\u0275cmp=t.In1({type:d,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(E,v){1&E&&t.qCj("$.data-mode.attr",function(){return v.mode$}),2&E&&(t.e48("data-host-mode",v.mode),t.eAK("_pseudo",v.pseudo)("_icon-rotated",v.iconRotated)("_focus-visible",v.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,D.NK)(d),i.MF,i.UF,g.Ir])],attrs:M,ngContentSelectors:B,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(E,v){1&E&&(t.kPM(),t.yuY(0,G,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,k,1,1,"tui-svg",2)),2&E&&(t.E7m("ngIf",v.iconAlignLeft),t.yG2(3),t.E7m("ngIf",v.iconAlignRight))},dependencies:[r.Wu,C.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),d})(),U=(()=>{class d{}return d.\u0275fac=function(E){return new(E||d)},d.\u0275mod=t.a4G({type:d}),d.\u0275inj=t.s3X({imports:[[C.MD,r.Yt]]}),d})()},4872:(S,T,n)=>{n.d(T,{ay:()=>m});var t=n(4496),a=n(3252),f=n(3616);function m(g){g||((0,t.yAg)(m),g=(0,t.uUt)(t.eM9));const _=new a._(l=>g.onDestroy(l.next.bind(l)));return l=>l.pipe((0,f.a)(_))}}}]);