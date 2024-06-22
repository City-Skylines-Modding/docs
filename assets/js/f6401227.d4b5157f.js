"use strict";(self.webpackChunkcity_skylines_wiki=self.webpackChunkcity_skylines_wiki||[]).push([[131],{9823:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var t=n(6070),s=n(5710);const o={},l="Development Environment",r={id:"development/environment",title:"Development Environment",description:"Prerequisites",source:"@site/docs/development/environment.md",sourceDirName:"development",slug:"/development/environment",permalink:"/docs/development/environment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Publishing a mod on the Steam Workshop",permalink:"/docs/guides/gui-007"},next:{title:"Commit Message Standards",permalink:"/docs/standards/std-001"}},d={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting Up Your Development Environment",id:"setting-up-your-development-environment",level:2},{value:"Installing Visual Studio",id:"installing-visual-studio",level:3},{value:"Installing Visual Studio Code (Optional)",id:"installing-visual-studio-code-optional",level:3},{value:"Installing Unity",id:"installing-unity",level:3},{value:"Creating a new Visual Studio Project",id:"creating-a-new-visual-studio-project",level:2},{value:"Debugging Your Mod",id:"debugging-your-mod",level:2},{value:"Using Visual Studio",id:"using-visual-studio",level:3},{value:"Using Visual Studio Code",id:"using-visual-studio-code",level:3},{value:"See Performance Metrics",id:"see-performance-metrics",level:2},{value:"Using Visual Studio",id:"using-visual-studio-1",level:3},{value:"Automatically Copying the Mod DLL to the <code>Mods</code> Folder (Optional)",id:"automatically-copying-the-mod-dll-to-the-mods-folder-optional",level:2},{value:"Using Visual Studio",id:"using-visual-studio-2",level:3}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"development-environment",children:"Development Environment"}),"\n",(0,t.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://visualstudio.microsoft.com/",children:"Visual Studio"})," 2019 or newer"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})," (optional)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://unity.com/",children:"Unity"})," 2019.4.28f1 or newer"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://store.steampowered.com/app/255710/Cities_Skylines/",children:"Cities: Skylines"})," with the latest version"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"setting-up-your-development-environment",children:"Setting Up Your Development Environment"}),"\n",(0,t.jsx)(i.h3,{id:"installing-visual-studio",children:"Installing Visual Studio"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Download and install ",(0,t.jsx)(i.a,{href:"https://visualstudio.microsoft.com/",children:"Visual Studio"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Launch Visual Studio and select the ",(0,t.jsx)(i.strong,{children:"Game Development with Unity"})," workload during installation."]}),"\n",(0,t.jsx)(i.li,{children:"Install any additional components required for Unity development."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"installing-visual-studio-code-optional",children:"Installing Visual Studio Code (Optional)"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Download and install ",(0,t.jsx)(i.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Install the ",(0,t.jsx)(i.strong,{children:"C# for Visual Studio Code"})," extension from the Visual Studio Code Marketplace."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"installing-unity",children:"Installing Unity"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Download and install ",(0,t.jsx)(i.a,{href:"https://unity.com/",children:"Unity"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"creating-a-new-visual-studio-project",children:"Creating a new Visual Studio Project"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"After installing Visual Studio, launch the application."}),"\n",(0,t.jsxs)(i.li,{children:["Click on ",(0,t.jsx)(i.strong,{children:"Create a new project"}),' with the "Class Library" template for C# projects.']}),"\n"]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"See screenshot"}),(0,t.jsx)("img",{src:"../../static/img/vs_project.png",alt:"Screenshot of Class Library template"})]}),"\n",(0,t.jsxs)(i.ol,{start:"3",children:["\n",(0,t.jsxs)(i.li,{children:["Choose a name and location for your project and click ",(0,t.jsx)(i.strong,{children:"Create"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Add references to the Unity assemblies located in the ",(0,t.jsx)(i.code,{children:"Managed"})," folder of your Cities: Skylines installation directory.","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["For Steam users, the default path is ",(0,t.jsx)(i.code,{children:"C:\\Program Files (x86)\\Steam\\steamapps\\common\\Cities_Skylines\\Cities_Data\\Managed"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["For Epic Games users, the default path is ",(0,t.jsx)(i.code,{children:"C:\\Program Files\\Epic Games\\CitiesSkylines\\Cities_Data\\Managed"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["For non-Steam users, the default path is ",(0,t.jsx)(i.code,{children:"C:\\Program Files (x86)\\Cities Skylines\\Cities_Data\\Managed"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["For Mac users, the default path is ",(0,t.jsx)(i.code,{children:"~/Library/Application Support/Steam/steamapps/common/Cities_Skylines/Cities.app/Contents/Managed"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Start coding your mod using the Unity API and C# scripting."}),"\n",(0,t.jsxs)(i.li,{children:["Build your project and copy the resulting DLL file to the ",(0,t.jsx)(i.code,{children:"Mods"})," folder of your Cities: Skylines installation directory. You can build the project by clicking on ",(0,t.jsx)(i.strong,{children:"Build"})," > ",(0,t.jsx)(i.strong,{children:"Build Solution"})," in Visual Studio or by using ",(0,t.jsx)(i.code,{children:"ctrl + shift + b"})," keyboard shortcut."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"debugging-your-mod",children:"Debugging Your Mod"}),"\n",(0,t.jsx)(i.h3,{id:"using-visual-studio",children:"Using Visual Studio"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Open your project in Visual Studio."}),"\n",(0,t.jsx)(i.li,{children:"Set breakpoints in your code by clicking on the left margin of the code editor."}),"\n",(0,t.jsxs)(i.li,{children:["Click on ",(0,t.jsx)(i.strong,{children:"Debug"})," > ",(0,t.jsx)(i.strong,{children:"Start Debugging"})," or press ",(0,t.jsx)(i.code,{children:"F5"})," to start debugging your mod."]}),"\n",(0,t.jsx)(i.li,{children:"Attach the debugger to the Cities: Skylines process by selecting the appropriate process from the list."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"using-visual-studio-code",children:"Using Visual Studio Code"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Open your project in Visual Studio Code."}),"\n",(0,t.jsx)(i.li,{children:"Set breakpoints in your code by clicking on the left margin of the code editor."}),"\n",(0,t.jsxs)(i.li,{children:["Click on ",(0,t.jsx)(i.strong,{children:"Run"})," > ",(0,t.jsx)(i.strong,{children:"Start Debugging"})," or press ",(0,t.jsx)(i.code,{children:"F5"})," to start debugging your mod."]}),"\n",(0,t.jsx)(i.li,{children:"Attach the debugger to the Cities: Skylines process by selecting the appropriate process from the list."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"see-performance-metrics",children:"See Performance Metrics"}),"\n",(0,t.jsx)(i.h3,{id:"using-visual-studio-1",children:"Using Visual Studio"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Open your project in Visual Studio."}),"\n",(0,t.jsxs)(i.li,{children:["Click on ",(0,t.jsx)(i.strong,{children:"Debug"})," > ",(0,t.jsx)(i.strong,{children:"Performance Profiler"})," to open the Performance Profiler."]}),"\n",(0,t.jsx)(i.li,{children:"Select the desired profiling target (e.g., CPU Usage, Memory Usage, etc.)."}),"\n",(0,t.jsxs)(i.li,{children:["Click on ",(0,t.jsx)(i.strong,{children:"Start"})," to start profiling your mod."]}),"\n",(0,t.jsx)(i.li,{children:"Analyze the performance metrics to identify bottlenecks and optimize your mod."}),"\n"]}),"\n",(0,t.jsxs)(i.h2,{id:"automatically-copying-the-mod-dll-to-the-mods-folder-optional",children:["Automatically Copying the Mod DLL to the ",(0,t.jsx)(i.code,{children:"Mods"})," Folder (Optional)"]}),"\n",(0,t.jsxs)(i.p,{children:["To automatically copy the mod DLL to the ",(0,t.jsx)(i.code,{children:"Mods"})," folder of Cities: Skylines after building the project, you can add a post-build event in Visual Studio."]}),"\n",(0,t.jsx)(i.h3,{id:"using-visual-studio-2",children:"Using Visual Studio"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Open your project in Visual Studio."}),"\n",(0,t.jsxs)(i.li,{children:["Right-click on your project in the Solution Explorer and select ",(0,t.jsx)(i.strong,{children:"Properties"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Click on ",(0,t.jsx)(i.strong,{children:"Build Events"})," in the left pane."]}),"\n",(0,t.jsxs)(i.li,{children:["Enter the following command in the ",(0,t.jsx)(i.strong,{children:"Post-build event command line"})," box to create and copy the mod DLL to the ",(0,t.jsx)(i.code,{children:"Mods"})," folder of Cities: Skylines:"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:'mkdir "%LOCALAPPDATA%\\Colossal Order\\Cities_Skylines\\Addons\\Mods\\$(SolutionName)"\ndel "%LOCALAPPDATA%\\Colossal Order\\Cities_Skylines\\Addons\\Mods\\$(SolutionName)\\$(TargetFileName)"\nxcopy /y "$(TargetPath)" "%LOCALAPPDATA%\\Colossal Order\\Cities_Skylines\\Addons\\Mods\\$(SolutionName)"\n'})})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},5710:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>r});var t=n(758);const s={},o=t.createContext(s);function l(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);