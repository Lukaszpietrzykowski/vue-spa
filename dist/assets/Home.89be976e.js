import{d as G,p as J,u as _,c as a,a as y,g as L,I as g,m as B,V as I,b as S,R as K,e as Z,f as $,h as W,i as X,j as Y,k as ee,l as ae,n as te,o as se,q as ie,r as ue,s as ne,t as le,v as re,w as ce,x as de,y as oe,z as me,A as ve,B as pe,C as ge,D as be,E as x,F as fe,G as he,H as qe,L as ke,J as Pe,_ as Se,K as _e,M as ye,N as i,O as Ae,P as r,Q as k}from"./index.32cfe285.js";const v=G({name:"VCardActions",setup(e,l){let{slots:s}=l;return J({VBtn:{variant:"text"}}),_(()=>{var t;return a("div",{class:"v-card-actions"},[(t=s.default)==null?void 0:t.call(s)])}),{}}}),Ve=y("v-card-subtitle"),Ce=y("v-card-title"),Ie=L()({name:"VCardItem",props:{appendAvatar:String,appendIcon:g,prependAvatar:String,prependIcon:g,subtitle:String,title:String,...B()},setup(e,l){let{slots:s}=l;return _(()=>{var d;const t=!!(e.prependAvatar||e.prependIcon),b=!!(t||s.prepend),c=!!(e.appendAvatar||e.appendIcon),f=!!(c||s.append),h=!!(e.title||s.title),q=!!(e.subtitle||s.subtitle);return a("div",{class:"v-card-item"},[b&&a("div",{key:"prepend",class:"v-card-item__prepend"},[s.prepend?a(S,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},s.prepend):t&&a(I,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),a("div",{class:"v-card-item__content"},[h&&a(Ce,{key:"title"},{default:()=>{var u,n;return[(n=(u=s.title)==null?void 0:u.call(s))!=null?n:e.title]}}),q&&a(Ve,{key:"subtitle"},{default:()=>{var u,n;return[(n=(u=s.subtitle)==null?void 0:u.call(s))!=null?n:e.subtitle]}}),(d=s.default)==null?void 0:d.call(s)]),f&&a("div",{key:"append",class:"v-card-item__append"},[s.append?a(S,{key:"append-defaults",disabled:!c,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},s.append):c&&a(I,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),p=y("v-card-text"),P=L()({name:"VCard",directives:{Ripple:K},props:{appendAvatar:String,appendIcon:g,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:g,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...Z(),...$(),...B(),...W(),...X(),...Y(),...ee(),...ae(),...te(),...se(),...ie(),...ue({variant:"elevated"})},setup(e,l){let{attrs:s,slots:t}=l;const{themeClasses:b}=ne(e),{borderClasses:c}=le(e),{colorClasses:f,colorStyles:h,variantClasses:q}=re(e),{densityClasses:d}=ce(e),{dimensionStyles:u}=de(e),{elevationClasses:n}=oe(e),{loaderClasses:Q}=me(e),{locationStyles:T}=ve(e),{positionClasses:N}=pe(e),{roundedClasses:D}=ge(e),o=be(e,s),M=x(()=>e.link!==!1&&o.isLink.value),m=x(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return _(()=>{const O=M.value?"a":e.tag,R=!!(t.title||e.title),U=!!(t.subtitle||e.subtitle),E=R||U,w=!!(t.append||e.appendAvatar||e.appendIcon),H=!!(t.prepend||e.prependAvatar||e.prependIcon),F=!!(t.image||e.image),j=E||H||w,z=!!(t.text||e.text);return fe(a(O,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":m.value},b.value,c.value,f.value,d.value,n.value,Q.value,N.value,D.value,q.value],style:[h.value,u.value,T.value],href:o.href.value,onClick:m.value&&o.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var A;return[F&&a("div",{key:"image",class:"v-card__image"},[t.image?a(S,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(qe,{key:"image-img",cover:!0,src:e.image},null)]),a(ke,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),j&&a(Ie,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),z&&a(p,{key:"text"},{default:()=>{var V,C;return[(C=(V=t.text)==null?void 0:V.call(t))!=null?C:e.text]}}),(A=t.default)==null?void 0:A.call(t),t.actions&&a(v,null,{default:t.actions}),Pe(m.value,"v-card")]}}),[[he("ripple"),m.value&&e.ripple]])}),{}}}),xe={},Le={class:"home pa-6"},Be=Ae("h1",null,"Zadanie 3 Page",-1);function Qe(e,l){return _e(),ye("div",Le,[Be,a(P,{elevation:"3",class:"ma-6",title:"Text1"},{default:i(()=>[a(p,null,{default:i(()=>[r(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat pretium nunc quis sagittis. Vestibulum vitae consequat turpis. Phasellus a magna erat. Nam bibendum lorem nec rhoncus ultricies. Sed ut dui lectus. Suspendisse eleifend venenatis nibh nec scelerisque. Pellentesque ac feugiat massa. Maecenas facilisis sed dolor vel vestibulum. Quisque vulputate elit nec tortor consectetur posuere. Phasellus varius leo sed sapien bibendum rhoncus. Aliquam ut commodo lectus, sit amet gravida augue. Suspendisse pharetra arcu quam, at placerat tellus sagittis sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut consectetur mauris enim, at laoreet ligula congue et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat pretium nunc quis sagittis. Vestibulum vitae consequat turpis. Phasellus a magna erat. Nam bibendum lorem nec rhoncus ultricies. Sed ut dui lectus. Suspendisse eleifend venenatis nibh nec scelerisque. Pellentesque ac feugiat massa. Maecenas facilisis sed dolor vel vestibulum. Quisque vulputate elit nec tortor consectetur posuere. Phasellus varius leo sed sapien bibendum rhoncus. Aliquam ut commodo lectus, sit amet gravida augue. Suspendisse pharetra arcu quam, at placerat tellus sagittis sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut consectetur mauris enim, at laoreet ligula congue et. ")]),_:1}),a(v,null,{default:i(()=>[a(k,{to:"/card1",color:"blue-darken-1",variant:"outlined"},{default:i(()=>[r("Click me")]),_:1})]),_:1})]),_:1}),a(P,{elevation:"3",class:"ma-6",title:"Text2"},{default:i(()=>[a(p,null,{default:i(()=>[r(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat pretium nunc quis sagittis. Vestibulum vitae consequat turpis. Phasellus a magna erat. Nam bibendum lorem nec rhoncus ultricies. Sed ut dui lectus. Suspendisse eleifend venenatis nibh nec scelerisque. Pellentesque ac feugiat massa. Maecenas facilisis sed dolor vel vestibulum. Quisque vulputate elit nec tortor consectetur posuere. Phasellus varius leo sed sapien bibendum rhoncus. Aliquam ut commodo lectus, sit amet gravida augue. Suspendisse pharetra arcu quam, at placerat tellus sagittis sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut consectetur mauris enim, at laoreet ligula congue et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat pretium nunc quis sagittis. Vestibulum vitae consequat turpis. Phasellus a magna erat. Nam bibendum lorem nec rhoncus ultricies. Sed ut dui lectus. Suspendisse eleifend venenatis nibh nec scelerisque. Pellentesque ac feugiat massa. Maecenas facilisis sed dolor vel vestibulum. Quisque vulputate elit nec tortor consectetur posuere. Phasellus varius leo sed sapien bibendum rhoncus. Aliquam ut commodo lectus, sit amet gravida augue. Suspendisse pharetra arcu quam, at placerat tellus sagittis sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut consectetur mauris enim, at laoreet ligula congue et. ")]),_:1}),a(v,null,{default:i(()=>[a(k,{to:"/card1",color:"blue-darken-1",variant:"outlined"},{default:i(()=>[r("Click me")]),_:1})]),_:1})]),_:1}),a(P,{elevation:"3",class:"ma-6",title:"Text3"},{default:i(()=>[a(p,null,{default:i(()=>[r(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat pretium nunc quis sagittis. Vestibulum vitae consequat turpis. Phasellus a magna erat. Nam bibendum lorem nec rhoncus ultricies. Sed ut dui lectus. Suspendisse eleifend venenatis nibh nec scelerisque. Pellentesque ac feugiat massa. Maecenas facilisis sed dolor vel vestibulum. Quisque vulputate elit nec tortor consectetur posuere. Phasellus varius leo sed sapien bibendum rhoncus. Aliquam ut commodo lectus, sit amet gravida augue. Suspendisse pharetra arcu quam, at placerat tellus sagittis sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut consectetur mauris enim, at laoreet ligula congue et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat pretium nunc quis sagittis. Vestibulum vitae consequat turpis. Phasellus a magna erat. Nam bibendum lorem nec rhoncus ultricies. Sed ut dui lectus. Suspendisse eleifend venenatis nibh nec scelerisque. Pellentesque ac feugiat massa. Maecenas facilisis sed dolor vel vestibulum. Quisque vulputate elit nec tortor consectetur posuere. Phasellus varius leo sed sapien bibendum rhoncus. Aliquam ut commodo lectus, sit amet gravida augue. Suspendisse pharetra arcu quam, at placerat tellus sagittis sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut consectetur mauris enim, at laoreet ligula congue et. ")]),_:1}),a(v,null,{default:i(()=>[a(k,{to:"/card1",color:"blue-darken-1",variant:"outlined"},{default:i(()=>[r("Click me")]),_:1})]),_:1})]),_:1})])}const Ne=Se(xe,[["render",Qe]]);export{Ne as default};
