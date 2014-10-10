// Compiled by ClojureScript 0.0-2261
goog.provide('goo_reload.core');
goog.require('cljs.core');
goog.require('goo_reload.undo');
goog.require('clojure.data');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('figwheel.client');
goog.require('cljs_http.client');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('clairvoyant.core');
goog.require('clairvoyant.core');
goog.require('figwheel.client');
goog.require('clojure.data');
goog.require('clojure.walk');
goog.require('goo_reload.undo');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
goo_reload.core.get_project_id = (function get_project_id(bundle){var ids = cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,bundle));var project_id = cljs.core.first.call(null,cljs.core.filter.call(null,((function (ids){
return (function (p1__13833_SHARP_){return cljs.core.re_matches.call(null,/.*project/,p1__13833_SHARP_);
});})(ids))
,ids));return project_id;
});
goo_reload.core.attach = (function attach(runner,id){var canvas = (runner["renderer"]["domElement"]);var container = document.getElementById(id);return container.appendChild(canvas);
});
if(typeof goo_reload.core.runner !== 'undefined')
{} else
{goo_reload.core.runner = (function (){var runner = (new goo.GooRunner({"logo": false, "antialias": false}));runner.world.add((new goo.StateMachineSystem(runner)));
runner.world.add((new goo.AnimationSystem()));
goo_reload.core.attach.call(null,runner,"main-canvas");
return runner;
})();
}
goo_reload.core.reload_entity = (function reload_entity(en){return goo_reload.core.loader.update(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(en),cljs.core.clj__GT_js.call(null,en));
});
goo_reload.core.update_world = (function() {
var update_world = null;
var update_world__1 = (function (data){return update_world.call(null,data,cljs.core.keys.call(null,data));
});
var update_world__2 = (function (data,to_update){goo_reload.core.loader.preload(cljs.core.clj__GT_js.call(null,data));
var seq__13838 = cljs.core.seq.call(null,to_update);var chunk__13839 = null;var count__13840 = (0);var i__13841 = (0);while(true){
if((i__13841 < count__13840))
{var id = cljs.core._nth.call(null,chunk__13839,i__13841);var entity_13842 = data.call(null,id);if(!(cljs.core.empty_QMARK_.call(null,entity_13842)))
{goo_reload.core.reload_entity.call(null,entity_13842);
} else
{}
{
var G__13843 = seq__13838;
var G__13844 = chunk__13839;
var G__13845 = count__13840;
var G__13846 = (i__13841 + (1));
seq__13838 = G__13843;
chunk__13839 = G__13844;
count__13840 = G__13845;
i__13841 = G__13846;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13838);if(temp__4126__auto__)
{var seq__13838__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13838__$1))
{var c__8701__auto__ = cljs.core.chunk_first.call(null,seq__13838__$1);{
var G__13847 = cljs.core.chunk_rest.call(null,seq__13838__$1);
var G__13848 = c__8701__auto__;
var G__13849 = cljs.core.count.call(null,c__8701__auto__);
var G__13850 = (0);
seq__13838 = G__13847;
chunk__13839 = G__13848;
count__13840 = G__13849;
i__13841 = G__13850;
continue;
}
} else
{var id = cljs.core.first.call(null,seq__13838__$1);var entity_13851 = data.call(null,id);if(!(cljs.core.empty_QMARK_.call(null,entity_13851)))
{goo_reload.core.reload_entity.call(null,entity_13851);
} else
{}
{
var G__13852 = cljs.core.next.call(null,seq__13838__$1);
var G__13853 = null;
var G__13854 = (0);
var G__13855 = (0);
seq__13838 = G__13852;
chunk__13839 = G__13853;
count__13840 = G__13854;
i__13841 = G__13855;
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
update_world = function(data,to_update){
switch(arguments.length){
case 1:
return update_world__1.call(this,data);
case 2:
return update_world__2.call(this,data,to_update);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_world.cljs$core$IFn$_invoke$arity$1 = update_world__1;
update_world.cljs$core$IFn$_invoke$arity$2 = update_world__2;
return update_world;
})()
;
if(typeof goo_reload.core.app_data !== 'undefined')
{} else
{goo_reload.core.app_data = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof goo_reload.core.app_state !== 'undefined')
{} else
{goo_reload.core.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
goo_reload.core.state_changed_QMARK_ = (function state_changed_QMARK_(old_val,new_val){var vec__13857 = clojure.data.diff.call(null,old_val,new_val);var in_a = cljs.core.nth.call(null,vec__13857,(0),null);var in_b = cljs.core.nth.call(null,vec__13857,(1),null);var in_both = cljs.core.nth.call(null,vec__13857,(2),null);var changed = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.set.call(null,cljs.core.into.call(null,cljs.core.keys.call(null,in_a),cljs.core.keys.call(null,in_b))));return cljs.core.not_empty.call(null,changed);
});
goo_reload.core.state_changed_QMARK__memo = cljs.core.memoize.call(null,goo_reload.core.state_changed_QMARK_);
goo_reload.core.select_entity = (function select_entity(entity){return cljs.core.swap_BANG_.call(null,goo_reload.core.app_state,(function (v){return cljs.core.into.call(null,v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-entity-id","selected-entity-id",2055462788),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entity)], null));
}));
});
goo_reload.core.maybe_parse_json = (function maybe_parse_json(string){try{return JSON.parse(string);
}catch (e13859){if((e13859 instanceof SyntaxError))
{var e = e13859;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13859;
} else
{return null;
}
}
}});
goo_reload.core.entity_editor = (function entity_editor(){var selected_entity_json = reagent.core.atom.call(null,"");return ((function (selected_entity_json){
return (function (){var entity_id = cljs.core.keyword.call(null,new cljs.core.Keyword(null,"selected-entity-id","selected-entity-id",2055462788).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,goo_reload.core.app_state)));var entity = cljs.core.deref.call(null,goo_reload.core.app_data).call(null,entity_id);var entity_json = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,selected_entity_json)))?cljs.core.deref.call(null,selected_entity_json):JSON.stringify(cljs.core.clj__GT_js.call(null,entity),null,(4)));var update_model = ((function (entity_id,entity,entity_json,selected_entity_json){
return (function (m,new_value){var cdata = cljs.core.js__GT_clj.call(null,new_value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);return cljs.core.assoc.call(null,m,entity_id,cdata);
});})(entity_id,entity,entity_json,selected_entity_json))
;var on_change = ((function (entity_id,entity,entity_json,update_model,selected_entity_json){
return (function (e){var new_value = e.target.value;var data = goo_reload.core.maybe_parse_json.call(null,new_value);cljs.core.reset_BANG_.call(null,selected_entity_json,new_value);
if(cljs.core.truth_(data))
{return cljs.core.swap_BANG_.call(null,goo_reload.core.app_data,((function (new_value,data,entity_id,entity,entity_json,update_model,selected_entity_json){
return (function (p1__13860_SHARP_){return update_model.call(null,p1__13860_SHARP_,data);
});})(new_value,data,entity_id,entity,entity_json,update_model,selected_entity_json))
,cljs.core.reset_BANG_.call(null,selected_entity_json,""));
} else
{return null;
}
});})(entity_id,entity,entity_json,update_model,selected_entity_json))
;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#editor","div#editor",-1877510501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),entity_json,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null)], null);
});
;})(selected_entity_json))
});
goo_reload.core.entity_list = (function entity_list(){var selected_entity_id = cljs.core.keyword.call(null,new cljs.core.Keyword(null,"selected-entity-id","selected-entity-id",2055462788).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,goo_reload.core.app_state)));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.grid","div.ui.grid",271546981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.four.wide.column","div.four.wide.column",1151509492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#entity-menu.ui.vertical.menu","div#entity-menu.ui.vertical.menu",-959028814),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),"Entities",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu","div.menu",-175336694),(function (){var iter__8670__auto__ = ((function (selected_entity_id){
return (function iter__13865(s__13866){return (new cljs.core.LazySeq(null,((function (selected_entity_id){
return (function (){var s__13866__$1 = s__13866;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13866__$1);if(temp__4126__auto__)
{var s__13866__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13866__$2))
{var c__8668__auto__ = cljs.core.chunk_first.call(null,s__13866__$2);var size__8669__auto__ = cljs.core.count.call(null,c__8668__auto__);var b__13868 = cljs.core.chunk_buffer.call(null,size__8669__auto__);if((function (){var i__13867 = (0);while(true){
if((i__13867 < size__8669__auto__))
{var en = cljs.core._nth.call(null,c__8668__auto__,i__13867);cljs.core.chunk_append.call(null,b__13868,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.item","a.item",725358035),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13867,en,c__8668__auto__,size__8669__auto__,b__13868,s__13866__$2,temp__4126__auto__,selected_entity_id){
return (function (){return goo_reload.core.select_entity.call(null,en);
});})(i__13867,en,c__8668__auto__,size__8669__auto__,b__13868,s__13866__$2,temp__4126__auto__,selected_entity_id))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,selected_entity_id,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(en))))?"active":null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(en)], null));
{
var G__13869 = (i__13867 + (1));
i__13867 = G__13869;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13868),iter__13865.call(null,cljs.core.chunk_rest.call(null,s__13866__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13868),null);
}
} else
{var en = cljs.core.first.call(null,s__13866__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.item","a.item",725358035),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (en,s__13866__$2,temp__4126__auto__,selected_entity_id){
return (function (){return goo_reload.core.select_entity.call(null,en);
});})(en,s__13866__$2,temp__4126__auto__,selected_entity_id))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,selected_entity_id,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(en))))?"active":null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(en)], null),iter__13865.call(null,cljs.core.rest.call(null,s__13866__$2)));
}
} else
{return null;
}
break;
}
});})(selected_entity_id))
,null,null));
});})(selected_entity_id))
;return iter__8670__auto__.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.vals.call(null,cljs.core.deref.call(null,goo_reload.core.app_data))));
})()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.six.wide.column","div.six.wide.column",1891402611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.form","div.ui.form",1793007869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goo_reload.core.entity_editor], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.six.wide.column","div.six.wide.column",1891402611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goo_reload.undo.undo_widget,goo_reload.core.app_data], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goo_reload.core.entity_list], null),document.getElementById("main"));
cljs.core.add_watch.call(null,goo_reload.core.app_data,new cljs.core.Keyword(null,"watch-change","watch-change",-558384858),(function (key,a,old_val,new_val){var temp__4126__auto__ = goo_reload.core.state_changed_QMARK__memo.call(null,old_val,new_val);if(cljs.core.truth_(temp__4126__auto__))
{var changes = temp__4126__auto__;return goo_reload.core.update_world.call(null,new_val,changes);
} else
{return null;
}
}));
goo_reload.core.url = "https://goote.ch/3ec5dfeb718a4a68a605c0ecdf89c459.project/res/";
if(typeof goo_reload.core.loader !== 'undefined')
{} else
{goo_reload.core.loader = (function (){var params = {"world": goo_reload.core.runner.world, "rootPath": goo_reload.core.url};var loader = (new goo.DynamicLoader(params));(goo.Ajax["crossOrigin"] = true);
return loader;
})();
}
var c__10130__auto___13892 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10130__auto___13892){
return (function (){var f__10131__auto__ = (function (){var switch__10115__auto__ = ((function (c__10130__auto___13892){
return (function (state_13883){var state_val_13884 = (state_13883[(1)]);if((state_val_13884 === (2)))
{var inst_13876 = (state_13883[(2)]);var inst_13877 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_13876);var inst_13878 = JSON.parse(inst_13877);var inst_13879 = cljs.core.js__GT_clj.call(null,inst_13878,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var inst_13880 = (function (){var data = inst_13879;var res = inst_13876;return ((function (data,res,inst_13876,inst_13877,inst_13878,inst_13879,state_val_13884,c__10130__auto___13892){
return (function (v){return data;
});
;})(data,res,inst_13876,inst_13877,inst_13878,inst_13879,state_val_13884,c__10130__auto___13892))
})();var inst_13881 = cljs.core.swap_BANG_.call(null,goo_reload.core.app_data,inst_13880);var state_13883__$1 = state_13883;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13883__$1,inst_13881);
} else
{if((state_val_13884 === (1)))
{var inst_13870 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goo_reload.core.url)+"root.bundle");var inst_13871 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];var inst_13872 = [false];var inst_13873 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13871,inst_13872);var inst_13874 = cljs_http.client.get.call(null,inst_13870,inst_13873);var state_13883__$1 = state_13883;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13883__$1,(2),inst_13874);
} else
{return null;
}
}
});})(c__10130__auto___13892))
;return ((function (switch__10115__auto__,c__10130__auto___13892){
return (function() {
var state_machine__10116__auto__ = null;
var state_machine__10116__auto____0 = (function (){var statearr_13888 = [null,null,null,null,null,null,null];(statearr_13888[(0)] = state_machine__10116__auto__);
(statearr_13888[(1)] = (1));
return statearr_13888;
});
var state_machine__10116__auto____1 = (function (state_13883){while(true){
var ret_value__10117__auto__ = (function (){try{while(true){
var result__10118__auto__ = switch__10115__auto__.call(null,state_13883);if(cljs.core.keyword_identical_QMARK_.call(null,result__10118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10118__auto__;
}
break;
}
}catch (e13889){if((e13889 instanceof Object))
{var ex__10119__auto__ = e13889;var statearr_13890_13893 = state_13883;(statearr_13890_13893[(5)] = ex__10119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13883);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13894 = state_13883;
state_13883 = G__13894;
continue;
}
} else
{return ret_value__10117__auto__;
}
break;
}
});
state_machine__10116__auto__ = function(state_13883){
switch(arguments.length){
case 0:
return state_machine__10116__auto____0.call(this);
case 1:
return state_machine__10116__auto____1.call(this,state_13883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10116__auto____0;
state_machine__10116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10116__auto____1;
return state_machine__10116__auto__;
})()
;})(switch__10115__auto__,c__10130__auto___13892))
})();var state__10132__auto__ = (function (){var statearr_13891 = f__10131__auto__.call(null);(statearr_13891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10130__auto___13892);
return statearr_13891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10132__auto__);
});})(c__10130__auto___13892))
);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){return null;
}));

//# sourceMappingURL=core.js.map