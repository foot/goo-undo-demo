// Compiled by ClojureScript 0.0-2261
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.enable_console_print_BANG_.call(null);
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__30402_30406 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__30403_30407 = null;var count__30404_30408 = (0);var i__30405_30409 = (0);while(true){
if((i__30405_30409 < count__30404_30408))
{var k_30410 = cljs.core._nth.call(null,chunk__30403_30407,i__30405_30409);var v_30411 = (b[k_30410]);(a[k_30410] = v_30411);
{
var G__30412 = seq__30402_30406;
var G__30413 = chunk__30403_30407;
var G__30414 = count__30404_30408;
var G__30415 = (i__30405_30409 + (1));
seq__30402_30406 = G__30412;
chunk__30403_30407 = G__30413;
count__30404_30408 = G__30414;
i__30405_30409 = G__30415;
continue;
}
} else
{var temp__4126__auto___30416 = cljs.core.seq.call(null,seq__30402_30406);if(temp__4126__auto___30416)
{var seq__30402_30417__$1 = temp__4126__auto___30416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30402_30417__$1))
{var c__8702__auto___30418 = cljs.core.chunk_first.call(null,seq__30402_30417__$1);{
var G__30419 = cljs.core.chunk_rest.call(null,seq__30402_30417__$1);
var G__30420 = c__8702__auto___30418;
var G__30421 = cljs.core.count.call(null,c__8702__auto___30418);
var G__30422 = (0);
seq__30402_30406 = G__30419;
chunk__30403_30407 = G__30420;
count__30404_30408 = G__30421;
i__30405_30409 = G__30422;
continue;
}
} else
{var k_30423 = cljs.core.first.call(null,seq__30402_30417__$1);var v_30424 = (b[k_30423]);(a[k_30423] = v_30424);
{
var G__30425 = cljs.core.next.call(null,seq__30402_30417__$1);
var G__30426 = null;
var G__30427 = (0);
var G__30428 = (0);
seq__30402_30406 = G__30425;
chunk__30403_30407 = G__30426;
count__30404_30408 = G__30427;
i__30405_30409 = G__30428;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": (function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__30429 = (i + (2));
var G__30430 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__30429;
ret = G__30430;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
}), "list": (function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}), "set": (function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}), ":": (function (v){return cljs.core.keyword.call(null,v);
}), "$": (function (v){return cljs.core.symbol.call(null,v);
})}},cljs.core.clj__GT_js.call(null,opts)));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__30431_30435 = cljs.core.seq.call(null,v);var chunk__30432_30436 = null;var count__30433_30437 = (0);var i__30434_30438 = (0);while(true){
if((i__30434_30438 < count__30433_30437))
{var x_30439 = cljs.core._nth.call(null,chunk__30432_30436,i__30434_30438);ret.push(x_30439);
{
var G__30440 = seq__30431_30435;
var G__30441 = chunk__30432_30436;
var G__30442 = count__30433_30437;
var G__30443 = (i__30434_30438 + (1));
seq__30431_30435 = G__30440;
chunk__30432_30436 = G__30441;
count__30433_30437 = G__30442;
i__30434_30438 = G__30443;
continue;
}
} else
{var temp__4126__auto___30444 = cljs.core.seq.call(null,seq__30431_30435);if(temp__4126__auto___30444)
{var seq__30431_30445__$1 = temp__4126__auto___30444;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30431_30445__$1))
{var c__8702__auto___30446 = cljs.core.chunk_first.call(null,seq__30431_30445__$1);{
var G__30447 = cljs.core.chunk_rest.call(null,seq__30431_30445__$1);
var G__30448 = c__8702__auto___30446;
var G__30449 = cljs.core.count.call(null,c__8702__auto___30446);
var G__30450 = (0);
seq__30431_30435 = G__30447;
chunk__30432_30436 = G__30448;
count__30433_30437 = G__30449;
i__30434_30438 = G__30450;
continue;
}
} else
{var x_30451 = cljs.core.first.call(null,seq__30431_30445__$1);ret.push(x_30451);
{
var G__30452 = cljs.core.next.call(null,seq__30431_30445__$1);
var G__30453 = null;
var G__30454 = (0);
var G__30455 = (0);
seq__30431_30435 = G__30452;
chunk__30432_30436 = G__30453;
count__30433_30437 = G__30454;
i__30434_30438 = G__30455;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__30456_30460 = cljs.core.seq.call(null,v);var chunk__30457_30461 = null;var count__30458_30462 = (0);var i__30459_30463 = (0);while(true){
if((i__30459_30463 < count__30458_30462))
{var x_30464 = cljs.core._nth.call(null,chunk__30457_30461,i__30459_30463);ret.push(x_30464);
{
var G__30465 = seq__30456_30460;
var G__30466 = chunk__30457_30461;
var G__30467 = count__30458_30462;
var G__30468 = (i__30459_30463 + (1));
seq__30456_30460 = G__30465;
chunk__30457_30461 = G__30466;
count__30458_30462 = G__30467;
i__30459_30463 = G__30468;
continue;
}
} else
{var temp__4126__auto___30469 = cljs.core.seq.call(null,seq__30456_30460);if(temp__4126__auto___30469)
{var seq__30456_30470__$1 = temp__4126__auto___30469;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30456_30470__$1))
{var c__8702__auto___30471 = cljs.core.chunk_first.call(null,seq__30456_30470__$1);{
var G__30472 = cljs.core.chunk_rest.call(null,seq__30456_30470__$1);
var G__30473 = c__8702__auto___30471;
var G__30474 = cljs.core.count.call(null,c__8702__auto___30471);
var G__30475 = (0);
seq__30456_30460 = G__30472;
chunk__30457_30461 = G__30473;
count__30458_30462 = G__30474;
i__30459_30463 = G__30475;
continue;
}
} else
{var x_30476 = cljs.core.first.call(null,seq__30456_30470__$1);ret.push(x_30476);
{
var G__30477 = cljs.core.next.call(null,seq__30456_30470__$1);
var G__30478 = null;
var G__30479 = (0);
var G__30480 = (0);
seq__30456_30460 = G__30477;
chunk__30457_30461 = G__30478;
count__30458_30462 = G__30479;
i__30459_30463 = G__30480;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__30481_30485 = cljs.core.seq.call(null,v);var chunk__30482_30486 = null;var count__30483_30487 = (0);var i__30484_30488 = (0);while(true){
if((i__30484_30488 < count__30483_30487))
{var x_30489 = cljs.core._nth.call(null,chunk__30482_30486,i__30484_30488);ret.push(x_30489);
{
var G__30490 = seq__30481_30485;
var G__30491 = chunk__30482_30486;
var G__30492 = count__30483_30487;
var G__30493 = (i__30484_30488 + (1));
seq__30481_30485 = G__30490;
chunk__30482_30486 = G__30491;
count__30483_30487 = G__30492;
i__30484_30488 = G__30493;
continue;
}
} else
{var temp__4126__auto___30494 = cljs.core.seq.call(null,seq__30481_30485);if(temp__4126__auto___30494)
{var seq__30481_30495__$1 = temp__4126__auto___30494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30481_30495__$1))
{var c__8702__auto___30496 = cljs.core.chunk_first.call(null,seq__30481_30495__$1);{
var G__30497 = cljs.core.chunk_rest.call(null,seq__30481_30495__$1);
var G__30498 = c__8702__auto___30496;
var G__30499 = cljs.core.count.call(null,c__8702__auto___30496);
var G__30500 = (0);
seq__30481_30485 = G__30497;
chunk__30482_30486 = G__30498;
count__30483_30487 = G__30499;
i__30484_30488 = G__30500;
continue;
}
} else
{var x_30501 = cljs.core.first.call(null,seq__30481_30495__$1);ret.push(x_30501);
{
var G__30502 = cljs.core.next.call(null,seq__30481_30495__$1);
var G__30503 = null;
var G__30504 = (0);
var G__30505 = (0);
seq__30481_30485 = G__30502;
chunk__30482_30486 = G__30503;
count__30483_30487 = G__30504;
i__30484_30488 = G__30505;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x30515 = cljs.core.clone.call(null,handlers);x30515.forEach = ((function (x30515,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__30516 = cljs.core.seq.call(null,coll);var chunk__30517 = null;var count__30518 = (0);var i__30519 = (0);while(true){
if((i__30519 < count__30518))
{var vec__30520 = cljs.core._nth.call(null,chunk__30517,i__30519);var k = cljs.core.nth.call(null,vec__30520,(0),null);var v = cljs.core.nth.call(null,vec__30520,(1),null);f.call(null,v,k);
{
var G__30522 = seq__30516;
var G__30523 = chunk__30517;
var G__30524 = count__30518;
var G__30525 = (i__30519 + (1));
seq__30516 = G__30522;
chunk__30517 = G__30523;
count__30518 = G__30524;
i__30519 = G__30525;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30516);if(temp__4126__auto__)
{var seq__30516__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30516__$1))
{var c__8702__auto__ = cljs.core.chunk_first.call(null,seq__30516__$1);{
var G__30526 = cljs.core.chunk_rest.call(null,seq__30516__$1);
var G__30527 = c__8702__auto__;
var G__30528 = cljs.core.count.call(null,c__8702__auto__);
var G__30529 = (0);
seq__30516 = G__30526;
chunk__30517 = G__30527;
count__30518 = G__30528;
i__30519 = G__30529;
continue;
}
} else
{var vec__30521 = cljs.core.first.call(null,seq__30516__$1);var k = cljs.core.nth.call(null,vec__30521,(0),null);var v = cljs.core.nth.call(null,vec__30521,(1),null);f.call(null,v,k);
{
var G__30530 = cljs.core.next.call(null,seq__30516__$1);
var G__30531 = null;
var G__30532 = (0);
var G__30533 = (0);
seq__30516 = G__30530;
chunk__30517 = G__30531;
count__30518 = G__30532;
i__30519 = G__30533;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x30515,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x30515;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__30514 = obj;G__30514.push(kfn.call(null,k),vfn.call(null,v));
return G__30514;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t30537 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t30537 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta30538){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta30538 = meta30538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t30537.cljs$lang$type = true;
cognitect.transit.t30537.cljs$lang$ctorStr = "cognitect.transit/t30537";
cognitect.transit.t30537.cljs$lang$ctorPrWriter = (function (this__8513__auto__,writer__8514__auto__,opt__8515__auto__){return cljs.core._write.call(null,writer__8514__auto__,"cognitect.transit/t30537");
});
cognitect.transit.t30537.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t30537.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t30537.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t30537.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t30537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30539){var self__ = this;
var _30539__$1 = this;return self__.meta30538;
});
cognitect.transit.t30537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30539,meta30538__$1){var self__ = this;
var _30539__$1 = this;return (new cognitect.transit.t30537(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta30538__$1));
});
cognitect.transit.__GT_t30537 = (function __GT_t30537(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta30538){return (new cognitect.transit.t30537(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta30538));
});
}
return (new cognitect.transit.t30537(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map