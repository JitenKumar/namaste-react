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
Minify and compress the files
Consistent hashing
Code Splitting - Chunking of huge js files into smaller chunks
Dynamic bundling of smaller applications
Differential Bundling to support older browsers
Diagnosting behind the scenes for error messages and optimization
Also provides support for hosting on HTTPS instead of http
Tree Shaking algorithm - remove unused code or functions if not used
different DEV and PROD BUILD

# React Basics

Using JSX for write the code to make life easier
JSX is not like HTML, but it is HTML like syntax
It is more of like XML syntax
JSX is just syntax
JSX is not understood by the JSEngine, it is
transpiled by Parcel first using the Babel and then convert the code to one understood by JSEngine

JSX => BABEL => React.createElement => Now React Understand it and then conver to HTML Element => JSEgine

JSX handles the Cross Site Scripting and escapes all these javascript executons

# Swiggy Food Delivery App

- Food APP
- HEADER
- -> LOGO
- -> NAV ITEMS
- BODY
- -> SEARCH OPTIONS
- -> RESTAURANT CONTAINER
-      RESTAURANT CARDDS
-      image,
-      rating , cousines, delivery time
- FOOTER
- - COPYRIGHT
- - LINKS

# React Hooks

They are normal JS functions utility functions written by Meta Developers

1.  useState()
2.  useEffect()

React Algorithms

- Reconcialition algorithm also know as React Fiber

Virtual DOM -> createdBy React -> It is representation of actual DOM
React Virtual DOM is normal JAVAScript Object of all components

{
props: {}
attributes:{}
type : {}
}

Diff Algorithm / React Fiber is the new name ofthe algorithm

Find out the difference between the updated virtual DOM and old virtual DOM and find the difference and update the virtual DOM and then update the Actual DOM

Alogrithm is the diff between the two javascript objects

React is doing the efficient DOM manipulation
Why React is Fast because it doesn't touch the Actual DOM it just find the difference and then touch the actual DOM

useEffect as soon as the render cycle is complete it will call the useEffect callback function

Whenever a localState variable is updates reconcialitaiton algo is called again and rerendering the component again

# Router

Two type of routing in web application

1. Client side routing - new way of routing
2. Server side routing - Like OLd way of routing

Dynamic Routing for different restaurants

# CSS or styling libraries

Material UI
chakra UI
styled components
tailwind styled components
Ant Design -> React 2nd most popular

# How to manange the data inside the react applications

Higher Order Components
-takes a component and enhance it and return a component
-Promoted restaurants in the restro card in the swiggy
-take a restaurant component and enhance it with promoted and return

# React Layers

Data Layer - State , Data, Props, Local Variables and JS Codes
UI is powered by Data Layer
Major part is two handle the Data Layer
