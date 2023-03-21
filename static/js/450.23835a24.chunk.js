"use strict";(self.webpackChunkreact_todo=self.webpackChunkreact_todo||[]).push([[450],{205:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(705),r=t(689),o=[{id:1,value:"untouched",name:"Untouched"},{id:2,value:"pending",name:"Pending"},{id:3,value:"done",name:"Done"}],l=t(792),u="Checkbox_checkboxWrapper__Sg6hj",s="Checkbox_input__ceuW7",i="Checkbox_label__lZ8jY",c=t(184),d=function(e){var n=e.name,t=e.inputId,a=e.labelContent,r=e.value,o=e.onChange;return(0,c.jsxs)("div",{className:u,children:[(0,c.jsx)("input",{className:s,id:t,type:"checkbox",name:n,checked:r,onChange:o}),(0,c.jsx)("label",{className:i,htmlFor:t,children:a})]})},m=t(268),h=t(737),v="Form_form__PCzmU",_="Form_buttonsWrapper__tSRDF",p=function(e){var n=e.values,t=e.onSubmit,u=(0,r.s0)(),s=null!==n&&void 0!==n&&n.name?n.name:"",i=!(null===n||void 0===n||!n.favorite)&&n.favorite,p=null!==n&&void 0!==n&&n.status?n.status:"";return(0,c.jsx)(a.J9,{initialValues:{name:s,favorite:i,status:p},validate:function(e){var n={};return e.name?e.name.length<2?n.name="Minimum 2 symbols":e.name.length>50&&(n.name="Maximum 50 symbols"):n.name="Required field",e.status||(n.status="Required field"),n},onSubmit:function(e){t(e)},children:function(e){var n=e.values,t=e.errors,a=e.touched,r=e.handleChange,s=e.handleBlur,i=e.handleSubmit;return(0,c.jsxs)("form",{className:v,onSubmit:i,children:[(0,c.jsx)(l.Z,{inputId:"name",labelContent:"Name",onChange:r,onBlur:s,value:n.name,errors:t,touched:a,placeholder:"Create new Todo"}),(0,c.jsx)(h.Z,{id:"status",defaultValue:"Status",onChange:r,onBlur:s,value:n.status,options:o,labelContent:"Status",errors:t,touched:a}),(0,c.jsx)(d,{inputId:"favorite",labelContent:"Add to favorites",onChange:r,value:n.favorite}),(0,c.jsxs)("div",{className:_,children:[(0,c.jsx)(m.Z,{buttonType:"submit",buttonStyle:"primary",children:"Apply"}),(0,c.jsx)(m.Z,{buttonType:"button",buttonStyle:"secondary",handleClick:function(){return u("/react-todo-revva/todos")},children:"Back"})]})]})}})}},78:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(87);t(791);var r=t.p+"static/media/logo-small.079a69361586d5332614293b20ff4b72.svg",o="Logo_logo__5KS1B",l=t(184),u=function(){return(0,l.jsx)(a.rU,{to:"/react-todo-revva",children:(0,l.jsx)("div",{className:o,children:(0,l.jsx)("img",{src:r,alt:"Logo"})})})}},268:function(e,n,t){t.d(n,{Z:function(){return o}});var a={button:"Button_button__foS4W",primary:"Button_primary__rj6AV",secondary:"Button_secondary__rzt40",yellow:"Button_yellow__Sxnj-"},r=t(184),o=function(e){var n=e.buttonType,t=e.buttonStyle,o=e.handleClick,l=e.children;return(0,r.jsx)("button",{type:n,className:a.button+" "+a[t],onClick:o,children:l})}},792:function(e,n,t){t.d(n,{Z:function(){return s}});var a="Input_inputWrapper__PlmN8",r="Input_inputWrapperInput__Q-fA1",o="Input_inputWrapperLabel__GZU68",l="Input_inputWrapperError__czaAS",u=t(184),s=function(e){var n=e.inputId,t=e.labelContent,s=e.value,i=e.onChange,c=e.onBlur,d=e.errors,m=e.touched,h=e.placeholder;return(0,u.jsxs)("div",{className:a,children:[t?(0,u.jsx)("label",{className:o,htmlFor:n,children:t}):null,(0,u.jsx)("input",{id:n,className:r,type:"text",name:n,value:s,placeholder:h,onBlur:c,onChange:i,autoComplete:"off"}),d&&d[n]&&m[n]?(0,u.jsx)("div",{className:l,children:d[n]&&m[n]&&d[n]}):null]})}},737:function(e,n,t){t.d(n,{Z:function(){return s}});var a="Select_selectWrapper__aGvuM",r="Select_selectWrapperSelect__vN+Tv",o="Select_selectWrapperLabel__OqiNl",l="Select_selectWrapperError__hfjvz",u=t(184),s=function(e){var n=e.id,t=e.options,s=e.defaultValue,i=e.value,c=e.onChange,d=e.labelContent,m=e.errors,h=e.touched;return(0,u.jsxs)("div",{className:a,children:[d?(0,u.jsx)("label",{className:o,htmlFor:n,children:d}):null,(0,u.jsxs)("select",{id:n,className:r,value:i,onChange:c,children:[(0,u.jsx)("option",{disabled:!0,value:"",children:s}),t.map((function(e){return(0,u.jsx)("option",{value:e.value,children:e.name},e.id)}))]}),m&&m[n]&&h[n]?(0,u.jsx)("div",{className:l,children:m[n]&&h[n]&&m[n]}):null]})}},450:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var a=t(433),r=t(791),o=t(689),l=t(666),u=t(78),s=t(205),i="CreateTodoPage_createTodoPage__t8tNF",c="CreateTodoPage_heading__yYbYa",d=t(184),m=function(){var e=(0,r.useContext)(l.Z),n=e.todoList,t=e.setTodoList,m=(0,o.s0)();return(0,d.jsxs)("div",{className:i,children:[(0,d.jsx)(u.Z,{}),(0,d.jsx)("h1",{className:c,children:"Create new"}),(0,d.jsx)(s.Z,{onSubmit:function(e){t([].concat((0,a.Z)(n),[{index:n.length+1,name:e.name,status:e.status,favorite:e.favorite}])),m("/react-todo-revva/todos")}})]})}}}]);
//# sourceMappingURL=450.23835a24.chunk.js.map