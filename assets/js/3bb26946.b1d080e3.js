"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[95326],{54785:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const o={},i="Manage schema changes",c={unversionedId:"cloud/managing-airbyte-cloud/manage-schema-changes",id:"cloud/managing-airbyte-cloud/manage-schema-changes",title:"Manage schema changes",description:"Once every 24 hours, Airbyte checks for changes in your source schema and allows you to review the changes and fix breaking changes. This process helps ensure accurate and efficient data syncs, minimizing errors and saving you time and effort in managing your data pipelines.",source:"@site/../docs/cloud/managing-airbyte-cloud/manage-schema-changes.md",sourceDirName:"cloud/managing-airbyte-cloud",slug:"/cloud/managing-airbyte-cloud/manage-schema-changes",permalink:"/cloud/managing-airbyte-cloud/manage-schema-changes",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/cloud/managing-airbyte-cloud/manage-schema-changes.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Manage syncs",permalink:"/cloud/managing-airbyte-cloud/edit-stream-configuration"},next:{title:"Manage data residency",permalink:"/cloud/managing-airbyte-cloud/manage-data-residency"}},s={},l=[{value:"Review non-breaking schema changes",id:"review-non-breaking-schema-changes",level:2},{value:"Fix breaking schema changes",id:"fix-breaking-schema-changes",level:2},{value:"Manually refresh the source schema",id:"manually-refresh-the-source-schema",level:3}],m={toc:l},p="wrapper";function h(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-schema-changes"},"Manage schema changes"),(0,r.kt)("p",null,"Once every 24 hours, Airbyte checks for changes in your source schema and allows you to review the changes and fix breaking changes. This process helps ensure accurate and efficient data syncs, minimizing errors and saving you time and effort in managing your data pipelines."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Schema changes are flagged in your connection but are not propagated to your destination.\n")),(0,r.kt)("h2",{id:"review-non-breaking-schema-changes"},"Review non-breaking schema changes"),(0,r.kt)("p",null,"To review non-breaking schema changes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("a",{parentName:"p",href:"http://cloud.airbyte.com/"},"Airbyte Cloud")," dashboard, click ",(0,r.kt)("strong",{parentName:"p"},"Connections")," and select the connection with non-breaking changes (indicated by a ",(0,r.kt)("strong",{parentName:"p"},"yellow exclamation mark")," icon).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Review changes"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Refreshed source schema")," dialog displays the changes. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review the changes and click ",(0,r.kt)("strong",{parentName:"p"},"OK")," to close the dialog.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll to the bottom of the page and click ",(0,r.kt)("strong",{parentName:"p"},"Save changes"),"."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"}," By default, Airbyte ignores non-breaking changes and continues syncing. You can configure how Airbyte handles syncs when it detects non-breaking changes by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/managing-airbyte-cloud/edit-stream-configuration"},"editing the stream configuration"),".\n")),(0,r.kt)("h2",{id:"fix-breaking-schema-changes"},"Fix breaking schema changes"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Breaking changes can only occur in the ",(0,r.kt)("strong",{parentName:"p"},"Cursor")," or ",(0,r.kt)("strong",{parentName:"p"},"Primary key")," fields.\n")),(0,r.kt)("p",null,"To review and fix breaking schema changes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("a",{parentName:"p",href:"http://cloud.airbyte.com/"},"Airbyte Cloud")," dashboard, click ",(0,r.kt)("strong",{parentName:"p"},"Connections")," and select the connection with breaking changes (indicated by a ",(0,r.kt)("strong",{parentName:"p"},"red exclamation mark")," icon).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Review changes"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Refreshed source schema")," dialog displays the changes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review the changes and click ",(0,r.kt)("strong",{parentName:"p"},"OK")," to close the dialog.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the streams table, the stream with a breaking change is highlighted.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fix the breaking change by selecting a new ",(0,r.kt)("strong",{parentName:"p"},"Cursor")," or ",(0,r.kt)("strong",{parentName:"p"},"Primary key"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll to the bottom of the page and click ",(0,r.kt)("strong",{parentName:"p"},"Save changes"),"."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If a connection\u2019s source schema has breaking changes, it will stop syncing. You must review and fix the changes before editing the connection or resuming syncs.\n")),(0,r.kt)("h3",{id:"manually-refresh-the-source-schema"},"Manually refresh the source schema"),(0,r.kt)("p",null,"In addition to Airbyte Cloud\u2019s automatic schema change detection, you can manually refresh the source schema to stay up to date with changes in your schema. "),(0,r.kt)("p",null," To manually refresh the source schema:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("a",{parentName:"p",href:"http://cloud.airbyte.com"},"Airbyte Cloud")," dashboard, click ",(0,r.kt)("strong",{parentName:"p"},"Connections")," and then click the connection you want to refresh.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Replication")," tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Activate the streams you want to sync")," table, click ",(0,r.kt)("strong",{parentName:"p"},"Refresh source schema")," to fetch the schema of your data source.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If there are changes to the schema, you can review them in the ",(0,r.kt)("strong",{parentName:"p"},"Refreshed source schema")," dialog."))))}h.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),l=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(t),g=r,u=p["".concat(s,".").concat(g)]||p[g]||h[g]||o;return t?n.createElement(u,i(i({ref:a},m),{},{components:t})):n.createElement(u,i({ref:a},m))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);