// Compiled by ClojureScript 0.0-2261
goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2261";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",-151457939),cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Keyword(null,"readably","readably",1129599760),cljs.core._STAR_print_readably_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"dup","dup",556298533),cljs.core._STAR_print_dup_STAR_,new cljs.core.Keyword(null,"print-length","print-length",1931866356),cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){cljs.core._STAR_print_newline_STAR_ = false;
return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29034__delegate = function (args){return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29034 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29034__delegate.call(this,args);};
G__29034.cljs$lang$maxFixedArity = 0;
G__29034.cljs$lang$applyTo = (function (arglist__29035){
var args = cljs.core.seq(arglist__29035);
return G__29034__delegate(args);
});
G__29034.cljs$core$IFn$_invoke$arity$variadic = G__29034__delegate;
return G__29034;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){return (x != null && x !== false);
});
cljs.core.not_native = null;
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Returns true if x is not nil, false otherwise.
*/
cljs.core.some_QMARK_ = (function some_QMARK_(x){return !((x == null));
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){if(!((x == null)))
{return (x.constructor === Object);
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){return goog.isString(x);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){var x__$1 = (((x == null))?null:x);if((p[goog.typeOf(x__$1)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){var ty = cljs.core.type.call(null,obj);var ty__$1 = (cljs.core.truth_((function (){var and__7934__auto__ = ty;if(cljs.core.truth_(and__7934__auto__))
{return ty.cljs$lang$type;
} else
{return and__7934__auto__;
}
})())?ty.cljs$lang$ctorStr:goog.typeOf(obj));return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){var temp__4124__auto__ = ty.cljs$lang$ctorStr;if(cljs.core.truth_(temp__4124__auto__))
{var s = temp__4124__auto__;return s;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ty));
}
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){return (new Array(size));
});
var make_array__2 = (function (type,size){return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){var len = arr.length;var new_arr = (new Array(len));var n__8802__auto___29036 = len;var i_29037 = (0);while(true){
if((i_29037 < n__8802__auto___29036))
{(new_arr[i_29037] = (arr[i_29037]));
{
var G__29038 = (i_29037 + (1));
i_29037 = G__29038;
continue;
}
} else
{}
break;
}
return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){return (array[i]);
});
var aget__3 = (function() { 
var G__29039__delegate = function (array,i,idxs){return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__29039 = function (array,i,var_args){
var idxs = null;if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29039__delegate.call(this,array,i,idxs);};
G__29039.cljs$lang$maxFixedArity = 2;
G__29039.cljs$lang$applyTo = (function (arglist__29040){
var array = cljs.core.first(arglist__29040);
arglist__29040 = cljs.core.next(arglist__29040);
var i = cljs.core.first(arglist__29040);
var idxs = cljs.core.rest(arglist__29040);
return G__29039__delegate(array,i,idxs);
});
G__29039.cljs$core$IFn$_invoke$arity$variadic = G__29039__delegate;
return G__29039;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){return (array[i] = val);
});
var aset__4 = (function() { 
var G__29041__delegate = function (array,idx,idx2,idxv){return cljs.core.apply.call(null,aset,(array[idx]),idx2,idxv);
};
var G__29041 = function (array,idx,idx2,var_args){
var idxv = null;if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29041__delegate.call(this,array,idx,idx2,idxv);};
G__29041.cljs$lang$maxFixedArity = 3;
G__29041.cljs$lang$applyTo = (function (arglist__29042){
var array = cljs.core.first(arglist__29042);
arglist__29042 = cljs.core.next(arglist__29042);
var idx = cljs.core.first(arglist__29042);
arglist__29042 = cljs.core.next(arglist__29042);
var idx2 = cljs.core.first(arglist__29042);
var idxv = cljs.core.rest(arglist__29042);
return G__29041__delegate(array,idx,idx2,idxv);
});
G__29041.cljs$core$IFn$_invoke$arity$variadic = G__29041__delegate;
return G__29041;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){return cljs.core.reduce.call(null,(function (a,x){a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.Fn = (function (){var obj29044 = {};return obj29044;
})();
cljs.core.IFn = (function (){var obj29046 = {};return obj29046;
})();
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._invoke[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._invoke["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICloneable = (function (){var obj29048 = {};return obj29048;
})();
cljs.core._clone = (function _clone(value){if((function (){var and__7934__auto__ = value;if(and__7934__auto__)
{return value.cljs$core$ICloneable$_clone$arity$1;
} else
{return and__7934__auto__;
}
})())
{return value.cljs$core$ICloneable$_clone$arity$1(value);
} else
{var x__8573__auto__ = (((value == null))?null:value);return (function (){var or__7946__auto__ = (cljs.core._clone[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._clone["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICloneable.-clone",value);
}
}
})().call(null,value);
}
});
cljs.core.ICounted = (function (){var obj29050 = {};return obj29050;
})();
cljs.core._count = (function _count(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._count[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._count["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = (function (){var obj29052 = {};return obj29052;
})();
cljs.core._empty = (function _empty(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._empty[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._empty["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = (function (){var obj29054 = {};return obj29054;
})();
cljs.core._conj = (function _conj(coll,o){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._conj[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._conj["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = (function (){var obj29056 = {};return obj29056;
})();
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._nth[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._nth["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._nth[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._nth["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = (function (){var obj29058 = {};return obj29058;
})();
cljs.core.ISeq = (function (){var obj29060 = {};return obj29060;
})();
cljs.core._first = (function _first(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._first[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._first["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._rest[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._rest["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = (function (){var obj29062 = {};return obj29062;
})();
cljs.core._next = (function _next(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._next[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._next["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = (function (){var obj29064 = {};return obj29064;
})();
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._lookup[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._lookup["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._lookup[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._lookup["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = (function (){var obj29066 = {};return obj29066;
})();
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._contains_key_QMARK_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._assoc[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._assoc["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = (function (){var obj29068 = {};return obj29068;
})();
cljs.core._dissoc = (function _dissoc(coll,k){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._dissoc[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._dissoc["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = (function (){var obj29070 = {};return obj29070;
})();
cljs.core._key = (function _key(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._key[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._key["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._val[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._val["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = (function (){var obj29072 = {};return obj29072;
})();
cljs.core._disjoin = (function _disjoin(coll,v){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._disjoin[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._disjoin["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = (function (){var obj29074 = {};return obj29074;
})();
cljs.core._peek = (function _peek(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._peek[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._peek["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._pop[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._pop["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = (function (){var obj29076 = {};return obj29076;
})();
cljs.core._assoc_n = (function _assoc_n(coll,n,val){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._assoc_n[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._assoc_n["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = (function (){var obj29078 = {};return obj29078;
})();
cljs.core._deref = (function _deref(o){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._deref[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._deref["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = (function (){var obj29080 = {};return obj29080;
})();
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._deref_with_timeout[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._deref_with_timeout["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = (function (){var obj29082 = {};return obj29082;
})();
cljs.core._meta = (function _meta(o){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._meta[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._meta["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = (function (){var obj29084 = {};return obj29084;
})();
cljs.core._with_meta = (function _with_meta(o,meta){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._with_meta[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._with_meta["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = (function (){var obj29086 = {};return obj29086;
})();
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._reduce[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._reduce["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._reduce[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._reduce["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = (function (){var obj29088 = {};return obj29088;
})();
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._kv_reduce[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._kv_reduce["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = (function (){var obj29090 = {};return obj29090;
})();
cljs.core._equiv = (function _equiv(o,other){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._equiv[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._equiv["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = (function (){var obj29092 = {};return obj29092;
})();
cljs.core._hash = (function _hash(o){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._hash[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._hash["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = (function (){var obj29094 = {};return obj29094;
})();
cljs.core._seq = (function _seq(o){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._seq[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._seq["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = (function (){var obj29096 = {};return obj29096;
})();
cljs.core.IList = (function (){var obj29098 = {};return obj29098;
})();
cljs.core.IRecord = (function (){var obj29100 = {};return obj29100;
})();
cljs.core.IReversible = (function (){var obj29102 = {};return obj29102;
})();
cljs.core._rseq = (function _rseq(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._rseq[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._rseq["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = (function (){var obj29104 = {};return obj29104;
})();
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._sorted_seq[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._sorted_seq["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._sorted_seq_from[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._sorted_seq_from["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._entry_key[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._entry_key["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._comparator[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._comparator["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IWriter = (function (){var obj29106 = {};return obj29106;
})();
cljs.core._write = (function _write(writer,s){if((function (){var and__7934__auto__ = writer;if(and__7934__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__7934__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__8573__auto__ = (((writer == null))?null:writer);return (function (){var or__7946__auto__ = (cljs.core._write[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._write["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){if((function (){var and__7934__auto__ = writer;if(and__7934__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__7934__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__8573__auto__ = (((writer == null))?null:writer);return (function (){var or__7946__auto__ = (cljs.core._flush[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._flush["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = (function (){var obj29108 = {};return obj29108;
})();
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._pr_writer[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._pr_writer["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = (function (){var obj29110 = {};return obj29110;
})();
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){if((function (){var and__7934__auto__ = d;if(and__7934__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__7934__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__8573__auto__ = (((d == null))?null:d);return (function (){var or__7946__auto__ = (cljs.core._realized_QMARK_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._realized_QMARK_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = (function (){var obj29112 = {};return obj29112;
})();
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._notify_watches[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._notify_watches["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._add_watch[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._add_watch["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){if((function (){var and__7934__auto__ = this$;if(and__7934__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__7934__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__8573__auto__ = (((this$ == null))?null:this$);return (function (){var or__7946__auto__ = (cljs.core._remove_watch[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._remove_watch["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = (function (){var obj29114 = {};return obj29114;
})();
cljs.core._as_transient = (function _as_transient(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._as_transient[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._as_transient["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = (function (){var obj29116 = {};return obj29116;
})();
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){if((function (){var and__7934__auto__ = tcoll;if(and__7934__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__7934__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__8573__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__7946__auto__ = (cljs.core._conj_BANG_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._conj_BANG_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){if((function (){var and__7934__auto__ = tcoll;if(and__7934__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__7934__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__8573__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__7946__auto__ = (cljs.core._persistent_BANG_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._persistent_BANG_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = (function (){var obj29118 = {};return obj29118;
})();
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){if((function (){var and__7934__auto__ = tcoll;if(and__7934__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__7934__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__8573__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__7946__auto__ = (cljs.core._assoc_BANG_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._assoc_BANG_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = (function (){var obj29120 = {};return obj29120;
})();
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){if((function (){var and__7934__auto__ = tcoll;if(and__7934__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__7934__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__8573__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__7946__auto__ = (cljs.core._dissoc_BANG_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._dissoc_BANG_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = (function (){var obj29122 = {};return obj29122;
})();
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){if((function (){var and__7934__auto__ = tcoll;if(and__7934__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__7934__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__8573__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__7946__auto__ = (cljs.core._assoc_n_BANG_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){if((function (){var and__7934__auto__ = tcoll;if(and__7934__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__7934__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__8573__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__7946__auto__ = (cljs.core._pop_BANG_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._pop_BANG_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = (function (){var obj29124 = {};return obj29124;
})();
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){if((function (){var and__7934__auto__ = tcoll;if(and__7934__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__7934__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__8573__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__7946__auto__ = (cljs.core._disjoin_BANG_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._disjoin_BANG_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = (function (){var obj29126 = {};return obj29126;
})();
cljs.core._compare = (function _compare(x,y){if((function (){var and__7934__auto__ = x;if(and__7934__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__7934__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__8573__auto__ = (((x == null))?null:x);return (function (){var or__7946__auto__ = (cljs.core._compare[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._compare["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = (function (){var obj29128 = {};return obj29128;
})();
cljs.core._drop_first = (function _drop_first(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._drop_first[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._drop_first["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = (function (){var obj29130 = {};return obj29130;
})();
cljs.core._chunked_first = (function _chunked_first(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._chunked_first[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._chunked_first["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._chunked_rest[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._chunked_rest["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = (function (){var obj29132 = {};return obj29132;
})();
cljs.core._chunked_next = (function _chunked_next(coll){if((function (){var and__7934__auto__ = coll;if(and__7934__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__7934__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__8573__auto__ = (((coll == null))?null:coll);return (function (){var or__7946__auto__ = (cljs.core._chunked_next[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._chunked_next["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INamed = (function (){var obj29134 = {};return obj29134;
})();
cljs.core._name = (function _name(x){if((function (){var and__7934__auto__ = x;if(and__7934__auto__)
{return x.cljs$core$INamed$_name$arity$1;
} else
{return and__7934__auto__;
}
})())
{return x.cljs$core$INamed$_name$arity$1(x);
} else
{var x__8573__auto__ = (((x == null))?null:x);return (function (){var or__7946__auto__ = (cljs.core._name[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._name["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INamed.-name",x);
}
}
})().call(null,x);
}
});
cljs.core._namespace = (function _namespace(x){if((function (){var and__7934__auto__ = x;if(and__7934__auto__)
{return x.cljs$core$INamed$_namespace$arity$1;
} else
{return and__7934__auto__;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(x);
} else
{var x__8573__auto__ = (((x == null))?null:x);return (function (){var or__7946__auto__ = (cljs.core._namespace[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._namespace["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INamed.-namespace",x);
}
}
})().call(null,x);
}
});

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return self__.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){return (new cljs.core.StringBufferWriter(sb));
});
/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));cljs.core._pr_writer.call(null,obj,writer,cljs.core.pr_opts.call(null));
cljs.core._flush.call(null,writer);
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
});
cljs.core.int_rotate_left = (function int_rotate_left(x,n){return ((x << n) | (x >>> (- n)));
});
if(typeof Math.imul !== 'undefined')
{cljs.core.imul = (function imul(a,b){return Math.imul(a,b);
});
} else
{cljs.core.imul = (function imul(a,b){var ah = ((a >>> (16)) & (65535));var al = (a & (65535));var bh = ((b >>> (16)) & (65535));var bl = (b & (65535));return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function m3_mix_K1(k1){return cljs.core.imul.call(null,cljs.core.int_rotate_left.call(null,cljs.core.imul.call(null,k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function m3_mix_H1(h1,k1){return (cljs.core.imul.call(null,cljs.core.int_rotate_left.call(null,(h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function m3_fmix(h1,len){var h1__$1 = h1;var h1__$2 = (h1__$1 ^ len);var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));var h1__$4 = cljs.core.imul.call(null,h1__$3,(2246822507));var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));var h1__$6 = cljs.core.imul.call(null,h1__$5,(3266489909));var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));return h1__$7;
});
cljs.core.m3_hash_int = (function m3_hash_int(in$){if((in$ === (0)))
{return in$;
} else
{var k1 = cljs.core.m3_mix_K1.call(null,in$);var h1 = cljs.core.m3_mix_H1.call(null,cljs.core.m3_seed,k1);return cljs.core.m3_fmix.call(null,h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function m3_hash_unencoded_chars(in$){var h1 = (function (){var i = (1);var h1 = cljs.core.m3_seed;while(true){
if((i < in$.length))
{{
var G__29135 = (i + (2));
var G__29136 = cljs.core.m3_mix_H1.call(null,h1,cljs.core.m3_mix_K1.call(null,(in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__29135;
h1 = G__29136;
continue;
}
} else
{return h1;
}
break;
}
})();var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1.call(null,in$.charCodeAt((in$.length - (1))))):h1);return cljs.core.m3_fmix.call(null,h1__$1,cljs.core.imul.call(null,(2),in$.length));
});
cljs.core.string_hash_cache = (function (){var obj29138 = {};return obj29138;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){if(!((s == null)))
{var len = s.length;if((len > (0)))
{var i = (0);var hash = (0);while(true){
if((i < len))
{{
var G__29139 = (i + (1));
var G__29140 = (cljs.core.imul.call(null,(31),hash) + s.charCodeAt(i));
i = G__29139;
hash = G__29140;
continue;
}
} else
{return hash;
}
break;
}
} else
{return (0);
}
} else
{return (0);
}
});
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){var h = cljs.core.hash_string_STAR_.call(null,k);(cljs.core.string_hash_cache[k] = h);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));
return h;
});
cljs.core.hash_string = (function hash_string(k){if((cljs.core.string_hash_cache_count > (255)))
{cljs.core.string_hash_cache = (function (){var obj29144 = {};return obj29144;
})();
cljs.core.string_hash_cache_count = (0);
} else
{}
var h = (cljs.core.string_hash_cache[k]);if(typeof h === 'number')
{return h;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function hash(o){if((function (){var G__29146 = o;if(G__29146)
{var bit__8589__auto__ = (G__29146.cljs$lang$protocol_mask$partition0$ & (4194304));if((bit__8589__auto__) || (G__29146.cljs$core$IHash$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._hash.call(null,o);
} else
{if(typeof o === 'number')
{return (Math.floor(o) % (2147483647));
} else
{if(o === true)
{return (1);
} else
{if(o === false)
{return (0);
} else
{if(typeof o === 'string')
{return cljs.core.m3_hash_int.call(null,cljs.core.hash_string.call(null,o));
} else
{if((o == null))
{return (0);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core._hash.call(null,o);
} else
{return null;
}
}
}
}
}
}
}
});
cljs.core.hash_combine = (function hash_combine(seed,hash){return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){return cljs.core.hash_combine.call(null,cljs.core.m3_hash_unencoded_chars.call(null,sym.name),cljs.core.hash_string.call(null,sym.ns));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){if(cljs.core.truth_(cljs.core._EQ_.call(null,a,b)))
{return (0);
} else
{if(cljs.core.truth_((function (){var and__7934__auto__ = cljs.core.not.call(null,a.ns);if(and__7934__auto__)
{return b.ns;
} else
{return and__7934__auto__;
}
})()))
{return (-1);
} else
{if(cljs.core.truth_(a.ns))
{if(cljs.core.not.call(null,b.ns))
{return (1);
} else
{var nsc = cljs.core.compare.call(null,a.ns,b.ns);if((nsc === (0)))
{return cljs.core.compare.call(null,a.name,b.name);
} else
{return nsc;
}
}
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.compare.call(null,a.name,b.name);
} else
{return null;
}
}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.cljs$lang$type = true;
cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";
cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/Symbol");
});
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write.call(null,writer,self__.str);
});
cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){var self__ = this;
var sym__$1 = this;var h__8357__auto__ = self__._hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_symbol.call(null,sym__$1);self__._hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});
cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.Symbol.prototype.call = (function() {
var G__29148 = null;
var G__29148__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.call(null,coll,sym,null);
});
var G__29148__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.call(null,coll,sym,not_found);
});
G__29148 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__29148__2.call(this,self__,coll);
case 3:
return G__29148__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29148;
})()
;
cljs.core.Symbol.prototype.apply = (function (self__,args29147){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29147)));
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var sym = this;return cljs.core._lookup.call(null,coll,sym,null);
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var sym = this;return cljs.core._lookup.call(null,coll,sym,not_found);
});
cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Symbol))
{return (self__.str === other.str);
} else
{return false;
}
});
cljs.core.Symbol.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.str;
});
cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){if((name instanceof cljs.core.Symbol))
{return name;
} else
{return symbol.call(null,null,name);
}
});
var symbol__2 = (function (ns,name){var sym_str = ((!((ns == null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;
cljs.core.clone = (function clone(value){return cljs.core._clone.call(null,value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){var G__29150 = value;if(G__29150)
{var bit__8596__auto__ = (G__29150.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__8596__auto__) || (G__29150.cljs$core$ICloneable$))
{return true;
} else
{if((!G__29150.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__29150);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__29150);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){if((coll == null))
{return null;
} else
{if((function (){var G__29152 = coll;if(G__29152)
{var bit__8589__auto__ = (G__29152.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__8589__auto__) || (G__29152.cljs$core$ISeqable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._seq.call(null,coll);
} else
{if(coll instanceof Array)
{if((coll.length === (0)))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,(0)));
}
} else
{if(typeof coll === 'string')
{if((coll.length === (0)))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,(0)));
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,coll))
{return cljs.core._seq.call(null,coll);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)+" is not ISeqable")));
} else
{return null;
}
}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){if((coll == null))
{return null;
} else
{if((function (){var G__29154 = coll;if(G__29154)
{var bit__8589__auto__ = (G__29154.cljs$lang$protocol_mask$partition0$ & (64));if((bit__8589__auto__) || (G__29154.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s = cljs.core.seq.call(null,coll);if((s == null))
{return null;
} else
{return cljs.core._first.call(null,s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){if(!((coll == null)))
{if((function (){var G__29156 = coll;if(G__29156)
{var bit__8589__auto__ = (G__29156.cljs$lang$protocol_mask$partition0$ & (64));if((bit__8589__auto__) || (G__29156.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s = cljs.core.seq.call(null,coll);if(s)
{return cljs.core._rest.call(null,s);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){if((coll == null))
{return null;
} else
{if((function (){var G__29158 = coll;if(G__29158)
{var bit__8589__auto__ = (G__29158.cljs$lang$protocol_mask$partition0$ & (128));if((bit__8589__auto__) || (G__29158.cljs$core$INext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){return true;
});
var _EQ___2 = (function (x,y){if((x == null))
{return (y == null);
} else
{return ((x === y)) || (cljs.core._equiv.call(null,x,y));
}
});
var _EQ___3 = (function() { 
var G__29159__delegate = function (x,y,more){while(true){
if(_EQ_.call(null,x,y))
{if(cljs.core.next.call(null,more))
{{
var G__29160 = y;
var G__29161 = cljs.core.first.call(null,more);
var G__29162 = cljs.core.next.call(null,more);
x = G__29160;
y = G__29161;
more = G__29162;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__29159 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29159__delegate.call(this,x,y,more);};
G__29159.cljs$lang$maxFixedArity = 2;
G__29159.cljs$lang$applyTo = (function (arglist__29163){
var x = cljs.core.first(arglist__29163);
arglist__29163 = cljs.core.next(arglist__29163);
var y = cljs.core.first(arglist__29163);
var more = cljs.core.rest(arglist__29163);
return G__29159__delegate(x,y,more);
});
G__29159.cljs$core$IFn$_invoke$arity$variadic = G__29159__delegate;
return G__29159;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;
/**
* Mix final collection hash for ordered or unordered collections.
* hash-basis is the combined collection hash, count is the number
* of elements included in the basis. Note this is the hash code
* consistent with =, different from .hashCode.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.mix_collection_hash = (function mix_collection_hash(hash_basis,count){var h1 = cljs.core.m3_seed;var k1 = cljs.core.m3_mix_K1.call(null,hash_basis);var h1__$1 = cljs.core.m3_mix_H1.call(null,h1,k1);return cljs.core.m3_fmix.call(null,h1__$1,count);
});
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_ordered_coll = (function hash_ordered_coll(coll){var n = (0);var hash_code = (1);var coll__$1 = cljs.core.seq.call(null,coll);while(true){
if(!((coll__$1 == null)))
{{
var G__29164 = (n + (1));
var G__29165 = ((cljs.core.imul.call(null,(31),hash_code) + cljs.core.hash.call(null,cljs.core.first.call(null,coll__$1))) | (0));
var G__29166 = cljs.core.next.call(null,coll__$1);
n = G__29164;
hash_code = G__29165;
coll__$1 = G__29166;
continue;
}
} else
{return cljs.core.mix_collection_hash.call(null,hash_code,n);
}
break;
}
});
/**
* Returns the hash code, consistent with =, for an external unordered
* collection implementing Iterable. For maps, the iterator should
* return map entries whose hash is computed as
* (hash-ordered-coll [k v]).
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_unordered_coll = (function hash_unordered_coll(coll){var n = (0);var hash_code = (0);var coll__$1 = cljs.core.seq.call(null,coll);while(true){
if(!((coll__$1 == null)))
{{
var G__29167 = (n + (1));
var G__29168 = ((hash_code + cljs.core.hash.call(null,cljs.core.first.call(null,coll__$1))) | (0));
var G__29169 = cljs.core.next.call(null,coll__$1);
n = G__29167;
hash_code = G__29168;
coll__$1 = G__29169;
continue;
}
} else
{return cljs.core.mix_collection_hash.call(null,hash_code,n);
}
break;
}
});
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var o__$1 = this;return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){return (x === o);
}));
(cljs.core.IMeta["function"] = true);
(cljs.core._meta["function"] = (function (_){return null;
}));
(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){var self__ = this;
var o__$1 = this;return self__.val;
});
cljs.core.__GT_Reduced = (function __GT_Reduced(val){return (new cljs.core.Reduced(val));
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){return (r instanceof cljs.core.Reduced);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){var cnt = cljs.core._count.call(null,cicoll);if((cnt === (0)))
{return f.call(null);
} else
{var val = cljs.core._nth.call(null,cicoll,(0));var n = (1);while(true){
if((n < cnt))
{var nval = f.call(null,val,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__29170 = nval;
var G__29171 = (n + (1));
val = G__29170;
n = G__29171;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){var cnt = cljs.core._count.call(null,cicoll);var val__$1 = val;var n = (0);while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__29172 = nval;
var G__29173 = (n + (1));
val__$1 = G__29172;
n = G__29173;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){var cnt = cljs.core._count.call(null,cicoll);var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__29174 = nval;
var G__29175 = (n + (1));
val__$1 = G__29174;
n = G__29175;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){var cnt = arr.length;if((arr.length === (0)))
{return f.call(null);
} else
{var val = (arr[(0)]);var n = (1);while(true){
if((n < cnt))
{var nval = f.call(null,val,(arr[n]));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__29176 = nval;
var G__29177 = (n + (1));
val = G__29176;
n = G__29177;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){var cnt = arr.length;var val__$1 = val;var n = (0);while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__29178 = nval;
var G__29179 = (n + (1));
val__$1 = G__29178;
n = G__29179;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){var cnt = arr.length;var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__29180 = nval;
var G__29181 = (n + (1));
val__$1 = G__29180;
n = G__29181;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){var G__29183 = x;if(G__29183)
{var bit__8596__auto__ = (G__29183.cljs$lang$protocol_mask$partition0$ & (2));if((bit__8596__auto__) || (G__29183.cljs$core$ICounted$))
{return true;
} else
{if((!G__29183.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,G__29183);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,G__29183);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){var G__29185 = x;if(G__29185)
{var bit__8596__auto__ = (G__29185.cljs$lang$protocol_mask$partition0$ & (16));if((bit__8596__auto__) || (G__29185.cljs$core$IIndexed$))
{return true;
} else
{if((!G__29185.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,G__29185);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,G__29185);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + (1)) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr.length - self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var c = cljs.core._count.call(null,coll__$1);if((c > (0)))
{return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll.call(null,coll__$1);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.call(null,self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.call(null,self__.arr,f,start,self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr[self__.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + (1)) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){return (new cljs.core.IndexedSeq(arr,i));
});
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){return prim_seq.call(null,prim,(0));
});
var prim_seq__2 = (function (prim,i){if((i < prim.length))
{return (new cljs.core.IndexedSeq(prim,i));
} else
{return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){return cljs.core.prim_seq.call(null,array,(0));
});
var array_seq__2 = (function (array,i){return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});
cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > (0)))
{return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else
{return null;
}
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.i + (1));
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll.call(null,coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){var self__ = this;
var col__$1 = this;return cljs.core.seq_reduce.call(null,f,col__$1);
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){var self__ = this;
var col__$1 = this;return cljs.core.seq_reduce.call(null,f,start,col__$1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,self__.ci,self__.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > (0)))
{return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){return (new cljs.core.RSeq(ci,i,meta));
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){while(true){
var sn = cljs.core.next.call(null,s);if(!((sn == null)))
{{
var G__29186 = sn;
s = G__29186;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){if(!((coll == null)))
{return cljs.core._conj.call(null,coll,x);
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__29187__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__29188 = conj.call(null,coll,x);
var G__29189 = cljs.core.first.call(null,xs);
var G__29190 = cljs.core.next.call(null,xs);
coll = G__29188;
x = G__29189;
xs = G__29190;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__29187 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29187__delegate.call(this,coll,x,xs);};
G__29187.cljs$lang$maxFixedArity = 2;
G__29187.cljs$lang$applyTo = (function (arglist__29191){
var coll = cljs.core.first(arglist__29191);
arglist__29191 = cljs.core.next(arglist__29191);
var x = cljs.core.first(arglist__29191);
var xs = cljs.core.rest(arglist__29191);
return G__29187__delegate(coll,x,xs);
});
G__29187.cljs$core$IFn$_invoke$arity$variadic = G__29187__delegate;
return G__29187;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){if((coll == null))
{return null;
} else
{return cljs.core._empty.call(null,coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){var s = cljs.core.seq.call(null,coll);var acc = (0);while(true){
if(cljs.core.counted_QMARK_.call(null,s))
{return (acc + cljs.core._count.call(null,s));
} else
{{
var G__29192 = cljs.core.next.call(null,s);
var G__29193 = (acc + (1));
s = G__29192;
acc = G__29193;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){if(!((coll == null)))
{if((function (){var G__29195 = coll;if(G__29195)
{var bit__8589__auto__ = (G__29195.cljs$lang$protocol_mask$partition0$ & (2));if((bit__8589__auto__) || (G__29195.cljs$core$ICounted$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._count.call(null,coll);
} else
{if(coll instanceof Array)
{return coll.length;
} else
{if(typeof coll === 'string')
{return coll.length;
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,coll))
{return cljs.core._count.call(null,coll);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.accumulating_seq_count.call(null,coll);
} else
{return null;
}
}
}
}
}
} else
{return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === (0)))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__29196 = cljs.core.next.call(null,coll);
var G__29197 = (n - (1));
coll = G__29196;
n = G__29197;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){while(true){
if((coll == null))
{return not_found;
} else
{if((n === (0)))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__29198 = cljs.core.next.call(null,coll);
var G__29199 = (n - (1));
var G__29200 = not_found;
coll = G__29198;
n = G__29199;
not_found = G__29200;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return not_found;
} else
{return null;
}
}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){if(!(typeof n === 'number'))
{throw (new Error("index argument to nth must be a number"));
} else
{if((coll == null))
{return coll;
} else
{if((function (){var G__29205 = coll;if(G__29205)
{var bit__8589__auto__ = (G__29205.cljs$lang$protocol_mask$partition0$ & (16));if((bit__8589__auto__) || (G__29205.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if((function (){var G__29206 = coll;if(G__29206)
{var bit__8596__auto__ = (G__29206.cljs$lang$protocol_mask$partition0$ & (64));if((bit__8596__auto__) || (G__29206.cljs$core$ISeq$))
{return true;
} else
{if((!G__29206.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__29206);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__29206);
}
})())
{return cljs.core.linear_traversal_nth.call(null,coll,n);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw (new Error(("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str.call(null,cljs.core.type.call(null,coll))))));
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
});
var nth__3 = (function (coll,n,not_found){if(!(typeof n === 'number'))
{throw (new Error("index argument to nth must be a number."));
} else
{if((coll == null))
{return not_found;
} else
{if((function (){var G__29207 = coll;if(G__29207)
{var bit__8589__auto__ = (G__29207.cljs$lang$protocol_mask$partition0$ & (16));if((bit__8589__auto__) || (G__29207.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if((function (){var G__29208 = coll;if(G__29208)
{var bit__8596__auto__ = (G__29208.cljs$lang$protocol_mask$partition0$ & (64));if((bit__8596__auto__) || (G__29208.cljs$core$ISeq$))
{return true;
} else
{if((!G__29208.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__29208);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__29208);
}
})())
{return cljs.core.linear_traversal_nth.call(null,coll,n,not_found);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw (new Error(("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str.call(null,cljs.core.type.call(null,coll))))));
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
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){if((o == null))
{return null;
} else
{if((function (){var G__29211 = o;if(G__29211)
{var bit__8589__auto__ = (G__29211.cljs$lang$protocol_mask$partition0$ & (256));if((bit__8589__auto__) || (G__29211.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._lookup.call(null,o,k);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,o))
{return cljs.core._lookup.call(null,o,k);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return null;
} else
{return null;
}
}
}
}
}
}
});
var get__3 = (function (o,k,not_found){if(!((o == null)))
{if((function (){var G__29212 = o;if(G__29212)
{var bit__8589__auto__ = (G__29212.cljs$lang$protocol_mask$partition0$ & (256));if((bit__8589__auto__) || (G__29212.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._lookup.call(null,o,k,not_found);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,o))
{return cljs.core._lookup.call(null,o,k,not_found);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return not_found;
} else
{return null;
}
}
}
}
}
} else
{return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){if(!((coll == null)))
{return cljs.core._assoc.call(null,coll,k,v);
} else
{return cljs.core.PersistentHashMap.fromArrays.call(null,[k],[v]);
}
});
var assoc__4 = (function() { 
var G__29213__delegate = function (coll,k,v,kvs){while(true){
var ret = assoc.call(null,coll,k,v);if(cljs.core.truth_(kvs))
{{
var G__29214 = ret;
var G__29215 = cljs.core.first.call(null,kvs);
var G__29216 = cljs.core.second.call(null,kvs);
var G__29217 = cljs.core.nnext.call(null,kvs);
coll = G__29214;
k = G__29215;
v = G__29216;
kvs = G__29217;
continue;
}
} else
{return ret;
}
break;
}
};
var G__29213 = function (coll,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29213__delegate.call(this,coll,k,v,kvs);};
G__29213.cljs$lang$maxFixedArity = 3;
G__29213.cljs$lang$applyTo = (function (arglist__29218){
var coll = cljs.core.first(arglist__29218);
arglist__29218 = cljs.core.next(arglist__29218);
var k = cljs.core.first(arglist__29218);
arglist__29218 = cljs.core.next(arglist__29218);
var v = cljs.core.first(arglist__29218);
var kvs = cljs.core.rest(arglist__29218);
return G__29213__delegate(coll,k,v,kvs);
});
G__29213.cljs$core$IFn$_invoke$arity$variadic = G__29213__delegate;
return G__29213;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){return coll;
});
var dissoc__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._dissoc.call(null,coll,k);
}
});
var dissoc__3 = (function() { 
var G__29219__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = dissoc.call(null,coll,k);if(cljs.core.truth_(ks))
{{
var G__29220 = ret;
var G__29221 = cljs.core.first.call(null,ks);
var G__29222 = cljs.core.next.call(null,ks);
coll = G__29220;
k = G__29221;
ks = G__29222;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__29219 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29219__delegate.call(this,coll,k,ks);};
G__29219.cljs$lang$maxFixedArity = 2;
G__29219.cljs$lang$applyTo = (function (arglist__29223){
var coll = cljs.core.first(arglist__29223);
arglist__29223 = cljs.core.next(arglist__29223);
var k = cljs.core.first(arglist__29223);
var ks = cljs.core.rest(arglist__29223);
return G__29219__delegate(coll,k,ks);
});
G__29219.cljs$core$IFn$_invoke$arity$variadic = G__29219__delegate;
return G__29219;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){var or__7946__auto__ = goog.isFunction(f);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var G__29227 = f;if(G__29227)
{var bit__8596__auto__ = null;if(cljs.core.truth_((function (){var or__7946__auto____$1 = bit__8596__auto__;if(cljs.core.truth_(or__7946__auto____$1))
{return or__7946__auto____$1;
} else
{return G__29227.cljs$core$Fn$;
}
})()))
{return true;
} else
{if((!G__29227.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,G__29227);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,G__29227);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.MetaFn.cljs$lang$type = true;
cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";
cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/MetaFn");
});
cljs.core.MetaFn.prototype.call = (function() {
var G__29229 = null;
var G__29229__1 = (function (self__){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null);
});
var G__29229__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a);
});
var G__29229__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b);
});
var G__29229__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c);
});
var G__29229__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d);
});
var G__29229__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e);
});
var G__29229__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f);
});
var G__29229__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g);
});
var G__29229__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h);
});
var G__29229__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i);
});
var G__29229__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j);
});
var G__29229__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k);
});
var G__29229__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l);
});
var G__29229__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);
});
var G__29229__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});
var G__29229__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});
var G__29229__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
var G__29229__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});
var G__29229__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__29229__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__29229__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__29229__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.apply.call(null,self__.afn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__29229 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__29229__1.call(this,self__);
case 2:
return G__29229__2.call(this,self__,a);
case 3:
return G__29229__3.call(this,self__,a,b);
case 4:
return G__29229__4.call(this,self__,a,b,c);
case 5:
return G__29229__5.call(this,self__,a,b,c,d);
case 6:
return G__29229__6.call(this,self__,a,b,c,d,e);
case 7:
return G__29229__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__29229__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__29229__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__29229__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__29229__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__29229__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__29229__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__29229__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__29229__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__29229__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__29229__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__29229__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__29229__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__29229__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__29229__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__29229__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29229;
})()
;
cljs.core.MetaFn.prototype.apply = (function (self__,args29228){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29228)));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var _ = this;return self__.afn.call(null);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var _ = this;return self__.afn.call(null,a);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var _ = this;return self__.afn.call(null,a,b);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var _ = this;return self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var _ = this;return cljs.core.apply.call(null,self__.afn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;
cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.MetaFn(self__.afn,new_meta));
});
cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){return (new cljs.core.MetaFn(afn,meta));
});
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){if((cljs.core.fn_QMARK_.call(null,o)) && (!((function (){var G__29233 = o;if(G__29233)
{var bit__8596__auto__ = (G__29233.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__8596__auto__) || (G__29233.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__29233.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__29233);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__29233);
}
})())))
{return (new cljs.core.MetaFn(o,meta));
} else
{if((o == null))
{return null;
} else
{return cljs.core._with_meta.call(null,o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){if((function (){var and__7934__auto__ = !((o == null));if(and__7934__auto__)
{var G__29237 = o;if(G__29237)
{var bit__8596__auto__ = (G__29237.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__8596__auto__) || (G__29237.cljs$core$IMeta$))
{return true;
} else
{if((!G__29237.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__29237);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__29237);
}
} else
{return and__7934__auto__;
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){if((coll == null))
{return null;
} else
{return cljs.core._peek.call(null,coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){if((coll == null))
{return null;
} else
{return cljs.core._pop.call(null,coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){return coll;
});
var disj__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._disjoin.call(null,coll,k);
}
});
var disj__3 = (function() { 
var G__29238__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = disj.call(null,coll,k);if(cljs.core.truth_(ks))
{{
var G__29239 = ret;
var G__29240 = cljs.core.first.call(null,ks);
var G__29241 = cljs.core.next.call(null,ks);
coll = G__29239;
k = G__29240;
ks = G__29241;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__29238 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29238__delegate.call(this,coll,k,ks);};
G__29238.cljs$lang$maxFixedArity = 2;
G__29238.cljs$lang$applyTo = (function (arglist__29242){
var coll = cljs.core.first(arglist__29242);
arglist__29242 = cljs.core.next(arglist__29242);
var k = cljs.core.first(arglist__29242);
var ks = cljs.core.rest(arglist__29242);
return G__29238__delegate(coll,k,ks);
});
G__29238.cljs$core$IFn$_invoke$arity$variadic = G__29238__delegate;
return G__29238;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){return ((coll == null)) || (cljs.core.not.call(null,cljs.core.seq.call(null,coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){if((x == null))
{return false;
} else
{var G__29244 = x;if(G__29244)
{var bit__8596__auto__ = (G__29244.cljs$lang$protocol_mask$partition0$ & (8));if((bit__8596__auto__) || (G__29244.cljs$core$ICollection$))
{return true;
} else
{if((!G__29244.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__29244);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__29244);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){if((x == null))
{return false;
} else
{var G__29246 = x;if(G__29246)
{var bit__8596__auto__ = (G__29246.cljs$lang$protocol_mask$partition0$ & (4096));if((bit__8596__auto__) || (G__29246.cljs$core$ISet$))
{return true;
} else
{if((!G__29246.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__29246);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__29246);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){var G__29248 = x;if(G__29248)
{var bit__8596__auto__ = (G__29248.cljs$lang$protocol_mask$partition0$ & (512));if((bit__8596__auto__) || (G__29248.cljs$core$IAssociative$))
{return true;
} else
{if((!G__29248.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,G__29248);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,G__29248);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){var G__29250 = x;if(G__29250)
{var bit__8596__auto__ = (G__29250.cljs$lang$protocol_mask$partition0$ & (16777216));if((bit__8596__auto__) || (G__29250.cljs$core$ISequential$))
{return true;
} else
{if((!G__29250.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__29250);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__29250);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){var G__29252 = x;if(G__29252)
{var bit__8596__auto__ = (G__29252.cljs$lang$protocol_mask$partition0$ & (268435456));if((bit__8596__auto__) || (G__29252.cljs$core$ISorted$))
{return true;
} else
{if((!G__29252.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISorted,G__29252);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISorted,G__29252);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){var G__29254 = x;if(G__29254)
{var bit__8596__auto__ = (G__29254.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__8596__auto__) || (G__29254.cljs$core$IReduce$))
{return true;
} else
{if((!G__29254.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,G__29254);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,G__29254);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){if((x == null))
{return false;
} else
{var G__29256 = x;if(G__29256)
{var bit__8596__auto__ = (G__29256.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__8596__auto__) || (G__29256.cljs$core$IMap$))
{return true;
} else
{if((!G__29256.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__29256);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__29256);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){var G__29258 = x;if(G__29258)
{var bit__8596__auto__ = (G__29258.cljs$lang$protocol_mask$partition0$ & (16384));if((bit__8596__auto__) || (G__29258.cljs$core$IVector$))
{return true;
} else
{if((!G__29258.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__29258);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__29258);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){var G__29260 = x;if(G__29260)
{var bit__8589__auto__ = (G__29260.cljs$lang$protocol_mask$partition1$ & (512));if((bit__8589__auto__) || (G__29260.cljs$core$IChunkedSeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){var obj29264 = {};return obj29264;
});
var js_obj__1 = (function() { 
var G__29265__delegate = function (keyvals){return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__29265 = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29265__delegate.call(this,keyvals);};
G__29265.cljs$lang$maxFixedArity = 0;
G__29265.cljs$lang$applyTo = (function (arglist__29266){
var keyvals = cljs.core.seq(arglist__29266);
return G__29265__delegate(keyvals);
});
G__29265.cljs$core$IFn$_invoke$arity$variadic = G__29265__delegate;
return G__29265;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){var keys = [];goog.object.forEach(obj,((function (keys){
return (function (val,key,obj__$1){return keys.push(key);
});})(keys))
);
return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){var i__$1 = i;var j__$1 = j;var len__$1 = len;while(true){
if((len__$1 === (0)))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__29267 = (i__$1 + (1));
var G__29268 = (j__$1 + (1));
var G__29269 = (len__$1 - (1));
i__$1 = G__29267;
j__$1 = G__29268;
len__$1 = G__29269;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){var i__$1 = (i + (len - (1)));var j__$1 = (j + (len - (1)));var len__$1 = len;while(true){
if((len__$1 === (0)))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__29270 = (i__$1 - (1));
var G__29271 = (j__$1 - (1));
var G__29272 = (len__$1 - (1));
i__$1 = G__29270;
j__$1 = G__29271;
len__$1 = G__29272;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj29274 = {};return obj29274;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){if((s == null))
{return false;
} else
{var G__29276 = s;if(G__29276)
{var bit__8596__auto__ = (G__29276.cljs$lang$protocol_mask$partition0$ & (64));if((bit__8596__auto__) || (G__29276.cljs$core$ISeq$))
{return true;
} else
{if((!G__29276.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__29276);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__29276);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){var G__29278 = s;if(G__29278)
{var bit__8596__auto__ = (G__29278.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__8596__auto__) || (G__29278.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29278.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29278);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29278);
}
});
cljs.core.boolean$ = (function boolean$(x){if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){var or__7946__auto__ = cljs.core.fn_QMARK_.call(null,f);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var G__29282 = f;if(G__29282)
{var bit__8596__auto__ = (G__29282.cljs$lang$protocol_mask$partition0$ & (1));if((bit__8596__auto__) || (G__29282.cljs$core$IFn$))
{return true;
} else
{if((!G__29282.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IFn,G__29282);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IFn,G__29282);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && ((parseFloat(n) === parseInt(n,(10))));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){if((cljs.core.get.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){if((!((coll == null))) && (cljs.core.associative_QMARK_.call(null,coll)) && (cljs.core.contains_QMARK_.call(null,coll,k)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.call(null,coll,k)], null);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){return true;
});
var distinct_QMARK___2 = (function (x,y){return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__29283__delegate = function (x,y,more){if(!(cljs.core._EQ_.call(null,x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([x,y], true);var xs = more;while(true){
var x__$1 = cljs.core.first.call(null,xs);var etc = cljs.core.next.call(null,xs);if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_.call(null,s,x__$1))
{return false;
} else
{{
var G__29284 = cljs.core.conj.call(null,s,x__$1);
var G__29285 = etc;
s = G__29284;
xs = G__29285;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__29283 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29283__delegate.call(this,x,y,more);};
G__29283.cljs$lang$maxFixedArity = 2;
G__29283.cljs$lang$applyTo = (function (arglist__29286){
var x = cljs.core.first(arglist__29286);
arglist__29286 = cljs.core.next(arglist__29286);
var y = cljs.core.first(arglist__29286);
var more = cljs.core.rest(arglist__29286);
return G__29283__delegate(x,y,more);
});
G__29283.cljs$core$IFn$_invoke$arity$variadic = G__29283__delegate;
return G__29283;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){if(cljs.core.seq_QMARK_.call(null,coll))
{return coll;
} else
{var or__7946__auto__ = cljs.core.seq.call(null,coll);if(or__7946__auto__)
{return or__7946__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){if((x === y))
{return (0);
} else
{if((x == null))
{return (-1);
} else
{if((y == null))
{return (1);
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__29288 = x;if(G__29288)
{var bit__8589__auto__ = (G__29288.cljs$lang$protocol_mask$partition1$ & (2048));if((bit__8589__auto__) || (G__29288.cljs$core$IComparable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){var xl = cljs.core.count.call(null,xs);var yl = cljs.core.count.call(null,ys);if((xl < yl))
{return (-1);
} else
{if((xl > yl))
{return (1);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return compare_indexed.call(null,xs,ys,xl,(0));
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){while(true){
var d = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));if(((d === (0))) && (((n + (1)) < len)))
{{
var G__29289 = xs;
var G__29290 = ys;
var G__29291 = len;
var G__29292 = (n + (1));
xs = G__29289;
ys = G__29290;
len = G__29291;
n = G__29292;
continue;
}
} else
{return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){var r = f.call(null,x,y);if(typeof r === 'number')
{return r;
} else
{if(cljs.core.truth_(r))
{return (-1);
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return (1);
} else
{return (0);
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){if(cljs.core.seq.call(null,coll))
{var a = cljs.core.to_array.call(null,coll);goog.array.stableSort(a,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){return cljs.core.sort.call(null,(function (x,y){return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){var temp__4124__auto__ = cljs.core.seq.call(null,coll);if(temp__4124__auto__)
{var s = temp__4124__auto__;return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s),cljs.core.next.call(null,s));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){var val__$1 = val;var coll__$1 = cljs.core.seq.call(null,coll);while(true){
if(coll__$1)
{var nval = f.call(null,val__$1,cljs.core.first.call(null,coll__$1));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__29293 = nval;
var G__29294 = cljs.core.next.call(null,coll__$1);
val__$1 = G__29293;
coll__$1 = G__29294;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){var a = cljs.core.to_array.call(null,coll);goog.array.shuffle(a);
return cljs.core.vec.call(null,a);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){if((function (){var G__29297 = coll;if(G__29297)
{var bit__8589__auto__ = (G__29297.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__8589__auto__) || (G__29297.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.call(null,coll,f);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.call(null,coll,f);
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,coll))
{return cljs.core._reduce.call(null,coll,f);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.seq_reduce.call(null,f,coll);
} else
{return null;
}
}
}
}
}
});
var reduce__3 = (function (f,val,coll){if((function (){var G__29298 = coll;if(G__29298)
{var bit__8589__auto__ = (G__29298.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__8589__auto__) || (G__29298.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.call(null,coll,f,val);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.call(null,coll,f,val);
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,coll))
{return cljs.core._reduce.call(null,coll,f,val);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.seq_reduce.call(null,f,val,coll);
} else
{return null;
}
}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){if(!((coll == null)))
{return cljs.core._kv_reduce.call(null,coll,f,init);
} else
{return init;
}
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){return (0);
});
var _PLUS___1 = (function (x){return x;
});
var _PLUS___2 = (function (x,y){return (x + y);
});
var _PLUS___3 = (function() { 
var G__29299__delegate = function (x,y,more){return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__29299 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29299__delegate.call(this,x,y,more);};
G__29299.cljs$lang$maxFixedArity = 2;
G__29299.cljs$lang$applyTo = (function (arglist__29300){
var x = cljs.core.first(arglist__29300);
arglist__29300 = cljs.core.next(arglist__29300);
var y = cljs.core.first(arglist__29300);
var more = cljs.core.rest(arglist__29300);
return G__29299__delegate(x,y,more);
});
G__29299.cljs$core$IFn$_invoke$arity$variadic = G__29299__delegate;
return G__29299;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){return (- x);
});
var ___2 = (function (x,y){return (x - y);
});
var ___3 = (function() { 
var G__29301__delegate = function (x,y,more){return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__29301 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29301__delegate.call(this,x,y,more);};
G__29301.cljs$lang$maxFixedArity = 2;
G__29301.cljs$lang$applyTo = (function (arglist__29302){
var x = cljs.core.first(arglist__29302);
arglist__29302 = cljs.core.next(arglist__29302);
var y = cljs.core.first(arglist__29302);
var more = cljs.core.rest(arglist__29302);
return G__29301__delegate(x,y,more);
});
G__29301.cljs$core$IFn$_invoke$arity$variadic = G__29301__delegate;
return G__29301;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){return (1);
});
var _STAR___1 = (function (x){return x;
});
var _STAR___2 = (function (x,y){return (x * y);
});
var _STAR___3 = (function() { 
var G__29303__delegate = function (x,y,more){return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__29303 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29303__delegate.call(this,x,y,more);};
G__29303.cljs$lang$maxFixedArity = 2;
G__29303.cljs$lang$applyTo = (function (arglist__29304){
var x = cljs.core.first(arglist__29304);
arglist__29304 = cljs.core.next(arglist__29304);
var y = cljs.core.first(arglist__29304);
var more = cljs.core.rest(arglist__29304);
return G__29303__delegate(x,y,more);
});
G__29303.cljs$core$IFn$_invoke$arity$variadic = G__29303__delegate;
return G__29303;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){return _SLASH_.call(null,(1),x);
});
var _SLASH___2 = (function (x,y){return (x / y);
});
var _SLASH___3 = (function() { 
var G__29305__delegate = function (x,y,more){return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__29305 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29305__delegate.call(this,x,y,more);};
G__29305.cljs$lang$maxFixedArity = 2;
G__29305.cljs$lang$applyTo = (function (arglist__29306){
var x = cljs.core.first(arglist__29306);
arglist__29306 = cljs.core.next(arglist__29306);
var y = cljs.core.first(arglist__29306);
var more = cljs.core.rest(arglist__29306);
return G__29305__delegate(x,y,more);
});
G__29305.cljs$core$IFn$_invoke$arity$variadic = G__29305__delegate;
return G__29305;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){return true;
});
var _LT___2 = (function (x,y){return (x < y);
});
var _LT___3 = (function() { 
var G__29307__delegate = function (x,y,more){while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__29308 = y;
var G__29309 = cljs.core.first.call(null,more);
var G__29310 = cljs.core.next.call(null,more);
x = G__29308;
y = G__29309;
more = G__29310;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__29307 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29307__delegate.call(this,x,y,more);};
G__29307.cljs$lang$maxFixedArity = 2;
G__29307.cljs$lang$applyTo = (function (arglist__29311){
var x = cljs.core.first(arglist__29311);
arglist__29311 = cljs.core.next(arglist__29311);
var y = cljs.core.first(arglist__29311);
var more = cljs.core.rest(arglist__29311);
return G__29307__delegate(x,y,more);
});
G__29307.cljs$core$IFn$_invoke$arity$variadic = G__29307__delegate;
return G__29307;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){return true;
});
var _LT__EQ___2 = (function (x,y){return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__29312__delegate = function (x,y,more){while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__29313 = y;
var G__29314 = cljs.core.first.call(null,more);
var G__29315 = cljs.core.next.call(null,more);
x = G__29313;
y = G__29314;
more = G__29315;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__29312 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29312__delegate.call(this,x,y,more);};
G__29312.cljs$lang$maxFixedArity = 2;
G__29312.cljs$lang$applyTo = (function (arglist__29316){
var x = cljs.core.first(arglist__29316);
arglist__29316 = cljs.core.next(arglist__29316);
var y = cljs.core.first(arglist__29316);
var more = cljs.core.rest(arglist__29316);
return G__29312__delegate(x,y,more);
});
G__29312.cljs$core$IFn$_invoke$arity$variadic = G__29312__delegate;
return G__29312;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){return true;
});
var _GT___2 = (function (x,y){return (x > y);
});
var _GT___3 = (function() { 
var G__29317__delegate = function (x,y,more){while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__29318 = y;
var G__29319 = cljs.core.first.call(null,more);
var G__29320 = cljs.core.next.call(null,more);
x = G__29318;
y = G__29319;
more = G__29320;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__29317 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29317__delegate.call(this,x,y,more);};
G__29317.cljs$lang$maxFixedArity = 2;
G__29317.cljs$lang$applyTo = (function (arglist__29321){
var x = cljs.core.first(arglist__29321);
arglist__29321 = cljs.core.next(arglist__29321);
var y = cljs.core.first(arglist__29321);
var more = cljs.core.rest(arglist__29321);
return G__29317__delegate(x,y,more);
});
G__29317.cljs$core$IFn$_invoke$arity$variadic = G__29317__delegate;
return G__29317;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){return true;
});
var _GT__EQ___2 = (function (x,y){return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__29322__delegate = function (x,y,more){while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__29323 = y;
var G__29324 = cljs.core.first.call(null,more);
var G__29325 = cljs.core.next.call(null,more);
x = G__29323;
y = G__29324;
more = G__29325;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__29322 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29322__delegate.call(this,x,y,more);};
G__29322.cljs$lang$maxFixedArity = 2;
G__29322.cljs$lang$applyTo = (function (arglist__29326){
var x = cljs.core.first(arglist__29326);
arglist__29326 = cljs.core.next(arglist__29326);
var y = cljs.core.first(arglist__29326);
var more = cljs.core.rest(arglist__29326);
return G__29322__delegate(x,y,more);
});
G__29322.cljs$core$IFn$_invoke$arity$variadic = G__29322__delegate;
return G__29322;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){return (x - (1));
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){return x;
});
var max__2 = (function (x,y){var x__8253__auto__ = x;var y__8254__auto__ = y;return ((x__8253__auto__ > y__8254__auto__) ? x__8253__auto__ : y__8254__auto__);
});
var max__3 = (function() { 
var G__29327__delegate = function (x,y,more){return cljs.core.reduce.call(null,max,(function (){var x__8253__auto__ = x;var y__8254__auto__ = y;return ((x__8253__auto__ > y__8254__auto__) ? x__8253__auto__ : y__8254__auto__);
})(),more);
};
var G__29327 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29327__delegate.call(this,x,y,more);};
G__29327.cljs$lang$maxFixedArity = 2;
G__29327.cljs$lang$applyTo = (function (arglist__29328){
var x = cljs.core.first(arglist__29328);
arglist__29328 = cljs.core.next(arglist__29328);
var y = cljs.core.first(arglist__29328);
var more = cljs.core.rest(arglist__29328);
return G__29327__delegate(x,y,more);
});
G__29327.cljs$core$IFn$_invoke$arity$variadic = G__29327__delegate;
return G__29327;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){return x;
});
var min__2 = (function (x,y){var x__8260__auto__ = x;var y__8261__auto__ = y;return ((x__8260__auto__ < y__8261__auto__) ? x__8260__auto__ : y__8261__auto__);
});
var min__3 = (function() { 
var G__29329__delegate = function (x,y,more){return cljs.core.reduce.call(null,min,(function (){var x__8260__auto__ = x;var y__8261__auto__ = y;return ((x__8260__auto__ < y__8261__auto__) ? x__8260__auto__ : y__8261__auto__);
})(),more);
};
var G__29329 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29329__delegate.call(this,x,y,more);};
G__29329.cljs$lang$maxFixedArity = 2;
G__29329.cljs$lang$applyTo = (function (arglist__29330){
var x = cljs.core.first(arglist__29330);
arglist__29330 = cljs.core.next(arglist__29330);
var y = cljs.core.first(arglist__29330);
var more = cljs.core.rest(arglist__29330);
return G__29329__delegate(x,y,more);
});
G__29329.cljs$core$IFn$_invoke$arity$variadic = G__29329__delegate;
return G__29329;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){if(typeof x === 'number')
{return String.fromCharCode(x);
} else
{if((typeof x === 'string') && ((x.length === (1))))
{return x;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw (new Error("Argument to char must be a character or number"));
} else
{return null;
}
}
}
});
cljs.core.short$ = (function short$(x){return x;
});
cljs.core.float$ = (function float$(x){return x;
});
cljs.core.double$ = (function double$(x){return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){return (0);
});
var unchecked_add__1 = (function (x){return x;
});
var unchecked_add__2 = (function (x,y){return (x + y);
});
var unchecked_add__3 = (function() { 
var G__29331__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_add,(x + y),more);
};
var G__29331 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29331__delegate.call(this,x,y,more);};
G__29331.cljs$lang$maxFixedArity = 2;
G__29331.cljs$lang$applyTo = (function (arglist__29332){
var x = cljs.core.first(arglist__29332);
arglist__29332 = cljs.core.next(arglist__29332);
var y = cljs.core.first(arglist__29332);
var more = cljs.core.rest(arglist__29332);
return G__29331__delegate(x,y,more);
});
G__29331.cljs$core$IFn$_invoke$arity$variadic = G__29331__delegate;
return G__29331;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){return (0);
});
var unchecked_add_int__1 = (function (x){return x;
});
var unchecked_add_int__2 = (function (x,y){return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__29333__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_add_int,(x + y),more);
};
var G__29333 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29333__delegate.call(this,x,y,more);};
G__29333.cljs$lang$maxFixedArity = 2;
G__29333.cljs$lang$applyTo = (function (arglist__29334){
var x = cljs.core.first(arglist__29334);
arglist__29334 = cljs.core.next(arglist__29334);
var y = cljs.core.first(arglist__29334);
var more = cljs.core.rest(arglist__29334);
return G__29333__delegate(x,y,more);
});
G__29333.cljs$core$IFn$_invoke$arity$variadic = G__29333__delegate;
return G__29333;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){return (x - (1));
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){return (x - (1));
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){return unchecked_divide_int.call(null,(1),x);
});
var unchecked_divide_int__2 = (function (x,y){return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__29335__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_divide_int,unchecked_divide_int.call(null,x,y),more);
};
var G__29335 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29335__delegate.call(this,x,y,more);};
G__29335.cljs$lang$maxFixedArity = 2;
G__29335.cljs$lang$applyTo = (function (arglist__29336){
var x = cljs.core.first(arglist__29336);
arglist__29336 = cljs.core.next(arglist__29336);
var y = cljs.core.first(arglist__29336);
var more = cljs.core.rest(arglist__29336);
return G__29335__delegate(x,y,more);
});
G__29335.cljs$core$IFn$_invoke$arity$variadic = G__29335__delegate;
return G__29335;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){return (x + (1));
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){return (x + (1));
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){return (1);
});
var unchecked_multiply__1 = (function (x){return x;
});
var unchecked_multiply__2 = (function (x,y){return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__29337__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_multiply,(x * y),more);
};
var G__29337 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29337__delegate.call(this,x,y,more);};
G__29337.cljs$lang$maxFixedArity = 2;
G__29337.cljs$lang$applyTo = (function (arglist__29338){
var x = cljs.core.first(arglist__29338);
arglist__29338 = cljs.core.next(arglist__29338);
var y = cljs.core.first(arglist__29338);
var more = cljs.core.rest(arglist__29338);
return G__29337__delegate(x,y,more);
});
G__29337.cljs$core$IFn$_invoke$arity$variadic = G__29337__delegate;
return G__29337;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){return (1);
});
var unchecked_multiply_int__1 = (function (x){return x;
});
var unchecked_multiply_int__2 = (function (x,y){return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__29339__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_multiply_int,(x * y),more);
};
var G__29339 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29339__delegate.call(this,x,y,more);};
G__29339.cljs$lang$maxFixedArity = 2;
G__29339.cljs$lang$applyTo = (function (arglist__29340){
var x = cljs.core.first(arglist__29340);
arglist__29340 = cljs.core.next(arglist__29340);
var y = cljs.core.first(arglist__29340);
var more = cljs.core.rest(arglist__29340);
return G__29339__delegate(x,y,more);
});
G__29339.cljs$core$IFn$_invoke$arity$variadic = G__29339__delegate;
return G__29339;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){return cljs.core.mod.call(null,x,n);
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_substract = (function() {
var unchecked_substract = null;
var unchecked_substract__1 = (function (x){return (- x);
});
var unchecked_substract__2 = (function (x,y){return (x - y);
});
var unchecked_substract__3 = (function() { 
var G__29341__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_substract,(x - y),more);
};
var G__29341 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29341__delegate.call(this,x,y,more);};
G__29341.cljs$lang$maxFixedArity = 2;
G__29341.cljs$lang$applyTo = (function (arglist__29342){
var x = cljs.core.first(arglist__29342);
arglist__29342 = cljs.core.next(arglist__29342);
var y = cljs.core.first(arglist__29342);
var more = cljs.core.rest(arglist__29342);
return G__29341__delegate(x,y,more);
});
G__29341.cljs$core$IFn$_invoke$arity$variadic = G__29341__delegate;
return G__29341;
})()
;
unchecked_substract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_substract__1.call(this,x);
case 2:
return unchecked_substract__2.call(this,x,y);
default:
return unchecked_substract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_substract.cljs$lang$maxFixedArity = 2;
unchecked_substract.cljs$lang$applyTo = unchecked_substract__3.cljs$lang$applyTo;
unchecked_substract.cljs$core$IFn$_invoke$arity$1 = unchecked_substract__1;
unchecked_substract.cljs$core$IFn$_invoke$arity$2 = unchecked_substract__2;
unchecked_substract.cljs$core$IFn$_invoke$arity$variadic = unchecked_substract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_substract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_substract_int = (function() {
var unchecked_substract_int = null;
var unchecked_substract_int__1 = (function (x){return (- x);
});
var unchecked_substract_int__2 = (function (x,y){return (x - y);
});
var unchecked_substract_int__3 = (function() { 
var G__29343__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_substract_int,(x - y),more);
};
var G__29343 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29343__delegate.call(this,x,y,more);};
G__29343.cljs$lang$maxFixedArity = 2;
G__29343.cljs$lang$applyTo = (function (arglist__29344){
var x = cljs.core.first(arglist__29344);
arglist__29344 = cljs.core.next(arglist__29344);
var y = cljs.core.first(arglist__29344);
var more = cljs.core.rest(arglist__29344);
return G__29343__delegate(x,y,more);
});
G__29343.cljs$core$IFn$_invoke$arity$variadic = G__29343__delegate;
return G__29343;
})()
;
unchecked_substract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_substract_int__1.call(this,x);
case 2:
return unchecked_substract_int__2.call(this,x,y);
default:
return unchecked_substract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_substract_int.cljs$lang$maxFixedArity = 2;
unchecked_substract_int.cljs$lang$applyTo = unchecked_substract_int__3.cljs$lang$applyTo;
unchecked_substract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_substract_int__1;
unchecked_substract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_substract_int__2;
unchecked_substract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_substract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_substract_int;
})()
;
cljs.core.fix = (function fix(q){if((q >= (0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){return (x | (0));
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){return cljs.core.fix.call(null,x);
});
cljs.core.booleans = (function booleans(x){return x;
});
cljs.core.bytes = (function bytes(x){return x;
});
cljs.core.chars = (function chars(x){return x;
});
cljs.core.shorts = (function shorts(x){return x;
});
cljs.core.ints = (function ints(x){return x;
});
cljs.core.floats = (function floats(x){return x;
});
cljs.core.doubles = (function doubles(x){return x;
});
cljs.core.longs = (function longs(x){return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){var rem = (n % d);return cljs.core.fix.call(null,((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){var q = cljs.core.quot.call(null,n,d);return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return Math.random.call(null);
});
var rand__1 = (function (n){return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){var v__$1 = (v - ((v >> (1)) & (1431655765)));var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){return true;
});
var _EQ__EQ___2 = (function (x,y){return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__29345__delegate = function (x,y,more){while(true){
if(_EQ__EQ_.call(null,x,y))
{if(cljs.core.next.call(null,more))
{{
var G__29346 = y;
var G__29347 = cljs.core.first.call(null,more);
var G__29348 = cljs.core.next.call(null,more);
x = G__29346;
y = G__29347;
more = G__29348;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__29345 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29345__delegate.call(this,x,y,more);};
G__29345.cljs$lang$maxFixedArity = 2;
G__29345.cljs$lang$applyTo = (function (arglist__29349){
var x = cljs.core.first(arglist__29349);
arglist__29349 = cljs.core.next(arglist__29349);
var y = cljs.core.first(arglist__29349);
var more = cljs.core.rest(arglist__29349);
return G__29345__delegate(x,y,more);
});
G__29345.cljs$core$IFn$_invoke$arity$variadic = G__29345__delegate;
return G__29345;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){return (n > (0));
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){return (n === (0));
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){return (x < (0));
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){var n__$1 = n;var xs = cljs.core.seq.call(null,coll);while(true){
if((xs) && ((n__$1 > (0))))
{{
var G__29350 = (n__$1 - (1));
var G__29351 = cljs.core.next.call(null,xs);
n__$1 = G__29350;
xs = G__29351;
continue;
}
} else
{return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){return "";
});
var str__1 = (function (x){if((x == null))
{return "";
} else
{return x.toString();
}
});
var str__2 = (function() { 
var G__29352__delegate = function (x,ys){var sb = (new goog.string.StringBuffer(str.call(null,x)));var more = ys;while(true){
if(cljs.core.truth_(more))
{{
var G__29353 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__29354 = cljs.core.next.call(null,more);
sb = G__29353;
more = G__29354;
continue;
}
} else
{return sb.toString();
}
break;
}
};
var G__29352 = function (x,var_args){
var ys = null;if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__29352__delegate.call(this,x,ys);};
G__29352.cljs$lang$maxFixedArity = 1;
G__29352.cljs$lang$applyTo = (function (arglist__29355){
var x = cljs.core.first(arglist__29355);
var ys = cljs.core.rest(arglist__29355);
return G__29352__delegate(x,ys);
});
G__29352.cljs$core$IFn$_invoke$arity$variadic = G__29352__delegate;
return G__29352;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){return s.substring(start);
});
var subs__3 = (function (s,start,end){return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs = cljs.core.seq.call(null,x);var ys = cljs.core.seq.call(null,y);while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys)))
{{
var G__29356 = cljs.core.next.call(null,xs);
var G__29357 = cljs.core.next.call(null,ys);
xs = G__29356;
ys = G__29357;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_coll = (function hash_coll(coll){if(cljs.core.seq.call(null,coll))
{var res = cljs.core.hash.call(null,cljs.core.first.call(null,coll));var s = cljs.core.next.call(null,coll);while(true){
if((s == null))
{return res;
} else
{{
var G__29358 = cljs.core.hash_combine.call(null,res,cljs.core.hash.call(null,cljs.core.first.call(null,s)));
var G__29359 = cljs.core.next.call(null,s);
res = G__29358;
s = G__29359;
continue;
}
}
break;
}
} else
{return (0);
}
});
cljs.core.hash_imap = (function hash_imap(m){var h = (0);var s = cljs.core.seq.call(null,m);while(true){
if(s)
{var e = cljs.core.first.call(null,s);{
var G__29360 = ((h + (cljs.core.hash.call(null,cljs.core.key.call(null,e)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e)))) % (4503599627370496));
var G__29361 = cljs.core.next.call(null,s);
h = G__29360;
s = G__29361;
continue;
}
} else
{return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){var h = (0);var s__$1 = cljs.core.seq.call(null,s);while(true){
if(s__$1)
{var e = cljs.core.first.call(null,s__$1);{
var G__29362 = ((h + cljs.core.hash.call(null,e)) % (4503599627370496));
var G__29363 = cljs.core.next.call(null,s__$1);
h = G__29362;
s__$1 = G__29363;
continue;
}
} else
{return h;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){var seq__29370_29376 = cljs.core.seq.call(null,fn_map);var chunk__29371_29377 = null;var count__29372_29378 = (0);var i__29373_29379 = (0);while(true){
if((i__29373_29379 < count__29372_29378))
{var vec__29374_29380 = cljs.core._nth.call(null,chunk__29371_29377,i__29373_29379);var key_name_29381 = cljs.core.nth.call(null,vec__29374_29380,(0),null);var f_29382 = cljs.core.nth.call(null,vec__29374_29380,(1),null);var str_name_29383 = cljs.core.name.call(null,key_name_29381);(obj[str_name_29383] = f_29382);
{
var G__29384 = seq__29370_29376;
var G__29385 = chunk__29371_29377;
var G__29386 = count__29372_29378;
var G__29387 = (i__29373_29379 + (1));
seq__29370_29376 = G__29384;
chunk__29371_29377 = G__29385;
count__29372_29378 = G__29386;
i__29373_29379 = G__29387;
continue;
}
} else
{var temp__4126__auto___29388 = cljs.core.seq.call(null,seq__29370_29376);if(temp__4126__auto___29388)
{var seq__29370_29389__$1 = temp__4126__auto___29388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29370_29389__$1))
{var c__8702__auto___29390 = cljs.core.chunk_first.call(null,seq__29370_29389__$1);{
var G__29391 = cljs.core.chunk_rest.call(null,seq__29370_29389__$1);
var G__29392 = c__8702__auto___29390;
var G__29393 = cljs.core.count.call(null,c__8702__auto___29390);
var G__29394 = (0);
seq__29370_29376 = G__29391;
chunk__29371_29377 = G__29392;
count__29372_29378 = G__29393;
i__29373_29379 = G__29394;
continue;
}
} else
{var vec__29375_29395 = cljs.core.first.call(null,seq__29370_29389__$1);var key_name_29396 = cljs.core.nth.call(null,vec__29375_29395,(0),null);var f_29397 = cljs.core.nth.call(null,vec__29375_29395,(1),null);var str_name_29398 = cljs.core.name.call(null,key_name_29396);(obj[str_name_29398] = f_29397);
{
var G__29399 = cljs.core.next.call(null,seq__29370_29389__$1);
var G__29400 = null;
var G__29401 = (0);
var G__29402 = (0);
seq__29370_29376 = G__29399;
chunk__29371_29377 = G__29400;
count__29372_29378 = G__29401;
i__29373_29379 = G__29402;
continue;
}
}
} else
{}
}
break;
}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/List");
});
cljs.core.List.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === (1)))
{return null;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._rest.call(null,coll__$1);
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === (1)))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});
cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){return (new cljs.core.List(meta,first,rest,count,__hash));
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.EmptyList(self__.meta));
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (0);
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (0);
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.EmptyList(meta__$1));
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,null,(1),null));
});
cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){return (new cljs.core.EmptyList(meta));
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){var G__29404 = coll;if(G__29404)
{var bit__8596__auto__ = (G__29404.cljs$lang$protocol_mask$partition0$ & (134217728));if((bit__8596__auto__) || (G__29404.cljs$core$IReversible$))
{return true;
} else
{if((!G__29404.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReversible,G__29404);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReversible,G__29404);
}
});
cljs.core.rseq = (function rseq(coll){return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];var xs__$1 = xs;while(true){
if(!((xs__$1 == null)))
{arr.push(cljs.core._first.call(null,xs__$1));
{
var G__29405 = cljs.core._next.call(null,xs__$1);
xs__$1 = G__29405;
continue;
}
} else
{return arr;
}
break;
}
})());var i = arr.length;var r = cljs.core.List.EMPTY;while(true){
if((i > (0)))
{{
var G__29406 = (i - (1));
var G__29407 = cljs.core._conj.call(null,r,(arr[(i - (1))]));
i = G__29406;
r = G__29407;
continue;
}
} else
{return r;
}
break;
}
};
var list = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__29408){
var xs = cljs.core.seq(arglist__29408);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return null;
} else
{return cljs.core.seq.call(null,self__.rest);
}
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});
cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){return (new cljs.core.Cons(meta,first,rest,__hash));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){if((function (){var or__7946__auto__ = (coll == null);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var G__29412 = coll;if(G__29412)
{var bit__8589__auto__ = (G__29412.cljs$lang$protocol_mask$partition0$ & (64));if((bit__8589__auto__) || (G__29412.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){var G__29414 = x;if(G__29414)
{var bit__8596__auto__ = (G__29414.cljs$lang$protocol_mask$partition0$ & (33554432));if((bit__8596__auto__) || (G__29414.cljs$core$IList$))
{return true;
} else
{if((!G__29414.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IList,G__29414);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IList,G__29414);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){return (cljs.core.hash_symbol.call(null,k) + (2654435769));
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write.call(null,writer,(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fqn)));
});
cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__8357__auto__ = self__._hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_keyword.call(null,this$__$1);self__._hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.Keyword.prototype.call = (function() {
var G__29416 = null;
var G__29416__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.call(null,coll,kw);
});
var G__29416__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.call(null,coll,kw,not_found);
});
G__29416 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__29416__2.call(this,self__,coll);
case 3:
return G__29416__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29416;
})()
;
cljs.core.Keyword.prototype.apply = (function (self__,args29415){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29415)));
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var kw = this;return cljs.core.get.call(null,coll,kw);
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var kw = this;return cljs.core.get.call(null,coll,kw,not_found);
});
cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Keyword))
{return (self__.fqn === other.fqn);
} else
{return false;
}
});
cljs.core.Keyword.prototype.toString = (function (){var self__ = this;
var _ = this;return (":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fqn));
});
cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){return (new cljs.core.Keyword(ns,name,fqn,_hash));
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){if((x === y))
{return true;
} else
{if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword)))
{return (x.fqn === y.fqn);
} else
{return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){if((function (){var G__29418 = x;if(G__29418)
{var bit__8589__auto__ = (G__29418.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__8589__auto__) || (G__29418.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._namespace.call(null,x);
} else
{throw (new Error(("Doesn't support namespace: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){if((name instanceof cljs.core.Keyword))
{return name;
} else
{if((name instanceof cljs.core.Symbol))
{return (new cljs.core.Keyword(cljs.core.namespace.call(null,name),cljs.core.name.call(null,name),name.str,null));
} else
{if(typeof name === 'string')
{var parts = name.split("/");if((parts.length === (2)))
{return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else
{return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){return (new cljs.core.Keyword(ns,name,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.LazySeq.prototype.sval = (function (){var self__ = this;
var coll = this;if((self__.fn == null))
{return self__.s;
} else
{self__.s = self__.fn.call(null);
self__.fn = null;
return self__.s;
}
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq.call(null,coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.next.call(null,self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq.call(null,coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.first.call(null,self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq.call(null,coll__$1);
if(!((self__.s == null)))
{return cljs.core.rest.call(null,self__.s);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;coll__$1.sval();
if((self__.s == null))
{return null;
} else
{var ls = self__.s;while(true){
if((ls instanceof cljs.core.LazySeq))
{{
var G__29419 = ls.sval();
ls = G__29419;
continue;
}
} else
{self__.s = ls;
return cljs.core.seq.call(null,self__.s);
}
break;
}
}
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){var self__ = this;
var _ = this;(self__.buf[self__.end] = o);
return self__.end = (self__.end + (1));
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){var self__ = this;
var _ = this;var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));self__.buf = null;
return ret;
});
cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){return (new cljs.core.ChunkBuffer(buf,end));
});
cljs.core.chunk_buffer = (function chunk_buffer(capacity){return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.call(null,self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.call(null,self__.arr,f,start,self__.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.off === self__.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){var self__ = this;
var coll__$1 = this;return (self__.arr[(self__.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){var self__ = this;
var coll__$1 = this;if(((i >= (0))) && ((i < (self__.end - self__.off))))
{return (self__.arr[(self__.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.end - self__.off);
});
cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var array_chunk__2 = (function (arr,off){return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count.call(null,self__.chunk) > (1)))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,self__.chunk),self__.more,self__.meta,null));
} else
{var more__$1 = cljs.core._seq.call(null,self__.more);if((more__$1 == null))
{return null;
} else
{return more__$1;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,self__.chunk,(0));
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count.call(null,self__.chunk) > (1)))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,self__.chunk),self__.more,self__.meta,null));
} else
{if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return cljs.core.cons.call(null,o,this$__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return null;
} else
{return self__.more;
}
});
cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){if((cljs.core._count.call(null,chunk) === (0)))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){return b.add(x);
});
cljs.core.chunk = (function chunk(b){return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){if((function (){var G__29421 = s;if(G__29421)
{var bit__8589__auto__ = (G__29421.cljs$lang$protocol_mask$partition1$ & (1024));if((bit__8589__auto__) || (G__29421.cljs$core$IChunkedNext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){var ary = [];var s__$1 = s;while(true){
if(cljs.core.seq.call(null,s__$1))
{ary.push(cljs.core.first.call(null,s__$1));
{
var G__29422 = cljs.core.next.call(null,s__$1);
s__$1 = G__29422;
continue;
}
} else
{return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){var ret = (new Array(cljs.core.count.call(null,coll)));var i_29423 = (0);var xs_29424 = cljs.core.seq.call(null,coll);while(true){
if(xs_29424)
{(ret[i_29423] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs_29424)));
{
var G__29425 = (i_29423 + (1));
var G__29426 = cljs.core.next.call(null,xs_29424);
i_29423 = G__29425;
xs_29424 = G__29426;
continue;
}
} else
{}
break;
}
return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return int_array.call(null,size_or_seq,null);
} else
{return cljs.core.into_array.call(null,size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__29427 = (i + (1));
var G__29428 = cljs.core.next.call(null,s__$1);
i = G__29427;
s__$1 = G__29428;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__8802__auto___29429 = size;var i_29430 = (0);while(true){
if((i_29430 < n__8802__auto___29429))
{(a[i_29430] = init_val_or_seq);
{
var G__29431 = (i_29430 + (1));
i_29430 = G__29431;
continue;
}
} else
{}
break;
}
return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return long_array.call(null,size_or_seq,null);
} else
{return cljs.core.into_array.call(null,size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__29432 = (i + (1));
var G__29433 = cljs.core.next.call(null,s__$1);
i = G__29432;
s__$1 = G__29433;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__8802__auto___29434 = size;var i_29435 = (0);while(true){
if((i_29435 < n__8802__auto___29434))
{(a[i_29435] = init_val_or_seq);
{
var G__29436 = (i_29435 + (1));
i_29435 = G__29436;
continue;
}
} else
{}
break;
}
return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return double_array.call(null,size_or_seq,null);
} else
{return cljs.core.into_array.call(null,size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__29437 = (i + (1));
var G__29438 = cljs.core.next.call(null,s__$1);
i = G__29437;
s__$1 = G__29438;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__8802__auto___29439 = size;var i_29440 = (0);while(true){
if((i_29440 < n__8802__auto___29439))
{(a[i_29440] = init_val_or_seq);
{
var G__29441 = (i_29440 + (1));
i_29440 = G__29441;
continue;
}
} else
{}
break;
}
return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return object_array.call(null,size_or_seq,null);
} else
{return cljs.core.into_array.call(null,size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__29442 = (i + (1));
var G__29443 = cljs.core.next.call(null,s__$1);
i = G__29442;
s__$1 = G__29443;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__8802__auto___29444 = size;var i_29445 = (0);while(true){
if((i_29445 < n__8802__auto___29444))
{(a[i_29445] = init_val_or_seq);
{
var G__29446 = (i_29445 + (1));
i_29445 = G__29446;
continue;
}
} else
{}
break;
}
return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__$1 = s;var i = n;var sum = (0);while(true){
if(((i > (0))) && (cljs.core.seq.call(null,s__$1)))
{{
var G__29447 = cljs.core.next.call(null,s__$1);
var G__29448 = (i - (1));
var G__29449 = (sum + (1));
s__$1 = G__29447;
i = G__29448;
sum = G__29449;
continue;
}
} else
{return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){return (new cljs.core.LazySeq(null,(function (){return null;
}),null,null));
});
var concat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return x;
}),null,null));
});
var concat__2 = (function (x,y){return (new cljs.core.LazySeq(null,(function (){var s = cljs.core.seq.call(null,x);if(s)
{if(cljs.core.chunked_seq_QMARK_.call(null,s))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s),concat.call(null,cljs.core.chunk_rest.call(null,s),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),concat.call(null,cljs.core.rest.call(null,s),y));
}
} else
{return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__29450__delegate = function (x,y,zs){var cat = (function cat(xys,zs__$1){return (new cljs.core.LazySeq(null,(function (){var xys__$1 = cljs.core.seq.call(null,xys);if(xys__$1)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__$1))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__$1),cat.call(null,cljs.core.chunk_rest.call(null,xys__$1),zs__$1));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__$1),cat.call(null,cljs.core.rest.call(null,xys__$1),zs__$1));
}
} else
{if(cljs.core.truth_(zs__$1))
{return cat.call(null,cljs.core.first.call(null,zs__$1),cljs.core.next.call(null,zs__$1));
} else
{return null;
}
}
}),null,null));
});return cat.call(null,concat.call(null,x,y),zs);
};
var G__29450 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29450__delegate.call(this,x,y,zs);};
G__29450.cljs$lang$maxFixedArity = 2;
G__29450.cljs$lang$applyTo = (function (arglist__29451){
var x = cljs.core.first(arglist__29451);
arglist__29451 = cljs.core.next(arglist__29451);
var y = cljs.core.first(arglist__29451);
var zs = cljs.core.rest(arglist__29451);
return G__29450__delegate(x,y,zs);
});
G__29450.cljs$core$IFn$_invoke$arity$variadic = G__29450__delegate;
return G__29450;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__29452__delegate = function (a,b,c,d,more){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__29452 = function (a,b,c,d,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__29452__delegate.call(this,a,b,c,d,more);};
G__29452.cljs$lang$maxFixedArity = 4;
G__29452.cljs$lang$applyTo = (function (arglist__29453){
var a = cljs.core.first(arglist__29453);
arglist__29453 = cljs.core.next(arglist__29453);
var b = cljs.core.first(arglist__29453);
arglist__29453 = cljs.core.next(arglist__29453);
var c = cljs.core.first(arglist__29453);
arglist__29453 = cljs.core.next(arglist__29453);
var d = cljs.core.first(arglist__29453);
var more = cljs.core.rest(arglist__29453);
return G__29452__delegate(a,b,c,d,more);
});
G__29452.cljs$core$IFn$_invoke$arity$variadic = G__29452__delegate;
return G__29452;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
/**
* Returns a new, transient version of the collection, in constant time.
*/
cljs.core.transient$ = (function transient$(coll){return cljs.core._as_transient.call(null,coll);
});
/**
* Returns a new, persistent version of the transient collection, in
* constant time. The transient collection cannot be used after this
* call, any such use will throw an exception.
*/
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){return cljs.core._persistent_BANG_.call(null,tcoll);
});
/**
* Adds x to the transient collection, and return coll. The 'addition'
* may happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj_BANG_ = (function() {
var conj_BANG_ = null;
var conj_BANG___2 = (function (tcoll,val){return cljs.core._conj_BANG_.call(null,tcoll,val);
});
var conj_BANG___3 = (function() { 
var G__29454__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._conj_BANG_.call(null,tcoll,val);if(cljs.core.truth_(vals))
{{
var G__29455 = ntcoll;
var G__29456 = cljs.core.first.call(null,vals);
var G__29457 = cljs.core.next.call(null,vals);
tcoll = G__29455;
val = G__29456;
vals = G__29457;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__29454 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29454__delegate.call(this,tcoll,val,vals);};
G__29454.cljs$lang$maxFixedArity = 2;
G__29454.cljs$lang$applyTo = (function (arglist__29458){
var tcoll = cljs.core.first(arglist__29458);
arglist__29458 = cljs.core.next(arglist__29458);
var val = cljs.core.first(arglist__29458);
var vals = cljs.core.rest(arglist__29458);
return G__29454__delegate(tcoll,val,vals);
});
G__29454.cljs$core$IFn$_invoke$arity$variadic = G__29454__delegate;
return G__29454;
})()
;
conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return conj_BANG___2.call(this,tcoll,val);
default:
return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_BANG_.cljs$lang$maxFixedArity = 2;
conj_BANG_.cljs$lang$applyTo = conj_BANG___3.cljs$lang$applyTo;
conj_BANG_.cljs$core$IFn$_invoke$arity$2 = conj_BANG___2;
conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return conj_BANG_;
})()
;
/**
* When applied to a transient map, adds mapping of key(s) to
* val(s). When applied to a transient vector, sets the val at index.
* Note - index must be <= (count vector). Returns coll.
* @param {...*} var_args
*/
cljs.core.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,key,val){return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
var assoc_BANG___4 = (function() { 
var G__29459__delegate = function (tcoll,key,val,kvs){while(true){
var ntcoll = cljs.core._assoc_BANG_.call(null,tcoll,key,val);if(cljs.core.truth_(kvs))
{{
var G__29460 = ntcoll;
var G__29461 = cljs.core.first.call(null,kvs);
var G__29462 = cljs.core.second.call(null,kvs);
var G__29463 = cljs.core.nnext.call(null,kvs);
tcoll = G__29460;
key = G__29461;
val = G__29462;
kvs = G__29463;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__29459 = function (tcoll,key,val,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29459__delegate.call(this,tcoll,key,val,kvs);};
G__29459.cljs$lang$maxFixedArity = 3;
G__29459.cljs$lang$applyTo = (function (arglist__29464){
var tcoll = cljs.core.first(arglist__29464);
arglist__29464 = cljs.core.next(arglist__29464);
var key = cljs.core.first(arglist__29464);
arglist__29464 = cljs.core.next(arglist__29464);
var val = cljs.core.first(arglist__29464);
var kvs = cljs.core.rest(arglist__29464);
return G__29459__delegate(tcoll,key,val,kvs);
});
G__29459.cljs$core$IFn$_invoke$arity$variadic = G__29459__delegate;
return G__29459;
})()
;
assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,key,val);
default:
return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_BANG_;
})()
;
/**
* Returns a transient map that doesn't contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc_BANG_ = (function() {
var dissoc_BANG_ = null;
var dissoc_BANG___2 = (function (tcoll,key){return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
var dissoc_BANG___3 = (function() { 
var G__29465__delegate = function (tcoll,key,ks){while(true){
var ntcoll = cljs.core._dissoc_BANG_.call(null,tcoll,key);if(cljs.core.truth_(ks))
{{
var G__29466 = ntcoll;
var G__29467 = cljs.core.first.call(null,ks);
var G__29468 = cljs.core.next.call(null,ks);
tcoll = G__29466;
key = G__29467;
ks = G__29468;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__29465 = function (tcoll,key,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29465__delegate.call(this,tcoll,key,ks);};
G__29465.cljs$lang$maxFixedArity = 2;
G__29465.cljs$lang$applyTo = (function (arglist__29469){
var tcoll = cljs.core.first(arglist__29469);
arglist__29469 = cljs.core.next(arglist__29469);
var key = cljs.core.first(arglist__29469);
var ks = cljs.core.rest(arglist__29469);
return G__29465__delegate(tcoll,key,ks);
});
G__29465.cljs$core$IFn$_invoke$arity$variadic = G__29465__delegate;
return G__29465;
})()
;
dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dissoc_BANG___2.call(this,tcoll,key);
default:
return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc_BANG_.cljs$lang$maxFixedArity = 2;
dissoc_BANG_.cljs$lang$applyTo = dissoc_BANG___3.cljs$lang$applyTo;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = dissoc_BANG___2;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc_BANG_;
})()
;
/**
* Removes the last item from a transient vector. If
* the collection is empty, throws an exception. Returns coll
*/
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){return cljs.core._pop_BANG_.call(null,tcoll);
});
/**
* disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj_BANG_ = (function() {
var disj_BANG_ = null;
var disj_BANG___2 = (function (tcoll,val){return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
var disj_BANG___3 = (function() { 
var G__29470__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._disjoin_BANG_.call(null,tcoll,val);if(cljs.core.truth_(vals))
{{
var G__29471 = ntcoll;
var G__29472 = cljs.core.first.call(null,vals);
var G__29473 = cljs.core.next.call(null,vals);
tcoll = G__29471;
val = G__29472;
vals = G__29473;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__29470 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29470__delegate.call(this,tcoll,val,vals);};
G__29470.cljs$lang$maxFixedArity = 2;
G__29470.cljs$lang$applyTo = (function (arglist__29474){
var tcoll = cljs.core.first(arglist__29474);
arglist__29474 = cljs.core.next(arglist__29474);
var val = cljs.core.first(arglist__29474);
var vals = cljs.core.rest(arglist__29474);
return G__29470__delegate(tcoll,val,vals);
});
G__29470.cljs$core$IFn$_invoke$arity$variadic = G__29470__delegate;
return G__29470;
})()
;
disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return disj_BANG___2.call(this,tcoll,val);
default:
return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj_BANG_.cljs$lang$maxFixedArity = 2;
disj_BANG_.cljs$lang$applyTo = disj_BANG___3.cljs$lang$applyTo;
disj_BANG_.cljs$core$IFn$_invoke$arity$2 = disj_BANG___2;
disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return disj_BANG_;
})()
;
cljs.core.apply_to = (function apply_to(f,argc,args){var args__$1 = cljs.core.seq.call(null,args);if((argc === (0)))
{return f.call(null);
} else
{var a8846 = cljs.core._first.call(null,args__$1);var args__$2 = cljs.core._rest.call(null,args__$1);if((argc === (1)))
{if(f.cljs$core$IFn$_invoke$arity$1)
{return f.cljs$core$IFn$_invoke$arity$1(a8846);
} else
{return f.call(null,a8846);
}
} else
{var b8847 = cljs.core._first.call(null,args__$2);var args__$3 = cljs.core._rest.call(null,args__$2);if((argc === (2)))
{if(f.cljs$core$IFn$_invoke$arity$2)
{return f.cljs$core$IFn$_invoke$arity$2(a8846,b8847);
} else
{return f.call(null,a8846,b8847);
}
} else
{var c8848 = cljs.core._first.call(null,args__$3);var args__$4 = cljs.core._rest.call(null,args__$3);if((argc === (3)))
{if(f.cljs$core$IFn$_invoke$arity$3)
{return f.cljs$core$IFn$_invoke$arity$3(a8846,b8847,c8848);
} else
{return f.call(null,a8846,b8847,c8848);
}
} else
{var d8849 = cljs.core._first.call(null,args__$4);var args__$5 = cljs.core._rest.call(null,args__$4);if((argc === (4)))
{if(f.cljs$core$IFn$_invoke$arity$4)
{return f.cljs$core$IFn$_invoke$arity$4(a8846,b8847,c8848,d8849);
} else
{return f.call(null,a8846,b8847,c8848,d8849);
}
} else
{var e8850 = cljs.core._first.call(null,args__$5);var args__$6 = cljs.core._rest.call(null,args__$5);if((argc === (5)))
{if(f.cljs$core$IFn$_invoke$arity$5)
{return f.cljs$core$IFn$_invoke$arity$5(a8846,b8847,c8848,d8849,e8850);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850);
}
} else
{var f8851 = cljs.core._first.call(null,args__$6);var args__$7 = cljs.core._rest.call(null,args__$6);if((argc === (6)))
{if(f.cljs$core$IFn$_invoke$arity$6)
{return f.cljs$core$IFn$_invoke$arity$6(a8846,b8847,c8848,d8849,e8850,f8851);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851);
}
} else
{var g8852 = cljs.core._first.call(null,args__$7);var args__$8 = cljs.core._rest.call(null,args__$7);if((argc === (7)))
{if(f.cljs$core$IFn$_invoke$arity$7)
{return f.cljs$core$IFn$_invoke$arity$7(a8846,b8847,c8848,d8849,e8850,f8851,g8852);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851,g8852);
}
} else
{var h8853 = cljs.core._first.call(null,args__$8);var args__$9 = cljs.core._rest.call(null,args__$8);if((argc === (8)))
{if(f.cljs$core$IFn$_invoke$arity$8)
{return f.cljs$core$IFn$_invoke$arity$8(a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853);
}
} else
{var i8854 = cljs.core._first.call(null,args__$9);var args__$10 = cljs.core._rest.call(null,args__$9);if((argc === (9)))
{if(f.cljs$core$IFn$_invoke$arity$9)
{return f.cljs$core$IFn$_invoke$arity$9(a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854);
}
} else
{var j8855 = cljs.core._first.call(null,args__$10);var args__$11 = cljs.core._rest.call(null,args__$10);if((argc === (10)))
{if(f.cljs$core$IFn$_invoke$arity$10)
{return f.cljs$core$IFn$_invoke$arity$10(a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855);
}
} else
{var k8856 = cljs.core._first.call(null,args__$11);var args__$12 = cljs.core._rest.call(null,args__$11);if((argc === (11)))
{if(f.cljs$core$IFn$_invoke$arity$11)
{return f.cljs$core$IFn$_invoke$arity$11(a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856);
}
} else
{var l8857 = cljs.core._first.call(null,args__$12);var args__$13 = cljs.core._rest.call(null,args__$12);if((argc === (12)))
{if(f.cljs$core$IFn$_invoke$arity$12)
{return f.cljs$core$IFn$_invoke$arity$12(a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857);
}
} else
{var m8858 = cljs.core._first.call(null,args__$13);var args__$14 = cljs.core._rest.call(null,args__$13);if((argc === (13)))
{if(f.cljs$core$IFn$_invoke$arity$13)
{return f.cljs$core$IFn$_invoke$arity$13(a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858);
}
} else
{var n8859 = cljs.core._first.call(null,args__$14);var args__$15 = cljs.core._rest.call(null,args__$14);if((argc === (14)))
{if(f.cljs$core$IFn$_invoke$arity$14)
{return f.cljs$core$IFn$_invoke$arity$14(a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858,n8859);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858,n8859);
}
} else
{var o8860 = cljs.core._first.call(null,args__$15);var args__$16 = cljs.core._rest.call(null,args__$15);if((argc === (15)))
{if(f.cljs$core$IFn$_invoke$arity$15)
{return f.cljs$core$IFn$_invoke$arity$15(a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858,n8859,o8860);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858,n8859,o8860);
}
} else
{var p8861 = cljs.core._first.call(null,args__$16);var args__$17 = cljs.core._rest.call(null,args__$16);if((argc === (16)))
{if(f.cljs$core$IFn$_invoke$arity$16)
{return f.cljs$core$IFn$_invoke$arity$16(a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858,n8859,o8860,p8861);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858,n8859,o8860,p8861);
}
} else
{var q8862 = cljs.core._first.call(null,args__$17);var args__$18 = cljs.core._rest.call(null,args__$17);if((argc === (17)))
{if(f.cljs$core$IFn$_invoke$arity$17)
{return f.cljs$core$IFn$_invoke$arity$17(a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858,n8859,o8860,p8861,q8862);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858,n8859,o8860,p8861,q8862);
}
} else
{var r8863 = cljs.core._first.call(null,args__$18);var args__$19 = cljs.core._rest.call(null,args__$18);if((argc === (18)))
{if(f.cljs$core$IFn$_invoke$arity$18)
{return f.cljs$core$IFn$_invoke$arity$18(a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858,n8859,o8860,p8861,q8862,r8863);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858,n8859,o8860,p8861,q8862,r8863);
}
} else
{var s8864 = cljs.core._first.call(null,args__$19);var args__$20 = cljs.core._rest.call(null,args__$19);if((argc === (19)))
{if(f.cljs$core$IFn$_invoke$arity$19)
{return f.cljs$core$IFn$_invoke$arity$19(a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858,n8859,o8860,p8861,q8862,r8863,s8864);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858,n8859,o8860,p8861,q8862,r8863,s8864);
}
} else
{var t8865 = cljs.core._first.call(null,args__$20);var args__$21 = cljs.core._rest.call(null,args__$20);if((argc === (20)))
{if(f.cljs$core$IFn$_invoke$arity$20)
{return f.cljs$core$IFn$_invoke$arity$20(a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858,n8859,o8860,p8861,q8862,r8863,s8864,t8865);
} else
{return f.call(null,a8846,b8847,c8848,d8849,e8850,f8851,g8852,h8853,i8854,j8855,k8856,l8857,m8858,n8859,o8860,p8861,q8862,r8863,s8864,t8865);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
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
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,args,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){var arglist = cljs.core.list_STAR_.call(null,x,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__4 = (function (f,x,y,args){var arglist = cljs.core.list_STAR_.call(null,x,y,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__5 = (function (f,x,y,z,args){var arglist = cljs.core.list_STAR_.call(null,x,y,z,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__6 = (function() { 
var G__29475__delegate = function (f,a,b,c,d,args){var arglist = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
};
var G__29475 = function (f,a,b,c,d,var_args){
var args = null;if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__29475__delegate.call(this,f,a,b,c,d,args);};
G__29475.cljs$lang$maxFixedArity = 5;
G__29475.cljs$lang$applyTo = (function (arglist__29476){
var f = cljs.core.first(arglist__29476);
arglist__29476 = cljs.core.next(arglist__29476);
var a = cljs.core.first(arglist__29476);
arglist__29476 = cljs.core.next(arglist__29476);
var b = cljs.core.first(arglist__29476);
arglist__29476 = cljs.core.next(arglist__29476);
var c = cljs.core.first(arglist__29476);
arglist__29476 = cljs.core.next(arglist__29476);
var d = cljs.core.first(arglist__29476);
var args = cljs.core.rest(arglist__29476);
return G__29475__delegate(f,a,b,c,d,args);
});
G__29475.cljs$core$IFn$_invoke$arity$variadic = G__29475__delegate;
return G__29475;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() {
var vary_meta = null;
var vary_meta__2 = (function (obj,f){return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj)));
});
var vary_meta__3 = (function (obj,f,a){return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a));
});
var vary_meta__4 = (function (obj,f,a,b){return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a,b));
});
var vary_meta__5 = (function (obj,f,a,b,c){return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a,b,c));
});
var vary_meta__6 = (function (obj,f,a,b,c,d){return cljs.core.with_meta.call(null,obj,f.call(null,cljs.core.meta.call(null,obj),a,b,c,d));
});
var vary_meta__7 = (function() { 
var G__29477__delegate = function (obj,f,a,b,c,d,args){return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),a,b,c,d,args));
};
var G__29477 = function (obj,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__29477__delegate.call(this,obj,f,a,b,c,d,args);};
G__29477.cljs$lang$maxFixedArity = 6;
G__29477.cljs$lang$applyTo = (function (arglist__29478){
var obj = cljs.core.first(arglist__29478);
arglist__29478 = cljs.core.next(arglist__29478);
var f = cljs.core.first(arglist__29478);
arglist__29478 = cljs.core.next(arglist__29478);
var a = cljs.core.first(arglist__29478);
arglist__29478 = cljs.core.next(arglist__29478);
var b = cljs.core.first(arglist__29478);
arglist__29478 = cljs.core.next(arglist__29478);
var c = cljs.core.first(arglist__29478);
arglist__29478 = cljs.core.next(arglist__29478);
var d = cljs.core.first(arglist__29478);
var args = cljs.core.rest(arglist__29478);
return G__29477__delegate(obj,f,a,b,c,d,args);
});
G__29477.cljs$core$IFn$_invoke$arity$variadic = G__29477__delegate;
return G__29477;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){return false;
});
var not_EQ___2 = (function (x,y){return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__29479__delegate = function (x,y,more){return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__29479 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29479__delegate.call(this,x,y,more);};
G__29479.cljs$lang$maxFixedArity = 2;
G__29479.cljs$lang$applyTo = (function (arglist__29480){
var x = cljs.core.first(arglist__29480);
arglist__29480 = cljs.core.next(arglist__29480);
var y = cljs.core.first(arglist__29480);
var more = cljs.core.rest(arglist__29480);
return G__29479__delegate(x,y,more);
});
G__29479.cljs$core$IFn$_invoke$arity$variadic = G__29479__delegate;
return G__29479;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$core$IFn$_invoke$arity$1 = not_EQ___1;
not_EQ_.cljs$core$IFn$_invoke$arity$2 = not_EQ___2;
not_EQ_.cljs$core$IFn$_invoke$arity$variadic = not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__29481 = pred;
var G__29482 = cljs.core.next.call(null,coll);
pred = G__29481;
coll = G__29482;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){while(true){
if(cljs.core.seq.call(null,coll))
{var or__7946__auto__ = pred.call(null,cljs.core.first.call(null,coll));if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{{
var G__29483 = pred;
var G__29484 = cljs.core.next.call(null,coll);
pred = G__29483;
coll = G__29484;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & (1)) === (0));
} else
{throw (new Error(("Argument must be an integer: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){return (function() {
var G__29485 = null;
var G__29485__0 = (function (){return cljs.core.not.call(null,f.call(null));
});
var G__29485__1 = (function (x){return cljs.core.not.call(null,f.call(null,x));
});
var G__29485__2 = (function (x,y){return cljs.core.not.call(null,f.call(null,x,y));
});
var G__29485__3 = (function() { 
var G__29486__delegate = function (x,y,zs){return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__29486 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29486__delegate.call(this,x,y,zs);};
G__29486.cljs$lang$maxFixedArity = 2;
G__29486.cljs$lang$applyTo = (function (arglist__29487){
var x = cljs.core.first(arglist__29487);
arglist__29487 = cljs.core.next(arglist__29487);
var y = cljs.core.first(arglist__29487);
var zs = cljs.core.rest(arglist__29487);
return G__29486__delegate(x,y,zs);
});
G__29486.cljs$core$IFn$_invoke$arity$variadic = G__29486__delegate;
return G__29486;
})()
;
G__29485 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__29485__0.call(this);
case 1:
return G__29485__1.call(this,x);
case 2:
return G__29485__2.call(this,x,y);
default:
return G__29485__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29485.cljs$lang$maxFixedArity = 2;
G__29485.cljs$lang$applyTo = G__29485__3.cljs$lang$applyTo;
return G__29485;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){return (function() { 
var G__29488__delegate = function (args){return x;
};
var G__29488 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29488__delegate.call(this,args);};
G__29488.cljs$lang$maxFixedArity = 0;
G__29488.cljs$lang$applyTo = (function (arglist__29489){
var args = cljs.core.seq(arglist__29489);
return G__29488__delegate(args);
});
G__29488.cljs$core$IFn$_invoke$arity$variadic = G__29488__delegate;
return G__29488;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){return cljs.core.identity;
});
var comp__1 = (function (f){return f;
});
var comp__2 = (function (f,g){return (function() {
var G__29490 = null;
var G__29490__0 = (function (){return f.call(null,g.call(null));
});
var G__29490__1 = (function (x){return f.call(null,g.call(null,x));
});
var G__29490__2 = (function (x,y){return f.call(null,g.call(null,x,y));
});
var G__29490__3 = (function (x,y,z){return f.call(null,g.call(null,x,y,z));
});
var G__29490__4 = (function() { 
var G__29491__delegate = function (x,y,z,args){return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__29491 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29491__delegate.call(this,x,y,z,args);};
G__29491.cljs$lang$maxFixedArity = 3;
G__29491.cljs$lang$applyTo = (function (arglist__29492){
var x = cljs.core.first(arglist__29492);
arglist__29492 = cljs.core.next(arglist__29492);
var y = cljs.core.first(arglist__29492);
arglist__29492 = cljs.core.next(arglist__29492);
var z = cljs.core.first(arglist__29492);
var args = cljs.core.rest(arglist__29492);
return G__29491__delegate(x,y,z,args);
});
G__29491.cljs$core$IFn$_invoke$arity$variadic = G__29491__delegate;
return G__29491;
})()
;
G__29490 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29490__0.call(this);
case 1:
return G__29490__1.call(this,x);
case 2:
return G__29490__2.call(this,x,y);
case 3:
return G__29490__3.call(this,x,y,z);
default:
return G__29490__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29490.cljs$lang$maxFixedArity = 3;
G__29490.cljs$lang$applyTo = G__29490__4.cljs$lang$applyTo;
return G__29490;
})()
});
var comp__3 = (function (f,g,h){return (function() {
var G__29493 = null;
var G__29493__0 = (function (){return f.call(null,g.call(null,h.call(null)));
});
var G__29493__1 = (function (x){return f.call(null,g.call(null,h.call(null,x)));
});
var G__29493__2 = (function (x,y){return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__29493__3 = (function (x,y,z){return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__29493__4 = (function() { 
var G__29494__delegate = function (x,y,z,args){return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__29494 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29494__delegate.call(this,x,y,z,args);};
G__29494.cljs$lang$maxFixedArity = 3;
G__29494.cljs$lang$applyTo = (function (arglist__29495){
var x = cljs.core.first(arglist__29495);
arglist__29495 = cljs.core.next(arglist__29495);
var y = cljs.core.first(arglist__29495);
arglist__29495 = cljs.core.next(arglist__29495);
var z = cljs.core.first(arglist__29495);
var args = cljs.core.rest(arglist__29495);
return G__29494__delegate(x,y,z,args);
});
G__29494.cljs$core$IFn$_invoke$arity$variadic = G__29494__delegate;
return G__29494;
})()
;
G__29493 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29493__0.call(this);
case 1:
return G__29493__1.call(this,x);
case 2:
return G__29493__2.call(this,x,y);
case 3:
return G__29493__3.call(this,x,y,z);
default:
return G__29493__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29493.cljs$lang$maxFixedArity = 3;
G__29493.cljs$lang$applyTo = G__29493__4.cljs$lang$applyTo;
return G__29493;
})()
});
var comp__4 = (function() { 
var G__29496__delegate = function (f1,f2,f3,fs){var fs__$1 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));return ((function (fs__$1){
return (function() { 
var G__29497__delegate = function (args){var ret = cljs.core.apply.call(null,cljs.core.first.call(null,fs__$1),args);var fs__$2 = cljs.core.next.call(null,fs__$1);while(true){
if(fs__$2)
{{
var G__29498 = cljs.core.first.call(null,fs__$2).call(null,ret);
var G__29499 = cljs.core.next.call(null,fs__$2);
ret = G__29498;
fs__$2 = G__29499;
continue;
}
} else
{return ret;
}
break;
}
};
var G__29497 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29497__delegate.call(this,args);};
G__29497.cljs$lang$maxFixedArity = 0;
G__29497.cljs$lang$applyTo = (function (arglist__29500){
var args = cljs.core.seq(arglist__29500);
return G__29497__delegate(args);
});
G__29497.cljs$core$IFn$_invoke$arity$variadic = G__29497__delegate;
return G__29497;
})()
;
;})(fs__$1))
};
var G__29496 = function (f1,f2,f3,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29496__delegate.call(this,f1,f2,f3,fs);};
G__29496.cljs$lang$maxFixedArity = 3;
G__29496.cljs$lang$applyTo = (function (arglist__29501){
var f1 = cljs.core.first(arglist__29501);
arglist__29501 = cljs.core.next(arglist__29501);
var f2 = cljs.core.first(arglist__29501);
arglist__29501 = cljs.core.next(arglist__29501);
var f3 = cljs.core.first(arglist__29501);
var fs = cljs.core.rest(arglist__29501);
return G__29496__delegate(f1,f2,f3,fs);
});
G__29496.cljs$core$IFn$_invoke$arity$variadic = G__29496__delegate;
return G__29496;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$core$IFn$_invoke$arity$0 = comp__0;
comp.cljs$core$IFn$_invoke$arity$1 = comp__1;
comp.cljs$core$IFn$_invoke$arity$2 = comp__2;
comp.cljs$core$IFn$_invoke$arity$3 = comp__3;
comp.cljs$core$IFn$_invoke$arity$variadic = comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__1 = (function (f){return f;
});
var partial__2 = (function (f,arg1){return (function() { 
var G__29502__delegate = function (args){return cljs.core.apply.call(null,f,arg1,args);
};
var G__29502 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29502__delegate.call(this,args);};
G__29502.cljs$lang$maxFixedArity = 0;
G__29502.cljs$lang$applyTo = (function (arglist__29503){
var args = cljs.core.seq(arglist__29503);
return G__29502__delegate(args);
});
G__29502.cljs$core$IFn$_invoke$arity$variadic = G__29502__delegate;
return G__29502;
})()
;
});
var partial__3 = (function (f,arg1,arg2){return (function() { 
var G__29504__delegate = function (args){return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__29504 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29504__delegate.call(this,args);};
G__29504.cljs$lang$maxFixedArity = 0;
G__29504.cljs$lang$applyTo = (function (arglist__29505){
var args = cljs.core.seq(arglist__29505);
return G__29504__delegate(args);
});
G__29504.cljs$core$IFn$_invoke$arity$variadic = G__29504__delegate;
return G__29504;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){return (function() { 
var G__29506__delegate = function (args){return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__29506 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29506__delegate.call(this,args);};
G__29506.cljs$lang$maxFixedArity = 0;
G__29506.cljs$lang$applyTo = (function (arglist__29507){
var args = cljs.core.seq(arglist__29507);
return G__29506__delegate(args);
});
G__29506.cljs$core$IFn$_invoke$arity$variadic = G__29506__delegate;
return G__29506;
})()
;
});
var partial__5 = (function() { 
var G__29508__delegate = function (f,arg1,arg2,arg3,more){return (function() { 
var G__29509__delegate = function (args){return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__29509 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29509__delegate.call(this,args);};
G__29509.cljs$lang$maxFixedArity = 0;
G__29509.cljs$lang$applyTo = (function (arglist__29510){
var args = cljs.core.seq(arglist__29510);
return G__29509__delegate(args);
});
G__29509.cljs$core$IFn$_invoke$arity$variadic = G__29509__delegate;
return G__29509;
})()
;
};
var G__29508 = function (f,arg1,arg2,arg3,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__29508__delegate.call(this,f,arg1,arg2,arg3,more);};
G__29508.cljs$lang$maxFixedArity = 4;
G__29508.cljs$lang$applyTo = (function (arglist__29511){
var f = cljs.core.first(arglist__29511);
arglist__29511 = cljs.core.next(arglist__29511);
var arg1 = cljs.core.first(arglist__29511);
arglist__29511 = cljs.core.next(arglist__29511);
var arg2 = cljs.core.first(arglist__29511);
arglist__29511 = cljs.core.next(arglist__29511);
var arg3 = cljs.core.first(arglist__29511);
var more = cljs.core.rest(arglist__29511);
return G__29508__delegate(f,arg1,arg2,arg3,more);
});
G__29508.cljs$core$IFn$_invoke$arity$variadic = G__29508__delegate;
return G__29508;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return partial__1.call(this,f);
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$core$IFn$_invoke$arity$1 = partial__1;
partial.cljs$core$IFn$_invoke$arity$2 = partial__2;
partial.cljs$core$IFn$_invoke$arity$3 = partial__3;
partial.cljs$core$IFn$_invoke$arity$4 = partial__4;
partial.cljs$core$IFn$_invoke$arity$variadic = partial__5.cljs$core$IFn$_invoke$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){return (function() {
var G__29512 = null;
var G__29512__1 = (function (a){return f.call(null,(((a == null))?x:a));
});
var G__29512__2 = (function (a,b){return f.call(null,(((a == null))?x:a),b);
});
var G__29512__3 = (function (a,b,c){return f.call(null,(((a == null))?x:a),b,c);
});
var G__29512__4 = (function() { 
var G__29513__delegate = function (a,b,c,ds){return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__29513 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29513__delegate.call(this,a,b,c,ds);};
G__29513.cljs$lang$maxFixedArity = 3;
G__29513.cljs$lang$applyTo = (function (arglist__29514){
var a = cljs.core.first(arglist__29514);
arglist__29514 = cljs.core.next(arglist__29514);
var b = cljs.core.first(arglist__29514);
arglist__29514 = cljs.core.next(arglist__29514);
var c = cljs.core.first(arglist__29514);
var ds = cljs.core.rest(arglist__29514);
return G__29513__delegate(a,b,c,ds);
});
G__29513.cljs$core$IFn$_invoke$arity$variadic = G__29513__delegate;
return G__29513;
})()
;
G__29512 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__29512__1.call(this,a);
case 2:
return G__29512__2.call(this,a,b);
case 3:
return G__29512__3.call(this,a,b,c);
default:
return G__29512__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29512.cljs$lang$maxFixedArity = 3;
G__29512.cljs$lang$applyTo = G__29512__4.cljs$lang$applyTo;
return G__29512;
})()
});
var fnil__3 = (function (f,x,y){return (function() {
var G__29515 = null;
var G__29515__2 = (function (a,b){return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__29515__3 = (function (a,b,c){return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__29515__4 = (function() { 
var G__29516__delegate = function (a,b,c,ds){return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__29516 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29516__delegate.call(this,a,b,c,ds);};
G__29516.cljs$lang$maxFixedArity = 3;
G__29516.cljs$lang$applyTo = (function (arglist__29517){
var a = cljs.core.first(arglist__29517);
arglist__29517 = cljs.core.next(arglist__29517);
var b = cljs.core.first(arglist__29517);
arglist__29517 = cljs.core.next(arglist__29517);
var c = cljs.core.first(arglist__29517);
var ds = cljs.core.rest(arglist__29517);
return G__29516__delegate(a,b,c,ds);
});
G__29516.cljs$core$IFn$_invoke$arity$variadic = G__29516__delegate;
return G__29516;
})()
;
G__29515 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__29515__2.call(this,a,b);
case 3:
return G__29515__3.call(this,a,b,c);
default:
return G__29515__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29515.cljs$lang$maxFixedArity = 3;
G__29515.cljs$lang$applyTo = G__29515__4.cljs$lang$applyTo;
return G__29515;
})()
});
var fnil__4 = (function (f,x,y,z){return (function() {
var G__29518 = null;
var G__29518__2 = (function (a,b){return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__29518__3 = (function (a,b,c){return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__29518__4 = (function() { 
var G__29519__delegate = function (a,b,c,ds){return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__29519 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29519__delegate.call(this,a,b,c,ds);};
G__29519.cljs$lang$maxFixedArity = 3;
G__29519.cljs$lang$applyTo = (function (arglist__29520){
var a = cljs.core.first(arglist__29520);
arglist__29520 = cljs.core.next(arglist__29520);
var b = cljs.core.first(arglist__29520);
arglist__29520 = cljs.core.next(arglist__29520);
var c = cljs.core.first(arglist__29520);
var ds = cljs.core.rest(arglist__29520);
return G__29519__delegate(a,b,c,ds);
});
G__29519.cljs$core$IFn$_invoke$arity$variadic = G__29519__delegate;
return G__29519;
})()
;
G__29518 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__29518__2.call(this,a,b);
case 3:
return G__29518__3.call(this,a,b,c);
default:
return G__29518__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29518.cljs$lang$maxFixedArity = 3;
G__29518.cljs$lang$applyTo = G__29518__4.cljs$lang$applyTo;
return G__29518;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$core$IFn$_invoke$arity$2 = fnil__2;
fnil.cljs$core$IFn$_invoke$arity$3 = fnil__3;
fnil.cljs$core$IFn$_invoke$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){var mapi = (function mapi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);var size = cljs.core.count.call(null,c);var b = cljs.core.chunk_buffer.call(null,size);var n__8802__auto___29521 = size;var i_29522 = (0);while(true){
if((i_29522 < n__8802__auto___29521))
{cljs.core.chunk_append.call(null,b,f.call(null,(idx + i_29522),cljs.core._nth.call(null,c,i_29522)));
{
var G__29523 = (i_29522 + (1));
i_29522 = G__29523;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),mapi.call(null,(idx + size),cljs.core.chunk_rest.call(null,s)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s)),mapi.call(null,(idx + (1)),cljs.core.rest.call(null,s)));
}
} else
{return null;
}
}),null,null));
});
return mapi.call(null,(0),coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);var size = cljs.core.count.call(null,c);var b = cljs.core.chunk_buffer.call(null,size);var n__8802__auto___29524 = size;var i_29525 = (0);while(true){
if((i_29525 < n__8802__auto___29524))
{var x_29526 = f.call(null,cljs.core._nth.call(null,c,i_29525));if((x_29526 == null))
{} else
{cljs.core.chunk_append.call(null,b,x_29526);
}
{
var G__29527 = (i_29525 + (1));
i_29525 = G__29527;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),keep.call(null,f,cljs.core.chunk_rest.call(null,s)));
} else
{var x = f.call(null,cljs.core.first.call(null,s));if((x == null))
{return keep.call(null,f,cljs.core.rest.call(null,s));
} else
{return cljs.core.cons.call(null,x,keep.call(null,f,cljs.core.rest.call(null,s)));
}
}
} else
{return null;
}
}),null,null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){var keepi = (function keepi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);var size = cljs.core.count.call(null,c);var b = cljs.core.chunk_buffer.call(null,size);var n__8802__auto___29528 = size;var i_29529 = (0);while(true){
if((i_29529 < n__8802__auto___29528))
{var x_29530 = f.call(null,(idx + i_29529),cljs.core._nth.call(null,c,i_29529));if((x_29530 == null))
{} else
{cljs.core.chunk_append.call(null,b,x_29530);
}
{
var G__29531 = (i_29529 + (1));
i_29529 = G__29531;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),keepi.call(null,(idx + size),cljs.core.chunk_rest.call(null,s)));
} else
{var x = f.call(null,idx,cljs.core.first.call(null,s));if((x == null))
{return keepi.call(null,(idx + (1)),cljs.core.rest.call(null,s));
} else
{return cljs.core.cons.call(null,x,keepi.call(null,(idx + (1)),cljs.core.rest.call(null,s)));
}
}
} else
{return null;
}
}),null,null));
});
return keepi.call(null,(0),coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){return (function() {
var ep1 = null;
var ep1__0 = (function (){return true;
});
var ep1__1 = (function (x){return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){return cljs.core.boolean$.call(null,(function (){var and__7934__auto__ = p.call(null,x);if(cljs.core.truth_(and__7934__auto__))
{return p.call(null,y);
} else
{return and__7934__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){return cljs.core.boolean$.call(null,(function (){var and__7934__auto__ = p.call(null,x);if(cljs.core.truth_(and__7934__auto__))
{var and__7934__auto____$1 = p.call(null,y);if(cljs.core.truth_(and__7934__auto____$1))
{return p.call(null,z);
} else
{return and__7934__auto____$1;
}
} else
{return and__7934__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__29538__delegate = function (x,y,z,args){return cljs.core.boolean$.call(null,(ep1.call(null,x,y,z)) && (cljs.core.every_QMARK_.call(null,p,args)));
};
var G__29538 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29538__delegate.call(this,x,y,z,args);};
G__29538.cljs$lang$maxFixedArity = 3;
G__29538.cljs$lang$applyTo = (function (arglist__29539){
var x = cljs.core.first(arglist__29539);
arglist__29539 = cljs.core.next(arglist__29539);
var y = cljs.core.first(arglist__29539);
arglist__29539 = cljs.core.next(arglist__29539);
var z = cljs.core.first(arglist__29539);
var args = cljs.core.rest(arglist__29539);
return G__29538__delegate(x,y,z,args);
});
G__29538.cljs$core$IFn$_invoke$arity$variadic = G__29538__delegate;
return G__29538;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$core$IFn$_invoke$arity$0 = ep1__0;
ep1.cljs$core$IFn$_invoke$arity$1 = ep1__1;
ep1.cljs$core$IFn$_invoke$arity$2 = ep1__2;
ep1.cljs$core$IFn$_invoke$arity$3 = ep1__3;
ep1.cljs$core$IFn$_invoke$arity$variadic = ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){return (function() {
var ep2 = null;
var ep2__0 = (function (){return true;
});
var ep2__1 = (function (x){return cljs.core.boolean$.call(null,(function (){var and__7934__auto__ = p1.call(null,x);if(cljs.core.truth_(and__7934__auto__))
{return p2.call(null,x);
} else
{return and__7934__auto__;
}
})());
});
var ep2__2 = (function (x,y){return cljs.core.boolean$.call(null,(function (){var and__7934__auto__ = p1.call(null,x);if(cljs.core.truth_(and__7934__auto__))
{var and__7934__auto____$1 = p1.call(null,y);if(cljs.core.truth_(and__7934__auto____$1))
{var and__7934__auto____$2 = p2.call(null,x);if(cljs.core.truth_(and__7934__auto____$2))
{return p2.call(null,y);
} else
{return and__7934__auto____$2;
}
} else
{return and__7934__auto____$1;
}
} else
{return and__7934__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){return cljs.core.boolean$.call(null,(function (){var and__7934__auto__ = p1.call(null,x);if(cljs.core.truth_(and__7934__auto__))
{var and__7934__auto____$1 = p1.call(null,y);if(cljs.core.truth_(and__7934__auto____$1))
{var and__7934__auto____$2 = p1.call(null,z);if(cljs.core.truth_(and__7934__auto____$2))
{var and__7934__auto____$3 = p2.call(null,x);if(cljs.core.truth_(and__7934__auto____$3))
{var and__7934__auto____$4 = p2.call(null,y);if(cljs.core.truth_(and__7934__auto____$4))
{return p2.call(null,z);
} else
{return and__7934__auto____$4;
}
} else
{return and__7934__auto____$3;
}
} else
{return and__7934__auto____$2;
}
} else
{return and__7934__auto____$1;
}
} else
{return and__7934__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__29540__delegate = function (x,y,z,args){return cljs.core.boolean$.call(null,(ep2.call(null,x,y,z)) && (cljs.core.every_QMARK_.call(null,(function (p1__29532_SHARP_){var and__7934__auto__ = p1.call(null,p1__29532_SHARP_);if(cljs.core.truth_(and__7934__auto__))
{return p2.call(null,p1__29532_SHARP_);
} else
{return and__7934__auto__;
}
}),args)));
};
var G__29540 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29540__delegate.call(this,x,y,z,args);};
G__29540.cljs$lang$maxFixedArity = 3;
G__29540.cljs$lang$applyTo = (function (arglist__29541){
var x = cljs.core.first(arglist__29541);
arglist__29541 = cljs.core.next(arglist__29541);
var y = cljs.core.first(arglist__29541);
arglist__29541 = cljs.core.next(arglist__29541);
var z = cljs.core.first(arglist__29541);
var args = cljs.core.rest(arglist__29541);
return G__29540__delegate(x,y,z,args);
});
G__29540.cljs$core$IFn$_invoke$arity$variadic = G__29540__delegate;
return G__29540;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$core$IFn$_invoke$arity$0 = ep2__0;
ep2.cljs$core$IFn$_invoke$arity$1 = ep2__1;
ep2.cljs$core$IFn$_invoke$arity$2 = ep2__2;
ep2.cljs$core$IFn$_invoke$arity$3 = ep2__3;
ep2.cljs$core$IFn$_invoke$arity$variadic = ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){return (function() {
var ep3 = null;
var ep3__0 = (function (){return true;
});
var ep3__1 = (function (x){return cljs.core.boolean$.call(null,(function (){var and__7934__auto__ = p1.call(null,x);if(cljs.core.truth_(and__7934__auto__))
{var and__7934__auto____$1 = p2.call(null,x);if(cljs.core.truth_(and__7934__auto____$1))
{return p3.call(null,x);
} else
{return and__7934__auto____$1;
}
} else
{return and__7934__auto__;
}
})());
});
var ep3__2 = (function (x,y){return cljs.core.boolean$.call(null,(function (){var and__7934__auto__ = p1.call(null,x);if(cljs.core.truth_(and__7934__auto__))
{var and__7934__auto____$1 = p2.call(null,x);if(cljs.core.truth_(and__7934__auto____$1))
{var and__7934__auto____$2 = p3.call(null,x);if(cljs.core.truth_(and__7934__auto____$2))
{var and__7934__auto____$3 = p1.call(null,y);if(cljs.core.truth_(and__7934__auto____$3))
{var and__7934__auto____$4 = p2.call(null,y);if(cljs.core.truth_(and__7934__auto____$4))
{return p3.call(null,y);
} else
{return and__7934__auto____$4;
}
} else
{return and__7934__auto____$3;
}
} else
{return and__7934__auto____$2;
}
} else
{return and__7934__auto____$1;
}
} else
{return and__7934__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){return cljs.core.boolean$.call(null,(function (){var and__7934__auto__ = p1.call(null,x);if(cljs.core.truth_(and__7934__auto__))
{var and__7934__auto____$1 = p2.call(null,x);if(cljs.core.truth_(and__7934__auto____$1))
{var and__7934__auto____$2 = p3.call(null,x);if(cljs.core.truth_(and__7934__auto____$2))
{var and__7934__auto____$3 = p1.call(null,y);if(cljs.core.truth_(and__7934__auto____$3))
{var and__7934__auto____$4 = p2.call(null,y);if(cljs.core.truth_(and__7934__auto____$4))
{var and__7934__auto____$5 = p3.call(null,y);if(cljs.core.truth_(and__7934__auto____$5))
{var and__7934__auto____$6 = p1.call(null,z);if(cljs.core.truth_(and__7934__auto____$6))
{var and__7934__auto____$7 = p2.call(null,z);if(cljs.core.truth_(and__7934__auto____$7))
{return p3.call(null,z);
} else
{return and__7934__auto____$7;
}
} else
{return and__7934__auto____$6;
}
} else
{return and__7934__auto____$5;
}
} else
{return and__7934__auto____$4;
}
} else
{return and__7934__auto____$3;
}
} else
{return and__7934__auto____$2;
}
} else
{return and__7934__auto____$1;
}
} else
{return and__7934__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__29542__delegate = function (x,y,z,args){return cljs.core.boolean$.call(null,(ep3.call(null,x,y,z)) && (cljs.core.every_QMARK_.call(null,(function (p1__29533_SHARP_){var and__7934__auto__ = p1.call(null,p1__29533_SHARP_);if(cljs.core.truth_(and__7934__auto__))
{var and__7934__auto____$1 = p2.call(null,p1__29533_SHARP_);if(cljs.core.truth_(and__7934__auto____$1))
{return p3.call(null,p1__29533_SHARP_);
} else
{return and__7934__auto____$1;
}
} else
{return and__7934__auto__;
}
}),args)));
};
var G__29542 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29542__delegate.call(this,x,y,z,args);};
G__29542.cljs$lang$maxFixedArity = 3;
G__29542.cljs$lang$applyTo = (function (arglist__29543){
var x = cljs.core.first(arglist__29543);
arglist__29543 = cljs.core.next(arglist__29543);
var y = cljs.core.first(arglist__29543);
arglist__29543 = cljs.core.next(arglist__29543);
var z = cljs.core.first(arglist__29543);
var args = cljs.core.rest(arglist__29543);
return G__29542__delegate(x,y,z,args);
});
G__29542.cljs$core$IFn$_invoke$arity$variadic = G__29542__delegate;
return G__29542;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$core$IFn$_invoke$arity$0 = ep3__0;
ep3.cljs$core$IFn$_invoke$arity$1 = ep3__1;
ep3.cljs$core$IFn$_invoke$arity$2 = ep3__2;
ep3.cljs$core$IFn$_invoke$arity$3 = ep3__3;
ep3.cljs$core$IFn$_invoke$arity$variadic = ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__29544__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){return true;
});
var epn__1 = (function (x){return cljs.core.every_QMARK_.call(null,((function (ps__$1){
return (function (p1__29534_SHARP_){return p1__29534_SHARP_.call(null,x);
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){return cljs.core.every_QMARK_.call(null,((function (ps__$1){
return (function (p1__29535_SHARP_){var and__7934__auto__ = p1__29535_SHARP_.call(null,x);if(cljs.core.truth_(and__7934__auto__))
{return p1__29535_SHARP_.call(null,y);
} else
{return and__7934__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){return cljs.core.every_QMARK_.call(null,((function (ps__$1){
return (function (p1__29536_SHARP_){var and__7934__auto__ = p1__29536_SHARP_.call(null,x);if(cljs.core.truth_(and__7934__auto__))
{var and__7934__auto____$1 = p1__29536_SHARP_.call(null,y);if(cljs.core.truth_(and__7934__auto____$1))
{return p1__29536_SHARP_.call(null,z);
} else
{return and__7934__auto____$1;
}
} else
{return and__7934__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__29545__delegate = function (x,y,z,args){return cljs.core.boolean$.call(null,(epn.call(null,x,y,z)) && (cljs.core.every_QMARK_.call(null,((function (ps__$1){
return (function (p1__29537_SHARP_){return cljs.core.every_QMARK_.call(null,p1__29537_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__29545 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29545__delegate.call(this,x,y,z,args);};
G__29545.cljs$lang$maxFixedArity = 3;
G__29545.cljs$lang$applyTo = (function (arglist__29546){
var x = cljs.core.first(arglist__29546);
arglist__29546 = cljs.core.next(arglist__29546);
var y = cljs.core.first(arglist__29546);
arglist__29546 = cljs.core.next(arglist__29546);
var z = cljs.core.first(arglist__29546);
var args = cljs.core.rest(arglist__29546);
return G__29545__delegate(x,y,z,args);
});
G__29545.cljs$core$IFn$_invoke$arity$variadic = G__29545__delegate;
return G__29545;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$core$IFn$_invoke$arity$0 = epn__0;
epn.cljs$core$IFn$_invoke$arity$1 = epn__1;
epn.cljs$core$IFn$_invoke$arity$2 = epn__2;
epn.cljs$core$IFn$_invoke$arity$3 = epn__3;
epn.cljs$core$IFn$_invoke$arity$variadic = epn__4.cljs$core$IFn$_invoke$arity$variadic;
return epn;
})()
;})(ps__$1))
};
var G__29544 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29544__delegate.call(this,p1,p2,p3,ps);};
G__29544.cljs$lang$maxFixedArity = 3;
G__29544.cljs$lang$applyTo = (function (arglist__29547){
var p1 = cljs.core.first(arglist__29547);
arglist__29547 = cljs.core.next(arglist__29547);
var p2 = cljs.core.first(arglist__29547);
arglist__29547 = cljs.core.next(arglist__29547);
var p3 = cljs.core.first(arglist__29547);
var ps = cljs.core.rest(arglist__29547);
return G__29544__delegate(p1,p2,p3,ps);
});
G__29544.cljs$core$IFn$_invoke$arity$variadic = G__29544__delegate;
return G__29544;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1 = every_pred__1;
every_pred.cljs$core$IFn$_invoke$arity$2 = every_pred__2;
every_pred.cljs$core$IFn$_invoke$arity$3 = every_pred__3;
every_pred.cljs$core$IFn$_invoke$arity$variadic = every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){return (function() {
var sp1 = null;
var sp1__0 = (function (){return null;
});
var sp1__1 = (function (x){return p.call(null,x);
});
var sp1__2 = (function (x,y){var or__7946__auto__ = p.call(null,x);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){var or__7946__auto__ = p.call(null,x);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = p.call(null,y);if(cljs.core.truth_(or__7946__auto____$1))
{return or__7946__auto____$1;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__29554__delegate = function (x,y,z,args){var or__7946__auto__ = sp1.call(null,x,y,z);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__29554 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29554__delegate.call(this,x,y,z,args);};
G__29554.cljs$lang$maxFixedArity = 3;
G__29554.cljs$lang$applyTo = (function (arglist__29555){
var x = cljs.core.first(arglist__29555);
arglist__29555 = cljs.core.next(arglist__29555);
var y = cljs.core.first(arglist__29555);
arglist__29555 = cljs.core.next(arglist__29555);
var z = cljs.core.first(arglist__29555);
var args = cljs.core.rest(arglist__29555);
return G__29554__delegate(x,y,z,args);
});
G__29554.cljs$core$IFn$_invoke$arity$variadic = G__29554__delegate;
return G__29554;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$core$IFn$_invoke$arity$0 = sp1__0;
sp1.cljs$core$IFn$_invoke$arity$1 = sp1__1;
sp1.cljs$core$IFn$_invoke$arity$2 = sp1__2;
sp1.cljs$core$IFn$_invoke$arity$3 = sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic = sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){return (function() {
var sp2 = null;
var sp2__0 = (function (){return null;
});
var sp2__1 = (function (x){var or__7946__auto__ = p1.call(null,x);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){var or__7946__auto__ = p1.call(null,x);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = p1.call(null,y);if(cljs.core.truth_(or__7946__auto____$1))
{return or__7946__auto____$1;
} else
{var or__7946__auto____$2 = p2.call(null,x);if(cljs.core.truth_(or__7946__auto____$2))
{return or__7946__auto____$2;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){var or__7946__auto__ = p1.call(null,x);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = p1.call(null,y);if(cljs.core.truth_(or__7946__auto____$1))
{return or__7946__auto____$1;
} else
{var or__7946__auto____$2 = p1.call(null,z);if(cljs.core.truth_(or__7946__auto____$2))
{return or__7946__auto____$2;
} else
{var or__7946__auto____$3 = p2.call(null,x);if(cljs.core.truth_(or__7946__auto____$3))
{return or__7946__auto____$3;
} else
{var or__7946__auto____$4 = p2.call(null,y);if(cljs.core.truth_(or__7946__auto____$4))
{return or__7946__auto____$4;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__29556__delegate = function (x,y,z,args){var or__7946__auto__ = sp2.call(null,x,y,z);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return cljs.core.some.call(null,((function (or__7946__auto__){
return (function (p1__29548_SHARP_){var or__7946__auto____$1 = p1.call(null,p1__29548_SHARP_);if(cljs.core.truth_(or__7946__auto____$1))
{return or__7946__auto____$1;
} else
{return p2.call(null,p1__29548_SHARP_);
}
});})(or__7946__auto__))
,args);
}
};
var G__29556 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29556__delegate.call(this,x,y,z,args);};
G__29556.cljs$lang$maxFixedArity = 3;
G__29556.cljs$lang$applyTo = (function (arglist__29557){
var x = cljs.core.first(arglist__29557);
arglist__29557 = cljs.core.next(arglist__29557);
var y = cljs.core.first(arglist__29557);
arglist__29557 = cljs.core.next(arglist__29557);
var z = cljs.core.first(arglist__29557);
var args = cljs.core.rest(arglist__29557);
return G__29556__delegate(x,y,z,args);
});
G__29556.cljs$core$IFn$_invoke$arity$variadic = G__29556__delegate;
return G__29556;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$core$IFn$_invoke$arity$0 = sp2__0;
sp2.cljs$core$IFn$_invoke$arity$1 = sp2__1;
sp2.cljs$core$IFn$_invoke$arity$2 = sp2__2;
sp2.cljs$core$IFn$_invoke$arity$3 = sp2__3;
sp2.cljs$core$IFn$_invoke$arity$variadic = sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){return (function() {
var sp3 = null;
var sp3__0 = (function (){return null;
});
var sp3__1 = (function (x){var or__7946__auto__ = p1.call(null,x);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = p2.call(null,x);if(cljs.core.truth_(or__7946__auto____$1))
{return or__7946__auto____$1;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){var or__7946__auto__ = p1.call(null,x);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = p2.call(null,x);if(cljs.core.truth_(or__7946__auto____$1))
{return or__7946__auto____$1;
} else
{var or__7946__auto____$2 = p3.call(null,x);if(cljs.core.truth_(or__7946__auto____$2))
{return or__7946__auto____$2;
} else
{var or__7946__auto____$3 = p1.call(null,y);if(cljs.core.truth_(or__7946__auto____$3))
{return or__7946__auto____$3;
} else
{var or__7946__auto____$4 = p2.call(null,y);if(cljs.core.truth_(or__7946__auto____$4))
{return or__7946__auto____$4;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){var or__7946__auto__ = p1.call(null,x);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = p2.call(null,x);if(cljs.core.truth_(or__7946__auto____$1))
{return or__7946__auto____$1;
} else
{var or__7946__auto____$2 = p3.call(null,x);if(cljs.core.truth_(or__7946__auto____$2))
{return or__7946__auto____$2;
} else
{var or__7946__auto____$3 = p1.call(null,y);if(cljs.core.truth_(or__7946__auto____$3))
{return or__7946__auto____$3;
} else
{var or__7946__auto____$4 = p2.call(null,y);if(cljs.core.truth_(or__7946__auto____$4))
{return or__7946__auto____$4;
} else
{var or__7946__auto____$5 = p3.call(null,y);if(cljs.core.truth_(or__7946__auto____$5))
{return or__7946__auto____$5;
} else
{var or__7946__auto____$6 = p1.call(null,z);if(cljs.core.truth_(or__7946__auto____$6))
{return or__7946__auto____$6;
} else
{var or__7946__auto____$7 = p2.call(null,z);if(cljs.core.truth_(or__7946__auto____$7))
{return or__7946__auto____$7;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__29558__delegate = function (x,y,z,args){var or__7946__auto__ = sp3.call(null,x,y,z);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return cljs.core.some.call(null,((function (or__7946__auto__){
return (function (p1__29549_SHARP_){var or__7946__auto____$1 = p1.call(null,p1__29549_SHARP_);if(cljs.core.truth_(or__7946__auto____$1))
{return or__7946__auto____$1;
} else
{var or__7946__auto____$2 = p2.call(null,p1__29549_SHARP_);if(cljs.core.truth_(or__7946__auto____$2))
{return or__7946__auto____$2;
} else
{return p3.call(null,p1__29549_SHARP_);
}
}
});})(or__7946__auto__))
,args);
}
};
var G__29558 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29558__delegate.call(this,x,y,z,args);};
G__29558.cljs$lang$maxFixedArity = 3;
G__29558.cljs$lang$applyTo = (function (arglist__29559){
var x = cljs.core.first(arglist__29559);
arglist__29559 = cljs.core.next(arglist__29559);
var y = cljs.core.first(arglist__29559);
arglist__29559 = cljs.core.next(arglist__29559);
var z = cljs.core.first(arglist__29559);
var args = cljs.core.rest(arglist__29559);
return G__29558__delegate(x,y,z,args);
});
G__29558.cljs$core$IFn$_invoke$arity$variadic = G__29558__delegate;
return G__29558;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$core$IFn$_invoke$arity$0 = sp3__0;
sp3.cljs$core$IFn$_invoke$arity$1 = sp3__1;
sp3.cljs$core$IFn$_invoke$arity$2 = sp3__2;
sp3.cljs$core$IFn$_invoke$arity$3 = sp3__3;
sp3.cljs$core$IFn$_invoke$arity$variadic = sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__29560__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){return null;
});
var spn__1 = (function (x){return cljs.core.some.call(null,((function (ps__$1){
return (function (p1__29550_SHARP_){return p1__29550_SHARP_.call(null,x);
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){return cljs.core.some.call(null,((function (ps__$1){
return (function (p1__29551_SHARP_){var or__7946__auto__ = p1__29551_SHARP_.call(null,x);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return p1__29551_SHARP_.call(null,y);
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){return cljs.core.some.call(null,((function (ps__$1){
return (function (p1__29552_SHARP_){var or__7946__auto__ = p1__29552_SHARP_.call(null,x);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = p1__29552_SHARP_.call(null,y);if(cljs.core.truth_(or__7946__auto____$1))
{return or__7946__auto____$1;
} else
{return p1__29552_SHARP_.call(null,z);
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__29561__delegate = function (x,y,z,args){var or__7946__auto__ = spn.call(null,x,y,z);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return cljs.core.some.call(null,((function (or__7946__auto__,ps__$1){
return (function (p1__29553_SHARP_){return cljs.core.some.call(null,p1__29553_SHARP_,args);
});})(or__7946__auto__,ps__$1))
,ps__$1);
}
};
var G__29561 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29561__delegate.call(this,x,y,z,args);};
G__29561.cljs$lang$maxFixedArity = 3;
G__29561.cljs$lang$applyTo = (function (arglist__29562){
var x = cljs.core.first(arglist__29562);
arglist__29562 = cljs.core.next(arglist__29562);
var y = cljs.core.first(arglist__29562);
arglist__29562 = cljs.core.next(arglist__29562);
var z = cljs.core.first(arglist__29562);
var args = cljs.core.rest(arglist__29562);
return G__29561__delegate(x,y,z,args);
});
G__29561.cljs$core$IFn$_invoke$arity$variadic = G__29561__delegate;
return G__29561;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$core$IFn$_invoke$arity$0 = spn__0;
spn.cljs$core$IFn$_invoke$arity$1 = spn__1;
spn.cljs$core$IFn$_invoke$arity$2 = spn__2;
spn.cljs$core$IFn$_invoke$arity$3 = spn__3;
spn.cljs$core$IFn$_invoke$arity$variadic = spn__4.cljs$core$IFn$_invoke$arity$variadic;
return spn;
})()
;})(ps__$1))
};
var G__29560 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29560__delegate.call(this,p1,p2,p3,ps);};
G__29560.cljs$lang$maxFixedArity = 3;
G__29560.cljs$lang$applyTo = (function (arglist__29563){
var p1 = cljs.core.first(arglist__29563);
arglist__29563 = cljs.core.next(arglist__29563);
var p2 = cljs.core.first(arglist__29563);
arglist__29563 = cljs.core.next(arglist__29563);
var p3 = cljs.core.first(arglist__29563);
var ps = cljs.core.rest(arglist__29563);
return G__29560__delegate(p1,p2,p3,ps);
});
G__29560.cljs$core$IFn$_invoke$arity$variadic = G__29560__delegate;
return G__29560;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$core$IFn$_invoke$arity$1 = some_fn__1;
some_fn.cljs$core$IFn$_invoke$arity$2 = some_fn__2;
some_fn.cljs$core$IFn$_invoke$arity$3 = some_fn__3;
some_fn.cljs$core$IFn$_invoke$arity$variadic = some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);var size = cljs.core.count.call(null,c);var b = cljs.core.chunk_buffer.call(null,size);var n__8802__auto___29565 = size;var i_29566 = (0);while(true){
if((i_29566 < n__8802__auto___29565))
{cljs.core.chunk_append.call(null,b,f.call(null,cljs.core._nth.call(null,c,i_29566)));
{
var G__29567 = (i_29566 + (1));
i_29566 = G__29567;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),map.call(null,f,cljs.core.chunk_rest.call(null,s)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s)),map.call(null,f,cljs.core.rest.call(null,s)));
}
} else
{return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq.call(null,c1);var s2 = cljs.core.seq.call(null,c2);if((s1) && (s2))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1),cljs.core.first.call(null,s2)),map.call(null,f,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2)));
} else
{return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq.call(null,c1);var s2 = cljs.core.seq.call(null,c2);var s3 = cljs.core.seq.call(null,c3);if((s1) && (s2) && (s3))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1),cljs.core.first.call(null,s2),cljs.core.first.call(null,s3)),map.call(null,f,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2),cljs.core.rest.call(null,s3)));
} else
{return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__29568__delegate = function (f,c1,c2,c3,colls){var step = (function step(cs){return (new cljs.core.LazySeq(null,(function (){var ss = map.call(null,cljs.core.seq,cs);if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss),step.call(null,map.call(null,cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
});return map.call(null,((function (step){
return (function (p1__29564_SHARP_){return cljs.core.apply.call(null,f,p1__29564_SHARP_);
});})(step))
,step.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__29568 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__29568__delegate.call(this,f,c1,c2,c3,colls);};
G__29568.cljs$lang$maxFixedArity = 4;
G__29568.cljs$lang$applyTo = (function (arglist__29569){
var f = cljs.core.first(arglist__29569);
arglist__29569 = cljs.core.next(arglist__29569);
var c1 = cljs.core.first(arglist__29569);
arglist__29569 = cljs.core.next(arglist__29569);
var c2 = cljs.core.first(arglist__29569);
arglist__29569 = cljs.core.next(arglist__29569);
var c3 = cljs.core.first(arglist__29569);
var colls = cljs.core.rest(arglist__29569);
return G__29568__delegate(f,c1,c2,c3,colls);
});
G__29568.cljs$core$IFn$_invoke$arity$variadic = G__29568__delegate;
return G__29568;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
map.cljs$core$IFn$_invoke$arity$4 = map__4;
map.cljs$core$IFn$_invoke$arity$variadic = map__5.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){return (new cljs.core.LazySeq(null,(function (){if((n > (0)))
{var temp__4126__auto__ = cljs.core.seq.call(null,coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons.call(null,cljs.core.first.call(null,s),take.call(null,(n - (1)),cljs.core.rest.call(null,s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){var step = (function (n__$1,coll__$1){while(true){
var s = cljs.core.seq.call(null,coll__$1);if(((n__$1 > (0))) && (s))
{{
var G__29570 = (n__$1 - (1));
var G__29571 = cljs.core.rest.call(null,s);
n__$1 = G__29570;
coll__$1 = G__29571;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,((function (step){
return (function (){return step.call(null,n,coll);
});})(step))
,null,null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){return drop_last.call(null,(1),s);
});
var drop_last__2 = (function (n,s){return cljs.core.map.call(null,(function (x,_){return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$core$IFn$_invoke$arity$1 = drop_last__1;
drop_last.cljs$core$IFn$_invoke$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){var s = cljs.core.seq.call(null,coll);var lead = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));while(true){
if(lead)
{{
var G__29572 = cljs.core.next.call(null,s);
var G__29573 = cljs.core.next.call(null,lead);
s = G__29572;
lead = G__29573;
continue;
}
} else
{return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){var step = (function (pred__$1,coll__$1){while(true){
var s = cljs.core.seq.call(null,coll__$1);if(cljs.core.truth_((function (){var and__7934__auto__ = s;if(and__7934__auto__)
{return pred__$1.call(null,cljs.core.first.call(null,s));
} else
{return and__7934__auto__;
}
})()))
{{
var G__29574 = pred__$1;
var G__29575 = cljs.core.rest.call(null,s);
pred__$1 = G__29574;
coll__$1 = G__29575;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,((function (step){
return (function (){return step.call(null,pred,coll);
});})(step))
,null,null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.concat.call(null,s,cycle.call(null,s));
} else
{return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null,null));
});
var repeat__2 = (function (n,x){return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null,null));
});
var repeatedly__2 = (function (n,f){return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$core$IFn$_invoke$arity$1 = repeatedly__1;
repeatedly.cljs$core$IFn$_invoke$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,(function (){return iterate.call(null,f,f.call(null,x));
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq.call(null,c1);var s2 = cljs.core.seq.call(null,c2);if((s1) && (s2))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),interleave.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else
{return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__29576__delegate = function (c1,c2,colls){return (new cljs.core.LazySeq(null,(function (){var ss = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
};
var G__29576 = function (c1,c2,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29576__delegate.call(this,c1,c2,colls);};
G__29576.cljs$lang$maxFixedArity = 2;
G__29576.cljs$lang$applyTo = (function (arglist__29577){
var c1 = cljs.core.first(arglist__29577);
arglist__29577 = cljs.core.next(arglist__29577);
var c2 = cljs.core.first(arglist__29577);
var colls = cljs.core.rest(arglist__29577);
return G__29576__delegate(c1,c2,colls);
});
G__29576.cljs$core$IFn$_invoke$arity$variadic = G__29576__delegate;
return G__29576;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$core$IFn$_invoke$arity$2 = interleave__2;
interleave.cljs$core$IFn$_invoke$arity$variadic = interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){return cljs.core.drop.call(null,(1),cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){var cat = (function cat(coll,colls__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4124__auto__ = cljs.core.seq.call(null,coll);if(temp__4124__auto__)
{var coll__$1 = temp__4124__auto__;return cljs.core.cons.call(null,cljs.core.first.call(null,coll__$1),cat.call(null,cljs.core.rest.call(null,coll__$1),colls__$1));
} else
{if(cljs.core.seq.call(null,colls__$1))
{return cat.call(null,cljs.core.first.call(null,colls__$1),cljs.core.rest.call(null,colls__$1));
} else
{return null;
}
}
}),null,null));
});return cat.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__29578__delegate = function (f,coll,colls){return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__29578 = function (f,coll,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29578__delegate.call(this,f,coll,colls);};
G__29578.cljs$lang$maxFixedArity = 2;
G__29578.cljs$lang$applyTo = (function (arglist__29579){
var f = cljs.core.first(arglist__29579);
arglist__29579 = cljs.core.next(arglist__29579);
var coll = cljs.core.first(arglist__29579);
var colls = cljs.core.rest(arglist__29579);
return G__29578__delegate(f,coll,colls);
});
G__29578.cljs$core$IFn$_invoke$arity$variadic = G__29578__delegate;
return G__29578;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$core$IFn$_invoke$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$core$IFn$_invoke$arity$2 = mapcat__2;
mapcat.cljs$core$IFn$_invoke$arity$variadic = mapcat__3.cljs$core$IFn$_invoke$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);var size = cljs.core.count.call(null,c);var b = cljs.core.chunk_buffer.call(null,size);var n__8802__auto___29580 = size;var i_29581 = (0);while(true){
if((i_29581 < n__8802__auto___29580))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c,i_29581))))
{cljs.core.chunk_append.call(null,b,cljs.core._nth.call(null,c,i_29581));
} else
{}
{
var G__29582 = (i_29581 + (1));
i_29581 = G__29582;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),filter.call(null,pred,cljs.core.chunk_rest.call(null,s)));
} else
{var f = cljs.core.first.call(null,s);var r = cljs.core.rest.call(null,s);if(cljs.core.truth_(pred.call(null,f)))
{return cljs.core.cons.call(null,f,filter.call(null,pred,r));
} else
{return filter.call(null,pred,r);
}
}
} else
{return null;
}
}),null,null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){var walk = (function walk(node){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null,null));
});return walk.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){return cljs.core.filter.call(null,(function (p1__29583_SHARP_){return !(cljs.core.sequential_QMARK_.call(null,p1__29583_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){if(!((to == null)))
{if((function (){var G__29585 = to;if(G__29585)
{var bit__8589__auto__ = (G__29585.cljs$lang$protocol_mask$partition1$ & (4));if((bit__8589__auto__) || (G__29585.cljs$core$IEditableCollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__29586__delegate = function (f,c1,c2,c3,colls){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__29586 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__29586__delegate.call(this,f,c1,c2,c3,colls);};
G__29586.cljs$lang$maxFixedArity = 4;
G__29586.cljs$lang$applyTo = (function (arglist__29587){
var f = cljs.core.first(arglist__29587);
arglist__29587 = cljs.core.next(arglist__29587);
var c1 = cljs.core.first(arglist__29587);
arglist__29587 = cljs.core.next(arglist__29587);
var c2 = cljs.core.first(arglist__29587);
arglist__29587 = cljs.core.next(arglist__29587);
var c3 = cljs.core.first(arglist__29587);
var colls = cljs.core.rest(arglist__29587);
return G__29586__delegate(f,c1,c2,c3,colls);
});
G__29586.cljs$core$IFn$_invoke$arity$variadic = G__29586__delegate;
return G__29586;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$core$IFn$_invoke$arity$2 = mapv__2;
mapv.cljs$core$IFn$_invoke$arity$3 = mapv__3;
mapv.cljs$core$IFn$_invoke$arity$4 = mapv__4;
mapv.cljs$core$IFn$_invoke$arity$variadic = mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var p = cljs.core.take.call(null,n,s);if((n === cljs.core.count.call(null,p)))
{return cljs.core.cons.call(null,p,partition.call(null,n,step,cljs.core.drop.call(null,step,s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var p = cljs.core.take.call(null,n,s);if((n === cljs.core.count.call(null,p)))
{return cljs.core.cons.call(null,p,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s)));
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.take.call(null,n,cljs.core.concat.call(null,p,pad)));
}
} else
{return null;
}
}),null,null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
partition.cljs$core$IFn$_invoke$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){return get_in.call(null,m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){var sentinel = cljs.core.lookup_sentinel;var m__$1 = m;var ks__$1 = cljs.core.seq.call(null,ks);while(true){
if(ks__$1)
{if(!((function (){var G__29589 = m__$1;if(G__29589)
{var bit__8596__auto__ = (G__29589.cljs$lang$protocol_mask$partition0$ & (256));if((bit__8596__auto__) || (G__29589.cljs$core$ILookup$))
{return true;
} else
{if((!G__29589.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__29589);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__29589);
}
})()))
{return not_found;
} else
{var m__$2 = cljs.core.get.call(null,m__$1,cljs.core.first.call(null,ks__$1),sentinel);if((sentinel === m__$2))
{return not_found;
} else
{{
var G__29590 = sentinel;
var G__29591 = m__$2;
var G__29592 = cljs.core.next.call(null,ks__$1);
sentinel = G__29590;
m__$1 = G__29591;
ks__$1 = G__29592;
continue;
}
}
}
} else
{return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$core$IFn$_invoke$arity$2 = get_in__2;
get_in.cljs$core$IFn$_invoke$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__29593,v){var vec__29595 = p__29593;var k = cljs.core.nth.call(null,vec__29595,(0),null);var ks = cljs.core.nthnext.call(null,vec__29595,(1));if(ks)
{return cljs.core.assoc.call(null,m,k,assoc_in.call(null,cljs.core.get.call(null,m,k),ks,v));
} else
{return cljs.core.assoc.call(null,m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() {
var update_in = null;
var update_in__3 = (function (m,p__29596,f){var vec__29606 = p__29596;var k = cljs.core.nth.call(null,vec__29606,(0),null);var ks = cljs.core.nthnext.call(null,vec__29606,(1));if(ks)
{return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f));
} else
{return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
});
var update_in__4 = (function (m,p__29597,f,a){var vec__29607 = p__29597;var k = cljs.core.nth.call(null,vec__29607,(0),null);var ks = cljs.core.nthnext.call(null,vec__29607,(1));if(ks)
{return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f,a));
} else
{return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),a));
}
});
var update_in__5 = (function (m,p__29598,f,a,b){var vec__29608 = p__29598;var k = cljs.core.nth.call(null,vec__29608,(0),null);var ks = cljs.core.nthnext.call(null,vec__29608,(1));if(ks)
{return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f,a,b));
} else
{return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),a,b));
}
});
var update_in__6 = (function (m,p__29599,f,a,b,c){var vec__29609 = p__29599;var k = cljs.core.nth.call(null,vec__29609,(0),null);var ks = cljs.core.nthnext.call(null,vec__29609,(1));if(ks)
{return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f,a,b,c));
} else
{return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),a,b,c));
}
});
var update_in__7 = (function() { 
var G__29611__delegate = function (m,p__29600,f,a,b,c,args){var vec__29610 = p__29600;var k = cljs.core.nth.call(null,vec__29610,(0),null);var ks = cljs.core.nthnext.call(null,vec__29610,(1));if(ks)
{return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k),ks,f,a,b,c,args));
} else
{return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),a,b,c,args));
}
};
var G__29611 = function (m,p__29600,f,a,b,c,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__29611__delegate.call(this,m,p__29600,f,a,b,c,args);};
G__29611.cljs$lang$maxFixedArity = 6;
G__29611.cljs$lang$applyTo = (function (arglist__29612){
var m = cljs.core.first(arglist__29612);
arglist__29612 = cljs.core.next(arglist__29612);
var p__29600 = cljs.core.first(arglist__29612);
arglist__29612 = cljs.core.next(arglist__29612);
var f = cljs.core.first(arglist__29612);
arglist__29612 = cljs.core.next(arglist__29612);
var a = cljs.core.first(arglist__29612);
arglist__29612 = cljs.core.next(arglist__29612);
var b = cljs.core.first(arglist__29612);
arglist__29612 = cljs.core.next(arglist__29612);
var c = cljs.core.first(arglist__29612);
var args = cljs.core.rest(arglist__29612);
return G__29611__delegate(m,p__29600,f,a,b,c,args);
});
G__29611.cljs$core$IFn$_invoke$arity$variadic = G__29611__delegate;
return G__29611;
})()
;
update_in = function(m,p__29600,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__29600,f);
case 4:
return update_in__4.call(this,m,p__29600,f,a);
case 5:
return update_in__5.call(this,m,p__29600,f,a,b);
case 6:
return update_in__6.call(this,m,p__29600,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__29600,f,a,b,c, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_in.cljs$lang$maxFixedArity = 6;
update_in.cljs$lang$applyTo = update_in__7.cljs$lang$applyTo;
update_in.cljs$core$IFn$_invoke$arity$3 = update_in__3;
update_in.cljs$core$IFn$_invoke$arity$4 = update_in__4;
update_in.cljs$core$IFn$_invoke$arity$5 = update_in__5;
update_in.cljs$core$IFn$_invoke$arity$6 = update_in__6;
update_in.cljs$core$IFn$_invoke$arity$variadic = update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__8516__auto__,writer__8517__auto__,opts__8518__auto__){return cljs.core._write.call(null,writer__8517__auto__,"cljs.core/VectorNode");
});
cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){return (new cljs.core.VectorNode(edit,arr));
});
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function pv_aget(node,idx){return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){var cnt = pv.cnt;if((cnt < (32)))
{return (0);
} else
{return (((cnt - (1)) >>> (5)) << (5));
}
});
cljs.core.new_path = (function new_path(edit,level,node){var ll = level;var ret = node;while(true){
if((ll === (0)))
{return ret;
} else
{var embed = ret;var r = cljs.core.pv_fresh_node.call(null,edit);var _ = cljs.core.pv_aset.call(null,r,(0),embed);{
var G__29613 = (ll - (5));
var G__29614 = r;
ll = G__29613;
ret = G__29614;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){var ret = cljs.core.pv_clone_node.call(null,parent);var subidx = (((pv.cnt - (1)) >>> level) & (31));if(((5) === level))
{cljs.core.pv_aset.call(null,ret,subidx,tailnode);
return ret;
} else
{var child = cljs.core.pv_aget.call(null,parent,subidx);if(!((child == null)))
{var node_to_insert = push_tail.call(null,pv,(level - (5)),child,tailnode);cljs.core.pv_aset.call(null,ret,subidx,node_to_insert);
return ret;
} else
{var node_to_insert = cljs.core.new_path.call(null,null,(level - (5)),tailnode);cljs.core.pv_aset.call(null,ret,subidx,node_to_insert);
return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){throw (new Error(("No item "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+" in vector of length "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt))));
});
cljs.core.first_array_for_longvec = (function first_array_for_longvec(pv){var node = pv.root;var level = pv.shift;while(true){
if((level > (0)))
{{
var G__29615 = cljs.core.pv_aget.call(null,node,(0));
var G__29616 = (level - (5));
node = G__29615;
level = G__29616;
continue;
}
} else
{return node.arr;
}
break;
}
});
cljs.core.unchecked_array_for = (function unchecked_array_for(pv,i){if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node = pv.root;var level = pv.shift;while(true){
if((level > (0)))
{{
var G__29617 = cljs.core.pv_aget.call(null,node,((i >>> level) & (31)));
var G__29618 = (level - (5));
node = G__29617;
level = G__29618;
continue;
}
} else
{return node.arr;
}
break;
}
}
});
cljs.core.array_for = (function array_for(pv,i){if((((0) <= i)) && ((i < pv.cnt)))
{return cljs.core.unchecked_array_for.call(null,pv,i);
} else
{return cljs.core.vector_index_out_of_bounds.call(null,i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){var ret = cljs.core.pv_clone_node.call(null,node);if((level === (0)))
{cljs.core.pv_aset.call(null,ret,(i & (31)),val);
return ret;
} else
{var subidx = ((i >>> level) & (31));cljs.core.pv_aset.call(null,ret,subidx,do_assoc.call(null,pv,(level - (5)),cljs.core.pv_aget.call(null,node,subidx),i,val));
return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){var subidx = (((pv.cnt - (2)) >>> level) & (31));if((level > (5)))
{var new_child = pop_tail.call(null,pv,(level - (5)),cljs.core.pv_aget.call(null,node,subidx));if(((new_child == null)) && ((subidx === (0))))
{return null;
} else
{var ret = cljs.core.pv_clone_node.call(null,node);cljs.core.pv_aset.call(null,ret,subidx,new_child);
return ret;
}
} else
{if((subidx === (0)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var ret = cljs.core.pv_clone_node.call(null,node);cljs.core.pv_aset.call(null,ret,subidx,null);
return ret;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.call(null,coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){var self__ = this;
var v__$1 = this;var step_init = [(0),init];var i = (0);while(true){
if((i < self__.cnt))
{var arr = cljs.core.unchecked_array_for.call(null,v__$1,i);var len = arr.length;var init__$1 = (function (){var j = (0);var init__$1 = (step_init[(1)]);while(true){
if((j < len))
{var init__$2 = f.call(null,init__$1,(j + i),(arr[j]));if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return init__$2;
} else
{{
var G__29620 = (j + (1));
var G__29621 = init__$2;
j = G__29620;
init__$1 = G__29621;
continue;
}
}
} else
{(step_init[(0)] = len);
(step_init[(1)] = init__$1);
return init__$1;
}
break;
}
})();if(cljs.core.reduced_QMARK_.call(null,init__$1))
{return cljs.core.deref.call(null,init__$1);
} else
{{
var G__29622 = (i + (step_init[(0)]));
i = G__29622;
continue;
}
}
} else
{return (step_init[(1)]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;return (cljs.core.array_for.call(null,coll__$1,n)[(n & (31))]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{return (cljs.core.unchecked_array_for.call(null,coll__$1,n)[(n & (31))]);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{if((cljs.core.tail_off.call(null,coll__$1) <= n))
{var new_tail = cljs.core.aclone.call(null,self__.tail);(new_tail[(n & (31))] = val);
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc.call(null,coll__$1,self__.shift,self__.root,n,val),self__.tail,null));
}
} else
{if((n === self__.cnt))
{return cljs.core._conj.call(null,coll__$1,val);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw (new Error(("Index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+" out of bounds  [0,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cnt)+"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,coll__$1,(0));
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,coll__$1,(1));
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core._nth.call(null,coll__$1,(self__.cnt - (1)));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === (0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(((1) === self__.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
} else
{if(((1) < (self__.cnt - cljs.core.tail_off.call(null,coll__$1))))
{return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - (1)),self__.shift,self__.root,self__.tail.slice((0),(-1)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var new_tail = cljs.core.unchecked_array_for.call(null,coll__$1,(self__.cnt - (2)));var nr = cljs.core.pop_tail.call(null,coll__$1,self__.shift,self__.root);var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);var cnt_1 = (self__.cnt - (1));if((((5) < self__.shift)) && ((cljs.core.pv_aget.call(null,new_root,(1)) == null)))
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - (5)),cljs.core.pv_aget.call(null,new_root,(0)),new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return (new cljs.core.RSeq(coll__$1,(self__.cnt - (1)),null));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientVector(self__.cnt,self__.shift,cljs.core.tv_editable_root.call(null,self__.root),cljs.core.tv_editable_tail.call(null,self__.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.ci_reduce.call(null,v__$1,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){var self__ = this;
var v__$1 = this;return cljs.core.ci_reduce.call(null,v__$1,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._assoc_n.call(null,coll__$1,k,v);
} else
{throw (new Error("Vector's key for assoc must be a number."));
}
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === (0)))
{return null;
} else
{if((self__.cnt <= (32)))
{return (new cljs.core.IndexedSeq(self__.tail,(0)));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.chunked_seq.call(null,coll__$1,cljs.core.first_array_for_longvec.call(null,coll__$1),(0),(0));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(((self__.cnt - cljs.core.tail_off.call(null,coll__$1)) < (32)))
{var len = self__.tail.length;var new_tail = (new Array((len + (1))));var n__8802__auto___29623 = len;var i_29624 = (0);while(true){
if((i_29624 < n__8802__auto___29623))
{(new_tail[i_29624] = (self__.tail[i_29624]));
{
var G__29625 = (i_29624 + (1));
i_29624 = G__29625;
continue;
}
} else
{}
break;
}
(new_tail[len] = o);
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),self__.shift,self__.root,new_tail,null));
} else
{var root_overflow_QMARK_ = ((self__.cnt >>> (5)) > ((1) << self__.shift));var new_shift = ((root_overflow_QMARK_)?(self__.shift + (5)):self__.shift);var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node.call(null,null);cljs.core.pv_aset.call(null,n_r,(0),self__.root);
cljs.core.pv_aset.call(null,n_r,(1),cljs.core.new_path.call(null,null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));
return n_r;
})():cljs.core.push_tail.call(null,coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),new_shift,new_root,[o],null));
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__29626 = null;
var G__29626__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__29626__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__29626 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29626__2.call(this,self__,k);
case 3:
return G__29626__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29626;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (self__,args29619){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29619)));
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});
cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,(0),(5),cljs.core.PersistentVector.EMPTY_NODE,[],(0)));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){var l = xs.length;var xs__$1 = ((no_clone)?xs:cljs.core.aclone.call(null,xs));if((l < (32)))
{return (new cljs.core.PersistentVector(null,l,(5),cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else
{var node = xs__$1.slice((0),(32));var v = (new cljs.core.PersistentVector(null,(32),(5),cljs.core.PersistentVector.EMPTY_NODE,node,null));var i = (32);var out = cljs.core._as_transient.call(null,v);while(true){
if((i < l))
{{
var G__29627 = (i + (1));
var G__29628 = cljs.core.conj_BANG_.call(null,out,(xs__$1[i]));
i = G__29627;
out = G__29628;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === (0))))
{return cljs.core.PersistentVector.fromArray.call(null,args.arr,true);
} else
{return cljs.core.vec.call(null,args);
}
};
var vector = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__29629){
var args = cljs.core.seq(arglist__29629);
return vector__delegate(args);
});
vector.cljs$core$IFn$_invoke$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32243948;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + (1)) < self__.node.length))
{var s = cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + (1)));if((s == null))
{return null;
} else
{return s;
}
} else
{return cljs.core._chunked_next.call(null,coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f,start);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.node[self__.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + (1)) < self__.node.length))
{var s = cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + (1)));if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
} else
{return cljs.core._chunked_rest.call(null,coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.array_chunk.call(null,self__.node,self__.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var end = (self__.i + self__.node.length);if((end < cljs.core._count.call(null,self__.vec)))
{return cljs.core.chunked_seq.call(null,self__.vec,cljs.core.unchecked_array_for.call(null,self__.vec,end),end,(0));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;return cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var end = (self__.i + self__.node.length);if((end < cljs.core._count.call(null,self__.vec)))
{return cljs.core.chunked_seq.call(null,self__.vec,cljs.core.unchecked_array_for.call(null,self__.vec,end),end,(0));
} else
{return null;
}
});
cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for.call(null,vec,i),i,off,null,null));
});
var chunked_seq__4 = (function (vec,node,i,off){return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var chunked_seq__5 = (function (vec,node,i,off,meta){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$core$IFn$_invoke$arity$3 = chunked_seq__3;
chunked_seq.cljs$core$IFn$_invoke$arity$4 = chunked_seq__4;
chunked_seq.cljs$core$IFn$_invoke$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 166617887;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.call(null,coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(((n < (0))) || ((self__.end <= (self__.start + n))))
{return cljs.core.vector_index_out_of_bounds.call(null,n,(self__.end - self__.start));
} else
{return cljs.core._nth.call(null,self__.v,(self__.start + n));
}
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if(((n < (0))) || ((self__.end <= (self__.start + n))))
{return not_found;
} else
{return cljs.core._nth.call(null,self__.v,(self__.start + n),not_found);
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;var v_pos = (self__.start + n);return cljs.core.build_subvec.call(null,self__.meta,cljs.core.assoc.call(null,self__.v,v_pos,val),self__.start,(function (){var x__8253__auto__ = self__.end;var y__8254__auto__ = (v_pos + (1));return ((x__8253__auto__ > y__8254__auto__) ? x__8253__auto__ : y__8254__auto__);
})(),null);
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.end - self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,self__.v,(self__.end - (1)));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.start === self__.end))
{throw (new Error("Can't pop empty vector"));
} else
{return cljs.core.build_subvec.call(null,self__.meta,self__.v,self__.start,(self__.end - (1)),null);
}
});
cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(!((self__.start === self__.end)))
{return (new cljs.core.RSeq(coll__$1,((self__.end - self__.start) - (1)),null));
} else
{return null;
}
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.call(null,coll__$1,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.call(null,coll__$1,f,start__$1);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){var self__ = this;
var coll__$1 = this;if(typeof key === 'number')
{return cljs.core._assoc_n.call(null,coll__$1,key,val);
} else
{throw (new Error("Subvec's key for assoc must be a number."));
}
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var subvec_seq = ((function (coll__$1){
return (function subvec_seq(i){if((i === self__.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,self__.v,i),(new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){return subvec_seq.call(null,(i + (1)));
});})(coll__$1))
,null,null)));
}
});})(coll__$1))
;return subvec_seq.call(null,self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return cljs.core.build_subvec.call(null,meta__$1,self__.v,self__.start,self__.end,self__.__hash);
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.build_subvec.call(null,self__.meta,cljs.core._assoc_n.call(null,self__.v,self__.end,o),self__.start,(self__.end + (1)),null);
});
cljs.core.Subvec.prototype.call = (function() {
var G__29631 = null;
var G__29631__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__29631__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__29631 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29631__2.call(this,self__,k);
case 3:
return G__29631__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29631;
})()
;
cljs.core.Subvec.prototype.apply = (function (self__,args29630){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29630)));
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){return (new cljs.core.Subvec(meta,v,start,end,__hash));
});
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){while(true){
if((v instanceof cljs.core.Subvec))
{{
var G__29632 = meta;
var G__29633 = v.v;
var G__29634 = (v.start + start);
var G__29635 = (v.start + end);
var G__29636 = __hash;
meta = G__29632;
v = G__29633;
start = G__29634;
end = G__29635;
__hash = G__29636;
continue;
}
} else
{var c = cljs.core.count.call(null,v);if(((start < (0))) || ((end < (0))) || ((start > c)) || ((end > c)))
{throw (new Error("Index out of bounds"));
} else
{}
return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){return cljs.core.build_subvec.call(null,null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,cljs.core.aclone.call(null,node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){return (new cljs.core.VectorNode((function (){var obj29640 = {};return obj29640;
})(),cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];cljs.core.array_copy.call(null,tl,(0),ret,(0),tl.length);
return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){var ret = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);var subidx = (((tv.cnt - (1)) >>> level) & (31));cljs.core.pv_aset.call(null,ret,subidx,(((level === (5)))?tail_node:(function (){var child = cljs.core.pv_aget.call(null,ret,subidx);if(!((child == null)))
{return tv_push_tail.call(null,tv,(level - (5)),child,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - (5)),tail_node);
}
})()));
return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){var node__$1 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);var subidx = (((tv.cnt - (2)) >>> level) & (31));if((level > (5)))
{var new_child = tv_pop_tail.call(null,tv,(level - (5)),cljs.core.pv_aget.call(null,node__$1,subidx));if(((new_child == null)) && ((subidx === (0))))
{return null;
} else
{cljs.core.pv_aset.call(null,node__$1,subidx,new_child);
return node__$1;
}
} else
{if((subidx === (0)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{cljs.core.pv_aset.call(null,node__$1,subidx,null);
return node__$1;
} else
{return null;
}
}
}
});
cljs.core.unchecked_editable_array_for = (function unchecked_editable_array_for(tv,i){if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root = tv.root;var node = root;var level = tv.shift;while(true){
if((level > (0)))
{{
var G__29641 = cljs.core.tv_ensure_editable.call(null,root.edit,cljs.core.pv_aget.call(null,node,((i >>> level) & (31))));
var G__29642 = (level - (5));
node = G__29641;
level = G__29642;
continue;
}
} else
{return node.arr;
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__29644 = null;
var G__29644__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29644__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29644 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29644__2.call(this,self__,k);
case 3:
return G__29644__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29644;
})()
;
cljs.core.TransientVector.prototype.apply = (function (self__,args29643){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29643)));
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.call(null,coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return (cljs.core.array_for.call(null,coll__$1,n)[(n & (31))]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{return cljs.core._nth.call(null,coll__$1,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return self__.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if((((0) <= n)) && ((n < self__.cnt)))
{if((cljs.core.tail_off.call(null,tcoll__$1) <= n))
{(self__.tail[(n & (31))] = val);
return tcoll__$1;
} else
{var new_root = ((function (tcoll__$1){
return (function go(level,node){var node__$1 = cljs.core.tv_ensure_editable.call(null,self__.root.edit,node);if((level === (0)))
{cljs.core.pv_aset.call(null,node__$1,(n & (31)),val);
return node__$1;
} else
{var subidx = ((n >>> level) & (31));cljs.core.pv_aset.call(null,node__$1,subidx,go.call(null,(level - (5)),cljs.core.pv_aget.call(null,node__$1,subidx)));
return node__$1;
}
});})(tcoll__$1))
.call(null,self__.shift,self__.root);self__.root = new_root;
return tcoll__$1;
}
} else
{if((n === self__.cnt))
{return cljs.core._conj_BANG_.call(null,tcoll__$1,val);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw (new Error(("Index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+" out of bounds for TransientVector of length"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cnt))));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if((self__.cnt === (0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(((1) === self__.cnt))
{self__.cnt = (0);
return tcoll__$1;
} else
{if((((self__.cnt - (1)) & (31)) > (0)))
{self__.cnt = (self__.cnt - (1));
return tcoll__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var new_tail = cljs.core.unchecked_editable_array_for.call(null,tcoll__$1,(self__.cnt - (2)));var new_root = (function (){var nr = cljs.core.tv_pop_tail.call(null,tcoll__$1,self__.shift,self__.root);if(!((nr == null)))
{return nr;
} else
{return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();if((((5) < self__.shift)) && ((cljs.core.pv_aget.call(null,new_root,(1)) == null)))
{var new_root__$1 = cljs.core.tv_ensure_editable.call(null,self__.root.edit,cljs.core.pv_aget.call(null,new_root,(0)));self__.root = new_root__$1;
self__.shift = (self__.shift - (5));
self__.cnt = (self__.cnt - (1));
self__.tail = new_tail;
return tcoll__$1;
} else
{self__.root = new_root;
self__.cnt = (self__.cnt - (1));
self__.tail = new_tail;
return tcoll__$1;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;if(typeof key === 'number')
{return cljs.core._assoc_n_BANG_.call(null,tcoll__$1,key,val);
} else
{throw (new Error("TransientVector's key for assoc! must be a number."));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if(((self__.cnt - cljs.core.tail_off.call(null,tcoll__$1)) < (32)))
{(self__.tail[(self__.cnt & (31))] = o);
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
} else
{var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(new_tail[(0)] = o);
self__.tail = new_tail;
if(((self__.cnt >>> (5)) > ((1) << self__.shift)))
{var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_shift = (self__.shift + (5));(new_root_array[(0)] = self__.root);
(new_root_array[(1)] = cljs.core.new_path.call(null,self__.root.edit,self__.shift,tail_node));
self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));
self__.shift = new_shift;
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
} else
{var new_root = cljs.core.tv_push_tail.call(null,tcoll__$1,self__.shift,self__.root,tail_node);self__.root = new_root;
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{self__.root.edit = null;
var len = (self__.cnt - cljs.core.tail_off.call(null,tcoll__$1));var trimmed_tail = (new Array(len));cljs.core.array_copy.call(null,self__.tail,(0),trimmed_tail,(0),len);
return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.__GT_TransientVector = (function __GT_TransientVector(cnt,shift,root,tail){return (new cljs.core.TransientVector(cnt,shift,root,tail));
});

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first.call(null,self__.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var temp__4124__auto__ = cljs.core.next.call(null,self__.front);if(temp__4124__auto__)
{var f1 = temp__4124__auto__;return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else
{if((self__.rear == null))
{return cljs.core._empty.call(null,coll__$1);
} else
{return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first.call(null,self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{var temp__4124__auto__ = cljs.core.next.call(null,self__.front);if(temp__4124__auto__)
{var f1 = temp__4124__auto__;return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),f1,self__.rear,null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),cljs.core.seq.call(null,self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll__$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first.call(null,self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.rest.call(null,cljs.core.seq.call(null,coll__$1));
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var rear__$1 = cljs.core.seq.call(null,self__.rear);if(cljs.core.truth_((function (){var or__7946__auto__ = self__.front;if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return rear__$1;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq.call(null,rear__$1),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.call(null,(function (){var or__7946__auto__ = self__.rear;if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),cljs.core.conj.call(null,self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return false;
});
cljs.core.__GT_NeverEquiv = (function __GT_NeverEquiv(){return (new cljs.core.NeverEquiv());
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){var len = array.length;var i = (0);while(true){
if((i < len))
{if((k === (array[i])))
{return i;
} else
{{
var G__29645 = (i + incr);
i = G__29645;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){var a__$1 = cljs.core.hash.call(null,a);var b__$1 = cljs.core.hash.call(null,b);if((a__$1 < b__$1))
{return (-1);
} else
{if((a__$1 > b__$1))
{return (1);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return (0);
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){var ks = m.keys;var len = ks.length;var so = m.strobj;var mm = cljs.core.meta.call(null,m);var i = (0);var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{var k__$1 = (ks[i]);{
var G__29646 = (i + (1));
var G__29647 = cljs.core.assoc_BANG_.call(null,out,k__$1,(so[k__$1]));
i = G__29646;
out = G__29647;
continue;
}
} else
{return cljs.core.with_meta.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){var new_obj = (function (){var obj29651 = {};return obj29651;
})();var l = ks.length;var i_29652 = (0);while(true){
if((i_29652 < l))
{var k_29653 = (ks[i_29652]);(new_obj[k_29653] = (obj[k_29653]));
{
var G__29654 = (i_29652 + (1));
i_29652 = G__29654;
continue;
}
} else
{}
break;
}
return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if((goog.isString(k)) && (!((cljs.core.scan_array.call(null,(1),k,self__.keys) == null))))
{return (self__.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.keys.length;var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);var init__$1 = init;while(true){
if(cljs.core.seq.call(null,keys__$1))
{var k = cljs.core.first.call(null,keys__$1);var init__$2 = f.call(null,init__$1,k,(self__.strobj[k]));if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{{
var G__29657 = cljs.core.rest.call(null,keys__$1);
var G__29658 = init__$2;
keys__$1 = G__29657;
init__$1 = G__29658;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_unordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map.call(null,coll__$1,other);
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll__$1));
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,self__.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((goog.isString(k)) && (!((cljs.core.scan_array.call(null,(1),k,self__.keys) == null))))
{var new_keys = cljs.core.aclone.call(null,self__.keys);var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);new_keys.splice(cljs.core.scan_array.call(null,(1),k,new_keys),(1));
delete new_strobj[k];
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
} else
{return coll__$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(goog.isString(k))
{if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD)))
{return cljs.core.obj_map__GT_hash_map.call(null,coll__$1,k,v);
} else
{if(!((cljs.core.scan_array.call(null,(1),k,self__.keys) == null)))
{var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);(new_strobj[k] = v);
return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + (1)),null));
} else
{var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);var new_keys = cljs.core.aclone.call(null,self__.keys);(new_strobj[k] = v);
new_keys.push(k);
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll__$1,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((goog.isString(k)) && (!((cljs.core.scan_array.call(null,(1),k,self__.keys) == null))))
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.keys.length > (0)))
{return cljs.core.map.call(null,((function (coll__$1){
return (function (p1__29655_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__29655_SHARP_,(self__.strobj[p1__29655_SHARP_])],null));
});})(coll__$1))
,self__.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll__$1,entry);
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__29659 = null;
var G__29659__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29659__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29659 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29659__2.call(this,self__,k);
case 3:
return G__29659__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29659;
})()
;
cljs.core.ObjMap.prototype.apply = (function (self__,args29656){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29656)));
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj29661 = {};return obj29661;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if(((arr[i]) == null))
{return i;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{{
var G__29662 = (i + (2));
i = G__29662;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function array_map_index_of_keyword_QMARK_(arr,m,k){var len = arr.length;var kstr = k.fqn;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((function (){var k_SINGLEQUOTE_ = (arr[i]);return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})())
{return i;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{{
var G__29663 = (i + (2));
i = G__29663;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function array_map_index_of_symbol_QMARK_(arr,m,k){var len = arr.length;var kstr = k.str;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((function (){var k_SINGLEQUOTE_ = (arr[i]);return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})())
{return i;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{{
var G__29664 = (i + (2));
i = G__29664;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function array_map_index_of_identical_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((k === (arr[i])))
{return i;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{{
var G__29665 = (i + (2));
i = G__29665;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function array_map_index_of_equiv_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if(cljs.core._EQ_.call(null,k,(arr[i])))
{return i;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{{
var G__29666 = (i + (2));
i = G__29666;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){var arr = m.arr;if((k instanceof cljs.core.Keyword))
{return cljs.core.array_map_index_of_keyword_QMARK_.call(null,arr,m,k);
} else
{if((goog.isString(k)) || (typeof k === 'number'))
{return cljs.core.array_map_index_of_identical_QMARK_.call(null,arr,m,k);
} else
{if((k instanceof cljs.core.Symbol))
{return cljs.core.array_map_index_of_symbol_QMARK_.call(null,arr,m,k);
} else
{if((k == null))
{return cljs.core.array_map_index_of_nil_QMARK_.call(null,arr,m,k);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.array_map_index_of_equiv_QMARK_.call(null,arr,m,k);
} else
{return null;
}
}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){var arr = m.arr;var l = arr.length;var narr = (new Array((l + (2))));var i_29667 = (0);while(true){
if((i_29667 < l))
{(narr[i_29667] = (arr[i_29667]));
{
var G__29668 = (i_29667 + (1));
i_29667 = G__29668;
continue;
}
} else
{}
break;
}
(narr[l] = k);
(narr[(l + (1))] = v);
return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/PersistentArrayMapSeq");
});
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else
{return null;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return ((self__.arr.length - self__.i) / (2));
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll.call(null,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__._meta);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});
cljs.core.persistent_array_map_seq = (function persistent_array_map_seq(arr,i,_meta){if((i <= (arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16647951;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of.call(null,coll__$1,k);if((idx === (-1)))
{return not_found;
} else
{return (self__.arr[(idx + (1))]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var init__$2 = f.call(null,init__$1,(self__.arr[i]),(self__.arr[(i + (1))]));if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{{
var G__29673 = (i + (2));
var G__29674 = init__$2;
i = G__29673;
init__$1 = G__29674;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_unordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map.call(null,coll__$1,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientArrayMap((function (){var obj29671 = {};return obj29671;
})(),self__.arr.length,cljs.core.aclone.call(null,self__.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of.call(null,coll__$1,k);if((idx >= (0)))
{var len = self__.arr.length;var new_len = (len - (2));if((new_len === (0)))
{return cljs.core._empty.call(null,coll__$1);
} else
{var new_arr = (new Array(new_len));var s = (0);var d = (0);while(true){
if((s >= len))
{return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - (1)),new_arr,null));
} else
{if(cljs.core._EQ_.call(null,k,(self__.arr[s])))
{{
var G__29675 = (s + (2));
var G__29676 = d;
s = G__29675;
d = G__29676;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + (1))] = (self__.arr[(s + (1))]));
{
var G__29677 = (s + (2));
var G__29678 = (d + (2));
s = G__29677;
d = G__29678;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll__$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of.call(null,coll__$1,k);if((idx === (-1)))
{if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr__$1 = cljs.core.array_map_extend_kv.call(null,coll__$1,k,v);return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + (1)),arr__$1,null));
} else
{return cljs.core._with_meta.call(null,cljs.core._assoc.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else
{if((v === (self__.arr[(idx + (1))])))
{return coll__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var arr__$1 = (function (){var G__29672 = cljs.core.aclone.call(null,self__.arr);(G__29672[(idx + (1))] = v);
return G__29672;
})();return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((cljs.core.array_map_index_of.call(null,coll__$1,k) === (-1)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.persistent_array_map_seq.call(null,self__.arr,(0),null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq.call(null,entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first.call(null,es);if(cljs.core.vector_QMARK_.call(null,e))
{{
var G__29679 = cljs.core._assoc.call(null,ret,cljs.core._nth.call(null,e,(0)),cljs.core._nth.call(null,e,(1)));
var G__29680 = cljs.core.next.call(null,es);
ret = G__29679;
es = G__29680;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__29681 = null;
var G__29681__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29681__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29681 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29681__2.call(this,self__,k);
case 3:
return G__29681__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29681;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args29669){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29669)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentArrayMap = (function __GT_PersistentArrayMap(meta,cnt,arr,__hash){return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,(0),[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = (8);
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){var arr__$1 = ((no_clone)?arr:cljs.core.aclone.call(null,arr));if(no_check)
{var cnt = (arr__$1.length / (2));return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else
{var len = arr__$1.length;var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__29682 = (i + (2));
var G__29683 = cljs.core._assoc_BANG_.call(null,ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__29682;
ret = G__29683;
continue;
}
} else
{return cljs.core._persistent_BANG_.call(null,ret);
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of.call(null,tcoll__$1,key);if((idx >= (0)))
{(self__.arr[idx] = (self__.arr[(self__.len - (2))]));
(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));
var G__29684_29686 = self__.arr;G__29684_29686.pop();
G__29684_29686.pop();
self__.len = (self__.len - (2));
} else
{}
return tcoll__$1;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of.call(null,tcoll__$1,key);if((idx === (-1)))
{if(((self__.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{self__.len = (self__.len + (2));
self__.arr.push(key);
self__.arr.push(val);
return tcoll__$1;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,self__.len,self__.arr),key,val);
}
} else
{if((val === (self__.arr[(idx + (1))])))
{return tcoll__$1;
} else
{(self__.arr[(idx + (1))] = val);
return tcoll__$1;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{if((function (){var G__29685 = o;if(G__29685)
{var bit__8596__auto__ = (G__29685.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__8596__auto__) || (G__29685.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__29685.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,G__29685);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,G__29685);
}
})())
{return cljs.core._assoc_BANG_.call(null,tcoll__$1,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es = cljs.core.seq.call(null,o);var tcoll__$2 = tcoll__$1;while(true){
var temp__4124__auto__ = cljs.core.first.call(null,es);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;{
var G__29687 = cljs.core.next.call(null,es);
var G__29688 = cljs.core._assoc_BANG_.call(null,tcoll__$2,cljs.core.key.call(null,e),cljs.core.val.call(null,e));
es = G__29687;
tcoll__$2 = G__29688;
continue;
}
} else
{return tcoll__$2;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{self__.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,self__.len,(2)),self__.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.call(null,tcoll__$1,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of.call(null,tcoll__$1,k);if((idx === (-1)))
{return not_found;
} else
{return (self__.arr[(idx + (1))]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{return cljs.core.quot.call(null,self__.len,(2));
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);var i = (0);while(true){
if((i < len))
{{
var G__29689 = cljs.core.assoc_BANG_.call(null,out,(arr[i]),(arr[(i + (1))]));
var G__29690 = (i + (2));
out = G__29689;
i = G__29690;
continue;
}
} else
{return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__8516__auto__,writer__8517__auto__,opts__8518__auto__){return cljs.core._write.call(null,writer__8517__auto__,"cljs.core/Box");
});
cljs.core.__GT_Box = (function __GT_Box(val){return (new cljs.core.Box(val));
});
cljs.core.key_test = (function key_test(key,other){if((key === other))
{return true;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,key,other))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core._EQ_.call(null,key,other);
} else
{return null;
}
}
}
});
cljs.core.mask = (function mask(hash,shift){return ((hash >>> shift) & (31));
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){var G__29693 = cljs.core.aclone.call(null,arr);(G__29693[i] = a);
return G__29693;
});
var clone_and_set__5 = (function (arr,i,a,j,b){var G__29694 = cljs.core.aclone.call(null,arr);(G__29694[i] = a);
(G__29694[j] = b);
return G__29694;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$core$IFn$_invoke$arity$3 = clone_and_set__3;
clone_and_set.cljs$core$IFn$_invoke$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){var new_arr = (new Array((arr.length - (2))));cljs.core.array_copy.call(null,arr,(0),new_arr,(0),((2) * i));
cljs.core.array_copy.call(null,arr,((2) * (i + (1))),new_arr,((2) * i),(new_arr.length - ((2) * i)));
return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){return cljs.core.bit_count.call(null,(bitmap & (bit - (1))));
});
cljs.core.bitpos = (function bitpos(hash,shift){return ((1) << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){var editable = inode.ensure_editable(edit);(editable.arr[i] = a);
return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){var editable = inode.ensure_editable(edit);(editable.arr[i] = a);
(editable.arr[j] = b);
return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$core$IFn$_invoke$arity$4 = edit_and_set__4;
edit_and_set.cljs$core$IFn$_invoke$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){var len = arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var init__$2 = (function (){var k = (arr[i]);if(!((k == null)))
{return f.call(null,init__$1,k,(arr[(i + (1))]));
} else
{var node = (arr[(i + (1))]);if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{{
var G__29695 = (i + (2));
var G__29696 = init__$2;
i = G__29695;
init__$1 = G__29696;
continue;
}
}
} else
{return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{var n = cljs.core.bit_count.call(null,self__.bitmap);var new_arr = (new Array((((n < (0)))?(4):((2) * (n + (1))))));cljs.core.array_copy.call(null,self__.arr,(0),new_arr,(0),((2) * n));
return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return cljs.core.edit_and_set.call(null,inode,edit__$1,(((2) * idx) + (1)),n);
} else
{if((self__.bitmap === bit))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{(removed_leaf_QMARK_[(0)] = true);
return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return inode;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){var self__ = this;
var inode = this;if((self__.bitmap === bit))
{return null;
} else
{var editable = inode.ensure_editable(e);var earr = editable.arr;var len = earr.length;editable.bitmap = (bit ^ editable.bitmap);
cljs.core.array_copy.call(null,earr,((2) * (i + (1))),earr,((2) * i),(len - ((2) * (i + (1)))));
(earr[(len - (2))] = null);
(earr[(len - (1))] = null);
return editable;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;return cljs.core.create_inode_seq.call(null,self__.arr);
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce.call(null,self__.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{return val_or_node.inode_lookup((shift + (5)),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{return val_or_node;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);if(((self__.bitmap & bit) === (0)))
{var n = cljs.core.bit_count.call(null,self__.bitmap);if((((2) * n) < self__.arr.length))
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr,((2) * idx),earr,((2) * (idx + (1))),((2) * (n - idx)));
(earr[((2) * idx)] = key);
(earr[(((2) * idx) + (1))] = val);
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{if((n >= (16)))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));
var i_29697 = (0);var j_29698 = (0);while(true){
if((i_29697 < (32)))
{if((((self__.bitmap >>> i_29697) & (1)) === (0)))
{{
var G__29699 = (i_29697 + (1));
var G__29700 = j_29698;
i_29697 = G__29699;
j_29698 = G__29700;
continue;
}
} else
{(nodes[i_29697] = ((!(((self__.arr[j_29698]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash.call(null,(self__.arr[j_29698])),(self__.arr[j_29698]),(self__.arr[(j_29698 + (1))]),added_leaf_QMARK_):(self__.arr[(j_29698 + (1))])));
{
var G__29701 = (i_29697 + (1));
var G__29702 = (j_29698 + (2));
i_29697 = G__29701;
j_29698 = G__29702;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit__$1,(n + (1)),nodes));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var new_arr = (new Array(((2) * (n + (4)))));cljs.core.array_copy.call(null,self__.arr,(0),new_arr,(0),((2) * idx));
(new_arr[((2) * idx)] = key);
(new_arr[(((2) * idx) + (1))] = val);
cljs.core.array_copy.call(null,self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));
added_leaf_QMARK_.val = true;
var editable = inode.ensure_editable(edit__$1);editable.arr = new_arr;
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{return null;
}
}
}
} else
{var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,(((2) * idx) + (1)),n);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,(((2) * idx) + (1)),val);
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),cljs.core.create_node.call(null,edit__$1,(shift + (5)),key_or_nil,val_or_node,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);if(((self__.bitmap & bit) === (0)))
{var n = cljs.core.bit_count.call(null,self__.bitmap);if((n >= (16)))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));
var i_29703 = (0);var j_29704 = (0);while(true){
if((i_29703 < (32)))
{if((((self__.bitmap >>> i_29703) & (1)) === (0)))
{{
var G__29705 = (i_29703 + (1));
var G__29706 = j_29704;
i_29703 = G__29705;
j_29704 = G__29706;
continue;
}
} else
{(nodes[i_29703] = ((!(((self__.arr[j_29704]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash.call(null,(self__.arr[j_29704])),(self__.arr[j_29704]),(self__.arr[(j_29704 + (1))]),added_leaf_QMARK_):(self__.arr[(j_29704 + (1))])));
{
var G__29707 = (i_29703 + (1));
var G__29708 = (j_29704 + (2));
i_29703 = G__29707;
j_29704 = G__29708;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n + (1)),nodes));
} else
{var new_arr = (new Array(((2) * (n + (1)))));cljs.core.array_copy.call(null,self__.arr,(0),new_arr,(0),((2) * idx));
(new_arr[((2) * idx)] = key);
(new_arr[(((2) * idx) + (1))] = val);
cljs.core.array_copy.call(null,self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else
{var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,(((2) * idx) + (1)),n)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,(((2) * idx) + (1)),val)));
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,((2) * idx),null,(((2) * idx) + (1)),cljs.core.create_node.call(null,(shift + (5)),key_or_nil,val_or_node,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{return val_or_node.inode_find((shift + (5)),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_without((shift + (5)),hash,key);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,(((2) * idx) + (1)),n)));
} else
{if((self__.bitmap === bit))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair.call(null,self__.arr,idx)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair.call(null,self__.arr,idx)));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return inode;
} else
{return null;
}
}
}
}
});
cljs.core.__GT_BitmapIndexedNode = (function __GT_BitmapIndexedNode(edit,bitmap,arr){return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,(0),[]));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){var arr = array_node.arr;var len = ((2) * (array_node.cnt - (1)));var new_arr = (new Array(len));var i = (0);var j = (1);var bitmap = (0);while(true){
if((i < len))
{if((!((i === idx))) && (!(((arr[i]) == null))))
{(new_arr[j] = (arr[i]));
{
var G__29709 = (i + (1));
var G__29710 = (j + (2));
var G__29711 = (bitmap | ((1) << i));
i = G__29709;
j = G__29710;
bitmap = G__29711;
continue;
}
} else
{{
var G__29712 = (i + (1));
var G__29713 = j;
var G__29714 = bitmap;
i = G__29712;
j = G__29713;
bitmap = G__29714;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone.call(null,self__.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{return inode;
} else
{var n = node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= (8)))
{return cljs.core.pack_array_node.call(null,inode,edit__$1,idx);
} else
{var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);editable.cnt = (editable.cnt - (1));
return editable;
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;return cljs.core.create_array_node_seq.call(null,self__.arr);
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;var len = self__.arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var node = (self__.arr[i]);if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{{
var G__29715 = (i + (1));
var G__29716 = init__$2;
i = G__29715;
init__$1 = G__29716;
continue;
}
}
} else
{{
var G__29717 = (i + (1));
var G__29718 = init__$1;
i = G__29717;
init__$1 = G__29718;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{return node.inode_lookup((shift + (5)),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));editable.cnt = (editable.cnt + (1));
return editable;
} else
{var n = node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
}
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{return (new cljs.core.ArrayNode(null,(self__.cnt + (1)),cljs.core.clone_and_set.call(null,self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_))));
} else
{var n = node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,idx,n)));
}
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{return node.inode_find((shift + (5)),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{var n = node.inode_without((shift + (5)),hash,key);if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= (8)))
{return cljs.core.pack_array_node.call(null,inode,null,idx);
} else
{return (new cljs.core.ArrayNode(null,(self__.cnt - (1)),cljs.core.clone_and_set.call(null,self__.arr,idx,n)));
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,idx,n)));
} else
{return null;
}
}
}
} else
{return inode;
}
});
cljs.core.__GT_ArrayNode = (function __GT_ArrayNode(edit,cnt,arr){return (new cljs.core.ArrayNode(edit,cnt,arr));
});
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){var lim = ((2) * cnt);var i = (0);while(true){
if((i < lim))
{if(cljs.core.key_test.call(null,key,(arr[i])))
{return i;
} else
{{
var G__29719 = (i + (2));
i = G__29719;
continue;
}
}
} else
{return (-1);
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{var new_arr = (new Array(((2) * (self__.cnt + (1)))));cljs.core.array_copy.call(null,self__.arr,(0),new_arr,(0),((2) * self__.cnt));
return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if((idx === (-1)))
{return inode;
} else
{(removed_leaf_QMARK_[(0)] = true);
if((self__.cnt === (1)))
{return null;
} else
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;(earr[idx] = (earr[(((2) * self__.cnt) - (2))]));
(earr[(idx + (1))] = (earr[(((2) * self__.cnt) - (1))]));
(earr[(((2) * self__.cnt) - (1))] = null);
(earr[(((2) * self__.cnt) - (2))] = null);
editable.cnt = (editable.cnt - (1));
return editable;
}
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;return cljs.core.create_inode_seq.call(null,self__.arr);
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce.call(null,self__.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if((idx < (0)))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(self__.arr[idx])))
{return (self__.arr[(idx + (1))]);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if((idx === (-1)))
{if((self__.arr.length > ((2) * self__.cnt)))
{var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,((2) * self__.cnt),key,(((2) * self__.cnt) + (1)),val);added_leaf_QMARK_.val = true;
editable.cnt = (editable.cnt + (1));
return editable;
} else
{var len = self__.arr.length;var new_arr = (new Array((len + (2))));cljs.core.array_copy.call(null,self__.arr,(0),new_arr,(0),len);
(new_arr[len] = key);
(new_arr[(len + (1))] = val);
added_leaf_QMARK_.val = true;
return inode.ensure_editable_array(edit__$1,(self__.cnt + (1)),new_arr);
}
} else
{if(((self__.arr[(idx + (1))]) === val))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,(idx + (1)),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if((idx === (-1)))
{var len = ((2) * self__.cnt);var new_arr = (new Array((len + (2))));cljs.core.array_copy.call(null,self__.arr,(0),new_arr,(0),len);
(new_arr[len] = key);
(new_arr[(len + (1))] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else
{if(cljs.core._EQ_.call(null,(self__.arr[idx]),val))
{return inode;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,(idx + (1)),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){var self__ = this;
var inode = this;if((e === self__.edit))
{self__.arr = array;
self__.cnt = count;
return inode;
} else
{return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if((idx < (0)))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(self__.arr[idx])))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if((idx === (-1)))
{return inode;
} else
{if((self__.cnt === (1)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair.call(null,self__.arr,cljs.core.quot.call(null,idx,(2)))));
} else
{return null;
}
}
}
});
cljs.core.__GT_HashCollisionNode = (function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash.call(null,key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash.call(null,key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$core$IFn$_invoke$arity$6 = create_node__6;
create_node.cljs$core$IFn$_invoke$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + (1))])], null);
} else
{return cljs.core.first.call(null,self__.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{return cljs.core.create_inode_seq.call(null,self__.nodes,(self__.i + (2)),null);
} else
{return cljs.core.create_inode_seq.call(null,self__.nodes,self__.i,cljs.core.next.call(null,self__.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){return create_inode_seq.call(null,nodes,(0),null);
});
var create_inode_seq__3 = (function (nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{if(!(((nodes[j]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else
{var temp__4124__auto__ = (nodes[(j + (1))]);if(cljs.core.truth_(temp__4124__auto__))
{var node = temp__4124__auto__;var temp__4124__auto____$1 = node.inode_seq();if(cljs.core.truth_(temp__4124__auto____$1))
{var node_seq = temp__4124__auto____$1;return (new cljs.core.NodeSeq(null,nodes,(j + (2)),node_seq,null));
} else
{{
var G__29720 = (j + (2));
j = G__29720;
continue;
}
}
} else
{{
var G__29721 = (j + (2));
j = G__29721;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$core$IFn$_invoke$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$core$IFn$_invoke$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first.call(null,self__.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.create_array_node_seq.call(null,null,self__.nodes,self__.i,cljs.core.next.call(null,self__.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){return create_array_node_seq.call(null,null,nodes,(0),null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{var temp__4124__auto__ = (nodes[j]);if(cljs.core.truth_(temp__4124__auto__))
{var nj = temp__4124__auto__;var temp__4124__auto____$1 = nj.inode_seq();if(cljs.core.truth_(temp__4124__auto____$1))
{var ns = temp__4124__auto____$1;return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + (1)),ns,null));
} else
{{
var G__29722 = (j + (1));
j = G__29722;
continue;
}
}
} else
{{
var G__29723 = (j + (1));
j = G__29723;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return self__.root.inode_lookup((0),cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var init__$1 = ((self__.has_nil_QMARK_)?f.call(null,init,null,self__.nil_val):init);if(cljs.core.reduced_QMARK_.call(null,init__$1))
{return cljs.core.deref.call(null,init__$1);
} else
{if(!((self__.root == null)))
{return self__.root.kv_reduce(f,init__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return init__$1;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_unordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map.call(null,coll__$1,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashMap((function (){var obj29726 = {};return obj29726;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,self__.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),self__.root,false,null,null));
} else
{return coll__$1;
}
} else
{if((self__.root == null))
{return coll__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var new_root = self__.root.inode_without((0),cljs.core.hash.call(null,k),k);if((new_root === self__.root))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if((k == null))
{if((self__.has_nil_QMARK_) && ((v === self__.nil_val)))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + (1))),self__.root,true,v,null));
}
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc((0),cljs.core.hash.call(null,k),k,v,added_leaf_QMARK_);if((new_root === self__.root))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((k == null))
{return self__.has_nil_QMARK_;
} else
{if((self__.root == null))
{return false;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return !((self__.root.inode_lookup((0),cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{var s = ((!((self__.root == null)))?self__.root.inode_seq():null);if(self__.has_nil_QMARK_)
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else
{return s;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq.call(null,entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first.call(null,es);if(cljs.core.vector_QMARK_.call(null,e))
{{
var G__29727 = cljs.core._assoc.call(null,ret,cljs.core._nth.call(null,e,(0)),cljs.core._nth.call(null,e,(1)));
var G__29728 = cljs.core.next.call(null,es);
ret = G__29727;
es = G__29728;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__29729 = null;
var G__29729__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29729__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29729 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29729__2.call(this,self__,k);
case 3:
return G__29729__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29729;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (self__,args29724){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29724)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentHashMap = (function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,(0),null,false,null,(0)));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){var len = ks.length;var i = (0);var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{{
var G__29730 = (i + (1));
var G__29731 = cljs.core._assoc_BANG_.call(null,out,(ks[i]),(vs[i]));
i = G__29730;
out = G__29731;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return null;
}
} else
{if((self__.root == null))
{return null;
} else
{return self__.root.inode_lookup((0),cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup((0),cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(self__.edit)
{return self__.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){var self__ = this;
var tcoll = this;if(self__.edit)
{if((function (){var G__29732 = o;if(G__29732)
{var bit__8596__auto__ = (G__29732.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__8596__auto__) || (G__29732.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__29732.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,G__29732);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,G__29732);
}
})())
{return tcoll.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es = cljs.core.seq.call(null,o);var tcoll__$1 = tcoll;while(true){
var temp__4124__auto__ = cljs.core.first.call(null,es);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;{
var G__29733 = cljs.core.next.call(null,es);
var G__29734 = tcoll__$1.assoc_BANG_(cljs.core.key.call(null,e),cljs.core.val.call(null,e));
es = G__29733;
tcoll__$1 = G__29734;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){var self__ = this;
var tcoll = this;if(self__.edit)
{if((k == null))
{if((self__.nil_val === v))
{} else
{self__.nil_val = v;
}
if(self__.has_nil_QMARK_)
{} else
{self__.count = (self__.count + (1));
self__.has_nil_QMARK_ = true;
}
return tcoll;
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,(0),cljs.core.hash.call(null,k),k,v,added_leaf_QMARK_);if((node === self__.root))
{} else
{self__.root = node;
}
if(added_leaf_QMARK_.val)
{self__.count = (self__.count + (1));
} else
{}
return tcoll;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){var self__ = this;
var tcoll = this;if(self__.edit)
{if((k == null))
{if(self__.has_nil_QMARK_)
{self__.has_nil_QMARK_ = false;
self__.nil_val = null;
self__.count = (self__.count - (1));
return tcoll;
} else
{return tcoll;
}
} else
{if((self__.root == null))
{return tcoll;
} else
{var removed_leaf_QMARK_ = (new cljs.core.Box(false));var node = self__.root.inode_without_BANG_(self__.edit,(0),cljs.core.hash.call(null,k),k,removed_leaf_QMARK_);if((node === self__.root))
{} else
{self__.root = node;
}
if(cljs.core.truth_((removed_leaf_QMARK_[(0)])))
{self__.count = (self__.count - (1));
} else
{}
return tcoll;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){var self__ = this;
var tcoll = this;if(self__.edit)
{self__.edit = null;
return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){var t = node;var stack__$1 = stack;while(true){
if(!((t == null)))
{{
var G__29735 = ((ascending_QMARK_)?t.left:t.right);
var G__29736 = cljs.core.conj.call(null,stack__$1,t);
t = G__29735;
stack__$1 = G__29736;
continue;
}
} else
{return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt < (0)))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll__$1)) + (1));
} else
{return self__.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.peek.call(null,self__.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var t = cljs.core.first.call(null,self__.stack);var next_stack = cljs.core.tree_map_seq_push.call(null,((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next.call(null,self__.stack),self__.ascending_QMARK_);if(!((next_stack == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){if((ins instanceof cljs.core.RedNode))
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){if((ins instanceof cljs.core.RedNode))
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){if((del instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if((right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){if((del instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if((left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init):init);if(cljs.core.reduced_QMARK_.call(null,init__$1))
{return cljs.core.deref.call(null,init__$1);
} else
{var init__$2 = f.call(null,init__$1,node.key,node.val);if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__$2):init__$2);if(cljs.core.reduced_QMARK_.call(null,init__$3))
{return cljs.core.deref.call(null,init__$3);
} else
{return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.add_right = (function (ins){var self__ = this;
var node = this;return ins.balance_right(node);
});
cljs.core.BlackNode.prototype.redden = (function (){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){var self__ = this;
var node = this;return node;
});
cljs.core.BlackNode.prototype.add_left = (function (ins){var self__ = this;
var node = this;return ins.balance_left(node);
});
cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){var self__ = this;
var node = this;return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});
cljs.core.BlackNode.prototype.balance_right = (function (parent){var self__ = this;
var node = this;return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});
cljs.core.BlackNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return cljs.core.balance_left_del.call(null,self__.key,self__.val,del,self__.right);
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce.call(null,node,f,init);
});
cljs.core.BlackNode.prototype.remove_right = (function (del){var self__ = this;
var node = this;return cljs.core.balance_right_del.call(null,self__.key,self__.val,self__.left,del);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.call(null,node__$1,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.call(null,node__$1,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return null;
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return (2);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.call(null,node__$1,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.call(null,node__$1,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__29738 = null;
var G__29738__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29738__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29738 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29738__2.call(this,self__,k);
case 3:
return G__29738__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29738;
})()
;
cljs.core.BlackNode.prototype.apply = (function (self__,args29737){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29737)));
});
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.add_right = (function (ins){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){var self__ = this;
var node = this;throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.blacken = (function (){var self__ = this;
var node = this;return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});
cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){var self__ = this;
var node = this;if((self__.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else
{if((self__.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.balance_right = (function (parent){var self__ = this;
var node = this;if((self__.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else
{if((self__.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce.call(null,node,f,init);
});
cljs.core.RedNode.prototype.remove_right = (function (del){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.call(null,node__$1,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.call(null,node__$1,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return null;
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return (2);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.call(null,node__$1,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.call(null,node__$1,f,start);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});
cljs.core.RedNode.prototype.call = (function() {
var G__29740 = null;
var G__29740__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29740__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29740 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29740__2.call(this,self__,k);
case 3:
return G__29740__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29740;
})()
;
cljs.core.RedNode.prototype.apply = (function (self__,args29739){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29739)));
});
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){return (new cljs.core.RedNode(key,val,left,right,__hash));
});
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c = comp.call(null,k,tree.key);if((c === (0)))
{(found[(0)] = tree);
return null;
} else
{if((c < (0)))
{var ins = tree_map_add.call(null,comp,tree.left,k,v,found);if(!((ins == null)))
{return tree.add_left(ins);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var ins = tree_map_add.call(null,comp,tree.right,k,v,found);if(!((ins == null)))
{return tree.add_right(ins);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if((left instanceof cljs.core.RedNode))
{if((right instanceof cljs.core.RedNode))
{var app = tree_map_append.call(null,left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if((right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var app = tree_map_append.call(null,left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){if(!((tree == null)))
{var c = comp.call(null,k,tree.key);if((c === (0)))
{(found[(0)] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c < (0)))
{var del = tree_map_remove.call(null,comp,tree.left,k,found);if((!((del == null))) || (!(((found[(0)]) == null))))
{if((tree.left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var del = tree_map_remove.call(null,comp,tree.right,k,found);if((!((del == null))) || (!(((found[(0)]) == null))))
{if((tree.right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){var tk = tree.key;var c = comp.call(null,k,tk);if((c === (0)))
{return tree.replace(tk,v,tree.left,tree.right);
} else
{if((c < (0)))
{return tree.replace(tk,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return tree.replace(tk,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){var self__ = this;
var coll = this;var t = self__.tree;while(true){
if(!((t == null)))
{var c = self__.comp.call(null,k,t.key);if((c === (0)))
{return t;
} else
{if((c < (0)))
{{
var G__29742 = t.left;
t = G__29742;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{{
var G__29743 = t.right;
t = G__29743;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var n = coll__$1.entry_at(k);if(!((n == null)))
{return n.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;if(!((self__.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,self__.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq.call(null,self__.tree,false,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_unordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map.call(null,coll__$1,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_remove.call(null,self__.comp,self__.tree,k,found);if((t == null))
{if((cljs.core.nth.call(null,found,(0)) == null))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - (1)),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_add.call(null,self__.comp,self__.tree,k,v,found);if((t == null))
{var found_node = cljs.core.nth.call(null,found,(0));if(cljs.core._EQ_.call(null,v,found_node.val))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace.call(null,self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + (1)),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((coll__$1.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq.call(null,self__.tree,true,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq.call(null,entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first.call(null,es);if(cljs.core.vector_QMARK_.call(null,e))
{{
var G__29744 = cljs.core._assoc.call(null,ret,cljs.core._nth.call(null,e,(0)),cljs.core._nth.call(null,e,(1)));
var G__29745 = cljs.core.next.call(null,es);
ret = G__29744;
es = G__29745;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__29746 = null;
var G__29746__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29746__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29746 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29746__2.call(this,self__,k);
case 3:
return G__29746__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29746;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args29741){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29741)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq.call(null,self__.tree,ascending_QMARK_,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{var stack = null;var t = self__.tree;while(true){
if(!((t == null)))
{var c = self__.comp.call(null,k,t.key);if((c === (0)))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack,t),ascending_QMARK_,(-1),null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c < (0)))
{{
var G__29747 = cljs.core.conj.call(null,stack,t);
var G__29748 = t.left;
stack = G__29747;
t = G__29748;
continue;
}
} else
{{
var G__29749 = stack;
var G__29750 = t.right;
stack = G__29749;
t = G__29750;
continue;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{if((c > (0)))
{{
var G__29751 = cljs.core.conj.call(null,stack,t);
var G__29752 = t.right;
stack = G__29751;
t = G__29752;
continue;
}
} else
{{
var G__29753 = stack;
var G__29754 = t.left;
stack = G__29753;
t = G__29754;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack == null))
{return null;
} else
{return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,(-1),null));
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.comp;
});
cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);while(true){
if(in$)
{{
var G__29755 = cljs.core.nnext.call(null,in$);
var G__29756 = cljs.core.assoc_BANG_.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__29755;
out = G__29756;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__29757){
var keyvals = cljs.core.seq(arglist__29757);
return hash_map__delegate(keyvals);
});
hash_map.cljs$core$IFn$_invoke$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),(2)),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__29758){
var keyvals = cljs.core.seq(arglist__29758);
return array_map__delegate(keyvals);
});
array_map.cljs$core$IFn$_invoke$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){var ks = [];var obj = (function (){var obj29762 = {};return obj29762;
})();var kvs = cljs.core.seq.call(null,keyvals);while(true){
if(kvs)
{ks.push(cljs.core.first.call(null,kvs));
(obj[cljs.core.first.call(null,kvs)] = cljs.core.second.call(null,kvs));
{
var G__29763 = cljs.core.nnext.call(null,kvs);
kvs = G__29763;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__29764){
var keyvals = cljs.core.seq(arglist__29764);
return obj_map__delegate(keyvals);
});
obj_map.cljs$core$IFn$_invoke$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = cljs.core.PersistentTreeMap.EMPTY;while(true){
if(in$)
{{
var G__29765 = cljs.core.nnext.call(null,in$);
var G__29766 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__29765;
out = G__29766;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__29767){
var keyvals = cljs.core.seq(arglist__29767);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator.call(null,comparator),null,(0),null,(0)));while(true){
if(in$)
{{
var G__29768 = cljs.core.nnext.call(null,in$);
var G__29769 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__29768;
out = G__29769;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__29770){
var comparator = cljs.core.first(arglist__29770);
var keyvals = cljs.core.rest(arglist__29770);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.KeySeq.cljs$lang$type = true;
cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";
cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/KeySeq");
});
cljs.core.KeySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__29771 = self__.mseq;if(G__29771)
{var bit__8596__auto__ = (G__29771.cljs$lang$protocol_mask$partition0$ & (128));if((bit__8596__auto__) || (G__29771.cljs$core$INext$))
{return true;
} else
{if((!G__29771.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__29771);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__29771);
}
})())?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.KeySeq(nseq,self__._meta));
}
});
cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll.call(null,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__._meta);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = cljs.core._first.call(null,self__.mseq);return cljs.core._key.call(null,me);
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__29772 = self__.mseq;if(G__29772)
{var bit__8596__auto__ = (G__29772.cljs$lang$protocol_mask$partition0$ & (128));if((bit__8596__auto__) || (G__29772.cljs$core$INext$))
{return true;
} else
{if((!G__29772.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__29772);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__29772);
}
})())?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq));if(!((nseq == null)))
{return (new cljs.core.KeySeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.KeySeq(self__.mseq,new_meta));
});
cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){return (new cljs.core.KeySeq(mseq,_meta));
});
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){var temp__4126__auto__ = cljs.core.seq.call(null,hash_map);if(temp__4126__auto__)
{var mseq = temp__4126__auto__;return (new cljs.core.KeySeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){return cljs.core._key.call(null,map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.ValSeq.cljs$lang$type = true;
cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";
cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/ValSeq");
});
cljs.core.ValSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__29773 = self__.mseq;if(G__29773)
{var bit__8596__auto__ = (G__29773.cljs$lang$protocol_mask$partition0$ & (128));if((bit__8596__auto__) || (G__29773.cljs$core$INext$))
{return true;
} else
{if((!G__29773.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__29773);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__29773);
}
})())?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.ValSeq(nseq,self__._meta));
}
});
cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll.call(null,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__._meta);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = cljs.core._first.call(null,self__.mseq);return cljs.core._val.call(null,me);
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__29774 = self__.mseq;if(G__29774)
{var bit__8596__auto__ = (G__29774.cljs$lang$protocol_mask$partition0$ & (128));if((bit__8596__auto__) || (G__29774.cljs$core$INext$))
{return true;
} else
{if((!G__29774.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__29774);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__29774);
}
})())?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq));if(!((nseq == null)))
{return (new cljs.core.ValSeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.ValSeq(self__.mseq,new_meta));
});
cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){return (new cljs.core.ValSeq(mseq,_meta));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){var temp__4126__auto__ = cljs.core.seq.call(null,hash_map);if(temp__4126__auto__)
{var mseq = temp__4126__auto__;return (new cljs.core.ValSeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__29775_SHARP_,p2__29776_SHARP_){return cljs.core.conj.call(null,(function (){var or__7946__auto__ = p1__29775_SHARP_;if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__29776_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge__delegate.call(this,maps);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__29777){
var maps = cljs.core.seq(arglist__29777);
return merge__delegate(maps);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry = (function (m,e){var k = cljs.core.first.call(null,e);var v = cljs.core.second.call(null,e);if(cljs.core.contains_QMARK_.call(null,m,k))
{return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else
{return cljs.core.assoc.call(null,m,k,v);
}
});var merge2 = ((function (merge_entry){
return (function (m1,m2){return cljs.core.reduce.call(null,merge_entry,(function (){var or__7946__auto__ = m1;if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;return cljs.core.reduce.call(null,merge2,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__29778){
var f = cljs.core.first(arglist__29778);
var maps = cljs.core.rest(arglist__29778);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){var ret = cljs.core.PersistentArrayMap.EMPTY;var keys = cljs.core.seq.call(null,keyseq);while(true){
if(keys)
{var key = cljs.core.first.call(null,keys);var entry = cljs.core.get.call(null,map,key,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",-1572889185));{
var G__29779 = ((cljs.core.not_EQ_.call(null,entry,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",-1572889185)))?cljs.core.assoc.call(null,ret,key,entry):ret);
var G__29780 = cljs.core.next.call(null,keys);
ret = G__29779;
keys = G__29780;
continue;
}
} else
{return ret;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;if(cljs.core._contains_key_QMARK_.call(null,self__.hash_map,v))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._count.call(null,self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_unordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_.call(null,other)) && ((cljs.core.count.call(null,coll__$1) === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,((function (coll__$1){
return (function (p1__29781_SHARP_){return cljs.core.contains_QMARK_.call(null,coll__$1,p1__29781_SHARP_);
});})(coll__$1))
,other));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashSet(cljs.core._as_transient.call(null,self__.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,self__.meta);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc.call(null,self__.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys.call(null,self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.call(null,self__.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__29783 = null;
var G__29783__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29783__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29783 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29783__2.call(this,self__,k);
case 3:
return G__29783__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29783;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (self__,args29782){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29782)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,(0)));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){var len = items.length;if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr = ((no_clone)?items:cljs.core.aclone.call(null,items));var i = (0);var out = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__29784 = (i + (1));
var G__29785 = cljs.core._assoc_BANG_.call(null,out,(items[i]),null);
i = G__29784;
out = G__29785;
continue;
}
} else
{return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_.call(null,out),null));
}
break;
}
} else
{var i = (0);var out = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < len))
{{
var G__29786 = (i + (1));
var G__29787 = cljs.core._conj_BANG_.call(null,out,(items[i]));
i = G__29786;
out = G__29787;
continue;
}
} else
{return cljs.core._persistent_BANG_.call(null,out);
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__29789 = null;
var G__29789__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__29789__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__29789 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29789__2.call(this,self__,k);
case 3:
return G__29789__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29789;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (self__,args29788){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29788)));
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var tcoll = this;if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var tcoll = this;if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.call(null,tcoll__$1,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){var self__ = this;
var tcoll__$1 = this;if((cljs.core._lookup.call(null,self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return cljs.core.count.call(null,self__.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.dissoc_BANG_.call(null,self__.transient_map,v);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.assoc_BANG_.call(null,self__.transient_map,o,null);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,self__.transient_map),null));
});
cljs.core.__GT_TransientHashSet = (function __GT_TransientHashSet(transient_map){return (new cljs.core.TransientHashSet(transient_map));
});

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;var n = self__.tree_map.entry_at(v);if(!((n == null)))
{return n.key;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.count.call(null,self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core.count.call(null,self__.tree_map) > (0)))
{return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,self__.tree_map));
} else
{return null;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_unordered_coll.call(null,coll__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_.call(null,other)) && ((cljs.core.count.call(null,coll__$1) === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,((function (coll__$1){
return (function (p1__29790_SHARP_){return cljs.core.contains_QMARK_.call(null,coll__$1,p1__29790_SHARP_);
});})(coll__$1))
,other));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,self__.meta);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.call(null,self__.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys.call(null,self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.call(null,self__.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__29792 = null;
var G__29792__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29792__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29792 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29792__2.call(this,self__,k);
case 3:
return G__29792__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29792;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args29791){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29791)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,self__.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,self__.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._comparator.call(null,self__.tree_map);
});
cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){var arr = iseq.arr;var ret = (function (){var a__8796__auto__ = arr;var i = (0);var res = cljs.core._as_transient.call(null,cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < a__8796__auto__.length))
{{
var G__29793 = (i + (1));
var G__29794 = cljs.core._conj_BANG_.call(null,res,(arr[i]));
i = G__29793;
res = G__29794;
continue;
}
} else
{return res;
}
break;
}
})();return cljs.core._persistent_BANG_.call(null,ret);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){var in$ = cljs.core.seq.call(null,coll);if((in$ == null))
{return cljs.core.PersistentHashSet.EMPTY;
} else
{if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === (0))))
{return cljs.core.set_from_indexed_seq.call(null,in$);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var in$__$1 = in$;var out = cljs.core._as_transient.call(null,cljs.core.PersistentHashSet.EMPTY);while(true){
if(!((in$__$1 == null)))
{{
var G__29795 = cljs.core._next.call(null,in$__$1);
var G__29796 = cljs.core._conj_BANG_.call(null,out,cljs.core._first.call(null,in$__$1));
in$__$1 = G__29795;
out = G__29796;
continue;
}
} else
{return cljs.core._persistent_BANG_.call(null,out);
}
break;
}
} else
{return null;
}
}
}
});
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__29797__delegate = function (keys){return cljs.core.set.call(null,keys);
};
var G__29797 = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29797__delegate.call(this,keys);};
G__29797.cljs$lang$maxFixedArity = 0;
G__29797.cljs$lang$applyTo = (function (arglist__29798){
var keys = cljs.core.seq(arglist__29798);
return G__29797__delegate(keys);
});
G__29797.cljs$core$IFn$_invoke$arity$variadic = G__29797__delegate;
return G__29797;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$core$IFn$_invoke$arity$0 = hash_set__0;
hash_set.cljs$core$IFn$_invoke$arity$variadic = hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return hash_set;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__29799){
var keys = cljs.core.seq(arglist__29799);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),(0))),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__29800){
var comparator = cljs.core.first(arglist__29800);
var keys = cljs.core.rest(arglist__29800);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){if(cljs.core.vector_QMARK_.call(null,coll))
{var n = cljs.core.count.call(null,coll);return cljs.core.reduce.call(null,((function (n){
return (function (v,i){var temp__4124__auto__ = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e));
} else
{return v;
}
});})(n))
,coll,cljs.core.take.call(null,n,cljs.core.iterate.call(null,cljs.core.inc,(0))));
} else
{return cljs.core.map.call(null,(function (p1__29801_SHARP_){var temp__4124__auto__ = cljs.core.find.call(null,smap,p1__29801_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.second.call(null,e);
} else
{return p1__29801_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){var step = (function step(xs,seen){return (new cljs.core.LazySeq(null,(function (){return (function (p__29808,seen__$1){while(true){
var vec__29809 = p__29808;var f = cljs.core.nth.call(null,vec__29809,(0),null);var xs__$1 = vec__29809;var temp__4126__auto__ = cljs.core.seq.call(null,xs__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.contains_QMARK_.call(null,seen__$1,f))
{{
var G__29810 = cljs.core.rest.call(null,s);
var G__29811 = seen__$1;
p__29808 = G__29810;
seen__$1 = G__29811;
continue;
}
} else
{return cljs.core.cons.call(null,f,step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,f)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){var ret = cljs.core.PersistentVector.EMPTY;var s__$1 = s;while(true){
if(cljs.core.next.call(null,s__$1))
{{
var G__29812 = cljs.core.conj.call(null,ret,cljs.core.first.call(null,s__$1));
var G__29813 = cljs.core.next.call(null,s__$1);
ret = G__29812;
s__$1 = G__29813;
continue;
}
} else
{return cljs.core.seq.call(null,ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){if((function (){var G__29815 = x;if(G__29815)
{var bit__8589__auto__ = (G__29815.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__8589__auto__) || (G__29815.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._name.call(null,x);
} else
{if(typeof x === 'string')
{return x;
} else
{throw (new Error(("Doesn't support name: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){var map = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);var ks = cljs.core.seq.call(null,keys);var vs = cljs.core.seq.call(null,vals);while(true){
if((ks) && (vs))
{{
var G__29816 = cljs.core.assoc_BANG_.call(null,map,cljs.core.first.call(null,ks),cljs.core.first.call(null,vs));
var G__29817 = cljs.core.next.call(null,ks);
var G__29818 = cljs.core.next.call(null,vs);
map = G__29816;
ks = G__29817;
vs = G__29818;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,map);
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){return x;
});
var max_key__3 = (function (k,x,y){if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__29821__delegate = function (k,x,y,more){return cljs.core.reduce.call(null,(function (p1__29819_SHARP_,p2__29820_SHARP_){return max_key.call(null,k,p1__29819_SHARP_,p2__29820_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__29821 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29821__delegate.call(this,k,x,y,more);};
G__29821.cljs$lang$maxFixedArity = 3;
G__29821.cljs$lang$applyTo = (function (arglist__29822){
var k = cljs.core.first(arglist__29822);
arglist__29822 = cljs.core.next(arglist__29822);
var x = cljs.core.first(arglist__29822);
arglist__29822 = cljs.core.next(arglist__29822);
var y = cljs.core.first(arglist__29822);
var more = cljs.core.rest(arglist__29822);
return G__29821__delegate(k,x,y,more);
});
G__29821.cljs$core$IFn$_invoke$arity$variadic = G__29821__delegate;
return G__29821;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$core$IFn$_invoke$arity$2 = max_key__2;
max_key.cljs$core$IFn$_invoke$arity$3 = max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic = max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){return x;
});
var min_key__3 = (function (k,x,y){if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__29825__delegate = function (k,x,y,more){return cljs.core.reduce.call(null,(function (p1__29823_SHARP_,p2__29824_SHARP_){return min_key.call(null,k,p1__29823_SHARP_,p2__29824_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__29825 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29825__delegate.call(this,k,x,y,more);};
G__29825.cljs$lang$maxFixedArity = 3;
G__29825.cljs$lang$applyTo = (function (arglist__29826){
var k = cljs.core.first(arglist__29826);
arglist__29826 = cljs.core.next(arglist__29826);
var x = cljs.core.first(arglist__29826);
arglist__29826 = cljs.core.next(arglist__29826);
var y = cljs.core.first(arglist__29826);
var more = cljs.core.rest(arglist__29826);
return G__29825__delegate(k,x,y,more);
});
G__29825.cljs$core$IFn$_invoke$arity$variadic = G__29825__delegate;
return G__29825;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$core$IFn$_invoke$arity$2 = min_key__2;
min_key.cljs$core$IFn$_invoke$arity$3 = min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic = min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons.call(null,cljs.core.take.call(null,n,s),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s)));
} else
{return null;
}
}),null,null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$core$IFn$_invoke$arity$2 = partition_all__2;
partition_all.cljs$core$IFn$_invoke$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),take_while.call(null,pred,cljs.core.rest.call(null,s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){return (function (e){var comp = cljs.core._comparator.call(null,sc);return test.call(null,comp.call(null,cljs.core._entry_key.call(null,sc,e),key),(0));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn.call(null,sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test)))
{var temp__4126__auto__ = cljs.core._sorted_seq_from.call(null,sc,key,true);if(cljs.core.truth_(temp__4126__auto__))
{var vec__29829 = temp__4126__auto__;var e = cljs.core.nth.call(null,vec__29829,(0),null);var s = vec__29829;if(cljs.core.truth_(include.call(null,e)))
{return s;
} else
{return cljs.core.next.call(null,s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4126__auto__ = cljs.core._sorted_seq_from.call(null,sc,start_key,true);if(cljs.core.truth_(temp__4126__auto__))
{var vec__29830 = temp__4126__auto__;var e = cljs.core.nth.call(null,vec__29830,(0),null);var s = vec__29830;return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e))?s:cljs.core.next.call(null,s)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$core$IFn$_invoke$arity$3 = subseq__3;
subseq.cljs$core$IFn$_invoke$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn.call(null,sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test)))
{var temp__4126__auto__ = cljs.core._sorted_seq_from.call(null,sc,key,false);if(cljs.core.truth_(temp__4126__auto__))
{var vec__29833 = temp__4126__auto__;var e = cljs.core.nth.call(null,vec__29833,(0),null);var s = vec__29833;if(cljs.core.truth_(include.call(null,e)))
{return s;
} else
{return cljs.core.next.call(null,s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4126__auto__ = cljs.core._sorted_seq_from.call(null,sc,end_key,false);if(cljs.core.truth_(temp__4126__auto__))
{var vec__29834 = temp__4126__auto__;var e = cljs.core.nth.call(null,vec__29834,(0),null);var s = vec__29834;return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e))?s:cljs.core.next.call(null,s)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$core$IFn$_invoke$arity$3 = rsubseq__3;
rsubseq.cljs$core$IFn$_invoke$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count.call(null,rng__$1)))
{return (self__.start + (n * self__.step));
} else
{if(((self__.start > self__.end)) && ((self__.step === (0))))
{return self__.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count.call(null,rng__$1)))
{return (self__.start + (n * self__.step));
} else
{if(((self__.start > self__.end)) && ((self__.step === (0))))
{return self__.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return self__.meta;
});
cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((self__.step > (0)))
{if(((self__.start + self__.step) < self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
} else
{if(((self__.start + self__.step) > self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(cljs.core.not.call(null,cljs.core._seq.call(null,rng__$1)))
{return (0);
} else
{return Math.ceil(((self__.end - self__.start) / self__.step));
}
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;var h__8357__auto__ = self__.__hash;if(!((h__8357__auto__ == null)))
{return h__8357__auto__;
} else
{var h__8357__auto____$1 = cljs.core.hash_ordered_coll.call(null,rng__$1);self__.__hash = h__8357__auto____$1;
return h__8357__auto____$1;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){var self__ = this;
var rng__$1 = this;return cljs.core.equiv_sequential.call(null,rng__$1,other);
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){var self__ = this;
var rng__$1 = this;return cljs.core.ci_reduce.call(null,rng__$1,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){var self__ = this;
var rng__$1 = this;return cljs.core.ci_reduce.call(null,rng__$1,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((cljs.core._seq.call(null,rng__$1) == null))
{return null;
} else
{return self__.start;
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(!((cljs.core._seq.call(null,rng__$1) == null)))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((self__.step > (0)))
{if((self__.start < self__.end))
{return rng__$1;
} else
{return null;
}
} else
{if((self__.start > self__.end))
{return rng__$1;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){var self__ = this;
var rng__$1 = this;return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){var self__ = this;
var rng__$1 = this;return cljs.core.cons.call(null,o,rng__$1);
});
cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){return (new cljs.core.Range(meta,start,end,step,__hash));
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){return range.call(null,(0),Number.MAX_VALUE,(1));
});
var range__1 = (function (end){return range.call(null,(0),end,(1));
});
var range__2 = (function (start,end){return range.call(null,start,end,(1));
});
var range__3 = (function (start,end,step){return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$core$IFn$_invoke$arity$0 = range__0;
range.cljs$core$IFn$_invoke$arity$1 = range__1;
range.cljs$core$IFn$_invoke$arity$2 = range__2;
range.cljs$core$IFn$_invoke$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons.call(null,cljs.core.first.call(null,s),take_nth.call(null,n,cljs.core.drop.call(null,n,s)));
} else
{return null;
}
}),null,null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var fst = cljs.core.first.call(null,s);var fv = f.call(null,fst);var run = cljs.core.cons.call(null,fst,cljs.core.take_while.call(null,((function (fst,fv,s,temp__4126__auto__){
return (function (p1__29835_SHARP_){return cljs.core._EQ_.call(null,fv,f.call(null,p1__29835_SHARP_));
});})(fst,fv,s,temp__4126__auto__))
,cljs.core.next.call(null,s)));return cljs.core.cons.call(null,run,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run),s))));
} else
{return null;
}
}),null,null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core.get.call(null,counts,x,(0)) + (1)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4124__auto__ = cljs.core.seq.call(null,coll);if(temp__4124__auto__)
{var s = temp__4124__auto__;return reductions.call(null,f,cljs.core.first.call(null,s),cljs.core.rest.call(null,s));
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,f.call(null));
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s)),cljs.core.rest.call(null,s));
} else
{return null;
}
}),null,null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$core$IFn$_invoke$arity$2 = reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){return (function() {
var G__29846 = null;
var G__29846__0 = (function (){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null)],null));
});
var G__29846__1 = (function (x){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x)],null));
});
var G__29846__2 = (function (x,y){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y)],null));
});
var G__29846__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y,z)],null));
});
var G__29846__4 = (function() { 
var G__29847__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,f,x,y,z,args)],null));
};
var G__29847 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29847__delegate.call(this,x,y,z,args);};
G__29847.cljs$lang$maxFixedArity = 3;
G__29847.cljs$lang$applyTo = (function (arglist__29848){
var x = cljs.core.first(arglist__29848);
arglist__29848 = cljs.core.next(arglist__29848);
var y = cljs.core.first(arglist__29848);
arglist__29848 = cljs.core.next(arglist__29848);
var z = cljs.core.first(arglist__29848);
var args = cljs.core.rest(arglist__29848);
return G__29847__delegate(x,y,z,args);
});
G__29847.cljs$core$IFn$_invoke$arity$variadic = G__29847__delegate;
return G__29847;
})()
;
G__29846 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29846__0.call(this);
case 1:
return G__29846__1.call(this,x);
case 2:
return G__29846__2.call(this,x,y);
case 3:
return G__29846__3.call(this,x,y,z);
default:
return G__29846__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29846.cljs$lang$maxFixedArity = 3;
G__29846.cljs$lang$applyTo = G__29846__4.cljs$lang$applyTo;
return G__29846;
})()
});
var juxt__2 = (function (f,g){return (function() {
var G__29849 = null;
var G__29849__0 = (function (){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null),g.call(null)],null));
});
var G__29849__1 = (function (x){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x),g.call(null,x)],null));
});
var G__29849__2 = (function (x,y){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y),g.call(null,x,y)],null));
});
var G__29849__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y,z),g.call(null,x,y,z)],null));
});
var G__29849__4 = (function() { 
var G__29850__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args)],null));
};
var G__29850 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29850__delegate.call(this,x,y,z,args);};
G__29850.cljs$lang$maxFixedArity = 3;
G__29850.cljs$lang$applyTo = (function (arglist__29851){
var x = cljs.core.first(arglist__29851);
arglist__29851 = cljs.core.next(arglist__29851);
var y = cljs.core.first(arglist__29851);
arglist__29851 = cljs.core.next(arglist__29851);
var z = cljs.core.first(arglist__29851);
var args = cljs.core.rest(arglist__29851);
return G__29850__delegate(x,y,z,args);
});
G__29850.cljs$core$IFn$_invoke$arity$variadic = G__29850__delegate;
return G__29850;
})()
;
G__29849 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29849__0.call(this);
case 1:
return G__29849__1.call(this,x);
case 2:
return G__29849__2.call(this,x,y);
case 3:
return G__29849__3.call(this,x,y,z);
default:
return G__29849__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29849.cljs$lang$maxFixedArity = 3;
G__29849.cljs$lang$applyTo = G__29849__4.cljs$lang$applyTo;
return G__29849;
})()
});
var juxt__3 = (function (f,g,h){return (function() {
var G__29852 = null;
var G__29852__0 = (function (){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null),g.call(null),h.call(null)],null));
});
var G__29852__1 = (function (x){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x),g.call(null,x),h.call(null,x)],null));
});
var G__29852__2 = (function (x,y){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y),g.call(null,x,y),h.call(null,x,y)],null));
});
var G__29852__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z)],null));
});
var G__29852__4 = (function() { 
var G__29853__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args)],null));
};
var G__29853 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29853__delegate.call(this,x,y,z,args);};
G__29853.cljs$lang$maxFixedArity = 3;
G__29853.cljs$lang$applyTo = (function (arglist__29854){
var x = cljs.core.first(arglist__29854);
arglist__29854 = cljs.core.next(arglist__29854);
var y = cljs.core.first(arglist__29854);
arglist__29854 = cljs.core.next(arglist__29854);
var z = cljs.core.first(arglist__29854);
var args = cljs.core.rest(arglist__29854);
return G__29853__delegate(x,y,z,args);
});
G__29853.cljs$core$IFn$_invoke$arity$variadic = G__29853__delegate;
return G__29853;
})()
;
G__29852 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29852__0.call(this);
case 1:
return G__29852__1.call(this,x);
case 2:
return G__29852__2.call(this,x,y);
case 3:
return G__29852__3.call(this,x,y,z);
default:
return G__29852__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29852.cljs$lang$maxFixedArity = 3;
G__29852.cljs$lang$applyTo = G__29852__4.cljs$lang$applyTo;
return G__29852;
})()
});
var juxt__4 = (function() { 
var G__29855__delegate = function (f,g,h,fs){var fs__$1 = cljs.core.list_STAR_.call(null,f,g,h,fs);return ((function (fs__$1){
return (function() {
var G__29856 = null;
var G__29856__0 = (function (){return cljs.core.reduce.call(null,((function (fs__$1){
return (function (p1__29836_SHARP_,p2__29837_SHARP_){return cljs.core.conj.call(null,p1__29836_SHARP_,p2__29837_SHARP_.call(null));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29856__1 = (function (x){return cljs.core.reduce.call(null,((function (fs__$1){
return (function (p1__29838_SHARP_,p2__29839_SHARP_){return cljs.core.conj.call(null,p1__29838_SHARP_,p2__29839_SHARP_.call(null,x));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29856__2 = (function (x,y){return cljs.core.reduce.call(null,((function (fs__$1){
return (function (p1__29840_SHARP_,p2__29841_SHARP_){return cljs.core.conj.call(null,p1__29840_SHARP_,p2__29841_SHARP_.call(null,x,y));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29856__3 = (function (x,y,z){return cljs.core.reduce.call(null,((function (fs__$1){
return (function (p1__29842_SHARP_,p2__29843_SHARP_){return cljs.core.conj.call(null,p1__29842_SHARP_,p2__29843_SHARP_.call(null,x,y,z));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29856__4 = (function() { 
var G__29857__delegate = function (x,y,z,args){return cljs.core.reduce.call(null,((function (fs__$1){
return (function (p1__29844_SHARP_,p2__29845_SHARP_){return cljs.core.conj.call(null,p1__29844_SHARP_,cljs.core.apply.call(null,p2__29845_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__29857 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29857__delegate.call(this,x,y,z,args);};
G__29857.cljs$lang$maxFixedArity = 3;
G__29857.cljs$lang$applyTo = (function (arglist__29858){
var x = cljs.core.first(arglist__29858);
arglist__29858 = cljs.core.next(arglist__29858);
var y = cljs.core.first(arglist__29858);
arglist__29858 = cljs.core.next(arglist__29858);
var z = cljs.core.first(arglist__29858);
var args = cljs.core.rest(arglist__29858);
return G__29857__delegate(x,y,z,args);
});
G__29857.cljs$core$IFn$_invoke$arity$variadic = G__29857__delegate;
return G__29857;
})()
;
G__29856 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29856__0.call(this);
case 1:
return G__29856__1.call(this,x);
case 2:
return G__29856__2.call(this,x,y);
case 3:
return G__29856__3.call(this,x,y,z);
default:
return G__29856__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29856.cljs$lang$maxFixedArity = 3;
G__29856.cljs$lang$applyTo = G__29856__4.cljs$lang$applyTo;
return G__29856;
})()
;})(fs__$1))
};
var G__29855 = function (f,g,h,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29855__delegate.call(this,f,g,h,fs);};
G__29855.cljs$lang$maxFixedArity = 3;
G__29855.cljs$lang$applyTo = (function (arglist__29859){
var f = cljs.core.first(arglist__29859);
arglist__29859 = cljs.core.next(arglist__29859);
var g = cljs.core.first(arglist__29859);
arglist__29859 = cljs.core.next(arglist__29859);
var h = cljs.core.first(arglist__29859);
var fs = cljs.core.rest(arglist__29859);
return G__29855__delegate(f,g,h,fs);
});
G__29855.cljs$core$IFn$_invoke$arity$variadic = G__29855__delegate;
return G__29855;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$core$IFn$_invoke$arity$1 = juxt__1;
juxt.cljs$core$IFn$_invoke$arity$2 = juxt__2;
juxt.cljs$core$IFn$_invoke$arity$3 = juxt__3;
juxt.cljs$core$IFn$_invoke$arity$variadic = juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__29860 = cljs.core.next.call(null,coll);
coll = G__29860;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){while(true){
if((cljs.core.seq.call(null,coll)) && ((n > (0))))
{{
var G__29861 = (n - (1));
var G__29862 = cljs.core.next.call(null,coll);
n = G__29861;
coll = G__29862;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$core$IFn$_invoke$arity$1 = dorun__1;
dorun.cljs$core$IFn$_invoke$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$core$IFn$_invoke$arity$1 = doall__1;
doall.cljs$core$IFn$_invoke$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){return (o instanceof RegExp);
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){var matches = re.exec(s);if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches),s))
{if((cljs.core.count.call(null,matches) === (1)))
{return cljs.core.first.call(null,matches);
} else
{return cljs.core.vec.call(null,matches);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){var matches = re.exec(s);if((matches == null))
{return null;
} else
{if((cljs.core.count.call(null,matches) === (1)))
{return cljs.core.first.call(null,matches);
} else
{return cljs.core.vec.call(null,matches);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){var match_data = cljs.core.re_find.call(null,re,s);var match_idx = s.search(re);var match_str = ((cljs.core.coll_QMARK_.call(null,match_data))?cljs.core.first.call(null,match_data):match_data);var post_match = cljs.core.subs.call(null,s,(match_idx + cljs.core.count.call(null,match_str)));if(cljs.core.truth_(match_data))
{return (new cljs.core.LazySeq(null,((function (match_data,match_idx,match_str,post_match){
return (function (){return cljs.core.cons.call(null,match_data,((cljs.core.seq.call(null,post_match))?re_seq.call(null,re,post_match):null));
});})(match_data,match_idx,match_str,post_match))
,null,null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){var vec__29864 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);var _ = cljs.core.nth.call(null,vec__29864,(0),null);var flags = cljs.core.nth.call(null,vec__29864,(1),null);var pattern = cljs.core.nth.call(null,vec__29864,(2),null);return (new RegExp(pattern,flags));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){var _STAR_print_level_STAR_29866 = cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));
if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0))))
{return cljs.core._write.call(null,writer,"#");
} else
{cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var coll_29867__$1 = cljs.core.next.call(null,coll);var n_29868 = (new cljs.core.Keyword(null,"print-length","print-length",1931866356).cljs$core$IFn$_invoke$arity$1(opts) - (1));while(true){
if((coll_29867__$1) && (((n_29868 == null)) || (!((n_29868 === (0))))))
{cljs.core._write.call(null,writer,sep);
print_one.call(null,cljs.core.first.call(null,coll_29867__$1),writer,opts);
{
var G__29869 = cljs.core.next.call(null,coll_29867__$1);
var G__29870 = (n_29868 - (1));
coll_29867__$1 = G__29869;
n_29868 = G__29870;
continue;
}
} else
{if((cljs.core.seq.call(null,coll_29867__$1)) && ((n_29868 === (0))))
{cljs.core._write.call(null,writer,sep);
cljs.core._write.call(null,writer,"...");
} else
{}
}
break;
}
return cljs.core._write.call(null,writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_29866;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){var seq__29875 = cljs.core.seq.call(null,ss);var chunk__29876 = null;var count__29877 = (0);var i__29878 = (0);while(true){
if((i__29878 < count__29877))
{var s = cljs.core._nth.call(null,chunk__29876,i__29878);cljs.core._write.call(null,writer,s);
{
var G__29879 = seq__29875;
var G__29880 = chunk__29876;
var G__29881 = count__29877;
var G__29882 = (i__29878 + (1));
seq__29875 = G__29879;
chunk__29876 = G__29880;
count__29877 = G__29881;
i__29878 = G__29882;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29875);if(temp__4126__auto__)
{var seq__29875__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29875__$1))
{var c__8702__auto__ = cljs.core.chunk_first.call(null,seq__29875__$1);{
var G__29883 = cljs.core.chunk_rest.call(null,seq__29875__$1);
var G__29884 = c__8702__auto__;
var G__29885 = cljs.core.count.call(null,c__8702__auto__);
var G__29886 = (0);
seq__29875 = G__29883;
chunk__29876 = G__29884;
count__29877 = G__29885;
i__29878 = G__29886;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__29875__$1);cljs.core._write.call(null,writer,s);
{
var G__29887 = cljs.core.next.call(null,seq__29875__$1);
var G__29888 = null;
var G__29889 = (0);
var G__29890 = (0);
seq__29875 = G__29887;
chunk__29876 = G__29888;
count__29877 = G__29889;
i__29878 = G__29890;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;if (arguments.length > 1) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return write_all__delegate.call(this,writer,ss);};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__29891){
var writer = cljs.core.first(arglist__29891);
var ss = cljs.core.rest(arglist__29891);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){return null;
});
cljs.core.char_escapes = (function (){var obj29893 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};return obj29893;
})();
cljs.core.quote_string = (function quote_string(s){return ("\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s.replace(RegExp("[\\\\\"\b\f\n\r\t]","g"),(function (match){return (cljs.core.char_escapes[match]);
})))+"\"");
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){if((obj == null))
{return cljs.core._write.call(null,writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write.call(null,writer,"#<undefined>");
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{if(cljs.core.truth_((function (){var and__7934__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"meta","meta",1499536964));if(cljs.core.truth_(and__7934__auto__))
{var and__7934__auto____$1 = (function (){var G__29899 = obj;if(G__29899)
{var bit__8596__auto__ = (G__29899.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__8596__auto__) || (G__29899.cljs$core$IMeta$))
{return true;
} else
{if((!G__29899.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__29899);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__29899);
}
})();if(and__7934__auto____$1)
{return cljs.core.meta.call(null,obj);
} else
{return and__7934__auto____$1;
}
} else
{return and__7934__auto__;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((obj == null))
{return cljs.core._write.call(null,writer,"nil");
} else
{if(obj.cljs$lang$type)
{return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else
{if((function (){var G__29900 = obj;if(G__29900)
{var bit__8589__auto__ = (G__29900.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__8589__auto__) || (G__29900.cljs$core$IPrintWithWriter$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if(((cljs.core.type.call(null,obj) === Boolean)) || (typeof obj === 'number'))
{return cljs.core._write.call(null,writer,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)));
} else
{if(cljs.core.object_QMARK_.call(null,obj))
{cljs.core._write.call(null,writer,"#js ");
return cljs.core.print_map.call(null,cljs.core.map.call(null,(function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(obj[k])], null);
}),cljs.core.js_keys.call(null,obj)),pr_writer,writer,opts);
} else
{if(obj instanceof Array)
{return cljs.core.pr_sequential_writer.call(null,writer,pr_writer,"#js ["," ","]",opts,obj);
} else
{if(goog.isString(obj))
{if(cljs.core.truth_(new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$1(opts)))
{return cljs.core._write.call(null,writer,cljs.core.quote_string.call(null,obj));
} else
{return cljs.core._write.call(null,writer,obj);
}
} else
{if(cljs.core.fn_QMARK_.call(null,obj))
{return cljs.core.write_all.call(null,writer,"#<",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)),">");
} else
{if((obj instanceof Date))
{var normalize = (function (n,len){var ns = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));while(true){
if((cljs.core.count.call(null,ns) < len))
{{
var G__29902 = ("0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns));
ns = G__29902;
continue;
}
} else
{return ns;
}
break;
}
});return cljs.core.write_all.call(null,writer,"#inst \"",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj.getUTCFullYear())),"-",normalize.call(null,(obj.getUTCMonth() + (1)),(2)),"-",normalize.call(null,obj.getUTCDate(),(2)),"T",normalize.call(null,obj.getUTCHours(),(2)),":",normalize.call(null,obj.getUTCMinutes(),(2)),":",normalize.call(null,obj.getUTCSeconds(),(2)),".",normalize.call(null,obj.getUTCMilliseconds(),(3)),"-","00:00\"");
} else
{if(cljs.core.regexp_QMARK_.call(null,obj))
{return cljs.core.write_all.call(null,writer,"#\"",obj.source,"\"");
} else
{if((function (){var G__29901 = obj;if(G__29901)
{var bit__8596__auto__ = (G__29901.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__8596__auto__) || (G__29901.cljs$core$IPrintWithWriter$))
{return true;
} else
{if((!G__29901.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,G__29901);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,G__29901);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.write_all.call(null,writer,"#<",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)),">");
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
} else
{return null;
}
}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){cljs.core.pr_writer.call(null,cljs.core.first.call(null,objs),writer,opts);
var seq__29907 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));var chunk__29908 = null;var count__29909 = (0);var i__29910 = (0);while(true){
if((i__29910 < count__29909))
{var obj = cljs.core._nth.call(null,chunk__29908,i__29910);cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj,writer,opts);
{
var G__29911 = seq__29907;
var G__29912 = chunk__29908;
var G__29913 = count__29909;
var G__29914 = (i__29910 + (1));
seq__29907 = G__29911;
chunk__29908 = G__29912;
count__29909 = G__29913;
i__29910 = G__29914;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29907);if(temp__4126__auto__)
{var seq__29907__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29907__$1))
{var c__8702__auto__ = cljs.core.chunk_first.call(null,seq__29907__$1);{
var G__29915 = cljs.core.chunk_rest.call(null,seq__29907__$1);
var G__29916 = c__8702__auto__;
var G__29917 = cljs.core.count.call(null,c__8702__auto__);
var G__29918 = (0);
seq__29907 = G__29915;
chunk__29908 = G__29916;
count__29909 = G__29917;
i__29910 = G__29918;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__29907__$1);cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj,writer,opts);
{
var G__29919 = cljs.core.next.call(null,seq__29907__$1);
var G__29920 = null;
var G__29921 = (0);
var G__29922 = (0);
seq__29907 = G__29919;
chunk__29908 = G__29920;
count__29909 = G__29921;
i__29910 = G__29922;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));cljs.core.pr_seq_writer.call(null,objs,writer,opts);
cljs.core._flush.call(null,writer);
return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_.call(null,objs))
{return "";
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_sb_with_opts.call(null,objs,opts)));
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_.call(null,objs))
{return "\n";
} else
{var sb = cljs.core.pr_sb_with_opts.call(null,objs,opts);sb.append("\n");
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){return cljs.core.string_print.call(null,cljs.core.pr_str_with_opts.call(null,objs,opts));
});
cljs.core.newline = (function newline(opts){cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",-151457939))))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__29923){
var objs = cljs.core.seq(arglist__29923);
return pr_str__delegate(objs);
});
pr_str.cljs$core$IFn$_invoke$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__29924){
var objs = cljs.core.seq(arglist__29924);
return prn_str__delegate(objs);
});
prn_str.cljs$core$IFn$_invoke$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__29925){
var objs = cljs.core.seq(arglist__29925);
return pr__delegate(objs);
});
pr.cljs$core$IFn$_invoke$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",1129599760),false));
};
var cljs_core_print = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__29926){
var objs = cljs.core.seq(arglist__29926);
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",1129599760),false));
};
var print_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__29927){
var objs = cljs.core.seq(arglist__29927);
return print_str__delegate(objs);
});
print_str.cljs$core$IFn$_invoke$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",1129599760),false));
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
} else
{return null;
}
};
var println = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__29928){
var objs = cljs.core.seq(arglist__29928);
return println__delegate(objs);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",1129599760),false));
};
var println_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__29929){
var objs = cljs.core.seq(arglist__29929);
return println_str__delegate(objs);
});
println_str.cljs$core$IFn$_invoke$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
} else
{return null;
}
};
var prn = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__29930){
var objs = cljs.core.seq(arglist__29930);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){return cljs.core.pr_sequential_writer.call(null,writer,(function (e,w,opts__$1){print_one.call(null,cljs.core.key.call(null,e),w,opts__$1);
cljs.core._write.call(null,w," ");
return print_one.call(null,cljs.core.val.call(null,e),w,opts__$1);
}),"{",", ","}",opts,cljs.core.seq.call(null,m));
});
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map.call(null,coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map.call(null,coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map.call(null,coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core._write.call(null,writer,"()");
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll__$1));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map.call(null,coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.call(null,x__$1,y);
});
cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;
cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.call(null,x__$1,y);
});
cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;
cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols.call(null,x__$1,y);
});
cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;
cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols.call(null,x__$1,y);
});
cljs.core.IAtom = (function (){var obj29932 = {};return obj29932;
})();
cljs.core.IReset = (function (){var obj29934 = {};return obj29934;
})();
cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._reset_BANG_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._reset_BANG_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});
cljs.core.ISwap = (function (){var obj29936 = {};return obj29936;
})();
cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){if((function (){var and__7934__auto__ = o;if(and__7934__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else
{return and__7934__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else
{var x__8573__auto__ = (((o == null))?null:o);return (function (){var or__7946__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return _swap_BANG___2.call(this,o,f);
case 3:
return _swap_BANG___3.call(this,o,f,a);
case 4:
return _swap_BANG___4.call(this,o,f,a,b);
case 5:
return _swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = _swap_BANG___2;
_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = _swap_BANG___3;
_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = _swap_BANG___4;
_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = _swap_BANG___5;
return _swap_BANG_;
})()
;

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 16386;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__29937 = cljs.core.seq.call(null,self__.watches);var chunk__29938 = null;var count__29939 = (0);var i__29940 = (0);while(true){
if((i__29940 < count__29939))
{var vec__29941 = cljs.core._nth.call(null,chunk__29938,i__29940);var key = cljs.core.nth.call(null,vec__29941,(0),null);var f = cljs.core.nth.call(null,vec__29941,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__29943 = seq__29937;
var G__29944 = chunk__29938;
var G__29945 = count__29939;
var G__29946 = (i__29940 + (1));
seq__29937 = G__29943;
chunk__29938 = G__29944;
count__29939 = G__29945;
i__29940 = G__29946;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29937);if(temp__4126__auto__)
{var seq__29937__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29937__$1))
{var c__8702__auto__ = cljs.core.chunk_first.call(null,seq__29937__$1);{
var G__29947 = cljs.core.chunk_rest.call(null,seq__29937__$1);
var G__29948 = c__8702__auto__;
var G__29949 = cljs.core.count.call(null,c__8702__auto__);
var G__29950 = (0);
seq__29937 = G__29947;
chunk__29938 = G__29948;
count__29939 = G__29949;
i__29940 = G__29950;
continue;
}
} else
{var vec__29942 = cljs.core.first.call(null,seq__29937__$1);var key = cljs.core.nth.call(null,vec__29942,(0),null);var f = cljs.core.nth.call(null,vec__29942,(1),null);f.call(null,key,this$__$1,oldval,newval);
{
var G__29951 = cljs.core.next.call(null,seq__29937__$1);
var G__29952 = null;
var G__29953 = (0);
var G__29954 = (0);
seq__29937 = G__29951;
chunk__29938 = G__29952;
count__29939 = G__29953;
i__29940 = G__29954;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
return this$__$1;
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
cljs.core.__GT_Atom = (function __GT_Atom(state,meta,validator,watches){return (new cljs.core.Atom(state,meta,validator,watches));
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__29958__delegate = function (x,p__29955){var map__29957 = p__29955;var map__29957__$1 = ((cljs.core.seq_QMARK_.call(null,map__29957))?cljs.core.apply.call(null,cljs.core.hash_map,map__29957):map__29957);var validator = cljs.core.get.call(null,map__29957__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));var meta = cljs.core.get.call(null,map__29957__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));return (new cljs.core.Atom(x,meta,validator,null));
};
var G__29958 = function (x,var_args){
var p__29955 = null;if (arguments.length > 1) {
  p__29955 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__29958__delegate.call(this,x,p__29955);};
G__29958.cljs$lang$maxFixedArity = 1;
G__29958.cljs$lang$applyTo = (function (arglist__29959){
var x = cljs.core.first(arglist__29959);
var p__29955 = cljs.core.rest(arglist__29959);
return G__29958__delegate(x,p__29955);
});
G__29958.cljs$core$IFn$_invoke$arity$variadic = G__29958__delegate;
return G__29958;
})()
;
atom = function(x,var_args){
var p__29955 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){if((a instanceof cljs.core.Atom))
{var validate = a.validator;if((validate == null))
{} else
{if(cljs.core.truth_(validate.call(null,new_value)))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null)))))));
}
}
var old_value = a.state;a.state = new_value;
if((a.watches == null))
{} else
{cljs.core._notify_watches.call(null,a,old_value,new_value);
}
return new_value;
} else
{return cljs.core._reset_BANG_.call(null,a,new_value);
}
});
cljs.core.deref = (function deref(o){return cljs.core._deref.call(null,o);
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
} else
{return cljs.core._swap_BANG_.call(null,a,f);
}
});
var swap_BANG___3 = (function (a,f,x){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
} else
{return cljs.core._swap_BANG_.call(null,a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
} else
{return cljs.core._swap_BANG_.call(null,a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__29960__delegate = function (a,f,x,y,more){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,more));
} else
{return cljs.core._swap_BANG_.call(null,a,f,x,y,more);
}
};
var G__29960 = function (a,f,x,y,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__29960__delegate.call(this,a,f,x,y,more);};
G__29960.cljs$lang$maxFixedArity = 4;
G__29960.cljs$lang$applyTo = (function (arglist__29961){
var a = cljs.core.first(arglist__29961);
arglist__29961 = cljs.core.next(arglist__29961);
var f = cljs.core.first(arglist__29961);
arglist__29961 = cljs.core.next(arglist__29961);
var x = cljs.core.first(arglist__29961);
arglist__29961 = cljs.core.next(arglist__29961);
var y = cljs.core.first(arglist__29961);
var more = cljs.core.rest(arglist__29961);
return G__29960__delegate(a,f,x,y,more);
});
G__29960.cljs$core$IFn$_invoke$arity$variadic = G__29960__delegate;
return G__29960;
})()
;
swap_BANG_ = function(a,f,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
default:
return swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 4;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5.cljs$lang$applyTo;
swap_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_BANG___2;
swap_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_BANG___3;
swap_BANG_.cljs$core$IFn$_invoke$arity$4 = swap_BANG___4;
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__29962){
var iref = cljs.core.first(arglist__29962);
arglist__29962 = cljs.core.next(arglist__29962);
var f = cljs.core.first(arglist__29962);
var args = cljs.core.rest(arglist__29962);
return alter_meta_BANG___delegate(iref,f,args);
});
alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,(0));
} else
{}
return cljs.core.symbol.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix_string)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$core$IFn$_invoke$arity$0 = gensym__0;
gensym.cljs$core$IFn$_invoke$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = (1);
cljs.core.fixture2 = (2);

/**
* @constructor
*/
cljs.core.Delay = (function (f,value){
this.f = f;
this.value = value;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){var self__ = this;
var d__$1 = this;return cljs.core.not.call(null,self__.f);
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.f))
{self__.value = self__.f.call(null);
self__.f = null;
} else
{}
return self__.value;
});
cljs.core.__GT_Delay = (function __GT_Delay(f,value){return (new cljs.core.Delay(f,value));
});
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){return (x instanceof cljs.core.Delay);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){return cljs.core._realized_QMARK_.call(null,d);
});
cljs.core.IEncodeJS = (function (){var obj29964 = {};return obj29964;
})();
cljs.core._clj__GT_js = (function _clj__GT_js(x){if((function (){var and__7934__auto__ = x;if(and__7934__auto__)
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else
{return and__7934__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else
{var x__8573__auto__ = (((x == null))?null:x);return (function (){var or__7946__auto__ = (cljs.core._clj__GT_js[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._clj__GT_js["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});
cljs.core._key__GT_js = (function _key__GT_js(x){if((function (){var and__7934__auto__ = x;if(and__7934__auto__)
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else
{return and__7934__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else
{var x__8573__auto__ = (((x == null))?null:x);return (function (){var or__7946__auto__ = (cljs.core._key__GT_js[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._key__GT_js["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});
cljs.core.key__GT_js = (function key__GT_js(k){if((function (){var G__29966 = k;if(G__29966)
{var bit__8596__auto__ = null;if(cljs.core.truth_((function (){var or__7946__auto__ = bit__8596__auto__;if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return G__29966.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__29966.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,G__29966);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,G__29966);
}
})())
{return cljs.core._clj__GT_js.call(null,k);
} else
{if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol)))
{return cljs.core.clj__GT_js.call(null,k);
} else
{return cljs.core.pr_str.call(null,k);
}
}
});
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){if((x == null))
{return null;
} else
{if((function (){var G__29980 = x;if(G__29980)
{var bit__8596__auto__ = null;if(cljs.core.truth_((function (){var or__7946__auto__ = bit__8596__auto__;if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return G__29980.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__29980.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,G__29980);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,G__29980);
}
})())
{return cljs.core._clj__GT_js.call(null,x);
} else
{if((x instanceof cljs.core.Keyword))
{return cljs.core.name.call(null,x);
} else
{if((x instanceof cljs.core.Symbol))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
} else
{if(cljs.core.map_QMARK_.call(null,x))
{var m = (function (){var obj29982 = {};return obj29982;
})();var seq__29983_29993 = cljs.core.seq.call(null,x);var chunk__29984_29994 = null;var count__29985_29995 = (0);var i__29986_29996 = (0);while(true){
if((i__29986_29996 < count__29985_29995))
{var vec__29987_29997 = cljs.core._nth.call(null,chunk__29984_29994,i__29986_29996);var k_29998 = cljs.core.nth.call(null,vec__29987_29997,(0),null);var v_29999 = cljs.core.nth.call(null,vec__29987_29997,(1),null);(m[cljs.core.key__GT_js.call(null,k_29998)] = clj__GT_js.call(null,v_29999));
{
var G__30000 = seq__29983_29993;
var G__30001 = chunk__29984_29994;
var G__30002 = count__29985_29995;
var G__30003 = (i__29986_29996 + (1));
seq__29983_29993 = G__30000;
chunk__29984_29994 = G__30001;
count__29985_29995 = G__30002;
i__29986_29996 = G__30003;
continue;
}
} else
{var temp__4126__auto___30004 = cljs.core.seq.call(null,seq__29983_29993);if(temp__4126__auto___30004)
{var seq__29983_30005__$1 = temp__4126__auto___30004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29983_30005__$1))
{var c__8702__auto___30006 = cljs.core.chunk_first.call(null,seq__29983_30005__$1);{
var G__30007 = cljs.core.chunk_rest.call(null,seq__29983_30005__$1);
var G__30008 = c__8702__auto___30006;
var G__30009 = cljs.core.count.call(null,c__8702__auto___30006);
var G__30010 = (0);
seq__29983_29993 = G__30007;
chunk__29984_29994 = G__30008;
count__29985_29995 = G__30009;
i__29986_29996 = G__30010;
continue;
}
} else
{var vec__29988_30011 = cljs.core.first.call(null,seq__29983_30005__$1);var k_30012 = cljs.core.nth.call(null,vec__29988_30011,(0),null);var v_30013 = cljs.core.nth.call(null,vec__29988_30011,(1),null);(m[cljs.core.key__GT_js.call(null,k_30012)] = clj__GT_js.call(null,v_30013));
{
var G__30014 = cljs.core.next.call(null,seq__29983_30005__$1);
var G__30015 = null;
var G__30016 = (0);
var G__30017 = (0);
seq__29983_29993 = G__30014;
chunk__29984_29994 = G__30015;
count__29985_29995 = G__30016;
i__29986_29996 = G__30017;
continue;
}
}
} else
{}
}
break;
}
return m;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{var arr = [];var seq__29989_30018 = cljs.core.seq.call(null,cljs.core.map.call(null,clj__GT_js,x));var chunk__29990_30019 = null;var count__29991_30020 = (0);var i__29992_30021 = (0);while(true){
if((i__29992_30021 < count__29991_30020))
{var x_30022__$1 = cljs.core._nth.call(null,chunk__29990_30019,i__29992_30021);arr.push(x_30022__$1);
{
var G__30023 = seq__29989_30018;
var G__30024 = chunk__29990_30019;
var G__30025 = count__29991_30020;
var G__30026 = (i__29992_30021 + (1));
seq__29989_30018 = G__30023;
chunk__29990_30019 = G__30024;
count__29991_30020 = G__30025;
i__29992_30021 = G__30026;
continue;
}
} else
{var temp__4126__auto___30027 = cljs.core.seq.call(null,seq__29989_30018);if(temp__4126__auto___30027)
{var seq__29989_30028__$1 = temp__4126__auto___30027;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29989_30028__$1))
{var c__8702__auto___30029 = cljs.core.chunk_first.call(null,seq__29989_30028__$1);{
var G__30030 = cljs.core.chunk_rest.call(null,seq__29989_30028__$1);
var G__30031 = c__8702__auto___30029;
var G__30032 = cljs.core.count.call(null,c__8702__auto___30029);
var G__30033 = (0);
seq__29989_30018 = G__30030;
chunk__29990_30019 = G__30031;
count__29991_30020 = G__30032;
i__29992_30021 = G__30033;
continue;
}
} else
{var x_30034__$1 = cljs.core.first.call(null,seq__29989_30028__$1);arr.push(x_30034__$1);
{
var G__30035 = cljs.core.next.call(null,seq__29989_30028__$1);
var G__30036 = null;
var G__30037 = (0);
var G__30038 = (0);
seq__29989_30018 = G__30035;
chunk__29990_30019 = G__30036;
count__29991_30020 = G__30037;
i__29992_30021 = G__30038;
continue;
}
}
} else
{}
}
break;
}
return arr;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return x;
} else
{return null;
}
}
}
}
}
}
}
});
cljs.core.IEncodeClojure = (function (){var obj30040 = {};return obj30040;
})();
cljs.core._js__GT_clj = (function _js__GT_clj(x,options){if((function (){var and__7934__auto__ = x;if(and__7934__auto__)
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else
{return and__7934__auto__;
}
})())
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else
{var x__8573__auto__ = (((x == null))?null:x);return (function (){var or__7946__auto__ = (cljs.core._js__GT_clj[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._js__GT_clj["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() {
var js__GT_clj = null;
var js__GT_clj__1 = (function (x){return js__GT_clj.call(null,x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false], null));
});
var js__GT_clj__2 = (function() { 
var G__30061__delegate = function (x,opts){if((function (){var G__30051 = x;if(G__30051)
{var bit__8596__auto__ = null;if(cljs.core.truth_((function (){var or__7946__auto__ = bit__8596__auto__;if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return G__30051.cljs$core$IEncodeClojure$;
}
})()))
{return true;
} else
{if((!G__30051.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeClojure,G__30051);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeClojure,G__30051);
}
})())
{return cljs.core._js__GT_clj.call(null,x,cljs.core.apply.call(null,cljs.core.array_map,opts));
} else
{if(cljs.core.seq.call(null,opts))
{var map__30052 = opts;var map__30052__$1 = ((cljs.core.seq_QMARK_.call(null,map__30052))?cljs.core.apply.call(null,cljs.core.hash_map,map__30052):map__30052);var keywordize_keys = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252));var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);var f = ((function (map__30052,map__30052__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){if(cljs.core.seq_QMARK_.call(null,x__$1))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x__$1));
} else
{if(cljs.core.coll_QMARK_.call(null,x__$1))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x__$1),cljs.core.map.call(null,thisfn,x__$1));
} else
{if(x__$1 instanceof Array)
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x__$1));
} else
{if((cljs.core.type.call(null,x__$1) === Object))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8671__auto__ = ((function (map__30052,map__30052__$1,keywordize_keys,keyfn){
return (function iter__30057(s__30058){return (new cljs.core.LazySeq(null,((function (map__30052,map__30052__$1,keywordize_keys,keyfn){
return (function (){var s__30058__$1 = s__30058;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30058__$1);if(temp__4126__auto__)
{var s__30058__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30058__$2))
{var c__8669__auto__ = cljs.core.chunk_first.call(null,s__30058__$2);var size__8670__auto__ = cljs.core.count.call(null,c__8669__auto__);var b__30060 = cljs.core.chunk_buffer.call(null,size__8670__auto__);if((function (){var i__30059 = (0);while(true){
if((i__30059 < size__8670__auto__))
{var k = cljs.core._nth.call(null,c__8669__auto__,i__30059);cljs.core.chunk_append.call(null,b__30060,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyfn.call(null,k),thisfn.call(null,(x__$1[k]))], null));
{
var G__30062 = (i__30059 + (1));
i__30059 = G__30062;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30060),iter__30057.call(null,cljs.core.chunk_rest.call(null,s__30058__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30060),null);
}
} else
{var k = cljs.core.first.call(null,s__30058__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyfn.call(null,k),thisfn.call(null,(x__$1[k]))], null),iter__30057.call(null,cljs.core.rest.call(null,s__30058__$2)));
}
} else
{return null;
}
break;
}
});})(map__30052,map__30052__$1,keywordize_keys,keyfn))
,null,null));
});})(map__30052,map__30052__$1,keywordize_keys,keyfn))
;return iter__8671__auto__.call(null,cljs.core.js_keys.call(null,x__$1));
})());
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return x__$1;
} else
{return null;
}
}
}
}
}
});})(map__30052,map__30052__$1,keywordize_keys,keyfn))
;return f.call(null,x);
} else
{return null;
}
}
};
var G__30061 = function (x,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__30061__delegate.call(this,x,opts);};
G__30061.cljs$lang$maxFixedArity = 1;
G__30061.cljs$lang$applyTo = (function (arglist__30063){
var x = cljs.core.first(arglist__30063);
var opts = cljs.core.rest(arglist__30063);
return G__30061__delegate(x,opts);
});
G__30061.cljs$core$IFn$_invoke$arity$variadic = G__30061__delegate;
return G__30061;
})()
;
js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return js__GT_clj__1.call(this,x);
default:
return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1 = js__GT_clj__1;
js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (mem){
return (function() { 
var G__30064__delegate = function (args){var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),args,cljs.core.lookup_sentinel);if((v === cljs.core.lookup_sentinel))
{var ret = cljs.core.apply.call(null,f,args);cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,args,ret);
return ret;
} else
{return v;
}
};
var G__30064 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30064__delegate.call(this,args);};
G__30064.cljs$lang$maxFixedArity = 0;
G__30064.cljs$lang$applyTo = (function (arglist__30065){
var args = cljs.core.seq(arglist__30065);
return G__30064__delegate(args);
});
G__30064.cljs$core$IFn$_invoke$arity$variadic = G__30064__delegate;
return G__30064;
})()
;
;})(mem))
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){while(true){
var ret = f.call(null);if(cljs.core.fn_QMARK_.call(null,ret))
{{
var G__30066 = ret;
f = G__30066;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__30067__delegate = function (f,args){return trampoline.call(null,(function (){return cljs.core.apply.call(null,f,args);
}));
};
var G__30067 = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__30067__delegate.call(this,f,args);};
G__30067.cljs$lang$maxFixedArity = 1;
G__30067.cljs$lang$applyTo = (function (arglist__30068){
var f = cljs.core.first(arglist__30068);
var args = cljs.core.rest(arglist__30068);
return G__30067__delegate(f,args);
});
G__30067.cljs$core$IFn$_invoke$arity$variadic = G__30067__delegate;
return G__30067;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$core$IFn$_invoke$arity$1 = trampoline__1;
trampoline.cljs$core$IFn$_invoke$arity$variadic = trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return rand.call(null,(1));
});
var rand__1 = (function (n){return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){return cljs.core.reduce.call(null,(function (ret,x){var k = f.call(null,x);return cljs.core.assoc.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"descendants","descendants",1824886031),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ancestors","ancestors",-776045424),cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){if((cljs.core._global_hierarchy == null))
{cljs.core._global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
} else
{}
return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){return cljs.core.apply.call(null,cljs.core.swap_BANG_,cljs.core.get_global_hierarchy.call(null),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__30069){
var f = cljs.core.first(arglist__30069);
var args = cljs.core.rest(arglist__30069);
return swap_global_hierarchy_BANG___delegate(f,args);
});
swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_global_hierarchy_BANG___delegate;
return swap_global_hierarchy_BANG_;
})()
;
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){var or__7946__auto__ = cljs.core._EQ_.call(null,child,parent);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{var and__7934__auto__ = cljs.core.vector_QMARK_.call(null,parent);if(and__7934__auto__)
{var and__7934__auto____$1 = cljs.core.vector_QMARK_.call(null,child);if(and__7934__auto____$1)
{var and__7934__auto____$2 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));if(and__7934__auto____$2)
{var ret = true;var i = (0);while(true){
if((!(ret)) || ((i === cljs.core.count.call(null,parent))))
{return ret;
} else
{{
var G__30070 = isa_QMARK_.call(null,h,child.call(null,i),parent.call(null,i));
var G__30071 = (i + (1));
ret = G__30070;
i = G__30071;
continue;
}
}
break;
}
} else
{return and__7934__auto____$2;
}
} else
{return and__7934__auto____$1;
}
} else
{return and__7934__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){return parents.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),tag);
});
var parents__2 = (function (h,tag){return cljs.core.not_empty.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){return ancestors.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),tag);
});
var ancestors__2 = (function (h,tag){return cljs.core.not_empty.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$core$IFn$_invoke$arity$1 = ancestors__1;
ancestors.cljs$core$IFn$_invoke$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){return descendants.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),tag);
});
var descendants__2 = (function (h,tag){return cljs.core.not_empty.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"descendants","descendants",1824886031).cljs$core$IFn$_invoke$arity$1(h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$core$IFn$_invoke$arity$1 = descendants__1;
descendants.cljs$core$IFn$_invoke$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)))))));
}
cljs.core.swap_global_hierarchy_BANG_.call(null,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)))))));
}
var tp = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h);var td = new cljs.core.Keyword(null,"descendants","descendants",1824886031).cljs$core$IFn$_invoke$arity$1(h);var ta = new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h);var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){return cljs.core.reduce.call(null,((function (tp,td,ta){
return (function (ret,k){return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
});})(tp,td,ta))
,m,cljs.core.cons.call(null,source,sources.call(null,source)));
});})(tp,td,ta))
;var or__7946__auto__ = ((cljs.core.contains_QMARK_.call(null,tp.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta.call(null,tag),parent))
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"already has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"as ancestor")));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta.call(null,parent),tag))
{throw (new Error(("Cyclic derivation:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"as ancestor")));
} else
{}
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),new cljs.core.Keyword(null,"ancestors","ancestors",-776045424),tf.call(null,new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),new cljs.core.Keyword(null,"descendants","descendants",1824886031),tf.call(null,new cljs.core.Keyword(null,"descendants","descendants",1824886031).cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})());if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$core$IFn$_invoke$arity$2 = derive__2;
derive.cljs$core$IFn$_invoke$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){cljs.core.swap_global_hierarchy_BANG_.call(null,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){var parentMap = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h);var childsParents = (cljs.core.truth_(parentMap.call(null,tag))?cljs.core.disj.call(null,parentMap.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);var newParents = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents))?cljs.core.assoc.call(null,parentMap,tag,childsParents):cljs.core.dissoc.call(null,parentMap,tag));var deriv_seq = cljs.core.flatten.call(null,cljs.core.map.call(null,((function (parentMap,childsParents,newParents){
return (function (p1__30072_SHARP_){return cljs.core.cons.call(null,cljs.core.first.call(null,p1__30072_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__30072_SHARP_),cljs.core.second.call(null,p1__30072_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq.call(null,newParents)));if(cljs.core.contains_QMARK_.call(null,parentMap.call(null,tag),parent))
{return cljs.core.reduce.call(null,((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__30073_SHARP_,p2__30074_SHARP_){return cljs.core.apply.call(null,cljs.core.derive,p1__30073_SHARP_,p2__30074_SHARP_);
});})(parentMap,childsParents,newParents,deriv_seq))
,cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,(2),deriv_seq));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$core$IFn$_invoke$arity$2 = underive__2;
underive.cljs$core$IFn$_invoke$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){cljs.core.swap_BANG_.call(null,method_cache,(function (_){return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){var xprefs = cljs.core.deref.call(null,prefer_table).call(null,x);var or__7946__auto__ = (cljs.core.truth_((function (){var and__7934__auto__ = xprefs;if(cljs.core.truth_(and__7934__auto__))
{return xprefs.call(null,y);
} else
{return and__7934__auto__;
}
})())?true:null);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (function (){var ps = cljs.core.parents.call(null,y);while(true){
if((cljs.core.count.call(null,ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps),prefer_table)))
{} else
{}
{
var G__30075 = cljs.core.rest.call(null,ps);
ps = G__30075;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__7946__auto____$1))
{return or__7946__auto____$1;
} else
{var or__7946__auto____$2 = (function (){var ps = cljs.core.parents.call(null,x);while(true){
if((cljs.core.count.call(null,ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps),y,prefer_table)))
{} else
{}
{
var G__30076 = cljs.core.rest.call(null,ps);
ps = G__30076;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__7946__auto____$2))
{return or__7946__auto____$2;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){var or__7946__auto__ = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);if(cljs.core.truth_(or__7946__auto__))
{return or__7946__auto__;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){var best_entry = cljs.core.reduce.call(null,(function (be,p__30079){var vec__30080 = p__30079;var k = cljs.core.nth.call(null,vec__30080,(0),null);var _ = cljs.core.nth.call(null,vec__30080,(1),null);var e = vec__30080;if(cljs.core.isa_QMARK_.call(null,cljs.core.deref.call(null,hierarchy),dispatch_val,k))
{var be2 = (cljs.core.truth_((function (){var or__7946__auto__ = (be == null);if(or__7946__auto__)
{return or__7946__auto__;
} else
{return cljs.core.dominates.call(null,k,cljs.core.first.call(null,be),prefer_table);
}
})())?e:be);if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2),k,prefer_table)))
{} else
{throw (new Error(("Multiple methods in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' match dispatch value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,be2))+", and neither is preferred")));
}
return be2;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));if(cljs.core.truth_(best_entry))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry));
return cljs.core.second.call(null,best_entry);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = (function (){var obj30082 = {};return obj30082;
})();
cljs.core._reset = (function _reset(mf){if((function (){var and__7934__auto__ = mf;if(and__7934__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__7934__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__8573__auto__ = (((mf == null))?null:mf);return (function (){var or__7946__auto__ = (cljs.core._reset[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._reset["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){if((function (){var and__7934__auto__ = mf;if(and__7934__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__7934__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__8573__auto__ = (((mf == null))?null:mf);return (function (){var or__7946__auto__ = (cljs.core._add_method[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._add_method["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){if((function (){var and__7934__auto__ = mf;if(and__7934__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__7934__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__8573__auto__ = (((mf == null))?null:mf);return (function (){var or__7946__auto__ = (cljs.core._remove_method[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._remove_method["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){if((function (){var and__7934__auto__ = mf;if(and__7934__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__7934__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__8573__auto__ = (((mf == null))?null:mf);return (function (){var or__7946__auto__ = (cljs.core._prefer_method[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._prefer_method["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){if((function (){var and__7934__auto__ = mf;if(and__7934__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__7934__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__8573__auto__ = (((mf == null))?null:mf);return (function (){var or__7946__auto__ = (cljs.core._get_method[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._get_method["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){if((function (){var and__7934__auto__ = mf;if(and__7934__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__7934__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__8573__auto__ = (((mf == null))?null:mf);return (function (){var or__7946__auto__ = (cljs.core._methods[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._methods["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){if((function (){var and__7934__auto__ = mf;if(and__7934__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__7934__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__8573__auto__ = (((mf == null))?null:mf);return (function (){var or__7946__auto__ = (cljs.core._prefers[goog.typeOf(x__8573__auto__)]);if(or__7946__auto__)
{return or__7946__auto__;
} else
{var or__7946__auto____$1 = (cljs.core._prefers["_"]);if(or__7946__auto____$1)
{return or__7946__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core.throw_no_method_error = (function throw_no_method_error(name,dispatch_val){throw (new Error(("No method in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' for dispatch value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val))));
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194305;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.call(null,self__.method_table,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.call(null,self__.method_cache,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.call(null,self__.prefer_table,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.call(null,self__.cached_hierarchy,((function (mf__$1){
return (function (mf__$2){return null;
});})(mf__$1))
);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.call(null,self__.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.call(null,self__.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.cached_hierarchy),cljs.core.deref.call(null,self__.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__4124__auto__ = cljs.core.deref.call(null,self__.method_cache).call(null,dispatch_val);if(cljs.core.truth_(temp__4124__auto__))
{var target_fn = temp__4124__auto__;return target_fn;
} else
{var temp__4124__auto____$1 = cljs.core.find_and_cache_best_method.call(null,self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);if(cljs.core.truth_(temp__4124__auto____$1))
{var target_fn = temp__4124__auto____$1;return target_fn;
} else
{return cljs.core.deref.call(null,self__.method_table).call(null,self__.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){var self__ = this;
var mf__$1 = this;if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,self__.prefer_table)))
{throw (new Error(("Preference conflict in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+"': "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val_y)+" is already preferred to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val_x))));
} else
{}
cljs.core.swap_BANG_.call(null,self__.prefer_table,((function (mf__$1){
return (function (old){return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
});})(mf__$1))
);
return cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;return cljs.core.deref.call(null,self__.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;return cljs.core.deref.call(null,self__.prefer_table);
});
cljs.core.MultiFn.prototype.call = (function() {
var G__30084 = null;
var G__30084__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a);
});
var G__30084__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b);
});
var G__30084__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c);
});
var G__30084__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d);
});
var G__30084__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e);
});
var G__30084__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f);
});
var G__30084__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g);
});
var G__30084__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h);
});
var G__30084__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i);
});
var G__30084__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j);
});
var G__30084__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k);
});
var G__30084__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l);
});
var G__30084__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);
});
var G__30084__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});
var G__30084__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});
var G__30084__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
var G__30084__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});
var G__30084__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__30084__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__30084__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__30084__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = cljs.core.apply.call(null,self__.dispatch_fn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return cljs.core.apply.call(null,target_fn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__30084 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 2:
return G__30084__2.call(this,self__,a);
case 3:
return G__30084__3.call(this,self__,a,b);
case 4:
return G__30084__4.call(this,self__,a,b,c);
case 5:
return G__30084__5.call(this,self__,a,b,c,d);
case 6:
return G__30084__6.call(this,self__,a,b,c,d,e);
case 7:
return G__30084__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__30084__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__30084__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__30084__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__30084__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__30084__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__30084__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__30084__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__30084__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__30084__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__30084__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__30084__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__30084__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__30084__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__30084__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__30084__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__30084;
})()
;
cljs.core.MultiFn.prototype.apply = (function (self__,args30083){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args30083)));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var mf = this;var dispatch_val = self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var mf = this;var dispatch_val = cljs.core.apply.call(null,self__.dispatch_fn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error.call(null,self__.name,dispatch_val);
}
return cljs.core.apply.call(null,target_fn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.string.hashCode(cljs.core.pr_str.call(null,this$__$1));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){var self__ = this;
var ___$2 = this;return cljs.core._write.call(null,writer,("#uuid \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.uuid)+"\""));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});
cljs.core.UUID.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.uuid;
});
cljs.core.__GT_UUID = (function __GT_UUID(uuid){return (new cljs.core.UUID(uuid));
});

/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})
cljs.core.ExceptionInfo.cljs$lang$type = true;
cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";
cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__8516__auto__,writer__8517__auto__,opts__8518__auto__){return cljs.core._write.call(null,writer__8517__auto__,"cljs.core/ExceptionInfo");
});
cljs.core.__GT_ExceptionInfo = (function __GT_ExceptionInfo(message,data,cause){return (new cljs.core.ExceptionInfo(message,data,cause));
});
cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$core$IFn$_invoke$arity$2 = ex_info__2;
ex_info.cljs$core$IFn$_invoke$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){if((ex instanceof cljs.core.ExceptionInfo))
{return ex.data;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){if((ex instanceof Error))
{return ex.message;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){if((ex instanceof cljs.core.ExceptionInfo))
{return ex.cause;
} else
{return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){return (function (x,y){if(cljs.core.truth_(pred.call(null,x,y)))
{return (-1);
} else
{if(cljs.core.truth_(pred.call(null,y,x)))
{return (1);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return (0);
} else
{return null;
}
}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null),x);
});

//# sourceMappingURL=core.js.map