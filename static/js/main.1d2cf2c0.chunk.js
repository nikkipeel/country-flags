(this["webpackJsonpcountry-flag-game"]=this["webpackJsonpcountry-flag-game"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/world.41c62db0.jpg"},,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(16),n(2)),s=n(3),u=n(4),l=n(5),h=n(1),m=n(10),f=function(e){var t=e.text,n=e.onClick,a=e.type;return o.a.createElement("button",{type:a||"button",onClick:n},t)},d=(n(17),function(e){var t=e.options||[],n=e.handleChange,a=e.handleSubmit,r=t.map((function(e){return o.a.createElement("label",{key:e.id},o.a.createElement("input",{type:"radio",value:e.id,checked:e.checked,onChange:n,name:"flag-choice"}),e.name)}));return o.a.createElement("form",{className:"flag-form",onSubmit:a},r,o.a.createElement(f,{text:"GUESS",type:"submit"}))}),p=(n(18),function(e){var t=e.correct,n=e.answer,a=e.onNext;return o.a.createElement("div",{className:"flag-answer"},t?"Correct!: ".concat(n):"Incorrect! Correct Answer: ".concat(n),o.a.createElement(f,{text:"NEXT",onClick:a}))}),v=(n(19),1),g=2,b=3,O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={userChoice:void 0},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(s.a)(n,[{key:"handleChange",value:function(e){this.setState({userChoice:Number(e.target.value)})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onGuess(this.state.userChoice)}},{key:"render",value:function(){var e=this.props,t=e.flag,n=e.questionState,a=e.options,r=e.answerText,c=e.onNext,i=this.state.userChoice,s=a.map((function(e){return Object(m.a)({},e,{checked:i===e.id})})),u=n===v?o.a.createElement(d,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,options:s}):o.a.createElement(p,{correct:n===b,answer:r,onNext:c});return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Which country does this flag belong to?"),u,o.a.createElement("img",{className:"flag-img",src:t,alt:"Guess the flag"}))}}]),n}(a.Component);O.defaultProps={options:[]};var E=O,y=n(8),S=n.n(y),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={countries:[],options:[],correctOption:void 0,questionState:void 0},a.onGuess=a.onGuess.bind(Object(h.a)(a)),a.nextQuestion=a.nextQuestion.bind(Object(h.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.com/v2/all").then((function(e){return e.json()})).then((function(t){var n=Math.floor(Math.random()*t.length),a=e._getOptions(n,t);e.setState({countries:t,correctOption:n,options:a,questionState:v})})).catch(console.warn)}},{key:"onGuess",value:function(e){var t=e===this.state.correctOption?b:g;this.setState({questionState:t})}},{key:"nextQuestion",value:function(){var e=this.state.countries,t=Math.floor(Math.random()*e.length),n=this._getOptions(t,e);this.setState({correctOption:t,options:n,questionState:v})}},{key:"_getOptions",value:function(e,t){for(var n=[e],a=0;n.length<4&&a<15;){var o=Math.floor(Math.random()*t.length);-1===n.indexOf(o)?n.push(o):a++}return S()(n)}},{key:"render",value:function(){var e=this.state,t=e.countries,n=e.correctOption,a=e.options,r=e.questionState,c=o.a.createElement("div",null,"Loading...");if(void 0!==n){var i=t[n],s=i.flag,u=i.name,l=a.map((function(e){return{id:e,name:t[e].name}}));c=o.a.createElement(E,{answerText:u,onGuess:this.onGuess,onNext:this.nextQuestion,options:l,questionState:r,flag:s})}return o.a.createElement("div",{style:{marginTop:"15px"}},c)}}]),n}(a.Component),k=n(9),C=n.n(k),x=(n(20),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"flag-app"},o.a.createElement("header",{className:"title-header",style:{backgroundImage:"url(".concat(C.a,")")}},o.a.createElement("h1",{className:"title-text"},"Guess The Flag")),o.a.createElement(j,null))}}]),n}(a.Component));c.a.render(o.a.createElement(x,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.1d2cf2c0.chunk.js.map