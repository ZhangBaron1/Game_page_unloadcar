window.__require=function t(o,e,n){function i(a,c){if(!e[a]){if(!o[a]){var s=a.split("/");if(s=s[s.length-1],!o[s]){var l="function"==typeof __require&&__require;if(!c&&l)return l(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+a+"'")}a=s}var h=e[a]={exports:{}};o[a][0].call(h.exports,function(t){return i(o[a][1][t]||t)},h,h.exports,t,o,e,n)}return e[a].exports}for(var r="function"==typeof __require&&__require,a=0;a<n.length;a++)i(n[a]);return i}({adForm:[function(t,o,e){"use strict";cc._RF.push(o,"f8733kEJu9LFpyyVBtzAMun","adForm");var n,i=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var o,e=1,n=arguments.length;e<n;e++)for(var i in o=arguments[e])Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);return t}).apply(this,arguments)},a=this&&this.__decorate||function(t,o,e,n){var i,r=arguments.length,a=r<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,o,e,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(o,e,a):i(o,e))||a);return r>3&&a&&Object.defineProperty(o,e,a),a},c=this&&this.__spreadArrays||function(){for(var t=0,o=0,e=arguments.length;o<e;o++)t+=arguments[o].length;var n=Array(t),i=0;for(o=0;o<e;o++)for(var r=arguments[o],a=0,c=r.length;a<c;a++,i++)n[i]=r[a];return n};Object.defineProperty(e,"__esModule",{value:!0});var s=t("../../script/config/UIForms"),l=t("../../script/framework/AD_POSITION"),h=t("../../script/framework/ui/UIForm"),d=t("../../script/framework/utils/Common"),p=t("./adViewItem"),u=cc._decorator,m=u.ccclass,f=u.property,y=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.endContainer=null,o.endContainer_layout=null,o.exportContainer=null,o.exportContainer_scroll=null,o.exportContainer_layout=null,o.btnExportClose=null,o.recommendContainer=null,o.recommendContainer_scroll=null,o.recommendContainer_layout=null,o.recommendClose=null,o.formMask=null,o.btnBack=null,o.floatContainer=null,o.floatFull=null,o.bannerContainer=null,o.bannerContainer_scroll=null,o.bannerContainer_layout=null,o.bannerRightContainer=null,o.bannerRightContainer_scroll=null,o.bannerRightContainer_layout=null,o.topContainer=null,o.topContainer_scroll=null,o.topContainer_layout=null,o.leftContainer=null,o.leftContainer_scroll=null,o.leftContainer_layout=null,o.rightContainer=null,o.rightContainer_scroll=null,o.rightContainer_layout=null,o.leftSingleContainer=null,o.leftSingleContainer_scroll=null,o.leftSingleContainer_layout=null,o.rightSingleContainer=null,o.rightSingleContainer_scroll=null,o.rightSingleContainer_layout=null,o.rotateContainer=null,o.rotateContainer_layout=null,o.hotContainer=null,o.hotContainer_scroll=null,o.hotContainer_layout=null,o.hotClose=null,o.centerContainer=null,o.centerContainer_scroll=null,o.centerContainer_layout=null,o.centerClose=null,o.centerRandomClick=null,o.sideContainer=null,o.sideView=null,o.sideLayout=null,o.btnSideShow=null,o.btnSideHide=null,o.replaceContainer=null,o.replaceLayout=null,o.totalContainer=null,o.totalLayout=null,o.totalView=null,o.totalClose=null,o.hot1=null,o.hot2=null,o.hot3=null,o.mShowAd=l.AD_POSITION.NONE,o.mPrevShowAd=l.AD_POSITION.NONE,o.mScrollVec=[],o.mEndLogic=[],o.mMoveSpeed=2,o.mFloatIndex=0,o.mFloatRefresh=3,o.mFloatCache={},o.localAdFromTag="",o.clickTime=0,o.mAdItemList=[],o.floatRuning=!1,o.mUserScrolling=!1,o.preloadIndex=-1,o.flashBanner01=0,o.gameCenterWudian=0,o.gGPopWudian=0,o}return i(o,t),o.prototype.addListener=function(){var t=this;this.btnBack.on(cc.Node.EventType.TOUCH_START,this.onReturnBack,this),this.totalClose.on(cc.Node.EventType.TOUCH_START,this.onBack,this),this.btnExportClose.on(cc.Node.EventType.TOUCH_START,this.onExportClose,this),this.recommendClose.on(cc.Node.EventType.TOUCH_START,this.onRecommendClose,this),this.centerClose.on(cc.Node.EventType.TOUCH_START,this.onCenterClose,this),this.centerRandomClick.on(cc.Node.EventType.TOUCH_START,this.onCenterRandonClick,this),this.hotClose.on(cc.Node.EventType.TOUCH_START,this.onHotClose,this),this.btnSideShow.on(cc.Node.EventType.TOUCH_START,this.sideOut,this),this.btnSideHide.on(cc.Node.EventType.TOUCH_START,this.sideIn,this),moosnow.event.addListener(moosnow.PLATFORM_EVENT.AD_VIEW_CHANGE,this,this.onAdChange),moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_BANNER_ERROR,this,this.onBannerError),moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_FLASH_BANNER_HIDE,this,this.onHideFlashBanner),moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_BANNER_HIDE,this,function(){t.onHideFlashBanner()})},o.prototype.removeListener=function(){this.btnBack.off(cc.Node.EventType.TOUCH_START,this.onReturnBack,this),this.totalClose.off(cc.Node.EventType.TOUCH_START,this.onBack,this),this.btnExportClose.on(cc.Node.EventType.TOUCH_START,this.onExportClose,this),this.recommendClose.off(cc.Node.EventType.TOUCH_START,this.onRecommendClose,this),this.centerClose.off(cc.Node.EventType.TOUCH_START,this.onCenterClose,this),this.centerRandomClick.off(cc.Node.EventType.TOUCH_START,this.onCenterRandonClick,this),this.hotClose.off(cc.Node.EventType.TOUCH_START,this.onHotClose,this),this.btnSideShow.off(cc.Node.EventType.TOUCH_START,this.sideOut,this),this.btnSideHide.off(cc.Node.EventType.TOUCH_START,this.sideIn,this),moosnow.event.removeListener(moosnow.PLATFORM_EVENT.AD_VIEW_CHANGE,this),moosnow.event.removeListener(moosnow.PLATFORM_EVENT.ON_BANNER_ERROR,this),moosnow.event.removeListener(moosnow.PLATFORM_EVENT.ON_FLASH_BANNER_HIDE,this),moosnow.event.removeListener(moosnow.PLATFORM_EVENT.ON_BANNER_HIDE,this)},o.prototype.onHideFlashBanner=function(){this.replaceContainer.active=!1},o.prototype.onBannerError=function(t){var o=0,e=0;if(this.mAdData&&this.mAdData.indexLeft){this.hasAd(l.AD_POSITION.EXPORT)||Lite.ui.hasUIForm(s.default.HomeForm)||Lite.ui.hasUIForm(s.default.EndForm)?this.setPosition(this.mAdData.indexLeft,"\u66ff\u6362\u5e73\u53f0\u7684Banner",this.onAdCancel,!0):this.setPosition(this.mAdData.indexLeft,"\u66ff\u6362\u5e73\u53f0\u7684Banner",null,!0),t.horizontal==moosnow.BANNER_HORIZONTAL.LEFT?o=-cc.winSize.width/2+this.replaceContainer.width/2:t.horizontal==moosnow.BANNER_HORIZONTAL.CENTER?o=0:t.horizontal==moosnow.BANNER_HORIZONTAL.RIGHT&&(o=cc.winSize.width/2-this.replaceContainer.width/2),t.vertical==moosnow.BLOCK_VERTICAL.TOP?e=cc.winSize.height/2-this.replaceContainer.height/2:t.vertical==moosnow.BLOCK_VERTICAL.CENTER?e=0:t.vertical==moosnow.BLOCK_VERTICAL.BOTTOM&&(e=-cc.winSize.height/2+this.replaceContainer.height/2),this.replaceContainer.active=!0,this.replaceContainer.x=o,this.replaceContainer.y=e;for(var n=0;n<this.replaceLayout.children.length;n++){var i=this.replaceLayout.children[n].getComponent(p.default);i&&(Lite.entity.hideEntity(i,null),n--)}this.initFiexdView(this.replaceLayout,3,"\u66ff\u6362\u5e73\u53f0banner","adReplaceBannerItem")}},o.prototype.onAdChange=function(t){this.mUserScrolling=!1;for(var o=0;o<this.mScrollVec.length;o++)this.mScrollVec[o].isScrollNavigate&&(this.mScrollVec[o].hasScrollNavigate=!1);Lite.data.adFormTag=t.formName,this.displayAd(!1),this.updateAd(t)},o.prototype.onCenterRandonClick=function(){this.onRandomNavigate(function(){},function(){})},o.prototype.updateAd=function(t){t&&t.points&&(this.mTempPoints=t.points),t&&t.templetes&&(this.mTempTempletes=t.templetes),this.mShowAd||(this.mShowAd=t.showAd,this.mBackCall=t.callback),t.showAd!=l.AD_POSITION.RECOVER&&(this.mPrevShowAd=this.mShowAd,this.mPrevBackCall=this.mBackCall,this.mPrevPoints=this.mTempPoints,this.mPrevTempletes=this.mTempTempletes),t.showAd==l.AD_POSITION.RECOVER&&(t.showAd=this.mPrevShowAd,t.callback=this.mPrevBackCall,this.mTempPoints=this.mPrevPoints,this.mTempTempletes=this.mTempTempletes),this.displayChange(t.showAd,t.callback),isNaN(t.zIndex)?this.node.zIndex=cc.macro.MAX_ZINDEX:this.node.zIndex=t.zIndex},o.prototype.onReturnBack=function(){this.exportContainer.active=!1,moosnow.form.showAd(l.AD_POSITION.CENTER|l.AD_POSITION.MASK|l.AD_POSITION.BACK,function(){moosnow.form.showAd(l.AD_POSITION.RECOVER,function(){})})},o.prototype.onBack=function(){this.mBackCall&&(moosnow.platform.hideBanner(),this.mBackCall())},o.prototype.onAdCancel=function(){var t=Lite.config.getKey("videobox"),o=d.default.randomNumBoth(0,100);0!=t&&o<=t&&moosnow.platform.showVideo(function(){}),1==Lite.config.getKey("CancelToSkip")&&moosnow.form.showAd(l.AD_POSITION.CENTER|l.AD_POSITION.MASK|l.AD_POSITION.BACK,function(){moosnow.form.showAd(l.AD_POSITION.RECOVER,function(){})})},o.prototype.onRandomNavigate=function(t,o){var e=this.setPosition(c(this.mAdData.indexLeft),Lite.data.adFormTag+"-"+this.localAdFromTag+"-\u968f\u673a\u8df3\u8f6c",function(){}),n=e[d.default.randomNumBoth(0,e.length-1)];moosnow.platform.navigate2Mini(n,t,o)},o.prototype.onNavigate=function(){},o.prototype.canNext=function(){return Date.now()-this.clickTime>2e3&&(this.clickTime=Date.now(),!0)},o.prototype.onExportClose=function(){this.canNext()&&(2==this.flashBanner01?(this.showFlashBanner(),this.flashBanner01=0):(this.exportContainer.active=!1,this.onBack()))},o.prototype.onRecommendClose=function(){this.canNext()&&(2==this.gGPopWudian?(this.showFlashBanner(),this.gGPopWudian=0):(this.recommendContainer.active=!1,this.onBack()))},o.prototype.onCenterClose=function(){this.canNext()&&(2==this.gameCenterWudian?(this.showFlashBanner(),this.gameCenterWudian=0):(this.centerContainer.active=!1,this.onBack()))},o.prototype.onHotClose=function(){this.hotContainer.active=!1,this.onBack()},o.prototype.showFlashBanner=function(){var t=this;console.log("\u95ea\u73b0banner"),moosnow.platform.showFlashBanner(moosnow.BANNER_HORIZONTAL.CENTER,moosnow.BANNER_VERTICAL.BOTTOM,this.preloadIndex),moosnow.http.getAllConfig(function(o){var e=o&&!isNaN(o.FlashBannerDelayTime)?o.FlashBannerDelayTime:0,n=o&&!isNaN(o.FlashBannerContinueTime)?parseFloat(o.FlashBannerContinueTime):1.5;t.unschedule(t.onHideFlashBanner),t.scheduleOnce(t.onHideFlashBanner,e+n)})},o.prototype.sideOut=function(){var t=this,o=moosnow.platform.getSystemInfoSync(),e=0,n=0;o&&(e=o.statusBarHeight||0,n=o.notchHeight||0),this.sideView.runAction(cc.sequence(cc.moveTo(1,e+n+this.sideView.width+20,0),cc.callFunc(function(){t.btnSideShow.active=!1,t.btnSideHide.active=!0})))},o.prototype.sideIn=function(){var t=this;this.sideView.runAction(cc.sequence(cc.moveTo(1,0,0),cc.callFunc(function(){t.btnSideShow.active=!0,t.btnSideHide.active=!1})))},o.prototype.pushScroll=function(t,o,e){void 0===e&&(e=!1);var n={scrollView:t,move2Up:null,move2Left:null,isScrollNavigate:e,hasScrollNavigate:!1,scrollXBegin:null,scrollXEnd:null,scrollYBegin:null,scrollYEnd:null};o.type==cc.Layout.Type.GRID?t.vertical?n.move2Up=!1:n.move2Left=!1:o.type==cc.Layout.Type.HORIZONTAL?n.move2Left=!1:o.type==cc.Layout.Type.VERTICAL&&(n.move2Up=!1),this.mScrollVec.push(n)},o.prototype.addAd=function(t){this.mShowAd|=t},o.prototype.removeAd=function(t){this.hasAd(t)&&(this.mShowAd^=t)},o.prototype.hasAd=function(t){return(this.mShowAd&t)==t},o.prototype.setPosition=function(t,o,e,n,i){void 0===o&&(o=""),void 0===n&&(n=!1),void 0===i&&(i=0);var r=d.default.deepCopy(t);return r.forEach(function(t){t.position=o,t.onCancel=e,t.refresh=n,t.ratio=i}),r},o.prototype.initFloatAd=function(t){var o=this;if(this.mAdData&&0!=this.mAdData.indexLeft.length){var e=this.setPosition(this.mAdData.indexLeft,"\u6d6e\u52a8ICON",t,!0),n=[],i=this.mTempPoints||this.FormData.floatPositon,r=this.mTempTempletes||this.FormData.floatTempletes,a=d.default.randomNumBoth(0,e.length-1);i&&(i.forEach(function(t,i){var c=(a+i)%(e.length-1),s=e[c];n.push({appid:s.appid,position:s.position,index:c});var l=r.length-1>i?r[i]:r[0];console.log("initFloatAd",t.x,t.y),s.x=t.x,s.y=t.y,s.source=e,s.showIds=n,s.index=i,Lite.entity.showEntity(l,o.floatContainer,s)}),this.updateFloat(),this.schedule(this.updateFloat,this.mFloatRefresh),this.floatAnim(),this.floatRuning=!1)}},o.prototype.removeFloatAd=function(){if(this.floatContainer.children.forEach(function(t){t.stopAllActions()}),this.FormData){var t=this.FormData.floatTempletes;t&&t.forEach(function(t){Lite.entity.hideAllEntity(t)}),this.mTempTempletes&&this.mTempTempletes.forEach(function(t){Lite.entity.hideAllEntity(t)}),this.unschedule(this.updateFloat)}},o.prototype.floatAnim=function(){if(!this.floatRuning){var t=this.mTempTempletes||this.FormData.floatTempletes;this.floatContainer.childrenCount>=t.length&&(this.floatRuning=!0),this.floatContainer.children.forEach(function(t){t.stopAllActions(),t.runAction(cc.sequence(cc.rotateTo(.3,10),cc.rotateTo(.6,-10),cc.rotateTo(.3,0),cc.scaleTo(.3,.8),cc.scaleTo(.3,1)).repeatForever())})}},o.prototype.updateFloat=function(){var t=this,o=this.mTempTempletes||this.FormData.floatTempletes;o&&o.forEach(function(o){Lite.entity.getAllEntity(o).forEach(function(o){o.LogicData.index=(o.LogicData.index+t.floatContainer.childrenCount)%(t.mAdData.indexLeft.length-1),o.refreshImg(r(r({},t.mAdData.indexLeft[o.LogicData.index]),{position:o.LogicData.position,onCancel:o.LogicData.onCancel}))})})},o.prototype.initFiexdView=function(t,o,e,n,i){if(this.mAdData){for(var a=0;a<t.childrenCount;a++)Lite.entity.hideEntity(t.children[a].getComponent(p.default),null),a--;var c=this.setPosition(this.mAdData.indexLeft,e,i,!0),s=[],l=[];for(a=0;a<o;a++){var h=c.length>a?c[a]:c[0];l.push({appid:h.appid,position:h.position,index:a}),s.push(h)}s.forEach(function(o){var e=r(r({},o),{showIds:l,source:c});Lite.entity.showEntity(n,t,e)})}},o.prototype.initView=function(t,o,e,n,i,r,a,c){void 0===a&&(a=!0),void 0===c&&(c=!1),this.hideAllAdNode(n,o),r||(r=this.setPosition(this.mAdData.indexLeft,e,i)),r.forEach(function(t){Lite.entity.showEntity(n,o,t)}),a&&this.pushScroll(t,o.getComponent(cc.Layout),c)},o.prototype.hideAllAdNode=function(t,o){if(o)for(var e=0;e<o.childrenCount;e++)Lite.entity.hideEntity(o.children[e].getComponent(p.default),null),e--},o.prototype.update=function(){this.scrollMove(),this.checkUserScrolling()},o.prototype.checkUserScrolling=function(){var t=this;if(this.mShowAd!=l.AD_POSITION.NONE&&1==Lite.config.getKey("SliceSkip")&&!this.mUserScrolling)for(var o=0;o<this.mScrollVec.length;o++){if(this.mUserScrolling)return;var e=this.mScrollVec[o];if(e.isScrollNavigate&&!e.hasScrollNavigate){var n=e.scrollView;if(n.isScrolling()){var i=n.getContentPosition();this.mScrollVec[o].scrollXBegin?this.mScrollVec[o].scrollXEnd=i.x:this.mScrollVec[o].scrollXBegin=i.x,this.mScrollVec[o].scrollYBegin?this.mScrollVec[o].scrollYEnd=i.y:this.mScrollVec[o].scrollXBegin=i.y,(Math.abs(this.mScrollVec[o].scrollYEnd-this.mScrollVec[o].scrollYBegin)>100||Math.abs(this.mScrollVec[o].scrollXEnd-this.mScrollVec[o].scrollXBegin)>100)&&(console.log("\u7528\u6237\u6ed1\u52a8-\u8df3\u8f6c"),this.mScrollVec[o].hasScrollNavigate=!0,this.localAdFromTag="\u7528\u6237\u6ed1\u52a8",this.onRandomNavigate(function(){t.mUserScrolling=!1},function(){t.mUserScrolling=!1}))}else this.mScrollVec[o].scrollXBegin=null,this.mScrollVec[o].scrollXEnd=0,this.mScrollVec[o].scrollYBegin=null,this.mScrollVec[o].scrollYEnd=0}}},o.prototype.scrollMove=function(){for(var t=0;t<this.mScrollVec.length;t++){var o=this.mScrollVec[t],e=o.scrollView;if(!e.isScrolling()){var n=e.getMaxScrollOffset(),i=n.y/2+20,r=n.x/2+20,a=e.getContentPosition();1==o.move2Up?(a.y>i&&(o.move2Up=!1),o.scrollView.setContentPosition(new cc.Vec2(a.x,a.y+this.mMoveSpeed))):0==o.move2Up&&(a.y<-i&&(o.move2Up=!0),o.scrollView.setContentPosition(new cc.Vec2(a.x,a.y-this.mMoveSpeed))),1==o.move2Left?(a.x>r&&(o.move2Left=!1),o.scrollView.setContentPosition(new cc.Vec2(a.x+this.mMoveSpeed,a.y))):0==o.move2Left&&(a.x<-r&&(o.move2Left=!0),o.scrollView.setContentPosition(new cc.Vec2(a.x-this.mMoveSpeed,a.y)))}}},o.prototype.willShow=function(o){t.prototype.willShow.call(this,o),this.floatRuning=!1,this.addListener(),this.mAdItemList=[],this.mScrollVec=[],Lite.data.adFormTag="loading",this.node.zIndex=cc.macro.MAX_ZINDEX,o&&o.showAd&&this.displayChange(o.showAd,o.callback)},o.prototype.willHide=function(){t.prototype.willShow.call(this),this.removeListener()},o.prototype.displayChange=function(t,o){void 0===o&&(o=null),this.mShowAd=t,this.displayAd(!0),this.mBackCall=o},o.prototype.showExport=function(t){this.exportContainer.active=t&&this.hasAd(l.AD_POSITION.EXPORT),this.exportContainer.active&&(this.flashBanner01=Lite.config.getKey("FlashBanner01"),3==this.flashBanner01&&(this.flashBanner01=d.default.randomNumBoth(1,2)),1==this.flashBanner01&&this.showFlashBanner(),1==Lite.config.getKey("ForceSkip01")&&(this.localAdFromTag="\u597d\u53cb\u70ed\u73a9",this.unschedule(this.onRandomNavigate),this.scheduleOnce(this.onRandomNavigate,.5)),moosnow.http.point("\u9875\u9762\u6253\u5f00\u6b21\u6570",{name:"\u597d\u53cb\u70ed\u73a9"}))},o.prototype.showCenter=function(t){this.centerClose.active=!1;var o=this;this.scheduleOnce(function(){o.centerClose.active=!0},2),this.centerContainer.active=t&&this.hasAd(l.AD_POSITION.CENTER),this.centerContainer.active&&(this.gameCenterWudian=Lite.config.getKey("GameCenterWudian"),3==this.gameCenterWudian&&(this.gameCenterWudian=d.default.randomNumBoth(1,2)),1==this.gameCenterWudian&&this.showFlashBanner(),1==Lite.config.getKey("ForceSkip02")&&(this.localAdFromTag="\u6e38\u620f\u4e2d\u5fc3",this.unschedule(this.onRandomNavigate),this.scheduleOnce(this.onRandomNavigate,.5)),moosnow.http.point("\u9875\u9762\u6253\u5f00\u6b21\u6570",{name:"\u6e38\u620f\u4e2d\u5fc3"}))},o.prototype.showRecommend=function(t){var o=this;this.recommendClose.active=!1,this.recommendContainer.active=t&&this.hasAd(l.AD_POSITION.RECOMMEND),this.recommendContainer.active&&(this.gGPopWudian=Lite.config.getKey("GGPopWudian"),3==this.gameCenterWudian&&(this.gameCenterWudian=d.default.randomNumBoth(1,2)),1==this.gameCenterWudian&&this.showFlashBanner(),moosnow.http.point("\u9875\u9762\u6253\u5f00\u6b21\u6570",{name:"\u7cbe\u54c1\u6e38\u620f"}),this.scheduleOnce(function(){o.recommendClose.active=!0},1))},o.prototype.preload=function(t){t&&(this.hasAd(l.AD_POSITION.RECOMMEND)||this.hasAd(l.AD_POSITION.CENTER)||this.hasAd(l.AD_POSITION.EXPORT))&&(this.preloadIndex=moosnow.platform.preloadBanner())},o.prototype.displayAd=function(t){this.replaceContainer.active=!1,this.endContainer.active=t&&this.hasAd(l.AD_POSITION.EXPORT_FIXED),this.endContainer.active&&this.initEnd(),this.leftContainer.active=t&&this.hasAd(l.AD_POSITION.LEFTRIGHT),this.showExport(t),this.showCenter(t),this.showRecommend(t),this.preload(t),this.hotContainer.active=t&&this.hasAd(l.AD_POSITION.HOT),this.bannerContainer.active=t&&this.hasAd(l.AD_POSITION.BANNER),this.bannerRightContainer.active=t&&this.hasAd(l.AD_POSITION.RIGHTBANNER),this.topContainer.active=t&&this.hasAd(l.AD_POSITION.TOP),this.leftSingleContainer.active=t&&this.hasAd(l.AD_POSITION.LEFTRIGHTSINGLE),this.floatContainer.active=t&&this.hasAd(l.AD_POSITION.FLOAT),this.floatContainer.active&&this.initFloatAd(this.onAdCancel),this.floatContainer.active||this.removeFloatAd(),this.rotateContainer.active=t&&this.hasAd(l.AD_POSITION.ROTATE),this.rotateContainer.active&&this.initRotate(this.initRotate),!this.rotateContainer.active&&this.disableRotate(),this.formMask.active=t&&this.hasAd(l.AD_POSITION.MASK)},o.prototype.onShow=function(o){var e=this;t.prototype.onShow.call(this,o);var n=Lite.config.getKey("adScrollViewSpeed");isNaN(n)||(this.mMoveSpeed=parseFloat(""+n)),moosnow.ad.getAd(function(t){cc.log("\u83b7\u53d6\u5230\u7684\u5e7f\u544a\u6570\u636e\u662f",t),e.mAdData=t,e.initBanner(),e.initRightBanner(),e.initTop(),e.initHot(),e.initExport(),e.initCenter(),e.initLeftRight(),e.initLeftRightSingle(),e.initRecommend(),e.initFloatAd(e.onAdCancel),e.FormData&&e.FormData.callback&&e.FormData.callback()})},o.prototype.initBanner=function(){var t=this.bannerContainer_layout.getComponent(cc.Layout),o=this.bannerContainer_scroll.getComponent(cc.ScrollView);t.type=cc.Layout.Type.HORIZONTAL,t.resizeMode=cc.Layout.ResizeMode.CONTAINER,this.initView(o,this.bannerContainer_layout,"banner","adListBannerItem",this.onAdCancel,null,!0,!0)},o.prototype.initRightBanner=function(){var t=this.bannerRightContainer_layout.getComponent(cc.Layout),o=this.bannerRightContainer_scroll.getComponent(cc.ScrollView);t.type=cc.Layout.Type.HORIZONTAL,t.resizeMode=cc.Layout.ResizeMode.CONTAINER,this.initView(o,this.bannerRightContainer_layout,"banner","adListBannerItem",this.onAdCancel,null,!0,!0)},o.prototype.initTop=function(){var t=this.topContainer_layout.getComponent(cc.Layout),o=this.topContainer_scroll.getComponent(cc.ScrollView);t.type=cc.Layout.Type.HORIZONTAL,t.resizeMode=cc.Layout.ResizeMode.CONTAINER,this.initView(o,this.topContainer_layout,"top","adListBannerItem",this.onAdCancel)},o.prototype.initHot=function(){this.hotContainer_layout.getComponent(cc.Layout);var t=this.hotContainer_scroll.getComponent(cc.ScrollView);this.initView(t,this.hotContainer_layout,"\u70ed\u95e8\u6e38\u620f","adHottem",this.onAdCancel),this.initHot123()},o.prototype.initHot123=function(){var t=this.setPosition(this.mAdData.indexLeft,"\u70ed\u95e8\u6e38\u620f",this.onAdCancel);Lite.entity.showEntity("adHottem1",this.hot1,t[0]),Lite.entity.showEntity("adHottem1",this.hot2,t[1]),Lite.entity.showEntity("adHottem1",this.hot3,t[2])},o.prototype.initLeftRightSingle=function(t){if(void 0===t&&(t="adListBannerItem"),this.leftSingleContainer_layout.children.forEach(function(t){var o=t.getComponent(p.default);Lite.entity.hideEntity(o,null)}),this.rightSingleContainer_layout.children.forEach(function(t){var o=t.getComponent(p.default);Lite.entity.hideEntity(o,null)}),0!=this.mAdData.indexLeft.length){var o=d.default.deepCopy(this.mAdData.indexLeft),e=o.length/2,n=o.slice(0,e),i=o.slice(e,o.length),r=this.leftSingleContainer_scroll.getComponent(cc.ScrollView),a=this.rightSingleContainer_scroll.getComponent(cc.ScrollView),c=this.setPosition(i,"left",this.onAdCancel),s=this.setPosition(n,"right",this.onAdCancel);this.initView(r,this.leftSingleContainer_layout,"left",t,this.onAdCancel,c),this.initView(a,this.rightSingleContainer_layout,"right",t,this.onAdCancel,s)}},o.prototype.initLeftRight=function(t){if(void 0===t&&(t="adListBannerItem"),this.leftContainer_layout.children.forEach(function(t){var o=t.getComponent(p.default);Lite.entity.hideEntity(o,null)}),this.rightContainer_layout.children.forEach(function(t){var o=t.getComponent(p.default);Lite.entity.hideEntity(o,null)}),0!=this.mAdData.indexLeft.length){var o=d.default.deepCopy(this.mAdData.indexLeft),e=o.length/2,n=o.slice(0,e),i=o.slice(e,o.length),r=this.leftContainer_scroll.getComponent(cc.ScrollView),a=this.rightContainer_scroll.getComponent(cc.ScrollView),c=this.setPosition(i,"left",this.onAdCancel),s=this.setPosition(n,"right",this.onAdCancel);this.initView(r,this.leftContainer_layout,"left",t,this.onAdCancel,c),this.initView(a,this.rightContainer_layout,"right",t,this.onAdCancel,s)}},o.prototype.initEnd=function(){var t=this.endContainer_layout.getComponent(cc.Layout);t.type=cc.Layout.Type.GRID,t.resizeMode=cc.Layout.ResizeMode.NONE,this.initFiexdView(this.endContainer_layout,8,"8\u4e2a\u56fa\u5b9a\u5927\u5bfc\u51fa","adFiexdItem",this.onAdCancel)},o.prototype.initExport=function(){var t=this.exportContainer_layout.getComponent(cc.Layout),o=this.exportContainer_scroll.getComponent(cc.ScrollView);t.type=cc.Layout.Type.GRID,t.resizeMode=cc.Layout.ResizeMode.CONTAINER,this.initView(o,this.exportContainer_layout,"\u597d\u53cb\u70ed\u73a9","adListExportItem",this.onAdCancel)},o.prototype.initRecommend=function(){var t=this.recommendContainer_layout.getComponent(cc.Layout),o=this.recommendContainer_scroll.getComponent(cc.ScrollView);t.type=cc.Layout.Type.GRID,t.resizeMode=cc.Layout.ResizeMode.CONTAINER;var e=this.setPosition(this.mAdData.indexLeft,"\u7cbe\u54c1\u6e38\u620f",null,!0,50),n=e.slice(0,11);if(this.initView(o,this.recommendContainer_layout,"\u7cbe\u54c1\u6e38\u620f","adRecommendItem",null,n,!1),this.mAdData.indexLeft.length>11){var i=e.slice(11,12)[0];Lite.entity.showEntity("adRecommendItem",this.recommendContainer_layout,i)}},o.prototype.initTotal=function(){var t=this.setPosition(this.mAdData.indexLeft,"\u7cbe\u54c1\u6e38\u620f",null,!0,50);this.initView(this.totalView.getComponent(cc.ScrollView),this.totalLayout,"\u7ed3\u7b97\u9875","adListTotalItem",this.onAdCancel,c(t,t))},o.prototype.initCenter=function(){this.centerContainer_layout.getComponent(cc.Layout);var t=this.centerContainer_scroll.getComponent(cc.ScrollView),o=192*Math.floor((cc.winSize.width-492)/192);this.centerContainer_scroll.width=o,console.log("initCenter ~  this.centerContainer_scroll.width",this.centerContainer_scroll.width);var e=this.setPosition(this.mAdData.indexLeft,"\u6e38\u620f\u4e2d\u5fc3",function(){},!0,30);this.initView(t,this.centerContainer_layout,"\u6e38\u620f\u4e2d\u5fc3","adListCenterItem",null,e,!0,!1)},o.prototype.disableRotate=function(){Lite.entity.hideAllEntity("adRotateItem",null)},o.prototype.initRotate=function(t){var o=this;if(this.mAdData){for(var e=this.setPosition(this.mAdData.indexLeft,"\u65cb\u8f6c\u5bfc\u51fa",t,!0),n=(d.default.randomNumBoth(0,e.length-1),[]),i=[],r=0;r<6&&0!=e.length;r++){var a=d.default.randomNumBoth(0,e.length-1),c=e.splice(a,1)[0];n.push({appid:c.appid,position:c.position,index:r}),i.push(c)}i.forEach(function(t){t.source=e,t.showIds=n,Lite.entity.showEntity("adRotateItem",o.rotateContainer_layout,t)})}},a([f(cc.Node)],o.prototype,"endContainer",void 0),a([f(cc.Node)],o.prototype,"endContainer_layout",void 0),a([f(cc.Node)],o.prototype,"exportContainer",void 0),a([f(cc.Node)],o.prototype,"exportContainer_scroll",void 0),a([f(cc.Node)],o.prototype,"exportContainer_layout",void 0),a([f(cc.Node)],o.prototype,"btnExportClose",void 0),a([f(cc.Node)],o.prototype,"recommendContainer",void 0),a([f(cc.Node)],o.prototype,"recommendContainer_scroll",void 0),a([f(cc.Node)],o.prototype,"recommendContainer_layout",void 0),a([f(cc.Node)],o.prototype,"recommendClose",void 0),a([f(cc.Node)],o.prototype,"formMask",void 0),a([f(cc.Node)],o.prototype,"btnBack",void 0),a([f(cc.Node)],o.prototype,"floatContainer",void 0),a([f(cc.Node)],o.prototype,"floatFull",void 0),a([f(cc.Node)],o.prototype,"bannerContainer",void 0),a([f(cc.Node)],o.prototype,"bannerContainer_scroll",void 0),a([f(cc.Node)],o.prototype,"bannerContainer_layout",void 0),a([f(cc.Node)],o.prototype,"bannerRightContainer",void 0),a([f(cc.Node)],o.prototype,"bannerRightContainer_scroll",void 0),a([f(cc.Node)],o.prototype,"bannerRightContainer_layout",void 0),a([f(cc.Node)],o.prototype,"topContainer",void 0),a([f(cc.Node)],o.prototype,"topContainer_scroll",void 0),a([f(cc.Node)],o.prototype,"topContainer_layout",void 0),a([f(cc.Node)],o.prototype,"leftContainer",void 0),a([f(cc.Node)],o.prototype,"leftContainer_scroll",void 0),a([f(cc.Node)],o.prototype,"leftContainer_layout",void 0),a([f(cc.Node)],o.prototype,"rightContainer",void 0),a([f(cc.Node)],o.prototype,"rightContainer_scroll",void 0),a([f(cc.Node)],o.prototype,"rightContainer_layout",void 0),a([f(cc.Node)],o.prototype,"leftSingleContainer",void 0),a([f(cc.Node)],o.prototype,"leftSingleContainer_scroll",void 0),a([f(cc.Node)],o.prototype,"leftSingleContainer_layout",void 0),a([f(cc.Node)],o.prototype,"rightSingleContainer",void 0),a([f(cc.Node)],o.prototype,"rightSingleContainer_scroll",void 0),a([f(cc.Node)],o.prototype,"rightSingleContainer_layout",void 0),a([f(cc.Node)],o.prototype,"rotateContainer",void 0),a([f(cc.Node)],o.prototype,"rotateContainer_layout",void 0),a([f(cc.Node)],o.prototype,"hotContainer",void 0),a([f(cc.Node)],o.prototype,"hotContainer_scroll",void 0),a([f(cc.Node)],o.prototype,"hotContainer_layout",void 0),a([f(cc.Node)],o.prototype,"hotClose",void 0),a([f(cc.Node)],o.prototype,"centerContainer",void 0),a([f(cc.Node)],o.prototype,"centerContainer_scroll",void 0),a([f(cc.Node)],o.prototype,"centerContainer_layout",void 0),a([f(cc.Node)],o.prototype,"centerClose",void 0),a([f(cc.Node)],o.prototype,"centerRandomClick",void 0),a([f(cc.Node)],o.prototype,"sideContainer",void 0),a([f(cc.Node)],o.prototype,"sideView",void 0),a([f(cc.Node)],o.prototype,"sideLayout",void 0),a([f(cc.Node)],o.prototype,"btnSideShow",void 0),a([f(cc.Node)],o.prototype,"btnSideHide",void 0),a([f(cc.Node)],o.prototype,"replaceContainer",void 0),a([f(cc.Node)],o.prototype,"replaceLayout",void 0),a([f(cc.Node)],o.prototype,"totalContainer",void 0),a([f(cc.Node)],o.prototype,"totalLayout",void 0),a([f(cc.Node)],o.prototype,"totalView",void 0),a([f(cc.Node)],o.prototype,"totalClose",void 0),a([f(cc.Node)],o.prototype,"hot1",void 0),a([f(cc.Node)],o.prototype,"hot2",void 0),a([f(cc.Node)],o.prototype,"hot3",void 0),a([m],o)}(h.default);e.default=y,cc._RF.pop()},{"../../script/config/UIForms":void 0,"../../script/framework/AD_POSITION":void 0,"../../script/framework/ui/UIForm":void 0,"../../script/framework/utils/Common":void 0,"./adViewItem":"adViewItem"}],adHotViewItem:[function(t,o,e){"use strict";cc._RF.push(o,"2aaa39+odpAVqLmDbH1eaVh","adHotViewItem");var n,i=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),r=this&&this.__decorate||function(t,o,e,n){var i,r=arguments.length,a=r<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,o,e,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(o,e,a):i(o,e))||a);return r>3&&a&&Object.defineProperty(o,e,a),a};Object.defineProperty(e,"__esModule",{value:!0});var a=t("../../script/framework/utils/Common"),c=t("./adViewItem"),s=["\u7ecf\u5178\u73a9\u6cd5\uff0c\u723d\u5feb\u6218\u6597\uff01","\u4e0e\u5144\u5f1f\u4e00\u8d77\uff0c\u5171\u540c\u5f81\u6218\u6d2a\u8352\u4e16\u754c\uff01","\u4ee5\u7231\u4e4b\u540d\uff0c\u8fd8\u539f\u56fd\u6c11\u68a6\u60f3","\u9177\u70ab\u6280\u80fd\uff0c\u611f\u53d7\u9163\u7545\u6218\u6597","\u5e7f\u79ef\u7cae\uff0c\u7b51\u9ad8\u5899\uff0c\u597d\u53cb\u9f50\u79f0\u738b\uff01","\u6211\u8fd9\u4e00\u5200\u4e0b\u53bb\uff0cBOSS\u90fd\u8981\u98de\uff01","\u5168\u6c11\u738b\u8005\uff0c\u9707\u98a4\u4e16\u754c","\u738b\u603b\u558a\u4f60\u4e00\u8d77\u6253\u5996\u602a\u5566","\u4f60\u7684\u8001\u677f\u53eb\u4f60\u4e0a\u7ebf\u6253\u602a","\u4f60\u7684\u540c\u5b66\u6b63\u5728\u5077\u4f60\u5bb6\u83dc","\u9694\u58c1\u8001\u738b\u73a9\u4e86\u90fd\u8bf4\u597d\uff01","\u8fc7\u4e94\u5173\u65a9\u516d\u5c06\uff0c\u4f60\u7684\u597d\u53cb\u8981\u4f60\u4e00\u8d77\u6765\u6218","\u71c3\u70b8\uff01\u6839\u672c\u505c\u4e0d\u4e0b\u6765","\u6fc0\u723d\u6218\u6597\uff01\u4e00\u5200\u4e00\u4e2a\u5c0f\u670b\u53cb"],l=["\u6700\u706b\u7206\u7684","\u672c\u5e74\u5ea6\u6700\u4f73","\u672c\u6708\u4eba\u6c14\u6700\u9ad8","\u4eba\u6c14\u98d9\u5347\u7684","\u670b\u53cb\u6b63\u5728\u70ed\u73a9\u7684","\u706b\u7206\u670b\u53cb\u5708\u7684","\u8d85\u723d\u5feb\u7684","\u98ce\u9761\u5168\u7403\u7684","\u5168\u65b0\u73a9\u6cd5\u7684","\u5b98\u65b9\u6b63\u7248","\u8f7b\u677e\u7b80\u5355\u7684"],h=["\u5c0f\u6e38\u620f","\u52a8\u4f5c\u6e38\u620f","\u5c04\u51fb\u6e38\u620f","\u5361\u724c\u6e38\u620f","\u6a21\u62df\u7ecf\u8425\u6e38\u620f","\u5267\u60c5\u6e38\u620f","\u7b56\u7565\u6218\u6597\u6e38\u620f","\u771f\u4eba\u5bf9\u6218\u6e38\u620f","\u76ca\u667a\u6e38\u620f"],d=cc._decorator,p=d.ccclass,u=d.property,m=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.playerNum=null,o.starNum=null,o.memo=null,o.btnPlay=null,o}return i(o,t),o.prototype.addListener=function(){t.prototype.addListener.call(this),this.btnPlay.on(cc.Node.EventType.TOUCH_START,this.onClickAd,this)},o.prototype.removeListener=function(){t.prototype.addListener.call(this),this.btnPlay.off(cc.Node.EventType.TOUCH_START,this.onClickAd,this)},o.prototype.updateUI=function(){t.prototype.updateUI.call(this);var o;o=Math.random()>.5?s[a.default.randomNumBoth(0,s.length-1)]:l[a.default.randomNumBoth(0,l.length-1)]+h[a.default.randomNumBoth(0,h.length-1)],this.memo.string=o,this.starNum.string=""+a.default.numFixed(a.default.randomNumBoth(80,100)/10,2),this.playerNum.string=a.default.randomNumBoth(30,200)+"\u4e07"},o.prototype.update=function(){},r([u(cc.Label)],o.prototype,"playerNum",void 0),r([u(cc.Label)],o.prototype,"starNum",void 0),r([u(cc.Label)],o.prototype,"memo",void 0),r([u(cc.Node)],o.prototype,"btnPlay",void 0),r([p],o)}(c.default);e.default=m,cc._RF.pop()},{"../../script/framework/utils/Common":void 0,"./adViewItem":"adViewItem"}],adViewItem:[function(t,o,e){"use strict";cc._RF.push(o,"e482fDqWsFOkKTB1y3IlvJw","adViewItem");var n,i=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var o,e=1,n=arguments.length;e<n;e++)for(var i in o=arguments[e])Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);return t}).apply(this,arguments)},a=this&&this.__decorate||function(t,o,e,n){var i,r=arguments.length,a=r<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,o,e,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(o,e,a):i(o,e))||a);return r>3&&a&&Object.defineProperty(o,e,a),a};Object.defineProperty(e,"__esModule",{value:!0});var c=t("../../script/framework/config/Bundles"),s=t("../../script/framework/entity/EntityLogic"),l=t("../../script/framework/utils/Common"),h=cc._decorator,d=h.ccclass,p=h.property,u=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.logo=null,o.title=null,o.animLogo=null,o.nameBg=null,o.redpoint=null,o.randomBg=!0,o.colorBg=null,o}return i(o,t),o.prototype.addListener=function(){this.logo.on(cc.Node.EventType.TOUCH_START,this.onClickAd,this)},o.prototype.removeListener=function(){this.logo.off(cc.Node.EventType.TOUCH_START,this.onClickAd,this)},o.prototype.initPosition=function(){},o.prototype.willShow=function(o){t.prototype.willShow.call(this,o),this.mAdItem=o,this.addListener()},o.prototype.refreshImg=function(t){this.mAdItem=t,this.updateUI()},o.prototype.updateUI=function(){var t=this,o=this.logo,e=o.width,n=o.height;this.mAdItem.nologo||moosnow.nodeHelper.changeSrc(this.logo,{url:this.mAdItem.img,width:e,height:n},function(){t.logo.width=e,t.logo.height=n}),this.redpoint&&(this.redpoint.active=l.default.randomToRatio(0,100,this.mAdItem.ratio?this.mAdItem.ratio:0)),this.randomBg&&this.nameBg&&!this.colorBg&&Lite.resource.loadBundle(c.default.ad,function(o,e){o||e.load("texture/ad-item-bg"+l.default.randomNumBoth(1,3),cc.SpriteFrame,function(o,e){o||(t.nameBg.getComponent(cc.Sprite).spriteFrame=e)})}),this.randomBg&&this.nameBg&&this.colorBg&&Lite.resource.loadBundle(c.default.ad,function(o,e){o||e.load("texture/newad/"+l.default.randomNumBoth(1,9),cc.SpriteFrame,function(o,e){o||(t.colorBg.getComponent(cc.Sprite).spriteFrame=e)})}),moosnow.nodeHelper.changeText(this.title,this.mAdItem.title)},o.prototype.onClickAd=function(){var t=this,o=this.mAdItem;if(this.LogicData&&this.LogicData.refresh){var e=this.findNextAd();e&&(e.refresh&&moosnow.event.sendEventImmediately(moosnow.PLATFORM_EVENT.AD_VIEW_REFRESH,{current:o,next:e}),this.refreshImg(e))}moosnow.platform.navigate2Mini(r(r({},o),{position:Lite.data.adFormTag+"-"+o.position}),function(){},function(){t.mAdItem&&t.mAdItem.onCancel&&t.mAdItem.onCancel(o)})},o.prototype.findNextAd=function(){if(!this.LogicData.source)return null;if(!this.LogicData.showIds)return null;for(var t=0;t<this.LogicData.source.length;t++){for(var o=!1,e=0;e<this.LogicData.showIds.length;e++)this.LogicData.showIds[e].appid==this.LogicData.source[t].appid&&this.LogicData.showIds[e].position==this.LogicData.source[t].position&&(o=!0);if(!o)return this.LogicData.source[t]}return null},o.prototype.onAdViewChange=function(t){if(this.LogicData.showIds&&this.LogicData.source){for(var o=t.current,e=t.next,n=this.LogicData.showIds,i=this.LogicData.source,r=0;r<n.length;r++)o.appid==n[r].appid&&o.position==n[r].position&&(this.LogicData.showIds[r]=e.appid);for(r=0;r<i.length;r++)if(e.appid==i[r].appid){this.LogicData.source.splice(r,1),this.LogicData.source.push(o);break}}},o.prototype.onShow=function(o){t.prototype.onShow.call(this,o),this.updateUI(),moosnow.event.addListener(moosnow.PLATFORM_EVENT.AD_VIEW_REFRESH,this,this.onAdViewChange)},o.prototype.onHide=function(o){t.prototype.onHide.call(this,o),this.mAdItem&&(this.mAdItem.onCancel=null),this.removeListener(),moosnow.event.removeListener(moosnow.PLATFORM_EVENT.AD_VIEW_REFRESH,this)},o.prototype.update=function(){},a([p(cc.Node)],o.prototype,"logo",void 0),a([p(cc.Node)],o.prototype,"title",void 0),a([p(cc.Node)],o.prototype,"animLogo",void 0),a([p(cc.Node)],o.prototype,"nameBg",void 0),a([p(cc.Node)],o.prototype,"redpoint",void 0),a([p],o.prototype,"randomBg",void 0),a([p(cc.Node)],o.prototype,"colorBg",void 0),a([d],o)}(s.default);e.default=u,cc._RF.pop()},{"../../script/framework/config/Bundles":void 0,"../../script/framework/entity/EntityLogic":void 0,"../../script/framework/utils/Common":void 0}],portalForm:[function(t,o,e){"use strict";cc._RF.push(o,"9ef722wzDFDBYsAWFQfIUXp","portalForm");var n,i=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),r=this&&this.__decorate||function(t,o,e,n){var i,r=arguments.length,a=r<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,o,e,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(o,e,a):i(o,e))||a);return r>3&&a&&Object.defineProperty(o,e,a),a};Object.defineProperty(e,"__esModule",{value:!0});var a=t("../../script/config/UIForms"),c=t("../../script/framework/ui/UIForm"),s=t("../../script/framework/utils/Common"),l=cc._decorator,h=l.ccclass,d=l.property,p=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.maskBg=null,o}return i(o,t),o.prototype.start=function(){},o.prototype.onShow=function(){var t=this;moosnow.platform.showGamePortalAd(function(){t.onBack()},function(o){t.maskBg.active=o,o||t.onBack()})},o.prototype.onBack=function(){Lite.ui.hideUIForm(a.default.PortalForm,null),s.default.isFunction(this.FormData.callback)&&this.FormData.callback()},r([d(cc.Node)],o.prototype,"maskBg",void 0),r([h],o)}(c.default);e.default=p,cc._RF.pop()},{"../../script/config/UIForms":void 0,"../../script/framework/ui/UIForm":void 0,"../../script/framework/utils/Common":void 0}]},{},["adForm","adHotViewItem","adViewItem","portalForm"]);