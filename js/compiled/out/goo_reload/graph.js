// Compiled by ClojureScript 0.0-2261
goog.provide('goo_reload.graph');
goog.require('cljs.core');
goog.require('clairvoyant.core');
goog.require('clairvoyant.core');
goo_reload.graph.re_layout_nodes = (function re_layout_nodes(tree_nodes){var to_point = (function (n){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),n.x,new cljs.core.Keyword(null,"y","y",-1757859776),n.y], null);
});var positions = cljs.core.map.call(null,to_point,tree_nodes);var rows = cljs.core.vals.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),positions));var sorted_rows = cljs.core.map.call(null,((function (to_point,positions,rows){
return (function (p1__13975_SHARP_){return cljs.core.sort.call(null,new cljs.core.Keyword(null,"x","x",2099068185),p1__13975_SHARP_);
});})(to_point,positions,rows))
,rows);var squish_points = ((function (to_point,positions,rows,sorted_rows){
return (function (row){return cljs.core.map.call(null,((function (to_point,positions,rows,sorted_rows){
return (function (p1__13976_SHARP_,p2__13977_SHARP_){return cljs.core.assoc.call(null,p1__13976_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),((10) + (p2__13977_SHARP_ * (10))));
});})(to_point,positions,rows,sorted_rows))
,row,cljs.core.range.call(null));
});})(to_point,positions,rows,sorted_rows))
;var squished = cljs.core.map.call(null,squish_points,sorted_rows);var old_to_new = cljs.core.zipmap.call(null,cljs.core.flatten.call(null,sorted_rows),cljs.core.flatten.call(null,squished));var seq__13982_13986 = cljs.core.seq.call(null,tree_nodes);var chunk__13983_13987 = null;var count__13984_13988 = (0);var i__13985_13989 = (0);while(true){
if((i__13985_13989 < count__13984_13988))
{var n_13990 = cljs.core._nth.call(null,chunk__13983_13987,i__13985_13989);(n_13990["x"] = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(old_to_new.call(null,to_point.call(null,n_13990))));
{
var G__13991 = seq__13982_13986;
var G__13992 = chunk__13983_13987;
var G__13993 = count__13984_13988;
var G__13994 = (i__13985_13989 + (1));
seq__13982_13986 = G__13991;
chunk__13983_13987 = G__13992;
count__13984_13988 = G__13993;
i__13985_13989 = G__13994;
continue;
}
} else
{var temp__4126__auto___13995 = cljs.core.seq.call(null,seq__13982_13986);if(temp__4126__auto___13995)
{var seq__13982_13996__$1 = temp__4126__auto___13995;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13982_13996__$1))
{var c__8701__auto___13997 = cljs.core.chunk_first.call(null,seq__13982_13996__$1);{
var G__13998 = cljs.core.chunk_rest.call(null,seq__13982_13996__$1);
var G__13999 = c__8701__auto___13997;
var G__14000 = cljs.core.count.call(null,c__8701__auto___13997);
var G__14001 = (0);
seq__13982_13986 = G__13998;
chunk__13983_13987 = G__13999;
count__13984_13988 = G__14000;
i__13985_13989 = G__14001;
continue;
}
} else
{var n_14002 = cljs.core.first.call(null,seq__13982_13996__$1);(n_14002["x"] = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(old_to_new.call(null,to_point.call(null,n_14002))));
{
var G__14003 = cljs.core.next.call(null,seq__13982_13996__$1);
var G__14004 = null;
var G__14005 = (0);
var G__14006 = (0);
seq__13982_13986 = G__14003;
chunk__13983_13987 = G__14004;
count__13984_13988 = G__14005;
i__13985_13989 = G__14006;
continue;
}
}
} else
{}
}
break;
}
return tree_nodes;
});
goo_reload.graph.depth_charge = (function depth_charge(root,node_list){var target_depths = cljs.core.zipmap.call(null,node_list,cljs.core.range.call(null));var add_depth = ((function (target_depths){
return (function add_depth(node,n){if((n <= (0)))
{return node;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [add_depth.call(null,node,(n - (1)))], null)], null);
}
});})(target_depths))
;var recu = ((function (target_depths,add_depth){
return (function recu(n,depth){var target_depth = target_depths.call(null,parseInt(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n)));var child_depth = (target_depth + (1));var children = cljs.core.map.call(null,((function (target_depth,child_depth,target_depths,add_depth){
return (function (p1__14007_SHARP_){return recu.call(null,p1__14007_SHARP_,child_depth);
});})(target_depth,child_depth,target_depths,add_depth))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(n));return add_depth.call(null,cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"children","children",-940561982),children),(target_depth - depth));
});})(target_depths,add_depth))
;return recu.call(null,root,(0));
});
goo_reload.graph.graph = (function graph(node_parents,node_list){if((cljs.core.count.call(null,node_list) < (2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY], null);
} else
{var data = goo_reload.graph.depth_charge.call(null,cljs.core.js__GT_clj.call(null,graphlib.toData(cljs.core.clj__GT_js.call(null,node_parents)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),cljs.core.reverse.call(null,node_list));var radius = 4.5;var outer_radius = (6);var width = (100);var height = ((27) * cljs.core.count.call(null,node_list));var tree = d3.layout.tree().size([width,(height - ((2) * outer_radius))]);var line = d3.svg.line().interpolate("linear");var link_to_line = ((function (data,radius,outer_radius,width,height,tree,line){
return (function (link){return line.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [link.source.x,link.source.y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [link.target.x,link.target.y], null)], null)));
});})(data,radius,outer_radius,width,height,tree,line))
;var diagonal = d3.svg.diagonal().projection(((function (data,radius,outer_radius,width,height,tree,line,link_to_line){
return (function (d){return [d.x,d.y];
});})(data,radius,outer_radius,width,height,tree,line,link_to_line))
);var tree_nodes = goo_reload.graph.re_layout_nodes.call(null,tree.nodes(cljs.core.clj__GT_js.call(null,data)));var links = ((function (data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes){
return (function (p1__14008_SHARP_){return cljs.core.map.call(null,diagonal,p1__14008_SHARP_);
});})(data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes))
.call(null,tree.links(tree_nodes));var to_point = ((function (data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links){
return (function (p1__14009_SHARP_){return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),p1__14009_SHARP_.x,new cljs.core.Keyword(null,"y","y",-1757859776),p1__14009_SHARP_.y,new cljs.core.Keyword(null,"name","name",1843675177),p1__14009_SHARP_.name], null));
});})(data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links))
;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),("scale(1, -1)translate(0, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((outer_radius - height))+")")], null),(function (){var iter__8670__auto__ = ((function (data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point){
return (function iter__14018(s__14019){return (new cljs.core.LazySeq(null,((function (data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point){
return (function (){var s__14019__$1 = s__14019;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14019__$1);if(temp__4126__auto__)
{var s__14019__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14019__$2))
{var c__8668__auto__ = cljs.core.chunk_first.call(null,s__14019__$2);var size__8669__auto__ = cljs.core.count.call(null,c__8668__auto__);var b__14021 = cljs.core.chunk_buffer.call(null,size__8669__auto__);if((function (){var i__14020 = (0);while(true){
if((i__14020 < size__8669__auto__))
{var d = cljs.core._nth.call(null,c__8668__auto__,i__14020);cljs.core.chunk_append.call(null,b__14021,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"link",new cljs.core.Keyword(null,"d","d",1972142424),d], null)], null));
{
var G__14026 = (i__14020 + (1));
i__14020 = G__14026;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14021),iter__14018.call(null,cljs.core.chunk_rest.call(null,s__14019__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14021),null);
}
} else
{var d = cljs.core.first.call(null,s__14019__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"link",new cljs.core.Keyword(null,"d","d",1972142424),d], null)], null),iter__14018.call(null,cljs.core.rest.call(null,s__14019__$2)));
}
} else
{return null;
}
break;
}
});})(data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point))
,null,null));
});})(data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point))
;return iter__8670__auto__.call(null,links);
})(),(function (){var iter__8670__auto__ = ((function (data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point){
return (function iter__14022(s__14023){return (new cljs.core.LazySeq(null,((function (data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point){
return (function (){var s__14023__$1 = s__14023;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14023__$1);if(temp__4126__auto__)
{var s__14023__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14023__$2))
{var c__8668__auto__ = cljs.core.chunk_first.call(null,s__14023__$2);var size__8669__auto__ = cljs.core.count.call(null,c__8668__auto__);var b__14025 = cljs.core.chunk_buffer.call(null,size__8669__auto__);if((function (){var i__14024 = (0);while(true){
if((i__14024 < size__8669__auto__))
{var d = cljs.core._nth.call(null,c__8668__auto__,i__14024);cljs.core.chunk_append.call(null,b__14025,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"node",new cljs.core.Keyword(null,"transform","transform",1381301764),("translate("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(d))+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(d))+")")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),radius], null)], null)], null));
{
var G__14027 = (i__14024 + (1));
i__14024 = G__14027;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14025),iter__14022.call(null,cljs.core.chunk_rest.call(null,s__14023__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14025),null);
}
} else
{var d = cljs.core.first.call(null,s__14023__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"node",new cljs.core.Keyword(null,"transform","transform",1381301764),("translate("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(d))+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(d))+")")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),radius], null)], null)], null),iter__14022.call(null,cljs.core.rest.call(null,s__14023__$2)));
}
} else
{return null;
}
break;
}
});})(data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point))
,null,null));
});})(data,radius,outer_radius,width,height,tree,line,link_to_line,diagonal,tree_nodes,links,to_point))
;return iter__8670__auto__.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not_empty,new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core.map.call(null,to_point,tree_nodes)));
})()], null)], null);
}
});

//# sourceMappingURL=graph.js.map