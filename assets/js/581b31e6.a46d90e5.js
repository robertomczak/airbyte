"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[23642],{12907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={},o="Issues & Pull Requests",l={unversionedId:"contributing-to-airbyte/issues-and-pull-requests",id:"contributing-to-airbyte/issues-and-pull-requests",title:"Issues & Pull Requests",description:"Titles",source:"@site/../docs/contributing-to-airbyte/issues-and-pull-requests.md",sourceDirName:"contributing-to-airbyte",slug:"/contributing-to-airbyte/issues-and-pull-requests",permalink:"/contributing-to-airbyte/issues-and-pull-requests",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/contributing-to-airbyte/issues-and-pull-requests.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Code of Conduct",permalink:"/contributing-to-airbyte/code-of-conduct"},next:{title:"Developing Locally",permalink:"/contributing-to-airbyte/developing-locally"}},s={},u=[{value:"Titles",id:"titles",level:2},{value:"Pull Request Title Convention",id:"pull-request-title-convention",level:3},{value:"Descriptions",id:"descriptions",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"issues--pull-requests"},"Issues & Pull Requests"),(0,a.kt)("h2",{id:"titles"},"Titles"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Describe outputs, not implementation"),": An issue or PR title should describe the desired end result, not the implementation. The exception is child issues/subissues of an epic. ",(0,a.kt)("strong",{parentName:"p"},"Be specific about the domain"),". Airbyte operates a monorepo, so being specific about what is being changed in the PR or issue title is important."),(0,a.kt)("p",null,"Some examples: ",(0,a.kt)("em",{parentName:"p"},"subpar issue title"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'Remove airbyteCdk.dependsOn("unrelatedPackage")'),". This describes a solution not a problem."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"good issue title"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Building the Airbyte Python CDK should not build unrelated packages"),". Describes desired end state and the intent is understandable without reading the full issue."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"subpar PR title"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Update tests"),". Which tests? What was the update?"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"good PR title"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Source MySQL: update acceptance tests to connect to SSL-enabled database"),". Specific about the domain and change that was made."),(0,a.kt)("h3",{id:"pull-request-title-convention"},"Pull Request Title Convention"),(0,a.kt)("p",null,"When creating a pull request follow the naming conventions depending on the change being made.\nIn general the pull request title starts with an emoji with the connector you're doing the changes, eg (\u2728 Source E-Commerce: add new stream ",(0,a.kt)("inlineCode",{parentName:"p"},"Users"),").\nAirbyte uses this pattern to automatically assign team reviews and build the product release notes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Pull Request Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Emoji"),(0,a.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"New Connector (Source or Destination)"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83c\udf89"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83c\udf89 New Destination: Database")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Add a feature to an existing connector"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2728"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2728 Source E-Commerce: add new stream ",(0,a.kt)("inlineCode",{parentName:"td"},"Users"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fix a bug"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udc1b"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udc1b Source E-Commerce: fix start date parameter in spec")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Documentation (updates or new entries)"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udcdd"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udcdd Fix Database connector changelog")))),(0,a.kt)("p",null,"Any refactors, cleanups, etc.. that are not visible improvements to the user should not have emojis."),(0,a.kt)("p",null,"If you're code change is doing more than one change type at once we strongly recommend to break into multiple pull requests. It helps us to review and merge your contribution."),(0,a.kt)("h2",{id:"descriptions"},"Descriptions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Context"),": Provide enough information ","(","or a link to enough information",")"," in the description so team members with no context can understand what the issue or PR is trying to accomplish. This usually means you should include two things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Some background information motivating the problem")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A description of the problem itself")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Good places to start reading and file changes that can be skipped"),(0,a.kt)("p",{parentName:"li"},"Some examples:"))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"insufficient context"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Create an OpenAPI to JSON schema generator"),". Unclear what the value or problem being solved here is."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"good context"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"When creating or updating connectors, we spend a lot of time manually transcribing JSON Schema files based on OpenAPI docs. This is ncessary because OpenAPI and JSON schema are very similar but not perfectly compatible. This process is automatable. Therefore we should create a program which converts from OpenAPI to JSONSchema format.\n")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);