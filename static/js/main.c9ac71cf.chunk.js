(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(3),r=n.n(o),c=(n(13),n(14),n(15),n(4)),s=n(5),l=n(7),m=n(6),d=(n(16),n(1));n(17);function u(e){var t,n=Object(i.useState)(new Date(e.endTimeInMili).getTime()),o=Object(d.a)(n,2),r=o[0],c=(o[1],Object(i.useState)("")),s=Object(d.a)(c,2),l=s[0],m=s[1];function u(){t=setInterval((function(){!function(n){n-=(new Date).getTime();var i=Math.floor(n/1e3%60),a=Math.floor(n/6e4%60),o=Math.floor(n/36e5%24),r=Math.floor(n/864e5%24);if(r<=0&&o<=0&&a<=0&&i<=0)return clearInterval(t),m(r+"d:"+o+"h:"+a+"m:"+i+"s"),console.log("intervalId: "+t),void e.onTimerEnd(e.endTimeInMili);m(r+"d:"+o+"h:"+a+"m:"+i+"s")}(r)}),1e3)}return Object(i.useEffect)((function(){u()}),[1]),a.a.createElement("div",{className:"timer"},l)}var f=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).filterEndTimesList=function(e){console.log("called parent function from child ofr key: "+e),console.log("endtimes list length is: "+i.state.endTimesList.length),console.log(i.state.endTimesList);var t=[].concat(i.state.endTimesList);t=[].concat(t.filter((function(t){return t!==e}))),console.log("len of endList now:"+t.length),i.setState({endTimesList:t}),alert("Timer Ended. Its now: "+e)},i.state={endTime:"",endTimesList:[]},i}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"add-reminder-cont"},a.a.createElement("div",null,a.a.createElement("input",{type:"datetime-local",onChange:function(t){e.setState({endTime:t.target.value})}})),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){var t=[].concat(e.state.endTimesList);t.push(e.state.endTime.toString()),e.setState({endTimesList:t})}},"Set Reminder")),a.a.createElement("div",{className:"timersListCol"},this.state.endTimesList.map((function(t){return a.a.createElement(u,{key:t,endTimeInMili:t,onTimerEnd:function(t){return e.filterEndTimesList(t)}},a.a.createElement("div",null,t))}))))}}]),n}(a.a.Component);var v=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.c9ac71cf.chunk.js.map