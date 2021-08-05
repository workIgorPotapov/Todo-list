(this["webpackJsonpmy-todo"]=this["webpackJsonpmy-todo"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),o=n(18),s=n.n(o),l=n(37),p=n(15),u=n(38),x=n.n(u),d=n(145),f=n(136),j=Object(f.a)((function(e){return{form:{display:"flex",flexDirection:"column",alignItems:"center"},formInput:{width:"400px",marginTop:"7px"}}})),b=n(4);var h=function(e){var t=e.postData,n=Object(a.useState)(""),r=Object(p.a)(n,2),c=r[0],i=r[1],o=j(),s=function(e){e.preventDefault(),t(c),i("")};return Object(b.jsx)("form",{className:o.form,onSubmit:s,children:Object(b.jsx)(d.a,{value:c,className:o.formInput,type:"text",onChange:function(e){i(e.currentTarget.value)},onKeyDown:function(e){"Enter"===e.key&&s(e)},label:"Type something...",variant:"outlined"})})},m=n(140),g=n(141),O=n(146),y=n(142),v=n(109),k=Object(f.a)((function(e){return{typography:{fontFamily:'"Indie Flower", cursive',fontSize:"18px"},filter:{display:"flex",listStyle:"none"},filterItems:{padding:0},filterButton:{height:"30px",padding:"0 3px",fontFamily:'"Indie Flower", cursive',fontSize:"18px",border:"1px ridge #000000"}}}));var w=function(e){var t=e.filtration,n=k();return Object(b.jsxs)(m.a,{className:n.filter,children:[Object(b.jsx)(g.a,{className:n.filterItems,children:Object(b.jsx)(O.a,{ml:"3px",children:Object(b.jsx)(y.a,{onClick:function(){return t("all")},className:n.filterButton,type:"submit",variant:"contained",color:"primary",children:Object(b.jsx)(v.a,{className:n.typography,children:"All"})})})}),Object(b.jsx)(g.a,{className:n.filterItems,children:Object(b.jsx)(O.a,{ml:"3px",children:Object(b.jsx)(y.a,{onClick:function(){return t("done")},className:n.filterButton,type:"submit",variant:"contained",color:"primary",children:Object(b.jsx)(v.a,{className:n.typography,children:"Done"})})})}),Object(b.jsx)(g.a,{className:n.filterItems,children:Object(b.jsx)(O.a,{ml:"3px",children:Object(b.jsx)(y.a,{onClick:function(){return t("undone")},className:n.filterButton,type:"submit",variant:"contained",color:"primary",children:Object(b.jsx)(v.a,{className:n.typography,children:"Undone"})})})})]})},N=Object(f.a)((function(e){return{typography:{fontFamily:'"Indie Flower", cursive',fontSize:"18px",userSelect:"none"},sort:{display:"flex",alignItems:"center"},sortText:{marginRight:"10px"},sortButton:{minWidth:"30px",minHeight:"30px",maxWidth:"30px",maxHeight:"30px",border:"1px ridge #000000"}}}));var S=function(e){var t=e.sorting,n=N();return Object(b.jsxs)("div",{className:n.sort,children:[Object(b.jsx)(O.a,{mr:1,children:Object(b.jsx)(v.a,{className:n.typography,children:"Sort by date"})}),Object(b.jsx)(O.a,{mr:"3px",children:Object(b.jsx)(y.a,{onClick:function(){return t("desc")},className:n.sortButton,variant:"contained",color:"default",children:Object(b.jsx)("i",{className:"fas fa-arrow-up fa-2x"})})}),Object(b.jsx)(O.a,{mr:"3px",children:Object(b.jsx)(y.a,{onClick:function(){return t("asc")},className:n.sortButton,variant:"contained",color:"default",children:Object(b.jsx)("i",{className:"fas fa-arrow-down fa-2x"})})})]})},I=n(148),C=Object(f.a)((function(e){return{typography:{fontFamily:'"Indie Flower", cursive',fontSize:"18px",userSelect:"none"},todoLi:{position:"relative",marginBottom:"10px",padding:"5px",width:"400px",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"18px",border:"1px ridge #000000",borderRadius:"5px",wordBreak:"break-word",boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"},liInner:{display:"flex",justifyContent:"center",alignItems:"center"},editInp:{position:"absolute",top:"50%",left:"40px",zIndex:"2",transform:"translateY(-50%)",width:"230px",height:"32px",fontFamily:'"Indie Flower", cursive'},liFunc:{minWidth:"105px",display:"flex",alignItems:"center"},todoDate:{paddingTop:"4px",marginRight:"5px"},delete:{minWidth:"30px",minHeight:"30px",maxWidth:"30px",maxHeight:"30px",border:"1px ridge #000000"}}}));var D=function(e){var t=e.item,n=e.deleteData,r=e.checkData,c=e.editData,i=Object(a.useState)(t.name),o=Object(p.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(!1),x=Object(p.a)(u,2),f=x[0],j=x[1],h=Object(a.useState)(!1),m=Object(p.a)(h,2),O=m[0],k=m[1],w=C(),N=function(e,n){l(e.target.value),"Enter"===e.key&&(c(n,t.uuid),D()),"Escape"===e.key&&S()},S=function(){l(t.name),D()},D=function(){j(!1)};return Object(b.jsxs)(g.a,{className:w.todoLi,children:[Object(b.jsxs)("div",{className:w.liInner,children:[Object(b.jsx)(I.a,{onClick:function(){return r(t,t.uuid)},type:"checkbox",id:"inp_"+t.uuid,checked:t.done,color:"primary"}),f?Object(b.jsx)(d.a,{autoFocus:!0,onBlur:function(){return S()},value:s,onKeyDown:function(e){return N(e,s,t.uuid)},onChange:function(e){return N(e,s,t.uuid)},className:w.editInp,type:"text",id:"edit_"+t.uuid}):Object(b.jsx)(v.a,{onDoubleClick:function(e){return j(!0)},className:w.typography,children:t.name})]}),Object(b.jsxs)("div",{className:w.liFunc,children:[Object(b.jsx)("div",{className:w.todoDate,children:Object(b.jsx)(v.a,{className:w.typography,children:t.createdAt.substr(0,10)})}),Object(b.jsx)(y.a,{variant:"outlined",disabled:O,className:w.delete,onClick:function(){return e=t.uuid,k(!0),void n(e);var e},children:Object(b.jsx)("i",{className:"far fa-trash-alt fa-lg"})})]})]},t.uuid)},F=n(144),B=Object(f.a)((function(e){return{footer:{textAlign:"center",userSelect:"none"},footerUl:{margin:"0 auto",marginTop:"30px",width:"290px",display:"flex",justifyContent:"center",listStyle:"none"},page:{marginRight:"5px",width:"45px",height:"35px",fontSize:"20px",textAlign:"center",border:"1px ridge #000000",borderRadius:"5px",color:"#000000",cursor:"pointer",transition:"all 0.1s linear",boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)","&:hover":{backgroundColor:"#3f50b5","& $pageLink":{color:"#ffffff"}}},pageActive:{marginRight:"5px",width:"45px",height:"35px",fontSize:"20px",textAlign:"center",border:"1px ridge #000000",borderRadius:"5px",color:"#000000",backgroundColor:"#3f50b5",cursor:"pointer",boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"},pageLink:{color:"#000000",textDecoration:"none",transition:"all 0.1s linear","&:hover":{textDecoration:"none"}},pageLinkActive:{color:"#ffffff",textDecoration:"none","&:hover":{textDecoration:"none"}}}}));var T=function(e){for(var t,n,a=e.totalItems,r=e.page,c=e.setPage,i=B(),o=[],s=1;s<=Math.ceil(a/5);s++)o.push(s);return o.length>5&&(o.indexOf(r)>2?(t=r-3,n=r+2):(t=0,n=5),o.lastIndexOf(r)>o.length-4&&(t=o.length-5,n=o.length)),Object(b.jsx)("footer",{className:i.footer,children:Object(b.jsxs)(m.a,{className:i.footerUl,children:[r>1&&Object(b.jsx)(g.a,{className:i.page,onClick:function(){return c(r-1)},children:Object(b.jsx)(F.a,{className:i.pageLink,children:"<<"})}),o.slice(t,n).map((function(e){return Object(b.jsx)(g.a,{className:"".concat(e===r?i.pageActive:i.page),onClick:function(){return c(e)},children:Object(b.jsx)(F.a,{className:"".concat(e===r?i.pageLinkActive:i.pageLink),children:e})},e)})),r<o.length&&Object(b.jsx)(g.a,{className:i.page,onClick:function(){return c(r+1)},children:Object(b.jsx)(F.a,{className:i.pageLink,children:">>"})})]})})},L=n(150),z=n(147),A=Object(f.a)((function(e){return{typography:{fontFamily:'"Indie Flower", cursive',fontSize:"18px"},main:{boxSizing:"border-box",position:"relative",width:"500px",height:"1vh",margin:"0 auto",fontFamily:'"Indie Flower", cursive'},header:{marginTop:"120px",textAlign:"center",alignItems:"center",display:"flex",flexDirection:"column"},heading:{fontFamily:'"Indie Flower", cursive',userSelect:"none"},formButtons:{marginTop:"25px",width:"470px",display:"flex",justifyContent:"space-between"},todoUl:{width:"320px",margin:"0 auto",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}}));var R=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(p.a)(c,2),o=i[0],u=i[1],d=Object(a.useState)("asc"),f=Object(p.a)(d,2),j=f[0],g=f[1],O=Object(a.useState)(""),y=Object(p.a)(O,2),k=y[0],N=y[1],I=Object(a.useState)(!1),C=Object(p.a)(I,2),F=C[0],B=C[1],R=Object(a.useState)(1),E=Object(p.a)(R,2),H=E[0],U=E[1],W=Object(a.useState)(0),P=Object(p.a)(W,2),J=P[0],K=P[1],M=A(),_="https://todo-li-app.herokuapp.com/",Y=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(_),{params:{page:H,order:j,filterBy:o}});case 2:t=e.sent,console.log(t),K(t.data.count),r(t.data.rows);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=12;break}return e.prev=1,e.next=4,x.a.post("".concat(_),{name:t});case 4:Y(),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(1),n=e.t0.response.data[0].msg,V(n),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete("".concat(_).concat(t));case 3:Y(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.response);case 9:J>1&&1===n.length&&U(H-1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.patch("".concat(_).concat(n),{done:!t.done});case 2:Y();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(l.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.patch("".concat(_).concat(n),{name:t});case 3:Y(),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),a=e.t0.response.data.message,V(a);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),V=function(e){B(!0),N(e)},X=function(e,t){"clickaway"!==t&&("timeout"!==t&&"click"!==e.type||B(!1))};return Object(a.useEffect)((function(){Y()}),[o,j,H]),Object(b.jsxs)("main",{className:M.main,children:[Object(b.jsxs)("header",{className:M.header,children:[Object(b.jsx)(v.a,{className:M.heading,variant:"h1",children:"ToDo"}),Object(b.jsx)(h,{postData:$}),Object(b.jsxs)("div",{className:M.formButtons,children:[Object(b.jsx)(w,{filtration:function(e){"all"===e&&u(""),"done"===e&&u("done"),"undone"===e&&u("undone"),U(1)}}),Object(b.jsx)(S,{sorting:function(e){"asc"===e&&g("asc"),"desc"===e&&g("desc")}})]})]}),Object(b.jsx)(m.a,{className:M.todoUl,children:n.map((function(e){return Object(b.jsx)(D,{item:e,deleteData:q,checkData:G,editData:Q},e.uuid)}))}),J>5&&Object(b.jsx)(T,{setPage:U,page:H,totalItems:J}),Object(b.jsx)(L.a,{open:F,autoHideDuration:4e3,onClose:X,children:Object(b.jsx)(z.a,{onClose:function(e){return X(e)},severity:"error",children:k})})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root")),E()}},[[107,1,2]]]);
//# sourceMappingURL=main.07a6f52b.chunk.js.map