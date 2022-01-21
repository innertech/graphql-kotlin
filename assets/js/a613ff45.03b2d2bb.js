"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},735:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,metadata:()=>p,toc:()=>l,default:()=>c});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"subscriptions",title:"Subscriptions"},p={unversionedId:"schema-generator/execution/subscriptions",id:"version-4.x.x/schema-generator/execution/subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"Subscriptions are supported with graphql-java. See their documentation first:",source:"@site/versioned_docs/version-4.x.x/schema-generator/execution/subscriptions.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/subscriptions",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/subscriptions",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/execution/subscriptions.md",version:"4.x.x",lastUpdatedBy:"jgorman-exp",lastUpdatedAt:1642776214,formattedLastUpdatedAt:"1/21/2022",frontMatter:{id:"subscriptions",title:"Subscriptions"},sidebar:"version-4.x.x/docs",previous:{title:"Optional Undefined Arguments",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/optional-undefined-arguments"},next:{title:"Introspection",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/introspection"}},l=[{value:"Flow Support",id:"flow-support",children:[]},{value:"Subscription Hooks",id:"subscription-hooks",children:[]},{value:"Server Implementation",id:"server-implementation",children:[]}],u={toc:l};function c(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Subscriptions are supported with ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java"),". See their documentation first:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v16/subscriptions/"},"https://www.graphql-java.com/documentation/v16/subscriptions/")),(0,i.kt)("p",null,"To make a function a subscription function you just have to have the return type wrapped in an implementation of a\nreactive-streams ",(0,i.kt)("inlineCode",{parentName:"p"},"Publisher<T>"),". As an example, here is a function that uses Spring WebFlux to return a random number every\nsecond. Since ",(0,i.kt)("inlineCode",{parentName:"p"},"Flux")," is an implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Publisher")," this is a valid method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun counter(): Flux<Int> = Flux.interval(Duration.ofSeconds(1)).map { Random.nextInt() }\n")),(0,i.kt)("p",null,"Then in the ",(0,i.kt)("inlineCode",{parentName:"p"},"toSchema")," method you just have to provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"List<TopLevelObject>")," the same way as queries and mutations\nare provided with the ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriptions")," argument."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"toSchema(\n    config = schemaConfig,\n    queries = queries.toTopLevelObjects(),\n    mutations = mutations.toTopLevelObjects(),\n    subscriptions = subscriptions.toTopLevelObjects()\n)\n")),(0,i.kt)("h3",{id:"flow-support"},"Flow Support"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," provides support for Kotlin ",(0,i.kt)("inlineCode",{parentName:"p"},"Flow")," through ",(0,i.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionExecutionStrategy"),". Thanks to the Kotlin\ncoroutines interoperability, this strategy also works with any ",(0,i.kt)("inlineCode",{parentName:"p"},"Publisher")," and will automatically convert them to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Flow"),"."),(0,i.kt)("h3",{id:"subscription-hooks"},"Subscription Hooks"),(0,i.kt)("h4",{id:"didgeneratesubscriptiontype"},(0,i.kt)("inlineCode",{parentName:"h4"},"didGenerateSubscriptionType")),(0,i.kt)("p",null,"This hook is called after a new subscription type is generated but before it is added to the schema. The other generator hooks are still called so you can add logic for the types and\nvalidation of subscriptions the same as queries and mutations."),(0,i.kt)("h4",{id:"isvalidsubscriptionreturntype"},(0,i.kt)("inlineCode",{parentName:"h4"},"isValidSubscriptionReturnType")),(0,i.kt)("p",null,"This hook is called when generating the functions for each subscription. It allows for changing the rules of what classes can be used as the return type. By default, graphql-java supports ",(0,i.kt)("inlineCode",{parentName:"p"},"org.reactivestreams.Publisher"),"."),(0,i.kt)("p",null,"To effectively use this hook, you should also override the ",(0,i.kt)("inlineCode",{parentName:"p"},"willResolveMonad")," hook, and if you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," you should override the ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQL")," bean to specify a custom subscription execution strategy."),(0,i.kt)("h3",{id:"server-implementation"},"Server Implementation"),(0,i.kt)("p",null,"The server that runs your GraphQL schema will have to support some method for subscriptions, like WebSockets.\n",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a default WebSocket based implementation. See more details in the\n",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/server-subscriptions"},"server documentation"),"."))}c.isMDXComponent=!0}}]);