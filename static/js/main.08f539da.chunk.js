(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{22:function(e,t,a){},24:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(14),i=a.n(s),r=(a(22),a(5)),l=a.n(r),j=a(15),o=a(3),d=(a(24),a(0)),b=function(e){var t=e.search,a=e.onInputChange,c=e.onSearchClick;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"jumbotron ",children:[Object(d.jsx)("h1",{className:"display-1 tit",children:"Breaking Bad Characters"}),Object(d.jsxs)("div",{className:"input-group w-50 mx-auto",children:[Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Your Character","aria-label":"Recipient's username","aria-describedby":"basic-addon2",value:t,onChange:a}),Object(d.jsx)("button",{className:"btn btn-danger ",onClick:c,children:"Search"})]})]})})},u=a(16),h=a.n(u),m=function(e){var t=e.item;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{className:"Name",children:["Name: ",t.name]}),Object(d.jsxs)("p",{children:["D.O.B: ",t.birthday]}),Object(d.jsxs)("p",{children:["Occupation: ",t.occupation[0]]}),Object(d.jsxs)("p",{children:["Occupation: ",t.occupation[1]]}),Object(d.jsxs)("p",{children:["Status: ",t.status]}),Object(d.jsxs)("p",{children:["Nickname: ",t.nickname]}),Object(d.jsxs)("p",{children:["Portrayed: ",t.portrayed]})]})},O=function(e){var t=e.item,a=Object(c.useState)(!1),n=Object(o.a)(a,2),s=n[0],i=n[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"card w-100 ",children:[Object(d.jsx)("img",{src:t.img,alt:"not found"}),Object(d.jsxs)("div",{className:"Biodata",children:[Object(d.jsxs)("div",{className:"row",id:"bio-heading",children:[Object(d.jsx)("div",{className:"col-md-7",children:"Biodata"}),Object(d.jsx)("div",{className:"col-md-5",children:Object(d.jsx)("button",{onClick:function(){i(!s)},className:"btn  click-btn",children:Object(d.jsx)("i",{className:"fas fa-caret-square-down"})})})]}),s?Object(d.jsx)(m,{item:t,className:"Profile-item"}):null]})]})})},x=function(e){var t=e.data,a=Object(c.useState)(0),n=Object(o.a)(a,2),s=n[0],i=n[1],r=10*s,l=Math.ceil(t.length/10);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"row",children:t.slice(r,r+10).map((function(e){return Object(d.jsx)("div",{className:"col-md-3 ",children:Object(d.jsx)(O,{item:e})},e.char_id)}))}),Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsx)(h.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:l,onPageChange:function(e){var t=e.selected;i(t)},containerClassName:"pagnitionBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"pagnitionDisabled",activeClassName:"paginationActive"})})]})},p=a(17),v=a.n(p);var g=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),r=i[0],u=i[1];Object(c.useEffect)((function(){h()}),[]);var h=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://www.breakingbadapi.com/api/characters?name=".concat(a));case 2:t=e.sent,console.log(t),u(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{search:a,onInputChange:function(e){console.log(e.target.value),n(e.target.value)},onSearchClick:function(){h()}}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(x,{data:r})})]})})};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.08f539da.chunk.js.map