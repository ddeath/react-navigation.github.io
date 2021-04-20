(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{481:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(8),a=(t(0),t(522)),i={id:"custom-android-back-button-handling",title:"Custom Android back button behavior",sidebar_label:"Custom Android back button behavior"},s={unversionedId:"custom-android-back-button-handling",id:"version-1.x/custom-android-back-button-handling",isDocsHomePage:!1,title:"Custom Android back button behavior",description:"By default, when user presses the Android hardware back button, react-navigation will pop a screen or exit the app if there are no screens to pop. This is a sensible default behavior, but there are situations when you might want to implement custom handling.",source:"@site/versioned_docs/version-1.x/custom-android-back-button-handling.md",slug:"/custom-android-back-button-handling",permalink:"/docs/1.x/custom-android-back-button-handling",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/custom-android-back-button-handling.md",version:"1.x",sidebar_label:"Custom Android back button behavior",sidebar:"version-1.x/docs",previous:{title:"Different status bar configuration based on route",permalink:"/docs/1.x/status-bar"},next:{title:"Access the navigation prop from any component",permalink:"/docs/1.x/connecting-navigation-prop"}},c=[],u={toc:c};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"By default, when user presses the Android hardware back button, react-navigation will pop a screen or exit the app if there are no screens to pop. This is a sensible default behavior, but there are situations when you might want to implement custom handling."),Object(a.b)("p",null,'Take, for example, a screen where user is selecting items in a list, and a "selection mode" is active. On a back button press, you would first want the "selection mode" to be deactivated, and the screen should be popped only on the second back button press. The following code snippet demonstrates the situation. We make use of ',Object(a.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/backhandler.html"},Object(a.b)("inlineCode",{parentName:"a"},"BackHandler"))," which comes with react-native to add our custom ",Object(a.b)("inlineCode",{parentName:"p"},"hardwareBackPress")," listener."),Object(a.b)("p",null,"Returning ",Object(a.b)("inlineCode",{parentName:"p"},"true")," from ",Object(a.b)("inlineCode",{parentName:"p"},"onBackButtonPressAndroid")," denotes that we have handled the event, and react-navigation's lister will not get called, thus not popping the screen. Returning ",Object(a.b)("inlineCode",{parentName:"p"},"false")," will cause the event to bubble up and react-navigation's listener will pop the screen."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"class ScreenWithCustomBackBehavior extends React.Component {\n  componentDidMount() {\n    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);\n  }\n\n  componentWillUnmount() {\n    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);\n  }\n\n  onBackButtonPressAndroid = () => {\n    if (this.isSelectionModeEnabled()) {\n      this.disableSelectionMode();\n      return true;\n    } else {\n      return false;\n    }\n  };\n}\n")),Object(a.b)("p",null,"The presented approach will work well for screens that are shown in a ",Object(a.b)("inlineCode",{parentName:"p"},"StackNavigator"),". Custom back button handling in other situations may not be supported at the moment (eg. A known case when this does not work is when you want to handle back button press in an open drawer. PRs for such use cases are welcome!)"))}d.isMDXComponent=!0},522:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),d=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=d(t),b=r,h=l["".concat(i,".").concat(b)]||l[b]||p[b]||a;return t?o.a.createElement(h,s(s({ref:n},u),{},{components:t})):o.a.createElement(h,s({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);