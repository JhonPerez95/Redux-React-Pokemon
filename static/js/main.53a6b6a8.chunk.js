(this["webpackJsonppokemon-redux"]=this["webpackJsonppokemon-redux"]||[]).push([[0],{61:function(e,t,a){e.exports=a(89)},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),i=a(24),s=a(6),l=a(21),p=a(19),u=a(55),m=a(15),O=function(e){return{type:"ERROR_GET_POKEMONS",payload:e}};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pokemons:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_GET_POKEMONS":return Object(m.a)({},e);case"SSUCCESS_GET_POKEMONS":case"ERROR_GET_POKEMONS":return Object(m.a)(Object(m.a)({},e),{},{pokemons:t.payload});default:return e}},f=function(e){return{type:"ERROR_INFO_POKEMON",payload:e}};var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{infoPokemon:{name:"",description:""}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_INFO_POKEMON":return Object(m.a)({},e);case"SUCCESS_INFO_POKEMON ":case"ERROR_INFO_POKEMON":return Object(m.a)(Object(m.a)({},e),{},{infoPokemon:t.payload});default:return e}},d=Object(p.c)({pokeList:E,pokeInfo:b}),v=a(20),h=a.n(v),k=a(14),j=a(36),g=a.n(j),_=function(){return g.a.get("https://pokeapi.co/api/v2/pokemon").then((function(e){return e.data}))},S=function(e){return g.a.get("https://pokeapi.co/api/v2/pokemon-species/".concat(e)).then((function(e){for(var t=e.data.flavor_text_entries,a=0;a<t.length;a++)if("es"===t[a].language.name)return{name:e.data.name,description:t[a].flavor_text}}))},N=h.a.mark(y);function y(e){var t,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(k.b)(_,e.payload);case 3:return t=n.sent,a=t.results,n.next=7,Object(k.c)({type:"SSUCCESS_GET_POKEMONS",payload:a});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(k.c)(O(n.t0));case 13:case"end":return n.stop()}}),N,null,[[0,9]])}var x=h.a.mark(P);function P(e){var t,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=e.payload,n.next=4,Object(k.b)(S,"".concat(t));case 4:return a=n.sent,n.next=7,Object(k.c)({type:"SUCCESS_INFO_POKEMON ",payload:a});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(k.c)(f(n.t0));case 13:case"end":return n.stop()}}),x,null,[[0,9]])}var w=h.a.mark(T);function T(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.d)("START_GET_POKEMONS",y)]);case 2:return e.next=4,Object(k.a)([Object(k.d)("START_INFO_POKEMON",P)]);case 4:case"end":return e.stop()}}),w)}var R=T,K=Object(u.a)(),M=Object(p.e)(d,Object(p.a)(K));K.run(R);var I,F=M,A=a(110),G=function(){return r.a.createElement(r.a.Fragment,null)},C=a(27),U=a(106),L=a(107),H=a(108),J=a(109),W=a(104),B=Object(W.a)({root:(I={maxWidth:345,minWidth:290,margin:"1em",textAlign:"center"},Object(C.a)(I,"margin","2em"),Object(C.a)(I,"padding","1em"),I),media:{minHeight:315}});var q=function(e){var t=e.name,a=e.classes,n=e.image,c=e.to,o=void 0===c?"#":c,s=e.description;return a=B(),r.a.createElement(U.a,{className:a.root},r.a.createElement(L.a,{className:a.media,image:n}),r.a.createElement(H.a,null,r.a.createElement(i.b,{to:o},r.a.createElement(J.a,{component:"p",variant:"h6"},t)),r.a.createElement(J.a,{variant:"body2",color:"textSecondary",component:"p"},s)))},z=function(){var e=Object(l.c)((function(e){return e.pokeList})).pokemons,t=Object(l.b)();return Object(n.useEffect)((function(){var a;0===e.length&&t({type:"START_GET_POKEMONS",payload:a})}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement(A.a,{container:!0,justify:"center"},e.map((function(e){var t=e.url.split("/")[e.url.split("/").length-2];return r.a.createElement(q,{name:e.name,to:"/poke-info/".concat(t),image:"".concat("https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/").concat(t,".png?raw=true"),key:t})}))))},D=function(e){var t=e.match,a=Object(l.c)((function(e){return e.pokeInfo.infoPokemon})),c=a.name,o=a.description,i=Object(l.b)(),s=t.params.id;return Object(n.useEffect)((function(){i({type:"START_INFO_POKEMON",payload:s})}),[s]),r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{container:!0,justify:"center"},r.a.createElement(q,{image:"".concat("https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/").concat(s,".png?raw=true"),name:c,description:o})))},Q=a(10),V=a(111),X=a(112),Y=Object(Q.a)({root:{flexGrow:3},grow:{flexGrow:1}})((function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(V.a,{position:"static"},r.a.createElement(X.a,{variant:"dense"},r.a.createElement(i.b,{to:"/",className:t.grow,color:"inherit"},r.a.createElement(J.a,{variant:"h6"},"Home")),r.a.createElement(J.a,{variant:"h6",color:"inherit",className:t.grow},r.a.createElement(i.b,{to:"/pokelist"},"List Pokemon")))))})),Z=function(){return r.a.createElement(Y,null)},$=r.a.createElement(l.a,{store:F},r.a.createElement(i.a,null,r.a.createElement(Z,null),r.a.createElement(s.a,{path:"/pokelist",component:z}),r.a.createElement(s.a,{path:"/poke-info/:id/",component:D})));o.a.render($,document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.53a6b6a8.chunk.js.map