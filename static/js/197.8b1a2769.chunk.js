"use strict";(self.webpackChunkreact_todo=self.webpackChunkreact_todo||[]).push([[197],{602:function(t,e,o){o.d(e,{Z:function(){return d}});var n={button:"Button_button__LCTkQ",primary:"Button_primary__DH06x",secondary:"Button_secondary__oPXGy",yellow:"Button_yellow__FCnxZ"},a=o(184),d=function(t){var e=t.buttonType,o=t.buttonStyle,d=t.handleClick,i=t.children;return(0,a.jsx)("button",{type:e,className:n.button+" "+n[o],onClick:d,children:i})}},78:function(t,e,o){o.d(e,{Z:function(){return s}});var n=o(87);o(791);var a=o.p+"static/media/logo-small.079a69361586d5332614293b20ff4b72.svg",d="Logo_logo__5KS1B",i=o(184),s=function(){return(0,i.jsx)(n.rU,{to:"/react-todo-revva",children:(0,i.jsx)("div",{className:d,children:(0,i.jsx)("img",{src:a,alt:"Logo"})})})}},197:function(t,e,o){o.r(e),o.d(e,{default:function(){return j}});var n=o(689),a=o(791),d=o(666),i=o(602),s="Todo_todo__jl-Dn",r="Todo_headingWrapper__0oZsR",c="Todo_todoHeading__TEdj+",l="Todo_todoIcon__ua1Ve";var u=o.p+"static/media/favorite.3cdf113c05100a4288f0e0d7b99a7361.svg";var _=o.p+"static/media/not-favorite.e62a35887efef2bde6c53145b5afa7fb.svg",f=o(184),v=function(t){var e=t.element,o=t.actions;return(0,f.jsxs)("li",{className:s,children:[(0,f.jsxs)("div",{className:r,children:[(0,f.jsx)("img",{className:l,src:e.favorite?u:_,alt:"".concat(e.favorite?"Favorite todo":"Not favorite todo")}),(0,f.jsx)("h2",{className:c,children:e.name})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(i.Z,{buttonType:"button",buttonStyle:"secondary",handleClick:function(){return o.delete(e)},children:"Delete"}),(0,f.jsx)(i.Z,{buttonType:"button",buttonStyle:"yellow",handleClick:function(){return o.edit(e)},children:"Edit"})]})]})},h=o(78),x="TodosPage_todosPage__qTEHk",b="TodosPage_todosPageHeader__udVRG",m="TodosPage_todosPageHeading__xCWPM",g="TodosPage_todosPageList__+aVcO",j=function(){var t=(0,a.useContext)(d.Z),e=(0,n.s0)(),o=t.todoList,s=t.setTodoList,r={delete:function(t){var e=o.filter((function(e){return e.index!==t.index}));s(e)},edit:function(t){e("/todos/edit/".concat(t.index))}};return(0,f.jsxs)("div",{className:x,children:[(0,f.jsxs)("div",{className:b,children:[(0,f.jsx)(h.Z,{}),(0,f.jsx)(i.Z,{buttonType:"button",buttonStyle:"primary",handleClick:function(){return e("/todos/new")},children:"Create new"})]}),(0,f.jsx)("div",{className:g,children:(null===o||void 0===o?void 0:o.length)>0?o.map((function(t){return(0,f.jsx)(v,{element:t,actions:r},t.index)})):(0,f.jsx)("div",{children:(0,f.jsx)("h3",{className:m,children:"No Todo found!!!"})})})]})}}}]);
//# sourceMappingURL=197.8b1a2769.chunk.js.map