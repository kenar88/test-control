(this["webpackJsonptest-control-soft-media"]=this["webpackJsonptest-control-soft-media"]||[]).push([[0],{188:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(34),c=a.n(r),o=a(5),m=a(192),u=a(12),i=a(78),s=a.n(i),p=a(191),y=a(190),f=function(e){var t=e.input;return n.createElement("div",{style:{paddingLeft:0},className:"custom-control custom-switch"},n.createElement("label",{className:"controll-label",style:{paddingRight:"42px"},htmlFor:"customSwitch1"},"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0441 \u041d\u0414\u0424\u041b"),n.createElement("input",Object.assign({},t,{type:"checkbox",className:"custom-control-input",id:"customSwitch1"})),n.createElement("label",{className:"custom-control-label controll-label",htmlFor:"customSwitch1"},"\u0411\u0435\u0437 \u041d\u0414\u0424\u041b"))},E=a(81),b=function(e){console.log(e);var t=e.input,a=t.type,l=t.value,r=t.name,c=Object(E.a)(t,["type","value","name"]);return n.createElement(n.Fragment,null,n.createElement("input",Object.assign({className:"form-container-payment__input",type:a,value:l,name:r},c)),n.createElement("label",null,"\u20bd"))},d=a(80),v=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],c=a?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"circle__before-cross"}),l.a.createElement("div",{className:"circle__after-cross"})):l.a.createElement("div",{className:"circle__before-info"},"i");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{onClick:function(){return r(!a)},"data-tooltip":"\u041c\u0420\u041e\u0422- \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u043f\u043b\u0430\u0442\u044b \u0442\u0440\u0443\u0434\u0430. \u0420\u0430\u0437\u043d\u044b\u0439 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432",className:"circle ".concat(a?"visible-tooltip":"")},c))},_=Object(y.a)({form:"control",initialValues:{paymentType:"perMonth",isTaxed:!0,payroll:"50000"}})((function(e){var t=e.salaryByType,a=Object(n.useRef)();return Object(n.useEffect)((function(){a.current?t&&e.change("payroll",t):a.current=!0})),l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"form-container__label form-container__label_gray"},"\u0421\u0443\u043c\u043c\u0430"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-container__radio"},l.a.createElement("label",{className:"form-container__label"},l.a.createElement(p.a,{name:"paymentType",component:"input",type:"radio",value:"perMonth"})," ","\u041e\u043a\u043b\u0430\u0434 \u0437\u0430 \u043c\u0435\u0441\u044f\u0446"),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement(p.a,{name:"paymentType",component:"input",type:"radio",value:"defaultPay"})," ","\u041c\u0420\u041e\u0422"),l.a.createElement(v,null)),l.a.createElement("label",{className:"form-container__label"},l.a.createElement(p.a,{name:"paymentType",component:"input",type:"radio",value:"perDay"})," ","\u041e\u043f\u043b\u0430\u0442\u0430 \u0437\u0430 \u0434\u0435\u043d\u044c"),l.a.createElement("label",{className:"form-container__label"},l.a.createElement(p.a,{name:"paymentType",component:"input",type:"radio",value:"perHour"})," ","\u041e\u043f\u043b\u0430\u0442\u0430 \u0437\u0430 \u0447\u0430\u0441")),l.a.createElement("div",{className:"form-container-payment ".concat(t?"":"hidden")},l.a.createElement(p.a,{name:"isTaxed",id:"tax",component:f,type:"checkbox"})," ",l.a.createElement(p.a,{name:"payroll",component:b,type:"text"}))))})),x=function(e){var t=e.tax,a=e.sum,l=e.isTaxed,r=function(e,t,a){var n=+(Number(e)*Number(t)/100).toFixed(),l={employeePayment:e-n,tax:n,totalSum:e};return a&&(l.employeePayment=e,l.totalSum=e+n),l}(Number(a),t,l);return n.createElement("div",{className:"info-container"},n.createElement("p",null,n.createElement("b",null,"".concat(r.employeePayment," \u20bd"))," \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043d\u0430 \u0440\u0443\u043a\u0438"),n.createElement("p",null,n.createElement("b",null,"".concat(r.tax," \u20bd"))," \u041d\u0414\u0424\u041b, 13% \u043e\u0442 \u043e\u043a\u043b\u0430\u0434\u0430"),n.createElement("p",null,n.createElement("b",null,"".concat(r.totalSum," \u20bd"))," \u0437\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430 \u0432 \u043c\u0435\u0441\u044f\u0446"))},N={perMonth:4e4,perHour:400,perDay:1500,defaultPay:!1},h=Object(u.b)((function(e){return{form:e.form,tax:e.control.tax}}))((function(e){var t=void 0===e.form.control?null:e.form.control.values.paymentType,a=t&&N[t];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form-container"},l.a.createElement(_,{salaryByType:a})),"perMonth"===t?l.a.createElement(x,{tax:e.tax,sum:e.form.control.values.payroll,isTaxed:e.form.control.values.isTaxed}):"")})),g={tax:13},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return e},O=(a(188),Object(o.d)(Object(o.a)(s.a))),T=Object(o.c)({control:j,form:m.a}),F=Object(o.e)(T,O);c.a.render(l.a.createElement(u.a,{store:F},l.a.createElement(h,null)),document.getElementById("root"))},83:function(e,t,a){e.exports=a(189)}},[[83,1,2]]]);
//# sourceMappingURL=main.da97ee2f.chunk.js.map