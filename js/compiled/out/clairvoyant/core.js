// Compiled by ClojureScript 0.0-2261
goog.provide('clairvoyant.core');
goog.require('cljs.core');
clairvoyant.core.ITraceEnter = (function (){var obj33313 = {};return obj33313;
})();
clairvoyant.core._trace_enter = (function _trace_enter(this$,trace_data){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.clairvoyant$core$ITraceEnter$_trace_enter$arity$2;
} else
{return and__7934__auto__;
}
})())
{return this$.clairvoyant$core$ITraceEnter$_trace_enter$arity$2(this$,trace_data);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (clairvoyant.core._trace_enter[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (clairvoyant.core._trace_enter["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITraceEnter.-trace-enter",this$);
}
}
})().call(null,this$,trace_data);
}
});
clairvoyant.core.ITraceError = (function (){var obj33315 = {};return obj33315;
})();
clairvoyant.core._trace_error = (function _trace_error(this$,trace_data){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.clairvoyant$core$ITraceError$_trace_error$arity$2;
} else
{return and__7934__auto__;
}
})())
{return this$.clairvoyant$core$ITraceError$_trace_error$arity$2(this$,trace_data);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (clairvoyant.core._trace_error[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (clairvoyant.core._trace_error["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITraceError.-trace-error",this$);
}
}
})().call(null,this$,trace_data);
}
});
clairvoyant.core.ITraceExit = (function (){var obj33317 = {};return obj33317;
})();
clairvoyant.core._trace_exit = (function _trace_exit(this$,trace_data){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.clairvoyant$core$ITraceExit$_trace_exit$arity$2;
} else
{return and__7934__auto__;
}
})())
{return this$.clairvoyant$core$ITraceExit$_trace_exit$arity$2(this$,trace_data);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (clairvoyant.core._trace_exit[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (clairvoyant.core._trace_exit["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITraceExit.-trace-exit",this$);
}
}
})().call(null,this$,trace_data);
}
});
/**
* Call the -trace-enter method for a given tracer with trace-data.
* tracer must satisfy ITraceEnter.
*/
clairvoyant.core.trace_enter = (function trace_enter(tracer,trace_data){return clairvoyant.core._trace_enter.call(null,tracer,trace_data);
});
/**
* Call the -trace-error method for a given tracer with trace-data.
* tracer must satisfy ITraceError.
*/
clairvoyant.core.trace_error = (function trace_error(tracer,trace_data){return clairvoyant.core._trace_error.call(null,tracer,trace_data);
});
/**
* Call the -trace-exit method for a given tracer with trace-data.
* tracer must satisfy ITraceExit.
*/
clairvoyant.core.trace_exit = (function trace_exit(tracer,trace_data){return clairvoyant.core._trace_exit.call(null,tracer,trace_data);
});
clairvoyant.core.default_tracer = (function (){var log_binding = (function (form,init){return console.groupCollapsed("%c%s %c%s","font-weight:bold;",cljs.core.pr_str.call(null,form),"font-weight:normal;",cljs.core.pr_str.call(null,init));
});var has_bindings_QMARK_ = cljs.core.PersistentHashSet.fromArray([new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","defn","clojure.core/defn",-1504648747,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,31),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,26),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Volumes/goo/play/cljs/goo-reload/resources/public/js/compiled/out/clairvoyant/core.cljs"))))),new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,30),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,57),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,26),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,57),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Volumes/goo/play/cljs/goo-reload/resources/public/js/compiled/out/clairvoyant/core.cljs"))))),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","extend-protocol","clojure.core/extend-protocol",-1004430087,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,42),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,61),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,26),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,61),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Volumes/goo/play/cljs/goo-reload/resources/public/js/compiled/out/clairvoyant/core.cljs"))))),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,29),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,48),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,26),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,48),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Volumes/goo/play/cljs/goo-reload/resources/public/js/compiled/out/clairvoyant/core.cljs"))))),new cljs.core.Symbol(null,"reify","reify",1885539699,null),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","extend-type","clojure.core/extend-type",1892724878,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,38),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,26),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Volumes/goo/play/cljs/goo-reload/resources/public/js/compiled/out/clairvoyant/core.cljs"))))),new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","defmethod","clojure.core/defmethod",-346593352,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,36),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,53),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,26),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,53),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Volumes/goo/play/cljs/goo-reload/resources/public/js/compiled/out/clairvoyant/core.cljs"))))),new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","reify","clojure.core/reify",562538906,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,32),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,26),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Volumes/goo/play/cljs/goo-reload/resources/public/js/compiled/out/clairvoyant/core.cljs")))))], true);var fn_like_QMARK_ = cljs.core.disj.call(null,has_bindings_QMARK_,new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,48),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,62),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,44),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,62),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Volumes/goo/play/cljs/goo-reload/resources/public/js/compiled/out/clairvoyant/core.cljs"))))));if(typeof clairvoyant.core.t33318 !== 'undefined')
{} else
{
/**
* @constructor
*/
clairvoyant.core.t33318 = (function (fn_like_QMARK_,has_bindings_QMARK_,log_binding,meta33319){
this.fn_like_QMARK_ = fn_like_QMARK_;
this.has_bindings_QMARK_ = has_bindings_QMARK_;
this.log_binding = log_binding;
this.meta33319 = meta33319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clairvoyant.core.t33318.cljs$lang$type = true;
clairvoyant.core.t33318.cljs$lang$ctorStr = "clairvoyant.core/t33318";
clairvoyant.core.t33318.cljs$lang$ctorPrWriter = ((function (log_binding,has_bindings_QMARK_,fn_like_QMARK_){
return (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"clairvoyant.core/t33318");
});})(log_binding,has_bindings_QMARK_,fn_like_QMARK_))
;
clairvoyant.core.t33318.prototype.clairvoyant$core$ITraceError$ = true;
clairvoyant.core.t33318.prototype.clairvoyant$core$ITraceError$_trace_error$arity$2 = ((function (log_binding,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__33321){var self__ = this;
var map__33322 = p__33321;var map__33322__$1 = ((cljs.core.seq_QMARK_.call(null,map__33322))?cljs.core.apply.call(null,cljs.core.hash_map,map__33322):map__33322);var error = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"error","error",-978969032));var form = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"form","form",-1624062471));var op = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"op","op",-1882987955));var ___$1 = this;if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op)))
{return console.error(error.stack);
} else
{if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op)))
{console.groupEnd();
console.error(error.stack);
return console.groupEnd();
} else
{return null;
}
}
});})(log_binding,has_bindings_QMARK_,fn_like_QMARK_))
;
clairvoyant.core.t33318.prototype.clairvoyant$core$ITraceExit$ = true;
clairvoyant.core.t33318.prototype.clairvoyant$core$ITraceExit$_trace_exit$arity$2 = ((function (log_binding,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__33323){var self__ = this;
var map__33324 = p__33323;var map__33324__$1 = ((cljs.core.seq_QMARK_.call(null,map__33324))?cljs.core.apply.call(null,cljs.core.hash_map,map__33324):map__33324);var exit = cljs.core.get.call(null,map__33324__$1,new cljs.core.Keyword(null,"exit","exit",351849638));var op = cljs.core.get.call(null,map__33324__$1,new cljs.core.Keyword(null,"op","op",-1882987955));var ___$1 = this;if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op)))
{console.info(exit);
return console.groupEnd();
} else
{if(cljs.core.truth_(self__.has_bindings_QMARK_.call(null,op)))
{console.groupEnd();
console.info(exit);
return console.groupEnd();
} else
{return null;
}
}
});})(log_binding,has_bindings_QMARK_,fn_like_QMARK_))
;
clairvoyant.core.t33318.prototype.clairvoyant$core$ITraceEnter$ = true;
clairvoyant.core.t33318.prototype.clairvoyant$core$ITraceEnter$_trace_enter$arity$2 = ((function (log_binding,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_,p__33325){var self__ = this;
var map__33326 = p__33325;var map__33326__$1 = ((cljs.core.seq_QMARK_.call(null,map__33326))?cljs.core.apply.call(null,cljs.core.hash_map,map__33326):map__33326);var form = cljs.core.get.call(null,map__33326__$1,new cljs.core.Keyword(null,"form","form",-1624062471));var args = cljs.core.get.call(null,map__33326__$1,new cljs.core.Keyword(null,"args","args",1315556576));var dispatch_val = cljs.core.get.call(null,map__33326__$1,new cljs.core.Keyword(null,"dispatch-val","dispatch-val",-1571470527));var protocol = cljs.core.get.call(null,map__33326__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));var init = cljs.core.get.call(null,map__33326__$1,new cljs.core.Keyword(null,"init","init",-1875481434));var ns = cljs.core.get.call(null,map__33326__$1,new cljs.core.Keyword(null,"ns","ns",441598760));var name = cljs.core.get.call(null,map__33326__$1,new cljs.core.Keyword(null,"name","name",1843675177));var arglist = cljs.core.get.call(null,map__33326__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));var op = cljs.core.get.call(null,map__33326__$1,new cljs.core.Keyword(null,"op","op",-1882987955));var anonymous_QMARK_ = cljs.core.get.call(null,map__33326__$1,new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995));var ___$1 = this;if(cljs.core.truth_(self__.fn_like_QMARK_.call(null,op)))
{var title = (cljs.core.truth_(protocol)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arglist)):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(dispatch_val)?(" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,dispatch_val))):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arglist)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(anonymous_QMARK_)?" (anonymous)":null))));var arglist__$1 = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);console.groupCollapsed(title);
return console.groupCollapsed("bindings");
} else
{if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([new cljs.core.Symbol(null,"let","let",358118826,null),cljs.core.with_meta.call(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,23),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,80),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,80),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Volumes/goo/play/cljs/goo-reload/resources/public/js/compiled/out/clairvoyant/core.cljs")))))], true).call(null,op)))
{var title = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op));console.groupCollapsed(title);
return console.groupCollapsed("bindings");
} else
{if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),null], null), null).call(null,op)))
{return self__.log_binding.call(null,form,init);
} else
{return null;
}
}
}
});})(log_binding,has_bindings_QMARK_,fn_like_QMARK_))
;
clairvoyant.core.t33318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (log_binding,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_33320){var self__ = this;
var _33320__$1 = this;return self__.meta33319;
});})(log_binding,has_bindings_QMARK_,fn_like_QMARK_))
;
clairvoyant.core.t33318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (log_binding,has_bindings_QMARK_,fn_like_QMARK_){
return (function (_33320,meta33319__$1){var self__ = this;
var _33320__$1 = this;return (new clairvoyant.core.t33318(self__.fn_like_QMARK_,self__.has_bindings_QMARK_,self__.log_binding,meta33319__$1));
});})(log_binding,has_bindings_QMARK_,fn_like_QMARK_))
;
clairvoyant.core.__GT_t33318 = ((function (log_binding,has_bindings_QMARK_,fn_like_QMARK_){
return (function __GT_t33318(fn_like_QMARK___$1,has_bindings_QMARK___$1,log_binding__$1,meta33319){return (new clairvoyant.core.t33318(fn_like_QMARK___$1,has_bindings_QMARK___$1,log_binding__$1,meta33319));
});})(log_binding,has_bindings_QMARK_,fn_like_QMARK_))
;
}
return (new clairvoyant.core.t33318(fn_like_QMARK_,has_bindings_QMARK_,log_binding,null));
})();

//# sourceMappingURL=core.js.map