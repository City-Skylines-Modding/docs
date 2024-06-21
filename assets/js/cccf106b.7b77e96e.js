"use strict";(self.webpackChunkcity_skylines_wiki=self.webpackChunkcity_skylines_wiki||[]).push([[357],{6321:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(6070),l=i(5710);const r={},o="Install and Configure GIT",a={id:"guides/gui-001",title:"Install and Configure GIT",description:"Introduction",source:"@site/docs/guides/gui-001.md",sourceDirName:"guides",slug:"/guides/gui-001",permalink:"/docs/guides/gui-001",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",next:{title:"Setting Up SSH Key for Git",permalink:"/docs/guides/gui-002"}},t={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Windows",id:"windows",level:3},{value:"Linux &amp; MacOs",id:"linux--macos",level:3},{value:"macOS",id:"macos",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Setting Your Username and Email",id:"setting-your-username-and-email",level:3},{value:"Verify Configuration",id:"verify-configuration",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"install-and-configure-git",children:"Install and Configure GIT"}),"\n",(0,s.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(e.p,{children:"This guide will walk you through installing and configuring GIT on your system. GIT is a powerful version control system that helps you track changes in your codebase and collaborate with other developers effectively."}),"\n",(0,s.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(e.h3,{id:"windows",children:"Windows"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Download"}),": Get the latest version of GIT from the ",(0,s.jsx)(e.a,{href:"https://git-scm.com/",children:"official website"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Run the Installer"}),": Open the downloaded file and follow the on-screen instructions to install GIT."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"linux--macos",children:"Linux & MacOs"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Update Package Index"}),": Open a terminal and run:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo apt-get update\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Install GIT"}),": Execute the following command:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo apt-get install git\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Verify Installation"}),": Check if GIT is installed correctly by running:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"git --version\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"macos",children:"macOS"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Install via Homebrew"}),": If you have Homebrew installed, open a terminal and run:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"brew install git\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Verify Installation"}),": Check if GIT is installed correctly by running:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"git --version\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(e.h3,{id:"setting-your-username-and-email",children:"Setting Your Username and Email"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Open Terminal"}),": Launch a terminal or command prompt."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Set Your Username"}),": Run the following command, replacing ",(0,s.jsx)(e.code,{children:'"Your Name"'})," with your actual name:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'git config --global user.name "Your Name"\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Set Your Email Address"}),": Run the following command, replacing ",(0,s.jsx)(e.code,{children:'"Your Email"'})," with your actual email address:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'git config --global user.email "Your Email"\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"verify-configuration",children:"Verify Configuration"}),"\n",(0,s.jsx)(e.p,{children:"To check your configuration, you can use:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"git config --list\n"})}),"\n",(0,s.jsx)(e.p,{children:"This command will display all the GIT configuration settings, including your username and email."}),"\n",(0,s.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(e.p,{children:["You have successfully installed and configured GIT on your system. Now you can start using GIT to manage your code and collaborate with others. For more advanced configuration and usage, refer to the ",(0,s.jsx)(e.a,{href:"https://git-scm.com/doc",children:"GIT documentation"}),"."]})]})}function u(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},5710:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>a});var s=i(758);const l={},r=s.createContext(l);function o(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);