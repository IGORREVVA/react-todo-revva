"use strict";(self.webpackChunkreact_todo=self.webpackChunkreact_todo||[]).push([[462],{602:function(e,n,t){t.d(n,{Z:function(){return r}});var a={button:"Button_button__LCTkQ",primary:"Button_primary__DH06x",secondary:"Button_secondary__oPXGy",yellow:"Button_yellow__FCnxZ"},o=t(184),r=function(e){var n=e.buttonType,t=e.buttonStyle,r=e.handleClick,u=e.children;return(0,o.jsx)("button",{type:n,className:a.button+" "+a[t],onClick:r,children:u})}},92:function(e,n,t){t.d(n,{Z:function(){return v}});var a="Form_form__PCzmU",o="Form_buttonsWrapper__tSRDF",r="Input_inputWrapper__DsZP5",u="Input_input__TCb6-",i="Input_label__v4qOf",c="Input_error__OgMA4",l=t(184),s=function(e){var n=e.inputId,t=e.labelContent,a=e.value,o=e.onChange,s=e.onBlur,d=e.errors,m=e.touched;return(0,l.jsxs)("div",{className:r,children:[(0,l.jsx)("label",{className:i,htmlFor:n,children:t}),(0,l.jsx)("input",{id:n,className:u,type:"text",name:n,value:a,placeholder:"Create new Todo",onBlur:s,onChange:o}),d[n]&&m[n]?(0,l.jsx)("div",{className:c,children:d[n]&&m[n]&&d[n]}):null]})},d="Checkbox_checkboxWrapper__Sg6hj",m="Checkbox_input__ceuW7",h="Checkbox_label__lZ8jY",_=function(e){var n=e.name,t=e.inputId,a=e.labelContent,o=e.checked,r=e.setChecked;return(0,l.jsxs)("div",{className:d,children:[(0,l.jsx)("input",{className:m,id:t,type:"checkbox",name:n,checked:o,onChange:function(){return r(!o)}}),(0,l.jsx)("label",{className:h,htmlFor:t,children:a})]})},b=t(602),p=t(705),f=t(689),v=function(e){var n=e.name,t=e.onSubmit,r=e.checked,u=e.setChecked,i=(0,f.s0)();return(0,l.jsx)(p.J9,{initialValues:{name:n||""},validate:function(e){var n={};return e.name?e.name.length<2?n.name="Minimum 2 symbols":e.name.length>50&&(n.name="Maximum 50 symbols"):n.name="Required field",n},onSubmit:function(e){t(e)},children:function(e){var n=e.values,t=e.errors,c=e.touched,d=e.handleChange,m=e.handleBlur,h=e.handleSubmit;return(0,l.jsxs)("form",{className:a,onSubmit:h,children:[(0,l.jsx)(s,{inputId:"name",labelContent:"Name",onChange:d,onBlur:m,value:n.name,errors:t,touched:c}),(0,l.jsx)(_,{inputId:"favorites",labelContent:"Add to favorites",checked:r,setChecked:u}),(0,l.jsxs)("div",{className:o,children:[(0,l.jsx)(b.Z,{buttonType:"submit",buttonStyle:"primary",children:"Apply"}),(0,l.jsx)(b.Z,{buttonType:"button",buttonStyle:"secondary",handleClick:function(){return i("/todos")},children:"Back"})]})]})}})}},78:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(87);t(791);var o=t.p+"static/media/logo-small.079a69361586d5332614293b20ff4b72.svg",r="Logo_logo__5KS1B",u=t(184),i=function(){return(0,u.jsx)(a.rU,{to:"/react-todo-revva",children:(0,u.jsx)("div",{className:r,children:(0,u.jsx)("img",{src:o,alt:"Logo"})})})}},462:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var a=t(433),o=t(439),r=t(689),u=t(666),i=t(791),c=t(78),l=t(92),s="EditTodoPage_editTodoPage__qj-MV",d="EditTodoPage_editTodoPageHeading__XIaGa",m=t(184),h=function(){var e=(0,i.useContext)(u.Z),n=e.todoList,t=e.setTodoList,h=(0,r.UO)().index,_=(0,r.s0)(),b=(0,i.useState)(n[h-1].favorite),p=(0,o.Z)(b,2),f=p[0],v=p[1];return(0,m.jsxs)("div",{className:s,children:[(0,m.jsx)(c.Z,{}),(0,m.jsx)("h2",{className:d,children:"Edit Todo"}),(0,m.jsx)(l.Z,{name:n[h-1].name,onSubmit:function(e){var o=n.map((function(n,t){return h-1===t&&(n.name=e.name,n.favorite=e.favorite),n}));t((0,a.Z)(o)),_("/react-todo-revva/todos")},checked:f,setChecked:v})]})}}}]);
//# sourceMappingURL=462.938b4188.chunk.js.map