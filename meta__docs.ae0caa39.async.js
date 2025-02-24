"use strict";(self.webpackChunkreact_mapboxgl_zt=self.webpackChunkreact_mapboxgl_zt||[]).push([[904],{31614:function(pe,q,d){var se;d.r(q),d.d(q,{demos:function(){return n}});var oe=d(90228),de=d.n(oe),ne=d(87999),Ie=d.n(ne),ie=d(75271),ke=d(87737),re=d(91314),n={"docs-guide-demo-base":{component:ie.memo(ie.lazy(function(){return d.e(433).then(d.bind(d,74362))})),asset:{type:"BLOCK",id:"docs-guide-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:d(83776).Z},react:{type:"NPM",value:"18.3.1"},"react-mapboxgl-zt":{type:"NPM",value:"0.0.9"}},entry:"index.tsx"},context:{react:se||(se=d.t(ie,2)),"react-mapboxgl-zt":re},renderOpts:{compile:function(){var Te=Ie()(de()().mark(function v(){var Y,De=arguments;return de()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ae.next=2,d.e(928).then(d.bind(d,56928));case 2:return ae.abrupt("return",(Y=ae.sent).default.apply(Y,De));case 3:case"end":return ae.stop()}},v)}));function Fe(){return Te.apply(this,arguments)}return Fe}()}}}},25079:function(pe,q,d){d.r(q),d.d(q,{demos:function(){return de}});var se=d(75271),oe=d(31275),de={}},91314:function(pe,q,d){d.r(q),d.d(q,{BackgroundLayer:function(){return wt},CircleLayer:function(){return Ht},CustomControl:function(){return $t},FillLayer:function(){return Yt},FullscreenControl:function(){return Rt},HeatmapLayer:function(){return Vt},LineLayer:function(){return qt},MapContext:function(){return Y},MapFactory:function(){return _t},Marker:function(){return or},MousePositionControl:function(){return Jt},NavigationControl:function(){return kt},Popup:function(){return ir},RasterLayer:function(){return tr},ScaleControl:function(){return Wt}});var se=d(31759),oe=d.n(se),de=d(26068),ne=d.n(de),Ie=d(48305),ie=d.n(Ie),ke=d(95959),re=d.n(ke),n=d(75271),Te=d(82187),Fe=d.n(Te),v=d(69370),Y=(0,n.createContext)(null),De={onResize:"resize",onIdle:"idle",onRemove:"remove",onMouseDown:"mousedown",onMouseUp:"mouseup",onMouseOver:"mouseover",onMouseMove:"mousemove",onMouseEnter:"mouseenter",onMouseLeave:"mouseleave",onMouseOut:"mouseout",onPreClick:"preclick",onClick:"click",onDblClick:"dblclick",onContextMenu:"contextmenu",onWheel:"wheel",onTouchStart:"touchstart",onTouchEnd:"touchend",onTouchMove:"touchmove",onTouchCancel:"touchcancel",onMoveStart:"movestart",onMove:"move",onMoveEnd:"moveend",onDragStart:"dragstart",onDrag:"drag",onDragEnd:"dragend",onZoomStart:"zoomstart",onZoom:"zoom",onZoomEnd:"zoomend",onRotateStart:"rotatestart",onRotate:"rotate",onRotateEnd:"rotateend",onPitchStart:"pitchstart",onPitch:"pitch",onPitchEnd:"pitchend",onBoxZoomStart:"boxzoomstart",onBoxZoomEnd:"boxzoomend",onBoxZoomCancel:"boxzoomcancel",onRenderStart:"renderstart",onRender:"render",onError:"error",onWebglContextLost:"webglcontextlost",onWebglContextRestored:"webglcontextrestored",onData:"data",onStyleData:"styledata",onSourceData:"sourcedata",onDataLoading:"dataloading",onStyleDataLoading:"styledataloading",onSourceDataLoading:"sourcedataloading",onStyleImageMissing:"styleimagemissing",onStyleLoad:"style.load",onStyleImportLoad:"style.import.load"},Ue={onMouseDown:"mousedown",onMouseUp:"mouseup",onMouseOver:"mouseover",onMouseMove:"mousemove",onMouseEnter:"mouseenter",onMouseLeave:"mouseleave",onMouseOut:"mouseout",onClick:"click",onTouchStart:"touchstart",onTouchEnd:"touchend",onTouchCancel:"touchcancel"},ae={onOpen:"open",onClose:"close",onDragStart:"dragstart",onDrag:"drag",onDragEnd:"dragend"},me=ne()(ne()(ne()({},De),Ue),ae),ve=function(t,e,i,o){if(!(!i||!t)){var s=Object.keys(t).filter(function(r){return t[r]&&typeof e[r]!="function"}),y=Object.keys(me).filter(function(r){return!t[r]&&typeof e[r]=="function"});o?s.forEach(function(r){i.off(me[r],o,t[r]),delete t[r]}):s.forEach(function(r){i.off(me[r],t[r]),delete t[r]}),y.forEach(function(r){var S=me[r],h=e[r];if(S&&typeof h=="function"){var l=function(Z){h(Z)};o?i.on(S,o,l):i.on(S,l),t[r]=l}})}},ye=function(t,e,i){!e||!t||(i?Object.keys(t).forEach(function(o){e.off(me[o],i,t[o]),delete t[o]}):Object.keys(t).forEach(function(o){e.off(me[o],t[o]),delete t[o]}))},Mr=d(58596),We=d(52676),dt=10,mt=[113.94,22.52],vt=0,yt=0,gt=85,pt=0,ht=22,Pt=0,Lt="flyTo",Ct="mapbox://styles/mapbox/streets-v11",St=function(t){var e=t.accessToken,i=t.apiUrl,o=t.antialias,s=o===void 0?!1:o,y=t.attributionControl,r=y===void 0?!1:y,S=t.bearingSnap,h=S===void 0?7:S,l=t.boxZoom,P=l===void 0?!0:l,Z=t.clickTolerance,z=Z===void 0?3:Z,R=t.collectResourceTiming,N=R===void 0?!1:R,F=t.config,E=t.cooperativeGestures,D=E===void 0?!1:E,a=t.crossSourceCollisions,L=a===void 0?!0:a,I=t.customAttribution,M=t.doubleClickZoom,$=M===void 0?!0:M,c=t.dragPan,C=c===void 0?!0:c,g=t.dragRotate,O=g===void 0?!0:g,A=t.fadeDuration,u=A===void 0?300:A,b=t.failIfMajorPerformanceCaveat,Q=b===void 0?!1:b,W=t.hash,j=W===void 0?!1:W,_=t.interactive,m=_===void 0?!0:_,x=t.keyboard,B=x===void 0?!0:x,U=t.language,p=t.locale,J=t.localFontFamily,ee=t.localIdeographFontFamily,X=ee===void 0?"sans-serif":ee,w=t.logoPosition,ce=w===void 0?"bottom-right":w,ge=t.maxTileCacheSize,Se=t.minTileCacheSize,le=t.performanceMetricsCollection,f=le===void 0?!0:le,T=t.pitchWithRotate,he=T===void 0?!0:T,Pe=t.preserveDrawingBuffer,V=Pe===void 0?!1:Pe,H=t.projection,te=H===void 0?{name:"mercator"}:H,ue=t.refreshExpiredTiles,_e=ue===void 0?!0:ue,we=t.renderWorldCopies,ar=we===void 0?!0:we,Ke=t.respectPrefersReducedMotion,cr=Ke===void 0?!0:Ke,He=t.scrollZoom,sr=He===void 0?!0:He,Ge=t.spriteFormat,lr=Ge===void 0?"auto":Ge,Ye=t.touchPitch,ur=Ye===void 0?!0:Ye,Xe=t.touchZoomRotate,fr=Xe===void 0?!0:Xe,Ve=t.trackResize,dr=Ve===void 0?!0:Ve,mr=t.transformRequest;return function(G){var Qe=G.center,Le=Qe===void 0?mt:Qe,qe=G.zoom,be=qe===void 0?dt:qe,et=G.bearing,xe=et===void 0?yt:et,tt=G.pitch,Oe=tt===void 0?vt:tt,Me=G.bounds,Je=G.fitBoundsOptions,$e=G.maxBounds,rt=G.maxPitch,Ee=rt===void 0?gt:rt,ot=G.minPitch,Re=ot===void 0?pt:ot,nt=G.maxZoom,Ze=nt===void 0?ht:nt,it=G.minZoom,ze=it===void 0?Pt:it,at=G.style,fe=at===void 0?Ct:at,vr=G.className,ct=G.moveMethod,yr=ct===void 0?Lt:ct,gr=G.cameraOptions,st=G.animationOptions,pr=st===void 0?{}:st,hr=G.children,lt=G.onMapLoad,Pr=(0,n.useState)(null),ut=ie()(Pr,2),k=ut[0],Lr=ut[1],ft=(0,n.useRef)(null),je=(0,n.useRef)({});return(0,n.useEffect)(function(){re().accessToken=e,i&&(re().config.API_URL=i);var Ne={container:ft.current,center:Le,zoom:be,pitch:Oe,bearing:xe,bounds:Me,style:fe,fitBoundsOptions:Je,maxBounds:$e,maxPitch:Ee,minPitch:Re,maxZoom:Ze,minZoom:ze,antialias:s,attributionControl:r,bearingSnap:h,boxZoom:P,clickTolerance:z,collectResourceTiming:N,config:F,cooperativeGestures:D,crossSourceCollisions:L,customAttribution:I,doubleClickZoom:$,dragPan:C,dragRotate:O,fadeDuration:u,failIfMajorPerformanceCaveat:Q,hash:j,interactive:m,keyboard:B,language:U,locale:p,localFontFamily:J,localIdeographFontFamily:X,logoPosition:ce,maxTileCacheSize:ge,minTileCacheSize:Se,performanceMetricsCollection:f,pitchWithRotate:he,preserveDrawingBuffer:V,projection:te,refreshExpiredTiles:_e,renderWorldCopies:ar,respectPrefersReducedMotion:cr,scrollZoom:sr,spriteFormat:lr,touchPitch:ur,touchZoomRotate:fr,trackResize:dr,transformRequest:mr},Ce=new(re()).Map(Ne);return Ce.on("load",function(){lt&&lt(Ce),Lr(Ce)}),function(){k&&k.remove(),ye(je.current,k),je.current=null}},[]),(0,n.useEffect)(function(){if(k){var Ne=k.getCenter(),Ce=k.getZoom(),Cr=k.getBearing(),Sr=k.getPitch(),_r=Ne.lng!==Le[0]||Ne.lat!==Le[1],br=Ce!==be,xr=Cr!==xe,Or=Sr!==Oe;(_r||br||xr||Or)&&k[yr](ne()(ne()(ne()({},gr),pr),{},{center:Le,zoom:be,bearing:xe,pitch:Oe})),Me&&k.fitBounds(Me,Je),$e&&k.setMaxBounds($e),Ee!==k.getMaxPitch()&&k.setMaxPitch(Ee),Re!==k.getMinPitch()&&k.setMinPitch(Re),Ze!==k.getMaxZoom()&&k.setMaxZoom(Ze),ze!==k.getMinZoom()&&k.setMinZoom(ze)}},[JSON.stringify(Le),be,Oe,xe,JSON.stringify(Me),JSON.stringify($e),JSON.stringify(Je),Ee,Re,Ze,ze]),(0,n.useEffect)(function(){if(k){if(typeof fe=="string"){k.setStyle(fe);return}oe()(fe)==="object"&&!(0,v.Z)(fe,k.getStyle())&&k.setStyle(fe)}},[fe]),k&&ve(je.current,G,k),(0,We.jsx)(Y.Provider,{value:k,children:(0,We.jsx)("div",{className:Fe()("map-container",vr),ref:ft,children:k&&hr})})}},_t=St,bt=d(67825),xt=d.n(bt),Ot=["controlClass","position"],Mt=function(t){var e=t.controlClass,i=t.position,o=i===void 0?"bottom-right":i,s=xt()(t,Ot),y=(0,n.useContext)(Y),r=(0,n.useRef)(null);return(0,n.useEffect)(function(){if(y)return r.current&&y.removeControl(r.current),r.current=new e(s),y.addControl(r.current,o),function(){r.current&&y.removeControl(r.current),r.current=null}},[y,o]),null},$t=Mt,Et=function(t){var e=t.position,i=e===void 0?"top-right":e,o=t.container,s=(0,n.useContext)(Y),y=(0,n.useRef)(null);return(0,n.useEffect)(function(){if(s)return y.current&&s.removeControl(y.current),y.current=new(re()).FullscreenControl({container:o}),s.addControl(y.current,i),function(){y.current&&s.removeControl(y.current),y.current=null}},[s,i,o]),null},Rt=Et,Zt=d(25298),zt=d.n(Zt),Nt=d(17069),It=d.n(Nt),Tt=d(82092),Ae=d.n(Tt),Ft=function(){function K(t){var e=t.decimals;zt()(this,K),Ae()(this,"_map",null),Ae()(this,"_container",null),Ae()(this,"_decimals",void 0),this._decimals=e}return It()(K,[{key:"_updatePosition",value:function(e){if(this._container){var i=e.lngLat.lng.toFixed(this._decimals),o=e.lngLat.lat.toFixed(this._decimals);this._container.innerText="".concat(i," , ").concat(o)}}},{key:"onAdd",value:function(e){this._map=e;var i=e.getCenter().lng.toFixed(this._decimals),o=e.getCenter().lat.toFixed(this._decimals);return this._container=document.createElement("div"),this._container.classList.add("mapboxgl-ctrl"),this._container.classList.add("mapboxgl-ctrl-group"),this._container.classList.add("mapboxgl-ctrl-mouse-position"),this._container.innerText="".concat(i," , ").concat(o),this._map.on("mousemove",this._updatePosition.bind(this)),this._container}},{key:"onRemove",value:function(){this._map&&this._map.off("mousemove",this._updatePosition),this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._map=null,this._container=null}}]),K}(),Dt=Ft,At=function(t){var e=t.position,i=e===void 0?"bottom":e,o=t.decimals,s=o===void 0?6:o,y=(0,n.useContext)(Y),r=(0,n.useRef)(null);return(0,n.useEffect)(function(){if(y)return r.current&&y.removeControl(r.current),r.current=new Dt({decimals:s}),y.addControl(r.current,i),function(){r.current&&y.removeControl(r.current),r.current=null}},[y,i,s]),null},Jt=At,jt=function(t){var e=t.showCompass,i=e===void 0?!0:e,o=t.showZoom,s=o===void 0?!0:o,y=t.visualizePitch,r=y===void 0?!0:y,S=t.position,h=S===void 0?"top-left":S,l=(0,n.useContext)(Y),P=(0,n.useRef)(null);return(0,n.useEffect)(function(){if(l)return P.current&&l.removeControl(P.current),P.current=new(re()).NavigationControl({showCompass:i,showZoom:s,visualizePitch:r}),l.addControl(P.current,h),function(){P.current&&l.removeControl(P.current),P.current=null}},[l,h,i,s,r]),null},kt=jt,Ut=function(t,e){var i=t.position,o=i===void 0?"bottom-left":i,s=t.maxWidth,y=s===void 0?100:s,r=t.unit,S=r===void 0?"metric":r,h=(0,n.useContext)(Y),l=(0,n.useRef)(null),P=(0,n.useState)(!1),Z=ie()(P,2),z=Z[0],R=Z[1];return(0,n.useEffect)(function(){if(h)return l.current&&h.removeControl(l.current),l.current=new(re()).ScaleControl({maxWidth:y,unit:S}),h.addControl(l.current,o),R(!0),function(){l.current&&h.removeControl(l.current),l.current=null}},[h,o,y,S]),(0,n.useImperativeHandle)(e,function(){return z?l.current:null},[z]),null},Wt=(0,n.forwardRef)(Ut),Bt=function(t){var e=t.id,i=t.filter,o=t.maxzoom,s=o===void 0?24:o,y=t.minzoom,r=y===void 0?0:y,S=t.slot,h=t.color,l=h===void 0?"#000000":h,P=t.emissiveStrength,Z=P===void 0?0:P,z=t.opacity,R=z===void 0?1:z,N=t.imgUrl,F=t.visibility,E=F===void 0?"visible":F,D=t.beforeId,a=(0,n.useContext)(Y),L=(0,n.useRef)(null),I=function($){return new Promise(function(c){a.loadImage($,function(C,g){if(C)throw C;a.hasImage(e)&&a.removeImage(e),g&&a.addImage(e,g),c(e)})})};return(0,n.useEffect)(function(){if(a){var M={id:e,type:"background"},$={},c={};return i&&(M.filter=i),S&&(M.slot=S),M.maxzoom=s,M.minzoom=r,$["background-color"]=l,$["background-emissive-strength"]=Z,$["background-opacity"]=R,c.visibility=E,M.paint=$,M.layout=c,N?I(N).then(function(C){M.paint["background-pattern"]=C,a.getLayer(e)&&a.removeLayer(e),a.addLayer(M,D)}):(a.getLayer(e)&&a.removeLayer(e),a.addLayer(M)),function(){a!=null&&a.getLayer(e)&&a.removeLayer(e),L.current=null}}},[a,e]),(0,n.useEffect)(function(){if(a){if(!L.current){L.current=t;return}(0,v.Z)(i,L.current.filter)||a.setFilter(e,i),(s!==L.current.maxzoom||r!==L.current.minzoom)&&a.setLayerZoomRange(e,r,s),S!==L.current.slot&&a.setSlot(e,S),l!==L.current.color&&a.setPaintProperty(e,"background-color",l),Z!==L.current.emissiveStrength&&a.setPaintProperty(e,"background-emissive-strength",Z),R!==L.current.opacity&&a.setPaintProperty(e,"background-opacity",R),E!==L.current.visibility&&a.setLayoutProperty(e,"visibility",E),D!==L.current.beforeId&&a.moveLayer(e,D),N&&N!==L.current.imgUrl&&I(N),L.current=t}},[JSON.stringify(i),s,r,S,l,Z,R,E,D,N]),null},wt=Bt,Kt=function(t){var e=t.id,i=t.source,o=t.sourceLayer,s=t.filter,y=t.maxzoom,r=y===void 0?24:y,S=t.minzoom,h=S===void 0?0:S,l=t.slot,P=t.beforeId,Z=t.visibility,z=Z===void 0?"visible":Z,R=t.blur,N=R===void 0?0:R,F=t.color,E=F===void 0?"#000000":F,D=t.emissiveStrength,a=D===void 0?0:D,L=t.opacity,I=L===void 0?1:L,M=t.pitchAlignment,$=M===void 0?"viewport":M,c=t.pitchScale,C=c===void 0?"map":c,g=t.radius,O=g===void 0?5:g,A=t.sortKey,u=t.strokeColor,b=u===void 0?"#000000":u,Q=t.strokeOpacity,W=Q===void 0?1:Q,j=t.strokeWidth,_=j===void 0?0:j,m=t.translate,x=m===void 0?[0,0]:m,B=t.translateAnchor,U=B===void 0?"map":B,p=(0,n.useContext)(Y),J=(0,n.useRef)(null),ee=(0,n.useRef)({});return(0,n.useEffect)(function(){if(p){var X={id:e,type:"circle",source:e},w={},ce={};return o&&(X["source-layer"]=o),s&&(X.filter=s),l&&(X.slot=l),A&&(ce["circle-sort-key"]=A),X.maxzoom=r,X.minzoom=h,w["circle-blur"]=N,w["circle-color"]=E,w["circle-emissive-strength"]=a,w["circle-opacity"]=I,w["circle-pitch-alignment"]=$,w["circle-pitch-scale"]=C,w["circle-radius"]=O,w["circle-stroke-color"]=b,w["circle-stroke-opacity"]=W,w["circle-stroke-width"]=_,w["circle-translate"]=x,w["circle-translate-anchor"]=U,ce.visibility=z,X.paint=w,X.layout=ce,p.getLayer(e)&&p.removeLayer(e),p.getSource(e)&&p.removeSource(e),p.addSource(e,i),p.addLayer(X,P),function(){p.getLayer(e)&&p.removeLayer(e),p.getSource(e)&&p.removeSource(e),ye(ee.current,p,e),ee.current=null,J.current=null}}},[p,e]),(0,n.useEffect)(function(){if(p){var X=p.getLayer(e);if(X){if(!J.current){J.current=t;return}(0,v.Z)(i,J.current.source)||(p.removeLayer(e),p.removeSource(e),p.addSource(e,i),p.addLayer(X)),o!==J.current.sourceLayer&&(X["source-layer"]=o,p.removeLayer(e),p.addLayer(X)),(0,v.Z)(s,J.current.filter)||p.setFilter(e,s),(r!==J.current.maxzoom||h!==J.current.minzoom)&&p.setLayerZoomRange(e,h,r),l!==J.current.slot&&p.setSlot(e,l),z!==J.current.visibility&&p.setLayoutProperty(e,"visibility",z),(0,v.Z)(N,J.current.blur)||p.setPaintProperty(e,"circle-blur",N),(0,v.Z)(E,J.current.color)||p.setPaintProperty(e,"circle-color",E),a!==J.current.emissiveStrength&&p.setPaintProperty(e,"circle-emissive-strength",a),(0,v.Z)(I,J.current.opacity)||p.setPaintProperty(e,"circle-opacity",I),$!==J.current.pitchAlignment&&p.setPaintProperty(e,"circle-pitch-alignment",$),C!==J.current.pitchScale&&p.setPaintProperty(e,"circle-pitch-scale",C),(0,v.Z)(O,J.current.radius)||p.setPaintProperty(e,"circle-radius",O),A!==J.current.sortKey&&p.setLayoutProperty(e,"circle-sort-key",A),(0,v.Z)(b,J.current.strokeColor)||p.setPaintProperty(e,"circle-stroke-color",b),(0,v.Z)(W,J.current.strokeOpacity)||p.setPaintProperty(e,"circle-stroke-opacity",W),(0,v.Z)(_,J.current.strokeWidth)||p.setPaintProperty(e,"circle-stroke-width",_),(0,v.Z)(x,J.current.translate)||p.setPaintProperty(e,"circle-translate",x),U!==J.current.translateAnchor&&p.setPaintProperty(e,"circle-translate-anchor",U),P!==J.current.beforeId&&p.moveLayer(e,P),J.current=t}}},[i,o,JSON.stringify(s),r,h,l,z,JSON.stringify(N),JSON.stringify(E),JSON.stringify(a),JSON.stringify(I),$,C,JSON.stringify(O),A,JSON.stringify(b),JSON.stringify(W),JSON.stringify(_),JSON.stringify(x),U,P]),p&&ve(ee.current,t,p,e),null},Ht=Kt,Gt=function(t){var e=t.id,i=t.source,o=t.sourceLayer,s=t.filter,y=t.maxzoom,r=y===void 0?24:y,S=t.minzoom,h=S===void 0?0:S,l=t.slot,P=t.beforeId,Z=t.visibility,z=Z===void 0?"visible":Z,R=t.antialias,N=R===void 0?!0:R,F=t.color,E=F===void 0?"#000000":F,D=t.emissiveStrength,a=D===void 0?0:D,L=t.opacity,I=L===void 0?1:L,M=t.outlineColor,$=t.imgUrl,c=t.sortKey,C=t.translate,g=C===void 0?[0,0]:C,O=t.translateAnchor,A=O===void 0?"map":O,u=(0,n.useContext)(Y),b=(0,n.useRef)(null),Q=(0,n.useRef)({}),W=function(_){return new Promise(function(m){u.loadImage(_,function(x,B){if(x)throw x;u.hasImage(e)&&u.removeImage(e),B&&u.addImage(e,B),m(e)})})};return(0,n.useEffect)(function(){if(u){var j={id:e,type:"fill",source:e},_={},m={};return o&&(j["source-layer"]=o),s&&(j.filter=s),l&&(j.slot=l),c&&(m["fill-sort-key"]=c),M&&(_["fill-outline-color"]=M),j.maxzoom=r,j.minzoom=h,_["fill-antialias"]=N,_["fill-color"]=E,_["fill-emissive-strength"]=a,_["fill-opacity"]=I,_["fill-translate"]=g,_["fill-translate-anchor"]=A,m.visibility=z,j.paint=_,j.layout=m,$?W($).then(function(x){j.paint["fill-pattern"]=x,u.getLayer(e)&&u.removeLayer(e),u.getSource(e)&&u.removeSource(e),u.addSource(e,i),u.addLayer(j,P)}):(u.getLayer(e)&&u.removeLayer(e),u.getSource(e)&&u.removeSource(e),u.addSource(e,i),u.addLayer(j,P)),function(){u.getLayer(e)&&u.removeLayer(e),u.getSource(e)&&u.removeSource(e),ye(Q.current,u,e),Q.current=null,b.current=null}}},[u,e]),(0,n.useEffect)(function(){if(u){var j=u.getLayer(e);if(j){if(!b.current){b.current=t;return}(0,v.Z)(i,b.current.source)||(u.removeLayer(e),u.removeSource(e),u.addSource(e,i),u.addLayer(j)),o!==b.current.sourceLayer&&(j["source-layer"]=o,u.removeLayer(e),u.addLayer(j)),(0,v.Z)(s,b.current.filter)||u.setFilter(e,s),(r!==b.current.maxzoom||h!==b.current.minzoom)&&u.setLayerZoomRange(e,h,r),l!==b.current.slot&&u.setSlot(e,l),N!==b.current.antialias&&u.setPaintProperty(e,"fill-antialias",N),(0,v.Z)(E,b.current.color)||u.setPaintProperty(e,"fill-color",E),a!==b.current.emissiveStrength&&u.setPaintProperty(e,"fill-emissive-strength",a),(0,v.Z)(I,b.current.opacity)||u.setPaintProperty(e,"fill-opacity",I),(0,v.Z)(M,b.current.outlineColor)||u.setPaintProperty(e,"fill-outline-color",M),c!==b.current.sortKey&&u.setLayoutProperty(e,"fill-sort-key",c),(0,v.Z)(g,b.current.translate)||u.setPaintProperty(e,"fill-translate",g),A!==b.current.translateAnchor&&u.setPaintProperty(e,"fill-translate-anchor",A),z!==b.current.visibility&&u.setLayoutProperty(e,"visibility",z),P!==b.current.beforeId&&u.moveLayer(e,P),$&&$!==b.current.imgUrl&&W($),b.current=t}}},[i,o,JSON.stringify(s),r,h,l,z,P,N,JSON.stringify(E),JSON.stringify(a),JSON.stringify(I),JSON.stringify(M),c,JSON.stringify(g),A,$]),u&&ve(Q.current,t,u,e),null},Yt=Gt,Xt=function(t){var e=t.id,i=t.source,o=t.sourceLayer,s=t.filter,y=t.maxzoom,r=y===void 0?24:y,S=t.minzoom,h=S===void 0?0:S,l=t.slot,P=t.beforeId,Z=t.visibility,z=Z===void 0?"visible":Z,R=t.color,N=R===void 0?["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"]:R,F=t.intensity,E=F===void 0?1:F,D=t.opacity,a=D===void 0?1:D,L=t.radius,I=L===void 0?30:L,M=t.weight,$=M===void 0?1:M,c=(0,n.useContext)(Y),C=(0,n.useRef)(null);return(0,n.useEffect)(function(){if(c){var g={id:e,type:"heatmap",source:e},O={},A={};return o&&(g["source-layer"]=o),s&&(g.filter=s),l&&(g.slot=l),g.maxzoom=r,g.minzoom=h,O["heatmap-color"]=N,O["heatmap-intensity"]=E,O["heatmap-opacity"]=a,O["heatmap-radius"]=I,O["heatmap-weight"]=$,g.paint=O,g.layout=A,c.getLayer(e)&&c.removeLayer(e),c.getSource(e)&&c.removeSource(e),c.addSource(e,i),c.addLayer(g,P),function(){c!=null&&c.getLayer(e)&&c.removeLayer(e),c!=null&&c.getSource(e)&&c.removeSource(e),C.current=null}}},[c,e]),(0,n.useEffect)(function(){if(c){var g=c.getLayer(e);if(g){if(!C.current){C.current=t;return}(0,v.Z)(i,C.current.source)||(c.removeLayer(e),c.removeSource(e),c.addSource(e,i),c.addLayer(g)),o!==C.current.sourceLayer&&(g["source-layer"]=o,c.removeLayer(e),c.addLayer(g)),(0,v.Z)(s,C.current.filter)||c.setFilter(e,s),(r!==C.current.maxzoom||h!==C.current.minzoom)&&c.setLayerZoomRange(e,h,r),l!==C.current.slot&&c.setSlot(e,l),z!==C.current.visibility&&c.setLayoutProperty(e,"visibility",z),P!==C.current.beforeId&&c.moveLayer(e,P),(0,v.Z)(N,C.current.color)||c.setPaintProperty(e,"heatmap-color",N),(0,v.Z)(E,C.current.intensity)||c.setPaintProperty(e,"heatmap-intensity",E),(0,v.Z)(a,C.current.opacity)||c.setPaintProperty(e,"heatmap-opacity",a),(0,v.Z)(I,C.current.radius)||c.setPaintProperty(e,"heatmap-radius",I),(0,v.Z)($,C.current.weight)||c.setPaintProperty(e,"heatmap-weight",$),C.current=t}}},[i,o,JSON.stringify(s),r,h,l,z,P,JSON.stringify(N),JSON.stringify(E),JSON.stringify(a),JSON.stringify(I),JSON.stringify($)]),null},Vt=Xt,Qt=function(t){var e=t.id,i=t.source,o=t.sourceLayer,s=t.filter,y=t.maxzoom,r=y===void 0?24:y,S=t.minzoom,h=S===void 0?0:S,l=t.slot,P=t.beforeId,Z=t.visibility,z=Z===void 0?"visible":Z,R=t.imgUrl,N=t.blur,F=N===void 0?0:N,E=t.cap,D=E===void 0?"butt":E,a=t.color,L=a===void 0?"#000000":a,I=t.dasharray,M=t.emissiveStrength,$=M===void 0?0:M,c=t.gapWidth,C=c===void 0?0:c,g=t.gradient,O=t.join,A=O===void 0?"miter":O,u=t.miterLimit,b=u===void 0?2:u,Q=t.occlusionOpacity,W=Q===void 0?0:Q,j=t.offset,_=j===void 0?0:j,m=t.opacity,x=m===void 0?1:m,B=t.roundLimit,U=B===void 0?1.05:B,p=t.sortKey,J=t.translate,ee=J===void 0?[0,0]:J,X=t.translateAnchor,w=X===void 0?"map":X,ce=t.trimOffset,ge=ce===void 0?[0,0]:ce,Se=t.width,le=Se===void 0?1:Se,f=(0,n.useContext)(Y),T=(0,n.useRef)(null),he=(0,n.useRef)({}),Pe=function(H){return new Promise(function(te){f.loadImage(H,function(ue,_e){if(ue)throw ue;f.hasImage(e)&&f.removeImage(e),_e&&f.addImage(e,_e),te(e)})})};return(0,n.useEffect)(function(){if(f){var V={id:e,type:"line",source:e},H={},te={};return o&&(V["source-layer"]=o),s&&(V.filter=s),l&&(V.slot=l),I&&(H["line-dasharray"]=I),g&&(H["line-gradient"]=g),p&&(te["line-sort-key"]=p),V.maxzoom=r,V.minzoom=h,H["line-blur"]=F,H["line-color"]=L,H["line-emissive-strength"]=0,H["line-gap-width"]=C,H["line-occlusion-opacity"]=W,H["line-offset"]=_,H["line-opacity"]=x,H["line-translate"]=ee,H["line-translate-anchor"]=w,H["line-trim-offset"]=ge,H["line-width"]=le,te["line-round-limit"]=U,te["line-miter-limit"]=b,te["line-join"]=A,te["line-cap"]=D,te.visibility=z,V.paint=H,V.layout=te,R?Pe(R).then(function(ue){V.paint["line-pattern"]=ue,f.getLayer(e)&&f.removeLayer(e),f.getSource(e)&&f.removeSource(e),f.addSource(e,i),f.addLayer(V,P)}):(f.getLayer(e)&&f.removeLayer(e),f.getSource(e)&&f.removeSource(e),f.addSource(e,i),f.addLayer(V,P)),function(){f.getLayer(e)&&f.removeLayer(e),f.getSource(e)&&f.removeSource(e),ye(he.current,f,e),he.current=null,T.current=null}}},[f,e]),(0,n.useEffect)(function(){if(f){var V=f.getLayer(e);if(V){if(!T.current){T.current=t;return}(0,v.Z)(i,T.current.source)||(f.removeLayer(e),f.removeSource(e),f.addSource(e,i),f.addLayer(V)),o!==T.current.sourceLayer&&(V["source-layer"]=o,f.removeLayer(e),f.addLayer(V)),(0,v.Z)(s,T.current.filter)||f.setFilter(e,s),(r!==T.current.maxzoom||h!==T.current.minzoom)&&f.setLayerZoomRange(e,h,r),l!==T.current.slot&&f.setSlot(e,l),(0,v.Z)(F,T.current.blur)||f.setPaintProperty(e,"line-blur",F),D!==T.current.cap&&f.setLayoutProperty(e,"line-cap",D),(0,v.Z)(L,T.current.color)||f.setPaintProperty(e,"line-color",L),(0,v.Z)(I,T.current.dasharray)||f.setPaintProperty(e,"line-dasharray",I),$!==T.current.emissiveStrength&&f.setPaintProperty(e,"line-emissive-strength",$),(0,v.Z)(C,T.current.gapWidth)||f.setPaintProperty(e,"line-gap-width",C),(0,v.Z)(g,T.current.gradient)||f.setPaintProperty(e,"line-gradient",g),A!==T.current.join&&f.setLayoutProperty(e,"line-join",A),(0,v.Z)(b,T.current.miterLimit)||f.setLayoutProperty(e,"line-miter-limit",b),(0,v.Z)(W,T.current.occlusionOpacity)||f.setPaintProperty(e,"line-occlusion-opacity",W),(0,v.Z)(_,T.current.offset)||f.setPaintProperty(e,"line-offset",_),(0,v.Z)(x,T.current.opacity)||f.setPaintProperty(e,"line-opacity",x),(0,v.Z)(U,T.current.roundLimit)||f.setLayoutProperty(e,"line-round-limit",U),p!==T.current.sortKey&&f.setLayoutProperty(e,"line-sort-key",p),(0,v.Z)(ee,T.current.translate)||f.setPaintProperty(e,"line-translate",ee),w!==T.current.translateAnchor&&f.setPaintProperty(e,"line-translate-anchor",w),(0,v.Z)(ge,T.current.trimOffset)||f.setPaintProperty(e,"line-trim-offset",ge),(0,v.Z)(le,T.current.width)||f.setPaintProperty(e,"line-width",le),z!==T.current.visibility&&f.setLayoutProperty(e,"visibility",z),P!==T.current.beforeId&&f.moveLayer(e,P),R&&R!==T.current.imgUrl&&Pe(R),T.current=t}}},[i,o,JSON.stringify(s),r,h,l,z,P,JSON.stringify(F),D,JSON.stringify(L),JSON.stringify(I),JSON.stringify($),C,JSON.stringify(g),A,JSON.stringify(b),JSON.stringify(W),JSON.stringify(_),JSON.stringify(x),JSON.stringify(U),p,JSON.stringify(ee),w,JSON.stringify(ge),JSON.stringify(le),R]),f&&ve(he.current,t,f,e),null},qt=Qt,er=function(t){var e=t.id,i=t.source,o=t.maxzoom,s=o===void 0?24:o,y=t.minzoom,r=y===void 0?0:y,S=t.slot,h=t.filter,l=t.beforeId,P=t.visibility,Z=P===void 0?"visible":P,z=t.brightnessMax,R=z===void 0?1:z,N=t.brightnessMin,F=N===void 0?0:N,E=t.color,D=t.colorMix,a=D===void 0?[.2126,.7152,.0722,0]:D,L=t.colorRange,I=t.contrast,M=I===void 0?0:I,$=t.emissiveStrength,c=$===void 0?0:$,C=t.fadeDuration,g=C===void 0?300:C,O=t.hueRotate,A=O===void 0?0:O,u=t.opacity,b=u===void 0?1:u,Q=t.resampling,W=Q===void 0?"linear":Q,j=t.saturation,_=j===void 0?0:j,m=(0,n.useContext)(Y),x=(0,n.useRef)(null);return(0,n.useEffect)(function(){if(m){var B={id:e,type:"raster",source:e},U={},p={};return h&&(B.filter=h),S&&(B.slot=S),B.maxzoom=s,B.minzoom=r,E&&(U["raster-color"]=E),L&&(U["raster-color-range"]=L),U["raster-brightness-max"]=R,U["raster-brightness-min"]=F,U["raster-color-mix"]=a,U["raster-contrast"]=M,U["raster-emissive-strength"]=c,U["raster-fade-duration"]=g,U["raster-hue-rotate"]=A,U["raster-opacity"]=b,U["raster-resampling"]=W,U["raster-saturation"]=_,p.visibility=Z,B.paint=U,B.layout=p,m.getLayer(e)&&m.removeLayer(e),m.getSource(e)&&m.removeSource(e),m.addSource(e,i),m.addLayer(B,l),function(){m!=null&&m.getLayer(e)&&m.removeLayer(e),m!=null&&m.getSource(e)&&m.removeSource(e),x.current=null}}},[m,e]),(0,n.useEffect)(function(){if(m){var B=m.getLayer(e);if(B){if(!x.current){x.current=t;return}(0,v.Z)(i,x.current.source)||(m.removeLayer(e),m.removeSource(e),m.addSource(e,i),m.addLayer(B,l)),(0,v.Z)(h,x.current.filter)||m.setFilter(e,h),(s!==x.current.maxzoom||r!==x.current.minzoom)&&m.setLayerZoomRange(e,r,s),S!==x.current.slot&&m.setSlot(e,S),Z!==x.current.visibility&&m.setLayoutProperty(e,"visibility",Z),W!==x.current.resampling&&m.setPaintProperty(e,"raster-resampling",W),(0,v.Z)(R,x.current.brightnessMax)||m.setPaintProperty(e,"raster-brightness-max",R),(0,v.Z)(F,x.current.brightnessMin)||m.setPaintProperty(e,"raster-brightness-min",F),(0,v.Z)(E,x.current.color)||m.setPaintProperty(e,"raster-color",E),(0,v.Z)(a,x.current.colorMix)||m.setPaintProperty(e,"raster-color-mix",a),(0,v.Z)(L,x.current.colorRange)||m.setPaintProperty(e,"raster-color-range",L),(0,v.Z)(M,x.current.contrast)||m.setPaintProperty(e,"raster-contrast",M),(0,v.Z)(c,x.current.emissiveStrength)||m.setPaintProperty(e,"raster-emissive-strength",c),(0,v.Z)(g,x.current.fadeDuration)||m.setPaintProperty(e,"raster-fade-duration",g),(0,v.Z)(A,x.current.hueRotate)||m.setPaintProperty(e,"raster-hue-rotate",A),(0,v.Z)(b,x.current.opacity)||m.setPaintProperty(e,"raster-opacity",b),(0,v.Z)(_,x.current.saturation)||m.setPaintProperty(e,"raster-saturation",_),l!==x.current.beforeId&&m.moveLayer(e,l),x.current=t}}},[i,s,r,S,JSON.stringify(h),l,Z,W,JSON.stringify(R),JSON.stringify(F),JSON.stringify(E),JSON.stringify(a),JSON.stringify(L),JSON.stringify(M),JSON.stringify(c),JSON.stringify(g),JSON.stringify(A),JSON.stringify(b),JSON.stringify(_)]),null},tr=er,Be=d(30967),rr=function(t,e){var i=t.lngLat,o=i===void 0?[180,90]:i,s=t.anchor,y=s===void 0?"center":s,r=t.className,S=t.clickTolerance,h=S===void 0?0:S,l=t.color,P=l===void 0?"#3FB1CE":l,Z=t.draggable,z=Z===void 0?!1:Z,R=t.occludedOpacity,N=R===void 0?.2:R,F=t.offset,E=t.pitchAlignment,D=E===void 0?"auto":E,a=t.rotation,L=a===void 0?0:a,I=t.rotationAlignment,M=I===void 0?"auto":I,$=t.scale,c=$===void 0?1:$,C=t.children,g=(0,n.useContext)(Y),O=(0,n.useRef)(null),A=(0,n.useRef)(null),u=(0,n.useRef)({}),b=(0,n.useState)(!1),Q=ie()(b,2),W=Q[0],j=Q[1];return(0,n.useEffect)(function(){if(g){O.current&&O.current.remove();var _={};if(y&&(_.anchor=y),r&&(_.className=r),F&&(_.offset=F),_.clickTolerance=h,_.color=P,_.draggable=z,_.occludedOpacity=N,_.pitchAlignment=D,_.rotation=L,_.rotationAlignment=M,_.scale=c,C){var m=document.createElement("div");m.classList.add("mapboxgl-marker-content__inner"),A.current=m,_.element=A.current}return O.current=new(re()).Marker(_),O.current.setLngLat(o),O.current.addTo(g),j(!0),function(){O.current&&O.current.remove(),ye(u.current,O.current),u.current=null,O.current=null,A.current=null}}},[g,y,r,h,P,z,N,D,L,M,c,JSON.stringify(F)]),(0,n.useEffect)(function(){g&&O.current&&o&&O.current.setLngLat(o)},[JSON.stringify(o)]),(0,n.useImperativeHandle)(e,function(){return W?O.current:null},[W]),O.current&&ve(u.current,t,O.current),A.current?(0,Be.createPortal)(C,A.current):null},or=(0,n.forwardRef)(rr),nr=function(t,e){var i=t.lngLat,o=t.anchor,s=t.className,y=t.closeButton,r=y===void 0?!0:y,S=t.closeOnClick,h=S===void 0?!1:S,l=t.closeOnMove,P=l===void 0?!1:l,Z=t.focusAfterOpen,z=Z===void 0?!0:Z,R=t.maxWidth,N=R===void 0?"240px":R,F=t.offset,E=t.children,D=(0,n.useContext)(Y),a=(0,n.useRef)(null),L=(0,n.useRef)(null),I=(0,n.useRef)({}),M=(0,n.useState)(!1),$=ie()(M,2),c=$[0],C=$[1];return(0,n.useEffect)(function(){if(D){a.current&&a.current.remove();var g={};if(o&&(g.anchor=o),s&&(g.className=s),F&&(g.offset=F),g.closeButton=r,g.closeOnClick=h,g.closeOnMove=P,g.focusAfterOpen=z,g.maxWidth=N,a.current=new(re()).Popup(g),i&&a.current.setLngLat(i),E){var O=document.createElement("div");O.classList.add("mapboxgl-popup-content__inner"),L.current=O,a.current.setDOMContent(L.current)}return a.current.addTo(D),C(!0),function(){a.current&&a.current.remove(),ye(I.current,a.current),I.current=null,a.current=null,L.current=null}}},[D,o,s,r,h,P,z,N,JSON.stringify(F)]),(0,n.useEffect)(function(){D&&a.current&&i&&a.current.setLngLat(i)},[JSON.stringify(i)]),(0,n.useImperativeHandle)(e,function(){return c?a.current:null},[c]),a.current&&ve(I.current,t,a.current),L.current?(0,Be.createPortal)(E,L.current):null},ir=(0,n.forwardRef)(nr)},76966:function(pe,q,d){d.r(q),d.d(q,{texts:function(){return oe}});var se=d(87737);const oe=[{value:"This is a guide example",paraId:0}]},33667:function(pe,q,d){d.r(q),d.d(q,{texts:function(){return oe}});var se=d(31275);const oe=[]},83776:function(pe,q){q.Z=`import {
  MapMouseEvent,
  type GeoJSONSourceSpecification,
  type Map,
} from 'mapbox-gl';
import { useRef, useState } from 'react';
import {
  CircleLayer,
  FillLayer,
  FullscreenControl,
  LineLayer,
  MapFactory,
  Marker,
  MousePositionControl,
  NavigationControl,
  Popup,
  ScaleControl,
} from 'react-mapboxgl-zt';
const MapInstance = MapFactory({
  accessToken:
    'pk.eyJ1IjoiMnBpYyIsImEiOiJjbTczaXFxbGwwMGNtMm9zYjhjcW1hd3ZkIn0.YCpsYVQawB15Cf5Zyljscg',
});

// Control implemented as ES6 class
class HelloWorldControl {
  _map: Map | undefined;
  _container: HTMLDivElement | undefined;

  onAdd(map: Map) {
    this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    this._container.textContent = 'Hello, world';
    return this._container;
  }

  onRemove() {
    this._container!.parentNode!.removeChild(this._container!);
    this._map = undefined;
  }
}
export default function BaseMap() {
  const [imgUrl, setImgUrl] = useState('/imgs/background1.jpg');
  const [icon, setIcon] = useState('/imgs/icon.png');
  const [color, setColor] = useState('#f00');

  const [source, setSource] = useState<GeoJSONSourceSpecification>({
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [113.90310757834482, 22.541427196370165],
            type: 'Point',
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [113.91668147739654, 22.52511855694496],
            type: 'Point',
          },
        },
      ],
    },
  });

  const [title, setTitle] = useState('title');

  const scaleControlRef = useRef<mapboxgl.ScaleControl>(null);
  const popupRef = useRef<mapboxgl.Popup | null>(null);
  const markerRef = useRef<mapboxgl.Marker | null>(null);
  const onClick = () => {
    // setColor(color === '#f00' ? '#0f0' : '#f00');

    scaleControlRef.current?.setUnit('nautical');

    setTitle(title === 'title' ? 'title2' : 'title');
    console.log(markerRef.current);

    popupRef.current?.setLngLat([113.90310757834482, 22.541427196370165]);
  };

  const onCircleClick = (e: MapMouseEvent) => {
    popupRef.current?.setLngLat(e.lngLat);
    popupRef.current?.setText(e.lngLat.toString());
  };
  const onMapLoad = (map: Map) => {
    console.log(map);
    // map.on('click', (e) => {
    //   console.log(e);
    // });
  };
  return (
    <div
      style={{
        height: '20rem',
      }}
    >
      <div style={{ height: '80%', border: '1px solid black' }}>
        <MapInstance onMapLoad={onMapLoad}>
          <button
            type="button"
            onClick={onClick}
            style={{
              position: 'absolute',
              zIndex: 1000,
            }}
          >
            \u6539\u53D8\u989C\u8272
          </button>
          <Popup
            ref={popupRef}
            lngLat={[113.90310757834482, 22.541427196370165]}
            onOpen={(e) => console.log(e)}
            onClose={(e) => console.log(e.target.getLngLat())}
          >
            {123213}
            <div
              style={{
                backgroundColor: '#f40',
              }}
            >
              {title}
            </div>
            <div>content</div>
          </Popup>
          <Marker
            ref={markerRef}
            // lngLat={[113.90310757834482, 22.541427196370165]}
            draggable={true}
            onDragEnd={(e) => console.log(e.target.getLngLat())}
          ></Marker>
          {/* <CustomControl
            controlClass={HelloWorldControl}
          ></CustomControl> */}
          <MousePositionControl></MousePositionControl>
          <FullscreenControl></FullscreenControl>
          <ScaleControl ref={scaleControlRef}></ScaleControl>
          <NavigationControl></NavigationControl>
          <CircleLayer
            id="circle"
            color={color}
            opacity={0.5}
            source={{
              type: 'vector',
              url: 'mapbox://mapbox.mapbox-streets-v6',
            }}
            sourceLayer="water"
            onClick={onCircleClick}
          ></CircleLayer>
          <FillLayer
            id="fill"
            color={color}
            source={{
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                      coordinates: [
                        [
                          [113.91050389786739, 22.53917900246715],
                          [113.90865023135945, 22.534556311568096],
                          [113.91828929730542, 22.531131996380907],
                          [113.92343322222297, 22.539179002551137],
                          [113.91050389786739, 22.53917900246715],
                        ],
                      ],
                      type: 'Polygon',
                    },
                  },
                ],
              },
            }}
            imgUrl={imgUrl}
          />
          <LineLayer
            id="line"
            color={color}
            source={{
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    properties: { a: 1 },
                    geometry: {
                      coordinates: [
                        [113.9086931063199, 22.532889051350935],
                        [113.90725732733108, 22.530536146907636],
                        [113.90813732090567, 22.52642916311092],
                        [113.91818777387965, 22.530792829342246],
                        [113.9174930421097, 22.535498589395118],
                      ],
                      type: 'LineString',
                    },
                  },
                ],
              },
              lineMetrics: true,
            }}
            gradient={undefined}
            width={10}
            onClick={(e: MapMouseEvent) => console.log(e.features)}
          ></LineLayer>

          {/* <RasterLayer
          id="tile"
          source={{
            type: 'raster',
            tiles: [
              'https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015',
            ],
            tileSize: 256,
          }}
        ></RasterLayer> */}

          {/* <HeatmapLayer
          id="heatmap"
          source={{
            type: 'vector',
            url: 'mapbox://mapbox.mapbox-streets-v6',
          }}
          sourceLayer="water"
        /> */}
        </MapInstance>
      </div>
    </div>
  );
}
`}}]);
