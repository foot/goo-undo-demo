// Compiled by ClojureScript 0.0-2261
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__33327,args){var map__33329 = p__33327;var map__33329__$1 = ((cljs.core.seq_QMARK_.call(null,map__33329))?cljs.core.apply.call(null,cljs.core.hash_map,map__33329):map__33329);var debug = cljs.core.get.call(null,map__33329__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__33327,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__33327,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__33330){
var p__33327 = cljs.core.first(arglist__33330);
var args = cljs.core.rest(arglist__33330);
return log__delegate(p__33327,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__33331){var map__33333 = p__33331;var map__33333__$1 = ((cljs.core.seq_QMARK_.call(null,map__33333))?cljs.core.apply.call(null,cljs.core.hash_map,map__33333):map__33333);var websocket_url = cljs.core.get.call(null,map__33333__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__33334,callback){var map__33336 = p__33334;var map__33336__$1 = ((cljs.core.seq_QMARK_.call(null,map__33336))?cljs.core.apply.call(null,cljs.core.hash_map,map__33336):map__33336);var msg = map__33336__$1;var dependency_file = cljs.core.get.call(null,map__33336__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__33336__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__33336__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__7946__auto__ = dependency_file;if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__33336,map__33336__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__33336,map__33336__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__33337,p__33338){var map__33341 = p__33337;var map__33341__$1 = ((cljs.core.seq_QMARK_.call(null,map__33341))?cljs.core.apply.call(null,cljs.core.hash_map,map__33341):map__33341);var opts = map__33341__$1;var url_rewriter = cljs.core.get.call(null,map__33341__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__33342 = p__33338;var map__33342__$1 = ((cljs.core.seq_QMARK_.call(null,map__33342))?cljs.core.apply.call(null,cljs.core.hash_map,map__33342):map__33342);var d = map__33342__$1;var file = cljs.core.get.call(null,map__33342__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__33343,p__33344){var map__33385 = p__33343;var map__33385__$1 = ((cljs.core.seq_QMARK_.call(null,map__33385))?cljs.core.apply.call(null,cljs.core.hash_map,map__33385):map__33385);var opts = map__33385__$1;var on_jsload = cljs.core.get.call(null,map__33385__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__33385__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__33386 = p__33344;var map__33386__$1 = ((cljs.core.seq_QMARK_.call(null,map__33386))?cljs.core.apply.call(null,cljs.core.hash_map,map__33386):map__33386);var files = cljs.core.get.call(null,map__33386__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__10131__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto__,map__33385,map__33385__$1,opts,on_jsload,before_jsload,map__33386,map__33386__$1,files){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto__,map__33385,map__33385__$1,opts,on_jsload,before_jsload,map__33386,map__33386__$1,files){
return (function (state_33408){var state_val_33409 = (state_33408[(1)]);if((state_val_33409 === (6)))
{var inst_33391 = (state_33408[(7)]);var inst_33400 = (state_33408[(2)]);var inst_33401 = [inst_33391];var inst_33402 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_33401,null));var inst_33403 = cljs.core.apply.call(null,on_jsload,inst_33402);var state_33408__$1 = (function (){var statearr_33410 = state_33408;(statearr_33410[(8)] = inst_33400);
return statearr_33410;
})();var statearr_33411_33425 = state_33408__$1;(statearr_33411_33425[(2)] = inst_33403);
(statearr_33411_33425[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33409 === (5)))
{var inst_33406 = (state_33408[(2)]);var state_33408__$1 = state_33408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33408__$1,inst_33406);
} else
{if((state_val_33409 === (4)))
{var state_33408__$1 = state_33408;var statearr_33412_33426 = state_33408__$1;(statearr_33412_33426[(2)] = null);
(statearr_33412_33426[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33409 === (3)))
{var inst_33391 = (state_33408[(7)]);var inst_33394 = console.debug("Figwheel: loaded these files");var inst_33395 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33391);var inst_33396 = cljs.core.prn_str.call(null,inst_33395);var inst_33397 = console.log(inst_33396);var inst_33398 = cljs.core.async.timeout.call(null,(10));var state_33408__$1 = (function (){var statearr_33413 = state_33408;(statearr_33413[(9)] = inst_33397);
(statearr_33413[(10)] = inst_33394);
return statearr_33413;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33408__$1,(6),inst_33398);
} else
{if((state_val_33409 === (2)))
{var inst_33391 = (state_33408[(7)]);var inst_33391__$1 = (state_33408[(2)]);var inst_33392 = cljs.core.not_empty.call(null,inst_33391__$1);var state_33408__$1 = (function (){var statearr_33414 = state_33408;(statearr_33414[(7)] = inst_33391__$1);
return statearr_33414;
})();if(cljs.core.truth_(inst_33392))
{var statearr_33415_33427 = state_33408__$1;(statearr_33415_33427[(1)] = (3));
} else
{var statearr_33416_33428 = state_33408__$1;(statearr_33416_33428[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33409 === (1)))
{var inst_33387 = before_jsload.call(null,files);var inst_33388 = figwheel.client.add_request_urls.call(null,opts,files);var inst_33389 = figwheel.client.load_all_js_files.call(null,inst_33388);var state_33408__$1 = (function (){var statearr_33417 = state_33408;(statearr_33417[(11)] = inst_33387);
return statearr_33417;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33408__$1,(2),inst_33389);
} else
{return null;
}
}
}
}
}
}
});})(c__10131__auto__,map__33385,map__33385__$1,opts,on_jsload,before_jsload,map__33386,map__33386__$1,files))
;return ((function (switch__10116__auto__,c__10131__auto__,map__33385,map__33385__$1,opts,on_jsload,before_jsload,map__33386,map__33386__$1,files){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_33421 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33421[(0)] = state_machine__10117__auto__);
(statearr_33421[(1)] = (1));
return statearr_33421;
});
var state_machine__10117__auto____1 = (function (state_33408){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_33408);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e33422){if((e33422 instanceof Object))
{var ex__10120__auto__ = e33422;var statearr_33423_33429 = state_33408;(statearr_33423_33429[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33408);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33422;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33430 = state_33408;
state_33408 = G__33430;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_33408){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_33408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto__,map__33385,map__33385__$1,opts,on_jsload,before_jsload,map__33386,map__33386__$1,files))
})();var state__10133__auto__ = (function (){var statearr_33424 = f__10132__auto__.call(null);(statearr_33424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto__);
return statearr_33424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto__,map__33385,map__33385__$1,opts,on_jsload,before_jsload,map__33386,map__33386__$1,files))
);
return c__10131__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__33431,link_href){var map__33433 = p__33431;var map__33433__$1 = ((cljs.core.seq_QMARK_.call(null,map__33433))?cljs.core.apply.call(null,cljs.core.hash_map,map__33433):map__33433);var request_url = cljs.core.get.call(null,map__33433__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__33433__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__10131__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto__,parent){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto__,parent){
return (function (state_33454){var state_val_33455 = (state_33454[(1)]);if((state_val_33455 === (2)))
{var inst_33451 = (state_33454[(2)]);var inst_33452 = parent.removeChild(orig_link);var state_33454__$1 = (function (){var statearr_33456 = state_33454;(statearr_33456[(7)] = inst_33451);
return statearr_33456;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33454__$1,inst_33452);
} else
{if((state_val_33455 === (1)))
{var inst_33449 = cljs.core.async.timeout.call(null,(200));var state_33454__$1 = state_33454;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33454__$1,(2),inst_33449);
} else
{return null;
}
}
});})(c__10131__auto__,parent))
;return ((function (switch__10116__auto__,c__10131__auto__,parent){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_33460 = [null,null,null,null,null,null,null,null];(statearr_33460[(0)] = state_machine__10117__auto__);
(statearr_33460[(1)] = (1));
return statearr_33460;
});
var state_machine__10117__auto____1 = (function (state_33454){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_33454);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e33461){if((e33461 instanceof Object))
{var ex__10120__auto__ = e33461;var statearr_33462_33464 = state_33454;(statearr_33462_33464[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33454);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33461;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33465 = state_33454;
state_33454 = G__33465;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_33454){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_33454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto__,parent))
})();var state__10133__auto__ = (function (){var statearr_33463 = f__10132__auto__.call(null);(statearr_33463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto__);
return statearr_33463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto__,parent))
);
return c__10131__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__33466){var map__33468 = p__33466;var map__33468__$1 = ((cljs.core.seq_QMARK_.call(null,map__33468))?cljs.core.apply.call(null,cljs.core.hash_map,map__33468):map__33468);var f_data = map__33468__$1;var request_url = cljs.core.get.call(null,map__33468__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__33468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__33469,files_msg){var map__33491 = p__33469;var map__33491__$1 = ((cljs.core.seq_QMARK_.call(null,map__33491))?cljs.core.apply.call(null,cljs.core.hash_map,map__33491):map__33491);var opts = map__33491__$1;var on_cssload = cljs.core.get.call(null,map__33491__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__33492_33512 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__33493_33513 = null;var count__33494_33514 = (0);var i__33495_33515 = (0);while(true){
if((i__33495_33515 < count__33494_33514))
{var f_33516 = cljs.core._nth.call(null,chunk__33493_33513,i__33495_33515);figwheel.client.reload_css_file.call(null,f_33516);
{
var G__33517 = seq__33492_33512;
var G__33518 = chunk__33493_33513;
var G__33519 = count__33494_33514;
var G__33520 = (i__33495_33515 + (1));
seq__33492_33512 = G__33517;
chunk__33493_33513 = G__33518;
count__33494_33514 = G__33519;
i__33495_33515 = G__33520;
continue;
}
} else
{var temp__4126__auto___33521 = cljs.core.seq.call(null,seq__33492_33512);if(temp__4126__auto___33521)
{var seq__33492_33522__$1 = temp__4126__auto___33521;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33492_33522__$1))
{var c__8702__auto___33523 = cljs.core.chunk_first.call(null,seq__33492_33522__$1);{
var G__33524 = cljs.core.chunk_rest.call(null,seq__33492_33522__$1);
var G__33525 = c__8702__auto___33523;
var G__33526 = cljs.core.count.call(null,c__8702__auto___33523);
var G__33527 = (0);
seq__33492_33512 = G__33524;
chunk__33493_33513 = G__33525;
count__33494_33514 = G__33526;
i__33495_33515 = G__33527;
continue;
}
} else
{var f_33528 = cljs.core.first.call(null,seq__33492_33522__$1);figwheel.client.reload_css_file.call(null,f_33528);
{
var G__33529 = cljs.core.next.call(null,seq__33492_33522__$1);
var G__33530 = null;
var G__33531 = (0);
var G__33532 = (0);
seq__33492_33512 = G__33529;
chunk__33493_33513 = G__33530;
count__33494_33514 = G__33531;
i__33495_33515 = G__33532;
continue;
}
}
} else
{}
}
break;
}
var c__10131__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto__,map__33491,map__33491__$1,opts,on_cssload){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto__,map__33491,map__33491__$1,opts,on_cssload){
return (function (state_33502){var state_val_33503 = (state_33502[(1)]);if((state_val_33503 === (2)))
{var inst_33498 = (state_33502[(2)]);var inst_33499 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_33500 = on_cssload.call(null,inst_33499);var state_33502__$1 = (function (){var statearr_33504 = state_33502;(statearr_33504[(7)] = inst_33498);
return statearr_33504;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33502__$1,inst_33500);
} else
{if((state_val_33503 === (1)))
{var inst_33496 = cljs.core.async.timeout.call(null,(100));var state_33502__$1 = state_33502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33502__$1,(2),inst_33496);
} else
{return null;
}
}
});})(c__10131__auto__,map__33491,map__33491__$1,opts,on_cssload))
;return ((function (switch__10116__auto__,c__10131__auto__,map__33491,map__33491__$1,opts,on_cssload){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_33508 = [null,null,null,null,null,null,null,null];(statearr_33508[(0)] = state_machine__10117__auto__);
(statearr_33508[(1)] = (1));
return statearr_33508;
});
var state_machine__10117__auto____1 = (function (state_33502){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_33502);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e33509){if((e33509 instanceof Object))
{var ex__10120__auto__ = e33509;var statearr_33510_33533 = state_33502;(statearr_33510_33533[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33502);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33534 = state_33502;
state_33502 = G__33534;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_33502){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_33502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto__,map__33491,map__33491__$1,opts,on_cssload))
})();var state__10133__auto__ = (function (){var statearr_33511 = f__10132__auto__.call(null);(statearr_33511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto__);
return statearr_33511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto__,map__33491,map__33491__$1,opts,on_cssload))
);
return c__10131__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__33535){var map__33540 = p__33535;var map__33540__$1 = ((cljs.core.seq_QMARK_.call(null,map__33540))?cljs.core.apply.call(null,cljs.core.hash_map,map__33540):map__33540);var opts = map__33540__$1;var on_compile_fail = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__33540,map__33540__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__33541 = cljs.core._EQ_;var expr__33542 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__33541.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__33542)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__33541.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__33542)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__33541.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33542)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__33540,map__33540__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__33540,map__33540__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__33540,map__33540__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__33540,map__33540__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__33540,map__33540__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__33540,map__33540__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__33540,map__33540__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__33540,map__33540__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__33540,map__33540__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj33547 = {"detail":url};return obj33547;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__33548){var map__33550 = p__33548;var map__33550__$1 = ((cljs.core.seq_QMARK_.call(null,map__33550))?cljs.core.apply.call(null,cljs.core.hash_map,map__33550):map__33550);var class$ = cljs.core.get.call(null,map__33550__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__33550__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__33551){var map__33557 = p__33551;var map__33557__$1 = ((cljs.core.seq_QMARK_.call(null,map__33557))?cljs.core.apply.call(null,cljs.core.hash_map,map__33557):map__33557);var ed = map__33557__$1;var exception_data = cljs.core.get.call(null,map__33557__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__33557__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__33558_33562 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__33559_33563 = null;var count__33560_33564 = (0);var i__33561_33565 = (0);while(true){
if((i__33561_33565 < count__33560_33564))
{var msg_33566 = cljs.core._nth.call(null,chunk__33559_33563,i__33561_33565);console.log(msg_33566);
{
var G__33567 = seq__33558_33562;
var G__33568 = chunk__33559_33563;
var G__33569 = count__33560_33564;
var G__33570 = (i__33561_33565 + (1));
seq__33558_33562 = G__33567;
chunk__33559_33563 = G__33568;
count__33560_33564 = G__33569;
i__33561_33565 = G__33570;
continue;
}
} else
{var temp__4126__auto___33571 = cljs.core.seq.call(null,seq__33558_33562);if(temp__4126__auto___33571)
{var seq__33558_33572__$1 = temp__4126__auto___33571;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33558_33572__$1))
{var c__8702__auto___33573 = cljs.core.chunk_first.call(null,seq__33558_33572__$1);{
var G__33574 = cljs.core.chunk_rest.call(null,seq__33558_33572__$1);
var G__33575 = c__8702__auto___33573;
var G__33576 = cljs.core.count.call(null,c__8702__auto___33573);
var G__33577 = (0);
seq__33558_33562 = G__33574;
chunk__33559_33563 = G__33575;
count__33560_33564 = G__33576;
i__33561_33565 = G__33577;
continue;
}
} else
{var msg_33578 = cljs.core.first.call(null,seq__33558_33572__$1);console.log(msg_33578);
{
var G__33579 = cljs.core.next.call(null,seq__33558_33572__$1);
var G__33580 = null;
var G__33581 = (0);
var G__33582 = (0);
seq__33558_33562 = G__33579;
chunk__33559_33563 = G__33580;
count__33560_33564 = G__33581;
i__33561_33565 = G__33582;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__7946__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__33583){var map__33585 = p__33583;var map__33585__$1 = ((cljs.core.seq_QMARK_.call(null,map__33585))?cljs.core.apply.call(null,cljs.core.hash_map,map__33585):map__33585);var opts = map__33585__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__33583 = null;if (arguments.length > 0) {
  p__33583 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__33583);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__33586){
var p__33583 = cljs.core.seq(arglist__33586);
return watch_and_reload__delegate(p__33583);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map