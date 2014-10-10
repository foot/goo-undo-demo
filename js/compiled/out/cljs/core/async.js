// Compiled by ClojureScript 0.0-2261
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t30578 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30578 = (function (f,fn_handler,meta30579){
this.f = f;
this.fn_handler = fn_handler;
this.meta30579 = meta30579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30578.cljs$lang$type = true;
cljs.core.async.t30578.cljs$lang$ctorStr = "cljs.core.async/t30578";
cljs.core.async.t30578.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core.async/t30578");
});
cljs.core.async.t30578.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t30578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t30578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30580){var self__ = this;
var _30580__$1 = this;return self__.meta30579;
});
cljs.core.async.t30578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30580,meta30579__$1){var self__ = this;
var _30580__$1 = this;return (new cljs.core.async.t30578(self__.f,self__.fn_handler,meta30579__$1));
});
cljs.core.async.__GT_t30578 = (function __GT_t30578(f__$1,fn_handler__$1,meta30579){return (new cljs.core.async.t30578(f__$1,fn_handler__$1,meta30579));
});
}
return (new cljs.core.async.t30578(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__30582 = buff;if(G__30582)
{var bit__8596__auto__ = null;if(cljs.core.truth_((function (){var or__7946__auto__ = bit__8596__auto__;if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return G__30582.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__30582.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30582);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30582);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_30583 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_30583);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_30583,ret){
return (function (){return fn1.call(null,val_30583);
});})(val_30583,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8802__auto___30584 = n;var x_30585 = (0);while(true){
if((x_30585 < n__8802__auto___30584))
{(a[x_30585] = (0));
{
var G__30586 = (x_30585 + (1));
x_30585 = G__30586;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__30587 = (i + (1));
i = G__30587;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t30591 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30591 = (function (flag,alt_flag,meta30592){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30592 = meta30592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30591.cljs$lang$type = true;
cljs.core.async.t30591.cljs$lang$ctorStr = "cljs.core.async/t30591";
cljs.core.async.t30591.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core.async/t30591");
});})(flag))
;
cljs.core.async.t30591.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t30591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t30591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30593){var self__ = this;
var _30593__$1 = this;return self__.meta30592;
});})(flag))
;
cljs.core.async.t30591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30593,meta30592__$1){var self__ = this;
var _30593__$1 = this;return (new cljs.core.async.t30591(self__.flag,self__.alt_flag,meta30592__$1));
});})(flag))
;
cljs.core.async.__GT_t30591 = ((function (flag){
return (function __GT_t30591(flag__$1,alt_flag__$1,meta30592){return (new cljs.core.async.t30591(flag__$1,alt_flag__$1,meta30592));
});})(flag))
;
}
return (new cljs.core.async.t30591(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t30597 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30597 = (function (cb,flag,alt_handler,meta30598){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30598 = meta30598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30597.cljs$lang$type = true;
cljs.core.async.t30597.cljs$lang$ctorStr = "cljs.core.async/t30597";
cljs.core.async.t30597.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core.async/t30597");
});
cljs.core.async.t30597.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30597.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t30597.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t30597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30599){var self__ = this;
var _30599__$1 = this;return self__.meta30598;
});
cljs.core.async.t30597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30599,meta30598__$1){var self__ = this;
var _30599__$1 = this;return (new cljs.core.async.t30597(self__.cb,self__.flag,self__.alt_handler,meta30598__$1));
});
cljs.core.async.__GT_t30597 = (function __GT_t30597(cb__$1,flag__$1,alt_handler__$1,meta30598){return (new cljs.core.async.t30597(cb__$1,flag__$1,alt_handler__$1,meta30598));
});
}
return (new cljs.core.async.t30597(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30600_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30600_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30601_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30601_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7946__auto__ = wport;if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__30602 = (i + (1));
i = G__30602;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7946__auto__ = ret;if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__7934__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7934__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7934__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__30603){var map__30605 = p__30603;var map__30605__$1 = ((cljs.core.seq_QMARK_.call(null,map__30605))?cljs.core.apply.call(null,cljs.core.hash_map,map__30605):map__30605);var opts = map__30605__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__30603 = null;if (arguments.length > 1) {
  p__30603 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__30603);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30606){
var ports = cljs.core.first(arglist__30606);
var p__30603 = cljs.core.rest(arglist__30606);
return alts_BANG___delegate(ports,p__30603);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t30614 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30614 = (function (ch,f,map_LT_,meta30615){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30615 = meta30615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30614.cljs$lang$type = true;
cljs.core.async.t30614.cljs$lang$ctorStr = "cljs.core.async/t30614";
cljs.core.async.t30614.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core.async/t30614");
});
cljs.core.async.t30614.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30614.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t30614.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30614.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t30617 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30617 = (function (fn1,_,meta30615,ch,f,map_LT_,meta30618){
this.fn1 = fn1;
this._ = _;
this.meta30615 = meta30615;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30618 = meta30618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30617.cljs$lang$type = true;
cljs.core.async.t30617.cljs$lang$ctorStr = "cljs.core.async/t30617";
cljs.core.async.t30617.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core.async/t30617");
});})(___$1))
;
cljs.core.async.t30617.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30617.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t30617.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t30617.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__30607_SHARP_){return f1.call(null,(((p1__30607_SHARP_ == null))?null:self__.f.call(null,p1__30607_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t30617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30619){var self__ = this;
var _30619__$1 = this;return self__.meta30618;
});})(___$1))
;
cljs.core.async.t30617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30619,meta30618__$1){var self__ = this;
var _30619__$1 = this;return (new cljs.core.async.t30617(self__.fn1,self__._,self__.meta30615,self__.ch,self__.f,self__.map_LT_,meta30618__$1));
});})(___$1))
;
cljs.core.async.__GT_t30617 = ((function (___$1){
return (function __GT_t30617(fn1__$1,___$2,meta30615__$1,ch__$2,f__$2,map_LT___$2,meta30618){return (new cljs.core.async.t30617(fn1__$1,___$2,meta30615__$1,ch__$2,f__$2,map_LT___$2,meta30618));
});})(___$1))
;
}
return (new cljs.core.async.t30617(fn1,___$1,self__.meta30615,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7934__auto__ = ret;if(cljs.core.truth_(and__7934__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7934__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t30614.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30614.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30614.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t30614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30616){var self__ = this;
var _30616__$1 = this;return self__.meta30615;
});
cljs.core.async.t30614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30616,meta30615__$1){var self__ = this;
var _30616__$1 = this;return (new cljs.core.async.t30614(self__.ch,self__.f,self__.map_LT_,meta30615__$1));
});
cljs.core.async.__GT_t30614 = (function __GT_t30614(ch__$1,f__$1,map_LT___$1,meta30615){return (new cljs.core.async.t30614(ch__$1,f__$1,map_LT___$1,meta30615));
});
}
return (new cljs.core.async.t30614(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t30623 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30623 = (function (ch,f,map_GT_,meta30624){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30624 = meta30624;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30623.cljs$lang$type = true;
cljs.core.async.t30623.cljs$lang$ctorStr = "cljs.core.async/t30623";
cljs.core.async.t30623.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core.async/t30623");
});
cljs.core.async.t30623.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30623.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t30623.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30623.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30623.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30623.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30625){var self__ = this;
var _30625__$1 = this;return self__.meta30624;
});
cljs.core.async.t30623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30625,meta30624__$1){var self__ = this;
var _30625__$1 = this;return (new cljs.core.async.t30623(self__.ch,self__.f,self__.map_GT_,meta30624__$1));
});
cljs.core.async.__GT_t30623 = (function __GT_t30623(ch__$1,f__$1,map_GT___$1,meta30624){return (new cljs.core.async.t30623(ch__$1,f__$1,map_GT___$1,meta30624));
});
}
return (new cljs.core.async.t30623(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t30629 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30629 = (function (ch,p,filter_GT_,meta30630){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30630 = meta30630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30629.cljs$lang$type = true;
cljs.core.async.t30629.cljs$lang$ctorStr = "cljs.core.async/t30629";
cljs.core.async.t30629.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core.async/t30629");
});
cljs.core.async.t30629.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30629.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t30629.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30629.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30629.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30629.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30629.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t30629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30631){var self__ = this;
var _30631__$1 = this;return self__.meta30630;
});
cljs.core.async.t30629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30631,meta30630__$1){var self__ = this;
var _30631__$1 = this;return (new cljs.core.async.t30629(self__.ch,self__.p,self__.filter_GT_,meta30630__$1));
});
cljs.core.async.__GT_t30629 = (function __GT_t30629(ch__$1,p__$1,filter_GT___$1,meta30630){return (new cljs.core.async.t30629(ch__$1,p__$1,filter_GT___$1,meta30630));
});
}
return (new cljs.core.async.t30629(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10131__auto___30714 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___30714,out){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___30714,out){
return (function (state_30693){var state_val_30694 = (state_30693[(1)]);if((state_val_30694 === (7)))
{var inst_30689 = (state_30693[(2)]);var state_30693__$1 = state_30693;var statearr_30695_30715 = state_30693__$1;(statearr_30695_30715[(2)] = inst_30689);
(statearr_30695_30715[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (1)))
{var state_30693__$1 = state_30693;var statearr_30696_30716 = state_30693__$1;(statearr_30696_30716[(2)] = null);
(statearr_30696_30716[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (4)))
{var inst_30675 = (state_30693[(7)]);var inst_30675__$1 = (state_30693[(2)]);var inst_30676 = (inst_30675__$1 == null);var state_30693__$1 = (function (){var statearr_30697 = state_30693;(statearr_30697[(7)] = inst_30675__$1);
return statearr_30697;
})();if(cljs.core.truth_(inst_30676))
{var statearr_30698_30717 = state_30693__$1;(statearr_30698_30717[(1)] = (5));
} else
{var statearr_30699_30718 = state_30693__$1;(statearr_30699_30718[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (6)))
{var inst_30675 = (state_30693[(7)]);var inst_30680 = p.call(null,inst_30675);var state_30693__$1 = state_30693;if(cljs.core.truth_(inst_30680))
{var statearr_30700_30719 = state_30693__$1;(statearr_30700_30719[(1)] = (8));
} else
{var statearr_30701_30720 = state_30693__$1;(statearr_30701_30720[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (3)))
{var inst_30691 = (state_30693[(2)]);var state_30693__$1 = state_30693;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30693__$1,inst_30691);
} else
{if((state_val_30694 === (2)))
{var state_30693__$1 = state_30693;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30693__$1,(4),ch);
} else
{if((state_val_30694 === (11)))
{var inst_30683 = (state_30693[(2)]);var state_30693__$1 = state_30693;var statearr_30702_30721 = state_30693__$1;(statearr_30702_30721[(2)] = inst_30683);
(statearr_30702_30721[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (9)))
{var state_30693__$1 = state_30693;var statearr_30703_30722 = state_30693__$1;(statearr_30703_30722[(2)] = null);
(statearr_30703_30722[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (5)))
{var inst_30678 = cljs.core.async.close_BANG_.call(null,out);var state_30693__$1 = state_30693;var statearr_30704_30723 = state_30693__$1;(statearr_30704_30723[(2)] = inst_30678);
(statearr_30704_30723[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (10)))
{var inst_30686 = (state_30693[(2)]);var state_30693__$1 = (function (){var statearr_30705 = state_30693;(statearr_30705[(8)] = inst_30686);
return statearr_30705;
})();var statearr_30706_30724 = state_30693__$1;(statearr_30706_30724[(2)] = null);
(statearr_30706_30724[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30694 === (8)))
{var inst_30675 = (state_30693[(7)]);var state_30693__$1 = state_30693;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30693__$1,(11),out,inst_30675);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10131__auto___30714,out))
;return ((function (switch__10116__auto__,c__10131__auto___30714,out){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_30710 = [null,null,null,null,null,null,null,null,null];(statearr_30710[(0)] = state_machine__10117__auto__);
(statearr_30710[(1)] = (1));
return statearr_30710;
});
var state_machine__10117__auto____1 = (function (state_30693){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_30693);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e30711){if((e30711 instanceof Object))
{var ex__10120__auto__ = e30711;var statearr_30712_30725 = state_30693;(statearr_30712_30725[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30693);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30711;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30726 = state_30693;
state_30693 = G__30726;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_30693){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_30693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___30714,out))
})();var state__10133__auto__ = (function (){var statearr_30713 = f__10132__auto__.call(null);(statearr_30713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___30714);
return statearr_30713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___30714,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10131__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto__){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto__){
return (function (state_30892){var state_val_30893 = (state_30892[(1)]);if((state_val_30893 === (7)))
{var inst_30888 = (state_30892[(2)]);var state_30892__$1 = state_30892;var statearr_30894_30935 = state_30892__$1;(statearr_30894_30935[(2)] = inst_30888);
(statearr_30894_30935[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (20)))
{var inst_30858 = (state_30892[(7)]);var inst_30869 = (state_30892[(2)]);var inst_30870 = cljs.core.next.call(null,inst_30858);var inst_30844 = inst_30870;var inst_30845 = null;var inst_30846 = (0);var inst_30847 = (0);var state_30892__$1 = (function (){var statearr_30895 = state_30892;(statearr_30895[(8)] = inst_30846);
(statearr_30895[(9)] = inst_30844);
(statearr_30895[(10)] = inst_30847);
(statearr_30895[(11)] = inst_30845);
(statearr_30895[(12)] = inst_30869);
return statearr_30895;
})();var statearr_30896_30936 = state_30892__$1;(statearr_30896_30936[(2)] = null);
(statearr_30896_30936[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (1)))
{var state_30892__$1 = state_30892;var statearr_30897_30937 = state_30892__$1;(statearr_30897_30937[(2)] = null);
(statearr_30897_30937[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (4)))
{var inst_30833 = (state_30892[(13)]);var inst_30833__$1 = (state_30892[(2)]);var inst_30834 = (inst_30833__$1 == null);var state_30892__$1 = (function (){var statearr_30898 = state_30892;(statearr_30898[(13)] = inst_30833__$1);
return statearr_30898;
})();if(cljs.core.truth_(inst_30834))
{var statearr_30899_30938 = state_30892__$1;(statearr_30899_30938[(1)] = (5));
} else
{var statearr_30900_30939 = state_30892__$1;(statearr_30900_30939[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (15)))
{var state_30892__$1 = state_30892;var statearr_30904_30940 = state_30892__$1;(statearr_30904_30940[(2)] = null);
(statearr_30904_30940[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (21)))
{var state_30892__$1 = state_30892;var statearr_30905_30941 = state_30892__$1;(statearr_30905_30941[(2)] = null);
(statearr_30905_30941[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (13)))
{var inst_30846 = (state_30892[(8)]);var inst_30844 = (state_30892[(9)]);var inst_30847 = (state_30892[(10)]);var inst_30845 = (state_30892[(11)]);var inst_30854 = (state_30892[(2)]);var inst_30855 = (inst_30847 + (1));var tmp30901 = inst_30846;var tmp30902 = inst_30844;var tmp30903 = inst_30845;var inst_30844__$1 = tmp30902;var inst_30845__$1 = tmp30903;var inst_30846__$1 = tmp30901;var inst_30847__$1 = inst_30855;var state_30892__$1 = (function (){var statearr_30906 = state_30892;(statearr_30906[(8)] = inst_30846__$1);
(statearr_30906[(9)] = inst_30844__$1);
(statearr_30906[(10)] = inst_30847__$1);
(statearr_30906[(11)] = inst_30845__$1);
(statearr_30906[(14)] = inst_30854);
return statearr_30906;
})();var statearr_30907_30942 = state_30892__$1;(statearr_30907_30942[(2)] = null);
(statearr_30907_30942[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (22)))
{var state_30892__$1 = state_30892;var statearr_30908_30943 = state_30892__$1;(statearr_30908_30943[(2)] = null);
(statearr_30908_30943[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (6)))
{var inst_30833 = (state_30892[(13)]);var inst_30842 = f.call(null,inst_30833);var inst_30843 = cljs.core.seq.call(null,inst_30842);var inst_30844 = inst_30843;var inst_30845 = null;var inst_30846 = (0);var inst_30847 = (0);var state_30892__$1 = (function (){var statearr_30909 = state_30892;(statearr_30909[(8)] = inst_30846);
(statearr_30909[(9)] = inst_30844);
(statearr_30909[(10)] = inst_30847);
(statearr_30909[(11)] = inst_30845);
return statearr_30909;
})();var statearr_30910_30944 = state_30892__$1;(statearr_30910_30944[(2)] = null);
(statearr_30910_30944[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (17)))
{var inst_30858 = (state_30892[(7)]);var inst_30862 = cljs.core.chunk_first.call(null,inst_30858);var inst_30863 = cljs.core.chunk_rest.call(null,inst_30858);var inst_30864 = cljs.core.count.call(null,inst_30862);var inst_30844 = inst_30863;var inst_30845 = inst_30862;var inst_30846 = inst_30864;var inst_30847 = (0);var state_30892__$1 = (function (){var statearr_30911 = state_30892;(statearr_30911[(8)] = inst_30846);
(statearr_30911[(9)] = inst_30844);
(statearr_30911[(10)] = inst_30847);
(statearr_30911[(11)] = inst_30845);
return statearr_30911;
})();var statearr_30912_30945 = state_30892__$1;(statearr_30912_30945[(2)] = null);
(statearr_30912_30945[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (3)))
{var inst_30890 = (state_30892[(2)]);var state_30892__$1 = state_30892;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30892__$1,inst_30890);
} else
{if((state_val_30893 === (12)))
{var inst_30878 = (state_30892[(2)]);var state_30892__$1 = state_30892;var statearr_30913_30946 = state_30892__$1;(statearr_30913_30946[(2)] = inst_30878);
(statearr_30913_30946[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (2)))
{var state_30892__$1 = state_30892;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30892__$1,(4),in$);
} else
{if((state_val_30893 === (23)))
{var inst_30886 = (state_30892[(2)]);var state_30892__$1 = state_30892;var statearr_30914_30947 = state_30892__$1;(statearr_30914_30947[(2)] = inst_30886);
(statearr_30914_30947[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (19)))
{var inst_30873 = (state_30892[(2)]);var state_30892__$1 = state_30892;var statearr_30915_30948 = state_30892__$1;(statearr_30915_30948[(2)] = inst_30873);
(statearr_30915_30948[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (11)))
{var inst_30858 = (state_30892[(7)]);var inst_30844 = (state_30892[(9)]);var inst_30858__$1 = cljs.core.seq.call(null,inst_30844);var state_30892__$1 = (function (){var statearr_30916 = state_30892;(statearr_30916[(7)] = inst_30858__$1);
return statearr_30916;
})();if(inst_30858__$1)
{var statearr_30917_30949 = state_30892__$1;(statearr_30917_30949[(1)] = (14));
} else
{var statearr_30918_30950 = state_30892__$1;(statearr_30918_30950[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (9)))
{var inst_30880 = (state_30892[(2)]);var inst_30881 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_30892__$1 = (function (){var statearr_30919 = state_30892;(statearr_30919[(15)] = inst_30880);
return statearr_30919;
})();if(cljs.core.truth_(inst_30881))
{var statearr_30920_30951 = state_30892__$1;(statearr_30920_30951[(1)] = (21));
} else
{var statearr_30921_30952 = state_30892__$1;(statearr_30921_30952[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (5)))
{var inst_30836 = cljs.core.async.close_BANG_.call(null,out);var state_30892__$1 = state_30892;var statearr_30922_30953 = state_30892__$1;(statearr_30922_30953[(2)] = inst_30836);
(statearr_30922_30953[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (14)))
{var inst_30858 = (state_30892[(7)]);var inst_30860 = cljs.core.chunked_seq_QMARK_.call(null,inst_30858);var state_30892__$1 = state_30892;if(inst_30860)
{var statearr_30923_30954 = state_30892__$1;(statearr_30923_30954[(1)] = (17));
} else
{var statearr_30924_30955 = state_30892__$1;(statearr_30924_30955[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (16)))
{var inst_30876 = (state_30892[(2)]);var state_30892__$1 = state_30892;var statearr_30925_30956 = state_30892__$1;(statearr_30925_30956[(2)] = inst_30876);
(statearr_30925_30956[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30893 === (10)))
{var inst_30847 = (state_30892[(10)]);var inst_30845 = (state_30892[(11)]);var inst_30852 = cljs.core._nth.call(null,inst_30845,inst_30847);var state_30892__$1 = state_30892;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30892__$1,(13),out,inst_30852);
} else
{if((state_val_30893 === (18)))
{var inst_30858 = (state_30892[(7)]);var inst_30867 = cljs.core.first.call(null,inst_30858);var state_30892__$1 = state_30892;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30892__$1,(20),out,inst_30867);
} else
{if((state_val_30893 === (8)))
{var inst_30846 = (state_30892[(8)]);var inst_30847 = (state_30892[(10)]);var inst_30849 = (inst_30847 < inst_30846);var inst_30850 = inst_30849;var state_30892__$1 = state_30892;if(cljs.core.truth_(inst_30850))
{var statearr_30926_30957 = state_30892__$1;(statearr_30926_30957[(1)] = (10));
} else
{var statearr_30927_30958 = state_30892__$1;(statearr_30927_30958[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10131__auto__))
;return ((function (switch__10116__auto__,c__10131__auto__){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_30931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30931[(0)] = state_machine__10117__auto__);
(statearr_30931[(1)] = (1));
return statearr_30931;
});
var state_machine__10117__auto____1 = (function (state_30892){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_30892);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e30932){if((e30932 instanceof Object))
{var ex__10120__auto__ = e30932;var statearr_30933_30959 = state_30892;(statearr_30933_30959[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30892);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30932;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30960 = state_30892;
state_30892 = G__30960;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_30892){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_30892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto__))
})();var state__10133__auto__ = (function (){var statearr_30934 = f__10132__auto__.call(null);(statearr_30934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto__);
return statearr_30934;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto__))
);
return c__10131__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10131__auto___31055 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___31055){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___31055){
return (function (state_31031){var state_val_31032 = (state_31031[(1)]);if((state_val_31032 === (7)))
{var inst_31027 = (state_31031[(2)]);var state_31031__$1 = state_31031;var statearr_31033_31056 = state_31031__$1;(statearr_31033_31056[(2)] = inst_31027);
(statearr_31033_31056[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31032 === (1)))
{var state_31031__$1 = state_31031;var statearr_31034_31057 = state_31031__$1;(statearr_31034_31057[(2)] = null);
(statearr_31034_31057[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31032 === (4)))
{var inst_31010 = (state_31031[(7)]);var inst_31010__$1 = (state_31031[(2)]);var inst_31011 = (inst_31010__$1 == null);var state_31031__$1 = (function (){var statearr_31035 = state_31031;(statearr_31035[(7)] = inst_31010__$1);
return statearr_31035;
})();if(cljs.core.truth_(inst_31011))
{var statearr_31036_31058 = state_31031__$1;(statearr_31036_31058[(1)] = (5));
} else
{var statearr_31037_31059 = state_31031__$1;(statearr_31037_31059[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31032 === (13)))
{var state_31031__$1 = state_31031;var statearr_31038_31060 = state_31031__$1;(statearr_31038_31060[(2)] = null);
(statearr_31038_31060[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31032 === (6)))
{var inst_31010 = (state_31031[(7)]);var state_31031__$1 = state_31031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31031__$1,(11),to,inst_31010);
} else
{if((state_val_31032 === (3)))
{var inst_31029 = (state_31031[(2)]);var state_31031__$1 = state_31031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31031__$1,inst_31029);
} else
{if((state_val_31032 === (12)))
{var state_31031__$1 = state_31031;var statearr_31039_31061 = state_31031__$1;(statearr_31039_31061[(2)] = null);
(statearr_31039_31061[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31032 === (2)))
{var state_31031__$1 = state_31031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31031__$1,(4),from);
} else
{if((state_val_31032 === (11)))
{var inst_31020 = (state_31031[(2)]);var state_31031__$1 = state_31031;if(cljs.core.truth_(inst_31020))
{var statearr_31040_31062 = state_31031__$1;(statearr_31040_31062[(1)] = (12));
} else
{var statearr_31041_31063 = state_31031__$1;(statearr_31041_31063[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31032 === (9)))
{var state_31031__$1 = state_31031;var statearr_31042_31064 = state_31031__$1;(statearr_31042_31064[(2)] = null);
(statearr_31042_31064[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31032 === (5)))
{var state_31031__$1 = state_31031;if(cljs.core.truth_(close_QMARK_))
{var statearr_31043_31065 = state_31031__$1;(statearr_31043_31065[(1)] = (8));
} else
{var statearr_31044_31066 = state_31031__$1;(statearr_31044_31066[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31032 === (14)))
{var inst_31025 = (state_31031[(2)]);var state_31031__$1 = state_31031;var statearr_31045_31067 = state_31031__$1;(statearr_31045_31067[(2)] = inst_31025);
(statearr_31045_31067[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31032 === (10)))
{var inst_31017 = (state_31031[(2)]);var state_31031__$1 = state_31031;var statearr_31046_31068 = state_31031__$1;(statearr_31046_31068[(2)] = inst_31017);
(statearr_31046_31068[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31032 === (8)))
{var inst_31014 = cljs.core.async.close_BANG_.call(null,to);var state_31031__$1 = state_31031;var statearr_31047_31069 = state_31031__$1;(statearr_31047_31069[(2)] = inst_31014);
(statearr_31047_31069[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10131__auto___31055))
;return ((function (switch__10116__auto__,c__10131__auto___31055){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_31051 = [null,null,null,null,null,null,null,null];(statearr_31051[(0)] = state_machine__10117__auto__);
(statearr_31051[(1)] = (1));
return statearr_31051;
});
var state_machine__10117__auto____1 = (function (state_31031){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_31031);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e31052){if((e31052 instanceof Object))
{var ex__10120__auto__ = e31052;var statearr_31053_31070 = state_31031;(statearr_31053_31070[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31031);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31052;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31071 = state_31031;
state_31031 = G__31071;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_31031){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_31031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___31055))
})();var state__10133__auto__ = (function (){var statearr_31054 = f__10132__auto__.call(null);(statearr_31054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___31055);
return statearr_31054;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___31055))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10131__auto___31172 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___31172,tc,fc){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___31172,tc,fc){
return (function (state_31147){var state_val_31148 = (state_31147[(1)]);if((state_val_31148 === (7)))
{var inst_31143 = (state_31147[(2)]);var state_31147__$1 = state_31147;var statearr_31149_31173 = state_31147__$1;(statearr_31149_31173[(2)] = inst_31143);
(statearr_31149_31173[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (1)))
{var state_31147__$1 = state_31147;var statearr_31150_31174 = state_31147__$1;(statearr_31150_31174[(2)] = null);
(statearr_31150_31174[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (4)))
{var inst_31124 = (state_31147[(7)]);var inst_31124__$1 = (state_31147[(2)]);var inst_31125 = (inst_31124__$1 == null);var state_31147__$1 = (function (){var statearr_31151 = state_31147;(statearr_31151[(7)] = inst_31124__$1);
return statearr_31151;
})();if(cljs.core.truth_(inst_31125))
{var statearr_31152_31175 = state_31147__$1;(statearr_31152_31175[(1)] = (5));
} else
{var statearr_31153_31176 = state_31147__$1;(statearr_31153_31176[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (13)))
{var state_31147__$1 = state_31147;var statearr_31154_31177 = state_31147__$1;(statearr_31154_31177[(2)] = null);
(statearr_31154_31177[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (6)))
{var inst_31124 = (state_31147[(7)]);var inst_31130 = p.call(null,inst_31124);var state_31147__$1 = state_31147;if(cljs.core.truth_(inst_31130))
{var statearr_31155_31178 = state_31147__$1;(statearr_31155_31178[(1)] = (9));
} else
{var statearr_31156_31179 = state_31147__$1;(statearr_31156_31179[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (3)))
{var inst_31145 = (state_31147[(2)]);var state_31147__$1 = state_31147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31147__$1,inst_31145);
} else
{if((state_val_31148 === (12)))
{var state_31147__$1 = state_31147;var statearr_31157_31180 = state_31147__$1;(statearr_31157_31180[(2)] = null);
(statearr_31157_31180[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (2)))
{var state_31147__$1 = state_31147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31147__$1,(4),ch);
} else
{if((state_val_31148 === (11)))
{var inst_31124 = (state_31147[(7)]);var inst_31134 = (state_31147[(2)]);var state_31147__$1 = state_31147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31147__$1,(8),inst_31134,inst_31124);
} else
{if((state_val_31148 === (9)))
{var state_31147__$1 = state_31147;var statearr_31158_31181 = state_31147__$1;(statearr_31158_31181[(2)] = tc);
(statearr_31158_31181[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (5)))
{var inst_31127 = cljs.core.async.close_BANG_.call(null,tc);var inst_31128 = cljs.core.async.close_BANG_.call(null,fc);var state_31147__$1 = (function (){var statearr_31159 = state_31147;(statearr_31159[(8)] = inst_31127);
return statearr_31159;
})();var statearr_31160_31182 = state_31147__$1;(statearr_31160_31182[(2)] = inst_31128);
(statearr_31160_31182[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (14)))
{var inst_31141 = (state_31147[(2)]);var state_31147__$1 = state_31147;var statearr_31161_31183 = state_31147__$1;(statearr_31161_31183[(2)] = inst_31141);
(statearr_31161_31183[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (10)))
{var state_31147__$1 = state_31147;var statearr_31162_31184 = state_31147__$1;(statearr_31162_31184[(2)] = fc);
(statearr_31162_31184[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (8)))
{var inst_31136 = (state_31147[(2)]);var state_31147__$1 = state_31147;if(cljs.core.truth_(inst_31136))
{var statearr_31163_31185 = state_31147__$1;(statearr_31163_31185[(1)] = (12));
} else
{var statearr_31164_31186 = state_31147__$1;(statearr_31164_31186[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10131__auto___31172,tc,fc))
;return ((function (switch__10116__auto__,c__10131__auto___31172,tc,fc){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_31168 = [null,null,null,null,null,null,null,null,null];(statearr_31168[(0)] = state_machine__10117__auto__);
(statearr_31168[(1)] = (1));
return statearr_31168;
});
var state_machine__10117__auto____1 = (function (state_31147){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_31147);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e31169){if((e31169 instanceof Object))
{var ex__10120__auto__ = e31169;var statearr_31170_31187 = state_31147;(statearr_31170_31187[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31147);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31188 = state_31147;
state_31147 = G__31188;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_31147){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_31147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___31172,tc,fc))
})();var state__10133__auto__ = (function (){var statearr_31171 = f__10132__auto__.call(null);(statearr_31171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___31172);
return statearr_31171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___31172,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10131__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto__){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto__){
return (function (state_31235){var state_val_31236 = (state_31235[(1)]);if((state_val_31236 === (7)))
{var inst_31231 = (state_31235[(2)]);var state_31235__$1 = state_31235;var statearr_31237_31253 = state_31235__$1;(statearr_31237_31253[(2)] = inst_31231);
(statearr_31237_31253[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31236 === (6)))
{var inst_31224 = (state_31235[(7)]);var inst_31221 = (state_31235[(8)]);var inst_31228 = f.call(null,inst_31221,inst_31224);var inst_31221__$1 = inst_31228;var state_31235__$1 = (function (){var statearr_31238 = state_31235;(statearr_31238[(8)] = inst_31221__$1);
return statearr_31238;
})();var statearr_31239_31254 = state_31235__$1;(statearr_31239_31254[(2)] = null);
(statearr_31239_31254[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31236 === (5)))
{var inst_31221 = (state_31235[(8)]);var state_31235__$1 = state_31235;var statearr_31240_31255 = state_31235__$1;(statearr_31240_31255[(2)] = inst_31221);
(statearr_31240_31255[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31236 === (4)))
{var inst_31224 = (state_31235[(7)]);var inst_31224__$1 = (state_31235[(2)]);var inst_31225 = (inst_31224__$1 == null);var state_31235__$1 = (function (){var statearr_31241 = state_31235;(statearr_31241[(7)] = inst_31224__$1);
return statearr_31241;
})();if(cljs.core.truth_(inst_31225))
{var statearr_31242_31256 = state_31235__$1;(statearr_31242_31256[(1)] = (5));
} else
{var statearr_31243_31257 = state_31235__$1;(statearr_31243_31257[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31236 === (3)))
{var inst_31233 = (state_31235[(2)]);var state_31235__$1 = state_31235;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31235__$1,inst_31233);
} else
{if((state_val_31236 === (2)))
{var state_31235__$1 = state_31235;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31235__$1,(4),ch);
} else
{if((state_val_31236 === (1)))
{var inst_31221 = init;var state_31235__$1 = (function (){var statearr_31244 = state_31235;(statearr_31244[(8)] = inst_31221);
return statearr_31244;
})();var statearr_31245_31258 = state_31235__$1;(statearr_31245_31258[(2)] = null);
(statearr_31245_31258[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10131__auto__))
;return ((function (switch__10116__auto__,c__10131__auto__){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_31249 = [null,null,null,null,null,null,null,null,null];(statearr_31249[(0)] = state_machine__10117__auto__);
(statearr_31249[(1)] = (1));
return statearr_31249;
});
var state_machine__10117__auto____1 = (function (state_31235){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_31235);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e31250){if((e31250 instanceof Object))
{var ex__10120__auto__ = e31250;var statearr_31251_31259 = state_31235;(statearr_31251_31259[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31235);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31260 = state_31235;
state_31235 = G__31260;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_31235){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_31235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto__))
})();var state__10133__auto__ = (function (){var statearr_31252 = f__10132__auto__.call(null);(statearr_31252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto__);
return statearr_31252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto__))
);
return c__10131__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10131__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto__){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto__){
return (function (state_31334){var state_val_31335 = (state_31334[(1)]);if((state_val_31335 === (7)))
{var inst_31316 = (state_31334[(2)]);var state_31334__$1 = state_31334;var statearr_31336_31359 = state_31334__$1;(statearr_31336_31359[(2)] = inst_31316);
(statearr_31336_31359[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31335 === (1)))
{var inst_31310 = cljs.core.seq.call(null,coll);var inst_31311 = inst_31310;var state_31334__$1 = (function (){var statearr_31337 = state_31334;(statearr_31337[(7)] = inst_31311);
return statearr_31337;
})();var statearr_31338_31360 = state_31334__$1;(statearr_31338_31360[(2)] = null);
(statearr_31338_31360[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31335 === (4)))
{var inst_31311 = (state_31334[(7)]);var inst_31314 = cljs.core.first.call(null,inst_31311);var state_31334__$1 = state_31334;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31334__$1,(7),ch,inst_31314);
} else
{if((state_val_31335 === (13)))
{var inst_31328 = (state_31334[(2)]);var state_31334__$1 = state_31334;var statearr_31339_31361 = state_31334__$1;(statearr_31339_31361[(2)] = inst_31328);
(statearr_31339_31361[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31335 === (6)))
{var inst_31319 = (state_31334[(2)]);var state_31334__$1 = state_31334;if(cljs.core.truth_(inst_31319))
{var statearr_31340_31362 = state_31334__$1;(statearr_31340_31362[(1)] = (8));
} else
{var statearr_31341_31363 = state_31334__$1;(statearr_31341_31363[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31335 === (3)))
{var inst_31332 = (state_31334[(2)]);var state_31334__$1 = state_31334;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31334__$1,inst_31332);
} else
{if((state_val_31335 === (12)))
{var state_31334__$1 = state_31334;var statearr_31342_31364 = state_31334__$1;(statearr_31342_31364[(2)] = null);
(statearr_31342_31364[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31335 === (2)))
{var inst_31311 = (state_31334[(7)]);var state_31334__$1 = state_31334;if(cljs.core.truth_(inst_31311))
{var statearr_31343_31365 = state_31334__$1;(statearr_31343_31365[(1)] = (4));
} else
{var statearr_31344_31366 = state_31334__$1;(statearr_31344_31366[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31335 === (11)))
{var inst_31325 = cljs.core.async.close_BANG_.call(null,ch);var state_31334__$1 = state_31334;var statearr_31345_31367 = state_31334__$1;(statearr_31345_31367[(2)] = inst_31325);
(statearr_31345_31367[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31335 === (9)))
{var state_31334__$1 = state_31334;if(cljs.core.truth_(close_QMARK_))
{var statearr_31346_31368 = state_31334__$1;(statearr_31346_31368[(1)] = (11));
} else
{var statearr_31347_31369 = state_31334__$1;(statearr_31347_31369[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31335 === (5)))
{var inst_31311 = (state_31334[(7)]);var state_31334__$1 = state_31334;var statearr_31348_31370 = state_31334__$1;(statearr_31348_31370[(2)] = inst_31311);
(statearr_31348_31370[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31335 === (10)))
{var inst_31330 = (state_31334[(2)]);var state_31334__$1 = state_31334;var statearr_31349_31371 = state_31334__$1;(statearr_31349_31371[(2)] = inst_31330);
(statearr_31349_31371[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31335 === (8)))
{var inst_31311 = (state_31334[(7)]);var inst_31321 = cljs.core.next.call(null,inst_31311);var inst_31311__$1 = inst_31321;var state_31334__$1 = (function (){var statearr_31350 = state_31334;(statearr_31350[(7)] = inst_31311__$1);
return statearr_31350;
})();var statearr_31351_31372 = state_31334__$1;(statearr_31351_31372[(2)] = null);
(statearr_31351_31372[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10131__auto__))
;return ((function (switch__10116__auto__,c__10131__auto__){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_31355 = [null,null,null,null,null,null,null,null];(statearr_31355[(0)] = state_machine__10117__auto__);
(statearr_31355[(1)] = (1));
return statearr_31355;
});
var state_machine__10117__auto____1 = (function (state_31334){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_31334);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e31356){if((e31356 instanceof Object))
{var ex__10120__auto__ = e31356;var statearr_31357_31373 = state_31334;(statearr_31357_31373[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31334);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31374 = state_31334;
state_31334 = G__31374;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_31334){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_31334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto__))
})();var state__10133__auto__ = (function (){var statearr_31358 = f__10132__auto__.call(null);(statearr_31358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto__);
return statearr_31358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto__))
);
return c__10131__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj31376 = {};return obj31376;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7934__auto__ = _;if(and__7934__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7934__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8573__auto__ = (((_ == null))?null:_);return (function (){var or__7946__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj31378 = {};return obj31378;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7934__auto__ = m;if(and__7934__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7934__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8573__auto__ = (((m == null))?null:m);return (function (){var or__7946__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7934__auto__ = m;if(and__7934__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7934__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8573__auto__ = (((m == null))?null:m);return (function (){var or__7946__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7934__auto__ = m;if(and__7934__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7934__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8573__auto__ = (((m == null))?null:m);return (function (){var or__7946__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t31600 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31600 = (function (cs,ch,mult,meta31601){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31601 = meta31601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31600.cljs$lang$type = true;
cljs.core.async.t31600.cljs$lang$ctorStr = "cljs.core.async/t31600";
cljs.core.async.t31600.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core.async/t31600");
});})(cs))
;
cljs.core.async.t31600.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t31600.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t31600.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t31600.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t31600.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t31600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31602){var self__ = this;
var _31602__$1 = this;return self__.meta31601;
});})(cs))
;
cljs.core.async.t31600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31602,meta31601__$1){var self__ = this;
var _31602__$1 = this;return (new cljs.core.async.t31600(self__.cs,self__.ch,self__.mult,meta31601__$1));
});})(cs))
;
cljs.core.async.__GT_t31600 = ((function (cs){
return (function __GT_t31600(cs__$1,ch__$1,mult__$1,meta31601){return (new cljs.core.async.t31600(cs__$1,ch__$1,mult__$1,meta31601));
});})(cs))
;
}
return (new cljs.core.async.t31600(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10131__auto___31821 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___31821,cs,m,dchan,dctr,done){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___31821,cs,m,dchan,dctr,done){
return (function (state_31733){var state_val_31734 = (state_31733[(1)]);if((state_val_31734 === (7)))
{var inst_31729 = (state_31733[(2)]);var state_31733__$1 = state_31733;var statearr_31735_31822 = state_31733__$1;(statearr_31735_31822[(2)] = inst_31729);
(statearr_31735_31822[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (20)))
{var inst_31634 = (state_31733[(7)]);var inst_31644 = cljs.core.first.call(null,inst_31634);var inst_31645 = cljs.core.nth.call(null,inst_31644,(0),null);var inst_31646 = cljs.core.nth.call(null,inst_31644,(1),null);var state_31733__$1 = (function (){var statearr_31736 = state_31733;(statearr_31736[(8)] = inst_31645);
return statearr_31736;
})();if(cljs.core.truth_(inst_31646))
{var statearr_31737_31823 = state_31733__$1;(statearr_31737_31823[(1)] = (22));
} else
{var statearr_31738_31824 = state_31733__$1;(statearr_31738_31824[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (27)))
{var inst_31674 = (state_31733[(9)]);var inst_31605 = (state_31733[(10)]);var inst_31681 = (state_31733[(11)]);var inst_31676 = (state_31733[(12)]);var inst_31681__$1 = cljs.core._nth.call(null,inst_31674,inst_31676);var inst_31682 = cljs.core.async.put_BANG_.call(null,inst_31681__$1,inst_31605,done);var state_31733__$1 = (function (){var statearr_31739 = state_31733;(statearr_31739[(11)] = inst_31681__$1);
return statearr_31739;
})();if(cljs.core.truth_(inst_31682))
{var statearr_31740_31825 = state_31733__$1;(statearr_31740_31825[(1)] = (30));
} else
{var statearr_31741_31826 = state_31733__$1;(statearr_31741_31826[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (1)))
{var state_31733__$1 = state_31733;var statearr_31742_31827 = state_31733__$1;(statearr_31742_31827[(2)] = null);
(statearr_31742_31827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (24)))
{var inst_31634 = (state_31733[(7)]);var inst_31651 = (state_31733[(2)]);var inst_31652 = cljs.core.next.call(null,inst_31634);var inst_31614 = inst_31652;var inst_31615 = null;var inst_31616 = (0);var inst_31617 = (0);var state_31733__$1 = (function (){var statearr_31743 = state_31733;(statearr_31743[(13)] = inst_31614);
(statearr_31743[(14)] = inst_31615);
(statearr_31743[(15)] = inst_31616);
(statearr_31743[(16)] = inst_31617);
(statearr_31743[(17)] = inst_31651);
return statearr_31743;
})();var statearr_31744_31828 = state_31733__$1;(statearr_31744_31828[(2)] = null);
(statearr_31744_31828[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (39)))
{var state_31733__$1 = state_31733;var statearr_31748_31829 = state_31733__$1;(statearr_31748_31829[(2)] = null);
(statearr_31748_31829[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (4)))
{var inst_31605 = (state_31733[(10)]);var inst_31605__$1 = (state_31733[(2)]);var inst_31606 = (inst_31605__$1 == null);var state_31733__$1 = (function (){var statearr_31749 = state_31733;(statearr_31749[(10)] = inst_31605__$1);
return statearr_31749;
})();if(cljs.core.truth_(inst_31606))
{var statearr_31750_31830 = state_31733__$1;(statearr_31750_31830[(1)] = (5));
} else
{var statearr_31751_31831 = state_31733__$1;(statearr_31751_31831[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (15)))
{var inst_31614 = (state_31733[(13)]);var inst_31615 = (state_31733[(14)]);var inst_31616 = (state_31733[(15)]);var inst_31617 = (state_31733[(16)]);var inst_31630 = (state_31733[(2)]);var inst_31631 = (inst_31617 + (1));var tmp31745 = inst_31614;var tmp31746 = inst_31615;var tmp31747 = inst_31616;var inst_31614__$1 = tmp31745;var inst_31615__$1 = tmp31746;var inst_31616__$1 = tmp31747;var inst_31617__$1 = inst_31631;var state_31733__$1 = (function (){var statearr_31752 = state_31733;(statearr_31752[(13)] = inst_31614__$1);
(statearr_31752[(14)] = inst_31615__$1);
(statearr_31752[(15)] = inst_31616__$1);
(statearr_31752[(18)] = inst_31630);
(statearr_31752[(16)] = inst_31617__$1);
return statearr_31752;
})();var statearr_31753_31832 = state_31733__$1;(statearr_31753_31832[(2)] = null);
(statearr_31753_31832[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (21)))
{var inst_31655 = (state_31733[(2)]);var state_31733__$1 = state_31733;var statearr_31757_31833 = state_31733__$1;(statearr_31757_31833[(2)] = inst_31655);
(statearr_31757_31833[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (31)))
{var inst_31681 = (state_31733[(11)]);var inst_31685 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_31686 = cljs.core.async.untap_STAR_.call(null,m,inst_31681);var state_31733__$1 = (function (){var statearr_31758 = state_31733;(statearr_31758[(19)] = inst_31685);
return statearr_31758;
})();var statearr_31759_31834 = state_31733__$1;(statearr_31759_31834[(2)] = inst_31686);
(statearr_31759_31834[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (32)))
{var inst_31674 = (state_31733[(9)]);var inst_31676 = (state_31733[(12)]);var inst_31675 = (state_31733[(20)]);var inst_31673 = (state_31733[(21)]);var inst_31688 = (state_31733[(2)]);var inst_31689 = (inst_31676 + (1));var tmp31754 = inst_31674;var tmp31755 = inst_31675;var tmp31756 = inst_31673;var inst_31673__$1 = tmp31756;var inst_31674__$1 = tmp31754;var inst_31675__$1 = tmp31755;var inst_31676__$1 = inst_31689;var state_31733__$1 = (function (){var statearr_31760 = state_31733;(statearr_31760[(9)] = inst_31674__$1);
(statearr_31760[(22)] = inst_31688);
(statearr_31760[(12)] = inst_31676__$1);
(statearr_31760[(20)] = inst_31675__$1);
(statearr_31760[(21)] = inst_31673__$1);
return statearr_31760;
})();var statearr_31761_31835 = state_31733__$1;(statearr_31761_31835[(2)] = null);
(statearr_31761_31835[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (40)))
{var inst_31701 = (state_31733[(23)]);var inst_31705 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_31706 = cljs.core.async.untap_STAR_.call(null,m,inst_31701);var state_31733__$1 = (function (){var statearr_31762 = state_31733;(statearr_31762[(24)] = inst_31705);
return statearr_31762;
})();var statearr_31763_31836 = state_31733__$1;(statearr_31763_31836[(2)] = inst_31706);
(statearr_31763_31836[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (33)))
{var inst_31692 = (state_31733[(25)]);var inst_31694 = cljs.core.chunked_seq_QMARK_.call(null,inst_31692);var state_31733__$1 = state_31733;if(inst_31694)
{var statearr_31764_31837 = state_31733__$1;(statearr_31764_31837[(1)] = (36));
} else
{var statearr_31765_31838 = state_31733__$1;(statearr_31765_31838[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (13)))
{var inst_31624 = (state_31733[(26)]);var inst_31627 = cljs.core.async.close_BANG_.call(null,inst_31624);var state_31733__$1 = state_31733;var statearr_31766_31839 = state_31733__$1;(statearr_31766_31839[(2)] = inst_31627);
(statearr_31766_31839[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (22)))
{var inst_31645 = (state_31733[(8)]);var inst_31648 = cljs.core.async.close_BANG_.call(null,inst_31645);var state_31733__$1 = state_31733;var statearr_31767_31840 = state_31733__$1;(statearr_31767_31840[(2)] = inst_31648);
(statearr_31767_31840[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (36)))
{var inst_31692 = (state_31733[(25)]);var inst_31696 = cljs.core.chunk_first.call(null,inst_31692);var inst_31697 = cljs.core.chunk_rest.call(null,inst_31692);var inst_31698 = cljs.core.count.call(null,inst_31696);var inst_31673 = inst_31697;var inst_31674 = inst_31696;var inst_31675 = inst_31698;var inst_31676 = (0);var state_31733__$1 = (function (){var statearr_31768 = state_31733;(statearr_31768[(9)] = inst_31674);
(statearr_31768[(12)] = inst_31676);
(statearr_31768[(20)] = inst_31675);
(statearr_31768[(21)] = inst_31673);
return statearr_31768;
})();var statearr_31769_31841 = state_31733__$1;(statearr_31769_31841[(2)] = null);
(statearr_31769_31841[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (41)))
{var inst_31692 = (state_31733[(25)]);var inst_31708 = (state_31733[(2)]);var inst_31709 = cljs.core.next.call(null,inst_31692);var inst_31673 = inst_31709;var inst_31674 = null;var inst_31675 = (0);var inst_31676 = (0);var state_31733__$1 = (function (){var statearr_31770 = state_31733;(statearr_31770[(9)] = inst_31674);
(statearr_31770[(27)] = inst_31708);
(statearr_31770[(12)] = inst_31676);
(statearr_31770[(20)] = inst_31675);
(statearr_31770[(21)] = inst_31673);
return statearr_31770;
})();var statearr_31771_31842 = state_31733__$1;(statearr_31771_31842[(2)] = null);
(statearr_31771_31842[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (43)))
{var state_31733__$1 = state_31733;var statearr_31772_31843 = state_31733__$1;(statearr_31772_31843[(2)] = null);
(statearr_31772_31843[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (29)))
{var inst_31717 = (state_31733[(2)]);var state_31733__$1 = state_31733;var statearr_31773_31844 = state_31733__$1;(statearr_31773_31844[(2)] = inst_31717);
(statearr_31773_31844[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (44)))
{var inst_31726 = (state_31733[(2)]);var state_31733__$1 = (function (){var statearr_31774 = state_31733;(statearr_31774[(28)] = inst_31726);
return statearr_31774;
})();var statearr_31775_31845 = state_31733__$1;(statearr_31775_31845[(2)] = null);
(statearr_31775_31845[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (6)))
{var inst_31665 = (state_31733[(29)]);var inst_31664 = cljs.core.deref.call(null,cs);var inst_31665__$1 = cljs.core.keys.call(null,inst_31664);var inst_31666 = cljs.core.count.call(null,inst_31665__$1);var inst_31667 = cljs.core.reset_BANG_.call(null,dctr,inst_31666);var inst_31672 = cljs.core.seq.call(null,inst_31665__$1);var inst_31673 = inst_31672;var inst_31674 = null;var inst_31675 = (0);var inst_31676 = (0);var state_31733__$1 = (function (){var statearr_31776 = state_31733;(statearr_31776[(9)] = inst_31674);
(statearr_31776[(29)] = inst_31665__$1);
(statearr_31776[(30)] = inst_31667);
(statearr_31776[(12)] = inst_31676);
(statearr_31776[(20)] = inst_31675);
(statearr_31776[(21)] = inst_31673);
return statearr_31776;
})();var statearr_31777_31846 = state_31733__$1;(statearr_31777_31846[(2)] = null);
(statearr_31777_31846[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (28)))
{var inst_31692 = (state_31733[(25)]);var inst_31673 = (state_31733[(21)]);var inst_31692__$1 = cljs.core.seq.call(null,inst_31673);var state_31733__$1 = (function (){var statearr_31778 = state_31733;(statearr_31778[(25)] = inst_31692__$1);
return statearr_31778;
})();if(inst_31692__$1)
{var statearr_31779_31847 = state_31733__$1;(statearr_31779_31847[(1)] = (33));
} else
{var statearr_31780_31848 = state_31733__$1;(statearr_31780_31848[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (25)))
{var inst_31676 = (state_31733[(12)]);var inst_31675 = (state_31733[(20)]);var inst_31678 = (inst_31676 < inst_31675);var inst_31679 = inst_31678;var state_31733__$1 = state_31733;if(cljs.core.truth_(inst_31679))
{var statearr_31781_31849 = state_31733__$1;(statearr_31781_31849[(1)] = (27));
} else
{var statearr_31782_31850 = state_31733__$1;(statearr_31782_31850[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (34)))
{var state_31733__$1 = state_31733;var statearr_31783_31851 = state_31733__$1;(statearr_31783_31851[(2)] = null);
(statearr_31783_31851[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (17)))
{var state_31733__$1 = state_31733;var statearr_31784_31852 = state_31733__$1;(statearr_31784_31852[(2)] = null);
(statearr_31784_31852[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (3)))
{var inst_31731 = (state_31733[(2)]);var state_31733__$1 = state_31733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31733__$1,inst_31731);
} else
{if((state_val_31734 === (12)))
{var inst_31660 = (state_31733[(2)]);var state_31733__$1 = state_31733;var statearr_31785_31853 = state_31733__$1;(statearr_31785_31853[(2)] = inst_31660);
(statearr_31785_31853[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (2)))
{var state_31733__$1 = state_31733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31733__$1,(4),ch);
} else
{if((state_val_31734 === (23)))
{var state_31733__$1 = state_31733;var statearr_31786_31854 = state_31733__$1;(statearr_31786_31854[(2)] = null);
(statearr_31786_31854[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (35)))
{var inst_31715 = (state_31733[(2)]);var state_31733__$1 = state_31733;var statearr_31787_31855 = state_31733__$1;(statearr_31787_31855[(2)] = inst_31715);
(statearr_31787_31855[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (19)))
{var inst_31634 = (state_31733[(7)]);var inst_31638 = cljs.core.chunk_first.call(null,inst_31634);var inst_31639 = cljs.core.chunk_rest.call(null,inst_31634);var inst_31640 = cljs.core.count.call(null,inst_31638);var inst_31614 = inst_31639;var inst_31615 = inst_31638;var inst_31616 = inst_31640;var inst_31617 = (0);var state_31733__$1 = (function (){var statearr_31788 = state_31733;(statearr_31788[(13)] = inst_31614);
(statearr_31788[(14)] = inst_31615);
(statearr_31788[(15)] = inst_31616);
(statearr_31788[(16)] = inst_31617);
return statearr_31788;
})();var statearr_31789_31856 = state_31733__$1;(statearr_31789_31856[(2)] = null);
(statearr_31789_31856[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (11)))
{var inst_31614 = (state_31733[(13)]);var inst_31634 = (state_31733[(7)]);var inst_31634__$1 = cljs.core.seq.call(null,inst_31614);var state_31733__$1 = (function (){var statearr_31790 = state_31733;(statearr_31790[(7)] = inst_31634__$1);
return statearr_31790;
})();if(inst_31634__$1)
{var statearr_31791_31857 = state_31733__$1;(statearr_31791_31857[(1)] = (16));
} else
{var statearr_31792_31858 = state_31733__$1;(statearr_31792_31858[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (9)))
{var inst_31662 = (state_31733[(2)]);var state_31733__$1 = state_31733;var statearr_31793_31859 = state_31733__$1;(statearr_31793_31859[(2)] = inst_31662);
(statearr_31793_31859[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (5)))
{var inst_31612 = cljs.core.deref.call(null,cs);var inst_31613 = cljs.core.seq.call(null,inst_31612);var inst_31614 = inst_31613;var inst_31615 = null;var inst_31616 = (0);var inst_31617 = (0);var state_31733__$1 = (function (){var statearr_31794 = state_31733;(statearr_31794[(13)] = inst_31614);
(statearr_31794[(14)] = inst_31615);
(statearr_31794[(15)] = inst_31616);
(statearr_31794[(16)] = inst_31617);
return statearr_31794;
})();var statearr_31795_31860 = state_31733__$1;(statearr_31795_31860[(2)] = null);
(statearr_31795_31860[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (14)))
{var state_31733__$1 = state_31733;var statearr_31796_31861 = state_31733__$1;(statearr_31796_31861[(2)] = null);
(statearr_31796_31861[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (45)))
{var inst_31723 = (state_31733[(2)]);var state_31733__$1 = state_31733;var statearr_31797_31862 = state_31733__$1;(statearr_31797_31862[(2)] = inst_31723);
(statearr_31797_31862[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (26)))
{var inst_31665 = (state_31733[(29)]);var inst_31719 = (state_31733[(2)]);var inst_31720 = cljs.core.seq.call(null,inst_31665);var state_31733__$1 = (function (){var statearr_31798 = state_31733;(statearr_31798[(31)] = inst_31719);
return statearr_31798;
})();if(inst_31720)
{var statearr_31799_31863 = state_31733__$1;(statearr_31799_31863[(1)] = (42));
} else
{var statearr_31800_31864 = state_31733__$1;(statearr_31800_31864[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (16)))
{var inst_31634 = (state_31733[(7)]);var inst_31636 = cljs.core.chunked_seq_QMARK_.call(null,inst_31634);var state_31733__$1 = state_31733;if(inst_31636)
{var statearr_31801_31865 = state_31733__$1;(statearr_31801_31865[(1)] = (19));
} else
{var statearr_31802_31866 = state_31733__$1;(statearr_31802_31866[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (38)))
{var inst_31712 = (state_31733[(2)]);var state_31733__$1 = state_31733;var statearr_31803_31867 = state_31733__$1;(statearr_31803_31867[(2)] = inst_31712);
(statearr_31803_31867[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (30)))
{var state_31733__$1 = state_31733;var statearr_31804_31868 = state_31733__$1;(statearr_31804_31868[(2)] = null);
(statearr_31804_31868[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (10)))
{var inst_31615 = (state_31733[(14)]);var inst_31617 = (state_31733[(16)]);var inst_31623 = cljs.core._nth.call(null,inst_31615,inst_31617);var inst_31624 = cljs.core.nth.call(null,inst_31623,(0),null);var inst_31625 = cljs.core.nth.call(null,inst_31623,(1),null);var state_31733__$1 = (function (){var statearr_31805 = state_31733;(statearr_31805[(26)] = inst_31624);
return statearr_31805;
})();if(cljs.core.truth_(inst_31625))
{var statearr_31806_31869 = state_31733__$1;(statearr_31806_31869[(1)] = (13));
} else
{var statearr_31807_31870 = state_31733__$1;(statearr_31807_31870[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (18)))
{var inst_31658 = (state_31733[(2)]);var state_31733__$1 = state_31733;var statearr_31808_31871 = state_31733__$1;(statearr_31808_31871[(2)] = inst_31658);
(statearr_31808_31871[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (42)))
{var state_31733__$1 = state_31733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31733__$1,(45),dchan);
} else
{if((state_val_31734 === (37)))
{var inst_31605 = (state_31733[(10)]);var inst_31692 = (state_31733[(25)]);var inst_31701 = (state_31733[(23)]);var inst_31701__$1 = cljs.core.first.call(null,inst_31692);var inst_31702 = cljs.core.async.put_BANG_.call(null,inst_31701__$1,inst_31605,done);var state_31733__$1 = (function (){var statearr_31809 = state_31733;(statearr_31809[(23)] = inst_31701__$1);
return statearr_31809;
})();if(cljs.core.truth_(inst_31702))
{var statearr_31810_31872 = state_31733__$1;(statearr_31810_31872[(1)] = (39));
} else
{var statearr_31811_31873 = state_31733__$1;(statearr_31811_31873[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31734 === (8)))
{var inst_31616 = (state_31733[(15)]);var inst_31617 = (state_31733[(16)]);var inst_31619 = (inst_31617 < inst_31616);var inst_31620 = inst_31619;var state_31733__$1 = state_31733;if(cljs.core.truth_(inst_31620))
{var statearr_31812_31874 = state_31733__$1;(statearr_31812_31874[(1)] = (10));
} else
{var statearr_31813_31875 = state_31733__$1;(statearr_31813_31875[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10131__auto___31821,cs,m,dchan,dctr,done))
;return ((function (switch__10116__auto__,c__10131__auto___31821,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_31817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31817[(0)] = state_machine__10117__auto__);
(statearr_31817[(1)] = (1));
return statearr_31817;
});
var state_machine__10117__auto____1 = (function (state_31733){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_31733);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e31818){if((e31818 instanceof Object))
{var ex__10120__auto__ = e31818;var statearr_31819_31876 = state_31733;(statearr_31819_31876[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31733);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31818;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31877 = state_31733;
state_31733 = G__31877;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_31733){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_31733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___31821,cs,m,dchan,dctr,done))
})();var state__10133__auto__ = (function (){var statearr_31820 = f__10132__auto__.call(null);(statearr_31820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___31821);
return statearr_31820;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___31821,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj31879 = {};return obj31879;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7934__auto__ = m;if(and__7934__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7934__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8573__auto__ = (((m == null))?null:m);return (function (){var or__7946__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7934__auto__ = m;if(and__7934__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7934__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8573__auto__ = (((m == null))?null:m);return (function (){var or__7946__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7934__auto__ = m;if(and__7934__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7934__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8573__auto__ = (((m == null))?null:m);return (function (){var or__7946__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7934__auto__ = m;if(and__7934__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7934__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8573__auto__ = (((m == null))?null:m);return (function (){var or__7946__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7934__auto__ = m;if(and__7934__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7934__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8573__auto__ = (((m == null))?null:m);return (function (){var or__7946__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t31999 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31999 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32000){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32000 = meta32000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31999.cljs$lang$type = true;
cljs.core.async.t31999.cljs$lang$ctorStr = "cljs.core.async/t31999";
cljs.core.async.t31999.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core.async/t31999");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31999.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t31999.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31999.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31999.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31999.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31999.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31999.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31999.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32001){var self__ = this;
var _32001__$1 = this;return self__.meta32000;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32001,meta32000__$1){var self__ = this;
var _32001__$1 = this;return (new cljs.core.async.t31999(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32000__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t31999 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31999(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32000){return (new cljs.core.async.t31999(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32000));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t31999(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10131__auto___32118 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___32118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___32118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32071){var state_val_32072 = (state_32071[(1)]);if((state_val_32072 === (7)))
{var inst_32015 = (state_32071[(7)]);var inst_32020 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32015);var state_32071__$1 = state_32071;var statearr_32073_32119 = state_32071__$1;(statearr_32073_32119[(2)] = inst_32020);
(statearr_32073_32119[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (20)))
{var inst_32030 = (state_32071[(8)]);var state_32071__$1 = state_32071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32071__$1,(23),out,inst_32030);
} else
{if((state_val_32072 === (1)))
{var inst_32005 = (state_32071[(9)]);var inst_32005__$1 = calc_state.call(null);var inst_32006 = cljs.core.seq_QMARK_.call(null,inst_32005__$1);var state_32071__$1 = (function (){var statearr_32074 = state_32071;(statearr_32074[(9)] = inst_32005__$1);
return statearr_32074;
})();if(inst_32006)
{var statearr_32075_32120 = state_32071__$1;(statearr_32075_32120[(1)] = (2));
} else
{var statearr_32076_32121 = state_32071__$1;(statearr_32076_32121[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (24)))
{var inst_32023 = (state_32071[(10)]);var inst_32015 = inst_32023;var state_32071__$1 = (function (){var statearr_32077 = state_32071;(statearr_32077[(7)] = inst_32015);
return statearr_32077;
})();var statearr_32078_32122 = state_32071__$1;(statearr_32078_32122[(2)] = null);
(statearr_32078_32122[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (4)))
{var inst_32005 = (state_32071[(9)]);var inst_32011 = (state_32071[(2)]);var inst_32012 = cljs.core.get.call(null,inst_32011,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_32013 = cljs.core.get.call(null,inst_32011,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_32014 = cljs.core.get.call(null,inst_32011,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_32015 = inst_32005;var state_32071__$1 = (function (){var statearr_32079 = state_32071;(statearr_32079[(11)] = inst_32014);
(statearr_32079[(12)] = inst_32012);
(statearr_32079[(7)] = inst_32015);
(statearr_32079[(13)] = inst_32013);
return statearr_32079;
})();var statearr_32080_32123 = state_32071__$1;(statearr_32080_32123[(2)] = null);
(statearr_32080_32123[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (15)))
{var state_32071__$1 = state_32071;var statearr_32081_32124 = state_32071__$1;(statearr_32081_32124[(2)] = null);
(statearr_32081_32124[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (21)))
{var inst_32023 = (state_32071[(10)]);var inst_32015 = inst_32023;var state_32071__$1 = (function (){var statearr_32082 = state_32071;(statearr_32082[(7)] = inst_32015);
return statearr_32082;
})();var statearr_32083_32125 = state_32071__$1;(statearr_32083_32125[(2)] = null);
(statearr_32083_32125[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (13)))
{var inst_32067 = (state_32071[(2)]);var state_32071__$1 = state_32071;var statearr_32084_32126 = state_32071__$1;(statearr_32084_32126[(2)] = inst_32067);
(statearr_32084_32126[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (22)))
{var inst_32065 = (state_32071[(2)]);var state_32071__$1 = state_32071;var statearr_32085_32127 = state_32071__$1;(statearr_32085_32127[(2)] = inst_32065);
(statearr_32085_32127[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (6)))
{var inst_32069 = (state_32071[(2)]);var state_32071__$1 = state_32071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32071__$1,inst_32069);
} else
{if((state_val_32072 === (25)))
{var state_32071__$1 = state_32071;var statearr_32086_32128 = state_32071__$1;(statearr_32086_32128[(2)] = null);
(statearr_32086_32128[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (17)))
{var inst_32045 = (state_32071[(14)]);var state_32071__$1 = state_32071;var statearr_32087_32129 = state_32071__$1;(statearr_32087_32129[(2)] = inst_32045);
(statearr_32087_32129[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (3)))
{var inst_32005 = (state_32071[(9)]);var state_32071__$1 = state_32071;var statearr_32088_32130 = state_32071__$1;(statearr_32088_32130[(2)] = inst_32005);
(statearr_32088_32130[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (12)))
{var inst_32026 = (state_32071[(15)]);var inst_32031 = (state_32071[(16)]);var inst_32045 = (state_32071[(14)]);var inst_32045__$1 = inst_32026.call(null,inst_32031);var state_32071__$1 = (function (){var statearr_32089 = state_32071;(statearr_32089[(14)] = inst_32045__$1);
return statearr_32089;
})();if(cljs.core.truth_(inst_32045__$1))
{var statearr_32090_32131 = state_32071__$1;(statearr_32090_32131[(1)] = (17));
} else
{var statearr_32091_32132 = state_32071__$1;(statearr_32091_32132[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (2)))
{var inst_32005 = (state_32071[(9)]);var inst_32008 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32005);var state_32071__$1 = state_32071;var statearr_32092_32133 = state_32071__$1;(statearr_32092_32133[(2)] = inst_32008);
(statearr_32092_32133[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (23)))
{var inst_32056 = (state_32071[(2)]);var state_32071__$1 = state_32071;if(cljs.core.truth_(inst_32056))
{var statearr_32093_32134 = state_32071__$1;(statearr_32093_32134[(1)] = (24));
} else
{var statearr_32094_32135 = state_32071__$1;(statearr_32094_32135[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (19)))
{var inst_32053 = (state_32071[(2)]);var state_32071__$1 = state_32071;if(cljs.core.truth_(inst_32053))
{var statearr_32095_32136 = state_32071__$1;(statearr_32095_32136[(1)] = (20));
} else
{var statearr_32096_32137 = state_32071__$1;(statearr_32096_32137[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (11)))
{var inst_32030 = (state_32071[(8)]);var inst_32036 = (inst_32030 == null);var state_32071__$1 = state_32071;if(cljs.core.truth_(inst_32036))
{var statearr_32097_32138 = state_32071__$1;(statearr_32097_32138[(1)] = (14));
} else
{var statearr_32098_32139 = state_32071__$1;(statearr_32098_32139[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (9)))
{var inst_32023 = (state_32071[(10)]);var inst_32023__$1 = (state_32071[(2)]);var inst_32024 = cljs.core.get.call(null,inst_32023__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_32025 = cljs.core.get.call(null,inst_32023__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_32026 = cljs.core.get.call(null,inst_32023__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_32071__$1 = (function (){var statearr_32099 = state_32071;(statearr_32099[(17)] = inst_32025);
(statearr_32099[(15)] = inst_32026);
(statearr_32099[(10)] = inst_32023__$1);
return statearr_32099;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32071__$1,(10),inst_32024);
} else
{if((state_val_32072 === (5)))
{var inst_32015 = (state_32071[(7)]);var inst_32018 = cljs.core.seq_QMARK_.call(null,inst_32015);var state_32071__$1 = state_32071;if(inst_32018)
{var statearr_32100_32140 = state_32071__$1;(statearr_32100_32140[(1)] = (7));
} else
{var statearr_32101_32141 = state_32071__$1;(statearr_32101_32141[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (14)))
{var inst_32031 = (state_32071[(16)]);var inst_32038 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32031);var state_32071__$1 = state_32071;var statearr_32102_32142 = state_32071__$1;(statearr_32102_32142[(2)] = inst_32038);
(statearr_32102_32142[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (26)))
{var inst_32061 = (state_32071[(2)]);var state_32071__$1 = state_32071;var statearr_32103_32143 = state_32071__$1;(statearr_32103_32143[(2)] = inst_32061);
(statearr_32103_32143[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (16)))
{var inst_32041 = (state_32071[(2)]);var inst_32042 = calc_state.call(null);var inst_32015 = inst_32042;var state_32071__$1 = (function (){var statearr_32104 = state_32071;(statearr_32104[(7)] = inst_32015);
(statearr_32104[(18)] = inst_32041);
return statearr_32104;
})();var statearr_32105_32144 = state_32071__$1;(statearr_32105_32144[(2)] = null);
(statearr_32105_32144[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (10)))
{var inst_32030 = (state_32071[(8)]);var inst_32031 = (state_32071[(16)]);var inst_32029 = (state_32071[(2)]);var inst_32030__$1 = cljs.core.nth.call(null,inst_32029,(0),null);var inst_32031__$1 = cljs.core.nth.call(null,inst_32029,(1),null);var inst_32032 = (inst_32030__$1 == null);var inst_32033 = cljs.core._EQ_.call(null,inst_32031__$1,change);var inst_32034 = (inst_32032) || (inst_32033);var state_32071__$1 = (function (){var statearr_32106 = state_32071;(statearr_32106[(8)] = inst_32030__$1);
(statearr_32106[(16)] = inst_32031__$1);
return statearr_32106;
})();if(cljs.core.truth_(inst_32034))
{var statearr_32107_32145 = state_32071__$1;(statearr_32107_32145[(1)] = (11));
} else
{var statearr_32108_32146 = state_32071__$1;(statearr_32108_32146[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (18)))
{var inst_32025 = (state_32071[(17)]);var inst_32026 = (state_32071[(15)]);var inst_32031 = (state_32071[(16)]);var inst_32048 = cljs.core.empty_QMARK_.call(null,inst_32026);var inst_32049 = inst_32025.call(null,inst_32031);var inst_32050 = cljs.core.not.call(null,inst_32049);var inst_32051 = (inst_32048) && (inst_32050);var state_32071__$1 = state_32071;var statearr_32109_32147 = state_32071__$1;(statearr_32109_32147[(2)] = inst_32051);
(statearr_32109_32147[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32072 === (8)))
{var inst_32015 = (state_32071[(7)]);var state_32071__$1 = state_32071;var statearr_32110_32148 = state_32071__$1;(statearr_32110_32148[(2)] = inst_32015);
(statearr_32110_32148[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10131__auto___32118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10116__auto__,c__10131__auto___32118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_32114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32114[(0)] = state_machine__10117__auto__);
(statearr_32114[(1)] = (1));
return statearr_32114;
});
var state_machine__10117__auto____1 = (function (state_32071){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_32071);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e32115){if((e32115 instanceof Object))
{var ex__10120__auto__ = e32115;var statearr_32116_32149 = state_32071;(statearr_32116_32149[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32071);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32115;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32150 = state_32071;
state_32071 = G__32150;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_32071){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_32071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___32118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10133__auto__ = (function (){var statearr_32117 = f__10132__auto__.call(null);(statearr_32117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___32118);
return statearr_32117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___32118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj32152 = {};return obj32152;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7934__auto__ = p;if(and__7934__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7934__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8573__auto__ = (((p == null))?null:p);return (function (){var or__7946__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7934__auto__ = p;if(and__7934__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7934__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8573__auto__ = (((p == null))?null:p);return (function (){var or__7946__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7934__auto__ = p;if(and__7934__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7934__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8573__auto__ = (((p == null))?null:p);return (function (){var or__7946__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7934__auto__ = p;if(and__7934__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7934__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8573__auto__ = (((p == null))?null:p);return (function (){var or__7946__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7946__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7946__auto__,mults){
return (function (p1__32153_SHARP_){if(cljs.core.truth_(p1__32153_SHARP_.call(null,topic)))
{return p1__32153_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__32153_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7946__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t32268 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32268 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32269){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32269 = meta32269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32268.cljs$lang$type = true;
cljs.core.async.t32268.cljs$lang$ctorStr = "cljs.core.async/t32268";
cljs.core.async.t32268.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core.async/t32268");
});})(mults,ensure_mult))
;
cljs.core.async.t32268.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t32268.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t32268.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t32268.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t32268.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t32268.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32268.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t32268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32270){var self__ = this;
var _32270__$1 = this;return self__.meta32269;
});})(mults,ensure_mult))
;
cljs.core.async.t32268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32270,meta32269__$1){var self__ = this;
var _32270__$1 = this;return (new cljs.core.async.t32268(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32269__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t32268 = ((function (mults,ensure_mult){
return (function __GT_t32268(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32269){return (new cljs.core.async.t32268(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32269));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t32268(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10131__auto___32382 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___32382,mults,ensure_mult,p){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___32382,mults,ensure_mult,p){
return (function (state_32338){var state_val_32339 = (state_32338[(1)]);if((state_val_32339 === (7)))
{var inst_32334 = (state_32338[(2)]);var state_32338__$1 = state_32338;var statearr_32340_32383 = state_32338__$1;(statearr_32340_32383[(2)] = inst_32334);
(statearr_32340_32383[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (20)))
{var state_32338__$1 = state_32338;var statearr_32341_32384 = state_32338__$1;(statearr_32341_32384[(2)] = null);
(statearr_32341_32384[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (1)))
{var state_32338__$1 = state_32338;var statearr_32342_32385 = state_32338__$1;(statearr_32342_32385[(2)] = null);
(statearr_32342_32385[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (4)))
{var inst_32273 = (state_32338[(7)]);var inst_32273__$1 = (state_32338[(2)]);var inst_32274 = (inst_32273__$1 == null);var state_32338__$1 = (function (){var statearr_32343 = state_32338;(statearr_32343[(7)] = inst_32273__$1);
return statearr_32343;
})();if(cljs.core.truth_(inst_32274))
{var statearr_32344_32386 = state_32338__$1;(statearr_32344_32386[(1)] = (5));
} else
{var statearr_32345_32387 = state_32338__$1;(statearr_32345_32387[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (15)))
{var inst_32315 = (state_32338[(2)]);var state_32338__$1 = state_32338;var statearr_32346_32388 = state_32338__$1;(statearr_32346_32388[(2)] = inst_32315);
(statearr_32346_32388[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (21)))
{var inst_32321 = (state_32338[(8)]);var inst_32329 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32321);var state_32338__$1 = state_32338;var statearr_32347_32389 = state_32338__$1;(statearr_32347_32389[(2)] = inst_32329);
(statearr_32347_32389[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (13)))
{var inst_32297 = (state_32338[(9)]);var inst_32299 = cljs.core.chunked_seq_QMARK_.call(null,inst_32297);var state_32338__$1 = state_32338;if(inst_32299)
{var statearr_32348_32390 = state_32338__$1;(statearr_32348_32390[(1)] = (16));
} else
{var statearr_32349_32391 = state_32338__$1;(statearr_32349_32391[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (22)))
{var inst_32331 = (state_32338[(2)]);var state_32338__$1 = (function (){var statearr_32350 = state_32338;(statearr_32350[(10)] = inst_32331);
return statearr_32350;
})();var statearr_32351_32392 = state_32338__$1;(statearr_32351_32392[(2)] = null);
(statearr_32351_32392[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (6)))
{var inst_32273 = (state_32338[(7)]);var inst_32321 = (state_32338[(8)]);var inst_32321__$1 = topic_fn.call(null,inst_32273);var inst_32322 = cljs.core.deref.call(null,mults);var inst_32323 = cljs.core.get.call(null,inst_32322,inst_32321__$1);var inst_32324 = cljs.core.async.muxch_STAR_.call(null,inst_32323);var state_32338__$1 = (function (){var statearr_32352 = state_32338;(statearr_32352[(8)] = inst_32321__$1);
return statearr_32352;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32338__$1,(19),inst_32324,inst_32273);
} else
{if((state_val_32339 === (17)))
{var inst_32297 = (state_32338[(9)]);var inst_32306 = cljs.core.first.call(null,inst_32297);var inst_32307 = cljs.core.async.muxch_STAR_.call(null,inst_32306);var inst_32308 = cljs.core.async.close_BANG_.call(null,inst_32307);var inst_32309 = cljs.core.next.call(null,inst_32297);var inst_32283 = inst_32309;var inst_32284 = null;var inst_32285 = (0);var inst_32286 = (0);var state_32338__$1 = (function (){var statearr_32353 = state_32338;(statearr_32353[(11)] = inst_32283);
(statearr_32353[(12)] = inst_32284);
(statearr_32353[(13)] = inst_32286);
(statearr_32353[(14)] = inst_32308);
(statearr_32353[(15)] = inst_32285);
return statearr_32353;
})();var statearr_32354_32393 = state_32338__$1;(statearr_32354_32393[(2)] = null);
(statearr_32354_32393[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (3)))
{var inst_32336 = (state_32338[(2)]);var state_32338__$1 = state_32338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32338__$1,inst_32336);
} else
{if((state_val_32339 === (12)))
{var inst_32317 = (state_32338[(2)]);var state_32338__$1 = state_32338;var statearr_32355_32394 = state_32338__$1;(statearr_32355_32394[(2)] = inst_32317);
(statearr_32355_32394[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (2)))
{var state_32338__$1 = state_32338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32338__$1,(4),ch);
} else
{if((state_val_32339 === (19)))
{var inst_32326 = (state_32338[(2)]);var state_32338__$1 = state_32338;if(cljs.core.truth_(inst_32326))
{var statearr_32356_32395 = state_32338__$1;(statearr_32356_32395[(1)] = (20));
} else
{var statearr_32357_32396 = state_32338__$1;(statearr_32357_32396[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (11)))
{var inst_32297 = (state_32338[(9)]);var inst_32283 = (state_32338[(11)]);var inst_32297__$1 = cljs.core.seq.call(null,inst_32283);var state_32338__$1 = (function (){var statearr_32358 = state_32338;(statearr_32358[(9)] = inst_32297__$1);
return statearr_32358;
})();if(inst_32297__$1)
{var statearr_32359_32397 = state_32338__$1;(statearr_32359_32397[(1)] = (13));
} else
{var statearr_32360_32398 = state_32338__$1;(statearr_32360_32398[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (9)))
{var inst_32319 = (state_32338[(2)]);var state_32338__$1 = state_32338;var statearr_32361_32399 = state_32338__$1;(statearr_32361_32399[(2)] = inst_32319);
(statearr_32361_32399[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (5)))
{var inst_32280 = cljs.core.deref.call(null,mults);var inst_32281 = cljs.core.vals.call(null,inst_32280);var inst_32282 = cljs.core.seq.call(null,inst_32281);var inst_32283 = inst_32282;var inst_32284 = null;var inst_32285 = (0);var inst_32286 = (0);var state_32338__$1 = (function (){var statearr_32362 = state_32338;(statearr_32362[(11)] = inst_32283);
(statearr_32362[(12)] = inst_32284);
(statearr_32362[(13)] = inst_32286);
(statearr_32362[(15)] = inst_32285);
return statearr_32362;
})();var statearr_32363_32400 = state_32338__$1;(statearr_32363_32400[(2)] = null);
(statearr_32363_32400[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (14)))
{var state_32338__$1 = state_32338;var statearr_32367_32401 = state_32338__$1;(statearr_32367_32401[(2)] = null);
(statearr_32367_32401[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (16)))
{var inst_32297 = (state_32338[(9)]);var inst_32301 = cljs.core.chunk_first.call(null,inst_32297);var inst_32302 = cljs.core.chunk_rest.call(null,inst_32297);var inst_32303 = cljs.core.count.call(null,inst_32301);var inst_32283 = inst_32302;var inst_32284 = inst_32301;var inst_32285 = inst_32303;var inst_32286 = (0);var state_32338__$1 = (function (){var statearr_32368 = state_32338;(statearr_32368[(11)] = inst_32283);
(statearr_32368[(12)] = inst_32284);
(statearr_32368[(13)] = inst_32286);
(statearr_32368[(15)] = inst_32285);
return statearr_32368;
})();var statearr_32369_32402 = state_32338__$1;(statearr_32369_32402[(2)] = null);
(statearr_32369_32402[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (10)))
{var inst_32283 = (state_32338[(11)]);var inst_32284 = (state_32338[(12)]);var inst_32286 = (state_32338[(13)]);var inst_32285 = (state_32338[(15)]);var inst_32291 = cljs.core._nth.call(null,inst_32284,inst_32286);var inst_32292 = cljs.core.async.muxch_STAR_.call(null,inst_32291);var inst_32293 = cljs.core.async.close_BANG_.call(null,inst_32292);var inst_32294 = (inst_32286 + (1));var tmp32364 = inst_32283;var tmp32365 = inst_32284;var tmp32366 = inst_32285;var inst_32283__$1 = tmp32364;var inst_32284__$1 = tmp32365;var inst_32285__$1 = tmp32366;var inst_32286__$1 = inst_32294;var state_32338__$1 = (function (){var statearr_32370 = state_32338;(statearr_32370[(11)] = inst_32283__$1);
(statearr_32370[(12)] = inst_32284__$1);
(statearr_32370[(13)] = inst_32286__$1);
(statearr_32370[(15)] = inst_32285__$1);
(statearr_32370[(16)] = inst_32293);
return statearr_32370;
})();var statearr_32371_32403 = state_32338__$1;(statearr_32371_32403[(2)] = null);
(statearr_32371_32403[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (18)))
{var inst_32312 = (state_32338[(2)]);var state_32338__$1 = state_32338;var statearr_32372_32404 = state_32338__$1;(statearr_32372_32404[(2)] = inst_32312);
(statearr_32372_32404[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32339 === (8)))
{var inst_32286 = (state_32338[(13)]);var inst_32285 = (state_32338[(15)]);var inst_32288 = (inst_32286 < inst_32285);var inst_32289 = inst_32288;var state_32338__$1 = state_32338;if(cljs.core.truth_(inst_32289))
{var statearr_32373_32405 = state_32338__$1;(statearr_32373_32405[(1)] = (10));
} else
{var statearr_32374_32406 = state_32338__$1;(statearr_32374_32406[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10131__auto___32382,mults,ensure_mult,p))
;return ((function (switch__10116__auto__,c__10131__auto___32382,mults,ensure_mult,p){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_32378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32378[(0)] = state_machine__10117__auto__);
(statearr_32378[(1)] = (1));
return statearr_32378;
});
var state_machine__10117__auto____1 = (function (state_32338){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_32338);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e32379){if((e32379 instanceof Object))
{var ex__10120__auto__ = e32379;var statearr_32380_32407 = state_32338;(statearr_32380_32407[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32338);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32379;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32408 = state_32338;
state_32338 = G__32408;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_32338){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_32338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___32382,mults,ensure_mult,p))
})();var state__10133__auto__ = (function (){var statearr_32381 = f__10132__auto__.call(null);(statearr_32381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___32382);
return statearr_32381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___32382,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10131__auto___32545 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___32545,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___32545,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32515){var state_val_32516 = (state_32515[(1)]);if((state_val_32516 === (7)))
{var state_32515__$1 = state_32515;var statearr_32517_32546 = state_32515__$1;(statearr_32517_32546[(2)] = null);
(statearr_32517_32546[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32516 === (1)))
{var state_32515__$1 = state_32515;var statearr_32518_32547 = state_32515__$1;(statearr_32518_32547[(2)] = null);
(statearr_32518_32547[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32516 === (4)))
{var inst_32479 = (state_32515[(7)]);var inst_32481 = (inst_32479 < cnt);var state_32515__$1 = state_32515;if(cljs.core.truth_(inst_32481))
{var statearr_32519_32548 = state_32515__$1;(statearr_32519_32548[(1)] = (6));
} else
{var statearr_32520_32549 = state_32515__$1;(statearr_32520_32549[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32516 === (15)))
{var inst_32511 = (state_32515[(2)]);var state_32515__$1 = state_32515;var statearr_32521_32550 = state_32515__$1;(statearr_32521_32550[(2)] = inst_32511);
(statearr_32521_32550[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32516 === (13)))
{var inst_32504 = cljs.core.async.close_BANG_.call(null,out);var state_32515__$1 = state_32515;var statearr_32522_32551 = state_32515__$1;(statearr_32522_32551[(2)] = inst_32504);
(statearr_32522_32551[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32516 === (6)))
{var state_32515__$1 = state_32515;var statearr_32523_32552 = state_32515__$1;(statearr_32523_32552[(2)] = null);
(statearr_32523_32552[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32516 === (3)))
{var inst_32513 = (state_32515[(2)]);var state_32515__$1 = state_32515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32515__$1,inst_32513);
} else
{if((state_val_32516 === (12)))
{var inst_32501 = (state_32515[(8)]);var inst_32501__$1 = (state_32515[(2)]);var inst_32502 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32501__$1);var state_32515__$1 = (function (){var statearr_32524 = state_32515;(statearr_32524[(8)] = inst_32501__$1);
return statearr_32524;
})();if(cljs.core.truth_(inst_32502))
{var statearr_32525_32553 = state_32515__$1;(statearr_32525_32553[(1)] = (13));
} else
{var statearr_32526_32554 = state_32515__$1;(statearr_32526_32554[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32516 === (2)))
{var inst_32478 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_32479 = (0);var state_32515__$1 = (function (){var statearr_32527 = state_32515;(statearr_32527[(9)] = inst_32478);
(statearr_32527[(7)] = inst_32479);
return statearr_32527;
})();var statearr_32528_32555 = state_32515__$1;(statearr_32528_32555[(2)] = null);
(statearr_32528_32555[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32516 === (11)))
{var inst_32479 = (state_32515[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32515,(10),Object,null,(9));var inst_32488 = chs__$1.call(null,inst_32479);var inst_32489 = done.call(null,inst_32479);var inst_32490 = cljs.core.async.take_BANG_.call(null,inst_32488,inst_32489);var state_32515__$1 = state_32515;var statearr_32529_32556 = state_32515__$1;(statearr_32529_32556[(2)] = inst_32490);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32515__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32516 === (9)))
{var inst_32479 = (state_32515[(7)]);var inst_32492 = (state_32515[(2)]);var inst_32493 = (inst_32479 + (1));var inst_32479__$1 = inst_32493;var state_32515__$1 = (function (){var statearr_32530 = state_32515;(statearr_32530[(7)] = inst_32479__$1);
(statearr_32530[(10)] = inst_32492);
return statearr_32530;
})();var statearr_32531_32557 = state_32515__$1;(statearr_32531_32557[(2)] = null);
(statearr_32531_32557[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32516 === (5)))
{var inst_32499 = (state_32515[(2)]);var state_32515__$1 = (function (){var statearr_32532 = state_32515;(statearr_32532[(11)] = inst_32499);
return statearr_32532;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32515__$1,(12),dchan);
} else
{if((state_val_32516 === (14)))
{var inst_32501 = (state_32515[(8)]);var inst_32506 = cljs.core.apply.call(null,f,inst_32501);var state_32515__$1 = state_32515;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32515__$1,(16),out,inst_32506);
} else
{if((state_val_32516 === (16)))
{var inst_32508 = (state_32515[(2)]);var state_32515__$1 = (function (){var statearr_32533 = state_32515;(statearr_32533[(12)] = inst_32508);
return statearr_32533;
})();var statearr_32534_32558 = state_32515__$1;(statearr_32534_32558[(2)] = null);
(statearr_32534_32558[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32516 === (10)))
{var inst_32483 = (state_32515[(2)]);var inst_32484 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_32515__$1 = (function (){var statearr_32535 = state_32515;(statearr_32535[(13)] = inst_32483);
return statearr_32535;
})();var statearr_32536_32559 = state_32515__$1;(statearr_32536_32559[(2)] = inst_32484);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32515__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32516 === (8)))
{var inst_32497 = (state_32515[(2)]);var state_32515__$1 = state_32515;var statearr_32537_32560 = state_32515__$1;(statearr_32537_32560[(2)] = inst_32497);
(statearr_32537_32560[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10131__auto___32545,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10116__auto__,c__10131__auto___32545,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_32541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32541[(0)] = state_machine__10117__auto__);
(statearr_32541[(1)] = (1));
return statearr_32541;
});
var state_machine__10117__auto____1 = (function (state_32515){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_32515);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e32542){if((e32542 instanceof Object))
{var ex__10120__auto__ = e32542;var statearr_32543_32561 = state_32515;(statearr_32543_32561[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32515);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32562 = state_32515;
state_32515 = G__32562;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_32515){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_32515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___32545,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10133__auto__ = (function (){var statearr_32544 = f__10132__auto__.call(null);(statearr_32544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___32545);
return statearr_32544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___32545,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10131__auto___32670 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___32670,out){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___32670,out){
return (function (state_32646){var state_val_32647 = (state_32646[(1)]);if((state_val_32647 === (7)))
{var inst_32626 = (state_32646[(7)]);var inst_32625 = (state_32646[(8)]);var inst_32625__$1 = (state_32646[(2)]);var inst_32626__$1 = cljs.core.nth.call(null,inst_32625__$1,(0),null);var inst_32627 = cljs.core.nth.call(null,inst_32625__$1,(1),null);var inst_32628 = (inst_32626__$1 == null);var state_32646__$1 = (function (){var statearr_32648 = state_32646;(statearr_32648[(9)] = inst_32627);
(statearr_32648[(7)] = inst_32626__$1);
(statearr_32648[(8)] = inst_32625__$1);
return statearr_32648;
})();if(cljs.core.truth_(inst_32628))
{var statearr_32649_32671 = state_32646__$1;(statearr_32649_32671[(1)] = (8));
} else
{var statearr_32650_32672 = state_32646__$1;(statearr_32650_32672[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (1)))
{var inst_32617 = cljs.core.vec.call(null,chs);var inst_32618 = inst_32617;var state_32646__$1 = (function (){var statearr_32651 = state_32646;(statearr_32651[(10)] = inst_32618);
return statearr_32651;
})();var statearr_32652_32673 = state_32646__$1;(statearr_32652_32673[(2)] = null);
(statearr_32652_32673[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (4)))
{var inst_32618 = (state_32646[(10)]);var state_32646__$1 = state_32646;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32646__$1,(7),inst_32618);
} else
{if((state_val_32647 === (6)))
{var inst_32642 = (state_32646[(2)]);var state_32646__$1 = state_32646;var statearr_32653_32674 = state_32646__$1;(statearr_32653_32674[(2)] = inst_32642);
(statearr_32653_32674[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (3)))
{var inst_32644 = (state_32646[(2)]);var state_32646__$1 = state_32646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32646__$1,inst_32644);
} else
{if((state_val_32647 === (2)))
{var inst_32618 = (state_32646[(10)]);var inst_32620 = cljs.core.count.call(null,inst_32618);var inst_32621 = (inst_32620 > (0));var state_32646__$1 = state_32646;if(cljs.core.truth_(inst_32621))
{var statearr_32655_32675 = state_32646__$1;(statearr_32655_32675[(1)] = (4));
} else
{var statearr_32656_32676 = state_32646__$1;(statearr_32656_32676[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (11)))
{var inst_32618 = (state_32646[(10)]);var inst_32635 = (state_32646[(2)]);var tmp32654 = inst_32618;var inst_32618__$1 = tmp32654;var state_32646__$1 = (function (){var statearr_32657 = state_32646;(statearr_32657[(11)] = inst_32635);
(statearr_32657[(10)] = inst_32618__$1);
return statearr_32657;
})();var statearr_32658_32677 = state_32646__$1;(statearr_32658_32677[(2)] = null);
(statearr_32658_32677[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (9)))
{var inst_32626 = (state_32646[(7)]);var state_32646__$1 = state_32646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32646__$1,(11),out,inst_32626);
} else
{if((state_val_32647 === (5)))
{var inst_32640 = cljs.core.async.close_BANG_.call(null,out);var state_32646__$1 = state_32646;var statearr_32659_32678 = state_32646__$1;(statearr_32659_32678[(2)] = inst_32640);
(statearr_32659_32678[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (10)))
{var inst_32638 = (state_32646[(2)]);var state_32646__$1 = state_32646;var statearr_32660_32679 = state_32646__$1;(statearr_32660_32679[(2)] = inst_32638);
(statearr_32660_32679[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (8)))
{var inst_32627 = (state_32646[(9)]);var inst_32626 = (state_32646[(7)]);var inst_32625 = (state_32646[(8)]);var inst_32618 = (state_32646[(10)]);var inst_32630 = (function (){var c = inst_32627;var v = inst_32626;var vec__32623 = inst_32625;var cs = inst_32618;return ((function (c,v,vec__32623,cs,inst_32627,inst_32626,inst_32625,inst_32618,state_val_32647,c__10131__auto___32670,out){
return (function (p1__32563_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__32563_SHARP_);
});
;})(c,v,vec__32623,cs,inst_32627,inst_32626,inst_32625,inst_32618,state_val_32647,c__10131__auto___32670,out))
})();var inst_32631 = cljs.core.filterv.call(null,inst_32630,inst_32618);var inst_32618__$1 = inst_32631;var state_32646__$1 = (function (){var statearr_32661 = state_32646;(statearr_32661[(10)] = inst_32618__$1);
return statearr_32661;
})();var statearr_32662_32680 = state_32646__$1;(statearr_32662_32680[(2)] = null);
(statearr_32662_32680[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10131__auto___32670,out))
;return ((function (switch__10116__auto__,c__10131__auto___32670,out){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_32666 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32666[(0)] = state_machine__10117__auto__);
(statearr_32666[(1)] = (1));
return statearr_32666;
});
var state_machine__10117__auto____1 = (function (state_32646){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_32646);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e32667){if((e32667 instanceof Object))
{var ex__10120__auto__ = e32667;var statearr_32668_32681 = state_32646;(statearr_32668_32681[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32646);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32667;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32682 = state_32646;
state_32646 = G__32682;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_32646){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_32646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___32670,out))
})();var state__10133__auto__ = (function (){var statearr_32669 = f__10132__auto__.call(null);(statearr_32669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___32670);
return statearr_32669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___32670,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10131__auto___32775 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___32775,out){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___32775,out){
return (function (state_32752){var state_val_32753 = (state_32752[(1)]);if((state_val_32753 === (7)))
{var inst_32734 = (state_32752[(7)]);var inst_32734__$1 = (state_32752[(2)]);var inst_32735 = (inst_32734__$1 == null);var inst_32736 = cljs.core.not.call(null,inst_32735);var state_32752__$1 = (function (){var statearr_32754 = state_32752;(statearr_32754[(7)] = inst_32734__$1);
return statearr_32754;
})();if(inst_32736)
{var statearr_32755_32776 = state_32752__$1;(statearr_32755_32776[(1)] = (8));
} else
{var statearr_32756_32777 = state_32752__$1;(statearr_32756_32777[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32753 === (1)))
{var inst_32729 = (0);var state_32752__$1 = (function (){var statearr_32757 = state_32752;(statearr_32757[(8)] = inst_32729);
return statearr_32757;
})();var statearr_32758_32778 = state_32752__$1;(statearr_32758_32778[(2)] = null);
(statearr_32758_32778[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32753 === (4)))
{var state_32752__$1 = state_32752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32752__$1,(7),ch);
} else
{if((state_val_32753 === (6)))
{var inst_32747 = (state_32752[(2)]);var state_32752__$1 = state_32752;var statearr_32759_32779 = state_32752__$1;(statearr_32759_32779[(2)] = inst_32747);
(statearr_32759_32779[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32753 === (3)))
{var inst_32749 = (state_32752[(2)]);var inst_32750 = cljs.core.async.close_BANG_.call(null,out);var state_32752__$1 = (function (){var statearr_32760 = state_32752;(statearr_32760[(9)] = inst_32749);
return statearr_32760;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32752__$1,inst_32750);
} else
{if((state_val_32753 === (2)))
{var inst_32729 = (state_32752[(8)]);var inst_32731 = (inst_32729 < n);var state_32752__$1 = state_32752;if(cljs.core.truth_(inst_32731))
{var statearr_32761_32780 = state_32752__$1;(statearr_32761_32780[(1)] = (4));
} else
{var statearr_32762_32781 = state_32752__$1;(statearr_32762_32781[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32753 === (11)))
{var inst_32729 = (state_32752[(8)]);var inst_32739 = (state_32752[(2)]);var inst_32740 = (inst_32729 + (1));var inst_32729__$1 = inst_32740;var state_32752__$1 = (function (){var statearr_32763 = state_32752;(statearr_32763[(10)] = inst_32739);
(statearr_32763[(8)] = inst_32729__$1);
return statearr_32763;
})();var statearr_32764_32782 = state_32752__$1;(statearr_32764_32782[(2)] = null);
(statearr_32764_32782[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32753 === (9)))
{var state_32752__$1 = state_32752;var statearr_32765_32783 = state_32752__$1;(statearr_32765_32783[(2)] = null);
(statearr_32765_32783[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32753 === (5)))
{var state_32752__$1 = state_32752;var statearr_32766_32784 = state_32752__$1;(statearr_32766_32784[(2)] = null);
(statearr_32766_32784[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32753 === (10)))
{var inst_32744 = (state_32752[(2)]);var state_32752__$1 = state_32752;var statearr_32767_32785 = state_32752__$1;(statearr_32767_32785[(2)] = inst_32744);
(statearr_32767_32785[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32753 === (8)))
{var inst_32734 = (state_32752[(7)]);var state_32752__$1 = state_32752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32752__$1,(11),out,inst_32734);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10131__auto___32775,out))
;return ((function (switch__10116__auto__,c__10131__auto___32775,out){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_32771 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_32771[(0)] = state_machine__10117__auto__);
(statearr_32771[(1)] = (1));
return statearr_32771;
});
var state_machine__10117__auto____1 = (function (state_32752){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_32752);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e32772){if((e32772 instanceof Object))
{var ex__10120__auto__ = e32772;var statearr_32773_32786 = state_32752;(statearr_32773_32786[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32752);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32787 = state_32752;
state_32752 = G__32787;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_32752){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_32752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___32775,out))
})();var state__10133__auto__ = (function (){var statearr_32774 = f__10132__auto__.call(null);(statearr_32774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___32775);
return statearr_32774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___32775,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10131__auto___32884 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___32884,out){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___32884,out){
return (function (state_32859){var state_val_32860 = (state_32859[(1)]);if((state_val_32860 === (7)))
{var inst_32854 = (state_32859[(2)]);var state_32859__$1 = state_32859;var statearr_32861_32885 = state_32859__$1;(statearr_32861_32885[(2)] = inst_32854);
(statearr_32861_32885[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32860 === (1)))
{var inst_32836 = null;var state_32859__$1 = (function (){var statearr_32862 = state_32859;(statearr_32862[(7)] = inst_32836);
return statearr_32862;
})();var statearr_32863_32886 = state_32859__$1;(statearr_32863_32886[(2)] = null);
(statearr_32863_32886[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32860 === (4)))
{var inst_32839 = (state_32859[(8)]);var inst_32839__$1 = (state_32859[(2)]);var inst_32840 = (inst_32839__$1 == null);var inst_32841 = cljs.core.not.call(null,inst_32840);var state_32859__$1 = (function (){var statearr_32864 = state_32859;(statearr_32864[(8)] = inst_32839__$1);
return statearr_32864;
})();if(inst_32841)
{var statearr_32865_32887 = state_32859__$1;(statearr_32865_32887[(1)] = (5));
} else
{var statearr_32866_32888 = state_32859__$1;(statearr_32866_32888[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32860 === (6)))
{var state_32859__$1 = state_32859;var statearr_32867_32889 = state_32859__$1;(statearr_32867_32889[(2)] = null);
(statearr_32867_32889[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32860 === (3)))
{var inst_32856 = (state_32859[(2)]);var inst_32857 = cljs.core.async.close_BANG_.call(null,out);var state_32859__$1 = (function (){var statearr_32868 = state_32859;(statearr_32868[(9)] = inst_32856);
return statearr_32868;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32859__$1,inst_32857);
} else
{if((state_val_32860 === (2)))
{var state_32859__$1 = state_32859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32859__$1,(4),ch);
} else
{if((state_val_32860 === (11)))
{var inst_32839 = (state_32859[(8)]);var inst_32848 = (state_32859[(2)]);var inst_32836 = inst_32839;var state_32859__$1 = (function (){var statearr_32869 = state_32859;(statearr_32869[(7)] = inst_32836);
(statearr_32869[(10)] = inst_32848);
return statearr_32869;
})();var statearr_32870_32890 = state_32859__$1;(statearr_32870_32890[(2)] = null);
(statearr_32870_32890[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32860 === (9)))
{var inst_32839 = (state_32859[(8)]);var state_32859__$1 = state_32859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32859__$1,(11),out,inst_32839);
} else
{if((state_val_32860 === (5)))
{var inst_32836 = (state_32859[(7)]);var inst_32839 = (state_32859[(8)]);var inst_32843 = cljs.core._EQ_.call(null,inst_32839,inst_32836);var state_32859__$1 = state_32859;if(inst_32843)
{var statearr_32872_32891 = state_32859__$1;(statearr_32872_32891[(1)] = (8));
} else
{var statearr_32873_32892 = state_32859__$1;(statearr_32873_32892[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32860 === (10)))
{var inst_32851 = (state_32859[(2)]);var state_32859__$1 = state_32859;var statearr_32874_32893 = state_32859__$1;(statearr_32874_32893[(2)] = inst_32851);
(statearr_32874_32893[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32860 === (8)))
{var inst_32836 = (state_32859[(7)]);var tmp32871 = inst_32836;var inst_32836__$1 = tmp32871;var state_32859__$1 = (function (){var statearr_32875 = state_32859;(statearr_32875[(7)] = inst_32836__$1);
return statearr_32875;
})();var statearr_32876_32894 = state_32859__$1;(statearr_32876_32894[(2)] = null);
(statearr_32876_32894[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10131__auto___32884,out))
;return ((function (switch__10116__auto__,c__10131__auto___32884,out){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_32880 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_32880[(0)] = state_machine__10117__auto__);
(statearr_32880[(1)] = (1));
return statearr_32880;
});
var state_machine__10117__auto____1 = (function (state_32859){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_32859);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e32881){if((e32881 instanceof Object))
{var ex__10120__auto__ = e32881;var statearr_32882_32895 = state_32859;(statearr_32882_32895[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32859);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e32881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32896 = state_32859;
state_32859 = G__32896;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_32859){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_32859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___32884,out))
})();var state__10133__auto__ = (function (){var statearr_32883 = f__10132__auto__.call(null);(statearr_32883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___32884);
return statearr_32883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___32884,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10131__auto___33031 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___33031,out){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___33031,out){
return (function (state_33001){var state_val_33002 = (state_33001[(1)]);if((state_val_33002 === (7)))
{var inst_32997 = (state_33001[(2)]);var state_33001__$1 = state_33001;var statearr_33003_33032 = state_33001__$1;(statearr_33003_33032[(2)] = inst_32997);
(statearr_33003_33032[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33002 === (1)))
{var inst_32964 = (new Array(n));var inst_32965 = inst_32964;var inst_32966 = (0);var state_33001__$1 = (function (){var statearr_33004 = state_33001;(statearr_33004[(7)] = inst_32966);
(statearr_33004[(8)] = inst_32965);
return statearr_33004;
})();var statearr_33005_33033 = state_33001__$1;(statearr_33005_33033[(2)] = null);
(statearr_33005_33033[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33002 === (4)))
{var inst_32969 = (state_33001[(9)]);var inst_32969__$1 = (state_33001[(2)]);var inst_32970 = (inst_32969__$1 == null);var inst_32971 = cljs.core.not.call(null,inst_32970);var state_33001__$1 = (function (){var statearr_33006 = state_33001;(statearr_33006[(9)] = inst_32969__$1);
return statearr_33006;
})();if(inst_32971)
{var statearr_33007_33034 = state_33001__$1;(statearr_33007_33034[(1)] = (5));
} else
{var statearr_33008_33035 = state_33001__$1;(statearr_33008_33035[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33002 === (15)))
{var inst_32991 = (state_33001[(2)]);var state_33001__$1 = state_33001;var statearr_33009_33036 = state_33001__$1;(statearr_33009_33036[(2)] = inst_32991);
(statearr_33009_33036[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33002 === (13)))
{var state_33001__$1 = state_33001;var statearr_33010_33037 = state_33001__$1;(statearr_33010_33037[(2)] = null);
(statearr_33010_33037[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33002 === (6)))
{var inst_32966 = (state_33001[(7)]);var inst_32987 = (inst_32966 > (0));var state_33001__$1 = state_33001;if(cljs.core.truth_(inst_32987))
{var statearr_33011_33038 = state_33001__$1;(statearr_33011_33038[(1)] = (12));
} else
{var statearr_33012_33039 = state_33001__$1;(statearr_33012_33039[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33002 === (3)))
{var inst_32999 = (state_33001[(2)]);var state_33001__$1 = state_33001;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33001__$1,inst_32999);
} else
{if((state_val_33002 === (12)))
{var inst_32965 = (state_33001[(8)]);var inst_32989 = cljs.core.vec.call(null,inst_32965);var state_33001__$1 = state_33001;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33001__$1,(15),out,inst_32989);
} else
{if((state_val_33002 === (2)))
{var state_33001__$1 = state_33001;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33001__$1,(4),ch);
} else
{if((state_val_33002 === (11)))
{var inst_32981 = (state_33001[(2)]);var inst_32982 = (new Array(n));var inst_32965 = inst_32982;var inst_32966 = (0);var state_33001__$1 = (function (){var statearr_33013 = state_33001;(statearr_33013[(7)] = inst_32966);
(statearr_33013[(8)] = inst_32965);
(statearr_33013[(10)] = inst_32981);
return statearr_33013;
})();var statearr_33014_33040 = state_33001__$1;(statearr_33014_33040[(2)] = null);
(statearr_33014_33040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33002 === (9)))
{var inst_32965 = (state_33001[(8)]);var inst_32979 = cljs.core.vec.call(null,inst_32965);var state_33001__$1 = state_33001;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33001__$1,(11),out,inst_32979);
} else
{if((state_val_33002 === (5)))
{var inst_32969 = (state_33001[(9)]);var inst_32966 = (state_33001[(7)]);var inst_32965 = (state_33001[(8)]);var inst_32974 = (state_33001[(11)]);var inst_32973 = (inst_32965[inst_32966] = inst_32969);var inst_32974__$1 = (inst_32966 + (1));var inst_32975 = (inst_32974__$1 < n);var state_33001__$1 = (function (){var statearr_33015 = state_33001;(statearr_33015[(12)] = inst_32973);
(statearr_33015[(11)] = inst_32974__$1);
return statearr_33015;
})();if(cljs.core.truth_(inst_32975))
{var statearr_33016_33041 = state_33001__$1;(statearr_33016_33041[(1)] = (8));
} else
{var statearr_33017_33042 = state_33001__$1;(statearr_33017_33042[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33002 === (14)))
{var inst_32994 = (state_33001[(2)]);var inst_32995 = cljs.core.async.close_BANG_.call(null,out);var state_33001__$1 = (function (){var statearr_33019 = state_33001;(statearr_33019[(13)] = inst_32994);
return statearr_33019;
})();var statearr_33020_33043 = state_33001__$1;(statearr_33020_33043[(2)] = inst_32995);
(statearr_33020_33043[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33002 === (10)))
{var inst_32985 = (state_33001[(2)]);var state_33001__$1 = state_33001;var statearr_33021_33044 = state_33001__$1;(statearr_33021_33044[(2)] = inst_32985);
(statearr_33021_33044[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33002 === (8)))
{var inst_32965 = (state_33001[(8)]);var inst_32974 = (state_33001[(11)]);var tmp33018 = inst_32965;var inst_32965__$1 = tmp33018;var inst_32966 = inst_32974;var state_33001__$1 = (function (){var statearr_33022 = state_33001;(statearr_33022[(7)] = inst_32966);
(statearr_33022[(8)] = inst_32965__$1);
return statearr_33022;
})();var statearr_33023_33045 = state_33001__$1;(statearr_33023_33045[(2)] = null);
(statearr_33023_33045[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10131__auto___33031,out))
;return ((function (switch__10116__auto__,c__10131__auto___33031,out){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_33027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33027[(0)] = state_machine__10117__auto__);
(statearr_33027[(1)] = (1));
return statearr_33027;
});
var state_machine__10117__auto____1 = (function (state_33001){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_33001);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e33028){if((e33028 instanceof Object))
{var ex__10120__auto__ = e33028;var statearr_33029_33046 = state_33001;(statearr_33029_33046[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33001);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33028;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33047 = state_33001;
state_33001 = G__33047;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_33001){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_33001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___33031,out))
})();var state__10133__auto__ = (function (){var statearr_33030 = f__10132__auto__.call(null);(statearr_33030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___33031);
return statearr_33030;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___33031,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10131__auto___33190 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10131__auto___33190,out){
return (function (){var f__10132__auto__ = (function (){var switch__10116__auto__ = ((function (c__10131__auto___33190,out){
return (function (state_33160){var state_val_33161 = (state_33160[(1)]);if((state_val_33161 === (7)))
{var inst_33156 = (state_33160[(2)]);var state_33160__$1 = state_33160;var statearr_33162_33191 = state_33160__$1;(statearr_33162_33191[(2)] = inst_33156);
(statearr_33162_33191[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33161 === (1)))
{var inst_33119 = [];var inst_33120 = inst_33119;var inst_33121 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_33160__$1 = (function (){var statearr_33163 = state_33160;(statearr_33163[(7)] = inst_33120);
(statearr_33163[(8)] = inst_33121);
return statearr_33163;
})();var statearr_33164_33192 = state_33160__$1;(statearr_33164_33192[(2)] = null);
(statearr_33164_33192[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33161 === (4)))
{var inst_33124 = (state_33160[(9)]);var inst_33124__$1 = (state_33160[(2)]);var inst_33125 = (inst_33124__$1 == null);var inst_33126 = cljs.core.not.call(null,inst_33125);var state_33160__$1 = (function (){var statearr_33165 = state_33160;(statearr_33165[(9)] = inst_33124__$1);
return statearr_33165;
})();if(inst_33126)
{var statearr_33166_33193 = state_33160__$1;(statearr_33166_33193[(1)] = (5));
} else
{var statearr_33167_33194 = state_33160__$1;(statearr_33167_33194[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33161 === (15)))
{var inst_33150 = (state_33160[(2)]);var state_33160__$1 = state_33160;var statearr_33168_33195 = state_33160__$1;(statearr_33168_33195[(2)] = inst_33150);
(statearr_33168_33195[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33161 === (13)))
{var state_33160__$1 = state_33160;var statearr_33169_33196 = state_33160__$1;(statearr_33169_33196[(2)] = null);
(statearr_33169_33196[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33161 === (6)))
{var inst_33120 = (state_33160[(7)]);var inst_33145 = inst_33120.length;var inst_33146 = (inst_33145 > (0));var state_33160__$1 = state_33160;if(cljs.core.truth_(inst_33146))
{var statearr_33170_33197 = state_33160__$1;(statearr_33170_33197[(1)] = (12));
} else
{var statearr_33171_33198 = state_33160__$1;(statearr_33171_33198[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33161 === (3)))
{var inst_33158 = (state_33160[(2)]);var state_33160__$1 = state_33160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33160__$1,inst_33158);
} else
{if((state_val_33161 === (12)))
{var inst_33120 = (state_33160[(7)]);var inst_33148 = cljs.core.vec.call(null,inst_33120);var state_33160__$1 = state_33160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33160__$1,(15),out,inst_33148);
} else
{if((state_val_33161 === (2)))
{var state_33160__$1 = state_33160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33160__$1,(4),ch);
} else
{if((state_val_33161 === (11)))
{var inst_33128 = (state_33160[(10)]);var inst_33124 = (state_33160[(9)]);var inst_33138 = (state_33160[(2)]);var inst_33139 = [];var inst_33140 = inst_33139.push(inst_33124);var inst_33120 = inst_33139;var inst_33121 = inst_33128;var state_33160__$1 = (function (){var statearr_33172 = state_33160;(statearr_33172[(11)] = inst_33140);
(statearr_33172[(7)] = inst_33120);
(statearr_33172[(8)] = inst_33121);
(statearr_33172[(12)] = inst_33138);
return statearr_33172;
})();var statearr_33173_33199 = state_33160__$1;(statearr_33173_33199[(2)] = null);
(statearr_33173_33199[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33161 === (9)))
{var inst_33120 = (state_33160[(7)]);var inst_33136 = cljs.core.vec.call(null,inst_33120);var state_33160__$1 = state_33160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33160__$1,(11),out,inst_33136);
} else
{if((state_val_33161 === (5)))
{var inst_33128 = (state_33160[(10)]);var inst_33124 = (state_33160[(9)]);var inst_33121 = (state_33160[(8)]);var inst_33128__$1 = f.call(null,inst_33124);var inst_33129 = cljs.core._EQ_.call(null,inst_33128__$1,inst_33121);var inst_33130 = cljs.core.keyword_identical_QMARK_.call(null,inst_33121,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_33131 = (inst_33129) || (inst_33130);var state_33160__$1 = (function (){var statearr_33174 = state_33160;(statearr_33174[(10)] = inst_33128__$1);
return statearr_33174;
})();if(cljs.core.truth_(inst_33131))
{var statearr_33175_33200 = state_33160__$1;(statearr_33175_33200[(1)] = (8));
} else
{var statearr_33176_33201 = state_33160__$1;(statearr_33176_33201[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33161 === (14)))
{var inst_33153 = (state_33160[(2)]);var inst_33154 = cljs.core.async.close_BANG_.call(null,out);var state_33160__$1 = (function (){var statearr_33178 = state_33160;(statearr_33178[(13)] = inst_33153);
return statearr_33178;
})();var statearr_33179_33202 = state_33160__$1;(statearr_33179_33202[(2)] = inst_33154);
(statearr_33179_33202[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33161 === (10)))
{var inst_33143 = (state_33160[(2)]);var state_33160__$1 = state_33160;var statearr_33180_33203 = state_33160__$1;(statearr_33180_33203[(2)] = inst_33143);
(statearr_33180_33203[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33161 === (8)))
{var inst_33128 = (state_33160[(10)]);var inst_33124 = (state_33160[(9)]);var inst_33120 = (state_33160[(7)]);var inst_33133 = inst_33120.push(inst_33124);var tmp33177 = inst_33120;var inst_33120__$1 = tmp33177;var inst_33121 = inst_33128;var state_33160__$1 = (function (){var statearr_33181 = state_33160;(statearr_33181[(14)] = inst_33133);
(statearr_33181[(7)] = inst_33120__$1);
(statearr_33181[(8)] = inst_33121);
return statearr_33181;
})();var statearr_33182_33204 = state_33160__$1;(statearr_33182_33204[(2)] = null);
(statearr_33182_33204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10131__auto___33190,out))
;return ((function (switch__10116__auto__,c__10131__auto___33190,out){
return (function() {
var state_machine__10117__auto__ = null;
var state_machine__10117__auto____0 = (function (){var statearr_33186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33186[(0)] = state_machine__10117__auto__);
(statearr_33186[(1)] = (1));
return statearr_33186;
});
var state_machine__10117__auto____1 = (function (state_33160){while(true){
var ret_value__10118__auto__ = (function (){try{while(true){
var result__10119__auto__ = switch__10116__auto__.call(null,state_33160);if(cljs.core.keyword_identical_QMARK_.call(null,result__10119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10119__auto__;
}
break;
}
}catch (e33187){if((e33187 instanceof Object))
{var ex__10120__auto__ = e33187;var statearr_33188_33205 = state_33160;(statearr_33188_33205[(5)] = ex__10120__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33160);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e33187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33206 = state_33160;
state_33160 = G__33206;
continue;
}
} else
{return ret_value__10118__auto__;
}
break;
}
});
state_machine__10117__auto__ = function(state_33160){
switch(arguments.length){
case 0:
return state_machine__10117__auto____0.call(this);
case 1:
return state_machine__10117__auto____1.call(this,state_33160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10117__auto____0;
state_machine__10117__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10117__auto____1;
return state_machine__10117__auto__;
})()
;})(switch__10116__auto__,c__10131__auto___33190,out))
})();var state__10133__auto__ = (function (){var statearr_33189 = f__10132__auto__.call(null);(statearr_33189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10131__auto___33190);
return statearr_33189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10133__auto__);
});})(c__10131__auto___33190,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map