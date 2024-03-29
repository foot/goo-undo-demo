// Compiled by ClojureScript 0.0-2261
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__7934__auto__ = v;if(cljs.core.truth_(and__7934__auto__))
{return (v > (0));
} else
{return and__7934__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__30086_SHARP_,p2__30085_SHARP_){var vec__30088 = clojure.string.split.call(null,p2__30085_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__30088,(0),null);var v = cljs.core.nth.call(null,vec__30088,(1),null);return cljs.core.assoc.call(null,p1__30086_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__30089_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__30089_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__30090){var vec__30092 = p__30090;var k = cljs.core.nth.call(null,vec__30092,(0),null);var v = cljs.core.nth.call(null,vec__30092,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__30093_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30093_SHARP_));
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__7934__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__7934__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__7934__auto__;
}
})()))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__10131__auto___30130 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___30130,channel){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___30130,channel){
return (function (state_30120){var state_val_30121 = (state_30120[(1)]);if((state_val_30121 === (2)))
{var inst_30114 = (state_30120[(2)]);var inst_30115 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_30116 = cljs_http.client.decode_body.call(null,inst_30114,cljs.reader.read_string,"application/edn",inst_30115);var inst_30117 = cljs.core.async.put_BANG_.call(null,channel,inst_30116);var inst_30118 = cljs.core.async.close_BANG_.call(null,channel);var state_30120__$1 = (function (){var statearr_30122 = state_30120;(statearr_30122[(7)] = inst_30117);
return statearr_30122;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30120__$1,inst_30118);
} else
{if((state_val_30121 === (1)))
{var inst_30112 = client.call(null,request);var state_30120__$1 = state_30120;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30120__$1,(2),inst_30112);
} else
{return null;
}
}
});})(c__10131__auto___30130,channel))
;return ((function (switch__10116__auto__,c__10131__auto___30130,channel){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_30126 = [null,null,null,null,null,null,null,null];(statearr_30126[(0)] = state_machine__10117__auto__);
(statearr_30126[(1)] = (1));
return statearr_30126;
});
var state_machine__10117__auto____1 = (function (state_30120){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_30120);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e30127){if((e30127 instanceof Object))
{var ex__10120__auto__ = e30127;var statearr_30128_30131 = state_30120;(statearr_30128_30131[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30120);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30132 = state_30120;
state_30120 = G__30132;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_30120){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_30120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___30130,channel))
})();var state__10133__auto__ = (function (){var statearr_30129 = f__10132__auto__.call(null);(statearr_30129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___30130);
return statearr_30129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___30130,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__30133){var vec__30135 = p__30133;var accept = cljs.core.nth.call(null,vec__30135,(0),null);return ((function (vec__30135,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__7946__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__30135,accept))
};
var wrap_accept = function (client,var_args){
var p__30133 = null;if (arguments.length > 1) {
  p__30133 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__30133);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__30136){
var client = cljs.core.first(arglist__30136);
var p__30133 = cljs.core.rest(arglist__30136);
return wrap_accept__delegate(client,p__30133);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__30137){var vec__30139 = p__30137;var content_type = cljs.core.nth.call(null,vec__30139,(0),null);return ((function (vec__30139,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__7946__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__30139,content_type))
};
var wrap_content_type = function (client,var_args){
var p__30137 = null;if (arguments.length > 1) {
  p__30137 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__30137);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__30140){
var client = cljs.core.first(arglist__30140);
var p__30137 = cljs.core.rest(arglist__30140);
return wrap_content_type__delegate(client,p__30137);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
* Encode :transit-params in the `request` :body and set the appropriate
* Content Type header.
* 
* A :transit-opts map can be optionally provided with the following keys:
* 
* :encoding                #{:json, :json-verbose}
* :decoding                #{:json, :json-verbose}
* :encoding/decoding-opts  appropriate map of options to be passed to
* transit writer/reader, respectively.
*/
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var map__30142 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__30142__$1 = ((cljs.core.seq_QMARK_.call(null,map__30142))?cljs.core.apply.call(null,cljs.core.hash_map,map__30142):map__30142);var encoding_opts = cljs.core.get.call(null,map__30142__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.call(null,map__30142__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var map__30164 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__30164__$1 = ((cljs.core.seq_QMARK_.call(null,map__30164))?cljs.core.apply.call(null,cljs.core.hash_map,map__30164):map__30164);var decoding_opts = cljs.core.get.call(null,map__30164__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.call(null,map__30164__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__10131__auto___30184 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___30184,channel,map__30164,map__30164__$1,decoding_opts,decoding){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___30184,channel,map__30164,map__30164__$1,decoding_opts,decoding){
return (function (state_30174){var state_val_30175 = (state_30174[(1)]);if((state_val_30175 === (2)))
{var inst_30167 = (state_30174[(2)]);var inst_30168 = (function (){var response = inst_30167;return ((function (response,inst_30167,state_val_30175,c__10131__auto___30184,channel,map__30164,map__30164__$1,decoding_opts,decoding){
return (function (p1__30143_SHARP_){return cljs_http.util.transit_decode.call(null,p1__30143_SHARP_,decoding,decoding_opts);
});
;})(response,inst_30167,state_val_30175,c__10131__auto___30184,channel,map__30164,map__30164__$1,decoding_opts,decoding))
})();var inst_30169 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_30170 = cljs_http.client.decode_body.call(null,inst_30167,inst_30168,"application/transit+json",inst_30169);var inst_30171 = cljs.core.async.put_BANG_.call(null,channel,inst_30170);var inst_30172 = cljs.core.async.close_BANG_.call(null,channel);var state_30174__$1 = (function (){var statearr_30176 = state_30174;(statearr_30176[(7)] = inst_30171);
return statearr_30176;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30174__$1,inst_30172);
} else
{if((state_val_30175 === (1)))
{var inst_30165 = client.call(null,request);var state_30174__$1 = state_30174;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30174__$1,(2),inst_30165);
} else
{return null;
}
}
});})(c__10131__auto___30184,channel,map__30164,map__30164__$1,decoding_opts,decoding))
;return ((function (switch__10116__auto__,c__10131__auto___30184,channel,map__30164,map__30164__$1,decoding_opts,decoding){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_30180 = [null,null,null,null,null,null,null,null];(statearr_30180[(0)] = state_machine__10117__auto__);
(statearr_30180[(1)] = (1));
return statearr_30180;
});
var state_machine__10117__auto____1 = (function (state_30174){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_30174);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e30181){if((e30181 instanceof Object))
{var ex__10120__auto__ = e30181;var statearr_30182_30185 = state_30174;(statearr_30182_30185[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30174);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30186 = state_30174;
state_30174 = G__30186;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_30174){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_30174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___30184,channel,map__30164,map__30164__$1,decoding_opts,decoding))
})();var state__10133__auto__ = (function (){var statearr_30183 = f__10132__auto__.call(null);(statearr_30183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___30184);
return statearr_30183;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___30184,channel,map__30164,map__30164__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__10131__auto___30223 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___30223,channel){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___30223,channel){
return (function (state_30213){var state_val_30214 = (state_30213[(1)]);if((state_val_30214 === (2)))
{var inst_30207 = (state_30213[(2)]);var inst_30208 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_30209 = cljs_http.client.decode_body.call(null,inst_30207,cljs_http.util.json_decode,"application/json",inst_30208);var inst_30210 = cljs.core.async.put_BANG_.call(null,channel,inst_30209);var inst_30211 = cljs.core.async.close_BANG_.call(null,channel);var state_30213__$1 = (function (){var statearr_30215 = state_30213;(statearr_30215[(7)] = inst_30210);
return statearr_30215;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30213__$1,inst_30211);
} else
{if((state_val_30214 === (1)))
{var inst_30205 = client.call(null,request);var state_30213__$1 = state_30213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30213__$1,(2),inst_30205);
} else
{return null;
}
}
});})(c__10131__auto___30223,channel))
;return ((function (switch__10116__auto__,c__10131__auto___30223,channel){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_30219 = [null,null,null,null,null,null,null,null];(statearr_30219[(0)] = state_machine__10117__auto__);
(statearr_30219[(1)] = (1));
return statearr_30219;
});
var state_machine__10117__auto____1 = (function (state_30213){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_30213);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e30220){if((e30220 instanceof Object))
{var ex__10120__auto__ = e30220;var statearr_30221_30224 = state_30213;(statearr_30221_30224[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30213);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30225 = state_30213;
state_30213 = G__30225;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_30213){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_30213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___30223,channel))
})();var state__10133__auto__ = (function (){var statearr_30222 = f__10132__auto__.call(null);(statearr_30222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___30223);
return statearr_30222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___30223,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__30228){var map__30229 = p__30228;var map__30229__$1 = ((cljs.core.seq_QMARK_.call(null,map__30229))?cljs.core.apply.call(null,cljs.core.hash_map,map__30229):map__30229);var req = map__30229__$1;var query_params = cljs.core.get.call(null,map__30229__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__30232){var map__30233 = p__30232;var map__30233__$1 = ((cljs.core.seq_QMARK_.call(null,map__30233))?cljs.core.apply.call(null,cljs.core.hash_map,map__30233):map__30233);var request = map__30233__$1;var request_method = cljs.core.get.call(null,map__30233__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__30233__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__7934__auto__ = form_params;if(cljs.core.truth_(and__7934__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__7934__auto__;
}
})()))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else
{return client.call(null,request);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__30234_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__30234_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__30238){var map__30239 = p__30238;var map__30239__$1 = ((cljs.core.seq_QMARK_.call(null,map__30239))?cljs.core.apply.call(null,cljs.core.hash_map,map__30239):map__30239);var req = map__30239__$1;var query_params = cljs.core.get.call(null,map__30239__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__30239,map__30239__$1,req,query_params){
return (function (p1__30235_SHARP_){return cljs.core.merge.call(null,p1__30235_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__30239,map__30239__$1,req,query_params))
));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__30240){var vec__30242 = p__30240;var credentials = cljs.core.nth.call(null,vec__30242,(0),null);return ((function (vec__30242,credentials){
return (function (req){var credentials__$1 = (function (){var or__7946__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__30242,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__30240 = null;if (arguments.length > 1) {
  p__30240 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__30240);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__30243){
var client = cljs.core.first(arglist__30243);
var p__30240 = cljs.core.rest(arglist__30243);
return wrap_basic_auth__delegate(client,p__30240);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token))));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__30244){var vec__30246 = p__30244;var req = cljs.core.nth.call(null,vec__30246,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__30244 = null;if (arguments.length > 1) {
  p__30244 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__30244);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__30247){
var url = cljs.core.first(arglist__30247);
var p__30244 = cljs.core.rest(arglist__30247);
return delete$__delegate(url,p__30244);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__30248){var vec__30250 = p__30248;var req = cljs.core.nth.call(null,vec__30250,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__30248 = null;if (arguments.length > 1) {
  p__30248 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__30248);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__30251){
var url = cljs.core.first(arglist__30251);
var p__30248 = cljs.core.rest(arglist__30251);
return get__delegate(url,p__30248);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__30252){var vec__30254 = p__30252;var req = cljs.core.nth.call(null,vec__30254,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__30252 = null;if (arguments.length > 1) {
  p__30252 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__30252);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__30255){
var url = cljs.core.first(arglist__30255);
var p__30252 = cljs.core.rest(arglist__30255);
return head__delegate(url,p__30252);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__30256){var vec__30258 = p__30256;var req = cljs.core.nth.call(null,vec__30258,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__30256 = null;if (arguments.length > 1) {
  p__30256 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__30256);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__30259){
var url = cljs.core.first(arglist__30259);
var p__30256 = cljs.core.rest(arglist__30259);
return move__delegate(url,p__30256);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__30260){var vec__30262 = p__30260;var req = cljs.core.nth.call(null,vec__30262,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__30260 = null;if (arguments.length > 1) {
  p__30260 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__30260);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__30263){
var url = cljs.core.first(arglist__30263);
var p__30260 = cljs.core.rest(arglist__30263);
return options__delegate(url,p__30260);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__30264){var vec__30266 = p__30264;var req = cljs.core.nth.call(null,vec__30266,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__30264 = null;if (arguments.length > 1) {
  p__30264 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__30264);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__30267){
var url = cljs.core.first(arglist__30267);
var p__30264 = cljs.core.rest(arglist__30267);
return patch__delegate(url,p__30264);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__30268){var vec__30270 = p__30268;var req = cljs.core.nth.call(null,vec__30270,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__30268 = null;if (arguments.length > 1) {
  p__30268 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__30268);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__30271){
var url = cljs.core.first(arglist__30271);
var p__30268 = cljs.core.rest(arglist__30271);
return post__delegate(url,p__30268);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__30272){var vec__30274 = p__30272;var req = cljs.core.nth.call(null,vec__30274,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__30272 = null;if (arguments.length > 1) {
  p__30272 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__30272);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__30275){
var url = cljs.core.first(arglist__30275);
var p__30272 = cljs.core.rest(arglist__30275);
return put__delegate(url,p__30272);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map