(this["webpackJsonpphonebook-front"]=this["webpackJsonpphonebook-front"]||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),u=t.n(o),c=(t(20),t(4)),l=t(2),i=function(e){return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:e.filter,onChange:e.handleFilterChange}))},m=function(e){var n=e.notification;return null===n?null:r.a.createElement("div",{style:"error"===n.type?{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n.message)},d=function(e){return r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},f=function(e){var n=e.person,t=e.handleDelete;return r.a.createElement("div",null,n.name," ",n.number," \xa0",r.a.createElement("button",{onClick:t},"delete"))},s=function(e){var n=e.persons,t=e.handleDelete;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(f,{key:e.name,person:e,handleDelete:function(){return t(e.id)}})})))},h=t(3),b=t.n(h),p="/api/persons",g=function(){return b.a.get(p).then((function(e){return e.data}))},v=function(e){return b.a.post(p,e).then((function(e){return e.data}))},E=function(e){return b.a.delete("".concat(p,"/").concat(e)).then((function(e){console.log("Response",e)}))},y=function(e){return b.a.put("".concat(p,"/").concat(e.id),e).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),f=Object(l.a)(u,2),h=f[0],b=f[1],p=Object(a.useState)(""),w=Object(l.a)(p,2),j=w[0],O=w[1],C=Object(a.useState)(""),S=Object(l.a)(C,2),k=S[0],N=S[1],D=Object(a.useState)(null),T=Object(l.a)(D,2),B=T[0],R=T[1];Object(a.useEffect)((function(){g().then((function(e){o(e)}))}),[]);var U=k?t.filter((function(e){return e.name.toUpperCase().includes(k.toUpperCase())})):t;return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(m,{notification:B}),r.a.createElement(i,{filter:k,handleFilterChange:function(e){N(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(d,{onSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===h}));if(n){if(window.confirm("".concat(h," is already added to phonebook, replace the old number with a new one?"))){var a=Object(c.a)(Object(c.a)({},n),{},{number:j});y(a).then((function(e){o(t.map((function(n){return n.id===e.id?e:n}))),b(""),O(""),R({message:"Updated ".concat(e.name),type:"info"}),setTimeout((function(){R(null)}),5e3)})).catch((function(e){R({message:"Information of ".concat(a.name," has already been removed from server"),type:"error"}),setTimeout((function(){R(null)}),5e3),o(t.filter((function(e){return e.id!==a.id})))}))}}else v({name:h,number:j}).then((function(e){o(t.concat(e)),b(""),O(""),R({message:"Added ".concat(e.name),type:"info"}),setTimeout((function(){R(null)}),5e3)})).catch((function(e){console.log(e.response.data),R({message:e.response.data.error,type:"error"}),setTimeout((function(){R(null)}),5e3)}))},newName:h,handleNameChange:function(e){b(e.target.value)},newNumber:j,handleNumberChange:function(e){O(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(s,{persons:U,handleDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&(E(e),console.log("Deleted person",e),o(t.filter((function(n){return n.id!==e}))),R({message:"Deleted ".concat(n.name),type:"info"}),setTimeout((function(){R(null)}),5e3))}}))};u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.27461024.chunk.js.map