_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{Juyh:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),c=n.n(a),u=o.a.createElement,i=function(e){var t=e.imgSrc;return u("img",{src:t,alt:"picture"})},f=o.a.createElement;t.default=function(){return f("div",{style:{color:"red"}},f("h1",null,"About"),f(i,{imgSrc:"https://robohash.org/$%7Bid%7D?size=300x200"}),f(c.a,{href:"/"},f("button",null,"Home")))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),u=n("elyg"),i=(n("g/15"),n("nOHt")),f=new Map,s=window.IntersectionObserver,l={};var p=function(e,t){var n=a||(s?a=new s((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function h(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],f=o[1],d=(0,i.useRouter)(),v=d&&d.pathname||"/",w=c.default.useMemo((function(){var t=(0,u.resolveHref)(v,e.href);return{href:t,as:e.as?(0,u.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),y=w.href,g=w.as;c.default.useEffect((function(){if(t&&s&&a&&a.tagName&&(0,u.isLocalURL)(y)&&!l[y+"%"+g])return p(a,(function(){h(d,y,g)}))}),[t,a,y,g,d]);var E=e.children,_=e.replace,m=e.shallow,b=e.scroll;"string"===typeof E&&(E=c.default.createElement("a",null,E));var L=c.Children.only(E),J={ref:function(e){e&&f(e),L&&"object"===typeof L&&L.ref&&("function"===typeof L.ref?L.ref(e):"object"===typeof L.ref&&(L.ref.current=e))},onClick:function(e){L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,y,g,_,m,b)}};return t&&(J.onMouseEnter=function(e){(0,u.isLocalURL)(y)&&(L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),h(d,y,g,{priority:!0}))}),!e.passHref&&("a"!==L.type||"href"in L.props)||(J.href=(0,u.addBasePath)(g)),c.default.cloneElement(L,J)};t.default=d},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",0,2,1]]]);