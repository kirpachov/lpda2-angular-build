"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[2712],{4488:(m,u,o)=>{o.r(u),o.d(u,{MenuRootComponent:()=>a});var t=o(4496),d=o(1236),_=o(3020),r=o(4476);let a=(()=>{class e{constructor(){this._=(0,t.uUt)(r.OY).setTitle("Modifica men\xF9 | La Porta D'Acqua")}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-menu-root"]],hostAttrs:[1,"grow","flex","flex-col"],standalone:!0,features:[t.UHJ],decls:2,vars:0,consts:[[1,"border-solid","border-slate-200","p-2","rounded-md","border"]],template:function(i,c){1&i&&t.wR5(0,"app-list-categories",0)(1,"router-outlet")},dependencies:[d.cP,_.M],encapsulation:2})}return e})()},9052:(m,u,o)=>{o.d(u,{y:()=>s});var t=o(4496),d=o(7760),_=o(6700),r=o(7368),a=o(2700),e=o(1368);function n(i,c){if(1&i&&(t.wR5(0,"img",1),t.wVc(1,"async")),2&i){const l=t.GaO();t.uQ9("max-w-[100%] h-auto min-h-[50px] md:min-h-[100px] ",l.imgClass,""),t._6D("src",t.kDX(1,5,l.imageSrc$),t.K6U),t.E7m("draggable",!1)}}let s=(()=>{class i{constructor(){this.noImage="/assets/img/no-image.jpg",this.imagesService=(0,t.uUt)(d.U),this.imgClass="block rounded",this.image$=new _.g(null),this.imageSrc$=this.image$.pipe((0,r.G)(l=>l instanceof Blob?(0,a.of)(URL.createObjectURL(l)):l&&l.id?this.imagesService.downloadUrl(l.id):(0,a.of)(this.noImage)))}set image(l){this.image$.next(l??null)}static#t=this.\u0275fac=function(v){return new(v||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-show-image"]],inputs:{imgClass:"imgClass",image:"image"},standalone:!0,features:[t.UHJ],decls:2,vars:3,consts:[[3,"draggable","class","src"],[3,"draggable","src"]],template:function(v,f){1&v&&(t.yuY(0,n,2,7,"img",0),t.wVc(1,"async")),2&v&&t.C0Y(0,t.kDX(1,1,f.imageSrc$)?0:-1)},dependencies:[e.a],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}"],changeDetection:0})}return i})()},2264:(m,u,o)=>{o.d(u,{W:()=>d});var t=o(8400);class d extends t.w{constructor(r){super(r),this.filename=r.filename,this.status=r.status,this.key=r.key,this.original_id=r.original_id,this.tag=r.tag,this.url=r.url}}},5820:(m,u,o)=>{o.d(u,{Q:()=>r});var t=o(8400);class d extends t.w{constructor(e){super(e),this.public_visible=e.public_visible,this.public_from=e.public_from?new Date(e.public_from):void 0,this.public_to=e.public_to?new Date(e.public_to):void 0,this.private_visible=e.private_visible,this.daily_from=e.daily_from?new Date(e.daily_from):void 0,this.daily_to=e.daily_to?new Date(e.daily_to):void 0}}var _=o(2264);class r extends t.w{constructor(e){super(e),this.name=e.name,this.description=e.description,this.status=e.status,this.price=e.price,this.parent_id=e.parent_id,this.index=e.index,this.secret=e.secret,this.secret_desc=e.secret_desc,this.visibility_id=e.visibility_id,this.visibility=e.visibility?new d(e.visibility):void 0,this.parent=e.parent?new r(e.parent):void 0,this.children=e.children?e.children.map(n=>new r(n)):[],this.images=e.images?e.images.map(n=>new _.W(n)):[],this.translations=e.translations,this.public_visible=e.public_visible,this.stats=e.stats}}},9088:(m,u,o)=>{o.d(u,{S:()=>_});var t=o(4496);const d={menuCategory:{show:"/admin/menu/{itemId}",duplicate:"/admin/menu/{itemId}/duplicate",export:"/admin/menu/{itemId}/export",createChild:"/admin/menu/{itemId}/create-category",linkCategory:"/admin/menu/{itemId}/link-category",createDish:"/admin/menu/{itemId}/create-dish",linkDish:"/admin/menu/{itemId}/link-dish",private:"/menu/{itemId}",public:"/menu/{itemId}"},dish:{show:"/admin/menu/{categoryId}/dish/{itemId}"}};let _=(()=>{class r{transform(e,n){const s=d[n.split(".")[0]];if(!s)throw new Error(`Resource not found: ${n} (resouce: ${n.split(".")[0]})`);const i=n.split(".")[1];if(!s[i])throw new Error(`Action not found: ${n} (action: ${i})`);if(typeof e>"u"||null===e)return null;if("number"==typeof e&&(e=e.toString()),"object"==typeof e&&null!==e&&!Array.isArray(e)){let c=s[i];if(Object.keys(e).forEach(l=>{const v=e[l];void 0!==v&&c.includes(`{${l}}`)&&(c=c.replace(`{${l}}`,v??""))}),c.includes("{{"))throw new Error(`Unresolved interpolation: ${c}`);return c}if("string"!=typeof e)throw new Error(`Invalid itemId: ${e} (type: ${typeof e})`);return s[i].replace("{itemId}",e)}static#t=this.\u0275fac=function(n){return new(n||r)};static#e=this.\u0275pipe=t.UTH({name:"urlTo",type:r,pure:!0,standalone:!0})}return r})()},7760:(m,u,o)=>{o.d(u,{U:()=>r});var t=o(6012),d=o(2264),_=o(4496);let r=(()=>{class a extends t.s{constructor(){super(d.W,"images")}removeFromRecord(n,s){return this.patch(`${n}/remove_from_record`,{record_type:s.record_type,record_id:s.record_id})}updateRecord(n,s){return this.patch("record",{image_ids:s,record_type:n.record_type,record_id:n.record_id})}downloadUrl(n){return this.url(`${n}/download`)}static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275prov=_.wxM({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()},1712:(m,u,o)=>{o.d(u,{S:()=>a});var t=o(6012),d=o(5820),_=o(4704),r=o(4496);let a=(()=>{class e extends t.s{constructor(){super(d.Q,"admin/menu/categories")}addCategory(s,i,c={}){return this.post(`${s}/add_category/${i}`,c)}addDish(s,i){return this.post(`${s}/dishes/${i}`,{})}removeDish(s,i){return this.delete(`${s}/dishes/${i}`,{})}orderDishes(s,i){return this.patch(`${s}/order_dishes`,{field:i})}dashboardData(s){return this.get(`${s}/dashboard_data`)}updateVisibility(s,i){return this.patch(`${s}/visibility`,i).pipe((0,_.k)(c=>this.mapItem(c)))}copy(s,i){return this.post(`${s}/copy`,i).pipe((0,_.k)(c=>this.mapItem(c)))}move(s,i){return this.patch(`${s}/move/${i}`,{}).pipe((0,_.k)(c=>this.mapItem(c)))}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275prov=r.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},832:(m,u,o)=>{o.d(u,{I:()=>r,w:()=>_});var t=o(4496),d=o(3480);let _=(()=>{class a{constructor(n){this.tuiFocusVisibleChange=n}}return a.\u0275fac=function(n){return new(n||a)(t.GI1(d.MF))},a.\u0275dir=t.Sc5({type:a,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[t.M5G([d.UF,d.MF])]}),a})(),r=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.a4G({type:a}),a.\u0275inj=t.s3X({}),a})()},4259:(m,u,o)=>{o.d(u,{U9:()=>e,_k:()=>a});var t=o(4496),d=o(7232);class r{constructor(s){this.$implicit=s}}let a=(()=>{class n{constructor(i,c){this.viewContainer=i,this.templateRef=c}set tuiRepeatTimesOf(i){const c=Math.floor((0,d.K6)(i,0,65536)),{length:l}=this.viewContainer;i<l?this.removeContainers(l-i):this.addContainers(c)}addContainers(i){for(let c=this.viewContainer.length;c<i;c++)this.viewContainer.createEmbeddedView(this.templateRef,new r(c))}removeContainers(i){for(let c=0;c<i;c++)this.viewContainer.remove()}}return n.\u0275fac=function(i){return new(i||n)(t.GI1(t.y8U),t.GI1(t.Yw2))},n.\u0275dir=t.Sc5({type:n,selectors:[["","tuiRepeatTimes","","tuiRepeatTimesOf",""]],inputs:{tuiRepeatTimesOf:"tuiRepeatTimesOf"}}),n})(),e=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.a4G({type:n}),n.\u0275inj=t.s3X({}),n})()},1512:(m,u,o)=>{o.d(u,{C:()=>D,w:()=>T});var t=o(4496),d=o(900),_=o(4392),r=o(4164),a=o(3480),e=o(4680),n=o(3972),s=o(5944),i=o(3412),c=o(4704),l=o(3656),v=o(1368);const f=["tuiLink",""];function C(h,M){if(1&h&&t.wR5(0,"tui-svg",3),2&h){const g=t.GaO();t.E7m("src",g.icon||"")}}function P(h,M){if(1&h&&t.wR5(0,"tui-svg",4),2&h){const g=t.GaO();t.E7m("src",g.icon||"")}}const E=["*"];let D=(()=>{class h{constructor(g,p,O){this.el=g,this.mode$=p,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,i.U)((0,d.Ax)(this.el.nativeElement,"focusin").pipe((0,c.k)(_.Ml)),(0,d.Ax)(this.el.nativeElement,"focusout").pipe((0,c.k)(_.so))),O.subscribe(y=>{this.focusVisible=y})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,r.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return h.\u0275fac=function(g){return new(g||h)(t.GI1(t.GMv),t.GI1(s.Yx),t.GI1(a.MF))},h.\u0275cmp=t.In1({type:h,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(g,p){1&g&&t.qCj("$.data-mode.attr",function(){return p.mode$}),2&g&&(t.e48("data-host-mode",p.mode),t.eAK("_pseudo",p.pseudo)("_icon-rotated",p.iconRotated)("_focus-visible",p.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,e.NK)(h),a.MF,a.UF,n.Ir])],attrs:f,ngContentSelectors:E,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(g,p){1&g&&(t.kPM(),t.yuY(0,C,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,P,1,1,"tui-svg",2)),2&g&&(t.E7m("ngIf",p.iconAlignLeft),t.yG2(3),t.E7m("ngIf",p.iconAlignRight))},dependencies:[l.Wu,v.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),h})(),T=(()=>{class h{}return h.\u0275fac=function(g){return new(g||h)},h.\u0275mod=t.a4G({type:h}),h.\u0275inj=t.s3X({imports:[[v.MD,l.Yt]]}),h})()},1496:(m,u,o)=>{o.d(u,{I:()=>_});var t=o(112),d=o(3120);function _(r=0,a=t.M){return r<0&&(r=0),(0,d.k)(r,r,a)}}}]);