(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1464:function(t,e,n){"use strict";n(59),n(35),n(33),n(25),n(54);var r=n(27),o=n(75);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={props:{txs:{type:[Array,Object],default:function(){return[]}},title:{type:String,default:""},subtitle:{type:String,default:""},txName:{type:String,default:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)("txHashKeeper",["txExplorerUrl","txHashToRender","txStatusClass"]),{show:function(){return"multisendTxs"===this.txName?this.txs.length>0:this.txs.txHash},multisend:function(){return"multisendTxs"===this.txName}})},d=n(15),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"token-field"},[t.title?n("div",{staticClass:"title",class:{"is-spaced":t.subtitle}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.subtitle?n("div",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),t.multisend?n("ol",{staticClass:"txs"},t._l(t.txs,(function(e){var r=e.txHash,o=e.status;return n("li",{key:r,staticClass:"txs__item",class:t.txStatusClass(o)},[n("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl(t.txName,r),target:"_blank"}},[t._v("\n        "+t._s(t.txHashToRender(t.txName,r))+"\n      ")]),t._v(" "),n("div",{staticClass:"txs__status"})])})),0):n("div",{staticClass:"txs"},[n("div",{staticClass:"txs__item",class:t.txStatusClass(t.txs.status)},[n("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl(t.txName),target:"_blank"}},[t._v("\n        "+t._s(t.txHashToRender(t.txName))+"\n      ")]),t._v(" "),n("div",{staticClass:"txs__status"})])])]):t._e()}),[],!1,null,null,null);e.a=component.exports},1465:function(t,e,n){"use strict";n(280);var r={props:{activeStep:{type:Number,default:0},lastStepLabel:{type:String,default:"push"}},computed:{label:function(){return"pull"===this.lastStepLabel?this.$t("createPool"):this.$t("multisend")}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-steps",{attrs:{type:"is-primary","has-navigation":!1},model:{value:t.activeStep,callback:function(e){t.activeStep=e},expression:"activeStep"}},[n("b-step-item",{attrs:{label:t.$t("prepare")}}),t._v(" "),n("b-step-item",{attrs:{label:t.$t("approve")}}),t._v(" "),n("b-step-item",{attrs:{label:t.label}})],1)}),[],!1,null,null,null);e.a=component.exports},1469:function(t,e,n){"use strict";n.r(e);n(59),n(35),n(33),n(25),n(54),n(36);var r=n(5),o=n(27),l=n(75),c=(n(281),n(280),{name:"MSliderButton",props:{value:{type:Number,default:0}},data:function(){return{hovering:!1,dragging:!1,isClick:!1,startX:0,currentX:0,startPosition:0,newPosition:null,oldValue:this.value,showPopper:!1}},computed:{disabled:function(){return this.$parent.sliderDisabled},max:function(){return this.$parent.max},min:function(){return this.$parent.min},step:function(){return this.$parent.step},showTooltip:function(){return this.$parent.showTooltip&&this.showPopper},precision:function(){return this.$parent.precision},currentPosition:function(){return"".concat((this.value-this.min)/(this.max-this.min)*100,"%")},formatValue:function(){return String(this.value)},wrapperStyle:function(){return{left:this.currentPosition}}},watch:{dragging:function(t){this.$parent.dragging=t}},methods:{displayTooltip:function(){this.showPopper=!0},hideTooltip:function(){this.showPopper=!1},handleMouseEnter:function(){this.hovering=!0,this.displayTooltip()},handleMouseLeave:function(){this.hovering=!1,this.hideTooltip()},onButtonDown:function(t){this.disabled||(t.preventDefault(),this.onDragStart(t),window.addEventListener("mousemove",this.onDragging),window.addEventListener("touchmove",this.onDragging),window.addEventListener("mouseup",this.onDragEnd),window.addEventListener("touchend",this.onDragEnd),window.addEventListener("contextmenu",this.onDragEnd))},onLeftKeyDown:function(){this.disabled||(this.newPosition=parseFloat(this.currentPosition)-this.step/(this.max-this.min)*100,this.setPosition(this.newPosition),this.$parent.emitChange())},onRightKeyDown:function(){this.disabled||(this.newPosition=parseFloat(this.currentPosition)+this.step/(this.max-this.min)*100,this.setPosition(this.newPosition),this.$parent.emitChange())},onDragStart:function(t){this.dragging=!0,this.isClick=!0,"touchstart"===t.type&&(t.clientX=t.touches[0].clientX),this.startX=t.clientX,this.startPosition=parseFloat(this.currentPosition),this.newPosition=this.startPosition},onDragging:function(t){if(this.dragging){this.isClick=!1,this.displayTooltip(),this.$parent.resetSize();var e;"touchmove"===t.type&&(t.clientX=t.touches[0].clientX),this.currentX=t.clientX,e=(this.currentX-this.startX)/this.$parent.sliderSize*100,this.newPosition=this.startPosition+e,this.setPosition(this.newPosition)}},onDragEnd:function(){var t=this;this.dragging&&(setTimeout((function(){t.dragging=!1,t.hideTooltip(),t.isClick||(t.setPosition(t.newPosition),t.$parent.emitChange())}),0),window.removeEventListener("mousemove",this.onDragging),window.removeEventListener("touchmove",this.onDragging),window.removeEventListener("mouseup",this.onDragEnd),window.removeEventListener("touchend",this.onDragEnd),window.removeEventListener("contextmenu",this.onDragEnd))},setPosition:function(t){if(null!==t&&!isNaN(t)){t<0?t=0:t>100&&(t=100);var e=100/((this.max-this.min)/this.step),n=Math.round(t/e)*e*(this.max-this.min)*.01+this.min;n=parseFloat(n.toFixed(this.precision)),this.$emit("input",n),this.dragging||this.value===this.oldValue||(this.oldValue=this.value)}}}}),d=n(15),h={name:"MSlider",components:{SliderButton:Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"button",staticClass:"m-slider__button-wrapper",class:{"is-hovered":t.hovering,"is-dragging":t.dragging},style:t.wrapperStyle,attrs:{tabindex:"0"},on:{mouseenter:t.handleMouseEnter,mouseleave:t.handleMouseLeave,mousedown:t.onButtonDown,touchstart:t.onButtonDown,focus:t.handleMouseEnter,blur:t.handleMouseLeave,keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?null:"button"in e&&0!==e.button?null:t.onLeftKeyDown(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"right",39,e.key,["Right","ArrowRight"])?null:"button"in e&&2!==e.button?null:t.onRightKeyDown(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:(e.preventDefault(),t.onLeftKeyDown(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:(e.preventDefault(),t.onRightKeyDown(e))}]}},[n("b-tooltip",{class:{"is-hovered":t.hovering,"is-dragging":t.dragging},attrs:{position:"is-top",label:t.formatValue,active:t.showTooltip,always:""}},[n("span",{staticClass:"m-slider__button"})])],1)}),[],!1,null,null,null).exports},props:{min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},value:{type:Number,default:0},showTooltip:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},data:function(){return{sliderValue:null,oldValue:null,dragging:!1,sliderSize:1}},computed:{barSize:function(){return"".concat(100*(this.sliderValue-this.min)/(this.max-this.min),"%")},precision:function(){var t=[this.min,this.max,this.step].map((function(t){var e=(""+t).split(".")[1];return e?e.length:0}));return Math.max.apply(null,t)},barStyle:function(){return{width:this.barSize,left:"0%"}},sliderDisabled:function(){return this.disabled}},watch:{value:function(t,e){this.dragging||Array.isArray(t)&&Array.isArray(e)&&t.every((function(t,n){return t===e[n]}))||this.setValues()},dragging:function(t){t||this.setValues()},sliderValue:function(t){this.$emit("input",t)},min:function(){this.setValues()},max:function(){this.setValues()}},mounted:function(){"number"!=typeof this.value||isNaN(this.value)?this.sliderValue=this.min:this.sliderValue=Math.min(this.max,Math.max(this.min,this.value)),this.oldValue=this.sliderValue,this.$el.setAttribute("aria-valuetext",this.sliderValue),this.resetSize(),window.addEventListener("resize",this.resetSize)},beforeDestroy:function(){window.removeEventListener("resize",this.resetSize)},methods:{valueChanged:function(){return this.value!==this.oldValue},setValues:function(){if(this.min>this.max)console.error("[Error][Slider]min should not be greater than max.");else{var t=this.value;"number"!=typeof t||isNaN(t)||(t<this.min?this.$emit("input",this.min):t>this.max?this.$emit("input",this.max):(this.sliderValue=t,this.valueChanged()&&(this.oldValue=t)))}},setPosition:function(t){this.$refs.button.setPosition(t)},onSliderClick:function(t){if(!this.sliderDisabled&&!this.dragging){this.resetSize();var e=this.$refs.slider.getBoundingClientRect().left;this.setPosition((t.clientX-e)/this.sliderSize*100),this.emitChange()}},resetSize:function(){this.$refs.slider&&(this.sliderSize=this.$refs.slider.clientWidth)},emitChange:function(){var t=this;this.$nextTick((function(){t.$emit("change",t.value)}))}}},v=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-slider",attrs:{role:"slider","aria-valuemin":t.min,"aria-valuemax":t.max,"aria-disabled":t.sliderDisabled}},[n("div",{ref:"slider",staticClass:"m-slider__runway",class:{"is-disabled":t.sliderDisabled},on:{click:t.onSliderClick}},[n("div",{staticClass:"m-slider__bar",style:t.barStyle}),t._v(" "),n("slider-button",{ref:"button",model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})],1)])}),[],!1,null,null,null).exports,f=n(1464),m=n(1465);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var y={components:{"m-slider":v,Tx:f.a,Steps:m.a},head:{bodyAttrs:{class:"no-bg"}},data:function(){return{sendStrategy:"metamask",gasPriceStep:.1,alreadyPressed:!1,errorMessage:"",loading:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)("distribution",["approximateTxCost"]),{},Object(l.c)("token",["toDecimals","getTokenSymbol"]),{},Object(l.c)("metamask",["networkConfig","providerName"]),{},Object(l.c)("txStorage",["txsToRender","accountSender","allTxsMined","allTxsHaveSuccess"]),{},Object(l.d)("distribution",["list","totalTokens","txs","strategy","ipfsHash","isAirdropCreated"]),{},Object(l.d)("token",["tokenBalance"]),{},Object(l.d)("metamask",["ethBalance","gasPrice","ethAccount"]),{},Object(l.d)("txHashKeeper",["topUpTx","leftOversTx","createAirdropTx"]),{gasPriceSlider:{set:function(t){this.$store.commit("metamask/CUSTOM_GAS_PRICE",t)},get:function(){return this.$store.state.metamask.gasPrice.custom}},isGotError:function(){return 0===this.txs.length&&"push"===this.strategy},manyTransactions:function(){return!!this.$route.query.debug||this.txs.length>=4},actionButtonText:function(){if("push"===this.strategy){var t=this.accountSender.signature?this.$t("proceedWithSelfGeneratedKey"):this.$t("signKey");return"metamask"===this.sendStrategy?this.$t("proceedWithWallet"):t}return this.$t("proceed")},url:function(){return"".concat(window.location.origin,"/merkle?ipfs=").concat(this.ipfsHash)},statusText:function(){return this.allTxsHaveSuccess?this.$t("finishedMultisend"):this.$t("someTransactionsFailed")},statusClass:function(){return this.allTxsHaveSuccess?"is-success":"is-danger"}}),watch:{sendStrategy:{handler:function(t){this.errorMessage=""}}},mounted:function(){this.$nuxt.$loading.finish(),this.sendStrategy=this.manyTransactions?"selfGenerated":"metamask",this.gasPriceSlider=this.gasPrice.fast},beforeCreate:function(){0===this.$store.state.distribution.list.length&&this.$store.dispatch("router/goToIndex")},methods:{authorizeButtonAction:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.onbeforeunload=function(){return this.$t("preventReload")},t.errorMessage="",e.prev=2,"push"!==t.strategy){e.next=25;break}if("metamask"!==t.sendStrategy){e.next=9;break}return t.alreadyPressed=!0,e.next=8,t.$store.dispatch("distribution/multisend");case 8:return e.abrupt("return");case 9:if(t.accountSender.signature){e.next=16;break}return t.alreadyPressed=!0,e.next=13,t.$store.dispatch("metamask/generateSignatureForSender");case 13:t.alreadyPressed=!1,e.next=23;break;case 16:return t.alreadyPressed=!0,e.next=19,t.$store.dispatch("metamask/topUpAuthorizedSignerBalance");case 19:if(!e.sent){e.next=23;break}return e.next=23,t.$store.dispatch("distribution/multisendWithSignature",{});case 23:e.next=30;break;case 25:return t.alreadyPressed=!0,t.loading=!0,e.next=29,t.$store.dispatch("distribution/createMerkleProofAirdrop");case 29:t.loading=!1;case 30:e.next=38;break;case 32:e.prev=32,e.t0=e.catch(2),console.error(e.t0,e.t0.message),t.alreadyPressed=!1,t.loading=!1,t.errorMessage=e.t0.message;case 38:case"end":return e.stop()}}),e,null,[[2,32]])})))()},copy:function(){var t=this;navigator.clipboard.writeText(this.url).then((function(){t.$buefy.toast.open({message:t.$t("copied"),type:"is-primary"})}))}}},x=Object(d.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"m-container"},[n("Steps",{attrs:{"active-step":2,"last-step-label":t.strategy}})],1),t._v(" "),n("div",{staticClass:"columns is-multiline has-token-info is-centered"},[n("div",{staticClass:"column is-half-tablet is-one-quarter-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__value"},[t._v(t._s(t.list.length))]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("totalAddresses")))])])]),t._v(" "),n("div",{staticClass:"column is-half-tablet is-one-quarter-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__value"},[t._v("\n          "+t._s(t.toDecimals(t.totalTokens,null,10))+" "+t._s(t.getTokenSymbol)+"\n        ")]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("totalTokensToBeSent")))])])]),t._v(" "),n("div",{staticClass:"column is-half-tablet is-one-quarter-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__value"},[t._v(t._s(t.toDecimals(t.tokenBalance))+" "+t._s(t.getTokenSymbol))]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("yourBalance")))])])]),t._v(" "),"push"===t.strategy?n("div",{staticClass:"column is-half-tablet is-one-quarter-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__value",attrs:{id:"totalNumberOfTx"}},[t._v(t._s(t.txs.length))]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v("\n          "+t._s(t.$t("totalTransactionsNeeded"))+"\n        ")])])]):t._e(),t._v(" "),n("div",{staticClass:"column is-half-tablet is-one-quarter-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__value"},[t._v("\n          "+t._s(t.toDecimals(t.ethBalance,18))+" "+t._s(t.networkConfig.currencyName)+"\n        ")]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v("\n          "+t._s(t.$t("yourTokenBalance",{token:t.networkConfig.currencyName}))+"\n        ")])])]),t._v(" "),n("div",{staticClass:"column is-half-tablet is-one-quarter-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__value"},[t._v("\n          "+t._s(t.toDecimals(t.approximateTxCost,18))+" "+t._s(t.networkConfig.currencyName)+"\n        ")]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v("\n          "+t._s(t.$t("approximateCost"))+"\n        ")])])]),t._v(" "),n("div",{staticClass:"column is-half-tablet is-half-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__slider-wrapper"},[n("div",{staticClass:"token-info__value"},[t._v(t._s(t.gasPriceSlider)+" Gwei")]),t._v(" "),n("div",{staticClass:"token-info__slider"},[n("m-slider",{attrs:{min:t.gasPrice.standard,max:t.gasPrice.fast+1,step:t.gasPriceStep},model:{value:t.gasPriceSlider,callback:function(e){t.gasPriceSlider=e},expression:"gasPriceSlider"}})],1)]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("selectedNetworkSpeed")))])])])]),t._v(" "),n("div",{staticClass:"m-container"},[t.manyTransactions&&"push"===t.strategy?n("div",{staticClass:"token-field"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("multisenderOptions")))]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-half"},[n("div",{staticClass:"field"},[n("b-radio",{attrs:{"native-value":"selfGenerated",disabled:t.alreadyPressed,size:"is-medium"},model:{value:t.sendStrategy,callback:function(e){t.sendStrategy=e},expression:"sendStrategy"}},[t._v("\n              "+t._s(t.$t("selfGeneratedKey"))+"\n            ")])],1)]),t._v(" "),n("div",{staticClass:"column is-half"},[n("div",{staticClass:"field"},[n("b-radio",{attrs:{"native-value":"metamask",disabled:t.alreadyPressed,size:"is-medium"},model:{value:t.sendStrategy,callback:function(e){t.sendStrategy=e},expression:"sendStrategy"}},[t._v("\n              "+t._s(t.$t("useWallet",{provider:t.providerName}))+"\n            ")])],1)])]),t._v(" "),"selfGenerated"===t.sendStrategy?n("div",{staticClass:"burner-key"},[t._v("\n        "+t._s(t.$t("burnerKey",{key:t.accountSender.address}))+"\n      ")]):t._e(),t._v(" "),"selfGenerated"===t.sendStrategy?n("b-notification",{attrs:{closable:!1,type:"is-primary"}},[n("p",[t._v(t._s(t.$t("fastestWay")))]),t._v(" "),n("ol",[n("li",[t._v(t._s(t.$t("willGenerateBurnerKey")))]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("afterBurnerKeyReceivesFunds",{network:t.networkConfig.networkName}))+"\n          ")]),t._v(" "),n("li",[t._v(t._s(t.$t("burnerKeyWillSendBalance",{token:t.networkConfig.currencyName})))])])]):n("b-notification",{attrs:{closable:!1,type:"is-primary"}},[n("p",[t._v(t._s(t.$t("usingSelfGeneratedKey")))])])],1):t._e(),t._v(" "),t.accountSender.signature&&"selfGenerated"===t.sendStrategy?n("b-notification",{attrs:{closable:!1,type:"is-warning"}},[t._v("\n      "+t._s(t.$t("pleaseMakeCopy"))+" "),n("b",[t._v(t._s(t.accountSender.privateKey))])]):t._e(),t._v(" "),t.isGotError?t._e():n("div",{staticClass:"buttons is-centered"},[n("b-button",{attrs:{id:"confirm-proceed-button",loading:t.loading,disabled:t.txsToRender.length>0||t.isAirdropCreated||t.alreadyPressed,type:"is-primary"},on:{click:t.authorizeButtonAction}},[t._v("\n        "+t._s(t.actionButtonText)+"\n      ")])],1),t._v(" "),t.ipfsHash?n("b-notification",{attrs:{id:"ipfs-status",closable:!1,type:"is-primary"}},[t._v("\n      "+t._s(t.$t("airdropIsUploaded",{ipfsHash:t.ipfsHash}))+"\n    ")]):t._e(),t._v(" "),n("Tx",{attrs:{txs:t.topUpTx,title:t.$t("txHashOfTop"),"tx-name":"topUpTx"}}),t._v(" "),n("Tx",{attrs:{txs:t.txsToRender,title:t.$t("multisendTransactions"),"tx-name":"multisendTxs"}}),t._v(" "),n("Tx",{attrs:{txs:t.createAirdropTx,title:t.$t("txHashOfCreatingAidrop"),"tx-name":"createAirdropTx"}}),t._v(" "),n("b-notification",{attrs:{closable:!1,active:t.isGotError,type:"is-danger",role:"alert"},on:{"update:active":function(e){t.isGotError=e}}},[t._v("\n      "+t._s(t.$t("problemWithAddresses"))+"\n    ")]),t._v(" "),t.errorMessage?n("b-notification",{attrs:{closable:!1,type:"is-danger",role:"alert"}},[n("ul",[n("li",[t._v("\n          "+t._s(t.errorMessage)+"\n        ")])])]):t._e(),t._v(" "),n("b-notification",{attrs:{closable:!1,type:t.statusClass,active:t.allTxsMined},on:{"update:active":function(e){t.allTxsMined=e}}},[t._v("\n      "+t._s(t.statusText)+"\n    ")]),t._v(" "),n("Tx",{attrs:{txs:t.leftOversTx,title:t.$t("txHashOfRemaining",{token:t.networkConfig.currencyName}),subtitle:t.$t("sendindRemaining",{token:t.networkConfig.currencyName,address:t.ethAccount}),"tx-name":"leftOversTx"}}),t._v(" "),t.isAirdropCreated?n("div",{staticClass:"token-field",attrs:{id:"airdrop-url"}},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("yourAirdropLink")))]),t._v(" "),n("a",{staticClass:"button is-text-link has-merkle-link",attrs:{href:t.url}},[t._v(t._s(t.url))]),t._v(" "),n("div",{staticClass:"buttons is-centered"},[n("b-button",{attrs:{type:"is-primary"},on:{click:t.copy}},[t._v("\n          "+t._s(t.$t("copyLink"))+"\n        ")])],1)]):t._e()],1)])}),[],!1,null,null,null);e.default=x.exports}}]);