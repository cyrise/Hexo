!function(s){"use strict";function a(t,e){this.options=s.extend({},a.DEFAULTS,e),this.$target=s(this.options.target).on("scroll.bs.affix.data-api",s.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",s.proxy(this.checkPositionWithEventLoop,this)),this.$element=s(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()}function i(i){return this.each(function(){var t=s(this),e=t.data("bs.affix");e||t.data("bs.affix",e=new a(this,"object"==typeof i&&i)),"string"==typeof i&&e[i]()})}a.VERSION="3.3.5",a.RESET="affix affix-top affix-bottom",a.DEFAULTS={offset:0,target:window},a.prototype.getState=function(t,e,i,o){var f=this.$target.scrollTop(),n=this.$element.offset(),s=this.$target.height();if(null!=i&&"top"===this.affixed)return f<i&&"top";if("bottom"===this.affixed)return null!=i?!(f+this.unpin<=n.top)&&"bottom":!(f+s<=t-o)&&"bottom";var a=null==this.affixed,n=a?f:n.top;return null!=i&&f<=i?"top":null!=o&&t-o<=n+(a?s:e)&&"bottom"},a.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(a.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},a.prototype.checkPositionWithEventLoop=function(){setTimeout(s.proxy(this.checkPosition,this),1)},a.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,f=Math.max(s(document).height(),s(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var n=this.getState(f,t,i,o);if(this.affixed!==n){null!=this.unpin&&this.$element.css("top","");e="affix"+(n?"-"+n:""),i=new s.Event(e+".bs.affix");if(this.$element.trigger(i),i.isDefaultPrevented())return;this.affixed=n,this.unpin="bottom"===n?this.getPinnedOffset():null,this.$element.removeClass(a.RESET).addClass(e).trigger(e.replace("affix","affixed")+".bs.affix")}"bottom"===n&&this.$element.offset({top:f-t-o})}};var t=s.fn.affix;s.fn.affix=i,s.fn.affix.Constructor=a,s.fn.affix.noConflict=function(){return s.fn.affix=t,this},s(window).on("load",function(){s('[data-spy="affix"]').each(function(){var t=s(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);