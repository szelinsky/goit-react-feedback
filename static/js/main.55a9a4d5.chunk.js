(this["webpackJsonpgoit-react-feedback"]=this["webpackJsonpgoit-react-feedback"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),l=a(3),u=a(4),i=a(5),s=a(7),d=a(6),m=a(8),b=function(e){var t=e.title,a=e.children;return r.a.createElement("section",null,r.a.createElement("h3",null,t),a)},g=(a(14),function(e){var t=e.good,a=e.neutral,n=e.bad,o=e.total,c=e.positivePercentage,l=void 0===c?0:c;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Good: ",t),r.a.createElement("p",null,"Neutral: ",a),r.a.createElement("p",null,"Bad: ",n),r.a.createElement("p",null,"Total: ",o),r.a.createElement("p",null,"Positive feedback: ",l,"%"))}),p=function(e){var t=e.options;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",name:"good",onClick:t},"Good"),r.a.createElement("button",{type:"button",name:"neutral",onClick:t},"Neutral"),r.a.createElement("button",{type:"button",name:"bad",onClick:t},"Bad"))},h=function(e){var t=e.message;return r.a.createElement("p",null,t)},E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={good:0,neutral:0,bad:0},a.handleChange=function(e){console.dir(e.target);var t=e.target.name;a.setState((function(e){return Object(l.a)({},t,e[t]+1)}))},a.countTotalFeedback=function(){var e=a.state;return e.good+e.neutral+e.bad},a.countPositiveFeedbackPercentage=function(){var e=a.state.good;return Math.round(100*e/a.countTotalFeedback())},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{title:"Please leave feedback"},r.a.createElement(p,{options:this.handleChange})),r.a.createElement(b,{title:"Statistics"},0!==this.countTotalFeedback()?r.a.createElement(g,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):r.a.createElement(h,{message:"No feedback given"})))}}]),t}(n.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.55a9a4d5.chunk.js.map