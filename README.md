# namaste-react
namaste-react
# parcel
Dev Building
Local server
HMR : Hot module replacement
Parcel uses : file watching algorithm - which is written in c++
Faster builds : due to caching
Image optimization for faster loading of images
Bundle of files 
Minify and compres the files
Consistent hashing 
Code Splitting
Differential Bundling to support older browsers
Diagnostign behind the scenes for error messages and optimization
Also provides support for hosting on HTTPS instead of http
Tree Shaking algorithm - remove unused code or functions if not used
different DEV and PROD BUILD

# React Basics
Using JSX for write the code to make life easier
JSX is not like HTML, but it is HTML like syntax
It is more of like XML syntax
JSX is just syntax
/* JSX is not understood by the JSEngine, it is //
//transpiled by Parcel first using the Babel and then convert the code to one understood by JSEngine
*/
/**
 JSX  => BABEL => React.createElement => Now React Understand it and then conver to => HTML Element => JSEgine
 */
 JSX handles the Cross Site Scripting and escapes all these javascript executons