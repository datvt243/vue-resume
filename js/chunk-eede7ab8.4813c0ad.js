(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eede7ab8"],{"01ff":function(t,e,n){"use strict";n("d32c")},"3c2d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skill"},[n("div",{staticClass:"experience"},[n("div",{staticClass:"personal-skills"},[n("h2",{staticClass:"heading-primary"},[t._v("Kỹ Năng Cá Nhân")]),n("div",{staticClass:"text-inner"},[t._m(0),t._m(1),n("div",{staticClass:"clearfix"},t._l(t.getPersonalSkills,(function(t,e){return n("ProgressBar",{key:e,attrs:{title:t.title,value:t.value}})})),1)])]),n("div",{staticClass:"advanced-skills"},[n("h2",{staticClass:"heading-primary"},[t._v("Kỹ Năng Chuyên Môn")]),n("div",{staticClass:"text-inner"},[n("p",[t._v("Trong 4 năm, tôi đã thiết kế và phát triển các trang web.")]),n("div",{staticClass:"clearfix"},[n("h3",{staticClass:"heading-secondary"},[t._v("Front-end")]),n("div",{staticClass:"clearfix"},t._l(t.getFrontendSkills,(function(t,e){return n("ProgressBar",{key:e,attrs:{title:t.title,value:t.value}})})),1),n("hr"),n("div",{staticClass:"d-flex flex-wrap margin"},t._l(t.getFrontendTagsSkills,(function(t,e){return n("div",{key:e},[n("Tag",{attrs:{tag:t.text,icon:t.icon}})],1)})),0)]),n("div",{staticClass:"clearfix"},[n("h3",{staticClass:"heading-secondary"},[t._v("Thiết Kế")]),n("div",{staticClass:"clearfix"},t._l(t.getDesignSkills,(function(t,e){return n("ProgressBar",{key:e,attrs:{title:t.title,value:t.value}})})),1),n("hr"),n("div",{staticClass:"d-flex flex-wrap margin"},t._l(t.getDesignTagsSkills,(function(t,e){return n("div",{key:e},[n("Tag",{attrs:{tag:t.text,icon:t.icon}})],1)})),0)])])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" Được mọi người đánh giá là hoà đồng và dễ mến, tính tình vui vẻ, sẵn sàng giúp đỡ mọi người trong lúc gặp khó khăn."),n("br"),t._v("Những lúc rãnh thường ngồi tìm hiểu, nạp thêm những kiến thức mới vào đầu.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Khả năng làm việc độc lập tốt")]),n("li",[t._v("Làm việc nhóm, phân chia công việc")]),n("li",[t._v("Chiệu áp lực tốt")]),n("li",[t._v("Học hỏi nhanh")])])}],s=n("5530"),r=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress-bar"},[n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("p",{staticClass:"title"},[t._v(t._s(t.title))]),n("p",{staticClass:"value text-green"},[t._v(t._s(t.value)+"%")])]),n("div",{staticClass:"line"},[n("span",{staticClass:"active",style:{width:t.value+"%"}})])])},l=[],o=(n("a9e3"),{name:"ProgressBar",props:{title:{type:String,default:"ProgressBar"},value:{type:[Number,String],default:90}}}),u=o,f=(n("fb71"),n("2877")),g=Object(f["a"])(u,c,l,!1,null,"a52dec64",null),v=g.exports,d=n("c009"),p={name:"Skill",components:{ProgressBar:v,Tag:d["a"]},computed:Object(s["a"])({},Object(r["b"])(["getPersonalSkills","getFrontendSkills","getFrontendTagsSkills","getDesignSkills","getDesignTagsSkills"]))},h=p,_=(n("e218"),Object(f["a"])(h,i,a,!1,null,"053c1c5c",null));e["default"]=_.exports},"4c89":function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),a=n("5899"),s="["+a+"]",r=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(t,e,n){var i=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var s,r;return a&&"function"==typeof(s=e.constructor)&&s!==n&&i(r=s.prototype)&&r!==n.prototype&&a(t,r),t}},a9e3:function(t,e,n){"use strict";var i=n("83ab"),a=n("da84"),s=n("94ca"),r=n("6eeb"),c=n("5135"),l=n("c6b6"),o=n("7156"),u=n("c04e"),f=n("d039"),g=n("7c73"),v=n("241c").f,d=n("06cf").f,p=n("9bf2").f,h=n("58a8").trim,_="Number",m=a[_],C=m.prototype,k=l(g(C))==_,b=function(t){var e,n,i,a,s,r,c,l,o=u(t,!1);if("string"==typeof o&&o.length>2)if(o=h(o),e=o.charCodeAt(0),43===e||45===e){if(n=o.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(o.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+o}for(s=o.slice(2),r=s.length,c=0;c<r;c++)if(l=s.charCodeAt(c),l<48||l>a)return NaN;return parseInt(s,i)}return+o};if(s(_,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var x,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(k?f((function(){C.valueOf.call(n)})):l(n)!=_)?o(new m(b(e)),n,N):b(e)},y=i?v(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;y.length>S;S++)c(m,x=y[S])&&!c(N,x)&&p(N,x,d(m,x));N.prototype=C,C.constructor=N,r(a,_,N)}},c009:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"tag"},[""!=t.icon?n("span",{staticClass:"icon"},[n(t.icon,{tag:"component"})],1):t._e(),n("span",{staticClass:"text"},[t._v(t._s(t.tag))])])},a=[],s={name:"Tag",props:{icon:{type:String,default:""},tag:{type:String,default:"tagname"}}},r=s,c=(n("01ff"),n("2877")),l=Object(c["a"])(r,i,a,!1,null,"22d73ceb",null);e["a"]=l.exports},d32c:function(t,e,n){},e218:function(t,e,n){"use strict";n("4c89")},f8d3:function(t,e,n){},fb71:function(t,e,n){"use strict";n("f8d3")}}]);
//# sourceMappingURL=chunk-eede7ab8.4813c0ad.js.map