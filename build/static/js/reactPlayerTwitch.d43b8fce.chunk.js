(self.webpackChunkreact_multilevel_dropdown_menu=self.webpackChunkreact_multilevel_dropdown_menu||[]).push([[216],{6741:(e,t,r)=>{var a,l=Object.create,s=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,h=(e,t,r,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let l of o(t))p.call(e,l)||l===r||s(e,l,{get:()=>t[l],enumerable:!(a=n(t,l))||a.enumerable});return e},d=(e,t,r)=>(((e,t,r)=>{t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),c={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(c,{default:()=>P}),e.exports=(a=c,h(s({},"__esModule",{value:!0}),a));var u=((e,t,r)=>(r=null!=e?l(i(e)):{},h(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)))(r(2791)),y=r(135),m=r(365);class P extends u.Component{constructor(){super(...arguments),d(this,"callPlayer",y.callPlayer),d(this,"playerID",this.props.config.playerId||"".concat("twitch-player-").concat((0,y.randomString)())),d(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),d(this,"unmute",(()=>{this.callPlayer("setMuted",!1)}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){const{playsinline:r,onError:a,config:l,controls:s}=this.props,n=m.MATCH_URL_TWITCH_CHANNEL.test(e),o=n?e.match(m.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(m.MATCH_URL_TWITCH_VIDEO)[1];t?n?this.player.setChannel(o):this.player.setVideo("v"+o):(0,y.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((t=>{this.player=new t.Player(this.playerID,{video:n?"":o,channel:n?o:"",height:"100%",width:"100%",playsinline:r,autoplay:this.props.playing,muted:this.props.muted,controls:!!n||s,time:(0,y.parseStartTime)(e),...l.options});const{READY:a,PLAYING:i,PAUSE:p,ENDED:h,ONLINE:d,OFFLINE:c,SEEK:u}=t.Player;this.player.addEventListener(a,this.props.onReady),this.player.addEventListener(i,this.props.onPlay),this.player.addEventListener(p,this.props.onPause),this.player.addEventListener(h,this.props.onEnded),this.player.addEventListener(u,this.props.onSeek),this.player.addEventListener(d,this.props.onLoaded),this.player.addEventListener(c,this.props.onLoaded)}),a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return u.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}d(P,"displayName","Twitch"),d(P,"canPlay",m.canPlay.twitch),d(P,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerTwitch.d43b8fce.chunk.js.map