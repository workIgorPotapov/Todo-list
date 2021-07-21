(this["webpackJsonpmy-todo"]=this["webpackJsonpmy-todo"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),o=n(15),s=n.n(o),l=n(27),p=n(17),u=n(38),x=n.n(u),d=n(145),f=n(136),j=Object(f.a)((function(e){return{form:{display:"flex",flexDirection:"column",alignItems:"center"},formInput:{width:"400px",marginTop:"7px"}}})),h=n(4);var m=function(e){var t=e.postData,n=Object(a.useState)(""),r=Object(p.a)(n,2),c=r[0],i=r[1],o=j(),s=function(e){e.preventDefault(),t(c),i("")};return Object(h.jsx)("form",{className:o.form,onSubmit:s,children:Object(h.jsx)(d.a,{value:c,className:o.formInput,type:"text",onChange:function(e){i(e.currentTarget.value)},onKeyDown:function(e){"Enter"===e.key&&s(e)},label:"Type something...",variant:"outlined"})})},b=n(140),g=n(141),O=n(146),v=n(142),y=n(109),k=Object(f.a)((function(e){return{typography:{fontFamily:'"Indie Flower", cursive',fontSize:"18px"},filter:{display:"flex",listStyle:"none"},filterItems:{padding:0},filterButton:{height:"30px",padding:"0 3px",fontFamily:'"Indie Flower", cursive',fontSize:"18px",border:"1px ridge #000000"}}}));var w=function(e){var t=e.filtration,n=k();return Object(h.jsxs)(b.a,{className:n.filter,children:[Object(h.jsx)(g.a,{className:n.filterItems,children:Object(h.jsx)(O.a,{ml:"3px",children:Object(h.jsx)(v.a,{onClick:function(){return t("all")},className:n.filterButton,type:"submit",variant:"contained",color:"primary",children:Object(h.jsx)(y.a,{className:n.typography,children:"All"})})})}),Object(h.jsx)(g.a,{className:n.filterItems,children:Object(h.jsx)(O.a,{ml:"3px",children:Object(h.jsx)(v.a,{onClick:function(){return t("done")},className:n.filterButton,type:"submit",variant:"contained",color:"primary",children:Object(h.jsx)(y.a,{className:n.typography,children:"Done"})})})}),Object(h.jsx)(g.a,{className:n.filterItems,children:Object(h.jsx)(O.a,{ml:"3px",children:Object(h.jsx)(v.a,{onClick:function(){return t("undone")},className:n.filterButton,type:"submit",variant:"contained",color:"primary",children:Object(h.jsx)(y.a,{className:n.typography,children:"Undone"})})})})]})},N=Object(f.a)((function(e){return{typography:{fontFamily:'"Indie Flower", cursive',fontSize:"18px",userSelect:"none"},sort:{display:"flex",alignItems:"center"},sortText:{marginRight:"10px"},sortButton:{minWidth:"30px",minHeight:"30px",maxWidth:"30px",maxHeight:"30px",border:"1px ridge #000000"}}}));var I=function(e){var t=e.sorting,n=N();return Object(h.jsxs)("div",{className:n.sort,children:[Object(h.jsx)(O.a,{mr:1,children:Object(h.jsx)(y.a,{className:n.typography,children:"Sort by date"})}),Object(h.jsx)(O.a,{mr:"3px",children:Object(h.jsx)(v.a,{onClick:function(){return t("desc")},className:n.sortButton,variant:"contained",color:"default",children:Object(h.jsx)("i",{className:"fas fa-arrow-up fa-2x"})})}),Object(h.jsx)(O.a,{mr:"3px",children:Object(h.jsx)(v.a,{onClick:function(){return t("asc")},className:n.sortButton,variant:"contained",color:"default",children:Object(h.jsx)("i",{className:"fas fa-arrow-down fa-2x"})})})]})},S=n(148),C=Object(f.a)((function(e){return{typography:{fontFamily:'"Indie Flower", cursive',fontSize:"18px",userSelect:"none"},todoLi:{position:"relative",marginBottom:"10px",padding:"5px",width:"400px",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"18px",border:"1px ridge #000000",borderRadius:"5px",wordBreak:"break-word",boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"},liInner:{display:"flex",justifyContent:"center",alignItems:"center"},editInp:{position:"absolute",top:"50%",left:"40px",zIndex:"2",transform:"translateY(-50%)",width:"230px",height:"32px",fontFamily:'"Indie Flower", cursive'},liFunc:{minWidth:"105px",display:"flex",alignItems:"center"},todoDate:{paddingTop:"4px",marginRight:"5px"},delete:{minWidth:"30px",minHeight:"30px",maxWidth:"30px",maxHeight:"30px",border:"1px ridge #000000"}}}));var D=function(e){var t=e.item,n=e.deleteData,r=e.checkData,c=e.editData,i=Object(a.useState)(t.name),o=Object(p.a)(i,2),u=o[0],x=o[1],f=Object(a.useState)(!1),j=Object(p.a)(f,2),m=j[0],b=j[1],O=Object(a.useState)(!1),k=Object(p.a)(O,2),w=k[0],N=k[1],I=C(),D=function(e,n){x(e.target.value),"Enter"===e.key&&(c(n,t.uuid),B()),"Escape"===e.key&&F()},F=function(){x(t.name),B()},B=function(){b(!1)},T=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,n(t);case 3:e.sent&&N(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(g.a,{className:I.todoLi,children:[Object(h.jsxs)("div",{className:I.liInner,children:[Object(h.jsx)(S.a,{onClick:function(){return r(t,t.uuid)},type:"checkbox",id:"inp_"+t.uuid,defaultChecked:(t.done,t.done),color:"primary"}),m?Object(h.jsx)(d.a,{autoFocus:!0,onBlur:function(){return F()},value:u,onKeyDown:function(e){return D(e,u,t.uuid)},onChange:function(e){return D(e,u,t.uuid)},className:I.editInp,type:"text",id:"edit_"+t.uuid}):Object(h.jsx)(y.a,{onDoubleClick:function(e){return b(!0)},className:I.typography,children:t.name})]}),Object(h.jsxs)("div",{className:I.liFunc,children:[Object(h.jsx)("div",{className:I.todoDate,children:Object(h.jsx)(y.a,{className:I.typography,children:t.createdAt.substr(0,10)})}),Object(h.jsx)(v.a,{variant:"outlined",disabled:w,className:I.delete,onClick:function(){return T(t.uuid)},children:Object(h.jsx)("i",{className:"far fa-trash-alt fa-lg"})})]})]},t.uuid)},F=n(144),B=Object(f.a)((function(e){return{footer:{textAlign:"center",userSelect:"none"},footerUl:{margin:"0 auto",marginTop:"30px",width:"290px",display:"flex",justifyContent:"center",listStyle:"none"},page:{marginRight:"5px",width:"45px",height:"35px",fontSize:"20px",textAlign:"center",border:"1px ridge #000000",borderRadius:"5px",color:"#000000",cursor:"pointer",transition:"all 0.1s linear",boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)","&:hover":{backgroundColor:"#3f50b5","& $pageLink":{color:"#ffffff"}}},pageActive:{marginRight:"5px",width:"45px",height:"35px",fontSize:"20px",textAlign:"center",border:"1px ridge #000000",borderRadius:"5px",color:"#000000",backgroundColor:"#3f50b5",cursor:"pointer",boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"},pageLink:{color:"#000000",textDecoration:"none",transition:"all 0.1s linear","&:hover":{textDecoration:"none"}},pageLinkActive:{color:"#ffffff",textDecoration:"none","&:hover":{textDecoration:"none"}}}}));var T=function(e){for(var t,n,a=e.itemsPerPage,r=e.totalItems,c=e.page,i=e.setPage,o=B(),s=[],l=1;l<=Math.ceil(r/a);l++)s.push(l);return s.length>5&&(s.indexOf(c)>2?(t=c-3,n=c+2):(t=0,n=5),s.lastIndexOf(c)>s.length-4&&(t=s.length-5,n=s.length)),Object(h.jsx)("footer",{className:o.footer,children:Object(h.jsxs)(b.a,{className:o.footerUl,children:[c>1&&Object(h.jsx)(g.a,{className:o.page,onClick:function(){return i(c-1)},children:Object(h.jsx)(F.a,{className:o.pageLink,children:"<<"})}),s.slice(t,n).map((function(e){return Object(h.jsx)(g.a,{className:"".concat(e===c?o.pageActive:o.page),onClick:function(){return i(e)},children:Object(h.jsx)(F.a,{className:"".concat(e===c?o.pageLinkActive:o.pageLink),children:e})},e)})),c<s.length&&Object(h.jsx)(g.a,{className:o.page,onClick:function(){return i(c+1)},children:Object(h.jsx)(F.a,{className:o.pageLink,children:">>"})})]})})},L=n(150),z=n(147),A=Object(f.a)((function(e){return{typography:{fontFamily:'"Indie Flower", cursive',fontSize:"18px"},main:{boxSizing:"border-box",position:"relative",width:"500px",height:"1vh",margin:"0 auto",fontFamily:'"Indie Flower", cursive'},header:{marginTop:"120px",textAlign:"center",alignItems:"center",display:"flex",flexDirection:"column"},heading:{fontFamily:'"Indie Flower", cursive',userSelect:"none"},formButtons:{marginTop:"25px",width:"470px",display:"flex",justifyContent:"space-between"},todoUl:{width:"320px",margin:"0 auto",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}}));var P=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(p.a)(c,2),o=i[0],u=i[1],d=Object(a.useState)("asc"),f=Object(p.a)(d,2),j=f[0],g=f[1],O=Object(a.useState)(""),v=Object(p.a)(O,2),k=v[0],N=v[1],S=Object(a.useState)(!1),C=Object(p.a)(S,2),F=C[0],B=C[1],P=Object(a.useState)(1),R=Object(p.a)(P,2),E=R[0],H=R[1],U=A(),W=5*E,J=W-5,K=n.slice(J,W),M="https://todo-api-learning.herokuapp.com/v1/task/2";Object(a.useEffect)((function(){_()}),[o,j]);var _=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat("https://todo-api-learning.herokuapp.com/v1/tasks/2"),{params:{filterBy:o,order:j}});case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=11;break}return e.prev=1,e.next=4,x.a.post(M,{name:t,done:!1});case 4:_(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),n=e.t0.response.data.message,Q(n);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete("".concat(M,"/").concat(t));case 3:_(),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),a=e.t0.response.data.message,Q(a);case 10:n.length>1&&1===K.length&&H(E-1);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.patch("".concat(M,"/").concat(n),{done:!t.done});case 2:_();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.patch("".concat(M,"/").concat(n),{name:t});case 3:_(),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),a=e.t0.response.data.message,Q(a);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(e){B(!0),N(e)},V=function(e,t){"clickaway"!==t&&("timeout"!==t&&"click"!==e.type||B(!1))};return Object(h.jsxs)("main",{className:U.main,children:[Object(h.jsxs)("header",{className:U.header,children:[Object(h.jsx)(y.a,{className:U.heading,variant:"h1",children:"ToDo"}),Object(h.jsx)(m,{postData:Y}),Object(h.jsxs)("div",{className:U.formButtons,children:[Object(h.jsx)(w,{filtration:function(e){"all"===e&&u(""),"done"===e&&u("done"),"undone"===e&&u("undone"),H(1)}}),Object(h.jsx)(I,{sorting:function(e){"asc"===e&&g("asc"),"desc"===e&&g("desc")}})]})]}),Object(h.jsx)(b.a,{className:U.todoUl,children:K.map((function(e){return Object(h.jsx)(D,{item:e,deleteData:$,checkData:q,editData:G},e.uuid)}))}),n.length>5&&Object(h.jsx)(T,{setPage:H,page:E,itemsPerPage:5,totalItems:n.length,lastItemIndex:W}),Object(h.jsx)(L.a,{open:F,autoHideDuration:4e3,onClose:V,children:Object(h.jsx)(z.a,{onClose:function(e){return V(e)},severity:"error",children:k})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root")),R()}},[[107,1,2]]]);
//# sourceMappingURL=main.bab147c8.chunk.js.map