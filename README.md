Follow these steps on how to setup project in Visual Studio to work with Angular 2 and TypeScript ONLY, no .Net code.
a) Go to https://angular.io/docs/ts/latest/cookbook/visual-studio-2015.html for step by step instructions.
b) Go to visual studio package console and run install-package Microsoft.TypeScript.Compiler and install-package Microsoft.TypeScript.MSBuild.
c) Install TypeSAcript for Visual Studio 2015.
d) After the above steps, remove the following files from the solution or folder -
1)	Remove e2e and Service References folder.
2)	Remove .editorconfig, .gitignore, .travis.yml, ApplicationInsights.config, ChangeLog.md, Readme.md.
3)	Remove files that starts with “non-essentials”, “bs-config”, “karma”.
4)	Remove systemjs.config.extras.js, tslint.js, protractor.config.js and package.json.
5)	Remove AssemblyINfo.cs
