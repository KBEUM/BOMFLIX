(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{10:function(e,t,a){e.exports={movieWhite:"white",title:"movie_list_title__2cURL",list:"movie_list_list__1ZG7p",prev:"movie_list_prev__3O9uV",next:"movie_list_next__3AU50",video:"movie_list_video__OnwNQ"}},22:function(e,t,a){e.exports={movieinfo:"movie_movieinfo__1ef-J",img:"movie_img__30A5f"}},43:function(e,t,a){e.exports=a(90)},48:function(e,t,a){},6:function(e,t,a){e.exports={movieWhite:"white",bomflixBlack:"#111",movieRed:"red",header:"header_header__1jm5i",scroll:"header_scroll__1KZe6",front:"header_front__8iVJt",logo:"header_logo__2AN8X",home:"header_home__3mRFA",list:"header_list__icSDz",behind:"header_behind__1MODL",search:"header_search__Trrzf",btn:"header_btn__ehroN",profile:"header_profile__1GqAz"}},7:function(e,t,a){e.exports={movieWhite:"white",bomflixBlack:"#111",container:"main_poster_container__3B15P",fade:"main_poster_fade__2Sdgo",info:"main_poster_info__eEdAX",title:"main_poster_title__2yKOF",overview:"main_poster_overview__xjliU",btn:"main_poster_btn__2LI3s",video:"main_poster_video__2dXaW"}},90:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),n=a(37),r=a.n(n),s=(a(48),a(2)),l=a(1),c=a(6),h=a.n(c),d=function(e){var t=e.movieList,a=e.searchMovieInfo,n=Object(i.useRef)(),r=Object(l.f)(),c=Object(i.useState)(!1),d=Object(s.a)(c,2),m=d[0],p=d[1];Object(i.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>20?p(!0):p(!1)}))}),[]);var u=function(){r.push("/")};return o.a.createElement("header",{className:m?"".concat(h.a.header," ").concat(h.a.scroll):"".concat(h.a.header)},o.a.createElement("div",{className:h.a.front},o.a.createElement("h1",{className:h.a.logo,onClick:u},"BOMFLIX"),o.a.createElement("p",{className:h.a.home,onClick:u},"\ud648"),o.a.createElement("p",{className:h.a.list,onClick:function(){r.push("/mymovie")}},"BoM\uc758 \uc601\ud654\ub4e4")),o.a.createElement("div",{className:h.a.behind},o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var i=n.current.value;t.searchMovie(i).then((function(e){a(e)})),n.current.value=""}},o.a.createElement("input",{className:h.a.search,size:"15",ref:n,type:"search",placeholder:"\uc81c\ubaa9"}),o.a.createElement("button",{className:h.a.btn},o.a.createElement("i",{className:"fas fa-search"}))),o.a.createElement("div",null,o.a.createElement("img",{className:h.a.profile,src:"./image/profile.jpg",alt:"profile"}))))},m=a(7),p=a.n(m),u=function(e){var t=e.movie,a=e.getVideo,n=e.movieKey,r=e.movieId;Object(i.useEffect)((function(){u([])}),[t]);var l,c,h=Object(i.useState)([]),d=Object(s.a)(h,2),m=d[0],u=d[1];return o.a.createElement("section",{className:p.a.container,style:{backgroundImage:"".concat(t?"url(//image.tmdb.org/t/p/original/".concat(t.backdrop_path||t.poster_path,")"):""),backgroundSize:"cover",backgroundPosition:"center center"}},o.a.createElement("div",{className:p.a.info},o.a.createElement("h1",{className:p.a.title},t?t.title||t.original_title:"\uac80\uc0c9\uacb0\uacfc\uc5c6\uc74c"),o.a.createElement("div",{className:p.a.overview},t&&(l=t.overview,c=300,(null===l||void 0===l?void 0:l.length)>c?l.substr(0,c)+"...":l)),t?o.a.createElement("button",{className:p.a.btn,onClick:function(){u(t),a(t),m.id===r&&u([])}},m.id===r?"\u2b1b TRAILER":"\u25b6 TRAILER"):""),m.id===r?o.a.createElement("iframe",{className:p.a.video,id:"player",type:"text/html",title:"mainPoster",src:"//www.youtube.com/embed/".concat(n,"?enablejsapi=1&autoplay=1&mute=1"),allow:"autoplay",frameBorder:"0",allowFullScreen:"allowFullScreen"}):o.a.createElement("div",{className:p.a.fade}))},v=a(24),g=a(39),f=a.n(g),b=a(22),_=a.n(b),w=function(e){var t=e.movie,a=e.addClick;return o.a.createElement("div",{className:_.a.movieinfo,onClick:function(){a(t)}},o.a.createElement("img",{className:_.a.img,src:"//image.tmdb.org/t/p/original/".concat(t.poster_path),alt:"poster"}))},y=a(10),j=a.n(y),k=(a(68),a(69),function(e){var t=e.title,a=e.typeOfList,n=e.movieList,r=e.getVideo,l=e.movieKey,c=e.movieId,h=function(e){e.currentSlide,e.slideCount;var t=Object(v.a)(e,["currentSlide","slideCount"]);return o.a.createElement("button",Object.assign({},t,{className:j.a.prev}),"<")},d=function(e){e.currentSlide,e.slideCount;var t=Object(v.a)(e,["currentSlide","slideCount"]);return o.a.createElement("button",Object.assign({},t,{className:j.a.next}),">")},m={arrows:!0,prevArrow:o.a.createElement(h,null),nextArrow:o.a.createElement(d,null),infinite:!0,speed:500,slidesToShow:7,slidesToScroll:4,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:2,initialSlide:2}},{breakpoint:420,settings:{slidesToShow:1,slidesToScroll:1}}]},p=Object(i.useState)([]),u=Object(s.a)(p,2),g=u[0],b=u[1],_=function(e){b(e),r(e),g.id===c&&b([])};return o.a.createElement("section",null,o.a.createElement("h1",{className:j.a.title},t),o.a.createElement("ul",{className:j.a.list},o.a.createElement(f.a,m,a.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(w,{movie:e,movieList:n,addClick:_}))})))),g.id===c&&o.a.createElement("iframe",{className:j.a.video,id:"player",type:"text/html",title:"movieList",src:"//www.youtube.com/embed/".concat(l,"?enablejsapi=1&autoplay=1&mute=1"),allow:"autoplay",frameBorder:"0",allowFullScreen:"allowFullScreen"}))}),E=function(e){var t=e.movieList,a=Object(i.useState)([]),n=Object(s.a)(a,2),r=n[0],l=n[1],c=Object(i.useState)([]),h=Object(s.a)(c,2),m=h[0],p=h[1],v=Object(i.useState)([]),g=Object(s.a)(v,2),f=g[0],b=g[1],_=Object(i.useState)(),w=Object(s.a)(_,2),y=w[0],j=w[1],E=Object(i.useState)(""),O=Object(s.a)(E,2),S=O[0],L=O[1],T=Object(i.useState)(""),N=Object(s.a)(T,2),M=N[0],x=N[1];Object(i.useEffect)((function(){t.getMovies("top_rated").then((function(e){return b(e)})),t.getMovies("popular").then((function(e){return p(e)})),t.getMovies("upcoming").then((function(e){l(e),j(e[Math.floor(Math.random()*e.length)])}))}),[t]);var A=function(e){x(e.id),t.getVideoUrl(e.id).then((function(e){L(null==e?"":e.key)}))};return o.a.createElement("div",null,o.a.createElement(d,{movieList:t,getVidoe:A,movieKey:S,searchMovieInfo:function(e){j(e)}}),o.a.createElement(u,{movieList:t,movie:y,getVideo:A,movieKey:S,movieId:M}),o.a.createElement(k,{title:"Top Rated Movies",typeOfList:f,movieList:t,getVideo:A,movieKey:S,movieId:M}),o.a.createElement(k,{title:"Popular Movies",typeOfList:m,movieList:t,getVideo:A,movieKey:S,movieId:M}),o.a.createElement(k,{title:"Upcoming Movies",typeOfList:r,movieList:t,getVideo:A,movieKey:S,movieId:M}))},O=a(18),S=a(23),L=[{id:637,original_title:"Life Is Beautiful",poster_path:"/74hLDKjD5aGYOotO6esUVaeISa2.jpg",title:"\uc778\uc0dd\uc740 \uc544\ub984\ub2e4\uc6cc",overview:"A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",backdrop_path:"/6aNKD81RHR1DqUUa8kOZ1TBY1Lp.jpg"},{id:47002,original_title:"\u30e9\u30d6\u30ec\u30bf\u30fc",overview:"When exchanging letters two women discover new things about a deceased man they used to know.",backdrop_path:"/2jSwNd2dYBetFq2922olNES2yzj.jpg",poster_path:"/e5lkke4fKEZNfl28gCOe6MrAjhA.jpg",title:"Love Letter"},{id:313369,original_title:"La La Land",overview:"Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",poster_path:"/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",backdrop_path:"/qJeU7KM4nT2C1WpOrwPcSDGFUWE.jpg",title:"La La Land"},{id:244786,original_title:"Whiplash",overview:"Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",poster_path:"/6uSPcdGNA2A6vJmCagXkvnutegs.jpg",title:"Whiplash",backdrop_path:"/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg"},{id:122906,backdrop_path:"/5ZoFGrFCKP0QrcfVwOIHiAwunBg.jpg",original_title:"About Time",overview:"The night after another unsatisfactory New Year party, Tim's father tells his son that the men in his family have always had the ability to travel through time. Tim can't change history, but he can change what happens and has happened in his own life \u2013 so he decides to make his world a better place... by getting a girlfriend. Sadly, that turns out not to be as easy as he thinks.",poster_path:"/ls6zswrOZVhCXQBh96DlbnLBajM.jpg",title:"About Time"},{id:84111,backdrop_path:"/gYULvXs45yTcYpTBrPk1GSRZTMh.jpg",overview:"Adolescence is like a heavy rain. Even though you catch a cold from it, you still look forward to experiencing it once again. Ko-Teng has several close friends who had a crush on Shen Chia-Yi. Those friends of Ko's thus moved in unison from Ching Chengs junior high school straight into the senior high school division in pursuit of her. Naughty in nature, Ko was ordered by their homeroom teacher to sit in front of honor student Shen for her to keep close tabs on him. The two hadn't hit it off at first but Ko gradually fell for Shen, who was always pressuring him to study hard. On the other hand, Shen became impressed by the contrasting values Ko represented. Ko started pursuing Shen but Shen remained hesitant.",original_title:"\u90a3\u4e9b\u5e74\uff0c\u6211\u5011\u4e00\u8d77\u8ffd\u7684\u5973\u5b69",poster_path:"/vHWmZaITaOn3HhZermsJdSatuiN.jpg",title:"\uadf8 \uc2dc\uc808 \uc6b0\ub9ac\uac00 \uc88b\uc544\ud588\ub358 \uc18c\ub140"},{id:13,backdrop_path:"/7c9UVPPiTPltouxRVY6N9uugaVA.jpg",original_title:"Forrest Gump",overview:"A man with a low IQ has accomplished great things in his life and been present during significant historic events\u2014in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",poster_path:"/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg",title:"Forrest Gump"}],T=[{id:10637,backdrop_path:"/cMUReq46MSz6WWsdW1Gu8oecJlc.jpg",original_title:"Remember the Titans",overview:"After leading his football team to 15 winning seasons, coach Bill Yoast is demoted and replaced by Herman Boone \u2013 tough, opinionated and as different from the beloved Yoast as he could be. The two men learn to overcome their differences and turn a group of hostile young men into champions.",poster_path:"/tzbFc3nOeuJnuPQhQ08k8eLImu5.jpg",title:"Remember the Titans"},{id:38,backdrop_path:"/ibw3MvF2GLHVcPJd2PDtOQcMDPq.jpg",original_title:"Eternal Sunshine of the Spotless Mind",overview:"Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.",poster_path:"/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",title:"Eternal Sunshine of the Spotless Mind"},{id:475557,backdrop_path:"/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",original_title:"Joker",overview:"During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",poster_path:"/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",title:"Joker"},{id:530915,backdrop_path:"/2lBOQK06tltt8SQaswgb8d657Mv.jpg",original_title:"1917",overview:"At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",poster_path:"/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",title:"1917"},{id:587289,backdrop_path:"/dRW58Pa2cg4OYfdCxskB5xR3ki6.jpg",original_title:"Loving Vincent: The Impossible Dream",overview:"A 60 minute documentary detailing the journey it took two passionate filmmakers to achieve their impossible dream, creating the world's first fully painted feature film.",poster_path:"/3otJ4tVumhmkd3PXFxyaTcXnYfn.jpg",title:"Loving Vincent: The Impossible Dream"},{id:281957,backdrop_path:"/nMfH0LMMFk2ovyURkYvyTI99nSo.jpg",original_title:"The Revenant",overview:"In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.",poster_path:"/ji3ecJphATlVgWNY0B0RVXZizdf.jpg",title:"The Revenant"},{id:27205,backdrop_path:"/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",original_title:"Inception",overview:"Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",poster_path:"/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",title:"Inception"}],N=[{id:448491,backdrop_path:"/ok2nXtQIAkQNiB9rwDQ712EVp0N.jpg",original_title:"Little Forest",overview:"A young woman leaves the city to return to her hometown in the countryside. Seeking to escape the hustle and bustle of the city, she becomes self-sufficient in a bid to reconnect with nature.",poster_path:"/ikAzHRcJr0wn2e6d4Vt0j5EfEvv.jpg",title:"\ub9ac\ud2c0 \ud3ec\ub808\uc2a4\ud2b8"},{id:31850,backdrop_path:"/nMxucwkm4dAT7kfxV98dXqs6P0w.jpg",original_title:"\ub625\ud30c\ub9ac",overview:"Sang-hoon is a lowlife gangster, a debt collector exercising thuggish ways to collect his money. The recipient of nothing but anger since his childhood, he expresses himself through violence. When he finally encounters someone who can stand up to him, feisty school-girl Yoon-hee they become unlikely friends.",poster_path:"/cfqcOlxWKO6mTOiZWujiDKQ0Adu.jpg",title:"Breathless"},{id:165213,backdrop_path:"/crZlP64NPH0OFN1eMt5xtYLJ9mA.jpg",original_title:"New World",overview:"An undercover cop has his loyalties tested when the boss of the corporate gang he's spent years infiltrating dies.",poster_path:"/vEmpgNs0ShaljLUctzVKILrAJ6d.jpg",title:"\uc2e0\uc138\uacc4"},{id:38015,backdrop_path:"/qBpup0yPaLPxmSu3TQHwchhqdFb.jpg",original_title:"\ud0c0\uc9dc",overview:"A guy with a talent for cards makes his way into the dangerous world of underground gambling in this crime thriller from South Korea. Go-ni is a small-town guy with a big appetite for gambling.",poster_path:"/lIIGKcD9CmCYPYaCOZg3rTw0bRS.jpg",title:"Tazza: The High Rollers"},{id:42190,backdrop_path:"/96iiyG07u4RepzW9M04B8N3JaOz.jpg",original_title:"\ud074\ub798\uc2dd",overview:"Shy Ji-hae's friend is having problems expressing her feelings to the boy she loves, so she asks Ji-hae to write e-mails to him in her name. As the boy falls in love with her letters, Ji-hae discovers the story of her mother's romance which is remarkably similar to her own circumstances.",poster_path:"/sNe23Tsia9usMBN5TW2KXPJdq2K.jpg",title:"The Classic"},{id:269494,backdrop_path:"/iuro932kXoNkguoRD49PlfYPHOE.jpg",original_title:"\ub05d\uae4c\uc9c0 \uac04\ub2e4",overview:"On the way to his mother\u2019s funeral, a detective accidentally hits a person with his car. He takes the body with him and puts it into his mother\u2019s coffin. The moment he feels relieved, he receives a call. This caller insists that he saw the detective\u2019s hit-and-run, but instead of asking for money, he wants to know about the body\u2019s whereabouts, leading to a do-or-die showdown of the witness and detective.",poster_path:"/alSvJr1pyGgEKMkEM06N9kMjSoj.jpg",title:"A Hard Day"},{id:249277,overview:'Jjang-gu joins "Monster," a violent organization at his high school. As a rite of passage, he learns a lesson about being a man while following the course.',title:"Wish",original_title:"\ubc14\ub78c",poster_path:"/nD5ROQV0AFFcalVokVgHP1zSUp8.jpg"}],M=function(e){var t=e.movieList,a=[].concat(Object(S.a)(L),Object(S.a)(T)),n=a[Math.floor(Math.random()*a.length)],r=Object(i.useState)(n),l=Object(s.a)(r,2),c=l[0],h=l[1],m=Object(i.useState)(""),p=Object(s.a)(m,2),v=p[0],g=p[1],f=Object(i.useState)(""),b=Object(s.a)(f,2),_=b[0],w=b[1],y=function(e){w(e.id),t.getVideoUrl(e.id).then((function(e){g(null==e?"":e.key)}))};return o.a.createElement("div",null,o.a.createElement(d,{movieList:t,getVidoe:y,movieKey:v,searchMovieInfo:function(e){h(e)}}),o.a.createElement(u,{movieList:t,movie:c,getVideo:y,movieKey:v,movieId:_}),o.a.createElement(k,{title:"\ubcf4\uace0 \ubcf4\uace0 \ub610 \ubcf4\uace0 \uc0dd\uac01\ub098\uba74 \ub2e4\uc2dc \ubcf4\ub294 \uc601\ud654",typeOfList:L,movieList:t,getVideo:y,movieKey:v,movieId:_}),o.a.createElement(k,{title:"\uc633\uac8c \ub41c \uc601\ud654\ub780 \uc774\ub7f0\uac70\uc9c0",typeOfList:T,movieList:t,getVideo:y,movieKey:v,movieId:_}),o.a.createElement(k,{title:"\ubbf8\uc6cc\ub3c4 \ub2e4\uc2dc \ud55c\ubc88 \ud55c\uad6d\uc601\ud654",typeOfList:N,movieList:t,getVideo:y,movieKey:v,movieId:_}))};var x=function(e){var t=e.movieList;return o.a.createElement("div",null,o.a.createElement(O.a,{basename:"/bomflix"},o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/"},o.a.createElement(E,{movieList:t})),o.a.createElement(l.a,{path:"/mymovie"},o.a.createElement(M,{movieList:t})))))},A=(a(70),a(8)),I=a.n(A),V=a(16),K=a(40),R=a(41),W=a(42),B=a.n(W),C=new(function(){function e(){Object(K.a)(this,e),this.tmdb=B.a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"2a1bfe1f49ee265b4904a18ffff62b65",language:"en_US",page:1}})}return Object(R.a)(e,[{key:"getMovies",value:function(){var e=Object(V.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.tmdb.get("movie/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getVideoUrl",value:function(){var e=Object(V.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.tmdb.get("movie/".concat(t,"/videos"));case 2:return a=e.sent,e.abrupt("return",a.data.results[0]);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchMovie",value:function(){var e=Object(V.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.tmdb.get("search/movie?query=".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data.results[0]);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}());r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,{movieList:C})),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.978b752e.chunk.js.map