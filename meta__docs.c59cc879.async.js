"use strict";(self.webpackChunkreact_mapboxgl_zt=self.webpackChunkreact_mapboxgl_zt||[]).push([[904],{47347:function(ae,W,o){var te;o.r(W),o.d(W,{demos:function(){return i}});var ee=o(90228),ne=o.n(ee),ce=o(87999),Ne=o.n(ce),le=o(75271),We=o(36194),ie=o(91314),i={"docs-document-demo-base":{component:le.memo(le.lazy(function(){return o.e(433).then(o.bind(o,19184))})),asset:{type:"BLOCK",id:"docs-document-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:o(92422).Z},react:{type:"NPM",value:"18.3.1"},"react-mapboxgl-zt":{type:"NPM",value:"0.0.9"}},entry:"index.tsx"},context:{react:te||(te=o.t(le,2)),"react-mapboxgl-zt":ie},renderOpts:{compile:function(){var Te=Ne()(ne()().mark(function v(){var X,Ae=arguments;return ne()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,o.e(928).then(o.bind(o,56928));case 2:return se.abrupt("return",(X=se.sent).default.apply(X,Ae));case 3:case"end":return se.stop()}},v)}));function De(){return Te.apply(this,arguments)}return De}()}}}},12995:function(ae,W,o){o.r(W),o.d(W,{demos:function(){return ne}});var te=o(75271),ee=o(76098),ne={}},7017:function(ae,W,o){o.r(W),o.d(W,{demos:function(){return ne}});var te=o(75271),ee=o(64459),ne={}},25079:function(ae,W,o){o.r(W),o.d(W,{demos:function(){return ne}});var te=o(75271),ee=o(31275),ne={}},91314:function(ae,W,o){o.r(W),o.d(W,{BackgroundLayer:function(){return wt},CircleLayer:function(){return Ht},CustomControl:function(){return $t},FillLayer:function(){return Yt},FullscreenControl:function(){return zt},HeatmapLayer:function(){return Vt},LineLayer:function(){return qt},MapContext:function(){return X},MapFactory:function(){return St},Marker:function(){return or},MousePositionControl:function(){return Jt},NavigationControl:function(){return Wt},Popup:function(){return ir},RasterLayer:function(){return tr},ScaleControl:function(){return Ut}});var te=o(31759),ee=o.n(te),ne=o(26068),ce=o.n(ne),Ne=o(48305),le=o.n(Ne),We=o(95959),ie=o.n(We),i=o(75271),Te=o(82187),De=o.n(Te),v=o(69370),X=(0,i.createContext)(null),Ae={onResize:"resize",onIdle:"idle",onRemove:"remove",onMouseDown:"mousedown",onMouseUp:"mouseup",onMouseOver:"mouseover",onMouseMove:"mousemove",onMouseEnter:"mouseenter",onMouseLeave:"mouseleave",onMouseOut:"mouseout",onPreClick:"preclick",onClick:"click",onDblClick:"dblclick",onContextMenu:"contextmenu",onWheel:"wheel",onTouchStart:"touchstart",onTouchEnd:"touchend",onTouchMove:"touchmove",onTouchCancel:"touchcancel",onMoveStart:"movestart",onMove:"move",onMoveEnd:"moveend",onDragStart:"dragstart",onDrag:"drag",onDragEnd:"dragend",onZoomStart:"zoomstart",onZoom:"zoom",onZoomEnd:"zoomend",onRotateStart:"rotatestart",onRotate:"rotate",onRotateEnd:"rotateend",onPitchStart:"pitchstart",onPitch:"pitch",onPitchEnd:"pitchend",onBoxZoomStart:"boxzoomstart",onBoxZoomEnd:"boxzoomend",onBoxZoomCancel:"boxzoomcancel",onRenderStart:"renderstart",onRender:"render",onError:"error",onWebglContextLost:"webglcontextlost",onWebglContextRestored:"webglcontextrestored",onData:"data",onStyleData:"styledata",onSourceData:"sourcedata",onDataLoading:"dataloading",onStyleDataLoading:"styledataloading",onSourceDataLoading:"sourcedataloading",onStyleImageMissing:"styleimagemissing",onStyleLoad:"style.load",onStyleImportLoad:"style.import.load"},Be={onMouseDown:"mousedown",onMouseUp:"mouseup",onMouseOver:"mouseover",onMouseMove:"mousemove",onMouseEnter:"mouseenter",onMouseLeave:"mouseleave",onMouseOut:"mouseout",onClick:"click",onTouchStart:"touchstart",onTouchEnd:"touchend",onTouchCancel:"touchcancel"},se={onOpen:"open",onClose:"close",onDragStart:"dragstart",onDrag:"drag",onDragEnd:"dragend"},ve=ce()(ce()(ce()({},Ae),Be),se),ye=function(t,e,a,n){if(!(!a||!t)){var s=Object.keys(t).filter(function(r){return t[r]&&typeof e[r]!="function"}),y=Object.keys(ve).filter(function(r){return!t[r]&&typeof e[r]=="function"});n?s.forEach(function(r){a.off(ve[r],n,t[r]),delete t[r]}):s.forEach(function(r){a.off(ve[r],t[r]),delete t[r]}),y.forEach(function(r){var C=ve[r],h=e[r];if(C&&typeof h=="function"){var u=function(R){h(R)};n?a.on(C,n,u):a.on(C,u),t[r]=u}})}},ge=function(t,e,a){!e||!t||(a?Object.keys(t).forEach(function(n){e.off(ve[n],a,t[n]),delete t[n]}):Object.keys(t).forEach(function(n){e.off(ve[n],t[n]),delete t[n]}))},Mr=o(58596),Ue=o(52676),mt=10,dt=[113.94,22.52],vt=0,yt=0,gt=85,pt=0,ht=22,Pt=0,_t="flyTo",Lt="mapbox://styles/mapbox/streets-v11",Ct=function(t){var e=t.accessToken,a=t.apiUrl,n=t.antialias,s=n===void 0?!1:n,y=t.attributionControl,r=y===void 0?!1:y,C=t.bearingSnap,h=C===void 0?7:C,u=t.boxZoom,P=u===void 0?!0:u,R=t.clickTolerance,Z=R===void 0?3:R,z=t.collectResourceTiming,I=z===void 0?!1:z,D=t.config,E=t.cooperativeGestures,A=E===void 0?!1:E,c=t.crossSourceCollisions,_=c===void 0?!0:c,N=t.customAttribution,M=t.doubleClickZoom,$=M===void 0?!0:M,l=t.dragPan,L=l===void 0?!0:l,g=t.dragRotate,O=g===void 0?!0:g,F=t.fadeDuration,f=F===void 0?300:F,b=t.failIfMajorPerformanceCaveat,q=b===void 0?!1:b,j=t.hash,k=j===void 0?!1:j,S=t.interactive,d=S===void 0?!0:S,x=t.keyboard,w=x===void 0?!0:x,U=t.language,p=t.locale,J=t.localFontFamily,re=t.localIdeographFontFamily,V=re===void 0?"sans-serif":re,K=t.logoPosition,ue=K===void 0?"bottom-right":K,pe=t.maxTileCacheSize,Ce=t.minTileCacheSize,fe=t.performanceMetricsCollection,m=fe===void 0?!0:fe,T=t.pitchWithRotate,he=T===void 0?!0:T,Pe=t.preserveDrawingBuffer,Q=Pe===void 0?!1:Pe,G=t.projection,oe=G===void 0?{name:"mercator"}:G,me=t.refreshExpiredTiles,Se=me===void 0?!0:me,we=t.renderWorldCopies,ar=we===void 0?!0:we,Ke=t.respectPrefersReducedMotion,cr=Ke===void 0?!0:Ke,He=t.scrollZoom,lr=He===void 0?!0:He,Ge=t.spriteFormat,sr=Ge===void 0?"auto":Ge,Ye=t.touchPitch,ur=Ye===void 0?!0:Ye,Xe=t.touchZoomRotate,fr=Xe===void 0?!0:Xe,Ve=t.trackResize,mr=Ve===void 0?!0:Ve,dr=t.transformRequest;return function(Y){var Qe=Y.center,_e=Qe===void 0?dt:Qe,qe=Y.zoom,be=qe===void 0?mt:qe,et=Y.bearing,xe=et===void 0?yt:et,tt=Y.pitch,Oe=tt===void 0?vt:tt,Me=Y.bounds,Je=Y.fitBoundsOptions,$e=Y.maxBounds,rt=Y.maxPitch,Ee=rt===void 0?gt:rt,ot=Y.minPitch,ze=ot===void 0?pt:ot,nt=Y.maxZoom,Re=nt===void 0?ht:nt,it=Y.minZoom,Ze=it===void 0?Pt:it,at=Y.style,de=at===void 0?Lt:at,vr=Y.className,ct=Y.moveMethod,yr=ct===void 0?_t:ct,gr=Y.cameraOptions,lt=Y.animationOptions,pr=lt===void 0?{}:lt,hr=Y.children,st=Y.onMapLoad,Pr=(0,i.useState)(null),ut=le()(Pr,2),B=ut[0],_r=ut[1],ft=(0,i.useRef)(null),ke=(0,i.useRef)({});return(0,i.useEffect)(function(){ie().accessToken=e,a&&(ie().config.API_URL=a);var Ie={container:ft.current,center:_e,zoom:be,pitch:Oe,bearing:xe,bounds:Me,style:de,fitBoundsOptions:Je,maxBounds:$e,maxPitch:Ee,minPitch:ze,maxZoom:Re,minZoom:Ze,antialias:s,attributionControl:r,bearingSnap:h,boxZoom:P,clickTolerance:Z,collectResourceTiming:I,config:D,cooperativeGestures:A,crossSourceCollisions:_,customAttribution:N,doubleClickZoom:$,dragPan:L,dragRotate:O,fadeDuration:f,failIfMajorPerformanceCaveat:q,hash:k,interactive:d,keyboard:w,language:U,locale:p,localFontFamily:J,localIdeographFontFamily:V,logoPosition:ue,maxTileCacheSize:pe,minTileCacheSize:Ce,performanceMetricsCollection:m,pitchWithRotate:he,preserveDrawingBuffer:Q,projection:oe,refreshExpiredTiles:Se,renderWorldCopies:ar,respectPrefersReducedMotion:cr,scrollZoom:lr,spriteFormat:sr,touchPitch:ur,touchZoomRotate:fr,trackResize:mr,transformRequest:dr},Le=new(ie()).Map(Ie);return Le.on("load",function(){st&&st(Le),_r(Le)}),function(){B&&B.remove(),ge(ke.current,B),ke.current=null}},[]),(0,i.useEffect)(function(){if(B){var Ie=B.getCenter(),Le=B.getZoom(),Lr=B.getBearing(),Cr=B.getPitch(),Sr=Ie.lng!==_e[0]||Ie.lat!==_e[1],br=Le!==be,xr=Lr!==xe,Or=Cr!==Oe;(Sr||br||xr||Or)&&B[yr](ce()(ce()(ce()({},gr),pr),{},{center:_e,zoom:be,bearing:xe,pitch:Oe})),Me&&B.fitBounds(Me,Je),$e&&B.setMaxBounds($e),Ee!==B.getMaxPitch()&&B.setMaxPitch(Ee),ze!==B.getMinPitch()&&B.setMinPitch(ze),Re!==B.getMaxZoom()&&B.setMaxZoom(Re),Ze!==B.getMinZoom()&&B.setMinZoom(Ze)}},[JSON.stringify(_e),be,Oe,xe,JSON.stringify(Me),JSON.stringify($e),JSON.stringify(Je),Ee,ze,Re,Ze]),(0,i.useEffect)(function(){if(B){if(typeof de=="string"){B.setStyle(de);return}ee()(de)==="object"&&!(0,v.Z)(de,B.getStyle())&&B.setStyle(de)}},[de]),B&&ye(ke.current,Y,B),(0,Ue.jsx)(X.Provider,{value:B,children:(0,Ue.jsx)("div",{className:De()("map-container",vr),ref:ft,children:B&&hr})})}},St=Ct,bt=o(67825),xt=o.n(bt),Ot=["controlClass","position"],Mt=function(t){var e=t.controlClass,a=t.position,n=a===void 0?"bottom-right":a,s=xt()(t,Ot),y=(0,i.useContext)(X),r=(0,i.useRef)(null);return(0,i.useEffect)(function(){if(y)return r.current&&y.removeControl(r.current),r.current=new e(s),y.addControl(r.current,n),function(){r.current&&y.removeControl(r.current),r.current=null}},[y,n]),null},$t=Mt,Et=function(t){var e=t.position,a=e===void 0?"top-right":e,n=t.container,s=(0,i.useContext)(X),y=(0,i.useRef)(null);return(0,i.useEffect)(function(){if(s)return y.current&&s.removeControl(y.current),y.current=new(ie()).FullscreenControl({container:n}),s.addControl(y.current,a),function(){y.current&&s.removeControl(y.current),y.current=null}},[s,a,n]),null},zt=Et,Rt=o(25298),Zt=o.n(Rt),It=o(17069),Nt=o.n(It),Tt=o(82092),Fe=o.n(Tt),Dt=function(){function H(t){var e=t.decimals;Zt()(this,H),Fe()(this,"_map",null),Fe()(this,"_container",null),Fe()(this,"_decimals",void 0),this._decimals=e}return Nt()(H,[{key:"_updatePosition",value:function(e){if(this._container){var a=e.lngLat.lng.toFixed(this._decimals),n=e.lngLat.lat.toFixed(this._decimals);this._container.innerText="".concat(a," , ").concat(n)}}},{key:"onAdd",value:function(e){this._map=e;var a=e.getCenter().lng.toFixed(this._decimals),n=e.getCenter().lat.toFixed(this._decimals);return this._container=document.createElement("div"),this._container.classList.add("mapboxgl-ctrl"),this._container.classList.add("mapboxgl-ctrl-group"),this._container.classList.add("mapboxgl-ctrl-mouse-position"),this._container.innerText="".concat(a," , ").concat(n),this._map.on("mousemove",this._updatePosition.bind(this)),this._container}},{key:"onRemove",value:function(){this._map&&this._map.off("mousemove",this._updatePosition),this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._map=null,this._container=null}}]),H}(),At=Dt,Ft=function(t){var e=t.position,a=e===void 0?"bottom":e,n=t.decimals,s=n===void 0?6:n,y=(0,i.useContext)(X),r=(0,i.useRef)(null);return(0,i.useEffect)(function(){if(y)return r.current&&y.removeControl(r.current),r.current=new At({decimals:s}),y.addControl(r.current,a),function(){r.current&&y.removeControl(r.current),r.current=null}},[y,a,s]),null},Jt=Ft,kt=function(t){var e=t.showCompass,a=e===void 0?!0:e,n=t.showZoom,s=n===void 0?!0:n,y=t.visualizePitch,r=y===void 0?!0:y,C=t.position,h=C===void 0?"top-left":C,u=(0,i.useContext)(X),P=(0,i.useRef)(null);return(0,i.useEffect)(function(){if(u)return P.current&&u.removeControl(P.current),P.current=new(ie()).NavigationControl({showCompass:a,showZoom:s,visualizePitch:r}),u.addControl(P.current,h),function(){P.current&&u.removeControl(P.current),P.current=null}},[u,h,a,s,r]),null},Wt=kt,Bt=function(t,e){var a=t.position,n=a===void 0?"bottom-left":a,s=t.maxWidth,y=s===void 0?100:s,r=t.unit,C=r===void 0?"metric":r,h=(0,i.useContext)(X),u=(0,i.useRef)(null),P=(0,i.useState)(!1),R=le()(P,2),Z=R[0],z=R[1];return(0,i.useEffect)(function(){if(h)return u.current&&h.removeControl(u.current),u.current=new(ie()).ScaleControl({maxWidth:y,unit:C}),h.addControl(u.current,n),z(!0),function(){u.current&&h.removeControl(u.current),u.current=null}},[h,n,y,C]),(0,i.useImperativeHandle)(e,function(){return Z?u.current:null},[Z]),null},Ut=(0,i.forwardRef)(Bt),jt=function(t){var e=t.id,a=t.filter,n=t.maxzoom,s=n===void 0?24:n,y=t.minzoom,r=y===void 0?0:y,C=t.slot,h=t.color,u=h===void 0?"#000000":h,P=t.emissiveStrength,R=P===void 0?0:P,Z=t.opacity,z=Z===void 0?1:Z,I=t.imgUrl,D=t.visibility,E=D===void 0?"visible":D,A=t.beforeId,c=(0,i.useContext)(X),_=(0,i.useRef)(null),N=function($){return new Promise(function(l){c.loadImage($,function(L,g){if(L)throw L;c.hasImage(e)&&c.removeImage(e),g&&c.addImage(e,g),l(e)})})};return(0,i.useEffect)(function(){if(c){var M={id:e,type:"background"},$={},l={};return a&&(M.filter=a),C&&(M.slot=C),M.maxzoom=s,M.minzoom=r,$["background-color"]=u,$["background-emissive-strength"]=R,$["background-opacity"]=z,l.visibility=E,M.paint=$,M.layout=l,I?N(I).then(function(L){M.paint["background-pattern"]=L,c.getLayer(e)&&c.removeLayer(e),c.addLayer(M,A)}):(c.getLayer(e)&&c.removeLayer(e),c.addLayer(M)),function(){c!=null&&c.getLayer(e)&&c.removeLayer(e),_.current=null}}},[c,e]),(0,i.useEffect)(function(){if(c){if(!_.current){_.current=t;return}(0,v.Z)(a,_.current.filter)||c.setFilter(e,a),(s!==_.current.maxzoom||r!==_.current.minzoom)&&c.setLayerZoomRange(e,r,s),C!==_.current.slot&&c.setSlot(e,C),u!==_.current.color&&c.setPaintProperty(e,"background-color",u),R!==_.current.emissiveStrength&&c.setPaintProperty(e,"background-emissive-strength",R),z!==_.current.opacity&&c.setPaintProperty(e,"background-opacity",z),E!==_.current.visibility&&c.setLayoutProperty(e,"visibility",E),A!==_.current.beforeId&&c.moveLayer(e,A),I&&I!==_.current.imgUrl&&N(I),_.current=t}},[JSON.stringify(a),s,r,C,u,R,z,E,A,I]),null},wt=jt,Kt=function(t){var e=t.id,a=t.source,n=t.sourceLayer,s=t.filter,y=t.maxzoom,r=y===void 0?24:y,C=t.minzoom,h=C===void 0?0:C,u=t.slot,P=t.beforeId,R=t.visibility,Z=R===void 0?"visible":R,z=t.blur,I=z===void 0?0:z,D=t.color,E=D===void 0?"#000000":D,A=t.emissiveStrength,c=A===void 0?0:A,_=t.opacity,N=_===void 0?1:_,M=t.pitchAlignment,$=M===void 0?"viewport":M,l=t.pitchScale,L=l===void 0?"map":l,g=t.radius,O=g===void 0?5:g,F=t.sortKey,f=t.strokeColor,b=f===void 0?"#000000":f,q=t.strokeOpacity,j=q===void 0?1:q,k=t.strokeWidth,S=k===void 0?0:k,d=t.translate,x=d===void 0?[0,0]:d,w=t.translateAnchor,U=w===void 0?"map":w,p=(0,i.useContext)(X),J=(0,i.useRef)(null),re=(0,i.useRef)({});return(0,i.useEffect)(function(){if(p){var V={id:e,type:"circle",source:e},K={},ue={};return n&&(V["source-layer"]=n),s&&(V.filter=s),u&&(V.slot=u),F&&(ue["circle-sort-key"]=F),V.maxzoom=r,V.minzoom=h,K["circle-blur"]=I,K["circle-color"]=E,K["circle-emissive-strength"]=c,K["circle-opacity"]=N,K["circle-pitch-alignment"]=$,K["circle-pitch-scale"]=L,K["circle-radius"]=O,K["circle-stroke-color"]=b,K["circle-stroke-opacity"]=j,K["circle-stroke-width"]=S,K["circle-translate"]=x,K["circle-translate-anchor"]=U,ue.visibility=Z,V.paint=K,V.layout=ue,p.getLayer(e)&&p.removeLayer(e),p.getSource(e)&&p.removeSource(e),p.addSource(e,a),p.addLayer(V,P),function(){p.getLayer(e)&&p.removeLayer(e),p.getSource(e)&&p.removeSource(e),ge(re.current,p,e),re.current=null,J.current=null}}},[p,e]),(0,i.useEffect)(function(){if(p){var V=p.getLayer(e);if(V){if(!J.current){J.current=t;return}(0,v.Z)(a,J.current.source)||(p.removeLayer(e),p.removeSource(e),p.addSource(e,a),p.addLayer(V)),n!==J.current.sourceLayer&&(V["source-layer"]=n,p.removeLayer(e),p.addLayer(V)),(0,v.Z)(s,J.current.filter)||p.setFilter(e,s),(r!==J.current.maxzoom||h!==J.current.minzoom)&&p.setLayerZoomRange(e,h,r),u!==J.current.slot&&p.setSlot(e,u),Z!==J.current.visibility&&p.setLayoutProperty(e,"visibility",Z),(0,v.Z)(I,J.current.blur)||p.setPaintProperty(e,"circle-blur",I),(0,v.Z)(E,J.current.color)||p.setPaintProperty(e,"circle-color",E),c!==J.current.emissiveStrength&&p.setPaintProperty(e,"circle-emissive-strength",c),(0,v.Z)(N,J.current.opacity)||p.setPaintProperty(e,"circle-opacity",N),$!==J.current.pitchAlignment&&p.setPaintProperty(e,"circle-pitch-alignment",$),L!==J.current.pitchScale&&p.setPaintProperty(e,"circle-pitch-scale",L),(0,v.Z)(O,J.current.radius)||p.setPaintProperty(e,"circle-radius",O),F!==J.current.sortKey&&p.setLayoutProperty(e,"circle-sort-key",F),(0,v.Z)(b,J.current.strokeColor)||p.setPaintProperty(e,"circle-stroke-color",b),(0,v.Z)(j,J.current.strokeOpacity)||p.setPaintProperty(e,"circle-stroke-opacity",j),(0,v.Z)(S,J.current.strokeWidth)||p.setPaintProperty(e,"circle-stroke-width",S),(0,v.Z)(x,J.current.translate)||p.setPaintProperty(e,"circle-translate",x),U!==J.current.translateAnchor&&p.setPaintProperty(e,"circle-translate-anchor",U),P!==J.current.beforeId&&p.moveLayer(e,P),J.current=t}}},[a,n,JSON.stringify(s),r,h,u,Z,JSON.stringify(I),JSON.stringify(E),JSON.stringify(c),JSON.stringify(N),$,L,JSON.stringify(O),F,JSON.stringify(b),JSON.stringify(j),JSON.stringify(S),JSON.stringify(x),U,P]),p&&ye(re.current,t,p,e),null},Ht=Kt,Gt=function(t){var e=t.id,a=t.source,n=t.sourceLayer,s=t.filter,y=t.maxzoom,r=y===void 0?24:y,C=t.minzoom,h=C===void 0?0:C,u=t.slot,P=t.beforeId,R=t.visibility,Z=R===void 0?"visible":R,z=t.antialias,I=z===void 0?!0:z,D=t.color,E=D===void 0?"#000000":D,A=t.emissiveStrength,c=A===void 0?0:A,_=t.opacity,N=_===void 0?1:_,M=t.outlineColor,$=t.imgUrl,l=t.sortKey,L=t.translate,g=L===void 0?[0,0]:L,O=t.translateAnchor,F=O===void 0?"map":O,f=(0,i.useContext)(X),b=(0,i.useRef)(null),q=(0,i.useRef)({}),j=function(S){return new Promise(function(d){f.loadImage(S,function(x,w){if(x)throw x;f.hasImage(e)&&f.removeImage(e),w&&f.addImage(e,w),d(e)})})};return(0,i.useEffect)(function(){if(f){var k={id:e,type:"fill",source:e},S={},d={};return n&&(k["source-layer"]=n),s&&(k.filter=s),u&&(k.slot=u),l&&(d["fill-sort-key"]=l),M&&(S["fill-outline-color"]=M),k.maxzoom=r,k.minzoom=h,S["fill-antialias"]=I,S["fill-color"]=E,S["fill-emissive-strength"]=c,S["fill-opacity"]=N,S["fill-translate"]=g,S["fill-translate-anchor"]=F,d.visibility=Z,k.paint=S,k.layout=d,$?j($).then(function(x){k.paint["fill-pattern"]=x,f.getLayer(e)&&f.removeLayer(e),f.getSource(e)&&f.removeSource(e),f.addSource(e,a),f.addLayer(k,P)}):(f.getLayer(e)&&f.removeLayer(e),f.getSource(e)&&f.removeSource(e),f.addSource(e,a),f.addLayer(k,P)),function(){f.getLayer(e)&&f.removeLayer(e),f.getSource(e)&&f.removeSource(e),ge(q.current,f,e),q.current=null,b.current=null}}},[f,e]),(0,i.useEffect)(function(){if(f){var k=f.getLayer(e);if(k){if(!b.current){b.current=t;return}(0,v.Z)(a,b.current.source)||(f.removeLayer(e),f.removeSource(e),f.addSource(e,a),f.addLayer(k)),n!==b.current.sourceLayer&&(k["source-layer"]=n,f.removeLayer(e),f.addLayer(k)),(0,v.Z)(s,b.current.filter)||f.setFilter(e,s),(r!==b.current.maxzoom||h!==b.current.minzoom)&&f.setLayerZoomRange(e,h,r),u!==b.current.slot&&f.setSlot(e,u),I!==b.current.antialias&&f.setPaintProperty(e,"fill-antialias",I),(0,v.Z)(E,b.current.color)||f.setPaintProperty(e,"fill-color",E),c!==b.current.emissiveStrength&&f.setPaintProperty(e,"fill-emissive-strength",c),(0,v.Z)(N,b.current.opacity)||f.setPaintProperty(e,"fill-opacity",N),(0,v.Z)(M,b.current.outlineColor)||f.setPaintProperty(e,"fill-outline-color",M),l!==b.current.sortKey&&f.setLayoutProperty(e,"fill-sort-key",l),(0,v.Z)(g,b.current.translate)||f.setPaintProperty(e,"fill-translate",g),F!==b.current.translateAnchor&&f.setPaintProperty(e,"fill-translate-anchor",F),Z!==b.current.visibility&&f.setLayoutProperty(e,"visibility",Z),P!==b.current.beforeId&&f.moveLayer(e,P),$&&$!==b.current.imgUrl&&j($),b.current=t}}},[a,n,JSON.stringify(s),r,h,u,Z,P,I,JSON.stringify(E),JSON.stringify(c),JSON.stringify(N),JSON.stringify(M),l,JSON.stringify(g),F,$]),f&&ye(q.current,t,f,e),null},Yt=Gt,Xt=function(t){var e=t.id,a=t.source,n=t.sourceLayer,s=t.filter,y=t.maxzoom,r=y===void 0?24:y,C=t.minzoom,h=C===void 0?0:C,u=t.slot,P=t.beforeId,R=t.visibility,Z=R===void 0?"visible":R,z=t.color,I=z===void 0?["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"]:z,D=t.intensity,E=D===void 0?1:D,A=t.opacity,c=A===void 0?1:A,_=t.radius,N=_===void 0?30:_,M=t.weight,$=M===void 0?1:M,l=(0,i.useContext)(X),L=(0,i.useRef)(null);return(0,i.useEffect)(function(){if(l){var g={id:e,type:"heatmap",source:e},O={},F={};return n&&(g["source-layer"]=n),s&&(g.filter=s),u&&(g.slot=u),g.maxzoom=r,g.minzoom=h,O["heatmap-color"]=I,O["heatmap-intensity"]=E,O["heatmap-opacity"]=c,O["heatmap-radius"]=N,O["heatmap-weight"]=$,g.paint=O,g.layout=F,l.getLayer(e)&&l.removeLayer(e),l.getSource(e)&&l.removeSource(e),l.addSource(e,a),l.addLayer(g,P),function(){l!=null&&l.getLayer(e)&&l.removeLayer(e),l!=null&&l.getSource(e)&&l.removeSource(e),L.current=null}}},[l,e]),(0,i.useEffect)(function(){if(l){var g=l.getLayer(e);if(g){if(!L.current){L.current=t;return}(0,v.Z)(a,L.current.source)||(l.removeLayer(e),l.removeSource(e),l.addSource(e,a),l.addLayer(g)),n!==L.current.sourceLayer&&(g["source-layer"]=n,l.removeLayer(e),l.addLayer(g)),(0,v.Z)(s,L.current.filter)||l.setFilter(e,s),(r!==L.current.maxzoom||h!==L.current.minzoom)&&l.setLayerZoomRange(e,h,r),u!==L.current.slot&&l.setSlot(e,u),Z!==L.current.visibility&&l.setLayoutProperty(e,"visibility",Z),P!==L.current.beforeId&&l.moveLayer(e,P),(0,v.Z)(I,L.current.color)||l.setPaintProperty(e,"heatmap-color",I),(0,v.Z)(E,L.current.intensity)||l.setPaintProperty(e,"heatmap-intensity",E),(0,v.Z)(c,L.current.opacity)||l.setPaintProperty(e,"heatmap-opacity",c),(0,v.Z)(N,L.current.radius)||l.setPaintProperty(e,"heatmap-radius",N),(0,v.Z)($,L.current.weight)||l.setPaintProperty(e,"heatmap-weight",$),L.current=t}}},[a,n,JSON.stringify(s),r,h,u,Z,P,JSON.stringify(I),JSON.stringify(E),JSON.stringify(c),JSON.stringify(N),JSON.stringify($)]),null},Vt=Xt,Qt=function(t){var e=t.id,a=t.source,n=t.sourceLayer,s=t.filter,y=t.maxzoom,r=y===void 0?24:y,C=t.minzoom,h=C===void 0?0:C,u=t.slot,P=t.beforeId,R=t.visibility,Z=R===void 0?"visible":R,z=t.imgUrl,I=t.blur,D=I===void 0?0:I,E=t.cap,A=E===void 0?"butt":E,c=t.color,_=c===void 0?"#000000":c,N=t.dasharray,M=t.emissiveStrength,$=M===void 0?0:M,l=t.gapWidth,L=l===void 0?0:l,g=t.gradient,O=t.join,F=O===void 0?"miter":O,f=t.miterLimit,b=f===void 0?2:f,q=t.occlusionOpacity,j=q===void 0?0:q,k=t.offset,S=k===void 0?0:k,d=t.opacity,x=d===void 0?1:d,w=t.roundLimit,U=w===void 0?1.05:w,p=t.sortKey,J=t.translate,re=J===void 0?[0,0]:J,V=t.translateAnchor,K=V===void 0?"map":V,ue=t.trimOffset,pe=ue===void 0?[0,0]:ue,Ce=t.width,fe=Ce===void 0?1:Ce,m=(0,i.useContext)(X),T=(0,i.useRef)(null),he=(0,i.useRef)({}),Pe=function(G){return new Promise(function(oe){m.loadImage(G,function(me,Se){if(me)throw me;m.hasImage(e)&&m.removeImage(e),Se&&m.addImage(e,Se),oe(e)})})};return(0,i.useEffect)(function(){if(m){var Q={id:e,type:"line",source:e},G={},oe={};return n&&(Q["source-layer"]=n),s&&(Q.filter=s),u&&(Q.slot=u),N&&(G["line-dasharray"]=N),g&&(G["line-gradient"]=g),p&&(oe["line-sort-key"]=p),Q.maxzoom=r,Q.minzoom=h,G["line-blur"]=D,G["line-color"]=_,G["line-emissive-strength"]=0,G["line-gap-width"]=L,G["line-occlusion-opacity"]=j,G["line-offset"]=S,G["line-opacity"]=x,G["line-translate"]=re,G["line-translate-anchor"]=K,G["line-trim-offset"]=pe,G["line-width"]=fe,oe["line-round-limit"]=U,oe["line-miter-limit"]=b,oe["line-join"]=F,oe["line-cap"]=A,oe.visibility=Z,Q.paint=G,Q.layout=oe,z?Pe(z).then(function(me){Q.paint["line-pattern"]=me,m.getLayer(e)&&m.removeLayer(e),m.getSource(e)&&m.removeSource(e),m.addSource(e,a),m.addLayer(Q,P)}):(m.getLayer(e)&&m.removeLayer(e),m.getSource(e)&&m.removeSource(e),m.addSource(e,a),m.addLayer(Q,P)),function(){m.getLayer(e)&&m.removeLayer(e),m.getSource(e)&&m.removeSource(e),ge(he.current,m,e),he.current=null,T.current=null}}},[m,e]),(0,i.useEffect)(function(){if(m){var Q=m.getLayer(e);if(Q){if(!T.current){T.current=t;return}(0,v.Z)(a,T.current.source)||(m.removeLayer(e),m.removeSource(e),m.addSource(e,a),m.addLayer(Q)),n!==T.current.sourceLayer&&(Q["source-layer"]=n,m.removeLayer(e),m.addLayer(Q)),(0,v.Z)(s,T.current.filter)||m.setFilter(e,s),(r!==T.current.maxzoom||h!==T.current.minzoom)&&m.setLayerZoomRange(e,h,r),u!==T.current.slot&&m.setSlot(e,u),(0,v.Z)(D,T.current.blur)||m.setPaintProperty(e,"line-blur",D),A!==T.current.cap&&m.setLayoutProperty(e,"line-cap",A),(0,v.Z)(_,T.current.color)||m.setPaintProperty(e,"line-color",_),(0,v.Z)(N,T.current.dasharray)||m.setPaintProperty(e,"line-dasharray",N),$!==T.current.emissiveStrength&&m.setPaintProperty(e,"line-emissive-strength",$),(0,v.Z)(L,T.current.gapWidth)||m.setPaintProperty(e,"line-gap-width",L),(0,v.Z)(g,T.current.gradient)||m.setPaintProperty(e,"line-gradient",g),F!==T.current.join&&m.setLayoutProperty(e,"line-join",F),(0,v.Z)(b,T.current.miterLimit)||m.setLayoutProperty(e,"line-miter-limit",b),(0,v.Z)(j,T.current.occlusionOpacity)||m.setPaintProperty(e,"line-occlusion-opacity",j),(0,v.Z)(S,T.current.offset)||m.setPaintProperty(e,"line-offset",S),(0,v.Z)(x,T.current.opacity)||m.setPaintProperty(e,"line-opacity",x),(0,v.Z)(U,T.current.roundLimit)||m.setLayoutProperty(e,"line-round-limit",U),p!==T.current.sortKey&&m.setLayoutProperty(e,"line-sort-key",p),(0,v.Z)(re,T.current.translate)||m.setPaintProperty(e,"line-translate",re),K!==T.current.translateAnchor&&m.setPaintProperty(e,"line-translate-anchor",K),(0,v.Z)(pe,T.current.trimOffset)||m.setPaintProperty(e,"line-trim-offset",pe),(0,v.Z)(fe,T.current.width)||m.setPaintProperty(e,"line-width",fe),Z!==T.current.visibility&&m.setLayoutProperty(e,"visibility",Z),P!==T.current.beforeId&&m.moveLayer(e,P),z&&z!==T.current.imgUrl&&Pe(z),T.current=t}}},[a,n,JSON.stringify(s),r,h,u,Z,P,JSON.stringify(D),A,JSON.stringify(_),JSON.stringify(N),JSON.stringify($),L,JSON.stringify(g),F,JSON.stringify(b),JSON.stringify(j),JSON.stringify(S),JSON.stringify(x),JSON.stringify(U),p,JSON.stringify(re),K,JSON.stringify(pe),JSON.stringify(fe),z]),m&&ye(he.current,t,m,e),null},qt=Qt,er=function(t){var e=t.id,a=t.source,n=t.maxzoom,s=n===void 0?24:n,y=t.minzoom,r=y===void 0?0:y,C=t.slot,h=t.filter,u=t.beforeId,P=t.visibility,R=P===void 0?"visible":P,Z=t.brightnessMax,z=Z===void 0?1:Z,I=t.brightnessMin,D=I===void 0?0:I,E=t.color,A=t.colorMix,c=A===void 0?[.2126,.7152,.0722,0]:A,_=t.colorRange,N=t.contrast,M=N===void 0?0:N,$=t.emissiveStrength,l=$===void 0?0:$,L=t.fadeDuration,g=L===void 0?300:L,O=t.hueRotate,F=O===void 0?0:O,f=t.opacity,b=f===void 0?1:f,q=t.resampling,j=q===void 0?"linear":q,k=t.saturation,S=k===void 0?0:k,d=(0,i.useContext)(X),x=(0,i.useRef)(null);return(0,i.useEffect)(function(){if(d){var w={id:e,type:"raster",source:e},U={},p={};return h&&(w.filter=h),C&&(w.slot=C),w.maxzoom=s,w.minzoom=r,E&&(U["raster-color"]=E),_&&(U["raster-color-range"]=_),U["raster-brightness-max"]=z,U["raster-brightness-min"]=D,U["raster-color-mix"]=c,U["raster-contrast"]=M,U["raster-emissive-strength"]=l,U["raster-fade-duration"]=g,U["raster-hue-rotate"]=F,U["raster-opacity"]=b,U["raster-resampling"]=j,U["raster-saturation"]=S,p.visibility=R,w.paint=U,w.layout=p,d.getLayer(e)&&d.removeLayer(e),d.getSource(e)&&d.removeSource(e),d.addSource(e,a),d.addLayer(w,u),function(){d!=null&&d.getLayer(e)&&d.removeLayer(e),d!=null&&d.getSource(e)&&d.removeSource(e),x.current=null}}},[d,e]),(0,i.useEffect)(function(){if(d){var w=d.getLayer(e);if(w){if(!x.current){x.current=t;return}(0,v.Z)(a,x.current.source)||(d.removeLayer(e),d.removeSource(e),d.addSource(e,a),d.addLayer(w,u)),(0,v.Z)(h,x.current.filter)||d.setFilter(e,h),(s!==x.current.maxzoom||r!==x.current.minzoom)&&d.setLayerZoomRange(e,r,s),C!==x.current.slot&&d.setSlot(e,C),R!==x.current.visibility&&d.setLayoutProperty(e,"visibility",R),j!==x.current.resampling&&d.setPaintProperty(e,"raster-resampling",j),(0,v.Z)(z,x.current.brightnessMax)||d.setPaintProperty(e,"raster-brightness-max",z),(0,v.Z)(D,x.current.brightnessMin)||d.setPaintProperty(e,"raster-brightness-min",D),(0,v.Z)(E,x.current.color)||d.setPaintProperty(e,"raster-color",E),(0,v.Z)(c,x.current.colorMix)||d.setPaintProperty(e,"raster-color-mix",c),(0,v.Z)(_,x.current.colorRange)||d.setPaintProperty(e,"raster-color-range",_),(0,v.Z)(M,x.current.contrast)||d.setPaintProperty(e,"raster-contrast",M),(0,v.Z)(l,x.current.emissiveStrength)||d.setPaintProperty(e,"raster-emissive-strength",l),(0,v.Z)(g,x.current.fadeDuration)||d.setPaintProperty(e,"raster-fade-duration",g),(0,v.Z)(F,x.current.hueRotate)||d.setPaintProperty(e,"raster-hue-rotate",F),(0,v.Z)(b,x.current.opacity)||d.setPaintProperty(e,"raster-opacity",b),(0,v.Z)(S,x.current.saturation)||d.setPaintProperty(e,"raster-saturation",S),u!==x.current.beforeId&&d.moveLayer(e,u),x.current=t}}},[a,s,r,C,JSON.stringify(h),u,R,j,JSON.stringify(z),JSON.stringify(D),JSON.stringify(E),JSON.stringify(c),JSON.stringify(_),JSON.stringify(M),JSON.stringify(l),JSON.stringify(g),JSON.stringify(F),JSON.stringify(b),JSON.stringify(S)]),null},tr=er,je=o(30967),rr=function(t,e){var a=t.lngLat,n=a===void 0?[180,90]:a,s=t.anchor,y=s===void 0?"center":s,r=t.className,C=t.clickTolerance,h=C===void 0?0:C,u=t.color,P=u===void 0?"#3FB1CE":u,R=t.draggable,Z=R===void 0?!1:R,z=t.occludedOpacity,I=z===void 0?.2:z,D=t.offset,E=t.pitchAlignment,A=E===void 0?"auto":E,c=t.rotation,_=c===void 0?0:c,N=t.rotationAlignment,M=N===void 0?"auto":N,$=t.scale,l=$===void 0?1:$,L=t.children,g=(0,i.useContext)(X),O=(0,i.useRef)(null),F=(0,i.useRef)(null),f=(0,i.useRef)({}),b=(0,i.useState)(!1),q=le()(b,2),j=q[0],k=q[1];return(0,i.useEffect)(function(){if(g){O.current&&O.current.remove();var S={};if(y&&(S.anchor=y),r&&(S.className=r),D&&(S.offset=D),S.clickTolerance=h,S.color=P,S.draggable=Z,S.occludedOpacity=I,S.pitchAlignment=A,S.rotation=_,S.rotationAlignment=M,S.scale=l,L){var d=document.createElement("div");d.classList.add("mapboxgl-marker-content__inner"),F.current=d,S.element=F.current}return O.current=new(ie()).Marker(S),O.current.setLngLat(n),O.current.addTo(g),k(!0),function(){O.current&&O.current.remove(),ge(f.current,O.current),f.current=null,O.current=null,F.current=null}}},[g,y,r,h,P,Z,I,A,_,M,l,JSON.stringify(D)]),(0,i.useEffect)(function(){g&&O.current&&n&&O.current.setLngLat(n)},[JSON.stringify(n)]),(0,i.useImperativeHandle)(e,function(){return j?O.current:null},[j]),O.current&&ye(f.current,t,O.current),F.current?(0,je.createPortal)(L,F.current):null},or=(0,i.forwardRef)(rr),nr=function(t,e){var a=t.lngLat,n=t.anchor,s=t.className,y=t.closeButton,r=y===void 0?!0:y,C=t.closeOnClick,h=C===void 0?!1:C,u=t.closeOnMove,P=u===void 0?!1:u,R=t.focusAfterOpen,Z=R===void 0?!0:R,z=t.maxWidth,I=z===void 0?"240px":z,D=t.offset,E=t.children,A=(0,i.useContext)(X),c=(0,i.useRef)(null),_=(0,i.useRef)(null),N=(0,i.useRef)({}),M=(0,i.useState)(!1),$=le()(M,2),l=$[0],L=$[1];return(0,i.useEffect)(function(){if(A){c.current&&c.current.remove();var g={};if(n&&(g.anchor=n),s&&(g.className=s),D&&(g.offset=D),g.closeButton=r,g.closeOnClick=h,g.closeOnMove=P,g.focusAfterOpen=Z,g.maxWidth=I,c.current=new(ie()).Popup(g),a&&c.current.setLngLat(a),E){var O=document.createElement("div");O.classList.add("mapboxgl-popup-content__inner"),_.current=O,c.current.setDOMContent(_.current)}return c.current.addTo(A),L(!0),function(){c.current&&c.current.remove(),ge(N.current,c.current),N.current=null,c.current=null,_.current=null}}},[A,n,s,r,h,P,Z,I,JSON.stringify(D)]),(0,i.useEffect)(function(){A&&c.current&&a&&c.current.setLngLat(a)},[JSON.stringify(a)]),(0,i.useImperativeHandle)(e,function(){return l?c.current:null},[l]),c.current&&ye(N.current,t,c.current),_.current?(0,je.createPortal)(E,_.current):null},ir=(0,i.forwardRef)(nr)},80531:function(ae,W,o){o.r(W),o.d(W,{texts:function(){return ee}});var te=o(36194);const ee=[{value:"This is a guide example",paraId:0}]},57260:function(ae,W,o){o.r(W),o.d(W,{texts:function(){return ee}});var te=o(76098);const ee=[]},47526:function(ae,W,o){o.r(W),o.d(W,{texts:function(){return ee}});var te=o(64459);const ee=[]},33667:function(ae,W,o){o.r(W),o.d(W,{texts:function(){return ee}});var te=o(31275);const ee=[]},92422:function(ae,W){W.Z=`import {
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
