
(function() {


var width = 50,
    height = 200;

var calculateLayout = function(json) {

	if (!json) {
		return {nodes:[], links:[]};
	}

	var tree = d3.layout.tree()
		.size([width, height - 40]);

	var diagonal = d3.svg.diagonal()
		.projection(function(d) { return [d.x, d.y]; });

	var nodes = tree.nodes(json);
	// relayoutNodes(nodes);
	nodes.forEach(function(n) {
		n.y = height - n.y;
		delete n.parent;
	});

	var links = tree.links(nodes);

	var v = {
		nodes: nodes,
		links: links.map(diagonal)
	};

	return v;

};


var draw = function(layout) {

	var nodes = layout.nodes;
	var links = layout.links;

	// sort nodes on what? x, then 

	var svg = d3.select("#graph-container").append("svg")
			.attr("width", width)
			.attr("height", height)
		.append("g")
			.attr("transform", "translate(0,-40)");

	var link = svg.selectAll("path.link")
			.data(links)
		.enter().append("path")
			.attr("class", "link")
			.attr("d", function(d) { return d; });

	var node = svg.selectAll("g.node")
			.data(nodes)
		.enter().append("g")
			.attr("class", "node")
			.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })

	node
		.each(function(d) {
			var node = d3.select(this);
			if (d.name) {
				node.append("circle").attr("r", 4.5);
			}
		});

		/*
	node.append("text")
		.attr("dx", 10)
		.attr("dy", 3)
		.attr("text-anchor", "start")
		.text(function(d) { return d.name; });
		*/
};


var relayoutNodes = function(nodes) {
	console.log('nodes!', nodes)

	var extent = d3.extent(nodes, function(d) { return d.y; });
	var y = d3.scale.linear().domain([0, nodes.length]).range(extent);

	nodes.sort(function(a, b) {
		return d3.ascending(a.y, b.y);
	});
	
	nodes.forEach(function(n, i) {
		n.y = y(i);
	});

	return nodes;
};


d3.select(self.frameElement).style("height", height + "px");

var toData = function(raw_data) {

		var nodes = {};
		var root = null;

		Object.keys(raw_data).forEach(function(dst) {
			var src = raw_data[dst] + '';

			if (!raw_data[src]) {
				console.log('root!', root);
				root = dst;
				return;
			}

			var src_n = nodes[src] || {name: src};
			var dst_n = nodes[dst] || {name: dst};

			src_n.children = src_n.children || [];
			src_n.children.push(dst_n);

			nodes[src] = src_n;
			nodes[dst] = dst_n;
		});

		return nodes[root];
};


var depthCharge = function(root, node_list) {

	node_list = node_list.map(function(n) {
		return n.toString();
	});

	var addDepth = function(node, n) {
		if (n <= 0) {
			return node;
		}
		return {name: '', children: [addDepth(node, n - 1)]};
	};

	var recur = function(n, depth) {

		var targetDepth = node_list.indexOf(n.name);

		if (n.children) {
			n.children = n.children.map(function(c) {
				return recur(c, targetDepth + 1);
			});
		}

		console.log(n.name, targetDepth, depth);

		return addDepth(n, targetDepth - depth);
	};

	return recur(root, 0);
};


window.graphlib = {
	toData: toData,
	depthCharge: depthCharge,
	calculateLayout: calculateLayout,
	relayoutNodes: relayoutNodes,
	redrawGraph: function(raw_data, node_list) {
		draw(calculateLayout(depthCharge(toData(raw_data), node_list)));
	}
};


}());
