(this["webpackJsonpreact-app-start-package"]=this["webpackJsonpreact-app-start-package"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),i=(a(13),a(3)),s=a(4),u=a(6),h=a(5),m=a(7),l=a(1),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={image:""},e.handleChange=function(t){var a=t.currentTarget.value;e.setState({image:a.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.image,n=e.props.onSubmit;""!==a.trim()?(n(a),e.clearForm()):Object(m.b)("Tap text for searching")},e.clearForm=function(){e.setState({image:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(l.jsx)("header",{className:"Searchbar",children:Object(l.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(l.jsx)("input",{className:"SearchForm-input",type:"text",name:"image",value:this.state.image,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:""},e.onFormSubmit=function(t){e.setState({images:{image:t}})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{onSubmit:this.onFormSubmit}),Object(l.jsx)(m.a,{})]})}}]),a}(n.Component),p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.49097114.chunk.js.map