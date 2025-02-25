"use strict";(self.webpackChunkreact_mapboxgl_zt=self.webpackChunkreact_mapboxgl_zt||[]).push([[904],{31614:function(pe,q,m){var le;m.r(q),m.d(q,{demos:function(){return n}});var oe=m(90228),me=m.n(oe),ne=m(87999),Ie=m.n(ne),ie=m(75271),We=m(87737),re=m(91314),n={"docs-guide-demo-base":{component:ie.memo(ie.lazy(function(){return m.e(433).then(m.bind(m,74362))})),asset:{type:"BLOCK",id:"docs-guide-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:m(83776).Z},react:{type:"NPM",value:"18.3.1"},"react-mapboxgl-zt":{type:"NPM",value:"0.0.9"}},entry:"index.tsx"},context:{react:le||(le=m.t(ie,2)),"react-mapboxgl-zt":re},renderOpts:{compile:function(){var Te=Ie()(me()().mark(function v(){var Y,De=arguments;return me()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ae.next=2,m.e(928).then(m.bind(m,56928));case 2:return ae.abrupt("return",(Y=ae.sent).default.apply(Y,De));case 3:case"end":return ae.stop()}},v)}));function Fe(){return Te.apply(this,arguments)}return Fe}()}}}},25079:function(pe,q,m){m.r(q),m.d(q,{demos:function(){return me}});var le=m(75271),oe=m(31275),me={}},91314:function(pe,q,m){m.r(q),m.d(q,{BackgroundLayer:function(){return wt},CircleLayer:function(){return Ht},CustomControl:function(){return $t},FillLayer:function(){return Yt},FullscreenControl:function(){return zt},HeatmapLayer:function(){return Vt},LineLayer:function(){return qt},MapContext:function(){return Y},MapFactory:function(){return _t},Marker:function(){return or},MousePositionControl:function(){return At},NavigationControl:function(){return Wt},Popup:function(){return ir},RasterLayer:function(){return tr},ScaleControl:function(){return Ut}});var le=m(31759),oe=m.n(le),me=m(26068),ne=m.n(me),Ie=m(48305),ie=m.n(Ie),We=m(95959),re=m.n(We),n=m(75271),Te=m(82187),Fe=m.n(Te),v=m(69370),Y=(0,n.createContext)(null),De={onResize:"resize",onIdle:"idle",onRemove:"remove",onMouseDown:"mousedown",onMouseUp:"mouseup",onMouseOver:"mouseover",onMouseMove:"mousemove",onMouseEnter:"mouseenter",onMouseLeave:"mouseleave",onMouseOut:"mouseout",onPreClick:"preclick",onClick:"click",onDblClick:"dblclick",onContextMenu:"contextmenu",onWheel:"wheel",onTouchStart:"touchstart",onTouchEnd:"touchend",onTouchMove:"touchmove",onTouchCancel:"touchcancel",onMoveStart:"movestart",onMove:"move",onMoveEnd:"moveend",onDragStart:"dragstart",onDrag:"drag",onDragEnd:"dragend",onZoomStart:"zoomstart",onZoom:"zoom",onZoomEnd:"zoomend",onRotateStart:"rotatestart",onRotate:"rotate",onRotateEnd:"rotateend",onPitchStart:"pitchstart",onPitch:"pitch",onPitchEnd:"pitchend",onBoxZoomStart:"boxzoomstart",onBoxZoomEnd:"boxzoomend",onBoxZoomCancel:"boxzoomcancel",onRenderStart:"renderstart",onRender:"render",onError:"error",onWebglContextLost:"webglcontextlost",onWebglContextRestored:"webglcontextrestored",onData:"data",onStyleData:"styledata",onSourceData:"sourcedata",onDataLoading:"dataloading",onStyleDataLoading:"styledataloading",onSourceDataLoading:"sourcedataloading",onStyleImageMissing:"styleimagemissing",onStyleLoad:"style.load",onStyleImportLoad:"style.import.load"},Be={onMouseDown:"mousedown",onMouseUp:"mouseup",onMouseOver:"mouseover",onMouseMove:"mousemove",onMouseEnter:"mouseenter",onMouseLeave:"mouseleave",onMouseOut:"mouseout",onClick:"click",onTouchStart:"touchstart",onTouchEnd:"touchend",onTouchCancel:"touchcancel"},ae={onOpen:"open",onClose:"close",onDragStart:"dragstart",onDrag:"drag",onDragEnd:"dragend"},de=ne()(ne()(ne()({},De),Be),ae),ve=function(t,e,i,o){if(!(!i||!t)){var l=Object.keys(t).filter(function(r){return t[r]&&typeof e[r]!="function"}),y=Object.keys(de).filter(function(r){return!t[r]&&typeof e[r]=="function"});o?l.forEach(function(r){i.off(de[r],o,t[r]),delete t[r]}):l.forEach(function(r){i.off(de[r],t[r]),delete t[r]}),y.forEach(function(r){var S=de[r],h=e[r];if(S&&typeof h=="function"){var s=function(R){h(R)};o?i.on(S,o,s):i.on(S,s),t[r]=s}})}},ye=function(t,e,i){!e||!t||(i?Object.keys(t).forEach(function(o){e.off(de[o],i,t[o]),delete t[o]}):Object.keys(t).forEach(function(o){e.off(de[o],t[o]),delete t[o]}))},Mr=m(58596),Ue=m(52676),mt=10,dt=[113.94,22.52],vt=0,yt=0,gt=85,pt=0,ht=22,Pt=0,Lt="flyTo",Ct="mapbox://styles/mapbox/streets-v11",St=function(t){var e=t.accessToken,i=t.apiUrl,o=t.antialias,l=o===void 0?!1:o,y=t.attributionControl,r=y===void 0?!1:y,S=t.bearingSnap,h=S===void 0?7:S,s=t.boxZoom,P=s===void 0?!0:s,R=t.clickTolerance,Z=R===void 0?3:R,z=t.collectResourceTiming,N=z===void 0?!1:z,F=t.config,E=t.cooperativeGestures,D=E===void 0?!1:E,a=t.crossSourceCollisions,L=a===void 0?!0:a,I=t.customAttribution,M=t.doubleClickZoom,$=M===void 0?!0:M,c=t.dragPan,C=c===void 0?!0:c,g=t.dragRotate,O=g===void 0?!0:g,k=t.fadeDuration,u=k===void 0?300:k,b=t.failIfMajorPerformanceCaveat,Q=b===void 0?!1:b,U=t.hash,J=U===void 0?!1:U,_=t.interactive,d=_===void 0?!0:_,x=t.keyboard,j=x===void 0?!0:x,B=t.language,p=t.locale,A=t.localFontFamily,ee=t.localIdeographFontFamily,X=ee===void 0?"sans-serif":ee,w=t.logoPosition,ce=w===void 0?"bottom-right":w,ge=t.maxTileCacheSize,Se=t.minTileCacheSize,se=t.performanceMetricsCollection,f=se===void 0?!0:se,T=t.pitchWithRotate,he=T===void 0?!0:T,Pe=t.preserveDrawingBuffer,V=Pe===void 0?!1:Pe,H=t.projection,te=H===void 0?{name:"mercator"}:H,ue=t.refreshExpiredTiles,_e=ue===void 0?!0:ue,we=t.renderWorldCopies,ar=we===void 0?!0:we,Ke=t.respectPrefersReducedMotion,cr=Ke===void 0?!0:Ke,He=t.scrollZoom,lr=He===void 0?!0:He,Ge=t.spriteFormat,sr=Ge===void 0?"auto":Ge,Ye=t.touchPitch,ur=Ye===void 0?!0:Ye,Xe=t.touchZoomRotate,fr=Xe===void 0?!0:Xe,Ve=t.trackResize,mr=Ve===void 0?!0:Ve,dr=t.transformRequest;return function(G){var Qe=G.center,Le=Qe===void 0?dt:Qe,qe=G.zoom,be=qe===void 0?mt:qe,et=G.bearing,xe=et===void 0?yt:et,tt=G.pitch,Oe=tt===void 0?vt:tt,Me=G.bounds,Ae=G.fitBoundsOptions,$e=G.maxBounds,rt=G.maxPitch,Ee=rt===void 0?gt:rt,ot=G.minPitch,ze=ot===void 0?pt:ot,nt=G.maxZoom,Re=nt===void 0?ht:nt,it=G.minZoom,Ze=it===void 0?Pt:it,at=G.style,fe=at===void 0?Ct:at,vr=G.className,ct=G.moveMethod,yr=ct===void 0?Lt:ct,gr=G.cameraOptions,lt=G.animationOptions,pr=lt===void 0?{}:lt,hr=G.children,st=G.onMapLoad,Pr=(0,n.useState)(null),ut=ie()(Pr,2),W=ut[0],Lr=ut[1],ft=(0,n.useRef)(null),Je=(0,n.useRef)({});return(0,n.useEffect)(function(){re().accessToken=e,i&&(re().config.API_URL=i);var Ne={container:ft.current,center:Le,zoom:be,pitch:Oe,bearing:xe,bounds:Me,style:fe,fitBoundsOptions:Ae,maxBounds:$e,maxPitch:Ee,minPitch:ze,maxZoom:Re,minZoom:Ze,antialias:l,attributionControl:r,bearingSnap:h,boxZoom:P,clickTolerance:Z,collectResourceTiming:N,config:F,cooperativeGestures:D,crossSourceCollisions:L,customAttribution:I,doubleClickZoom:$,dragPan:C,dragRotate:O,fadeDuration:u,failIfMajorPerformanceCaveat:Q,hash:J,interactive:d,keyboard:j,language:B,locale:p,localFontFamily:A,localIdeographFontFamily:X,logoPosition:ce,maxTileCacheSize:ge,minTileCacheSize:Se,performanceMetricsCollection:f,pitchWithRotate:he,preserveDrawingBuffer:V,projection:te,refreshExpiredTiles:_e,renderWorldCopies:ar,respectPrefersReducedMotion:cr,scrollZoom:lr,spriteFormat:sr,touchPitch:ur,touchZoomRotate:fr,trackResize:mr,transformRequest:dr},Ce=new(re()).Map(Ne);return Ce.on("load",function(){st&&st(Ce),Lr(Ce)}),function(){W&&W.remove(),ye(Je.current,W),Je.current=null}},[]),(0,n.useEffect)(function(){if(W){var Ne=W.getCenter(),Ce=W.getZoom(),Cr=W.getBearing(),Sr=W.getPitch(),_r=Ne.lng!==Le[0]||Ne.lat!==Le[1],br=Ce!==be,xr=Cr!==xe,Or=Sr!==Oe;(_r||br||xr||Or)&&W[yr](ne()(ne()(ne()({},gr),pr),{},{center:Le,zoom:be,bearing:xe,pitch:Oe})),Me&&W.fitBounds(Me,Ae),$e&&W.setMaxBounds($e),Ee!==W.getMaxPitch()&&W.setMaxPitch(Ee),ze!==W.getMinPitch()&&W.setMinPitch(ze),Re!==W.getMaxZoom()&&W.setMaxZoom(Re),Ze!==W.getMinZoom()&&W.setMinZoom(Ze)}},[JSON.stringify(Le),be,Oe,xe,JSON.stringify(Me),JSON.stringify($e),JSON.stringify(Ae),Ee,ze,Re,Ze]),(0,n.useEffect)(function(){if(W){if(typeof fe=="string"){W.setStyle(fe);return}oe()(fe)==="object"&&!(0,v.Z)(fe,W.getStyle())&&W.setStyle(fe)}},[fe]),W&&ve(Je.current,G,W),(0,Ue.jsx)(Y.Provider,{value:W,children:(0,Ue.jsx)("div",{className:Fe()("map-container",vr),ref:ft,children:W&&hr})})}},_t=St,bt=m(67825),xt=m.n(bt),Ot=["controlClass","position"],Mt=function(t){var e=t.controlClass,i=t.position,o=i===void 0?"bottom-right":i,l=xt()(t,Ot),y=(0,n.useContext)(Y),r=(0,n.useRef)(null);return(0,n.useEffect)(function(){if(y)return r.current&&y.removeControl(r.current),r.current=new e(l),y.addControl(r.current,o),function(){r.current&&y.removeControl(r.current),r.current=null}},[y,o]),null},$t=Mt,Et=function(t){var e=t.position,i=e===void 0?"top-right":e,o=t.container,l=(0,n.useContext)(Y),y=(0,n.useRef)(null);return(0,n.useEffect)(function(){if(l)return y.current&&l.removeControl(y.current),y.current=new(re()).FullscreenControl({container:o}),l.addControl(y.current,i),function(){y.current&&l.removeControl(y.current),y.current=null}},[l,i,o]),null},zt=Et,Rt=m(25298),Zt=m.n(Rt),Nt=m(17069),It=m.n(Nt),Tt=m(82092),ke=m.n(Tt),Ft=function(){function K(t){var e=t.decimals;Zt()(this,K),ke()(this,"_map",null),ke()(this,"_container",null),ke()(this,"_decimals",void 0),this._decimals=e}return It()(K,[{key:"_updatePosition",value:function(e){if(this._container){var i=e.lngLat.lng.toFixed(this._decimals),o=e.lngLat.lat.toFixed(this._decimals);this._container.innerText="".concat(i," , ").concat(o)}}},{key:"onAdd",value:function(e){this._map=e;var i=e.getCenter().lng.toFixed(this._decimals),o=e.getCenter().lat.toFixed(this._decimals);return this._container=document.createElement("div"),this._container.classList.add("mapboxgl-ctrl"),this._container.classList.add("mapboxgl-ctrl-group"),this._container.classList.add("mapboxgl-ctrl-mouse-position"),this._container.innerText="".concat(i," , ").concat(o),this._map.on("mousemove",this._updatePosition.bind(this)),this._container}},{key:"onRemove",value:function(){this._map&&this._map.off("mousemove",this._updatePosition),this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._map=null,this._container=null}}]),K}(),Dt=Ft,kt=function(t){var e=t.position,i=e===void 0?"bottom":e,o=t.decimals,l=o===void 0?6:o,y=(0,n.useContext)(Y),r=(0,n.useRef)(null);return(0,n.useEffect)(function(){if(y)return r.current&&y.removeControl(r.current),r.current=new Dt({decimals:l}),y.addControl(r.current,i),function(){r.current&&y.removeControl(r.current),r.current=null}},[y,i,l]),null},At=kt,Jt=function(t){var e=t.showCompass,i=e===void 0?!0:e,o=t.showZoom,l=o===void 0?!0:o,y=t.visualizePitch,r=y===void 0?!0:y,S=t.position,h=S===void 0?"top-left":S,s=(0,n.useContext)(Y),P=(0,n.useRef)(null);return(0,n.useEffect)(function(){if(s)return P.current&&s.removeControl(P.current),P.current=new(re()).NavigationControl({showCompass:i,showZoom:l,visualizePitch:r}),s.addControl(P.current,h),function(){P.current&&s.removeControl(P.current),P.current=null}},[s,h,i,l,r]),null},Wt=Jt,Bt=function(t,e){var i=t.position,o=i===void 0?"bottom-left":i,l=t.maxWidth,y=l===void 0?100:l,r=t.unit,S=r===void 0?"metric":r,h=(0,n.useContext)(Y),s=(0,n.useRef)(null),P=(0,n.useState)(!1),R=ie()(P,2),Z=R[0],z=R[1];return(0,n.useEffect)(function(){if(h)return s.current&&h.removeControl(s.current),s.current=new(re()).ScaleControl({maxWidth:y,unit:S}),h.addControl(s.current,o),z(!0),function(){s.current&&h.removeControl(s.current),s.current=null}},[h,o,y,S]),(0,n.useImperativeHandle)(e,function(){return Z?s.current:null},[Z]),null},Ut=(0,n.forwardRef)(Bt),jt=function(t){var e=t.id,i=t.filter,o=t.maxzoom,l=o===void 0?24:o,y=t.minzoom,r=y===void 0?0:y,S=t.slot,h=t.color,s=h===void 0?"#000000":h,P=t.emissiveStrength,R=P===void 0?0:P,Z=t.opacity,z=Z===void 0?1:Z,N=t.imgUrl,F=t.visibility,E=F===void 0?"visible":F,D=t.beforeId,a=(0,n.useContext)(Y),L=(0,n.useRef)(null),I=function($){return new Promise(function(c){a.loadImage($,function(C,g){if(C)throw C;a.hasImage(e)&&a.removeImage(e),g&&a.addImage(e,g),c(e)})})};return(0,n.useEffect)(function(){if(a){var M={id:e,type:"background"},$={},c={};return i&&(M.filter=i),S&&(M.slot=S),M.maxzoom=l,M.minzoom=r,$["background-color"]=s,$["background-emissive-strength"]=R,$["background-opacity"]=z,c.visibility=E,M.paint=$,M.layout=c,N?I(N).then(function(C){M.paint["background-pattern"]=C,a.getLayer(e)&&a.removeLayer(e),a.addLayer(M,D)}):(a.getLayer(e)&&a.removeLayer(e),a.addLayer(M)),function(){a!=null&&a.getLayer(e)&&a.removeLayer(e),L.current=null}}},[a,e]),(0,n.useEffect)(function(){if(a){if(!L.current){L.current=t;return}(0,v.Z)(i,L.current.filter)||a.setFilter(e,i),(l!==L.current.maxzoom||r!==L.current.minzoom)&&a.setLayerZoomRange(e,r,l),S!==L.current.slot&&a.setSlot(e,S),s!==L.current.color&&a.setPaintProperty(e,"background-color",s),R!==L.current.emissiveStrength&&a.setPaintProperty(e,"background-emissive-strength",R),z!==L.current.opacity&&a.setPaintProperty(e,"background-opacity",z),E!==L.current.visibility&&a.setLayoutProperty(e,"visibility",E),D!==L.current.beforeId&&a.moveLayer(e,D),N&&N!==L.current.imgUrl&&I(N),L.current=t}},[JSON.stringify(i),l,r,S,s,R,z,E,D,N]),null},wt=jt,Kt=function(t){var e=t.id,i=t.source,o=t.sourceLayer,l=t.filter,y=t.maxzoom,r=y===void 0?24:y,S=t.minzoom,h=S===void 0?0:S,s=t.slot,P=t.beforeId,R=t.visibility,Z=R===void 0?"visible":R,z=t.blur,N=z===void 0?0:z,F=t.color,E=F===void 0?"#000000":F,D=t.emissiveStrength,a=D===void 0?0:D,L=t.opacity,I=L===void 0?1:L,M=t.pitchAlignment,$=M===void 0?"viewport":M,c=t.pitchScale,C=c===void 0?"map":c,g=t.radius,O=g===void 0?5:g,k=t.sortKey,u=t.strokeColor,b=u===void 0?"#000000":u,Q=t.strokeOpacity,U=Q===void 0?1:Q,J=t.strokeWidth,_=J===void 0?0:J,d=t.translate,x=d===void 0?[0,0]:d,j=t.translateAnchor,B=j===void 0?"map":j,p=(0,n.useContext)(Y),A=(0,n.useRef)(null),ee=(0,n.useRef)({});return(0,n.useEffect)(function(){if(p){var X={id:e,type:"circle",source:e},w={},ce={};return o&&(X["source-layer"]=o),l&&(X.filter=l),s&&(X.slot=s),k&&(ce["circle-sort-key"]=k),X.maxzoom=r,X.minzoom=h,w["circle-blur"]=N,w["circle-color"]=E,w["circle-emissive-strength"]=a,w["circle-opacity"]=I,w["circle-pitch-alignment"]=$,w["circle-pitch-scale"]=C,w["circle-radius"]=O,w["circle-stroke-color"]=b,w["circle-stroke-opacity"]=U,w["circle-stroke-width"]=_,w["circle-translate"]=x,w["circle-translate-anchor"]=B,ce.visibility=Z,X.paint=w,X.layout=ce,p.getLayer(e)&&p.removeLayer(e),p.getSource(e)&&p.removeSource(e),p.addSource(e,i),p.addLayer(X,P),function(){p.getLayer(e)&&p.removeLayer(e),p.getSource(e)&&p.removeSource(e),ye(ee.current,p,e),ee.current=null,A.current=null}}},[p,e]),(0,n.useEffect)(function(){if(p){var X=p.getLayer(e);if(X){if(!A.current){A.current=t;return}(0,v.Z)(i,A.current.source)||(p.removeLayer(e),p.removeSource(e),p.addSource(e,i),p.addLayer(X)),o!==A.current.sourceLayer&&(X["source-layer"]=o,p.removeLayer(e),p.addLayer(X)),(0,v.Z)(l,A.current.filter)||p.setFilter(e,l),(r!==A.current.maxzoom||h!==A.current.minzoom)&&p.setLayerZoomRange(e,h,r),s!==A.current.slot&&p.setSlot(e,s),Z!==A.current.visibility&&p.setLayoutProperty(e,"visibility",Z),(0,v.Z)(N,A.current.blur)||p.setPaintProperty(e,"circle-blur",N),(0,v.Z)(E,A.current.color)||p.setPaintProperty(e,"circle-color",E),a!==A.current.emissiveStrength&&p.setPaintProperty(e,"circle-emissive-strength",a),(0,v.Z)(I,A.current.opacity)||p.setPaintProperty(e,"circle-opacity",I),$!==A.current.pitchAlignment&&p.setPaintProperty(e,"circle-pitch-alignment",$),C!==A.current.pitchScale&&p.setPaintProperty(e,"circle-pitch-scale",C),(0,v.Z)(O,A.current.radius)||p.setPaintProperty(e,"circle-radius",O),k!==A.current.sortKey&&p.setLayoutProperty(e,"circle-sort-key",k),(0,v.Z)(b,A.current.strokeColor)||p.setPaintProperty(e,"circle-stroke-color",b),(0,v.Z)(U,A.current.strokeOpacity)||p.setPaintProperty(e,"circle-stroke-opacity",U),(0,v.Z)(_,A.current.strokeWidth)||p.setPaintProperty(e,"circle-stroke-width",_),(0,v.Z)(x,A.current.translate)||p.setPaintProperty(e,"circle-translate",x),B!==A.current.translateAnchor&&p.setPaintProperty(e,"circle-translate-anchor",B),P!==A.current.beforeId&&p.moveLayer(e,P),A.current=t}}},[i,o,JSON.stringify(l),r,h,s,Z,JSON.stringify(N),JSON.stringify(E),JSON.stringify(a),JSON.stringify(I),$,C,JSON.stringify(O),k,JSON.stringify(b),JSON.stringify(U),JSON.stringify(_),JSON.stringify(x),B,P]),p&&ve(ee.current,t,p,e),null},Ht=Kt,Gt=function(t){var e=t.id,i=t.source,o=t.sourceLayer,l=t.filter,y=t.maxzoom,r=y===void 0?24:y,S=t.minzoom,h=S===void 0?0:S,s=t.slot,P=t.beforeId,R=t.visibility,Z=R===void 0?"visible":R,z=t.antialias,N=z===void 0?!0:z,F=t.color,E=F===void 0?"#000000":F,D=t.emissiveStrength,a=D===void 0?0:D,L=t.opacity,I=L===void 0?1:L,M=t.outlineColor,$=t.imgUrl,c=t.sortKey,C=t.translate,g=C===void 0?[0,0]:C,O=t.translateAnchor,k=O===void 0?"map":O,u=(0,n.useContext)(Y),b=(0,n.useRef)(null),Q=(0,n.useRef)({}),U=function(_){return new Promise(function(d){u.loadImage(_,function(x,j){if(x)throw x;u.hasImage(e)&&u.removeImage(e),j&&u.addImage(e,j),d(e)})})};return(0,n.useEffect)(function(){if(u){var J={id:e,type:"fill",source:e},_={},d={};return o&&(J["source-layer"]=o),l&&(J.filter=l),s&&(J.slot=s),c&&(d["fill-sort-key"]=c),M&&(_["fill-outline-color"]=M),J.maxzoom=r,J.minzoom=h,_["fill-antialias"]=N,_["fill-color"]=E,_["fill-emissive-strength"]=a,_["fill-opacity"]=I,_["fill-translate"]=g,_["fill-translate-anchor"]=k,d.visibility=Z,J.paint=_,J.layout=d,$?U($).then(function(x){J.paint["fill-pattern"]=x,u.getLayer(e)&&u.removeLayer(e),u.getSource(e)&&u.removeSource(e),u.addSource(e,i),u.addLayer(J,P)}):(u.getLayer(e)&&u.removeLayer(e),u.getSource(e)&&u.removeSource(e),u.addSource(e,i),u.addLayer(J,P)),function(){u.getLayer(e)&&u.removeLayer(e),u.getSource(e)&&u.removeSource(e),ye(Q.current,u,e),Q.current=null,b.current=null}}},[u,e]),(0,n.useEffect)(function(){if(u){var J=u.getLayer(e);if(J){if(!b.current){b.current=t;return}(0,v.Z)(i,b.current.source)||(u.removeLayer(e),u.removeSource(e),u.addSource(e,i),u.addLayer(J)),o!==b.current.sourceLayer&&(J["source-layer"]=o,u.removeLayer(e),u.addLayer(J)),(0,v.Z)(l,b.current.filter)||u.setFilter(e,l),(r!==b.current.maxzoom||h!==b.current.minzoom)&&u.setLayerZoomRange(e,h,r),s!==b.current.slot&&u.setSlot(e,s),N!==b.current.antialias&&u.setPaintProperty(e,"fill-antialias",N),(0,v.Z)(E,b.current.color)||u.setPaintProperty(e,"fill-color",E),a!==b.current.emissiveStrength&&u.setPaintProperty(e,"fill-emissive-strength",a),(0,v.Z)(I,b.current.opacity)||u.setPaintProperty(e,"fill-opacity",I),(0,v.Z)(M,b.current.outlineColor)||u.setPaintProperty(e,"fill-outline-color",M),c!==b.current.sortKey&&u.setLayoutProperty(e,"fill-sort-key",c),(0,v.Z)(g,b.current.translate)||u.setPaintProperty(e,"fill-translate",g),k!==b.current.translateAnchor&&u.setPaintProperty(e,"fill-translate-anchor",k),Z!==b.current.visibility&&u.setLayoutProperty(e,"visibility",Z),P!==b.current.beforeId&&u.moveLayer(e,P),$&&$!==b.current.imgUrl&&U($),b.current=t}}},[i,o,JSON.stringify(l),r,h,s,Z,P,N,JSON.stringify(E),JSON.stringify(a),JSON.stringify(I),JSON.stringify(M),c,JSON.stringify(g),k,$]),u&&ve(Q.current,t,u,e),null},Yt=Gt,Xt=function(t){var e=t.id,i=t.source,o=t.sourceLayer,l=t.filter,y=t.maxzoom,r=y===void 0?24:y,S=t.minzoom,h=S===void 0?0:S,s=t.slot,P=t.beforeId,R=t.visibility,Z=R===void 0?"visible":R,z=t.color,N=z===void 0?["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"]:z,F=t.intensity,E=F===void 0?1:F,D=t.opacity,a=D===void 0?1:D,L=t.radius,I=L===void 0?30:L,M=t.weight,$=M===void 0?1:M,c=(0,n.useContext)(Y),C=(0,n.useRef)(null);return(0,n.useEffect)(function(){if(c){var g={id:e,type:"heatmap",source:e},O={},k={};return o&&(g["source-layer"]=o),l&&(g.filter=l),s&&(g.slot=s),g.maxzoom=r,g.minzoom=h,O["heatmap-color"]=N,O["heatmap-intensity"]=E,O["heatmap-opacity"]=a,O["heatmap-radius"]=I,O["heatmap-weight"]=$,g.paint=O,g.layout=k,c.getLayer(e)&&c.removeLayer(e),c.getSource(e)&&c.removeSource(e),c.addSource(e,i),c.addLayer(g,P),function(){c!=null&&c.getLayer(e)&&c.removeLayer(e),c!=null&&c.getSource(e)&&c.removeSource(e),C.current=null}}},[c,e]),(0,n.useEffect)(function(){if(c){var g=c.getLayer(e);if(g){if(!C.current){C.current=t;return}(0,v.Z)(i,C.current.source)||(c.removeLayer(e),c.removeSource(e),c.addSource(e,i),c.addLayer(g)),o!==C.current.sourceLayer&&(g["source-layer"]=o,c.removeLayer(e),c.addLayer(g)),(0,v.Z)(l,C.current.filter)||c.setFilter(e,l),(r!==C.current.maxzoom||h!==C.current.minzoom)&&c.setLayerZoomRange(e,h,r),s!==C.current.slot&&c.setSlot(e,s),Z!==C.current.visibility&&c.setLayoutProperty(e,"visibility",Z),P!==C.current.beforeId&&c.moveLayer(e,P),(0,v.Z)(N,C.current.color)||c.setPaintProperty(e,"heatmap-color",N),(0,v.Z)(E,C.current.intensity)||c.setPaintProperty(e,"heatmap-intensity",E),(0,v.Z)(a,C.current.opacity)||c.setPaintProperty(e,"heatmap-opacity",a),(0,v.Z)(I,C.current.radius)||c.setPaintProperty(e,"heatmap-radius",I),(0,v.Z)($,C.current.weight)||c.setPaintProperty(e,"heatmap-weight",$),C.current=t}}},[i,o,JSON.stringify(l),r,h,s,Z,P,JSON.stringify(N),JSON.stringify(E),JSON.stringify(a),JSON.stringify(I),JSON.stringify($)]),null},Vt=Xt,Qt=function(t){var e=t.id,i=t.source,o=t.sourceLayer,l=t.filter,y=t.maxzoom,r=y===void 0?24:y,S=t.minzoom,h=S===void 0?0:S,s=t.slot,P=t.beforeId,R=t.visibility,Z=R===void 0?"visible":R,z=t.imgUrl,N=t.blur,F=N===void 0?0:N,E=t.cap,D=E===void 0?"butt":E,a=t.color,L=a===void 0?"#000000":a,I=t.dasharray,M=t.emissiveStrength,$=M===void 0?0:M,c=t.gapWidth,C=c===void 0?0:c,g=t.gradient,O=t.join,k=O===void 0?"miter":O,u=t.miterLimit,b=u===void 0?2:u,Q=t.occlusionOpacity,U=Q===void 0?0:Q,J=t.offset,_=J===void 0?0:J,d=t.opacity,x=d===void 0?1:d,j=t.roundLimit,B=j===void 0?1.05:j,p=t.sortKey,A=t.translate,ee=A===void 0?[0,0]:A,X=t.translateAnchor,w=X===void 0?"map":X,ce=t.trimOffset,ge=ce===void 0?[0,0]:ce,Se=t.width,se=Se===void 0?1:Se,f=(0,n.useContext)(Y),T=(0,n.useRef)(null),he=(0,n.useRef)({}),Pe=function(H){return new Promise(function(te){f.loadImage(H,function(ue,_e){if(ue)throw ue;f.hasImage(e)&&f.removeImage(e),_e&&f.addImage(e,_e),te(e)})})};return(0,n.useEffect)(function(){if(f){var V={id:e,type:"line",source:e},H={},te={};return o&&(V["source-layer"]=o),l&&(V.filter=l),s&&(V.slot=s),I&&(H["line-dasharray"]=I),g&&(H["line-gradient"]=g),p&&(te["line-sort-key"]=p),V.maxzoom=r,V.minzoom=h,H["line-blur"]=F,H["line-color"]=L,H["line-emissive-strength"]=0,H["line-gap-width"]=C,H["line-occlusion-opacity"]=U,H["line-offset"]=_,H["line-opacity"]=x,H["line-translate"]=ee,H["line-translate-anchor"]=w,H["line-trim-offset"]=ge,H["line-width"]=se,te["line-round-limit"]=B,te["line-miter-limit"]=b,te["line-join"]=k,te["line-cap"]=D,te.visibility=Z,V.paint=H,V.layout=te,z?Pe(z).then(function(ue){V.paint["line-pattern"]=ue,f.getLayer(e)&&f.removeLayer(e),f.getSource(e)&&f.removeSource(e),f.addSource(e,i),f.addLayer(V,P)}):(f.getLayer(e)&&f.removeLayer(e),f.getSource(e)&&f.removeSource(e),f.addSource(e,i),f.addLayer(V,P)),function(){f.getLayer(e)&&f.removeLayer(e),f.getSource(e)&&f.removeSource(e),ye(he.current,f,e),he.current=null,T.current=null}}},[f,e]),(0,n.useEffect)(function(){if(f){var V=f.getLayer(e);if(V){if(!T.current){T.current=t;return}(0,v.Z)(i,T.current.source)||(f.removeLayer(e),f.removeSource(e),f.addSource(e,i),f.addLayer(V)),o!==T.current.sourceLayer&&(V["source-layer"]=o,f.removeLayer(e),f.addLayer(V)),(0,v.Z)(l,T.current.filter)||f.setFilter(e,l),(r!==T.current.maxzoom||h!==T.current.minzoom)&&f.setLayerZoomRange(e,h,r),s!==T.current.slot&&f.setSlot(e,s),(0,v.Z)(F,T.current.blur)||f.setPaintProperty(e,"line-blur",F),D!==T.current.cap&&f.setLayoutProperty(e,"line-cap",D),(0,v.Z)(L,T.current.color)||f.setPaintProperty(e,"line-color",L),(0,v.Z)(I,T.current.dasharray)||f.setPaintProperty(e,"line-dasharray",I),$!==T.current.emissiveStrength&&f.setPaintProperty(e,"line-emissive-strength",$),(0,v.Z)(C,T.current.gapWidth)||f.setPaintProperty(e,"line-gap-width",C),(0,v.Z)(g,T.current.gradient)||f.setPaintProperty(e,"line-gradient",g),k!==T.current.join&&f.setLayoutProperty(e,"line-join",k),(0,v.Z)(b,T.current.miterLimit)||f.setLayoutProperty(e,"line-miter-limit",b),(0,v.Z)(U,T.current.occlusionOpacity)||f.setPaintProperty(e,"line-occlusion-opacity",U),(0,v.Z)(_,T.current.offset)||f.setPaintProperty(e,"line-offset",_),(0,v.Z)(x,T.current.opacity)||f.setPaintProperty(e,"line-opacity",x),(0,v.Z)(B,T.current.roundLimit)||f.setLayoutProperty(e,"line-round-limit",B),p!==T.current.sortKey&&f.setLayoutProperty(e,"line-sort-key",p),(0,v.Z)(ee,T.current.translate)||f.setPaintProperty(e,"line-translate",ee),w!==T.current.translateAnchor&&f.setPaintProperty(e,"line-translate-anchor",w),(0,v.Z)(ge,T.current.trimOffset)||f.setPaintProperty(e,"line-trim-offset",ge),(0,v.Z)(se,T.current.width)||f.setPaintProperty(e,"line-width",se),Z!==T.current.visibility&&f.setLayoutProperty(e,"visibility",Z),P!==T.current.beforeId&&f.moveLayer(e,P),z&&z!==T.current.imgUrl&&Pe(z),T.current=t}}},[i,o,JSON.stringify(l),r,h,s,Z,P,JSON.stringify(F),D,JSON.stringify(L),JSON.stringify(I),JSON.stringify($),C,JSON.stringify(g),k,JSON.stringify(b),JSON.stringify(U),JSON.stringify(_),JSON.stringify(x),JSON.stringify(B),p,JSON.stringify(ee),w,JSON.stringify(ge),JSON.stringify(se),z]),f&&ve(he.current,t,f,e),null},qt=Qt,er=function(t){var e=t.id,i=t.source,o=t.maxzoom,l=o===void 0?24:o,y=t.minzoom,r=y===void 0?0:y,S=t.slot,h=t.filter,s=t.beforeId,P=t.visibility,R=P===void 0?"visible":P,Z=t.brightnessMax,z=Z===void 0?1:Z,N=t.brightnessMin,F=N===void 0?0:N,E=t.color,D=t.colorMix,a=D===void 0?[.2126,.7152,.0722,0]:D,L=t.colorRange,I=t.contrast,M=I===void 0?0:I,$=t.emissiveStrength,c=$===void 0?0:$,C=t.fadeDuration,g=C===void 0?300:C,O=t.hueRotate,k=O===void 0?0:O,u=t.opacity,b=u===void 0?1:u,Q=t.resampling,U=Q===void 0?"linear":Q,J=t.saturation,_=J===void 0?0:J,d=(0,n.useContext)(Y),x=(0,n.useRef)(null);return(0,n.useEffect)(function(){if(d){var j={id:e,type:"raster",source:e},B={},p={};return h&&(j.filter=h),S&&(j.slot=S),j.maxzoom=l,j.minzoom=r,E&&(B["raster-color"]=E),L&&(B["raster-color-range"]=L),B["raster-brightness-max"]=z,B["raster-brightness-min"]=F,B["raster-color-mix"]=a,B["raster-contrast"]=M,B["raster-emissive-strength"]=c,B["raster-fade-duration"]=g,B["raster-hue-rotate"]=k,B["raster-opacity"]=b,B["raster-resampling"]=U,B["raster-saturation"]=_,p.visibility=R,j.paint=B,j.layout=p,d.getLayer(e)&&d.removeLayer(e),d.getSource(e)&&d.removeSource(e),d.addSource(e,i),d.addLayer(j,s),function(){d!=null&&d.getLayer(e)&&d.removeLayer(e),d!=null&&d.getSource(e)&&d.removeSource(e),x.current=null}}},[d,e]),(0,n.useEffect)(function(){if(d){var j=d.getLayer(e);if(j){if(!x.current){x.current=t;return}(0,v.Z)(i,x.current.source)||(d.removeLayer(e),d.removeSource(e),d.addSource(e,i),d.addLayer(j,s)),(0,v.Z)(h,x.current.filter)||d.setFilter(e,h),(l!==x.current.maxzoom||r!==x.current.minzoom)&&d.setLayerZoomRange(e,r,l),S!==x.current.slot&&d.setSlot(e,S),R!==x.current.visibility&&d.setLayoutProperty(e,"visibility",R),U!==x.current.resampling&&d.setPaintProperty(e,"raster-resampling",U),(0,v.Z)(z,x.current.brightnessMax)||d.setPaintProperty(e,"raster-brightness-max",z),(0,v.Z)(F,x.current.brightnessMin)||d.setPaintProperty(e,"raster-brightness-min",F),(0,v.Z)(E,x.current.color)||d.setPaintProperty(e,"raster-color",E),(0,v.Z)(a,x.current.colorMix)||d.setPaintProperty(e,"raster-color-mix",a),(0,v.Z)(L,x.current.colorRange)||d.setPaintProperty(e,"raster-color-range",L),(0,v.Z)(M,x.current.contrast)||d.setPaintProperty(e,"raster-contrast",M),(0,v.Z)(c,x.current.emissiveStrength)||d.setPaintProperty(e,"raster-emissive-strength",c),(0,v.Z)(g,x.current.fadeDuration)||d.setPaintProperty(e,"raster-fade-duration",g),(0,v.Z)(k,x.current.hueRotate)||d.setPaintProperty(e,"raster-hue-rotate",k),(0,v.Z)(b,x.current.opacity)||d.setPaintProperty(e,"raster-opacity",b),(0,v.Z)(_,x.current.saturation)||d.setPaintProperty(e,"raster-saturation",_),s!==x.current.beforeId&&d.moveLayer(e,s),x.current=t}}},[i,l,r,S,JSON.stringify(h),s,R,U,JSON.stringify(z),JSON.stringify(F),JSON.stringify(E),JSON.stringify(a),JSON.stringify(L),JSON.stringify(M),JSON.stringify(c),JSON.stringify(g),JSON.stringify(k),JSON.stringify(b),JSON.stringify(_)]),null},tr=er,je=m(30967),rr=function(t,e){var i=t.lngLat,o=i===void 0?[180,90]:i,l=t.anchor,y=l===void 0?"center":l,r=t.className,S=t.clickTolerance,h=S===void 0?0:S,s=t.color,P=s===void 0?"#3FB1CE":s,R=t.draggable,Z=R===void 0?!1:R,z=t.occludedOpacity,N=z===void 0?.2:z,F=t.offset,E=t.pitchAlignment,D=E===void 0?"auto":E,a=t.rotation,L=a===void 0?0:a,I=t.rotationAlignment,M=I===void 0?"auto":I,$=t.scale,c=$===void 0?1:$,C=t.children,g=(0,n.useContext)(Y),O=(0,n.useRef)(null),k=(0,n.useRef)(null),u=(0,n.useRef)({}),b=(0,n.useState)(!1),Q=ie()(b,2),U=Q[0],J=Q[1];return(0,n.useEffect)(function(){if(g){O.current&&O.current.remove();var _={};if(y&&(_.anchor=y),r&&(_.className=r),F&&(_.offset=F),_.clickTolerance=h,_.color=P,_.draggable=Z,_.occludedOpacity=N,_.pitchAlignment=D,_.rotation=L,_.rotationAlignment=M,_.scale=c,C){var d=document.createElement("div");d.classList.add("mapboxgl-marker-content__inner"),k.current=d,_.element=k.current}return O.current=new(re()).Marker(_),O.current.setLngLat(o),O.current.addTo(g),J(!0),function(){O.current&&O.current.remove(),ye(u.current,O.current),u.current=null,O.current=null,k.current=null}}},[g,y,r,h,P,Z,N,D,L,M,c,JSON.stringify(F)]),(0,n.useEffect)(function(){g&&O.current&&o&&O.current.setLngLat(o)},[JSON.stringify(o)]),(0,n.useImperativeHandle)(e,function(){return U?O.current:null},[U]),O.current&&ve(u.current,t,O.current),k.current?(0,je.createPortal)(C,k.current):null},or=(0,n.forwardRef)(rr),nr=function(t,e){var i=t.lngLat,o=t.anchor,l=t.className,y=t.closeButton,r=y===void 0?!0:y,S=t.closeOnClick,h=S===void 0?!1:S,s=t.closeOnMove,P=s===void 0?!1:s,R=t.focusAfterOpen,Z=R===void 0?!0:R,z=t.maxWidth,N=z===void 0?"240px":z,F=t.offset,E=t.children,D=(0,n.useContext)(Y),a=(0,n.useRef)(null),L=(0,n.useRef)(null),I=(0,n.useRef)({}),M=(0,n.useState)(!1),$=ie()(M,2),c=$[0],C=$[1];return(0,n.useEffect)(function(){if(D){a.current&&a.current.remove();var g={};if(o&&(g.anchor=o),l&&(g.className=l),F&&(g.offset=F),g.closeButton=r,g.closeOnClick=h,g.closeOnMove=P,g.focusAfterOpen=Z,g.maxWidth=N,a.current=new(re()).Popup(g),i&&a.current.setLngLat(i),E){var O=document.createElement("div");O.classList.add("mapboxgl-popup-content__inner"),L.current=O,a.current.setDOMContent(L.current)}return a.current.addTo(D),C(!0),function(){a.current&&a.current.remove(),ye(I.current,a.current),I.current=null,a.current=null,L.current=null}}},[D,o,l,r,h,P,Z,N,JSON.stringify(F)]),(0,n.useEffect)(function(){D&&a.current&&i&&a.current.setLngLat(i)},[JSON.stringify(i)]),(0,n.useImperativeHandle)(e,function(){return c?a.current:null},[c]),a.current&&ve(I.current,t,a.current),L.current?(0,je.createPortal)(E,L.current):null},ir=(0,n.forwardRef)(nr)},76966:function(pe,q,m){m.r(q),m.d(q,{texts:function(){return oe}});var le=m(87737);const oe=[{value:"This is a guide example",paraId:0}]},33667:function(pe,q,m){m.r(q),m.d(q,{texts:function(){return oe}});var le=m(31275);const oe=[]},83776:function(pe,q){q.Z=`import {
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
  const [imgUrl, setImgUrl] = useState(
    '/react-mapboxgl-zt/imgs/background1.jpg',
  );
  const [icon, setIcon] = useState('/react-mapboxgl-zt/imgs/icon.png');
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
    setColor(color === '#f00' ? '#0f0' : '#f00');

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
