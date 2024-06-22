"use strict";(self.webpackChunkcity_skylines_wiki=self.webpackChunkcity_skylines_wiki||[]).push([[374],{7384:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=i(6070),o=i(5710);const s={},r="Creating a new mod",l={id:"guides/gui-006",title:"Creating a new mod",description:"Introduction",source:"@site/docs/guides/gui-006.md",sourceDirName:"guides",slug:"/guides/gui-006",permalink:"/docs/guides/gui-006",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Creating a Pull Request",permalink:"/docs/guides/gui-005"},next:{title:"Publishing a mod on the Steam Workshop",permalink:"/docs/guides/gui-007"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Steps",id:"steps",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"creating-a-new-mod",children:"Creating a new mod"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"This guide will walk you through the process of creating a new mod for Cities: Skylines. It will cover the basics of creating a new mod by referencing the Unlimited Money mod from the Game."}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set up your development environment using the ",(0,t.jsx)(n.a,{href:"/docs/development/environment",children:"Development Environment"})," guide."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a new file with the name of your mod in the ",(0,t.jsx)(n.code,{children:"Source"})," folder. For example, ",(0,t.jsx)(n.code,{children:"InfiniteResources.cs"}),". For simplicity, we will use a single file for the mod's logic. In a real-world scenario, you would create a new folder for your mod and split the logic into multiple files."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add the following code to your new file."}),"\n",(0,t.jsxs)(n.p,{children:["This code implements the ",(0,t.jsx)(n.code,{children:"IUserMod"})," interface, which is required for all mods. It provides the name and description of the mod that will be displayed in the game's ",(0,t.jsx)(n.code,{children:"Content Manager"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'using ICities;\nusing UnityEngine;\n\nnamespace UnlimitedMoney.source\n{\n  public class UnlimitedMoney : IUserMod\n  {\n    public string Name => "Unlimited Money";\n    public string Description => "Adds unlimited money to the game.";\n  }\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create the class that will handle the mod's logic."}),"\n",(0,t.jsxs)(n.p,{children:["This code implements the ",(0,t.jsx)(n.code,{children:"EconomyExtensionBase"})," class, which is used to modify the game's economy system. It overrides the ",(0,t.jsx)(n.code,{children:"OnUpdateMoneyAmount"})," method to set the player's budget to the maximum value and the ",(0,t.jsx)(n.code,{children:"OnPeekResource"})," method to allow the player to peek at any amount of resources."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public class UnlimitedMoney : EconomyExtensionBase\n{\n  public override long OnUpdateMoneyAmount(long budget)\n  {\n    return long.MaxValue;\n  }\n\n  public override bool OverrideDefaultPeekResource\n  {\n    get { return true; }\n  }\n\n  public override int OnPeekResource(EconomyResource resource, int amount)\n  {\n    return amount;\n  }\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Build the project by pressing ",(0,t.jsx)(n.code,{children:"Ctrl + Shift + B"})," in Visual Studio."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the generated ",(0,t.jsx)(n.code,{children:"dll"})," file from the ",(0,t.jsx)(n.code,{children:"bin"})," folder to the ",(0,t.jsx)(n.code,{children:"Mods"})," folder in the game's installation directory."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start the game and enable the mod in the ",(0,t.jsx)(n.code,{children:"Content Manager"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enjoy your new mod!s"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},5710:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(758);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);