import{E as Te}from"./errorOverview.01334814.js";import{L as xe,N as Ve,O as R,P as Ee,Q as Pe,R as Ce,S as F,T as Re,U as De,V as ce,W as ze,X as Be,Y as x,Z as Ge,$ as $e,a0 as Fe,a1 as Ke,a2 as Ie,a3 as He,a4 as Ue,a5 as Ye,a6 as qe,a7 as le,a8 as Xe,a9 as j,aa as pe,ab as je,ac as We,ad as Qe,ae as Ze,af as G,ag as Ne,ah as fe,ai as me,aj as Je,ak as et,al as tt,am as at,an as rt,ao as nt,ap as ve,aq as it,ar as K,as as $,at as Z,au as ot,av as st,aw as lt,ax as ut,ay as he,az as ye,aA as ct,aB as pt,a as ft,b as J,e as M,f as C,d as B,w as E,i as O,g,aC as mt,m as H,q as vt,k as z,v as ht,l as yt,_ as gt}from"./index.fee0a898.js";import{u as dt}from"./loading.5b8c1ce5.js";import{a as _t}from"./errorData.e3c1ade2.js";import"./chartOption.301ede7c.js";var ge=xe.prototype,ee=Ve.prototype,we=function(){function a(){this.x1=0,this.y1=0,this.x2=0,this.y2=0,this.percent=1}return a}();(function(a){R(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e})(we);function te(a){return isNaN(+a.cpx1)||isNaN(+a.cpy1)}var bt=function(a){R(e,a);function e(t){var r=a.call(this,t)||this;return r.type="ec-line",r}return e.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},e.prototype.getDefaultShape=function(){return new we},e.prototype.buildPath=function(t,r){te(r)?ge.buildPath.call(this,t,r):ee.buildPath.call(this,t,r)},e.prototype.pointAt=function(t){return te(this.shape)?ge.pointAt.call(this,t):ee.pointAt.call(this,t)},e.prototype.tangentAt=function(t){var r=this.shape,i=te(r)?[r.x2-r.x1,r.y2-r.y1]:ee.tangentAt.call(this,t);return Ee(i,i)},e}(Pe);const St=bt;var ae=["fromSymbol","toSymbol"];function de(a){return"_"+a+"Type"}function _e(a,e,t){var r=e.getItemVisual(t,a);if(!(!r||r==="none")){var i=e.getItemVisual(t,a+"Size"),n=e.getItemVisual(t,a+"Rotate"),o=e.getItemVisual(t,a+"Offset"),s=e.getItemVisual(t,a+"KeepAspect"),l=He(i),u=Ue(o||0,l),c=Ye(r,-l[0]/2+u[0],-l[1]/2+u[1],l[0],l[1],null,s);return c.__specifiedRotation=n==null||isNaN(n)?void 0:+n*Math.PI/180||0,c.name=a,c}}function Lt(a){var e=new St({name:"line",subPixelOptimize:!0});return se(e.shape,a),e}function se(a,e){a.x1=e[0][0],a.y1=e[0][1],a.x2=e[1][0],a.y2=e[1][1],a.percent=1;var t=e[2];t?(a.cpx1=t[0],a.cpy1=t[1]):(a.cpx1=NaN,a.cpy1=NaN)}var kt=function(a){R(e,a);function e(t,r,i){var n=a.call(this)||this;return n._createLine(t,r,i),n}return e.prototype._createLine=function(t,r,i){var n=t.hostModel,o=t.getItemLayout(r),s=Lt(o);s.shape.percent=0,Ce(s,{shape:{percent:1}},n,r),this.add(s),F(ae,function(l){var u=_e(l,t,r);this.add(u),this[de(l)]=t.getItemVisual(r,l)},this),this._updateCommonStl(t,r,i)},e.prototype.updateData=function(t,r,i){var n=t.hostModel,o=this.childOfName("line"),s=t.getItemLayout(r),l={shape:{}};se(l.shape,s),Re(o,l,n,r),F(ae,function(u){var c=t.getItemVisual(r,u),v=de(u);if(this[v]!==c){this.remove(this.childOfName(u));var p=_e(u,t,r);this.add(p)}this[v]=c},this),this._updateCommonStl(t,r,i)},e.prototype.getLinePath=function(){return this.childAt(0)},e.prototype._updateCommonStl=function(t,r,i){var n=t.hostModel,o=this.childOfName("line"),s=i&&i.emphasisLineStyle,l=i&&i.blurLineStyle,u=i&&i.selectLineStyle,c=i&&i.labelStatesModels,v=i&&i.emphasisDisabled,p=i&&i.focus,y=i&&i.blurScope;if(!i||t.hasItemOption){var h=t.getItemModel(r),b=h.getModel("emphasis");s=b.getModel("lineStyle").getLineStyle(),l=h.getModel(["blur","lineStyle"]).getLineStyle(),u=h.getModel(["select","lineStyle"]).getLineStyle(),v=b.get("disabled"),p=b.get("focus"),y=b.get("blurScope"),c=De(h)}var f=t.getItemVisual(r,"style"),L=f.stroke;o.useStyle(f),o.style.fill=null,o.style.strokeNoScale=!0,o.ensureState("emphasis").style=s,o.ensureState("blur").style=l,o.ensureState("select").style=u,F(ae,function(A){var S=this.childOfName(A);if(S){S.setColor(L),S.style.opacity=f.opacity;for(var N=0;N<ce.length;N++){var k=ce[N],w=o.getState(k);if(w){var T=w.style||{},V=S.ensureState(k),P=V.style||(V.style={});T.stroke!=null&&(P[S.__isEmptyBrush?"stroke":"fill"]=T.stroke),T.opacity!=null&&(P.opacity=T.opacity)}}S.markRedraw()}},this);var d=n.getRawValue(r);ze(this,c,{labelDataIndex:r,labelFetcher:{getFormattedLabel:function(A,S){return n.getFormattedLabel(A,S,t.dataType)}},inheritColor:L||"#000",defaultOpacity:f.opacity,defaultText:(d==null?t.getName(r):isFinite(d)?Be(d):d)+""});var D=this.getTextContent();if(D){var m=c.normal;D.__align=D.style.align,D.__verticalAlign=D.style.verticalAlign,D.__position=m.get("position")||"middle";var _=m.get("distance");x(_)||(_=[_,_]),D.__labelDistance=_}this.setTextConfig({position:null,local:!0,inside:!1}),Ge(this,p,y,v)},e.prototype.highlight=function(){$e(this)},e.prototype.downplay=function(){Fe(this)},e.prototype.updateLayout=function(t,r){this.setLinePoints(t.getItemLayout(r))},e.prototype.setLinePoints=function(t){var r=this.childOfName("line");se(r.shape,t),r.dirty()},e.prototype.beforeUpdate=function(){var t=this,r=t.childOfName("fromSymbol"),i=t.childOfName("toSymbol"),n=t.getTextContent();if(!r&&!i&&(!n||n.ignore))return;for(var o=1,s=this.parent;s;)s.scaleX&&(o/=s.scaleX),s=s.parent;var l=t.childOfName("line");if(!this.__dirty&&!l.__dirty)return;var u=l.shape.percent,c=l.pointAt(0),v=l.pointAt(u),p=Ke([],v,c);Ee(p,p);function y(w,T){var V=w.__specifiedRotation;if(V==null){var P=l.tangentAt(T);w.attr("rotation",(T===1?-1:1)*Math.PI/2-Math.atan2(P[1],P[0]))}else w.attr("rotation",V)}if(r&&(r.setPosition(c),y(r,0),r.scaleX=r.scaleY=o*u,r.markRedraw()),i&&(i.setPosition(v),y(i,1),i.scaleX=i.scaleY=o*u,i.markRedraw()),n&&!n.ignore){n.x=n.y=0,n.originX=n.originY=0;var h=void 0,b=void 0,f=n.__labelDistance,L=f[0]*o,d=f[1]*o,D=u/2,m=l.tangentAt(D),_=[m[1],-m[0]],A=l.pointAt(D);_[1]>0&&(_[0]=-_[0],_[1]=-_[1]);var S=m[0]<0?-1:1;if(n.__position!=="start"&&n.__position!=="end"){var N=-Math.atan2(m[1],m[0]);v[0]<c[0]&&(N=Math.PI+N),n.rotation=N}var k=void 0;switch(n.__position){case"insideStartTop":case"insideMiddleTop":case"insideEndTop":case"middle":k=-d,b="bottom";break;case"insideStartBottom":case"insideMiddleBottom":case"insideEndBottom":k=d,b="top";break;default:k=0,b="middle"}switch(n.__position){case"end":n.x=p[0]*L+v[0],n.y=p[1]*d+v[1],h=p[0]>.8?"left":p[0]<-.8?"right":"center",b=p[1]>.8?"top":p[1]<-.8?"bottom":"middle";break;case"start":n.x=-p[0]*L+c[0],n.y=-p[1]*d+c[1],h=p[0]>.8?"right":p[0]<-.8?"left":"center",b=p[1]>.8?"bottom":p[1]<-.8?"top":"middle";break;case"insideStartTop":case"insideStart":case"insideStartBottom":n.x=L*S+c[0],n.y=c[1]+k,h=m[0]<0?"right":"left",n.originX=-L*S,n.originY=-k;break;case"insideMiddleTop":case"insideMiddle":case"insideMiddleBottom":case"middle":n.x=A[0],n.y=A[1]+k,h="center",n.originY=-k;break;case"insideEndTop":case"insideEnd":case"insideEndBottom":n.x=-L*S+v[0],n.y=v[1]+k,h=m[0]>=0?"right":"left",n.originX=L*S,n.originY=-k;break}n.scaleX=n.scaleY=o,n.setStyle({verticalAlign:n.__verticalAlign||b,align:n.__align||h})}},e}(Ie);const At=kt;var Et=function(){function a(e){this.group=new Ie,this._LineCtor=e||At}return a.prototype.updateData=function(e){var t=this;this._progressiveEls=null;var r=this,i=r.group,n=r._lineData;r._lineData=e,n||i.removeAll();var o=be(e);e.diff(n).add(function(s){t._doAdd(e,s,o)}).update(function(s,l){t._doUpdate(n,e,l,s,o)}).remove(function(s){i.remove(n.getItemGraphicEl(s))}).execute()},a.prototype.updateLayout=function(){var e=this._lineData;!e||e.eachItemGraphicEl(function(t,r){t.updateLayout(e,r)},this)},a.prototype.incrementalPrepareUpdate=function(e){this._seriesScope=be(e),this._lineData=null,this.group.removeAll()},a.prototype.incrementalUpdate=function(e,t){this._progressiveEls=[];function r(s){!s.isGroup&&!Dt(s)&&(s.incremental=!0,s.ensureState("emphasis").hoverLayer=!0)}for(var i=e.start;i<e.end;i++){var n=t.getItemLayout(i);if(re(n)){var o=new this._LineCtor(t,i,this._seriesScope);o.traverse(r),this.group.add(o),t.setItemGraphicEl(i,o),this._progressiveEls.push(o)}}},a.prototype.remove=function(){this.group.removeAll()},a.prototype.eachRendered=function(e){qe(this._progressiveEls||this.group,e)},a.prototype._doAdd=function(e,t,r){var i=e.getItemLayout(t);if(!!re(i)){var n=new this._LineCtor(e,t,r);e.setItemGraphicEl(t,n),this.group.add(n)}},a.prototype._doUpdate=function(e,t,r,i,n){var o=e.getItemGraphicEl(r);if(!re(t.getItemLayout(i))){this.group.remove(o);return}o?o.updateData(t,i,n):o=new this._LineCtor(t,i,n),t.setItemGraphicEl(i,o),this.group.add(o)},a}();function Dt(a){return a.animators&&a.animators.length>0}function be(a){var e=a.hostModel,t=e.getModel("emphasis");return{lineStyle:e.getModel("lineStyle").getLineStyle(),emphasisLineStyle:t.getModel(["lineStyle"]).getLineStyle(),blurLineStyle:e.getModel(["blur","lineStyle"]).getLineStyle(),selectLineStyle:e.getModel(["select","lineStyle"]).getLineStyle(),emphasisDisabled:t.get("disabled"),blurScope:t.get("blurScope"),focus:t.get("focus"),labelStatesModels:De(e)}}function Se(a){return isNaN(a[0])||isNaN(a[1])}function re(a){return a&&!Se(a[0])&&!Se(a[1])}const It=Et;function Nt(a,e){if(!a)return!1;for(var t=x(a)?a:[a],r=0;r<t.length;r++)if(t[r]&&t[r][e])return!0;return!1}function U(a){Ze(a,"label",["show"])}var Y=le(),Me=function(a){R(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=e.type,t.createdBySelf=!1,t}return e.prototype.init=function(t,r,i){this.mergeDefaultAndTheme(t,i),this._mergeOption(t,i,!1,!0)},e.prototype.isAnimationEnabled=function(){if(Xe.node)return!1;var t=this.__hostSeries;return this.getShallow("animation")&&t&&t.isAnimationEnabled()},e.prototype.mergeOption=function(t,r){this._mergeOption(t,r,!1,!1)},e.prototype._mergeOption=function(t,r,i,n){var o=this.mainType;i||r.eachSeries(function(s){var l=s.get(this.mainType,!0),u=Y(s)[o];if(!l||!l.data){Y(s)[o]=null;return}u?u._mergeOption(l,r,!0):(n&&U(l),F(l.data,function(c){c instanceof Array?(U(c[0]),U(c[1])):U(c)}),u=this.createMarkerModelFromSeries(l,this,r),j(u,{mainType:this.mainType,seriesIndex:s.seriesIndex,name:s.name,createdBySelf:!0}),u.__hostSeries=s),Y(s)[o]=u},this)},e.prototype.formatTooltip=function(t,r,i){var n=this.getData(),o=this.getRawValue(t),s=n.getName(t);return pe("section",{header:this.name,blocks:[pe("nameValue",{name:s,value:o,noName:!s,noValue:o==null})]})},e.prototype.getData=function(){return this._data},e.prototype.setData=function(t){this._data=t},e.getMarkerModelFromSeries=function(t,r){return Y(t)[r]},e.type="marker",e.dependencies=["series","grid","polar","geo"],e}(je);We(Me,Qe.prototype);const W=Me;function wt(a){return!(isNaN(parseFloat(a.x))&&isNaN(parseFloat(a.y)))}function Mt(a){return!isNaN(parseFloat(a.x))&&!isNaN(parseFloat(a.y))}function q(a,e,t,r,i,n){var o=[],s=Je(e,r),l=s?e.getCalculationInfo("stackResultDimension"):r,u=ue(e,l,a),c=e.indicesOfNearest(l,u)[0];o[i]=e.get(t,c),o[n]=e.get(l,c);var v=e.get(r,c),p=et(e.get(r,c));return p=Math.min(p,20),p>=0&&(o[n]=+o[n].toFixed(p)),[o,v]}var ne={min:G(q,"min"),max:G(q,"max"),average:G(q,"average"),median:G(q,"median")};function Le(a,e){var t=a.getData(),r=a.coordinateSystem;if(e&&!Mt(e)&&!x(e.coord)&&r){var i=r.dimensions,n=Oe(e,t,r,a);if(e=Ne(e),e.type&&ne[e.type]&&n.baseAxis&&n.valueAxis){var o=fe(i,n.baseAxis.dim),s=fe(i,n.valueAxis.dim),l=ne[e.type](t,n.baseDataDim,n.valueDataDim,o,s);e.coord=l[0],e.value=l[1]}else{for(var u=[e.xAxis!=null?e.xAxis:e.radiusAxis,e.yAxis!=null?e.yAxis:e.angleAxis],c=0;c<2;c++)ne[u[c]]&&(u[c]=ue(t,t.mapDimension(i[c]),u[c]));e.coord=u}}return e}function Oe(a,e,t,r){var i={};return a.valueIndex!=null||a.valueDim!=null?(i.valueDataDim=a.valueIndex!=null?e.getDimension(a.valueIndex):a.valueDim,i.valueAxis=t.getAxis(Ot(r,i.valueDataDim)),i.baseAxis=t.getOtherAxis(i.valueAxis),i.baseDataDim=e.mapDimension(i.baseAxis.dim)):(i.baseAxis=r.getBaseAxis(),i.valueAxis=t.getOtherAxis(i.baseAxis),i.baseDataDim=e.mapDimension(i.baseAxis.dim),i.valueDataDim=e.mapDimension(i.valueAxis.dim)),i}function Ot(a,e){var t=a.getData().getDimensionInfo(e);return t&&t.coordDim}function ke(a,e){return a&&a.containData&&e.coord&&!wt(e)?a.containData(e.coord):!0}function Tt(a,e){return a?function(t,r,i,n){var o=n<2?t.coord&&t.coord[n]:t.value;return me(o,e[n])}:function(t,r,i,n){return me(t.value,e[n])}}function ue(a,e,t){if(t==="average"){var r=0,i=0;return a.each(e,function(n,o){isNaN(n)||(r+=n,i++)}),r/i}else return t==="median"?a.getMedian(e):a.getDataExtent(e)[t==="max"?1:0]}var ie=le(),xt=function(a){R(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=e.type,t}return e.prototype.init=function(){this.markerGroupMap=tt()},e.prototype.render=function(t,r,i){var n=this,o=this.markerGroupMap;o.each(function(s){ie(s).keep=!1}),r.eachSeries(function(s){var l=W.getMarkerModelFromSeries(s,n.type);l&&n.renderSeries(s,l,r,i)}),o.each(function(s){!ie(s).keep&&n.group.remove(s.group)})},e.prototype.markKeep=function(t){ie(t).keep=!0},e.prototype.toggleBlurSeries=function(t,r){var i=this;F(t,function(n){var o=W.getMarkerModelFromSeries(n,i.type);if(o){var s=o.getData();s.eachItemGraphicEl(function(l){l&&(r?at(l):rt(l))})}})},e.type="marker",e}(nt);const Vt=xt;var Pt=function(a){R(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=e.type,t}return e.prototype.createMarkerModelFromSeries=function(t,r,i){return new e(t,r,i)},e.type="markLine",e.defaultOption={z:5,symbol:["circle","arrow"],symbolSize:[8,16],symbolOffset:0,precision:2,tooltip:{trigger:"item"},label:{show:!0,position:"end",distance:5},lineStyle:{type:"dashed"},emphasis:{label:{show:!0},lineStyle:{width:3}},animationEasing:"linear"},e}(W);const Ct=Pt;var X=le(),Rt=function(a,e,t,r){var i=a.getData(),n;if(x(r))n=r;else{var o=r.type;if(o==="min"||o==="max"||o==="average"||o==="median"||r.xAxis!=null||r.yAxis!=null){var s=void 0,l=void 0;if(r.yAxis!=null||r.xAxis!=null)s=e.getAxis(r.yAxis!=null?"y":"x"),l=st(r.yAxis,r.xAxis);else{var u=Oe(r,i,e,a);s=u.valueAxis;var c=lt(i,u.valueDataDim);l=ue(i,c,o)}var v=s.dim==="x"?0:1,p=1-v,y=Ne(r),h={coord:[]};y.type=null,y.coord=[],y.coord[p]=-1/0,h.coord[p]=1/0;var b=t.get("precision");b>=0&&ut(l)&&(l=+l.toFixed(Math.min(b,20))),y.coord[v]=h.coord[v]=l,n=[y,h,{type:o,valueIndex:r.valueIndex,value:l}]}else n=[]}var f=[Le(a,n[0]),Le(a,n[1]),j({},n[2])];return f[2].type=f[2].type||null,he(f[2],f[0]),he(f[2],f[1]),f};function Q(a){return!isNaN(a)&&!isFinite(a)}function Ae(a,e,t,r){var i=1-a,n=r.dimensions[a];return Q(e[i])&&Q(t[i])&&e[a]===t[a]&&r.getAxis(n).containData(e[a])}function zt(a,e){if(a.type==="cartesian2d"){var t=e[0].coord,r=e[1].coord;if(t&&r&&(Ae(1,t,r,a)||Ae(0,t,r,a)))return!0}return ke(a,e[0])&&ke(a,e[1])}function oe(a,e,t,r,i){var n=r.coordinateSystem,o=a.getItemModel(e),s,l=ye(o.get("x"),i.getWidth()),u=ye(o.get("y"),i.getHeight());if(!isNaN(l)&&!isNaN(u))s=[l,u];else{if(r.getMarkerPosition)s=r.getMarkerPosition(a.getValues(a.dimensions,e));else{var c=n.dimensions,v=a.get(c[0],e),p=a.get(c[1],e);s=n.dataToPoint([v,p])}if(ct(n,"cartesian2d")){var y=n.getAxis("x"),h=n.getAxis("y"),c=n.dimensions;Q(a.get(c[0],e))?s[0]=y.toGlobalCoord(y.getExtent()[t?0:1]):Q(a.get(c[1],e))&&(s[1]=h.toGlobalCoord(h.getExtent()[t?0:1]))}isNaN(l)||(s[0]=l),isNaN(u)||(s[1]=u)}a.setItemLayout(e,s)}var Bt=function(a){R(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=e.type,t}return e.prototype.updateTransform=function(t,r,i){r.eachSeries(function(n){var o=W.getMarkerModelFromSeries(n,"markLine");if(o){var s=o.getData(),l=X(o).from,u=X(o).to;l.each(function(c){oe(l,c,!0,n,i),oe(u,c,!1,n,i)}),s.each(function(c){s.setItemLayout(c,[l.getItemLayout(c),u.getItemLayout(c)])}),this.markerGroupMap.get(n.id).updateLayout()}},this)},e.prototype.renderSeries=function(t,r,i,n){var o=t.coordinateSystem,s=t.id,l=t.getData(),u=this.markerGroupMap,c=u.get(s)||u.set(s,new It);this.group.add(c.group);var v=Gt(o,t,r),p=v.from,y=v.to,h=v.line;X(r).from=p,X(r).to=y,r.setData(h);var b=r.get("symbol"),f=r.get("symbolSize"),L=r.get("symbolRotate"),d=r.get("symbolOffset");x(b)||(b=[b,b]),x(f)||(f=[f,f]),x(L)||(L=[L,L]),x(d)||(d=[d,d]),v.from.each(function(m){D(p,m,!0),D(y,m,!1)}),h.each(function(m){var _=h.getItemModel(m).getModel("lineStyle").getLineStyle();h.setItemLayout(m,[p.getItemLayout(m),y.getItemLayout(m)]),_.stroke==null&&(_.stroke=p.getItemVisual(m,"style").fill),h.setItemVisual(m,{fromSymbolKeepAspect:p.getItemVisual(m,"symbolKeepAspect"),fromSymbolOffset:p.getItemVisual(m,"symbolOffset"),fromSymbolRotate:p.getItemVisual(m,"symbolRotate"),fromSymbolSize:p.getItemVisual(m,"symbolSize"),fromSymbol:p.getItemVisual(m,"symbol"),toSymbolKeepAspect:y.getItemVisual(m,"symbolKeepAspect"),toSymbolOffset:y.getItemVisual(m,"symbolOffset"),toSymbolRotate:y.getItemVisual(m,"symbolRotate"),toSymbolSize:y.getItemVisual(m,"symbolSize"),toSymbol:y.getItemVisual(m,"symbol"),style:_})}),c.updateData(h),v.line.eachItemGraphicEl(function(m){ve(m).dataModel=r,m.traverse(function(_){ve(_).dataModel=r})});function D(m,_,A){var S=m.getItemModel(_);oe(m,_,A,t,n);var N=S.getModel("itemStyle").getItemStyle();N.fill==null&&(N.fill=it(l,"color")),m.setItemVisual(_,{symbolKeepAspect:S.get("symbolKeepAspect"),symbolOffset:K(S.get("symbolOffset",!0),d[A?0:1]),symbolRotate:K(S.get("symbolRotate",!0),L[A?0:1]),symbolSize:K(S.get("symbolSize"),f[A?0:1]),symbol:K(S.get("symbol",!0),b[A?0:1]),style:N})}this.markKeep(c),c.group.silent=r.get("silent")||t.get("silent")},e.type="markLine",e}(Vt);function Gt(a,e,t){var r;a?r=$(a&&a.dimensions,function(u){var c=e.getData().getDimensionInfo(e.getData().mapDimension(u))||{};return j(j({},c),{name:u,ordinalMeta:null})}):r=[{name:"value",type:"float"}];var i=new Z(r,t),n=new Z(r,t),o=new Z([],t),s=$(t.get("data"),G(Rt,e,a,t));a&&(s=ot(s,G(zt,a)));var l=Tt(!!a,r);return i.initData($(s,function(u){return u[0]}),null,l),n.initData($(s,function(u){return u[1]}),null,l),o.initData($(s,function(u){return u[2]})),o.hasItemOption=!0,{from:i,to:n,line:o}}const $t=Bt;function Ft(a){a.registerComponentModel(Ct),a.registerComponentView($t),a.registerPreprocessor(function(e){Nt(e.series,"markLine")&&(e.markLine=e.markLine||{})})}pt(Ft);const Kt={class:"form"},Ht={class:"form-item"},Ut=O("span",null,"Error Type",-1),Yt=z("All Error"),qt=z("jsError"),Xt=z("promiseError"),jt=z("resourceError"),Wt=z("requestError"),Qt=z("blankscreenError"),Zt={class:"form-item"},Jt=O("span",null," Website ",-1),ea={class:"form-item"},ta={class:"column-div"},aa={class:"special"},ra={class:"special-name",style:{color:"#3c74dd"}},na={class:"special-msg"},ia={class:"special-time"},oa={class:"special-time"},sa=z("view"),la={__name:"errorList",setup(a){const e=ft(),{loading:t,setLoading:r}=dt(!0),i=J([]),n={pageSize:10},o=J([]),s=f=>{e.push(`/error/issuedetails/${f}`)};let l=["All Error"],u="";const c=f=>{l=f},v=f=>{u=f},p=async()=>{r(!0);try{const f=await _t();o.value=f.dateList,i.value=f.list}catch{}finally{r(!1)}};p();const y=()=>{if(u!==""?(console.log(u),i.value=i.value.filter(f=>f.info.originURL===u)):console.log("empty"),l.length!==0&&!l.includes("All Error")){console.log(l);const f=J([]);for(let L=0;L<l.length;L+=1)console.log(l[L]),f.value.push(...i.value.filter(d=>d.info.errorType===l[L]));console.log(f),console.log(i),i.value=f.value,console.log(f),console.log(i)}else console.log("empty")},h=()=>{p()},b=f=>({color:["#6aa1ff"],tooltip:{trigger:"item",textStyle:{fontSize:"12"}},grid:{left:30,right:0,top:15,bottom:0},xAxis:[{show:!1,type:"category",splitLine:{show:!1},data:o.value}],yAxis:[{show:!1,type:"value",splitLine:{show:!1}}],series:[{name:"count",type:"bar",data:f,markLine:{symbol:"none",data:[{type:"max",name:"Max"}],emphasis:{lineStyle:{width:1}},tooltip:{show:!1},label:{fontSize:"10",position:"start"},lineStyle:{color:"#86909c"}}}]});return(f,L)=>{const d=M("a-option"),D=M("a-select"),m=M("a-input"),_=M("icon-filter"),A=M("a-button"),S=M("icon-refresh"),N=M("a-divider"),k=M("a-badge"),w=M("a-table-column"),T=M("Chart"),V=M("a-table"),P=M("a-card");return C(),B(P,{class:"general-card",title:"\u5F02\u5E38\u6570\u636E\u5217\u8868"},{default:E(()=>[O("div",Kt,[O("div",Ht,[Ut,g(D,{style:{width:"380px",height:"32px"},placeholder:"Please select ...",multiple:"","allow-clear":"","max-tag-count":2,onChange:c},{default:E(()=>[g(d,null,{default:E(()=>[Yt]),_:1}),g(d,null,{default:E(()=>[qt]),_:1}),g(d,null,{default:E(()=>[Xt]),_:1}),g(d,null,{default:E(()=>[jt]),_:1}),g(d,null,{default:E(()=>[Wt]),_:1}),g(d,null,{default:E(()=>[Qt]),_:1})]),_:1})]),O("div",Zt,[Jt,g(m,{style:{width:"420px",height:"32px"},placeholder:"Please enter ...","allow-clear":"",onChange:v})]),O("div",ea,[g(A,{class:"btn",type:"primary",shape:"round",onClick:y},{default:E(()=>[g(_)]),_:1}),g(A,{class:"btn",shape:"circle",onClick:h},{default:E(()=>[g(S)]),_:1})])]),g(N),g(V,{loading:vt(t),pagination:n,data:i.value,bordered:!1},{columns:E(()=>[g(w,{"data-index":"type"},{cell:E(({record:I})=>[I.info.errorType==="jsError"?(C(),B(k,{key:0,status:"danger"})):I.info.errorType==="promiseError"?(C(),B(k,{key:1,status:"processing"})):I.info.errorType==="resourceError"?(C(),B(k,{key:2,status:"success"})):I.info.errorType==="requestError"?(C(),B(k,{key:3,status:"warning"})):I.info.errorType==="blankscreenError"?(C(),B(k,{key:4,status:"normal"})):mt("",!0)]),_:1}),g(w,{"data-index":"errorName",fixed:"left"},{cell:E(({record:I})=>[O("div",ta,[O("div",aa,[O("span",ra,H(I.name),1),O("span",na,H(I.info.errorMsg),1)]),O("span",ia,H(new Date(I.info.timestamp.$date).toISOString().split("T")[0]),1),O("span",oa,H(I.info.originURL),1)])]),_:1}),g(w,{"data-index":"errorFreq"},{cell:E(({record:I})=>[g(T,{option:b(I.details.errorFreq),width:"220px",height:"65px","auto-resize":!0},null,8,["option"])]),_:1}),g(w,{title:"TotalErrCnt","data-index":"details.TotalErrCnt",sortable:{sortDirections:["ascend","descend"]}}),g(w,{title:"userAffectCnt","data-index":"details.userAffectCnt",sortable:{sortDirections:["ascend","descend"]}}),g(w,{fixed:"right"},{cell:E(({record:I})=>[g(A,{onClick:fa=>s(I.info._id.$oid)},{default:E(()=>[sa]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["loading","data"])]),_:1})}}},ua=la,ca={class:"container"},pa=ht({__name:"index",setup(a){return(e,t)=>{const r=M("Breadcrumb");return C(),yt("div",ca,[g(r,{items:["\u9519\u8BEF","\u5F02\u5E38\u6570\u636E"]}),g(Te),g(ua)])}}});const da=gt(pa,[["__scopeId","data-v-6c24d3ca"]]);export{da as default};
