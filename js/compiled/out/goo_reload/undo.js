// Compiled by ClojureScript 0.0-2261
goog.provide('goo_reload.undo');
goog.require('cljs.core');
goog.require('goo_reload.graph');
goog.require('clojure.data');
goog.require('reagent.core');
goog.require('clojure.data');
goog.require('clairvoyant.core');
goog.require('clairvoyant.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('goo_reload.graph');
if(typeof goo_reload.undo.parent !== 'undefined')
{} else
{goo_reload.undo.parent = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof goo_reload.undo.states !== 'undefined')
{} else
{goo_reload.undo.states = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof goo_reload.undo.undo_list !== 'undefined')
{} else
{goo_reload.undo.undo_list = reagent.core.atom.call(null,null);
}
if(typeof goo_reload.undo.undo_state !== 'undefined')
{} else
{goo_reload.undo.undo_state = reagent.core.atom.call(null,(0));
}
if(typeof goo_reload.undo.undo_head !== 'undefined')
{} else
{goo_reload.undo.undo_head = reagent.core.atom.call(null,(0));
}
goo_reload.undo.my_hash = (function my_hash(v){return cljs.core.hash.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
});
goo_reload.undo.undo = (function undo(n,state){var undos = cljs.core.deref.call(null,goo_reload.undo.undo_list);var p = cljs.core.deref.call(null,goo_reload.undo.parent);var states = cljs.core.deref.call(null,goo_reload.undo.states);var temp__4126__auto__ = states.call(null,cljs.core.nth.call(null,undos,n));if(cljs.core.truth_(temp__4126__auto__))
{var old = temp__4126__auto__;cljs.core.reset_BANG_.call(null,goo_reload.undo.undo_state,n);
return cljs.core.reset_BANG_.call(null,state,old);
} else
{return null;
}
});
if(typeof goo_reload.undo.watch_head !== 'undefined')
{} else
{goo_reload.undo.watch_head = cljs.core.add_watch.call(null,goo_reload.undo.undo_head,new cljs.core.Keyword("goo-reload.undo","watch-head","goo-reload.undo/watch-head",-945078899),(function (_,___$1,old_val,new_val){return cljs.core.print.call(null,"watch head changed!",new_val);
}));
}
goo_reload.undo.format_version = (function format_version(i,s1,s2){var vec__28840 = clojure.data.diff.call(null,s1,s2);var in_a = cljs.core.nth.call(null,vec__28840,(0),null);var in_b = cljs.core.nth.call(null,vec__28840,(1),null);var in_both = cljs.core.nth.call(null,vec__28840,(2),null);var to_vec = ((function (vec__28840,in_a,in_b,in_both){
return (function (p1__28838_SHARP_){if(cljs.core.coll_QMARK_.call(null,p1__28838_SHARP_))
{return cljs.core.vec.call(null,p1__28838_SHARP_);
} else
{return p1__28838_SHARP_;
}
});})(vec__28840,in_a,in_b,in_both))
;var components = cljs.core.flatten.call(null,clojure.walk.postwalk.call(null,to_vec,in_a));var interesting_components = cljs.core.drop.call(null,(2),components);if((cljs.core.count.call(null,interesting_components) < (10)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(interesting_components));
} else
{return "big change...";
}
});
goo_reload.undo.format_version_memo = cljs.core.memoize.call(null,goo_reload.undo.format_version);
goo_reload.undo._undo_widget = (function _undo_widget(state){var head = cljs.core.deref.call(null,goo_reload.undo.undo_head);var parent = cljs.core.deref.call(null,goo_reload.undo.parent);var states = cljs.core.deref.call(null,goo_reload.undo.states);var undo_list = cljs.core.deref.call(null,goo_reload.undo.undo_list);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#undo-menu.ui.vertical.menu","div#undo-menu.ui.vertical.menu",2086338542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (head,parent,states,undo_list){
return (function (){return goo_reload.undo.undo.call(null,cljs.core.deref.call(null,goo_reload.undo.undo_head),state);
});})(head,parent,states,undo_list))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [goo_reload.graph.graph,parent,undo_list], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),"Undo",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694),(function (){var iter__8671__auto__ = ((function (head,parent,states,undo_list){
return (function iter__28849(s__28850){return (new cljs.core.LazySeq(null,((function (head,parent,states,undo_list){
return (function (){var s__28850__$1 = s__28850;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28850__$1);if(temp__4126__auto__)
{var s__28850__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28850__$2))
{var c__8669__auto__ = cljs.core.chunk_first.call(null,s__28850__$2);var size__8670__auto__ = cljs.core.count.call(null,c__8669__auto__);var b__28852 = cljs.core.chunk_buffer.call(null,size__8670__auto__);if((function (){var i__28851 = (0);while(true){
if((i__28851 < size__8670__auto__))
{var vec__28855 = cljs.core._nth.call(null,c__8669__auto__,i__28851);var i = cljs.core.nth.call(null,vec__28855,(0),null);var s_hash = cljs.core.nth.call(null,vec__28855,(1),null);cljs.core.chunk_append.call(null,b__28852,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.item","a.item",725358035),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__28851,vec__28855,i,s_hash,c__8669__auto__,size__8670__auto__,b__28852,s__28850__$2,temp__4126__auto__,head,parent,states,undo_list){
return (function (){return goo_reload.undo.undo.call(null,i,state);
});})(i__28851,vec__28855,i,s_hash,c__8669__auto__,size__8670__auto__,b__28852,s__28850__$2,temp__4126__auto__,head,parent,states,undo_list))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28851,vec__28855,i,s_hash,c__8669__auto__,size__8670__auto__,b__28852,s__28850__$2,temp__4126__auto__,head,parent,states,undo_list){
return (function (){return cljs.core.reset_BANG_.call(null,goo_reload.undo.undo_head,i);
});})(i__28851,vec__28855,i,s_hash,c__8669__auto__,size__8670__auto__,b__28852,s__28850__$2,temp__4126__auto__,head,parent,states,undo_list))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,head,i))?"active":null)], null),goo_reload.undo.format_version_memo.call(null,i,states.call(null,s_hash),states.call(null,parent.call(null,s_hash)))], null));
{
var G__28857 = (i__28851 + (1));
i__28851 = G__28857;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28852),iter__28849.call(null,cljs.core.chunk_rest.call(null,s__28850__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28852),null);
}
} else
{var vec__28856 = cljs.core.first.call(null,s__28850__$2);var i = cljs.core.nth.call(null,vec__28856,(0),null);var s_hash = cljs.core.nth.call(null,vec__28856,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.item","a.item",725358035),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (vec__28856,i,s_hash,s__28850__$2,temp__4126__auto__,head,parent,states,undo_list){
return (function (){return goo_reload.undo.undo.call(null,i,state);
});})(vec__28856,i,s_hash,s__28850__$2,temp__4126__auto__,head,parent,states,undo_list))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__28856,i,s_hash,s__28850__$2,temp__4126__auto__,head,parent,states,undo_list){
return (function (){return cljs.core.reset_BANG_.call(null,goo_reload.undo.undo_head,i);
});})(vec__28856,i,s_hash,s__28850__$2,temp__4126__auto__,head,parent,states,undo_list))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,head,i))?"active":null)], null),goo_reload.undo.format_version_memo.call(null,i,states.call(null,s_hash),states.call(null,parent.call(null,s_hash)))], null),iter__28849.call(null,cljs.core.rest.call(null,s__28850__$2)));
}
} else
{return null;
}
break;
}
});})(head,parent,states,undo_list))
,null,null));
});})(head,parent,states,undo_list))
;return iter__8671__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,undo_list));
})()], null)], null)], null);
});
goo_reload.undo.undo_widget = (function undo_widget(state){cljs.core.add_watch.call(null,state,new cljs.core.Keyword("goo-reload.undo","undo-watcher","goo-reload.undo/undo-watcher",5706227),(function (_,___$1,old_val,new_val){var new_val_hash = goo_reload.undo.my_hash.call(null,new_val);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,goo_reload.undo.states),new_val_hash)))
{cljs.core.reset_BANG_.call(null,goo_reload.undo.undo_head,(0));
cljs.core.swap_BANG_.call(null,goo_reload.undo.parent,cljs.core.conj,new cljs.core.PersistentArrayMap.fromArray([goo_reload.undo.my_hash.call(null,new_val),goo_reload.undo.my_hash.call(null,old_val)], true, false));
cljs.core.swap_BANG_.call(null,goo_reload.undo.undo_list,cljs.core.conj,goo_reload.undo.my_hash.call(null,new_val));
return cljs.core.swap_BANG_.call(null,goo_reload.undo.states,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goo_reload.undo.my_hash.call(null,new_val),new_val], null));
} else
{return null;
}
}));
return (function (){return goo_reload.undo._undo_widget.call(null,state);
});
});

//# sourceMappingURL=undo.js.map