(this["webpackJsonpenglish-card"]=this["webpackJsonpenglish-card"]||[]).push([[8],{209:function(e,n,t){"use strict";t.r(n);var i=t(12),a=t(0),o=t(196),c=t(192),l=t(4),r=t(3),s=t(1),u=(t(13),t(6)),d={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},b=t(173),v=t(22),j=t(8),p=t(57),O=t(31),f=t(37),m=t(14),h=t(54),y=t(2),g=Object(h.a)(Object(y.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),x=Object(h.a)(Object(y.jsx)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),C=t(11),S=t(5),F=t(131),w=t(174);function A(e){return Object(F.a)("MuiRating",e)}var R=Object(w.a)("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),V=["value"],L=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function M(e,n){if(null==e)return e;var t=Math.round(e/n)*n;return Number(t.toFixed(function(e){var n=e.toString().split(".")[1];return n?n.length:0}(n)))}var z=Object(S.a)("span",{name:"MuiRating",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[Object(l.a)({},"& .".concat(R.visuallyHidden),n.visuallyHidden),n.root,n["size".concat(Object(j.a)(t.size))],t.readOnly&&n.readOnly]}})((function(e){var n,t=e.theme,i=e.ownerState;return Object(s.a)((n={display:"inline-flex",position:"relative",fontSize:t.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent"},Object(l.a)(n,"&.".concat(R.disabled),{opacity:t.palette.action.disabledOpacity,pointerEvents:"none"}),Object(l.a)(n,"&.".concat(R.focusVisible," .").concat(R.iconActive),{outline:"1px solid #999"}),Object(l.a)(n,"& .".concat(R.visuallyHidden),d),n),"small"===i.size&&{fontSize:t.typography.pxToRem(18)},"large"===i.size&&{fontSize:t.typography.pxToRem(30)},i.readOnly&&{pointerEvents:"none"})})),k=Object(S.a)("label",{name:"MuiRating",slot:"Label",overridesResolver:function(e,n){return n.label}})((function(e){var n=e.ownerState;return Object(s.a)({cursor:"inherit"},n.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})})),H=Object(S.a)("span",{name:"MuiRating",slot:"Icon",overridesResolver:function(e,n){var t=e.ownerState;return[n.icon,t.iconEmpty&&n.iconEmpty,t.iconFilled&&n.iconFilled,t.iconHover&&n.iconHover,t.iconFocus&&n.iconFocus,t.iconActive&&n.iconActive]}})((function(e){var n=e.theme,t=e.ownerState;return Object(s.a)({display:"flex",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest}),pointerEvents:"none"},t.iconActive&&{transform:"scale(1.2)"},t.iconEmpty&&{color:n.palette.action.disabled})})),E=Object(S.a)("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:function(e){return Object(S.c)(e)&&"iconActive"!==e},overridesResolver:function(e,n){var t=e.iconActive;return[n.decimal,t&&n.iconActive]}})((function(e){var n=e.iconActive;return Object(s.a)({position:"relative"},n&&{transform:"scale(1.2)"})}));function I(e){var n=Object(r.a)(e,V);return Object(y.jsx)("span",Object(s.a)({},n))}function T(e){var n=e.classes,t=e.disabled,i=e.emptyIcon,o=e.focus,c=e.getLabelText,l=e.highlightSelectedOnly,r=e.hover,d=e.icon,b=e.IconContainerComponent,v=e.isActive,j=e.itemValue,O=e.labelProps,f=e.name,m=e.onBlur,h=e.onChange,g=e.onClick,x=e.onFocus,C=e.readOnly,S=e.ownerState,F=e.ratingValue,w=l?j===F:j<=F,A=j<=r,R=j<=o,V=j===e.ratingValueRounded,L=Object(p.a)(),M=Object(y.jsx)(H,{as:b,value:j,className:Object(u.a)(n.icon,w?n.iconFilled:n.iconEmpty,A&&n.iconHover,R&&n.iconFocus,v&&n.iconActive),ownerState:Object(s.a)({},S,{iconEmpty:!w,iconFilled:w,iconHover:A,iconFocus:R,iconActive:v}),children:i&&!w?i:d});return C?Object(y.jsx)("span",Object(s.a)({},O,{children:M})):Object(y.jsxs)(a.Fragment,{children:[Object(y.jsxs)(k,Object(s.a)({ownerState:Object(s.a)({},S,{emptyValueFocused:void 0}),htmlFor:L},O,{children:[M,Object(y.jsx)("span",{className:n.visuallyHidden,children:c(j)})]})),Object(y.jsx)("input",{className:n.visuallyHidden,onFocus:x,onBlur:m,onChange:h,onClick:g,disabled:t,value:j,id:L,type:"radio",name:f,checked:V})]})}var N=Object(y.jsx)(g,{fontSize:"inherit"}),B=Object(y.jsx)(x,{fontSize:"inherit"});function P(e){return"".concat(e," Star").concat(1!==e?"s":"")}var X=a.forwardRef((function(e,n){var t=Object(C.a)({name:"MuiRating",props:e}),o=t.className,c=t.defaultValue,l=void 0===c?null:c,d=t.disabled,h=void 0!==d&&d,g=t.emptyIcon,x=void 0===g?B:g,S=t.emptyLabelText,F=void 0===S?"Empty":S,w=t.getLabelText,R=void 0===w?P:w,V=t.highlightSelectedOnly,H=void 0!==V&&V,X=t.icon,D=void 0===X?N:X,J=t.IconContainerComponent,W=void 0===J?I:J,q=t.max,Y=void 0===q?5:q,G=t.name,K=t.onChange,Q=t.onChangeActive,U=t.onMouseLeave,Z=t.onMouseMove,$=t.precision,_=void 0===$?1:$,ee=t.readOnly,ne=void 0!==ee&&ee,te=t.size,ie=void 0===te?"medium":te,ae=t.value,oe=Object(r.a)(t,L),ce=Object(p.a)(G),le=Object(O.a)({controlled:ae,default:l,name:"Rating"}),re=Object(i.a)(le,2),se=re[0],ue=re[1],de=M(se,_),be=Object(v.a)(),ve=a.useState({hover:-1,focus:-1}),je=Object(i.a)(ve,2),pe=je[0],Oe=pe.hover,fe=pe.focus,me=je[1],he=de;-1!==Oe&&(he=Oe),-1!==fe&&(he=fe);var ye=Object(f.a)(),ge=ye.isFocusVisibleRef,xe=ye.onBlur,Ce=ye.onFocus,Se=ye.ref,Fe=a.useState(!1),we=Object(i.a)(Fe,2),Ae=we[0],Re=we[1],Ve=a.useRef(),Le=Object(m.a)(Se,Ve),Me=Object(m.a)(Le,n),ze=function(e){var n=""===e.target.value?null:parseFloat(e.target.value);-1!==Oe&&(n=Oe),ue(n),K&&K(e,n)},ke=function(e){0===e.clientX&&0===e.clientY||(me({hover:-1,focus:-1}),ue(null),K&&parseFloat(e.target.value)===de&&K(e,null))},He=function(e){Ce(e),!0===ge.current&&Re(!0);var n=parseFloat(e.target.value);me((function(e){return{hover:e.hover,focus:n}}))},Ee=function(e){if(-1===Oe){xe(e),!1===ge.current&&Re(!1);me((function(e){return{hover:e.hover,focus:-1}}))}},Ie=a.useState(!1),Te=Object(i.a)(Ie,2),Ne=Te[0],Be=Te[1],Pe=Object(s.a)({},t,{defaultValue:l,disabled:h,emptyIcon:x,emptyLabelText:F,emptyValueFocused:Ne,focusVisible:Ae,getLabelText:R,icon:D,IconContainerComponent:W,max:Y,precision:_,readOnly:ne,size:ie}),Xe=function(e){var n=e.classes,t=e.size,i=e.readOnly,a=e.disabled,o=e.emptyValueFocused,c=e.focusVisible,l={root:["root","size".concat(Object(j.a)(t)),a&&"disabled",c&&"focusVisible",i&&"readyOnly"],label:["label","pristine"],labelEmptyValue:[o&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Object(b.a)(l,A,n)}(Pe);return Object(y.jsxs)(z,Object(s.a)({ref:Me,onMouseMove:function(e){Z&&Z(e);var n,t=Ve.current,i=t.getBoundingClientRect(),a=i.right,o=i.left,c=t.firstChild.getBoundingClientRect().width;n="rtl"===be.direction?(a-e.clientX)/(c*Y):(e.clientX-o)/(c*Y);var l=M(Y*n+_/2,_);l=function(e,n,t){return e<n?n:e>t?t:e}(l,_,Y),me((function(e){return e.hover===l&&e.focus===l?e:{hover:l,focus:l}})),Re(!1),Q&&Oe!==l&&Q(e,l)},onMouseLeave:function(e){U&&U(e);me({hover:-1,focus:-1}),Q&&-1!==Oe&&Q(e,-1)},className:Object(u.a)(Xe.root,o),ownerState:Pe,role:ne?"img":null,"aria-label":ne?R(he):null},oe,{children:[Array.from(new Array(Y)).map((function(e,n){var t=n+1,i={classes:Xe,disabled:h,emptyIcon:x,focus:fe,getLabelText:R,highlightSelectedOnly:H,hover:Oe,icon:D,IconContainerComponent:W,name:ce,onBlur:Ee,onChange:ze,onClick:ke,onFocus:He,ratingValue:he,ratingValueRounded:de,readOnly:ne,ownerState:Pe},a=t===Math.ceil(he)&&(-1!==Oe||-1!==fe);if(_<1){var o=Array.from(new Array(1/_));return Object(y.jsx)(E,{className:Object(u.a)(Xe.decimal,a&&Xe.iconActive),ownerState:Pe,iconActive:a,children:o.map((function(e,n){var a=M(t-1+(n+1)*_,_);return Object(y.jsx)(T,Object(s.a)({},i,{isActive:!1,itemValue:a,labelProps:{style:o.length-1===n?{}:{width:a===he?"".concat((n+1)*_*100,"%"):"0%",overflow:"hidden",position:"absolute"}}}),a)}))},t)}return Object(y.jsx)(T,Object(s.a)({},i,{isActive:a,itemValue:t}),t)})),!ne&&!h&&Object(y.jsxs)(k,{className:Object(u.a)(Xe.label,Xe.labelEmptyValue),ownerState:Pe,children:[Object(y.jsx)("input",{className:Xe.visuallyHidden,value:"",id:"".concat(ce,"-empty"),type:"radio",name:ce,checked:null==de,onFocus:function(){return Be(!0)},onBlur:function(){return Be(!1)},onChange:ze}),Object(y.jsx)("span",{className:Xe.visuallyHidden,children:F})]})]}))})),D=t(36),J=t(65),W=t(56),q=Object(W.a)((function(){return t.e(9).then(t.bind(null,217))}));n.default=function(){var e=Object(a.useContext)(D.b),n=e.selectedCard,t=e.addCardToFinish,l=e.resetCards,r=e.finishedCards,s=Object(a.useState)(0),u=Object(i.a)(s,2),d=u[0],b=u[1],v=Object(a.useState)(!1),j=Object(i.a)(v,2),p=j[0],O=j[1],f=Object(a.useCallback)((function(){t(n.id,d)}),[n,t,d]),m=Object(a.useCallback)((function(){t(n.id,0)}),[t,n]);return n?Object(y.jsxs)(o.a,{sx:{width:"80vw",minHeight:"100vh",backgroundColor:"#fff"},p:4,children:[Object.keys(r).length>0&&Object(y.jsx)(c.a,{variant:"contained",color:"info",onClick:l,children:"Reset finished list"}),Object(y.jsx)(c.a,{variant:"contained",onClick:function(){O(!0)},sx:{marginLeft:1},children:"Skip"}),Object(y.jsx)(q,{}),Object(y.jsxs)(o.a,{display:"flex",alignItems:"center",children:[Object(y.jsx)(X,{name:"simple-controlled",value:d,onChange:function(e,n){b(n)}}),Object(y.jsx)("span",{style:{margin:"0 5px"}}),Object(y.jsx)(c.a,{onClick:f,disabled:!d,variant:"contained",children:"Save result"})]}),Object(y.jsx)(J.a,{title:"Do you wanna skip question?",confirm:"Skip",cancel:"Wait, I know answer",open:p,handleClose:function(){O(!1)},handleConfirm:m})]}):null}}}]);
//# sourceMappingURL=8.4366d9fb.chunk.js.map