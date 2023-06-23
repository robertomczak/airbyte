"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[82566],{79364:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={},p="Amazon Ads",o={unversionedId:"integrations/sources/amazon-ads",id:"integrations/sources/amazon-ads",title:"Amazon Ads",description:"This page contains the setup guide and reference information for the Amazon Ads source connector.",source:"@site/../docs/integrations/sources/amazon-ads.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/amazon-ads",permalink:"/integrations/sources/amazon-ads",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/amazon-ads.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Alpha Vantage",permalink:"/integrations/sources/alpha-vantage"},next:{title:"Amazon Seller Partner",permalink:"/integrations/sources/amazon-seller-partner"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up Amazon Ads",id:"step-1-set-up-amazon-ads",level:3},{value:"Step 2: Set up the Amazon Ads connector in Airbyte",id:"step-2-set-up-the-amazon-ads-connector-in-airbyte",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Connector-specific features and highlights",id:"connector-specific-features-and-highlights",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"CHANGELOG",id:"changelog",level:2}],s={toc:d},m="wrapper";function k(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"amazon-ads"},"Amazon Ads"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Amazon Ads source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Client ID"),(0,n.kt)("li",{parentName:"ul"},"Client Secret"),(0,n.kt)("li",{parentName:"ul"},"Refresh Token"),(0,n.kt)("li",{parentName:"ul"},"Region"),(0,n.kt)("li",{parentName:"ul"},"Start Date (Optional)"),(0,n.kt)("li",{parentName:"ul"},"Profile IDs (Optional)")),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up-amazon-ads"},"Step 1: Set up Amazon Ads"),(0,n.kt)("p",null,"Create an ",(0,n.kt)("a",{parentName:"p",href:"https://www.amazon.com"},"Amazon user")," with access to ",(0,n.kt)("a",{parentName:"p",href:"https://advertising.amazon.com"},"Amazon Ads account"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:"),"\nTo use the ",(0,n.kt)("a",{parentName:"p",href:"https://advertising.amazon.com/API/docs/en-us"},"Amazon Ads API"),", you must first complete the ",(0,n.kt)("a",{parentName:"p",href:"https://advertising.amazon.com/API/docs/en-us/setting-up/overview"},"onboarding process"),". The onboarding process has several steps and may take several days to complete. After completing all steps you will have to get Amazon client application ",(0,n.kt)("inlineCode",{parentName:"p"},"Client ID"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Client Secret")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Refresh Token"),"."),(0,n.kt)("h3",{id:"step-2-set-up-the-amazon-ads-connector-in-airbyte"},"Step 2: Set up the Amazon Ads connector in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"Amazon Ads")," from the Source type dropdown and enter a name for this connector."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Authenticate your Amazon Ads account"),"."),(0,n.kt)("li",{parentName:"ol"},"Log in and Authorize to the Amazon account."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Region")," to pull data from ",(0,n.kt)("strong",{parentName:"li"},"North America (NA)"),", ",(0,n.kt)("strong",{parentName:"li"},"Europe (EU)"),", ",(0,n.kt)("strong",{parentName:"li"},"Far East (FE)"),". See ",(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/info/api-overview#api-endpoints"},"docs")," for more details."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Start Date (Optional)")," is used for generating reports starting from the specified start date. Should be in YYYY-MM-DD format and not more than 60 days in the past. If not specified today's date is used. The date is treated in the timezone of the processed profile."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Profile IDs (Optional)")," you want to fetch data for. See ",(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/concepts/authorization/profiles"},"docs")," for more details."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Client ID")," of your Amazon Ads developer application. See ",(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/setting-up/overview"},"onboarding process")," for more details."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Client Secret")," of your Amazon Ads developer application. See ",(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/setting-up/overview"},"onboarding process")," for more details."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Refresh Token"),". See ",(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/setting-up/overview"},"onboarding process")," for more details.")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Amazon Ads source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts/#connection-sync-mode"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full Refresh"),(0,n.kt)("li",{parentName:"ul"},"Incremental")),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"This source is capable of syncing the following streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/reference/2/profiles#/Profiles"},"Profiles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Campaigns"},"Sponsored Brands Campaigns")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Ad%20groups"},"Sponsored Brands Ad groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Keywords"},"Sponsored Brands Keywords")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Campaigns"},"Sponsored Display Campaigns")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Ad%20groups"},"Sponsored Display Ad groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Product%20ads"},"Sponsored Display Product Ads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Targeting"},"Sponsored Display Targetings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi/prod#/BudgetRules/GetSDBudgetRulesForAdvertiser"},"Sponsored Display Budget Rules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Campaigns"},"Sponsored Products Campaigns")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Ad%20groups"},"Sponsored Products Ad groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Keywords"},"Sponsored Products Keywords")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Negative%20keywords"},"Sponsored Products Negative keywords")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Negative%20keywords"},"Sponsored Products Campaign Negative keywords")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Product%20ads"},"Sponsored Products Ads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Product%20targeting"},"Sponsored Products Targetings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/reference/sponsored-brands/2/reports"},"Brands Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/reference/sponsored-brands/2/reports"},"Brand Video Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Reports"},"Display Reports")," (Contextual targeting only)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Reports"},"Products Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/amazon-attribution-prod-3p/#/"},"Attribution Reports"))),(0,n.kt)("h2",{id:"connector-specific-features-and-highlights"},"Connector-specific features and highlights"),(0,n.kt)("p",null,"All the reports are generated relative to the target profile' timezone."),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"Information about expected report generation waiting time you may find ",(0,n.kt)("a",{parentName:"p",href:"https://advertising.amazon.com/API/docs/en-us/get-started/developer-notes"},"here"),"."),(0,n.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"float"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"date")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"date"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"datetime")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"datetime"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object"))))),(0,n.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-06-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25412"},"25412")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add sponsored_product_campaign_negative_keywords, sponsored_display_budget_rules streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.0.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-05-31"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25874"},"25874")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Type ",(0,n.kt)("inlineCode",{parentName:"td"},"portfolioId")," as integer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-04-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25412"},"25412")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add missing reporting metrics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-05-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25913"},"25913")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Small schema fixes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-05-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25885"},"25885")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve error handling for attribution_report(s) streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-05-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25792"},"25792")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add availability strategy for basic streams (not including report streams)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-04-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25146"},"25146")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Validate pk for reports when expected pk is not returned")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22355"},"22355")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate ",(0,n.kt)("inlineCode",{parentName:"td"},"products_report")," stream to API v3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18677"},"18677")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add optional config report_record_types")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/21677"},"21677")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix bug with non-unique primary keys in report streams. Add asins_keywords and asins_targets")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.29"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22038"},"22038")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set ",(0,n.kt)("inlineCode",{parentName:"td"},"AvailabilityStrategy")," for streams explicitly to ",(0,n.kt)("inlineCode",{parentName:"td"},"None"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.28"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19491"},"19491")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add option to customize look back window value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.27"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/21082"},"21082")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Fix bug with handling: "Report date is too far in the past." - partial revert of #20662')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.26"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20662"},"20662")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Fix bug with handling: "Report date is too far in the past."')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.25"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18985"},"18985")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Remove "report_wait_timeout", "report_generation_max_retries" from config')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17475"},"17475")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add filters for state on brand, product and display campaigns")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.23"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16342"},"16342")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add attribution reports")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17304"},"17304")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream state.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.21"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17202"},"17202")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improved handling if known reporting errors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16453"},"16453")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Increase ",(0,n.kt)("inlineCode",{parentName:"td"},"report_wait_timeout")," 30 -> 60 minutes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.19"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-31"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16191"},"16191")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improved connector's input configuration validation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15951"},"15951")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Skip API error "Tactic T00020 is not supported for report API in marketplace A1C3SOZRARQ6R3."')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15921"},"15921")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Skip API error "Report date is too far in the past."')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15822"},"15822")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set default value for 'region' if needed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15816"},"15816")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update STATE of incremental sync if no records")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15637"},"15637")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Generate slices by lazy evaluation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15469"},"15469")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define primary_key for all report streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15031"},"15031")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve report streams date-range generation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15042"},"15042")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update ",(0,n.kt)("inlineCode",{parentName:"td"},"additionalProperties")," field to true from schemas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12541"},"12541")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve documentation for Beta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12482"},"12482")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update input configuration copy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11730"},"11730")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update fields in source-connectors specifications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11659"},"11659")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add adId to products report")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11430"},"11430")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added support OAuth2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10513"},"10513")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Increasing REPORT_WAIT_TIMEOUT for supporting report generation which takes longer time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8388"},"8388")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add retry if recoverable error  occured for reporting stream processing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6461"},"6367")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add option to pull data for different regions. Add option to choose profiles we want to pull data. Add lookback")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6367"},"6367")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add seller and vendor filters to profiles stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5023"},"5023")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial version")))))}k.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),d=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(a),g=n,f=m["".concat(l,".").concat(g)]||m[g]||k[g]||i;return a?r.createElement(f,p(p({ref:e},s),{},{components:a})):r.createElement(f,p({ref:e},s))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,p=new Array(i);p[0]=g;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[m]="string"==typeof t?t:n,p[1]=o;for(var d=2;d<i;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);