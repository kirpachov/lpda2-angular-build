"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[208],{4488:(m,_,n)=>{n.r(_),n.d(_,{MenuRootComponent:()=>a});var e=n(4496),d=n(1236),u=n(3020),r=n(4476);let a=(()=>{class t{constructor(){this._=(0,e.uUt)(r.OY).setTitle("Edit men\xF9 | La Porta D'Acqua")}static#t=this.\u0275fac=function(o){return new(o||t)};static#e=this.\u0275cmp=e.In1({type:t,selectors:[["app-menu-root"]],hostAttrs:[1,"grow","flex","flex-col"],standalone:!0,features:[e.UHJ],decls:2,vars:0,consts:[[1,"border-solid","border-slate-200","p-2","rounded-md","border"]],template:function(o,c){1&o&&e.wR5(0,"app-list-categories",0)(1,"router-outlet")},dependencies:[d.cP,u.M],encapsulation:2})}return t})()},9052:(m,_,n)=>{n.d(_,{y:()=>s});var e=n(4496),d=n(7760),u=n(6700),r=n(7368),a=n(2700),t=n(1368);function i(o,c){if(1&o&&(e.wR5(0,"img",1),e.wVc(1,"async")),2&o){const l=e.GaO();e.uQ9("max-w-[100%] h-auto min-h-[50px] md:min-h-[100px] ",l.imgClass,""),e._6D("src",e.kDX(1,5,l.imageSrc$),e.K6U),e.E7m("draggable",!1)}}let s=(()=>{class o{constructor(){this.noImage="/assets/img/no-image.jpg",this.imagesService=(0,e.uUt)(d.U),this.imgClass="block rounded",this.image$=new u.g(null),this.imageSrc$=this.image$.pipe((0,r.G)(l=>l instanceof Blob?(0,a.of)(URL.createObjectURL(l)):l&&l.id?this.imagesService.downloadUrl(l.id):(0,a.of)(this.noImage)))}set image(l){this.image$.next(l??null)}static#t=this.\u0275fac=function(v){return new(v||o)};static#e=this.\u0275cmp=e.In1({type:o,selectors:[["app-show-image"]],inputs:{imgClass:"imgClass",image:"image"},standalone:!0,features:[e.UHJ],decls:2,vars:3,consts:[[3,"draggable","class","src"],[3,"draggable","src"]],template:function(v,f){1&v&&(e.yuY(0,i,2,7,"img",0),e.wVc(1,"async")),2&v&&e.C0Y(0,e.kDX(1,1,f.imageSrc$)?0:-1)},dependencies:[t.a],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}"],changeDetection:0})}return o})()},2264:(m,_,n)=>{n.d(_,{W:()=>d});var e=n(8400);class d extends e.w{constructor(r){super(r),this.filename=r.filename,this.status=r.status,this.key=r.key,this.original_id=r.original_id,this.tag=r.tag,this.url=r.url}}},5820:(m,_,n)=>{n.d(_,{Q:()=>r});var e=n(8400);class d extends e.w{constructor(t){super(t),this.public_visible=t.public_visible,this.public_from=t.public_from?new Date(t.public_from):void 0,this.public_to=t.public_to?new Date(t.public_to):void 0,this.private_visible=t.private_visible,this.daily_from=t.daily_from?new Date(t.daily_from):void 0,this.daily_to=t.daily_to?new Date(t.daily_to):void 0}}var u=n(2264);class r extends e.w{constructor(t){super(t),this.name=t.name,this.description=t.description,this.status=t.status,this.price=t.price,this.parent_id=t.parent_id,this.index=t.index,this.secret=t.secret,this.secret_desc=t.secret_desc,this.visibility_id=t.visibility_id,this.visibility=t.visibility?new d(t.visibility):void 0,this.parent=t.parent?new r(t.parent):void 0,this.children=t.children?t.children.map(i=>new r(i)):[],this.images=t.images?t.images.map(i=>new u.W(i)):[],this.translations=t.translations,this.public_visible=t.public_visible,this.stats=t.stats}}},9088:(m,_,n)=>{n.d(_,{S:()=>u});var e=n(4496);const d={menuCategory:{show:"/admin/menu/{itemId}",duplicate:"/admin/menu/{itemId}/duplicate",export:"/admin/menu/{itemId}/export",createChild:"/admin/menu/{itemId}/create-category",linkCategory:"/admin/menu/{itemId}/link-category",createDish:"/admin/menu/{itemId}/create-dish",linkDish:"/admin/menu/{itemId}/link-dish",private:"/menu/{itemId}",public:"/menu/{itemId}"},dish:{show:"/admin/menu/{categoryId}/dish/{itemId}"}};let u=(()=>{class r{transform(t,i){const s=d[i.split(".")[0]];if(!s)throw new Error(`Resource not found: ${i} (resouce: ${i.split(".")[0]})`);const o=i.split(".")[1];if(!s[o])throw new Error(`Action not found: ${i} (action: ${o})`);if(typeof t>"u"||null===t)return null;if("number"==typeof t&&(t=t.toString()),"object"==typeof t&&null!==t&&!Array.isArray(t)){let c=s[o];if(Object.keys(t).forEach(l=>{const v=t[l];void 0!==v&&c.includes(`{${l}}`)&&(c=c.replace(`{${l}}`,v??""))}),c.includes("{{"))throw new Error(`Unresolved interpolation: ${c}`);return c}if("string"!=typeof t)throw new Error(`Invalid itemId: ${t} (type: ${typeof t})`);return s[o].replace("{itemId}",t)}static#t=this.\u0275fac=function(i){return new(i||r)};static#e=this.\u0275pipe=e.UTH({name:"urlTo",type:r,pure:!0,standalone:!0})}return r})()},7760:(m,_,n)=>{n.d(_,{U:()=>r});var e=n(6012),d=n(2264),u=n(4496);let r=(()=>{class a extends e.s{constructor(){super(d.W,"images")}removeFromRecord(i,s){return this.patch(`${i}/remove_from_record`,{record_type:s.record_type,record_id:s.record_id})}updateRecord(i,s){return this.patch("record",{image_ids:s,record_type:i.record_type,record_id:i.record_id})}downloadUrl(i){return this.url(`${i}/download`)}static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275prov=u.wxM({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()},1712:(m,_,n)=>{n.d(_,{S:()=>a});var e=n(6012),d=n(5820),u=n(4704),r=n(4496);let a=(()=>{class t extends e.s{constructor(){super(d.Q,"admin/menu/categories")}addCategory(s,o,c={}){return this.post(`${s}/add_category/${o}`,c)}addDish(s,o){return this.post(`${s}/dishes/${o}`,{})}removeDish(s,o){return this.delete(`${s}/dishes/${o}`,{})}orderDishes(s,o){return this.patch(`${s}/order_dishes`,{field:o})}dashboardData(s){return this.get(`${s}/dashboard_data`)}updateVisibility(s,o){return this.patch(`${s}/visibility`,o).pipe((0,u.k)(c=>this.mapItem(c)))}copy(s,o){return this.post(`${s}/copy`,o).pipe((0,u.k)(c=>this.mapItem(c)))}move(s,o){return this.patch(`${s}/move/${o}`,{}).pipe((0,u.k)(c=>this.mapItem(c)))}static#t=this.\u0275fac=function(o){return new(o||t)};static#e=this.\u0275prov=r.wxM({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()},832:(m,_,n)=>{n.d(_,{I:()=>r,w:()=>u});var e=n(4496),d=n(3480);let u=(()=>{class a{constructor(i){this.tuiFocusVisibleChange=i}}return a.\u0275fac=function(i){return new(i||a)(e.GI1(d.MF))},a.\u0275dir=e.Sc5({type:a,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[e.M5G([d.UF,d.MF])]}),a})(),r=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.a4G({type:a}),a.\u0275inj=e.s3X({}),a})()},4259:(m,_,n)=>{n.d(_,{U9:()=>t,_k:()=>a});var e=n(4496),d=n(7232);class r{constructor(s){this.$implicit=s}}let a=(()=>{class i{constructor(o,c){this.viewContainer=o,this.templateRef=c}set tuiRepeatTimesOf(o){const c=Math.floor((0,d.K6)(o,0,65536)),{length:l}=this.viewContainer;o<l?this.removeContainers(l-o):this.addContainers(c)}addContainers(o){for(let c=this.viewContainer.length;c<o;c++)this.viewContainer.createEmbeddedView(this.templateRef,new r(c))}removeContainers(o){for(let c=0;c<o;c++)this.viewContainer.remove()}}return i.\u0275fac=function(o){return new(o||i)(e.GI1(e.y8U),e.GI1(e.Yw2))},i.\u0275dir=e.Sc5({type:i,selectors:[["","tuiRepeatTimes","","tuiRepeatTimesOf",""]],inputs:{tuiRepeatTimesOf:"tuiRepeatTimesOf"}}),i})(),t=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({}),i})()},1512:(m,_,n)=>{n.d(_,{C:()=>E,w:()=>T});var e=n(4496),d=n(900),u=n(4392),r=n(4164),a=n(3480),t=n(4680),i=n(3972),s=n(5944),o=n(3412),c=n(4704),l=n(3656),v=n(1368);const f=["tuiLink",""];function O(g,p){if(1&g&&e.wR5(0,"tui-svg",3),2&g){const h=e.GaO();e.E7m("src",h.icon||"")}}function P(g,p){if(1&g&&e.wR5(0,"tui-svg",4),2&g){const h=e.GaO();e.E7m("src",h.icon||"")}}const D=["*"];let E=(()=>{class g{constructor(h,M,C){this.el=h,this.mode$=M,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,o.U)((0,d.Ax)(this.el.nativeElement,"focusin").pipe((0,c.k)(u.Ml)),(0,d.Ax)(this.el.nativeElement,"focusout").pipe((0,c.k)(u.so))),C.subscribe(y=>{this.focusVisible=y})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,r.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return g.\u0275fac=function(h){return new(h||g)(e.GI1(e.GMv),e.GI1(s.Yx),e.GI1(a.MF))},g.\u0275cmp=e.In1({type:g,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(h,M){1&h&&e.qCj("$.data-mode.attr",function(){return M.mode$}),2&h&&(e.e48("data-host-mode",M.mode),e.eAK("_pseudo",M.pseudo)("_icon-rotated",M.iconRotated)("_focus-visible",M.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[e.M5G([(0,t.NK)(g),a.MF,a.UF,i.Ir])],attrs:f,ngContentSelectors:D,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(h,M){1&h&&(e.kPM(),e.yuY(0,O,1,1,"tui-svg",0),e.I0R(1,"span",1),e._Xx(2),e.C$Y(),e.yuY(3,P,1,1,"tui-svg",2)),2&h&&(e.E7m("ngIf",M.iconAlignLeft),e.yG2(3),e.E7m("ngIf",M.iconAlignRight))},dependencies:[l.Wu,v.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),g})(),T=(()=>{class g{}return g.\u0275fac=function(h){return new(h||g)},g.\u0275mod=e.a4G({type:g}),g.\u0275inj=e.s3X({imports:[[v.MD,l.Yt]]}),g})()},6376:(m,_,n)=>{n.d(_,{C:()=>r,k:()=>a});var e=n(4496),d=n(1368);const u=["*"];let r=(()=>{class t{constructor(){this.size="m",this.textAlign="left",this.hoverable=!1,this.transparent=!1}get sizeS(){return"s"===this.size}get sizeM(){return"m"===this.size}get sizeL(){return"l"===this.size}get textAlignLeft(){return"left"===this.textAlign}get textAlignCenter(){return"center"===this.textAlign}get textAlignRight(){return"right"===this.textAlign}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=e.In1({type:t,selectors:[["tui-island"],["a","tuiIsland",""]],hostAttrs:[1,"tui-island"],hostVars:16,hostBindings:function(s,o){2&s&&e.eAK("tui-island_hoverable",o.hoverable)("tui-island_transparent",o.transparent)("tui-island_size_s",o.sizeS)("tui-island_size_m",o.sizeM)("tui-island_size_l",o.sizeL)("tui-island_text-align_left",o.textAlignLeft)("tui-island_text-align_center",o.textAlignCenter)("tui-island_text-align_right",o.textAlignRight)},inputs:{size:"size",textAlign:"textAlign",hoverable:"hoverable",transparent:"transparent"},ngContentSelectors:u,decls:1,vars:0,template:function(s,o){1&s&&(e.kPM(),e._Xx(0))},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),t})(),a=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[[d.MD]]}),t})()},8896:(m,_,n)=>{n.d(_,{g:()=>a});var e=n(4496),d=n(3656),u=n(1368);let a=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[[u.MD,d.Yt]]}),t})()},1496:(m,_,n)=>{n.d(_,{I:()=>u});var e=n(112),d=n(3120);function u(r=0,a=e.M){return r<0&&(r=0),(0,d.k)(r,r,a)}}}]);