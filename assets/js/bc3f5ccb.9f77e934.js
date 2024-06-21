"use strict";(self.webpackChunkcity_skylines_wiki=self.webpackChunkcity_skylines_wiki||[]).push([[38],{4174:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=i(6070),t=i(5710);const o={},r="Contributing to City Skylines Mods",l={id:"guidelines/gln-002",title:"Contributing to City Skylines Mods",description:"Welcome",source:"@site/docs/guidelines/gln-002.md",sourceDirName:"guidelines",slug:"/guidelines/gln-002",permalink:"/docs/guidelines/gln-002",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Wiki Repository Guidelines",permalink:"/docs/guidelines/gln-001"},next:{title:"Install and Configure GIT",permalink:"/docs/guides/gui-001"}},d={},c=[{value:"Welcome",id:"welcome",level:2},{value:"Setting Up Your Development Environment",id:"setting-up-your-development-environment",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installation",id:"installation",level:3},{value:"Contributing Guidelines",id:"contributing-guidelines",level:2},{value:"Bug Reports",id:"bug-reports",level:3},{value:"Commits",id:"commits",level:3},{value:"Pull Requests",id:"pull-requests",level:3},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Our Pledge",id:"our-pledge",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"contributing-to-city-skylines-mods",children:"Contributing to City Skylines Mods"}),"\n",(0,s.jsx)(n.h2,{id:"welcome",children:"Welcome"}),"\n",(0,s.jsx)(n.p,{children:"Thank you for your interest in contributing to City Skylines Mods by Tec de Monterrey, campus Quer\xe9taro! We welcome all contributions, including bug fixes, new features, and documentation improvements."}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-your-development-environment",children:"Setting Up Your Development Environment"}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://visualstudio.microsoft.com/vs/preview/vs2022/",children:"Visual Studio 2022"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://unity3d.com/es/get-unity/download/archive",children:"Unity 2020.3.19f1"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://store.steampowered.com/app/255710/Cities_Skylines/",children:"City Skylines"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://store.steampowered.com/about/",children:"Steam"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://steamcommunity.com/workshop/about/?appid=255710",children:"Steam Workshop"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://steamcommunity.com/sharedfiles/filedetails/?id=450877484",children:"Workshop Uploader"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.microsoft.com/en-us/windows/get-windows-10",children:"Windows Machine"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Clone or Fork the repository"}),"\n",(0,s.jsxs)(n.li,{children:["Clone your fork locally: ",(0,s.jsx)(n.code,{children:"git clone https://github.com/City-Skylines-Modding/City-Skylines-Mod.git"})]}),"\n",(0,s.jsxs)(n.li,{children:["Navigate to the directory: ",(0,s.jsx)(n.code,{children:"cd City-Skylines-Mod"})]}),"\n",(0,s.jsx)(n.li,{children:"Install any necessary dependencies"}),"\n",(0,s.jsx)(n.li,{children:"Open the project in Visual Studio 2022"}),"\n",(0,s.jsxs)(n.li,{children:["Creating new branches: ",(0,s.jsx)(n.code,{children:"git checkout -b <branch-name>"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"contributing-guidelines",children:"Contributing Guidelines"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure your changes do not break existing functionality. Run the tests if available."}),"\n",(0,s.jsx)(n.li,{children:"Ensure your changes are consistent with the overall project architecture."}),"\n",(0,s.jsx)(n.li,{children:"Ensure your changes are consistent with the coding style of the rest of the project."}),"\n",(0,s.jsx)(n.li,{children:"Ensure your changes do not add unnecessary dependencies."}),"\n",(0,s.jsx)(n.li,{children:"Ensure your code is properly documented and commented."}),"\n",(0,s.jsx)(n.li,{children:"Update any relevant documentation to reflect your changes"}),"\n",(0,s.jsx)(n.li,{children:"Ensure your changes do not introduce any security vulnerabilities."}),"\n",(0,s.jsx)(n.li,{children:"Ensure your changes are not unnecessarily complex."}),"\n",(0,s.jsx)(n.li,{children:"Ensure your changes do not duplicate existing code."}),"\n",(0,s.jsx)(n.li,{children:"Ensure your changes are not overly optimized."}),"\n",(0,s.jsx)(n.li,{children:"Ensure your changes are not overly generic."}),"\n",(0,s.jsx)(n.li,{children:"Ensure your changes are not overly opinionated."}),"\n",(0,s.jsx)(n.li,{children:"Ensure your changes are not overly coupled."}),"\n",(0,s.jsx)(n.li,{children:"Ensure your changes are not overly abstracted."}),"\n",(0,s.jsx)(n.li,{children:"Ensure your changes are not overly complicated."}),"\n",(0,s.jsx)(n.li,{children:"Ensure your changes are not overly clever."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"bug-reports",children:"Bug Reports"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Ensure the bug was not already reported by searching on GitHub under ",(0,s.jsx)(n.a,{href:"https://github.com/City-Skylines-Modding/City-Skylines-Mod/issues",children:"Issues"})]}),"\n",(0,s.jsxs)(n.li,{children:["If you're unable to find an open issue addressing the problem, ",(0,s.jsx)(n.a,{href:"https://github.com/City-Skylines-Modding/City-Skylines-Mod/issues/new",children:"open a new one"}),". Be sure to use the template provided when opening an issue."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"commits",children:"Commits"}),"\n",(0,s.jsxs)(n.p,{children:["Each commit message consists should be in the following format ",(0,s.jsx)(n.a,{href:"/docs/standards/std-001",children:"commit message standards"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"pull-requests",children:"Pull Requests"}),"\n",(0,s.jsx)(n.h2,{id:"code-of-conduct",children:"Code of Conduct"}),"\n",(0,s.jsx)(n.p,{children:"In order to foster an inclusive, kind, harassment-free, and cooperative community, we enforce this code of conduct on our open source projects."}),"\n",(0,s.jsx)(n.h3,{id:"our-pledge",children:"Our Pledge"}),"\n",(0,s.jsxs)(n.p,{children:["Please adhere to the project's ",(0,s.jsx)(n.a,{href:"./CODE_OF_CONDUCT.md",children:"Code of Conduct"}),". Ensure that your interactions with the community are respectful and positive."]}),"\n",(0,s.jsx)(n.p,{children:"Thank you for contributing to City-Skyline-Mod!"})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5710:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(758);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);