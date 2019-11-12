(this["webpackJsonpmovie-app-redux"]=this["webpackJsonpmovie-app-redux"]||[]).push([[0],{33:function(e,t,a){e.exports=a(49)},38:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),c=(a(38),a(4)),m=a(14),l=a(13),u=a.n(l),d=function(e){return r.a.createElement("div",null,r.a.createElement(u.a,{name:"rate1",starCount:5,value:e.count}))},s=Object(c.b)(null,(function(e){return{delete:function(t){return e(function(e){return{type:"DELETE_MOVIE",payload:e}}(t))},update:function(t){return e(function(e){return{type:"UPDATE_MOVIE",payload:e}}(t))}}}))((function(e){return r.a.createElement("div",{key:e.movie.id},r.a.createElement("img",{className:"movie-img",src:e.movie.image,style:{width:"215px",height:"290px"}}),r.a.createElement("h2",{className:"title"},e.movie.title),r.a.createElement("h4",{className:"annee"},e.movie.year),r.a.createElement(d,{count:e.movie.rating}),r.a.createElement(m.b,{to:"/movie/".concat(e.movie.id)},r.a.createElement("button",{className:"btn"},"Movie Description")),r.a.createElement("button",{className:"btn",onClick:function(){return function(t){var a=prompt(" New Movie Image"),n=prompt("New Movie Title"),r=prompt("New Movie Year"),i=prompt("Movie Rating");e.update({id:t.id,image:a,title:n,year:r,rating:i})}(e.movie)}},"Edit"),r.a.createElement("button",{className:"btn",onClick:function(){return e.delete(e.movie.id)}},"Remove"))})),p=(a(48),a(27)),h=a(28),v=a(31),g=a(29),E=a(32),f=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){a.setState({text:e},(function(){return a.props.search({rating:a.state.rating,keyword:a.state.text})}))},a.state={rating:3,text:""},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"onStarClick",value:function(e,t,a){var n=this;this.setState({rating:e},(function(){return n.props.search({rating:n.state.rating,keyword:n.state.text})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u.a,{name:"rate1",starCount:5,value:this.state.rating,onStarClick:this.onStarClick.bind(this)}),r.a.createElement("input",{type:"text",name:"lname",placeholder:"Search Movies",onChange:function(t){return e.handleChange(t.target.value)}}))}}]),t}(n.Component),y=Object(c.b)(null,(function(e){return{search:function(t){return e({type:"SEARCH_MOVIE",payload:{rating:(a=t).rating,keyword:a.keyword}});var a}}}))(f);var M=Object(c.b)((function(e){return{movies:e.movie}}),(function(e){return{add:function(t){return e(function(e){return{type:"ADD_MOVIE",payload:e}}(t))}}}))((function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(y,{movie:e.movie}),r.a.createElement("div",{className:"movies"},e.movies.map((function(e){return r.a.createElement(s,{movie:e})}))),r.a.createElement("button",{className:"btn",onClick:function(t){return function(){var t=Math.round(1e3*Math.random()),a=prompt("Movie Image"),n=prompt("Movie Title"),r=prompt("Movie Year"),i=prompt("Movie Rating");e.add({id:t,image:a,title:n,year:r,rating:i})}()}},"+"))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(11),b=a(30),w=[{id:Math.round(1e3*Math.random()),image:"https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1565363492/amc-cdn/production/2/movies/53700/53730/PosterDynamic/87999.jpg",title:"Maleficent",year:"2014",rating:3},{id:Math.round(1e3*Math.random()),image:"http://fr.web.img6.acsta.net/c_215_290/pictures/19/07/24/11/24/3992643.jpg",title:"Scary Stories",year:"2019",rating:5},{id:Math.round(1e3*Math.random()),image:"https://m.media-amazon.com/images/M/MV5BYTZmOTY1MDAtOTYxOC00YTQ1LTlkNDUtMmJiZDEyYmE1YmRmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR16,0,182,268_AL_.jpg",title:"Drive",year:"2011",rating:2},{id:Math.round(1e3*Math.random()),image:"https://www.promenadesfilms.com/medias/promenadesfilms/Cartel%20El%20Silencio%20del%20Viento.jpg",title:"El Cilencio Del Viento",year:"2017",rating:1},{id:Math.round(1e3*Math.random()),image:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Artemis_Fowl_poster.jpg/220px-Artemis_Fowl_poster.jpg",title:"Sartemis Fowl",year:"2019",rating:4},{id:Math.round(1e3*Math.random()),image:"https://media.services.cinergy.ch/media/box1600/2adad8d68850dd65b02425ea64c3c758955f22f6.jpg",title:"Valerian",year:"2017",rating:3},{id:Math.round(1e3*Math.random()),image:"http://fr.web.img5.acsta.net/c_215_290/pictures/14/08/20/12/54/429006.jpg",title:"Snatch",year:"2000",rating:2}],O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MOVIE":return[].concat(Object(b.a)(e),[t.payload]);case"DELETE_MOVIE":return e.filter((function(e){return e.id!==t.payload}));case"UPDATE_MOVIE":return e.map((function(e){return e.id===t.payload.id?t.payload:e}));case"SEARCH_MOVIE":return w.filter((function(e){return e.rating>=t.payload.rating&&e.title.toUpperCase().includes(t.payload.keyword.toUpperCase().trim())}));default:return e}},k=Object(_.b)({movie:O}),j=Object(_.c)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),C=Object(c.b)((function(e){return{movies:e.movie}}))((function(e){var t=e.movies.filter((function(t){return String(t.id)==e.match.params.id}))[0];return r.a.createElement("div",null,r.a.createElement("img",{src:t.image}),r.a.createElement("h1",null,t.title),r.a.createElement("p",null,t.year))})),D=a(7);o.a.render(r.a.createElement(m.a,null,r.a.createElement(c.a,{store:j},r.a.createElement(D.a,{exact:!0,path:"/",component:M}),r.a.createElement(D.a,{exact:!0,path:"/movie/:id",component:C}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.d3ec4154.chunk.js.map