function giscloud(){var l='',F='" for "gwt:onLoadErrorFn"',D='" for "gwt:onPropertyErrorFn"',n='"><\/script>',p='#',r='/',vb='0B2BACD1FD3F831A3DB2853B40E403B4.cache.html',ub='2DAB43B9BD4B5F64812A33964AFD51DB.cache.html',tb='4DB2FA1FD6AD0B14F177F16B57D2FB30.cache.html',sb='524792B4B5B259594319C99CE3FBC747.cache.html',wb='97FD615FE935AFFAED015DDB1C1AC033.cache.html',bc='<script defer="defer">giscloud.onInjectionDone(\'giscloud\')<\/script>',fc='<script id="',ac='<script language="javascript" src="http://maps.google.com/maps?file=api&v=2&sensor=false&key=ABQIAAAAGt86K09TmfKzrelwDOWGFhTSW6bmLxFd-KFgSA5FLmKWbZH2LRSt1zJEKSEzSPNHv91QYndtDyg1Wg"><\/script>',A='=',q='?',C='Bad handler "',Eb='DOMContentLoaded',o='SCRIPT',ec='__gwt_marker_giscloud',s='base',nb='begin',cb='bootstrap',u='clear.cache.gif',z='content',dc='end',lb='gecko',mb='gecko1_8',m='giscloud',yb='gwt.hybrid',xb='gwt/standard/standard.css',E='gwt:onLoadErrorFn',B='gwt:onPropertyErrorFn',y='gwt:property',Db='head',qb='hosted.html?giscloud',Cb='href',Fb='http://maps.google.com/maps?file=api&v=2&sensor=false&key=ABQIAAAAGt86K09TmfKzrelwDOWGFhTSW6bmLxFd-KFgSA5FLmKWbZH2LRSt1zJEKSEzSPNHv91QYndtDyg1Wg',kb='ie6',ab='iframe',t='img',bb="javascript:''",zb='link',pb='loadExternalRefs',v='meta',eb='moduleRequested',cc='moduleStartup',jb='msie',w='name',gb='opera',db='position:absolute;width:0;height:0;border:none',Ab='rel',ib='safari',rb='selectingPermutation',x='startup',Bb='stylesheet',ob='unknown',fb='user.agent',hb='webkit';var hc=window,k=document,gc=hc.__gwtStatsEvent?function(a){return hc.__gwtStatsEvent(a)}:null,Bc,rc,mc,lc=l,uc={},Ec=[],Ac=[],kc=[],xc,zc;gc&&gc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:nb});if(!hc.__gwt_stylesLoaded){hc.__gwt_stylesLoaded={}}if(!hc.__gwt_scriptsLoaded){hc.__gwt_scriptsLoaded={}}function qc(){var b=false;try{b=hc.external&&(hc.external.gwtOnLoad&&hc.location.search.indexOf(yb)==-1)}catch(a){}qc=function(){return b};return b}
function tc(){if(Bc&&rc){var c=k.getElementById(m);var b=c.contentWindow;if(qc()){b.__gwt_getProperty=function(a){return nc(a)}}giscloud=null;b.gwtOnLoad(xc,m,lc);gc&&gc({moduleName:m,subSystem:x,evtGroup:cc,millis:(new Date()).getTime(),type:dc})}}
function oc(){var j,h=ec,i;k.write(fc+h+n);i=k.getElementById(h);j=i&&i.previousSibling;while(j&&j.tagName!=o){j=j.previousSibling}function f(b){var a=b.lastIndexOf(p);if(a==-1){a=b.length}var c=b.indexOf(q);if(c==-1){c=b.length}var d=b.lastIndexOf(r,Math.min(c,a));return d>=0?b.substring(0,d+1):l}
;if(j&&j.src){lc=f(j.src)}if(lc==l){var e=k.getElementsByTagName(s);if(e.length>0){lc=e[e.length-1].href}else{lc=f(k.location.href)}}else if(lc.match(/^\w+:\/\//)){}else{var g=k.createElement(t);g.src=lc+u;lc=f(g.src)}if(i){i.parentNode.removeChild(i)}}
function yc(){var f=document.getElementsByTagName(v);for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute(w),b;if(h){if(h==y){b=e.getAttribute(z);if(b){var i,c=b.indexOf(A);if(c>=0){h=b.substring(0,c);i=b.substring(c+1)}else{h=b;i=l}uc[h]=i}}else if(h==B){b=e.getAttribute(z);if(b){try{zc=eval(b)}catch(a){alert(C+b+D)}}}else if(h==E){b=e.getAttribute(z);if(b){try{xc=eval(b)}catch(a){alert(C+b+F)}}}}}}
function Dc(d,e){var a=kc;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[])}a[d[c]]=e}
function nc(d){var e=Ac[d](),b=Ec[d];if(e in b){return e}var a=[];for(var c in b){a[b[c]]=c}if(zc){zc(d,a,e)}throw null}
var pc;function sc(){if(!pc){pc=true;var a=k.createElement(ab);a.src=bb;a.id=m;a.style.cssText=db;a.tabIndex=-1;k.body.appendChild(a);gc&&gc({moduleName:m,subSystem:x,evtGroup:cc,millis:(new Date()).getTime(),type:eb});a.contentWindow.location.replace(lc+Cc)}}
Ac[fb]=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(d.indexOf(gb)!=-1){return gb}else if(d.indexOf(hb)!=-1){return ib}else if(d.indexOf(jb)!=-1){var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=6000){return kb}}}else if(d.indexOf(lb)!=-1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return mb}return lb}return ob};Ec[fb]={gecko:0,gecko1_8:1,ie6:2,opera:3,safari:4};giscloud.onScriptLoad=function(){if(pc){rc=true;tc()}};giscloud.onInjectionDone=function(){Bc=true;gc&&gc({moduleName:m,subSystem:x,evtGroup:pb,millis:(new Date()).getTime(),type:dc});tc()};oc();var Cc;if(qc()){if(hc.external.initModule&&hc.external.initModule(m)){hc.location.reload();return}Cc=qb}yc();gc&&gc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:rb});if(!Cc){try{Dc([lb],sb);Dc([kb],tb);Dc([gb],ub);Dc([ib],vb);Dc([mb],wb);Cc=kc[nc(fb)]}catch(a){return}}var wc;function vc(){if(!mc){mc=true;if(!__gwt_stylesLoaded[xb]){var a=k.createElement(zb);__gwt_stylesLoaded[xb]=a;a.setAttribute(Ab,Bb);a.setAttribute(Cb,lc+xb);k.getElementsByTagName(Db)[0].appendChild(a)}tc();if(k.removeEventListener){k.removeEventListener(Eb,vc,false)}if(wc){clearInterval(wc)}}}
if(k.addEventListener){k.addEventListener(Eb,function(){sc();vc()},false)}var wc=setInterval(function(){if(/loaded|complete/.test(k.readyState)){sc();vc()}},50);gc&&gc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:dc});gc&&gc({moduleName:m,subSystem:x,evtGroup:pb,millis:(new Date()).getTime(),type:nb});if(!__gwt_scriptsLoaded[Fb]){__gwt_scriptsLoaded[Fb]=true;document.write(ac)}k.write(bc)}
giscloud();