(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"test_1_HTML5 Canvas_atlas_", frames: [[767,0,101,97],[0,0,765,173],[727,175,278,82],[870,0,108,82],[0,175,725,82]]}
];


// symbols:



(lib.Mesh = function() {
	this.spriteSheet = ss["test_1_HTML5 Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["test_1_HTML5 Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ground1 = function() {
	this.spriteSheet = ss["test_1_HTML5 Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ground2 = function() {
	this.spriteSheet = ss["test_1_HTML5 Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ground3 = function() {
	this.spriteSheet = ss["test_1_HTML5 Canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wrong_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],-22.2,-17.2,-25.1,-20.1).s().p("ACRCyQgKgFgpgnQgpgmgxgqQgKgMgXgSQgYgTgLgGQgNgLgggXIhZg/QgRgMAAgTQAAgQAOgQQAgglAkAYIAAAAQBFAwBEA4QANAOAlAeIALAJQAIALAcAWQAyApAGAGIArAnQAZAegQAYQgSAcgXAAQgLAAgMgGg");
	this.shape.setTransform(-1,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],-16.8,-12.2,-19.7,-15).s().p("ACRCyQgKgFgpgnQgpgmgxgqQgKgMgXgSQgYgTgLgGQgNgMgggWIhZg/QgRgMAAgTQAAgQAOgQQAgglAkAYIAAAAQBFAwBEA4QANAOAlAeIALAJQAIAKAcAXQAyApAGAGIArAnQAZAegQAYQgSAcgXAAQgLAAgMgGg");
	this.shape_1.setTransform(-1,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],-11.3,-7.1,-14.2,-10).s().p("ACRCyQgKgFgpgnQgpgmgxgqQgKgMgXgSQgYgTgLgGQgNgMgggWIhZg/QgRgMAAgTQAAgQAOgQQAgglAkAYIAAAAQBFAwBEA4QANAOAlAeIALAJQAIAKAcAXQAyApAGAGIArAnQAZAegQAYQgSAcgXAAQgLAAgMgGg");
	this.shape_2.setTransform(-1,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],-5.9,-2.1,-8.8,-4.9).s().p("ACRCyQgKgFgpgnQgpgmgxgqQgKgMgXgSQgYgTgLgGQgNgMgggWIhZg/QgRgMAAgTQAAgQAOgQQAgglAkAYIAAAAQBFAwBEA4QANAOAlAeIALAJQAIAKAcAXQAyApAGAGIArAnQAZAegQAYQgSAcgXAAQgLAAgMgGg");
	this.shape_3.setTransform(-1,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],-0.4,2.9,-3.3,0.1).s().p("ACRCyQgKgFgpgnQgpgmgxgqQgKgMgXgSQgYgTgLgGQgNgMgggWIhZg/QgRgMAAgTQAAgQAOgQQAgglAkAYIAAAAQBFAwBEA4QANAOAlAeIALAJQAIAKAcAXQAyApAGAGIArAnQAZAegQAYQgSAcgXAAQgLAAgMgGg");
	this.shape_4.setTransform(-1,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],4.9,7.9,2,5.1).s().p("ACRCyQgKgFgpgnQgpgmgxgqQgKgMgXgSQgYgTgLgGQgNgMgggWIhZg/QgRgMAAgTQAAgQAOgQQAgglAkAYIAAAAQBFAwBEA4QANAOAlAeIALAJQAIAKAcAXQAyApAGAGIArAnQAZAegQAYQgSAcgXAAQgLAAgMgGg");
	this.shape_5.setTransform(-1,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],10.4,13,7.5,10.1).s().p("ACRCyQgKgFgpgnQgpgmgxgqQgKgMgXgSQgYgTgLgGQgNgMgggWIhZg/QgRgMAAgTQAAgQAOgQQAgglAkAYIAAAAQBFAwBEA4QANAOAlAeIALAJQAIAKAcAXQAyApAGAGIArAnQAZAegQAYQgSAcgXAAQgLAAgMgGg");
	this.shape_6.setTransform(-1,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],15.8,18,12.9,15.2).s().p("ACRCyQgKgFgpgnQgpgmgxgqQgKgMgXgSQgYgTgLgGQgNgMgggWIhZg/QgRgMAAgTQAAgQAOgQQAgglAkAYIAAAAQBFAwBEA4QANAOAlAeIALAJQAIAKAcAXQAyApAGAGIArAnQAZAegQAYQgSAcgXAAQgLAAgMgGg");
	this.shape_7.setTransform(-1,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],21.3,23.1,18.4,20.2).s().p("ACRCyQgKgFgpgnQgpgmgxgqQgKgMgXgSQgYgTgLgGQgNgMgggWIhZg/QgRgMAAgTQAAgQAOgQQAgglAkAYIAAAAQBFAwBEA4QANAOAlAeIALAJQAIAKAcAXQAyApAGAGIArAnQAZAegQAYQgSAcgXAAQgLAAgMgGg");
	this.shape_8.setTransform(-1,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],26.7,28.1,23.8,25.3).s().p("ACRCyQgKgFgpgnQgpgmgxgqQgKgMgXgSQgYgTgLgGQgNgLgggXIhZg/QgRgMAAgTQAAgQAOgQQAgglAkAYIAAAAQBFAwBEA4QANAOAlAeIALAJQAIALAcAWQAyApAGAGIArAnQAZAegQAYQgSAcgXAAQgLAAgMgGg");
	this.shape_9.setTransform(-1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(10));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],23.1,-30.5,25.7,-34.1).s().p("AjHEEQgigNAbgsQAmg8AcgpQAggwAmg0IAAgBQAJgIAKgNIAYgfIATgZQAug9Avg2IAsgxQATgVAkgBQAkgBgBATQgBAkhWBXQhMBMgLASIgQAVIgdAmQgFAIAAADQhFBZhBBkQgUAfgYAAQgIAAgIgDg");
	this.shape_10.setTransform(0.6,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],17.6,-23.7,20.2,-27.3).s().p("AjHEEQgigNAbgsQAmg8AcgpQAggwAmg0IAAgBQAJgIAKgNIAYgfIATgZQAvg9Aug2IAsgxQATgVAkgBQAkgBgBATQgBAkhWBXQhMBMgLASQgEAGgMAPIgdAmQgFAIAAADQhFBZhBBkQgUAfgYAAQgIAAgIgDg");
	this.shape_11.setTransform(0.6,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],12.2,-16.8,14.8,-20.4).s().p("AjHEEQgigNAbgsQAmg8AcgpQAggwAmg0IAAgBQAJgIAKgNIAYgfIATgZQAvg9Aug2IAsgxQATgVAkgBQAkgBgBATQgBAkhWBXQhMBMgLASQgEAGgMAPIgdAmQgFAIAAADQhFBZhBBkQgUAfgYAAQgIAAgIgDg");
	this.shape_12.setTransform(0.6,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],6.7,-10,9.3,-13.6).s().p("AjHEEQgigNAbgsQAmg8AcgpQAggwAmg0IAAgBQAJgIAKgNIAYgfIATgZQAvg9Aug2IAsgxQATgVAkgBQAkgBgBATQgBAkhWBXQhMBMgLASQgEAGgMAPIgdAmQgFAIAAADQhFBZhBBkQgUAfgYAAQgIAAgIgDg");
	this.shape_13.setTransform(0.6,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],1.2,-3.1,3.8,-6.7).s().p("AjHEEQgigNAbgsQAmg8AcgpQAggwAmg0IAAgBQAJgIAKgNIAYgfIATgZQAvg9Aug2IAsgxQATgVAkgBQAkgBgBATQgBAkhWBXQhMBMgLASQgEAGgMAPIgdAmQgFAIAAADQhFBZhBBkQgUAfgYAAQgIAAgIgDg");
	this.shape_14.setTransform(0.6,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],-4.2,3.6,-1.6,0).s().p("AjHEEQgigNAbgsQAmg8AcgpQAggwAmg0IAAgBQAJgIAKgNIAYgfIATgZQAvg9Aug2IAsgxQATgVAkgBQAkgBgBATQgBAkhWBXQhMBMgLASQgEAGgMAPIgdAmQgFAIAAADQhFBZhBBkQgUAfgYAAQgIAAgIgDg");
	this.shape_15.setTransform(0.6,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],-9.7,10.5,-7.1,6.9).s().p("AjHEEQgigNAbgsQAmg8AcgpQAggwAmg0IAAgBQAJgIAKgNIAYgfIATgZQAvg9Aug2IAsgxQATgVAkgBQAkgBgBATQgBAkhWBXQhMBMgLASQgEAGgMAPIgdAmQgFAIAAADQhFBZhBBkQgUAfgYAAQgIAAgIgDg");
	this.shape_16.setTransform(0.6,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],-15.2,17.3,-12.6,13.7).s().p("AjHEEQgigNAbgsQAmg8AcgpQAggwAmg0IAAgBQAJgIAKgNIAYgfIATgZQAvg9Aug2IAsgxQATgVAkgBQAkgBgBATQgBAkhWBXQhMBMgLASQgEAGgMAPIgdAmQgFAIAAADQhFBZhBBkQgUAfgYAAQgIAAgIgDg");
	this.shape_17.setTransform(0.6,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],-20.6,24.2,-18,20.6).s().p("AjHEEQgigNAbgsQAmg8AcgpQAggwAmg0IAAgBQAJgIAKgNIAYgfIATgZQAvg9Aug2IAsgxQATgVAkgBQAkgBgBATQgBAkhWBXQhMBMgLASQgEAGgMAPIgdAmQgFAIAAADQhFBZhBBkQgUAfgYAAQgIAAgIgDg");
	this.shape_18.setTransform(0.6,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,0,0,0)","#FF0000"],[0.263,0.314],-26.1,31,-23.5,27.4).s().p("AjHEEQgigNAbgsQAmg8AcgpQAggwAmg0IAAgBQAJgIAKgNIAYgfIATgZQAug9Avg2IAsgxQATgVAkgBQAkgBgBATQgBAkhWBXQhMBMgLASIgQAVIgdAmQgFAIAAADQhFBZhBBkQgUAfgYAAQgIAAgIgDg");
	this.shape_19.setTransform(0.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},9).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-19,43.1,36.9);


(lib.userScoreDetailHolder_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.userDetail_4 = new cjs.Text("00", "bold 18px 'Calibri'", "#660000");
	this.userDetail_4.name = "userDetail_4";
	this.userDetail_4.textAlign = "center";
	this.userDetail_4.lineHeight = 22;
	this.userDetail_4.lineWidth = 145;
	this.userDetail_4.parent = this;
	this.userDetail_4.setTransform(87,185.2);

	this.userDetail_3 = new cjs.Text("00", "bold 18px 'Calibri'", "#660000");
	this.userDetail_3.name = "userDetail_3";
	this.userDetail_3.textAlign = "center";
	this.userDetail_3.lineHeight = 22;
	this.userDetail_3.lineWidth = 145;
	this.userDetail_3.parent = this;
	this.userDetail_3.setTransform(87,131.8);

	this.userDetail_2 = new cjs.Text("00", "bold 18px 'Calibri'", "#660000");
	this.userDetail_2.name = "userDetail_2";
	this.userDetail_2.textAlign = "center";
	this.userDetail_2.lineHeight = 22;
	this.userDetail_2.lineWidth = 145;
	this.userDetail_2.parent = this;
	this.userDetail_2.setTransform(87,77.3);

	this.userDetail_1 = new cjs.Text("00%", "bold 18px 'Calibri'", "#660000");
	this.userDetail_1.name = "userDetail_1";
	this.userDetail_1.textAlign = "center";
	this.userDetail_1.lineHeight = 22;
	this.userDetail_1.lineWidth = 145;
	this.userDetail_1.parent = this;
	this.userDetail_1.setTransform(87,22.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AgKArIgHgCIgFgCIgDgBIgBgDIgBgFIABgCIAAgCIABgBIABgBIACABIAFAEIAGACIAJABIAGgBIAFgCQACgCABgCQACgCAAgDQAAgEgCgCIgFgEIgGgEIgGgCIgIgDIgGgEQgCgDgCgEQgCgEAAgFQAAgEACgFQACgEAEgDQADgDAGgDQAFgBAGAAIAGABIAGAAIAFACIACACIABABIAAACIABABIAAACIAAADIgBACIgBABIAAAAIgCgBIgFgCIgFgCIgHgBIgGABIgEACIgDAEIgBAEQAAAEABACIAFAEIAGAEIAHACIAHADIAHAEIAFAHQABADAAAGQAAAFgCAFQgCAFgEADQgFADgFACQgGABgGAAIgIAAg");
	this.shape.setTransform(101.4,175.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660000").s().p("AgNApQgHgDgFgFQgFgGgDgHQgCgJAAgKQAAgKADgHQACgJAFgGQAFgFAHgDQAHgEAIABQAJAAAHACQAGADAFAGQADAFADAGQACAIAAAHIAAADQAAABgBABQAAAAAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIg0AAQAAAGACAGQACAGACADQAEAEAFACQAFACAFAAIAKgBIAIgCIAGgCIACgBIACABIAAAAIABACIAAACIAAACIAAACIgBABIgBACIgCABIgHACIgIACIgLAAQgJAAgHgCgAgHgdQgFACgDAEIgDAIIgDAJIArAAQAAgMgFgGQgFgHgLAAQgEAAgEACg");
	this.shape_1.setTransform(93.4,175.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660000").s().p("AAAAqIgDAAIgDAAIgCgBIgBgCIgbhKIAAgCIgBgBIAAgBIABgBIABgBIACAAIADAAIAEAAIADAAIABABIABACIAVBAIAAABIABgBIAWhAIAAgCIACgBIACAAIAEAAIADAAIACAAIABABIABABIAAABIgBABIAAABIAAABIgbBKIgBACIgCABIgDAAIgEAAg");
	this.shape_2.setTransform(84.8,175.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("AAAA6IgDAAIgBAAIgBgBIgBgBIAAhPIABgBIABgBIABAAIADAAIAEAAIACAAIABABIAAABIAABPIAAABIgBABIgCAAIgEAAgAgGgqQgCgCAAgFQAAgFACgCQACgCAEAAQAFAAACACQACACAAAFQAAAFgCACQgCACgFAAQgEAAgCgCg");
	this.shape_3.setTransform(78.7,173.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660000").s().p("AgXA5QAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBIAAhoIAAgBIABgBIACgBIAEAAIAEAAIACABIACABIAAABIAABhIAnAAIACABIABABIAAACIAAADIAAADIAAACIgBABIgCAAg");
	this.shape_4.setTransform(73.5,173.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(94,52,23,0.2)").s().p("A5tB8IAAj3MAzbAAAIAAD3g");
	this.shape_5.setTransform(87,184.7,0.529,1.977);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660000").s().p("AgKArIgHgBIgFgCIgDgDIgCgCIAAgEIAAgEIAAgBIABgBIACgBIADABIAEADIAGADIAJABIAGAAIAFgDQADgBABgDQABgDAAgDQAAgDgCgCIgFgFIgGgCIgGgDIgHgEIgHgDQgDgDgBgEQgCgDAAgGQAAgFACgEQABgEAEgDQAEgDAFgCQAGgCAGgBIAGACIAGABIAFACIACABIACABIAAABIAAACIAAADIAAACIAAABIgBACIgBAAIgCgBIgFgCIgFgCIgHgBIgGABIgFACIgCAEIgBAEQAAAEABACIAGAEIAEADIAIAEIAHACIAHAEIAEAGQACAEAAAFQAAAHgCAEQgCAFgEADQgFADgGACQgFACgGgBIgIAAg");
	this.shape_6.setTransform(134.5,121.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660000").s().p("AgPArIgDAAIgCgBIgBgBIgBgBIAAhOIAAgBIACgBIACgBIACAAIAEAAIACABIABABIAAABIAAAMIAGgIIAEgFIAGgCIAEgBIAEAAIADABIACAAIACABIABABIAAABIAAACIAAADIAAADIAAADIgBABIgBAAIgCAAIgCgBIgDAAIgEgBIgDABIgFADIgEAFIgGAIIAAAzIAAABIgBABIgCABIgEAAg");
	this.shape_7.setTransform(128.3,121.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660000").s().p("AgNApQgHgDgFgFQgFgFgDgJQgDgHAAgMQABgIADgJQACgIAFgFQAFgGAHgDQAHgEAIAAQAJABAGADQAHADAFAFQADAFACAGQACAIABAHIAAADQAAABgBABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIg0AAQABAHABAFQACAGADADQACAEAGACQAEACAGAAIAKgBIAJgCIAFgCIADgBIABAAIAAABIABACIAAADIAAABIAAACIgBABIgBABIgCACIgGACIgJACIgLAAQgIABgIgDgAgHgdQgFACgCAEIgFAHIgCAJIArAAQAAgLgFgHQgGgGgKAAQgEAAgEACg");
	this.shape_8.setTransform(120.2,121.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660000").s().p("AAaAqIgEAAIgDAAIgCgBIgBgCIgQg4IAAgBIAAABIgPA4IgBACIgCABIgDAAIgEAAIgEAAIgDAAIgCgBIgBgCIgXhKIAAgCIgBgCIABgBIABgBIACAAIAEAAIAEAAIACAAIABABIABACIATBAIAAABIAAgBIAShAIAAgCIABgBIACAAIADAAIAEAAIACAAIABABIAAABIATBBIAAABIAAgBIAThAIABgCIABgBIACAAIAEAAIAEAAIACAAIABABIAAABIAAACIgBACIgXBKIgBACIgCABIgCAAIgFAAg");
	this.shape_9.setTransform(109.3,121.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#660000").s().p("AgKArIgHgBIgFgCIgDgDIgBgCIgBgEIABgEIAAgBIABgBIABgBIACABIAFADIAHADIAJABIAFAAIAFgDQADgBAAgDQACgDAAgDQAAgDgCgCIgEgFIgHgCIgGgDIgIgEIgFgDQgEgDgBgEQgCgDAAgGQAAgFACgEQABgEAFgDQADgDAGgCQAEgCAHgBIAGACIAGABIAFACIACABIABABIAAABIABACIAAADIAAACIgBABIgBACIAAAAIgCgBIgEgCIgGgCIgIgBIgFABIgEACIgDAEIgBAEQAAAEACACIAEAEIAGADIAHAEIAIACIAGAEIAFAGQABAEAAAFQAAAHgCAEQgDAFgDADQgFADgFACQgGACgGgBIgIAAg");
	this.shape_10.setTransform(99.3,121.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#660000").s().p("AAbArIgDAAIgDgBIgBgBIgBgBIAAgtIgBgLIgDgHQgCgDgDgBQgDgCgEAAQgFAAgFAEQgGADgGAIIAAA2IAAABIgBABIgCABIgEAAIgDAAIgCgBIgBgBIgBgBIAAhOIAAgBIACgBIACgBIACAAIAEAAIACABIABABIAAABIAAALQAHgIAGgDQAHgEAGAAQAHAAAGADQAFACAEAFQADAFACAFQABAHAAAIIAAAvIgBABIAAABIgCABIgEAAg");
	this.shape_11.setTransform(91.2,121.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#660000").s().p("AgPAqQgGgBgDgEQgEgDgBgEQgDgEAAgHQAAgGAEgFQACgFAFgDQAFgCAIgCQAHgBAIAAIALAAIAAgHIgBgIQgBgEgCgCQgCgCgDgBQgEgCgFABQgFgBgDACIgIACIgGAEIgDABIgBAAIgBgBIAAgDIAAgCIAAgDIABgDIAEgDIAHgCIAIgCIAIgCQAJABAGACQAGACAEADQADAEACAFQACAGAAAIIAAA0IgBACIgCABIgDAAIgFAAIgCgBIAAgCIAAgIQgFAGgGADQgHACgGAAQgGABgFgCgAgEAFIgHADQgDABgBAEQgBADgBADQABAGADADQAFAFAHAAQAEAAAFgDQAFgEAFgFIAAgRIgMAAIgKABg");
	this.shape_12.setTransform(81.9,121.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#660000").s().p("AABA0QgEgCgDgDQgCgEgCgFIgBgMIAAgtIgLAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgFIAAgDIABgBIABgBIABgBIALAAIAAgTIAAgBIACgBIACAAIADAAIAEAAIABAAIABABIABABIAAATIAUAAIABABIABABIABABIAAADIgBAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgUAAIAAArQAAAJACAEQACAEAHAAIADAAIADgBIACgBIACgBIABABIAAAAIABACIAAADIgBAEIgBACIgCABIgDABIgEABIgEAAQgGAAgEgBg");
	this.shape_13.setTransform(70.6,120.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#660000").s().p("AAbA+IgEAAIgCgBIgBgBIAAgBIAAguIgBgMIgEgFQgCgEgDgBQgDgCgEABQgEAAgGADQgFAEgHAHIAAA3IAAABIgBABIgCABIgEAAIgEAAIgCgBIAAgBIgBgBIAAh0IABgCIAAgBIACgBIAEAAIAEAAIACABIABABIAAACIAAAvQAHgHAGgDQAGgEAGAAQAHABAGADQAGACADAFQADAEABAGQACAFAAAIIAAAxIgBABIgBABIgBABIgEAAg");
	this.shape_14.setTransform(63.1,119.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#660000").s().p("AgRA5QgHgBgEgEQgEgDgCgDQgCgEgBgEIACgHIACgFIADgEIAFgFQgEgCgCgDQgDgEABgEQgBgEADgEQACgEAEgEQgEgDgBgEQgBgEgBgGQAAgGACgGQADgFAEgEQAEgEAGgCQAFgBAHgBIAGABIAGABIAXAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIABAFIgBAEIgDABIgLAAQAEAEABADIABAIQAAAIgCAEQgDAGgDADQgFAEgFACQgGACgGAAIgJgBIgHgDIgDADIgBAEQAAADAEACQADACAEAAIAUABQAGAAAFACQAEABAEADQAEADABAEQADAEAAAEQAAAGgDAFQgCAFgEADQgGAEgHADQgHABgJAAQgJAAgHgBgAgRAZIgEAEIgBADIAAAEQAAAFAGADQAFAEALAAIAKgBIAHgEQADgDABgCIABgGQAAgFgEgDQgEgCgIAAIgTgBIgEAEgAgIgtIgGAEQgCACAAADQgCADAAAEQAAAIAEAFQAFAEAIAAQADAAADgBIAGgEIADgGIABgHQAAgHgEgFQgFgEgHgBQgEABgDABg");
	this.shape_15.setTransform(54.1,123.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#660000").s().p("AAAA6IgDAAIgBAAIgBgBIgBgBIAAhOIABgBIABgBIABgBIADAAIAEAAIACABIABABIAAABIAABOIAAABIgBABIgCAAIgEAAgAgGgqQgCgCAAgFQAAgFACgCQACgBAEgBQAGABABABQACACAAAFQAAAFgCACQgBACgGAAQgEAAgCgCg");
	this.shape_16.setTransform(47.8,120.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#660000").s().p("AAeA5IgEAAIgCgBIgBgBIgBgCIgLgbIgEgIIgEgHQgDgCgDgCQgEgBgFAAIgKAAIAAAwIAAABIgBABIgDABIgDAAIgEAAIgDgBIgBgBIAAgBIAAhoQAAgDACgCIAEgBIAYAAIAHAAIAEABQAHABAFACQAFADADAEQAEADACAFQABAFAAAFQAAAGgBAFQgCAEgDAEQgDADgEADIgJADIAGAEIADAEIAFAGIADAIIAKAZIACAFIAAABIAAABIgCABIgCABIgEAAgAgWgGIAPAAQAGAAAEgBIAGgEQAEgDABgDIABgIQAAgGgDgFQgDgFgHgCIgEgBIgHAAIgNAAg");
	this.shape_17.setTransform(41.3,120.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(94,52,23,0.2)").s().p("A5tB8IAAj3MAzbAAAIAAD3g");
	this.shape_18.setTransform(87,131.3,0.529,1.977);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#660000").s().p("AgKArIgHgBIgFgDIgDgCIgBgCIgBgFIABgDIAAgBIABgBIABAAIACABIAFACIAHADIAJABIAFgBIAFgCQADgCAAgCQACgDAAgDQAAgDgCgCIgEgFIgHgCIgGgDIgIgDIgFgEQgEgDgBgDQgCgFAAgFQAAgEACgEQABgFAFgDQADgEAGgCQAEgCAHAAIAGABIAGABIAEADIADABIABABIAAABIABACIAAACIAAADIgBACIgBABIAAAAIgDgBIgDgCIgGgCIgIgBIgFABIgEACIgDAEIgBAFQAAADACACIAEAFIAGACIAHADIAIAEIAGADIAFAGQABAEAAAFQAAAGgCAFQgDAFgEADQgEAEgFABQgGABgGABIgIgBg");
	this.shape_19.setTransform(127.2,68.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#660000").s().p("AgNApQgHgDgFgFQgFgFgDgJQgDgHABgLQAAgJACgJQADgIAFgGQAFgFAHgDQAHgDAHgBQAKAAAHADQAGADAEAGQAEAFADAHQACAGgBAIIAAADQAAABAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgzAAQAAAGABAGQABAGADADQADAEAFACQAFACAGAAIALgBIAHgCIAFgCIADgBIACABIABAAIAAACIAAACIAAADIAAABIAAABIgCABIgDACIgGACIgIACIgLABQgJgBgHgCgAgIgdQgEACgDADIgDAIIgCAJIAqAAQAAgLgFgHQgGgGgKAAQgFAAgEACg");
	this.shape_20.setTransform(119.2,68.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#660000").s().p("AgPArIgDAAIgCgBIgBgBIgBAAIAAhPIAAgBIACgBIACAAIACAAIAEAAIACAAIABABIAAABIAAALIAGgHIAEgFIAGgCIAEgBIAEABIACAAIADABIACABIABAAIAAABIAAACIAAAEIAAADIAAABIgBACIgBAAIgCAAIgCgBIgDgBIgEAAIgDABIgFADIgEAFIgGAIIAAA0IAAAAIgBABIgCABIgEAAg");
	this.shape_21.setTransform(112.1,68.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#660000").s().p("AgRApQgHgDgFgFQgFgGgCgIQgDgIAAgKQAAgJADgIQACgIAFgGQAGgFAHgEQAIgDAJgBQAKAAAHADQAHADAFAGQAEAFADAJQADAHgBAKQABAJgDAIQgDAIgEAGQgFAGgIADQgIAEgJAAQgKgBgHgCgAgKgcQgEACgDAEQgEAFgBAGQgBAFgBAGIABAMQACAGADAEQADAEAEADQAFACAGAAQAGAAAFgCQAFgCADgEQADgFABgFQABgGAAgGIgBgMIgDgKQgDgEgFgCQgFgDgHAAQgGAAgEACg");
	this.shape_22.setTransform(103.7,68.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#660000").s().p("AgKApQgHgDgEgGQgFgFgCgIQgCgIAAgKQAAgLADgIQACgJAFgFQAFgFAHgDQAHgCAHAAIAHAAIAGACIAGADIADACIACACIAAABIABACIAAADIgBAFQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgDgBIgEgEIgHgDQgEgBgFAAQgJAAgGAIQgFAIAAAOQAAAIABAGQACAFACAEQADAEAEACQADACAGAAQAFAAAEgCIAGgDIAFgEIADgBIABAAIABABIAAADIAAADIAAACIAAACIgBABIgBACIgEADIgGADIgHACIgIAAQgIAAgGgCg");
	this.shape_23.setTransform(95.3,68.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#660000").s().p("AgKArIgHgBIgFgDIgDgCIgCgCIAAgFIAAgDIAAgBIABgBIABAAIAEABIAEACIAHADIAJABIAFgBIAFgCQACgCABgCQACgDAAgDQAAgDgCgCIgEgFIgHgCIgGgDIgHgDIgGgEQgDgDgCgDQgCgFAAgFQAAgEACgEQACgFADgDQAEgEAFgCQAFgCAHAAIAGABIAGABIAEADIADABIACABIAAABIAAACIAAACIAAADIAAACIgBABIgBAAIgDgBIgDgCIgGgCIgIgBIgFABIgFACIgCAEIgBAFQAAADACACIAEAFIAFACIAIADIAIAEIAGADIAEAGQACAEAAAFQAAAGgCAFQgCAFgFADQgDAEgHABQgFABgGABIgIgBg");
	this.shape_24.setTransform(87.8,68.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#660000").s().p("AAAA+IgDAAIgCgBIgBgBIAAgBIAAh1IAAgBIABgBIACgBIADAAIAEAAIACABIABABIAAABIAAB1IAAABIgBABIgCABIgEAAg");
	this.shape_25.setTransform(78.2,66.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#660000").s().p("AgPAqQgGgCgDgDQgEgDgCgEQgBgFAAgGQAAgGACgFQADgFAFgDQAFgDAHgBQAIgBAIgBIALAAIAAgGIgBgIQgBgDgCgDQgCgCgEgBQgDgCgFAAQgEAAgFACIgHADIgGACIgCABIgCAAIgBgBIgBgCIAAgCIABgEIACgCIADgCIAHgEIAJgCIAIgBQAIAAAGACQAGACADAEQAEAEACAFQACAGgBAHIAAA1IAAACIgCABIgEAAIgEAAIgBgBIgBgCIAAgIQgFAFgHADQgGAEgGAAQgGgBgFgBgAgEAFIgHADQgDABgBADQgBAEAAADQAAAGADADQAFAEAGABQAFgBAFgDQAFgCAFgHIAAgQIgNAAIgJABg");
	this.shape_26.setTransform(71.6,68.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#660000").s().p("AABA0QgEgCgDgDQgCgEgCgFIgBgMIAAgtIgLAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgFIAAgDIABgBIABgBIABgBIALAAIAAgTIAAgBIACgBIACAAIADAAIAEAAIABAAIABABIABABIAAATIAUAAIABABIABABIABABIAAADIgBAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgUAAIAAArQAAAJACAEQACAEAHAAIADAAIADgBIACgBIACgBIABABIAAAAIABACIAAADIgBAEIgBACIgCABIgDABIgEABIgEAAQgGAAgEgBg");
	this.shape_27.setTransform(64.4,67.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#660000").s().p("AgRApQgHgDgFgFQgFgGgCgIQgCgIAAgKQAAgJACgIQADgIAFgGQAEgFAIgEQAHgDAKgBQAJAAAIADQAHADAFAGQAEAFADAJQACAHAAAKQAAAJgCAIQgDAIgFAGQgFAGgHADQgIAEgJAAQgJgBgIgCgAgKgcQgFACgDAEQgCAFgCAGQgCAFAAAGIABAMQACAGADAEQADAEAEADQAFACAGAAQAGAAAFgCQAEgCADgEQADgFACgFQABgGABgGIgBgMIgFgKQgDgEgEgCQgFgDgHAAQgFAAgFACg");
	this.shape_28.setTransform(56.8,68.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#660000").s().p("AAAA5IgCAAIgDgBIgCgBIAAgBIAAhhIgfAAIgCAAIgBgCIgBgCIAAgDIAAgCIABgCIABgCIACAAIBNAAIABAAIACACIAAACIABACIgBADIAAACIgCACIgBAAIgfAAIAABhIgBABIgBABIgDABIgDAAg");
	this.shape_29.setTransform(47.7,66.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(94,52,23,0.2)").s().p("A5tB8IAAj3MAzbAAAIAAD3g");
	this.shape_30.setTransform(87,77.9,0.529,1.977);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#660000").s().p("AAAA9IgDAAIgCAAIgBgBIAAgBIAAh1IAAgBIABAAIACgBIADAAIAEAAIACABIABAAIAAABIAAB1IAAABIgBABIgCAAIgEAAg");
	this.shape_31.setTransform(127.9,13.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#660000").s().p("AgNApQgHgDgFgFQgFgGgDgHQgDgJABgKQAAgKACgHQADgJAFgGQAFgFAHgDQAHgEAIABQAJAAAHACQAGADAEAGQAFAFACAGQACAIAAAHIAAADQAAABgBABQAAAAAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIg0AAQAAAGACAGQABAGADADQAEAEAEACQAFACAGAAIAKgBIAIgCIAGgCIACgBIACABIAAAAIABACIAAACIAAACIAAACIgBABIgBACIgDABIgGACIgIACIgLAAQgJAAgHgCgAgHgdQgEACgEAEIgDAIIgDAJIArAAQAAgMgFgGQgFgHgLAAQgFAAgDACg");
	this.shape_32.setTransform(121.4,15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#660000").s().p("AAAAqIgDAAIgDAAIgCgBIgBgCIgbhKIAAgCIgBgBIAAgBIABgBIABgBIACAAIADAAIAEAAIADAAIABABIABACIAVBAIAAABIABgBIAWhAIAAgCIACgBIACAAIAEAAIADAAIACAAIABABIABABIAAABIgBABIAAABIAAABIgbBKIgBACIgCABIgDAAIgEAAg");
	this.shape_33.setTransform(112.8,15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#660000").s().p("AgNApQgHgDgFgFQgFgGgDgHQgDgJABgKQAAgKACgHQADgJAFgGQAFgFAHgDQAHgEAIABQAJAAAHACQAGADAEAGQAFAFACAGQACAIAAAHIAAADQAAABgBABQAAAAAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIg0AAQAAAGACAGQABAGADADQAEAEAEACQAFACAGAAIAKgBIAIgCIAGgCIACgBIACABIAAAAIABACIAAACIAAACIAAACIgBABIgBACIgDABIgGACIgIACIgLAAQgJAAgHgCgAgHgdQgEACgEAEIgDAIIgDAJIArAAQAAgMgFgGQgFgHgLAAQgFAAgDACg");
	this.shape_34.setTransform(104.3,15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#660000").s().p("AAAA9IgDAAIgCAAIgBgBIAAgBIAAh1IAAgBIABAAIACgBIADAAIAEAAIACABIABAAIAAABIAAB1IAAABIgBABIgCAAIgEAAg");
	this.shape_35.setTransform(97.7,13.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#660000").s().p("AgKArIgHgCIgFgCIgDgBIgBgDIgBgEIABgDIAAgCIABgBIABgBIACABIAFAEIAHACIAJABIAFgBIAFgCQADgCAAgCQACgCAAgDQAAgEgCgCIgEgEIgHgEIgGgCIgIgDIgFgEQgEgDgBgEQgCgEAAgFQAAgEACgFQABgEAFgDQADgDAGgCQAEgCAHAAIAGABIAGABIAFABIACACIABABIAAACIABABIAAACIAAADIgBACIgBABIAAAAIgCgBIgEgCIgGgCIgIgBIgFABIgEACIgDAEIgBAEQAAAEACACIAEAEIAGAEIAHACIAIADIAGAEIAFAHQABADAAAGQAAAFgCAFQgDAFgDADQgFADgFACQgGABgGAAIgIAAg");
	this.shape_36.setTransform(88.1,15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#660000").s().p("AgNApQgHgDgFgFQgFgGgDgHQgDgJABgKQAAgKACgHQADgJAFgGQAFgFAHgDQAHgEAHABQAKAAAHACQAGADAEAGQAEAFADAGQABAIAAAHIAAADQAAABAAABQAAAAAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgzAAQAAAGABAGQABAGADADQADAEAFACQAFACAGAAIALgBIAHgCIAFgCIADgBIACABIABAAIAAACIAAACIAAACIAAACIAAABIgCACIgDABIgGACIgIACIgLAAQgJAAgHgCgAgIgdQgEACgDAEIgDAIIgCAJIAqAAQAAgMgFgGQgGgHgKAAQgFAAgEACg");
	this.shape_37.setTransform(80.1,15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#660000").s().p("AgPArIgDAAIgCAAIgBgBIgBgBIAAhPIAAgBIACgBIACgBIACAAIAEAAIACABIABABIAAABIAAALIAGgHIAEgEIAGgDIAEgBIAEAAIACABIADAAIACACIABABIAAABIAAABIAAADIAAAEIAAACIgBABIgBAAIgCAAIgCgBIgDAAIgEgBIgDABIgFACIgEAGIgGAJIAAAzIAAABIgBABIgCAAIgEAAg");
	this.shape_38.setTransform(73,14.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#660000").s().p("AgRApQgHgDgFgGQgFgFgCgIQgDgIAAgKQAAgIADgJQACgIAFgGQAGgGAHgDQAIgEAJABQAKAAAHACQAHADAFAGQAEAFADAJQADAHgBAKQABAJgDAIQgDAJgEAFQgFAGgIADQgIADgJAAQgKAAgHgCgAgKgcQgEADgDADQgEAFgBAFQgBAGgBAGIABAMQACAGADAEQADAEAEADQAFADAGgBQAGABAFgDQAFgCADgEQADgFABgFQABgGAAgGIgBgMIgDgKQgDgEgFgDQgFgCgHAAQgGAAgEACg");
	this.shape_39.setTransform(64.6,15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#660000").s().p("AgKApQgHgDgEgGQgFgFgCgIQgCgIAAgKQAAgLADgIQACgJAFgFQAFgFAHgDQAHgCAHAAIAHAAIAGACIAGADIADACIACACIAAABIABACIAAADIgBAFQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgDgBIgEgEIgHgDQgEgBgFAAQgJAAgGAIQgFAIAAAOQAAAIABAGQACAFACAEQADAEAEACQADACAGAAQAFAAAEgCIAGgDIAFgEIADgBIABAAIABABIAAADIAAADIAAACIAAACIgBABIgBACIgEADIgGADIgHACIgIAAQgIAAgGgCg");
	this.shape_40.setTransform(56.1,15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#660000").s().p("AgNA5IgIgCIgHgCIgDgDQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIgBgEIABgEIAAgCIABAAIABgBIADABIAHAEIAIAEQAFABAGAAQAEAAAEgBIAIgFIAEgFIACgIQAAgFgDgDQgCgEgDgDIgJgEIgIgFIgJgDIgJgHQgEgEgCgFQgCgFAAgGQAAgIACgGQADgFAFgEQAFgDAGgCQAGgCAHgBIAHACIAHABIAGACIAEACIABACIABACIAAABIAAADIAAACIAAADIgCABIgBABIgDgCIgFgDIgGgCQgFgCgFAAQgEAAgDACQgDABgDACQgDACAAADIgBAGQAAAEACAEIAFAGQAEADAEACIAJAEIAKAGQAEABAEAEQADADADAFQACAGAAAGQAAAIgDAGQgCAHgGAEQgFAEgHACQgHACgHAAIgLgBg");
	this.shape_41.setTransform(48.1,13.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(94,52,23,0.2)").s().p("A5tB8IAAj3MAzbAAAIAAD3g");
	this.shape_42.setTransform(87,24.5,0.529,1.977);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.userDetail_1},{t:this.userDetail_2},{t:this.userDetail_3},{t:this.userDetail_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.userScoreDetailHolder_mc, new cjs.Rectangle(0,0,174.1,209.2), null);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CC63F").s().p("ABWBcQgEgBgDgEQgIgIgEgLQACgIABgGQAAgIgBgGQgEgJgGgJQgFgIgHgJIgBAEIABAFQABADAGAGQAEAEACAEQAEAHAAAIQABAGgBAFQgBAEgDADIgEABIgEAAQgEAAgGgDIgIgGQgLgIgFgMIgCgEIgEgEIgGgGIgGgEIgIgHQgEgHgDgBIgLgIIgLgJIgKgIIgLgHQgGgCgDgDIgJgEIgHgEIgIgHIgEgDIgGgFQgCgDgBgEQAAgDACgDIAEgFQADgDADAAIAHAAQAEgCADABIACgDIABAAIAAgBIgBgDQAdgMACAQQgFgBAAACQAAAEAEAEIgBACIAFABQAUACAUAMIAEADIAKAGIALAIIATANQALAJAIAJQAOANAIAOIAKARIAJAQQADAHAAAIIgFgKIgEgJIgFgIIgGgIQgFgIgDgBQgEgHgEgDQAAAGAFAIIAFAIIAGAIQAIALAHAQIABAHQABAEgCADQgBAHgEAAIgFABIgEAAg");
	this.shape.setTransform(0.2,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#261A0A").s().p("ABPBZQgKgIgFgPIgHADQgDABgDgBQgLgCgGgFQgFgEgEgGQgEgEgDgHIgGgJQgCgFgEgDIgJgGIgHgIIgJgHIgIgHIgRgMQgLgKgGgDQgDgDgHgCIgKgFIgJgGIgJgHQgHgGgDgHQgCgGACgEIADgEIADgEQAEgCABgDIAGgCIAIgBIAFgBIAEgCIABACIABAEIAAAAIgBAAIgDADQgCAAgEABIgHAAQgDABgEACIgEAGQgCACABAEQABAEACACIAFAGIAFADIAIAGIAHAEIAIAEQAEADAGACIAKAIIAKAHIAMAJIALAJQADACAEAFIAHAIIAHAEIAGAGIAEADIABAFQAGAMAKAIIAJAGQAFACAFABIAEAAIADgBQADgEACgEQABgFgCgFQAAgIgEgIQgCgEgEgEQgFgFgCgEIgBgFIABgDQAIAIAFAIQAGAJADAKQACAGgBAHQAAAGgDAIQAEAMAIAIQADAEAFAAQAEACAEgCQAFAAABgHQACgDgBgFIgCgHQgHgQgHgLIgGgHIgGgIQgFgIAAgHQAEADAFAHQACACAGAHIAFAIIAGAIIAEAKIAEAKQAAgIgDgHIgJgQIgJgRQgIgOgPgNQgHgJgMgJIgTgOIgLgHIgKgGIgDgDQgVgMgTgDIgFgBIABgBQgFgEAAgEQABgDAEACQAHABAPAIIgBAAIANAFIARAKQANAHAMAKIAYASIAPAQQAJAKAGAJIAHALIAGALIAHAMQAEAHABAHQAAACgBAEIgBAGQgBADAAAFQABAGgBACQAAAFgFADIgIAEIgDAAQgGAAgHgGg");
	this.shape_1.setTransform(0,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8CC63F").s().p("AgOAHIAFgKQAJAEAAgFQAIgEAEADIADABIAAABIgJAFQgHAGgKAAIgDgBgAgLgDIABgBIAAABg");
	this.shape_2.setTransform(-6,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CC63E").s().p("AgjAxIAAAAIABgBIANgYIAMgYIAJgPQAFgKACgIIABgEQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQABgBAEgBIAHAAIgIgCIgCgBIAGgBQADgCADgBIAAAAIgBgBQAHABAFAGQgDAIgEAIIgOAZQgEAGgEAMIgIAUIgFAJIgFACIABACIgDgBQgDgDgKAEQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgHgDg");
	this.shape_3.setTransform(-3.5,-4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#261A0A").s().p("AgqA0IACgGIgBAAIACgEIADgEQAMgYAJgNIACgBIADgHIADgGIACgHIAEgKIADgKIgBAAIADgIQADgGAMgBIADAAIADAAIADABQgDABgDACIgGABIACABIgBAAIAJACIgHAAQgFABgBABQAAAAAAABQgBAAAAABQgBAAAAABQAAAAgBABIAAAEQgCAIgFAKIgJAQIgMAXIgNAYIgBABIAAAAIgFALQgDgBgCgDgAgiAtIABAAIAAgBgAgHAsIgBgCIAEgCIACAAIADgJIAJgTIAIgSIAOgaIAFgIIAEgDIACAFIgCACIgDAIIgEAJIgCABQgBADgGAMQgDADAAACIgCAEIgEAIIgGARQgHAEgJAIIgBACIAAgBg");
	this.shape_4.setTransform(-3.7,-4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8CC63E").s().p("AASAxIgIgGIgHgJQAAgEgCgBQgCgCgBgDIgBgBIABAAIABAAIgDgGIgBgCIgBgDIgEgHIgJgTIgCgCIAAgCIgLgVIAAgDQAAgDAFgDQAEgEAHAFIABACIATAfQAQAWAIASIAEAKQACAFgBAGIgBAAIgGADIgCAAIAAAAIgGgBg");
	this.shape_5.setTransform(-3.9,-13.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#261A0A").s().p("AAQAyIgDgBIgFgCQgEgCgCgDIgIgLQgEgGgCgGIgDgHQgEgGgBgEIgFgJIgEgNIgEgNIgEgNIABAAIABACIALAUIAAACIACACIAJAUIAEAGIABADIABACIACAFIAAAAIgBABIABABQABADADABQABACAAAEIAHAJIAIAGIAGABIAAAAIACAAIAGgDIABgBQABgFgCgFIgEgKQgIgSgQgXIgTgfIABAAQARAQAMARIALARIAJASIAEALQACAGAAAFQAAAEgCAEIgGADQgEACgHAAIgEACIABgDg");
	this.shape_6.setTransform(-3.6,-12.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#261A0A").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_7.setTransform(-2,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-18.4,22.2,36.9);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CC63F").s().p("AAeAdIgEgCIgEgBIgIgBIgIABIgKgBQgHgDgDAAQgGAAgIAAIgPgBQgEABgIgBIgNABQgHACgEgBIgKADIgJABIgJgBIgGABIgHgBQgDgBgDgDQgCgCABgDIACgHIAEgHIAGgDIAGgFIACgDIAAgBIAJgNQAIAFABgHQAKgDADADIACAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgBAEIAFgCQAUgKAXgDIAGgBIAMgBIAMAAIAYAAQAPAAAKACQAUACANAHIAQAIIAPAHQAGAEAEAFIgJgEIgIgFIgIgDIgJgDIgLgCQgHgDgFAAQACAFAJADIAIADIAJACQAMAFANAHIAFAFQACADAAAEQABAGgDADQgEAEgEABQgFACgEgBQgLgBgJgHQAAgIgDgFQgDgHgEgDQgHgFgJgEQgJgDgKgDIABAFIADACQADACAHABQAGACADABQAHADAEAHQADADABAFIgBAIIgDADIgDACIgLAEIgLABQgMgBgLgGgAhkgXIAAAAIABAAg");
	this.shape.setTransform(0,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CC63E").s().p("AgtAxIAAAAIABgBIASgYIASgYIAMgPQAHgKAEgIIABgEIAEgEQACgBAEgBIAGAAIgHgCIgBgBIAGgBIAGgDIABAAIgBgBQAGACAEAFIgKAQIgUAZQgFAGgIAMIgLAUIgHAJIgGACIAAACIgCgBQgCgDgLAEQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgCAAgEgDg");
	this.shape_1.setTransform(-5.3,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#261A0A").s().p("AA5BVQgGAAgGgDIgMgEIgJgEQgEgCgFgBIgLABIgKgBIgLgBIgLgBIgVAAQgOgBgHABQgFAAgHACIgLACIgLABIgMgBQgJAAgFgDQgFgEAAgFIABgFIACgEQADgFAAgDIAEgFIAHgGIAEgDIAIgNIgBAAIADgDIADgFQASgWALgNIADgDQACgCACgFIAEgFIAEgIIAGgJIAGgLIgBAAIAFgHQAEgGANgBIADgBIADABIACABIgGACIgGACIABAAIgBAAIAIACIgGABQgEAAgCACIgEADIgBAEQgEAIgHAKIgNARIgSAXIgTAYIAAAAIAAABIgJAMIAAABIgCAEIgGAFIgGAEIgEAGIgCAHQgBAEACACQADACADABIAHABIAGAAIAJAAIAJgBIAKgCQAEABAHgCIANgBQAIABAEgBIAPABQAIgBAGABQADAAAHACIAKABIAIAAIAIABIAEAAIAEADQALAGAMAAIALAAIALgEIADgCIADgDIABgJQgBgEgDgEQgEgGgHgEQgDgCgGgBQgHgBgDgCIgDgDIgBgEQAKADAJADQAJAEAHAFQAEAEADAHQADAFAAAIQAJAGALACQAEABAFgCQAEgBAEgEQADgDgBgGQAAgEgCgDIgFgFQgNgIgMgFIgJgCIgIgDQgJgDgCgGQAFAAAHADIALADIAJADIAIADIAIAFIAJAFQgEgGgGgEIgPgHIgQgIQgNgHgUgCQgKgDgPAAIgYABIgMAAIgMABIgGABQgXADgUAJIgFADIABgEQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAAgBIAFgCIABgBIAGgCIAHgCIANgDIAWgEQAPgBAOABQAPgBAOABIAXADQAMACAJAFIALAFIALAEQAGACAGAEQAGADAEAFQABACABADIACAGQgBADADAEIADAHQACAEgDAFIgGAHQgGAGgMAAQgLgBgMgJIgFAGQgDADgDABQgKAFgIAAIgBAAgAhkAQIABAAIgBAAg");
	this.shape_2.setTransform(0,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#261A0A").s().p("AAYAUQgJAAgHgCIAAABIgHgCIgLgCIgMgCIgPgFIgNgEIgPgEIABAAIACAAIAZADIACAAIADABIAZAEIAKACIAJACIgBAAIABABQAEABADgBQADgBADACIANAAIALgDIAFgDIAAAAIADgHIAAgBQgEgCgFgCIgMgDQgVgEgegCIgpgDIAAAAIABgBQAZgEAXACIAWABIAXADIAMAEQAHACAEADQAEACABAEIgBAFQgBAEgFAFIgCADIgBgCIAAAAIgDACIgFACIgJABg");
	this.shape_3.setTransform(-5.9,-7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#261A0A").s().p("AgYAjIANgTIALgSIAUgZIAGgJIAGgCIAAAFIgBABIgHAIIgGAJIgBACIgLANIgEAHIgCADIgFAJIgNAVIgHACIgFACIAGgJgAgJgrIABAAIgCABIABgBg");
	this.shape_4.setTransform(-3.7,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8CC63E").s().p("AAeAQQgDgDgCABQgEACgDgCIgBAAIABgBIAAAAIAAAAIgKgCIgKgCIgYgEIgDAAIgDgBIgZgEIgDAAQgCgCAAgFQAAgFAJgDIADABIAoACQAfACAVAFIALACQAGACAEADIAAAAIgEAIIgFADIgLADg");
	this.shape_5.setTransform(-6.4,-7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-9.7,27.2,19.5);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261A0A").s().p("AgXCTQgegFgcgMQgDgDgIgDIgJgFQgJgIgCAAIAAAAQgUgPgMgUQgHgMgEgOQgEgNAAgOQgBgVAGgUQAFgSAJgTQAXgkAagfQAbghgXAmIACgCIgBACQgYAegWAgQgHANgDAIQgIAWgCAUQgBAYAGAUQAEAMAHALQAGALAJAJQAOANAUALIAOAHIANAFIAOAEIAJACIAJACIAKABIAKAAIAAACIAPAAIARgBQAfgEAcgPIAIgFIAIgFQAKgHAKgJQAdggADghQADgggMgcQgMgchFhVIAHgFQAUAXAQAaIATAaIABAAIAHAJIgCAAIAGAKIAFAJIAFAHIgCgBQAOAcADASQACATgIAcQgJAbgZAWQgQAPgVAKQgVALgYAFQgRADgTAAQgMAAgNgBg");
	this.shape.setTransform(0,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F8E26").s().p("AhjAmQgFg6AQgnQAWgTAPgJQAWgNAVgBQApgFAiAfQAiAfAAAqQADAjggAoIgkAeQhJghg+ggg");
	this.shape_1.setTransform(-7.6,14.8,0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#70B11A").s().p("AgsC9QhbhahChpQhEhugmh2QBKggA7gzQA9g0AnhDIAmCnQAZBgAhBCQgxA9gCA/QgDAyAYAvQAWAvArAcQA8AqBXgKQAeAmBJBRQgPAmAEA7QjLhuiJiKg");
	this.shape_2.setTransform(-11.6,10.9,0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F8E26").s().p("AhtCjQgqgcgYgvQgYgvADgxQACg/Ayg+QA5g4BEgGQAwgGAwAUQAvAVAfAnQAoAwACBDQACBCglA0QgnA8hWAXQgRACgQAAQhBAAgwgig");
	this.shape_3.setTransform(-9.9,11.1,0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5F8E26").s().p("AgzAxQgcgcAMgoQAMgqAngHQAmgLAeAhQAdAhgOAkQgMAlgpAJQgKADgIAAQgcAAgTgXg");
	this.shape_4.setTransform(-10.5,7.5,0.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F8E26").s().p("AirgDQARjZBUjYQBsA5BIB3QBCBwgBCIQAACGhBBwQgoBEg9AzQg6AzhJAhIgBABQhCjPASjqg");
	this.shape_5.setTransform(-13.4,4.2,0.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5F8E26").s().p("AgVCpQhAgHgtg2Qgsg1AFhAQADg3AlgsQAlgsA2gMQBJgUBDAyQBCAyABBMQAHBMg9A4QgyAvg9AAQgLAAgOgCg");
	this.shape_6.setTransform(-9.5,0.8,0.1,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F8E26").s().p("Ag1ApQgYgdAQglQAQglAmgEQAlgFAYAjQAZAjgUAgQgQAggmAEIgHABQghAAgSgbg");
	this.shape_7.setTransform(-7.6,-3,0.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAFAD6").s().p("AgUBeQgNgCgJgMQgbglgBgUQgBgUAEgUQAHgiAQgVQAIgKALgGQAMgGANABQAKAAALAGQAIAFAKAJQALAKAHANQAGANAGAVQAGAUgLAfQgKAfgfARIgHADIgLAFQgKADgKAAIgFAAg");
	this.shape_8.setTransform(7.3,6.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8CC63E").s().p("AgGCxIAAgCIgKABIgKgBIgJgCIgJgDIgJgEQgBAEgXgLQgmgSgHgOQgFgDgMgTQgQgqADgDQgFgEAJgoQAHgWAMgPIAEgIQAcgqAHgOIARgmQALgZAHgNQAIgOAqgCQApgCA9B0QAjAoAOAnQAHASABASQABAUgGARQgMAhgVAQQgRAMgGACQABAAgBABIgIAEQgcAPgfAEIgRACIgPgBgAAwgVQgLAFgIALQgQATgHAjQgEAVABATQABAUAbAmQAJAMANABQANABANgEIALgEIAHgDQAfgSAKgfQALgegGgVQgGgVgGgNQgHgOgLgJQgKgJgIgEQgLgGgLgBIgDAAQgLAAgLAGgAhLCNIgBAAIAMALIAAgBQAAgEgEgDQgDgDgDAAIgBAAgAg7BoIgFADQgCADAAADQgBAEAEAEQADADAFAAQAEAAAEgEQADgFgCgEQgBgEgEgCIgFgBIgDAAgAhpBHQgEAAgBAEQgBAFACACQADADAEgBQAEgBABgDQACgEgDgDQgCgDgDAAIgCABgAhhgEQgFABgEADQgEAFAAAFQgBAHAFAFQAEAFAHABQAHABAGgFQAGgGAAgIQAAgHgHgEQgFgEgFAAIgEABgAhLghQgEAAgBAEQgCAEACADQACADAEgBQAEAAACgDQACgEgDgDQgCgDgDAAIgBAAg");
	this.shape_9.setTransform(-0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-18,32.1,36.1);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261A0A").s().p("AgXCTQgegFgcgMQgDgDgIgDIgJgFQgJgIgCAAIAAAAQgUgPgMgUQgHgMgEgOQgEgNAAgOQgBgVAGgUQAFgSAJgTQAXgkAagfQAbghgXAmIACgCIgBACQgYAegWAgQgHANgDAIQgIAWgCAUQgBAYAGAUQAEAMAHALQAGALAJAJQAOANAUALIAOAHIANAFIAOAEIAJACIAJACIAKABIAKAAIAAACIAPAAIARgBQAfgEAcgPIAIgFIAIgFQAKgHAKgJQAdggADghQADgggMgcQgMgchFhVIAHgFQAUAXAQAaIATAaIABAAIAHAJIgCAAIAGAKIAFAJIAFAHIgCgBQAOAcADASQACATgIAcQgJAbgZAWQgQAPgVAKQgVALgYAFQgRADgTAAQgMAAgNgBg");
	this.shape.setTransform(0,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F8E26").s().p("AhjAmQgFg6AQgnQAWgTAPgJQAWgNAVgBQApgFAiAfQAiAfAAAqQADAjggAoIgkAeQhJghg+ggg");
	this.shape_1.setTransform(-7.6,14.8,0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#70B11A").s().p("AgsC9QhbhahChpQhEhugmh2QBKggA7gzQA9g0AnhDIAmCnQAZBgAhBCQgxA9gCA/QgDAyAYAvQAWAvArAcQA8AqBXgKQAeAmBJBRQgPAmAEA7QjLhuiJiKg");
	this.shape_2.setTransform(-11.6,10.9,0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F8E26").s().p("AhtCjQgqgcgYgvQgYgvADgxQACg/Ayg+QA5g4BEgGQAwgGAwAUQAvAVAfAnQAoAwACBDQACBCglA0QgnA8hWAXQgRACgQAAQhBAAgwgig");
	this.shape_3.setTransform(-9.9,11.1,0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5F8E26").s().p("AgzAxQgcgcAMgoQAMgqAngHQAmgLAeAhQAdAhgOAkQgMAlgpAJQgKADgIAAQgcAAgTgXg");
	this.shape_4.setTransform(-10.5,7.5,0.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F8E26").s().p("AirgDQARjZBUjYQBsA5BIB3QBCBwgBCIQAACGhBBwQgoBEg9AzQg6AzhJAhIgBABQhCjPASjqg");
	this.shape_5.setTransform(-13.4,4.2,0.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5F8E26").s().p("AgVCpQhAgHgtg2Qgsg1AFhAQADg3AlgsQAlgsA2gMQBJgUBDAyQBCAyABBMQAHBMg9A4QgyAvg9AAQgLAAgOgCg");
	this.shape_6.setTransform(-9.5,0.8,0.1,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F8E26").s().p("Ag1ApQgYgdAQglQAQglAmgEQAlgFAYAjQAZAjgUAgQgQAggmAEIgHABQghAAgSgbg");
	this.shape_7.setTransform(-7.6,-3,0.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAFAD6").s().p("AgUBeQgNgCgJgMQgbglgBgUQgBgUAEgUQAHgiAQgVQAIgKALgGQAMgGANABQAKAAALAGQAIAFAKAJQALAKAHANQAGANAGAVQAGAUgLAfQgKAfgfARIgHADIgLAFQgKADgKAAIgFAAg");
	this.shape_8.setTransform(7.3,6.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8CC63E").s().p("AgGCxIAAgCIgKABIgKgBIgJgCIgJgDIgJgEQgBAEgXgLQgmgSgHgOQgFgDgMgTQgQgqADgDQgFgEAJgoQAHgWAMgPIAEgIQAcgqAHgOIARgmQALgZAHgNQAIgOAqgCQApgCA9B0QAjAoAOAnQAHASABASQABAUgGARQgMAhgVAQQgRAMgGACQABAAgBABIgIAEQgcAPgfAEIgRACIgPgBgAAwgVQgLAFgIALQgQATgHAjQgEAVABATQABAUAbAmQAJAMANABQANABANgEIALgEIAHgDQAfgSAKgfQALgegGgVQgGgVgGgNQgHgOgLgJQgKgJgIgEQgLgGgLgBIgDAAQgLAAgLAGgAhLCNIgBAAIAMALIAAgBQAAgEgEgDQgDgDgDAAIgBAAgAg7BoIgFADQgCADAAADQgBAEAEAEQADADAFAAQAEAAAEgEQADgFgCgEQgBgEgEgCIgFgBIgDAAgAhpBHQgEAAgBAEQgBAFACACQADADAEgBQAEgBABgDQACgEgDgDQgCgDgDAAIgCABgAhhgEQgFABgEADQgEAFAAAFQgBAHAFAFQAEAFAHABQAHABAGgFQAGgGAAgIQAAgHgHgEQgFgEgFAAIgEABgAhLghQgEAAgBAEQgCAEACADQACADAEgBQAEAAACgDQACgEgDgDQgCgDgDAAIgBAAg");
	this.shape_9.setTransform(-0.1,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F8E26").s().p("AhLBFQghgkAHgsQADgcASgYQATgXAbgJQAmgPAoATQAoATAMAoQASAtgfAtQgfAtgxgBIgHABQgoAAgfgig");
	this.shape_10.setTransform(-5.8,11.1,0.1,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#70B11A").s().p("AgBAVQgcgKhpgoIAkgfQAvAeBDAhIB3A6Qg9gMhLgcg");
	this.shape_11.setTransform(-5.9,16.2,0.1,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#70B11A").s().p("AiTAdQAjhdBHiMIBfAAQA2AAAoACQhaDlgZCyQhHh2htg6g");
	this.shape_12.setTransform(-12.7,-0.5,0.1,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#70B11A").s().p("AgPBSQhRgCgygFQBNhtBQhQQA9AYBLAWQgcAegyA9Qg0A/gaAdg");
	this.shape_13.setTransform(-9.9,-5.9,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-18,32.1,36.1);


(lib.targetBG_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.976)").s().dr(-43.5,-16.7,87,33.4);
	this.shape.setTransform(43.5,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.targetBG_mc, new cjs.Rectangle(0,0,87,33.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008837").s().p("AgLgBIgUgJIAUgDQAWgCAVABIAAAdQgVgHgWgJg");
	this.shape.setTransform(376.5,417.1,0.809,0.809);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008837").s().p("AghABQAZgRAXAAQAWAAARgCIAAAMQgZAKgTAEIg/ALg");
	this.shape_1.setTransform(374.7,414.5,0.809,0.809);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008837").s().p("AgZgDQgIgOAIgQIAKgOIATAVQAUAYACAPIAEAjQgqgegNgVg");
	this.shape_2.setTransform(367.3,418.3,0.809,0.809);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008837").s().p("Ag9APIAQgRQATgQATAFQAdAJAogJQgoAVgbAEQgRADgVAAg");
	this.shape_3.setTransform(367.4,412.7,0.809,0.809);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008837").s().p("AAaAtQgngSgMgIQgMgIgIgiIgHgiQBQBCgXgPQAOAJAQAcQANAYAFADg");
	this.shape_4.setTransform(360.9,416.2,0.809,0.809);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008837").s().p("AgkAIIgfgNIAVgJQAbgJAYAHQAnALAYAAQgcAXgaACIgEAAQgPAAgfgMg");
	this.shape_5.setTransform(357.2,408.9,0.809,0.809);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008837").s().p("AgaAAQgDgMANgbIANgYIAcA+QAHAPgKAbQgFANgGAKQghgqgEgWg");
	this.shape_6.setTransform(348,411,0.809,0.809);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#008837").s().p("AgBAVQgTgBgegHIgbgHQgKAAApgRQAkgQAUAKQAiAPAjACQguAWgeAAIgEgBg");
	this.shape_7.setTransform(352.9,403.6,0.809,0.809);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#008837").s().p("AgkAAQANgXAUABQAeADATAAQghAjgNAFIgtACg");
	this.shape_8.setTransform(344.2,400.4,0.809,0.809);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#008837").s().p("AgDAaQgWgEgbgQIgXgOIAfgMQAhgLAPAIQAbANAtAPQgLAHgPAGQgWAKgTAAIgMgCg");
	this.shape_9.setTransform(346.2,391.1,0.809,0.809);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#008837").s().p("AgKAOQgUgHgSgXIgOgYIATAIQAaAJAeAFQAfAGANAaQAGAOABANg");
	this.shape_10.setTransform(336,380.6,0.809,0.809);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#008837").s().p("AgQACQgSgVAAgVIADgQIAgARQAgAUgFASQgEARAFAWQADAMADAHQgXgUgcgjg");
	this.shape_11.setTransform(348,381,0.809,0.809);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#008837").s().p("AgIASQgWgEgNgFIgKgEIANgFIAsgOQAbgIAOAMQAHAGACAGQgHAGgMAEQgQAHgPAAIgMgBg");
	this.shape_12.setTransform(351.7,370.4,0.809,0.809);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#008837").s().p("AgWAJQgEgIgCgdIgBgcIANASQAQAUASAMQATAMgLAbQgGANgJALQgagjgHgNg");
	this.shape_13.setTransform(356.8,361.5,0.809,0.809);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#008837").s().p("AgIATQgZgFgPgSIgKgRIAUAGQAZAGAagBQAbgCANAMQAGAEAAAGQgHAFgNADQgNAEgNAAQgLAAgKgDg");
	this.shape_14.setTransform(351.2,364.7,0.809,0.809);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#008837").s().p("AgTAWQgIgJgGghIgEgiIAWAWQAYAZAQALQARAMgEAVQgCAKgFAIQgkgUgOgNg");
	this.shape_15.setTransform(344.7,370.7,0.809,0.809);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#008837").s().p("AgUAHQACgNASgYIATgWIAIAXQAIAZgEARQgEASgdANIgdAJQAJgYACgWg");
	this.shape_16.setTransform(354.8,380.1,0.809,0.809);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#008837").s().p("AgXgCQAAgLAHgWIAIgSIAdA2QAKASgVATIgWAQQgKgogBgQg");
	this.shape_17.setTransform(361.7,371.7,0.809,0.809);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#008837").s().p("AgVABQgLgUALgXIAMgUIAVAbQAUAfgHAMQgHAOgDAVIgCATQgRgcgRghg");
	this.shape_18.setTransform(365.4,382.7,0.809,0.809);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#008837").s().p("AgEAYQgYgLgagUIgVgTIAcgDQAhgBAUALQAiASAkAOQgKAHgQAFQgPAFgNAAQgPAAgLgGg");
	this.shape_19.setTransform(337.6,358.1,0.809,0.809);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#008837").s().p("AgZgJQAAgLASgOQAJgHAJgFIAOAzQAEAOgWAQIgVAMQgKgngBgRg");
	this.shape_20.setTransform(296.2,366,0.809,0.809);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#008837").s().p("AgwAJIgOgPIANgBQARgCAVgIQATgJAdALQAPAGALAHQgmATghAEIgHABQgSAAgPgNg");
	this.shape_21.setTransform(285.4,365.8,0.809,0.809);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#008837").s().p("AgiAgQgFgMgBgMQAAgYAXgBQAkgDAWgLIgLAaQgOAZgNAFQgMAGgOABg");
	this.shape_22.setTransform(291.5,358.9,0.809,0.809);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#008837").s().p("AgwAPIgUgHIASgEQAUgGATgLQASgLAhAJQARAEAMAHQgmATghAEIgOABQgPAAgRgFg");
	this.shape_23.setTransform(265,339.2,0.809,0.809);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#008837").s().p("AgWgBQgDgOAFgcIAFgaIAJAOIAXAiQANAQgMAnQgGAUgIAQQgWgygEgVg");
	this.shape_24.setTransform(273.7,335.4,0.809,0.809);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#008837").s().p("AgqATIgegFIBJgcQAggMAXAJQAMAFAFAHQggATgfAGQgJACgLAAQgOAAgSgDg");
	this.shape_25.setTransform(274,347.2,0.809,0.809);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#008837").s().p("AgOgIQABgPAVgWQALgMAKgIIAAAZQgCAdgHAWQgJAXgUASIgUAOQANgzACgXg");
	this.shape_26.setTransform(284.6,346.4,0.809,0.809);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#008837").s().p("AgrAJIgTgKIARgCQAVgFAUgIQAUgIAZAPQANAIAJAIQgtANgXAAQgQAAgWgLg");
	this.shape_27.setTransform(279.1,354.7,0.809,0.809);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#008837").s().p("AgdAAQgMgWALgbIAOgYIAOAbQARAgANATQAOAVgKAaQgFANgIAJQgcgogUgig");
	this.shape_28.setTransform(375,390.7,0.809,0.809);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#008837").s().p("AgUAKIgUgKIAOgLQASgKAUAEIAdAFIAAAcQgIACgJABIgFAAQgTAAgUgJg");
	this.shape_29.setTransform(375.7,381.9,0.809,0.809);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#008837").s().p("AgpAJQAGgSANAAQAVACAtgUQgCAKgGALQgLAWgSAFQgSAEgRACIgPABQAAgJACgKg");
	this.shape_30.setTransform(312,361.9,0.809,0.809);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#008837").s().p("AAnAQQAAgNACgLIADgJIgJgLIAgALIAQARQANAUgJAPQgKAPgKAKIgJAGQgTgeAAgUgAgegVQgPgBgYgGIgVgGIAJgJQAOgMAVgIQAWgIAcASQAPAIAKAKIAGAHIgMgEQgZAMgVAAIgHgBg");
	this.shape_31.setTransform(300,365.7,0.809,0.809);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#008837").s().p("AglAAQAPgSAPAAIA6ADQgGAIgKAHQgTARgQABIgyABg");
	this.shape_32.setTransform(305.2,357.4,0.809,0.809);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#008837").s().p("AgSANQgLAAgOgNIgLgOIAOgCQAQgCAWgBQAUgBAVAUQAJAKAGAKQg2gHgSAAg");
	this.shape_33.setTransform(294.4,353.7,0.809,0.809);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#008837").s().p("AgBAUQgXgCgXgHIgSgGIAYgPQAdgPAWAIQAlANATAEQgHAFgNAGQgVAKgUAAIgGgBg");
	this.shape_34.setTransform(304,350.2,0.809,0.809);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#008837").s().p("AASATQgWgDACACQgJgEgSgRIgRgTIAMAHQASAGAWAAQAXAAALAPQAGAJABAIIgdgEg");
	this.shape_35.setTransform(294.5,345.6,0.809,0.809);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#008837").s().p("AgEAVQgRgGgagEIgTgEIAegTQAhgQARAIQAcAMAZAFQgLAIgOAIQgUALgOAAQgHAAgFgDg");
	this.shape_36.setTransform(305.1,341.9,0.809,0.809);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#008837").s().p("AgVAMQgLgFgKgcIgIgbIANAIQASALAaAMQAbAMALAbQAGAPAAAMIhIglg");
	this.shape_37.setTransform(296.2,334.9,0.809,0.809);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#008837").s().p("AgSAaQgCgMACgdQACghAGgQQAGgPAGAbIAPA0QAHASgKAcQgGAOgHALQgQghgDgMg");
	this.shape_38.setTransform(302.1,328.2,0.809,0.809);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#008837").s().p("AgQgDQACgNgBgNIgBgJIAVAUQAUAVgJAKQgIAJgLAKIgKAHQgHgVAEgVg");
	this.shape_39.setTransform(367.7,372.3,0.809,0.809);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#008837").s().p("AgUgIQABgIAAgIIgBgGIAMACQAOAEAJAGQAKAGgIAWQgEALgGALQgcgcABgMg");
	this.shape_40.setTransform(363.9,366.7,0.809,0.809);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#008837").s().p("AAmAcQgTgBgQgMIg4grIAdAHQAfAIARAIQARAHAJANQADAHABAFQgFACgHAAIgEgBg");
	this.shape_41.setTransform(373.5,369.2,0.809,0.809);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#008837").s().p("AAEgDQgMgDgSgNIgPgNIA7AKQAXAEABAVQABANgDARQgQgfgUgFg");
	this.shape_42.setTransform(366.4,361.3,0.809,0.809);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#008837").s().p("AANALIg8gFIAYgJQAZgKAMADIAiAHIAAAJQgNAGgPAAIgHgBg");
	this.shape_43.setTransform(375.1,361.8,0.809,0.809);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#008837").s().p("AgGgPQAGgLAUgGQAKgDAJgBQgIAbgRAYQgKAQgWAEIgUACg");
	this.shape_44.setTransform(375,353.8,0.809,0.809);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#008837").s().p("AAFAWQgKgEgTgiIgRghIAPAPQASAQAVAMQAWALAFAYQADALgCAKQgUgUgQgIg");
	this.shape_45.setTransform(368.4,355.2,0.809,0.809);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#008837").s().p("AgUALQgHgKABgbIABgbIAKAQQAOAUAPAQQARAQgFAVQgDALgGAHQgbgcgKgPg");
	this.shape_46.setTransform(370.4,349.1,0.809,0.809);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#008837").s().p("AgXAJQgFgLAGgaIAHgXIAJANQALAPAOAOQAPAMgOAaIgRAXQgTgYgHgTg");
	this.shape_47.setTransform(337.5,342.7,0.809,0.809);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#008837").s().p("AgtAPQAIghAPgQQAQgQAdAGQAQADANAGQgHgBgHACQgPADgEAMQgGAThAAvQACgOAEgSg");
	this.shape_48.setTransform(352.4,327.4,0.809,0.809);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#008837").s().p("AgEAQQgbgNgPgOIgJgMIAZADQAdAGAQALQAbARAOgFQgEAHgKAFQgIADgKAAQgNAAgPgIg");
	this.shape_49.setTransform(353.9,343.6,0.809,0.809);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#008837").s().p("AgVAAQADgLASgTQAPgTABgEQABgFAEAXIAHAuQAEAUgeAOIgeAKQACglAFgSg");
	this.shape_50.setTransform(321,338.5,0.809,0.809);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#008837").s().p("AgoAKIgngTIAZgDQAfgFAZgGQAbgHAcAYQAOALAJANQgiAAgcAHIgIABQgRAAghgQg");
	this.shape_51.setTransform(314,346.2,0.809,0.809);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#008837").s().p("AgWAHQgBgKANgcIANgbIATAuQAFAMgQAfIgQAcQgQgigBgSg");
	this.shape_52.setTransform(316.3,333.1,0.809,0.809);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#008837").s().p("AgrALIghgNIAcgFQAhgGAWgGQAXgHAZAPQANAHAJAJQADACgSAGQgUAHgZACIgHAAQgVAAgggLg");
	this.shape_53.setTransform(306.3,334.2,0.809,0.809);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#008837").s().p("AgWgKQgBgMARgWIAQgTIAFANQAGASABASQACASgTAgIgSAcg");
	this.shape_54.setTransform(311.6,324.1,0.809,0.809);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#008837").s().p("AAJAUQgTAAghgUIgegUIAWAEQAcAEAXgEQAZgCAbASQAOAKAIAKIghABIgggBg");
	this.shape_55.setTransform(302.9,325.9,0.809,0.809);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#008837").s().p("AgXAEQgEgPADghIAEgfIAKATQAMAXANAUQAOATgEAlQgCASgFAPQgigwgHgYg");
	this.shape_56.setTransform(306,316.8,0.809,0.809);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#008837").s().p("AAgAiQgigCgVgQQgUgQgLgRIgIgPIATgBQAYADAUATQAiAdAcAOQgLACgOAAIgGAAg");
	this.shape_57.setTransform(335.7,350.5,0.809,0.809);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#008837").s().p("AgiAZQAHgSAMgSQANgSAVgHQALgDAJAAQADAXgLAWQgGAOggALIggAJIAFgPg");
	this.shape_58.setTransform(328.3,345.6,0.809,0.809);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#008837").s().p("AgcAOQgGgVARgIQAbgMAJgHIAKAiQAGAUgaAJIgbAGQgGgKgEgLg");
	this.shape_59.setTransform(332.4,337.4,0.809,0.809);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#008837").s().p("AAiAdQgZAAgQgKQgRgKgRgPIgNgOIAhgHQAhgFALANQASAUAOAbQgHABgKAAIgEAAg");
	this.shape_60.setTransform(331.2,323.5,0.809,0.809);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#008837").s().p("AgFAZQgZgFgQgMIgMgKIAUgPQAYgNAUAIIA1AUQgGAIgMAHQgRANgTAAIgKgBg");
	this.shape_61.setTransform(365.3,304,0.809,0.809);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#008837").s().p("Ag8AaIASgbQAWgcAXAFQAnAHATAAQgFALgJAKQgTAWgWAAg");
	this.shape_62.setTransform(330.1,330.1,0.809,0.809);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#008837").s().p("AAEAgQgUgGgWgeIgTgeIA7ARQAfAJAZAkQgGADgJACQgIACgIAAQgLAAgMgDg");
	this.shape_63.setTransform(320.9,321.6,0.809,0.809);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#008837").s().p("AgYATQgLgNgEgnIgCgmIA8A2QASAQAEAmQACATgCAQQgvgggSgVg");
	this.shape_64.setTransform(326,312.9,0.809,0.809);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#008837").s().p("AgMAZQgUgLgTgPIgPgOIAfgLQAjgJASANIAxAiQgMAIgQAFQgQAFgNAAQgNAAgJgFg");
	this.shape_65.setTransform(338.5,317.9,0.809,0.809);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#008837").s().p("AgbArQACgaADgMQAFgRAUgaQAKgOAKgJIAJAzQAEAUgkAeIggAWQADgCACgRg");
	this.shape_66.setTransform(339.3,302.5,0.809,0.809);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#008837").s().p("AgoASIgogDIA7gdQAYgMApAPQAVAHAQAJQggAPgcAAIg9gCg");
	this.shape_67.setTransform(326.7,302.8,0.809,0.809);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#008837").s().p("Ag9gYIBDgBQAbAAARAZQAJANADANg");
	this.shape_68.setTransform(325.9,296.3,0.809,0.809);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#008837").s().p("AgSAKQgQgFgOgSIgLgSIAWgHQAagFAWAJQAXAJAPAhQAIARADAPg");
	this.shape_69.setTransform(341.9,338.6,0.809,0.809);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#008837").s().p("AgeAFQgHgWAJgaIAMgVIAaAaQAaAegCAUQgDAVgNASIgNAOQgXgXgMglg");
	this.shape_70.setTransform(344.5,349.4,0.809,0.809);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#008837").s().p("AAGArQgbgBgYgQIgTgPIAUgcQAagcAXAEQAlAHAXAHQgDASgJARQgRAjgcAAIgCAAg");
	this.shape_71.setTransform(355.4,335.7,0.809,0.809);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#008837").s().p("AgDAcQgTgCgagbIgWgaIAZABQAdABAWgCQAXgCAXAYQAMAMAHAMQgjAJgaAAIgNAAg");
	this.shape_72.setTransform(341.3,327.3,0.809,0.809);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#008837").s().p("AgbAQQgQgLgCgjIABggIARAMQAVANAVAMQAWALAHAnQADAUgBATIhJgwg");
	this.shape_73.setTransform(343.5,308.7,0.809,0.809);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#008837").s().p("AgHAfQgagIgZgZIgUgaIAjgFQAogDAUANQAiAVAcAVQgLAGgRAEQgSAGgQAAQgOAAgKgEg");
	this.shape_74.setTransform(352.9,320,0.809,0.809);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#008837").s().p("AgoAdIgYgJIAQgPQAUgPASgGQAdgLAaAFIAUgMIgFAaIAEASQgDATgkAFIgXABQgWAAgUgGg");
	this.shape_75.setTransform(352.9,308.4,0.809,0.809);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#008837").s().p("AgZAJQgQgJgIggIgEggIAPAHQAUAJAdAKQAdAKAKAvQAEAYgBAWQg1gqgZgOg");
	this.shape_76.setTransform(356.3,295.4,0.809,0.809);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#008837").s().p("AgqAtQAEgPAHgRQANgfASgIQAfgOAMgEIgDAVQgHAXgWANQgWAQgRAJIgOAHIAAAAg");
	this.shape_77.setTransform(375.3,278.9,0.809,0.809);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#008837").s().p("AgOAWQgVgRgSgXIgNgVIAsgBQAvACAMARQATAcALAfQgMADgQAAQghgBgUgSg");
	this.shape_78.setTransform(371,295,0.809,0.809);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#008837").s().p("AgRAUQgQgNgHgeIgFgcIARADQAVAEAZAMQAZAMACAlQABATgEAQQgjgLgYgVg");
	this.shape_79.setTransform(366,280.5,0.809,0.809);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#008837").s().p("AgRANIgpgVIAqgJQAvgJAcABIAAAxQgJACgKAAQgZAAgggNg");
	this.shape_80.setTransform(374.2,289.3,0.809,0.809);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#655B0C").s().p("AkqGTQg7hGgChJQgFhzCOhcQCIhXCkhnQBehDgSg2QgJgbAMAEQADABAiAWQBKAwAjgmIAOgNQADgEADgIIAFgMQAYgmADgsIgBgcQgCgcABgBIAHApQACAygVAsQgIAcgJAMQgTAXgaAHQgYAFgYgJIgxgZQgRgIAJAcQACAGgDAFIgFAKQgHAlhcA7QiVBZh3BNQiVBiANB6QAHBJA+BDQAHAIgSACQgJgIgMgOg");
	this.shape_81.setTransform(342.1,387,0.809,0.809);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#655B0C").s().p("ADvMmQgGgdgIgNQAEAGAJg/QALhJAAhRQACj3hViIQhkigg/iwQg9iuAKhVQAIhEh8ioQh5iXAGABQAGAAAqAtQAvAzAsA5QB/CkgJBIQgJBTBBCyQBBCvBgCfQBSCHADDmQADC6gjBRQgDAHgCAAQgCAAgCgGg");
	this.shape_82.setTransform(285,418.4,0.809,0.809);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4C5300").s().p("AD3GaQgSgQAIgLQAdgogJhHQgLhbhPhKQhghbhMh/QgyhSgVg4QgHgVhjhMIhdhHQAMAGBZBEQBkBNAHAVQASAwA5BaQBSB+BhBcQBPBLAJBdQAFA7gWA2QgCAHAAAKIABAJQgCAAgIgIg");
	this.shape_83.setTransform(285.3,367.1,0.809,0.809);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4C5300").s().p("AnvF9QgDgcAEgGIAaglQARgYAKgGQAPgJAvhlQAyhtAMgXQAzh5ArhfQBTi6AlgMQAPgEAhgNQAfgMAYgCQBJgFBTBGQBQBECMAjQBGARAzAEQg1ABhEgNQiGgahQhFQhRhGhIADQgYABgfAKQggANgPAEQgkAMhQC6QgpBfgxB5Ig9CEQguBlgOAJQgPAKgdA2IgbA0IgEgbg");
	this.shape_84.setTransform(336.7,434,0.809,0.809);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#655B0C").s().p("AnbGZIAIAAQgLhFABhQQAAimA8g+QAgggAxgEQAWgBBDAGQA4AHAdgIQAsgNAagwQAohKAih9QAchqAUgWQAhgiCAAOQCBAOAjArQAhApBbAvIAAAMQhYgpghgpQgjgrh9gRQh+gQgfAiQgUAWgbBpQghB9gnBLQgZAwgrANQgdAJg2gFQhCgGgWADQgwAFgfAgQgxA1gIB+QgEBPAMBbQABAJgWAAIgBAAIABAEQgKgDABgBg");
	this.shape_85.setTransform(340.3,407.8,0.809,0.809);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4C5300").s().p("AiINPQgKgJAJgGQEvjgg3jgQgUhVgphbIhFiPQgmhNgNgyQgShEALg/QAQhbA9hRQAUgbACgMQACgRgYgUQgWgSgXgJQgYgGgJgFQgfgNgVhKQgXhQAahtQAXheAPgDQAGAAgdBcQgaBuAWBLQAVBKAjAQQALAFAZAIQAYAKAWARQAYAUgCARQgBAMgVAcQg9BRgQBbQgLA/ASBEQANAyAmBNIBFCPQApBbAVBUQAoCliUCqQgtA1g7AwIgyAlIgIgGg");
	this.shape_86.setTransform(308.7,401.9,0.809,0.809);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#655B0C").s().p("AkJH6QgGgGABgEQABgeANgkQATg4Asg2QAmgvBcgnQAhgOAJgLQAOgQgJgbQgmhugHg6QgOh0BCghQBKglAZgcQAWgYACgpQACgiBLhlQBIhiAJAEQABAAhFBkQhJBpgCAfQgCAogXAZQgZAchKAlQhBAhAOBzQAHA5AmBwQAIAbgNAQQgJALgiAOQhbAngmAvQguA4gTA6QgMAkgBAdIAAAGQgEgBgFgFg");
	this.shape_87.setTransform(349.8,323,0.809,0.809);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#655B0C").s().p("AA7FJQgjgdgIgJQgug2A3hVQA9hbgehoQgUhDg/hUQgmgygXg+QgIgYgJgjQACAAAXA3QAdBEAjAuQBBBWAUBBQAhBog8BcQg1BRAnAzQALAPAdAWQAdAWAIALQACACgJAFIgGAGQgHgQgagVg");
	this.shape_88.setTransform(315,352,0.809,0.809);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#655B0C").s().p("AjTTlQBzkvCwiQQCHhugci8QgWiWhwiVQhtiEgUgjQgQgaAIgTQAIgSAlgWQBNgtAchIQAehNgphSQgcg5gCg7QgBgrAMgeQAFgLADgDIAQgFQAggOANgRQAWgdgOguQgOgtgdgqQgQgVAOgSIAggmIAkglQAQgRAXgPQAOgQgCgzQAFgxgBgJQgBgDgsgyQgwg1gFgYQgDgSAVgcQALgOAYgYIAigjQAGgHAWgNQg3A7gbAiQgVAcADASQAFAYAwA1QAsAyABADQABAJgFAxQACAzgOAQQgXAPgQARIgkAlIggAmQgOASAQAVQAdAqAOAtQAQAygaAiQgRAVgeALIgHADQgFAEgBACQgMAcgBAkQgCA7AeA/QApBSgfBRQgcBLhNAtQglAWgIARQgHARAQAZQAVAiBtCBQBwCVAXCgQAcDFiGBtQhYBHhQCMQg6Blg0CBg");
	this.shape_89.setTransform(318.4,390.4,0.809,0.809);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#655B0C").s().p("AgSVjQg1lth6ipQhriVBIjIQA8ikCPiBQAoglA+gwQAygpAOgOQAVgXgDgUQgEgVgfgfQhDhDgLhWQgLhdA6hOQAsg6AMg+QAHgngFggQgBgDgEgEIgGgGQgbgSgMgcQgSgpAbgyQAYgtAmgkQAUgTgJgWQgNgcgKgUIgbgwQgYgdgHgOQgKgUAOg2QAGg1ADgIQABgEA3gqQA7gsAKgZQAIgSgPgjQgLgagZgxIgXgqQARAPAGAMIAaAuQASAfAHARQAPAigIATQgKAYg7AtQg3ApgBAFQgEAHgGA1QgNA3AKAUQAHAOAYAdIAbAwQAKATAMAdQAKAWgUATQgnAlgYAsQgYAtAQAkQAJAVAcAWQAIAHAHAEQACACACANQAFAjgLAuQgPA9goA1Qg7BNAMBZQAKBSBDBDQAgAgADAVQAEAXgVAYQgQASgwAoQhEA3giAfQiQCCg4CaQhGC/BrCVQCODFArFbg");
	this.shape_90.setTransform(315.8,409.5,0.809,0.809);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#008837").s().p("AgqAOIgrgJIAbgCQAegDATgJQAegOBBAKQggASgfAKQgJADgOAAQgQAAgagEg");
	this.shape_91.setTransform(265.3,335.9,0.809,0.809);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#008837").s().p("AAIAJQgUgEgfgMIgbgMIAWADQAZADAXAAQAUAAAbAQQAOAIAKAJg");
	this.shape_92.setTransform(269.9,333,0.809,0.809);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#008837").s().p("AgWANQgCgPAOgXQAHgLAGgJIAMANQALAQgEANQgHAUghAdIgEghg");
	this.shape_93.setTransform(279.1,336.8,0.809,0.809);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#008837").s().p("AAIAMQgRgDgbgKIgZgLIAYADQAaACAPgFQARgGAWAQQAMAHAHAJIgSABQgSAAgSgDg");
	this.shape_94.setTransform(277.7,331.5,0.809,0.809);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#008837").s().p("AgaAdQAJgbALgIQgMAJAagbIAdgeIACAgQgBAggKAIQgJAHghASIgYAMQAEgDAIgXg");
	this.shape_95.setTransform(284.7,334.8,0.809,0.809);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#008837").s().p("AgGATQgQgBgWgMIgUgLIARgBQATgDAWgGQAVgHAbAIQAOAEAIAFQgrAYgXAAIgEAAg");
	this.shape_96.setTransform(286.4,327.8,0.809,0.809);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#008837").s().p("AgMAmQgPgZADgOIAOg6IARAWQASAZAAAMQABAVgXAnQgHgJgIgNg");
	this.shape_97.setTransform(295.7,329.9,0.809,0.809);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#008837").s().p("AgtALIgegLIAVgCQAXgFASgJQARgJAmAPQAqAQgKAAQgmAMgeACIgEABQgRAAgegKg");
	this.shape_98.setTransform(289.4,322.8,0.809,0.809);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#008837").s().p("AAXAUIgSgBQgHgCgWgRIgYgTIAwgCQARgBASAWQAJAKAFAMIgagCg");
	this.shape_99.setTransform(297,319.9,0.809,0.809);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#008837").s().p("AgqARIgcgNIAXgIQAZgKAOgIQANgIAiALQARAFAOAHQgGAHgMAGQgWAPgVAEIgJABQgSAAgYgJg");
	this.shape_100.setTransform(293,311,0.809,0.809);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#008837").s().p("AgxANQAGgZAcgEQAsgJAXgNQgDALgGAMQgMAWgQAGIhBAZQgCgMADgNg");
	this.shape_101.setTransform(300.3,301,0.809,0.809);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#008837").s().p("AgQAkQAAgVgIgQQgJgRAagTQAMgKAPgGIAHAPQAEAUgMAUQgMAVgNASIgMANQACgHAAgLg");
	this.shape_102.setTransform(288.9,301.5,0.809,0.809);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#008837").s().p("AgeAMIgUgKIAFgMQAKgLAcAIQArAMAPAFQgIAHgfAGIgMABQgOAAgQgGg");
	this.shape_103.setTransform(283.3,291.4,0.809,0.809);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#008837").s().p("AgPAfQgRgaAPgKQAXgTALgdQALAygEALQgDANgRAhQgLgLgIgMg");
	this.shape_104.setTransform(276.3,283,0.809,0.809);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#008837").s().p("AgfARIgUgHIADgKQAJgLAaABQAZACAXgGQALgDAGgDQAAAIgGAJQgKAQgWAFQgKADgJAAQgMAAgOgEg");
	this.shape_105.setTransform(282.3,286,0.809,0.809);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#008837").s().p("AgZAjQgIgTAMgLQAUgTAaglQAJA8gJAMQgGAIgSAMIgPALQgHgHgEgKg");
	this.shape_106.setTransform(289.9,291.7,0.809,0.809);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#008837").s().p("AAHAqQgegMgHgRQgHgRABgYIADgVIAWAVQAXAWAEAMQAIAVANAXQgOgDgQgFg");
	this.shape_107.setTransform(282.8,300.6,0.809,0.809);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#008837").s().p("AgCAkQgYgSAGgRIAQgzIAKASQAMAUACAKQADAQAAAlQgNgGgMgJg");
	this.shape_108.setTransform(274.2,292.6,0.809,0.809);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#008837").s().p("AgTAHQgKgMANgcIAOgZIAPASQAPAWgFATQgJAfgLAbQgHgfgPgVg");
	this.shape_109.setTransform(272.8,303.1,0.809,0.809);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#008837").s().p("AgnAYIgcgMIATgJIAogVQARgKAfABQAQAAAMADQgYAeggARQgLAFgNAAQgMAAgPgEg");
	this.shape_110.setTransform(293.7,279.8,0.809,0.809);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#008837").s().p("AAAAhQgXgPAAgNIACgxIAVAMQATANACAKQADAQAAAmQgMgFgMgHg");
	this.shape_111.setTransform(334.9,287.3,0.809,0.809);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#008837").s().p("AAOAUQgTgDgdgKIgYgJIAVgMQAagKAUAIQAhAMARgCQgDAHgHAHQgLANgRAAIgHgBg");
	this.shape_112.setTransform(344.9,287.1,0.809,0.809);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#008837").s().p("AAFAYQgNgGgSgXIgRgYIARAFQAUAGAWABQAVACAGAWQACALgCAMIgHAAQgOAAgRgGg");
	this.shape_113.setTransform(337.5,280.5,0.809,0.809);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#008837").s().p("AAHASQgUgDgdgKIgYgJIAagKQAdgJATALQAgAQAbAEQgVALgZAAIgOgBg");
	this.shape_114.setTransform(358.5,261.8,0.809,0.809);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#008837").s().p("AgIAgQgUglAJgPQANgZAHgUIAKAYQALAbAAANQABAUgKAvQgLgPgKgTg");
	this.shape_115.setTransform(349.2,258.2,0.809,0.809);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#008837").s().p("AgFATQgTgEgZgLIgVgJIANgLQAUgJAhALIBLAbQgeAIgXAAQgNAAgKgCg");
	this.shape_116.setTransform(351.8,269.5,0.809,0.809);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#008837").s().p("AAVAyQgYgRgMgXQgNgUgIgcIgFgYIAYATQAZAVAEAOQAHAXAXAvQgJgEgMgIg");
	this.shape_117.setTransform(341.5,268.7,0.809,0.809);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#008837").s().p("AggANIgagGIARgPQAVgPAUAIQAiAMAZACQgaAUgXAAQgNAAgdgGg");
	this.shape_118.setTransform(348.5,276.6,0.809,0.809);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#008837").s().p("AgiAAQAAgPAlgJQASgFATgCQgLAQgPANQgIAHgXAOIgWANQADgKACgWg");
	this.shape_119.setTransform(230.5,320,0.809,0.809);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#008837").s().p("AgkAKIgWgKIAYgEQAcgEAMgHQAOgGAWAQQAKAHAIAJIgyAGIgIABQgRAAgVgIg");
	this.shape_120.setTransform(234,313.5,0.809,0.809);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#008837").s().p("AgYAGQgFgUAZgZQALgMANgIIAFATQACAYgKASQgLAUgPAVIgOARQAHgVgIghg");
	this.shape_121.setTransform(241.7,317.3,0.809,0.809);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#008837").s().p("AALAMQgSgEgggMIgegNIBGgGQATgCAbAZQANALAKANg");
	this.shape_122.setTransform(242.3,309.1,0.809,0.809);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#008837").s().p("AgYgMQgGgRAPgRQAHgIAIgEIAOATQAOAWgBANQgBAUgkArQgFgtgJgag");
	this.shape_123.setTransform(253.5,315.3,0.809,0.809);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#008837").s().p("AguAFIgbgXIAQgBQAVgCARgEQATgDAmATQAUAJAQAKQghAMgkAEIgEAAQgTAAgcgVg");
	this.shape_124.setTransform(253.9,306.4,0.809,0.809);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#008837").s().p("AgSAxQgPgYAIgUQAIgSAJgeIAIgZIARAVQARAagHAVQgKAggTAlQgJgHgHgNg");
	this.shape_125.setTransform(265.7,310.6,0.809,0.809);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#008837").s().p("AgCASQgUgBgSgNIgNgMIAPgCIAmgGQATgEATAKQAKAFAGAFQgGAFgLAFQgSAIgRAAIgEAAg");
	this.shape_126.setTransform(261.8,302.4,0.809,0.809);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#008837").s().p("AgBAUQgSgFgQgUIgMgVIAbAKQAbAJANgBQANgBAIARQAFAKACAJQgUAAgdgHg");
	this.shape_127.setTransform(318.9,283.4,0.809,0.809);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#008837").s().p("AhHAhQgNgPAJgSIALgRIAcgKIADgGIAUgSQAXgQAWAHQAjAMANAQQggAJgVADQgOABgVgGIgTgGIgJAEIgHAKIAFAJQAFALADAMQAEATgMAdQgNgIgUgWg");
	this.shape_128.setTransform(330.9,287,0.809,0.809);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#008837").s().p("AADARQgOgBgVgQIgTgOIA2gDQAOAAATARQAKAJAGAJIgxgBg");
	this.shape_129.setTransform(324.4,279.1,0.809,0.809);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#008837").s().p("AgkAAQAPgTAUABQAgABARAEQgDAGgFAHQgJAMgLAAQgKAAgdAEIgcADg");
	this.shape_130.setTransform(333.8,275.6,0.809,0.809);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#008837").s().p("AgpAKIgWgKIAOgDIAkgNQATgHAeAOQAQAGALAIQgXALgiADIgGAAQgTAAgWgJg");
	this.shape_131.setTransform(324,272.3,0.809,0.809);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#008837").s().p("AgkAGQAIgPAVAAQAVAAAPgFQAIgEADgCQgUAegOAHQAFgDgyAIg");
	this.shape_132.setTransform(331.9,267.9,0.809,0.809);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#008837").s().p("AgkANIgcgPIAPgEQARgGAPgHQAQgIAhAQQAXALAKAHIgSADQgYAEgOAHQgFACgFAAQgOAAgVgKg");
	this.shape_133.setTransform(321.1,264.5,0.809,0.809);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#008837").s().p("AgkAVQAEgaAXgMQAjgRAMgLIgCAZQgDAagJAGIg8AiQgCgMACgNg");
	this.shape_134.setTransform(327.9,257.8,0.809,0.809);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#008837").s().p("AgFArQgRgaADgRIACgyQABgZAJAOQAJAPAJAgQAIAbABALQAAAMgJAfQgJgKgHgOg");
	this.shape_135.setTransform(321.1,251.5,0.809,0.809);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#008837").s().p("AgOAMQgLgJAPgUQAHgKAIgJIABAJQABAMAFANQAJATgCAUQgSgKgPgPg");
	this.shape_136.setTransform(268.7,293.2,0.809,0.809);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#008837").s().p("AgLAKQgNgVAIgGQANgJASgDIABAHIADAPQAFALgWAaQgHgKgGgKg");
	this.shape_137.setTransform(270.7,287.9,0.809,0.809);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#008837").s().p("AgsAaQAAgFACgGQAFgNAPgGQAWgMAtgKQgXAYgVARQgMALgRABg");
	this.shape_138.setTransform(262.3,290.3,0.809,0.809);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#008837").s().p("AgiADQgEgUAVgEIA1gJQgTAVgRAGQgLAEgIAPIgHAPQgGgRgCgLg");
	this.shape_139.setTransform(267,282.8,0.809,0.809);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#008837").s().p("AgmAGIgNgHIAPgCIAcgGQAPgFAtAVIg3AEIgGAAQgPAAgOgFg");
	this.shape_140.setTransform(258.7,283.2,0.809,0.809);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#008837").s().p("AAZAiQgWgFgMgPQgOgOgMgSIgJgQIATAEQAUAGAIAJQAOAPAcAjIgGAAIgOgBg");
	this.shape_141.setTransform(257.5,275.7,0.809,0.809);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#008837").s().p("AgdAbQAAgWASgLQAcgRANgXQgOA8gOAHQgHAEgLAMIgJAKQgEgJAAgLg");
	this.shape_142.setTransform(263.9,277,0.809,0.809);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#008837").s().p("AgRAiQgKgUAMgPQASgZAIgYQAQAvgGANQgHAPgTAaQgHgHgFgKg");
	this.shape_143.setTransform(261,271.3,0.809,0.809);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#008837").s().p("AgMAbQgSgYAKgLQARgVAHgTIALAWQALAYgCAKQgDASgNAXQgKgKgKgMg");
	this.shape_144.setTransform(290.6,265.2,0.809,0.809);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#008837").s().p("AgXgSQgGgLgPgEIgNgBIAYgIQAcgFARAOQASAPAQAgQAIARAEANQhGgsgLgSg");
	this.shape_145.setTransform(273.2,250.7,0.809,0.809);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#008837").s().p("AggATIgRgLIAKABQANgCAOgKQANgKAagFQAMgDAKgBQAAAFgFAHQgLANgWAMQgNAIgNAAQgIAAgJgEg");
	this.shape_146.setTransform(275.1,266,0.809,0.809);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#008837").s().p("AADAqQgfgNgBgTIgDgsQgCgVACAFQACADAUASQATASAGALQAJARAKAjQgQgDgPgHg");
	this.shape_147.setTransform(305.7,261.2,0.809,0.809);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#008837").s().p("AgMAYQgSgFgWgBIgUgBIARgXQAWgWAaAGQApAKAnADQgOAJgSAJQgdAPgRAAIgHAAg");
	this.shape_148.setTransform(313.6,268.5,0.809,0.809);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#008837").s().p("AgCAdQgXgdACgLIAIgsIASAaQATAbABAKQADAQgHAgQgLgMgKgPg");
	this.shape_149.setTransform(308.4,256.1,0.809,0.809);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#008837").s().p("AgKAVQgYgDgVgGQgSgGACgCIARgPQAUgOAYAHQAkAKAvAGQgMAGgQAGQgdALgUAAIgGAAg");
	this.shape_150.setTransform(318.3,257.2,0.809,0.809);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#008837").s().p("AADAiQgYgegDgRQgDgSACgQIACgNIAUASQAUAVABALIAJBHQgMgMgMgPg");
	this.shape_151.setTransform(311,247.6,0.809,0.809);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#008837").s().p("AgtAUIgUgBIARgTQAVgSAYADQAmAFAfgKQgKAKgOAKQgbASgSABIgfACIgLgBg");
	this.shape_152.setTransform(319.6,249.3,0.809,0.809);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#008837").s().p("AgOApQgMgkAJgRQAIgTAHgWIAEgSIAKAdQALAggBAOQgBAWgWAtQgHgNgGgRg");
	this.shape_153.setTransform(314.7,240.6,0.809,0.809);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#008837").s().p("AgzAeIAPgKQARgOAQgQQAPgSAVgDQALgBAIACIgEAOQgGAQgQAPQgQAQggABg");
	this.shape_154.setTransform(294,272.6,0.809,0.809);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#008837").s().p("AAOAeQghgLgJgNQgJgNgFgQIgDgOIATADQAYAGAOASQAYAcAKATQgPgCgRgFg");
	this.shape_155.setTransform(299.9,267.9,0.809,0.809);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#008837").s().p("AgCAcQgbgJABgTIACggIAJAEQAMAHARAHQASAHgBAVQgBAKgEAJQgNgBgNgEg");
	this.shape_156.setTransform(294.3,260.2,0.809,0.809);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#008837").s().p("AgtAaIAFgPQAGgQAIgNQAIgMAgAEQARACAPAFQgMAWgWAPQgOAJgXABg");
	this.shape_157.setTransform(292.3,247,0.809,0.809);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#008837").s().p("AgjANIgUgPIAugSQARgIAaAMQANAGAJAIQgCAEgGAGQgNALgXAFIgKAAQgRAAgUgLg");
	this.shape_158.setTransform(255.6,228.5,0.809,0.809);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#008837").s().p("AAAAZQgUAAgXgVIgSgUIANgBQARgBAXgFQAUgEAbAaQAOAMAKAOg");
	this.shape_159.setTransform(294.8,253.2,0.809,0.809);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#008837").s().p("AgfAfIgQgEQgDAAAOgTQAPgSARgGIA0gQQgDAOgIAOQgOAdgTAFQgJADgLAAQgIAAgHgCg");
	this.shape_160.setTransform(301.5,245.2,0.809,0.809);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#008837").s().p("AgeAiQgFgjAOgPQAVgXAYgcIAGAkQAGAlgIAMQgNAVglAeQgGgQgCgTg");
	this.shape_161.setTransform(294.9,237,0.809,0.809);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#008837").s().p("AgdAYIgegMIAmggQAPgNAiAJQASAEAOAHQgPAUgaARQgIAFgMAAQgMAAgQgFg");
	this.shape_162.setTransform(284.1,241.7,0.809,0.809);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#008837").s().p("AAEAmQgogcgBgUIgCgwIAYAVQAYAaAIAPQAGAMAIAZQAGAQADACQgQgIgUgNg");
	this.shape_163.setTransform(280.3,227.1,0.809,0.809);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#008837").s().p("Ag4AMIgVgIIAfgPQAkgNAZALIA/AbQhFAFgZAAQgRAAgXgHg");
	this.shape_164.setTransform(292.1,227.4,0.809,0.809);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#008837").s().p("AgvAAQALgYAZAAQAnAAAZACIhpAvQABgNAEgMg");
	this.shape_165.setTransform(291.2,221.2,0.809,0.809);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#008837").s().p("AgtAHQAHgfAUgJQASgIAbAFQANADAJAEQgCAIgFAJQgJAQgNAGIhEAcQAAgOADgRg");
	this.shape_166.setTransform(285.6,261.3,0.809,0.809);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#008837").s().p("AgEAxQgRgSgHgTQgHgTASgdQAKgOAKgLIAPAUQAPAZgCAVQgCAWgKATQgFAKgEAGQgHgFgHgIg");
	this.shape_167.setTransform(285.4,271.5,0.809,0.809);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#008837").s().p("AgtAIIgUghIAOgEIApgKQAUgEAeAbQAPANALANQgEAHgKAIQgTAOgbABIgDAAQgYAAgYggg");
	this.shape_168.setTransform(271.9,258.5,0.809,0.809);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#008837").s().p("AgjAYIgagGIAMgWQARgYAWACQAiAEAmgEQgFANgKANQgSAZgSACIgLAAQgOAAgVgDg");
	this.shape_169.setTransform(283.5,250.6,0.809,0.809);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#008837").s().p("AgkAXQgDgkASgLQAdgRATgSIAIAgQAHAfgNALIg7AtQgFgRgBgUg");
	this.shape_170.setTransform(277.5,233,0.809,0.809);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#008837").s().p("AgnAcIgegKIAPgNIAjgaQARgNAlADQATABAQAEQgFALgJANQgSAYgWAHQgLAEgMAAQgOAAgSgFg");
	this.shape_171.setTransform(270.8,243.7,0.809,0.809);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#008837").s().p("AgOAgQgjgFgHgSIAAgQIgLgZIAWALIAQgBQATAAASAGQAeAKAeAYQgHAFgNAEQgUAGgWAAIgUgBg");
	this.shape_172.setTransform(268.2,232.7,0.809,0.809);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#008837").s().p("AgoASQgCgsAagKQAogPAOgJIADAdQAAAfgNAIQgNAJgZAXIgXAVQgGgUgBgXg");
	this.shape_173.setTransform(262.2,220.4,0.809,0.809);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#008837").s().p("AAkAkIgrgYQgXgMgMgWIgHgUIAsARQATAIAUAdQAKAQAGAOIAAABIgOgHg");
	this.shape_174.setTransform(240.7,204.7,0.809,0.809);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#008837").s().p("Ag2AkIADgSQAFgVAHgQQAJgRAqgBQAXgBAUACQgKAggZAZQgQARgeABg");
	this.shape_175.setTransform(248.3,220,0.809,0.809);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#008837").s().p("AgjAQQgGgiAVgMQAigSAVAAIACAbQAAAcgMAMQgMANgTAKIgSAHQgIgPgDgSg");
	this.shape_176.setTransform(249.6,206.3,0.809,0.809);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#008837").s().p("Ag/ADQgfgiBRAIQAnAEAuALQgVAQgcAKQgUAHgQAAQgeAAgUgWg");
	this.shape_177.setTransform(242.5,214.6,0.809,0.809);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#3A5B0C").s().p("AFqGRQgHgEADgEQAsg/gJhGQgPhzijhdQjhh5hCglQhkg3gOgjIgHgJQgFgFABgGQADgagPAHQgXARgSAHQgVAJgXgGQgagGgXgWQgHgHgHgMIgMgSQgegqgJgwIgCgnQACADAJA0QANApAfAkIAHALQAFAIADAEQAEAEANAIQApAkA7gtQAbgVAEgBQAKgEgDAaQgFAzBoBAQBGArEBCIQCaBXAVBtQAOBFgoBCIgPAWIgJgCg");
	this.shape_178.setTransform(294.1,307.5,0.809,0.809);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#655B0C").s().p("AgOL6QgzhNgmiwQgwjZAwiAQA4iXAXilQAXipgchPQgXhEBTibQAdg2AhgwQAdgrAGAAQAGgBhSCPQhPCfAXBAQAbBRgVClQgUCmg7CYQgyCBA4DpQATBNAZBFQAXA8ACgGQgEAMABAcQAAAGgCAAQgCAAgFgHg");
	this.shape_179.setTransform(352.7,337.3,0.809,0.809);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#4C5300").s().p("AiNFzQghg0gIg3QgMhZA6hGQBIhXAyh4QAihWAFgsQADgVBNhHQBEhAAMgGIhJBCQhMBJgDATQgHA0gcBOQgtB5hHBWQg6BGAKBWQAHBDAkAmQAKALgNAPQgGAIgDAAQAAgPgGgKg");
	this.shape_180.setTransform(343.3,288.7,0.809,0.809);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#875B0C").s().p("AG9EVQgQgJhChfQhFhogRgWQhJhyg9hbQh1ivgjgLIgwgQQgfgKgYgBQhFgDg+BCQg8BBh6AZQgmAIgoADQgcACgGgBIBugUQB9giA9hAQA/hCBHAFQAYACAgALIAxARQAlAKB3CwQA+BbBLByQARAWBHBnQBDBgAQAIQALAGAWAXIAgAjQAIAJADAwQhDhfgagOg");
	this.shape_181.setTransform(312.1,352,0.809,0.809);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#4C5300").s().p("AKxGDIAIAAQABABgIADIgBgEgAKwGDQgUAAgBgIQgIhWgXhMQgih3g7gxQgkgfgvgFQgVgCg9AFQgzAFgegJQgrgMgjguQg1hGg7h3QgxhkgYgUQgkghhzAQQh0APgXApQgXAphPAoQhOApgzgDQgpgChWAsQhOAsgDAAQgJgCBTguQBWgvArACQAzACBRgtQBPgsAYgqQAYgoB3gOQB1gNAmAhQAYAUAzBkQA8B3A3BGQAjAuAsAMQAeAHAzgGQA9gGAWABQAvAEAlAeQBHA7AmCdQASBNAEBAg");
	this.shape_182.setTransform(288.8,327.2,0.809,0.809);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#655B0C").s().p("AAoKlQiwihABicQABhQAThWIAiiHQAThJACgwQAChAgZg8QgjhWhMhMQgagagEgMQgGgQATgTQARgQAVgJIAggNQAegPADhGQAEhHgxhpQgwhXAGABQAPACAqBaQAxBmgEBMQgEBGgaANIgdAKQgUAJgRAQQgTATAGAQQAEAMAaAaQBMBMAjBWQAZA8gCBBQgCAvgTBJIgiCIQgSBWgBBQQgDDUFQDUQAKAFgHAJQgEAEgCABQhZgxhZhRg");
	this.shape_183.setTransform(337.6,321.6,0.809,0.809);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#2D5B0C").s().p("AFkHfQgHgcgTghQgfg3g4g1QgugthgglQgigNgLgLQgRgPADgZQALhpgGg3QgNhthEgfQhPgjgegbQgbgXgLgmQgIgdhdhkQhXhfABAAQAHgEBaBdQBeBgAJAgQALAmAbAYQAeAaBOAjQBFAgAMBtQAHA3gMBoQgCAaAQAPQAMAKAiAOQBfAlAvAsQA1AzAfA2QAUAhAIAdQABAEgEAFQgEAFgEABg");
	this.shape_184.setTransform(273.6,246.9,0.809,0.809);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#875B0C").s().p("AgDFVQgKgFABgCQAFgLAVgUQAXgWAIgNQAagwhFhOQhMhWAIhjQAFg8ArhTQAWgrAMhBQAKgzACAAQAAAhgDAXQgIA6gYAvQgqBQgEA/QgGBiBNBXQBIBQggAzQgGAJgbAcQgTATgDAQIgGgGg");
	this.shape_185.setTransform(312.4,274.4,0.809,0.809);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#655B0C").s().p("AFqV9QgPiIgFidQgKk5A1hrQBFiOhniwQhTiPijh6IhyhTQgzgkgTgUQgYgZAAgWQgBgWAXgfQAxg/gIhOQgJhUhIhJQgygygcg7QgVgrgDggQgBgNACgCIAMgLQAVgVAEgUQAHghghgrQgggqgtgjQgXgSAEgVQAGgbAFgSIAPguQARgcADgMQAFgUgZgzQgRgygFgIQgDgDg8goQhDgqgPgXQgLgSAHghQADgQAKgdIAOgrQADgMANgOIgMApQgNAtgFAZQgHAhAMASQAPAXBCAqQA9AoACADQAFAIARAyQAZAzgFAUQgDAMgRAcIgOAtQgGATgGAbQgEAVAXASQAtAiAhArQAkAugIAnQgFAZgWATIgEAFQgEAEAAADQACAfAPAkQAaA8A2A2QBJBJAJBYQAJBTgwA/QgXAeABAUQACATAZAWQAhAcCbBnQClB7BcCbQBxC9hFCNQgfCKACDkQACB0AHBlQAAAVAaBkg");
	this.shape_186.setTransform(338.4,407.4,0.809,0.809);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#655B0C").s().p("AF5VxQgpjTAFirQAFi9A8h7QBFiMhti1QhYiTilh6QiahqgigeQgZgXgCgVQgCgVAXgeQAxg/gIhOQgJhUhIhJQgygygcg7QgVgrgDghQgBgMACgDIAMgKQAVgVAEgUQAHghghgrQgggqgtgjQgXgSAEgVQAGgbAFgSIAPguQARgcADgMQAFgUgZgzQgRgygFgIQgCgDg9goQhCgrgPgWQgMgSAHghQADgQAKgdIAOgrQADgNANgNIgMApQgNAtgFAZQgHAhAMARQAPAXBCArQA9AoACADQAFAIARAyQAZAzgFATQgDANgQAcIgPAtQgGATgGAbQgEAVAXASQAtAiAhArQAkAugIAnQgFAagWASQgIAIABAEQABAeAQAlQAZA7A2A3QBJBJAKBYQAIBTgwA/QgXAeACAUQABATAZAWQAiAcCaBnQClB7BcCbQBxC9hFCNQg/CCAIEBQAFCDARB4IgIAdQgHAVgDAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBgAGNVDIAAAAIAAAAg");
	this.shape_187.setTransform(320.2,336.2,0.809,0.809);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#007D40").s().p("AgGA/QghgjgJgdQgIgeAdghQAOgRAQgLQAIAnAeA5QATAjgQAfQgIAPgMAJQgOgMgQgTg");
	this.shape_188.setTransform(459.1,114.6,1.517,1.517,180);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#007D40").s().p("Ag5BMIgqgJQBBg1AkgVQAmgVA8gvIhPBtQgdAqgwAAIgBAAg");
	this.shape_189.setTransform(342.7,29.2,1.517,1.517,180);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#007D40").s().p("AgVAxQhMgZgNgBQAJgLAQgMQAfgZAigIQA0gMBPgKQgJAKgLARQgWAfgKAhQgGAUgfAAQgSAAgZgHg");
	this.shape_190.setTransform(338.2,14.7,1.517,1.517,180);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#007D40").s().p("AhHAtQAMgqAOgTQAOgSA5gbQAegNAagJIgLASQgMAbgJAsQgJArg9AWIg9ANIAKgng");
	this.shape_191.setTransform(359.2,25.4,1.517,1.517,180);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#007D40").s().p("AAKCIQgLgtAWguQAZguAFhQIABgJQAEgMgBgPIgBgEIgBgCIAAgCQgHggACABQAFADAAAcIABAEIA1BzQAOAsgdAXQgcAYgVAtQgLAXgEASQgLgNgHgWgAhlgxQAPg0AdgaQAdgbAggKQARgGALAAIAVAvIgBAhQgHAUgXAIQgjALg1AaIgtAXQACgVAIgag");
	this.shape_192.setTransform(400.4,25.9,1.517,1.517,180);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#027200").s().p("AgGBIQgmgOgig9IgYg7QAQgFAUgEQAqgHAYAHQApALA/AmQgNAdgUAaQgfAqgfAAQgIAAgHgDg");
	this.shape_193.setTransform(459.4,91.2,1.517,1.517,180);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#007D40").s().p("AAJBDQg3gNgOgTQgOgUAcgtQAOgXARgUIAFgDQALAEAeAgQAfAfADAuQACAXgFARQgZgDgcgHg");
	this.shape_194.setTransform(439.7,108.5,1.517,1.517,180);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#007D40").s().p("AhZAnQAOgtAmgaQAlgbA1gMQAagHASgBIgOA5QgVA5giABQghACgxAVQgYALgSAKQAAgSAHgXg");
	this.shape_195.setTransform(448.1,76.6,1.517,1.517,180);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#007D40").s().p("AhQBKQAdgrAigiQA2g2BBg2IgHBOQgRBQgtAOQhIAXg+AcQAHgPAOgXg");
	this.shape_196.setTransform(435.9,45,1.517,1.517,180);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#007D40").s().p("AhTAlIg3ggIAxAIQAzACAYgXQAVgZBEgQQAigIAdgEQgPAdgYAeQguA6gmAFIgMABQghAAg1gZg");
	this.shape_197.setTransform(367.2,46.9,1.517,1.517,180);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#007D40").s().p("AhmBJQAUg2AXgiQANgWBLgYQAmgLAkgIQgMAKgRATQgiAmgbAtQgaAvgvABg");
	this.shape_198.setTransform(371.6,71.1,1.517,1.517,180);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#007D40").s().p("AgVBOQgVhAgDgnQgEgoAJgnQAFgTAFgLQAhAuAjA8QAWAlgdBCQgOAigSAaQgKgYgKghg");
	this.shape_199.setTransform(419.6,111.2,1.517,1.517,180);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#027200").s().p("AgdALQABgdAaguQANgXANgSQgBAnAHBRQAFA0ghAZIggAOg");
	this.shape_200.setTransform(406.9,123.6,1.517,1.517,180);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#007D40").s().p("Ag6BIQgLgmAHgXQAHgWA9gxQAegYAegUQgFAFgFAOQgKAcgCAtQgDAvgdAeQgOAQgqAYQgIgOgGgTg");
	this.shape_201.setTransform(381.8,118.5,1.517,1.517,180);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#007D40").s().p("AgzAJQAvhGAegNQAkgOAcAJQAOAFAHAHIgBAQQgCAUgGARQgUA0g4AFQg2AGhDAbIgPAIQAUgQAng7g");
	this.shape_202.setTransform(426,68.7,1.517,1.517,180);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#007D40").s().p("AghA7QgSgwAAgjQAAgjAJgYIAJgRIAgAWQAiAcAPAcQAPAbgmAzQgTAZgVAUQgJgRgJgZg");
	this.shape_203.setTransform(399.2,60.2,1.517,1.517,180);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#007D40").s().p("AgnBGQgPgyAGgoQAFgoAfgeQAPgPAOgGIAFAcQAIAkAQAoQAQAngpAsQgUAWgXAPQgJgRgIgag");
	this.shape_204.setTransform(404.3,97.3,1.517,1.517,180);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#007D40").s().p("AiOBpIgVgGQBUhpApguQAZgcBbgTQAugIAogEQgUAQgcAdQg5A4giA8QgjA+hQAAQgZAAgbgHg");
	this.shape_205.setTransform(378.2,94.6,1.517,1.517,180);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#4C9200").s().p("AAYAfQhIgChDgQIg1gPIBCgXQBOgSA8AbQBjAqAiAHIgdABQgnAAhNgDg");
	this.shape_206.setTransform(271.2,61.8,1.517,1.517,180);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#4C9200").s().p("AhTBtQgNgBAJgYQAQgnAAggQAAgkBVgsIA5gcQAQgIADgFIABArQACBFgcAnQgeAsg0APQgZAHgcAAIgNAAg");
	this.shape_207.setTransform(333.4,57.8,1.517,1.517,180);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#027200").s().p("AgkCIQgKhYgNgtQgShBAjhAQARgfAWgTIAcBLQAfBaAIBDQAIBFgiAYQgKAHgUAIQgSAHgGAEQgDACgCAAQgKAAgFgpg");
	this.shape_208.setTransform(309.2,44.7,1.517,1.517,180);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#4C9200").s().p("AA1BJQhEgVhlg7IhWg5IARgIQAVgJAYgCQBNgJBJA2QBMA1BCAdQAhAPASAEQgKALgXAHQgSAFgWAAQgiAAgrgNg");
	this.shape_209.setTransform(266.6,42.8,1.517,1.517,180);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#4C9200").s().p("AAtCcQgtgygfgfQgogmgMhsIgDhlIApApQAxA3AtBHQAsBFgHAqIgKAdQgHAQACALQABALgFAAQgGAAgQgRg");
	this.shape_210.setTransform(290.1,36.8,1.517,1.517,180);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#3DA42A").s().p("AgwAGQARgpA+gjQAggRAcgJQgGANgPAVQgcAqgrAnQgrAngbAYIgTAPQAQgVAahGg");
	this.shape_211.setTransform(259.5,56.2,1.517,1.517,180);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#3DA42A").s().p("AgCAtQgygBg3gcIglgRQAMAABGgXQBZgdAfAOQAaANAqAGQAZAEgIAHQg6A2hVAAIgCAAg");
	this.shape_212.setTransform(219.7,87.7,1.517,1.517,180);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#4C9200").s().p("AgCA0Qgzgfg1gyIgrgtIBCgBQBKAGAoAjQAdAYBBAmQAlAWgSAEQggAPgXAEQgJADgKAAQgiAAgmgYg");
	this.shape_213.setTransform(222.5,70.1,1.517,1.517,180);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#3DA42A").s().p("Ag5BjQARgwADg7QADg8A2gnQAcgSAbgHIgIBEQgOBMgaAtQgbAtgnAUIgjALQAIgLAJgXg");
	this.shape_214.setTransform(248.9,47.4,1.517,1.517,180);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#3DA42A").s().p("ABQBpQgJgFgQgDQgWgDgIgDQgmgLgdgzQgegzgNgwIgHglIBPApQBQAwAGAjQAFAdANArQAFATgIAAQgDAAgFgDg");
	this.shape_215.setTransform(228.2,58.3,1.517,1.517,180);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#016A4A").s().p("AgaAsQgSg0AhhSIAkhHIAHAxQAFA9gKBGQgRBwgHAeQgCgfgbhWg");
	this.shape_216.setTransform(351.6,64.5,1.517,1.517,180);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#016A4A").s().p("AhpBVQgqgBgIABQALgGBDhBQBShOApgBQAjAAAxgPQAegJgEALQgjBbhhAvQgzAZhIAAIgGAAg");
	this.shape_217.setTransform(337,126.1,1.517,1.517,180);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#016A4A").s().p("AhyA9IhLgJIA9g0QBKgyBCABQAuABBbgNQA0gIgOARQgTAngSAVQggAohIAKQgqAGgvAAQgiAAglgDg");
	this.shape_218.setTransform(326.7,107.3,1.517,1.517,180);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#016A4A").s().p("AAVCKQgUg6grg7Qgsg7AXhOQAHgZANgXIAMgSIAsBGQAuBTAKA+QAJA/gWAyQgLAZgNAMQgBgRgKgcg");
	this.shape_219.setTransform(332.6,64.4,1.517,1.517,180);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#016A4A").s().p("AgPA1QhEgagygiIgkgeIBrgXQBwgRAiAeQAbAXAtAeQAbAUgZAEQgMACgRAKQgXANgKAEQgTAIgYAAQgfAAglgOg");
	this.shape_220.setTransform(319.8,85.5,1.517,1.517,180);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#4C9200").s().p("AigAhIAZgJQAjgOAygaQAygbBVASQArAJAhAOQgQAHgeAIQg8AQhHACQhGADgsAAg");
	this.shape_221.setTransform(149.4,119.5,1.517,1.517,180);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#4C9200").s().p("ABQBuQg7gPgxgrQgtgngihBQgZgvgBAEIgVgVQAqAHBVAoQBnAyATAoQAOAhAiAnQAUAXgNABIgMAAQgdAAgdgHg");
	this.shape_222.setTransform(89.1,116.7,1.517,1.517,180);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#4C9200").s().p("ABRCvQgqgMgZgNQgsgZgXhFQgXhDgJhaQgFgsAAgfIA+AzQA/BAALBAQAIAuAdBXQAOApgLAAIgFgCg");
	this.shape_223.setTransform(102.5,102.4,1.517,1.517,180);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#4C9200").s().p("AiFBRIgogSIArgSQA1geAyg1QAxg2BSAJQAoAEAfAPQgZAbglAeQhJA8g8AUQglANgiAAQgVAAgVgFg");
	this.shape_224.setTransform(146.5,100.5,1.517,1.517,180);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#3DA42A").s().p("AgHCiQgEgLgNgQIgXgdQgagqANhFQANhHAag3QANgcAJgNIApBlQAlBsgXAmIgpBRQgIARgGAAQgEAAgEgLg");
	this.shape_225.setTransform(119,94.5,1.517,1.517,180);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#4C9200").s().p("AAXAfQhHgChDgQIg1gPIBCgXQBOgSA8AbQBjAqAiAHIgdABQgnAAhOgDg");
	this.shape_226.setTransform(165.4,113.1,1.517,1.517,180);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#4CA91C").s().p("AhTBtQgNgBAKgYQAQgnAAggQAAgkBVgtIA4gbQAQgIADgFIABArQADBFgcAnQgfArgzAQQgaAHgdAAIgMAAg");
	this.shape_227.setTransform(227.7,109.1,1.517,1.517,180);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#7FC31C").s().p("AgkCIQgKhXgNguQgShAAjhAQARggAWgTIAcBLQAfBaAIBDQAIBFgiAZQgKAHgUAHQgSAHgGAEQgDACgCAAQgKAAgFgpg");
	this.shape_228.setTransform(203.5,96,1.517,1.517,180);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#7FC31C").s().p("AA1BJQhEgVhlg8IhWg4IAQgIQAWgJAYgDQBNgIBKA2QBKA1BDAdQAhAPASAEQgJALgYAHQgSAFgVAAQgjAAgrgNg");
	this.shape_229.setTransform(160.9,94.1,1.517,1.517,180);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#4CA91C").s().p("AAuCcQgtgygfgfQgpgmgLhsIgEhlIApApQAxA3AuBHQAsBFgIAqQgBAJgJAUQgGAQABALQABALgFAAQgGAAgPgRg");
	this.shape_230.setTransform(184.4,88.1,1.517,1.517,180);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#7FC31C").s().p("AAfAgQg7gCg0gTIgpgRIgkAAIBIgUQBTgPAyAXQBSAiAcAHQgHADgUADQgdAEgoAAIgfgBg");
	this.shape_231.setTransform(84.2,131.1,1.517,1.517,180);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#7FC31C").s().p("AAfAgQg7gCg0gTIgpgRIgkAAIBIgUQBTgPAyAWQBSAjAcAHQgHADgUADQgdAEgoAAIgfgBg");
	this.shape_232.setTransform(32.1,113,1.517,1.517,180);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#027200").s().p("AhWBhQgJgBASgYQAZgjAAgdQAAgeBGglQBBghgBgEQAKASgCAhQgDAqgbAkQgZAkg2ARQgiALgZAAIgIAAg");
	this.shape_233.setTransform(82,110,1.517,1.517,180);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#4C9200").s().p("AgaB7QgIhJgLgmQgQg1AFg/QADgfAFgUIArAiIAbA3QAcBCAHA4QAHA5gdAUQgjAOgKAIQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgIAAgEghg");
	this.shape_234.setTransform(61.5,101,1.517,1.517,180);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#7FC31C").s().p("AAsA9Qg5gRhTgyIhIgvIAOgHQASgHAUgCQBAgHA9AtQA+ArA3AZQAcAMAPAEQgIAJgUAFQgPAEgRAAQgdAAgkgKg");
	this.shape_235.setTransform(25.6,98,1.517,1.517,180);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#7FC31C").s().p("AAmCCQglgqgagaQgigfgJhZIgDhUIAiAiQAoAtAmA8QAlA5gHAiQgBAHgHARQgFANABAJQABAJgEAAQgFAAgNgNg");
	this.shape_236.setTransform(45.1,93.1,1.517,1.517,180);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#008837").s().p("AAYAfQhHgDhEgPIg1gPIBCgXQBOgSA8AbQBjAqAiAHIgeABQgnAAhMgDg");
	this.shape_237.setTransform(263.2,101.8,1.517,1.517,180);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#008837").s().p("AhTBtQgNgBAKgYQAQgnAAggQAAgkBVgtIA4gbQAQgIADgFIABArQADBFgcAnQgfArgzAQQgaAHgdAAIgMAAg");
	this.shape_238.setTransform(325.4,97.9,1.517,1.517,180);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#008837").s().p("AgkCIQgKhYgNgtQgShAAjhAQASggAVgTIAcBLQAfBaAIBDQAIBFgiAZQgKAHgUAHQgSAHgGAEQgCACgCAAQgLAAgFgpg");
	this.shape_239.setTransform(301.2,84.8,1.517,1.517,180);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#008837").s().p("AA2BJQhFgVhkg8IhYg4IARgIQAWgJAYgDQBNgIBKA2QBLA1BCAdQAhAPASAEQgJALgXAHQgTAFgVAAQgjAAgqgNg");
	this.shape_240.setTransform(258.7,82.9,1.517,1.517,180);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#4C9200").s().p("AAuCcQgtgygfgfQgpgmgLhsIgEhlIApApQAxA3AuBIQAsBFgIAqQgBAIgJAVQgGAPABALQABALgFAAQgGAAgPgRg");
	this.shape_241.setTransform(282.1,76.9,1.517,1.517,180);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#008837").s().p("AhzAiIg1gEIBCglQBOgkA8AOQBjAVAiAAQgeAIhzAVQhDANg/AAIgJAAg");
	this.shape_242.setTransform(226.4,134,1.517,1.517,180);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#008837").s().p("AhWBpQAQgrAAggQAAglBVg/IA4goQAPgMAEgGIABAsQACBFgcAtQgeAxgzAbQgfAQgkAGIgCABQgKAAAJgYg");
	this.shape_243.setTransform(288.5,117.1,1.517,1.517,180);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#008837").s().p("AgkCOQgKhWgNgqQgSg9AjhIQARgkAWgXIAcBFQAfBSAIBCQAIBDgiAgQgpAagNAMQgDADgDAAQgJAAgFglg");
	this.shape_244.setTransform(264.4,108.8,1.517,1.517,180);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#008837").s().p("AA1A+QhEgGhlgmIhWglIAQgLQAWgOAYgIQBNgZBKAlQBKAmBDAOQAhAHASAAQgJANgYAMQgmATg1AAIgagBg");
	this.shape_245.setTransform(221.8,116.8,1.517,1.517,180);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#447700").s().p("AAuCQQgtgpgfgXQgpgegLhpQgGg1ACgvIApAgQAxAsAuA9QAsA7gIAsQgBAJgJAWQgGARABALQACAMgHAAQgGAAgOgMg");
	this.shape_246.setTransform(245.3,105.2,1.517,1.517,180);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#025556").s().p("AhNAvIgugPQAmhKBeAPQAxAHAlgPQAUgHAJgJQgIASgQAVQgiApgtAPQgYAIgcAAQgWAAgYgFg");
	this.shape_247.setTransform(403.7,23.2,1.517,1.517,180);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#025500").s().p("AATCbQgEgHgNgQQgigrgMgRQg/hZAzglQA0glApgnIAgggIAJBBQAGBIgPAlQgVA0gRAyQgJAdgDAMQADAGgBABIgCABQgBAAABgIg");
	this.shape_248.setTransform(452.1,41.1,1.517,1.517,180);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#027200").s().p("Ah3ArQghgGAAgPQAAgXAegYQAqgfBCATQA/ATA7gKQAdgGAQgJQgcASglAUQhMAmgsAHQgeAFgZAAQgRAAgPgCg");
	this.shape_249.setTransform(422,7.2,1.517,1.517,180);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#025500").s().p("AhuBYQAAgzAIgfQAThIA5AEQA4AEAugQQAYgJAMgJIgXBAQgeBDgmATQgqAVgtAKQgVAEgLAAQgMAAAAgFg");
	this.shape_250.setTransform(425.6,26.2,1.517,1.517,180);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#025500").s().p("Ag5hpIBRAAQAZAtAHAmQAHAqgUAUQgjAjhBAfg");
	this.shape_251.setTransform(466.3,123.6,1.517,1.517,180);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#025556").s().p("AgCBRQgqgyAAgiQAAgnAKgsQAJgoAEAEIAmAmQAiAqgGAnQgKA8AFBCQgVgRgVgZg");
	this.shape_252.setTransform(453.7,88.1,1.517,1.517,180);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#447700").s().p("AAOAlQg3gGg4gLIgsgLQARgbAbgNQApgUArAcQApAZA9AQQAeAHAXADQgKAFgUADQgWAEgbAAQgXAAgagDg");
	this.shape_253.setTransform(104.1,108.8,1.517,1.517,180);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#025500").s().p("AAaBlQgrgWgMgzQgMgxgOgzIgNgoIAzAlQAxAtAEAsQACAtAQAfQAHAQAIAIQgVgBgWgMg");
	this.shape_254.setTransform(132.5,88,1.517,1.517,180);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#025500").s().p("AgqA3QgDgkAdhNIAdhHIASBAQARBFgGAkQgGAjghAgIgfAXQgKgTgEg4g");
	this.shape_255.setTransform(199.4,76.2,1.517,1.517,180);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#447700").s().p("AiAARQgYgFATgMQAWgNgPgHIEMAAQgVARhjAOQg/AKgsAAQgZAAgSgEg");
	this.shape_256.setTransform(101,136.5,1.517,1.517,180);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#447700").s().p("AgOAUQg6gMg+geIENAAQgcAWgfALQgeAMgeAAQgPAAgPgDg");
	this.shape_257.setTransform(155.7,136.2,1.517,1.517,180);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#025556").s().p("AAjA3QhVgoghgoQgWgcgJgiIBkAAQA/A+AOAgQAMAeAVAcQALAOAIAJQglgMgrgVg");
	this.shape_258.setTransform(270.8,126.4,1.517,1.517,180);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#025556").s().p("AhlBAIAwhVQATgoBcgkIA6AAQgBBQguA4QgjArhDAHQhBAAgMAHIgEACQgGAAATgig");
	this.shape_259.setTransform(334.7,124.8,1.517,1.517,180);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#025500").s().p("Ag3glQAJgvA7gRQAdgIAdABQgKArgSA5QgMAigzAtIgyAmQAAhHAPhLg");
	this.shape_260.setTransform(164.4,111.7,1.517,1.517,180);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#025500").s().p("AAFBOQhEgqAAgYQAAgWgEg3IgFgyIArATQAtAbAPAsQAXBGATBHQgigQgigWg");
	this.shape_261.setTransform(367.7,107.1,1.517,1.517,180);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#025500").s().p("AgxAcQgDgrAeg6IAdgxIAcAqQAYAxgOAfQgPAhgmAwQgUAZgQARQAAgYgFhHg");
	this.shape_262.setTransform(424.3,80.1,1.517,1.517,180);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#447700").s().p("AhLBwIAAg9QAOgZAKgZQAPgmA5gpQAdgVAagNQgBAdgJAlQgTBJgqAtQglApgoAAIgDgBg");
	this.shape_263.setTransform(463.5,109,1.517,1.517,180);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#025500").s().p("AAqAwQhpgDgmghQgcgXgJglIDTAAQA0BKAOATQggAEgkAAIgdgBg");
	this.shape_264.setTransform(410.6,132.2,1.517,1.517,180);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#027200").s().p("AgWBFQg0gigxhBIAAg9IAnAAQAoAPAWAgQAbAqBNAwQAuAdgFgBQgMgFgPAGQgSAJgKADQgNAFgNAAQgfAAghgXg");
	this.shape_265.setTransform(456.3,125.7,1.517,1.517,180);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#447700").s().p("AATBqQhPgqgNg+QgJgwgOhYIBGAAQAlArAKA0QAMBAAhA9QARAfAOASQgmgIgogVg");
	this.shape_266.setTransform(450.9,119.2,1.517,1.517,180);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#027200").s().p("AhSAjIgggKQgNgTABgQQADgjBHAJQBGAJA9gBQAfgBARgCQgQANgXAPQgvAcgpAJQgVAFgVAAQgUAAgUgEg");
	this.shape_267.setTransform(403.8,107.5,1.517,1.517,180);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#447700").s().p("AAFA9QgpgUgxg8Igqg4IAlAJQAvAIA0gDQA2gDAmA/QATAeAIAgQgOAJgXAEQgMACgNAAQgfAAgegPg");
	this.shape_268.setTransform(430.5,122.4,1.517,1.517,180);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#027200").s().p("AhpA8QAlgmAmg0QAlg1BAgDQAggCAbAGQAOgNgbAvQgZArgqAaQgpAbhLAWQgmALgeAGQALgIASgTg");
	this.shape_269.setTransform(433.7,92,1.517,1.517,180);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#027200").s().p("AAxBgQhZghgVgnQgUglgUgxIgQgpIArgKQAwgCAaApIBCBzQAmBEAOAFQgZgCgsgQg");
	this.shape_270.setTransform(404.6,60.9,1.517,1.517,180);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#025500").s().p("Ag1A1QghgMgpgmIgjgjIAzgVQA7gOApAjQApAjBHAVQAjALAbADQgpAJgwAFQgxAGgfAAQgfAAgQgFg");
	this.shape_271.setTransform(379.9,62.3,1.517,1.517,180);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#027200").s().p("AhDB4QgZgoAsg7QBGheArhLQASCggJAqQgGAag0AmQgZASgZANQgVgIgMgVg");
	this.shape_272.setTransform(405.8,94.1,1.517,1.517,180);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#447700").s().p("Ah4AmIhCgQQARgYAfgUQA9goBHAYQBGAYBFAJQAiAFAUAAQgVAIghALQhBAVg4AGQgQACgTAAQgrAAg2gKg");
	this.shape_273.setTransform(377.8,75.7,1.517,1.517,180);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#025500").s().p("AAWBsQgIgTgbgrQgxhKADgwQACggAMgUIA/AAQA7BegXA0QgUAvgKAnIgCAEQAFALgCADQgEAHgBAAQgDAAAFgVg");
	this.shape_274.setTransform(360.4,120.2,1.517,1.517,180);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#027200").s().p("AhjBWQAhgxAMgpQAMgpBXgtQAsgXApgOQgGAagOAjQgbBFgmAsQgnAthGAWIhBAOg");
	this.shape_275.setTransform(331.1,104.5,1.517,1.517,180);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#027200").s().p("AgNA7Qg1gGgrghIgggfIgOgYIAdgTQAngOAyAYQBQAlBxAlQgVAKggAIQgvAMgpAAQgPAAgNgBg");
	this.shape_276.setTransform(107.7,119.1,1.517,1.517,180);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#027200").s().p("ABIBGQhNgFgsgXQgsgYgcglIgSghIArgQQAxgKAkAjQAiAkA+AqQAfAVAXAOIgfABIgkgBg");
	this.shape_277.setTransform(122.4,99.4,1.517,1.517,180);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#025556").s().p("AA+BdQg+gPgqgnQgmgjgTg3QgNgmgFgDIAjgIQA0gBAaAvQAZAvAzA6QAaAeAUAUQgYAAgggIg");
	this.shape_278.setTransform(182.3,81.1,1.517,1.517,180);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#025556").s().p("AhAglQgIg1A8ghQAdgRAfgGIAOAtQAKA1gOAsQgPAsgvA6IguAxQAAhkgOhUg");
	this.shape_279.setTransform(303,96.6,1.517,1.517,180);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#025556").s().p("AAoBTQhPgagYgkQgXgigRgwIgMgoIA3AGQA8APAjAyQA5BQAYA0QgkgGgogNg");
	this.shape_280.setTransform(260.2,88.4,1.517,1.517,180);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#025556").s().p("ABGBXQhNgHgqgpQgpgogcgwIgVgnIBRAHQBUANAYAgIBaB6QgRADgUAAQgQAAgRgCg");
	this.shape_281.setTransform(217.8,98.2,1.517,1.517,180);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#025500").s().p("AgIBoQgphLgDg3QgDg7AVgvQATgrAFAMIAnBLQAiBOgMAxQgTBQAAAwQgUgagUglg");
	this.shape_282.setTransform(152,94.7,1.517,1.517,180);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#027C00").s().p("AgQB6QgEgngUgmQgVgnAnhTQAUgpAWgjIATAlQARAxgMA4QgMA3gaA9QgMAegLATQADgMgCgUg");
	this.shape_283.setTransform(171.7,112,1.517,1.517,180);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#447700").s().p("AgOBuQgVg3gjgyQgog3BkhpIBWAAQANA7gOAoQgXBGg0COQgDgRgLgdg");
	this.shape_284.setTransform(386.6,116,1.517,1.517,180);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#4C9200").s().p("ABkBIQgigQhJgSQhRgTgehnICQAAQAnAnAfBFQAQAiAHAbQgBgFgSgIg");
	this.shape_285.setTransform(339.6,126.8,1.517,1.517,180);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#025556").s().p("AArCMIgNggQgbhBgfgeQgjgfAVhBQALghARgaIAfBMQAeBAAEgrQgEBKAABrQAAAHgCAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_286.setTransform(287.7,110.8,1.517,1.517,180);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#025500").s().p("Ag/BDQADg/gUg3QgNgjAfgfICTAAQgJAygVAsQgaA4g0AwIgwAlQAGgUACgfg");
	this.shape_287.setTransform(305.5,121.7,1.517,1.517,180);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#025556").s().p("AgaB+QgShNgSgqQgVguBGhCQAighAngYQAFATACAcQAFA5gMAvQgKAmgjA9QgeA0AAATIgBAEQgCAAgIglg");
	this.shape_288.setTransform(247.3,112.1,1.517,1.517,180);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#027200").s().p("AgLBiQgfgsgTg8QgQg1AuhHIBdAAQAGAtgDAcQgDAqgYBNQgMAmgLAeQgMgJgOgXg");
	this.shape_289.setTransform(272.1,119.9,1.517,1.517,180);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#447700").s().p("AApCJQgeghguhEQg5hNAdh1IAwAAQA2BcAVA1QATAugHBEQgEAhgIAZQgFgEgOgSg");
	this.shape_290.setTransform(197.2,115.6,1.517,1.517,180);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#025500").s().p("AAvBOQhjglgmg8QgagpgVgqICBAAQBGAqAKAfQANApAcAxQAOAZALARQgqgHgxgSg");
	this.shape_291.setTransform(144.3,124.1,1.517,1.517,180);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#025556").s().p("AgkgcIBKAAQgjAkgUAOIgOAHQgIgSADgng");
	this.shape_292.setTransform(251.8,135.3,1.517,1.517,180);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#025500").s().p("AA4BCQhFgNg2g8QgagegWghICvAAQAQA2AVAvQALAYAIANQgKADgMAAQgRAAgVgFg");
	this.shape_293.setTransform(189.4,129,1.517,1.517,180);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#027200").s().p("AA1BpQgfgrg1gzQg4gzALhhIB6AAIADAHQAdA8ABBuQAAA3gFArQgFgLgQgWg");
	this.shape_294.setTransform(224.1,118.7,1.517,1.517,180);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#82B922").s().p("AgEAmQgWgbgGgTQgFgUATgSQAKgJAKgFIAFASQAIAXAMAYQANAagLARIgNANQgKgKgKgNg");
	this.shape_295.setTransform(130.3,115.9,1.517,1.517,180);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#82B922").s().p("AgmAmIgcgLIAZgOQAbgOAQgGQAZgJAogWIg2A7QgPASgXAAIgNgBg");
	this.shape_296.setTransform(52.7,46.5,1.517,1.517,180);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#82B922").s().p("AgOAVQgygZgJgCIARgMQAUgMAXgBQAigBA1ADIgOAPQgOARgHAUQgDAJgMAAQgOAAgYgLg");
	this.shape_297.setTransform(49.7,36,1.517,1.517,180);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#82B922").s().p("AAzBJQgDgFgogXQglgVgKgcQgLgfgBgWIACgPIArANQApATgBAcQgCAaAOApIAGASIgBAAg");
	this.shape_298.setTransform(66.3,27.3,1.517,1.517,180);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#82B922").s().p("AgvAUQAIgZAJgKQAJgLAmgJIAlgIIgGALQgJAQgGAaQgFAbgpAGIgpABIAHgYg");
	this.shape_299.setTransform(63.8,46.7,1.517,1.517,180);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#82B922").s().p("AAEBVQgHgeAPgbQASgdABg0QAEgHgBgLIgEgTIArA/IAEAeQABAggTAMQgTAMgOAaIgKAYQgIgJgEgPgAhGgvQALgfATgOQATgOAVgCQALgBAIABIALASQACAUgBARQgFALgOABQgXADgjAKIgeAKQABgNAFgQg");
	this.shape_300.setTransform(90.7,51.6,1.517,1.517,180);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#82B922").s().p("AgDAvQgagOgXgqIgQgpIAYgBQAcABAQAHQAbAMAqAfQgIARgOAPQgRAUgSAAQgIAAgHgFg");
	this.shape_301.setTransform(130.4,101.5,1.517,1.517,180);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#82B922").s().p("AAGApQgkgQgKgOQgJgNATgaQAJgNALgLIAEgBQAGAEAVAYQAUAZACAcQABAPgDAKQgQgEgTgIg");
	this.shape_302.setTransform(117.3,109.3,1.517,1.517,180);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#82B922").s().p("Ag7APQAJgbAagMQAYgMAjgCQARgBANACIgKAiQgOAhgXgDQgVgDghAIIgcAIQAAgMAFgNg");
	this.shape_303.setTransform(122.9,90.5,1.517,1.517,180);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#82B922").s().p("AhNAoQAPgjAWgRQAYgSAhgKQASgFAMgBIAqgYQgLAegPAfQggA8geAEQgdADghAHIgbAGQADgOAIgRg");
	this.shape_304.setTransform(111.6,69.1,1.517,1.517,180);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#82B922").s().p("AAKAgQgYgBgpgbIgkgaIAgALQAiAIAPgNQAOgNAugCQAXgBATABQgKARgQAPQgfAfgYAAIgBAAg");
	this.shape_305.setTransform(125.6,131.9,1.517,1.517,180);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#82B922").s().p("AAKAgQgXgBgqgbIgkgaIAgALQAjAIAPgNQAOgNAtgCQAXgBATACQgKAQgQAPQgeAfgYAAIgCAAg");
	this.shape_306.setTransform(69.1,60.1,1.517,1.517,180);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#82B922").s().p("AgcBkIgcgKIAIgSQALgVAJgNQAOgTBHh3IgIBKQgLBOgSAaQgPAXgXAAIgKgBg");
	this.shape_307.setTransform(73.7,86,1.517,1.517,180);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#82B922").s().p("AgegTQgCgaAGgYIAGgSIAOAWQARAcAOAaQAPAagTAnQgKAUgMAOQgZhDgEgog");
	this.shape_308.setTransform(103.9,109.4,1.517,1.517,180);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#82B922").s().p("AgTADQABgRASgbQAIgNAJgJQgBAYAEA1QADAigVAMIgWAEg");
	this.shape_309.setTransform(95.5,115.5,1.517,1.517,180);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#82B922").s().p("AgmAlQgIgZAFgNQAFgOAogXQAUgMAUgJIgHALQgGAQgCAdQgBAdgUAQQgJAIgcAKQgFgKgEgNg");
	this.shape_310.setTransform(78.8,108.8,1.517,1.517,180);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#82B922").s().p("AgiACQAggnATgEQAYgEATAJQAJAFAFAFIgGAgQgNAgglgEQgkgDgtAJIgKADQAOgIAZghg");
	this.shape_311.setTransform(108.2,83.2,1.517,1.517,180);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#82B922").s().p("AgHAlQgcg+AAgWQAAgXAHgOIAGgKIAVASQAWAXAKATQAKAUgKA4QgFAcgHAZQgNgbgNgfg");
	this.shape_312.setTransform(90.2,69.9,1.517,1.517,180);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#82B922").s().p("AgZAoQgKgiADgZQAEgYAVgPQAJgIAKgDIADATQAFAZALAZQAKAbgbAZIgcASQgGgNgFgRg");
	this.shape_313.setTransform(93.8,98.3,1.517,1.517,180);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#82B922").s().p("Ag8A4IgwgRIAfggIA0gxQARgPA8AAQAfAAAaADQgNAHgTAPQgmAdgWAiQgSAbglAAQgKAAgMgCg");
	this.shape_314.setTransform(76.4,92.7,1.517,1.517,180);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#007D40").s().p("AgGA/QghgjgJgdQgIgeAdghQAOgRAQgLQAIAnAeA5QATAjgQAfQgIAPgMAJQgOgMgQgTg");
	this.shape_315.setTransform(128.5,158.6,1.517,1.517);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#007D40").s().p("Ag5BMIgqgJQBBg1AkgVQAmgVA8gvIhPBtQgdAqgwAAIgBAAg");
	this.shape_316.setTransform(244.9,244.1,1.517,1.517);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#007D40").s().p("AgVAxQhMgZgNgBQAJgLAQgMQAfgZAigIQA0gMBPgKQgJAKgLARQgWAfgKAhQgGAUgfAAQgSAAgZgHg");
	this.shape_317.setTransform(249.4,258.5,1.517,1.517);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#007D40").s().p("AhHAtQAMgqAOgTQAOgSA5gbQAegNAagJIgLASQgMAbgJAsQgJArg9AWIg9ANIAKgng");
	this.shape_318.setTransform(228.3,247.9,1.517,1.517);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#007D40").s().p("AAKCIQgLgtAWguQAZguAFhQIABgJQAEgMgBgPIgBgEIgBgCIAAgCQgHggACABQAFADAAAcIABAEIA1BzQAOAsgdAXQgcAYgVAtQgLAXgEASQgLgNgHgWgAhlgxQAPg0AdgaQAdgbAggKQARgGALAAIAVAvIgBAhQgHAUgXAIQgjALg1AaIgtAXQACgVAIgag");
	this.shape_319.setTransform(187.2,247.4,1.517,1.517);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#027200").s().p("AgGBIQgmgOgig9IgYg7QAQgFAUgEQAqgHAYAHQApALA/AmQgNAdgUAaQgfAqgfAAQgIAAgHgDg");
	this.shape_320.setTransform(128.2,182,1.517,1.517);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#007D40").s().p("AAJBDQg3gNgOgTQgOgUAcgtQAOgXARgUIAFgDQALAEAeAgQAfAfADAuQACAXgFARQgZgDgcgHg");
	this.shape_321.setTransform(147.9,164.8,1.517,1.517);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#007D40").s().p("AhZAnQAOgtAmgaQAlgbA1gMQAagHASgBIgOA5QgVA5giABQghACgxAVQgYALgSAKQAAgSAHgXg");
	this.shape_322.setTransform(139.4,196.6,1.517,1.517);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#007D40").s().p("AhQBKQAdgrAigiQA2g2BBg2IgHBOQgRBQgtAOQhIAXg+AcQAHgPAOgXg");
	this.shape_323.setTransform(151.7,228.3,1.517,1.517);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#007D40").s().p("AhTAlIg3ggIAxAIQAzACAYgXQAVgZBEgQQAigIAdgEQgPAdgYAeQguA6gmAFIgMABQghAAg1gZg");
	this.shape_324.setTransform(220.4,226.3,1.517,1.517);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#007D40").s().p("AhmBJQAUg2AXgiQANgWBLgYQAmgLAkgIQgMAKgRATQgiAmgbAtQgaAvgvABg");
	this.shape_325.setTransform(216,202.1,1.517,1.517);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#007D40").s().p("AgVBOQgVhAgDgnQgEgoAJgnQAFgTAFgLQAhAuAjA8QAWAlgdBCQgOAigSAaQgKgYgKghg");
	this.shape_326.setTransform(167.9,162.1,1.517,1.517);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#027200").s().p("AgdALQABgdAaguQANgXANgSQgBAnAHBRQAFA0ghAZIggAOg");
	this.shape_327.setTransform(180.6,149.6,1.517,1.517);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#007D40").s().p("Ag6BIQgLgmAHgXQAHgWA9gxQAegYAegUQgFAFgFAOQgKAcgCAtQgDAvgdAeQgOAQgqAYQgIgOgGgTg");
	this.shape_328.setTransform(205.8,154.8,1.517,1.517);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#007D40").s().p("AgzAJQAvhGAegNQAkgOAcAJQAOAFAHAHIgBAQQgCAUgGARQgUA0g4AFQg2AGhDAbIgPAIQAUgQAng7g");
	this.shape_329.setTransform(161.6,204.6,1.517,1.517);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#007D40").s().p("AghA7QgSgwAAgjQAAgjAJgYIAJgRIAgAWQAiAcAPAcQAPAbgmAzQgTAZgVAUQgJgRgJgZg");
	this.shape_330.setTransform(188.4,213.1,1.517,1.517);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#007D40").s().p("AgnBGQgPgyAGgoQAFgoAfgeQAPgPAOgGIAFAcQAIAkAQAoQAQAngpAsQgUAWgXAPQgJgRgIgag");
	this.shape_331.setTransform(183.2,176,1.517,1.517);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#007D40").s().p("AiOBpIgVgGQBUhpApguQAZgcBbgTQAugIAogEQgUAQgcAdQg5A4giA8QgjA+hQAAQgZAAgbgHg");
	this.shape_332.setTransform(209.4,178.7,1.517,1.517);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#4C9200").s().p("AAYAfQhIgChDgQIg1gPIBCgXQBOgSA8AbQBjAqAiAHIgdABQgnAAhNgDg");
	this.shape_333.setTransform(316.3,211.5,1.517,1.517);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#4C9200").s().p("AhTBtQgNgBAJgYQAQgnAAggQAAgkBVgsIA5gcQAQgIADgFIABArQACBFgcAnQgeAsg0APQgZAHgcAAIgNAAg");
	this.shape_334.setTransform(254.2,215.4,1.517,1.517);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#027200").s().p("AgkCIQgKhYgNgtQgShBAjhAQARgfAWgTIAcBLQAfBaAIBDQAIBFgiAYQgKAHgUAIQgSAHgGAEQgDACgCAAQgKAAgFgpg");
	this.shape_335.setTransform(278.4,228.6,1.517,1.517);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#4C9200").s().p("AA1BJQhEgVhlg7IhWg5IARgIQAVgJAYgCQBNgJBJA2QBMA1BCAdQAhAPASAEQgKALgXAHQgSAFgWAAQgiAAgrgNg");
	this.shape_336.setTransform(320.9,230.5,1.517,1.517);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#4C9200").s().p("AAtCcQgtgygfgfQgogmgMhsIgDhlIApApQAxA3AtBHQAsBFgHAqIgKAdQgHAQACALQABALgFAAQgGAAgQgRg");
	this.shape_337.setTransform(297.5,236.4,1.517,1.517);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#3DA42A").s().p("AgwAGQARgpA+gjQAggRAcgJQgGANgPAVQgcAqgrAnQgrAngbAYIgTAPQAQgVAahGg");
	this.shape_338.setTransform(328,217.1,1.517,1.517);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#3DA42A").s().p("AgCAtQgygBg3gcIglgRQAMAABGgXQBZgdAfAOQAaANAqAGQAZAEgIAHQg6A2hVAAIgCAAg");
	this.shape_339.setTransform(367.9,185.6,1.517,1.517);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#4C9200").s().p("AgCA0Qgzgfg1gyIgrgtIBCgBQBKAGAoAjQAdAYBBAmQAlAWgSAEQggAPgXAEQgJADgKAAQgiAAgmgYg");
	this.shape_340.setTransform(365.1,203.1,1.517,1.517);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#3DA42A").s().p("Ag5BjQARgwADg7QADg8A2gnQAcgSAbgHIgIBEQgOBMgaAtQgbAtgnAUIgjALQAIgLAJgXg");
	this.shape_341.setTransform(338.7,225.9,1.517,1.517);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#3DA42A").s().p("ABQBpQgJgFgQgDQgWgDgIgDQgmgLgdgzQgegzgNgwIgHglIBPApQBQAwAGAjQAFAdANArQAFATgIAAQgDAAgFgDg");
	this.shape_342.setTransform(359.4,214.9,1.517,1.517);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#016A4A").s().p("AgaAsQgSg0AhhSIAkhHIAHAxQAFA9gKBGQgRBwgHAeQgCgfgbhWg");
	this.shape_343.setTransform(235.9,208.7,1.517,1.517);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#016A4A").s().p("AhpBVQgqgBgIABQALgGBDhBQBShOApgBQAjAAAxgPQAegJgEALQgjBbhhAvQgzAZhIAAIgGAAg");
	this.shape_344.setTransform(250.5,147.2,1.517,1.517);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#016A4A").s().p("AhyA9IhLgJIA9g0QBKgyBCABQAuABBbgNQA0gIgOARQgTAngSAVQggAohIAKQgqAGgvAAQgiAAglgDg");
	this.shape_345.setTransform(260.9,166,1.517,1.517);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#016A4A").s().p("AAVCKQgUg6grg7Qgsg7AXhOQAHgZANgXIAMgSIAsBGQAuBTAKA+QAJA/gWAyQgLAZgNAMQgBgRgKgcg");
	this.shape_346.setTransform(254.9,208.8,1.517,1.517);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#016A4A").s().p("AgPA1QhEgagygiIgkgeIBrgXQBwgRAiAeQAbAXAtAeQAbAUgZAEQgMACgRAKQgXANgKAEQgTAIgYAAQgfAAglgOg");
	this.shape_347.setTransform(267.7,187.7,1.517,1.517);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#4C9200").s().p("AigAhIAZgJQAjgOAygaQAygbBVASQArAJAhAOQgQAHgeAIQg8AQhHACQhGADgsAAg");
	this.shape_348.setTransform(438.1,153.7,1.517,1.517);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#4C9200").s().p("ABQBuQg7gPgxgrQgtgngihBQgZgvgBAEIgVgVQAqAHBVAoQBnAyATAoQAOAhAiAnQAUAXgNABIgMAAQgdAAgdgHg");
	this.shape_349.setTransform(498.5,156.5,1.517,1.517);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#4C9200").s().p("ABRCvQgqgMgZgNQgsgZgXhFQgXhDgJhaQgFgsAAgfIA+AzQA/BAALBAQAIAuAdBXQAOApgLAAIgFgCg");
	this.shape_350.setTransform(485,170.8,1.517,1.517);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#4C9200").s().p("AiFBRIgogSIArgSQA1geAyg1QAxg2BSAJQAoAEAfAPQgZAbglAeQhJA8g8AUQglANgiAAQgVAAgVgFg");
	this.shape_351.setTransform(441,172.8,1.517,1.517);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#3DA42A").s().p("AgHCiQgEgLgNgQIgXgdQgagqANhFQANhHAag3QANgcAJgNIApBlQAlBsgXAmIgpBRQgIARgGAAQgEAAgEgLg");
	this.shape_352.setTransform(468.6,178.7,1.517,1.517);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#4C9200").s().p("AAXAfQhHgChDgQIg1gPIBCgXQBOgSA8AbQBjAqAiAHIgdABQgnAAhOgDg");
	this.shape_353.setTransform(422.1,160.2,1.517,1.517);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#4CA91C").s().p("AhTBtQgNgBAKgYQAQgnAAggQAAgkBVgtIA4gbQAQgIADgFIABArQADBFgcAnQgfArgzAQQgaAHgdAAIgMAAg");
	this.shape_354.setTransform(359.9,164.2,1.517,1.517);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#7FC31C").s().p("AgkCIQgKhXgNguQgShAAjhAQARggAWgTIAcBLQAfBaAIBDQAIBFgiAZQgKAHgUAHQgSAHgGAEQgDACgCAAQgKAAgFgpg");
	this.shape_355.setTransform(384.1,177.2,1.517,1.517);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#7FC31C").s().p("AA1BJQhEgVhlg8IhWg4IAQgIQAWgJAYgDQBNgIBKA2QBKA1BDAdQAhAPASAEQgJALgYAHQgSAFgVAAQgjAAgrgNg");
	this.shape_356.setTransform(426.7,179.2,1.517,1.517);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#4CA91C").s().p("AAuCcQgtgygfgfQgpgmgLhsIgEhlIApApQAxA3AuBHQAsBFgIAqQgBAJgJAUQgGAQABALQABALgFAAQgGAAgPgRg");
	this.shape_357.setTransform(403.2,185.2,1.517,1.517);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#7FC31C").s().p("AAfAgQg7gCg0gTIgpgRIgkAAIBIgUQBTgPAyAXQBSAiAcAHQgHADgUADQgdAEgoAAIgfgBg");
	this.shape_358.setTransform(503.4,142.1,1.517,1.517);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#7FC31C").s().p("AAfAgQg7gCg0gTIgpgRIgkAAIBIgUQBTgPAyAWQBSAjAcAHQgHADgUADQgdAEgoAAIgfgBg");
	this.shape_359.setTransform(555.4,160.2,1.517,1.517);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#027200").s().p("AhWBhQgJgBASgYQAZgjAAgdQAAgeBGglQBBghgBgEQAKASgCAhQgDAqgbAkQgZAkg2ARQgiALgZAAIgIAAg");
	this.shape_360.setTransform(505.6,163.3,1.517,1.517);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#4C9200").s().p("AgaB7QgIhJgLgmQgQg1AFg/QADgfAFgUIArAiIAbA3QAcBCAHA4QAHA5gdAUQgjAOgKAIQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgIAAgEghg");
	this.shape_361.setTransform(526.1,172.2,1.517,1.517);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#7FC31C").s().p("AAsA9Qg5gRhTgyIhIgvIAOgHQASgHAUgCQBAgHA9AtQA+ArA3AZQAcAMAPAEQgIAJgUAFQgPAEgRAAQgdAAgkgKg");
	this.shape_362.setTransform(561.9,175.3,1.517,1.517);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#7FC31C").s().p("AAmCCQglgqgagaQgigfgJhZIgDhUIAiAiQAoAtAmA8QAlA5gHAiQgBAHgHARQgFANABAJQABAJgEAAQgFAAgNgNg");
	this.shape_363.setTransform(542.5,180.2,1.517,1.517);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#008837").s().p("AAYAfQhHgDhEgPIg1gPIBCgXQBOgSA8AbQBjAqAiAHIgeABQgnAAhMgDg");
	this.shape_364.setTransform(324.3,171.4,1.517,1.517);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#008837").s().p("AhTBtQgNgBAKgYQAQgnAAggQAAgkBVgtIA4gbQAQgIADgFIABArQADBFgcAnQgfArgzAQQgaAHgdAAIgMAAg");
	this.shape_365.setTransform(262.2,175.4,1.517,1.517);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#008837").s().p("AgkCIQgKhYgNgtQgShAAjhAQASggAVgTIAcBLQAfBaAIBDQAIBFgiAZQgKAHgUAHQgSAHgGAEQgCACgCAAQgLAAgFgpg");
	this.shape_366.setTransform(286.4,188.4,1.517,1.517);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#008837").s().p("AA2BJQhFgVhkg8IhYg4IARgIQAWgJAYgDQBNgIBKA2QBLA1BCAdQAhAPASAEQgJALgXAHQgTAFgVAAQgjAAgqgNg");
	this.shape_367.setTransform(328.9,190.4,1.517,1.517);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#4C9200").s().p("AAuCcQgtgygfgfQgpgmgLhsIgEhlIApApQAxA3AuBIQAsBFgIAqQgBAIgJAVQgGAPABALQABALgFAAQgGAAgPgRg");
	this.shape_368.setTransform(305.4,196.3,1.517,1.517);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#008837").s().p("AhzAiIg1gEIBCglQBOgkA8AOQBjAVAiAAQgeAIhzAVQhDANg/AAIgJAAg");
	this.shape_369.setTransform(361.2,139.2,1.517,1.517);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#008837").s().p("AhWBpQAQgrAAggQAAglBVg/IA4goQAPgMAEgGIABAsQACBFgcAtQgeAxgzAbQgfAQgkAGIgCABQgKAAAJgYg");
	this.shape_370.setTransform(299,156.1,1.517,1.517);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#008837").s().p("AgkCOQgKhWgNgqQgSg9AjhIQARgkAWgXIAcBFQAfBSAIBCQAIBDgiAgQgpAagNAMQgDADgDAAQgJAAgFglg");
	this.shape_371.setTransform(323.2,164.4,1.517,1.517);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#008837").s().p("AA1A+QhEgGhlgmIhWglIAQgLQAWgOAYgIQBNgZBKAlQBKAmBDAOQAhAHASAAQgJANgYAMQgmATg1AAIgagBg");
	this.shape_372.setTransform(365.8,156.4,1.517,1.517);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#447700").s().p("AAuCQQgtgpgfgXQgpgegLhpQgGg1ACgvIApAgQAxAsAuA9QAsA7gIAsQgBAJgJAWQgGARABALQACAMgHAAQgGAAgOgMg");
	this.shape_373.setTransform(342.2,168,1.517,1.517);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#025556").s().p("AhNAvIgugPQAmhKBeAPQAxAHAlgPQAUgHAJgJQgIASgQAVQgiApgtAPQgYAIgcAAQgWAAgYgFg");
	this.shape_374.setTransform(183.8,250,1.517,1.517);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#025500").s().p("AATCbQgEgHgNgQQgigrgMgRQg/hZAzglQA0glApgnIAgggIAJBBQAGBIgPAlQgVA0gRAyQgJAdgDAMQADAGgBABIgCABQgBAAABgIg");
	this.shape_375.setTransform(135.4,232.1,1.517,1.517);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#027200").s().p("Ah3ArQghgGAAgPQAAgXAegYQAqgfBCATQA/ATA7gKQAdgGAQgJQgcASglAUQhMAmgsAHQgeAFgZAAQgRAAgPgCg");
	this.shape_376.setTransform(165.5,266.1,1.517,1.517);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#025500").s().p("AhuBYQAAgzAIgfQAThIA5AEQA4AEAugQQAYgJAMgJIgXBAQgeBDgmATQgqAVgtAKQgVAEgLAAQgMAAAAgFg");
	this.shape_377.setTransform(161.9,247.1,1.517,1.517);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#025500").s().p("Ag5hpIBRAAQAZAtAHAmQAHAqgUAUQgjAjhBAfg");
	this.shape_378.setTransform(121.2,149.7,1.517,1.517);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#025556").s().p("AgCBRQgqgyAAgiQAAgnAKgsQAJgoAEAEIAmAmQAiAqgGAnQgKA8AFBCQgVgRgVgZg");
	this.shape_379.setTransform(133.8,185.2,1.517,1.517);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#447700").s().p("AAOAlQg3gGg4gLIgsgLQARgbAbgNQApgUArAcQApAZA9AQQAeAHAXADQgKAFgUADQgWAEgbAAQgXAAgagDg");
	this.shape_380.setTransform(483.4,164.5,1.517,1.517);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#025500").s().p("AAaBlQgrgWgMgzQgMgxgOgzIgNgoIAzAlQAxAtAEAsQACAtAQAfQAHAQAIAIQgVgBgWgMg");
	this.shape_381.setTransform(455.1,185.2,1.517,1.517);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#025500").s().p("AgqA3QgDgkAdhNIAdhHIASBAQARBFgGAkQgGAjghAgIgfAXQgKgTgEg4g");
	this.shape_382.setTransform(388.1,197,1.517,1.517);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#447700").s().p("AiAARQgYgFATgMQAWgNgPgHIEMAAQgVARhjAOQg/AKgsAAQgZAAgSgEg");
	this.shape_383.setTransform(486.5,136.8,1.517,1.517);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#447700").s().p("AgOAUQg6gMg+geIENAAQgcAWgfALQgeAMgeAAQgPAAgPgDg");
	this.shape_384.setTransform(431.8,137,1.517,1.517);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#025556").s().p("AAjA3QhVgoghgoQgWgcgJgiIBkAAQA/A+AOAgQAMAeAVAcQALAOAIAJQglgMgrgVg");
	this.shape_385.setTransform(316.8,146.8,1.517,1.517);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#025556").s().p("AhlBAIAwhVQATgoBcgkIA6AAQgBBQguA4QgjArhDAHQhBAAgMAHIgEACQgGAAATgig");
	this.shape_386.setTransform(252.8,148.4,1.517,1.517);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#025500").s().p("Ag3glQAJgvA7gRQAdgIAdABQgKArgSA5QgMAigzAtIgyAmQAAhHAPhLg");
	this.shape_387.setTransform(423.1,161.5,1.517,1.517);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#025500").s().p("AAFBOQhEgqAAgYQAAgWgEg3IgFgyIArATQAtAbAPAsQAXBGATBHQgigQgigWg");
	this.shape_388.setTransform(219.9,166.2,1.517,1.517);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#025500").s().p("AgxAcQgDgrAeg6IAdgxIAcAqQAYAxgOAfQgPAhgmAwQgUAZgQARQAAgYgFhHg");
	this.shape_389.setTransform(163.2,193.1,1.517,1.517);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#447700").s().p("AhLBwIAAg9QAOgZAKgZQAPgmA5gpQAdgVAagNQgBAdgJAlQgTBJgqAtQglApgoAAIgDgBg");
	this.shape_390.setTransform(124,164.3,1.517,1.517);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#025500").s().p("AAqAwQhpgDgmghQgcgXgJglIDTAAQA0BKAOATQggAEgkAAIgdgBg");
	this.shape_391.setTransform(176.9,141,1.517,1.517);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#027200").s().p("AgWBFQg0gigxhBIAAg9IAnAAQAoAPAWAgQAbAqBNAwQAuAdgFgBQgMgFgPAGQgSAJgKADQgNAFgNAAQgfAAghgXg");
	this.shape_392.setTransform(131.2,147.5,1.517,1.517);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#447700").s().p("AATBqQhPgqgNg+QgJgwgOhYIBGAAQAlArAKA0QAMBAAhA9QARAfAOASQgmgIgogVg");
	this.shape_393.setTransform(136.7,154,1.517,1.517);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#027200").s().p("AhSAjIgggKQgNgTABgQQADgjBHAJQBGAJA9gBQAfgBARgCQgQANgXAPQgvAcgpAJQgVAFgVAAQgUAAgUgEg");
	this.shape_394.setTransform(183.8,165.7,1.517,1.517);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#447700").s().p("AAFA9QgpgUgxg8Igqg4IAlAJQAvAIA0gDQA2gDAmA/QATAeAIAgQgOAJgXAEQgMACgNAAQgfAAgegPg");
	this.shape_395.setTransform(157.1,150.8,1.517,1.517);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#027200").s().p("AhpA8QAlgmAmg0QAlg1BAgDQAggCAbAGQAOgNgbAvQgZArgqAaQgpAbhLAWQgmALgeAGQALgIASgTg");
	this.shape_396.setTransform(153.8,181.3,1.517,1.517);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#027200").s().p("AAxBgQhZghgVgnQgUglgUgxIgQgpIArgKQAwgCAaApIBCBzQAmBEAOAFQgZgCgsgQg");
	this.shape_397.setTransform(182.9,212.4,1.517,1.517);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#025500").s().p("Ag1A1QghgMgpgmIgjgjIAzgVQA7gOApAjQApAjBHAVQAjALAbADQgpAJgwAFQgxAGgfAAQgfAAgQgFg");
	this.shape_398.setTransform(207.7,211,1.517,1.517);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#027200").s().p("AhDB4QgZgoAsg7QBGheArhLQASCggJAqQgGAag0AmQgZASgZANQgVgIgMgVg");
	this.shape_399.setTransform(181.7,179.2,1.517,1.517);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#447700").s().p("Ah4AmIhCgQQARgYAfgUQA9goBHAYQBGAYBFAJQAiAFAUAAQgVAIghALQhBAVg4AGQgQACgTAAQgrAAg2gKg");
	this.shape_400.setTransform(209.8,197.6,1.517,1.517);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#025500").s().p("AAWBsQgIgTgbgrQgxhKADgwQACggAMgUIA/AAQA7BegXA0QgUAvgKAnIgCAEQAFALgCADQgEAHgBAAQgDAAAFgVg");
	this.shape_401.setTransform(227.2,153.1,1.517,1.517);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#027200").s().p("AhjBWQAhgxAMgpQAMgpBXgtQAsgXApgOQgGAagOAjQgbBFgmAsQgnAthGAWIhBAOg");
	this.shape_402.setTransform(256.5,168.7,1.517,1.517);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#027200").s().p("AgNA7Qg1gGgrghIgggfIgOgYIAdgTQAngOAyAYQBQAlBxAlQgVAKggAIQgvAMgpAAQgPAAgNgBg");
	this.shape_403.setTransform(479.8,154.1,1.517,1.517);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#027200").s().p("ABIBGQhNgFgsgXQgsgYgcglIgSghIArgQQAxgKAkAjQAiAkA+AqQAfAVAXAOIgfABIgkgBg");
	this.shape_404.setTransform(465.1,173.9,1.517,1.517);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#025556").s().p("AA+BdQg+gPgqgnQgmgjgTg3QgNgmgFgDIAjgIQA0gBAaAvQAZAvAzA6QAaAeAUAUQgYAAgggIg");
	this.shape_405.setTransform(405.3,192.2,1.517,1.517);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#025556").s().p("AhAglQgIg1A8ghQAdgRAfgGIAOAtQAKA1gOAsQgPAsgvA6IguAxQAAhkgOhUg");
	this.shape_406.setTransform(284.6,176.6,1.517,1.517);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#025556").s().p("AAoBTQhPgagYgkQgXgigRgwIgMgoIA3AGQA8APAjAyQA5BQAYA0QgkgGgogNg");
	this.shape_407.setTransform(327.4,184.9,1.517,1.517);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#025556").s().p("ABGBXQhNgHgqgpQgpgogcgwIgVgnIBRAHQBUANAYAgIBaB6QgRADgUAAQgQAAgRgCg");
	this.shape_408.setTransform(369.7,175,1.517,1.517);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#025500").s().p("AgIBoQgphLgDg3QgDg7AVgvQATgrAFAMIAnBLQAiBOgMAxQgTBQAAAwQgUgagUglg");
	this.shape_409.setTransform(435.6,178.6,1.517,1.517);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#027C00").s().p("AgQB6QgEgngUgmQgVgnAnhTQAUgpAWgjIATAlQARAxgMA4QgMA3gaA9QgMAegLATQADgMgCgUg");
	this.shape_410.setTransform(415.8,161.2,1.517,1.517);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#447700").s().p("AgOBuQgVg3gjgyQgog3BkhpIBWAAQANA7gOAoQgXBGg0COQgDgRgLgdg");
	this.shape_411.setTransform(200.9,157.2,1.517,1.517);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#4C9200").s().p("ABkBIQgigQhJgSQhRgTgehnICQAAQAnAnAfBFQAQAiAHAbQgBgFgSgIg");
	this.shape_412.setTransform(248,146.5,1.517,1.517);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#025556").s().p("AArCMIgNggQgbhBgfgeQgjgfAVhBQALghARgaIAfBMQAeBAAEgrQgEBKAABrQAAAHgCAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_413.setTransform(299.9,162.4,1.517,1.517);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#025500").s().p("Ag/BDQADg/gUg3QgNgjAfgfICTAAQgJAygVAsQgaA4g0AwIgwAlQAGgUACgfg");
	this.shape_414.setTransform(282,151.5,1.517,1.517);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#025556").s().p("AgaB+QgShNgSgqQgVguBGhCQAighAngYQAFATACAcQAFA5gMAvQgKAmgjA9QgeA0AAATIgBAEQgCAAgIglg");
	this.shape_415.setTransform(340.2,161.1,1.517,1.517);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#027200").s().p("AgLBiQgfgsgTg8QgQg1AuhHIBdAAQAGAtgDAcQgDAqgYBNQgMAmgLAeQgMgJgOgXg");
	this.shape_416.setTransform(315.5,153.4,1.517,1.517);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#447700").s().p("AApCJQgeghguhEQg5hNAdh1IAwAAQA2BcAVA1QATAugHBEQgEAhgIAZQgFgEgOgSg");
	this.shape_417.setTransform(390.4,157.6,1.517,1.517);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#025500").s().p("AAvBOQhjglgmg8QgagpgVgqICBAAQBGAqAKAfQANApAcAxQAOAZALARQgqgHgxgSg");
	this.shape_418.setTransform(443.3,149.2,1.517,1.517);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#025556").s().p("AgkgcIBKAAQgjAkgUAOIgOAHQgIgSADgng");
	this.shape_419.setTransform(335.8,138,1.517,1.517);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#025500").s().p("AA4BCQhFgNg2g8QgagegWghICvAAQAQA2AVAvQALAYAIANQgKADgMAAQgRAAgVgFg");
	this.shape_420.setTransform(398.1,144.3,1.517,1.517);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#027200").s().p("AA1BpQgfgrg1gzQg4gzALhhIB6AAIADAHQAdA8ABBuQAAA3gFArQgFgLgQgWg");
	this.shape_421.setTransform(363.5,154.5,1.517,1.517);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#82B922").s().p("AgEAmQgWgbgGgTQgFgUATgSQAKgJAKgFIAFASQAIAXAMAYQANAagLARIgNANQgKgKgKgNg");
	this.shape_422.setTransform(457.3,157.3,1.517,1.517);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#82B922").s().p("AgmAmIgcgLIAZgOQAbgOAQgGQAZgJAogWIg2A7QgPASgXAAIgNgBg");
	this.shape_423.setTransform(534.8,226.8,1.517,1.517);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#82B922").s().p("AgOAVQgygZgJgCIARgMQAUgMAXgBQAigBA1ADIgOAPQgOARgHAUQgDAJgMAAQgOAAgYgLg");
	this.shape_424.setTransform(537.8,237.2,1.517,1.517);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#82B922").s().p("AAzBJQgDgFgogXQglgVgKgcQgLgfgBgWIACgPIArANQApATgBAcQgCAaAOApIAGASIgBAAg");
	this.shape_425.setTransform(521.2,245.9,1.517,1.517);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#82B922").s().p("AgvAUQAIgZAJgKQAJgLAmgJIAlgIIgGALQgJAQgGAaQgFAbgpAGIgpABIAHgYg");
	this.shape_426.setTransform(523.8,226.6,1.517,1.517);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#82B922").s().p("AAEBVQgHgeAPgbQASgdABg0QAEgHgBgLIgEgTIArA/IAEAeQABAggTAMQgTAMgOAaIgKAYQgIgJgEgPgAhGgvQALgfATgOQATgOAVgCQALgBAIABIALASQACAUgBARQgFALgOABQgXADgjAKIgeAKQABgNAFgQg");
	this.shape_427.setTransform(496.8,221.7,1.517,1.517);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#82B922").s().p("AgDAvQgagOgXgqIgQgpIAYgBQAcABAQAHQAbAMAqAfQgIARgOAPQgRAUgSAAQgIAAgHgFg");
	this.shape_428.setTransform(457.1,171.7,1.517,1.517);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#82B922").s().p("AAGApQgkgQgKgOQgJgNATgaQAJgNALgLIAEgBQAGAEAVAYQAUAZACAcQABAPgDAKQgQgEgTgIg");
	this.shape_429.setTransform(470.2,163.9,1.517,1.517);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#82B922").s().p("Ag7APQAJgbAagMQAYgMAjgCQARgBANACIgKAiQgOAhgXgDQgVgDghAIIgcAIQAAgMAFgNg");
	this.shape_430.setTransform(464.6,182.7,1.517,1.517);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#82B922").s().p("AhNAoQAPgjAWgRQAYgSAhgKQASgFAMgBIAqgYQgLAegPAfQggA8geAEQgdADghAHIgbAGQADgOAIgRg");
	this.shape_431.setTransform(475.9,204.1,1.517,1.517);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#82B922").s().p("AAKAgQgYgBgpgbIgkgaIAgALQAiAIAPgNQAOgNAugCQAXgBATABQgKARgQAPQgfAfgYAAIgBAAg");
	this.shape_432.setTransform(461.9,141.3,1.517,1.517);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#82B922").s().p("AAKAgQgXgBgqgbIgkgaIAgALQAjAIAPgNQAOgNAtgCQAXgBATACQgKAQgQAPQgeAfgYAAIgCAAg");
	this.shape_433.setTransform(518.5,213.2,1.517,1.517);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#82B922").s().p("AgcBkIgcgKIAIgSQALgVAJgNQAOgTBHh3IgIBKQgLBOgSAaQgPAXgXAAIgKgBg");
	this.shape_434.setTransform(513.8,187.3,1.517,1.517);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#82B922").s().p("AgegTQgCgaAGgYIAGgSIAOAWQARAcAOAaQAPAagTAnQgKAUgMAOQgZhDgEgog");
	this.shape_435.setTransform(483.6,163.9,1.517,1.517);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#82B922").s().p("AgTADQABgRASgbQAIgNAJgJQgBAYAEA1QADAigVAMIgWAEg");
	this.shape_436.setTransform(492,157.7,1.517,1.517);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#82B922").s().p("AgmAlQgIgZAFgNQAFgOAogXQAUgMAUgJIgHALQgGAQgCAdQgBAdgUAQQgJAIgcAKQgFgKgEgNg");
	this.shape_437.setTransform(508.8,164.4,1.517,1.517);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#82B922").s().p("AgiACQAggnATgEQAYgEATAJQAJAFAFAFIgGAgQgNAgglgEQgkgDgtAJIgKADQAOgIAZghg");
	this.shape_438.setTransform(479.3,190.1,1.517,1.517);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#82B922").s().p("AgHAlQgcg+AAgWQAAgXAHgOIAGgKIAVASQAWAXAKATQAKAUgKA4QgFAcgHAZQgNgbgNgfg");
	this.shape_439.setTransform(497.3,203.3,1.517,1.517);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#82B922").s().p("AgZAoQgKgiADgZQAEgYAVgPQAJgIAKgDIADATQAFAZALAZQAKAbgbAZIgcASQgGgNgFgRg");
	this.shape_440.setTransform(493.8,175,1.517,1.517);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#82B922").s().p("Ag8A4IgwgRIAfggIA0gxQARgPA8AAQAfAAAaADQgNAHgTAPQgmAdgWAiQgSAbglAAQgKAAgMgCg");
	this.shape_441.setTransform(511.2,180.6,1.517,1.517);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#000000").ss(0.3,1,1).p("AIshwQA+j8glkXQgHg3gGgvQAAgGAAgFQAAgCgBgBQgVi7gBhSQAAg5AoiZQAjiDBAjJQCKm2ivjEQhEhNkcgwEALhAkBQBFggCBhAQgcgXgZgVQgBgKAAgPQAAgVAGgcQAJgmARgfQANgXAUgTQAVgUATgGQAbgIBCgCIAygBQAGAAAFAAQBfAAAJABQBQAIAwAEQDIBpBbBIQAZAUDLhvQg9hRhJhKQgTgUgVgSQhJhGhWg+QhnhMh4hCQhFgmg7giQgRgJgQgKQhng9hEgwQhIgzgigjQhKhRg4kwQgDgUgEgVQgVh+hNhqQAsihAWhDQAWhDhCjWQgyikgwgxEgRLggeQgdAFgdAGQAQAkBPDNQAgBUA9CmQBYDwCSGZQBdEEAvDJQABADABADQATBQAKBGQABADABAEQABADAAAEQAXCZgOBrQgFAkgKAeQghBugRBSQgYByAIA8QAGAigPAnQgNAlgfAoQgYAgghAhQgSASgSASQhmBohRBaQheBpg1E5QgKBAgZA6QhcDlkmCVQlvC7AHCOQAGBoAxAIQASADAYgKQA+ANA7gGQC2gTCXjHQhcCpiWCFQB6BGCKgjQAMgJALgHQA+grAogjQA3gvBhhEQA5goAfgNQAygXBPgKQAPgDAQgCQBNgLBtgTQAggGBuAAQDCAABdAUQBhAVB6BFQAfARA5AXQAiANBMAeIEVBoQAFAEAGADQBGArBUAAQARgGAhgPAEV6vIAGAAIAABEIAABPQgEAQgEAQ");
	this.shape_442.setTransform(293.7,367.3);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#A67131").s().p("AAdA1Qg1gjiRhsIgGgQICBBIQB3BBBmBMQhWgOg8gog");
	this.shape_443.setTransform(432,528.3);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#D2903F").s().p("ACCCzQh3gfiKgsQiJhmhcjuQBEAwBnA9IAhATIAGAQQCQBsA2AjQA7AnBXAPQBWA+BJBGIjjg6g");
	this.shape_444.setTransform(429.7,528.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#141505").s().p("Aj5BmQgZglgDgKQgBgHAAgwQgDgrACgOQADgUAbgbQAZgbBCgFIBxAAIBSAAQAvAAAIABQAUABAhgDQBJAkA/AgIiAgMQgJgBhfAAIgLAAIgxABQhCACgbAHQgTAHgVATQgUAUgNAXQgRAegJAmQgGAcAAAVIABAZIgpglg");
	this.shape_445.setTransform(402.8,570);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#CA8B3D").s().p("AgcAoIhrj8QADgqASg1QAbAUAYATQA/AxAnApQA6A6ADAHQAkA9AABkQAABngBATQgGA5gbBRQg+hvhEidg");
	this.shape_446.setTransform(337.3,504.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#5D4121").s().p("AgUCfQgogpg/gxQAZgoAngoIBchZQBAg9Abg+QgPBEgXBeIgPBAQgcCCgEBaQgDgGg4g6g");
	this.shape_447.setTransform(343.3,470.5);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#151706").s().p("AB0ARQgdgRhBAAQgsAAg6AKQhCAOgjAGQAEggAsgfQAqgfAfAAQBVAAAvAYQA1AaA5BPQgwglgSgLg");
	this.shape_448.setTransform(268,524.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#6D4C26").s().p("AHBG1QhjhKgeg9IhjjYQhJiYghgiQhRhRgXgtIgohXQgbgzgPgJQi4hxixAAQhQAAhNAxQg0AhgLAZQAWhLAagiQBAhRDqAAQBwAACjCdQCWCSBOCfIBSCwQAvBiAjA+QBnCpC3CEQACABAEAjIgIAEQhthHhXg+g");
	this.shape_449.setTransform(302.1,541.2);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#30330B").s().p("AF6FCIhugrQg5gXgfgRQh7hFhggVQhdgUjCAAQhuAAggAGQhtAThNALIBDhsQAog9BRiRIAyhVQAgg1AJgUQASguAOgZQAZgvAiAAQAuAACPAgQCMAfALAMQA4A2AVAvQAJAVAgBsQAEAOAZCLQAQBZAhAnQAUAZAWAPQAMAIAmAVIBKAqQA5AeA0AHIACACIBWBTQAUASAUAOgABDjdQg5hPg0gbQgvgXhWAAQgfAAgqAeQgsAggEAgQAjgGBCgNQA6gMAtAAQBBAAAcATQASALAwAkIAAAAg");
	this.shape_450.setTransform(279.5,552.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#4C341A").s().p("AjGEoQCShvA0hDQBdh2A4iAIAAi7IgSAAIAkglQAhghAXggIACA7QAJAiAABJQAACMiPDuQgQAagRAaQh6C1ipA5QAYg6ALg/g");
	this.shape_451.setTransform(202.7,463.7);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#7F582C").s().p("ApWOdQCWiFBciqQCchTCgj5IAGgIQBIg6BFiEQBpjGAkgxQApg1AcgmQA1hIAhg8QBaikgWihQgDgQgEgPIAOgcQA6hpAXgoQAVgjATgcQgEA3gFCoIgDBTQgsBZgfBFQgcA9gdBFQgSAsgQBSQgNBDgeAzQgNAWh5C1QhQB5gVA4Qg5BAg0AtQhKBAg7BrQhCB3gXCdQhCBFg9BGIgXAQQguAMgtAAQhYAAhRgug");
	this.shape_452.setTransform(195.4,503.3);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#442E17").s().p("ANSPYQi4iEhmioQgkg+guhjIhSixQhPieiXiSQijichuAAQjrAAg/BRQgaAhgXBKIgCALIgCAFIgqCjIgZA0QhACFjZDEQiHB6h0B7QAYidBBh2QA8hsBKg/QA0guA5hAQAmgrApgyQCOixAVgXQCXioAnknQAIhDAEhZIAEhTQAEioAEg3QAXghASgYQAZgdAbgnQBWHbAmCEQBbFDEACBQAwBlBCBpQDfFnEtDcIAXAUIAoAlIA2AsQiCBAhFAfQgEgigBgCg");
	this.shape_453.setTransform(281.9,495.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#473118").s().p("AhvCpQgmiEhWnaQA0hMA6hsQgQCZgKBBQgCAUAAB8QAADRBuDuQBNCqB/BIQAdBeAuBiQj/iChclDg");
	this.shape_454.setTransform(288.2,437.5);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#996A35").s().p("AiKD6QgHg7AXhzQAfhCA4hQQAWghBNhaQAwg5AjhJQgFBEgfBeQgkB2hUCKQgUAhg4BxQghBBgdASQAPgogGgig");
	this.shape_455.setTransform(244.2,381.9);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#7B562A").s().p("Ah1DGIgCgGQAbiqAthjQAJgTALgVQAwhaBjiMQhdC3gsDLQgOA+gUBtQgSBVgTA1QgKhGgThQg");
	this.shape_456.setTransform(246.1,301.4);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#25180B").s().p("Ai6F3QAKgfAFgkQAdgZApgsQBChLAWhBQAOgrAShGIAHgeQAWhVANgkQAPgoBVizQAthcAfhaIgcBhQhYEwgeCgQgOBHgfBJIgNAcQgiBIgxA5QhNBagXAiQg3BQgfBDQARhSAhhug");
	this.shape_457.setTransform(255.6,332.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#4B331A").s().p("AmdZLQB5i1ANgXQAegyANhEQAQhSASgsQAdhFAcg8QAfhGAshZQgEBZgJBDQgmEniYCpQgUAXiPCxQgoAygmArQAVg4BQh5gAGYxLQgPirAAg2QAAijAehmQAXhMBFh6QgJEdgpD4QgRBqghCMIgHhbg");
	this.shape_458.setTransform(261.2,349.3);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#110B05").s().p("AiULKQASgbAVhOQAahgAOgpQAPgsAJg+QAGgsABgjIAAinIAAgTQAVg2AWiIQAaivALg7QAVh1BNkeQAOgyAIgsQgCBYgGBBIgIBWIAAhEIgGAAIAGAAIAABEIgIBwQgqCsgYDmQgVDLACCYIgKAhQgUBAgXBBQgwCHhACGIgGANIgrBZQAIgyAFg5g");
	this.shape_459.setTransform(307.4,261.1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#160E06").s().p("AhYHVQgGlpAMh5QAHhSgDiMQgCiMAFg+QAFgzAUhKQAih0BIisIAMARIADAFQAeAxAAAKQhFB6gYBNQgdBlAACjQAAA2APCrIAHBbQAHByABBxIAAATIAACnQgBAkgGAsQgIA9gPAsQgOAqgaBfQgVBOgSAcQARijgFjbg");
	this.shape_460.setTransform(302.6,247.4);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#9A6B36").s().p("AmTY7QDuoDAzhtIAHAfQAWCghaClQghA8g1BHQgcAngpA0QgkAxhpDIQhFCEhJA5QBoiiBqjmgAotSjQBQhaBnhoIASAAIAAC8Qg4B/hdB3Qg1BEiSBuQA1k5BehpgAHutKQAhiNARhqQApj4AJkdQAAgKgegxIABgCQAZAJAPiYQAihMAphUIATADQAKEPgFCvQgJAsgNAzQhOEegVB1QgLA7gZCvQgYCIgUA2QgBhxgIhyg");
	this.shape_461.setTransform(253.3,332.7);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#0D0E04").s().p("AhnFbQipgNhUhtQglgvgjjqQCpCwBzACIAAABQgDABAAADQADAVAAgZQABAXAogFQAOgBAUgGQBGgUBDgwQAwgiANgaQALgZB2ksQBcgRBPgLQiiGUgbA3IhBB0IgsBQQgQAbgPAIQgLAFiUAAQgXAAgVgBg");
	this.shape_462.setTransform(265.7,170.8);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#2C1E0E").s().p("EAHxAjwIgMgHQgUgNgTgSIhWhTIgDgCQgxgyg0g4Qhzj5hOiNQhMiOhJhOQhIhRi9gSQi8gTgiBAQgbAzguBdIAqijIACgFIABgFIABgGQAMgZAzggQBNgxBRAAQCwAAC5BxQAOAIAaA0IAqBWQAXAuBRBRQAhAiBICZIBjDYQAeA9BkBKQBWA+BtBHQgiAPgQAFQhUAAhGgrgEgcdAiTQgXAKgTgDQAwhqBEgrQBOgyBqgFIAVgbQA3hBBkhOIDwi7QCPhxB9mAQARgZAQgbQCPjvAAiMQAAhIgJgjIgBg6QAegpAOgkQAcgSAihBQA4hxATggQBWiMAkh1QAeheAGhEIANgcQAfhIANhIQAfihBYkvIAchhQgfBagtBcQhVCygPAoQgNAlgWBVIgIAdQgRBHgPAsQgWBBhCBKQgpAtgdAZQAOhrgXiZIgBgIIgCgGQATg1AShWQAUhtANg+QAujLBdi4IAeg3QA7hoA4iJQAohjAnh0IAEgMQg+BBgLAJQhPBDhAABQhJAAhXg9QhNg3gkg+IgHgKQhHhmgig5QgohJhWlAIAtgJIBTgRIFXhCQDHglCjgcQh2EsgLAaQgOAagvAiQhEAxhHAUQgTAGgOABQgoAFgCgYQADgBADAAIgGAAQhygCipixQAjDsAlAvQBTBtCqAMQAVACAXAAQCVAAAKgFQAQgIAQgcIAshQIBBh0QAbg3ChmVQBDgMA7gHQgpBTghBNQgQCXgZgIIgDgEIgMgQQhJCsgiB0QgTBJgFAzQgFA/ACCMQADCMgIBRQgLB6AGFqQAEDbgQCiQgGA6gHAxIiHEXQgKAVgMAUQg6Bsg0BMQgbAngZAeQgSAXgXAhQgSAcgWAjQgXApg6BoIgNAdIgCgJIACAJQg0BsjuIEQhqDmhoCiIgFAIQihD6icBSQiWDIi3ATQgSACgTAAQgpAAgrgJgEAZkAhWQhbhHjIhpQg/gghJgkIhXgqIgBgBQBIgeg+gSQhAgUgyAWQkehyhXBqQgSAYgDAdQg1hAg6hkIgCgCQAbhSAGg5QABgSAAhoQAAhkgkg+QADhaAciDIAPhAQAEBCADBzQAICdAaBDQA3CLBkA2QAbAQA+AbQAnAVAfAZQA/ACAhAFQAvAHAMAAQAtAAAwAeIACABQAPAJAOAGQATAIARAEQAKACgOgFIgQgKQCMAsB3AfIDjA6QAUASAUAUQBJBKA8BRQirBegsAAQgIAAgEgEgAr6udQiTmahXjvQg9imghhUQhPjOgPgkIA6gLQBWEJBoCUQAhAuAWAsQAvBbAGBSQAJBmAfA5QBNCOALAZIBDCZQA0BsAzAoQgMAUgIATQguBlgaCpQgvjIhdkEg");
	this.shape_463.setTransform(296.5,367.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#A37134").s().p("AjOItQAahLA3hhQBtjDALhaIAmlAQAUiuAGjJQAwAxAyClQBCDWgWBDQgWBCgsChQgZAzACAIQABAGAAAUQgHAlgNA3QgbA+hAA9IhcBYQgoApgZAoQgXgTgcgUg");
	this.shape_464.setTransform(346.4,417.8);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#21230B").s().p("Ax0PQQB0h7CHh5QDZjFBAiFIAZgzQAuheAbgzQAihAC8ATQC9ASBIBRQBIBOBNCOQBOCNBzD5QA0A4AxAyQg0gHg5geIhJgqQgmgVgMgIQgWgPgUgZQgigngPhZQgZiMgEgOQgghsgJgVQgVgvg3g2QgMgMiMgfQiQgggtAAQgiAAgaAvQgNAZgSAuQgJAUghA1IgxBVQhRCRgoA+IhDBsIggAFQhPAKgyAXQgeANg5AoQhhBEg3AvQgoAjg+ArQA8hGBChGgANSOaQiximAJhjQADgdASgXQBXhrEeBzQAygWBAATQA+AThIAdIABABIBXAqQghADgUgBQgJgBguAAIhTAAIhxAAQhCAGgZAaQgbAbgEAUQgCAPAEAqQAAAxABAHQADAKAZAlIgXgTgADikLIgDgFQgYkbB5kEQAohXBSiLIAshKQAEBMgNBOQgQBcAGAoQAIA+grBFQhCBngCAGQghBXgdCBQgdB+gDBNIgshhg");
	this.shape_465.setTransform(290.6,486);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#895F30").s().p("AiPHGQhChqgwhkQguhigdheQgviYAAiLQAAjMCGjlQAohDC0jnIAmhCIACAdIgqBJQhSCMgoBXQh6EEAYEbIADAEIAsBhIAjBQIAaA8IBsD9QBDCdA/BvIACADQA6BkA0A/QgIBjCxCmQkujdjdlmg");
	this.shape_466.setTransform(337.6,474.9);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#D49240").s().p("AA/EDQBDkSgRjCIgBgFIAUg1IANBmQAkEWg9D8Qg4BNgxBOIgmBCQAyi2AkiRgAiQEDQAHg6AUhiQAUhkAGgTQAYhTALjCQALiyAmhyQAHA8gCBvQACBVAQAtQgSAzABBPQACCYgGApQgPBUhCBgQgbAmgtA7QALgaADgfg");
	this.shape_467.setTransform(337.4,319.5);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#150D05").s().p("Ak3K6QgQgcABgZQAAgKA3iBQBBiRAqgwQA0g8BDhlIA0hSQAqgvAdgoQANgUAHgWQAug7AagmQBDhgAOhVQAHgpgCiYQgChPATg0QAIgVAMgQQAbAPAGAmQACAMAABEQAABcgRA9QgYBZgKBTQgMBngsBnQgTAsg+BzQgkBCg+BOQhFBbg9AsQhHA0g8BbQg6BYgKA/gAjrCMQBlh6AagrIA1hcQAnhCAXgfQAWgcAWhDQAdhSAOgbIAPAAIAABmQgmA3gxBjQgcA5g7B7QhxDihnBQIgJADQgahHBRh0g");
	this.shape_468.setTransform(311.7,357.2);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#7E582C").s().p("AK2XAQgOgGgPgJIgBgBQgxgegtAAQgMAAgvgHQgggEg/gDQgggZgngUQg9gcgcgPQhjg3g4iLQgahDgIicQgCh0gEhCQAXheAPhEQAUguAAguQAAgTgBgHQgCgIAZgzQBNBqAVB+IAHApQA4EwBKBRQAiAjBIAzQBcDvCJBmIAPAKIAFADQgSgDgTgJgAj3NTIgjhQQADhNAdh+QAdiBAihXQACgGBBhnQArhFgIg+QgFgoAPhbQANhOgEhMIgCgdQAwhOA3hNIAAABQAPAFAPAPQgGDJgUCtIgnFCQgKBZhtDDQg3BhgaBLQgSA1gDArIgag9gApsKEQhujvAAjQQAAh9ADgTQAJhAAQiaQAMgTAKgWICHkXIArhaIAGgNQBAiGAxiHQAXhAAUhBIAKggQAXhPAQhJQAOhEAIg/IAEgQQAiiSEngUQgoCZAAA5QABBSAVC7IABADIAAALIgTA1IAAAFQASDChDETQgjCRg0C2QizDmgoBEQiGDkAADMQAACMAvCYQiAhIhOiqgAiMv4QgMDCgXBTQgGAUgUBkQgVBigGA6QgDAfgLAaQgIAWgNAUQgdAqgpAuIg1BSQhEBlg0A8QgqAvhACSQg4CAAAAKQAAAZAPAdIAZAAQAJhAA6hYQA8haBIg1QA8gsBHhaQA9hOAkhCQA+hzATgtQAshmAMhoQAKhTAYhYQARg9AAhdQAAhEgCgMQgGgmgbgOQgLAQgJAVQgQgtgDhVQADhvgIg8QglBygLCygAkhqQQgXBDgVAcQgYAggnBBIg2BcQgaAshkB6QhSB0AaBIIAJgEQBnhQBxjiQA7h7Adg6QAxhjAng3IAAhlIgQAAQgNAbgdBRg");
	this.shape_469.setTransform(345.8,391.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#4D351B").s().p("EgUlAhpQgHiOFvi7QEmiVBcjlQCpg5B7i1Qh9GAiPBwIjwC7QhkBOg2BBIgWAbQhpAGhOAyQhFArgvBpQgxgIgGhogAMOwpQAYjmAqisIAIggIAAhPIAIhXQAGhAAChZQAFivgJkPQEcAwBEBNQCvDEiKG2QhADJgjCDQkoAUgiCSIgEAQQgIA/gOBEQgQBJgXBPQgCiZAVjMgAggtbIhEiZQgKgZhOiOQgfg4gIhnQgHhSgvhbQgWgsghgtQhniVhXkIICogjIBOgPQBVFAApBJQAhA5BHBmIAHAKQAlA+BLA3QBXA9BKAAQBAAABOhDQALgKA+hAIgEAMQgnB0goBiQg4CKg7BnIgeA4QhjCLgxBbQgzgogyhsg");
	this.shape_470.setTransform(236.4,360.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,587.6,601.4), null);


(lib.submit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006633").s().p("AAAA0QgFgCgDgDQgDgEgBgFQgCgFAAgIIAAgnIgJAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgBgHIABgEIAAgDIABgBIACgBIAJAAIAAgRIABgCIABgBIAEgBIAFAAIAFAAIADABIACABIAAACIAAARIARAAIACABIABABIABADIAAAEIgBAHQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgRAAIAAAkQAAAHACADQACADAFAAIAEAAIACgBIACgBIABAAIABAAIABACIABACIAAAEIgBAGIgBADIgCABIgEACIgEAAIgFABQgHAAgEgCg");
	this.shape.setTransform(70.7,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006633").s().p("AAAA8IgEAAIgEgBIgCgBIAAgCIAAhNIAAgBIACgCIAEAAIAEAAIAFAAIAEAAIABACIABABIAABNIgBACIgBABIgEABIgFAAgAgJgmQgDgDAAgGQAAgHADgCQADgDAGAAQAHAAADACQADADAAAGQAAAIgDACQgDADgHAAQgHAAgCgDg");
	this.shape_1.setTransform(65.6,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006633").s().p("AA0AsIgGAAIgEgBIgBgBIgBgCIAAguIAAgGIgDgGIgEgEIgFgBQgEAAgEADQgEADgFAGIAAAzIgBACIgCABIgCABIgGAAIgEAAIgEgBIgCgBIAAgCIAAguIgBgGIgCgGIgEgEIgFgBQgFAAgDADIgJAJIAAAzIgBACIgBABIgEABIgFAAIgGAAIgDgBIgCgBIgBgCIAAhNIABgCIACgBIADgBIAEAAIAFAAIACABIACABIAAACIAAAJQAHgIAHgDQAGgDAHgBIAIABIAHAEIAFAEIADAGIAIgHQADgDADgBIAGgDIAHgBQAIABAGACQAFADADAEQADAFACAGQACAGgBAHIAAAxIAAACIgCABIgDABIgFAAg");
	this.shape_2.setTransform(56.1,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006633").s().p("AgBA+IgGgDIgGgEIgHgGIAAAIIAAACIgCABIgCABIgFAAIgEAAIgEgBIgBgBIgBgCIAAhyIABgCIACgBIAEgBIAEAAIAGAAIADABIACABIABACIAAArIAFgFIAHgEIAFgCIAGAAQAJAAAGADQAGAEAEAGQAEAGACAGQACAIAAAJQgBAKgCAJQgCAIgEAGQgEAGgHADQgHADgHAAIgHAAgAgDgGIgDACIgGAEIgEAFIAAAaIAJAJQAEADAEAAQAEAAADgCQADgCACgDQACgEAAgEIABgJIAAgKIgDgIQgBgDgEgCQgDgCgEAAIgEAAg");
	this.shape_3.setTransform(44.1,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006633").s().p("AgVApQgGgDgDgFQgEgEgBgGQgCgGAAgJIAAgvIABgCIACgBIADAAIAGAAIAFAAIAEAAIABABIABACIAAArIABAKIACAGIAEADQADABADAAQADAAAEgDIAJgJIAAgzIABgCIABgBIAEAAIAFAAIAGAAIADAAIACABIABACIAABNIgBACIgCABIgDABIgEAAIgFAAIgCgBIgCgBIAAgCIAAgJQgHAHgHAEQgFAEgHAAQgJAAgFgDg");
	this.shape_4.setTransform(34.2,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006633").s().p("AgPA6IgJgCIgGgDIgEgDIgCgDIAAgGIAAgFIABgDIABgCIABAAIAEABIAFADIAJAEQAFABAGABIAHgBIAFgDIAEgFIABgGQAAgEgCgCIgFgGIgHgDIgJgFIgJgEQgEgCgEgEQgDgDgCgGQgCgFAAgHQAAgIADgHQADgFAFgEQAFgEAHgDQAHgCAHAAIAIABIAIABIAGADIADACIACACIAAABIAAADIAAAEIAAAEIAAADIgBACIgCAAIgDgBIgFgDIgHgDIgJgBIgFABIgFADIgDAEIgBAEQAAAEACADQACADAEACIAHAEIAJAEIAJAFIAHAFQAEAEACAFQACAFAAAHQAAAJgDAHQgEAGgFAFQgGAFgIACQgHACgIAAIgLgBg");
	this.shape_5.setTransform(25.2,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak9imIJ7AAQBFAAAxAwQAxAxAABFQAABFgxAxQgxAxhFAAIp7AAQhFAAgxgxQgxgxAAhFQAAhFAxgxQAxgwBFAAg");
	this.shape_6.setTransform(48.5,16.7,1.001,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(181,212,67,0.976)").s().p("Ak9CnQhFAAgxgxQgxgxAAhFQAAhEAxgyQAxgwBFAAIJ7AAQBFAAAxAwQAxAyAABEQAABFgxAxQgxAxhFAAg");
	this.shape_7.setTransform(48.5,16.7,1.001,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.submit_mc, new cjs.Rectangle(-1,-1,99,35.4), null);


(lib.stripVocab_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.851)").s().p("AgOA6IgCgBIgBgBIABgDIALgbIgCgBIgBgCIgchKIgBgEIABgBIACgBIAEAAIAFAAIACABIABAAIABACIAWA/IAWg/IABgCIACgBIAFAAIAEAAIACABIABABIgBAEIgcBNIgKAdIgCADIgHAAIgEAAg");
	this.shape.setTransform(101.6,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.851)").s().p("AgPArIgEAAIgCAAIAAgBIgBgBIAAhPIAAgBIABgBIACgBIAEAAIADAAIABABIACABIAAABIAAALIAGgHIAFgEIAEgDIAGgBIACAAIADABIADAAIACACIABABIAAABIAAABIAAADIAAAEIAAACIgBABIgBAAIgBAAIgDgBIgDAAIgDgBIgFABIgEACIgEAGIgGAJIAAAzIAAABIgBABIgCAAIgEAAg");
	this.shape_1.setTransform(94.9,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.851)").s().p("AgPAqQgFgBgEgDQgDgDgCgFQgCgFAAgFQAAgHACgFQADgFAFgDQAFgCAHgCQAIgCAIABIALAAIAAgHIgBgIQgBgDgCgCQgCgDgEgBQgDgBgFgBQgEABgFABIgHADIgFADIgEAAIgBAAIgBAAIgBgCIAAgDIABgEIABgCIAFgDIAGgDIAIgBIAIgBQAJAAAGACQAGABADAFQAEADACAGQABAFABAHIAAA1IgBABIgCABIgEAAIgDAAIgCgBIgBgBIAAgIQgFAFgHADQgGADgGAAQgGAAgFgBgAgDAFIgIADQgDACgBACQgCADAAAEQAAAGAFAEQADADAIAAQAEAAAFgCQAFgEAFgFIAAgRIgMAAIgJABg");
	this.shape_2.setTransform(86.7,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.851)").s().p("AAAA9IgDAAIgCAAIgBgBIAAgBIAAh1IAAgBIABAAIACgBIADAAIAEAAIACABIABAAIAAABIAAB1IAAABIgBABIgCAAIgEAAg");
	this.shape_3.setTransform(80.5,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.851)").s().p("AgSAoQgFgCgEgFQgDgEgCgGQgBgGAAgJIAAgvIAAgBIABgBIADgBIADAAIAEAAIACABIABABIABABIAAAtIABALIACAHIAGAFQADABAFAAQAEAAAFgDQAGgEAFgIIAAg2IABgBIABgBIADgBIADAAIADAAIADABIABABIAAABIAABOIAAABIgBABIgCABIgDAAIgDAAIgDgBIgBgBIAAgBIAAgKQgHAHgGADQgHAEgGAAQgHAAgGgDg");
	this.shape_4.setTransform(73.8,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.851)").s().p("AgDA+IgHgDIgGgEIgGgHIAAALIgBABIgBABIgCAAIgDAAIgDAAIgCAAIgBgBIAAgBIAAh1IAAgCIABAAIACgBIAEAAIAEAAIACABIABAAIAAACIAAAwIAHgHIAGgEIAHgCIAFgBQAJAAAGAEQAGADAEAGQAEAGACAGQABAIAAAIQAAALgCAIQgCAIgEAGQgFAGgGADQgGADgJAAIgFAAgAgDgKIgFACIgGAFIgHAGIAAAgQAGAHAGAEQAFAEAFAAQAGAAADgDQAEgDADgEQACgEABgGIABgLIgBgLQAAgGgDgDQgCgFgEgDQgEgCgFAAIgFABg");
	this.shape_5.setTransform(64.6,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.851)").s().p("AgPAqQgFgBgEgDQgEgDgCgFQgCgFAAgFQAAgHADgFQADgFAFgDQAFgCAIgCQAHgCAIABIALAAIAAgHIgBgIQgBgDgCgCQgCgDgDgBQgEgBgFgBQgEABgEABIgIADIgGADIgCAAIgCAAIgBAAIAAgCIAAgDIAAgEIACgCIADgDIAHgDIAJgBIAIgBQAIAAAGACQAGABAEAFQADADACAGQABAFAAAHIAAA1IAAABIgCABIgDAAIgFAAIgCgBIAAgBIAAgIQgFAFgGADQgHADgGAAQgGAAgFgBgAgEAFIgHADQgDACgBACQgCADABAEQAAAGADAEQAFADAGAAQAFAAAFgCQAFgEAFgFIAAgRIgNAAIgJABg");
	this.shape_6.setTransform(55.1,15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.851)").s().p("AgKApQgHgDgEgGQgFgFgCgIQgCgIAAgKQAAgLADgIQACgJAFgFQAFgFAHgDQAHgCAHAAIAHAAIAGACIAGADIADACIACACIAAABIABACIAAADIgBAFQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgDgBIgEgEIgHgDQgEgBgFAAQgJAAgGAIQgFAIAAAOQAAAIABAGQACAFACAEQADAEAEACQADACAGAAQAFAAAEgCIAGgDIAFgEIADgBIABAAIABABIAAADIAAADIAAACIAAACIgBABIgBACIgEADIgGADIgHACIgIAAQgIAAgGgCg");
	this.shape_7.setTransform(47.4,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.851)").s().p("AgRApQgHgDgFgGQgFgFgCgIQgCgIgBgKQABgIACgJQADgIAEgGQAGgGAHgDQAIgEAJABQAJAAAIACQAHADAFAGQAFAFACAJQACAHABAKQgBAJgCAIQgDAJgEAFQgGAGgIADQgHADgJAAQgJAAgIgCgAgKgcQgFADgDADQgCAFgCAFQgCAGABAGIABAMQABAGACAEQAEAEAEADQAFADAGgBQAGABAFgDQAFgCADgEQACgFACgFQACgGgBgGIgBgMIgDgKQgEgEgEgDQgFgCgHAAQgFAAgFACg");
	this.shape_8.setTransform(38.7,15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.851)").s().p("AAAA5IgCAAIgDAAIgCAAIgBgBIgBgBIAAgBIglhpIgBgCIABgCIACgBIAFAAIAEAAIACABIABABIABABIAgBfIAghfIAAgBIACgBIACgBIAEAAIAEAAIACABIABACIgBACIglBpIgBACIgBABIgDAAIgFAAg");
	this.shape_9.setTransform(28.9,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F291E").s().p("AgCBMQgdAAgQgMQgMgJgBgUQAAgNAEgYQACgIAFgCIAFgBIAEAAIAAgXQABgRALgLQAMgMAQAAQARAAALAMQAMAMAAAQIAAAXQAJAAACABQAFADABAIQAGAYgCAPQgCAXgQAHQgSAJgZAAIgCgBgAgJADQgFAFAAAGQAAAEADAEQADADAEACIgJAZIAaAAIgIgZQAEgCACgDQADgEAAgEQAAgGgEgFQgEgDgGAAQgFAAgEADgAgRg1QgHAHAAAKIAAAXIAwAAIAAgXQAAgKgHgHQgHgHgKAAQgJAAgIAHg");
	this.shape_10.setTransform(14.6,13.1,0.967,0.967);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(193,146,75,0.851)").s().p("AnwB6QhJAAAAhJIAAhhQAAhJBJAAIPgAAQBKAAAABJIAABhQAABJhKAAg");
	this.shape_11.setTransform(57,13.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3F291E").s().p("AgDBQQgbgBgQgLQgMgJAAgTQgBgNAEgYQACgHAGgCIAEAAIAEAAIAAgjQABgQALgKQALgMAQAAQAQAAALAMQALALABAQIAAAMIgQAAIAAgMQAAgKgHgHQgHgHgJAAQgJAAgIAHQgHAHAAAKIAAAiIBCAAIAHABQAFACABAHQAFAYgCAPQgCAWgPAGQgRAJgYAAIgDAAgAgJAJQgFAEAAAGQAAAFADADQADADAEACIgJAYIAZAAIgIgYQAEgCADgDQACgDAAgFQAAgGgEgEQgEgEgFAAQgFAAgEAEg");
	this.shape_12.setTransform(14.6,13.1,1,1,0,0,0,0,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B19C60").s().p("AnwB6QhJAAAAhJIAAhhQAAhJBJAAIPgAAQBKAAAABJIAABhQAABJhKAAg");
	this.shape_13.setTransform(57,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,26);


(lib.stripGram_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.851)").s().p("AgPArIgEAAIgBAAIgBgBIgBgBIAAhPIAAgBIACgBIABgBIADAAIAEAAIACABIABABIAAABIAAALIAGgHIAEgEIAGgDIAEgBIAEAAIACABIADAAIACACIABABIAAABIAAABIAAADIAAAEIAAACIgBABIgBAAIgCAAIgCgBIgDAAIgEgBIgDABIgFACIgEAGIgGAJIAAAzIAAABIgBABIgCAAIgEAAg");
	this.shape.setTransform(91.1,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.851)").s().p("AgPAqQgGgBgDgDQgDgDgCgFQgCgFgBgFQABgHADgFQACgFAFgDQAFgCAIgCQAHgCAIABIALAAIAAgHIgBgIQgBgDgCgCQgCgDgEgBQgDgBgFgBQgFABgDABIgIADIgFADIgEAAIgBAAIgBAAIAAgCIAAgDIAAgEIABgCIAFgDIAGgDIAIgBIAIgBQAJAAAGACQAGABAEAFQADADACAGQACAFAAAHIAAA1IgBABIgCABIgDAAIgEAAIgDgBIAAgBIAAgIQgFAFgHADQgGADgGAAQgGAAgFgBgAgDAFIgIADQgDACgBACQgBADgBAEQAAAGAFAEQADADAIAAQAEAAAFgCQAFgEAFgFIAAgRIgMAAIgJABg");
	this.shape_1.setTransform(82.9,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.851)").s().p("AAzArIgDAAIgCAAIgCgBIAAgBIAAgwIgBgJIgDgHQgCgDgDgBQgDgCgEAAQgFAAgFADQgFAEgGAIIAAA3IAAABIgBABIgDAAIgDAAIgDAAIgCAAIgBgBIAAgBIAAgwIgBgJIgDgHQgCgDgDgBQgDgCgEAAQgFAAgFADQgFAEgGAIIAAA3IgBABIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgBIAAhPIAAgBIACgBIACgBIADAAIADAAIACABIABABIAAABIAAALQAHgIAGgDQAHgEAGAAQAFAAAEABIAHAEIAEAEIADAHIAIgIIAHgEIAGgDIAGgBQAIAAAFADQAFADAEAEQADAEABAHQACAFAAAHIAAAyIgBABIgBABIgCAAIgEAAg");
	this.shape_2.setTransform(71.6,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.851)").s().p("AAzArIgDAAIgCAAIgCgBIAAgBIAAgwIgBgJIgDgHQgCgDgDgBQgDgCgEAAQgFAAgFADQgFAEgGAIIAAA3IAAABIgBABIgDAAIgDAAIgDAAIgCAAIgBgBIAAgBIAAgwIgBgJIgDgHQgCgDgDgBQgDgCgEAAQgFAAgFADQgFAEgGAIIAAA3IgBABIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgBIAAhPIAAgBIACgBIACgBIADAAIADAAIACABIABABIAAABIAAALQAHgIAGgDQAHgEAGAAQAFAAAEABIAHAEIAEAEIADAHIAIgIIAHgEIAGgDIAGgBQAIAAAFADQAFADAEAEQADAEABAHQACAFAAAHIAAAyIgBABIgBABIgCAAIgEAAg");
	this.shape_3.setTransform(57.2,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.851)").s().p("AgPAqQgGgBgDgDQgEgDgCgFQgBgFAAgFQAAgHACgFQADgFAFgDQAFgCAHgCQAIgCAIABIALAAIAAgHIgBgIQgBgDgCgCQgCgDgEgBQgDgBgFgBQgEABgFABIgHADIgFADIgDAAIgCAAIgBAAIgBgCIAAgDIABgEIACgCIAEgDIAGgDIAJgBIAIgBQAIAAAGACQAGABADAFQAEADACAGQACAFgBAHIAAA1IAAABIgCABIgEAAIgDAAIgCgBIgBgBIAAgIQgFAFgHADQgGADgGAAQgGAAgFgBgAgEAFIgHADQgDACgBACQgBADAAAEQAAAGADAEQAFADAGAAQAFAAAFgCQAFgEAFgFIAAgRIgNAAIgJABg");
	this.shape_4.setTransform(45.5,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.851)").s().p("AgPArIgDAAIgCAAIgBgBIgBgBIAAhPIAAgBIACgBIACgBIACAAIAEAAIACABIABABIAAABIAAALIAGgHIAEgEIAGgDIAEgBIAEAAIADABIACAAIACACIABABIAAABIAAABIAAADIAAAEIAAACIgBABIgBAAIgCAAIgCgBIgDAAIgEgBIgDABIgFACIgEAGIgGAJIAAAzIAAABIgBABIgCAAIgEAAg");
	this.shape_5.setTransform(38.8,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.851)").s().p("AgNA2QgKgDgHgIQgIgIgDgKQgEgLAAgNQAAgMAEgMQAEgKAHgIQAIgIAKgEQALgFALAAQAHAAAFACIALADIAHADIAEADIACADIAAADIAAAEIAAACIgBABIgBAAIgEgBIgHgEIgJgEQgGgBgIAAQgJAAgHADQgHAEgGAFQgFAHgDAIQgCAJAAAIQAAALADAIQADAJAFAGQAFAFAIAEQAGACAJABIALgCQAFgBAFgDIAAghIgaAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAIAAgFIAAgCIAAgBIABgCIACAAIAkAAIACAAIABABIACACIAAACIAAAsIgBADQAAABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIgHADIgIACIgJACIgIAAQgNAAgKgEg");
	this.shape_6.setTransform(29.2,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3F291E").s().p("AgCBMQgdAAgQgMQgMgJgBgUQAAgNAEgYQACgIAFgCIAFgBIAEAAIAAgXQABgRALgLQAMgMAQAAQARAAALAMQAMAMAAAQIAAAXQAJAAACABQAFADABAIQAGAYgCAPQgCAXgQAHQgSAJgZAAIgCgBgAgJADQgFAFAAAGQAAAEADAEQADADAEACIgJAZIAaAAIgIgZQAEgCACgDQADgEAAgEQAAgGgEgFQgEgDgGAAQgFAAgEADgAgRg1QgHAHAAAKIAAAXIAwAAIAAgXQAAgKgHgHQgHgHgKAAQgJAAgIAHg");
	this.shape_7.setTransform(14.6,13.1,0.967,0.967);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(193,146,75,0.851)").s().p("AnIB6QhJAAAAhJIAAhhQAAhJBJAAIOQAAQBKAAAABJIAABhQAABJhKAAg");
	this.shape_8.setTransform(53,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3F291E").s().p("AgDBQQgbgBgQgLQgMgJAAgTQgBgNAEgYQACgHAGgCIAEAAIAEAAIAAgjQABgQALgKQALgMAQAAQAQAAALAMQALALABAQIAAAMIgQAAIAAgMQAAgKgHgHQgHgHgJAAQgJAAgIAHQgHAHAAAKIAAAiIBCAAIAHABQAFACABAHQAFAYgCAPQgCAWgPAGQgRAJgYAAIgDAAgAgJAJQgFAEAAAGQAAAFADADQADADAEACIgJAYIAZAAIgIgYQAEgCADgDQACgDAAgFQAAgGgEgEQgEgEgFAAQgFAAgEAEg");
	this.shape_9.setTransform(14.6,13.1,1,1,0,0,0,0,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B19C60").s().p("AnIB6QhJAAAAhJIAAhhQAAhJBJAAIOQAAQBKAAAABJIAABhQAABJhKAAg");
	this.shape_10.setTransform(53,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,26);


(lib.stripComre_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.851)").s().p("AAbArIgEAAIgCAAIgBgBIAAgBIAAguIgBgLIgEgHQgCgDgDgBQgDgCgEAAQgEAAgGADQgFAEgHAIIAAA3IAAABIgBABIgCAAIgEAAIgEAAIgCAAIAAgBIgBgBIAAhPIAAgBIABgBIACgBIAEAAIADAAIABABIACABIAAABIAAALQAGgIAIgDQAGgEAGAAQAHAAAGADQAGADADAEQADAEABAHQACAFAAAJIAAAwIgBABIgBABIgCAAIgDAAg");
	this.shape.setTransform(135.1,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.851)").s().p("AgRApQgHgDgFgGQgFgFgCgIQgCgIAAgKQAAgIACgJQADgIAFgGQAEgGAIgDQAHgEAKABQAJAAAIACQAHADAFAGQAEAFADAJQACAHAAAKQAAAJgCAIQgDAJgFAFQgFAGgHADQgIADgJAAQgJAAgIgCgAgKgcQgFADgDADQgCAFgCAFQgCAGAAAGIABAMQACAGADAEQADAEAEADQAFADAGgBQAGABAFgDQAEgCADgEQADgFACgFQABgGABgGIgBgMIgFgKQgDgEgEgDQgFgCgHAAQgFAAgFACg");
	this.shape_1.setTransform(125.6,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.851)").s().p("AAAA6IgCAAIgDAAIgBgBIAAgBIAAhPIAAgBIABAAIADgBIACAAIAEAAIACABIABAAIABABIAABPIgBABIgBABIgCAAIgEAAgAgGgqQgCgCAAgFQAAgFACgCQACgCAEAAQAGAAACACQABACAAAFQAAAFgCACQgBACgGAAQgEAAgCgCg");
	this.shape_2.setTransform(118.8,13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.851)").s().p("AgKArIgHgCIgFgCIgDgBIgBgDIgBgEIABgDIAAgCIABgBIABgBIACABIAFAEIAGACIAJABIAGgBIAFgCQACgCABgCQACgCAAgDQAAgEgCgCIgEgEIgHgEIgGgCIgIgDIgFgEQgEgDgBgEQgCgEAAgFQAAgEACgFQABgEAFgDQADgDAGgCQAEgCAHAAIAGABIAGABIAFABIACACIABABIAAACIABABIAAACIAAADIgBACIgBABIAAAAIgCgBIgFgCIgFgCIgHgBIgGABIgEACIgDAEIgBAEQAAAEACACIAEAEIAGAEIAHACIAHADIAHAEIAFAHQABADAAAGQAAAFgCAFQgDAFgDADQgEADgGACQgGABgGAAIgIAAg");
	this.shape_3.setTransform(113.2,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.851)").s().p("AAbArIgDAAIgDAAIgBgBIgBgBIAAguIgBgLIgCgHQgCgDgEgBQgDgCgEAAQgEAAgGADQgGAEgGAIIAAA3IAAABIgBABIgCAAIgEAAIgDAAIgCAAIgCgBIAAgBIAAhPIAAgBIACgBIACgBIACAAIAEAAIACABIABABIAAABIAAALQAHgIAGgDQAHgEAGAAQAHAAAGADQAGADADAEQADAEACAHQABAFAAAJIAAAwIAAABIgBABIgCAAIgEAAg");
	this.shape_4.setTransform(105,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.851)").s().p("AgNApQgHgDgFgFQgFgGgDgHQgDgJAAgKQAAgKAEgHQACgJAFgGQAFgFAHgDQAHgEAIABQAJAAAGACQAHADAFAGQADAFACAGQACAIAAAHIAAADQAAABAAABQAAAAAAAAQAAAAgBABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIg0AAQABAGABAGQABAGAEADQACAEAGACQAEACAHAAIAJgBIAJgCIAEgCIAEgBIABABIABAAIAAACIAAACIAAACIAAACIAAABIgBACIgDABIgGACIgJACIgLAAQgIAAgIgCgAgIgdQgDACgDAEIgFAIIgCAJIArAAQAAgMgFgGQgGgHgKAAQgEAAgFACg");
	this.shape_5.setTransform(95.8,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.851)").s().p("AAbA9IgDAAIgDAAIgBgBIgBgBIAAguIgBgLIgDgGQgCgDgDgCQgDgBgEgBQgFABgFADQgGAEgGAHIAAA3IAAABIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgBIAAh1IABgBIABAAIACgBIADAAIAEAAIACABIABAAIAAABIAAAwQAHgHAGgDQAGgEAGABQAHAAAGACQAFADAEAFQADAEACAGQABAFAAAJIAAAwIgBABIAAABIgCAAIgEAAg");
	this.shape_6.setTransform(86.7,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.851)").s().p("AgNApQgHgDgFgFQgFgGgDgHQgDgJAAgKQABgKADgHQACgJAFgGQAFgFAHgDQAHgEAIABQAJAAAGACQAHADAFAGQADAFACAGQACAIABAHIAAADQAAABgBABQAAAAAAAAQAAAAgBABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIg0AAQABAGABAGQACAGADADQACAEAGACQAEACAGAAIAKgBIAJgCIAFgCIADgBIABABIAAAAIABACIAAACIAAACIAAACIgBABIgBACIgCABIgGACIgJACIgLAAQgIAAgIgCgAgHgdQgFACgCAEIgFAIIgCAJIArAAQAAgMgFgGQgGgHgKAAQgEAAgEACg");
	this.shape_7.setTransform(77.4,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.851)").s().p("AgPArIgEAAIgCAAIgBgBIAAgBIAAhPIAAgBIABgBIACgBIAEAAIADAAIABABIACABIAAABIAAALIAGgHIAFgEIAEgDIAGgBIACAAIAEABIACAAIACACIAAABIABABIAAABIAAADIAAAEIgBACIAAABIgBAAIgBAAIgDgBIgDAAIgDgBIgFABIgEACIgEAGIgFAJIAAAzIgBABIgBABIgCAAIgEAAg");
	this.shape_8.setTransform(70.3,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.851)").s().p("AgcA7IgEAAIgCgBIgBgBIAAgBIAAhuIAAgBIABgBIACAAIADAAIADAAIACAAIABABIAAABIAAALIAHgGIAHgFIAHgDIAHgBQAIAAAGAEQAGADAEAGQAEAGACAIQABAHAAAJQAAAKgCAHQgCAJgEAFQgFAGgGADQgHADgIAAIgFAAIgGgCIgGgEIgGgGIAAAoIAAABIgBABIgCABIgEAAgAgDgsIgFACIgGAFIgHAHIAAAfQAGAHAGAEQAFAEAFAAQAFAAAEgDQAEgCADgFQACgEABgFIABgLIgBgLQAAgGgDgEQgCgFgEgCQgEgDgFAAIgFABg");
	this.shape_9.setTransform(62.2,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.851)").s().p("AAzArIgDAAIgCAAIgCgBIAAgBIAAgwIgBgJIgDgHQgCgDgDgBQgDgCgEAAQgFAAgFADQgFAEgGAIIAAA3IAAABIgBABIgDAAIgDAAIgDAAIgCAAIgBgBIAAgBIAAgwIgBgJIgDgHQgCgDgDgBQgDgCgEAAQgFAAgFADQgFAEgGAIIAAA3IgBABIgBABIgCAAIgEAAIgDAAIgCAAIgBgBIgBgBIAAhPIAAgBIACgBIACgBIADAAIADAAIACABIABABIAAABIAAALQAHgIAGgDQAHgEAGAAQAFAAAEABIAHAEIAEAEIADAHIAIgIIAHgEIAGgDIAGgBQAIAAAFADQAFADAEAEQADAEABAHQACAFAAAHIAAAyIgBABIgBABIgCAAIgEAAg");
	this.shape_10.setTransform(50.1,14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.851)").s().p("AgRApQgHgDgFgGQgFgFgCgIQgDgIAAgKQAAgIADgJQACgIAGgGQAFgGAHgDQAIgEAJABQAKAAAHACQAHADAFAGQAEAFADAJQADAHgBAKQABAJgDAIQgDAJgFAFQgFAGgHADQgIADgJAAQgJAAgIgCgAgKgcQgEADgDADQgDAFgCAFQgBAGgBAGIABAMQACAGADAEQADAEAEADQAFADAGgBQAGABAFgDQAFgCADgEQADgFABgFQACgGAAgGIgCgMIgEgKQgCgEgFgDQgFgCgHAAQgGAAgEACg");
	this.shape_11.setTransform(38.1,15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.851)").s().p("AgMA2QgJgDgGgHQgGgIgEgKQgDgLAAgOQAAgNADgLQAEgLAHgIQAGgHAJgEQAKgEAKAAIAJABIAJACIAHADIAEADIACACIAAABIABACIAAADIAAADIgBACIgBABIgBABIgDgCIgGgEIgJgDQgFgCgGAAQgIAAgFADQgHADgEAGQgEAGgDAIQgCAJAAAKQAAAKACAJQACAIAFAGQAEAFAHADQAFADAIAAQAHAAAFgCIAJgEIAFgDIAEgCIABAAIABABIAAACIAAAEIAAACIAAACIgBABIgBACIgEADIgHADIgJADIgMABQgKAAgJgEg");
	this.shape_12.setTransform(28.7,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3F291E").s().p("AgCBMQgdAAgQgMQgMgJgBgUQAAgNAEgYQACgIAFgCIAFgBIAEAAIAAgXQABgRALgLQAMgMAQAAQARAAALAMQAMAMAAAQIAAAXQAJAAACABQAFADABAIQAGAYgCAPQgCAXgQAHQgSAJgZAAIgCgBgAgJADQgFAFAAAGQAAAEADAEQADADAEACIgJAZIAaAAIgIgZQAEgCACgDQADgEAAgEQAAgGgEgFQgEgDgGAAQgFAAgEADgAgRg1QgHAHAAAKIAAAXIAwAAIAAgXQAAgKgHgHQgHgHgKAAQgJAAgIAHg");
	this.shape_13.setTransform(14.6,13.1,0.967,0.967);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(193,146,75,0.851)").s().p("AqyB6QhKAAAAhJIAAhhQAAhJBKAAIVlAAQBKAAAABJIAABhQAABJhKAAg");
	this.shape_14.setTransform(76.5,13.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3F291E").s().p("AgDBQQgbgBgQgLQgMgJAAgTQgBgNAEgYQACgHAGgCIAEAAIAEAAIAAgjQABgQALgKQALgMAQAAQAQAAALAMQALALABAQIAAAMIgQAAIAAgMQAAgKgHgHQgHgHgJAAQgJAAgIAHQgHAHAAAKIAAAiIBCAAIAHABQAFACABAHQAFAYgCAPQgCAWgPAGQgRAJgYAAIgDAAgAgJAJQgFAEAAAGQAAAFADADQADADAEACIgJAYIAZAAIgIgYQAEgCADgDQACgDAAgFQAAgGgEgEQgEgEgFAAQgFAAgEAEg");
	this.shape_15.setTransform(14.6,13.1,1,1,0,0,0,0,0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B19C60").s().p("AqyB6QhKAAAAhJIAAhhQAAhJBKAAIVlAAQBKAAAABJIAABhQAABJhKAAg");
	this.shape_16.setTransform(76.5,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,26);


(lib.start_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F6F42").s().p("AEIIUQgbgCgkgLQgVgHgsgTQgvgUgYgIQgmgNgbAAQgZAAgjALQgZAIgsATIgGADQgwAUgWAHQglAMgcAAQgpAAgcgXQgcgVgKgmQgGgZACgkQABgVAGguIABgEQAGguABgYQACgpgJgaQgIgZgaghQgOgTgmgqIgogtQghgngNgfQgQgrAPgnQAOgkAlgUQAUgLAggHQAYgFAxgGQA2gHAWgFQAqgJAWgQQAegWAlhJIAOgdQAlhLAXgcQAngvAyAAQAyAAAnAvQAXAcAlBLQAZAzANAVQAWAlAWAPQASAOAiAJQAaAHA9AHQA2AHATAEQAgAHAUALQAmAUAOAkQAPAngRArQgMAfghAnIgpAtQglApgPAUQgaAhgIAZQgIAaABApQABAYAHAuIAAAEQAHAuABAVQACAkgHAZQgKAmgbAVQgdAXgoAAg");
	this.shape.setTransform(0,0,0.32,0.32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.4)").s().p("AjGEMQgegXANhiQAQh2gPgtQgOgrhbhkQhIhOANgoQgKAiBZBNQBpBbANAqQAOAogOBpQgMBXAaAVQAdAXBUgkQBogrApAAQAsAAB1BDQBkA6AdgUQghAYhegnQh2gxgtAAQguAAh1AxQg6AYgiAAQgWAAgMgKg");
	this.shape_1.setTransform(-3,5.7,0.33,0.33);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.4)").s().p("ABnCFQiGgKglgaQgjgagziBQgshvgkgDQApADAxBhQA6B2AnAcQAmAcB8AQQBnANARAqQgOgfh2gJg");
	this.shape_2.setTransform(7.8,-9.2,0.33,0.33);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.11)").s().p("ACuDVQh9g0gxAAQgwAAh9A0QhlAqgigaQghgZAPhpQAQh9gPgxQgKgegZghQBVgJBsgwQBhgrBGAAQBHAABhArQBrAwBVAJQgYAhgKAeQgQAyARB8QAPBpghAZQgNAKgXAAQglAAg+gag");
	this.shape_3.setTransform(0,7.9,0.33,0.33);

	this.instance = new lib.Mesh();
	this.instance.parent = this;
	this.instance.setTransform(-16.7,-15.9,0.33,0.33);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFE600","#CC6600","#953C13"],[0,0.788,1],0,-53.1,0,53.2).s().p("AEIIUQgbgCgkgLQgVgHgsgTQgvgUgYgIQgmgNgbAAQgZAAgjALQgZAIgsATIgGADQgwAUgWAHQglAMgcAAQgpAAgcgXQgcgVgKgmQgGgZACgkQABgVAGguIABgEQAGguABgYQACgpgJgaQgIgZgaghQgOgTgmgqIgogtQghgngNgfQgQgrAPgnQAOgkAlgUQAUgLAggHQAYgFAxgGQA2gHAWgFQAqgJAWgQQAegWAlhJIAOgdQAlhLAXgcQAngvAyAAQAyAAAnAvQAXAcAlBLQAZAzANAVQAWAlAWAPQASAOAiAJQAaAHA9AHQA2AHATAEQAgAHAUALQAmAUAOAkQAPAngRArQgMAfghAnIgpAtQglApgPAUQgaAhgIAZQgIAaABApQABAYAHAuIAAAEQAHAuABAVQACAkgHAZQgKAmgbAVQgdAXgoAAg");
	this.shape_4.setTransform(0,0,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-17,35.5,34.1);


(lib.scroreHolder_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAqQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgCgEIAAgGIAAgHIACgDIAEgCIAFgBIAGABIADACIADADIABAHIgBAGIgDAEQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAABIgGAAIgFAAgAgFgPIgEgCIgCgFIAAgFIAAgHIACgEIAEgCIAFgBIAGABIADACIADAEIABAHIgBAFIgDAFIgDACIgGAAIgFAAg");
	this.shape.setTransform(64.2,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAqQgIgDgFgFQgFgGgDgIQgCgIAAgLQAAgKACgIQADgIAFgGQAGgGAHgDQAHgDAIAAQAKAAAIADQAGADAFAFQAFAFACAHQABAHAAAIIAAAEQAAADgBACQgCACgEAAIguAAIABAJIAEAHQACADAEABQAEACAFAAIALgBIAHgCIAFgCIAEgBIACABIAAABIABACIAAAEIAAADIAAACIgBACIgBABIgDACIgHACIgJACIgLAAQgJAAgIgCgAgGgaIgEAEIgEAHQgBADAAAEIAgAAQABgJgFgFQgDgGgJAAQgEAAgDACg");
	this.shape_1.setTransform(57,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAsIgFAAIgEgCIgCgBIAAgBIAAhOIAAgBIACgBIADgBIAEAAIAFAAIADABIABABIABABIAAALIAFgIIAFgFIAFgCIAFAAIACAAIADAAIACABIACAAIAAABIABACIAAADIAAAFIAAAFIgBADIAAACIgCAAIgBAAIgCgBIgDgBIgDAAIgDABIgEADIgEAEIgEAGIAAAwIgBABIgBABIgEACIgFAAg");
	this.shape_2.setTransform(49.7,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSApQgIgDgFgFQgFgGgDgIQgCgIAAgKQAAgJACgIQADgJAFgGQAGgGAIgDQAIgDAKAAQALAAAHADQAIADAFAFQAFAGACAIQADAIAAAKQAAAJgDAJQgDAIgFAGQgFAGgIADQgIADgKAAQgLAAgHgDgAgHgYQgEACgDADQgCAEgBAFQgBAFAAAFIABALIACAIQADAEAEACQADACAFAAQAEAAAFgCQADgCACgDQADgEABgFIABgLIgBgJIgDgJQgCgEgEgCQgDgCgGAAQgEAAgDACg");
	this.shape_3.setTransform(41.3,21.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKApQgHgCgFgGQgEgFgCgIQgDgIAAgKQAAgLADgJQADgIAFgGQAFgGAIgCQAGgDAJAAIAGABIAGABIAGADIADACIABACIABABIAAADIAAAEIgBAHQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDgBIgEgDIgFgDQgDgBgEAAQgJAAgEAHQgFAGABAMIABALIADAIIAFAFQADACAFAAQAEAAAEgCIAFgDIAFgDIACgBIABAAIABACIAAADIABAFIAAAEIgBACIAAACIgCACIgDACIgGADIgHABIgIABQgIAAgHgDg");
	this.shape_4.setTransform(32.7,21.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPA6IgJgCIgGgDIgEgDIgCgDIAAgGIAAgFIABgDIABgBIABgBIAEACIAFACIAJAEQAFACAGAAIAHgBIAFgEIAEgEIABgGQAAgEgCgDIgFgEIgHgFIgJgDIgJgGQgEgBgEgEQgDgDgCgGQgCgFAAgHQAAgIADgGQADgHAFgDQAFgFAHgBQAHgDAHAAIAIABIAIACIAGACIADACIACACIAAACIAAACIAAADIAAAFIAAADIgBABIgCABIgDgBIgFgDIgHgCIgJgBIgFAAIgFADIgDADIgBAFQAAAEACADQACADAEACIAHAEIAJAEIAJAFIAHAFQAEAEACAFQACAFAAAHQAAAJgDAGQgEAIgFAEQgGAFgIABQgHADgIAAIgLgBg");
	this.shape_5.setTransform(24.6,20.4);

	this.score_txt = new cjs.Text("100/100", "bold 20px 'Calibri'", "#FFFFFF");
	this.score_txt.name = "score_txt";
	this.score_txt.lineHeight = 24;
	this.score_txt.lineWidth = 80;
	this.score_txt.parent = this;
	this.score_txt.setTransform(70.6,7.8);
	this.score_txt.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#277700").ss(2,1,1).p("AtYjKIXmAAQBUAAA7A7QA8A8AABTQAABUg8A7Qg7A8hUAAI3mAAg");
	this.shape_6.setTransform(85.6,20.3,0.986,1,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5D443").s().p("AtYDKIAAmUIXmAAQBUABA7A6QA8A8AABTQAABUg8A7Qg7A8hUgBg");
	this.shape_7.setTransform(85.6,20.3,0.986,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AtYDKIAAmUIXmAAQBUABA7A6QA8A8AABTQAABUg8A7Qg7A8hUgBg");
	this.shape_8.setTransform(84.5,22.4,0.986,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.score_txt},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scroreHolder_mc, new cjs.Rectangle(-3,-3,181,53), null);


(lib.right_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,102,0,0)","#00CC00"],[0.263,0.314],-37.2,0.8,-43.2,0.8).s().p("AiOExQgNgMgQgZIgcgoQgyhAgugxQhChLBXgnQAZgLAYAYQANAOASAbQAzA9AkAyQBkipBjiCQAzhABJhNQArguAuANQATAFAAAQQABARgZAYQiECDhvCTQg5BOg9BsIgkBAQgSAcgPAAQgGAAgGgGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,51,0,0)","#00CC00"],[0.263,0.314],-37.2,0.8,-43.2,0.8).s().p("AiOExQgNgMgQgZIgcgoQgyhAgugxQhChLBXgnQAZgLAYAYQANAOASAbQAzA9AkAyQBkipBjiCQAzhABJhNQArguAuANQATAFAAAQQABARgZAYQiECDhvCTQg5BOg9BsIgkBAQgSAcgPAAQgGAAgGgGg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,51,0,0)","#00CC00"],[0.263,0.314],-30.6,-1.5,-36.6,-1.5).s().p("AiOExQgNgMgQgZIgcgoQgyhAgugxQhChLBXgnQAZgLAYAYQANAOASAbQAzA9AkAyQBkipBjiCQAzhABJhNQArguAuANQATAFAAAQQABARgZAYQiECDhvCTQg5BOg9BsIgkBAQgSAcgPAAQgGAAgGgGg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,51,0,0)","#00CC00"],[0.263,0.314],-24,-3.8,-30,-3.8).s().p("AiOExQgNgMgQgZIgcgoQgyhAgugxQhChLBXgnQAZgLAYAYQANAOASAbQAzA9AkAyQBkipBjiCQAzhABJhNQArguAuANQATAFAAAQQABARgZAYQiECDhvCTQg5BOg9BsIgkBAQgSAcgPAAQgGAAgGgGg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,51,0,0)","#00CC00"],[0.263,0.314],-17.4,-6.1,-23.4,-6.1).s().p("AiOExQgNgMgQgZIgcgoQgyhAgugxQhChLBXgnQAZgLAYAYQANAOASAbQAzA9AkAyQBkipBjiCQAzhABJhNQArguAuANQATAFAAAQQABARgZAYQiECDhvCTQg5BOg9BsIgkBAQgSAcgPAAQgGAAgGgGg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,51,0,0)","#00CC00"],[0.263,0.314],-10.8,-8.5,-16.8,-8.5).s().p("AiOExQgNgMgQgZIgcgoQgyhAgugxQhChLBXgnQAZgLAYAYQANAOASAbQAzA9AkAyQBkipBjiCQAzhABJhNQArguAuANQATAFAAAQQABARgZAYQiECDhvCTQg5BOg9BsIgkBAQgSAcgPAAQgGAAgGgGg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,51,0,0)","#00CC00"],[0.263,0.314],-4.2,-10.8,-10.2,-10.8).s().p("AiOExQgNgMgQgZIgcgoQgyhAgugxQhChLBXgnQAZgLAYAYQANAOASAbQAzA9AkAyQBkipBjiCQAzhABJhNQArguAuANQATAFAAAQQABARgZAYQiECDhvCTQg5BOg9BsIgkBAQgSAcgPAAQgGAAgGgGg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,51,0,0)","#00CC00"],[0.263,0.314],2.4,-13.1,-3.6,-13.1).s().p("AiOExQgNgMgQgZIgcgoQgyhAgugxQhChLBXgnQAZgLAYAYQANAOASAbQAzA9AkAyQBkipBjiCQAzhABJhNQArguAuANQATAFAAAQQABARgZAYQiECDhvCTQg5BOg9BsIgkBAQgSAcgPAAQgGAAgGgGg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,51,0,0)","#00CC00"],[0.263,0.31],8.9,-15.5,2.9,-15.5).s().p("AiOExQgNgMgQgZIgcgoQgyhAgugxQhChLBXgnQAZgLAYAYQANAOASAbQAzA9AkAyQBkipBjiCQAzhABJhNQArguAuANQATAFAAAQQABARgZAYQiECDhvCTQg5BOg9BsIgkBAQgSAcgPAAQgGAAgGgGg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,51,0,0)","#00CC00"],[0.263,0.31],15.5,-17.8,9.5,-17.8).s().p("AiOExQgNgMgQgZIgcgoQgyhAgugxQhChLBXgnQAZgLAYAYQANAOASAbQAzA9AkAyQBkipBjiCQAzhABJhNQArguAuANQATAFAAAQQABARgZAYQiECDhvCTQg5BOg9BsIgkBAQgSAcgPAAQgGAAgGgGg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,51,0,0)","#00CC00"],[0.263,0.31],22.1,-20.2,16.1,-20.2).s().p("AiOExQgNgMgQgZIgcgoQgyhAgugxQhChLBXgnQAZgLAYAYQANAOASAbQAzA9AkAyQBkipBjiCQAzhABJhNQArguAuANQATAFAAAQQABARgZAYQiECDhvCTQg5BOg9BsIgkBAQgSAcgPAAQgGAAgGgGg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,51,0,0)","#00CC00"],[0.263,0.31],28.6,-22.5,22.6,-22.5).s().p("AiOExQgNgMgQgZIgcgoQgyhAgugxQhChLBXgnQAZgLAYAYQANAOASAbQAzA9AkAyQBkipBjiCQAzhABJhNQArguAuANQATAFAAAQQABARgZAYQiECDhvCTQg5BOg9BsIgkBAQgSAcgPAAQgGAAgGgGg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,51,0,0)","#00CC00"],[0.263,0.31],35.2,-24.8,29.2,-24.8).s().p("AiOExQgNgMgQgZIgcgoQgyhAgugxQhChLBXgnQAZgLAYAYQANAOASAbQAzA9AkAyQBkipBjiCQAzhABJhNQArguAuANQATAFAAAQQABARgZAYQiECDhvCTQg5BOg9BsIgkBAQgSAcgPAAQgGAAgGgGg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,51,0,0)","#00CC00"],[0.263,0.31],41.8,-27.2,35.8,-27.2).s().p("AiOExQgNgMgQgZIgcgoQgyhAgugxQhChLBXgnQAZgLAYAYQANAOASAbQAzA9AkAyQBkipBjiCQAzhABJhNQArguAuANQATAFAAAQQABARgZAYQiECDhvCTQg5BOg9BsIgkBAQgSAcgPAAQgGAAgGgGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-31.1,64.9,62.2);


(lib._playBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.play_txt = new cjs.Text("Play Again", "bold 18px 'Calibri'", "#FFFFFF");
	this.play_txt.name = "play_txt";
	this.play_txt.textAlign = "center";
	this.play_txt.lineHeight = 16;
	this.play_txt.lineWidth = 122;
	this.play_txt.parent = this;
	this.play_txt.setTransform(-0.1,-11);

	this.timeline.addTween(cjs.Tween.get(this.play_txt).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s("#996600").ss(2,1,1).rr(-67.95,-25.55,135.9,51.1,25.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s("#006699").ss(2,1,1).rr(-67.95,-25.55,135.9,51.1,25.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.9,-26.5,137.9,53.1);


(lib._playBTN_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.play_txt = new cjs.Text("Play again", "bold 18px 'Calibri'", "#FFFFFF");
	this.play_txt.name = "play_txt";
	this.play_txt.textAlign = "center";
	this.play_txt.lineHeight = 16;
	this.play_txt.lineWidth = 122;
	this.play_txt.parent = this;
	this.play_txt.setTransform(-0.1,-11);

	this.timeline.addTween(cjs.Tween.get(this.play_txt).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s("#996600").ss(2,1,1).rr(-67.95,-25.55,135.9,51.1,25.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s("#006699").ss(2,1,1).rr(-67.95,-25.55,135.9,51.1,25.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.9,-26.5,137.9,53.1);


(lib.opnBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0.576)").s().dr(-95,-16.7,190,33.4);
	this.shape.setTransform(95,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.opnBG, new cjs.Rectangle(0,0,190,33.4), null);


(lib.mark_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AAAAqIgDAAIgDgBIgCgBIAAgBIAAgeIgbAAIgCgBIgBgBIgBgDIAAgEIAAgDIABgDIABgBIABAAIAcAAIAAgeIAAgCIACgBIADgBIADAAIAEAAIADABIACABIAAACIAAAeIAcAAIABAAIABABIABADIAAADIAAAEIgBADIgBABIgBABIgcAAIAAAeIAAABIgCABIgDABIgEAAg");
	this.shape.setTransform(4.5,0.1,0.802,0.802);

	this.mark_txt = new cjs.Text("5", "bold 18px 'Calibri'", "#663300");
	this.mark_txt.name = "mark_txt";
	this.mark_txt.textAlign = "center";
	this.mark_txt.lineHeight = 22;
	this.mark_txt.lineWidth = 9;
	this.mark_txt.parent = this;
	this.mark_txt.setTransform(-3.2,-11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#996600").ss(1,1,1).p("ABnAAQAAArgeAeQgeAegrAAQgqAAgegeQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqg");
	this.shape_1.setTransform(0,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AhIBIQgegdAAgrQAAgqAegeQAfgdApAAQAqAAAfAdQAeAeAAAqQAAArgeAdQgfAegqAAQgpAAgfgeg");
	this.shape_2.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.mark_txt},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mark_mc, new cjs.Rectangle(-11.2,-13,22.5,26), null);


(lib.lockBtn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// lock
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F291E").s().p("AgCBMQgdAAgQgMQgMgJgBgUQAAgNAEgYQACgIAFgCIAFgBIAEAAIAAgXQABgRALgLQAMgMAQAAQARAAALAMQAMAMAAAQIAAAXQAJAAACABQAFADABAIQAGAYgCAPQgCAXgQAHQgSAJgZAAIgCgBgAgJADQgFAFAAAGQAAAEADAEQADADAEACIgJAZIAaAAIgIgZQAEgCACgDQADgEAAgEQAAgGgEgFQgEgDgGAAQgFAAgEADgAgRg1QgHAHAAAKIAAAXIAwAAIAAgXQAAgKgHgHQgHgHgKAAQgJAAgIAHg");
	this.shape.setTransform(71.5,36.6,2.991,2.991);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F291E").s().p("AgJD3QhWgBgvgjQgmgagBg+QgCgnAMhJQAGgYARgGIAPgCIALAAIAAhrQACgxAighQAjgkAzAAQAxAAAjAkQAiAiACAxIAAApIgwAAIAAgpQAAgegVgUQgWgXgdAAQgeAAgXAXQgWAUAAAeIAABqIDJAAQAUABAFACQAPAIAFAYQAQBLgGAtQgGBDgwAVQg2AZhKAAIgIAAgAgeAdQgOANAAASQAAAOAIAKQAJALAMAEIgaBNIBQAAIgZhNQAMgEAHgLQAJgKAAgOQAAgSgNgNQgMgMgRAAQgSAAgMAMg");
	this.shape_1.setTransform(71.5,36.7,1,1,0,0,0,0,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// text
	this.name_txt = new cjs.Text("Comprehension", "18px 'Calibri'", "#FFFFFF");
	this.name_txt.name = "name_txt";
	this.name_txt.textAlign = "center";
	this.name_txt.lineHeight = 24;
	this.name_txt.parent = this;
	this.name_txt.setTransform(75,61.5);

	this.timeline.addTween(cjs.Tween.get(this.name_txt).wait(2));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6600").s().rr(-75,-50,150,100,17.8);
	this.shape_2.setTransform(75,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC8803").s().rr(-75,-50,150,100,17.8);
	this.shape_3.setTransform(75,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,100);


(lib.leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#261A0A").s().p("AhbBlIgDgEIgCgFIgDgHIgBgHIAAgJIACgFIgFgQIAGgFIADAQIACAEIgBAHIgBAIIABAHIADAHQADADADAAQADAAADgCQACgBADgDIAEgFIAHgGIAGgHIAGgIIAGgJIAJgJIAJgJIAKgKIALgKIAHgGIAJgHIAFgEIAGgFIAEgDIAEgBQAMgDAJgJIAIgIIAFgKIABgEIAAgEIgGgGQgEgDgEAAQgIgCgHACQgEABgFAEQgFAEgEABIgEAAIgEgDIASgJQAJgEAJgBQAGAAAGADQAGACAFAFQAMgCAIgGQAFgDABgFQACgDAAgGQAAgEgFgDQgDgDgDgBIgHAAQgPAEgMAFIgIAEIgIAEQgIAEgFgCQADgEAHgDIAKgGIAIgEIAIgEIAKgCIAJgCQgHgCgHABIgQAGIgQAGQgOAEgQAMQgIAGgLAKIgQASIgJAJIgIAJQgRAUgJAXIgCAFIgBgDQAAgCgDgCIAFgLQAEgJAHgJQADgFAKgMQAKgNAKgJQALgMALgJIARgOIAUgKIALgEIALgEQAGgDAGgBQAHgCAHABQACAAADACIAFACQABACAFABQAFABADACQADACACAGIABAJQAAAIgJAIQgIAIgPACIABAIQAAAEgCADQgEALgGAGQgEAEgHADIgLAEIgJAEQgFACgDACIgIAIIgJAHIgHAGIgIAIIgPAPQgLAJgEAGQgDADgEAGIgGAJIgIAJIgJAIQgGAGgGABQgGAAgDgCg");
	this.shape.setTransform(6.8,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CC63F").s().p("AhZBeIgDgHIgBgHIABgIIABgHIgCgEIAAgBQgEgGgBgIQAMgDgEgFQAFgKADAAQADAAAGgMQAHgLARgUIAIgJIAJgJIARgSQAKgKAJgGQAPgMAOgEIARgGIAQgGQAGgBAHACIgJACIgKACIgIAEIgIAEIgKAGQgHADgDAEQAFACAJgEIAHgEIAIgEQAMgFAPgEIAHAAQAEABADADQAEADAAAEQAAAGgCADQgBAFgFADQgIAGgMACQgFgFgGgCQgGgDgGAAQgJABgJAEIgRAJIADADIAFAAQADgBAGgEQAEgEAFgBQAGgCAIACQAEAAAEADIAGAGIAAAEIAAAEIgGAKIgIAIQgIAJgMADIgFABIgEADIgGAEIgFAFIgIAHIgIAGIgKAKIgLAKIgIAJIgJAJIgHAJIgGAIIgFAHIgHAGIgFAFQgDADgCABQgCACgEAAQgDAAgDgDg");
	this.shape_1.setTransform(6.7,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8CC63E").s().p("AAqBEIgEgeIgEgeIgDgTQgCgMgDgJIgBgEIAAgEQAAgDADgDIAEgGIgIAFIADgGIADgGQgGACgEAEQgEAEAAAGIgBAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgIAGIgIAGIgXAQIgWAPIgEABQgCABgEgEQgEgEAFgHIAggcQAYgVASgLIAJgGQAGgDAFAAQAFANADARIAEAgIAEAVIAFAXIACAOIABAIIgTATIAAgGg");
	this.shape_2.setTransform(-7.2,-4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#261A0A").s().p("AAeBKIAAgFQgFgdgBgRIAAgEIgCgIIgBgHIgCgHIgCgLIgDgMIgKAIIgKAHIgKAGIgNAHIgNAGQgFAEgJADIAAgBIADgCIAWgPIAXgQIAIgGIAIgGQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIABgFQAAgGAEgEQAEgEAGgCIgDAGIgDAGIAIgFIgEAGQgDADAAADIAAAEIABAEQADAJACAMIADATIAEAeIAEAeIAAADIAAAAIgCAAIgEAFIgBgFgAA3AyIgCgOIgFgXIgEgVIgEggQgDgRgFgNQgFAAgGADIgJAGQgSALgYAVIgeAbIgBAAIAAgBQAPgUASgQIARgPIARgOIAMgGQAGgDAGgBQADgBADACQADABABADQACAEAAAHIACAMIACAKIACAKIAAACIACASIACAIIAAADIACAKQAEANAEAWIgBABIgBADIgDADIgCABIAAgEg");
	this.shape_3.setTransform(-6.7,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-12.8,30.5,21.2);


(lib.menuBoard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#914F20").s().p("AsYFOIGSgFQhmADiIADgEgvdAFIQfGgEWagSMApcgAPIAAAJIlVACQy2AFshAFInqABQyTALpnADQsUAFqYABgEgoLAEiImZgCIg5AAIAAgFIHBADIKcADIkPACIiPAAQiHAAhmgBgAAtEWQCRgMBEgBIGOgCIadgKIKygFIAAALIk2ADQ1IAFq2ACIk5AAQhpAAi5ALIiqAHQA4gDBPgGgEgurAD7IATgDIgcgBQJrAGLdgHQJ9gDQ6gQIIFgEQF+AAMCgDQKhgCHGACICoABIAAABIlBACI9vAIIvYAIQvBANqUACIkeABQnpAAmmgFgEgvdADJIAAgSQGogBKkAAQOcAAHzgBIGwgDQWOgEajgMIAAAIQpXAErDAEQpEADwHACImvAFQt+AIp5ADQnfACm1AAIkdAAgEgvdACtIAAgJIQZgBQMWgBJWgFICEABIiBADQxmANx+AAIikgBgEgvdACOIAAgCQDdgED3ABIH4AFIn8ABInQgBgEAhgACEQISgIFtgEIAAAFQkqAEivABQi7ACioAAIhDAAgEgvdAB/IAAgFIM0AAQK0AAHPgEQhxADjtABQj0ABhqADIl8ABgEAvfABiIAAAEIomACQkTAAM5gGgEAmOABGQFDgFEOAAIAAADIhwADQljADkiAAQjAAAFkgEgAZjA/QFigFEjABQDAAAlkAFQljAFkigBQi8AAFggFgEgoPABCQiXAAE7gEQDcgGHYADQl0AJkjAAIjBgCgAsZA1QB6gDDWgBIFcgBQiyAGjtADImxACQirAAFPgGgAKeA0QhTAAA2gCIDCgCQBkABEFgCQDogCB3ACIm1AGIi4ABQiFAAh7gCgAGcAlQFPgGGKgEIgQAAIoaAEQkzABjYgCQGDgFKVgCIMagEQB8gCEUABQEbABB/gCQhRADiHAAIjnABIgcABIKGAAIiYADQtIAQrwAAQl5AAligEgEgptAATQicAAEPgGQBygDCXAAIEGADQiJAFi7ABIk+AAgAirACIjDgCIHFgDQEfgDHVgBILygBIGYgBQIEgCIGgDIAAAGIygAHIoTACIr3ABImZABIlHgBgEgvdgARIPzgKQLggFJgAEMA6JgAXIAAAFI1YALQtGAHtGAFImjACQqEgDsyAGQlmABsZAJgEgvdgAwIAJgBIEDgBQhbAFixADgEAp7gA+IFkgFIAAAHgEgi6gA/QDEgEDfgCQEGgBIJAAIFigCIQkgGIQpgGIEUgBIKPgEQF8gDEZACIhyACQhSAChGgBI0uAIQpPADybAIIlhACQk/ADqEABIpTgBgEAlSgBGIKNgIIAAAHIloABIhmABIi/gBgEgvdgBmQLDgHK9gEIE+gCQJTgCFjACIkUABIphAFIkuACQmBABoPAIIpBAIgAOch9QBjgECXgBIEJgBQGZgCBhABQBgACpYAEImVABIhwAAgEgvdgCPIAAgDIHFgEQGcgCBTACQB4ABprAFIlYABIhpAAgEgvdgCdIHOgCIFFgBQDbAAopAGInFADgEgvdgCrIC7gBQGNgDhvADInZADgA8JiyMAzEgAVQO3ACJtgBIAAAGIspgBIuegBIlfACIzPAJQrQAGoFgBIi8ABQiNAAArgBgEgvdgC7IACAAQB6gCFJgDQGNgCBvABQBwACpsAEInFACgEgtugDPMA4XgAYIIOgEIQkAFIMEACIAAAGIr3gGQqYgHmcAFMhBOAAfgEAp3gDSQCygCC2gBIAAAFIhWAAQiMAAiGgCgA2dkEQDxgFD+gCIaMgIIGxgCQPuAENigCIAAALQtPADu1gIIm0ACQo+AExsAEIi7AAIlfgBgAtdkaIWXgBIKvgEQGpgDHHAFQiTADjdgBIl9AAImiADQmFABzdAGQwFAHphAAQJrgLM2gFgAJckkQCvgDDtgBIGCgCQirAGjsACIjeAAIjaACQh7AACsgEgEgvdgEvICUgBUAgbgApAb3AARIGEgDQQ7gCJEAAIATAAIAAAHQjAABorgCQnzAAlLABImZADQwIgHx4AHQtdAGwdARgAVOkyQA5gCCLgBIFQgEQC7gBCNAFQicAEj+AAImmABQhWAAA6gCg");
	this.shape.setTransform(0.2,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(201,129,60,0.976)","rgba(177,102,41,0.976)"],[0,1],0,-46.9,0,47).s().p("A4vHrIAAhzIAlgJIglgDIAAk2IAigRIgigCIAAksIA7gdIg7gFIAAi/MAxfAAAIAAPVg");
	this.shape_1.setTransform(0.2,0.5,1.918,0.69);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E3417").s().p("AgQgGIAhgCIAAASg");
	this.shape_2.setTransform(301.2,2.3,1.926,0.69);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E3417").s().p("AgcgLIA5gFIAAAhg");
	this.shape_3.setTransform(298.8,-20.3,1.926,0.69);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E3417").s().p("AgRgFIAjADIgjAIg");
	this.shape_4.setTransform(-302,24.8,1.926,0.69);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E3417").s().p("AgQgIIAhACIghAQg");
	this.shape_5.setTransform(-302.3,2.3,1.926,0.69);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E3417").s().p("AgdgQIA7AFIg7Acg");
	this.shape_6.setTransform(-299.9,-20.3,1.926,0.69);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E3417").s().p("A4/H3IAAiEIAXgSIgXAMIAAk9IAigQIgiAJIAAlDIAegQIgeACIAAjBIAPgNMAxfAAAIARANIAAPgg");
	this.shape_7.setTransform(0,1.2,1.91,0.662);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-305.5,-33.4,611.1,67.9);


(lib.jumpEffect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgFgUQgBgFgGgBIgTAAIAAARQAAAGACACQADACAKgBQgLAHAAAGQAAAHAIABQAIACAEgDQACADAFADQAFACAFAAQAHAAADgCQADgDgDgIQAMABAAgQQAAgHgCgBQgCgBgLAAQACgCgDgGQgEgHgHgDIgKAAg");
	this.shape.setTransform(0.4,0.2,0.694,0.694);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAZQgFgCgCgDQgEADgIgCQgIgBAAgHQAAgGALgHQgKAAgDgBQgCgCAAgHIAAgQIATAAQAGABABAFIAAgHIAKAAQAHADAEAHQADAGgCACQALAAACABQACABAAAGQAAAQgMAAQADAHgDADQgDADgHAAQgFAAgFgDg");
	this.shape_1.setTransform(0.4,0.2,0.694,0.694);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgFgUQgBgFgGgBIgTAAIAAARQAAAGACACQADACAKgBQgLAHAAAGQAAAHAIABQAIACAEgDQACADAFADQAFACAFAAQAHAAADgCQADgDgDgIQAMABAAgQQAAgHgCgBQgCgBgLAAQACgCgDgGQgEgHgHgDIgKAAg");
	this.shape_2.setTransform(3.2,2.8,0.694,0.694);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAZQgFgCgCgDQgEADgIgCQgIgBAAgHQAAgGALgHQgKAAgDgBQgCgCAAgHIAAgQIATAAQAGABABAFIAAgHIAKAAQAHADAEAHQADAGgCACQALAAACABQACABAAAGQAAAQgMAAQADAHgDADQgDADgHAAQgFAAgFgDg");
	this.shape_3.setTransform(3.2,2.8,0.694,0.694);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgFgUQgBgFgGgBIgTAAIAAARQAAAGACACQADACAKgBQgLAHAAAGQAAAHAIABQAIACAEgDQACADAFADQAFACAFAAQAHAAADgCQADgDgDgIQAMABAAgQQAAgHgCgBQgCgBgLAAQACgCgDgGQgEgHgHgDIgKAAg");
	this.shape_4.setTransform(33.2,-0.8,0.694,0.694);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAZQgFgCgCgDQgEADgIgCQgIgBAAgHQAAgGALgHQgKAAgDgBQgCgCAAgHIAAgQIATAAQAGABABAFIAAgHIAKAAQAHADAEAHQADAGgCACQALAAACABQACABAAAGQAAAQgMAAQADAHgDADQgDADgHAAQgFAAgFgDg");
	this.shape_5.setTransform(33.2,-0.8,0.694,0.694);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgFgUQgBgFgGgBIgTAAIAAARQAAAGACACQADACAKgBQgLAHAAAGQAAAHAIABQAIACAEgDQACADAFADQAFACAFAAQAHAAADgCQADgDgDgIQAMABAAgQQAAgHgCgBQgCgBgLAAQACgCgDgGQgEgHgHgDIgKAAg");
	this.shape_6.setTransform(0.7,3.9,0.694,0.694);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAZQgFgCgCgDQgEADgIgCQgIgBAAgHQAAgGALgHQgKAAgDgBQgCgCAAgHIAAgQIATAAQAGABABAFIAAgHIAKAAQAHADAEAHQADAGgCACQALAAACABQACABAAAGQAAAQgMAAQADAHgDADQgDADgHAAQgFAAgFgDg");
	this.shape_7.setTransform(0.7,3.9,0.694,0.694);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgFgUQgBgFgGgBIgTAAIAAARQAAAGACACQADACAKgBQgLAHAAAGQAAAHAIABQAIACAEgDQACADAFADQAFACAFAAQAHAAADgCQADgDgDgIQAMABAAgQQAAgHgCgBQgCgBgLAAQACgCgDgGQgEgHgHgDIgKAAg");
	this.shape_8.setTransform(37.6,-2.4,0.694,0.694);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAZQgFgCgCgDQgEADgIgCQgIgBAAgHQAAgGALgHQgKAAgDgBQgCgCAAgHIAAgQIATAAQAGABABAFIAAgHIAKAAQAHADAEAHQADAGgCACQALAAACABQACABAAAGQAAAQgMAAQADAHgDADQgDADgHAAQgFAAgFgDg");
	this.shape_9.setTransform(37.6,-2.4,0.694,0.694);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgFgUQgBgFgGgBIgTAAIAAARQAAAGACACQADACAKgBQgLAHAAAGQAAAHAIABQAIACAEgDQACADAFADQAFACAFAAQAHAAADgCQADgDgDgIQAMABAAgQQAAgHgCgBQgCgBgLAAQACgCgDgGQgEgHgHgDIgKAAg");
	this.shape_10.setTransform(-6.8,4.8,0.694,0.694);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAZQgFgCgCgDQgEADgIgCQgIgBAAgHQAAgGALgHQgKAAgDgBQgCgCAAgHIAAgQIATAAQAGABABAFIAAgHIAKAAQAHADAEAHQADAGgCACQALAAACABQACABAAAGQAAAQgMAAQADAHgDADQgDADgHAAQgFAAgFgDg");
	this.shape_11.setTransform(-6.8,4.8,0.694,0.694);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:0.4,y:0.2,scaleX:0.694,scaleY:0.694}},{t:this.shape,p:{x:0.4,y:0.2,scaleX:0.694,scaleY:0.694}}]}).to({state:[{t:this.shape_3,p:{scaleX:0.694,scaleY:0.694,x:3.2,y:2.8}},{t:this.shape_2,p:{scaleX:0.694,scaleY:0.694,x:3.2,y:2.8}},{t:this.shape_1,p:{x:32.3,y:-1.7,scaleX:0.694,scaleY:0.694}},{t:this.shape,p:{x:32.3,y:-1.7,scaleX:0.694,scaleY:0.694}}]},1).to({state:[{t:this.shape_7,p:{scaleX:0.694,scaleY:0.694,x:0.7,y:3.9}},{t:this.shape_6,p:{scaleX:0.694,scaleY:0.694,x:0.7,y:3.9}},{t:this.shape_5,p:{scaleX:0.694,scaleY:0.694,x:33.2,y:-0.8}},{t:this.shape_4,p:{scaleX:0.694,scaleY:0.694,x:33.2,y:-0.8}},{t:this.shape_3,p:{scaleX:1.183,scaleY:1.183,x:-5,y:-2.2}},{t:this.shape_2,p:{scaleX:1.183,scaleY:1.183,x:-5,y:-2.2}},{t:this.shape_1,p:{x:33,y:-7.4,scaleX:0.985,scaleY:0.985}},{t:this.shape,p:{x:33,y:-7.4,scaleX:0.985,scaleY:0.985}}]},1).to({state:[{t:this.shape_11,p:{x:-6.8,y:4.8}},{t:this.shape_10,p:{x:-6.8,y:4.8}},{t:this.shape_9,p:{x:37.6,y:-2.4}},{t:this.shape_8,p:{x:37.6,y:-2.4}},{t:this.shape_7,p:{scaleX:1.183,scaleY:1.183,x:-14.2,y:-5.3}},{t:this.shape_6,p:{scaleX:1.183,scaleY:1.183,x:-14.2,y:-5.3}},{t:this.shape_5,p:{scaleX:0.985,scaleY:0.985,x:39.8,y:-10.4}},{t:this.shape_4,p:{scaleX:0.985,scaleY:0.985,x:39.8,y:-10.4}},{t:this.shape_3,p:{scaleX:0.694,scaleY:0.694,x:-7.1,y:-0.2}},{t:this.shape_2,p:{scaleX:0.694,scaleY:0.694,x:-7.1,y:-0.2}},{t:this.shape_1,p:{x:32.7,y:-6.6,scaleX:0.694,scaleY:0.694}},{t:this.shape,p:{x:32.7,y:-6.6,scaleX:0.694,scaleY:0.694}}]},1).to({state:[{t:this.shape_11,p:{x:-9.2,y:-0.7}},{t:this.shape_10,p:{x:-9.2,y:-0.7}},{t:this.shape_9,p:{x:41,y:-12.6}},{t:this.shape_8,p:{x:41,y:-12.6}},{t:this.shape_7,p:{scaleX:1.183,scaleY:1.183,x:-18.7,y:-14.8}},{t:this.shape_6,p:{scaleX:1.183,scaleY:1.183,x:-18.7,y:-14.8}},{t:this.shape_5,p:{scaleX:0.985,scaleY:0.985,x:44.4,y:-18.9}},{t:this.shape_4,p:{scaleX:0.985,scaleY:0.985,x:44.4,y:-18.9}},{t:this.shape_3,p:{scaleX:0.694,scaleY:0.694,x:-14.8,y:-5.3}},{t:this.shape_2,p:{scaleX:0.694,scaleY:0.694,x:-14.8,y:-5.3}},{t:this.shape_1,p:{x:37.2,y:-7.5,scaleX:0.694,scaleY:0.694}},{t:this.shape,p:{x:37.2,y:-7.5,scaleX:0.694,scaleY:0.694}}]},1).to({state:[{t:this.shape_7,p:{scaleX:0.694,scaleY:0.694,x:-15.7,y:-6.3}},{t:this.shape_6,p:{scaleX:0.694,scaleY:0.694,x:-15.7,y:-6.3}},{t:this.shape_5,p:{scaleX:0.694,scaleY:0.694,x:42,y:-18.2}},{t:this.shape_4,p:{scaleX:0.694,scaleY:0.694,x:42,y:-18.2}},{t:this.shape_3,p:{scaleX:0.694,scaleY:0.694,x:-18.3,y:-12.9}},{t:this.shape_2,p:{scaleX:0.694,scaleY:0.694,x:-18.3,y:-12.9}},{t:this.shape_1,p:{x:38.8,y:-11.1,scaleX:0.694,scaleY:0.694}},{t:this.shape,p:{x:38.8,y:-11.1,scaleX:0.694,scaleY:0.694}}]},1).to({state:[{t:this.shape_3,p:{scaleX:0.694,scaleY:0.694,x:-17.9,y:-13.2}},{t:this.shape_2,p:{scaleX:0.694,scaleY:0.694,x:-17.9,y:-13.2}},{t:this.shape_1,p:{x:41.4,y:-17.1,scaleX:0.694,scaleY:0.694}},{t:this.shape,p:{x:41.4,y:-17.1,scaleX:0.694,scaleY:0.694}}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-2.7,6.5,5.9);


(lib.hand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CC63E").s().p("AiuC6IgzgOQgDg9ADhEQA8AEA8gSQA6gSAzghQAugdA2gyIBchYIAfAoQgRCGhRBMQhXBgikAfQgJACgJAAQgQAAgSgEg");
	this.shape.setTransform(11.2,-0.7,0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CC63E").s().p("AjVAXQA2gaBMhHQBXhRAlgYQArgQAyASQArAPAlAkQiXC9jYB9QgWhXgmhOg");
	this.shape_1.setTransform(11.1,-3.9,0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8CC63E").s().p("Ak3LdIiOgOQhRgKg6gMQg4gKhygfQhvgdg7gKQghgGg8gPQg/gPgegFIgCgBIg7hhQAwALBpASQBkAQA1AOQBDAQCAASQCEATA+AOIBoAVQA7ALAwACQAsgmBVg7QBehCAlgeQAggbBJgyQBIgyAjgcQBAg0Bbg1QBHgsAFg1QgBgegTgqQgcg7gCgJQhDi9AhiWQALg0AggqQAhgsAugVICWhEQBcgpA5ggQAUgIAqgYQAlgQAeAIQBDAcApBoQAPAqAhByQAcBjAYA3QASAsAFAdQAGArgQAgQgpA+huAAQglABgpgWQgVgMgsgkQg3gtgQgQQgmglgOgoQgMglAFg3QAIg+ACgfQABgNgLgNIgWgUQgKAXgZArQgUAngBAfQABA9AqBYQAOAgAiAgIA9A2QAnAmAdASQApAbAoAGQAbAEAwgBQA0AAAVACQACA1AJAkQAMAwAbAgQAMAPATAPIAjAaQhyA5iCAAQiFgBhtg9QgmgVg/gxQiwCojqCcQgPALg6AkQguAcgaAUQhVBCgkAZQhGAxg9AcQgjASgnAAIgXgCg");
	this.shape_2.setTransform(-2.3,0.2,0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CC63E").s().p("AifhIQAsgnAYgQQAqgdAngCQAxgFAvAZQAsAYAeArQgWBHguA7QguA8g/AoQg6iOhUhZg");
	this.shape_3.setTransform(8.6,-7,0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#70B11A").s().p("An0FHQhjgWhEgUQhigciWgfIj6g2Qgfg4gQghQAdAFA/APQA9APAgAFQA7AKBvAeQByAfA4AJQA6ANBSAKICNAOQA1AGAsgWQA9gcBGgxQAlgZBVhCQAagUAtgcQA6gjAPgLQDqicCxipQA/AyAlAUQBuA+CEAAQCCABByg5QA8AZBEALQgjArgzAfQgxAdg5ANQheAWhpgOQhfgOhhgqQgpgPgqgfQgfgWgqgoQgUA/gJAwQgnAgg1AjQgbAShGArIj5CrIj4CsQgdAVg+AzIiogkg");
	this.shape_4.setTransform(-1.3,5.1,0.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#70B11A").s().p("Ah9DMQgogIgegVQgigYgLgjIAzANQAdAHAXgEQCkggBXhgQBRhLARiHQAwBSgfBmQgdBfhPA7QhuBLhgAAQgUAAgUgDg");
	this.shape_5.setTransform(11.4,-0.2,0.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#70B11A").s().p("Ai6BkQDYh8CXi+QAfBFg4BpQg3BbhfBDQhXA+huAjQAKg4gFg7g");
	this.shape_6.setTransform(11.4,-3.1,0.1,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#70B11A").s().p("AhlA8QBAgoAtg7QAug8AWhIQAhA9gKA2QgIBEgxA+QgqA1hCAsQgRg9gSgyg");
	this.shape_7.setTransform(9.5,-6,0.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#261A0A").s().p("Ag9BaIgTgFIgXgFIgRgEIgFgHIAVAEIAZAGIAQAFIARADIAJgHIAZgRIAYgRIAJgGIAKgHIADgLIAHAGQAEADAEACQAKAEAJABQALACAJgDQAGgBAFgDQAFgDADgEQgHgBgGgDIgDgCIgDgDQgDgDgBgFIgBgJIgHAAIgIAAQgEAAgEgDIgHgGIgGgFIgFgGQgEgJAAgGQAAgDACgEIAEgHIACACIABADIgBAJQgBAGACADQABAEAEAEIAHAGIAGAFQAEACAEAAQALAAAEgGQACgDgBgFIgCgHIgFgPIgFgQQgEgKgHgDQgDgBgEACIgGADIgPAHIgPAHQgEACgDAEQgEAFgBAFQgDAPAHATIADAFQACAFAAADQgBAFgHAEIgOALIgLAHIgLAIIgNAKIgNAJIgKgBIgLgCIgTgDIgTgEIgPgDIgLgCIgIgJIAZAFIAcAFIARAEIASADQACgBADgCIAGgDIAPgLIAOgKIAHgGIAHgFIAGgDIAGgEIABgCIAAgCIgDgJIgDgIQgEgTAEgOIAEgJQADgFAEgCQAMgGAWgKIAIgDQAFgCACgDIAIgIQAEgDAFgBQAGgBAGADQAGADAEAGQADADACAFQACAFgBAFIAHAAIAGABQAFABAEADIAGAIQABAEgCAGIgDAKIAEAGIADAGQADAKgEAJQgEAKgIAHIgKAHIgJAIIgJAHQgFAEgFABIgMABIgMAAQgGAAgIgDIgNgGIgMAIIgMAIIgKAHIgIAGIgoAdIgTgEgABZAKQACADADACQADADAEAAQALACAOgJQAHgGADgIQADgKgEgJIgDgEIgKAJIgKAIIgLAFQgGACgGAAIAAAMgAByg5IgMALQgIAHgFADQAEAHACAJQABAGgCAFQALgDAJgGQAKgHAFgJQAGgLgDgGQgEgEgEgBIgGgBIgEAAgABVhVQgEAAgEADIgHAFQAJAJAFAOIAEALQAHgEAEgFQAFgGAAgHQABgGgDgGQgDgEgEgCQgEgCgEAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-9.4,28.7,18.8);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#70B11A").s().p("AhqBEQAQgLAFABIABgFIgHABQABgYgHgQIgCgHIAAgHIAEgDIAEgEIAHgIIAIgIQAMgKAQgPIAbgbIAIABIAIABQATADAbgBIAQABIAQABIATAAQANABAKAEIgGAAIgLgBIgLAAIggAAIgUgBIgTAAIgRAAIgSAAIgCABIgBACIgJAJIgJAIIgKALIgKAKQgDADgIAHIgLALIgEAFIgDAGIADAHIAEAHQAKAPABAPIAAAJQAAAFgDADQgDACgHAAQgHABgQAEIgFABQgGAAAMgIg");
	this.shape.setTransform(3.9,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CC63E").s().p("AhmBeQgDAAgDgCIgFgFQgDgDgBgDIAAgGIAAgGIgJgEIgJgEIgEgDIgCgFIABgOIgKgDQgGgCgDgCQgBgFABgFQABgFADgEIAEgGIAGgEIAEgFIADgHQAIgNAKgIQAIgGAHAAQANgBAOAJIAEACIAFADIALgJIALgJIAUgTIAVgTIAGgHIAGgHIARABIARACIAnADIAmACIAOABIADAAIAFABQAVAAAAAGQABAHgLABIgZgGIgUAAIgQgBIgQgBQgbAAgTgCIgJgBIgIgBIgaAaQgPAQgNAKIgHAIIgHAIIgEAEIgEAEIAAAGIACAGQAHARgCAYQgMABgGAHIgKANIgEAMQgDAHgDAEQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape_1.setTransform(0.7,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#261A0A").s().p("AheBkQgEAAgFgDIgHgGQgEgDgBgHIAAgLQgHAAgEgBQgFgBgEgEQgDgEgBgGIgBgMIgIgCIgHgDQgFgJAFgNQABgFAFgFIAIgIIADgGIAEgHIAJgNQAGgHAGgEQAFgDAGgBQAHgBAGABIAOAEQAIADAFAFIAKgJIAKgJIAZgYIAXgYQACgCADAAIAGAAIAXACIAYABIAOACIAPABIAUABIATAAIACABIADAAIAKAFQACgBAEACIADACIgPgBIgRgBIgmgCIgngEIgRgBIgRgBIgHAHIgGAGIgUAUIgUATIgLAJIgLAJIgFgDIgEgDQgOgIgNABQgHAAgIAGQgKAHgIAOIgDAGIgEAFIgGAFIgEAFQgDAEgBAFQgBAFABAFQADADAGACIAKACIgBAPIACAFIAEADIAJAEIAJAEIAAAGIAAAFQABAEADADIAFAEQADACADAAQADABACgDQADgDADgIIAEgLIAKgOQAGgGAMgCIAIAAIgBAEIgHABQgEABgFADIgHAGIgCADIgCADIAJgCIAJgCIAKAAQAGgBADgCQADgDABgFIgBgJQgBgPgKgPIgEgGIgCgHIADgGIAEgGIAKgKQAJgHACgEIALgKIAKgKIAHgJIAJgJIACgBIABgBIASAAIASAAIAUAAIATAAIAgABIAMAAIALABIAJAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgJABIgLADIgCAAIgJAAIgIAAQgUgCgbAAIgvAAQgWATgOAQQgJAKgKAIQgIAGgDAHIABAHIAEAHQAJASACAPIAAAJQAAAFgCAEQgCADgEACIgIACIgNACIgMABIgGABIgGACIgCAJQgCAGgCADQgFAGgFAAIAAgBgACdhUIgEgCIAFACIgBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-10,32.6,20.1);


(lib.grass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,765,173);


(lib.eye_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("Ag+gDQAuAQBPgQ");
	this.shape.setTransform(0,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#70B11A").s().p("Ag8A1IgBgEQgDgQAAgRQABgQAGgPQAEgKAFgIQAGgJAIgGQAHgGAJgDQAJgDAJABQAJAAAKAEQAJAFAHAHQAQANAIAZQAGASAAATQAAALgCAKQgrAHgeAAQgfAAgTgHg");
	this.shape_1.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},39).to({state:[]},3).wait(48));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1057A5").s().p("AAREjQgggCgegXQgZgTgUgfQgxhJgPheQgOhXARhcQALg0AXgmQAcguAqgTQAZgJAcAJQAaAIAVATQBLBGAYCHQAcCeg+ByQgSAfgXATQgcAWgfAAIgBAAgAhPiIQgvAZAOBAQAOBAA2gCQAZgKAKgaQAJgZgHgdQgGgdgTgSQgQgPgVAAIgKABg");
	this.shape_2.setTransform(-0.2,2.5,0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzAOQgOhAAvgZQAagEAUATQASARAHAdQAGAcgJAZQgJAbgZAKIgDAAQgzAAgNg+g");
	this.shape_3.setTransform(-0.8,1.8,0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhZMLQhQgQhEgnQhmg5hPhhQhLhbguhyQgzh8gOiRQgNiFAUiPQAWiVBDh/QBIiIBwhXQBhhMB5gYQB7gYByAmQAeAKA7AdQA5AcAhAKQCZCCBYD/QA9C4gCDBQgCDFhDCyIgcBCQgRAkgSAZQgbAQgsAqQgsArgaAQQg6AphGAYQhEAXhJAEQgdAEgdAAQgyAAgxgKgAhtgXQgqATgbAtQgYAmgKA0QgRBcAOBYQAPBeAwBJQAUAfAaATQAeAXAgACQAgAAAbgWQAYgTASgfQA+hygcifQgZiHhJhGQgWgSgagIQgOgEgNAAQgOAAgNAEg");
	this.shape_4.setTransform(0.4,-0.2,0.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D3EEFA").s().p("AhINMQhigjhThGQhyhfhOiKQhKiBgjiZQglilAIihQAIiqA4iXQAmhlA4hSQA9hZBOg9QBKg6BWgeQBagfBZADQBmAFBgArQBgArBHBKQghgJg5gcQg7gegegJQhygmh8AYQh4AYhhBLQhwBYhICIQhDB+gWCWQgUCPANCFQAOCQAzB8QAuByBLBbQBPBhBmA5QBEAnBPAQQBOAQBQgJQBJgEBEgXQBGgYA6gpQAagQAsgrQAsgqAbgRQhFCDh2BVQh9BaiMAJQgVABgUAAQhTAAhSgdg");
	this.shape_5.setTransform(-0.7,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-8.6,13,17.4);


(lib._endBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94C84B").s().p("AgDCuQgcgBgUgnQgXgsAEhEQgZAtgzAgQgwAdgkAAQgmgBAIgkQAKgrBLhPQAJgJg2ASQhCAVgLgLQgfggAsghQATgOA8gbQCRhCByANQBEAEBOAYQBxAigDAzQgCAsg3ADIhKgIQglgCADACQAgAVALAMQAXAWAYAuQAhBBgbAUQgYAShLhNQhchcgJgEQAOBOgQAuQgOAmgaAAIgCAAg");
	this.shape.setTransform(116.5,-224.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#326D4C").s().p("AgbCzQgQgKgMgUQgWgjgDg6QgSAWgZATQgqAfgpAKQgwAKgNgaQgXgqBUheIgbAJQgZAGgLACQgZAEgJgJQgTgTACgVQADghA6gfIAzgYQCThDB0AOQAWABAfAFQAoAGAoALQCIAlgDBBQgEA+hOgEIgkgCIgTgDIALAJIASAXQAQAVAKAUQAgA7gLAgQgFAMgJAHQgUAQgmgbQgagTgmgpQgigkgRgRIgSgRQAHA4gLAmQgMAtgfAJQgFACgFAAQgNAAgMgIg");
	this.shape_1.setTransform(116.9,-222.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#53B754").s().p("AByD7QgpgGgFg8QgEgpAGgmQACgJgTAxQgYA1gxATQgxASgggdQgbgXAIgrQAQgxABgbQgYAxgmAcQgkAZgegDQgfgDgGgfQgHgkAfg7QAFgIgTAKIgwAZQhOAjgPgyQguiVD5hXQBVgdBsgSQBRgNAugBQCTAIBjB/QAbAjAAAoQgBAqgogCIgpgGQgZgEAUANQAsAgAcAuQAZApAAAfQAAAggbgEQgfgEg0g0QgPgPgngiQgqgmADAHQAVAkgIA4QgIA3gbAeQgbAdggAAIgJAAg");
	this.shape_2.setTransform(116,-213.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#326D4C").s().p("ABgD9QgfgSgFgyQgBgNAAgNQgcAygxARQgYAJgXgCQgagDgTgQQgXgTgCgbQgCgUAJggQgdAhgiAQQgYAKgVgBQgbgBgOgUQgYgiAdhDIgEADQgdAPgRAGQg4AWgagWQgLgJgGgRQgOgpAKglQAch5D0hCQBOgVBcgNIBDgIIAsgDIABAAQCaAJBqCBQASAWAIAeQAKAjgMAZQgNAZgigCIgRgCQApAjAXAsQALAXAEAVQAGAdgMARQgSAagtgaQgagPghgfIhDg6QAIAogLAsQgLAsgZAZQgUAVgbAHQgMAEgKAAQgQAAgNgIg");
	this.shape_3.setTransform(116.1,-212.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#47914F").s().p("ABKDwQgRgggahIQgRgvgBAPQgDA6gdA1QgaAwghATQghATgPgcQgRggAQhSQAThlAAgNQAAgKgQAlQg5CFgiARQgtAWgMg4QgIgpAJhHQAJhKgEAGIgsBHQhABTgtAEQglAEgOgyQgNgvAQg3QARg5AmgTQgvAIgdgBQg6gBAqgrQA2g5BugmQA8gVBxgjQA2gWCDADQB7ABA4geQBHADBnBRQBwBXAZBcQAnCLhFgQQgagHhSg5QgWgPABALQAAAEANAnQAfBYggArQgdAogyhMQgjg2gWhCQgBgCgHA1QgIA+gHAYQghB0gnAAQgaAAgeg3g");
	this.shape_4.setTransform(117.5,-202.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#326D4C").s().p("ACDE4QgngCgohbIgchHIgEgMQgMBEgnA1QgTAZgVANQgcASgVgLQgZgOgCgzQgBghAJgtIAKg0QgIATgOAcQgiBEgeAPQgfAPgUgRQgcgZAEhWIAHhHQgMAUgNAQQgxBBgqAUQgmASgbgXQgXgVgFguQgFgnAKgoQAKgnAUgZIgRACQgZABgLgBQgZgEgFgPQgGgTAbgdQAigkAzgbQAmgUA3gSIBZgbQAugNAigOQAjgOAwgFQAegDA3ABQBMABAZgCQA8gFAogWIACgBIACAAQAqADA7AfQAwAaAsAkQAtAkAhApQApA0AOAyQAfBqggAcQgbAYhBgoIg+gqIgCgBIAFAOQAMAhAFAYQAGAegEAYQgEAagOAUQgMAPgNACQgmAHgyhZQgPgcgPgiIgFApQgGApgGAVQgkB+gvAAIgCAAg");
	this.shape_5.setTransform(117.7,-201.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008752").s().p("AjXEAQgKgfAQhuQANhUgRAZQg/BggnAiQhAA6g2gmQgYgRAOhKIAchnQAGgXgeAQQgTALg1AlQhvBEAGhhQAOj2GIg+QCygcFCAQQAFAEBjArQBiArAqAeQBcBAgJAmQgKAqiMgbQgQgCA6BGQA2BZgzBDQgoA1hGhtQgZgogVgxQgTgqgCgUQAIBOgPBPQgPBNgcAnQgfArgggYQgmgbgehuQgWhQgVAXQgMAOgYBRQgYBSgPAUQgYAhgahCQgGgQgEgZQgFgZABgUQABhjgSAXQgJALgmBgQgmBfgYAbQgNAPgLAAQgVAAgQgug");
	this.shape_6.setTransform(117.4,-190.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#326D4C").s().p("AjgEGQgKgdAJhMIAJhCIACgOQgsBDgfAhQgxA0gqAFQgfADgcgTQgdgVANhLQADgTAahaIgXANIg1AjQghAVgUAIQgkANgSgPQgUgQACgwQAKilCshWQBug3CwgVQB8gPCSADQAsABCHAGIADAAIACACQAEADAPAHIAiAOIBbAoQBFAhAfAWQArAeAYAdQAbAhgHAaQgHAbgqAFQglAFg2gJIAIAJQAYAgAMAaQANAbADAbQAFAzghArQgLAQgPAEQgxALg+hsQgSgggQglQgDBOgTBAQgeBdgtAIQg9AKgtiiQgIgggIgOQgEgJgEAAQgEABgLAbQgHASgQA1QgOAxgKAYQgRAmgTADQgXAEgWg2QgIgSgEgbQgEgaAAgVQAAgxgCgOQgGAJgLAaIghBUQgXA4gRAbQgZAqgXAAQgbAAgSg2g");
	this.shape_7.setTransform(117.3,-187.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B724E").s().p("ADjDmQgYgpgDg+QgDg8AQg0IgWApQgdAygUAgQhBBhgngPQgpgQAHiWQABgTgLAeQgWA4gNAZQg/B6g8hQQgkgyAHhJQABgPgEAGIgmA5QgeAtgsAfQg7AoABhKIAKhnQAHhDgLAMQgPARgzBEQg0BEgmAlQh2Bwghh/QgjiDB6iZQAug7A5gtQA1gqAjgKQBIgUBpAIQAwAECOAWQB3ATBDAAQBjAABDgiIBkBCQAbACAsAYQAxAbAoAnQBrBlgaBjQgaBlhqhYQgegZgyg1IgognQgFgNgKgBIAPAOQAHAQgEAoQgHBEgeBGQghBOgnAUQgMAGgLAAQghABgeg2g");
	this.shape_8.setTransform(120.2,-182.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66BB52").s().p("AjVBjQABgpgBgSQgEgjgVgPQAaAKAMAWQADACAEAAQAIABADgZIAFgdQgBASAbAhQALAQAPgEQAQgEAHgaQAHAPAAAFIAEADQAHAEAbgeQAcgfAFgEQgQAZAQAnIAKAcQAEgXADgGQAFgNAOgNIAFAJIAKAQQAEAEAHgBQAMgCAGgRQADgGADgRIAGggQADgYgDgHQAPAJAEAZQAFAXACgBQAJAAAHgMQAGgPADgEIATgaQAPgSALgGQgbAagUA7IgIAZQgDAMAIACQAGABAIgHIAKgJIAVgUQgQAVgDAZIgEApIAvg9QAYgeAggPQgbAVgPApQgFANgMA2gAixgdIAAAAIAAAAg");
	this.shape_9.setTransform(104.8,-91.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A75A").s().p("AjlB5QABg5gFgZQgIgpgogQIgpgPIAuAHQAYAEAXAMQAZANAIAPIALgdQANghAKgKIAPgPIgGANQgQApAYAiQAPAXANgWQAIgOAGgdQAAgEAJAWQAIAUABAIIAsgnQAvgtAUgFQADgBgbAcQgZAjALAiQABgGANgPQANgPAHgDQACAAAHAPIAKATQAKAKAKgmQAIglgCgNQgDgMgKgNQgNgRgBgDQgCgDAVAPQAWAQALANQAFAHAFAMQAEAIACAAQAEAAATgaQAVggAcgRQAIgGAQgGQAQgHgDACQhAA7gPAuQgLAiACADQABADAPgQQAwgzAfgBQADAAgdATQggAbgEAoQARgkA0gcQAxgdArgCQgzANgjA/QgaAugKA3g");
	this.shape_10.setTransform(104.5,-92.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B583E").s().p("AjsCAIAAgEQgEg+gGgWQgIgcgZgSQgGgEgTgIQgUgIgMgIQARgGAwAIQAUADAUAJQAWAKANAMIAIgVQAGgOAJgOQATgbAXgGQgLAOgFAaQgGAeARAaQAGAIADABQAJgIAGgVIAHgeQAKACANAfIAFAMIAIgJIAigeQAwguAaACQgIAHgKAOIgLAQQgPAXAAAVQARgUAKgDQAHgCAEAFIADAFIALAXQAFgLAFgYQAEgYgBgGQgGgXgRgUIgMgQQAYADAUAOQAIAFAKAKQAJAIAFAHQAGAHAEAKIABADIAQgWQANgTAUgRQAngiAiAGQACACgZAWQghAigeA1IgGARIABgBQARgRAKgIQAPgNALgFQAYgNAaADQgKAGgfAZQgMAMgIAMQAcgZAogSQAogSAhgCQAUgBgRALIgYANQgmAUgbA3QgUAogJAuIAAAEg");
	this.shape_11.setTransform(104.3,-93.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66BB52").s().p("AjUBjQAAgpgBgSQgDgjgWgPQAbAKAMAWQADACADAAQAIABAEgZIAFgdQgCASAbAhQALAQAPgEQAPgEAJgaQAGAPABAFIADADQAHAEAcgeQAcgfAEgEQgPAZAPAnIALAcQAEgYACgFQAFgNAPgNIAEAJIAKAQQAFAEAHgBQALgCAGgRQADgGADgRIAHggQADgYgDgHQAOAJAFAZQAFAXACgBQAJAAAGgMQAHgPACgEIAUgaQAOgSALgGQgcAcgTA5IgIAZQgDAMAJACQAGABAIgHIAKgJIAVgUQgRAVgCAZIgFApIAvg9QAZgeAfgPQgbAVgPApQgFAMgMA3g");
	this.shape_12.setTransform(132.6,-91.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A75A").s().p("AjlB5QABg5gFgZQgIgpgogQIgpgPIAuAHQAYAEAXAMQAZANAIAPIALgdQANghAKgKIAPgPIgGANQgQApAXAiQAQAXANgWQAIgOAGgdQAAgEAJAWQAIAUABAIIAsgnQAvgtAUgFQACgBgbAcQgYAjALAiQABgGANgPQANgPAHgDQACAAAHAPIAKATQAKAKAKgmQAIglgCgNQgDgMgKgNQgNgRgCgDQgBgDAVAPQAWAQALANQAFAHAFAMQAEAIACAAQAEAAATgaQAVggAcgRQAIgGAQgGQAQgHgDACQhAA7gPAuQgLAiACADQABADAPgQQAwgzAegBQAEAAgdATQggAbgEAoQARgkA0gcQAxgdArgCQgzANgjA/QgaAugKA3g");
	this.shape_13.setTransform(132.4,-92.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B583E").s().p("AjsCAIAAgEQgEg+gGgWQgIgcgZgSQgGgEgTgIQgUgIgMgIQARgGAwAIQAUADAUAJQAWAKANAMIAIgVQAGgOAJgOQATgbAXgGQgLAOgFAaQgHAeASAaQAGAIADABQAJgIAGgVIAHgeQAGABAIAOQAGAKADAIIAEAMIAJgJIAigeQAwguAaACQgIAHgKAOIgLAQQgPAWAAAWQARgUAKgDQAHgCAEAFIADAFIALAXQAFgLAFgYQAEgYgBgGQgGgXgRgUIgMgQQAYADAUAOQAIAFAKAKQAJAIAFAHQAGAHAEAKIABADIAQgWQANgTAUgRQAngiAiAGQABACgYAWQghAhgeA2IgGARIABgBQARgRAKgIQAPgNALgFQAYgNAaADQgKAGgfAZQgMAMgIAMQAcgZAogSQAogSAhgCQAUgBgRALIgYANQgmAUgbA3QgUAogJAuIAAAEg");
	this.shape_14.setTransform(132.2,-93.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A1603F").s().p("Ah9FpQAGgYAEgxQARhzgLhkQgJhOAUhMQAKgsAWgqQAnhJBFg2IAlggQAWgUAOgPQAbgeAPglQgIAmgXAfQgMAPgUAUIgkAfIgFAFQgxAogbA2QgbA0gFA9QgCBCAbBpQAeB3ADAzQAEA6gHAyQgJAugMgoQgMgoACgZQACgOgDgaQgJhngOAFQgKAFAEAsIAGA2IAAAIQgDAagIAYQgKAjgWAXQgKANgQAKQgSALgOAFQAWgaAJgqgAhChnIgGAWQgDANgDAVIgGAhQgDAWAEAeQAFAjAMATQAGAIAGAFQgHgWgFgXQgOhHAOhAIACgGQAGgdALgXQgLAFgIAZg");
	this.shape_15.setTransform(118.9,-132.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A1603F").s().p("AAdF7IgJgiQgRg5gKgrQgUhJgFgvQAAgCgLA7QgDARgDA4QgICFgCgDQgKgPABguQACgxgBgPIABhcQABg5gHghIgZhNQgOgsABglQADg1AXgtQAbg1A7gxIAmgkQAWgWAOgRIASgYQAOgSgCAIQgFAQgLAVQgRAegtA2QhEBKgXA+QgJAZgCAcQgBAaALAdQAGAQAOAeQgPg/AEglQAEgWAGgRQAZhHBBhHIARgVQAKgLAJgHQAFgDgdAwQgjAxgJANQgfA2AEA8QAHAxAlBDQAxBYAJAXQAFANAEAUIAHAjQADATAFAOIgNggQgLgbgTgpQgDgGgkgsQgjgsABADIAXBWQAOAzAFAlQAJA9gGA0IgIAfIgCAPg");
	this.shape_16.setTransform(125.9,-132.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A1603F").s().p("AhqFHQAEgMAEgPQALgmAAg4QgBg/ABgfQgDAOgKBUQgHA8gRAlIgKAXQgPAageAeIAHgLQALgZAOgmQAjhRAFheQADg4gKh2IgCgnQADh4AwhJQAZgkAbgZQAbgeAdgQQAigNACgIQABAEgKAJIgOALQgkAdgNAOIgGAHQgcAdgSArQgXA3gKBFIAuhQQAyhWASgNQAOgMAZgRIAngbQAngaAbgmQgQAlgfAfQgXAXgyAoQhrBSgbCKIgCALQgLA1AUB/QASBxgbBCQgFAQgHARQgVAzhBAwQAwgtAUg3g");
	this.shape_17.setTransform(115.4,-133.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7D453A").s().p("AlVHSQAIgDANgCQALgGARgPQBEg1AuhwQAcg0AOg5QAOg0gBgzQAAgigHgXQgIgWgFgpQgEghAAgdQABglAHghQAQhWAmg+QARgcAVgUQAagdAggKIADAAQAIgCAxgXQAvgUAEAGQAHAOgxAoIgVAPIgUAQIgYAXQgtAtgYBBIAlgnQApgvAPgNIAPgPQALgKAVgMIAggVQgBAFA3gMQAzgKgZAiQgQAVgbAUIgxAgQglATgOAUQgvBDAABcQABAOAIAgQAIAfABAQQABgYgBgIQgFgiAEgbQAFgnAVglQARgdAhgkIAmgpQAZgcAHgGQAOgLgVAkIgJARQgcAzgLAkQgPAuAGAsIACAOQAIAkAVAqIAkBDQAjBBANBBQAFAcABAQQAIA+AjAbQAUAXAdANQAHAEAPADIgsAaQgmAigTAHQggALgMgnIgEgJQgDgLAAgQIACgcQAIg8AAgVQgBgOgFgRIgLgeQgMgbgqhGQgrhKAMAgQAJAZAXAvQAXAwAJAYQAKAgADATQAFAdgDAYQgBAIABAKIACASIABAWQAAAPgGAHQgBABgGgqQgDgNgHADQgFADACAKQADATAAAHQgBAQgIAKQgJALgaAEQgZAEgLgHQgEgDACgTIACgZIADgdQABgRgCgLIgMhTIgDgSQgEgNgCAKIgCAYIgCBIQgCAqgDAeQgCAkgHAQIgCAGQgGAMgqgBIg2gEIgVACQgOAAgFgEQgBgCATgRIAVgSQAsgmAHgiQAHgfgDgzQgFhAgKgZIAEAiQAEApgBAQQAAAvgMAiQgMAmgvAnQglApgmAFQgiAIgUABQglACAMgXQAIgJAkgiQA7g2AWhGQAQgnAEg5IADhgQgDAOgKBVQgHA8gRAkIgKAXQgOAYgeAfQgqAsgGAHIgwA/IgmAFIgLAEIgIABIgCAAg");
	this.shape_18.setTransform(116.2,-128.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6E3D37").s().p("AlxHAIAJgCQAQgHAOgOQBGg1AvhwQAjhCAOhBQARhNgRg3QgSg5AAhOQAGh9A4hdQATgfAVgTQAdgcAjgIQgBACCBgKQB8ABgfA1QgMAUgUAcIgiAuQgSAYgKAiIgRA8QgIAaAEAdIACAKQAMAvAuBaQAsBWALA1IAGAqQAIBCApAZQANALA1AOQAzANAAABIAAAAQgKALgRAMQhdBfhzgDQgjgBhFgNQhIgNgngCQgRAJh6APQhYAMgqAAQgSAAgJgDgAl3G+IAGACIgFABQgBAAgBAAQAAAAAAgBQAAAAAAAAQAAgBABgBgAlxHAg");
	this.shape_19.setTransform(118.7,-127.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A1603F").s().p("ABfD7QgSgfgpgfQgPgKg8gnQgogbgUgRIgRgQQglgngJgyQgJg4AWg0QAPgiAdgiIATgVQAgggAwgiQAegWA6gmIhCAvQgnAdgYAUQgPAMgUAUIgXAbQgYAfgLAeQgSAyAMA3QAKAoAfAgIAIAJQAcAaAyAbQBBAkATANQAtAeAWAgQANAXAOAiIAHATIAAAEQgDgBgSgfIgXgpIgBgCQgGgJg2gpQg2grgCAFQAAAKApAZQAtAcAGAHQAJALAGAKQANAeADAdQADAbgJAEQgHgogUgpgAg1BwQgfgTgUgUIgBgBQgkgkgKguQgGgkAHggQgIANAAAVQAAAKAEAYQAEATAIASQALAaAYAWIACACQAeAcAWAHIAAAAg");
	this.shape_20.setTransform(93.4,-149.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A1603F").s().p("ACcESQgVgkgOgUQgZgegsgeIhRgxIAvAiQA/AuAYAjQAmBSgCgDQgJgMgMgaQgMgbgIgLQgWgggsgfIhRg1IgogcQgYgQgLgJQgmghgNgtQgMg0ATgzIABgDQARgpApgrQAIgIBDgyIA+guIhCA0QglAfgYAZQgnAqgRArQgGAOgDAQQgIAiAKAjQALArAnAfIARAMIgQgNQgjgegLgsQgGgeAEgcQAEgVAHgSQARgqAmgpQAigmAcgTIgWAWIgkAlQgVAZgKAQQgNAVgHAUQgPAuAOAvQANAnAkAcQAXASAzAaIA9AeQBDAlAoAxIgoggQgvgmgbgOQgSgJgqgSIg2gXIAvAdQBEAlAVAOQAwAfAYAiQATAdAPAmIANAkIgXgpg");
	this.shape_21.setTransform(96.5,-148.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A1603F").s().p("ACLEzQAAgkgIgYIgEgKQgQgcgngcIhHguIgjgZIAiAbIBDAtQAmAdALAcIAEAMIAAAUIgEgRQgNgggkgfQgTgRgygjQgygjgbgbQgkglgPgsIgCgKQgPg6ARg3QAKgfAUgdQAMgSATgUQAbgdAxgjIBSg6QgRAPgqAdQgnAcgSAQQgUARgRAUQgTAWgNAXQgQAbgHAYQgHAZgBAWIALguQASgwAsguQBAhCB4g8Qg7AkgjAZQgxAjghAiQgsAsgTAvQgRArADAwIACASQALAzAlAmQAZAaA2AfQA0AeAXARQAmAcAQAgIACAGQAEAMgBAyIgBAqIAAgpg");
	this.shape_22.setTransform(88.9,-148.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7D453A").s().p("AAfF5IgBgKIgCgVQgFhBgLgvQgMgqg9gtIgmgcQgYgQgVgQIgigeIgKgKQgWgWgOgdQgGgNgFgRQgJglAEgmQAEgaAFgPQAMgnAcgmIATgXQAxg2BEgpQAJgGAngQQAngQgGAGQgRARgoAZQgwAcgPAMQgfAZgaAcQgkAogRAqQAmg5AWgWQAWgXAZgUIBagiIh2BVQgLALgIAKQgYAfgMAjQgQAxANA0QAGATANAUQAHALATAYQgUgcgHgLQgJgRgEgTQgLgzAUgvQANgeAcgiIARgTQAMgNAjgeQAigdglAjIgkAoQgjArgMAnQgLAkAIAoIACAJIACAHQALAjAdAYIAHAFQAUAQAnAVIBHAkQBOArAjAvIAGAJIAhA6QAXAkAdANIAKAEIgTAaQgNALgNgSQgNgTgOgkQgRgrgHgNQgGgLgIgLQgigqhGglQgcgPgrgUIgmgTQgVgLAeASIAaAOIBKAmQBCAlAeAmQAUAbANAiIASAgQAMAUABAOIgMgUQgNgWgBACQgCAHAKARQAMAUABAFQAAAHgIADQgIAEgGgFQgOgOgLgfQgPgpgEgIIgWglQgFgHgYgWIgTgRQAcAbAOAVQAsBMAVBDQADALgagDQgZgDgFgHIgEgIQABAYgJADQgzAPAAhdQgBgjgGgXIgDgIQgOgdglgdIhGgvIgjgZIAiAbIBDAtQAlAdAMAcQADAGABAHIAAAdQgBASABAKIACALQAIAxARAdIgEACQgFACgEAAQgFAAgEgDgAgPCLQAYASATAPQAdAYAKAQIAMAeIAMAxQgBgkgFgNQgHgRgIgPQgRgZgZgTQgagVgkgTg");
	this.shape_23.setTransform(98.3,-146.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6E3D37").s().p("AARFpQgGhQgKgsQgJgggigfQgRgRgygjQg0gkgbgaIgGgGQgmgjgOgzQgPg7ATg6QANgnAagkIAVgaQAmgqA/gtQBahAAnATQAWARhGAyQhLA2giApQgeAmgOAsIgEAPQgIAdAIAiIADANQANAlAiAaQAZAUAvAXQA/AgAgAVQAwAfAbAkIAEAHQAIAMA2AxIA0AwQgGAZguAcQgxAfgcgPQgQgJgyAaQgNAHgIAAQgRAAgDgbg");
	this.shape_24.setTransform(99.1,-146.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#92C74C").s().p("AB6AnQgQgSgDgIIgLgbQgFgNgBAWQAAAQgHAUQgGAVAAggQAAgMgFgNQgGgPAAAEQgBAggCgGIgGgQQgDgHgIgHQgCgCgBAOQgCAQgCAEQgNAZgBgEIgBgWQgBgMgGgKIgHgLQgFgJgBACQAAALgEALIgHATQAAgcgKABQgIAAgNASQgMASAAgOQAAgYgEgFQgFgIgIgCIgHAWQgDAKgBgEQgEgYgDgDQgHgIADAMQAFAVgBAHIgFAUQgFANAAgEQABgWgSgRQgSgSgJAbQgFAPgBAXIAAAKIgHgOQgHgOAAgLQgBgJADgaQABgNgFAGQgEAEgTAjQgQAcAGgfQAEgRgCgMQgCgMgFAEIAAgPIGXAAIAABPIgGgKIgLgnQgIgdABAYQAAA3gFgNIgRgoQgNgZAAAbIAAAdQAAAXgFgJIgKgWQgJgSACAKQADAIADASQACATADAIQAAABAAABQABAAAAABQAAAAgBABQAAAAAAAAQgCAAgKgLg");
	this.shape_25.setTransform(101,-76.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A75A").s().p("ACPBDQgMgMgHgNQgQgegFgGQgIgJAAAaIACAcQABATgEgDQgUgQgIgTQgKgVAKgNIgaAYQgiAYgagNIAIgEQAKgGAEgIQAIgOgBgLQAAgMgMALIgEAEQgKAKgKAEQgKANgHATQgHARgBARIgHgeIABgwQAAgfgNALQgGAFgCATQgDAVgVAcQgEAEABgEIACgSQABgggZgRQgDgCgEAeQgDAfACAMQACAOgLgMQgKgLgPgZQgGgJABgZQABgSgBACQgEAJgFAlQgDAfgQAQIAAiIIGXAAIAACIQgSgKgHgZQgHgagCgCQgFgFgFACQgGADAAASIgBAhQgBAOACAJQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgDAAgHgJg");
	this.shape_26.setTransform(101,-73.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#305A45").s().p("ACZBSQgJgHgMgQQABAEgDALQgEAMgDADQAAgHgEgKIgFgRIgDgUIgBgNQgEgEAAABIgEAkQAAAIgHAPQgGANAAgDQgBgSgHgKQgLgQgDgIQgKgagEAHIgRAeIgWAZQgOANAJgaIAGgKQACgEABgGQACgNgEABIgNAIIgTALQgIAHgBAVQgNgHAIgiIAHgTQADgJgLAPIgPAlQgJAXAAgSQgFggABgFQgEAJgFAIQgJAQgDARIgCAKQgEgEgBgXQgCgaAHgRIgKASQgOAUgPADQAGgHABgOIABgZQAAgKgGgBQgFgBgDALQgFATACARIABAKQgLgEgKgJQgHgGgBACIgMAZQgCAEAAgbQAAgMgCgFQgCgGgEAKQgCAGgIAKQgHAJgGAFIAAiQICdAWQACANAAAQQALgiADgOIBzAsQgCgLAAgNIgSgbIB5AAQAEAFABAFIANAlIAABlQgOgCgJgOQgGgIgJgWQgFgGABAVQAAAUAEAOQAEAPAMARQgQAAgNgKg");
	this.shape_27.setTransform(101,-72.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E3C48E").s().p("AgWADQAGgFAQAAQAPAAAGADIACACg");
	this.shape_28.setTransform(101.7,-41.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E3C48E").s().p("AgJAEQgEgBgCgDQgCgCAEgCIAFABIAIACIALABQAEAAABAAQADADgFABIgIABIgGAAQgEAAgFgBg");
	this.shape_29.setTransform(119.2,-74.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E3C48E").s().p("AgWANQgEgNADgHQAFgKAZgFQAagEgKANQgDAEgKAJQgEADgFAKQgCAIgIADIgDAAQgGAAgEgLg");
	this.shape_30.setTransform(104.7,-64);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E3C48E").s().p("AgPALQgDgHABgFQABgEAFgGQALgQAEAHIAEAJQACAFACACIAGAEQACACgEADQgGAFgHAHIgDAEQgBACgEAAQgFAAgFgMg");
	this.shape_31.setTransform(112.1,-55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E3C48E").s().p("AACAPQgEgDgDgIQgGgNABgDQACgDAMABQAFAAACAKQABAIgCAHQgBAFgEAAIgDgBg");
	this.shape_32.setTransform(119.5,-66.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E3C48E").s().p("AgQASQgOgKADgIQACgEAKgIIAHgHQABgGAHAFQADADAGAHQAOAJAEAHQAGAMgRADQgIACgHAAQgKAAgHgFg");
	this.shape_33.setTransform(93.1,-75.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E3C48E").s().p("AgDAFQgBgHAIgKIAAAZQgHgEAAgEg");
	this.shape_34.setTransform(121,-46);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E3C48E").s().p("AgNAeQgGgCgFgDIAAgZIAYgaQAAgBAHgCQAIgDAFADQAFACAAAPQgFAagFAJQgHAIgKAAIgLgBg");
	this.shape_35.setTransform(83.1,-47.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E3C48E").s().p("AAAARQgFgBgLgKQgMgKAAgFQAAgFAEgDIAuAAQAHAHAAAKQAAAKgKAFQgHADgGAAIgGgBg");
	this.shape_36.setTransform(101.9,-79.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E3C48E").s().p("AAFAKQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAIgFABQgKAAACgJQACgJAEgDQAAgBABAAQAAAAABAAQABAAAAAAQABAAABABIAFADIAIADQADABAAADQABAJgCACIgCABQgDAAgDgCg");
	this.shape_37.setTransform(91.4,-61.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E3C48E").s().p("AgTAIQABgEAAgMQABgLAQAFQAOADAFAHQAHAHgLAFQgLAGgJACIgHABQgJAAADgJg");
	this.shape_38.setTransform(103.6,-48.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D6A757").s().p("AgIAHIAAgNIAKAAQAFABABACQADAFgGADIgJACg");
	this.shape_39.setTransform(81.5,-73.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D6A757").s().p("AgHAIQgJgCgDgGQgEgFAIgEQAEgCAHACIAQAEIAJACIAAANIgHABQgNAAgIgDg");
	this.shape_40.setTransform(119.3,-74.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D6A757").s().p("AgrAYQgJgYAHgQQAIgSAygJQAxgJgTAZQgFAHgSASQgIAGgKAVQgGAPgPAFIgFABQgMAAgHgWg");
	this.shape_41.setTransform(106.4,-63.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D6A757").s().p("AgdAZQgGgQACgLQACgKAJgNQAWgkAIASIAGARQAEAMADAEQAFAGAHAFQAEAFgIAHQgNALgKAOIgHAJQgDADgHAAQgKAAgIgZg");
	this.shape_42.setTransform(113.3,-54.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D6A757").s().p("AgFAIQgMgdADgFQADgGAaACIABAAIAAA+QgOgEgHgUg");
	this.shape_43.setTransform(119.8,-65.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D6A757").s().p("AgGAfIAAg+QAJACADAUQADARgFAPQgCAJgFAAIgDgBg");
	this.shape_44.setTransform(81.4,-65.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D6A757").s().p("AgDAnQgRgCgLgHQgkgZAngcQACgBAKgMQAAgFAGABQADABAEADQAFAEANAMIAXAPQASANgMAQQgJAMgLADIgNACIgOgCg");
	this.shape_45.setTransform(93.5,-74.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D6A757").s().p("AgKAJQgBgJAHgIQADgEAMgOIAAA1QgVgIAAgKg");
	this.shape_46.setTransform(120.3,-45.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D6A757").s().p("AgNgFIAbAAIAAALQgPgFgMgGg");
	this.shape_47.setTransform(120,-80.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D6A757").s().p("AgZAuIgHgCIAAg1QATgVAIgKQACgCAJgDQANgFAHAEQAFADACALIAAAOQgFApgKAOQgJAMgQAAQgIAAgKgDg");
	this.shape_48.setTransform(84,-46.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D6A757").s().p("AAAAcQgIgCgUgSQgVgRABgJQgBgGAEgEIBVAAQAJAKAAASQAAAPgRAJQgKAFgLAAIgLgBg");
	this.shape_49.setTransform(103.4,-78.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D6A757").s().p("AgqAJQAGgFAQgDQASgDACgCQALgHAIADQAEABAMAJIAIAHg");
	this.shape_50.setTransform(103.1,-41.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D6A757").s().p("AgWAVQgGgEAAgJQAAgSAGgKQADgEAHADIAMAEIAQACQAHABACAIQAGAPgDAGQgDAFgOgEQgEgBgFADQgHAFgDAAIgFABQgFAAgEgDg");
	this.shape_51.setTransform(92.5,-61);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D6A757").s().p("AgoASQACgIAAgKIABgVQABgYAhAJQAdAJAKAQQANATgUAMQgVANgVAFIgMABQgUAAAFgVg");
	this.shape_52.setTransform(101.9,-48.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B3844A").s().p("AgOgNQAHABALgBQAIAAABADQAEALgHAFIgNAGIgLACg");
	this.shape_53.setTransform(82.1,-73.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B3844A").s().p("AgFAQQgMgEgFgKQgGgKAMgIQAFgDAKADIAXAGIADAAIAAAcQgXAAgHgCg");
	this.shape_54.setTransform(118.9,-73.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B3844A").s().p("Ag+AjQgMgkAKgWQALgbBHgMQBIgNgcAkQgIAMgaAYQgLAKgOAdQgJAVgWAIIgHACQgRAAgKggg");
	this.shape_55.setTransform(107.6,-62.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B3844A").s().p("AgiA+IgKgZQgJgYADgQQADgPAOgUQAPgVAHgHQAPgQAIASIAJAaQAGARAFAHQAFAHAKAHQAHAGgEAGQACAFgFAFQgFAEgPAJIAAAAQgMANgGAJIgKANQgFAFgKAAQgKAAgIgNg");
	this.shape_56.setTransform(114.3,-54.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B3844A").s().p("AAAATQgSgsACgKQADgLAeABIAABcQgLgLgGgRg");
	this.shape_57.setTransform(119.7,-64.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B3844A").s().p("AgUApIAAhcIARABQAQABAGAhQAFAdgIAZQgEAOgLAAQgJAAgMgLg");
	this.shape_58.setTransform(82.7,-63.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B3844A").s().p("AgCAzQgZgBgNgJQgHgFgJgPQgLgSABgKQAAgIANgGQAOgGADgCIAQgRQAAgGAHABQAFABAFADIAMALIALALQAFADALACQALABAGAEQAYARgQAYQgMAUgOADQgOADgPAAIgIgBg");
	this.shape_59.setTransform(93.7,-73.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B3844A").s().p("AgHAkQgKgHgBgHQAAgOAKgNIAbgeIAABHg");
	this.shape_60.setTransform(119.5,-44.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B3844A").s().p("AgcAFIgDgBIAAgLIA+AAQgMAPgXAAQgLAAgNgDg");
	this.shape_61.setTransform(83.8,-80.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B3844A").s().p("AgpA7IAAhHQAPgQAPgUQABgCAOgFQATgGAKAGQAGADACAQQACALgBAIQgIA5gNATg");
	this.shape_62.setTransform(84.9,-46.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B3844A").s().p("AAAAnQgMgEgcgZQgegZABgMQgBgGAEgGIB9AAQALANAAAZQAAAWgYAMQgPAHgPAAQgIAAgIgBg");
	this.shape_63.setTransform(104.9,-77.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B3844A").s().p("Ag+APQAHgKAYgFQAcgEADgDQAQgKALAEQAFACASANIANANg");
	this.shape_64.setTransform(104.5,-42.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B3844A").s().p("AgdAhQgJgGAAgOQAAgcAJgOQAEgHAJADIAQAGIAWABQAJACADAMQAIAWgEAJQgEAJgTgGQgFgCgHAGQgJAHgFABIgIABQgGAAgEgCg");
	this.shape_65.setTransform(93,-60.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B3844A").s().p("Ag5AXQACgJABgPIAAgaQACggAvANQArALAOAUQAUAZgdAQQgiARgcAGQgLACgHAAQgcAAAIgcg");
	this.shape_66.setTransform(100.6,-48.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9B6D45").s().p("AgUgUIACABQAJACAPgCQALgCACAGQAFAPgJAHIgRAKQgGADgMABg");
	this.shape_67.setTransform(82.7,-73.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9B6D45").s().p("AgEAWQgOgEgHgNQgHgPAOgLQAHgFALADIAcAHIAAApIgIAAQgPAAgJgDg");
	this.shape_68.setTransform(118.6,-73.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#9B6D45").s().p("AhKApQgOgrALgaQAOggBVgPQAjgGAQAGQASAHgQAVQgKANgfAdQgOAMgQAjQgLAagaAJQgFACgEAAQgUAAgMgmg");
	this.shape_69.setTransform(108.2,-62.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#9B6D45").s().p("AgqBRQgFgIgJgYQgLggAEgVQADgTATgbQATgbAKgKQAVgUAKAWIAMAjQAIAXAGAIQANAPAEACIADACIAAAVIgEAEQgZAWgVAbIgPASQgFAGgNAAQgOAAgKgRg");
	this.shape_70.setTransform(114.9,-53.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#9B6D45").s().p("AgEgKQAJAHAAADQAAACgJAJg");
	this.shape_71.setTransform(81.2,-52.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9B6D45").s().p("AACAeQgXg7ACgOQACgQAlAAIAAB3QgMgOgGgQg");
	this.shape_72.setTransform(119.4,-63.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9B6D45").s().p("AACBHQgQgCgQgUIAAh3IAdABQAXACAHAtQAGAngJAjQgGATgPAAIgDAAg");
	this.shape_73.setTransform(83.8,-62);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#9B6D45").s().p("AhDAZQgYgsAYgPQAggLAHgNQAJgSAXAbIAXANQAXAIAQASQAVAUgLAVQgRAig0ABIgBAAQg0AAgVgpg");
	this.shape_74.setTransform(94.1,-72.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#9B6D45").s().p("AgbAnQAAgRAQgTIAngpIAABNg");
	this.shape_75.setTransform(118.6,-44.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#9B6D45").s().p("AAYATQgQgEgNgHQgWgLAAgMIAAgFIA3AAIAAApg");
	this.shape_76.setTransform(118.6,-79.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#9B6D45").s().p("AgqATIAAgpIBVAAQgLAcgTAKQgMAHgPAAQgMAAgQgEg");
	this.shape_77.setTransform(84.9,-79.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#9B6D45").s().p("AgyBAIAAhNQATgUAMgRQACgDATgGQAXgIANAHQAIAFADAUQADAOgBAKQgHAzgJAYg");
	this.shape_78.setTransform(85.7,-47.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#9B6D45").s().p("AAAAvQgPgDghgfQgkgeAAgPQAAgJAGgHICUAAQAPAQAAAfQAAAbgeAPQgSAIgSAAQgJAAgKgCg");
	this.shape_79.setTransform(105.9,-76.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#9B6D45").s().p("AhKARQAJgKAcgGQAhgGAEgDQAUgMANAFQAGADAVAPQAJAIAGAGg");
	this.shape_80.setTransform(105.5,-42.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#9B6D45").s().p("AgnAqQgLgHAAgTQAAgkALgTQAFgIAMAEIAWAIIAbABQAMACAFAPQAKAegFALQgGAMgYgIQgGgCgKAHQgMAJgGACQgGABgFAAQgHAAgGgDg");
	this.shape_81.setTransform(93.4,-59.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#9B6D45").s().p("AhIAcQADgMABgSIAAgfQADgmA7APQA2ANASAYQALAPgCALQgCAOgTAKQgoAUgmAIQgNACgKAAQgjAAAKghg");
	this.shape_82.setTransform(99.5,-48.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#886241").s().p("ACMDMIAAgIIACgFQAEgPAUgWIAgghIAGgGIAABZgAgmDMQAIgNAMgEQgXAHgQAAQgXABgKgKQgDgDgCgGIAAgXIAAgCQAEgLAAgTIABgeQACgeAfgEQAbgDAmAQQAlAPAMAQIAFAIQAMAVgMARQgGAKgOAGQgUALgZAIIAJgCQAbgFAIgEQAMgHAJgCQAMgCALAGQAHAEARAOQALAJAEAGIAFAFgAjLDMIAAhaIAZgeQAEgFASgGIAPgEQASgDANAGQALAHAEAXQADAPgCALIgBAJQgGArgIAYgABaCfQgGgKgJgZQgJgYAAgSQAAgSAIgSQgEAGgIAGQgJAHgNAFQgIADgJgBQgYgHgLgtQgLgpALgYQAGgOAZgOQATgJAYgHIACgBQAwgOAcAGQAPACAEAKQADAFgBAFQAGgHAOgDIAXgBIAACLIgGgHQgNgQgGgRQgQglgEgRQgDgLAAgJIgDAGIgNAOQgJALgUASQgNAMgNAbIAFgIQAMgSAHgGQARgWAOgDQAQgCAIASIAMAhQAHAWAHAIQAHAKAHAFIAAApQgZAWgUAaIgJAMQgFAGgFADQgGAFgPAAQgRAAgMgTgAjLA/IAJAHQAJAHAAAFQAAAGgJAIIgJAIgAjCA7IgJgIIAAiKIAdACQAKAAAIAGQATAQADAtQADAlgIAaQgEARgNAGIgDABIgIABQgMAAgPgLgAh7A6QgKgKAAgTQAAgnAMgUQAIgOASAHQAPAGAEABIATAAQANABAGAEQAJAFAFAOQAWBHg3gRIgBAAIgCAAQgCAAgKAHQgLAHgGACIgGABIgHAAQgNAAgIgHgAhOgrQgIgBgJgDQghgLgPgdQgKgUgCgLIgBACQgCAEgEAEQgDAEgGADIgKAFQgHADgGAAIgIABIgBAAIAAg4IADABIAGAAIAOAAQANgCAFADQAEACACAFIAAABIAAABQACgHAFgHQAGgGATgIQARgHADgGQADgHAGgDQAOgGAWAWIACACQAMAJAGACIASAIQgVgWAAgNQAAgKAEgHICnAAQAKAOABARIAAAbQgEAXgZAOQgXAMgagBQgGAAgJgCQgNgDgXgTQAMAUgJAUQgJASgUAKQgTAKgXABIgFAAIgQgBgACpheQgLgDgIgIQgHgJgDgKIAAgLQADgKAJgHQAFgEAEAAQAGgCAPAEIAWAGIAAA4QgZAAgKgCgAjCiYIgJgCIAAgxIBeAAIgBADQgPAngfAJQgJACgKAAQgJAAgKgCgADFibQgygPgHgXIAAgKIBAAAIAAAxg");
	this.shape_83.setTransform(101,-61.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#544236").s().p("AjLDMIAAmXIGXAAIAAGXg");
	this.shape_84.setTransform(101,-61.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E3C48E").s().p("AgWADQAGgFAQAAQAPAAAGADIACACg");
	this.shape_85.setTransform(101.7,-0.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E3C48E").s().p("AgJAEQgEgBgCgDQgCgCAEgCIAFABIAIACIALAAQAEAAABABQADADgFABIgIABIgGAAQgEAAgFgBg");
	this.shape_86.setTransform(119.2,-33.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E3C48E").s().p("AgWANQgEgNADgIQAFgJAZgFQAagEgKANQgDAEgKAJQgEADgFAKQgCAIgIADIgDAAQgGAAgEgLg");
	this.shape_87.setTransform(104.7,-23.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E3C48E").s().p("AgPALQgDgHABgEQABgFAFgGQALgQAEAIIAEAIQACAGACABIAGAFQACACgEADIgNALIgDAFIgFABQgFAAgFgMg");
	this.shape_88.setTransform(112.1,-14.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E3C48E").s().p("AACAPQgEgDgDgIQgGgNABgDQACgDAMABQAFAAACAKQABAIgCAHQgBAFgEAAIgDgBg");
	this.shape_89.setTransform(119.5,-25.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E3C48E").s().p("AgQASQgOgKADgIQACgEAKgIIAHgHQABgGAHAFQADADAGAHQAOAJAEAHQAGAMgRADQgIACgHAAQgKAAgHgFg");
	this.shape_90.setTransform(93.1,-34.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E3C48E").s().p("AgDAFQgBgHAIgKIAAAZQgHgEAAgEg");
	this.shape_91.setTransform(121,-5.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E3C48E").s().p("AgNAeIgLgFIAAgZIAYgaQAAgBAHgCQAIgDAFADQAFACAAAPQgFAagFAJQgHAIgKAAIgLgBg");
	this.shape_92.setTransform(83.1,-6.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E3C48E").s().p("AAAARQgFgBgLgKQgMgKAAgFQAAgFAEgDIAuAAQAHAHAAAKQAAAKgKAFQgHADgGAAIgGgBg");
	this.shape_93.setTransform(101.9,-39);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E3C48E").s().p("AAFAKQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAIgFABQgKAAACgJQACgJAEgDQAAgBABAAQAAAAABAAQABAAAAAAQABAAABABIAFADIAIADQADABAAADQABAJgCACIgCABQgDAAgDgCg");
	this.shape_94.setTransform(91.4,-20.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E3C48E").s().p("AgTAIQABgEAAgMQABgLAQAFQAOADAFAHQAHAHgLAFQgLAGgJACIgHABQgJAAADgJg");
	this.shape_95.setTransform(103.6,-7.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D6A757").s().p("AgIAHIAAgNIAKAAQAFABABACQADAFgGADIgJACg");
	this.shape_96.setTransform(81.5,-33);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D6A757").s().p("AgHAIQgJgCgDgGQgEgFAIgEQAEgBAHABIAQAFIAJABIAAAOIgHAAQgNAAgIgDg");
	this.shape_97.setTransform(119.3,-33.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D6A757").s().p("AgrAYQgJgZAHgPQAIgSAygJQAxgJgTAZQgFAHgSASQgIAGgKAVQgGAPgPAFIgFABQgMAAgHgWg");
	this.shape_98.setTransform(106.4,-22.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D6A757").s().p("AgdAZQgGgQACgLQABgJAKgOQAKgOAFgFQAKgKAFALIAGASQAEAMADAEQAFAGAHAEQAEAFgIAHQgOANgJAMIgHAJQgDADgHAAQgKAAgIgZg");
	this.shape_99.setTransform(113.3,-13.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D6A757").s().p("AgFAIQgMgdADgFQADgGAaACIABAAIAAA+QgOgEgHgUg");
	this.shape_100.setTransform(119.8,-24.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D6A757").s().p("AgGAfIAAg+QAJACADAUQADARgFAPQgCAJgFAAIgDgBg");
	this.shape_101.setTransform(81.4,-24.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D6A757").s().p("AgDAnQgRgCgLgHQgkgZAngcIAMgNQAAgFAGABQADABAEADQAFAEANAMIAXAPQASANgMAQQgJAMgLADIgNACIgOgCg");
	this.shape_102.setTransform(93.5,-33.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D6A757").s().p("AgKAJQgBgJAHgIQADgEAMgOIAAA1QgVgIAAgKg");
	this.shape_103.setTransform(120.3,-4.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D6A757").s().p("AgNgFIAbAAIAAALQgPgFgMgGg");
	this.shape_104.setTransform(120,-40.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D6A757").s().p("AgZAuIgHgCIAAg1QATgVAIgKQACgCAJgDQANgFAHAEQAFADACALIAAAOQgFApgKAOQgJAMgQAAQgIAAgKgDg");
	this.shape_105.setTransform(84,-6.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D6A757").s().p("AAAAcQgIgCgUgSQgVgRABgJQgBgGAEgEIBVAAQAJAKAAASQAAAPgRAJQgKAFgLAAIgLgBg");
	this.shape_106.setTransform(103.4,-37.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D6A757").s().p("AgqAKQAGgGAQgDQASgCACgDQALgGAIACQAEACAMAJIAIAHg");
	this.shape_107.setTransform(103.1,-1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D6A757").s().p("AgWAVQgGgEAAgJQAAgSAGgKQADgEAHACIAMAFIAQACQAHABACAIQAGAPgDAGQgDAFgOgEQgEgBgFADQgHAFgDAAIgFABQgFAAgEgDg");
	this.shape_108.setTransform(92.5,-20.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D6A757").s().p("AgoASQACgIAAgKIABgVQABgYAhAJQAdAJAKAQQANATgUAMQgVANgVAFIgMABQgUAAAFgVg");
	this.shape_109.setTransform(101.9,-7.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#B3844A").s().p("AgOgNQAHABALgBQAIgBABAEQAEALgHAFIgNAHIgLACg");
	this.shape_110.setTransform(82.1,-32.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B3844A").s().p("AgFAQQgMgEgFgKQgGgKAMgIQAFgDAKADIAXAGIADAAIAAAcQgXAAgHgCg");
	this.shape_111.setTransform(118.9,-33);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B3844A").s().p("Ag+AjQgMgkAKgWQALgbBHgMQBIgNgcAkQgIAMgaAYQgLAKgOAdQgJAVgWAIIgHACQgRAAgKggg");
	this.shape_112.setTransform(107.6,-22);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B3844A").s().p("AgiA+IgKgZQgJgYADgQQADgPAOgUQAPgVAHgHQAPgQAIASIAJAaQAGARAFAHQAFAHAKAHQAHAGgEAGQACAFgFAFQgFAEgPAJIAAAAQgMANgGAJIgKANQgFAFgKAAQgKAAgIgNg");
	this.shape_113.setTransform(114.3,-13.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B3844A").s().p("AAAATQgSgsACgKQADgLAeABIAABcQgLgLgGgRg");
	this.shape_114.setTransform(119.7,-23.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B3844A").s().p("AgUApIAAhcIARABQAQABAGAhQAFAdgIAZQgEAOgLAAQgJAAgMgLg");
	this.shape_115.setTransform(82.7,-22.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B3844A").s().p("AgCAzQgZgBgNgJQgHgFgJgPQgLgSABgKQAAgIANgGQAOgGADgCIAQgRQAAgGAHABQAFABAFADQAIAGAPAQQAFADALACQALABAGAEQAYARgQAYQgMAUgOADQgPADgOAAIgIgBg");
	this.shape_116.setTransform(93.7,-32.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B3844A").s().p("AgHAkQgKgHgBgHQAAgPAKgMIAbgeIAABHg");
	this.shape_117.setTransform(119.5,-3.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B3844A").s().p("AgcAFIgDgBIAAgLIA+AAQgMAPgXAAQgLAAgNgDg");
	this.shape_118.setTransform(83.8,-39.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B3844A").s().p("AgpA7IAAhHQAPgQAPgUQABgCAOgFQATgGAKAGQAGADACAQQACALgBAIQgIA5gNATg");
	this.shape_119.setTransform(84.9,-5.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#B3844A").s().p("AAAAnQgMgEgcgZQgegZABgMQgBgGAEgGIB9AAQALANAAAZQAAAWgYAMQgPAHgPAAQgIAAgIgBg");
	this.shape_120.setTransform(104.9,-36.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B3844A").s().p("Ag+APQAHgKAYgFQAcgEADgDQAQgKALAEQAFACASANIANANg");
	this.shape_121.setTransform(104.5,-1.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B3844A").s().p("AgdAhQgJgGAAgOQAAgcAJgOQAEgHAJADIAQAGIAWABQAJACADAMQAIAWgEAJQgEAJgTgGQgFgCgHAGQgJAHgFABIgIABQgGAAgEgCg");
	this.shape_122.setTransform(93,-19.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B3844A").s().p("Ag5AXQACgJABgPIAAgaQACggAvANQArALAOAUQAUAZgdAQQgiARgcAGQgLACgIAAQgbAAAIgcg");
	this.shape_123.setTransform(100.6,-7.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#9B6D45").s().p("AgUgUIACABQAJACAPgCQALgCACAGQAFAPgJAHIgRAKQgGADgMABg");
	this.shape_124.setTransform(82.7,-32.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#9B6D45").s().p("AgEAWQgOgEgHgNQgHgPAOgLQAHgFALADIAcAHIAAApQgXAAgJgDg");
	this.shape_125.setTransform(118.6,-32.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#9B6D45").s().p("AhKApQgOgrALgaQAOgfBVgQQAjgGAQAGQASAHgQAWQgKANgfAdQgOAMgQAiQgLAagaAKQgFABgEAAQgUAAgMgmg");
	this.shape_126.setTransform(108.2,-21.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9B6D45").s().p("AgqBRQgFgIgJgYQgLggAEgVQADgTATgbQATgbAKgKQAVgUAKAWIAMAjQAIAXAGAIIARARIADACIAAAVIgEAEQgZAWgVAbIgPASQgFAGgNAAQgOAAgKgRg");
	this.shape_127.setTransform(114.9,-13.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#9B6D45").s().p("AgEgKQAJAHAAADQAAACgJAJg");
	this.shape_128.setTransform(81.2,-12);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#9B6D45").s().p("AACAeQgXg7ACgOQACgQAlAAIAAB3QgMgOgGgQg");
	this.shape_129.setTransform(119.4,-22.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#9B6D45").s().p("AACBHQgQgCgQgUIAAh3IAdABQAXACAHAtQAGAngJAjQgGATgPAAIgDAAg");
	this.shape_130.setTransform(83.8,-21.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#9B6D45").s().p("AhDAaQgYgtAYgPQAggKAHgOQAJgSAXAbIAXAOQAXAIAQARQAVAVgLAUQgRAjg0AAIgCAAQgzAAgVgog");
	this.shape_131.setTransform(94.1,-32.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#9B6D45").s().p("AgbAnQAAgRAQgTIAngpIAABNg");
	this.shape_132.setTransform(118.6,-3.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#9B6D45").s().p("AAYATQgQgEgNgHQgWgLAAgMIAAgFIA3AAIAAApg");
	this.shape_133.setTransform(118.6,-38.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#9B6D45").s().p("AgqATIAAgpIBVAAQgLAcgTAKQgMAHgPAAQgMAAgQgEg");
	this.shape_134.setTransform(84.9,-38.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#9B6D45").s().p("AgyBAIAAhNQATgUAMgRQACgDATgGQAXgIANAHQAIAEADAVQADAOgBAKQgHAzgJAYg");
	this.shape_135.setTransform(85.7,-6.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#9B6D45").s().p("AAAAvQgPgDghgfQgkgeAAgPQAAgJAGgHICUAAQAPAQAAAfQAAAbgeAPQgSAIgSAAQgJAAgKgCg");
	this.shape_136.setTransform(105.9,-35.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#9B6D45").s().p("AhKARQAJgLAcgFQAhgGAEgDQAUgMANAFQAHADAUAPQAJAIAGAGg");
	this.shape_137.setTransform(105.5,-1.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#9B6D45").s().p("AgnAqQgLgHAAgTQAAgkALgTQAFgIAMAEIAWAIIAbABQAMACAFAPQAKAegFALQgGAMgYgIQgGgCgKAHQgMAJgGACQgGABgFAAQgHAAgGgDg");
	this.shape_138.setTransform(93.4,-19.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#9B6D45").s().p("AhIAcQADgMABgSIAAggQADgmA7AQQA2AOASAXQALAPgCALQgCAOgTAKQgoAUgmAIQgNADgKAAQgjAAAKgig");
	this.shape_139.setTransform(99.5,-7.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#886241").s().p("ACMDMIAAgBIAAgHIACgFQAEgPAUgWIAgghIAGgGIAABZgAgmDMQAIgNAMgEQgXAHgQAAQgXABgKgKQgDgDgCgGIAAgXIAAgCQAEgLAAgTIABgeQACgeAfgEQAbgDAmAQQAlAPAMAQIAFAIQAMAVgMARQgGAKgOAGQgUALgZAIIAJgCQAbgFAIgEQAMgHAJgCQAMgCALAGQAHAEARAOQALAJAEAGIAFAFgAjLDMIAAhaIAZgeQAEgFASgGIAPgEQASgDANAGQALAHAEAXQADAOgCAMIgBAJQgGArgIAYgABaCfQgGgKgJgZQgJgYAAgSQAAgSAIgSQgEAGgIAGQgJAHgNAFQgIADgJgBQgYgHgLgtQgLgpALgYQALgaA/gSIACgBQAzgOAZAGQAPACAEAKQADAFgBAFQAGgHAOgDIAXgBIAACLIgGgHQgNgQgGgRQgQgogEgOQgDgLAAgJIgDAGIgNAOQgJALgUASQgNAMgNAbIAFgIIATgZQARgVAOgDQAQgCAIASIAMAhQAHAWAHAIQAHAKAHAFIAAApQgZAWgUAaIgJAMQgFAGgFADQgHAFgOAAQgRAAgMgTgAjLA/IAJAHQAJAHAAAFQAAAGgJAIIgJAIgAjCA7IgJgIIAAiKIAdACQAKAAAIAGQATAQADAtQADAlgIAaQgEARgNAGIgDABIgIABQgNAAgOgLgAh7A6QgKgKAAgTQAAgnAMgUQAIgOASAHQAPAGAEABIATAAQANABAGAEQAJAFAFAOQAWBHg3gRIgBAAIgCAAQgCAAgKAHQgLAHgGACIgGABIgHAAQgNAAgIgHgAhOgrQgIgBgJgDQgggKgQgeQgKgUgCgLIgBACQgCAEgEAEQgDAEgGADIgKAFQgHADgGAAIgIABIgBAAIAAg4IADABIAGAAIAOAAQANgCAFADQAEACACAFIAAABIAAABQACgHAFgHQAGgGATgIQARgHADgGQADgHAGgDQAOgHAWAXIACACQAMAJAGACIASAIQgVgWAAgNQAAgKAEgHICnAAQAKAOABARIAAAaQgEAYgZAOQgWAMgbgBQgGAAgJgCQgNgDgXgTQAMAUgJAUQgJASgUAKQgTAKgXABIgFAAIgQgBgACpheQgLgDgIgIQgHgJgDgKIAAgLQADgKAJgHIAJgFQAGgBAPAEIAWAGIAAA4QgZAAgKgCgAjCiYIgJgCIAAgxIBeAAIgBADQgPAngfAJQgJACgKAAQgJAAgKgCgADFibQgygPgHgXIAAgKIBAAAIAAAxg");
	this.shape_140.setTransform(101,-20.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#544236").s().p("AjLDMIAAmXIGXAAIAAGXg");
	this.shape_141.setTransform(101,-20.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#92C74C").s().p("ACrBAIgGgHQgDgEgEgBIgEgDQgFgGgKgdQgIgXgCADIABAQQADATgCAJIgCALQgIgIgDgcIgCgeQgEgHgCAZQgBAbgCgCQgEgFgDgYQgDgPAAANQgBAJgFAPIgFAOIAAgLQgBgWgEgPQgHgbgOASQgOARAAAWQAAAEgDgNIgFgTQgBgJAFgVQACgMgGAIQgCAEgDAYQgBADgCgKIgGgWQgGACgEAIQgDAFAAAaQAAAMgKgRQgJgSgGgBQgIgBAAAeQgBgIgEgNQgEgLgBgLIgJASQgFAJgBAOIgBAWQgBADgKgXQgCgEgBgRQgBgOgBABQgGAIgDAGIgFASQgBAEgCggQAAgDgEAOQgEAPAAALQAAAggFgVQgFgUAAgQQgBgWgEAMIgIAdQgdAvAEgPQADgJABgSQACgSACgIQACgKgHATIgIAVQgDAIgBgWIAAgdQAAgpgXBOQgEAPAAg5QABgYgHAdIgIAoIgFAKIAAhPIE3AAQAIAKAGADQAFADAMAAQANAAAKAQQAEAHALAbIAFAOIgIgHIgIgGIgLgKQgGgGgFAEQgGAFAAAKQABAJAFAHQAKAQAHAZIAAACIgBgBg");
	this.shape_142.setTransform(21.5,-75,1,1,0,0,180);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00A75A").s().p("AigBIQABgJgBgOIgBghQAAgSgFgDQgDgCgEAFQgCACgGAaQgFAZgOAKIAAiIIE5AAQAGAHAIACIASADQAUAEAKAYIAFASQAEAPADAFQADAGALAFQgKAKgLgHQgGgFgJgNQgDgFgIgDQgIgCABAIQAAAGABADQAKAUADAHQAGARAAAPQAAAAAAABQAAAAAAAAQAAAAAAgBQAAAAgBgBQgCgFgCgDIgLgFQgHgDgEgLIgHgRQgGgNABAIQACAVgEAMQgCAGgEAHQgKgNgDggQgFglgEgLIAAAQQABAZgEAJQgeA+ACgcQACgMgDgfQgCgegDACQgUARACAgQAAAUgBgCQgRgcgCgVQgCgTgFgFQgKgLAAAfIAAAwIgEAeQgCglgSgdQgIgEgHgKIgDgEIgBAAQgJgLgBAMQAAALAGAOQAEAIAIAGIAGAEQgVANgbgYIgVgYQAIANgHAVQgHATgPAQQgEADABgTIACgcQAAgagGAJQgEAGgNAeQgGANgJAMQgGAJgCAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBg");
	this.shape_143.setTransform(20.7,-73.9,1,1,0,0,180);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#305A45").s().p("AitA8QADgPABgTQAAgVgDAGQgHAWgFAIQgHAOgLACIAAhlIAJglIAEgKIBgAAIgPAbIgBAYIBcgsQACAOAJAiIABgdIBzgaQAJADAUAEQARAEAJAKQAJAJAEAOIAIAcQADAJALAGQAHAEgHAGQgMAMgOgNQgOgRgGgDQgJgEAIAPQANAYABARQACANgDANQgBADgHgRQgCgDgHgDQgGgEgDgEQgFgLgFgFIgBAIQgBAKgDAIIgIALIAAABQgOgQgEgOQgCgKgCAGQgCAFAAAMQAAAbgCgEQgEgOgFgLQgBgCgFAGQgIAJgIAEIABgKQABgRgEgTQgCgLgFABQgEABAAAKIABAZQABAOAEAHQgLgDgLgUIgIgSQAFARgBAaQgBAXgDAEIgCgKQgDgRgHgQIgGgRIgEAlQAAASgGgXIgMglQgIgPACAJIAFATQAHAigKAHQgBgVgGgHIgRgLIgJgIQgEgBACANQAAAGADAEIAEAKQAHAZgLgMIgSgZIgMgeQgEgHgIAaQgCAJgJAPQgFAKgBASQgJgVgBgMIgDgkQAAAAAAAAQgBAAAAAAQAAABgBAAQgBABAAABQgBACgDAfIgEARQgDAKAAAHQgCgDgDgMIgCgPQgKAQgGAHQgLAKgMAAQAJgRADgPg");
	this.shape_144.setTransform(20.4,-72.3,1,1,0,0,180);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#E3C48E").s().p("AgRADQAFgFAMAAQAMAAAEADIACACg");
	this.shape_145.setTransform(24.5,-41.1,1,1,0,0,180);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E3C48E").s().p("AgHAEQgDgBgBgDQgCgCADgCIAEABIAGACIAIAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABIgGABIgFAAQgEAAgDgBg");
	this.shape_146.setTransform(10.9,-74.3,1,1,0,0,180);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#E3C48E").s().p("AgRANQgDgNACgIQAEgJATgFQAUgEgIANIgJANQgEADgDAKQgCAIgGADIgCAAQgFAAgDgLg");
	this.shape_147.setTransform(22.1,-64,1,1,0,0,180);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E3C48E").s().p("AgJATIgDgIQgDgLAGgLQAJgRADAJIAGAPIAEAFQACACgDADQgGAGgEAFQgCAGgEAAQgDAAgCgEg");
	this.shape_148.setTransform(16.4,-55,1,1,0,0,180);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#E3C48E").s().p("AACAPQgEgDgCgIQgEgOABgCQABgDAJABQAEAAABAKQABAHgBAIQgBAFgDAAIgCgBg");
	this.shape_149.setTransform(10.6,-66.7,1,1,0,0,180);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#E3C48E").s().p("AgMASQgLgKADgIQABgFAIgHIAFgHQABgFAFAEIAHAKQALAJADAHQAFAMgOADQgGACgFAAQgIAAgFgFg");
	this.shape_150.setTransform(31.1,-75.5,1,1,0,0,180);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E3C48E").s().p("AgHAdIgIgEQgGgDAAgFQgBgIAHgJIARgaQAAgBAGgCQAHgDAEADQADACAAAPQgDAagFAJQgEAIgJAAQgDAAgFgCg");
	this.shape_151.setTransform(7.6,-47.3,1,1,0,0,180);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#E3C48E").s().p("AgKAdIgIgEIAAgZIASgaQAAgBAFgCQAGgDAEADQAEACAAAPQgDAagFAJQgEAIgIAAQgEAAgFgCg");
	this.shape_152.setTransform(38.9,-47.3,1,1,0,0,180);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E3C48E").s().p("AAAARQgDgBgJgKQgJgKAAgFQAAgFADgDIAjAAQAFAHAAAKQAAAKgHAFQgFADgFAAIgFgBg");
	this.shape_153.setTransform(24.3,-79.7,1,1,0,0,180);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#E3C48E").s().p("AAEAKQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDABQgIAAABgJQABgIAEgEQAAgBAAAAQABAAAAAAQABAAAAAAQABAAABABIADADIAGADQADABAAADQABAMgEAAIgEgCg");
	this.shape_154.setTransform(32.4,-61.7,1,1,0,0,180);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#E3C48E").s().p("AgPAHIABgPQABgLAMAFQALADADAHQAGAHgIAFQgIAGgIACIgEABQgHAAABgKg");
	this.shape_155.setTransform(23,-48.6,1,1,0,0,180);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D6A757").s().p("AgGAHIAAgNIAIAAQADABABACQACAFgEADIgHACg");
	this.shape_156.setTransform(40.1,-73.8,1,1,0,0,180);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D6A757").s().p("AgMAIQgGgCgDgGQgEgFAHgEQADgBAFABIANAFIAHABIAIABQAEAAABACQACAGgEACIgIADIgDAAIgGAAQgIAAgIgDg");
	this.shape_157.setTransform(10.2,-74.1,1,1,0,0,180);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#D6A757").s().p("AghAYQgHgZAGgPQAGgSAmgJQAmgJgOAZQgEAHgPASQgGAHgIAUQgEAPgMAFIgEABQgJAAgFgWg");
	this.shape_158.setTransform(20.8,-63.3,1,1,0,0,180);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#D6A757").s().p("AgRApQgCgDgDgNQgFgQACgLQABgKAHgNIAMgTQAIgLAEAMIAEASQADALADAFQADAGAGAEQADAFgGAHQgKALgIAOIgFAJQgCADgGAAQgFAAgEgJg");
	this.shape_159.setTransform(15.5,-54.6,1,1,0,0,180);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#D6A757").s().p("AAGAgQgJgEgHgUQgJgdADgFQACgGAUACIAAAAQAIABADAUQACARgEAPQgBAJgFAAIgDAAg");
	this.shape_160.setTransform(9.8,-65.4,1,1,0,0,180);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#D6A757").s().p("AgFAfIAAg+QAHACADAUQACARgEAPQgBAJgFAAIgCgBg");
	this.shape_161.setTransform(40.2,-65.3,1,1,0,0,180);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D6A757").s().p("AgCAoQgNgDgIgHQgdgZAfgcIAJgMQABgJAKAIQADAEAKAMIASAQQAOAMgJAQQgHANgJADIgLABIgKgBg");
	this.shape_162.setTransform(30.8,-74.3,1,1,0,0,180);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#D6A757").s().p("AgLAuIgFgCQgRgHgBgLQAAgJAFgJQACgFALgMQAMgRAIgOQAAgCAJgDQAKgFAGAEQADADACALIAAAOQgEApgIANQgGANgOAAQgFAAgIgDg");
	this.shape_163.setTransform(7.5,-46.8,1,1,0,0,180);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#D6A757").s().p("AgTAuIgGgCIAAg1QANgRAIgOQACgDAGgCQALgFAFAEQAEADABALIABAOQgFApgHANQgHANgNAAQgGAAgHgDg");
	this.shape_164.setTransform(38.2,-46.8,1,1,0,0,180);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#D6A757").s().p("AAAAcQgGgCgPgSQgQgRAAgJQAAgGADgEIAxAAQAJANAOAKIAAAFQAAAPgNAJQgJAFgIAAIgIgBg");
	this.shape_165.setTransform(23.1,-78.6,1,1,0,0,180);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D6A757").s().p("AggAKQAEgGAMgDQAOgCACgDQAJgGAGACQADACAJAIIAGAIg");
	this.shape_166.setTransform(23.4,-41.7,1,1,0,0,180);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#D6A757").s().p("AgVAIQAAgSAEgKQADgEAFACIAJAFIANACQAFABACAIQAEAPgCAFQgCAGgLgEQgDgBgEADQgFAFgDAAIgEABQgLAAAAgQg");
	this.shape_167.setTransform(31.6,-61,1,1,0,0,180);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D6A757").s().p("AgfASIACgTIABgUQABgYAZAJQAWAJAIAQQALATgQAMQgSANgPAFIgKABQgPAAAEgVg");
	this.shape_168.setTransform(24.3,-48.6,1,1,0,0,180);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#B3844A").s().p("AgLgNQAFABAJgBQAGAAABADQAEALgHAFQAAACgJAEIgJACg");
	this.shape_169.setTransform(39.6,-73.4,1,1,0,0,180);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#B3844A").s().p("AgPAQQgJgEgEgKQgFgKAJgIQAEgDAIADIARAGIADAAQAFACAJgBQAGgBACAEQADALgGAFQgBACgKAEIgIACQgQAAgHgCg");
	this.shape_170.setTransform(10,-73.8,1,1,0,0,180);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#B3844A").s().p("AgwAjQgJgkAHgWQAJgbA3gMQA4gNgWAkQgHAMgTAYQgJAKgLAdQgHAVgRAIIgFACQgNAAgIggg");
	this.shape_171.setTransform(19.9,-62.7,1,1,0,0,180);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#B3844A").s().p("AgaA9QgDgHgFgRQgHgYADgQQACgPAKgUQAbg1AIAaIAHAaQAFASAEAGIAMAPQAFAFgDAGQABAFgEAFQgDAFgMAJIAAAAIgOAVIgIAOQgEAEgHAAQgIAAgGgNg");
	this.shape_172.setTransform(14.7,-54,1,1,0,0,180);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#B3844A").s().p("AgCApQgJgMgEgQQgOgsABgKQACgLAYABIAMAAQAOACAEAhQADAdgFAZQgDAOgJAAQgIAAgIgLg");
	this.shape_173.setTransform(8.9,-63.5,1,1,0,0,180);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#B3844A").s().p("AgPApIAAhcIANAAQANACAEAhQADAdgFAZQgDAOgJAAQgHAAgJgLg");
	this.shape_174.setTransform(39.2,-63.5,1,1,0,0,180);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#B3844A").s().p("AgBA0QgTgCgKgJQgGgEgHgQQgIgRAAgLQABgIAJgGQALgFACgDIAMgQQABgLANAKIAJALIAJAKQAEAEAIABQAIABAFAFQASARgMAYQgJAUgLACQgLADgMAAIgFAAg");
	this.shape_175.setTransform(30.6,-73.6,1,1,0,0,180);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#B3844A").s().p("AgmA7QgIgHgBgIQAAgOAIgNIAWgeQAMgQAKgTQABgCAMgFQAOgGAIAGQAFADACAQIAAASQgGA6gKATg");
	this.shape_176.setTransform(7.4,-46.6,1,1,0,0,180);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#B3844A").s().p("AgVAFIgCgBIAAgLIAvAAQgJAPgRAAQgJAAgKgDg");
	this.shape_177.setTransform(38.3,-80.7,1,1,0,0,180);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#B3844A").s().p("AggA7IAAhIQAKgNANgWQACgCAKgFQAPgGAHAGQAFADACAQIABASQgGA6gLATg");
	this.shape_178.setTransform(37.5,-46.6,1,1,0,0,180);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#B3844A").s().p("AAAAnQgJgEgWgZQgXgZABgMQgBgGADgGIA2AAQARAYAjAPQgBAWgTALQgMAHgLAAQgGAAgGgBg");
	this.shape_179.setTransform(22,-77.5,1,1,0,0,180);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#B3844A").s().p("AgwAPQAFgKATgFQAWgFACgCQANgKAIAEQAEACANANQAIAIADAFg");
	this.shape_180.setTransform(22.3,-42.2,1,1,0,0,180);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#B3844A").s().p("AgWAhQgHgGAAgOQAAgcAGgOQADgHAHADIANAGIARABQAGACADAMQAGAWgDAJQgDAJgOgGQgEgCgGAGQgHAHgDABIgGABQgFAAgDgCg");
	this.shape_181.setTransform(31.2,-60.3,1,1,0,0,180);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#B3844A").s().p("AgsAXQACgKAAgOIABgaQABggAlANQAgALAMAUQAPAZgXAQQgaARgWAGQgIACgFAAQgWAAAGgcg");
	this.shape_182.setTransform(25.3,-48.6,1,1,0,0,180);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#9B6D45").s().p("AgDgKQAHAIAAACQAAACgHAJg");
	this.shape_183.setTransform(8.8,-52.8,1,1,0,0,180);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#9B6D45").s().p("AgPgUIABABQAIACALgCQAIgCACAGQAEAPgIAHIgMAKQgFADgJABg");
	this.shape_184.setTransform(39.2,-73.2,1,1,0,0,180);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#9B6D45").s().p("AgSAWQgLgDgGgOQgGgOAMgMQAEgDADAAIAHABIAVAHIABABQAIADAMgDQAIgCACAGQAEAOgIAIIgNAKQgEADgKABQgRAAgHgDg");
	this.shape_185.setTransform(9.8,-73.6,1,1,0,0,180);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#9B6D45").s().p("Ag5ApQgLgrAJgaQAKgfBCgQQAbgGANAGQAOAHgNAWQgJAPgXAbQgKAMgNAiQgIAagUAKQgEABgDAAQgQAAgJgmg");
	this.shape_186.setTransform(19.4,-62.6,1,1,0,0,180);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#9B6D45").s().p("AggBRQgEgIgHgYQgJggADgVQADgTAOgbQAPgcAIgJQAQgUAIAWIAJAjQAGAWAFAJQAIANAFAEIACACIAAAVIgDAEQgUAXgQAaIgLASQgEAGgKAAQgKAAgIgRg");
	this.shape_187.setTransform(14.2,-53.8,1,1,0,0,180);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#9B6D45").s().p("AgDgKQAHAIAAACQAAACgHAJg");
	this.shape_188.setTransform(40.4,-52.8,1,1,0,0,180);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#9B6D45").s().p("AARBHQgNgCgMgUQgJgOgFgRQgSg7ABgNQACgRAdABIAWABQASABAGAuQAFAogIAiQgEATgMAAIgCAAg");
	this.shape_189.setTransform(8.3,-62,1,1,0,0,180);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#9B6D45").s().p("AABBHQgLgCgNgUIAAh3IAWABQASABAFAuQAFAogHAiQgFATgLAAIgDAAg");
	this.shape_190.setTransform(38.3,-62,1,1,0,0,180);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#9B6D45").s().p("Ag0AZQgSgsASgPQAagLAFgNQADgKAJAFQAGADAGALIASANQARAIANASQAQAUgIAVQgNAigoABIgCAAQgnAAgRgpg");
	this.shape_191.setTransform(30.4,-72.8,1,1,0,0,180);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#9B6D45").s().p("Ag8BAQAAgRANgSIAfgqQANgSAKgTQABgDAPgGQATgIAKAHQAGAEACAVQACAPgBAJQgFAzgHAYg");
	this.shape_192.setTransform(7.5,-47.2,1,1,0,0,180);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#9B6D45").s().p("AggATIAAgpIBBAAQgIAcgPAKQgJAHgMAAQgJAAgMgEg");
	this.shape_193.setTransform(37.5,-79.2,1,1,0,0,180);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#9B6D45").s().p("AgmBAIAAhNQANgTAKgSQADgEANgFQATgIAKAHQAGAEACAVQACAPgBAJQgFAzgHAYg");
	this.shape_194.setTransform(36.8,-47.2,1,1,0,0,180);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#9B6D45").s().p("AAAAvQgLgDgagfQgcgeAAgPQAAgJAEgHIA5AAQAVAfAxAQIAAAAQAAAbgXAPQgOAIgOAAQgHAAgIgCg");
	this.shape_195.setTransform(21.2,-76.6,1,1,0,0,180);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#9B6D45").s().p("Ag5ARQAHgLAWgFQAZgGAEgDQAOgMALAFQAEACAQAQIAMAOg");
	this.shape_196.setTransform(21.6,-42.5,1,1,0,0,180);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#9B6D45").s().p("AgeAqQgIgHAAgTQAAgkAIgTQAEgIAKAEIAQAIIAVABQAJADAEAOQAIAegEALQgEAMgTgIQgFgCgIAHQgIAJgFACIgIABQgGAAgFgDg");
	this.shape_197.setTransform(30.9,-59.9,1,1,0,0,180);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#9B6D45").s().p("Ag4AcQADgMAAgRIABggQABgmAvAPQApAOAOAYQATAfgcASQgfAVgeAHQgKADgHAAQgbAAAHgig");
	this.shape_198.setTransform(26.1,-48.6,1,1,0,0,180);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#886241").s().p("AgGgTIAEADQAJAJAAAHQAAAFgJALIgEAEg");
	this.shape_199.setTransform(8.5,-52.8,1,1,0,0,180);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#886241").s().p("AgkBPQgkgGgPglQgHgTgCgMQgCAGgDAEQgDADgEADIgIAFQgFAEgMABIAAg4IADABQAFACAKgCQAKgCAEADQACACACAGIABABQAAgHAFgGQAFgGAOgJQANgHACgGQAGgOAMAFQAJAEAIAMQAMALAEABQAGADAHAGQgQgYAAgMQAAgJADgHIA/AAQAYAhA1AQQgBAegZAQQgXAPgYgHQgKgDgTgTQAKAUgHATQgJAXgWAKQgNAGgOAAIgNgBg");
	this.shape_200.setTransform(27.4,-73.5,1,1,0,0,180);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#886241").s().p("AgcB4QgEgKgHgZQgNgsAMgjQgJARgRAIQgHADgGgCQgUgGgJgsQgIgqAIgYQAJgZAzgUQAVgIASgBQAcgDAGAQQACAEAAAGQAHgMAZABIAXACQAYABAGA1QAEArgHAhQgEATgMAFQgPAGgTgYIAAAAIgEgGQgJgOgGgSQgOgwgBgHQgDgLABgJIgDAGQgHALgZAgQgKAMgKAcIATgiQAMgSAIgEQAOgHAIAVIAJAiQAFAVAGAIQAEAJAGAGIAAApQgSAVgQAbIgNATQgGAHgLAAQgNAAgKgTg");
	this.shape_201.setTransform(15.1,-57.2,1,1,0,0,180);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#886241").s().p("AgqBKIADgFQAFgIAJgEQgsAPgNgRQgIgMAFgWQACgMABgRIAAgfQADgtAyAPQAsANARAcQALASgDAQQgDARgQAKQgQALgTAIIAHgCIANgEQAKgCAEgDQAQgNAMAFQAHADARASIAQAUg");
	this.shape_202.setTransform(23.8,-48.1,1,1,0,0,180);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#886241").s().p("AgiAvQgKgKAAgVQAAgmAJgUQAGgNALAEIASAIIAYACQALAEAFASQARBIgsgSIgBAAQgCAAgIAHQgHAIgFABQgFACgFAAQgIAAgGgGg");
	this.shape_203.setTransform(30.9,-59.9,1,1,0,0,180);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#886241").s().p("AgpBEIAAhZQALgQAIgOQACgEALgFQAJgFAGgBQAOgDAJAGQAIAFADAVQADARgBANQgFAygHAZg");
	this.shape_204.setTransform(36.5,-47.5,1,1,0,0,180);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#886241").s().p("AgjAXIAAgwIBHAAIgBACQgJAggSALQgJAGgNAAQgKAAgLgDg");
	this.shape_205.setTransform(37.1,-78.9,1,1,0,0,180);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#886241").s().p("AhCBEIAAgBQAAgGABgGQAEgPAPgWIAZggIAEgHQAMgQAGgOQADgEALgFQAJgFAGgBQAPgDAJAGQAHAFAEAVQADAQgBAOQgFAvgHAcg");
	this.shape_206.setTransform(7.4,-47.5,1,1,0,0,180);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#886241").s().p("AgaA8IAAiKIAWACQAXABAGA1QAFAqgIAiQgEATgLAFIgGABQgMAAgPgTg");
	this.shape_207.setTransform(38,-62,1,1,0,0,180);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#886241").s().p("AgGgTIAEADQAJAJAAAHQAAAFgJALIgEAEg");
	this.shape_208.setTransform(40.1,-52.8,1,1,0,0,180);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#886241").s().p("AAGAeQgSAAgIgCQgPgGgFgTQgGgTANgNQAZAGAeAAIAQAAQAEAEABAJQABAJgCAFQgCAJgGAFIgLAHQgFAEgLABg");
	this.shape_209.setTransform(9.8,-73.4,1,1,0,0,180);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#544236").s().p("AjLDMIAAmXIC/AAQARAaAmAQQAmAQAvAAIAWgBQAOAfgbAWQAVAEAIAeQAGAVAAAhQABAigGAaQAhAGADAqQADAjgRBCg");
	this.shape_210.setTransform(20.4,-61.1,1,1,0,0,180);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#E3C48E").s().p("AgRADQAFgFAMAAQAMAAAEADIACACg");
	this.shape_211.setTransform(24.5,-0.3,1,1,0,0,180);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#E3C48E").s().p("AgHAEQgDgBgBgDQgCgCADgCQADgBAHADIAIABQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABIgGABIgFAAQgEAAgDgBg");
	this.shape_212.setTransform(10.9,-33.6,1,1,0,0,180);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#E3C48E").s().p("AgRANQgDgNACgIQAEgJATgFQAUgFgIAOIgJANQgEADgDAKQgCAIgGADIgCAAQgFAAgDgLg");
	this.shape_213.setTransform(22.1,-23.2,1,1,0,0,180);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#E3C48E").s().p("AgJATIgDgIQgDgLAGgLQAJgRADAJIAGAPIAEAFQACACgDADQgGAGgEAFQgCAGgEAAQgDAAgCgEg");
	this.shape_214.setTransform(16.4,-14.3,1,1,0,0,180);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#E3C48E").s().p("AACAPQgEgDgCgIQgEgOABgCQABgDAJABQAEAAABAKQABAHgBAIQgBAFgDAAIgCgBg");
	this.shape_215.setTransform(10.6,-25.9,1,1,0,0,180);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#E3C48E").s().p("AgMASQgLgKADgIQABgFAIgHIAFgHQABgFAFAEIAHAKQALAJADAHQAFAMgOADQgGACgFAAQgIAAgFgFg");
	this.shape_216.setTransform(31.1,-34.7,1,1,0,0,180);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#E3C48E").s().p("AgHAdIgIgEQgGgDAAgFQgBgIAHgJIARgaQAAgBAGgCQAHgDAEADQADACAAAPQgDAagFAJQgEAIgJAAQgDAAgFgCg");
	this.shape_217.setTransform(7.6,-6.5,1,1,0,0,180);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#E3C48E").s().p("AgKAdIgIgEIAAgZIASgaQAAgBAFgCQAGgDAEADQAEACAAAPQgDAagFAJQgEAIgIAAQgEAAgFgCg");
	this.shape_218.setTransform(38.9,-6.5,1,1,0,0,180);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#E3C48E").s().p("AAAARQgDgBgJgKQgJgKAAgFQAAgFADgDIAjAAQAFAGAAALQAAAKgHAFQgFADgFAAIgFgBg");
	this.shape_219.setTransform(24.3,-39,1,1,0,0,180);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#E3C48E").s().p("AAEAKQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDACQgIAAABgKQABgIAEgEQAAAAAAgBQABAAAAAAQABAAAAAAQABABABAAIADAEIAGACQADACAAADQABALgEAAIgEgCg");
	this.shape_220.setTransform(32.4,-21,1,1,0,0,180);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#E3C48E").s().p("AgPAHIABgPQABgLAMAFQALADADAHQAGAHgIAFQgIAGgIACIgEABQgHAAABgKg");
	this.shape_221.setTransform(23,-7.9,1,1,0,0,180);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#D6A757").s().p("AgGAHIAAgNIAIAAQADABABACQACAFgEADIgHACg");
	this.shape_222.setTransform(40.1,-33,1,1,0,0,180);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#D6A757").s().p("AgMAIQgGgCgDgGQgEgFAHgEQADgBAFABIANAFIAHABIAIABQAEAAABACQACAFgEADIgIADIgDAAIgGAAQgIAAgIgDg");
	this.shape_223.setTransform(10.2,-33.4,1,1,0,0,180);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#D6A757").s().p("AghAYQgHgZAGgPQAGgSAmgJQAmgJgOAZQgEAHgPASQgGAHgIAUQgEAPgMAFIgEABQgJAAgFgWg");
	this.shape_224.setTransform(20.8,-22.5,1,1,0,0,180);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#D6A757").s().p("AgRApQgCgDgDgNQgFgQACgLQABgKAHgNQAJgQADgDQAIgLAEAMIAEASQADALADAFQADAGAGAEQADAFgGAHQgKALgIAOIgFAJQgCADgGAAQgFAAgEgJg");
	this.shape_225.setTransform(15.5,-13.8,1,1,0,0,180);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#D6A757").s().p("AAGAgQgJgEgHgUQgJgdADgFQACgGAUACIAAAAQAIABADAUQACARgEAPQgBAJgGAAIgCAAg");
	this.shape_226.setTransform(9.8,-24.6,1,1,0,0,180);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#D6A757").s().p("AgFAfIAAg+QAHACADAUQACARgEAPQgBAJgFAAIgCgBg");
	this.shape_227.setTransform(40.2,-24.6,1,1,0,0,180);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#D6A757").s().p("AgCAoQgNgDgIgHQgdgZAfgcIAJgMQABgJAKAIQADAEAKAMIASAQQAOAMgJAQQgHANgJADIgLABIgKgBg");
	this.shape_228.setTransform(30.8,-33.5,1,1,0,0,180);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#D6A757").s().p("AgLAuIgFgCQgRgHgBgLQAAgJAFgJQACgFALgMQAMgRAIgOQAAgCAJgDQAKgFAGAEQADADACALIAAAOQgEAogIAOQgGANgOAAQgFAAgIgDg");
	this.shape_229.setTransform(7.5,-6.1,1,1,0,0,180);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#D6A757").s().p("AgTAuIgGgCIAAg1QANgRAIgOQACgDAGgCQALgFAFAEQAEADABALIABAOQgFAogHAOQgHANgNAAQgGAAgHgDg");
	this.shape_230.setTransform(38.2,-6.1,1,1,0,0,180);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#D6A757").s().p("AAAAcQgGgCgPgSQgQgRAAgJQAAgGADgEIBBAAQAHAKAAASQAAAPgNAJQgJAFgIAAIgIgBg");
	this.shape_231.setTransform(23.1,-37.8,1,1,0,0,180);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#D6A757").s().p("AggAKQAEgGAMgDQAOgCACgDQAJgGAGACQADACAJAIIAGAIg");
	this.shape_232.setTransform(23.4,-1,1,1,0,0,180);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#D6A757").s().p("AgQAVQgFgEAAgJQAAgTAEgJQADgEAFACIAJAFIANACQAFABACAIQAEAPgCAFQgCAGgLgEQgDgBgEADQgFAEgDABIgEAAQgEAAgCgCg");
	this.shape_233.setTransform(31.6,-20.2,1,1,0,0,180);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#D6A757").s().p("AgfASIACgTIABgUQABgZAZAKQAWAJAIAQQALATgQAMQgSANgPAFIgKACQgPAAAEgWg");
	this.shape_234.setTransform(24.3,-7.9,1,1,0,0,180);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#B3844A").s().p("AgLAFIgCgBQgNgEgIgHIBFAAQgKAPgSAAQgIAAgKgDg");
	this.shape_235.setTransform(7.8,-39.9,1,1,0,0,180);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#B3844A").s().p("AgLgNQAFABAJgBQAGgBABAEQAEALgHAFQAAACgJAFIgJACg");
	this.shape_236.setTransform(39.6,-32.6,1,1,0,0,180);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#B3844A").s().p("AgPAQQgJgEgEgKQgFgKAJgIQAEgDAIADIARAGIADAAQAFACAJgBQAGgBACAEQADALgGAFQgBACgKAEIgIACQgOAAgJgCg");
	this.shape_237.setTransform(10,-33,1,1,0,0,180);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#B3844A").s().p("AgwAiQgJgkAHgVQAJgbA3gMQA4gNgWAkQgHAMgTAYQgJAKgLAdQgHAVgRAIIgFACQgNAAgIghg");
	this.shape_238.setTransform(19.9,-22,1,1,0,0,180);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#B3844A").s().p("AgaA9QgDgHgFgSQgHgYADgQQACgOAKgUQAbg1AIAaIAHAaQAFASAEAGIAMAPQAFAFgDAGQABAFgEAFQgDAFgMAIIAAABIgOAVIgIAOQgEAEgHAAQgIAAgGgNg");
	this.shape_239.setTransform(14.7,-13.3,1,1,0,0,180);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#B3844A").s().p("AgCAoQgJgLgEgQQgOgsABgKQACgLAYABIAMAAQAOACAEAhQADAdgFAZQgDAOgJAAQgIAAgIgMg");
	this.shape_240.setTransform(8.9,-22.8,1,1,0,0,180);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#B3844A").s().p("AgPAoIAAhbIANAAQANACAEAhQADAdgFAZQgDAOgJAAQgHAAgJgMg");
	this.shape_241.setTransform(39.2,-22.8,1,1,0,0,180);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#B3844A").s().p("AgBA0QgTgCgKgJQgGgEgHgQQgIgRAAgLQABgIAJgGQALgFACgDIAMgQQABgLANAKIAJALIAJAKQAEAEAIABQAIABAFAFQASARgMAYQgJAUgLACQgLADgMAAIgFAAg");
	this.shape_242.setTransform(30.6,-32.9,1,1,0,0,180);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#B3844A").s().p("AgmA7QgIgHgBgIQAAgOAIgNIAWgeQAOgUAIgPQABgCAMgFQAOgGAIAGQAFADACAQIAAASQgGA6gKATg");
	this.shape_243.setTransform(7.4,-5.9,1,1,0,0,180);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#B3844A").s().p("AgVAFIgCgBIAAgLIAvAAQgJAPgRAAQgJAAgKgDg");
	this.shape_244.setTransform(38.3,-39.9,1,1,0,0,180);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#B3844A").s().p("AggA7IAAhIQAMgQALgTQACgCAKgFQAPgGAHAGQAFADACAQIABASQgGA6gLATg");
	this.shape_245.setTransform(37.5,-5.9,1,1,0,0,180);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#B3844A").s().p("AAAAnQgJgEgWgZQgXgZABgMQgBgGADgGIBhAAQAJAOAAAYQgBAWgSAMQgMAHgMAAQgGAAgGgBg");
	this.shape_246.setTransform(22,-36.7,1,1,0,0,180);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#B3844A").s().p("AgwAPQAFgKATgFQAWgFACgCQANgKAIAEQAEACANANQAIAHADAGg");
	this.shape_247.setTransform(22.3,-1.5,1,1,0,0,180);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#B3844A").s().p("AgWAhQgHgGAAgOQAAgcAGgOQADgHAHADIANAGIARABQAGACADAMQAGAWgDAJQgDAJgOgGQgEgCgGAGQgHAHgDABIgGABQgFAAgDgCg");
	this.shape_248.setTransform(31.2,-19.6,1,1,0,0,180);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#B3844A").s().p("AgsAXQACgKAAgOIABgaQABggAlANQAgALAMAUQAPAZgXAPQgZARgXAHQgIACgGAAQgVAAAGgcg");
	this.shape_249.setTransform(25.3,-7.9,1,1,0,0,180);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#9B6D45").s().p("AgDgKQAHAIAAACQAAACgHAJg");
	this.shape_250.setTransform(8.8,-12.1,1,1,0,0,180);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#9B6D45").s().p("AgPgUIABABQAIACALgCQAIgCACAGQAEAPgIAHIgMAKQgFADgJABg");
	this.shape_251.setTransform(39.2,-32.5,1,1,0,0,180);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#9B6D45").s().p("AgSAWQgLgEgGgNQgGgPAMgLQAFgFAJADIAVAHIABABQAIACAMgCQAIgCACAGQAEAOgIAIIgNAKQgEADgKABQgRAAgHgDg");
	this.shape_252.setTransform(9.8,-32.9,1,1,0,0,180);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#9B6D45").s().p("Ag5ApQgLgrAJgaQAKgfBCgQQAbgGANAGQAOAHgNAWQgJAPgXAbQgKAMgNAiQgIAagUAKQgEABgDAAQgQAAgJgmg");
	this.shape_253.setTransform(19.4,-21.8,1,1,0,0,180);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#9B6D45").s().p("AggBRQgEgJgHgYQgJgfADgVQADgTAOgbQAPgcAIgJQAQgUAIAWIAJAjQAGAWAFAJQAIANAFAEIACACIAAAVIgDAEQgUAXgQAaIgLASQgEAGgKAAQgKAAgIgRg");
	this.shape_254.setTransform(14.2,-13.1,1,1,0,0,180);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#9B6D45").s().p("AgDgKQAHAIAAACQAAACgHAJg");
	this.shape_255.setTransform(40.4,-12.1,1,1,0,0,180);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#9B6D45").s().p("AARBHQgNgCgMgUQgJgOgFgRQgSg7ABgNQACgRAdABIAWABQASABAGAuQAFAngIAjQgEATgMAAIgCAAg");
	this.shape_256.setTransform(8.3,-21.3,1,1,0,0,180);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#9B6D45").s().p("AABBHQgLgCgNgUIAAh3IAWABQASABAFAuQAFAngHAjQgFATgLAAIgDAAg");
	this.shape_257.setTransform(38.3,-21.3,1,1,0,0,180);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#9B6D45").s().p("Ag0AZQgSgsASgPQAagLAFgNQADgKAJAFQAGADAGALIASANQARAIANASQAQAUgIAVQgNAigoABIgCAAQgnAAgRgpg");
	this.shape_258.setTransform(30.4,-32,1,1,0,0,180);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#9B6D45").s().p("Ag8BAQAAgRANgSIAfgqQANgSAKgTQABgDAPgGQATgIAKAHQAGAEACAVQACAPgBAJQgFAzgHAYg");
	this.shape_259.setTransform(7.5,-6.4,1,1,0,0,180);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#9B6D45").s().p("AgKATIgDgCQgMgEgMgHQgQgLgBgMIAAgFIBtAAQgIAcgOAKQgKAHgMAAQgKAAgLgEg");
	this.shape_260.setTransform(8.1,-38.5,1,1,0,0,180);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#9B6D45").s().p("AggATIAAgpIBBAAQgIAcgPAKQgJAHgMAAQgJAAgMgEg");
	this.shape_261.setTransform(37.5,-38.5,1,1,0,0,180);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#9B6D45").s().p("AgmBAIAAhNQANgTAKgSQADgEANgFQATgIAKAHQAGAEACAVQACAPgBAJQgFAzgHAYg");
	this.shape_262.setTransform(36.8,-6.4,1,1,0,0,180);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#9B6D45").s().p("AAAAvQgLgDgagfQgcgeAAgPQAAgJAEgHIBzAAQAMAQAAAfQAAAbgXAPQgOAIgOAAQgHAAgIgCg");
	this.shape_263.setTransform(21.2,-35.8,1,1,0,0,180);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#9B6D45").s().p("Ag5ARQAHgLAWgFQAZgGAEgDQAOgMALAFQAEACAQAQIAMAOg");
	this.shape_264.setTransform(21.6,-1.7,1,1,0,0,180);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#9B6D45").s().p("AgeAqQgIgHAAgTQAAgkAIgTQAEgIAKAEIAQAIIAVABQAJADAEAOQAIAegEALQgEAMgTgIQgFgCgIAHQgIAJgFACIgIABQgGAAgFgDg");
	this.shape_265.setTransform(30.9,-19.1,1,1,0,0,180);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#9B6D45").s().p("Ag4AcQADgMAAgRIABggQABgmAvAPQApAOAOAYQATAfgcASQgfAUgeAIQgKADgHAAQgbAAAHgig");
	this.shape_266.setTransform(26.1,-7.9,1,1,0,0,180);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#886241").s().p("AgGgTIAEADQAJAJAAAHQAAAFgJALIgEAEg");
	this.shape_267.setTransform(8.5,-12,1,1,0,0,180);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#886241").s().p("AgkBPQgkgGgPglQgHgTgCgMQgCAGgDAEQgDAEgEACIgIAFQgFAEgMABIAAg4IADABQAFACAKgCQAKgCAEADQACACACAGIABABQAAgHAFgGQAFgGAOgJQANgHACgGQAGgOAMAFQAJAEAIAMQAMALAEABQAIAEAFAFQgQgYAAgMQAAgJADgHICCAAQAKARAAAeQAAAggaAQQgXAPgYgHQgKgDgTgTQAKAUgHATQgJAXgWAKQgNAGgOAAIgNgBg");
	this.shape_268.setTransform(27.4,-32.7,1,1,0,0,180);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#886241").s().p("AgcB4QgEgKgHgZQgNgsAMgjQgJARgRAIQgHADgGgCQgUgGgJgsQgIgqAIgYQAJgZAzgUQAVgIASgBQAcgDAGAQQACAEAAAGQAHgMAZABIAXABQAYACAGA1QAEArgHAhQgEATgMAFQgPAFgTgXIAAAAIgEgHQgJgNgGgSQgOgwgBgHQgDgLABgJIgDAGQgHALgZAgQgKAMgKAcIATgiQAMgSAIgEQAOgHAIAVIAJAiQAFAVAGAIQAEAJAGAGIAAApQgSAVgQAbIgNATQgGAHgLAAQgNAAgKgTg");
	this.shape_269.setTransform(15.1,-16.5,1,1,0,0,180);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#886241").s().p("AgqBKIADgFQAFgIAJgFQgrARgOgSQgIgMAFgWQACgMABgRIAAgfQADgtAyAPQAsANARAcQALASgDAQQgDARgQAKQgTAMgQAHIAHgCIANgEQAKgCAEgDQAQgNAMAFQAHADARASIAQAUg");
	this.shape_270.setTransform(23.8,-7.4,1,1,0,0,180);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#886241").s().p("AgiAvQgKgKAAgVQAAgmAJgUQAGgNALAEIASAIIAYACQALAEAFASQARBIgsgSIgBAAQgCAAgIAHQgHAIgFABQgFACgFAAQgIAAgGgGg");
	this.shape_271.setTransform(30.9,-19.1,1,1,0,0,180);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#886241").s().p("AgpBEIAAhZQALgQAIgOQACgEALgFQAJgFAGgBQAOgDAJAGQAIAFADAVQADARgBANQgFAygHAZg");
	this.shape_272.setTransform(36.5,-6.8,1,1,0,0,180);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#886241").s().p("AgjAXIAAgwIBHAAIgBACQgJAggSALQgJAGgNAAQgKAAgLgDg");
	this.shape_273.setTransform(37.1,-38.1,1,1,0,0,180);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#886241").s().p("AgKAXIgFgCQgQgFgMgJQgQgMgBgPIAAgFIB5AAIgBACQgJAggTALQgJAGgNAAQgKAAgKgDg");
	this.shape_274.setTransform(8.1,-38.1,1,1,0,0,180);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#886241").s().p("AhCBEIAAgBQAAgGABgGQAEgPAPgXIAZggIAEgGQAMgQAGgOQADgEALgFQAJgFAGgBQAPgDAJAGQAHAFAEAVQADAQgBAOQgFAvgHAcg");
	this.shape_275.setTransform(7.4,-6.8,1,1,0,0,180);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#886241").s().p("AgaA8IAAiKIAWABQAXACAGA1QAFAqgIAiQgEATgLAFIgGABQgMAAgPgTg");
	this.shape_276.setTransform(38,-21.3,1,1,0,0,180);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#886241").s().p("AgGgTIAEADQAJAJAAAHQAAAFgJALIgEAEg");
	this.shape_277.setTransform(40.1,-12,1,1,0,0,180);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#886241").s().p("AAGAhQgSAAgIgDQgPgFgFgTQgGgTANgOIAIgEQAEgBALAEIAQAFIADABQAGACAJgCQAKgCAEADQAEAEABAKQABAHgCAHQgCAIgGAGIgLAHQgFAEgLABg");
	this.shape_278.setTransform(9.8,-32.9,1,1,0,0,180);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#544236").s().p("AjLDMIAAmXIGIAAIgIAcQgLAYgUAFQAOAfgbAWQAVAEAIAeQAGAVAAAhQABAigGAaQAhAGADAqQADAjgRBCg");
	this.shape_279.setTransform(20.4,-20.4,1,1,0,0,180);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#92C74C").s().p("ACrBAIgGgHQgDgEgEgBIgEgDQgFgGgKgdQgIgXgCADIABAQQADATgCAJIgCALQgIgIgDgcIgCgeQgEgHgCAZQgBAbgCgCQgEgFgDgYQgDgPAAANQgBAJgFAPIgFAOIAAgLQgBgWgEgPQgHgbgOASQgOARAAAWQAAAEgDgNIgFgTQgBgJAFgVQACgMgGAIQgCAEgDAYQgBADgCgKIgGgWQgGACgEAIQgDAFAAAaQAAAMgKgRQgJgSgGgBQgIgBAAAeQgBgIgEgNQgEgLgBgLIgJASQgFAJgBAOIgBAWQgBADgKgXQgCgEgBgRQgBgOgBABQgGAIgDAGIgFASQgBAEgCggQAAgDgEAOQgEAPAAALQAAAggFgVQgFgUAAgQQgBgWgEAMIgIAdQgdAvAEgPQADgJABgSQACgSACgIQACgKgHATIgIAVQgDAIgBgWIAAgdQAAgpgXBOQgEAPAAg5QABgYgHAdIgIAoIgFAKIAAhPIE3AAQAIAKAGADQAFADAMAAQANAAAKAQQAEAHALAbIAFAOIgIgHIgIgGIgLgKQgGgGgFAEQgGAFAAAKQABAJAFAHQAKAQAHAZIAAACIgBgBg");
	this.shape_280.setTransform(140.7,-75);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#00A75A").s().p("AigBIQABgJgBgOIgBghQAAgSgFgDQgDgCgEAFQgCACgGAaQgFAZgOAKIAAiIIE5AAQAGAHAIACIASADQAUAEAKAYIAFASQAEAPADAFQADAGALAFQgKAKgLgHQgGgFgJgNQgDgFgIgDQgIgCABAIQAAAGABADQAKAUADAHQAGARAAAPQAAAAAAABQAAAAAAAAQAAAAAAgBQAAAAgBgBQgCgFgCgDIgLgFQgHgDgEgLIgHgRQgGgNABAIQACAVgEAMQgCAGgEAHQgKgNgDggQgFglgEgLIAAAQQABAZgEAJQgeA+ACgcQACgMgDgfQgCgegDACQgUARACAgQAAAUgBgCQgRgcgCgVQgCgTgFgFQgKgLAAAfIAAAwIgEAeQgCglgSgdQgIgEgHgKIgDgEIgBAAQgJgLgBAMQAAALAGAOQAEAIAIAGIAGAEQgVANgbgYIgVgYQAIANgHAVQgHATgPAQQgEADABgTIACgcQAAgagGAJQgEAGgNAeQgGANgJAMQgGAJgCAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBg");
	this.shape_281.setTransform(141.5,-73.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#305A45").s().p("AitA8QADgPABgTQAAgVgDAGQgHAWgFAIQgHAOgLACIAAhlIAJglIAEgKIBgAAIgPAbIgBAYIBcgsQACAOAJAiIABgdIBzgaQAJADAUAEQARAEAJAKQAJAJAEAOIAIAcQADAJALAGQAHAEgHAGQgMAMgOgNQgOgRgGgDQgJgEAIAPQANAYABARQACANgDANQgBADgHgRQgCgDgHgDQgGgEgDgEQgFgLgFgFIgBAIQgBAKgDAIIgIALIAAABQgOgQgEgOQgCgKgCAGQgCAFAAAMQAAAbgCgEQgEgOgFgLQgBgCgFAGQgIAJgIAEIABgKQABgRgEgTQgCgLgFABQgEABAAAKIABAZQABAOAEAHQgLgDgLgUIgIgSQAFARgBAaQgBAXgDAEIgCgKQgDgRgHgQIgGgRIgEAlQAAASgGgXIgMglQgIgPACAJIAFATQAHAigKAHQgBgVgGgHIgRgLIgJgIQgEgBACANQAAAGADAEIAEAKQAHAZgLgMIgSgZIgMgeQgEgHgIAaQgCAJgJAPQgFAKgBASQgJgVgBgMIgDgkQAAAAAAAAQgBAAAAAAQAAABgBAAQgBABAAABQgBACgDAfIgEARQgDAKAAAHQgCgDgDgMIgCgPQgKAQgGAHQgLAKgMAAQAJgRADgPg");
	this.shape_282.setTransform(141.7,-72.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#E3C48E").s().p("AgRADQAFgFAMAAQAMAAAEADIACACg");
	this.shape_283.setTransform(137.7,-41.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#E3C48E").s().p("AgHAEQgDgBgBgDQgCgCADgCIAEABIAGACIAIAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABIgGABIgFAAQgEAAgDgBg");
	this.shape_284.setTransform(151.3,-74.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#E3C48E").s().p("AgRANQgDgNACgIQAEgJATgFQAUgEgIANIgJANQgEADgDAKQgCAIgGADIgCAAQgFAAgDgLg");
	this.shape_285.setTransform(140.1,-64);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#E3C48E").s().p("AgJATIgDgIQgDgLAGgLQAJgRADAJIAGAPIAEAFQACACgDADQgGAGgEAFQgCAGgEAAQgDAAgCgEg");
	this.shape_286.setTransform(145.8,-55);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#E3C48E").s().p("AACAPQgEgDgCgIQgEgOABgCQABgDAJABQAEAAABAKQABAHgBAIQgBAFgDAAIgCgBg");
	this.shape_287.setTransform(151.5,-66.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#E3C48E").s().p("AgMASQgLgKADgIQABgFAIgHIAFgHQABgFAFAEIAHAKQALAJADAHQAFAMgOADQgGACgFAAQgIAAgFgFg");
	this.shape_288.setTransform(131,-75.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#E3C48E").s().p("AgHAdIgIgEQgGgDAAgFQgBgIAHgJIARgaQAAgBAGgCQAHgDAEADQADACAAAPQgDAagFAJQgEAIgJAAQgDAAgFgCg");
	this.shape_289.setTransform(154.5,-47.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#E3C48E").s().p("AgKAdIgIgEIAAgZIASgaQAAgBAFgCQAGgDAEADQAEACAAAPQgDAagFAJQgEAIgIAAQgEAAgFgCg");
	this.shape_290.setTransform(123.3,-47.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#E3C48E").s().p("AAAARQgDgBgJgKQgJgKAAgFQAAgFADgDIAjAAQAFAHAAAKQAAAKgHAFQgFADgFAAIgFgBg");
	this.shape_291.setTransform(137.8,-79.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#E3C48E").s().p("AAEAKQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDABQgIAAABgJQABgIAEgEQAAgBAAAAQABAAAAAAQABAAAAAAQABAAABABIADADIAGADQADABAAADQABAMgEAAIgEgCg");
	this.shape_292.setTransform(129.7,-61.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#E3C48E").s().p("AgPAHIABgPQABgLAMAFQALADADAHQAGAHgIAFQgIAGgIACIgEABQgHAAABgKg");
	this.shape_293.setTransform(139.2,-48.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#D6A757").s().p("AgGAHIAAgNIAIAAQADABABACQACAFgEADIgHACg");
	this.shape_294.setTransform(122.1,-73.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#D6A757").s().p("AgMAIQgGgCgDgGQgEgFAHgEQADgBAFABIANAFIAHABIAIABQAEAAABACQACAGgEACIgIADIgDAAIgGAAQgIAAgIgDg");
	this.shape_295.setTransform(152,-74.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#D6A757").s().p("AghAYQgHgZAGgPQAGgSAmgJQAmgJgOAZQgEAHgPASQgGAHgIAUQgEAPgMAFIgEABQgJAAgFgWg");
	this.shape_296.setTransform(141.3,-63.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#D6A757").s().p("AgRApQgCgDgDgNQgFgQACgLQABgKAHgNIAMgTQAIgLAEAMIAEASQADALADAFQADAGAGAEQADAFgGAHQgKALgIAOIgFAJQgCADgGAAQgFAAgEgJg");
	this.shape_297.setTransform(146.6,-54.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#D6A757").s().p("AAGAgQgJgEgHgUQgJgdADgFQACgGAUACIAAAAQAIABADAUQACARgEAPQgBAJgFAAIgDAAg");
	this.shape_298.setTransform(152.3,-65.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#D6A757").s().p("AgFAfIAAg+QAHACADAUQACARgEAPQgBAJgFAAIgCgBg");
	this.shape_299.setTransform(122,-65.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#D6A757").s().p("AgCAoQgNgDgIgHQgdgZAfgcIAJgMQABgJAKAIQADAEAKAMIASAQQAOAMgJAQQgHANgJADIgLABIgKgBg");
	this.shape_300.setTransform(131.3,-74.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#D6A757").s().p("AgLAuIgFgCQgRgHgBgLQAAgJAFgJQACgFALgMQAMgRAIgOQAAgCAJgDQAKgFAGAEQADADACALIAAAOQgEApgIANQgGANgOAAQgFAAgIgDg");
	this.shape_301.setTransform(154.7,-46.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#D6A757").s().p("AgTAuIgGgCIAAg1QANgRAIgOQACgDAGgCQALgFAFAEQAEADABALIABAOQgFApgHANQgHANgNAAQgGAAgHgDg");
	this.shape_302.setTransform(124,-46.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#D6A757").s().p("AAAAcQgGgCgPgSQgQgRAAgJQAAgGADgEIAxAAQAJANAOAKIAAAFQAAAPgNAJQgJAFgIAAIgIgBg");
	this.shape_303.setTransform(139,-78.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#D6A757").s().p("AggAKQAEgGAMgDQAOgCACgDQAJgGAGACQADACAJAIIAGAIg");
	this.shape_304.setTransform(138.8,-41.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#D6A757").s().p("AgVAIQAAgSAEgKQADgEAFACIAJAFIANACQAFABACAIQAEAPgCAFQgCAGgLgEQgDgBgEADQgFAFgDAAIgEABQgLAAAAgQg");
	this.shape_305.setTransform(130.6,-61);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#D6A757").s().p("AgfASIACgTIABgUQABgYAZAJQAWAJAIAQQALATgQAMQgSANgPAFIgKABQgPAAAEgVg");
	this.shape_306.setTransform(137.8,-48.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#B3844A").s().p("AgLgNQAFABAJgBQAGAAABADQAEALgHAFQAAACgJAEIgJACg");
	this.shape_307.setTransform(122.6,-73.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#B3844A").s().p("AgPAQQgJgEgEgKQgFgKAJgIQAEgDAIADIARAGIADAAQAFACAJgBQAGgBACAEQADALgGAFQgBACgKAEIgIACQgQAAgHgCg");
	this.shape_308.setTransform(152.2,-73.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#B3844A").s().p("AgwAjQgJgkAHgWQAJgbA3gMQA4gNgWAkQgHAMgTAYQgJAKgLAdQgHAVgRAIIgFACQgNAAgIggg");
	this.shape_309.setTransform(142.3,-62.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#B3844A").s().p("AgaA9QgDgHgFgRQgHgYADgQQACgPAKgUQAbg1AIAaIAHAaQAFASAEAGIAMAPQAFAFgDAGQABAFgEAFQgDAFgMAJIAAAAIgOAVIgIAOQgEAEgHAAQgIAAgGgNg");
	this.shape_310.setTransform(147.5,-54);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#B3844A").s().p("AgCApQgJgMgEgQQgOgsABgKQACgLAYABIAMAAQAOACAEAhQADAdgFAZQgDAOgJAAQgIAAgIgLg");
	this.shape_311.setTransform(153.2,-63.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#B3844A").s().p("AgPApIAAhcIANAAQANACAEAhQADAdgFAZQgDAOgJAAQgHAAgJgLg");
	this.shape_312.setTransform(123,-63.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#B3844A").s().p("AgBA0QgTgCgKgJQgGgEgHgQQgIgRAAgLQABgIAJgGQALgFACgDIAMgQQABgLANAKIAJALIAJAKQAEAEAIABQAIABAFAFQASARgMAYQgJAUgLACQgLADgMAAIgFAAg");
	this.shape_313.setTransform(131.5,-73.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#B3844A").s().p("AgmA7QgIgHgBgIQAAgOAIgNIAWgeQAMgQAKgTQABgCAMgFQAOgGAIAGQAFADACAQIAAASQgGA6gKATg");
	this.shape_314.setTransform(154.8,-46.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#B3844A").s().p("AgVAFIgCgBIAAgLIAvAAQgJAPgRAAQgJAAgKgDg");
	this.shape_315.setTransform(123.8,-80.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#B3844A").s().p("AggA7IAAhIQAKgNANgWQACgCAKgFQAPgGAHAGQAFADACAQIABASQgGA6gLATg");
	this.shape_316.setTransform(124.7,-46.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#B3844A").s().p("AAAAnQgJgEgWgZQgXgZABgMQgBgGADgGIA2AAQARAYAjAPQgBAWgTALQgMAHgLAAQgGAAgGgBg");
	this.shape_317.setTransform(140.2,-77.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#B3844A").s().p("AgwAPQAFgKATgFQAWgFACgCQANgKAIAEQAEACANANQAIAIADAFg");
	this.shape_318.setTransform(139.8,-42.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#B3844A").s().p("AgWAhQgHgGAAgOQAAgcAGgOQADgHAHADIANAGIARABQAGACADAMQAGAWgDAJQgDAJgOgGQgEgCgGAGQgHAHgDABIgGABQgFAAgDgCg");
	this.shape_319.setTransform(131,-60.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#B3844A").s().p("AgsAXQACgKAAgOIABgaQABggAlANQAgALAMAUQAPAZgXAQQgaARgWAGQgIACgFAAQgWAAAGgcg");
	this.shape_320.setTransform(136.8,-48.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#9B6D45").s().p("AgDgKQAHAIAAACQAAACgHAJg");
	this.shape_321.setTransform(153.3,-52.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#9B6D45").s().p("AgPgUIABABQAIACALgCQAIgCACAGQAEAPgIAHIgMAKQgFADgJABg");
	this.shape_322.setTransform(123,-73.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#9B6D45").s().p("AgSAWQgLgDgGgOQgGgOAMgMQAEgDADAAIAHABIAVAHIABABQAIADAMgDQAIgCACAGQAEAOgIAIIgNAKQgEADgKABQgRAAgHgDg");
	this.shape_323.setTransform(152.3,-73.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#9B6D45").s().p("Ag5ApQgLgrAJgaQAKgfBCgQQAbgGANAGQAOAHgNAWQgJAPgXAbQgKAMgNAiQgIAagUAKQgEABgDAAQgQAAgJgmg");
	this.shape_324.setTransform(142.7,-62.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#9B6D45").s().p("AggBRQgEgIgHgYQgJggADgVQADgTAOgbQAPgcAIgJQAQgUAIAWIAJAjQAGAWAFAJQAIANAFAEIACACIAAAVIgDAEQgUAXgQAaIgLASQgEAGgKAAQgKAAgIgRg");
	this.shape_325.setTransform(147.9,-53.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#9B6D45").s().p("AgDgKQAHAIAAACQAAACgHAJg");
	this.shape_326.setTransform(121.8,-52.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#9B6D45").s().p("AARBHQgNgCgMgUQgJgOgFgRQgSg7ABgNQACgRAdABIAWABQASABAGAuQAFAogIAiQgEATgMAAIgCAAg");
	this.shape_327.setTransform(153.8,-62);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#9B6D45").s().p("AABBHQgLgCgNgUIAAh3IAWABQASABAFAuQAFAogHAiQgFATgLAAIgDAAg");
	this.shape_328.setTransform(123.8,-62);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#9B6D45").s().p("Ag0AZQgSgsASgPQAagLAFgNQADgKAJAFQAGADAGALIASANQARAIANASQAQAUgIAVQgNAigoABIgCAAQgnAAgRgpg");
	this.shape_329.setTransform(131.8,-72.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#9B6D45").s().p("Ag8BAQAAgRANgSIAfgqQANgSAKgTQABgDAPgGQATgIAKAHQAGAEACAVQACAPgBAJQgFAzgHAYg");
	this.shape_330.setTransform(154.7,-47.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#9B6D45").s().p("AggATIAAgpIBBAAQgIAcgPAKQgJAHgMAAQgJAAgMgEg");
	this.shape_331.setTransform(124.7,-79.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#9B6D45").s().p("AgmBAIAAhNQANgTAKgSQADgEANgFQATgIAKAHQAGAEACAVQACAPgBAJQgFAzgHAYg");
	this.shape_332.setTransform(125.3,-47.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#9B6D45").s().p("AAAAvQgLgDgagfQgcgeAAgPQAAgJAEgHIA5AAQAVAfAxAQIAAAAQAAAbgXAPQgOAIgOAAQgHAAgIgCg");
	this.shape_333.setTransform(141,-76.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#9B6D45").s().p("Ag5ARQAHgLAWgFQAZgGAEgDQAOgMALAFQAEACAQAQIAMAOg");
	this.shape_334.setTransform(140.6,-42.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#9B6D45").s().p("AgeAqQgIgHAAgTQAAgkAIgTQAEgIAKAEIAQAIIAVABQAJADAEAOQAIAegEALQgEAMgTgIQgFgCgIAHQgIAJgFACIgIABQgGAAgFgDg");
	this.shape_335.setTransform(131.3,-59.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#9B6D45").s().p("Ag4AcQADgMAAgRIABggQABgmAvAPQApAOAOAYQATAfgcASQgfAVgeAHQgKADgHAAQgbAAAHgig");
	this.shape_336.setTransform(136,-48.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#886241").s().p("AgGgTIAEADQAJAJAAAHQAAAFgJALIgEAEg");
	this.shape_337.setTransform(153.6,-52.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#886241").s().p("AgkBPQgkgGgPglQgHgTgCgMQgCAGgDAEQgDADgEADIgIAFQgFAEgMABIAAg4IADABQAFACAKgCQAKgCAEADQACACACAGIABABQAAgHAFgGQAFgGAOgJQANgHACgGQAGgOAMAFQAJAEAIAMQAMALAEABQAGADAHAGQgQgYAAgMQAAgJADgHIA/AAQAYAhA1AQQgBAegZAQQgXAPgYgHQgKgDgTgTQAKAUgHATQgJAXgWAKQgNAGgOAAIgNgBg");
	this.shape_338.setTransform(134.8,-73.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#886241").s().p("AgcB4QgEgKgHgZQgNgsAMgjQgJARgRAIQgHADgGgCQgUgGgJgsQgIgqAIgYQAJgZAzgUQAVgIASgBQAcgDAGAQQACAEAAAGQAHgMAZABIAXACQAYABAGA1QAEArgHAhQgEATgMAFQgPAGgTgYIAAAAIgEgGQgJgOgGgSQgOgwgBgHQgDgLABgJIgDAGQgHALgZAgQgKAMgKAcIATgiQAMgSAIgEQAOgHAIAVIAJAiQAFAVAGAIQAEAJAGAGIAAApQgSAVgQAbIgNATQgGAHgLAAQgNAAgKgTg");
	this.shape_339.setTransform(147,-57.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#886241").s().p("AgqBKIADgFQAFgIAJgEQgsAPgNgRQgIgMAFgWQACgMABgRIAAgfQADgtAyAPQAsANARAcQALASgDAQQgDARgQAKQgQALgTAIIAHgCIANgEQAKgCAEgDQAQgNAMAFQAHADARASIAQAUg");
	this.shape_340.setTransform(138.4,-48.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#886241").s().p("AgiAvQgKgKAAgVQAAgmAJgUQAGgNALAEIASAIIAYACQALAEAFASQARBIgsgSIgBAAQgCAAgIAHQgHAIgFABQgFACgFAAQgIAAgGgGg");
	this.shape_341.setTransform(131.3,-59.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#886241").s().p("AgpBEIAAhZQALgQAIgOQACgEALgFQAJgFAGgBQAOgDAJAGQAIAFADAVQADARgBANQgFAygHAZg");
	this.shape_342.setTransform(125.6,-47.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#886241").s().p("AgjAXIAAgwIBHAAIgBACQgJAggSALQgJAGgNAAQgKAAgLgDg");
	this.shape_343.setTransform(125,-78.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#886241").s().p("AhCBEIAAgBQAAgGABgGQAEgPAPgWIAZggIAEgHQAMgQAGgOQADgEALgFQAJgFAGgBQAPgDAJAGQAHAFAEAVQADAQgBAOQgFAvgHAcg");
	this.shape_344.setTransform(154.7,-47.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#886241").s().p("AgaA8IAAiKIAWACQAXABAGA1QAFAqgIAiQgEATgLAFIgGABQgMAAgPgTg");
	this.shape_345.setTransform(124.1,-62);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#886241").s().p("AgGgTIAEADQAJAJAAAHQAAAFgJALIgEAEg");
	this.shape_346.setTransform(122.1,-52.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#886241").s().p("AAGAeQgSAAgIgCQgPgGgFgTQgGgTANgNQAZAGAeAAIAQAAQAEAEABAJQABAJgCAFQgCAJgGAFIgLAHQgFAEgLABg");
	this.shape_347.setTransform(152.3,-73.4);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#544236").s().p("AjLDMIAAmXIC/AAQARAaAmAQQAmAQAvAAIAWgBQAOAfgbAWQAVAEAIAeQAGAVAAAhQABAigGAaQAhAGADAqQADAjgRBCg");
	this.shape_348.setTransform(141.8,-61.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#92C74C").s().p("AB6AnQgQgSgDgIIgLgbQgFgNgBAWQAAAQgHAUQgGAVAAggQAAgMgFgNQgGgPAAAEQgBAggCgGIgGgQQgDgHgIgHQgCgCgBAOQgCAQgCAEQgNAZgBgEIgBgWQgBgMgGgKIgHgLQgFgJgBACQAAALgEALIgHATQAAgcgKABQgIAAgNASQgMASAAgOQAAgYgEgFQgFgIgIgCIgHAWQgDAKgBgEQgEgYgDgDQgHgIADAMQAFAVgBAHIgFAUQgFANAAgEQABgWgSgRQgSgSgJAbQgFAPgBAXIAAAKIgHgOQgHgOAAgLQgBgJADgaQABgNgFAGQgEAEgTAjQgQAcAGgfQAEgRgCgMQgCgMgFAEIAAgPIGXAAIAABPIgGgKIgLgnQgIgdABAYQAAA3gFgNIgRgoQgNgZAAAbIAAAdQAAAXgFgJIgKgWQgJgSACAKQADAIADASQACATADAIQAAABAAABQABAAAAABQAAAAgBABQAAAAAAAAQgCAAgKgLg");
	this.shape_349.setTransform(61,-76.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#00A75A").s().p("ACPBDQgMgMgHgNQgQgegFgGQgIgJAAAaIACAcQABATgEgDQgUgQgIgTQgKgVAKgNIgaAYQgiAYgagNIAIgEQAKgGAEgIQAIgOgBgLQAAgMgMALIgEAEQgKAKgKAEQgKANgHATQgHARgBARIgHgeIABgwQAAgfgNALQgGAFgCATQgDAVgVAcQgEAEABgEIACgSQABgggZgRQgDgCgEAeQgDAfACAMQACAOgLgMQgKgLgPgZQgGgJABgZQABgSgBACQgEAJgFAlQgDAfgQAQIAAiIIGXAAIAACIQgSgKgHgZQgHgagCgCQgFgFgFACQgGADAAASIgBAhQgBAOACAJQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgDAAgHgJg");
	this.shape_350.setTransform(61,-73.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#305A45").s().p("ACZBSQgJgHgMgQQABAEgDALQgEAMgDADQAAgHgEgKIgFgRIgDgUIgBgNQgEgEAAABIgEAkQAAAIgHAPQgGANAAgDQgBgSgHgKQgLgQgDgIQgKgagEAHIgRAeIgWAZQgOANAJgaIAGgKQACgEABgGQACgNgEABIgNAIIgTALQgIAHgBAVQgNgHAIgiIAHgTQADgJgLAPIgPAlQgJAXAAgSQgFggABgFQgEAJgFAIQgJAQgDARIgCAKQgEgEgBgXQgCgaAHgRIgKASQgOAUgPADQAGgHABgOIABgZQAAgKgGgBQgFgBgDALQgFATACARIABAKQgLgEgKgJQgHgGgBACIgMAZQgCAEAAgbQAAgMgCgFQgCgGgEAKQgCAGgIAKQgHAJgGAFIAAiQICdAWQACANAAAQQALgiADgOIBzAsQgCgLAAgNIgSgbIB5AAQAEAFABAFIANAlIAABlQgOgCgJgOQgGgIgJgWQgFgGABAVQAAAUAEAOQAEAPAMARQgQAAgNgKg");
	this.shape_351.setTransform(61,-72.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#E3C48E").s().p("AgWADQAGgFAQAAQAPAAAGADIACACg");
	this.shape_352.setTransform(61.7,-41.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#E3C48E").s().p("AgJAEQgEgBgCgDQgCgCAEgCIAFABIAIACIALABQAEAAABAAQADADgFABIgIABIgGAAQgEAAgFgBg");
	this.shape_353.setTransform(79.1,-74.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#E3C48E").s().p("AgWANQgEgNADgHQAFgKAZgFQAagEgKANQgDAEgKAJQgEADgFAKQgCAIgIADIgDAAQgGAAgEgLg");
	this.shape_354.setTransform(64.7,-64);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#E3C48E").s().p("AgPALQgDgHABgFQABgEAFgGQALgQAEAHIAEAJQACAFACACIAGAEQACACgEADQgGAFgHAHIgDAEQgBACgEAAQgFAAgFgMg");
	this.shape_355.setTransform(72,-55);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#E3C48E").s().p("AACAPQgEgDgDgIQgGgNABgDQACgDAMABQAFAAACAKQABAIgCAHQgBAFgEAAIgDgBg");
	this.shape_356.setTransform(79.5,-66.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#E3C48E").s().p("AgQASQgOgKADgIQACgEAKgIIAHgHQABgGAHAFQADADAGAHQAOAJAEAHQAGAMgRADQgIACgHAAQgKAAgHgFg");
	this.shape_357.setTransform(53,-75.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#E3C48E").s().p("AgDAFQgBgHAIgKIAAAZQgHgEAAgEg");
	this.shape_358.setTransform(80.9,-46);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#E3C48E").s().p("AgNAeQgGgCgFgDIAAgZIAYgaQAAgBAHgCQAIgDAFADQAFACAAAPQgFAagFAJQgHAIgKAAIgLgBg");
	this.shape_359.setTransform(43.1,-47.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#E3C48E").s().p("AAAARQgFgBgLgKQgMgKAAgFQAAgFAEgDIAuAAQAHAHAAAKQAAAKgKAFQgHADgGAAIgGgBg");
	this.shape_360.setTransform(61.8,-79.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#E3C48E").s().p("AAFAKQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAIgFABQgKAAACgJQACgJAEgDQAAgBABAAQAAAAABAAQABAAAAAAQABAAABABIAFADIAIADQADABAAADQABAJgCACIgCABQgDAAgDgCg");
	this.shape_361.setTransform(51.4,-61.7);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#E3C48E").s().p("AgTAIQABgEAAgMQABgLAQAFQAOADAFAHQAHAHgLAFQgLAGgJACIgHABQgJAAADgJg");
	this.shape_362.setTransform(63.5,-48.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#D6A757").s().p("AgIAHIAAgNIAKAAQAFABABACQADAFgGADIgJACg");
	this.shape_363.setTransform(41.5,-73.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#D6A757").s().p("AgHAIQgJgCgDgGQgEgFAIgEQAEgCAHACIAQAEIAJACIAAANIgHABQgNAAgIgDg");
	this.shape_364.setTransform(79.2,-74.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#D6A757").s().p("AgrAYQgJgYAHgQQAIgSAygJQAxgJgTAZQgFAHgSASQgIAGgKAVQgGAPgPAFIgFABQgMAAgHgWg");
	this.shape_365.setTransform(66.3,-63.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#D6A757").s().p("AgdAZQgGgQACgLQACgKAJgNQAWgkAIASIAGARQAEAMADAEQAFAGAHAFQAEAFgIAHQgNALgKAOIgHAJQgDADgHAAQgKAAgIgZg");
	this.shape_366.setTransform(73.2,-54.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#D6A757").s().p("AgFAIQgMgdADgFQADgGAaACIABAAIAAA+QgOgEgHgUg");
	this.shape_367.setTransform(79.8,-65.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#D6A757").s().p("AgGAfIAAg+QAJACADAUQADARgFAPQgCAJgFAAIgDgBg");
	this.shape_368.setTransform(41.3,-65.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#D6A757").s().p("AgDAnQgRgCgLgHQgkgZAngcQACgBAKgMQAAgFAGABQADABAEADQAFAEANAMIAXAPQASANgMAQQgJAMgLADIgNACIgOgCg");
	this.shape_369.setTransform(53.5,-74.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#D6A757").s().p("AgKAJQgBgJAHgIQADgEAMgOIAAA1QgVgIAAgKg");
	this.shape_370.setTransform(80.2,-45.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#D6A757").s().p("AgNgFIAbAAIAAALQgPgFgMgGg");
	this.shape_371.setTransform(80,-80.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#D6A757").s().p("AgZAuIgHgCIAAg1QATgVAIgKQACgCAJgDQANgFAHAEQAFADACALIAAAOQgFApgKAOQgJAMgQAAQgIAAgKgDg");
	this.shape_372.setTransform(43.9,-46.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#D6A757").s().p("AAAAcQgIgCgUgSQgVgRABgJQgBgGAEgEIBVAAQAJAKAAASQAAAPgRAJQgKAFgLAAIgLgBg");
	this.shape_373.setTransform(63.4,-78.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#D6A757").s().p("AgqAJQAGgFAQgDQASgDACgCQALgHAIADQAEABAMAJIAIAHg");
	this.shape_374.setTransform(63.1,-41.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#D6A757").s().p("AgWAVQgGgEAAgJQAAgSAGgKQADgEAHADIAMAEIAQACQAHABACAIQAGAPgDAGQgDAFgOgEQgEgBgFADQgHAFgDAAIgFABQgFAAgEgDg");
	this.shape_375.setTransform(52.5,-61);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#D6A757").s().p("AgoASQACgIAAgKIABgVQABgYAhAJQAdAJAKAQQANATgUAMQgVANgVAFIgMABQgUAAAFgVg");
	this.shape_376.setTransform(61.8,-48.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#B3844A").s().p("AgOgNQAHABALgBQAIAAABADQAEALgHAFIgNAGIgLACg");
	this.shape_377.setTransform(42.1,-73.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#B3844A").s().p("AgFAQQgMgEgFgKQgGgKAMgIQAFgDAKADIAXAGIADAAIAAAcQgXAAgHgCg");
	this.shape_378.setTransform(78.9,-73.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#B3844A").s().p("Ag+AjQgMgkAKgWQALgbBHgMQBIgNgcAkQgIAMgaAYQgLAKgOAdQgJAVgWAIIgHACQgRAAgKggg");
	this.shape_379.setTransform(67.5,-62.7);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#B3844A").s().p("AgiA+IgKgZQgJgYADgQQADgPAOgUQAPgVAHgHQAPgQAIASIAJAaQAGARAFAHQAFAHAKAHQAHAGgEAGQACAFgFAFQgFAEgPAJIAAAAQgMANgGAJIgKANQgFAFgKAAQgKAAgIgNg");
	this.shape_380.setTransform(74.3,-54.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#B3844A").s().p("AAAATQgSgsACgKQADgLAeABIAABcQgLgLgGgRg");
	this.shape_381.setTransform(79.7,-64.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#B3844A").s().p("AgUApIAAhcIARABQAQABAGAhQAFAdgIAZQgEAOgLAAQgJAAgMgLg");
	this.shape_382.setTransform(42.7,-63.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#B3844A").s().p("AgCAzQgZgBgNgJQgHgFgJgPQgLgSABgKQAAgIANgGQAOgGADgCIAQgRQAAgGAHABQAFABAFADIAMALIALALQAFADALACQALABAGAEQAYARgQAYQgMAUgOADQgOADgPAAIgIgBg");
	this.shape_383.setTransform(53.7,-73.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#B3844A").s().p("AgHAkQgKgHgBgHQAAgOAKgNIAbgeIAABHg");
	this.shape_384.setTransform(79.4,-44.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#B3844A").s().p("AgcAFIgDgBIAAgLIA+AAQgMAPgXAAQgLAAgNgDg");
	this.shape_385.setTransform(43.8,-80.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#B3844A").s().p("AgpA7IAAhHQAPgQAPgUQABgCAOgFQATgGAKAGQAGADACAQQACALgBAIQgIA5gNATg");
	this.shape_386.setTransform(44.8,-46.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#B3844A").s().p("AAAAnQgMgEgcgZQgegZABgMQgBgGAEgGIB9AAQALANAAAZQAAAWgYAMQgPAHgPAAQgIAAgIgBg");
	this.shape_387.setTransform(64.8,-77.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#B3844A").s().p("Ag+APQAHgKAYgFQAcgEADgDQAQgKALAEQAFACASANIANANg");
	this.shape_388.setTransform(64.4,-42.2);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#B3844A").s().p("AgdAhQgJgGAAgOQAAgcAJgOQAEgHAJADIAQAGIAWABQAJACADAMQAIAWgEAJQgEAJgTgGQgFgCgHAGQgJAHgFABIgIABQgGAAgEgCg");
	this.shape_389.setTransform(52.9,-60.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#B3844A").s().p("Ag5AXQACgJABgPIAAgaQACggAvANQArALAOAUQAUAZgdAQQgiARgcAGQgLACgHAAQgcAAAIgcg");
	this.shape_390.setTransform(60.5,-48.6);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#9B6D45").s().p("AgUgUIACABQAJACAPgCQALgCACAGQAFAPgJAHIgRAKQgGADgMABg");
	this.shape_391.setTransform(42.7,-73.2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#9B6D45").s().p("AgEAWQgOgEgHgNQgHgPAOgLQAHgFALADIAcAHIAAApIgIAAQgPAAgJgDg");
	this.shape_392.setTransform(78.5,-73.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#9B6D45").s().p("AhKApQgOgrALgaQAOggBVgPQAjgGAQAGQASAHgQAVQgKANgfAdQgOAMgQAjQgLAagaAJQgFACgEAAQgUAAgMgmg");
	this.shape_393.setTransform(68.1,-62.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#9B6D45").s().p("AgqBRQgFgIgJgYQgLggAEgVQADgTATgbQATgbAKgKQAVgUAKAWIAMAjQAIAXAGAIQANAPAEACIADACIAAAVIgEAEQgZAWgVAbIgPASQgFAGgNAAQgOAAgKgRg");
	this.shape_394.setTransform(74.8,-53.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#9B6D45").s().p("AgEgKQAJAHAAADQAAACgJAJg");
	this.shape_395.setTransform(41.1,-52.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#9B6D45").s().p("AACAeQgXg7ACgOQACgQAlAAIAAB3QgMgOgGgQg");
	this.shape_396.setTransform(79.4,-63.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#9B6D45").s().p("AACBHQgQgCgQgUIAAh3IAdABQAXACAHAtQAGAngJAjQgGATgPAAIgDAAg");
	this.shape_397.setTransform(43.7,-62);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#9B6D45").s().p("AhDAZQgYgsAYgPQAggLAHgNQAJgSAXAbIAXANQAXAIAQASQAVAUgLAVQgRAig0ABIgBAAQg0AAgVgpg");
	this.shape_398.setTransform(54,-72.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#9B6D45").s().p("AgbAnQAAgRAQgTIAngpIAABNg");
	this.shape_399.setTransform(78.5,-44.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#9B6D45").s().p("AAYATQgQgEgNgHQgWgLAAgMIAAgFIA3AAIAAApg");
	this.shape_400.setTransform(78.5,-79.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#9B6D45").s().p("AgqATIAAgpIBVAAQgLAcgTAKQgMAHgPAAQgMAAgQgEg");
	this.shape_401.setTransform(44.9,-79.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#9B6D45").s().p("AgyBAIAAhNQATgUAMgRQACgDATgGQAXgIANAHQAIAFADAUQADAOgBAKQgHAzgJAYg");
	this.shape_402.setTransform(45.7,-47.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#9B6D45").s().p("AAAAvQgPgDghgfQgkgeAAgPQAAgJAGgHICUAAQAPAQAAAfQAAAbgeAPQgSAIgSAAQgJAAgKgCg");
	this.shape_403.setTransform(65.9,-76.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#9B6D45").s().p("AhKARQAJgKAcgGQAhgGAEgDQAUgMANAFQAGADAVAPQAJAIAGAGg");
	this.shape_404.setTransform(65.4,-42.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#9B6D45").s().p("AgnAqQgLgHAAgTQAAgkALgTQAFgIAMAEIAWAIIAbABQAMACAFAPQAKAegFALQgGAMgYgIQgGgCgKAHQgMAJgGACQgGABgFAAQgHAAgGgDg");
	this.shape_405.setTransform(53.4,-59.9);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#9B6D45").s().p("AhIAcQADgMABgSIAAgfQADgmA7APQA2ANASAYQALAPgCALQgCAOgTAKQgoAUgmAIQgNACgKAAQgjAAAKghg");
	this.shape_406.setTransform(59.5,-48.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#886241").s().p("ACMDMIAAgIIACgFQAEgPAUgWIAgghIAGgGIAABZgAgmDMQAIgNAMgEQgXAHgQAAQgXABgKgKQgDgDgCgGIAAgXIAAgCQAEgLAAgTIABgeQACgeAfgEQAbgDAmAQQAlAPAMAQIAFAIQAMAVgMARQgGAKgOAGQgUALgZAIIAJgCQAbgFAIgEQAMgHAJgCQAMgCALAGQAHAEARAOQALAJAEAGIAFAFgAjLDMIAAhaIAZgeQAEgFASgGIAPgEQASgDANAGQALAHAEAXQADAPgCALIgBAJQgGArgIAYgABaCfQgGgKgJgZQgJgYAAgSQAAgSAIgSQgEAGgIAGQgJAHgNAFQgIADgJgBQgYgHgLgtQgLgpALgYQAGgOAZgOQATgJAYgHIACgBQAwgOAcAGQAPACAEAKQADAFgBAFQAGgHAOgDIAXgBIAACLIgGgHQgNgQgGgRQgQglgEgRQgDgLAAgJIgDAGIgNAOQgJALgUASQgNAMgNAbIAFgIQAMgSAHgGQARgWAOgDQAQgCAIASIAMAhQAHAWAHAIQAHAKAHAFIAAApQgZAWgUAaIgJAMQgFAGgFADQgGAFgPAAQgRAAgMgTgAjLA/IAJAHQAJAHAAAFQAAAGgJAIIgJAIgAjCA7IgJgIIAAiKIAdACQAKAAAIAGQATAQADAtQADAlgIAaQgEARgNAGIgDABIgIABQgMAAgPgLgAh7A6QgKgKAAgTQAAgnAMgUQAIgOASAHQAPAGAEABIATAAQANABAGAEQAJAFAFAOQAWBHg3gRIgBAAIgCAAQgCAAgKAHQgLAHgGACIgGABIgHAAQgNAAgIgHgAhOgrQgIgBgJgDQghgLgPgdQgKgUgCgLIgBACQgCAEgEAEQgDAEgGADIgKAFQgHADgGAAIgIABIgBAAIAAg4IADABIAGAAIAOAAQANgCAFADQAEACACAFIAAABIAAABQACgHAFgHQAGgGATgIQARgHADgGQADgHAGgDQAOgGAWAWIACACQAMAJAGACIASAIQgVgWAAgNQAAgKAEgHICnAAQAKAOABARIAAAbQgEAXgZAOQgXAMgagBQgGAAgJgCQgNgDgXgTQAMAUgJAUQgJASgUAKQgTAKgXABIgFAAIgQgBgACpheQgLgDgIgIQgHgJgDgKIAAgLQADgKAJgHQAFgEAEAAQAGgCAPAEIAWAGIAAA4QgZAAgKgCgAjCiYIgJgCIAAgxIBeAAIgBADQgPAngfAJQgJACgKAAQgJAAgKgCgADFibQgygPgHgXIAAgKIBAAAIAAAxg");
	this.shape_407.setTransform(61,-61.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#544236").s().p("AjLDMIAAmXIGXAAIAAGXg");
	this.shape_408.setTransform(61,-61.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#E3C48E").s().p("AgWADQAGgFAQAAQAPAAAGADIACACg");
	this.shape_409.setTransform(61.7,-0.3);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#E3C48E").s().p("AgJAEQgEgBgCgDQgCgCAEgCIAFABIAIACIALAAQAEAAABABQADADgFABIgIABIgGAAQgEAAgFgBg");
	this.shape_410.setTransform(79.1,-33.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#E3C48E").s().p("AgWANQgEgNADgIQAFgJAZgFQAagEgKANQgDAEgKAJQgEADgFAKQgCAIgIADIgDAAQgGAAgEgLg");
	this.shape_411.setTransform(64.7,-23.2);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#E3C48E").s().p("AgPALQgDgHABgEQABgFAFgGQALgQAEAIIAEAIQACAGACABIAGAFQACACgEADIgNALIgDAFIgFABQgFAAgFgMg");
	this.shape_412.setTransform(72,-14.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#E3C48E").s().p("AACAPQgEgDgDgIQgGgNABgDQACgDAMABQAFAAACAKQABAIgCAHQgBAFgEAAIgDgBg");
	this.shape_413.setTransform(79.5,-25.9);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#E3C48E").s().p("AgQASQgOgKADgIQACgEAKgIIAHgHQABgGAHAFQADADAGAHQAOAJAEAHQAGAMgRADQgIACgHAAQgKAAgHgFg");
	this.shape_414.setTransform(53,-34.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#E3C48E").s().p("AgDAFQgBgHAIgKIAAAZQgHgEAAgEg");
	this.shape_415.setTransform(80.9,-5.3);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#E3C48E").s().p("AgNAeIgLgFIAAgZIAYgaQAAgBAHgCQAIgDAFADQAFACAAAPQgFAagFAJQgHAIgKAAIgLgBg");
	this.shape_416.setTransform(43.1,-6.5);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#E3C48E").s().p("AAAARQgFgBgLgKQgMgKAAgFQAAgFAEgDIAuAAQAHAHAAAKQAAAKgKAFQgHADgGAAIgGgBg");
	this.shape_417.setTransform(61.8,-39);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#E3C48E").s().p("AAFAKQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAIgFABQgKAAACgJQACgJAEgDQAAgBABAAQAAAAABAAQABAAAAAAQABAAABABIAFADIAIADQADABAAADQABAJgCACIgCABQgDAAgDgCg");
	this.shape_418.setTransform(51.4,-20.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#E3C48E").s().p("AgTAIQABgEAAgMQABgLAQAFQAOADAFAHQAHAHgLAFQgLAGgJACIgHABQgJAAADgJg");
	this.shape_419.setTransform(63.5,-7.9);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#D6A757").s().p("AgIAHIAAgNIAKAAQAFABABACQADAFgGADIgJACg");
	this.shape_420.setTransform(41.5,-33);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#D6A757").s().p("AgHAIQgJgCgDgGQgEgFAIgEQAEgBAHABIAQAFIAJABIAAAOIgHAAQgNAAgIgDg");
	this.shape_421.setTransform(79.2,-33.4);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#D6A757").s().p("AgrAYQgJgZAHgPQAIgSAygJQAxgJgTAZQgFAHgSASQgIAGgKAVQgGAPgPAFIgFABQgMAAgHgWg");
	this.shape_422.setTransform(66.3,-22.5);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#D6A757").s().p("AgdAZQgGgQACgLQABgJAKgOQAKgOAFgFQAKgKAFALIAGASQAEAMADAEQAFAGAHAEQAEAFgIAHQgOANgJAMIgHAJQgDADgHAAQgKAAgIgZg");
	this.shape_423.setTransform(73.2,-13.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#D6A757").s().p("AgFAIQgMgdADgFQADgGAaACIABAAIAAA+QgOgEgHgUg");
	this.shape_424.setTransform(79.8,-24.6);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#D6A757").s().p("AgGAfIAAg+QAJACADAUQADARgFAPQgCAJgFAAIgDgBg");
	this.shape_425.setTransform(41.3,-24.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#D6A757").s().p("AgDAnQgRgCgLgHQgkgZAngcIAMgNQAAgFAGABQADABAEADQAFAEANAMIAXAPQASANgMAQQgJAMgLADIgNACIgOgCg");
	this.shape_426.setTransform(53.5,-33.5);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#D6A757").s().p("AgKAJQgBgJAHgIQADgEAMgOIAAA1QgVgIAAgKg");
	this.shape_427.setTransform(80.2,-4.4);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#D6A757").s().p("AgNgFIAbAAIAAALQgPgFgMgGg");
	this.shape_428.setTransform(80,-40.1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#D6A757").s().p("AgZAuIgHgCIAAg1QATgVAIgKQACgCAJgDQANgFAHAEQAFADACALIAAAOQgFApgKAOQgJAMgQAAQgIAAgKgDg");
	this.shape_429.setTransform(43.9,-6.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#D6A757").s().p("AAAAcQgIgCgUgSQgVgRABgJQgBgGAEgEIBVAAQAJAKAAASQAAAPgRAJQgKAFgLAAIgLgBg");
	this.shape_430.setTransform(63.4,-37.8);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#D6A757").s().p("AgqAKQAGgGAQgDQASgCACgDQALgGAIACQAEACAMAJIAIAHg");
	this.shape_431.setTransform(63.1,-1);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#D6A757").s().p("AgWAVQgGgEAAgJQAAgSAGgKQADgEAHACIAMAFIAQACQAHABACAIQAGAPgDAGQgDAFgOgEQgEgBgFADQgHAFgDAAIgFABQgFAAgEgDg");
	this.shape_432.setTransform(52.5,-20.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#D6A757").s().p("AgoASQACgIAAgKIABgVQABgYAhAJQAdAJAKAQQANATgUAMQgVANgVAFIgMABQgUAAAFgVg");
	this.shape_433.setTransform(61.8,-7.9);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#B3844A").s().p("AgOgNQAHABALgBQAIgBABAEQAEALgHAFIgNAHIgLACg");
	this.shape_434.setTransform(42.1,-32.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#B3844A").s().p("AgFAQQgMgEgFgKQgGgKAMgIQAFgDAKADIAXAGIADAAIAAAcQgXAAgHgCg");
	this.shape_435.setTransform(78.9,-33);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#B3844A").s().p("Ag+AjQgMgkAKgWQALgbBHgMQBIgNgcAkQgIAMgaAYQgLAKgOAdQgJAVgWAIIgHACQgRAAgKggg");
	this.shape_436.setTransform(67.5,-22);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#B3844A").s().p("AgiA+IgKgZQgJgYADgQQADgPAOgUQAPgVAHgHQAPgQAIASIAJAaQAGARAFAHQAFAHAKAHQAHAGgEAGQACAFgFAFQgFAEgPAJIAAAAQgMANgGAJIgKANQgFAFgKAAQgKAAgIgNg");
	this.shape_437.setTransform(74.3,-13.3);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#B3844A").s().p("AAAATQgSgsACgKQADgLAeABIAABcQgLgLgGgRg");
	this.shape_438.setTransform(79.7,-23.4);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#B3844A").s().p("AgUApIAAhcIARABQAQABAGAhQAFAdgIAZQgEAOgLAAQgJAAgMgLg");
	this.shape_439.setTransform(42.7,-22.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#B3844A").s().p("AgCAzQgZgBgNgJQgHgFgJgPQgLgSABgKQAAgIANgGQAOgGADgCIAQgRQAAgGAHABQAFABAFADQAIAGAPAQQAFADALACQALABAGAEQAYARgQAYQgMAUgOADQgPADgOAAIgIgBg");
	this.shape_440.setTransform(53.7,-32.8);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#B3844A").s().p("AgHAkQgKgHgBgHQAAgPAKgMIAbgeIAABHg");
	this.shape_441.setTransform(79.4,-3.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#B3844A").s().p("AgcAFIgDgBIAAgLIA+AAQgMAPgXAAQgLAAgNgDg");
	this.shape_442.setTransform(43.8,-39.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#B3844A").s().p("AgpA7IAAhHQAPgQAPgUQABgCAOgFQATgGAKAGQAGADACAQQACALgBAIQgIA5gNATg");
	this.shape_443.setTransform(44.8,-5.9);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#B3844A").s().p("AAAAnQgMgEgcgZQgegZABgMQgBgGAEgGIB9AAQALANAAAZQAAAWgYAMQgPAHgPAAQgIAAgIgBg");
	this.shape_444.setTransform(64.8,-36.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#B3844A").s().p("Ag+APQAHgKAYgFQAcgEADgDQAQgKALAEQAFACASANIANANg");
	this.shape_445.setTransform(64.4,-1.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#B3844A").s().p("AgdAhQgJgGAAgOQAAgcAJgOQAEgHAJADIAQAGIAWABQAJACADAMQAIAWgEAJQgEAJgTgGQgFgCgHAGQgJAHgFABIgIABQgGAAgEgCg");
	this.shape_446.setTransform(52.9,-19.6);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#B3844A").s().p("Ag5AXQACgJABgPIAAgaQACggAvANQArALAOAUQAUAZgdAQQgiARgcAGQgLACgIAAQgbAAAIgcg");
	this.shape_447.setTransform(60.5,-7.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#9B6D45").s().p("AgUgUIACABQAJACAPgCQALgCACAGQAFAPgJAHIgRAKQgGADgMABg");
	this.shape_448.setTransform(42.7,-32.5);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#9B6D45").s().p("AgEAWQgOgEgHgNQgHgPAOgLQAHgFALADIAcAHIAAApQgXAAgJgDg");
	this.shape_449.setTransform(78.5,-32.9);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#9B6D45").s().p("AhKApQgOgrALgaQAOgfBVgQQAjgGAQAGQASAHgQAWQgKANgfAdQgOAMgQAiQgLAagaAKQgFABgEAAQgUAAgMgmg");
	this.shape_450.setTransform(68.1,-21.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#9B6D45").s().p("AgqBRQgFgIgJgYQgLggAEgVQADgTATgbQATgbAKgKQAVgUAKAWIAMAjQAIAXAGAIIARARIADACIAAAVIgEAEQgZAWgVAbIgPASQgFAGgNAAQgOAAgKgRg");
	this.shape_451.setTransform(74.8,-13.1);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#9B6D45").s().p("AgEgKQAJAHAAADQAAACgJAJg");
	this.shape_452.setTransform(41.1,-12);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#9B6D45").s().p("AACAeQgXg7ACgOQACgQAlAAIAAB3QgMgOgGgQg");
	this.shape_453.setTransform(79.4,-22.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#9B6D45").s().p("AACBHQgQgCgQgUIAAh3IAdABQAXACAHAtQAGAngJAjQgGATgPAAIgDAAg");
	this.shape_454.setTransform(43.7,-21.3);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#9B6D45").s().p("AhDAaQgYgtAYgPQAggKAHgOQAJgSAXAbIAXAOQAXAIAQARQAVAVgLAUQgRAjg0AAIgCAAQgzAAgVgog");
	this.shape_455.setTransform(54,-32.1);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#9B6D45").s().p("AgbAnQAAgRAQgTIAngpIAABNg");
	this.shape_456.setTransform(78.5,-3.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#9B6D45").s().p("AAYATQgQgEgNgHQgWgLAAgMIAAgFIA3AAIAAApg");
	this.shape_457.setTransform(78.5,-38.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#9B6D45").s().p("AgqATIAAgpIBVAAQgLAcgTAKQgMAHgPAAQgMAAgQgEg");
	this.shape_458.setTransform(44.9,-38.5);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#9B6D45").s().p("AgyBAIAAhNQATgUAMgRQACgDATgGQAXgIANAHQAIAEADAVQADAOgBAKQgHAzgJAYg");
	this.shape_459.setTransform(45.7,-6.4);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#9B6D45").s().p("AAAAvQgPgDghgfQgkgeAAgPQAAgJAGgHICUAAQAPAQAAAfQAAAbgeAPQgSAIgSAAQgJAAgKgCg");
	this.shape_460.setTransform(65.9,-35.8);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#9B6D45").s().p("AhKARQAJgLAcgFQAhgGAEgDQAUgMANAFQAHADAUAPQAJAIAGAGg");
	this.shape_461.setTransform(65.4,-1.7);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#9B6D45").s().p("AgnAqQgLgHAAgTQAAgkALgTQAFgIAMAEIAWAIIAbABQAMACAFAPQAKAegFALQgGAMgYgIQgGgCgKAHQgMAJgGACQgGABgFAAQgHAAgGgDg");
	this.shape_462.setTransform(53.4,-19.1);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#9B6D45").s().p("AhIAcQADgMABgSIAAggQADgmA7AQQA2AOASAXQALAPgCALQgCAOgTAKQgoAUgmAIQgNADgKAAQgjAAAKgig");
	this.shape_463.setTransform(59.5,-7.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#886241").s().p("ACMDMIAAgBIAAgHIACgFQAEgPAUgWIAgghIAGgGIAABZgAgmDMQAIgNAMgEQgXAHgQAAQgXABgKgKQgDgDgCgGIAAgXIAAgCQAEgLAAgTIABgeQACgeAfgEQAbgDAmAQQAlAPAMAQIAFAIQAMAVgMARQgGAKgOAGQgUALgZAIIAJgCQAbgFAIgEQAMgHAJgCQAMgCALAGQAHAEARAOQALAJAEAGIAFAFgAjLDMIAAhaIAZgeQAEgFASgGIAPgEQASgDANAGQALAHAEAXQADAOgCAMIgBAJQgGArgIAYgABaCfQgGgKgJgZQgJgYAAgSQAAgSAIgSQgEAGgIAGQgJAHgNAFQgIADgJgBQgYgHgLgtQgLgpALgYQALgaA/gSIACgBQAzgOAZAGQAPACAEAKQADAFgBAFQAGgHAOgDIAXgBIAACLIgGgHQgNgQgGgRQgQgogEgOQgDgLAAgJIgDAGIgNAOQgJALgUASQgNAMgNAbIAFgIIATgZQARgVAOgDQAQgCAIASIAMAhQAHAWAHAIQAHAKAHAFIAAApQgZAWgUAaIgJAMQgFAGgFADQgHAFgOAAQgRAAgMgTgAjLA/IAJAHQAJAHAAAFQAAAGgJAIIgJAIgAjCA7IgJgIIAAiKIAdACQAKAAAIAGQATAQADAtQADAlgIAaQgEARgNAGIgDABIgIABQgNAAgOgLgAh7A6QgKgKAAgTQAAgnAMgUQAIgOASAHQAPAGAEABIATAAQANABAGAEQAJAFAFAOQAWBHg3gRIgBAAIgCAAQgCAAgKAHQgLAHgGACIgGABIgHAAQgNAAgIgHgAhOgrQgIgBgJgDQgggKgQgeQgKgUgCgLIgBACQgCAEgEAEQgDAEgGADIgKAFQgHADgGAAIgIABIgBAAIAAg4IADABIAGAAIAOAAQANgCAFADQAEACACAFIAAABIAAABQACgHAFgHQAGgGATgIQARgHADgGQADgHAGgDQAOgHAWAXIACACQAMAJAGACIASAIQgVgWAAgNQAAgKAEgHICnAAQAKAOABARIAAAaQgEAYgZAOQgWAMgbgBQgGAAgJgCQgNgDgXgTQAMAUgJAUQgJASgUAKQgTAKgXABIgFAAIgQgBgACpheQgLgDgIgIQgHgJgDgKIAAgLQADgKAJgHIAJgFQAGgBAPAEIAWAGIAAA4QgZAAgKgCgAjCiYIgJgCIAAgxIBeAAIgBADQgPAngfAJQgJACgKAAQgJAAgKgCgADFibQgygPgHgXIAAgKIBAAAIAAAxg");
	this.shape_464.setTransform(61,-20.4);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#544236").s().p("AjLDMIAAmXIGXAAIAAGXg");
	this.shape_465.setTransform(61,-20.4);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#E3C48E").s().p("AgRADQAFgFAMAAQAMAAAEADIACACg");
	this.shape_466.setTransform(137.7,-0.3);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#E3C48E").s().p("AgHAEQgDgBgBgDQgCgCADgCQADgBAHADIAIABQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABIgGABIgFAAQgEAAgDgBg");
	this.shape_467.setTransform(151.3,-33.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#E3C48E").s().p("AgRANQgDgNACgIQAEgJATgFQAUgFgIAOIgJANQgEADgDAKQgCAIgGADIgCAAQgFAAgDgLg");
	this.shape_468.setTransform(140.1,-23.2);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#E3C48E").s().p("AgJATIgDgIQgDgLAGgLQAJgRADAJIAGAPIAEAFQACACgDADQgGAGgEAFQgCAGgEAAQgDAAgCgEg");
	this.shape_469.setTransform(145.8,-14.3);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#E3C48E").s().p("AACAPQgEgDgCgIQgEgOABgCQABgDAJABQAEAAABAKQABAHgBAIQgBAFgDAAIgCgBg");
	this.shape_470.setTransform(151.5,-25.9);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#E3C48E").s().p("AgMASQgLgKADgIQABgFAIgHIAFgHQABgFAFAEIAHAKQALAJADAHQAFAMgOADQgGACgFAAQgIAAgFgFg");
	this.shape_471.setTransform(131,-34.7);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#E3C48E").s().p("AgHAdIgIgEQgGgDAAgFQgBgIAHgJIARgaQAAgBAGgCQAHgDAEADQADACAAAPQgDAagFAJQgEAIgJAAQgDAAgFgCg");
	this.shape_472.setTransform(154.5,-6.5);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#E3C48E").s().p("AgKAdIgIgEIAAgZIASgaQAAgBAFgCQAGgDAEADQAEACAAAPQgDAagFAJQgEAIgIAAQgEAAgFgCg");
	this.shape_473.setTransform(123.3,-6.5);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#E3C48E").s().p("AAAARQgDgBgJgKQgJgKAAgFQAAgFADgDIAjAAQAFAGAAALQAAAKgHAFQgFADgFAAIgFgBg");
	this.shape_474.setTransform(137.8,-39);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#E3C48E").s().p("AAEAKQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDACQgIAAABgKQABgIAEgEQAAAAAAgBQABAAAAAAQABAAAAAAQABABABAAIADAEIAGACQADACAAADQABALgEAAIgEgCg");
	this.shape_475.setTransform(129.7,-21);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#E3C48E").s().p("AgPAHIABgPQABgLAMAFQALADADAHQAGAHgIAFQgIAGgIACIgEABQgHAAABgKg");
	this.shape_476.setTransform(139.2,-7.9);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#D6A757").s().p("AgGAHIAAgNIAIAAQADABABACQACAFgEADIgHACg");
	this.shape_477.setTransform(122.1,-33);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#D6A757").s().p("AgMAIQgGgCgDgGQgEgFAHgEQADgBAFABIANAFIAHABIAIABQAEAAABACQACAFgEADIgIADIgDAAIgGAAQgIAAgIgDg");
	this.shape_478.setTransform(152,-33.4);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#D6A757").s().p("AghAYQgHgZAGgPQAGgSAmgJQAmgJgOAZQgEAHgPASQgGAHgIAUQgEAPgMAFIgEABQgJAAgFgWg");
	this.shape_479.setTransform(141.3,-22.5);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#D6A757").s().p("AgRApQgCgDgDgNQgFgQACgLQABgKAHgNQAJgQADgDQAIgLAEAMIAEASQADALADAFQADAGAGAEQADAFgGAHQgKALgIAOIgFAJQgCADgGAAQgFAAgEgJg");
	this.shape_480.setTransform(146.6,-13.8);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#D6A757").s().p("AAGAgQgJgEgHgUQgJgdADgFQACgGAUACIAAAAQAIABADAUQACARgEAPQgBAJgGAAIgCAAg");
	this.shape_481.setTransform(152.3,-24.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#D6A757").s().p("AgFAfIAAg+QAHACADAUQACARgEAPQgBAJgFAAIgCgBg");
	this.shape_482.setTransform(122,-24.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#D6A757").s().p("AgCAoQgNgDgIgHQgdgZAfgcIAJgMQABgJAKAIQADAEAKAMIASAQQAOAMgJAQQgHANgJADIgLABIgKgBg");
	this.shape_483.setTransform(131.3,-33.5);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#D6A757").s().p("AgLAuIgFgCQgRgHgBgLQAAgJAFgJQACgFALgMQAMgRAIgOQAAgCAJgDQAKgFAGAEQADADACALIAAAOQgEAogIAOQgGANgOAAQgFAAgIgDg");
	this.shape_484.setTransform(154.7,-6.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#D6A757").s().p("AgTAuIgGgCIAAg1QANgRAIgOQACgDAGgCQALgFAFAEQAEADABALIABAOQgFAogHAOQgHANgNAAQgGAAgHgDg");
	this.shape_485.setTransform(124,-6.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#D6A757").s().p("AAAAcQgGgCgPgSQgQgRAAgJQAAgGADgEIBBAAQAHAKAAASQAAAPgNAJQgJAFgIAAIgIgBg");
	this.shape_486.setTransform(139,-37.8);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#D6A757").s().p("AggAKQAEgGAMgDQAOgCACgDQAJgGAGACQADACAJAIIAGAIg");
	this.shape_487.setTransform(138.8,-1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#D6A757").s().p("AgQAVQgFgEAAgJQAAgTAEgJQADgEAFACIAJAFIANACQAFABACAIQAEAPgCAFQgCAGgLgEQgDgBgEADQgFAEgDABIgEAAQgEAAgCgCg");
	this.shape_488.setTransform(130.6,-20.2);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#D6A757").s().p("AgfASIACgTIABgUQABgZAZAKQAWAJAIAQQALATgQAMQgSANgPAFIgKACQgPAAAEgWg");
	this.shape_489.setTransform(137.8,-7.9);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#B3844A").s().p("AgLAFIgCgBQgNgEgIgHIBFAAQgKAPgSAAQgIAAgKgDg");
	this.shape_490.setTransform(154.4,-39.9);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#B3844A").s().p("AgLgNQAFABAJgBQAGgBABAEQAEALgHAFQAAACgJAFIgJACg");
	this.shape_491.setTransform(122.6,-32.6);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#B3844A").s().p("AgPAQQgJgEgEgKQgFgKAJgIQAEgDAIADIARAGIADAAQAFACAJgBQAGgBACAEQADALgGAFQgBACgKAEIgIACQgOAAgJgCg");
	this.shape_492.setTransform(152.2,-33);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#B3844A").s().p("AgwAiQgJgkAHgVQAJgbA3gMQA4gNgWAkQgHAMgTAYQgJAKgLAdQgHAVgRAIIgFACQgNAAgIghg");
	this.shape_493.setTransform(142.3,-22);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#B3844A").s().p("AgaA9QgDgHgFgSQgHgYADgQQACgOAKgUQAbg1AIAaIAHAaQAFASAEAGIAMAPQAFAFgDAGQABAFgEAFQgDAFgMAIIAAABIgOAVIgIAOQgEAEgHAAQgIAAgGgNg");
	this.shape_494.setTransform(147.5,-13.3);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#B3844A").s().p("AgCAoQgJgLgEgQQgOgsABgKQACgLAYABIAMAAQAOACAEAhQADAdgFAZQgDAOgJAAQgIAAgIgMg");
	this.shape_495.setTransform(153.2,-22.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#B3844A").s().p("AgPAoIAAhbIANAAQANACAEAhQADAdgFAZQgDAOgJAAQgHAAgJgMg");
	this.shape_496.setTransform(123,-22.8);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#B3844A").s().p("AgBA0QgTgCgKgJQgGgEgHgQQgIgRAAgLQABgIAJgGQALgFACgDIAMgQQABgLANAKIAJALIAJAKQAEAEAIABQAIABAFAFQASARgMAYQgJAUgLACQgLADgMAAIgFAAg");
	this.shape_497.setTransform(131.5,-32.9);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#B3844A").s().p("AgmA7QgIgHgBgIQAAgOAIgNIAWgeQAOgUAIgPQABgCAMgFQAOgGAIAGQAFADACAQIAAASQgGA6gKATg");
	this.shape_498.setTransform(154.8,-5.9);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#B3844A").s().p("AgVAFIgCgBIAAgLIAvAAQgJAPgRAAQgJAAgKgDg");
	this.shape_499.setTransform(123.8,-39.9);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#B3844A").s().p("AggA7IAAhIQAMgQALgTQACgCAKgFQAPgGAHAGQAFADACAQIABASQgGA6gLATg");
	this.shape_500.setTransform(124.7,-5.9);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#B3844A").s().p("AAAAnQgJgEgWgZQgXgZABgMQgBgGADgGIBhAAQAJAOAAAYQgBAWgSAMQgMAHgMAAQgGAAgGgBg");
	this.shape_501.setTransform(140.2,-36.7);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#B3844A").s().p("AgwAPQAFgKATgFQAWgFACgCQANgKAIAEQAEACANANQAIAHADAGg");
	this.shape_502.setTransform(139.8,-1.5);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#B3844A").s().p("AgWAhQgHgGAAgOQAAgcAGgOQADgHAHADIANAGIARABQAGACADAMQAGAWgDAJQgDAJgOgGQgEgCgGAGQgHAHgDABIgGABQgFAAgDgCg");
	this.shape_503.setTransform(131,-19.6);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#B3844A").s().p("AgsAXQACgKAAgOIABgaQABggAlANQAgALAMAUQAPAZgXAPQgZARgXAHQgIACgGAAQgVAAAGgcg");
	this.shape_504.setTransform(136.8,-7.9);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#9B6D45").s().p("AgDgKQAHAIAAACQAAACgHAJg");
	this.shape_505.setTransform(153.3,-12.1);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#9B6D45").s().p("AgPgUIABABQAIACALgCQAIgCACAGQAEAPgIAHIgMAKQgFADgJABg");
	this.shape_506.setTransform(123,-32.5);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#9B6D45").s().p("AgSAWQgLgEgGgNQgGgPAMgLQAFgFAJADIAVAHIABABQAIACAMgCQAIgCACAGQAEAOgIAIIgNAKQgEADgKABQgRAAgHgDg");
	this.shape_507.setTransform(152.3,-32.9);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#9B6D45").s().p("Ag5ApQgLgrAJgaQAKgfBCgQQAbgGANAGQAOAHgNAWQgJAPgXAbQgKAMgNAiQgIAagUAKQgEABgDAAQgQAAgJgmg");
	this.shape_508.setTransform(142.7,-21.8);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#9B6D45").s().p("AggBRQgEgJgHgYQgJgfADgVQADgTAOgbQAPgcAIgJQAQgUAIAWIAJAjQAGAWAFAJQAIANAFAEIACACIAAAVIgDAEQgUAXgQAaIgLASQgEAGgKAAQgKAAgIgRg");
	this.shape_509.setTransform(147.9,-13.1);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#9B6D45").s().p("AgDgKQAHAIAAACQAAACgHAJg");
	this.shape_510.setTransform(121.8,-12.1);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#9B6D45").s().p("AARBHQgNgCgMgUQgJgOgFgRQgSg7ABgNQACgRAdABIAWABQASABAGAuQAFAngIAjQgEATgMAAIgCAAg");
	this.shape_511.setTransform(153.8,-21.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#9B6D45").s().p("AABBHQgLgCgNgUIAAh3IAWABQASABAFAuQAFAngHAjQgFATgLAAIgDAAg");
	this.shape_512.setTransform(123.8,-21.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#9B6D45").s().p("Ag0AZQgSgsASgPQAagLAFgNQADgKAJAFQAGADAGALIASANQARAIANASQAQAUgIAVQgNAigoABIgCAAQgnAAgRgpg");
	this.shape_513.setTransform(131.8,-32);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#9B6D45").s().p("Ag8BAQAAgRANgSIAfgqQANgSAKgTQABgDAPgGQATgIAKAHQAGAEACAVQACAPgBAJQgFAzgHAYg");
	this.shape_514.setTransform(154.7,-6.4);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#9B6D45").s().p("AgKATIgDgCQgMgEgMgHQgQgLgBgMIAAgFIBtAAQgIAcgOAKQgKAHgMAAQgKAAgLgEg");
	this.shape_515.setTransform(154.1,-38.5);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#9B6D45").s().p("AggATIAAgpIBBAAQgIAcgPAKQgJAHgMAAQgJAAgMgEg");
	this.shape_516.setTransform(124.7,-38.5);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#9B6D45").s().p("AgmBAIAAhNQANgTAKgSQADgEANgFQATgIAKAHQAGAEACAVQACAPgBAJQgFAzgHAYg");
	this.shape_517.setTransform(125.3,-6.4);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#9B6D45").s().p("AAAAvQgLgDgagfQgcgeAAgPQAAgJAEgHIBzAAQAMAQAAAfQAAAbgXAPQgOAIgOAAQgHAAgIgCg");
	this.shape_518.setTransform(141,-35.8);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#9B6D45").s().p("Ag5ARQAHgLAWgFQAZgGAEgDQAOgMALAFQAEACAQAQIAMAOg");
	this.shape_519.setTransform(140.6,-1.7);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#9B6D45").s().p("AgeAqQgIgHAAgTQAAgkAIgTQAEgIAKAEIAQAIIAVABQAJADAEAOQAIAegEALQgEAMgTgIQgFgCgIAHQgIAJgFACIgIABQgGAAgFgDg");
	this.shape_520.setTransform(131.3,-19.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#9B6D45").s().p("Ag4AcQADgMAAgRIABggQABgmAvAPQApAOAOAYQATAfgcASQgfAUgeAIQgKADgHAAQgbAAAHgig");
	this.shape_521.setTransform(136,-7.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#886241").s().p("AgGgTIAEADQAJAJAAAHQAAAFgJALIgEAEg");
	this.shape_522.setTransform(153.6,-12);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#886241").s().p("AgkBPQgkgGgPglQgHgTgCgMQgCAGgDAEQgDAEgEACIgIAFQgFAEgMABIAAg4IADABQAFACAKgCQAKgCAEADQACACACAGIABABQAAgHAFgGQAFgGAOgJQANgHACgGQAGgOAMAFQAJAEAIAMQAMALAEABQAIAEAFAFQgQgYAAgMQAAgJADgHICCAAQAKARAAAeQAAAggaAQQgXAPgYgHQgKgDgTgTQAKAUgHATQgJAXgWAKQgNAGgOAAIgNgBg");
	this.shape_523.setTransform(134.8,-32.7);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#886241").s().p("AgcB4QgEgKgHgZQgNgsAMgjQgJARgRAIQgHADgGgCQgUgGgJgsQgIgqAIgYQAJgZAzgUQAVgIASgBQAcgDAGAQQACAEAAAGQAHgMAZABIAXABQAYACAGA1QAEArgHAhQgEATgMAFQgPAFgTgXIAAAAIgEgHQgJgNgGgSQgOgwgBgHQgDgLABgJIgDAGQgHALgZAgQgKAMgKAcIATgiQAMgSAIgEQAOgHAIAVIAJAiQAFAVAGAIQAEAJAGAGIAAApQgSAVgQAbIgNATQgGAHgLAAQgNAAgKgTg");
	this.shape_524.setTransform(147,-16.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#886241").s().p("AgqBKIADgFQAFgIAJgFQgrARgOgSQgIgMAFgWQACgMABgRIAAgfQADgtAyAPQAsANARAcQALASgDAQQgDARgQAKQgTAMgQAHIAHgCIANgEQAKgCAEgDQAQgNAMAFQAHADARASIAQAUg");
	this.shape_525.setTransform(138.4,-7.4);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#886241").s().p("AgiAvQgKgKAAgVQAAgmAJgUQAGgNALAEIASAIIAYACQALAEAFASQARBIgsgSIgBAAQgCAAgIAHQgHAIgFABQgFACgFAAQgIAAgGgGg");
	this.shape_526.setTransform(131.3,-19.1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#886241").s().p("AgpBEIAAhZQALgQAIgOQACgEALgFQAJgFAGgBQAOgDAJAGQAIAFADAVQADARgBANQgFAygHAZg");
	this.shape_527.setTransform(125.6,-6.8);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#886241").s().p("AgjAXIAAgwIBHAAIgBACQgJAggSALQgJAGgNAAQgKAAgLgDg");
	this.shape_528.setTransform(125,-38.1);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#886241").s().p("AgKAXIgFgCQgQgFgMgJQgQgMgBgPIAAgFIB5AAIgBACQgJAggTALQgJAGgNAAQgKAAgKgDg");
	this.shape_529.setTransform(154.1,-38.1);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#886241").s().p("AhCBEIAAgBQAAgGABgGQAEgPAPgXIAZggIAEgGQAMgQAGgOQADgEALgFQAJgFAGgBQAPgDAJAGQAHAFAEAVQADAQgBAOQgFAvgHAcg");
	this.shape_530.setTransform(154.7,-6.8);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#886241").s().p("AgaA8IAAiKIAWABQAXACAGA1QAFAqgIAiQgEATgLAFIgGABQgMAAgPgTg");
	this.shape_531.setTransform(124.1,-21.3);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#886241").s().p("AgGgTIAEADQAJAJAAAHQAAAFgJALIgEAEg");
	this.shape_532.setTransform(122.1,-12);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#886241").s().p("AAGAhQgSAAgIgDQgPgFgFgTQgGgTANgOIAIgEQAEgBALAEIAQAFIADABQAGACAJgCQAKgCAEADQAEAEABAKQABAHgCAHQgCAIgGAGIgLAHQgFAEgLABg");
	this.shape_533.setTransform(152.3,-32.9);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#544236").s().p("AjLDMIAAmXIGIAAIgIAcQgLAYgUAFQAOAfgbAWQAVAEAIAeQAGAVAAAhQABAigGAaQAhAGADAqQADAjgRBCg");
	this.shape_534.setTransform(141.8,-20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._endBlock, new cjs.Rectangle(0,-242,187.9,242), null);


(lib.dragHolder_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0)").s().rr(-39.5,-16.7,79,33.4,10.7);
	this.shape.setTransform(39.5,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dragHolder_mc, new cjs.Rectangle(0,0,79,33.4), null);


(lib.close_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArA+IgCgCIgpgoIgoAoIgCACIgCAAQgDAAgDgCIgFgEIgFgHIgBgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIApgpIgogoIgCgCIAAgCQAAgDACgDIAFgGIAFgEIAFgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIAoAqIApgpIACgBIACgBQADAAADACIAGAFIAEAFIABAFIAAACIgBACIgqAoIApAoIABACIABADIgCAFIgFAGIgFAEIgFADIgCgBg");
	this.shape.setTransform(14,14,0.886,0.886);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAidQBBAAAuAuQAvAuAABBQAABCgvAuQguAuhBAAQhBAAguguQguguAAhCQAAhBAuguQAuguBBAAg");
	this.shape_1.setTransform(14,14,0.886,0.886);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3300").s().p("AhvBvQgugtAAhCQAAhBAuguQAvguBAAAQBBAAAuAuQAvAuAABBQAABCgvAtQguAvhBAAQhAAAgvgvg");
	this.shape_2.setTransform(14,14,0.886,0.886);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.close_btn, new cjs.Rectangle(-1,-1,30,30), null);


(lib.boardMak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(94,52,23,0)").s().p("EgtmARCIgagHIAAhRIgBAAIAAgUIABAAIAAgEIA2ABIg2gJIAAifIgBAAIAAgLIABAAIAAgHIA9AFIg9gJIAAilIgBAAIAAgHIABAAIAAgBIAcADIgcgGIAAiEIAcgHIgcAEIAAgBIgBAAIAAgHIABAAIAAilIA9gJIg9AFIAAgHIgBAAIAAgLIABAAIAAifIA2gJIg2ABIAAgEIgBAAIAAgUIABAAIAAhRIAagOIgagHIAAhRIgBAAIAAgUIABAAIAAgEIA2ABIg2gJIAAifIgBAAIAAgLIABAAIAAgHIA9AFIg9gJIAAilIgBAAIAAgHIABAAIAAgBIAbAEIgbgHIAAiEIAcgGIgcADIAAgBIgBAAIAAgHIABAAIAAilIA9gJIg9AFIAAgHIgBAAIAAgLIABAAIAAifIA2gJIg2ABIAAgEIgBAAIAAgUIABAAIAAhRIAagHIOvAEIMSgEMBAIAAAIAfAHIAAQwIgfAHIAHAJIAYAFIAAQwIgfAHgAfyABIBPgBIgmAAIAmAAIifAAIAAAAIAmAAIAtAAIgDABgAaeABIACgBIgEAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABg");
	this.shape.setTransform(294.6,109);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.boardMak, new cjs.Rectangle(0,0,589.2,218), null);


(lib._block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("A1rGYIAAsvMAqxAAAQAUAfALAmQARA2gWARQgKAHgPgHIgCgCIgKgEQAHAGAFAJQAKASABAZQABAXgIAQQgIARgTAFIgBAAIAIAFQAaATANAYQAOAagGAZQgHAcgYAOQgMAJgaAEIgHAAQAbAKAFAKIABABQALAIAFALQALAVgLAZQgMAagXAJIgBABIAGACQARAHAKASQAKASABAZQABAXgIAPQgIASgSAFIgCAAIAIAFQAaATANAYQAOAagGAZQgHAbgXAOQgMAJgaAGg");
	this.shape.setTransform(139.1,-40.8);

	this.instance = new lib.ground1();
	this.instance.parent = this;
	this.instance.setTransform(0,-82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[]},1).wait(2));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AnUGYQgagGgMgJQgYgOgGgbQgHgZAOgaQANgYAbgTIAIgFIgCAAQgSgFgIgSQgIgPABgXQABgZAKgSQAKgSARgHIAGgCIgBgBQgXgJgMgaQgMgZAMgVQAFgLALgIIABgBQAFgKAbgKIgIAAQgZgEgNgJQgXgOgHgcQgGgZAOgaQAMgYAbgTIAIgFIgBAAQgTgFgIgRQgIgQABgXQABgZAKgSQAFgJAGgGIgKAEIgCACQgOAHgKgHQgWgRARg2QALgmATgfIPwAAQAUAfAMAmQAQA2gWARQgKAHgPgHIgCgCIgKgEQAHAGAFAJQAKASABAZQABAXgHAQQgJARgSAFIgBAAIAHAFQAaATANAYQAPAagHAZQgGAcgZAOQgMAJgaAEIgHAAQAbAKAGAKIAAABQALAIAGALQALAVgMAZQgMAagXAJIAAABIAFACQARAHAKASQAKASABAZQABAXgIAPQgIASgSAFIgBAAIAHAFQAaATANAYQAOAagFAZQgIAbgWAOQgNAJgaAGg");
	this.shape_1.setTransform(54.3,-40.8);

	this.instance_1 = new lib.ground2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-82);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("Eg3dAGYQgagGgNgJQgXgOgHgbQgGgZAOgaQANgYAbgTIAHgFIgBAAQgSgFgJgSQgHgPABgXQABgZAKgSQAKgSARgHIAFgCIgBgBQgXgJgLgaQgMgZALgVQAGgLALgIIAAgBQAGgKAbgKIgIAAQgZgEgNgJQgYgOgGgcQgHgZAOgaQANgYAbgTIAHgFIgBAAQgSgFgJgRQgHgQABgXQABgZAKgSQAFgJAGgGIgKAEIgCACQgOAHgKgHQgXgRARg2QAMgmATgfMBwpAAAIAAMvg");
	this.shape_2.setTransform(362.4,-40.8);

	this.instance_2 = new lib.ground3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-82);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#94C84B").s().p("AgDCuQgcgBgUgnQgXgsAEhEQgZAtgzAgQgwAdgkAAQgmgBAIgkQAKgrBLhPQAJgJg2ASQhCAVgLgLQgfggAsghQATgOA8gbQCRhCByANQBEAEBOAYQBxAigDAzQgCAsg3ADIhKgIQglgCADACQAgAVALAMQAXAWAYAuQAhBBgbAUQgYAShLhNQhchcgJgEQAOBOgQAuQgOAmgaAAIgCAAg");
	this.shape_3.setTransform(596.8,-225.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#326D4C").s().p("AgbCzQgQgKgMgUQgWgjgDg6QgSAWgZATQgqAfgpAKQgwAKgNgaQgXgqBUheIgbAJQgZAGgLACQgZAEgJgJQgTgTACgVQADghA6gfIAzgYQCThDB0AOQAWABAfAFQAoAGAoALQCIAlgDBBQgEA+hOgEIgkgCIgTgDIALAJIASAXQAQAVAKAUQAgA7gLAgQgFAMgJAHQgUAQgmgbQgagTgmgpQgigkgRgRIgSgRQAHA4gLAmQgMAtgfAJQgFACgFAAQgNAAgMgIg");
	this.shape_4.setTransform(597.2,-224.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#53B754").s().p("AByD7QgpgGgFg8QgEgpAGgmQACgJgTAxQgYA1gxATQgxASgggdQgbgXAIgrQAQgxABgbQgYAxgmAcQgkAZgegDQgfgDgGgfQgHgkAfg7QAFgIgTAKIgwAZQhOAjgPgyQguiVD5hXQBVgdBsgSQBRgNAugBQCTAIBjB/QAbAjAAAoQgBAqgogCIgpgGQgZgEAUANQAsAgAcAuQAZApAAAfQAAAggbgEQgfgEg0g0QgPgPgngiQgqgmADAHQAVAkgIA4QgIA3gbAeQgbAdggAAIgJAAg");
	this.shape_5.setTransform(596.3,-215.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#326D4C").s().p("ABgD9QgfgSgFgyQgBgNAAgNQgcAygxARQgYAJgXgCQgagDgTgQQgXgTgCgbQgCgUAJggQgdAhgiAQQgYAKgVgBQgbgBgOgUQgYgiAdhDIgEADQgdAPgRAGQg4AWgagWQgLgJgGgRQgOgpAKglQAch5D0hCQBOgVBcgNIBDgIIAsgDIABAAQCaAJBqCBQASAWAIAeQAKAjgMAZQgNAZgigCIgRgCQApAjAXAsQALAXAEAVQAGAdgMARQgSAagtgaQgagPghgfIhDg6QAIAogLAsQgLAsgZAZQgUAVgbAHQgMAEgKAAQgQAAgNgIg");
	this.shape_6.setTransform(596.4,-213.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#47914F").s().p("ABKDwQgRgggahIQgRgvgBAPQgDA6gdA1QgaAwghATQghATgPgcQgRggAQhSQAThlAAgNQAAgKgQAlQg5CFgiARQgtAWgMg4QgIgpAJhHQAJhKgEAGIgsBHQhABTgtAEQglAEgOgyQgNgvAQg3QARg5AmgTQgvAIgdgBQg6gBAqgrQA2g5BugmQA8gVBxgjQA2gWCDADQB7ABA4geQBHADBnBRQBwBXAZBcQAnCLhFgQQgagHhSg5QgWgPABALQAAAEANAnQAfBYggArQgdAogyhMQgjg2gWhCQgBgCgHA1QgIA+gHAYQghB0gnAAQgaAAgeg3g");
	this.shape_7.setTransform(597.8,-204.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#326D4C").s().p("ACDE4QgngCgohbIgchHIgEgMQgMBEgnA1QgTAZgVANQgcASgVgLQgZgOgCgzQgBghAJgtIAKg0QgIATgOAcQgiBEgeAPQgfAPgUgRQgcgZAEhWIAHhHQgMAUgNAQQgxBBgqAUQgmASgbgXQgXgVgFguQgFgnAKgoQAKgnAUgZIgRACQgZABgLgBQgZgEgFgPQgGgTAbgdQAigkAzgbQAmgUA3gSIBZgbQAugNAigOQAjgOAwgFQAegDA3ABQBMABAZgCQA8gFAogWIACgBIACAAQAqADA7AfQAwAaAsAkQAtAkAhApQApA0AOAyQAfBqggAcQgbAYhBgoIg+gqIgCgBIAFAOQAMAhAFAYQAGAegEAYQgEAagOAUQgMAPgNACQgmAHgyhZQgPgcgPgiIgFApQgGApgGAVQgkB+gvAAIgCAAg");
	this.shape_8.setTransform(598,-202.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#008752").s().p("AjXEAQgKgfAQhuQANhUgRAZQg/BggnAiQhAA6g2gmQgYgRAOhKIAchnQAGgXgeAQQgTALg1AlQhvBEAGhhQAOj2GIg+QCygcFCAQQAFAEBjArQBiArAqAeQBcBAgJAmQgKAqiMgbQgQgCA6BGQA2BZgzBDQgoA1hGhtQgZgogVgxQgTgqgCgUQAIBOgPBPQgPBNgcAnQgfArgggYQgmgbgehuQgWhQgVAXQgMAOgYBRQgYBSgPAUQgYAhgahCQgGgQgEgZQgFgZABgUQABhjgSAXQgJALgmBgQgmBfgYAbQgNAPgLAAQgVAAgQgug");
	this.shape_9.setTransform(597.7,-191.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#326D4C").s().p("AjgEGQgKgdAJhMIAJhCIACgOQgsBDgfAhQgxA0gqAFQgfADgcgTQgdgVANhLQADgTAahaIgXANIg1AjQghAVgUAIQgkANgSgPQgUgQACgwQAKilCshWQBug3CwgVQB8gPCSADQAsABCHAGIADAAIACACQAEADAPAHIAiAOIBbAoQBFAhAfAWQArAeAYAdQAbAhgHAaQgHAbgqAFQglAFg2gJIAIAJQAYAgAMAaQANAbADAbQAFAzghArQgLAQgPAEQgxALg+hsQgSgggQglQgDBOgTBAQgeBdgtAIQg9AKgtiiQgIgggIgOQgEgJgEAAQgEABgLAbQgHASgQA1QgOAxgKAYQgRAmgTADQgXAEgWg2QgIgSgEgbQgEgaAAgVQAAgxgCgOQgGAJgLAaIghBUQgXA4gRAbQgZAqgXAAQgbAAgSg2g");
	this.shape_10.setTransform(597.6,-189.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B724E").s().p("ADjDmQgYgpgDg+QgDg8AQg0IgWApQgdAygUAgQhBBhgngPQgpgQAHiWQABgTgLAeQgWA4gNAZQg/B6g8hQQgkgyAHhJQABgPgEAGIgmA5QgeAtgsAfQg7AoABhKIAKhnQAHhDgLAMQgPARgzBEQg0BEgmAlQh2Bwghh/QgjiDB6iZQAug7A5gtQA1gqAjgKQBIgUBpAIQAwAECOAWQB3ATBDAAQBjAABDgiIBkBCQAbACAsAYQAxAbAoAnQBrBlgaBjQgaBlhqhYQgegZgyg1IgognQgFgNgKgBIAPAOQAHAQgEAoQgHBEgeBGQghBOgnAUQgMAGgLAAQghABgeg2g");
	this.shape_11.setTransform(600.5,-183.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66BB52").s().p("AjVBjQABgpgBgSQgEgjgVgPQAaAKAMAWQADACAEAAQAIABADgZIAFgdQgBASAbAhQALAQAPgEQAQgEAHgaQAHAPAAAFIAEADQAHAEAbgeQAcgfAFgEQgQAZAQAnIAKAcQAEgXADgGQAFgNAOgNIAFAJIAKAQQAEAEAHgBQAMgCAGgRQADgGADgRIAGggQADgYgDgHQAPAJAEAZQAFAXACgBQAJAAAHgMQAGgPADgEIATgaQAPgSALgGQgbAagUA7IgIAZQgDAMAIACQAGABAIgHIAKgJIAVgUQgQAVgDAZIgEApIAvg9QAYgeAggPQgbAVgPApQgFANgMA2gAixgdIAAAAIAAAAg");
	this.shape_12.setTransform(585.1,-92.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A75A").s().p("AjlB5QABg5gFgZQgIgpgogQIgpgPIAuAHQAYAEAXAMQAZANAIAPIALgdQANghAKgKIAPgPIgGANQgQApAYAiQAPAXANgWQAIgOAGgdQAAgEAJAWQAIAUABAIIAsgnQAvgtAUgFQADgBgbAcQgZAjALAiQABgGANgPQANgPAHgDQACAAAHAPIAKATQAKAKAKgmQAIglgCgNQgDgMgKgNQgNgRgBgDQgCgDAVAPQAWAQALANQAFAHAFAMQAEAIACAAQAEAAATgaQAVggAcgRQAIgGAQgGQAQgHgDACQhAA7gPAuQgLAiACADQABADAPgQQAwgzAfgBQADAAgdATQggAbgEAoQARgkA0gcQAxgdArgCQgzANgjA/QgaAugKA3g");
	this.shape_13.setTransform(584.8,-94.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B583E").s().p("AjsCAIAAgEQgEg+gGgWQgIgcgZgSQgGgEgTgIQgUgIgMgIQARgGAwAIQAUADAUAJQAWAKANAMIAIgVQAGgOAJgOQATgbAXgGQgLAOgFAaQgGAeARAaQAGAIADABQAJgIAGgVIAHgeQAKACANAfIAFAMIAIgJIAigeQAwguAaACQgIAHgKAOIgLAQQgPAXAAAVQARgUAKgDQAHgCAEAFIADAFIALAXQAFgLAFgYQAEgYgBgGQgGgXgRgUIgMgQQAYADAUAOQAIAFAKAKQAJAIAFAHQAGAHAEAKIABADIAQgWQANgTAUgRQAngiAiAGQACACgZAWQghAigeA1IgGARIABgBQARgRAKgIQAPgNALgFQAYgNAaADQgKAGgfAZQgMAMgIAMQAcgZAogSQAogSAhgCQAUgBgRALIgYANQgmAUgbA3QgUAogJAuIAAAEg");
	this.shape_14.setTransform(584.6,-94.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66BB52").s().p("AjUBjQAAgpgBgSQgDgjgWgPQAbAKAMAWQADACADAAQAIABAEgZIAFgdQgCASAbAhQALAQAPgEQAPgEAJgaQAGAPABAFIADADQAHAEAcgeQAcgfAEgEQgPAZAPAnIALAcQAEgYACgFQAFgNAPgNIAEAJIAKAQQAFAEAHgBQALgCAGgRQADgGADgRIAHggQADgYgDgHQAOAJAFAZQAFAXACgBQAJAAAGgMQAHgPACgEIAUgaQAOgSALgGQgcAcgTA5IgIAZQgDAMAJACQAGABAIgHIAKgJIAVgUQgRAVgCAZIgFApIAvg9QAZgeAfgPQgbAVgPApQgFAMgMA3g");
	this.shape_15.setTransform(612.9,-92.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A75A").s().p("AjlB5QABg5gFgZQgIgpgogQIgpgPIAuAHQAYAEAXAMQAZANAIAPIALgdQANghAKgKIAPgPIgGANQgQApAXAiQAQAXANgWQAIgOAGgdQAAgEAJAWQAIAUABAIIAsgnQAvgtAUgFQACgBgbAcQgYAjALAiQABgGANgPQANgPAHgDQACAAAHAPIAKATQAKAKAKgmQAIglgCgNQgDgMgKgNQgNgRgCgDQgBgDAVAPQAWAQALANQAFAHAFAMQAEAIACAAQAEAAATgaQAVggAcgRQAIgGAQgGQAQgHgDACQhAA7gPAuQgLAiACADQABADAPgQQAwgzAegBQAEAAgdATQggAbgEAoQARgkA0gcQAxgdArgCQgzANgjA/QgaAugKA3g");
	this.shape_16.setTransform(612.7,-94.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B583E").s().p("AjsCAIAAgEQgEg+gGgWQgIgcgZgSQgGgEgTgIQgUgIgMgIQARgGAwAIQAUADAUAJQAWAKANAMIAIgVQAGgOAJgOQATgbAXgGQgLAOgFAaQgHAeASAaQAGAIADABQAJgIAGgVIAHgeQAGABAIAOQAGAKADAIIAEAMIAJgJIAigeQAwguAaACQgIAHgKAOIgLAQQgPAWAAAWQARgUAKgDQAHgCAEAFIADAFIALAXQAFgLAFgYQAEgYgBgGQgGgXgRgUIgMgQQAYADAUAOQAIAFAKAKQAJAIAFAHQAGAHAEAKIABADIAQgWQANgTAUgRQAngiAiAGQABACgYAWQghAhgeA2IgGARIABgBQARgRAKgIQAPgNALgFQAYgNAaADQgKAGgfAZQgMAMgIAMQAcgZAogSQAogSAhgCQAUgBgRALIgYANQgmAUgbA3QgUAogJAuIAAAEg");
	this.shape_17.setTransform(612.5,-94.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A1603F").s().p("Ah9FpQAGgYAEgxQARhzgLhkQgJhOAUhMQAKgsAWgqQAnhJBFg2IAlggQAWgUAOgPQAbgeAPglQgIAmgXAfQgMAPgUAUIgkAfIgFAFQgxAogbA2QgbA0gFA9QgCBCAbBpQAeB3ADAzQAEA6gHAyQgJAugMgoQgMgoACgZQACgOgDgaQgJhngOAFQgKAFAEAsIAGA2IAAAIQgDAagIAYQgKAjgWAXQgKANgQAKQgSALgOAFQAWgaAJgqgAhChnIgGAWQgDANgDAVIgGAhQgDAWAEAeQAFAjAMATQAGAIAGAFQgHgWgFgXQgOhHAOhAIACgGQAGgdALgXQgLAFgIAZg");
	this.shape_18.setTransform(599.2,-133.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A1603F").s().p("AAdF7IgJgiQgRg5gKgrQgUhJgFgvQAAgCgLA7QgDARgDA4QgICFgCgDQgKgPABguQACgxgBgPIABhcQABg5gHghIgZhNQgOgsABglQADg1AXgtQAbg1A7gxIAmgkQAWgWAOgRIASgYQAOgSgCAIQgFAQgLAVQgRAegtA2QhEBKgXA+QgJAZgCAcQgBAaALAdQAGAQAOAeQgPg/AEglQAEgWAGgRQAZhHBBhHIARgVQAKgLAJgHQAFgDgdAwQgjAxgJANQgfA2AEA8QAHAxAlBDQAxBYAJAXQAFANAEAUIAHAjQADATAFAOIgNggQgLgbgTgpQgDgGgkgsQgjgsABADIAXBWQAOAzAFAlQAJA9gGA0IgIAfIgCAPg");
	this.shape_19.setTransform(606.2,-133.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A1603F").s().p("AhqFHQAEgMAEgPQALgmAAg4QgBg/ABgfQgDAOgKBUQgHA8gRAlIgKAXQgPAageAeIAHgLQALgZAOgmQAjhRAFheQADg4gKh2IgCgnQADh4AwhJQAZgkAbgZQAbgeAdgQQAigNACgIQABAEgKAJIgOALQgkAdgNAOIgGAHQgcAdgSArQgXA3gKBFIAuhQQAyhWASgNQAOgMAZgRIAngbQAngaAbgmQgQAlgfAfQgXAXgyAoQhrBSgbCKIgCALQgLA1AUB/QASBxgbBCQgFAQgHARQgVAzhBAwQAwgtAUg3g");
	this.shape_20.setTransform(595.7,-134.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7D453A").s().p("AlVHSQAIgDANgCQALgGARgPQBEg1AuhwQAcg0AOg5QAOg0gBgzQAAgigHgXQgIgWgFgpQgEghAAgdQABglAHghQAQhWAmg+QARgcAVgUQAagdAggKIADAAQAIgCAxgXQAvgUAEAGQAHAOgxAoIgVAPIgUAQIgYAXQgtAtgYBBIAlgnQApgvAPgNIAPgPQALgKAVgMIAggVQgBAFA3gMQAzgKgZAiQgQAVgbAUIgxAgQglATgOAUQgvBDAABcQABAOAIAgQAIAfABAQQABgYgBgIQgFgiAEgbQAFgnAVglQARgdAhgkIAmgpQAZgcAHgGQAOgLgVAkIgJARQgcAzgLAkQgPAuAGAsIACAOQAIAkAVAqIAkBDQAjBBANBBQAFAcABAQQAIA+AjAbQAUAXAdANQAHAEAPADIgsAaQgmAigTAHQggALgMgnIgEgJQgDgLAAgQIACgcQAIg8AAgVQgBgOgFgRIgLgeQgMgbgqhGQgrhKAMAgQAJAZAXAvQAXAwAJAYQAKAgADATQAFAdgDAYQgBAIABAKIACASIABAWQAAAPgGAHQgBABgGgqQgDgNgHADQgFADACAKQADATAAAHQgBAQgIAKQgJALgaAEQgZAEgLgHQgEgDACgTIACgZIADgdQABgRgCgLIgMhTIgDgSQgEgNgCAKIgCAYIgCBIQgCAqgDAeQgCAkgHAQIgCAGQgGAMgqgBIg2gEIgVACQgOAAgFgEQgBgCATgRIAVgSQAsgmAHgiQAHgfgDgzQgFhAgKgZIAEAiQAEApgBAQQAAAvgMAiQgMAmgvAnQglApgmAFQgiAIgUABQglACAMgXQAIgJAkgiQA7g2AWhGQAQgnAEg5IADhgQgDAOgKBVQgHA8gRAkIgKAXQgOAYgeAfQgqAsgGAHIgwA/IgmAFIgLAEIgIABIgCAAg");
	this.shape_21.setTransform(596.5,-130.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6E3D37").s().p("AlxHAIAJgCQAQgHAOgOQBGg1AvhwQAjhCAOhBQARhNgRg3QgSg5AAhOQAGh9A4hdQATgfAVgTQAdgcAjgIQgBACCBgKQB8ABgfA1QgMAUgUAcIgiAuQgSAYgKAiIgRA8QgIAaAEAdIACAKQAMAvAuBaQAsBWALA1IAGAqQAIBCApAZQANALA1AOQAzANAAABIAAAAQgKALgRAMQhdBfhzgDQgjgBhFgNQhIgNgngCQgRAJh6APQhYAMgqAAQgSAAgJgDgAl3G+IAGACIgFABQgBAAgBAAQAAAAAAgBQAAAAAAAAQAAgBABgBgAlxHAg");
	this.shape_22.setTransform(599,-128.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A1603F").s().p("ABfD7QgSgfgpgfQgPgKg8gnQgogbgUgRIgRgQQglgngJgyQgJg4AWg0QAPgiAdgiIATgVQAgggAwgiQAegWA6gmIhCAvQgnAdgYAUQgPAMgUAUIgXAbQgYAfgLAeQgSAyAMA3QAKAoAfAgIAIAJQAcAaAyAbQBBAkATANQAtAeAWAgQANAXAOAiIAHATIAAAEQgDgBgSgfIgXgpIgBgCQgGgJg2gpQg2grgCAFQAAAKApAZQAtAcAGAHQAJALAGAKQANAeADAdQADAbgJAEQgHgogUgpgAg1BwQgfgTgUgUIgBgBQgkgkgKguQgGgkAHggQgIANAAAVQAAAKAEAYQAEATAIASQALAaAYAWIACACQAeAcAWAHIAAAAg");
	this.shape_23.setTransform(573.7,-150.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A1603F").s().p("ACcESQgVgkgOgUQgZgegsgeIhRgxIAvAiQA/AuAYAjQAmBSgCgDQgJgMgMgaQgMgbgIgLQgWgggsgfIhRg1IgogcQgYgQgLgJQgmghgNgtQgMg0ATgzIABgDQARgpApgrQAIgIBDgyIA+guIhCA0QglAfgYAZQgnAqgRArQgGAOgDAQQgIAiAKAjQALArAnAfIARAMIgQgNQgjgegLgsQgGgeAEgcQAEgVAHgSQARgqAmgpQAigmAcgTIgWAWIgkAlQgVAZgKAQQgNAVgHAUQgPAuAOAvQANAnAkAcQAXASAzAaIA9AeQBDAlAoAxIgoggQgvgmgbgOQgSgJgqgSIg2gXIAvAdQBEAlAVAOQAwAfAYAiQATAdAPAmIANAkIgXgpg");
	this.shape_24.setTransform(576.8,-149.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A1603F").s().p("ACLEzQAAgkgIgYIgEgKQgQgcgngcIhHguIgjgZIAiAbIBDAtQAmAdALAcIAEAMIAAAUIgEgRQgNgggkgfQgTgRgygjQgygjgbgbQgkglgPgsIgCgKQgPg6ARg3QAKgfAUgdQAMgSATgUQAbgdAxgjIBSg6QgRAPgqAdQgnAcgSAQQgUARgRAUQgTAWgNAXQgQAbgHAYQgHAZgBAWIALguQASgwAsguQBAhCB4g8Qg7AkgjAZQgxAjghAiQgsAsgTAvQgRArADAwIACASQALAzAlAmQAZAaA2AfQA0AeAXARQAmAcAQAgIACAGQAEAMgBAyIgBAqIAAgpg");
	this.shape_25.setTransform(569.2,-149.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7D453A").s().p("AAfF5IgBgKIgCgVQgFhBgLgvQgMgqg9gtIgmgcQgYgQgVgQIgigeIgKgKQgWgWgOgdQgGgNgFgRQgJglAEgmQAEgaAFgPQAMgnAcgmIATgXQAxg2BEgpQAJgGAngQQAngQgGAGQgRARgoAZQgwAcgPAMQgfAZgaAcQgkAogRAqQAmg5AWgWQAWgXAZgUIBagiIh2BVQgLALgIAKQgYAfgMAjQgQAxANA0QAGATANAUQAHALATAYQgUgcgHgLQgJgRgEgTQgLgzAUgvQANgeAcgiIARgTQAMgNAjgeQAigdglAjIgkAoQgjArgMAnQgLAkAIAoIACAJIACAHQALAjAdAYIAHAFQAUAQAnAVIBHAkQBOArAjAvIAGAJIAhA6QAXAkAdANIAKAEIgTAaQgNALgNgSQgNgTgOgkQgRgrgHgNQgGgLgIgLQgigqhGglQgcgPgrgUIgmgTQgVgLAeASIAaAOIBKAmQBCAlAeAmQAUAbANAiIASAgQAMAUABAOIgMgUQgNgWgBACQgCAHAKARQAMAUABAFQAAAHgIADQgIAEgGgFQgOgOgLgfQgPgpgEgIIgWglQgFgHgYgWIgTgRQAcAbAOAVQAsBMAVBDQADALgagDQgZgDgFgHIgEgIQABAYgJADQgzAPAAhdQgBgjgGgXIgDgIQgOgdglgdIhGgvIgjgZIAiAbIBDAtQAlAdAMAcQADAGABAHIAAAdQgBASABAKIACALQAIAxARAdIgEACQgFACgEAAQgFAAgEgDgAgPCLQAYASATAPQAdAYAKAQIAMAeIAMAxQgBgkgFgNQgHgRgIgPQgRgZgZgTQgagVgkgTg");
	this.shape_26.setTransform(578.6,-147.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6E3D37").s().p("AARFpQgGhQgKgsQgJgggigfQgRgRgygjQg0gkgbgaIgGgGQgmgjgOgzQgPg7ATg6QANgnAagkIAVgaQAmgqA/gtQBahAAnATQAWARhGAyQhLA2giApQgeAmgOAsIgEAPQgIAdAIAiIADANQANAlAiAaQAZAUAvAXQA/AgAgAVQAwAfAbAkIAEAHQAIAMA2AxIA0AwQgGAZguAcQgxAfgcgPQgQgJgyAaQgNAHgIAAQgRAAgDgbg");
	this.shape_27.setTransform(579.4,-147.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.shape_1}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_2},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-82,278,82);


(lib.blast = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.parent.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(6));

	// Ñëîé 11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9D6FF").s().p("AgLATQgIgFgCgJQgCgIAFgIQAFgIAJgCQAIgCAIAFQAIAFACAJQACAIgFAIQgFAIgJACIgFABQgGAAgFgEg");
	this.shape.setTransform(34.6,30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9D6FF").s().p("AgLATQgIgFgCgJQgCgIAFgIQAFgIAJgCQAIgCAIAFQAIAFACAJQACAIgFAIQgFAIgJACIgFABQgFAAgGgEg");
	this.shape_1.setTransform(42.3,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9D6FF").s().p("AgRAcQgMgHgDgOQgEgNAIgMQAHgLAOgDQANgDAMAIQAMAHAEAOQADANgIAMQgHALgOADIgIABQgIAAgJgGg");
	this.shape_2.setTransform(36,28.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAF1FF").s().p("AgOAYQgMgHgEgNQgEgLAHgKQAGgKANgCQAMgCALAIQAMAHAEAMQAEAMgHAKQgGAKgNACIgFAAQgJAAgJgGg");
	this.shape_3.setTransform(36.7,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C9D6FF").s().p("AgRASQgHgIAAgKQgBgJAIgIQAHgHAKAAQAKgBAIAIQAHAHAAAKQAAAKgHAHQgHAIgLAAQgJAAgIgHg");
	this.shape_4.setTransform(4.9,40.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C9D6FF").s().p("AgWAUQgJgIAAgLQgBgLAKgIQAJgJANAAQANAAAKAIQAJAIAAALQAAALgJAJQgJAIgOAAQgMAAgKgIg");
	this.shape_5.setTransform(-0.8,40.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAF1FF").s().p("AgTAQQgIgGAAgKQgBgIAJgHQAIgGALgBQALAAAJAHQAIAGAAAJQAAAJgIAHQgIAHgMAAQgLAAgIgHg");
	this.shape_6.setTransform(-0.5,38.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C9D6FF").s().p("AgNAaQgKgGgEgLQgEgKAGgLQAGgLAMgDQAKgEALAFQALAGADAMQAEAKgGAKQgGALgLAEIgJABQgGAAgHgDg");
	this.shape_7.setTransform(-6.7,40.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAF1FF").s().p("AgNAWQgKgEgDgKQgDgIAGgKQAFgJAMgDQAKgEAKAFQAKAEADAKQADAIgGAKQgGAJgLADIgIACQgHAAgFgDg");
	this.shape_8.setTransform(-7,39);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C9D6FF").s().p("AgJAbQgMgEgFgLQgFgLAFgKQAEgLALgFQALgFAKAEQAMAFAFALQAFAKgEALQgFALgLAEQgGADgGAAQgEAAgFgCg");
	this.shape_9.setTransform(-27.9,34.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAF1FF").s().p("AgIAXQgLgFgFgJQgFgJADgJQAEgKALgDQAJgEAKAEQAMAEAFAKQAFAIgDAKQgEAKgLADQgEACgFAAQgFAAgGgCg");
	this.shape_10.setTransform(-27.5,33);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C9D6FF").s().p("AgXAVQgIgJACgMQABgMAKgIQAKgJAMAAQAMAAAIAJQAIAJgBALQgCANgKAJQgKAIgMAAQgMAAgIgJg");
	this.shape_11.setTransform(0.8,-39.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAF1FF").s().p("AgWAUQgHgIACgLQACgKAKgIQAJgJALAAQALgBAHAIQAHAHgCAMQgDAKgJAIQgKAJgKAAIgCAAQgKAAgGgHg");
	this.shape_12.setTransform(0.1,-40.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C9D6FF").s().p("AgJAaQgMgEgFgLQgFgLAFgKQAEgKALgFQALgEAKAEQALAFAFAKQAFAKgEALQgEALgLAEQgFACgGAAQgFAAgFgCg");
	this.shape_13.setTransform(11.7,-39.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EAF1FF").s().p("AgIAWQgLgEgFgJQgFgJAEgJQAEgKAKgDQAKgDAKAEQALAEAFAJQAFAJgEAJQgDAKgKADQgFACgFAAQgFAAgGgDg");
	this.shape_14.setTransform(12.1,-40.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C9D6FF").s().p("AgBAYQgJgBgFgIQgFgHAAgJQABgKAHgGQAGgHAIABQAIABAGAHQAFAHgBAJQAAAKgHAHQgGAGgHAAIgBAAg");
	this.shape_15.setTransform(-42,8.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C9D6FF").s().p("AgBAUQgIAAgFgHQgGgHABgHQABgJAGgFQAHgFAHAAQAIABAGAGQAFAHgBAHQAAAJgHAFQgFAGgHAAIgCgBg");
	this.shape_16.setTransform(-39.7,10.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C9D6FF").s().p("AgCAdQgLgBgIgJQgHgJAAgLQABgMAKgIQAJgIAKABQAMABAIAJQAHAJgBALQgBAMgJAIQgHAHgLAAIgCAAg");
	this.shape_17.setTransform(-41.6,3.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C9D6FF").s().p("AgBAVQgIAAgGgHQgFgHAAgIQABgIAHgGQAGgGAIABQAIABAGAGQAGAHgBAIQgBAJgGAFQgGAFgHAAIgCAAg");
	this.shape_18.setTransform(-41,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EAF1FF").s().p("AAAASQgJAAgGgGQgEgGAAgHQAAgHAHgFQAGgFAHABQAJABAFAFQAGAGgBAHQAAAHgHAFQgFAEgHAAIgBAAg");
	this.shape_19.setTransform(-41,-0.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C9D6FF").s().p("AgLATQgIgFgCgKQgCgIAGgIQAFgHAJgCQAIgCAHAFQAIAFACAJQACAJgFAIQgFAHgJACIgFABQgFAAgGgEg");
	this.shape_20.setTransform(-34.2,-26.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C9D6FF").s().p("AgOAXQgJgGgCgMQgCgKAGgJQAGgJAKgDQAKgCAJAGQAJAHADALQACAKgGAJQgGAKgLACIgFAAQgHAAgHgEg");
	this.shape_21.setTransform(-32.5,-30.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C9D6FF").s().p("AgQAZQgLgHgCgMQgDgLAIgKQAGgLANgCQALgDALAHQALAHACAMQADALgIALQgGAKgNACIgGABQgIAAgIgFg");
	this.shape_22.setTransform(-28.5,-33.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EAF1FF").s().p("AgQAWQgKgGgCgKQgCgJAHgJQAHgKAMgCQALgDAKAGQAKAGACAKQACAJgHAJQgHAKgMACIgGABQgIAAgHgEg");
	this.shape_23.setTransform(-28.8,-34.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C9D6FF").s().p("AAAAVQgKgBgHgGQgHgGABgIQAAgJAHgGQAIgFAJAAQAKABAHAGQAHAHgBAHQAAAJgIAGQgGAFgIAAIgCAAg");
	this.shape_24.setTransform(-24.2,-35.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EAF1FF").s().p("AAAASQgJgBgHgFQgHgGAAgGQABgHAHgFQAHgFAJAAQAKABAGAFQAHAGgBAGQAAAHgHAFQgGAFgIAAIgCAAg");
	this.shape_25.setTransform(-24.2,-36.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C9D6FF").s().p("AAAAcQgNgBgIgIQgIgJABgKQAAgMAJgHQAJgJALABQAMABAIAJQAJAIgBAKQAAAMgJAHQgJAIgLAAIAAAAg");
	this.shape_26.setTransform(6.4,-40.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EAF1FF").s().p("AAAAYQgMgBgIgHQgIgHABgJQAAgKAJgHQAIgGALAAQAMABAIAHQAIAIgBAIQAAAKgJAHQgIAGgJAAIgCAAg");
	this.shape_27.setTransform(6.4,-42);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C9D6FF").s().p("AgRAZQgKgHgDgNQgCgMAHgKQAHgKANgCQAMgDAKAIQALAHACANQADALgIALQgHAKgNADIgFAAQgIAAgJgGg");
	this.shape_28.setTransform(37.1,-20.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EAF1FF").s().p("AgOAVQgKgHgDgLQgDgLAGgIQAHgJALgBQALgBAKAHQAKAHADALQADALgGAIQgHAJgLABIgDAAQgJAAgJgGg");
	this.shape_29.setTransform(37.7,-21.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C9D6FF").s().p("AgIAdQgNgEgGgLQgFgLADgLQAEgMAMgGQALgGALAEQANAEAGAMQAGALgEALQgEAMgLAFQgHAEgIAAQgDAAgFgCg");
	this.shape_30.setTransform(33.5,-24.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EAF1FF").s().p("AgHAZQgMgEgGgKQgGgKADgJQAEgKAKgFQALgEALADQAMAEAGAKQAGAKgEAJQgDAKgKAFQgGACgHAAQgEAAgFgBg");
	this.shape_31.setTransform(33.9,-25.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B2C1FF").s().p("AgRAbQgMgIgCgOQgCgMAHgLQAIgLANgDQANgCALAIQALAIACANQADAMgIAMQgIALgNACIgGABQgJAAgIgGg");
	this.shape_32.setTransform(5.1,40.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B2C1FF").s().p("AgQAYQgJgHgDgMQgCgLAHgKQAHgJAMgCQALgCAKAGQAKAHACAMQACALgHAKQgHAKgMACIgFAAQgIAAgIgFg");
	this.shape_33.setTransform(42.3,3.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B2C1FF").s().p("AgSAbQgLgIgCgNQgCgNAHgLQAIgLANgCQANgDALAIQALAIACANQADANgIALQgIALgNACIgGABQgJAAgJgGg");
	this.shape_34.setTransform(34.9,30.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B2C1FF").s().p("AgWAhQgOgJgDgRQgDgPAKgOQAJgOARgDQAPgDAOAKQAOAKADAQQADAQgKAOQgKANgQADIgHABQgLAAgLgIg");
	this.shape_35.setTransform(36.3,27.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B2C1FF").s().p("AgHAeQgMgEgGgLQgHgKAEgMQADgMALgGQAKgGAMACQAMAEAGALQAHALgEAKQgDANgLAGQgHAEgIAAIgHAAg");
	this.shape_36.setTransform(-42,7.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B2C1FF").s().p("AgKAcQgMgFgFgLQgEgMAEgKQAFgMAMgEQAKgFALAEQAMAFAEAMQAFAKgFALQgEAMgMAFQgFACgGAAQgFAAgFgCg");
	this.shape_37.setTransform(-39.7,10.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B2C1FF").s().p("AgJAmQgPgEgJgOQgIgOAEgPQAFgQAOgIQAOgIAOAEQAQAEAIAOQAIAOgEAPQgEAQgOAIQgKAFgKAAIgJgBg");
	this.shape_38.setTransform(-27.8,33.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B2C1FF").s().p("AgJAmQgQgEgIgOQgIgPAEgOQAEgQAOgIQAPgIAOAEQAQAEAIAOQAIAPgEAOQgEAQgOAIQgKAFgJAAQgFAAgFgBg");
	this.shape_39.setTransform(-6.8,39.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B2C1FF").s().p("AgfAfQgNgNAAgSQAAgSANgNQANgNASAAQASAAAOANQANANAAASQAAASgNANQgOAOgSAAQgSAAgNgOg");
	this.shape_40.setTransform(-0.5,40.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B2C1FF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_41.setTransform(33.6,-24.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B2C1FF").s().p("AgbAcQgLgMAAgQQAAgPALgMQAMgLAPAAQAQAAAMALQALAMAAAPQAAAQgLAMQgMALgQAAQgPAAgMgLg");
	this.shape_42.setTransform(0.3,-39.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B2C1FF").s().p("AgfAgQgNgNAAgTQAAgRANgOQAOgNARAAQATAAANANQANAOAAARQAAATgNANQgNANgTAAQgRAAgOgNg");
	this.shape_43.setTransform(-28.6,-33.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B2C1FF").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAJAJQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_44.setTransform(-40.9,-0.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B2C1FF").s().p("AgZAaQgLgLABgPQgBgOALgLQALgLAOAAQAQAAAKALQAKALAAAOQAAAPgKALQgKALgQAAQgOAAgLgLg");
	this.shape_45.setTransform(-41.6,3.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B2C1FF").s().p("AgVAXQgJgKAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAKQgJAIgNABQgMgBgJgIg");
	this.shape_46.setTransform(-34.2,-26.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B2C1FF").s().p("AgZAaQgLgKAAgQQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgOAAgLgLg");
	this.shape_47.setTransform(-32.5,-29.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B2C1FF").s().p("AgHArQgRgDgJgPQgKgOADgSQADgRAPgLQAOgKAQADQARADAKAPQAJAPgDAQQgDASgOALQgLAIgNAAIgHgBg");
	this.shape_48.setTransform(37.3,-21.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B2C1FF").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_49.setTransform(11.8,-39.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B2C1FF").s().p("AgbAdQgMgMgBgRQABgQAMgLQALgMAQgBQARABAMAMQAMALgBAQQABARgMAMQgMAMgRgBQgQABgLgMg");
	this.shape_50.setTransform(6.4,-40.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B2C1FF").s().p("AgVAXQgKgKAAgNQAAgMAKgJQAJgKAMAAQANAAAKAKQAJAJAAAMQAAANgJAKQgKAJgNAAQgMAAgJgJg");
	this.shape_51.setTransform(-24.1,-35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[]},1).wait(1));

	// Ñëîé 10
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C9D6FF").s().p("AgTAVQgKgHgBgLQgBgLAIgJQAJgJAMgBQAMgBAKAHQAKAIABALQABALgIAIQgJAJgMABIgDABQgKAAgJgHg");
	this.shape_52.setTransform(18.8,38.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EAF1FF").s().p("AgTAUQgJgHgBgKQgBgKAIgIQAIgIANgBQALgBAKAGQAJAHABAKQABAKgIAIQgIAIgNABIgDAAQgKAAgIgFg");
	this.shape_53.setTransform(18.7,37.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C9D6FF").s().p("AgMAXQgKgFgDgLQgDgKAFgJQAGgKAKgDQAKgDAKAGQAKAFADALQADAKgFAKQgFAKgLACIgIABQgGAAgGgEg");
	this.shape_54.setTransform(32.6,31.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C9D6FF").s().p("AgMAYQgKgGgDgLQgDgKAFgJQAFgKALgDQAKgDAKAGQAKAFADALQADAKgFAKQgGAJgLADIgHABQgGAAgGgDg");
	this.shape_55.setTransform(27.9,31.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C9D6FF").s().p("AgHAWQgJgFgEgIQgEgIADgJQAEgIAIgEQAJgEAIAEQAJADAEAIQAEAJgDAIQgEAJgIAEQgFACgFAAQgDAAgEgBg");
	this.shape_56.setTransform(35.1,28.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EAF1FF").s().p("AgGASQgJgDgEgIQgEgHADgHQADgIAIgDQAIgDAIAEQAIADAFAIQAEAGgDAIQgDAIgIADIgIABQgDAAgFgCg");
	this.shape_57.setTransform(35.4,27.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C9D6FF").s().p("AgSAYQgLgHgCgNQgBgLAIgLQAIgKANgBQAMgCAKAIQALAIABAMQACAMgIAKQgIAKgNACIgEAAQgKAAgIgHg");
	this.shape_58.setTransform(31.4,28.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EAF1FF").s().p("AgSAVQgKgGgBgLQgCgKAIgJQAIgIANgCQAMgCAJAHQAKAGABALQACAKgJAJQgHAIgNACIgDABQgKAAgIgGg");
	this.shape_59.setTransform(31.2,27.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C9D6FF").s().p("AgDAnQgQgCgKgMQgLgNACgPQACgQAMgKQANgKAPABQAQACAKANQAKAMgBAPQgCAQgNAKQgLAJgNAAIgDAAg");
	this.shape_60.setTransform(35.1,23.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EAF1FF").s().p("AgCAjQgRgCgLgLQgLgLACgOQABgOANgJQANgJAQABQAQACALALQALAMgCANQgBAPgNAJQgKAHgNAAIgFAAg");
	this.shape_61.setTransform(35.2,22.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C9D6FF").s().p("AgCAaQgLgBgGgJQgHgIABgKQABgKAIgHQAJgHAKABQALABAHAJQAGAIgBAKQAAAKgJAHQgIAGgJAAIgCAAg");
	this.shape_62.setTransform(39.5,10.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C9D6FF").s().p("AgCAlQgQgCgKgMQgKgLABgPQACgPAMgJQAMgKAPABQAPACAKAMQAKAMgBAOQgCAPgMAKQgKAIgNAAIgDAAg");
	this.shape_63.setTransform(40,5.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EAF1FF").s().p("AgDAjQgQgCgLgLQgLgLACgOQABgOANgJQANgJAPABQARACALALQALAMgCANQgBAPgNAJQgKAHgOAAIgFAAg");
	this.shape_64.setTransform(40.2,3.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C9D6FF").s().p("AgPAhQgNgIgFgPQgEgOAGgOQAHgOAOgEQANgEANAIQANAIAFAPQAEAOgGAOQgHAOgOAEIgJABQgIAAgJgFg");
	this.shape_65.setTransform(38,-9.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EAF1FF").s().p("AgMAgQgMgIgFgPQgEgOAGgNQAEgOANgDQAMgEALAIQAMAIAEAPQAFAOgFANQgGANgMAEIgIABQgHAAgIgFg");
	this.shape_66.setTransform(39,-9.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C9D6FF").s().p("AgKAuQgTgFgKgRQgKgRAEgSQAFgTAQgKQARgJASAEQATAFAKAQQAKARgEASQgFAUgQAJQgMAHgMAAIgLgBg");
	this.shape_67.setTransform(37.1,-17.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EAF1FF").s().p("AgFAqQgRgGgJgQQgKgRACgQQACgSAOgIQANgIAQAGQARAGAKAQQAKAQgDARQgDARgNAIQgIAFgJAAQgGAAgGgCg");
	this.shape_68.setTransform(38.5,-18.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C9D6FF").s().p("AAAApQgQgCgMgNQgMgNAAgQQABgRAMgKQAMgLAQABQAQACAMANQALANABAQQAAAQgMALQgLAKgOAAIgEAAg");
	this.shape_69.setTransform(32.9,-24.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EAF1FF").s().p("AACAlQgOgCgMgNQgLgMgBgOQAAgQAKgJQAKgJAPACQAPACALANQALAMABAPQAAAPgKAJQgIAHgLAAIgGAAg");
	this.shape_70.setTransform(34,-25.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C9D6FF").s().p("AgWAXQgKgIgBgNQgBgMAKgKQAKgKAOgBQANAAAKAIQALAJAAANQABAMgKAKQgJAKgOAAIgCABQgMAAgKgJg");
	this.shape_71.setTransform(28,-30.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EAF1FF").s().p("AgVAUQgKgIgBgLQAAgJAJgJQAJgIAOgBQAMAAAKAHQAKAHABALQAAALgJAIQgJAIgOABIgBAAQgMAAgJgHg");
	this.shape_72.setTransform(27.9,-31.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C9D6FF").s().p("AgPAhQgPgHgGgPQgFgOAGgNQAHgOAPgFQAOgEAPAHQAPAHAGAPQAFAOgGAOQgHANgPAFQgGABgGAAQgIAAgJgEg");
	this.shape_73.setTransform(13.7,-35.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EAF1FF").s().p("AgNAcQgOgHgGgNQgGgMAGgMQAFgLAOgEQAOgDAOAHQAOAHAGANQAGAMgGAMQgFALgOAEIgKABQgIAAgKgFg");
	this.shape_74.setTransform(14.3,-36.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C9D6FF").s().p("AgNAlQgQgFgHgOQgHgOAGgOQAGgQAQgHQAPgIAPAFQAQAFAGAOQAHAOgGAOQgGAQgPAHQgKAFgIAAQgGAAgGgCg");
	this.shape_75.setTransform(0,-37.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EAF1FF").s().p("AgOAhQgPgEgGgMQgGgMAHgMQAGgOAPgHQAOgHAOADQAPAEAGAMQAFAMgGAMQgGAOgPAHQgKAFgIAAIgKgBg");
	this.shape_76.setTransform(-0.7,-38.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C9D6FF").s().p("AgCApQgSgBgNgNQgMgNABgQQABgRAOgMQAOgLASABQATACAMANQAMANgBAQQgBASgOALQgNAKgPAAIgEgBg");
	this.shape_77.setTransform(6.3,-35.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C9D6FF").s().p("AgCApQgSgBgNgNQgMgNABgQQABgRAOgMQAOgLASABQATACAMANQAMANgBAQQgBARgOALQgNALgQAAIgDgBg");
	this.shape_78.setTransform(6.8,-37.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EAF1FF").s().p("AgBAkQgSgCgMgLQgMgLABgOQABgPANgJQAOgJARABQARABAMALQAMALgBAOQgBAPgNAJQgMAJgQAAIgCAAg");
	this.shape_79.setTransform(6.9,-39.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#C9D6FF").s().p("AgXAcQgLgJgCgQQgBgOAKgMQAKgLAQgBQAOgCALAKQAMAKABAPQABAOgKAMQgKALgPABIgEABQgNAAgJgJg");
	this.shape_80.setTransform(-27.4,-25.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C9D6FF").s().p("AgHAlQgOgEgJgMQgIgNADgPQAEgPAMgIQANgJAOADQAOADAJANQAIANgEAOQgDAQgMAIQgKAHgKAAIgHgBg");
	this.shape_81.setTransform(-32.2,-20.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EAF1FF").s().p("AgGAjQgNgCgHgMQgGgNADgNQADgPALgIQALgJALADQANACAHANQAGAMgDANQgDAPgLAIQgIAHgJAAIgFgBg");
	this.shape_82.setTransform(-33.7,-20.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C9D6FF").s().p("AgVAkQgOgHgEgSQgDgPAJgPQAJgPARgFQAPgFAOAIQAOAJAEARQADAQgJAOQgJAQgRAFQgFABgFAAQgKAAgJgGg");
	this.shape_83.setTransform(-30,-25.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EAF1FF").s().p("AgUAjQgMgHgCgPQgDgPAJgOQAJgPAPgFQANgFAMAHQAMAHADAQQACAOgJAPQgJAOgOAFQgGACgFAAQgIAAgHgEg");
	this.shape_84.setTransform(-31.4,-26.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C9D6FF").s().p("AgCAoQgRgCgMgMQgLgMABgQQABgQANgLQANgLARABQARACAMAMQALAMgBAQQAAAQgNALQgNAKgPAAIgDAAg");
	this.shape_85.setTransform(-17.9,-34.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EAF1FF").s().p("AgCAiQgRgBgLgLQgLgLABgNQABgOAMgJQANgJAQABQARABALALQAMALgBANQgBAOgNAJQgLAIgPAAIgDAAg");
	this.shape_86.setTransform(-17.9,-36.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C9D6FF").s().p("AgiAtQgRgNgCgWQgBgWAOgSQAOgTAWgEQAVgEARANQARAMACAXQACAVgOATQgOATgWAEIgKABQgQAAgNgKg");
	this.shape_87.setTransform(-23.8,-31.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EAF1FF").s().p("AggAsQgOgMgBgUQgBgTAOgTQAOgSAUgFQATgEAOALQAPALAAAUQABAUgOASQgNASgUAFIgLABQgNAAgKgHg");
	this.shape_88.setTransform(-25.5,-32.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C9D6FF").s().p("AgOBAQgZgGgNgXQgOgXAHgZQAGgbAWgPQAXgOAXAGQAZAGAOAXQANAXgHAZQgGAbgWAOQgQALgRAAIgNgCg");
	this.shape_89.setTransform(-36.7,4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EAF1FF").s().p("AgMA5QgWgGgMgUQgLgUAFgXQAGgXATgNQAUgNAVAFQAWAGALAUQALAUgFAXQgGAXgTANQgOAJgOAAIgMgBg");
	this.shape_90.setTransform(-38.9,4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C9D6FF").s().p("AggAjQgOgNgBgUQgBgSAOgPQANgOATgBQAUgBAOANQAPANABAUQABARgNAPQgOAPgUABIgCAAQgSAAgOgMg");
	this.shape_91.setTransform(-32.7,13.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C9D6FF").s().p("AgeAiQgPgMgBgTQgBgSANgOQANgPAUgBQASgBAPANQAOAMABATQABASgNAPQgNAOgUABIgCAAQgRAAgNgMg");
	this.shape_92.setTransform(-35.8,11.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C9D6FF").s().p("AgUAoQgRgIgFgSQgFgRAIgRQAJgRASgFQARgGAQAIQAQAJAGASQAFARgJAQQgIARgSAGQgHADgGAAQgKAAgKgGg");
	this.shape_93.setTransform(-36.9,-5.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EAF1FF").s().p("AgVAqQgOgIgEgRQgEgRAJgRQAJgSAQgGQAQgHAOAHQAPAIAEARQAEARgJARQgJARgRAHQgIADgGAAQgIAAgIgDg");
	this.shape_94.setTransform(-38.5,-6.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C9D6FF").s().p("AgKAhQgPgFgHgOQgHgNAFgMQAFgOANgGQAOgGAOAFQAOAFAHANQAHAOgFAMQgEAOgOAGQgIADgHAAQgGAAgGgCg");
	this.shape_95.setTransform(-23.7,33.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EAF1FF").s().p("AgJAeQgOgFgGgMQgHgMAEgLQAEgNANgFQANgFAMAEQAOAFAHAMQAGAMgEAMQgFALgMAGQgHADgGAAQgGAAgGgCg");
	this.shape_96.setTransform(-23.1,32.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C9D6FF").s().p("AgWAZQgLgIgBgNQgBgNAJgKQAJgLAPgBQANgCAMAJQALAIABANQACANgKAKQgJAKgPACIgDAAQgMAAgKgHg");
	this.shape_97.setTransform(-27,28.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EAF1FF").s().p("AgVAYQgLgIgBgMQgBgMAJgKQAJgKAOgBQANgCALAIQALAIABANQABALgJAKQgJAKgOABIgEAAQgLAAgJgGg");
	this.shape_98.setTransform(-27.1,27.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C9D6FF").s().p("AgUAeQgOgGgEgNQgEgMAJgNQAJgMAQgFQAPgEAOAGQAOAGAEANQAEAMgJANQgJAMgQAFQgHACgFAAQgJAAgIgEg");
	this.shape_99.setTransform(-8.2,37.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EAF1FF").s().p("AgTAeQgOgGgEgNQgEgMAJgNQAJgNAPgEQAPgFANAHQAOAGADANQAFAMgJANQgIANgQAEQgGACgFAAQgJAAgIgEg");
	this.shape_100.setTransform(-8.7,36.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C9D6FF").s().p("AgWAVQgJgJAAgMQAAgLAJgIQAJgJANAAQANAAAKAIQAJAJAAALQAAAMgJAJQgKAIgNAAQgMAAgKgIg");
	this.shape_101.setTransform(7.5,37.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EAF1FF").s().p("AgVAUQgKgJAAgLQAAgLAJgIQAKgIAMAAQANAAAKAIQAJAIAAALQABALgKAIQgJAIgOAAIAAABQgMAAgJgIg");
	this.shape_102.setTransform(7.6,37);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C9D6FF").s().p("AgQAiQgOgHgFgPQgGgOAHgOQAHgOAPgFQAOgFAOAHQAPAHAFAPQAFAOgGAOQgHAOgPAFQgGACgGAAQgIAAgJgEg");
	this.shape_103.setTransform(0.8,37.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EAF1FF").s().p("AgNAdQgOgGgFgOQgGgMAGgMQAFgMAOgEQANgDAOAGQAOAHAFANQAGANgGALQgFAMgOAEQgFABgGAAQgHAAgJgEg");
	this.shape_104.setTransform(1.4,36.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C9D6FF").s().p("AgBAnQgQAAgLgNQgLgMABgPQABgQAMgLQAMgLAPABQAQABALAMQALAMgBAPQgBARgMALQgLAJgOAAIgCAAg");
	this.shape_105.setTransform(-2.5,35);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EAF1FF").s().p("AgBAeQgOgBgKgJQgJgJAAgMQABgMALgIQAKgIAOAAQAOABAKAJQAKAKgBALQgBANgLAIQgJAHgNAAIgCAAg");
	this.shape_106.setTransform(-2.7,33.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#B2C1FF").s().p("AgWAhQgNgKgDgQQgDgPAKgOQAJgNAQgDQAPgDAOAKQAOAJACAQQADAPgJAOQgKAOgQACIgHABQgMAAgKgHg");
	this.shape_107.setTransform(18.5,37.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B2C1FF").s().p("AgYAjQgOgKgDgRQgEgRALgPQAKgOARgDQARgDAPAKQAOAKADASQADAQgKAPQgKAOgSADIgHABQgNAAgLgIg");
	this.shape_108.setTransform(7.6,37.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B2C1FF").s().p("AgTAdQgNgJgCgOQgCgNAIgMQAIgMAPgDQANgDAMAJQAMAJADAOQACANgIAMQgJAMgOADIgGABQgKAAgJgHg");
	this.shape_109.setTransform(32.6,32);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#B2C1FF").s().p("AgTAdQgMgJgDgOQgCgNAIgNQAIgMAPgCQANgCAMAIQAMAIADAPQACANgIAMQgIAMgPADIgGAAQgKAAgJgGg");
	this.shape_110.setTransform(27.2,32);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B2C1FF").s().p("AgWAgQgNgJgDgQQgDgPAJgOQAKgNAQgEQAPgCAOAJQANAKADAQQADAQgJANQgKAOgQACIgHABQgLAAgLgIg");
	this.shape_111.setTransform(31.2,28.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B2C1FF").s().p("AgbAoQgRgLgEgVQgDgTAMgQQAMgRAUgEQATgDAQALQARAMAEAUQADATgMARQgLARgUADIgJABQgPAAgMgJg");
	this.shape_112.setTransform(34.1,27.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B2C1FF").s().p("AgbAoQgRgLgDgVQgEgTAMgQQALgRAUgEQATgDARAMQARALADAUQAEAUgLAQQgNARgUADIgIABQgPAAgMgJg");
	this.shape_113.setTransform(35.2,22.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B2C1FF").s().p("AgKAqQgSgEgJgQQgJgQAFgRQAEgRAQgJQAQgJAQAFQASAFAJAPQAJAQgFAQQgEASgQAJQgKAGgLAAQgFAAgGgCg");
	this.shape_114.setTransform(-27.3,28.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B2C1FF").s().p("AgKAqQgSgFgJgPQgJgQAGgQQAEgRAQgJQAPgJAQAEQASAFAIAQQAJAPgEAQQgFASgPAJQgKAFgLAAQgFAAgGgBg");
	this.shape_115.setTransform(-37.9,12.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B2C1FF").s().p("AgYAuQgTgLgGgVQgGgTALgTQAKgTAUgGQAUgGATAKQASALAHAVQAGATgKATQgLATgVAGQgHACgHAAQgMAAgMgGg");
	this.shape_116.setTransform(-26.6,-23.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B2C1FF").s().p("AgOA5QgYgHgLgVQgNgVAHgWQAFgXAWgNQAVgMAWAGQAYAHAMAVQAMAVgHAWQgGAYgVAMQgOAIgPAAQgGAAgIgCg");
	this.shape_117.setTransform(-32.6,14.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B2C1FF").s().p("AgPA8QgZgHgNgWQgNgXAHgXQAHgZAWgNQAWgNAYAHQAZAHANAWQAMAWgGAYQgHAZgWANQgPAIgQAAQgHAAgIgCg");
	this.shape_118.setTransform(-34.9,4.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B2C1FF").s().p("AgLA6QgYgFgNgUQgOgUAFgYQAEgYAVgNQAUgOAXAFQAYAEAOAVQAOAUgFAXQgFAYgUAOQgQAKgRAAIgLgBg");
	this.shape_119.setTransform(6.2,-35.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#B2C1FF").s().p("AgMAuQgTgFgKgRQgKgSAFgSQAGgTARgKQARgKASAFQAUAFAKARQAKASgGASQgFATgRAKQgLAHgMAAQgGAAgHgCg");
	this.shape_120.setTransform(38,-9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B2C1FF").s().p("AgKApQgRgEgJgQQgIgPAEgQQAEgRAQgJQAPgJAQAFQARAFAIAPQAJAPgEAQQgEARgQAJQgKAGgLAAIgKgCg");
	this.shape_121.setTransform(28,-30.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B2C1FF").s().p("AgLAsQgSgFgJgQQgKgQAGgRQAFgTAQgJQAPgJASAEQASAFAJAQQAKAQgGARQgEATgQAJQgLAGgLAAQgFAAgHgBg");
	this.shape_122.setTransform(-2.7,34.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B2C1FF").s().p("AgMAyQgVgGgLgSQgKgTAGgTQAFgVASgLQATgKATAFQAUAGALASQALATgFATQgFAVgUAKQgMAIgNAAQgGAAgGgCg");
	this.shape_123.setTransform(-24,33.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#B2C1FF").s().p("AgMAyQgVgFgKgTQgLgTAFgTQAGgVASgLQATgKATAFQAVAGALASQAKATgFATQgFAVgTALQgMAHgNAAQgGAAgHgCg");
	this.shape_124.setTransform(-8.1,37.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B2C1FF").s().p("AgoApQgSgQAAgZQAAgYASgRQARgQAXgBQAYABASAQQARARAAAYQAAAZgRAQQgSASgYgBQgXABgRgSg");
	this.shape_125.setTransform(0.2,38);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#B2C1FF").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgQAVAAQAWAAAPAQQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape_126.setTransform(40.1,4.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B2C1FF").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgLAPAAQAQAAALALQAMALAAAPQAAAQgMALQgLALgQAAQgPAAgLgLg");
	this.shape_127.setTransform(39.2,11.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B2C1FF").s().p("AglAnQgQgRAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQARQgQAPgWAAQgVAAgQgPg");
	this.shape_128.setTransform(32.6,-24.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#B2C1FF").s().p("AgiAjQgPgOAAgVQAAgTAPgPQAOgPAUAAQAVAAAOAPQAPAPAAATQAAAVgPAOQgOAPgVAAQgUAAgOgPg");
	this.shape_129.setTransform(-0.2,-37.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B2C1FF").s().p("AgzA0QgWgVAAgfQAAgeAWgVQAWgWAdAAQAeAAAWAWQAVAVAAAeQAAAegVAWQgWAWgeAAQgdAAgWgWg");
	this.shape_130.setTransform(-24,-31.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#B2C1FF").s().p("AgnAoQgRgQAAgYQAAgXARgRQAQgQAXAAQAXAAARAQQARARAAAXQAAAYgRAQQgRARgXAAQgXAAgQgRg");
	this.shape_131.setTransform(-37.4,-6.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B2C1FF").s().p("Ag4A5QgXgXAAgiQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAigXAXQgYAXghAAQggAAgYgXg");
	this.shape_132.setTransform(-37.4,3.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#B2C1FF").s().p("AggAiQgPgOAAgUQAAgTAPgOQANgOATAAQAUAAANAOQAOAOABATQgBAUgOAOQgNAOgUAAQgTAAgNgOg");
	this.shape_133.setTransform(-32.7,-20.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B2C1FF").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape_134.setTransform(-31.2,-26.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#B2C1FF").s().p("AgKA+QgYgFgOgVQgOgVAFgYQAFgaAUgPQAUgPAXAFQAYAEAOAVQAOAVgFAZQgFAZgUAPQgQALgRAAIgKAAg");
	this.shape_135.setTransform(37.1,-17.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B2C1FF").s().p("AgkAlQgPgPAAgWQAAgUAPgQQAQgQAUAAQAWAAAPAQQAPAQABAUQgBAWgPAPQgPAQgWAAQgUAAgQgQg");
	this.shape_136.setTransform(13.3,-35.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#B2C1FF").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape_137.setTransform(6.8,-38.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#B2C1FF").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_138.setTransform(-17.7,-34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},8).to({state:[]},1).wait(2));

	// Ñëîé 9
	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#C9D6FF").s().p("AgNAoQgRgEgIgPQgIgPAGgQQAGgRAQgIQAQgJAQAFQARAEAIAPQAIAPgGAQQgGARgQAIQgKAGgKAAQgGAAgGgCg");
	this.shape_139.setTransform(-30.1,24.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EAF1FF").s().p("AgOAkQgPgDgHgNQgHgNAGgOQAGgPAQgIQAPgIAPADQAQADAHANQAHANgHAOQgGAPgPAIQgLAGgLAAIgJgBg");
	this.shape_140.setTransform(-31,23.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#C9D6FF").s().p("AgNAoQgRgEgIgPQgIgPAGgQQAGgRAQgIQAQgJAQAFQARAEAIAPQAIAPgGAQQgFARgRAIQgKAGgKAAQgGAAgGgCg");
	this.shape_141.setTransform(29.1,25.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EAF1FF").s().p("AgOAkQgQgDgHgNQgGgNAGgOQAGgPAPgIQAQgIAPADQAQADAGANQAHANgGAOQgGAPgQAIQgLAGgKAAIgJgBg");
	this.shape_142.setTransform(28.3,24.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#C9D6FF").s().p("AgHAjQgOgDgIgNQgIgMADgOQADgOAMgIQANgIANADQAPADAIAMQAIANgDANQgDAPgNAIQgJAGgKAAIgHgBg");
	this.shape_143.setTransform(-9.6,-33.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#C9D6FF").s().p("AgHAnQgQgEgJgNQgJgOADgPQAEgQANgJQAOgJAPADQAQAEAJANQAJAOgDAPQgEAQgNAJQgKAHgLAAIgIgBg");
	this.shape_144.setTransform(2.6,-33.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#C9D6FF").s().p("AgHAmQgOgDgHgNQgHgNADgPQADgPAMgJQAMgJANADQAOADAHANQAHANgDAOQgEAQgLAJQgKAGgJAAIgGAAg");
	this.shape_145.setTransform(-27.8,-21.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#C9D6FF").s().p("AgJAvQgUgEgLgRQgKgRAEgSQAEgUARgLQAQgLATAEQAUAFALARQAKAQgEATQgEAUgRALQgMAIgNAAIgKgCg");
	this.shape_146.setTransform(-33.7,6.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#C9D6FF").s().p("AgKAzQgVgEgMgTQgMgSAFgUQAEgVATgMQASgMAUAFQAVAEAMASQAMASgFAVQgEAVgSAMQgNAIgPAAIgLgBg");
	this.shape_147.setTransform(-37.8,4.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#C9D6FF").s().p("AgLA5QgWgFgNgUQgMgUAFgWQAFgYATgNQAUgNAVAEQAWAFANAUQAMAUgFAXQgFAXgUAOQgOAJgPAAIgLgBg");
	this.shape_148.setTransform(-36.7,-5.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#C9D6FF").s().p("AgTA6QgVgHgJgXQgJgWAIgXQAJgYAUgLQAVgMAUAHQAVAHAJAXQAJAWgIAXQgIAYgVAMQgNAHgMAAQgIAAgIgDg");
	this.shape_149.setTransform(-34.5,-16);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EAF1FF").s().p("AgRA1QgTgHgHgUQgIgTAIgVQAHgWATgLQARgLASAGQATAHAHAUQAIAUgIAUQgHAWgTALQgLAHgLAAQgHAAgGgCg");
	this.shape_150.setTransform(-36.4,-16.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#C9D6FF").s().p("AgaAZQgKgLABgOQABgPAMgKQALgKAOAAQAPAAAJALQAKALgBAOQgBAOgMALQgLAKgOAAQgPgBgJgKg");
	this.shape_151.setTransform(-30.5,-22.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#EAF1FF").s().p("AgaAYQgIgJACgNQACgNALgKQALgKAMAAQAOgBAIAKQAJAIgCAOQgCANgLAJQgLAKgNAAIgBABQgNAAgIgJg");
	this.shape_152.setTransform(-31.4,-23.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#C9D6FF").s().p("AgtAsQgPgQACgZQACgXATgSQATgTAXgBQAZgBAPAQQAQAQgCAZQgDAXgTASQgTASgXACIgEAAQgVAAgPgPg");
	this.shape_153.setTransform(-23.7,-28.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EAF1FF").s().p("AgrAqQgNgOADgWQADgVASgRQATgSAVgCQAXgDANAOQANAOgDAWQgDAWgTAQQgSASgVADIgHAAQgSAAgLgMg");
	this.shape_154.setTransform(-25.3,-30.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#C9D6FF").s().p("AggArQgVgKgEgVQgFgTAOgSQAOgSAYgFQAYgFAUAKQAUALAEAUQAFATgOATQgOASgYAFQgIACgHAAQgPAAgNgIg");
	this.shape_155.setTransform(-14.9,-34.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EAF1FF").s().p("AggAmQgUgJgDgRQgEgQAOgQQANgQAYgFQAWgFATAJQATAIAEASQAEAQgOAQQgOAQgXAFQgJACgHAAQgNAAgMgGg");
	this.shape_156.setTransform(-15.3,-36.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#C9D6FF").s().p("AgNAaQgKgGgEgMQgDgKAGgLQAFgKAMgEQAKgDALAGQAKAFAEAMQADAKgGALQgFAKgMAEIgIABQgGAAgHgDg");
	this.shape_157.setTransform(33.6,4.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#C9D6FF").s().p("AgXAyQgTgMgHgXQgHgWAKgUQAKgVAVgGQATgGAUAMQAUALAGAXQAHAWgKAVQgJAUgVAGQgIACgHAAQgMAAgNgHg");
	this.shape_158.setTransform(35.8,12.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#C9D6FF").s().p("AgYAzQgUgMgHgYQgHgWAKgWQAKgVAWgGQAUgHAVANQAUAMAHAXQAHAXgKAVQgLAVgVAHQgIACgHAAQgNAAgNgIg");
	this.shape_159.setTransform(37.4,1.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#C9D6FF").s().p("AgUA6QgWgIgJgXQgJgWAJgXQAJgYAVgLQAVgMAVAIQAWAIAJAXQAJAWgJAXQgJAYgWALQgMAHgMAAQgIAAgJgDg");
	this.shape_160.setTransform(-35.4,15.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#C9D6FF").s().p("AgmAoQgPgPAAgXQAAgVAQgRQAQgQAWgBQAWgBAQAPQAQAPgBAXQAAAVgQARQgQAQgWABIgCAAQgVAAgPgOg");
	this.shape_161.setTransform(31,21.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#C9D6FF").s().p("AgmAoQgPgQAAgVQAAgWAQgRQAQgQAWgBQAWgBAQAPQAPAQAAAVQgBAWgPARQgQARgWAAIgCAAQgVAAgPgOg");
	this.shape_162.setTransform(-31.7,17);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#C9D6FF").s().p("AglAoQgTgMgCgVQgDgUAQgQQAPgRAZgDQAXgDAUANQATAMACAVQADATgQARQgQARgYADIgJAAQgSAAgQgKg");
	this.shape_163.setTransform(-3.7,-35.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EAF1FF").s().p("AgjAjQgSgLgDgRQgCgRAPgOQAPgPAYgDQAXgCASAKQASALACARQACARgPAOQgPAPgYADIgIAAQgSAAgOgIg");
	this.shape_164.setTransform(-4,-37.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#C9D6FF").s().p("AgOAqQgRgGgIgRQgIgQAGgQQAGgRARgJQAQgIAQAGQASAGAIARQAIAQgGARQgHARgQAIQgJAEgKAAQgGAAgIgCg");
	this.shape_165.setTransform(33,-3.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#C9D6FF").s().p("AgNA7QgXgLgMgYQgMgYAGgYQAGgZAUgJQAVgKAWALQAXAJALAZQAMAYgGAYQgGAYgUAKQgKAFgLAAQgKAAgLgFg");
	this.shape_166.setTransform(34.8,-10.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EAF1FF").s().p("AgLAzQgTgJgLgWQgKgVAFgVQAFgVARgIQARgJATAKQATAJALAWQAKAVgFAUQgEAWgSAIQgIAEgIAAQgJAAgLgFg");
	this.shape_167.setTransform(36.8,-10.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#C9D6FF").s().p("AgZAcQgMgLAAgQQgBgPALgLQALgMAQAAQAPgBALALQAMALAAAQQABAOgLAMQgLALgQABIgBABQgOAAgLgLg");
	this.shape_168.setTransform(30.2,-16);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#C9D6FF").s().p("AghAkQgQgOgBgVQgBgUAOgPQAOgQAWAAQAUAAAPAOQAPAPACAVQABAUgOAPQgOAPgVABQgUAAgQgPg");
	this.shape_169.setTransform(30.6,-19.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#EAF1FF").s().p("AAEAxQgTgBgPgPQgQgOgCgUQgCgUANgOQANgOAUABQATABAQAOQAQAPACATQACAUgNAOQgNAOgTAAIgCAAg");
	this.shape_170.setTransform(31.9,-20.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#C9D6FF").s().p("AgcApQgRgMgEgVQgFgUANgRQAMgRAVgEQAUgDARAMQASANAEAVQAEAUgMAQQgMASgVADIgJABQgPAAgOgKg");
	this.shape_171.setTransform(25.1,-26.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#EAF1FF").s().p("AgYAjQgRgLgEgTQgFgSAKgPQAKgOAUgCQASgCARAMQARALAEATQAFASgKAPQgKAOgUACIgFABQgPAAgPgLg");
	this.shape_172.setTransform(26.3,-28.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#C9D6FF").s().p("AgLAyQgVgCgLgRQgMgQAFgUQAFgVASgNQATgNAUADQAVADALAQQAMAQgFAUQgFAVgSAMQgQALgQAAIgHAAg");
	this.shape_173.setTransform(22.3,29);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#EAF1FF").s().p("AgMAtQgUgBgKgOQgKgOAGgSQAGgSARgNQARgMATABQATABALAOQAJAOgFASQgGASgRANQgQALgRAAIgDAAg");
	this.shape_174.setTransform(21.1,27.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#C9D6FF").s().p("AgSArQgTgGgIgRQgHgRAIgRQAIgRATgJQASgIATAGQASAGAIARQAHARgIARQgIASgTAIQgLAFgKAAQgIAAgHgDg");
	this.shape_175.setTransform(14.2,33.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EAF1FF").s().p("AgTAnQgRgFgHgOQgGgPAIgPQAIgQASgIQARgIASAEQASAFAGAOQAHAPgJAPQgIAQgSAIQgNAFgKAAIgMgBg");
	this.shape_176.setTransform(13.5,31.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#C9D6FF").s().p("AgdAcQgNgLAAgQQAAgPAMgMQANgLARgBQARAAANALQANAMAAAPQAAAQgMALQgNALgSABQgQAAgNgLg");
	this.shape_177.setTransform(5.6,34.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#EAF1FF").s().p("AgcAYQgNgKAAgNQAAgNANgKQAMgKAQAAQAQAAANAJQAMAKABANQAAANgNAKQgMAKgRAAQgQAAgMgJg");
	this.shape_178.setTransform(5.6,33.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#C9D6FF").s().p("AgdAaQgMgKAAgQQgBgOANgLQAMgKARgBQARAAAMAKQANALAAAPQAAAPgMALQgMAKgSABQgQAAgNgLg");
	this.shape_179.setTransform(-1.5,33.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EAF1FF").s().p("AgbAXQgMgKgBgNQAAgMAMgJQAMgJAQgBQARAAAMAJQALAJABANQAAAMgMAKQgMAJgRAAIAAABQgQAAgLgJg");
	this.shape_180.setTransform(-1.6,32.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#C9D6FF").s().p("AggAnQgRgMgDgUQgDgSAOgQQANgQAWgEQAVgDASAMQARAMADATQADATgOAQQgNAQgWADIgJABQgQAAgOgJg");
	this.shape_181.setTransform(-8.7,35.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#EAF1FF").s().p("AgfAiQgQgKgDgRQgCgQANgOQANgOAVgDQAUgDARAKQARAKACARQACAQgNANQgNAOgVADIgJABQgPAAgNgHg");
	this.shape_182.setTransform(-9,33.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#C9D6FF").s().p("AgTAlQgPgIgGgRQgGgPAIgQQAIgQARgFQAQgEAQAIQAQAIAGARQAGAPgIAQQgIAPgRAGQgHABgGAAQgJAAgLgFg");
	this.shape_183.setTransform(-18,33.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EAF1FF").s().p("AgQAgQgPgIgGgPQgGgOAGgNQAHgNAQgEQAPgEAPAIQAQAIAGAPQAGAOgHANQgHANgPAEIgKABQgKAAgLgFg");
	this.shape_184.setTransform(-17.3,32);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#C9D6FF").s().p("AgkAnQgSgRgBgWQgCgXAPgRQAPgQAYABQAWAAASARQARAQACAXQACAXgPAQQgQAQgXAAQgWAAgSgRg");
	this.shape_185.setTransform(-24.3,25.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EAF1FF").s().p("AAHAzQgUgCgRgQQgRgPgDgVQgDgVANgOQANgOAVACQAVACARAQQARAQADAUQACAVgNAOQgMAMgSAAIgEAAg");
	this.shape_186.setTransform(-22.9,24);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#C9D6FF").s().p("AgVAxQgWgKgJgVQgKgVAJgUQAJgUAWgHQAWgIAWAKQAWAKAJAVQAKAVgKAUQgJAUgWAHQgJADgKAAQgLAAgNgFg");
	this.shape_187.setTransform(17,-31.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EAF1FF").s().p("AgSAqQgVgKgKgTQgJgRAHgSQAIgRAVgGQAUgFAUAJQAWAKAJATQAKASgIARQgHARgVAGQgHACgIAAQgMAAgOgGg");
	this.shape_188.setTransform(17.8,-33.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#C9D6FF").s().p("AgDA3QgbgCgSgRQgSgSABgWQACgXAVgPQAUgOAaACQAcACASASQASARgCAWQgCAXgUAPQgSANgXAAIgGgBg");
	this.shape_189.setTransform(7.9,-36.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#EAF1FF").s().p("AgDAvQgagCgRgPQgSgQACgSQABgUAUgMQAUgMAZACQAaACARAPQASAPgCATQgBATgUANQgRALgWAAIgGgBg");
	this.shape_190.setTransform(8,-38.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#B2C1FF").s().p("AgrA/QgagSgGggQgFgeASgaQASgaAggGQAegFAaASQAaASAGAfQAFAfgSAaQgSAaggAGIgNABQgXAAgUgOg");
	this.shape_191.setTransform(17.4,34.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#B2C1FF").s().p("AgoA7QgYgRgGgdQgFgdARgYQARgYAegGQAcgFAYARQAYARAGAeQAFAcgRAYQgRAZgeAFIgNABQgVAAgSgNg");
	this.shape_192.setTransform(26.7,27.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#B2C1FF").s().p("AgoA7QgZgRgFgeQgFgcARgYQARgYAdgGQAdgFAYARQAZARAFAdQAFAdgRAYQgRAZgeAFIgNABQgVAAgSgNg");
	this.shape_193.setTransform(30.6,22.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#B2C1FF").s().p("AgTBLQgegJgQgbQgQgcAIgeQAIgfAcgQQAbgPAeAHQAfAJAQAbQAQAcgJAeQgIAfgbAPQgTALgUAAQgJAAgKgCg");
	this.shape_194.setTransform(-29,27.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#B2C1FF").s().p("AgSBIQgegIgQgaQgPgbAIgdQAIgeAagQQAbgPAdAIQAeAIAQAbQAPAagIAdQgIAegaAQQgSAKgTAAQgJAAgKgDg");
	this.shape_195.setTransform(-35.4,17.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#B2C1FF").s().p("AgfA7QgZgNgHgbQgIgaANgYQAOgYAagIQAagIAYANQAYAOAIAaQAIAagNAYQgOAZgaAIQgKACgJAAQgQAAgPgIg");
	this.shape_196.setTransform(-26.4,-21.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#B2C1FF").s().p("AgLAsQgSgFgKgQQgKgQAFgSQAFgSARgKQARgJARAFQASAFAKAQQAJAQgFASQgEASgRAKQgLAGgLAAQgGAAgGgCg");
	this.shape_197.setTransform(33,3.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#B2C1FF").s().p("AgOA3QgXgGgLgUQgMgVAGgWQAHgXAUgLQAUgMAVAGQAYAHALAUQAMAUgGAVQgHAYgTALQgOAIgPAAQgGAAgIgCg");
	this.shape_198.setTransform(-30.3,16.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#B2C1FF").s().p("AgOA6QgYgGgNgWQgMgVAGgXQAHgZAVgMQAVgNAXAHQAZAGAMAWQAMAVgGAXQgGAZgWAMQgOAIgPAAQgHAAgIgCg");
	this.shape_199.setTransform(-32.5,6.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#B2C1FF").s().p("AgQBAQgbgHgOgYQgNgYAGgZQAHgbAYgOQAYgNAaAHQAaAHAOAYQAOAYgHAZQgHAbgYAOQgPAJgRAAQgIAAgJgDg");
	this.shape_200.setTransform(-20.8,-27.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#B2C1FF").s().p("AgKA4QgYgEgNgUQgNgUAEgWQAFgYAUgNQAUgNAWAFQAYAEANAUQANAUgEAWQgFAXgUAOQgPAJgQAAIgLgBg");
	this.shape_201.setTransform(5.4,-30.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#B2C1FF").s().p("AgQBAQgagIgOgXQgNgYAHgZQAHgbAXgNQAYgOAZAIQAaAGAOAYQANAYgHAZQgGAbgYANQgQAJgQAAQgIAAgJgCg");
	this.shape_202.setTransform(30.7,-13.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#B2C1FF").s().p("AgQBAQgbgHgNgYQgOgYAHgZQAHgaAYgOQAXgOAaAHQAaAHAOAYQAOAYgHAZQgHAbgYANQgQAJgQAAQgIAAgJgCg");
	this.shape_203.setTransform(33.6,-4.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#B2C1FF").s().p("AgQA+QgZgHgOgXQgNgXAHgZQAHgaAXgNQAXgNAZAHQAZAHAOAWQANAXgHAZQgHAagXANQgPAJgQAAQgIAAgJgCg");
	this.shape_204.setTransform(25.5,-27.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#B2C1FF").s().p("AgQA+QgZgHgOgXQgNgXAHgZQAHgZAXgOQAXgNAZAHQAZAHAOAXQANAXgHAZQgHAZgXAOQgPAIgQAAQgIAAgJgCg");
	this.shape_205.setTransform(23.7,-23.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#B2C1FF").s().p("AgQA9QgZgGgNgXQgNgXAHgYQAHgaAWgNQAXgNAYAHQAZAHAOAWQANAXgHAYQgHAagXANQgOAJgRAAQgHAAgJgDg");
	this.shape_206.setTransform(21.5,28.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#B2C1FF").s().p("AgPA5QgXgGgNgVQgMgWAGgWQAHgYAVgMQAWgNAWAGQAYAHANAVQAMAVgHAXQgGAYgVAMQgOAJgPAAQgHAAgJgDg");
	this.shape_207.setTransform(13.5,32.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#B2C1FF").s().p("AgOA5QgYgGgMgVQgNgVAGgXQAHgYAVgMQAVgNAXAGQAYAHAMAVQANAVgHAXQgGAYgVAMQgOAJgPAAQgHAAgIgDg");
	this.shape_208.setTransform(-1.3,33.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#B2C1FF").s().p("AgRBBQgbgHgOgYQgOgYAIgaQAGgbAZgOQAYgOAbAHQAaAHAOAYQAOAYgHAbQgHAbgYAOQgQAJgRAAQgIAAgKgDg");
	this.shape_209.setTransform(-23.3,24.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#B2C1FF").s().p("AgOA3QgXgGgLgUQgMgVAGgWQAGgXAVgLQAUgMAWAGQAXAGALAVQAMAUgGAWQgGAXgUALQgOAIgPAAQgGAAgIgCg");
	this.shape_210.setTransform(-17.8,33.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#B2C1FF").s().p("AgOA3QgXgGgMgVQgLgUAGgWQAGgXAVgLQAUgMAVAGQAXAGAMAUQANAVgHAWQgGAWgUAMQgNAIgPAAQgGAAgJgCg");
	this.shape_211.setTransform(-20.8,36.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#B2C1FF").s().p("AgUBOQgggIgRgdQgQgdAIgfQAJghAdgRQAcgQAgAIQAgAIARAeQARAdgJAfQgIAggdARQgUALgUAAQgKAAgLgDg");
	this.shape_212.setTransform(-8.4,36);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#B2C1FF").s().p("Ag3A3QgXgWABghQgBggAXgXQAXgXAgAAQAhAAAWAXQAXAXAAAgQAAAhgXAWQgWAYghAAQggAAgXgYg");
	this.shape_213.setTransform(4.4,36.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#B2C1FF").s().p("AgyAzQgVgVAAgeQAAgdAVgVQAVgVAdAAQAeAAAVAVQAVAVAAAdQAAAegVAVQgVAVgeAAQgdAAgVgVg");
	this.shape_214.setTransform(37.4,1.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#B2C1FF").s().p("AgyAzQgVgVAAgeQAAgdAVgVQAVgVAdAAQAeAAAVAVQAVAVAAAdQAAAegVAVQgVAVgeAAQgdAAgVgVg");
	this.shape_215.setTransform(35.4,12.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#B2C1FF").s().p("AgtAuQgSgTgBgbQABgaASgTQAUgSAZAAQAbAAATASQASATAAAaQAAAbgSATQgTASgbAAQgZAAgUgSg");
	this.shape_216.setTransform(31,-19.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#B2C1FF").s().p("Ag4A5QgYgYAAghQAAghAYgXQAXgYAhAAQAhAAAYAYQAYAXAAAhQAAAigYAXQgXAYgiAAQghAAgXgYg");
	this.shape_217.setTransform(-3.7,-34.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#B2C1FF").s().p("Ag5A5QgYgXAAgiQAAghAYgYQAYgXAhAAQAiAAAYAXQAYAYgBAhQABAigYAXQgYAYgiAAQghAAgYgYg");
	this.shape_218.setTransform(-23.8,-28.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#B2C1FF").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAhgXAWQgWAXghAAQgfAAgXgXg");
	this.shape_219.setTransform(-36.8,-4.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#B2C1FF").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAhAAAWAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_220.setTransform(-36.8,5.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#B2C1FF").s().p("AgxAyQgVgUAAgeQAAgcAVgVQAVgVAcAAQAeAAAUAVQAVAVAAAcQAAAegVAUQgUAVgeAAQgcAAgVgVg");
	this.shape_221.setTransform(-32.5,-13.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#B2C1FF").s().p("AgiAjQgOgPAAgUQAAgUAOgOQAOgOAUAAQAUAAAPAOQAPAOAAAUQAAAUgPAPQgPAPgUAAQgUAAgOgPg");
	this.shape_222.setTransform(-30.8,-21.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#B2C1FF").s().p("AgxAyQgVgUAAgeQAAgcAVgVQAUgVAdAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAQgcAAgVgVg");
	this.shape_223.setTransform(-35,-16.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#B2C1FF").s().p("AgNBLQgdgFgRgaQgRgaAFgeQAGgfAZgTQAZgSAdAFQAdAGARAaQARAagGAeQgFAfgZATQgTAOgWAAIgNgCg");
	this.shape_224.setTransform(35.4,-9.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#B2C1FF").s().p("Ag3A4QgXgXAAghQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXg");
	this.shape_225.setTransform(16.6,-30.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#B2C1FF").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAkAAAYAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_226.setTransform(8,-35.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#B2C1FF").s().p("Ag6A7QgYgZAAgiQAAghAYgZQAZgYAhAAQAjAAAYAYQAYAZAAAhQAAAigYAZQgYAYgjAAQghAAgZgYg");
	this.shape_227.setTransform(-15,-33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139}]},7).to({state:[]},1).wait(3));

	// Ñëîé 8
	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#C9D6FF").s().p("AgbAcQgNgMAAgQQAAgPANgMQAMgLAPAAQARAAALALQAMAMAAAPQAAAQgMAMQgLALgRAAQgPAAgMgLg");
	this.shape_228.setTransform(27.3,21.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#C9D6FF").s().p("AgIAmQgRgEgIgOQgJgOAEgPQAEgQAOgIQAOgIAPAEQARAEAIAOQAJAOgEAPQgDAQgPAIQgKAGgKAAIgJgCg");
	this.shape_229.setTransform(29.5,15.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#EAF1FF").s().p("AgHAhQgPgEgKgMQgIgNADgMQAEgOANgHQAOgGAOADQAQAEAIANQAJAMgDAMQgDAOgOAHQgIAEgKAAIgKgBg");
	this.shape_230.setTransform(29.8,14.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#C9D6FF").s().p("AgRA4QgYgKgKgXQgKgXAHgWQAIgXAVgKQAVgKAWAJQAXAKALAXQAKAXgHAWQgIAYgVAKQgMAFgLAAQgKAAgKgFg");
	this.shape_231.setTransform(23.4,18.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#EAF1FF").s().p("AgUAuQgUgGgIgRQgIgSAIgSQAJgTAUgKQAUgJAUAGQAUAGAIARQAIASgIASQgJATgUAKQgNAGgLAAQgIAAgIgDg");
	this.shape_232.setTransform(22.2,16.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#C9D6FF").s().p("AAAAfQgOAAgKgKQgJgKAAgMQACgNAJgJQAKgIANAAQAOABAKAKQAJAJAAAMQgBANgLAJQgIAJgNAAIgBgBg");
	this.shape_233.setTransform(1.8,32.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#EAF1FF").s().p("AAAAbQgOgBgJgIQgJgIABgLQABgLAJgIQAKgGAMAAQANAAAJAJQAKAJgBAKQgBALgJAHQgJAHgMAAIgBAAg");
	this.shape_234.setTransform(1.8,31);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#C9D6FF").s().p("AgdAcQgMgLgBgQQAAgPAMgMQANgLARgBQAQgBANAMQANALAAAQQABAPgMAMQgMALgSABIgBAAQgQAAgNgLg");
	this.shape_235.setTransform(8.8,30.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#EAF1FF").s().p("AgcAYQgLgKgBgNQAAgNALgKQAMgKARAAQARAAAMAJQAMAJAAAOQABANgMAKQgMAJgRABIgBAAQgQAAgMgJg");
	this.shape_236.setTransform(8.7,29.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#C9D6FF").s().p("AgcAvQgVgJgGgVQgGgTAMgUQAMgTAXgHQAWgHAVAJQAVAJAGAVQAGATgMAUQgMATgXAHQgKADgJAAQgMAAgMgFg");
	this.shape_237.setTransform(14.3,25.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#EAF1FF").s().p("AgcApQgTgHgGgRQgFgRAMgRQAMgRAWgHQAWgHATAHQAUAIAFARQAFARgMARQgMASgWAGQgLADgJAAQgLAAgKgEg");
	this.shape_238.setTransform(13.6,23.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#C9D6FF").s().p("AglAzQgVgQgEgaQgEgZAQgVQAPgVAagEQAagEAVAQQAVAQAEAaQAEAZgQAVQgQAVgaAEIgJABQgUAAgRgNg");
	this.shape_239.setTransform(30.8,11.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#C9D6FF").s().p("AgJAmQgQgEgIgOQgIgOAEgPQAEgQAOgJQAPgIAOAEQAQAFAIAOQAJAOgFAPQgEAQgOAIQgKAGgKAAQgEAAgFgCg");
	this.shape_240.setTransform(28.3,-4.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#C9D6FF").s().p("AgLAwQgUgGgKgSQgKgRAFgTQAFgUASgJQARgKATAEQAUAGAKASQAKARgGATQgFATgRAKQgMAHgNAAQgFAAgGgBg");
	this.shape_241.setTransform(28.3,3.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#C9D6FF").s().p("AgNA2QgWgGgLgVQgMgUAGgVQAFgWAUgMQAUgLAUAGQAXAHALAUQAMAUgFAVQgHAWgTAMQgNAHgNAAQgHAAgIgCg");
	this.shape_242.setTransform(32.3,2.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#EAF1FF").s().p("AgPAwQgUgIgJgTQgJgTAHgTQAGgUATgJQASgIATAHQATAIAJATQAKATgHATQgHAUgSAIQgKAFgLAAQgHAAgJgDg");
	this.shape_243.setTransform(34.5,1.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#C9D6FF").s().p("AgMAnQgRgFgIgQQgIgPAGgQQAFgQAQgHQAQgIAPAGQARAFAIAQQAIAQgGAPQgFAQgQAIQgJAEgJAAQgGAAgHgDg");
	this.shape_244.setTransform(-16.8,27.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#EAF1FF").s().p("AgKAhQgRgFgHgOQgJgOAFgMQAFgOAPgGQAPgGAOAGQAQAFAJAOQAHANgEANQgFAOgPAGQgHADgIAAQgHAAgHgDg");
	this.shape_245.setTransform(-16.3,25.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#C9D6FF").s().p("AgDAwQgVgCgNgPQgOgQACgSQACgUAPgNQAQgNAUACQAVACANAPQAOAPgCATQgCAUgQANQgOALgRAAIgEAAg");
	this.shape_246.setTransform(-5,30.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#EAF1FF").s().p("AgDApQgUgCgMgNQgNgNABgQQABgRAPgLQAPgLATACQAUACANANQANANgBAQQgCARgPALQgMAJgRAAIgFAAg");
	this.shape_247.setTransform(-4.9,28.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#C9D6FF").s().p("AgMA4QgXgFgOgUQgNgVAFgWQAGgXAUgNQAVgNAXAFQAXAGAOAUQANAUgFAWQgFAYgVANQgPAJgQAAQgGAAgHgCg");
	this.shape_248.setTransform(-26,23.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#C9D6FF").s().p("AgVA2QgXgKgJgWQgKgWAJgVQAJgWAXgKQAWgJAWAJQAXAKAJAWQAKAVgJAWQgJAWgXAKQgLAEgLAAQgLAAgLgEg");
	this.shape_249.setTransform(-21.5,21.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#EAF1FF").s().p("AgSAuQgVgJgKgTQgKgTAIgTQAHgTAVgHQAVgHAVAIQAWAJAJAUQAKATgIATQgHATgVAHQgJADgKAAQgLAAgMgFg");
	this.shape_250.setTransform(-20.7,19.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#C9D6FF").s().p("AggAyQgWgOgFgYQgFgYAOgVQAOgUAYgFQAXgGAWAOQAVAOAFAZQAGAXgOAVQgOAVgYAFIgNACQgQAAgQgLg");
	this.shape_251.setTransform(31.6,-9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#EAF1FF").s().p("AgbArQgUgNgHgWQgGgVAMgSQALgSAXgDQAWgDAUANQAVANAGAWQAGAVgMASQgLASgXADIgIABQgRAAgRgLg");
	this.shape_252.setTransform(32.8,-11.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#C9D6FF").s().p("AgHAtQgTgDgLgQQgMgPAEgSQADgSAQgLQAPgLATADQATADALAQQALAPgDASQgDASgQALQgMAJgOAAIgIgBg");
	this.shape_253.setTransform(23.5,-14.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#EAF1FF").s().p("AgGAnQgSgEgLgNQgLgNADgPQACgRAPgIQAPgKASADQASAEALANQALAOgCAOQgDARgPAIQgLAHgNAAIgJAAg");
	this.shape_254.setTransform(23.7,-16.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#C9D6FF").s().p("AgRAiQgOgIgGgPQgFgOAHgPQAIgOAQgFQAOgEAPAIQAPAIAFAPQAFAPgHAOQgHAOgQAEQgGACgGAAQgJAAgJgFg");
	this.shape_255.setTransform(17.6,-21.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#EAF1FF").s().p("AgOAdQgOgHgGgOQgGgNAGgMQAHgMAOgDQAOgEAOAIQAPAHAFAOQAGANgHAMQgGAMgPADIgJABQgIAAgKgFg");
	this.shape_256.setTransform(18.3,-22.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#C9D6FF").s().p("AADA6QgXgDgRgTQgSgTgCgWQgBgZAQgPQAQgPAYADQAXADASASQARAUACAWQABAZgQAOQgOANgTAAIgHAAg");
	this.shape_257.setTransform(25.3,-19.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#EAF1FF").s().p("AAGA1QgVgEgRgSQgRgSgCgVQgDgWAOgNQANgNAWAEQAVAEARASQARASACAVQADAWgOANQgKAKgQAAIgJgBg");
	this.shape_258.setTransform(26.8,-21);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#C9D6FF").s().p("AgNAtQgXgHgLgSQgMgSAGgSQAGgUAUgHQAUgIAWAHQAWAHAMATQALARgGATQgHASgUAJQgKAEgLAAQgJAAgKgEg");
	this.shape_259.setTransform(8.9,-24);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#EAF1FF").s().p("AgNArQgVgHgLgSQgLgRAGgRQAGgRATgIQATgHAUAGQAVAHALARQALASgGARQgFARgUAIQgKAEgLAAQgIAAgKgDg");
	this.shape_260.setTransform(9.4,-25.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#C9D6FF").s().p("AgTA9QgdgKgOgYQgPgZAIgYQAIgZAbgLQAagMAcAKQAdAKAOAYQAPAYgIAZQgIAZgaALQgOAGgPAAQgMAAgOgEg");
	this.shape_261.setTransform(16.6,-26.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#EAF1FF").s().p("AgQA0QgcgJgPgWQgOgVAHgVQAHgVAYgJQAZgJAbAJQAbAJAPAWQAPAUgHAWQgHAWgYAIQgMAEgNAAQgNAAgOgEg");
	this.shape_262.setTransform(17.3,-29.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#C9D6FF").s().p("AgJAsQgYgGgNgRQgOgQAEgSQAEgRAUgKQAUgIAWAGQAYAFANARQAOAQgEARQgEATgUAIQgMAGgNAAQgIAAgJgCg");
	this.shape_263.setTransform(-0.9,-26.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#EAF1FF").s().p("AgKAtQgVgFgMgRQgMgQAEgSQAEgTATgKQASgJAVAFQAVAFANARQAMARgFARQgEATgTAJQgMAHgNAAQgGAAgIgCg");
	this.shape_264.setTransform(-1,-27.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#C9D6FF").s().p("AAAAtQgTAAgNgOQgOgOABgRQABgSANgOQAOgNASABQATABAOANQANAOgBARQAAATgOAMQgNANgSAAIgBAAg");
	this.shape_265.setTransform(-0.9,-31.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#EAF1FF").s().p("AAAAnQgSgBgNgLQgNgMABgPQAAgPANgMQANgLASAAQASABANAMQANALgBAPQAAAQgNALQgNALgRAAIgBAAg");
	this.shape_266.setTransform(-0.9,-33.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#C9D6FF").s().p("AgFA4QgXgDgOgSQgOgSADgXQACgWASgPQASgPAVADQAXACAOATQAOASgCAWQgDAYgSAOQgPAMgTAAIgFAAg");
	this.shape_267.setTransform(-32.9,4.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#EAF1FF").s().p("AgFA2QgTgCgMgSQgMgRADgVQACgXAQgOQAPgOASACQATADAMARQAMARgCAVQgDAXgPAOQgOAMgPAAIgFAAg");
	this.shape_268.setTransform(-35.1,4.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#C9D6FF").s().p("AgsArQgTgSAAgZQABgZASgSQATgSAaABQAaAAATASQASASAAAYQAAAagTASQgTASgaAAQgagBgSgSg");
	this.shape_269.setTransform(2.5,27);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#EAF1FF").s().p("AAAA0QgZAAgRgPQgSgQAAgVQAAgVASgQQASgPAYAAQAaABASAPQARAQAAAUQAAAWgSAPQgSAQgYAAIgBgBg");
	this.shape_270.setTransform(2.5,24.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#C9D6FF").s().p("AgLA1QgUgFgMgTQgMgSAGgVQAFgWARgNQATgMAUAFQAVAEALAUQAMASgFAVQgGAWgSAMQgNAJgOAAIgLgBg");
	this.shape_271.setTransform(-27.6,12.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#C9D6FF").s().p("AgLA1QgVgFgLgSQgLgTAFgVQAFgWASgNQASgMAUAFQAVAEALATQALATgFAVQgFAWgSAMQgNAKgOAAIgLgCg");
	this.shape_272.setTransform(-32.9,15.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#C9D6FF").s().p("AgLA1QgVgFgLgSQgLgTAFgVQAFgWASgNQASgMAUAFQAVAEALATQALATgFAVQgFAWgSANQgNAIgOAAIgLgBg");
	this.shape_273.setTransform(-27.7,2.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#C9D6FF").s().p("AgMA8QgagGgOgVQgPgWAGgYQAFgZAXgNQAWgOAYAGQAaAGAPAVQAOAWgGAYQgFAZgXANQgPAKgSAAQgGAAgHgCg");
	this.shape_274.setTransform(-10.1,25.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#EAF1FF").s().p("AgKAzQgZgFgOgTQgPgTAFgUQAFgWAVgLQAVgLAXAGQAZAFAOATQAPATgFAUQgFAVgVALQgOAIgQAAQgGAAgIgCg");
	this.shape_275.setTransform(-9.6,23.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#C9D6FF").s().p("AgFA4QgXgDgOgRQgOgTACgWQADgXASgPQASgPAVADQAXACAOATQAOATgCAWQgDAXgSAOQgPAMgTAAIgFAAg");
	this.shape_276.setTransform(-31.9,-4.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#EAF1FF").s().p("AgFA2QgTgCgMgRQgMgSACgVQADgWAPgPQAQgOASACQATADAMARQAMARgDAWQgCAWgQAOQgNAMgPAAIgFAAg");
	this.shape_277.setTransform(-34.1,-4.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#C9D6FF").s().p("AgvA6QgWgTgCgeQgCgdAUgYQAUgYAegEQAdgDAWASQAWATACAeQACAdgUAYQgUAXgeAEIgJABQgYAAgSgPg");
	this.shape_278.setTransform(-30.3,-14);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#EAF1FF").s().p("AgtA3QgTgPAAgcQAAgaATgXQATgXAagFQAbgFATAPQATAQAAAbQAAAbgTAXQgTAXgbAFIgLABQgUAAgOgMg");
	this.shape_279.setTransform(-32.5,-15.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#C9D6FF").s().p("AggAuQgVgMgFgWQgEgVANgTQAOgTAYgGQAXgFAVAMQAVAMAEAWQAFAVgOATQgNAUgYAFQgIACgGAAQgQAAgOgJg");
	this.shape_280.setTransform(-13.9,-23);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#EAF1FF").s().p("AgbAmQgSgKgEgRQgDgRALgPQAMgQAVgEQATgFARAJQASAKADARQAEARgMAQQgLAPgVAFIgLABQgNAAgMgGg");
	this.shape_281.setTransform(-15.2,-25.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#C9D6FF").s().p("AgRA6QgZgGgMgWQgLgWAHgXQAIgYAWgNQAWgMAYAHQAZAGALAWQANAWgIAXQgHAYgYANQgOAIgOAAQgIAAgJgDg");
	this.shape_282.setTransform(-22.2,-23);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#EAF1FF").s().p("AgTA0QgWgEgKgUQgKgSAHgUQAJgWAWgMQAVgMAWAFQAWAEAKAUQALASgJAUQgHAWgXAMQgPAIgOAAIgOgBg");
	this.shape_283.setTransform(-23.5,-25);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#C9D6FF").s().p("AgUBHQgdgIgPgbQgPgbAJgdQAIgdAbgPQAbgPAdAJQAdAJAPAbQAPAbgJAcQgJAegaAOQgRAJgSAAQgKAAgLgDg");
	this.shape_284.setTransform(-9.7,-28.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#EAF1FF").s().p("AgZBCQgdgGgMgYQgNgXALgaQAKgcAcgPQAcgPAcAGQAcAGANAXQANAYgLAaQgKAbgcAQQgUALgUAAQgIAAgIgCg");
	this.shape_285.setTransform(-10.7,-31);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#C9D6FF").s().p("AgJA7QgagEgPgVQgQgUAFgYQAEgYAVgPQAVgOAZAFQAaAEAPAVQAQAUgFAYQgEAYgVAPQgQAKgTAAIgLgBg");
	this.shape_286.setTransform(7.4,-32.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#EAF1FF").s().p("AgIAzQgZgFgPgRQgPgSAEgUQAEgVAUgMQAUgMAYAEQAZAFAPASQAPARgEAUQgEAVgUAMQgOAJgSAAIgMgBg");
	this.shape_287.setTransform(7.8,-34.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#B2C1FF").s().p("AgxBHQgegUgGgkQgGgiAVgeQAUgeAkgGQAigGAeAVQAdAUAHAkQAGAigVAeQgVAdgjAHQgJABgHAAQgZAAgXgQg");
	this.shape_288.setTransform(14.3,26.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#B2C1FF").s().p("AgxBHQgdgUgGgkQgHgiAVgeQAUgdAkgGQAigHAeAVQAdAUAGAkQAHAigVAeQgUAdgkAGQgIACgHAAQgaAAgXgQg");
	this.shape_289.setTransform(24.7,20.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#B2C1FF").s().p("AgTBMQgggIgQgdQgQgcAIgeQAIggAdgRQAcgQAeAJQAgAIARAdQAQAcgJAeQgIAggcARQgTAKgUAAQgJAAgLgDg");
	this.shape_290.setTransform(-17.4,25.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#B2C1FF").s().p("AgTBMQgggIgQgdQgQgcAIgeQAIggAdgRQAcgQAeAJQAgAIARAcQAQAdgJAeQgIAggcAQQgTALgUAAQgJAAgLgDg");
	this.shape_291.setTransform(-26.4,24.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#B2C1FF").s().p("AgVBSQgigJgRgfQgSgeAJghQAJgiAegRQAfgSAhAJQAiAJARAfQASAegJAhQgJAigeARQgVAMgVAAQgKAAgMgDg");
	this.shape_292.setTransform(-31.3,15.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#B2C1FF").s().p("AgSBJQgegJgQgaQgQgbAIgeQAJgdAagQQAbgQAeAIQAeAIAPAbQAQAbgIAdQgIAfgbAPQgSALgUAAQgIAAgKgDg");
	this.shape_293.setTransform(-28.6,-10.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#B2C1FF").s().p("AgRBCQgbgHgOgZQgOgYAHgbQAHgbAZgOQAYgOAbAHQAbAHAOAZQAOAYgHAbQgHAbgZAOQgQAJgRAAQgIAAgKgCg");
	this.shape_294.setTransform(22,16.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#B2C1FF").s().p("AgPA9QgagGgNgXQgOgXAIgYQAHgaAWgNQAXgNAYAHQAaAHANAWQAOAXgIAYQgGAagXANQgPAJgQAAQgIAAgIgDg");
	this.shape_295.setTransform(-26.6,13.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#B2C1FF").s().p("AgSBIQgegIgQgbQgPgaAIgdQAIgeAagPQAcgQAcAIQAeAIAPAbQAQAbgIAcQgJAegaAPQgRAKgTAAQgJAAgKgCg");
	this.shape_296.setTransform(-27.6,3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#B2C1FF").s().p("AgRBEQgcgIgPgZQgOgZAHgbQAIgcAZgPQAZgOAbAHQAcAIAPAZQAOAZgHAbQgIAcgZAPQgRAJgRAAQgJAAgJgCg");
	this.shape_297.setTransform(-22.6,-17.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#B2C1FF").s().p("AgTBJQgegIgPgbQgQgbAIgdQAIgeAbgQQAbgQAdAIQAeAJAQAaQAQAbgIAeQgJAegaAPQgSAKgTAAQgJAAgLgCg");
	this.shape_298.setTransform(-13,-22.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#B2C1FF").s().p("AgRBFQgdgIgOgZQgPgaAHgbQAIgdAZgOQAagPAbAHQAdAIAPAZQAOAagHAbQgIAdgZAPQgRAJgSAAQgJAAgJgCg");
	this.shape_299.setTransform(-2.1,-25.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#B2C1FF").s().p("AgSBGQgdgIgPgaQgPgaAIgcQAIgdAagPQAZgPAcAIQAdAIAPAaQAPAZgHAcQgIAdgaAPQgRAKgTAAQgIAAgKgCg");
	this.shape_300.setTransform(27.3,-8.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#B2C1FF").s().p("AgSBGQgdgIgPgaQgPgZAIgcQAIgdAagPQAagPAcAHQAdAIAOAaQAPAagHAcQgIAdgaAPQgRAJgSAAQgJAAgKgCg");
	this.shape_301.setTransform(20.7,-16.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#B2C1FF").s().p("AgQA+QgZgHgOgXQgNgXAHgYQAHgaAXgNQAXgOAZAHQAZAHAOAXQANAXgHAZQgHAZgXAOQgPAIgQAAQgIAAgJgCg");
	this.shape_302.setTransform(25.8,3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#B2C1FF").s().p("AgTBJQgegIgPgbQgQgbAIgdQAIgeAbgQQAbgQAdAIQAeAJAQAaQAQAbgIAdQgJAfgaAPQgSAKgTAAQgJAAgLgCg");
	this.shape_303.setTransform(9.8,-23.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#B2C1FF").s().p("AgTBKQgfgIgPgbQgQgcAIgeQAIgfAcgQQAbgQAeAJQAeAIARAbQAQAcgJAeQgIAfgbAQQgTAKgTAAQgJAAgLgDg");
	this.shape_304.setTransform(2.6,25.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#B2C1FF").s().p("AgQA/QgagHgOgXQgNgYAHgZQAHgaAXgOQAYgNAZAHQAaAHAOAXQANAYgHAZQgHAagXAOQgQAJgQAAQgIAAgJgDg");
	this.shape_305.setTransform(-9.5,22.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#B2C1FF").s().p("AgQA/QgagHgOgXQgNgYAHgZQAHgaAXgOQAYgNAZAHQAaAHAOAXQANAYgHAZQgHAagXAOQgPAJgRAAQgIAAgJgDg");
	this.shape_306.setTransform(-18.9,19.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#B2C1FF").s().p("AgVBVQgkgKgSgfQgSggAJgiQAKgjAfgSQAfgSAjAJQAjAKASAfQASAfgJAiQgKAkgfASQgVAMgWAAQgKAAgMgDg");
	this.shape_307.setTransform(-8.6,30.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#B2C1FF").s().p("Ag+A/QgbgaAAglQAAgkAbgbQAagaAkAAQAlAAAaAaQAbAbAAAkQAAAlgbAaQgaAbglAAQgkAAgagbg");
	this.shape_308.setTransform(4.2,31.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#B2C1FF").s().p("AhDBEQgcgcAAgoQAAgnAcgcQAcgcAnAAQAoAAAcAcQAcAcAAAnQAAAogcAcQgcAcgoAAQgnAAgcgcg");
	this.shape_309.setTransform(29,11.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#B2C1FF").s().p("Ag3A3QgXgWAAghQAAggAXgWQAXgYAgAAQAgAAAYAYQAXAWAAAgQAAAhgXAWQgYAYggAAQggAAgXgYg");
	this.shape_310.setTransform(24.7,-18.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#B2C1FF").s().p("Ag0A1QgVgWAAgfQAAgeAVgWQAWgWAeABQAfgBAWAWQAWAWgBAeQABAfgWAWQgWAWgfgBQgeABgWgWg");
	this.shape_311.setTransform(-1.3,-30.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#B2C1FF").s().p("Ag0A0QgVgVgBgfQABgeAVgWQAWgWAeAAQAfAAAWAWQAVAWABAeQgBAfgVAVQgWAXgfAAQgdAAgXgXg");
	this.shape_312.setTransform(-23.1,-23.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#B2C1FF").s().p("Ag5A6QgYgYAAgiQAAggAYgZQAZgYAgAAQAiAAAYAYQAYAYAAAhQAAAigYAYQgYAYgiAAQghAAgYgYg");
	this.shape_313.setTransform(-31.5,-4.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#B2C1FF").s().p("Ag5A6QgYgYAAgiQAAghAYgYQAYgYAhAAQAiAAAYAYQAYAYAAAhQAAAigYAYQgYAYgiAAQggAAgZgYg");
	this.shape_314.setTransform(-32.5,4.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#B2C1FF").s().p("Ag7A8QgYgZAAgjQAAgiAYgYQAZgZAiAAQAjAAAYAZQAZAYAAAiQAAAjgZAZQgYAYgjAAQgiAAgZgYg");
	this.shape_315.setTransform(-31.3,-14.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#B2C1FF").s().p("AgNBNQgfgEgRgbQgRgbAFggQAGggAagSQAagTAdAFQAfAGARAbQARAbgGAeQgFAhgaASQgUAPgWAAIgNgCg");
	this.shape_316.setTransform(33.3,1.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#B2C1FF").s().p("AgNBNQgfgFgRgaQgRgbAFggQAGggAagTQAagSAdAGQAfAFARAaQARAbgGAfQgFAggaAUQgUAOgWAAIgNgCg");
	this.shape_317.setTransform(32.2,-8.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#B2C1FF").s().p("Ag6A7QgYgYgBgjQABgiAYgYQAYgYAigBQAjABAYAYQAYAYABAiQgBAjgYAYQgYAYgjABQgigBgYgYg");
	this.shape_318.setTransform(17.1,-26.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#B2C1FF").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_319.setTransform(7.5,-32.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#B2C1FF").s().p("AhCBDQgcgcAAgnQAAgnAcgbQAcgcAmAAQAnAAAcAcQAcAbAAAnQAAAngcAcQgcAcgnAAQgmAAgcgcg");
	this.shape_320.setTransform(-10.3,-29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},6).to({state:[]},1).wait(4));

	// Ñëîé 7
	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#C9D6FF").s().p("AgFAZQgLgCgGgJQgGgJACgJQACgLAJgGQAJgGALADQALACAHAJQAGAJgCAKQgCAKgKAGQgHAEgHAAIgGgBg");
	this.shape_321.setTransform(-8.3,17.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#EAF1FF").s().p("AgDAWQgMgCgGgJQgGgIACgIQACgJAJgEQAJgFAKACQAKADAHAHQAGAIgCAIQgCAJgJAFQgGAEgGAAIgGgBg");
	this.shape_322.setTransform(-8.1,16.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#C9D6FF").s().p("AgFAfQgNgCgIgMQgGgLACgLQADgNAKgIQALgGAMACQANADAHAKQAIALgDANQgDAMgLAHQgIAGgJAAIgFgBg");
	this.shape_323.setTransform(27.4,6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#EAF1FF").s().p("AgDAWQgMgCgFgIQgHgIACgIQACgJAJgFQAJgFAKACQAKADAHAIQAGAIgCAIQgCAJgJAEQgFADgHAAIgGAAg");
	this.shape_324.setTransform(27.3,4.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#C9D6FF").s().p("AgNAnQgQgEgIgPQgIgPAFgPQAHgQAPgJQAQgIAQAFQARAEAHAPQAIAPgGAPQgFARgQAIQgKAFgJAAQgGAAgHgCg");
	this.shape_325.setTransform(22.8,6.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#EAF1FF").s().p("AgOAjQgPgDgGgNQgIgNAHgNQAFgPAQgIQAPgIAOAEQAQADAHANQAGANgGANQgFAPgQAIQgKAFgKAAIgKgBg");
	this.shape_326.setTransform(22,5.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#C9D6FF").s().p("AgQAvQgVgFgJgRQgJgSAHgTQAHgTATgLQAUgKAUAGQATAFAKARQAJASgHATQgIATgTALQgNAGgMAAQgHAAgGgCg");
	this.shape_327.setTransform(17.5,13.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#EAF1FF").s().p("AgRAqQgTgDgIgPQgIgPAIgRQAIgSASgJQASgKATAEQASADAIAPQAIAPgIARQgHARgTAKQgOAHgMAAIgKgBg");
	this.shape_328.setTransform(16.5,11.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#C9D6FF").s().p("AgVAqQgRgIgHgSQgGgQAJgSQAJgRATgHQASgGARAHQASAIAGASQAHARgJARQgJARgTAHQgJADgHAAQgKAAgKgEg");
	this.shape_329.setTransform(8.9,17.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#EAF1FF").s().p("AgVAkQgQgFgGgPQgFgQAJgOQAJgPASgHQARgGARAGQARAGAFAPQAFAPgJAPQgJAPgSAGQgJAEgIAAQgJAAgIgEg");
	this.shape_330.setTransform(8.2,16.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#C9D6FF").s().p("AgjAkQgQgMgCgTQgCgUAPgOQAPgPAWgCQAWgCARAMQAQANACAUQACASgPAQQgPAPgWABIgFABQgTAAgPgMg");
	this.shape_331.setTransform(-1.2,17.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#EAF1FF").s().p("AghAgQgQgLgCgRQgBgPAOgOQAOgNAWgBQAUgDAQAMQAQAKACARQABAPgOAOQgOAMgWADIgFAAQgSAAgNgJg");
	this.shape_332.setTransform(-1.5,15.3);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#C9D6FF").s().p("AgMAvQgYgGgNgSQgNgTAFgSQAFgUAUgJQAVgKAXAHQAYAGAOASQANATgFASQgFAUgVAJQgMAGgOAAQgIAAgKgDg");
	this.shape_333.setTransform(-15.4,16);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#EAF1FF").s().p("AgKAoQgXgGgNgQQgNgQAEgQQAEgRAUgHQAUgIAWAHQAXAGANAQQANAQgEAQQgFAQgTAIQgLAEgMAAQgJAAgKgDg");
	this.shape_334.setTransform(-15,14.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#C9D6FF").s().p("AgdA7QgYgMgIgaQgJgZAMgZQAMgYAagJQAZgIAZAMQAYAMAJAaQAIAZgMAZQgMAYgaAJQgLADgKAAQgOAAgPgHg");
	this.shape_335.setTransform(23.6,12.3);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#C9D6FF").s().p("AgdA7QgYgMgJgaQgIgZAMgYQAMgZAagIQAZgJAYAMQAZAMAJAaQAIAZgMAZQgMAYgaAJQgLADgKAAQgOAAgPgHg");
	this.shape_336.setTransform(17.9,20);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#C9D6FF").s().p("AgdA7QgYgMgJgaQgIgZAMgZQAMgYAagJQAZgIAZAMQAYAMAJAaQAIAZgMAYQgMAZgaAJQgLADgKAAQgOAAgPgHg");
	this.shape_337.setTransform(7.8,21.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#C9D6FF").s().p("AgdA7QgYgMgJgaQgIgZAMgYQAMgZAagIQAZgJAZAMQAYAMAJAaQAIAZgMAZQgMAYgaAJQgLADgKAAQgOAAgPgHg");
	this.shape_338.setTransform(2,22.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#C9D6FF").s().p("AgKBGQgegEgSgYQgRgYAEgcQAFgeAYgRQAZgRAcAFQAeAEASAYQARAYgFAcQgEAegYARQgTANgWAAIgMgBg");
	this.shape_339.setTransform(-7.6,24);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#C9D6FF").s().p("AgJBAQgbgEgPgWQgQgWAEgZQAEgbAWgQQAWgPAZAEQAaAEARAWQAPAVgEAaQgEAagVAQQgSANgUAAIgKgBg");
	this.shape_340.setTransform(-15,19.9);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#C9D6FF").s().p("AgJBAQgbgEgQgWQgPgWAEgZQAEgbAWgQQAWgPAZAEQAbAEAPAWQAQAWgEAZQgEAbgWAPQgRANgUAAIgKgBg");
	this.shape_341.setTransform(-23.8,13.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#C9D6FF").s().p("AgJBAQgbgEgQgWQgPgWAEgZQAEgbAWgQQAVgPAaAEQAaAEAQAWQAQAWgEAZQgEAagWAQQgRANgVAAIgJgBg");
	this.shape_342.setTransform(-21.5,5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#C9D6FF").s().p("AgHAzQgWgDgOgSQgNgRADgUQAEgWASgMQASgNAVAEQAWADAOASQANARgDAUQgEAWgSAMQgOAKgQAAIgJgBg");
	this.shape_343.setTransform(25.7,3.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#C9D6FF").s().p("AgHAzQgWgDgOgSQgNgRADgVQAEgVASgMQASgNAVADQAWAEAOARQANASgDAUQgEAWgSAMQgOAKgQAAIgJgBg");
	this.shape_344.setTransform(20.1,1.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#C9D6FF").s().p("AgGArQgSgDgLgPQgLgOACgRQADgRAPgLQAPgKASACQASADALAPQALAPgDAQQgCASgPAKQgMAIgOAAIgHAAg");
	this.shape_345.setTransform(25.8,-5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#EAF1FF").s().p("AgFAkQgRgCgLgNQgLgNACgOQADgPAOgIQAOgJARADQARACALANQALANgCAOQgCAPgPAIQgLAHgNAAIgHgBg");
	this.shape_346.setTransform(26,-6.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#C9D6FF").s().p("AgfApQgRgNgDgVQgDgTANgRQANgRAWgDQAUgDASANQARAMADAUQADAUgNARQgNAQgWAEIgHABQgRAAgOgKg");
	this.shape_347.setTransform(18.8,-7.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#EAF1FF").s().p("AgeAjQgQgKgDgSQgCgQAMgPQANgPAVgDQATgDARALQARAKACASQACAQgMAPQgNAOgVADIgIABQgPAAgNgIg");
	this.shape_348.setTransform(18.5,-9.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#C9D6FF").s().p("AgQA0QgTgMgIgZQgJgXAHgWQAHgVATgHQASgGASANQATAMAIAZQAIAXgGAWQgHAVgTAHQgGACgGAAQgLAAgNgJg");
	this.shape_349.setTransform(28.4,-6.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#EAF1FF").s().p("AgMAxQgQgMgJgYQgIgWAFgVQAGgUAPgFQAQgGAPANQARANAIAXQAJAXgGAUQgFAUgQAGQgEABgFAAQgKAAgMgJg");
	this.shape_350.setTransform(30.1,-7.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#C9D6FF").s().p("AgbAhQgOgMgDgTQgCgRAMgOQALgOATgBQARgBAPANQAOANADASQACASgMANQgLAOgTAAIgCABQgQAAgOgMg");
	this.shape_351.setTransform(22.5,-13.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#EAF1FF").s().p("AgXAcQgOgMgDgQQgDgQAKgMQAKgLARAAQAQAAAOAMQAOAMADAQQADAQgKAMQgKALgRAAQgQAAgOgMg");
	this.shape_352.setTransform(23.6,-15.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#C9D6FF").s().p("AgWAkQgRgKgEgSQgFgRAKgPQAKgPASgDQARgEAQALQAQAKAFASQAFARgKAPQgKAPgSADIgJABQgMAAgMgIg");
	this.shape_353.setTransform(11,-18.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#EAF1FF").s().p("AgTAfQgPgKgFgQQgGgPAJgNQAIgNARgCQAPgCAQAKQAPAKAFAQQAFAPgIANQgIANgRACIgGAAQgMAAgNgIg");
	this.shape_354.setTransform(11.9,-19.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#C9D6FF").s().p("AgFAmQgRgDgKgNQgKgOADgOQACgQAOgJQAOgJAQADQARADAKANQAJANgCAPQgDAPgOAKQgKAHgMgBIgHAAg");
	this.shape_355.setTransform(4.9,-21.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#EAF1FF").s().p("AgFAgQgQgCgKgMQgJgLACgNQACgNANgHQANgIAPADQAQADAKALQAKAMgCAMQgCANgOAIQgJAFgLAAIgIgBg");
	this.shape_356.setTransform(5.1,-23);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#C9D6FF").s().p("AgUAjQgQgGgFgPQgFgOAJgOQAJgPARgGQARgFAPAGQAQAGAFAPQAFAOgJAPQgIAOgSAGQgIADgHAAQgJAAgIgEg");
	this.shape_357.setTransform(-2.4,-20.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#EAF1FF").s().p("AgUAfQgPgFgEgNQgEgMAIgMQAJgNARgFQAPgGAPAFQAPAFAEANQAEAMgJAMQgIANgRAFQgJADgHAAQgHAAgHgCg");
	this.shape_358.setTransform(-2.9,-22.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#C9D6FF").s().p("AgqArQgPgQABgYQABgWASgSQARgSAXgBQAYgBAQAPQAQAQgCAYQgBAXgSARQgRASgXABIgEAAQgVAAgPgOg");
	this.shape_359.setTransform(-10.1,-16.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#EAF1FF").s().p("AgoApQgOgOADgVQADgUAQgRQASgSAUgCQAWgCANANQANAOgCAVQgCAVgRARQgSAQgUADIgHAAQgRAAgLgLg");
	this.shape_360.setTransform(-11.7,-17.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#C9D6FF").s().p("AgYA9QgVgJgIgYQgIgZAKgYQALgZAWgMQAWgLAVAJQAWAJAIAYQAHAYgKAZQgKAZgXAMQgNAGgLAAQgJAAgKgEg");
	this.shape_361.setTransform(-26.1,3.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#EAF1FF").s().p("AgXA7QgTgIgFgWQgGgXAKgXQAKgZAUgLQATgMASAHQATAIAGAXQAFAWgKAXQgKAZgUALQgMAIgLAAQgHAAgHgDg");
	this.shape_362.setTransform(-28.2,2.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#C9D6FF").s().p("AgiBDQgcgPgJgeQgJgdAOgcQAPgcAegJQAdgJAcAPQAcAPAJAeQAJAdgPAbQgPAcgeAJQgLAEgLAAQgRAAgRgJg");
	this.shape_363.setTransform(-22.9,-7.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#EAF1FF").s().p("AgjBDQgVgLgEgbQgFgcAPgbQAPgcAZgMQAZgMAVALQAVAMAEAbQAFAcgPAbQgPAcgZAMQgMAGgMAAQgLAAgLgGg");
	this.shape_364.setTransform(-25.8,-9.5);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#C9D6FF").s().p("AgsAtQgSgSABgZQABgZATgSQASgTAZgBQAagBARASQASASgBAZQgBAYgTATQgSATgZABIgCAAQgYAAgRgRg");
	this.shape_365.setTransform(-18.2,-16);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#EAF1FF").s().p("AgrArQgPgPADgXQACgWASgSQASgSAWgCQAYgCAOAPQAPAPgCAXQgCAWgSASQgSASgWACIgGAAQgTAAgOgNg");
	this.shape_366.setTransform(-19.9,-17.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#C9D6FF").s().p("AgiA6QgagPgIgcQgIgbAPgYQAOgYAcgGQAcgHAaAQQAaAQAIAbQAHAbgOAYQgOAZgdAGQgIABgHAAQgTAAgTgLg");
	this.shape_367.setTransform(17.5,-20.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#EAF1FF").s().p("AgdAxQgYgOgJgZQgJgYAMgVQANgUAagEQAZgEAZAOQAZAPAIAaQAJAXgMAVQgNAVgaADIgLABQgTAAgUgMg");
	this.shape_368.setTransform(18.8,-22.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#C9D6FF").s().p("AgwAyQgWgTgBgcQgCgbAVgVQAUgVAegBQAdgBAWASQAWATABAcQACAbgUAVQgVAVgeACIgDAAQgbAAgVgSg");
	this.shape_369.setTransform(7.3,-25.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#EAF1FF").s().p("AguArQgWgQgBgYQgBgXAUgRQATgSAdgCQAcgBAVAQQAVAQACAYQAAAXgTASQgTASgeABIgDAAQgaAAgTgPg");
	this.shape_370.setTransform(7.1,-28.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#C9D6FF").s().p("AgnAsQgSgQgCgZQgBgYARgSQARgSAYgBQAYgBASARQATAQABAYQABAXgQATQgRASgZABIgDAAQgVAAgSgPg");
	this.shape_371.setTransform(-4.4,-26.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#EAF1FF").s().p("AgmAlQgSgOgBgUQAAgUAQgPQAQgRAXAAQAXgBASANQARAPABAUQABAUgQAPQgQAQgYACIgCAAQgWAAgQgOg");
	this.shape_372.setTransform(-4.5,-28.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#C9D6FF").s().p("AgEBCQgbgCgSgUQgSgUACgbQACgbAVgSQAUgTAbACQAbACASAUQASAVgCAaQgCAbgVASQgTARgYAAIgEAAg");
	this.shape_373.setTransform(-11.5,-23.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#EAF1FF").s().p("AgvAqQgPgRADgZQADgXAUgSQAUgSAYAAQAZAAAPASQAPARgDAYQgDAYgUASQgUARgYAAQgZAAgPgRg");
	this.shape_374.setTransform(-13.3,-25.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#B2C1FF").s().p("AgxBHQgdgUgHgkQgGgiAVgeQAUgdAkgHQAigGAeAVQAdAVAGAjQAHAigVAeQgVAdgjAGQgJACgHAAQgZAAgXgQg");
	this.shape_375.setTransform(20.1,20.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#B2C1FF").s().p("AgTBLQgfgIgQgcQgQgcAIgeQAIgfAcgQQAcgQAeAIQAfAIAQAcQAQAcgIAeQgIAfgcAQQgTALgTAAQgKAAgKgDg");
	this.shape_376.setTransform(-16.9,23.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#B2C1FF").s().p("AgWBWQgkgJgSggQgTggAKgjQAJgkAggSQAggTAjAKQAkAKASAfQATAggKAjQgKAkggASQgVAMgXAAQgKAAgMgDg");
	this.shape_377.setTransform(-24.2,14.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#B2C1FF").s().p("AgQA/QgagHgOgXQgNgYAHgZQAHgaAXgOQAYgNAZAHQAaAHAOAXQANAXgHAaQgHAagXAOQgQAJgRAAQgHAAgJgDg");
	this.shape_378.setTransform(-18.2,-7.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#B2C1FF").s().p("AgTBMQgggIgQgdQgQgcAIgeQAJgfAcgRQAcgQAeAIQAfAJARAcQAQAcgIAeQgJAggcAQQgSALgUAAQgJAAgLgDg");
	this.shape_379.setTransform(-18.6,5.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#B2C1FF").s().p("AgTBMQgfgJgRgcQgQgcAIgeQAJgfAcgRQAcgQAeAIQAgAJAQAcQAQAcgIAeQgIAfgdARQgSAKgUAAQgJAAgLgCg");
	this.shape_380.setTransform(-10.5,-15.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#B2C1FF").s().p("AgPA8QgYgHgNgWQgNgWAGgYQAHgYAWgNQAWgNAYAGQAZAHANAWQANAXgHAXQgHAZgWANQgOAIgQAAQgHAAgJgCg");
	this.shape_381.setTransform(-1.4,-19.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#B2C1FF").s().p("AgUBMQgfgIgRgcQgQgdAIgeQAJggAcgQQAdgRAeAJQAgAIAQAcQARAdgJAeQgIAggdARQgSAKgUAAQgKAAgLgDg");
	this.shape_382.setTransform(18.9,-8.4);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#B2C1FF").s().p("AgQA/QgagGgOgYQgNgXAHgaQAHgaAXgOQAYgNAZAHQAaAHAOAXQANAYgHAZQgHAagXAOQgQAJgRAAQgHAAgJgDg");
	this.shape_383.setTransform(18.9,2.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#B2C1FF").s().p("AgQA/QgagHgOgXQgNgYAGgZQAHgaAYgOQAXgNAaAGQAaAHAOAYQANAXgHAaQgHAagXAOQgQAJgQAAQgIAAgJgDg");
	this.shape_384.setTransform(10.1,-17.7);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#B2C1FF").s().p("AgRBFQgdgIgPgZQgPgaAIgcQAIgcAZgPQAagPAcAIQAcAHAPAaQAPAagIAbQgHAdgaAPQgRAKgTAAQgIAAgJgDg");
	this.shape_385.setTransform(17.2,13.4);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#B2C1FF").s().p("AgRBEQgdgHgOgZQgPgaAHgbQAIgcAZgPQAagPAbAIQAcAHAPAaQAPAZgIAbQgHAdgaAOQgQAKgSAAQgIAAgKgDg");
	this.shape_386.setTransform(9.1,17.9);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#B2C1FF").s().p("AgRBEQgcgHgPgZQgPgaAIgbQAHgcAagPQAZgPAbAIQAdAHAOAaQAPAZgIAbQgHAdgZAOQgRAKgSAAQgIAAgKgDg");
	this.shape_387.setTransform(-1.4,16.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#B2C1FF").s().p("AgUBOQgggJgRgdQgQgcAIggQAJggAdgRQAdgQAfAIQAgAJARAdQAQAdgIAfQgJAggdARQgTALgUAAQgKAAgLgDg");
	this.shape_388.setTransform(-14.1,17.2);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#B2C1FF").s().p("AgRBFQgdgHgPgaQgPgaAIgcQAHgcAagPQAagPAcAIQAcAHAPAaQAPAagIAbQgHAdgaAPQgRAKgTAAQgIAAgJgDg");
	this.shape_389.setTransform(1,28);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#B2C1FF").s().p("AgSBHQgdgHgQgbQgPgaAHgdQAIgeAbgPQAagQAdAIQAeAJAPAaQAQAbgJAcQgIAegaAPQgRAKgTAAQgJAAgKgDg");
	this.shape_390.setTransform(-8.4,28);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#B2C1FF").s().p("Ag/A/QgagaAAglQAAgkAagbQAbgaAkAAQAlAAAaAaQAbAbAAAkQAAAlgbAaQgaAbglAAQgkAAgbgbg");
	this.shape_391.setTransform(8.2,25);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#B2C1FF").s().p("AgwAxQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	this.shape_392.setTransform(26.5,4.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#B2C1FF").s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_393.setTransform(25.7,12.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#B2C1FF").s().p("AgyAzQgVgVAAgeQAAgdAVgVQAVgVAdAAQAeAAAVAVQAVAVAAAdQAAAegVAVQgVAVgeAAQgdAAgVgVg");
	this.shape_394.setTransform(22,-13.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#B2C1FF").s().p("Ag3A5QgYgYAAghQAAggAYgXQAXgYAgAAQAhAAAXAYQAYAXAAAgQAAAhgYAYQgXAXghAAQggAAgXgXg");
	this.shape_395.setTransform(-18.8,-16.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#B2C1FF").s().p("Ag3A4QgYgXAAghQAAggAYgXQAXgYAgAAQAhAAAYAYQAXAXAAAgQAAAhgXAXQgYAYghAAQggAAgXgYg");
	this.shape_396.setTransform(-13,-24.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#B2C1FF").s().p("Ag6A7QgZgYAAgjQAAgiAZgYQAYgZAiAAQAjAAAYAZQAZAYAAAiQAAAjgZAYQgYAZgjAAQgiAAgYgZg");
	this.shape_397.setTransform(-27,2.8);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#B2C1FF").s().p("AhEBFQgcgdAAgoQAAgnAcgdQAdgcAnAAQApAAAcAcQAcAdAAAnQAAAogcAdQgcAcgpAAQgnAAgdgcg");
	this.shape_398.setTransform(-24.1,-8.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#B2C1FF").s().p("AgOBSQgggGgSgcQgSgcAGghQAGgiAbgUQAbgTAfAGQAgAFASAcQATAcgHAhQgGAigbAUQgVAPgXAAIgOgBg");
	this.shape_399.setTransform(27.5,-6.4);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#B2C1FF").s().p("Ag9A+QgZgZAAglQAAgkAZgZQAagZAjAAQAkAAAaAZQAaAZgBAkQABAlgaAZQgaAagkgBQgjABgagag");
	this.shape_400.setTransform(17.9,-20.9);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#B2C1FF").s().p("Ag/BAQgagbAAglQAAgkAagaQAbgbAkAAQAlAAAaAbQAbAaAAAkQAAAlgbAbQgaAaglAAQgkAAgbgag");
	this.shape_401.setTransform(7.2,-26.3);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#B2C1FF").s().p("Ag/BAQgagbAAglQAAgkAagaQAbgbAkAAQAlAAAaAbQAbAaAAAkQAAAlgbAbQgaAaglAAQgkAAgbgag");
	this.shape_402.setTransform(-5,-25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321}]},5).to({state:[]},1).wait(5));

	// Ñëîé 6
	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#C9D6FF").s().p("AghAuQgUgNgEgXQgDgWAOgTQAOgTAYgEQAWgEAUANQAUANAEAXQAEAWgPATQgOATgYAEIgKABQgRAAgPgKg");
	this.shape_403.setTransform(14.8,14.9);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#EAF1FF").s().p("AghAoQgSgLgEgTQgDgTAOgQQAOgRAXgEQAWgDASAKQATALADAUQAEASgOARQgOAQgXAEIgLABQgQAAgOgIg");
	this.shape_404.setTransform(14.3,12.7);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#C9D6FF").s().p("AgaAmQgQgLgDgTQgEgSAMgQQALgPATgEQASgDAQALQAQALADATQADASgLAQQgLAPgTAEIgIABQgOAAgMgJg");
	this.shape_405.setTransform(14.9,9.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#C9D6FF").s().p("AgaAmQgQgLgDgTQgDgSALgQQALgPATgEQASgDAQALQAQALADATQADASgLAQQgLAPgTAEIgIABQgOAAgMgJg");
	this.shape_406.setTransform(5,18);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#EAF1FF").s().p("AgaAhQgOgJgEgRQgCgPALgOQALgNATgDQARgDAOAJQAPAJADAQQADAPgLAOQgLAOgTADIgIABQgNAAgLgHg");
	this.shape_407.setTransform(4.6,16.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#C9D6FF").s().p("AgGA4QgZgDgQgTQgQgTADgWQADgXAUgPQAUgOAYAEQAaADAPATQAQASgDAXQgDAXgUAOQgQAMgUAAIgIgBg");
	this.shape_408.setTransform(-5.5,17.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#EAF1FF").s().p("AgGAwQgYgDgPgQQgPgQACgTQADgUATgMQATgMAXADQAZADAPARQAPAQgDATQgCAUgTALQgPAKgTAAIgJgBg");
	this.shape_409.setTransform(-5.2,15);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#C9D6FF").s().p("AgCAwQgUgBgOgPQgNgPABgTQACgUAPgOQAPgNATABQAUACAOAPQANAPgBATQgBAUgQAOQgNAMgSAAIgDgBg");
	this.shape_410.setTransform(-11.9,11.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#EAF1FF").s().p("AgCApQgTgBgNgNQgNgNABgQQABgRAPgMQAOgLATACQATABANANQANANgBAQQgBARgPALQgNAKgRAAIgDAAg");
	this.shape_411.setTransform(-11.8,9.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#C9D6FF").s().p("AgZAzQgVgLgIgWQgHgWALgVQALgVAWgHQAWgIAVALQAWALAHAWQAHAWgLAVQgLAVgWAHQgKADgIAAQgNAAgMgGg");
	this.shape_412.setTransform(7.4,10.2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#EAF1FF").s().p("AgZAtQgVgJgFgTQgHgSALgSQALgTAWgHQAVgHATAIQAUAJAGATQAHASgLATQgLASgWAHQgKADgIAAQgMAAgKgEg");
	this.shape_413.setTransform(6.6,8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#C9D6FF").s().p("AgFA0QgWgCgNgRQgOgSACgUQADgWARgNQARgNAVACQAWACAOARQANARgDAVQgCAVgRAOQgOAMgSAAIgGgBg");
	this.shape_414.setTransform(-2.2,11.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#EAF1FF").s().p("AgEAsQgVgCgNgPQgNgOACgSQACgSAQgMQAQgLAUACQAVADANAPQAOAOgCASQgCASgRAMQgNAJgRAAIgGgBg");
	this.shape_415.setTransform(-2.1,9.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#C9D6FF").s().p("AgQAwQgTgIgJgTQgJgTAHgTQAHgUASgJQATgIATAHQATAHAJAUQAJATgHATQgHAUgSAIQgKAFgLAAQgIAAgJgDg");
	this.shape_416.setTransform(-12,6.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#C9D6FF").s().p("AgFAzQgVgCgNgRQgMgRACgUQADgVAQgNQAQgNAUACQAUACANARQANAQgCAVQgDAVgQANQgOALgRAAIgFAAg");
	this.shape_417.setTransform(13.6,1.1);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#C9D6FF").s().p("AgFAzQgUgCgNgRQgNgRACgUQADgVAQgNQAQgNAUACQAUACANARQANAQgCAVQgDAVgQANQgOAMgQAAIgGgBg");
	this.shape_418.setTransform(14.9,-4.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#EAF1FF").s().p("AgEArQgUgCgMgOQgNgPACgRQACgSAQgLQAPgLATACQAUADAMAOQANAOgCARQgCASgQALQgNAKgPAAIgGgBg");
	this.shape_419.setTransform(15,-6.7);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#C9D6FF").s().p("AgdAvQgQgQgDgaQgCgYAMgUQAMgTAUgDQATgCAQARQAQAQADAaQADAZgMATQgMAUgVACIgFAAQgQAAgOgPg");
	this.shape_420.setTransform(19.3,4.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#EAF1FF").s().p("AgYAtQgOgQgCgYQgDgYAKgTQALgSARgCQAQgCAOAQQAOAQACAZQADAXgKATQgLATgRABIgDAAQgOAAgNgOg");
	this.shape_421.setTransform(21.2,4.4);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#C9D6FF").s().p("AgRAzQgTgMgJgXQgIgWAIgVQAHgVATgHQATgGASALQATAMAIAXQAJAWgIAVQgIAVgTAHQgGACgHAAQgLAAgMgHg");
	this.shape_422.setTransform(19.9,-4.6);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#EAF1FF").s().p("AgNAwQgRgMgIgWQgIgVAGgUQAGgUAQgFQAQgGAQALQARANAIAVQAIAVgGAVQgGATgQAGQgFABgGAAQgKAAgLgHg");
	this.shape_423.setTransform(21.7,-5.3);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#C9D6FF").s().p("AgRAXQgLgJgDgNQgCgLAHgKQAIgKANAAQAMgBALAJQALAJADANQACAMgHAJQgIAKgNAAIgBAAQgMAAgKgIg");
	this.shape_424.setTransform(18.6,-11.6);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#EAF1FF").s().p("AgOAUQgLgJgDgLQgDgLAHgIQAGgIAMAAQALAAAKAIQALAJADAKQADAMgHAIQgGAIgMAAQgLAAgKgIg");
	this.shape_425.setTransform(19.3,-12.5);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#C9D6FF").s().p("AgYAlQgRgLgFgUQgFgRAKgQQAKgPAUgDQATgCARALQARALAFAUQAFARgKAQQgLAQgTACIgHAAQgOAAgPgJg");
	this.shape_426.setTransform(9.4,-11);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#EAF1FF").s().p("AgUAgQgRgLgGgSQgFgQAJgNQAIgNATgBQARgCAQALQARAMAFARQAGAQgJANQgJANgRABIgFAAQgOAAgPgJg");
	this.shape_427.setTransform(10.4,-12.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#C9D6FF").s().p("AgVAtQgQgIgGgTQgFgSAJgSQAJgTASgIQARgHAQAIQARAIAGATQAFASgJASQgJATgSAIQgIADgIAAQgJAAgJgEg");
	this.shape_428.setTransform(-12.5,-2.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#EAF1FF").s().p("AgUAsQgOgHgEgSQgEgRAJgRQAIgSAQgIQAQgIAOAGQAOAHAEASQAEARgJARQgIASgQAIQgJAFgIAAQgGAAgHgDg");
	this.shape_429.setTransform(-14.1,-3.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#C9D6FF").s().p("AgDAtQgTgBgMgOQgMgOABgSQACgTAPgMQAOgNASABQATABAMAPQAMAOgBASQgCATgPAMQgNAMgQAAIgDgBg");
	this.shape_430.setTransform(-8.8,-10.9);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#EAF1FF").s().p("AghAdQgKgMADgRQACgQAOgMQAOgMAQAAQARAAALAMQAKAMgDAQQgCARgOAMQgOAMgQAAQgRAAgLgMg");
	this.shape_431.setTransform(-10,-12.2);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#C9D6FF").s().p("AAAAwQgVgBgOgOQgOgPABgSQAAgUAPgOQAPgNATAAQAVABAOAOQAOAPgBASQAAAVgPANQgOANgUAAIAAAAg");
	this.shape_432.setTransform(0.3,-13.1);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#EAF1FF").s().p("AAAApQgUgBgNgMQgOgMAAgQQABgRAPgMQAOgLASAAQAUABANAMQAOAMAAAQQgBARgOAMQgNALgSAAIgCAAg");
	this.shape_433.setTransform(0.3,-15);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#C9D6FF").s().p("AgWA4QgVgOgJgaQgIgYAKgXQAKgYAVgGQAVgHAVANQAVAOAJAZQAIAZgKAXQgKAYgVAGQgIADgHAAQgNAAgOgJg");
	this.shape_434.setTransform(-18.3,5.4);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#C9D6FF").s().p("AgXAaQgJgJAAgNQABgMAKgLQAKgMANgBQANgCAJAJQAJAIAAAOQgBANgKAKQgKALgNACIgEAAQgLAAgHgHg");
	this.shape_435.setTransform(-14.2,-13.4);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#EAF1FF").s().p("AgWAZQgIgHABgNQACgLAJgLQAKgKALgCQAMgCAIAHQAIAHgBANQgCALgJAKQgKALgLACIgFABQgJAAgGgGg");
	this.shape_436.setTransform(-15.1,-14.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#C9D6FF").s().p("AggA/QgWgMgGgaQgGgaAOgaQANgaAZgKQAZgLAWAMQAWALAGAbQAGAZgOAbQgOAagZAKQgMAFgKAAQgMAAgMgGg");
	this.shape_437.setTransform(-17,-4.8);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#EAF1FF").s().p("AgeA8QgTgJgEgZQgEgZANgYQANgZAWgLQAWgKATAJQATAKADAZQAEAZgNAYQgNAZgWALQgLAFgKAAQgKAAgJgFg");
	this.shape_438.setTransform(-19.2,-5.9);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#C9D6FF").s().p("AgWAzQgWgGgKgTQgJgTAJgUQAKgVAXgLQAWgLAWAGQAWAGAJATQAKATgKAUQgJAVgXALQgPAHgOAAQgIAAgHgCg");
	this.shape_439.setTransform(-8,-17.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#EAF1FF").s().p("AgWAuQgVgFgIgQQgIgQAKgSQAJgTAWgKQAVgLAVAEQAUAEAIARQAIAQgKASQgJATgWAKQgQAIgOAAIgLgBg");
	this.shape_440.setTransform(-9,-19);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#C9D6FF").s().p("AgUA8QgbgJgNgYQgMgZAIgYQAJgZAZgLQAZgLAaAJQAbAKANAYQAMAYgJAYQgIAZgZAMQgOAGgOAAQgLAAgMgFg");
	this.shape_441.setTransform(10.6,-14.8);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#EAF1FF").s().p("AgRAyQgZgJgMgVQgNgUAHgUQAHgVAXgIQAXgJAYAJQAZAJANAVQANAUgHAUQgIAVgXAIQgLAEgMAAQgLAAgNgEg");
	this.shape_442.setTransform(11.6,-17.5);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#C9D6FF").s().p("AgIA3QgYgEgOgTQgPgTAEgVQAEgXATgNQAUgNAXAEQAYAEAPASQAOATgEAWQgDAWgUANQgPAKgSAAIgKAAg");
	this.shape_443.setTransform(0.6,-18.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#EAF1FF").s().p("AgGAtQgXgEgOgQQgOgPADgSQADgTASgKQATgLAVAEQAXAEAOAPQAOAQgDASQgDASgSALQgOAIgPAAIgLgBg");
	this.shape_444.setTransform(1.1,-20.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#B2C1FF").s().p("AgvBFQgdgUgGgjQgHghAVgdQAUgcAigHQAigGAdAVQAcAUAGAiQAGAigUAcQgUAdgiAGIgPACQgZAAgWgQg");
	this.shape_445.setTransform(14.9,14.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#B2C1FF").s().p("AgPA+QgagHgNgXQgNgXAHgZQAHgZAWgNQAXgNAYAGQAZAHAOAXQANAXgHAZQgGAZgYANQgOAJgRAAQgHAAgIgCg");
	this.shape_446.setTransform(-12.7,13.9);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#B2C1FF").s().p("AgPA8QgZgHgNgWQgNgWAHgYQAHgZAWgNQAWgNAYAHQAZAGANAXQANAWgHAYQgGAZgXANQgPAJgQAAQgHAAgIgDg");
	this.shape_447.setTransform(-11.3,-1.3);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#B2C1FF").s().p("AgPA8QgZgGgNgXQgNgWAGgYQAHgZAXgNQAWgNAYAGQAZAHANAXQANAWgHAYQgGAZgXANQgOAJgQAAQgHAAgJgDg");
	this.shape_448.setTransform(-10.7,6.9);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#B2C1FF").s().p("AgPA8QgZgGgNgXQgNgWAHgYQAHgZAWgNQAXgNAXAHQAZAHANAWQANAWgGAYQgHAZgWANQgPAJgQAAQgHAAgJgDg");
	this.shape_449.setTransform(-8,-10.2);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#B2C1FF").s().p("AgPA8QgZgGgNgWQgNgYAHgXQAHgZAWgNQAWgNAYAHQAZAHANAWQANAXgHAXQgGAZgXANQgPAJgQAAQgHAAgIgDg");
	this.shape_450.setTransform(0.6,-11.9);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#B2C1FF").s().p("AgPA8QgZgGgNgXQgNgWAHgYQAGgZAXgNQAWgNAYAHQAZAHANAWQANAWgHAYQgGAZgXANQgOAJgQAAQgHAAgJgDg");
	this.shape_451.setTransform(9.3,-9.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#B2C1FF").s().p("AgPA8QgZgGgNgXQgNgWAHgYQAHgZAWgNQAWgNAYAHQAZAGANAXQANAWgHAYQgGAZgXANQgOAJgQAAQgHAAgJgDg");
	this.shape_452.setTransform(12,0.6);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#B2C1FF").s().p("AgPA8QgZgGgNgXQgNgWAHgYQAHgZAWgNQAWgNAYAGQAZAIANAVQANAXgHAYQgGAZgXANQgOAJgRAAQgHAAgIgDg");
	this.shape_453.setTransform(6.4,8.2);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#B2C1FF").s().p("AgPA8QgZgGgNgXQgNgWAGgYQAIgZAVgNQAXgNAYAHQAZAHANAWQANAWgHAYQgGAZgXANQgOAJgQAAQgHAAgJgDg");
	this.shape_454.setTransform(-1.7,10.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#B2C1FF").s().p("AgUBOQgggIgRgdQgRgdAJggQAIggAdgRQAdgRAgAJQAgAIARAdQARAdgJAgQgIAggdARQgTALgVAAQgKAAgLgDg");
	this.shape_455.setTransform(-5.2,18);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#B2C1FF").s().p("AgxAyQgWgUABgeQgBgcAWgWQAVgUAcAAQAeAAAUAUQAWAWAAAcQAAAegWAUQgUAWgeAAQgcAAgVgWg");
	this.shape_456.setTransform(4.9,18.2);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#B2C1FF").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAiAAAXAXQAXAYAAAgQAAAhgXAYQgXAXgiAAQggAAgYgXg");
	this.shape_457.setTransform(18.9,5.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#B2C1FF").s().p("AguAvQgTgTAAgcQAAgaATgUQAUgUAaABQAbgBAUAUQATAUAAAaQAAAcgTATQgUATgbABQgagBgUgTg");
	this.shape_458.setTransform(16.6,-10.2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#B2C1FF").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape_459.setTransform(-13.8,-13.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#B2C1FF").s().p("Ag3A5QgYgYAAghQAAggAYgYQAWgXAhAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQghAAgWgXg");
	this.shape_460.setTransform(-8,-16.8);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#B2C1FF").s().p("Ag4A5QgXgYAAghQAAghAXgXQAYgXAggBQAiABAXAXQAYAXAAAhQAAAhgYAYQgXAYgigBQggABgYgYg");
	this.shape_461.setTransform(-18.9,5.9);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#B2C1FF").s().p("AhCBDQgcgbAAgoQAAgnAcgbQAbgcAnAAQAoAAAbAcQAcAbAAAnQAAAogcAbQgbAcgoAAQgnAAgbgcg");
	this.shape_462.setTransform(-16.5,-4.8);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#B2C1FF").s().p("AgQBbQgjgGgVggQgUgfAHgkQAHgmAegWQAegXAjAHQAjAHAVAfQAUAfgHAlQgHAlgeAXQgXAQgaAAIgQgBg");
	this.shape_463.setTransform(18.2,-3.9);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#B2C1FF").s().p("Ag8A9QgZgZAAgkQAAgjAZgZQAZgZAjAAQAkAAAZAZQAZAZAAAjQAAAkgZAZQgZAZgkAAQgjAAgZgZg");
	this.shape_464.setTransform(10.8,-15.1);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#B2C1FF").s().p("Ag8A9QgZgZAAgkQAAgjAZgZQAZgZAjgBQAkABAZAZQAZAZAAAjQAAAkgZAZQgZAZgkAAQgjAAgZgZg");
	this.shape_465.setTransform(0.6,-17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403}]},4).to({state:[]},1).wait(6));

	// Ñëîé 5
	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#C9D6FF").s().p("AgFAYQgKgDgFgJQgFgIACgJQADgKAJgFQAIgFAJACQAKADAFAIQAFAJgCAJQgCAJgJAGQgGAEgHAAIgFgBg");
	this.shape_466.setTransform(-5.5,12.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#C9D6FF").s().p("AgIAjQgPgEgJgNQgIgNADgNQAEgPAOgHQANgIAPAEQAQAEAIANQAJANgEAOQgEAOgNAHQgKAFgJAAIgKgBg");
	this.shape_467.setTransform(-10,10.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#EAF1FF").s().p("AgHAhQgQgEgIgMQgJgNADgNQAEgNANgHQAOgHAOAEQAQAEAIAMQAJANgDAMQgEAOgNAHQgJAEgJAAIgKgBg");
	this.shape_468.setTransform(-9.7,9.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#C9D6FF").s().p("AgkAkQgQgOgBgVQAAgTAPgPQAPgPAXAAQAVgBAQAOQAQAOABAUQAAAUgPAOQgQAPgVABIgCAAQgVAAgPgNg");
	this.shape_469.setTransform(-0.2,11.3);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#EAF1FF").s().p("AgjAeQgPgLgBgSQAAgRAPgMQAPgNAVAAQAVAAAPAMQAPALABASQABAPgPANQgPANgWABIgBAAQgUAAgPgMg");
	this.shape_470.setTransform(-0.8,9.2);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#C9D6FF").s().p("AghAhQgPgNgBgTQAAgRAOgOQAOgOAVgBQATAAAPANQAPANABATQAAASgOAOQgOANgVABIgCAAQgSAAgOgNg");
	this.shape_471.setTransform(9,9.1);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#EAF1FF").s().p("AgfAcQgNgLgBgQQAAgPANgMQANgMATAAQASAAAOALQANALABAQQAAAPgNALQgNANgTAAIgBAAQgSAAgNgLg");
	this.shape_472.setTransform(8.9,7.4);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#C9D6FF").s().p("AgOA3QgZgGgNgVQgNgVAHgWQAGgXAWgMQAWgLAXAGQAZAHANAVQANAVgHAWQgGAXgWALQgNAIgPAAQgIAAgJgDg");
	this.shape_473.setTransform(3.8,4.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#C9D6FF").s().p("AgBA2QgWAAgPgRQgOgQAAgWQABgWAQgQQAQgPAVABQAWABAPAQQAPARgBAVQgBAWgQAQQgPAOgUAAIgCAAg");
	this.shape_474.setTransform(-4.3,5.3);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#C9D6FF").s().p("AAAAiQgOAAgJgLQgJgLABgNQABgOAJgJQAKgKANABQANAAAJALQAJAKgBANQAAAOgKAKQgJAJgMAAIgBAAg");
	this.shape_475.setTransform(10.6,4.3);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#EAF1FF").s().p("AAAAhQgNgBgJgKQgIgKAAgMQACgNAIgKQAKgJAMAAQAMABAIAKQAJAKgBAMQAAAOgKAJQgJAJgLAAIAAAAg");
	this.shape_476.setTransform(11.7,4.1);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#C9D6FF").s().p("AgRAbQgMgIgDgNQgDgMAHgMQAIgLANgDQANgCAMAIQAMAIADANQADANgIALQgHALgOADIgGAAQgJAAgJgGg");
	this.shape_477.setTransform(8.6,0.1);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#EAF1FF").s().p("AgQAZQgMgHgCgNQgDgLAHgLQAHgKANgCQAMgDALAIQALAHADANQADAMgHAKQgHALgNACIgFAAQgJAAgJgGg");
	this.shape_478.setTransform(9,-0.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#C9D6FF").s().p("AgMAfQgNgFgGgNQgFgMAGgMQAFgMANgGQAMgFANAEQANAFAFAMQAFANgFALQgFANgNAGQgHADgGAAQgGAAgGgCg");
	this.shape_479.setTransform(-10.1,-0.3);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#EAF1FF").s().p("AgMAdQgMgFgFgLQgFgMAGgLQAFgLAMgGQALgFANAEQAMAFAFALQAFAMgGALQgFAMgMAFQgHADgFAAQgGAAgGgCg");
	this.shape_480.setTransform(-10.7,-1.2);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#C9D6FF").s().p("AgLAvQgSgEgKgRQgKgSAFgSQAFgUAQgLQARgKASAFQASAEAKARQAKARgFATQgFAUgQAKQgMAIgMAAIgLgCg");
	this.shape_481.setTransform(-11.4,4.9);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#EAF1FF").s().p("AgKAsQgRgEgJgQQgJgQAEgRQAGgTAPgJQAPgKAQAEQARAEAJAQQAJAQgEARQgFASgQAKQgKAHgLAAIgKgBg");
	this.shape_482.setTransform(-12.8,4.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#C9D6FF").s().p("AgYAoQgRgJgFgTQgFgRALgQQAKgRAUgFQASgFARAJQARAKAFASQAFARgLARQgKAQgTAFQgHACgGAAQgMAAgLgGg");
	this.shape_483.setTransform(-3.5,-2.5);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#EAF1FF").s().p("AgWAlQgRgIgEgSQgFgQALgPQAJgQASgEQASgGAQAKQAPAIAFASQAEAPgKAQQgJAPgTAGQgGABgFAAQgLAAgKgGg");
	this.shape_484.setTransform(-4.1,-3.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#C9D6FF").s().p("AgJA0QgXgEgNgTQgOgTAEgUQAFgWATgMQATgMAWAFQAXAEAOATQANASgEAVQgFAWgTAMQgOAIgQAAIgLgBg");
	this.shape_485.setTransform(3.3,-2.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#EAF1FF").s().p("AgJAxQgVgEgNgRQgMgSAEgTQAEgVASgLQASgMAVAFQAVAEANARQAMASgEATQgDAUgTAMQgNAIgQAAIgKgBg");
	this.shape_486.setTransform(3.3,-4.6);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#C9D6FF").s().p("AgJAwQgTgEgKgRQgKgRAEgTQAEgUARgLQAQgLARAEQATAEAKARQAKARgEATQgEATgQALQgMAJgNAAIgJgBg");
	this.shape_487.setTransform(-12.3,-4.1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#EAF1FF").s().p("AgJAtQgRgEgJgQQgKgQAEgSQAEgSAPgLQAQgKAQAEQARAEAKAPQAJAQgEASQgDASgQALQgLAIgMAAIgJgBg");
	this.shape_488.setTransform(-13.8,-4.4);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#C9D6FF").s().p("AgPA1QgWgGgLgTQgLgTAGgVQAHgWAUgLQAVgMAVAFQAWAGALATQALATgGAVQgHAWgUALQgOAIgOAAIgOgBg");
	this.shape_489.setTransform(-8.8,-8.9);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#EAF1FF").s().p("AgOAyQgVgFgLgTQgJgSAGgTQAGgVATgKQATgLAUAFQAVAEALASQAJATgGATQgGAVgTAKQgNAIgNAAQgGAAgHgBg");
	this.shape_490.setTransform(-9.7,-10.3);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#C9D6FF").s().p("AAAA1QgTAAgPgPQgOgQABgWQAAgVAOgQQAOgPATAAQAUAAAOAQQAOAQAAAUQAAAWgOAQQgOAPgTAAIgBAAg");
	this.shape_491.setTransform(12.2,-2.6);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#EAF1FF").s().p("AggAkQgNgPAAgVQAAgUAOgPQANgOASAAQATAAANAPQAOAPgBATQAAAVgNAPQgNAOgTAAQgSAAgOgOg");
	this.shape_492.setTransform(13.3,-2.5);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#C9D6FF").s().p("AgGAXQgKgEgFgIQgFgJADgJQADgJAJgEQAJgFAJAEQAKADAFAJQAFAJgDAIQgDAJgJAEQgFADgGAAIgHgBg");
	this.shape_493.setTransform(5.7,-11.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#EAF1FF").s().p("AgGAVQgJgDgFgIQgEgJACgHQADgJAJgEQAJgEAIADQAJADAFAIQAEAJgDAHQgCAJgJAEQgFADgFAAIgHgCg");
	this.shape_494.setTransform(5.8,-11.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#C9D6FF").s().p("AgHA2QgXgFgNgTQgNgTADgWQAEgWASgNQASgMAVAFQAXAFANATQANATgDAWQgEAWgSANQgNAJgPAAIgLgCg");
	this.shape_495.setTransform(10.6,-7.5);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#EAF1FF").s().p("AgHAzQgVgEgMgTQgNgSAEgUQADgWARgLQARgMAUAFQAVAEANATQAMASgEAUQgDAVgRAMQgNAIgOAAIgKgBg");
	this.shape_496.setTransform(11.8,-8.7);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#C9D6FF").s().p("AgJA0QgXgEgNgTQgOgSAFgVQADgVAUgNQATgMAXAFQAXAEAMATQAOASgEAVQgFAWgTAMQgOAIgQAAIgLgBg");
	this.shape_497.setTransform(-0.8,-11.4);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#EAF1FF").s().p("AgJAxQgVgEgNgRQgMgSADgTQAEgUATgMQASgLAUAEQAWAEANASQAMARgEATQgEAVgSALQgNAIgPAAIgLgBg");
	this.shape_498.setTransform(-0.8,-13.1);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#B2C1FF").s().p("AgjAzQgVgPgFgZQgEgZAPgVQAOgVAagFQAZgEAVAPQAVAOAFAaQAEAZgPAVQgOAVgaAFIgLABQgTAAgQgMg");
	this.shape_499.setTransform(8.8,9.3);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#B2C1FF").s().p("AgNA2QgXgGgLgUQgMgUAGgVQAGgWAUgMQAUgLAVAFQAWAGAMAUQALAUgFAVQgGAWgUAMQgNAIgOAAQgHAAgHgCg");
	this.shape_500.setTransform(-6.5,1.7);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#B2C1FF").s().p("AgNA1QgXgFgLgUQgMgUAGgVQAGgWAUgMQAUgMAVAHQAWAFAMAUQALAUgFAVQgGAWgUAMQgNAIgOAAQgHAAgHgDg");
	this.shape_501.setTransform(-6.5,6.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#B2C1FF").s().p("AgNA2QgWgGgMgUQgMgUAGgWQAGgWAUgLQAUgMAVAHQAWAFAMAVQALATgFAVQgGAXgUALQgNAIgOAAQgHAAgHgCg");
	this.shape_502.setTransform(-10.1,11.6);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#B2C1FF").s().p("AgSBIQgdgIgQgbQgPgaAIgdQAHgeAbgPQAbgQAcAJQAdAIAQAaQAPAagIAdQgHAdgbAQQgRAKgTAAQgJAAgKgCg");
	this.shape_503.setTransform(-0.7,11.3);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#B2C1FF").s().p("AgpApQgQgQAAgZQAAgYAQgRQASgQAXgBQAYABASAQQARARAAAYQAAAZgRAQQgSARgYAAQgXAAgSgRg");
	this.shape_504.setTransform(9.3,3.8);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#B2C1FF").s().p("AgoApQgSgRAAgYQAAgXASgRQARgSAXAAQAYAAARASQASARAAAXQAAAYgSARQgRASgYAAQgXAAgRgSg");
	this.shape_505.setTransform(11.6,-8.5);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#B2C1FF").s().p("AgoApQgSgQABgZQgBgYASgQQARgRAXgBQAYABASARQARAQAAAYQAAAZgRAQQgSARgYAAQgXAAgRgRg");
	this.shape_506.setTransform(-9.5,-10.1);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#B2C1FF").s().p("Ag2A3QgWgXgBggQABgfAWgXQAXgXAfAAQAgAAAXAXQAWAXABAfQgBAggWAXQgXAXggAAQgfAAgXgXg");
	this.shape_507.setTransform(2.5,1.7);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#B2C1FF").s().p("AgpAqQgRgRAAgZQAAgXARgRQARgSAYAAQAYAAARASQASARAAAXQAAAZgSARQgRARgYAAQgYAAgRgRg");
	this.shape_508.setTransform(-11.9,5.1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#B2C1FF").s().p("AgqArQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAASARQARASAAAYQAAAZgRASQgSARgZAAQgYAAgSgRg");
	this.shape_509.setTransform(-12.9,-4.3);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#B2C1FF").s().p("AgLBDQgagFgPgXQgPgXAFgaQAFgcAWgQQAWgQAZAFQAaAEAPAXQAPAXgFAbQgFAbgWAQQgRANgTAAIgLgBg");
	this.shape_510.setTransform(12.6,-2.4);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#B2C1FF").s().p("AgrAsQgTgRAAgbQAAgZATgTQASgSAZAAQAbAAARASQATATAAAZQAAAbgTARQgRATgbAAQgZAAgSgTg");
	this.shape_511.setTransform(4.7,-8.4);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#B2C1FF").s().p("AgrAtQgTgTAAgaQAAgZATgSQASgTAZAAQAbAAARATQATASAAAZQAAAagTATQgSASgaAAQgZAAgSgSg");
	this.shape_512.setTransform(-1.1,-2.5);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#B2C1FF").s().p("AgrAsQgTgRAAgbQAAgZATgTQASgSAZAAQAaAAASASQATATAAAZQAAAbgTARQgRATgbAAQgZAAgSgTg");
	this.shape_513.setTransform(-1.1,-12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466}]},3).to({state:[]},1).wait(7));

	// Ñëîé 4
	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#C9D6FF").s().p("AgKAXQgKgFgEgKQgDgJAFgJQAEgKAKgEQAJgDAKAFQAKAEADAKQAEAJgFAKQgFAKgKADIgIACQgFAAgFgDg");
	this.shape_514.setTransform(-2.3,-1.1);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#EAF1FF").s().p("AgKAWQgIgFgEgJQgEgIAFgKQAFgIAJgEQAIgDAKAEQAIAEAEAJQADAJgEAKQgFAIgJAEIgIACQgEAAgGgDg");
	this.shape_515.setTransform(-2.6,-1.9);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#C9D6FF").s().p("AgHASQgHgDgDgIQgDgHADgHQADgHAIgDQAGgDAHADQAIADADAIQADAGgDAIQgDAHgIADIgHACIgHgCg");
	this.shape_516.setTransform(4.5,-0.5);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#EAF1FF").s().p("AgGARQgHgDgDgHQgDgHADgGQADgHAHgDQAGgDAHADQAHADADAHQADAGgDAHQgDAHgHADIgHACIgGgCg");
	this.shape_517.setTransform(4.8,-1.1);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#C9D6FF").s().p("AgDAXQgKgCgGgIQgFgIACgJQACgJAIgGQAIgFAJACQAJACAGAIQAFAIgCAJQgCAJgIAGQgGAEgGAAIgEgBg");
	this.shape_518.setTransform(1,-1.2);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#EAF1FF").s().p("AgDAWQgJgCgFgIQgGgHACgIQACgKAIgFQAHgFAIACQAJACAFAHQAGAIgCAIQgCAJgHAFQgGAEgHAAIgDAAg");
	this.shape_519.setTransform(1.2,-1.9);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#C9D6FF").s().p("AgTAfQgOgKgEgPQgFgOAJgNQAIgNAQgDQAPgCAOAJQAOAKAFAPQAEAPgJANQgIAMgQADIgHAAQgLAAgLgHg");
	this.shape_520.setTransform(-4.5,-2.7);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#EAF1FF").s().p("AgTAfQgNgJgEgPQgDgPAIgMQAIgNAPgCQAPgDANAJQANAIAEAPQADAOgIANQgIANgQADIgHAAQgKAAgKgGg");
	this.shape_521.setTransform(-5.3,-3.2);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#C9D6FF").s().p("AgPAfQgNgHgEgOQgFgMAHgNQAHgMAOgFQAMgFANAHQANAGAEAOQAEANgGANQgHANgNAEQgGACgFAAQgHAAgIgEg");
	this.shape_522.setTransform(4.9,-2.4);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#EAF1FF").s().p("AgPAfQgNgHgEgOQgEgMAGgNQAHgNANgEQANgEANAGQAMAHAFANQAFANgHAMQgGAOgOAEQgGACgFAAQgHAAgIgEg");
	this.shape_523.setTransform(5.5,-2.9);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#C9D6FF").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_524.setTransform(0.3,-3.9);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#EAF1FF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQALgKANAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgNAAgLgKg");
	this.shape_525.setTransform(0.3,-5.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#C9D6FF").s().p("AgeAfQgNgNAAgSQAAgRANgNQAMgNASAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgSAAgMgNg");
	this.shape_526.setTransform(-0.9,-0.7);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#C9D6FF").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgLAPAAQAQAAAMALQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_527.setTransform(-1.1,2.5);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#C9D6FF").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_528.setTransform(3,1.2);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#C9D6FF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_529.setTransform(5.4,-2.9);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#C9D6FF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgJAKgPAAQgNAAgKgKg");
	this.shape_530.setTransform(-4.6,-2.9);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#C9D6FF").s().p("AgVAXQgKgKAAgNQAAgMAKgJQAJgKAMAAQANAAAJAKQAKAJAAAMQAAANgKAKQgJAJgNAAQgMAAgJgJg");
	this.shape_531.setTransform(0.3,-5.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#B2C1FF").s().p("AghBYQgUgFgKgSQgLgSAFgVQADgIADgEQgOgEgKgLQgJgLAAgPQAAgTANgNQANgNASAAQAKAAAHAEQANgVAYAAQAYAAANAUQAHgDAHAAQASAAANANQANANAAATQAAAWgSANIABAGQAEAUgNASQgMARgUADQgKACgLgCQgKALgMAFQgIACgHAAQgHAAgHgCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514}]},2).to({state:[]},1).wait(8));

	// Ñëîé 2
	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#C9D6FF").s().p("AgFAMQgFgDgCgFQgCgFADgFQADgFAFgBQAFgCAFADQAFADABAFQACAFgDAEQgDAFgFACIgEABQgCAAgDgCg");
	this.shape_533.setTransform(0.7,0.5);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#C9D6FF").s().p("AgGAMQgFgDgBgFQgCgFADgFQADgFAFgBQAFgCAFADQAFADABAFQACAFgDAEQgDAFgFACIgEABQgCAAgEgCg");
	this.shape_534.setTransform(-0.7,0.5);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#C9D6FF").s().p("AgFAMQgFgDgCgFQgCgFADgFQADgFAFgBQAFgCAFADQAFADABAFQACAFgDAFQgDAFgFABIgEABQgCAAgDgCg");
	this.shape_535.setTransform(0,-1.8);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#C9D6FF").s().p("AgGAMQgFgDgBgFQgCgFADgFQADgFAFgBQAFgCAFADQAFADABAFQACAFgDAFQgDAFgFABIgEABQgCAAgEgCg");
	this.shape_536.setTransform(1.9,-1.4);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#C9D6FF").s().p("AgGAMQgFgDgBgFQgCgFADgFQADgFAFgBQAFgCAFADQAFADABAFQACAFgDAFQgDAFgFABIgEABQgCAAgEgCg");
	this.shape_537.setTransform(-2.3,-1.4);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#B2C1FF").s().p("AgOAmQgJgCgEgIQgFgIACgJIADgFQgPgFAAgNQAAgIAGgGQAGgFAIAAQAEAAADABQAGgJAKAAQALAAAFAJIAGgBQAJAAAFAFQAGAGAAAIQAAAJgJAGIABADQACAJgFAHQgGAIgJABQgDABgGgBQgGAJgJAAIgHgCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533}]},1).to({state:[]},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#70B11A").s().p("AgBAVQgcgKhpgoIAkgfQAvAeBDAhIB3A6Qg9gMhLgcg");
	this.shape.setTransform(-2.3,7.2,0.1,0.1);

	this.instance = new lib.hand2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(6.1,-13.6,1,1,130,0,0,-14.3,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-14.4,15.6,28.4);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#261A0A").ss(0.6,1,1).p("AAngYQAAAGgEAIQgDAIgPATQgPAUgPgRQgQgRgFgKQgGgNADgBQADgBAVAHQATAIAQgMQAQgMABAHg");
	this.shape.setTransform(0.9,12.8,1.043,1,0,0,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("AgNAUQgQgRgFgKQgGgNADgBQADgBAVAHQATAIAQgMQAQgMABAHQAAAGgEAIQgDAIgPATQgIALgJAAQgGAAgHgIg");
	this.shape_1.setTransform(0.9,12.8,1.043,1,0,0,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAFAD6").s().p("AhDB3QgJgGgKgLQgFgGgIgBQgLgCgLgQQgNgSgGgZQgJgpgXgWQgIgHgVACQgPABAAgPQAAgNAGgLQAHgKAKgEIATABQAGADAPAPQAQAQAaAQQAvAdBXAAQAjAAAEgCIAlgZQAMgIAIgJQAEgGAGgMQANgZAZgVQAWgSAOAAIABAAQAHgKAFATQABAEAAAPQAAAVgLAPQgJALgaAUQgaAVgTAQQghAbgMAHQgNAHgEAHQgEAHAAALQgBAVgEAMQgFARgPAFQgQAGgXAEQgTADgIAAQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAQgIAAgZgSg");
	this.shape_2.setTransform(0.3,4.1);

	this.instance = new lib.eye_mc();
	this.instance.parent = this;
	this.instance.setTransform(-8.4,-13.2,1,1,-4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F396BE").s().p("Ah3BpQg+gLhcgfQAOgxAmgiQAogkAygCQAggCAmANQAaAKAkAWQAMAIATACIAjADQgNgrg2gpQAigVAmgEQAogGAkAPQAqAPAhArQAUAaAfA4QgvAehCASQgsAMhPALQgdAFggAAQgtAAgzgJg");
	this.shape_3.setTransform(-1.5,13.8,0.1,0.1,-4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#933361").s().p("AkqhMQBdgXChgfQC2gkBGgPQBOBGANCWQh3AOg9A+QgQAOgoA1Qi3hLiyi3g");
	this.shape_4.setTransform(-5.6,12.5,0.1,0.1,-4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B54F7C").s().p("AhnhYQBFgSCJgZQgrCMAYBnQgUALgbAEQgTADgeACQgNiWhOhGg");
	this.shape_5.setTransform(-2.6,11.3,0.1,0.1,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2F6FE").s().p("ADsB2QkfABjzg9IADhXQACgzAGglQCFBQDSBMQBjAkCIAZQgeASgZAAIgEAAg");
	this.shape_6.setTransform(-7.6,6.7,0.1,0.1,-4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2F6FE").s().p("AgNCCIgGgCQgihRgSg6QgZhNgIhEQBfBDBxAyQACAjgEA/QgEBEABAeQhDgTgtgIg");
	this.shape_7.setTransform(-12.1,5.9,0.1,0.1,-4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAFAD6").s().p("AlQZXQgkgGhQgIQhLgIgogHQlNg2kniQQiVhKjHiAQjkiWiujEQi2jPhqjuIhJiQQgohTgZhBQhcj3gZjjQgJhoAAg0QADj6BMi2QAuhuBKhXQBOhcBjg1QDEhsEnAtQApAHBRANQBIAMAxAPQCMAoCqBnIBpBMQBjBJB1BKQAaAOBeAtQBKAkAsAaQAbgOA4ghQA1ggAegPQCFhDCNgiQCQglCRABQCRgCCRAfQCPAgCGA+QBLhvBdhfQBChGBchIQA9gxBvhNQEXjQEJgOQBygHBuAnQBuAnBTBOQCjCWBFEtQAjDUgHCaIgCBgQgCA4gGAnQgLA9gSB6QgSBrgZBJQgrCdhuDFQhABwiGDdQiGDRi5CrQi4CrjcB2Qj+CNkpBZQlWBkkWAaQjBAWioAAQhLAAhGgFgA8AvKIAxCIQAUA3ArA/QALAQBFBcQBFBaBHA8IAhAeQASATAFATIAmCmQAXBgAZBDIAtByQAaBDAYAuQB8D6DsC8QDACcDdA8QBLATAzAHQBFAJA6gKQBfgOAogKQBKgSA0gfIA8giQAkgTAeAAQALApAKAcIAqgKQgJgtgGgVQgLgngbgOQgcgIgjAOIg5AfIgohDQgZglgYgWQgggagwgGQgegFg6ACQgJg+AIg4QAJg+AdgwQAGgOARgDQAKgCAUgCIBggOQA2gKApgNQABgrgUg0QgFgOgjhKQC2gZB3gWQCkgdCFgnQDKhLBygwQCshICGhKQCRhXBBgsQByhNBOhOQBLhPBVhrQAxg/BjiFQAng4AwhTIBRiOQAagpAMgfQAQgqgDgnIgXAEIhEBhQgqA6gWAoQg9BjgbAqQgyBOgsA6Ig/BNQgkAtgYAjQgfAvgyA0QgbAchAA8Qg4A1hZA7IiZBkQgfAWg3AYQhGAggRAJQhTAqhpArQhHAdh6AuQiDA0iqAiQhwAWjFAbQiiARi9gSQiZgPjDgsQkEhDkXioQhAgkgggVQg1ghgmggQh2hrhMhYQhihxg6hxQg9iVgdiKIBGgBQApgBAegFQgMgkgmgPQgggMgqAFQhMAAhGAwQhAArgsBGQgjAyAKBSQAagRAZgpQAhg4AIgKQAegmA7goQAYA0AeBTg");
	this.shape_8.setTransform(0.3,6.8,0.1,0.1,-4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F8E26").s().p("AgvBWQghgXgJglQgLgnAXgnQAXgnApgKQAVgGAcAHQAMADAkAPQAAA0AJBnIgiATQgUAKgQACIgNABQgdAAgcgTg");
	this.shape_9.setTransform(-25.7,4.4,0.1,0.1,-4.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F8E26").s().p("AgsjFQAkAVATAOQAnAvANAnQAZBHgcBKQgcBLhCAjIgnATQgDjkAging");
	this.shape_10.setTransform(-27.2,0.8,0.1,0.1,-4.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F8E26").s().p("AgVAhQgOgPgHgFQAKgZAOgdQAJADAUADQASAFAHAMQANARgLAWQgMAWgWgBIgEAAQgKAAgLgJg");
	this.shape_11.setTransform(-26.6,-1.6,0.1,0.1,-4.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5F8E26").s().p("AABA2QgPAAgdgJQgIgcgCgPQgDgYAOgPQANgQAZgBIApAEQAOAdADAPQAEAZgQARQgOATgZAAIgCgBg");
	this.shape_12.setTransform(-25.5,-4.6,0.1,0.1,-4.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F8E26").s().p("AgBBhQgqABgdghQgegiAFgoQABgXAQgWQAKgQAWgVQAsgMA9APIAcAnQAOAYAAAWQADAoggAfQgdAdgkAAIgGAAg");
	this.shape_13.setTransform(-18.4,-7.8,0.1,0.1,-4.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5F8E26").s().p("AgWApQgYgMAAgdQgBgcAXgNQATgLAVAIQAXAJAFAVQAMAcgbAWQgPAMgOAAQgLAAgLgHg");
	this.shape_14.setTransform(11.2,-10.7,0.1,0.1,-4.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5F8E26").s().p("AgOC1QhUgCg7g0QgngegehCQBVhNBtg2QBmg0B2gcQAeA8AIAoQAFA/gYA5QgaA8gyAkQg7AthNAAIgJAAg");
	this.shape_15.setTransform(-22.9,-7.3,0.1,0.1,-4.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5F8E26").s().p("AgkA1QgbgPgHgbQgHgPAGgVIAMgkQBCAYBEAlIgXAiQgPAUgTAFQgKADgJAAQgSAAgRgJg");
	this.shape_16.setTransform(18.3,-12,0.1,0.1,-4.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5F8E26").s().p("Ah5A+Qg9gggphUQBugeBxgEQBzgEBtAYIgSAAIggA6QgVAfgXARQgzAshHAGIgWACQg5AAgygcg");
	this.shape_17.setTransform(14.5,-11.9,0.1,0.1,-4.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjtiAQCKAUBHAHQBzALBegGIA5CFQheAYiDAaIjiAqQgTh+gFiDg");
	this.shape_18.setTransform(-1.5,8.6,0.1,0.1,-4.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AkLCTIgtg4IgBiSQgChbAFg4QDzA8EfgBQAbABAhgTIAPgBQAHCqANBoQhEAPhzAWQiGAYgwAKQhrAThCACQgRgXgbgig");
	this.shape_19.setTransform(-7.3,9.3,0.1,0.1,-4.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag4h1IABgGQAvAIBBATQABB9gKBfQhKiUgehdg");
	this.shape_20.setTransform(-11.5,8.4,0.1,0.1,-4.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8CC63E").s().p("AJGYmQlehbkwizQjqiCiniKQg2gugagYQgtgpgbgjQgUgzgigmQgZgeghg3QgphEgPgVQgZgigig/QgphJgRgaQgYgogohPQgphTgWglQgbgwgdhKQgehTgRgpQgnhrgKihQgFi3gIhaQBDgjAchMQAchKgZhIQgNgngnguIAVg7QAIAFANAPQANALANgCQAXABALgWQALgXgNgRQgHgMgSgFQgVgDgJgDQAUgvAhg4IA9hjQAcAJARAAQAaABAOgTQARgRgEgaQgEgPgNgdQApgqAqgfQA7AzBUADQBUACA+gwQAygjAZg8QAYg6gEg/QBIgUBmgFQgWAVgLAPQgPAXgCAXQgEApAdAhQAeAiApgBQApADAgggQAggggEgpQABgVgOgYIgcgnQBOANATAFQAZAGBxAQQBUAMAyAYQAJARAKAeIARAvQAsBuA7BWQATAcAqAxQAsAzASAZQirhniMgoQgwgPhIgMQhQgNgpgHQkogtjDBsQhjA1hPBcQhJBXguBuQhMC2gED6QgkgPgLgDQgcgHgXAGQgoAKgYAnQgXAnAMAoQAJAlAhAXQAhAXAmgFQAQgCAUgKIAigTQAYDjBdD3QAYBBApBTIBICQQBqDuC3DPQCuDEDjCWQDHCACVBKQEmCQFOA2QAoAHBLAIQBQAIAjAGIgVAAQkMAAlLhSg");
	this.shape_21.setTransform(-15,7.6,0.1,0.1,-4.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8CC63E").s().p("A1oPzQhegtgagOQh2hKhihJQAiALBDAbQA8AXArAGQBkAUBsgVQBjgUBgg0QCxhdB8jWIBNBSQAtAvAoAbQBjBIB6AXQB8AXB0gkQBwggBghSQBahLBAhrQBTiHAiilQAgidgRikQgHijg0iUQg2idhih4QhHhXhZg7Qhfg+hpgVQitgXhzA3QguAVgzAlQgeAWg6AxQBUhuBzg+QB/hDCAAMQB9AGBjBBQB1BJBhBvQBkCAAtCYQA4CZACCdQgCBjgCAsQgEBPgKA9QgOBogCAhQCIhWB9giQApBVA9AgQA7AhBHgHQBHgGAzgsQAXgRAVggIAgg6IASAAQAWAFAdAJIAzAQIgNAkQgFAVAGAQQAIAbAbAPQAbAOAbgIQAUgFAOgUIAYgjQDABsB7DCQB5DCARDdQhFktijiWQhThOhugnQhugnhyAHQkJAOkXDQQhvBNg9AxQhcBIhCBGQhdBfhMBvQiFg+iOggQiRgfiSACQiQgBiRAlQiNAiiFBDQgeAPg2AgQg4AhgbAOQgrgahKgkgAG+C7QgXANABAdQAAAcAYAMQAaARAagWQAbgWgMgcQgEgWgXgIQgKgDgJAAQgMAAgLAGg");
	this.shape_22.setTransform(6.4,-12.6,0.1,0.1,-4.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8CC63E").s().p("AqhF3QgSicAaiaQAbidBHiJQBBiABihjQBnhoB9g6QAkgTBAgTQBNgXAYgKQBwgGB6A7QBGAdBIA4QAzAoBIBGQAaAZAeAmIAzBFIAgAwQAQAdACAaIhLhlQgtg6gngjQhohfh4gzQiEg3iCAIQiIAKh9BMQh4BIhUB0QiUDCgoE2QgQDCAhCGQABAiAHA3IAJBYQhBh/gZi8g");
	this.shape_23.setTransform(-9.1,-16.3,0.1,0.1,-4.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#70B11A").s().p("AAAFMIiMkRQhTiigdh4QgehugNiLQgIhfgEicIAngTQAIBaAFC3QAKChAnBrQARAqAeBTQAdBKAbAvQAWAlApBTQAoBQAXAnQARAaApBJQAiA/AZAiQAPAVApBEQAhA3AZAfQAiAlAUAzQijiaiRkBg");
	this.shape_24.setTransform(-24.2,9.8,0.1,0.1,-4.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#70B11A").s().p("Ai8D/QAeieBQiLQBOiPB4hpQAeBCAnAfQgqAegpArIgqgEQgZABgNAQQgOAPADAZQACAOAIAdIg8BiQggA4gUAuQgOAegKAZIgVA8QgUgOgkgWg");
	this.shape_25.setTransform(-26.1,-3.8,0.1,0.1,-4.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#70B11A").s().p("AkbP7QgrgHg8gWQhDgbgigMIhqhLQgSgagrgzQgqgwgTgcQg7hWgshuIgRgwQgKgdgKgRQgxgZhVgMQhxgPgZgHQgTgEhPgOQg9gPgsAMQhmAFhIAUQgIgogeg8QCMgcCCAKQCQALB1A4QgwjcAVi4QAIhYAFgsQALhMAVg1IAwiGQAdhPAcgzQBDh8BZhlQB0htBqgvQCLg6BqASQgYAKhOAXQhAATgkATQh9A6hnBoQhiBjhBCAQhHCJgbCeQgaCaASCbQAZC8BBB/IgJhYQgHg3gBgiQAmCFAkBXQAxB1A/BWQA3BIAyAxQA9A8BBAlQAvAfBDAZQAjANBXAZQBhALBdgQQBhgRBQgvQBkg2BSheQBKhUA3hwQAsA9AgAkQAsAyAuAfQBtBPB8AcQBqAaBzgiQBrgfBahKQBthaBHiMQA5hlAYiGQAThrABiOQARCkghCeQghCkhTCIQhBBqhaBMQhhBRhwAhQhzAjh8gXQh6gWhjhJQgogagtgvIhNhTQh8DWixBeQhgA0hiATQg4ALg2AAQgyAAgwgJg");
	this.shape_26.setTransform(-6,-13.2,0.1,0.1,-4.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#261A0A").s().p("AmWRrQgzgGhLgUQjdg8jAibQjsi8h8j7QgYgugahDIgthzQgZhCgXhgIgmilQgFgUgSgSIghgfQhHg7hFhbQhFhbgLgRQgrg/gUg3IgxiIQgehTgYgzQg7AngeAmQgIALghA3QgZApgaASQgKhSAjgyQAshGBAgrQBGgwBMAAQAqgGAgANQAmAPAMAkQgeAEgpACIhGABQAdCKA9CVQA6BxBiBxQBMBXB2BrQAmAgA1AiQAgAUBAAlQEXCmEEBEQDDArCZAQQC9ATCigTQDFgaBwgXQCqgiCDg0QB6gtBHgdQBpgrBTgpQARgJBGggQA3gZAfgVICZhkQBZg8A4g0QBAg9AbgcQAygzAfgvQAYgjAkgtIA/hOQAsg6AyhOQAbgqA9hjQAWgnAqg7IBEhgIAXgEQADAmgQAqQgMAggaAoIhRCPQgwBTgnA3QhjCGgxA+QhVBrhLBPQhOBOhyBOQhBAsiRBXQiGBIisBJQhyAvjKBMQiFAnikAeQh3AVi1AZQAjBLAEAOQAUA0gBArQgoANg2AJIhhAPQgUABgKACQgRAEgGANQgdAwgJA/QgIA4AJA+QA6gCAeAEQAwAHAgAZQAZAWAZAmIAoBCIA4geQAjgOAcAIQAbAOALAmQAGAWAJAsIgqALQgKgdgLgpQgeAAgkATIg7AiQg0AghLASQgoAKhfAOQgeAEghAAQgfAAghgEgAnCOOQgyACgoAkQgnAjgNAxQBcAfA+ALQBWAPBIgLQBPgLArgMQBDgSAvgeQgfg5gUgaQgigrgpgPQgkgPgpAGQglAEgkAVQA4ApANArIgjgDQgTgCgNgIQgkgWgbgKQgfgLgcAAIgKAAgAoAJyQhFAQi4AkQihAfhdAXQCzC4C3BLQAog1AQgPQA9g9B3gOQAfgCATgDQAbgFAUgLQgZhmAsiNQiKAZhFARgAyQC8IgDBYQgFA5ACBbIABCTIAtA4QAbAhARAXQBCgBBrgTQAwgKCHgZQBzgVBEgPQgNhogHirIgPABQiIgZhjgkQjThNiGhQQgGAlgCAzgAnqJGIDjgrQCEgZBdgZIg5iFQhdAFh0gLQhHgGiKgVQAECFATB+gA1tBfQASA7AiBRIAGACIgCAGQAeBdBLCVQALhfgBh+QgBgeAEhEQAEhAgCgjQhygyhfhCQAIBDAZBNg");
	this.shape_27.setTransform(0.9,3.9,0.1,0.1,-4.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#261A0A").s().p("AheDlIgNgEIAAgBQgEgDgEAAIgCAAQgXgKgbgQQgagQgTgUQgVgWgMgZIgMgXQgGgNgDgLQgFgRgBgYQgBgRADgYQADgYAMgWQANgWAUgNQAPgJAQgDQARgEAQADIAJACQAFABADACQgEgOABgRQABgPAEgRQADgNAGgMQAHgNAJgJIAJgIIAKgHQAMgHASgCQAGgBAHACIANAEQAOAFANALQALAKAHAOQAIgNAKgIIAHgFIAIgEIAIgDIAJgBIAJABIAKABQAMAEALAKQAJAIAHAMQAIAMAFATQADANAAAPQAAAMgDARQALgIAPgDQANgEAPABQAPABAPAGQAPAGALALQALAKAHAMQAHAMAEAPIADAPIACAPQADAOgBARIgEAgQgGAagOAXIgHANIgIAMQgLAUgRASQgRASgUANQghAXgsANIgCAAIgGABIgBACQgsAMgrAAQgvAAgrgMgAi7hoQgMADgKAFQgLAGgIAIQgMAKgIAOQgIAOgDAQQgDARAAAVIABAZQABAOADALQADAMAJARIANAbQAPAZAQAQIAIAHIAHAHQARAOAXANQAfASAjAJQAiAIAcAAQAVABAcgDQAcgCAigKQAdgJAagOQAWgMASgRQASgRAOgVIAUghQAKgUAFgPIAEgSIADgTIABgJIAAgKQABgOgEgVQgBgWgNgTQgMgUgTgLIgNgGIgFgBIgGgCQgKgCgMAAQgLABgLADQgNADgNAJIABgOIACgOIAAgOQAAgQgGgPQgEgPgKgNQgKgLgMgHQgJgHgNAAQgNgCgMAHQgMAGgIALIAJgHIAJgGQAMgFARACQAKACAKAGQAJAGAHAJQAKAMAFAQQAFAOABARQAAAOgCAKQgCAOgGAKQgHAOgLAJQgJAHgLADQgLAEgLgDQgMgDgLgIIgJgIIgHgJQgGALgGAIQgIAKgKAFQgIAFgKABQgJACgKgBIgMgEQgHgCgEgEQgHgDgGgGIgKgMQgHgJgFgMIgHgVQgDgOABgTQAEgfAPgUQAIgLAMgHQANgIANgBQANgBAOAGQAMAFAKAJIAIAKIAHAKQAAgDgCgDIgDgFIgEgGIgGgHIgMgLQgHgFgHgDQgNgGgLABQgKgCgOAGQgLAEgLALQgJAKgHANQgDAFgCAIIgFANIgDANIgCANQgCASAFAWQgMgFgOgBIgIAAQgJAAgKABgAhGjZQgJADgHAGQgIAGgGAJQgGAIgEAKQgFAPgBARQgBARAEAQQADAPAIANQAIAOALAJQAIAHAKAEQAKADAKgBQAOAAANgJQAMgJAGgNIADgGIADgGQAHgSAAgUQAAgTgGgTQgIgZgPgNQgHgHgKgFQgJgEgLAAIgCAAQgIAAgHACgAAojUQgLAEgIAJQgIAIgGALIAEAGQAGAQACASQACARgDASIgCAGIgBAGIgCAGQALASAQAIQAIAEAKAAQAJAAAJgEQAKgEAIgJQAHgJAEgLQAHgPABgRQABgQgEgQQgEgNgGgLQgGgLgJgIQgJgJgMgDIgLgBQgHAAgGACg");
	this.shape_28.setTransform(-1.6,-0.1,1,1,-4.2);

	this.instance_1 = new lib.eye_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.2,-13.8,0.928,0.928,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-23.7,54.5,47.8);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eye_mc();
	this.instance.parent = this;
	this.instance.setTransform(-5.2,-13.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F396BE").s().p("Ah3BpQg+gLhcgfQAOgxAmgiQAogkAygCQAggCAmANQAaAKAkAWQAMAIATACIAjADQgNgrg2gpQAigVAmgEQAogGAkAPQAqAPAhArQAUAaAfA4QgvAehCASQgsAMhPALQgdAFggAAQgtAAgzgJg");
	this.shape.setTransform(-0.9,13.9,0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#933361").s().p("AkqhMQBdgXChgfQC2gkBGgPQBOBGANCWQh3AOg9A+QgQAOgoA1Qi3hLiyi3g");
	this.shape_1.setTransform(-4.9,12.3,0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B54F7C").s().p("AhnhYQBFgSCJgZQgrCMAYBnQgUALgbAEQgTADgeACQgNiWhOhGg");
	this.shape_2.setTransform(-1.8,11.4,0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2F6FE").s().p("ADsB2QkfABjzg9IADhXQACgzAGglQCFBQDSBMQBjAkCIAZQgeASgZAAIgEAAg");
	this.shape_3.setTransform(-6.5,6.4,0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2F6FE").s().p("AgNCCIgGgCQgihRgSg6QgZhNgIhEQBfBDBxAyQACAjgEA/QgEBEABAeQhDgTgtgIg");
	this.shape_4.setTransform(-10.9,5.3,0.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAFAD6").s().p("AlQZXQgkgGhQgIQhLgIgogHQlNg2kniQQiVhKjHiAQjkiWiujEQi2jPhqjuIhJiQQgohTgZhBQhcj3gZjjQgJhoAAg0QADj6BMi2QAuhuBKhXQBOhcBjg1QDEhsEnAtQApAHBRANQBIAMAxAPQCMAoCqBnIBpBMQBjBJB1BKQAaAOBeAtQBKAkAsAaQAbgOA4ghQA1ggAegPQCFhDCNgiQCQglCRABQCRgCCRAfQCPAgCGA+QBLhvBdhfQBChGBchIQA9gxBvhNQEXjQEJgOQBygHBuAnQBuAnBTBOQCjCWBFEtQAjDUgHCaIgCBgQgCA4gGAnQgLA9gSB6QgSBrgZBJQgrCdhuDFQhABwiGDdQiGDRi5CrQi4CrjcB2Qj+CNkpBZQlWBkkWAaQjBAWioAAQhLAAhGgFgA8AvKIAxCIQAUA3ArA/QALAQBFBcQBFBaBHA8IAhAeQASATAFATIAmCmQAXBgAZBDIAtByQAaBDAYAuQB8D6DsC8QDACcDdA8QBLATAzAHQBFAJA6gKQBfgOAogKQBKgSA0gfIA8giQAkgTAeAAQALApAKAcIAqgKQgJgtgGgVQgLgngbgOQgcgIgjAOIg5AfIgohDQgZglgYgWQgggagwgGQgegFg6ACQgJg+AIg4QAJg+AdgwQAGgOARgDQAKgCAUgCIBggOQA2gKApgNQABgrgUg0QgFgOgjhKQC2gZB3gWQCkgdCFgnQDKhLBygwQCshICGhKQCRhXBBgsQByhNBOhOQBLhPBVhrQAxg/BjiFQAng4AwhTIBRiOQAagpAMgfQAQgqgDgnIgXAEIhEBhQgqA6gWAoQg9BjgbAqQgyBOgsA6Ig/BNQgkAtgYAjQgfAvgyA0QgbAchAA8Qg4A1hZA7IiZBkQgfAWg3AYQhGAggRAJQhTAqhpArQhHAdh6AuQiDA0iqAiQhwAWjFAbQiiARi9gSQiZgPjDgsQkEhDkXioQhAgkgggVQg1ghgmggQh2hrhMhYQhihxg6hxQg9iVgdiKIBGgBQApgBAegFQgMgkgmgPQgggMgqAFQhMAAhGAwQhAArgsBGQgjAyAKBSQAagRAZgpQAhg4AIgKQAegmA7goQAYA0AeBTg");
	this.shape_5.setTransform(1.4,7.1,0.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5F8E26").s().p("AgvBWQghgXgJglQgLgnAXgnQAXgnApgKQAVgGAcAHQAMADAkAPQAAA0AJBnIgiATQgUAKgQACIgNABQgdAAgcgTg");
	this.shape_6.setTransform(-24.3,2.7,0.1,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F8E26").s().p("AgsjFQAkAVATAOQAnAvANAnQAZBHgcBKQgcBLhCAjIgnATQgDjkAging");
	this.shape_7.setTransform(-25.5,-1,0.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5F8E26").s().p("AgVAhQgOgPgHgFQAKgZAOgdQAJADAUADQASAFAHAMQANARgLAWQgMAWgWgBIgEAAQgKAAgLgJg");
	this.shape_8.setTransform(-24.8,-3.3,0.1,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F8E26").s().p("AABA2QgPAAgdgJQgIgcgCgPQgDgYAOgPQANgQAZgBIApAEQAOAdADAPQAEAZgQARQgOATgZAAIgCgBg");
	this.shape_9.setTransform(-23.4,-6.2,0.1,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F8E26").s().p("AgBBhQgqABgdghQgegiAFgoQABgXAQgWQAKgQAWgVQAsgMA9APIAcAnQAOAYAAAWQADAoggAfQgdAdgkAAIgGAAg");
	this.shape_10.setTransform(-16.2,-8.8,0.1,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F8E26").s().p("AgWApQgYgMAAgdQgBgcAXgNQATgLAVAIQAXAJAFAVQAMAcgbAWQgPAMgOAAQgLAAgLgHg");
	this.shape_11.setTransform(13.6,-9.5,0.1,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5F8E26").s().p("AgOC1QhUgCg7g0QgngegehCQBVhNBtg2QBmg0B2gcQAeA8AIAoQAFA/gYA5QgaA8gyAkQg7AthNAAIgJAAg");
	this.shape_12.setTransform(-20.6,-8.7,0.1,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F8E26").s().p("AgkA1QgbgPgHgbQgHgPAGgVIAMgkQBCAYBEAlIgXAiQgPAUgTAFQgKADgJAAQgSAAgRgJg");
	this.shape_13.setTransform(20.8,-10.3,0.1,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5F8E26").s().p("Ah5A+Qg9gggphUQBugeBxgEQBzgEBtAYIgSAAIggA6QgVAfgXARQgzAshHAGIgWACQg5AAgygcg");
	this.shape_14.setTransform(16.9,-10.5,0.1,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AjtiAQCKAUBHAHQBzALBegGIA5CFQheAYiDAaIjiAqQgTh+gFiDg");
	this.shape_15.setTransform(-0.5,8.8,0.1,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AkLCTIgtg4IgBiSQgChbAFg4QDzA8EfgBQAbABAhgTIAPgBQAHCqANBoQhEAPhzAWQiGAYgwAKQhrAThCACQgRgXgbgig");
	this.shape_16.setTransform(-6.3,9,0.1,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag4h1IABgGQAvAIBBATQABB9gKBfQhKiUgehdg");
	this.shape_17.setTransform(-10.5,7.9,0.1,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8CC63E").s().p("AJGYmQlehbkwizQjqiCiniKQg2gugagYQgtgpgbgjQgUgzgigmQgZgeghg3QgphEgPgVQgZgigig/QgphJgRgaQgYgogohPQgphTgWglQgbgwgdhKQgehTgRgpQgnhrgKihQgFi3gIhaQBDgjAchMQAchKgZhIQgNgngnguIAVg7QAIAFANAPQANALANgCQAXABALgWQALgXgNgRQgHgMgSgFQgVgDgJgDQAUgvAhg4IA9hjQAcAJARAAQAaABAOgTQARgRgEgaQgEgPgNgdQApgqAqgfQA7AzBUADQBUACA+gwQAygjAZg8QAYg6gEg/QBIgUBmgFQgWAVgLAPQgPAXgCAXQgEApAdAhQAeAiApgBQApADAgggQAggggEgpQABgVgOgYIgcgnQBOANATAFQAZAGBxAQQBUAMAyAYQAJARAKAeIARAvQAsBuA7BWQATAcAqAxQAsAzASAZQirhniMgoQgwgPhIgMQhQgNgpgHQkogtjDBsQhjA1hPBcQhJBXguBuQhMC2gED6QgkgPgLgDQgcgHgXAGQgoAKgYAnQgXAnAMAoQAJAlAhAXQAhAXAmgFQAQgCAUgKIAigTQAYDjBdD3QAYBBApBTIBICQQBqDuC3DPQCuDEDjCWQDHCACVBKQEmCQFOA2QAoAHBLAIQBQAIAjAGIgVAAQkMAAlLhSg");
	this.shape_18.setTransform(-13.9,6.8,0.1,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8CC63E").s().p("A1oPzQhegtgagOQh2hKhihJQAiALBDAbQA8AXArAGQBkAUBsgVQBjgUBgg0QCxhdB8jWIBNBSQAtAvAoAbQBjBIB6AXQB8AXB0gkQBwggBghSQBahLBAhrQBTiHAiilQAgidgRikQgHijg0iUQg2idhih4QhHhXhZg7Qhfg+hpgVQitgXhzA3QguAVgzAlQgeAWg6AxQBUhuBzg+QB/hDCAAMQB9AGBjBBQB1BJBhBvQBkCAAtCYQA4CZACCdQgCBjgCAsQgEBPgKA9QgOBogCAhQCIhWB9giQApBVA9AgQA7AhBHgHQBHgGAzgsQAXgRAVggIAgg6IASAAQAWAFAdAJIAzAQIgNAkQgFAVAGAQQAIAbAbAPQAbAOAbgIQAUgFAOgUIAYgjQDABsB7DCQB5DCARDdQhFktijiWQhThOhugnQhugnhyAHQkJAOkXDQQhvBNg9AxQhcBIhCBGQhdBfhMBvQiFg+iOggQiRgfiSACQiQgBiRAlQiNAiiFBDQgeAPg2AgQg4AhgbAOQgrgahKgkgAG+C7QgXANABAdQAAAcAYAMQAaARAagWQAbgWgMgcQgEgWgXgIQgKgDgJAAQgMAAgLAGg");
	this.shape_19.setTransform(8.9,-11.8,0.1,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8CC63E").s().p("AqhF3QgSicAaiaQAbidBHiJQBBiABihjQBnhoB9g6QAkgTBAgTQBNgXAYgKQBwgGB6A7QBGAdBIA4QAzAoBIBGQAaAZAeAmIAzBFIAgAwQAQAdACAaIhLhlQgtg6gngjQhohfh4gzQiEg3iCAIQiIAKh9BMQh4BIhUB0QiUDCgoE2QgQDCAhCGQABAiAHA3IAJBYQhBh/gZi8g");
	this.shape_20.setTransform(-6.3,-16.6,0.1,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#70B11A").s().p("AAAFMIiMkRQhTiigdh4QgehugNiLQgIhfgEicIAngTQAIBaAFC3QAKChAnBrQARAqAeBTQAdBKAbAvQAWAlApBTQAoBQAXAnQARAaApBJQAiA/AZAiQAPAVApBEQAhA3AZAfQAiAlAUAzQijiaiRkBg");
	this.shape_21.setTransform(-23.2,8.2,0.1,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#70B11A").s().p("Ai8D/QAeieBQiLQBOiPB4hpQAeBCAnAfQgqAegpArIgqgEQgZABgNAQQgOAPADAZQACAOAIAdIg8BiQggA4gUAuQgOAegKAZIgVA8QgUgOgkgWg");
	this.shape_22.setTransform(-24.1,-5.5,0.1,0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#70B11A").s().p("AkbP7QgrgHg8gWQhDgbgigMIhqhLQgSgagrgzQgqgwgTgcQg7hWgshuIgRgwQgKgdgKgRQgxgZhVgMQhxgPgZgHQgTgEhPgOQg9gPgsAMQhmAFhIAUQgIgogeg8QCMgcCCAKQCQALB1A4QgwjcAVi4QAIhYAFgsQALhMAVg1IAwiGQAdhPAcgzQBDh8BZhlQB0htBqgvQCLg6BqASQgYAKhOAXQhAATgkATQh9A6hnBoQhiBjhBCAQhHCJgbCeQgaCaASCbQAZC8BBB/IgJhYQgHg3gBgiQAmCFAkBXQAxB1A/BWQA3BIAyAxQA9A8BBAlQAvAfBDAZQAjANBXAZQBhALBdgQQBhgRBQgvQBkg2BSheQBKhUA3hwQAsA9AgAkQAsAyAuAfQBtBPB8AcQBqAaBzgiQBrgfBahKQBthaBHiMQA5hlAYiGQAThrABiOQARCkghCeQghCkhTCIQhBBqhaBMQhhBRhwAhQhzAjh8gXQh6gWhjhJQgogagtgvIhNhTQh8DWixBeQhgA0hiATQg4ALg2AAQgyAAgwgJg");
	this.shape_23.setTransform(-3.4,-13.3,0.1,0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#261A0A").s().p("AmWRrQgzgGhLgUQjdg8jAibQjsi8h8j7QgYgugahDIgthzQgZhCgXhgIgmilQgFgUgSgSIghgfQhHg7hFhbQhFhbgLgRQgrg/gUg3IgxiIQgehTgYgzQg7AngeAmQgIALghA3QgZApgaASQgKhSAjgyQAshGBAgrQBGgwBMAAQAqgGAgANQAmAPAMAkQgeAEgpACIhGABQAdCKA9CVQA6BxBiBxQBMBXB2BrQAmAgA1AiQAgAUBAAlQEXCmEEBEQDDArCZAQQC9ATCigTQDFgaBwgXQCqgiCDg0QB6gtBHgdQBpgrBTgpQARgJBGggQA3gZAfgVICZhkQBZg8A4g0QBAg9AbgcQAygzAfgvQAYgjAkgtIA/hOQAsg6AyhOQAbgqA9hjQAWgnAqg7IBEhgIAXgEQADAmgQAqQgMAggaAoIhRCPQgwBTgnA3QhjCGgxA+QhVBrhLBPQhOBOhyBOQhBAsiRBXQiGBIisBJQhyAvjKBMQiFAnikAeQh3AVi1AZQAjBLAEAOQAUA0gBArQgoANg2AJIhhAPQgUABgKACQgRAEgGANQgdAwgJA/QgIA4AJA+QA6gCAeAEQAwAHAgAZQAZAWAZAmIAoBCIA4geQAjgOAcAIQAbAOALAmQAGAWAJAsIgqALQgKgdgLgpQgeAAgkATIg7AiQg0AghLASQgoAKhfAOQgeAEghAAQgfAAghgEgAnCOOQgyACgoAkQgnAjgNAxQBcAfA+ALQBWAPBIgLQBPgLArgMQBDgSAvgeQgfg5gUgaQgigrgpgPQgkgPgpAGQglAEgkAVQA4ApANArIgjgDQgTgCgNgIQgkgWgbgKQgfgLgcAAIgKAAgAoAJyQhFAQi4AkQihAfhdAXQCzC4C3BLQAog1AQgPQA9g9B3gOQAfgCATgDQAbgFAUgLQgZhmAsiNQiKAZhFARgAyQC8IgDBYQgFA5ACBbIABCTIAtA4QAbAhARAXQBCgBBrgTQAwgKCHgZQBzgVBEgPQgNhogHirIgPABQiIgZhjgkQjThNiGhQQgGAlgCAzgAnqJGIDjgrQCEgZBdgZIg5iFQhdAFh0gLQhHgGiKgVQAECFATB+gA1tBfQASA7AiBRIAGACIgCAGQAeBdBLCVQALhfgBh+QgBgeAEhEQAEhAgCgjQhygyhfhCQAIBDAZBNg");
	this.shape_24.setTransform(2.3,4.3,0.1,0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#261A0A").s().p("AheDlIgNgEIAAgBQgEgDgEAAIgCAAQgXgKgbgQQgagQgTgUQgVgWgMgZIgMgXQgGgNgDgLQgFgRgBgYQgBgRADgYQADgYAMgWQANgWAUgNQAPgJAQgDQARgEAQADIAJACQAFABADACQgEgOABgRQABgPAEgRQADgNAGgMQAHgNAJgJIAJgIIAKgHQAMgHASgCQAGgBAHACIANAEQAOAFANALQALAKAHAOQAIgNAKgIIAHgFIAIgEIAIgDIAJgBIAJABIAKABQAMAEALAKQAJAIAHAMQAIAMAFATQADANAAAPQAAAMgDARQALgIAPgDQANgEAPABQAPABAPAGQAPAGALALQALAKAHAMQAHAMAEAPIADAPIACAPQADAOgBARIgEAgQgGAagOAXIgHANIgIAMQgLAUgRASQgRASgUANQghAXgsANIgCAAIgGABIgBACQgsAMgrAAQgvAAgrgMgAi7hoQgMADgKAFQgLAGgIAIQgMAKgIAOQgIAOgDAQQgDARAAAVIABAZQABAOADALQADAMAJARIANAbQAPAZAQAQIAIAHIAHAHQARAOAXANQAfASAjAJQAiAIAcAAQAVABAcgDQAcgCAigKQAdgJAagOQAWgMASgRQASgRAOgVIAUghQAKgUAFgPIAEgSIADgTIABgJIAAgKQABgOgEgVQgBgWgNgTQgMgUgTgLIgNgGIgFgBIgGgCQgKgCgMAAQgLABgLADQgNADgNAJIABgOIACgOIAAgOQAAgQgGgPQgEgPgKgNQgKgLgMgHQgJgHgNAAQgNgCgMAHQgMAGgIALIAJgHIAJgGQAMgFARACQAKACAKAGQAJAGAHAJQAKAMAFAQQAFAOABARQAAAOgCAKQgCAOgGAKQgHAOgLAJQgJAHgLADQgLAEgLgDQgMgDgLgIIgJgIIgHgJQgGALgGAIQgIAKgKAFQgIAFgKABQgJACgKgBIgMgEQgHgCgEgEQgHgDgGgGIgKgMQgHgJgFgMIgHgVQgDgOABgTQAEgfAPgUQAIgLAMgHQANgIANgBQANgBAOAGQAMAFAKAJIAIAKIAHAKQAAgDgCgDIgDgFIgEgGIgGgHIgMgLQgHgFgHgDQgNgGgLABQgKgCgOAGQgLAEgLALQgJAKgHANQgDAFgCAIIgFANIgDANIgCANQgCASAFAWQgMgFgOgBIgIAAQgJAAgKABgAhGjZQgJADgHAGQgIAGgGAJQgGAIgEAKQgFAPgBARQgBARAEAQQADAPAIANQAIAOALAJQAIAHAKAEQAKADAKgBQAOAAANgJQAMgJAGgNIADgGIADgGQAHgSAAgUQAAgTgGgTQgIgZgPgNQgHgHgKgFQgJgEgLAAIgCAAQgIAAgHACgAAojUQgLAEgIAJQgIAIgGALIAEAGQAGAQACASQACARgDASIgCAGIgBAGIgCAGQALASAQAIQAIAEAKAAQAJAAAJgEQAKgEAIgJQAHgJAEgLQAHgPABgRQABgQgEgQQgEgNgGgLQgGgLgJgIQgJgJgMgDIgLgBQgHAAgGACg");

	this.instance_1 = new lib.eye_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.5,-13.5,0.928,0.928,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-24.1,54.7,48.3);


(lib.targetArea_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.targ_txt = new cjs.Text("drop here", "bold 18px 'Calibri'", "#CCCCCC");
	this.targ_txt.name = "targ_txt";
	this.targ_txt.textAlign = "center";
	this.targ_txt.lineHeight = 24;
	this.targ_txt.lineWidth = 74;
	this.targ_txt.alpha = 0.65882353;
	this.targ_txt.parent = this;
	this.targ_txt.setTransform(43.4,6.1);

	this.targBG = new lib.targetBG_mc();
	this.targBG.name = "targBG";
	this.targBG.parent = this;
	this.targBG.setTransform(95,16.7,1,1,0,0,0,95,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.targBG},{t:this.targ_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.targetArea_mc, new cjs.Rectangle(0,0,87,33.4), null);


(lib.sign_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FF00").s().p("AgmBSIgIgKIgHgLQgOgRgMgNQgSgUAYgLQAGgCAHAGIAIALQAOAQAKAOQAbgtAagjQANgSAUgUQAMgNAMAEQAFABAAAEQAAAFgGAGQgkAkgeAnQgPAVgQAdIgKARQgEAIgEAAIgEgCg");
	this.shape.setTransform(0.1,0);

	this.instance = new lib.right_mc();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.27,0.27);
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,4);

	this.instance_1 = new lib.wrong_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.308,0.308);
	this.instance_1.shadow = new cjs.Shadow("#FFFFFF",0,0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-8.4,17.5,16.8);


(lib._questionHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#914F20").s().p("EAtfARHQouAAwVgDIhGgBIaLgBIAFgBIALAAIAAAGgEgtvAPOIgBAAIgBAAIAAgBIAKACIgIgBgEgtxAB4IACAAIAFAAIgHABgEAtoAAGIgHgJIAFgBIALAAIAAAKIgEAAIgFAAgAabAAIADAAIgBABQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAgAehAAIAAAAICeAAIglAAIgnAAIgtAAIgCAAIgjAAgEgtvgB3IgCAAIAAgBIAKABIgIAAgEgtxgPNIACAAIAIgBIgKACgEAtmgRAIgFgBI6LgBIBGgBIP0gCIJPgBIASAAIAAAGIgFAAIgGAAg");
	this.shape.setTransform(295.3,332.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(114,67,28,0.502)").s().p("EAt2AAYIAIgCIAAACgEgt9AAYIAAguIAHAAIAAApIASAFg");
	this.shape_1.setTransform(294.2,439.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(126,72,26,0.302)").s().p("EgtwAQPIAAgEIAAAAIAJAAIAbAEgEgtwANXIAAgDIArAHgEgtwAKnIAAgBIAKACgEgtwAIYIAKgBIgKACgEgtwAFpIArgEIgrAGgEAtnABDIAKAAIAAgLIgMAAIAMgDIAAAQgAfyA8IAnAAIAmABIhQAAIADgBgEAtlgQDIAMAAIAAgGIgSAAIpPABIgOgHIJvAAIAAAPg");
	this.shape_2.setTransform(295.4,326.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAC398").s().p("AgIAXIgGgBIgLgGIgHgGIgEgHIgBgEIAAgFIABAFIABAEIAFAGIAHAGIAKAFIAFABIAHABIAGgBIAMgCIAFgDQACgBAGgGQAFgFAAgDIACgHIgBgHIgCgGIgCgEIADAEIACAFQABADAAAFIgBAHQgBAGgDADQgFAFgEADIgGACIgHACIgGACg");
	this.shape_3.setTransform(482.8,229.4,0.972,0.972);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(80,69,56,0.502)").s().p("AADgBQgUgGgLAJQgKAIAHAPIgBAAIgHgBQgFAAgEgDQgKgGADgNQADgNAKgKQgMARAEAGQADAFAIgHQAMgLAUAAQAPABAZAJQAOAEABgJQABgHgLgJQgMgJgRgDQAXADAOAOQAMANgCAOQgDAPgHAHQgEADgDAAQgKgegagGg");
	this.shape_4.setTransform(481.1,221,0.972,0.972);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C5347").s().p("AgRANQgBgFACgFQACgGAEgEQAHgIAMgDQAFgBAEABQgEAAgFACQgLADgHAIQgEAEgBAEQgCAEAAAGIACAGQgCgDgBgDg");
	this.shape_5.setTransform(480.2,219,0.972,0.972);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(74,67,56,0.349)").s().p("AgGArQgJgGACgIQAEgSAAgHQgBgTgagEIABAAQgHgPAKgIQAFgEALgBQALgBAKAEQgFgCgHABQgJAAgEADQgMAMAVANQAGAEADAKQADANgHANQgJAQATAEQAUAEAHgOQAFgLABgOQAAgLgDgKIABAEQAKAngTANQgHAFgJAAQgIAAgIgFg");
	this.shape_6.setTransform(481.5,224.9,0.972,0.972);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5ACA3").s().p("AAAAaQACgSgFgPQgDgKgKgLQgDgEABgCQACgCAEABQAEAAAEACQAOAJAFANQAHAOgFARQgFAPgJABIgBAAQgEAAACgKg");
	this.shape_7.setTransform(482.6,224.6,0.972,0.972);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B5ACA3").s().p("AglAMQgBAAAAgBQAAAAgBgBQAAgBAAAAQAAgBABAAIADgHQALgJAPgDQAQgDARAGQAQAGAAAGQAAAFgMgDQgTgEgQACQgMABgMAHIgEABIgCgBg");
	this.shape_8.setTransform(480.6,218.4,0.972,0.972);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9C938A").s().p("AgGAsQgJgGACgJQAEgSAAgGQgBgTgagEIABAAQgHgPAKgJQALgJAVAGQAZAHAKAeQAKAngTANQgHAFgJAAQgIAAgIgFg");
	this.shape_9.setTransform(481.5,225,0.972,0.972);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9C938A").s().p("AADAAQgUgGgLAIQgKAJAHAPIgBAAIgHgBQgFgBgEgDQgKgGADgNQAEgQAOgKQAOgMAVABQAbABASAPQAQAOgDAQQgDAOgHAHQgEADgDABQgKgegagGg");
	this.shape_10.setTransform(481.1,221,0.972,0.972);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3D1F0B").s().p("AgaAVQgLgJAAgMQAAgLALgJQALgJAPAAQAQAAALAJQALAJAAALQAAAMgLAJQgLAJgQAAQgPAAgLgJg");
	this.shape_11.setTransform(482.7,228.7,0.972,0.972);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAC398").s().p("AgIAXIgGgBIgLgGIgHgGIgEgHIgBgEIAAgFIABAFIABAEIAFAGIAHAGIAKAFIAFABIAHABIAGgBIAMgCIAFgDQACgBAGgGQAFgFAAgDIACgHIgBgHIgCgGIgCgEIADAEIACAFQABADAAAFIgBAHQgBAGgDADQgFAFgEADIgGACIgHACIgGACg");
	this.shape_12.setTransform(110.5,229.4,0.972,0.972);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(80,69,56,0.502)").s().p("AADgBQgUgGgLAJQgKAIAHAPIgBAAIgHgBQgFAAgEgDQgKgGADgNQADgNAKgKQgMARAEAGQADAFAIgHQAMgLAUAAQAPABAZAJQAOAEABgJQABgHgLgJQgMgJgRgDQAXADAOAOQAMANgCAOQgDAPgHAHQgEADgDAAQgKgegagGg");
	this.shape_13.setTransform(108.7,221,0.972,0.972);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5C5347").s().p("AgRANQgBgFACgFQACgGAEgEQAHgIAMgDQAFgBAEABQgEAAgFACQgLADgHAIQgEAEgBAEQgCAEAAAGIACAGQgCgDgBgDg");
	this.shape_14.setTransform(107.8,219,0.972,0.972);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(74,67,56,0.349)").s().p("AgGArQgJgGACgIQAEgSAAgHQgBgTgagEIABAAQgHgPAKgIQAFgEALgBQALgBAKAEQgFgCgHABQgJAAgEADQgMAMAVANQAGAEADAKQADANgHANQgJAQATAEQAUAEAHgOQAFgLABgOQAAgLgDgKIABAEQAKAngTANQgHAFgJAAQgIAAgIgFg");
	this.shape_15.setTransform(109.2,224.9,0.972,0.972);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B5ACA3").s().p("AAAAaQACgSgFgPQgDgKgKgLQgDgEABgCQACgCAEABQAEAAAEACQAOAJAFANQAHAOgFARQgFAPgJABIgBAAQgEAAACgKg");
	this.shape_16.setTransform(110.2,224.6,0.972,0.972);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B5ACA3").s().p("AglAMQgBAAAAgBQAAAAgBgBQAAgBAAAAQAAgBABAAIADgHQALgJAPgDQAQgDARAGQAQAGAAAGQAAAFgMgDQgTgEgQACQgMABgMAHIgEABIgCgBg");
	this.shape_17.setTransform(108,218.4,0.972,0.972);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9C938A").s().p("AgGAsQgJgGACgJQAEgSAAgGQgBgTgagEIABAAQgHgPAKgJQALgJAVAGQAZAHAKAeQAKAngTANQgHAFgJAAQgIAAgIgFg");
	this.shape_18.setTransform(109.2,225,0.972,0.972);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9C938A").s().p("AADAAQgUgGgLAIQgKAJAHAPIgBAAIgHgBQgFgBgEgDQgKgGADgNQAEgQAOgKQAOgMAVABQAbABASAPQAQAOgDAQQgDAOgHAHQgEADgDABQgKgegagGg");
	this.shape_19.setTransform(108.7,221,0.972,0.972);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3D1F0B").s().p("AgaAVQgLgJAAgMQAAgLALgJQALgJAPAAQAQAAALAJQALAJAAALQAAAMgLAJQgLAJgQAAQgPAAgLgJg");
	this.shape_20.setTransform(110.5,228.7,0.972,0.972);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#97742F").s().p("AgWgDQgFgHgGgEIAVgRQAhADAJAcQAFANgCANIgsAGQAAgUgLgPg");
	this.shape_21.setTransform(108.4,224.2,0.972,0.972);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#6B4829").ss(0.4,1,1).p("AAYoqQADgIgIgKAAYoSQAEgKgNgMQgSgNgIgHAgWo8QgFAIAJAJQAEAFAOALQAPAKAEAFQAIAJgDAIAgWokQgGAKARAOQALAIATAPQAIAKgDAIAgWoMQgDAFADAGQADAGAIAGQAIAHASANQANAMgEAJAgWn1QgFAIAJAJQAEAFAOALQAPAKAEAFQAIAJgDAIAgWnFQgDAFADAHQADAFAIAGQAIAHASANQANAMgEAKAgWmuQgFAIAJAJQAEAFAOALQAPAKAEAGQAIAJgDAHAgWndQgGAKARAOQALAIATAPQAJAKgEAIAgWmWQgGAKARAOQALAIATAPQAJAKgEAIAgWl+QgDAFADAHQADAFAIAGQAIAHASANQANAMgEAKAgWlPQgGALARANQALAIATAPQAJAKgEAIAgWlnQgFAIAJAJQAFAFANALQAPAKAEAFQAIAJgDAIAgWk3QgDAGADAGQADAFAIAGQAIAHASANQANAMgEAKAgWkgQgFAIAJAJQAFAFANALQAPAKAEAGQAIAIgDAIAAYjHQADgIgIgKQgTgPgLgIQgRgOAGgKAgWjxQgDAGADAHQADAFAIAGQAIAHASANQANAMgEAKAAYiAQADgIgIgKQgTgPgLgIQgRgNAGgLAgWjZQgFAIAJAJQAFAGANAKQAPAKAEAGQAIAJgDAHAgWipQgDAGADAGQADAFAIAGQAIAHASAOQANALgEAKAgWiSQgFAIAJAJQAFAGANAKQAPAKAEAGQAIAIgDAJAgWh6QgGALARANQALAIATAQQAIAJgDAIAgWhKQgFAHAJAJQAEAGAOAKQAPAKAEAGQAIAJgDAHAgWhiQgDAFADAHQADAFAIAHQAIAGASANQANAMgEAKAgWgzQgGAKARAOQALAIATAPQAIAJgDAIAgWgbQgDAFADAHQADAFAIAGQAIAGASANQANAMgEAKAgWgEQgFAIAJAIQAEAGAOAKQAPAKAEAGQAIAJgDAIAgWArQgDAGADAGQADAFAIAHQAIAGASAOQANAMgEAJAgWBDQgFAHAJAJQAEAGAOAKQAPAKAEAGQAIAJgDAIAgWATQgGALARANQALAIATAQQAIAJgDAIAgWBaQgGALARANQALAIATAQQAIAJgDAJAgWByQgDAGADAGQADAFAIAHQAIAGASAOQANALgEAKAAYDiQADgIgIgKQgTgPgLgIQgRgNAGgLAgWC5QgDAGADAGQADAFAIAGQAIAIASANQANALgEAKAgWCKQgFAHAJAJQAEAGAOAKQAPALAEAFQAIAJgDAIAgWEAQgDAGADAGQADAFAIAHQAIAGASAOQANAMgEAJAgWDoQgGALARAOQALAHATAQQAIAJgDAIAgWDQQgFAIAJAJQAEAGAOAKQAPAKAEAGQAIAJgDAIAgWEYQgFAHAJAJQAEAGAOAKQAPAKAEAGQAIAJgDAIAgWEvQgGALARAOQALAHATAQQAJAJgEAIAgWFHQgDAGADAGQADAFAIAHQAIAGASAOQANALgEAKAgWFfQgFAIAJAJQAEAFAOAKQAPALAEAFQAIAJgDAIAgWGmQgFAIAJAJQAFAFANAKQAPALAEAFQAIAJgDAIAgWGOQgDAGADAGQADAGAIAGQAIAHASANQANAMgEAJAgWF2QgGALARAOQALAHATAQQAJAJgEAIAgWG9QgGALARAOQALAHATAQQAIAJgDAJAgWHVQgDAGADAGQADAFAIAHQAIAHASANQANAMgEAJAgWHtQgFAIAJAIQAFAGANAKQAPALAEAFQAIAJgDAIAgWIcQgDAGAGALQAHALARAFAgWIFQgGAKAYAUQAWAVACgD");
	this.shape_22.setTransform(480.8,164.1,1,1,0,0,0,0,-0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#DF9757","#B47338"],[0,1],-1.7,-1.5,1.8,-1.5).s().p("AgdLvIAA3uIA7AAIAAXuQgCARgXAAQgdAAgFgRg");
	this.shape_23.setTransform(481,163.4,0.745,0.745,0,0,0,0.3,-1.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#6B4829").ss(0.4,1,1).p("AAXoSQAFgKgNgMQgSgNgIgHAgXo8QgEAIAJAJQAEAFAOALQAOAKAFAFQAIAJgEAIAgXokQgFAKARAOQAKAIAUAPQAIAKgEAIAgXoNQgCAGADAGQADAGAIAGQAIAHASANQANAMgFAJAgXn1QgEAIAJAJQAEAFAOALQAOAKAFAFQAIAJgEAIAgXndQgFAKARAOQAKAIAUAPQAJAJgFAJAgXnFQgCAFADAHQADAFAIAGQAIAHASANQANAMgFAJAgXmuQgEAIAJAJQAEAFAOALQAOAKAFAGQAIAIgEAIAAXoqQAEgJgIgJAgXmWQgFAKARAOQAKAIAUAPQAJAKgFAIAgXl/QgCAGADAHQADAFAIAGQAIAHASANQANAMgFAKAgXlnQgEAIAJAJQAEAFAOALQAOAKAFAFQAIAJgEAIAgXlPQgFALARANQAKAIAUAPQAJAKgFAIAgXk3QgCAGADAGQADAFAIAGQAIAHASANQANAMgFAKAAXjHQAEgIgIgKQgUgPgKgIQgRgOAFgKAgXjxQgCAGADAHQADAFAIAGQAIAHASANQANAMgFAKAgXkgQgEAIAJAJQAEAFAOALQAOAKAFAFQAIAJgEAIAgXjZQgEAIAJAJQAEAGAOAKQAOAKAFAGQAIAJgEAHAAXiAQAEgIgIgKQgUgPgKgIQgRgOAFgKAgXipQgCAFADAHQADAFAIAGQAIAHASANQANAMgFAKAgXiSQgEAIAJAJQAEAGAOAKQAOAKAFAGQAIAIgEAJAgXh6QgFALARANQAKAIAUAQQAIAJgEAIAgXhiQgCAFADAHQADAFAIAHQAIAGASANQANAMgFAKAgXhKQgEAHAJAJQAEAFAOALQAOAKAFAGQAIAJgEAHAgXgEQgEAHAJAJQAEAGAOAKQAOAKAFAGQAIAJgEAHAgXgbQgCAFADAHQADAFAIAGQAIAGASANQANAMgFAKAgXgzQgFAKARAOQAKAIAUAPQAIAJgEAIAgXArQgCAGADAGQADAFAIAGQAIAHASAOQANALgFAKAgXATQgFALARANQAKAIAUAPQAIAKgEAIAgXBCQgEAIAJAJQAEAGAOAKQAOAKAFAFQAIAKgEAIAgXByQgCAGADAGQADAFAIAHQAIAGASAOQANALgFAKAgXBaQgFALARANQAKAIAUAQQAIAJgEAIAgXCKQgEAHAJAJQAEAGAOAKQAOAKAFAGQAIAJgEAIAAXDiQAEgIgIgKQgUgPgKgIQgRgOAFgKAgXC5QgCAFADAHQADAFAIAGQAIAHASANQANAMgFAKAgXEAQgCAGADAGQADAFAIAHQAIAGASAOQANAMgFAJAgXDoQgFALARANQAKAIAUAQQAIAJgEAIAgXDQQgEAIAJAJQAEAGAOAKQAOAKAFAGQAIAJgEAIAgXEYQgEAHAJAJQAEAGAOAKQAOAKAFAGQAIAJgEAIAgXFHQgCAGADAGQADAFAIAHQAIAGASANQANAMgFAKAgXEvQgFALARAOQAKAHAUAQQAJAJgFAIAgXFfQgEAIAJAIQAEAGAOAKQAOALAFAFQAIAJgEAIAgXF2QgFALARAOQAKAHAUAPQAJAKgFAIAgXGOQgCAGADAGQADAGAIAFQAIAIASANQANALgFAKAgXGlQgEAJAJAJQAEAFAOAKQAOALAFAFQAIAJgEAIAgXHVQgCAGADAGQADAFAIAHQAIAHASANQANAMgFAJAgXHtQgEAHAJAJQAEAGAOAKQAOAKAFAGQAIAJgEAIAgXG9QgFALARAOQAKAHAUAQQAIAJgEAIAgXIEQgFALAYAUQAWAVACgDAgXIcQgCAGAGALQAHALARAF");
	this.shape_24.setTransform(109,163.4,1,1,0,0,0,0,-0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#DF9757","#B47338"],[0,1],-1.7,-1.5,1.8,-1.5).s().p("AgdLvIAA3uIA7AAIAAXuQgCARgXAAQgdAAgFgRg");
	this.shape_25.setTransform(109.2,162.7,0.745,0.745,0,0,0,0.4,-1.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#6B4829").ss(0.4,1,1).p("AAYoqQADgIgIgKAAYoSQAEgKgNgMQgSgNgIgHAgWokQgGAKARAOQALAIATAPQAIAKgDAIAgWo8QgFAIAJAJQAEAFAOALQAPAKAEAFQAIAJgDAIAgWoMQgDAFADAHQADAFAIAGQAIAHASANQANAMgEAJAgWn1QgFAIAJAJQAEAFAOALQAPAKAEAGQAIAIgDAIAgWndQgGAKARAOQALAIATAPQAJAKgEAIAgWnFQgDAFADAHQADAFAIAGQAIAHASANQANAMgEAKAgWmuQgFAIAJAJQAEAFAOALQAPAKAEAGQAIAJgDAHAgWlnQgFAIAJAJQAFAFANALQAPAKAEAFQAIAJgDAIAgWl+QgDAGADAGQADAFAIAGQAIAHASANQANAMgEAKAgWmWQgGALARANQALAIATAPQAJAKgEAIAgWlPQgGALARANQALAIATAPQAJAKgEAIAgWk3QgDAGADAGQADAFAIAGQAIAHASANQANAMgEAKAgWkgQgFAIAJAJQAFAGANAKQAPAKAEAGQAIAJgDAHAgWjwQgDAFADAHQADAFAIAGQAIAHASANQANAMgEAKAAYjHQADgIgIgKQgTgPgLgIQgRgOAGgKAgWjZQgFAIAJAJQAFAGANAKQAPAKAEAGQAIAJgDAIAAYiAQADgIgIgJQgTgQgLgIQgRgNAGgLAgWipQgDAGADAGQADAFAIAHQAIAGASAOQANALgEAKAgWiRQgFAHAJAJQAFAGANAKQAPAKAEAGQAIAJgDAIAgWhiQgDAFADAHQADAFAIAHQAIAGASANQANAMgEAKAgWh6QgGALARAOQALAHATAQQAIAJgDAIAgWhKQgFAHAJAJQAEAGAOAKQAPAKAEAGQAIAJgDAHAgWgzQgGALARANQALAIATAPQAIAJgDAIAgWgbQgDAGADAGQADAFAIAGQAIAGASAOQANALgEAKAgWgEQgFAIAJAIQAEAGAOAKQAPAKAEAGQAIAJgDAIAgWATQgGALARANQALAIATAQQAIAJgDAIAgWArQgDAGADAGQADAFAIAHQAIAGASAOQANAMgEAJAgWBDQgFAHAJAJQAEAGAOAKQAPAKAEAGQAIAJgDAIAgWCKQgFAIAJAJQAEAFAOAKQAPALAEAFQAIAJgDAIAgWByQgDAGADAGQADAFAIAHQAIAGASAOQANALgEAKAgWBaQgGALARANQALAIATAQQAIAJgDAJAgWC5QgDAGADAGQADAGAIAGQAIAHASANQANAMgEAJAgWDoQgGALARAOQALAHATAQQAIAJgDAJAgWEAQgDAGADAGQADAFAIAHQAIAGASAOQANAMgEAJAgWDRQgFAHAJAJQAEAGAOAKQAPAKAEAGQAIAJgDAIAAYDiQADgIgIgJQgTgQgLgIQgRgNAGgLAgWEYQgFAIAJAIQAEAGAOAKQAPALAEAFQAIAJgDAIAgWEwQgGAKARAOQALAIATAPQAJAJgEAIAgWFHQgDAGADAGQADAFAIAHQAIAHASANQANALgEAKAgWF2QgGALARAOQALAHATAQQAJAJgEAIAgWFfQgFAIAJAJQAEAFAOAKQAPALAEAFQAIAJgDAIAgWGOQgDAGADAGQADAGAIAGQAIAHASANQANAMgEAJAgWGmQgFAIAJAJQAFAFANAKQAPALAEAFQAIAJgDAIAgWG9QgGALARAOQALAHATAQQAIAJgDAJAgWHVQgDAGADAGQADAFAIAHQAIAHASANQANAMgEAJAgWHtQgFAIAJAJQAFAFANAKQAPALAEAFQAIAJgDAIAgWIFQgGAKAYAVQAWAUACgDAgWIcQgDAGAGALQAHALARAF");
	this.shape_26.setTransform(480.8,57.6,1,1,0,0,0,0,-0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#DF9757","#B47338"],[0,1],-1.7,-1.5,1.8,-1.5).s().p("AgdLvIAA3uIA7AAIAAXuQgCARgXAAQgdAAgFgRg");
	this.shape_27.setTransform(481,56.9,0.745,0.745,0,0,0,0.3,-1.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#6B4829").ss(0.4,1,1).p("AgXoMQgCAFADAGQADAGAIAGQAIAHASANQANAMgFAJAgXokQgFAKARAOQAKAIAUAPQAIAKgEAIAAXoSQAFgKgNgMQgSgNgIgHAgXo8QgEAIAJAJQAEAFAOALQAOAKAFAFQAIAJgEAIAgXn1QgEAIAJAJQAEAFAOALQAOAKAFAFQAIAJgEAIAgXndQgFAKARAOQAKAIAUAPQAJAKgFAIAgXmuQgEAIAJAJQAEAFAOALQAOAKAFAGQAIAJgEAHAgXnFQgCAFADAHQADAFAIAGQAIAHASANQANAMgFAKAgXmWQgFAKARAOQAKAIAUAPQAJAKgFAIAgXl/QgCAGADAHQADAFAIAGQAIAHASANQANAMgFAKAgXlnQgEAIAJAJQAEAFAOALQAOAKAFAFQAIAJgEAIAAXoqQAEgIgIgKAgXk3QgCAGADAGQADAFAIAGQAIAHASANQANAMgFAKAgXlPQgFALARANQAKAIAUAPQAJAKgFAIAgXkgQgEAIAJAJQAEAFAOALQAOAKAFAGQAIAIgEAIAgXjxQgCAGADAHQADAFAIAGQAIAHASANQANAMgFAKAAXjHQAEgIgIgKQgUgPgKgIQgRgOAFgKAAXiAQAEgIgIgKQgUgPgKgIQgRgNAFgLAgXipQgCAGADAGQADAFAIAGQAIAHASAOQANALgFAKAgXjZQgEAIAJAJQAEAGAOAKQAOAKAFAGQAIAJgEAHAgXiSQgEAIAJAJQAEAGAOAKQAOAKAFAGQAIAIgEAJAgXh6QgFALARANQAKAIAUAQQAIAJgEAIAgXhiQgCAFADAHQADAFAIAHQAIAGASANQANAMgFAKAgXgzQgFAKARAOQAKAIAUAPQAIAJgEAIAgXgbQgCAFADAHQADAFAIAGQAIAGASANQANAMgFAKAgXhKQgEAHAJAJQAEAGAOAKQAOAKAFAGQAIAJgEAHAgXgEQgEAIAJAIQAEAGAOAKQAOAKAFAGQAIAJgEAIAgXATQgFALARANQAKAIAUAQQAIAJgEAIAgXArQgCAGADAGQADAFAIAHQAIAGASAOQANAMgFAJAgXBDQgEAHAJAJQAEAGAOAKQAOAKAFAGQAIAJgEAIAgXBaQgFALARANQAKAIAUAQQAIAJgEAJAgXCKQgEAHAJAJQAEAGAOAKQAOALAFAFQAIAJgEAIAgXByQgCAGADAGQADAFAIAHQAIAGASAOQANALgFAKAAXDiQAEgIgIgKQgUgPgKgIQgRgNAFgLAgXC5QgCAGADAGQADAFAIAGQAIAIASANQANALgFAKAgXDQQgEAIAJAJQAEAGAOAKQAOAKAFAGQAIAJgEAIAgXEAQgCAGADAGQADAFAIAHQAIAGASAOQANAMgFAJAgXDoQgFALARAOQAKAHAUAQQAIAJgEAIAgXFHQgCAGADAGQADAFAIAHQAIAGASANQANAMgFAKAgXEvQgFALARAOQAKAHAUAQQAJAJgFAIAgXEYQgEAHAJAJQAEAGAOAKQAOAKAFAGQAIAJgEAIAgXFfQgEAIAJAJQAEAFAOAKQAOALAFAFQAIAJgEAIAgXF2QgFALARAOQAKAHAUAQQAJAJgFAIAgXGOQgCAGADAGQADAGAIAGQAIAHASANQANAMgFAJAgXGmQgEAIAJAJQAEAFAOAKQAOALAFAFQAIAJgEAIAgXG9QgFALARAOQAKAHAUAQQAIAJgEAJAgXHtQgEAIAJAIQAEAGAOAKQAOALAFAFQAIAJgEAIAgXHVQgCAGADAGQADAFAIAHQAIAHASANQANAMgFAJAgXIcQgCAGAGALQAHALARAFAgXIFQgFAKAYAUQAWAVACgD");
	this.shape_28.setTransform(109,56.9,1,1,0,0,0,0,-0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#DF9757","#B47338"],[0,1],-1.7,-1.5,1.8,-1.5).s().p("AgdLvIAA3uIA7AAIAAXuQgCARgXAAQgdAAgFgRg");
	this.shape_29.setTransform(109.2,56.2,0.745,0.745,0,0,0,0.4,-1.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(114,67,28,0.502)").s().p("EgvqACgIAAg5UBBIgAMAOxgAQQH8gIEChQQC2g6AohYIAAE/g");
	this.shape_30.setTransform(294.1,428.3,0.964,0.824);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(126,72,26,0.302)").s().p("A4vHrIAAhzIAlgJIglgDIAAj0IQgAAQHMAJHXghQOxhBA8jMQA4i/hZhLQgcgYgvgNQgsgKgKgEIFRAAIAAPVg");
	this.shape_31.setTransform(295.4,332,1.85,2.224);

	this.instance = new lib.menuBoard("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(295.2,415.3,0.964,0.824,0,180,0);

	this.instance_1 = new lib.menuBoard("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(295.2,359.7,0.964,0.824);

	this.instance_2 = new lib.menuBoard("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(295.2,305.9,0.964,0.824,0,180,0);

	this.instance_3 = new lib.menuBoard("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(295.3,250.4,0.964,0.824,0,0,0,0.1,0.1);

	this.ActTitle_txt = new cjs.Text("Comprehension", "bold 25px 'Calibri'", "#5E3417");
	this.ActTitle_txt.name = "ActTitle_txt";
	this.ActTitle_txt.textAlign = "center";
	this.ActTitle_txt.lineHeight = 33;
	this.ActTitle_txt.lineWidth = 264;
	this.ActTitle_txt.parent = this;
	this.ActTitle_txt.setTransform(294.5,190.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.6)").s().p("A4YEDQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgBgDIAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABABQAHABAJAAIAqAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgqAAIgBAAQgJAAgJgBgAWgEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAUoEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgASwEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAQ4EEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAPAEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgANIEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgALQEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAJYEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAHgEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAFoEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgADwEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAB4EEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAAAEEQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAh3EEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAjvEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAlnEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAnfEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgApXEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgArPEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAtHEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAu/EEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAw3EEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAyvEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA0nEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA2fEEQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAYVECQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAggGAKgbQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIADgBIAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAABQgMAgglAHIgBAAIgDgBgA5GDgQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQgGgOAAgVIAAgcQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAAcQAAASAFANQAAAAAAABQABAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAIgCAAIgDgBgAZGCiQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgA5NBnQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAZGArQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg7QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA7QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgA5NgRQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAZGhMQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgA5NiIQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAguIAAgNQABgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAAAAIADACQABAAAAABQAAAAAAABQAAAAAAAAQABABgBAAIAAANIAAAuQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAZGjEQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQgFghgZgMQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIAAgEIAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAgAOAEAnQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIAAAAIgBABIgDgCgA4sjyQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAQgIAXAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIg8AAQgVAAgOAHIgCABIgCgBgAWyj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAU6j5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgATCj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgARKj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAPSj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgANaj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgALij5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAJqj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAHyj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAF6j5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAECj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgACKj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAASj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAhlj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAjdj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAlVj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAnNj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgApFj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAq9j5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAs1j5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAutj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAwlj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAydj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA0Vj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA2Nj5QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_32.setTransform(294.4,217);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(205,147,93,0)").s().p("AXhD/QAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIgqAAQgJAAgHgBQgBgBAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAAAIAAABQgbgGgLgWQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBgBAAQAAAAAAgBQgFgNAAgSIAAgcQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIAAgyQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIAAgxQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIAAgyQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAAguIAAgNQABAAgBgBQAAAAAAAAQAAgBAAAAQAAgBgBAAIgDgCQAFgcAVgMIAAAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAQABABAAAAQABgBAAAAQABAAAAAAQAOgHAVAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAxAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIATAAQARAAANAEIAAAEQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAZAMAEAhQABABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAEABIAAAJIAAApQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAyQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIAAA7QAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAyQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAXQAAAPgDALIgDABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgKAbggAGQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAIgNABg");
	this.shape_33.setTransform(294.5,217);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#996600").ss(1,1,1).p("A4Ik/MAwSAAAQB3AAAAB4IAAGQQAAB3h3AAMgwSAAAQh4AAAAh3IAAmQQAAh4B4AAg");
	this.shape_34.setTransform(294.5,218.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CD935D").s().p("A4JFAQh3AAAAh3IAAmRQAAh3B3AAMAwTAAAQB3AAAAB3IAAGRQAAB3h3AAg");
	this.shape_35.setTransform(294.5,218.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.ActTitle_txt},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._questionHolder, new cjs.Rectangle(0,-1,589.8,443.8), null);


(lib._PopUpBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// score detail
	this.userScroreDetail_txt = new cjs.Text("0/0  Score\n2       Lives\n00     Correct\n00     Incorrect", "20px 'Calibri'", "#5E3417");
	this.userScroreDetail_txt.name = "userScroreDetail_txt";
	this.userScroreDetail_txt.lineHeight = 25;
	this.userScroreDetail_txt.lineWidth = 325;
	this.userScroreDetail_txt.parent = this;
	this.userScroreDetail_txt.setTransform(70,112.5);

	this.timeline.addTween(cjs.Tween.get(this.userScroreDetail_txt).to({_off:true},1).wait(1));

	// shade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(94,52,23,0.2)").s().p("A5tB8IAAj3MAzbAAAIAAD3g");
	this.shape.setTransform(232.6,201.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(94,52,23,0.2)").s().p("A5tB8IAAj3MAzbAAAIAAD3g");
	this.shape_1.setTransform(232.6,176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(94,52,23,0.2)").s().p("A5tB8IAAj3MAzbAAAIAAD3g");
	this.shape_2.setTransform(232.6,150.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(94,52,23,0.2)").s().p("A5tB8IAAj3MAzbAAAIAAD3g");
	this.shape_3.setTransform(232.6,125.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer_1
	this.star_3 = new lib.start_mc();
	this.star_3.name = "star_3";
	this.star_3.parent = this;
	this.star_3.setTransform(279.3,30.9,1,1,0,0,0,0.2,0.2);

	this.star_2 = new lib.start_mc();
	this.star_2.name = "star_2";
	this.star_2.parent = this;
	this.star_2.setTransform(239.7,30.9,1,1,0,0,0,0.2,0.2);

	this.star_1 = new lib.start_mc();
	this.star_1.name = "star_1";
	this.star_1.parent = this;
	this.star_1.setTransform(200,30.9,1,1,0,0,0,0.1,0.2);

	this.playNext_mc = new lib._playBTN();
	this.playNext_mc.name = "playNext_mc";
	this.playNext_mc.parent = this;
	this.playNext_mc.setTransform(319.3,304.8);

	this.playA_mc = new lib._playBTN_1();
	this.playA_mc.name = "playA_mc";
	this.playA_mc.parent = this;
	this.playA_mc.setTransform(159.8,304.8);

	this.percientage_txt = new cjs.Text("Scrore level: 50%", "bold 25px 'Calibri'", "#006600");
	this.percientage_txt.name = "percientage_txt";
	this.percientage_txt.textAlign = "center";
	this.percientage_txt.lineHeight = 31;
	this.percientage_txt.lineWidth = 325;
	this.percientage_txt.parent = this;
	this.percientage_txt.setTransform(232.4,78.6);

	this.msg_txt = new cjs.Text("", "bold 20px 'Calibri'", "#5E3417");
	this.msg_txt.name = "msg_txt";
	this.msg_txt.textAlign = "center";
	this.msg_txt.lineHeight = 24;
	this.msg_txt.lineWidth = 325;
	this.msg_txt.parent = this;
	this.msg_txt.setTransform(232.4,222.9);

	this.title_txt = new cjs.Text("Comprehension", "bold 30px 'Calibri'", "#663366");
	this.title_txt.name = "title_txt";
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 37;
	this.title_txt.lineWidth = 325;
	this.title_txt.parent = this;
	this.title_txt.setTransform(232.4,43);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E5B700").ss(2,1,1).p("Egh+gbVMBD9AAAQBbAABABAQBBBBAABbMAAAAv0QAABbhBBAQhABAhbAAMhD9AAAQhbAAhBhAQhAhAAAhbMAAAgv0QAAhbBAhBQBBhABbAAg");
	this.shape_4.setTransform(239.5,175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF99").s().p("Egh+AbWQhbAAhBhAQhAhAAAhcMAAAgv0QAAhbBAhAQBBhABbAAMBD9AAAQBbAABABAQBBBAAABbMAAAAv0QAABchBBAQhABAhbAAg");
	this.shape_5.setTransform(239.5,175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660000").s().p("AgPAwIgGAAIgDgBIgDgBIAAgCIAAhWIAAgBIACgCIAEAAIAEgBIAFABIAEAAIACACIAAABIAAALIAGgIIAFgFQADgCADAAIAFgBIACAAIAEAAIACABIACABIABABIAAACIAAADIABAFIgBAGIAAAEIgBABIgCABIgBAAIgCgBIgEgBIgDAAIgDABIgFACIgEAFIgEAHIAAA1IgBACIgCABIgEABIgGAAg");
	this.shape_6.setTransform(496.7,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660000").s().p("AgUAwQgGgDgEgDQgEgDgCgGQgDgFAAgHQAAgHADgHQADgFAGgDQAGgDAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgCIgHgBQgGgBgFACIgIADIgHADIgEACIgBgBIgCgCIgBgEIAAgDIAAgFIACgDIAFgDIAIgEIAKgCIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAHAAAJIAAA5IgBACIgDACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgBgAgDAHIgHADIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgCAFgFIAAgQIgKAAIgJABg");
	this.shape_7.setTransform(487.5,22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660000").s().p("AA5AwIgGAAIgEgBIgCgBIAAgCIAAgyIgBgIIgDgGQgBgDgDgBQgDgCgDAAQgFAAgEAEQgFADgFAHIAAA4IAAACIgCABIgEABIgGAAIgFAAIgEgBIgCgBIAAgCIAAgyIgBgIIgDgGQgBgDgDgBQgDgCgDAAQgFAAgEAEQgFADgFAHIAAA4IAAACIgCABIgEABIgGAAIgGAAIgEgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAHgHAHgEQAHgEAIAAIAKABIAHADIAFAFIAEAHIAIgIIAHgEIAIgDIAHgBQAJAAAGADQAGADADAFQAEAFACAGQABAHAAAIIAAA2IAAACIgCABIgEABIgGAAg");
	this.shape_8.setTransform(474.7,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660000").s().p("AA5AwIgGAAIgEgBIgCgBIAAgCIAAgyIgBgIIgDgGQgBgDgDgBQgDgCgDAAQgFAAgEAEQgFADgFAHIAAA4IAAACIgCABIgEABIgGAAIgFAAIgEgBIgCgBIAAgCIAAgyIgBgIIgDgGQgBgDgDgBQgDgCgDAAQgFAAgEAEQgFADgFAHIAAA4IAAACIgCABIgEABIgGAAIgGAAIgEgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAHgHAHgEQAHgEAIAAIAKABIAHADIAFAFIAEAHIAIgIIAHgEIAIgDIAHgBQAJAAAGADQAGADADAFQAEAFACAGQABAHAAAIIAAA2IAAACIgCABIgEABIgGAAg");
	this.shape_9.setTransform(458.5,22.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#660000").s().p("AgUAwQgGgDgEgDQgEgDgCgGQgDgFAAgHQAAgHADgHQADgFAGgDQAGgDAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgCIgHgBQgGgBgFACIgIADIgHADIgEACIgBgBIgCgCIgBgEIAAgDIAAgFIACgDIAFgDIAIgEIAKgCIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAHAAAJIAAA5IgBACIgDACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgBgAgDAHIgHADIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgCAFgFIAAgQIgKAAIgJABg");
	this.shape_10.setTransform(445.1,22.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#660000").s().p("AgPAwIgGAAIgDgBIgDgBIAAgCIAAhWIAAgBIACgCIADAAIAGgBIAEABIAEAAIACACIAAABIAAALIAGgIIAFgFQACgCAEAAIAFgBIADAAIADAAIACABIACABIABABIABACIAAADIAAAFIAAAGIgBAEIgBABIgCABIgCAAIgBgBIgEgBIgDAAIgDABIgFACIgEAFIgFAHIAAA1IAAACIgCABIgEABIgGAAg");
	this.shape_11.setTransform(437.4,22.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#660000").s().p("AgPA9QgMgEgJgIQgIgJgFgMQgEgMAAgPQAAgOAFgMQAEgNAJgIQAJgJAMgFQAMgEAOAAIAPABIAMADIAIADIAEADIADAEIAAAIIAAAEIAAAEIgCABIgCABIgDgCIgIgEIgLgEQgGgBgKAAQgJAAgGADQgIADgEAGQgGAGgCAIQgDAIAAAJQAAALADAIQACAIAGAGQAEAFAIADQAGADAJAAIAJgBIAIgDIAAgdIgZAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgBgIIAAgDIABgDIABgCIABgBIArAAIADABIACACIACACIAAADIAAAyIgBAFQgBACgEABIgHADIgKACIgKACIgKAAQgOAAgMgEg");
	this.shape_12.setTransform(426.7,20.7);

	this.userScoreDetailHolder_3 = new lib.userScoreDetailHolder_mc();
	this.userScoreDetailHolder_3.name = "userScoreDetailHolder_3";
	this.userScoreDetailHolder_3.parent = this;
	this.userScoreDetailHolder_3.setTransform(462.9,151.8,1,1,0,0,0,87,104.6);

	this.userScoreDetailHolder_2 = new lib.userScoreDetailHolder_mc();
	this.userScoreDetailHolder_2.name = "userScoreDetailHolder_2";
	this.userScoreDetailHolder_2.parent = this;
	this.userScoreDetailHolder_2.setTransform(277.8,151.8,1,1,0,0,0,87,104.6);

	this.userScoreDetailHolder_1 = new lib.userScoreDetailHolder_mc();
	this.userScoreDetailHolder_1.name = "userScoreDetailHolder_1";
	this.userScoreDetailHolder_1.parent = this;
	this.userScoreDetailHolder_1.setTransform(92.7,151.8,1,1,0,0,0,87,104.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E5B700").ss(2,1,1).p("Egn6gGtMBP1AAAQBbAABABAQBBBBAABbIAAJ/MhWtAAAIAAp/QAAhbBAhBQBBhABbAAg");
	this.shape_13.setTransform(277.5,307.3,1,1,0,180,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFD97B").s().p("EgrWAGuIAAqAQAAhbBAhAQBBhABbAAMBP1AAAQBbAABABAQBBBAAABbIAAKAg");
	this.shape_14.setTransform(277.5,307.3,1,1,0,180,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#660000").s().p("AgQBBIgEgBIgBgCIAAgEIAMgdIgCgBIgCgDIgehPIgBgFQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIAHgBIAHABIAEAAIACACIABADIAUA6IAAAAIATg7IABgDIADgBIAIgBIAHABIAEABIABADIAAAEIgdBUIgLAfQgBADgEABIgKABIgGAAg");
	this.shape_15.setTransform(319.8,24.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#660000").s().p("AgPAwIgGAAIgEgBIgCgBIAAgCIAAhWIAAgBIACgCIAEAAIAEgBIAGABIADAAIABACIABABIAAALIAGgIIAFgFQACgCADAAIAGgBIACAAIAEAAIADABIABABIABABIAAACIAAADIABAFIgBAGIAAAEIgBABIgBABIgCAAIgDgBIgDgBIgCAAIgFABIgEACIgFAFIgDAHIAAA1IgBACIgCABIgEABIgGAAg");
	this.shape_16.setTransform(312,22.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#660000").s().p("AgUAwQgGgDgEgDQgEgDgCgGQgDgFAAgHQAAgHADgHQADgFAGgDQAGgDAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgCIgHgBQgGgBgFACIgIADIgHADIgEACIgBgBIgCgCIgBgEIAAgDIAAgFIACgDIAFgDIAIgEIAKgCIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAHAAAJIAAA5IgBACIgDACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgBgAgDAHIgHADIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgCAFgFIAAgQIgKAAIgJABg");
	this.shape_17.setTransform(302.8,22.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#660000").s().p("AAABEIgFAAIgEgBIgCgBIAAgCIAAh/IAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIAAB/IAAACIgCABIgEABIgGAAg");
	this.shape_18.setTransform(295.7,20.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#660000").s().p("AgYAuQgGgDgEgFQgEgGgBgGQgBgHAAgKIAAg0IAAgCIACgBIADgBIAHAAIAGAAIADABIACABIABACIAAAwIAAAKQACAEACADQABACADACQADABADAAQAEAAAFgDIAKgKIAAg5IAAgCIACgBIAFgBIAFAAIAGAAIAEABIACABIABACIAABWIgBACIgBABIgEABIgFAAIgFAAIgDgBIgCgBIAAgCIAAgKQgIAIgHAEQgGADgJAAQgIAAgHgCg");
	this.shape_19.setTransform(287.8,22.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#660000").s().p("AgBBFIgHgEIgHgEIgHgHIAAAJIAAACIgCABIgEACIgEAAIgFAAIgEgCIgBgBIgBgCIAAh+IABgCIACgCIADgBIAGAAIAGAAIAEABIACACIABACIAAAvIAGgFIAHgEIAGgCIAHgBQAKAAAHAEQAGAEAFAGQAEAHACAHQACAKAAAJQAAAMgDAJQgCAJgFAGQgFAHgHADQgHAEgJAAIgHAAgAgDgHIgFADIgFAEIgFAGIAAAdQAFAGAFAEQAEADAEAAQAFAAAEgCIAFgHIADgJIABgKIgBgKQAAgFgCgEQgCgDgEgDQgDgCgFAAIgEAAg");
	this.shape_20.setTransform(277.3,20.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#660000").s().p("AgUAwQgGgDgEgDQgEgDgCgGQgDgFAAgHQAAgHADgHQADgFAGgDQAGgDAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgCIgHgBQgGgBgFACIgIADIgHADIgEACIgBgBIgCgCIgBgEIAAgDIAAgFIACgDIAFgDIAIgEIAKgCIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAHAAAJIAAA5IgBACIgDACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgBgAgDAHIgHADIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgCAFgFIAAgQIgKAAIgJABg");
	this.shape_21.setTransform(266.5,22.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#660000").s().p("AgLAuQgHgDgGgGQgFgHgCgIQgDgJgBgLQAAgMAEgKQADgJAGgHQAGgGAIgDQAIgDAIAAIAIABIAHABIAGADIAEADIABACIABABIAAADIAAAFIgBAIQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIgFgDIgGgEQgDgBgGAAQgJAAgEAIQgFAHgBANQABAHABAGQABAFADAEQACADADACQAEABAEAAQAGAAADgBIAHgDIAFgDIADgCIABAAIABACIAAAEIAAAFIAAAEIAAADIgBACIgBACIgEACIgGADIgIADIgJAAQgJAAgIgDg");
	this.shape_22.setTransform(257.8,22.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#660000").s().p("AgUAuQgJgDgGgHQgFgGgDgIQgDgJAAgMQAAgKADgKQADgJAGgGQAGgHAJgEQAJgDALAAQAMAAAIADQAJAEAGAFQAFAHADAJQADAJAAALQAAALgDAIQgDAKgGAGQgGAHgJADQgJAEgLAAQgMAAgIgDgAgIgbQgFADgCAEQgDADgBAGIgBALIABAMQABAFACAEQADAEAEACQAEACAFABQAFgBAEgCQAFgCACgDQADgEABgFIABgNIgBgLQgBgFgCgEQgDgEgEgDQgEgCgGABQgEgBgEACg");
	this.shape_23.setTransform(248.1,22.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#660000").s().p("AABBAIgGAAIgFAAIgDgBIgCgBIgBgBIgBgDIglhvIgCgFQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBIAIgBIAIAAIADABIACACIABACIAeBhIAehgIABgDIACgCIAEgBIAIAAIAHABQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAAAIABADIgCAGIgmBvIgBACIgCACIgFABIgIAAg");
	this.shape_24.setTransform(236.9,20.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#660000").s().p("AAdAwIgGAAIgDgBIgCgBIgBgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgEAAQgDAAgFAEQgFADgFAHIAAA4IAAACIgCABIgFABIgGAAIgFAAIgEgBIgCgBIgBgCIAAhWIABgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAGgEAJAAQAIAAAGADQAGADAFAFQADAFACAGQABAHAAAKIAAA0IAAACIgCABIgDABIgHAAg");
	this.shape_25.setTransform(151.4,22.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#660000").s().p("AgUAuQgJgDgGgHQgFgGgDgIQgDgJAAgMQAAgKADgKQADgJAGgGQAGgHAJgEQAJgDALAAQAMAAAIADQAJAEAGAFQAFAHADAJQADAJAAALQAAALgDAIQgDAKgGAGQgGAHgJADQgJAEgLAAQgMAAgIgDgAgIgbQgFADgCAEQgDADgBAGIgBALIABAMQABAFACAEQADAEAEACQAEACAFABQAFgBAEgCQAFgCACgDQADgEABgFIABgNIgBgLQgBgFgCgEQgDgEgEgDQgEgCgGABQgEgBgEACg");
	this.shape_26.setTransform(140.6,22.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#660000").s().p("AAABDIgFAAIgEgCIgCgBIAAgCIAAhVIAAgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAABVIAAACIgCABIgEACIgGAAgAgKgrQgDgCAAgIQAAgHADgDQADgCAHAAQAIgBADADQADADAAAHQAAAHgDADQgDADgIAAQgIAAgCgDg");
	this.shape_27.setTransform(132.8,20.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#660000").s().p("AgNAxIgIgDIgFgCIgEgCIgCgDIAAgGIAAgFIABgDIABgBIABAAIADABIAGACIAHADQAEABAFABIAFgBIAFgDQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgEQAAgDgBgCIgFgDIgGgEIgIgDIgHgDQgEgDgDgCQgDgDgCgEQgCgFAAgGQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIABIAHABIAFACIADACIABABIABACIAAACIABAEIgBAFIAAACIgBABIgBABIgDgBIgFgDIgGgBIgJgBIgEAAIgEACIgDADIAAAEQAAACABACIAFAFIAGACIAIADIAIAEQAEACADACQADADACAFQABAEAAAGQAAAHgCAGQgDAGgFAEQgFADgHADQgHABgHAAIgKAAg");
	this.shape_28.setTransform(126.4,22.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#660000").s().p("AAeAwIgHAAIgDgBIgDgBIAAgCIAAgwIgBgKIgDgGQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFADgFAHIAAA4IAAACIgDABIgDABIgHAAIgFAAIgEgBIgCgBIAAgCIAAhWIAAgBIABgCIAEAAIAFgBIAFABIADAAIACACIAAABIAAAKQAIgHAHgEQAHgEAIAAQAIAAAGADQAHADADAFQAEAFACAGQACAHgBAKIAAA0IAAACIgCABIgEABIgFAAg");
	this.shape_29.setTransform(117,22.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#660000").s().p("AgPAuQgJgCgGgHQgGgGgDgIQgDgKAAgMQAAgLADgJQADgJAGgHQAGgGAIgEQAJgDAJAAQAKAAAJADQAHADAFAGQAFAGADAIQACAHAAAKIAAADQAAAEgCACQgCACgEAAIg0AAQAAAGACAEQABAFADADQADAEAEABQAEACAGAAIALgBIAJgCIAGgDIADAAIACAAIABABIABADIAAAEIAAADIAAADIgBACIgCABIgDACIgHACIgKADIgMAAQgLAAgIgDgAgGgdIgGAFIgDAHIgCAIIAkAAQAAgKgEgGQgFgFgJAAQgEgBgDACg");
	this.shape_30.setTransform(106.6,22.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#660000").s().p("AAeBEIgHAAIgDgBIgDgBIAAgCIAAgxIgBgKIgCgFQgCgDgDgBQgDgCgDAAQgFAAgEAEQgFACgFAHIAAA5IgBACIgCABIgDABIgHAAIgGAAIgDgBIgCgBIAAgCIAAh/IAAgCIACgBIADgBIAGAAIAHAAIADABIACABIABACIAAAwQAGgGAHgDQAGgDAGAAQAKAAAFADQAHADADAFQAEAFACAHQABAFAAAKIAAA1IAAACIgCABIgEABIgFAAg");
	this.shape_31.setTransform(96.2,20.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#660000").s().p("AgQAuQgIgCgGgHQgGgGgDgIQgDgKAAgMQAAgLAEgJQADgJAFgHQAGgGAIgEQAJgDAIAAQALAAAJADQAHADAFAGQAFAGADAIQACAHAAAKIAAADQAAAEgCACQgCACgEAAIg0AAQAAAGABAEQACAFADADQADAEAEABQAEACAGAAIALgBIAJgCIAGgDIADAAIACAAIABABIABADIAAAEIAAADIAAADIgCACIgBABIgDACIgHACIgKADIgMAAQgLAAgJgDgAgGgdIgGAFIgEAHIgBAIIAkAAQAAgKgEgGQgEgFgKAAQgDgBgEACg");
	this.shape_32.setTransform(85.8,22.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#660000").s().p("AgPAwIgGAAIgDgBIgCgBIgBgCIAAhWIABgBIABgCIADAAIAGgBIAEABIAEAAIABACIABABIAAALIAGgIIAFgFQADgCACAAIAGgBIADAAIACAAIAEABIABABIABABIABACIAAADIAAAFIAAAGIgBAEIgBABIgBABIgDAAIgCgBIgCgBIgEAAIgEABIgEACIgFAFIgEAHIAAA1IAAACIgCABIgEABIgGAAg");
	this.shape_33.setTransform(77.7,22.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#660000").s().p("AglBBIgDAAIgCgCIgBgBIAAh5IABgCIABgBIAEgBIAFAAIAEAAIAEABIABABIABACIAAAKIAHgHIAIgFIAHgDIAIgBQAKAAAHAEQAGAEAFAGQAEAHACAJQACAIAAAKQAAAMgDAIQgCAJgFAHQgFAGgHAEQgHADgJAAIgGAAIgGgCIgGgEIgGgGIAAAqIgBABIgCACIgEAAIgGABIgGgBgAgDgrIgFACIgFAFIgFAGIAAAdQAFAFAFAEQAEAEAEAAQAFAAADgDQAEgCACgEQACgDABgFIABgKIgBgLQAAgFgCgEQgCgEgEgCQgDgDgFAAIgEABg");
	this.shape_34.setTransform(68.5,24);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#660000").s().p("AA5AwIgGAAIgEgBIgCgBIAAgCIAAgyIgBgIIgDgGQgBgDgDgBQgDgCgDAAQgFAAgEAEQgFADgFAHIAAA4IAAACIgCABIgEABIgGAAIgFAAIgEgBIgCgBIAAgCIAAgyIgBgIIgDgGQgBgDgDgBQgDgCgDAAQgFAAgEAEQgFADgFAHIAAA4IAAACIgCABIgEABIgGAAIgGAAIgEgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAHgHAHgEQAHgEAIAAIAKABIAHADIAFAFIAEAHIAIgIIAHgEIAIgDIAHgBQAJAAAGADQAGADADAFQAEAFACAGQABAHAAAIIAAA2IAAACIgCABIgEABIgGAAg");
	this.shape_35.setTransform(54.8,22.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#660000").s().p("AgUAuQgJgDgGgHQgFgGgDgIQgDgJAAgMQAAgKADgKQADgJAGgGQAGgHAJgEQAJgDALAAQAMAAAIADQAJAEAGAFQAFAHADAJQADAJAAALQAAALgDAIQgDAKgGAGQgGAHgJADQgJAEgLAAQgMAAgIgDgAgIgbQgFADgCAEQgDADgBAGIgBALIABAMQABAFACAEQADAEAEACQAEACAFABQAFgBAEgCQAFgCACgDQADgEABgFIABgNIgBgLQgBgFgCgEQgDgEgEgDQgEgCgGABQgEgBgEACg");
	this.shape_36.setTransform(41.3,22.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#660000").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_37.setTransform(30.8,20.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#E5B700").ss(2,1,1).p("AAADHIAAmN");
	this.shape_38.setTransform(370,19.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#E5B700").ss(2,1,1).p("AAADHIAAmN");
	this.shape_39.setTransform(185.3,19.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#E5B700").ss(2,1,1).p("EgoOgDHMBQdAAAQBTAAA6A6QA7A7AABSIAADIMhWtAAAIAAjIQAAhSA7g7QA6g6BTAAg");
	this.shape_40.setTransform(277.5,20);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC4D").s().p("EgrWADIIAAjIQAAhSA7g7QA6g6BTAAMBQdAAAQBTAAA6A6QA7A7AABSIAADIg");
	this.shape_41.setTransform(277.5,20);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#E5B700").ss(2,1,1).p("ArB7VIZeAAMAAAA2rI5eAAQhbAAhAhAQhBhAAAhbMAAAgv0QAAhbBBhBQBAhABbAAg");
	this.shape_42.setTransform(462.7,175,1,1,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF99").s().p("ArBbWQhbAAhAhAQhBhAAAhcMAAAgv0QAAhbBBhAQBAhABbAAIZeAAMAAAA2rg");
	this.shape_43.setTransform(462.7,175,1,1,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#E5B700").ss(2,1,1).p("ArB7VIZeAAMAAAA2rI5eAAQhbAAhAhAQhBhAAAhbMAAAgv0QAAhbBBhBQBAhABbAAg");
	this.shape_44.setTransform(92.6,175);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFF99").s().p("ArBbWQhbAAhAhAQhBhAAAhcMAAAgv0QAAhbBBhAQBAhABbAAIZeAAMAAAA2rg");
	this.shape_45.setTransform(92.6,175);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#E5B700").ss(2,1,1).p("Aud7VIc6AAMAAAA2rI86AAg");
	this.shape_46.setTransform(277.5,175);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF99").s().p("AudbWMAAAg2rIc6AAMAAAA2rg");
	this.shape_47.setTransform(277.5,175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.title_txt},{t:this.msg_txt},{t:this.percientage_txt},{t:this.playA_mc,p:{x:159.8,y:304.8}},{t:this.playNext_mc,p:{x:319.3,y:304.8}},{t:this.star_1},{t:this.star_2},{t:this.star_3}]}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.userScoreDetailHolder_1},{t:this.userScoreDetailHolder_2},{t:this.userScoreDetailHolder_3},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.playNext_mc,p:{x:355.7,y:307.3}},{t:this.playA_mc,p:{x:199.4,y:307.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,552,352);


(lib.lifeFace_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_3
	this.blast_mc = new lib.blast();
	this.blast_mc.name = "blast_mc";
	this.blast_mc.parent = this;
	this.blast_mc.setTransform(16.9,15.4,0.568,0.568);

	this.timeline.addTween(cjs.Tween.get(this.blast_mc).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("Ag+CWIgIgCIAAgBQgDgCgCAAIgBAAQgQgGgSgLQgRgKgMgOQgOgOgIgRIgIgOQgEgJgCgHQgDgMgBgPQAAgMABgPQACgQAJgOQAIgOANgJQAKgGAKgCQAMgDAKACIAGABIAGADQgDgKAAgLQABgKADgLQACgJAEgHQAEgJAGgGIAGgFIAHgEQAIgFAMgCQAEAAAEABIAIADQAKADAIAHQAIAHAEAJQAFgJAHgFIAEgDIAFgDIAGgBIAGgBIAGAAIAGABQAIADAHAGQAGAGAFAIQAFAHADANQADAIgBAKQAAAIgCALQAIgFAJgCQAJgCAKAAQAKABAKAEQAJAEAIAHQAHAGAFAIQAEAIADAKIACAKIABAKQACAJgBALIgCAVQgEARgJAPIgFAIIgFAIQgIAOgLAMQgLALgNAJQgWAPgdAJIgBAAIgEAAIgBABQgcAIgdABQgfAAgcgJgAgrgfIACAAIgBAAIgDgBIACABgAA9gxIACgBIAAAAIgCABgAAChyIAAAAIgCgFIACAFgAAdiMIABAAIADAAIgEAAg");
	this.shape.setTransform(18,15.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1057A5").s().p("AAREjQgggCgegXQgZgTgUgfQgxhJgPheQgOhXARhcQALg0AXgmQAcguAqgTQAZgJAcAJQAaAIAVATQBLBGAYCHQAcCeg+ByQgSAfgXATQgcAWgfAAIgBAAgAhPiIQgvAZAOBAQAOBAA2gCQAZgKAKgaQAJgZgHgdQgGgdgTgSQgQgPgVAAIgKABg");
	this.shape_1.setTransform(14.5,8.7,0.066,0.066);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzAOQgOhAAvgZQAagEAUATQASARAHAdQAGAcgJAZQgJAbgZAKIgDAAQgzAAgNg+g");
	this.shape_2.setTransform(14.1,8.3,0.066,0.066);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhZMLQhQgQhEgnQhmg5hPhhQhLhbguhyQgzh8gOiRQgNiFAUiPQAWiVBDh/QBIiIBwhXQBhhMB5gYQB7gYByAmQAeAKA7AdQA5AcAhAKQCZCCBYD/QA9C4gCDBQgCDFhDCyIgcBCQgRAkgSAZQgbAQgsAqQgsArgaAQQg6AphGAYQhEAXhJAEQgdAEgdAAQgyAAgxgKgAhtgXQgqATgbAtQgYAmgKA0QgRBcAOBYQAPBeAwBJQAUAfAaATQAeAXAgACQAgAAAbgWQAYgTASgfQA+hygcifQgZiHhJhGQgWgSgagIQgOgEgNAAQgOAAgNAEg");
	this.shape_3.setTransform(14.9,7,0.066,0.066);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D3EEFA").s().p("AhINMQhigjhThGQhyhfhOiKQhKiBgjiZQglilAIihQAIiqA4iXQAmhlA4hSQA9hZBOg9QBKg6BWgeQBagfBZADQBmAFBgArQBgArBHBKQghgJg5gcQg7gegegJQhygmh8AYQh4AYhhBLQhwBYhICIQhDB+gWCWQgUCPANCFQAOCQAzB8QAuByBLBbQBPBhBmA5QBEAnBPAQQBOAQBQgJQBJgEBEgXQBGgYA6gpQAagQAsgrQAsgqAbgRQhFCDh2BVQh9BaiMAJQgVABgUAAQhTAAhSgdg");
	this.shape_4.setTransform(14.2,7.1,0.066,0.066);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F396BE").s().p("Ah3BpQg+gLhcgfQAOgxAmgiQAogkAygCQAggCAmANQAaAKAkAWQAMAIATACIAjADQgNgrg2gpQAigVAmgEQAogGAkAPQAqAPAhArQAUAaAfA4QgvAehCASQgsAMhPALQgdAFggAAQgtAAgzgJg");
	this.shape_5.setTransform(17.3,25.1,0.066,0.066);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#933361").s().p("AkqhMQBdgXChgfQC2gkBGgPQBOBGANCWQh3AOg9A+QgQAOgoA1Qi3hLiyi3g");
	this.shape_6.setTransform(14.7,24.1,0.066,0.066);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B54F7C").s().p("AhnhYQBFgSCJgZQgrCMAYBnQgUALgbAEQgTADgeACQgNiWhOhGg");
	this.shape_7.setTransform(16.7,23.5,0.066,0.066);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2F6FE").s().p("ADsB2QkfABjzg9IADhXQACgzAGglQCFBQDSBMQBjAkCIAZQgeASgZAAIgEAAg");
	this.shape_8.setTransform(13.7,20.2,0.066,0.066);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2F6FE").s().p("AgNCCIgGgCQgihRgSg6QgZhNgIhEQBfBDBxAyQACAjgEA/QgEBEABAeQhDgTgtgIg");
	this.shape_9.setTransform(10.8,19.5,0.066,0.066);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAFAD6").s().p("AlQZXQgkgGhQgIQhLgIgogHQlNg2kniQQiVhKjHiAQjkiWiujEQi2jPhqjuIhJiQQgohTgZhBQhcj3gZjjQgJhoAAg0QADj6BMi2QAuhuBKhXQBOhcBjg1QDEhsEnAtQApAHBRANQBIAMAxAPQCMAoCqBnIBpBMQBjBJB1BKQAaAOBeAtQBKAkAsAaQAbgOA4ghQA1ggAegPQCFhDCNgiQCQglCRABQCRgCCRAfQCPAgCGA+QBLhvBdhfQBChGBchIQA9gxBvhNQEXjQEJgOQBygHBuAnQBuAnBTBOQCjCWBFEtQAjDUgHCaIgCBgQgCA4gGAnQgLA9gSB6QgSBrgZBJQgrCdhuDFQhABwiGDdQiGDRi5CrQi4CrjcB2Qj+CNkpBZQlWBkkWAaQjBAWioAAQhLAAhGgFgA8AvKIAxCIQAUA3ArA/QALAQBFBcQBFBaBHA8IAhAeQASATAFATIAmCmQAXBgAZBDIAtByQAaBDAYAuQB8D6DsC8QDACcDdA8QBLATAzAHQBFAJA6gKQBfgOAogKQBKgSA0gfIA8giQAkgTAeAAQALApAKAcIAqgKQgJgtgGgVQgLgngbgOQgcgIgjAOIg5AfIgohDQgZglgYgWQgggagwgGQgegFg6ACQgJg+AIg4QAJg+AdgwQAGgOARgDQAKgCAUgCIBggOQA2gKApgNQABgrgUg0QgFgOgjhKQC2gZB3gWQCkgdCFgnQDKhLBygwQCshICGhKQCRhXBBgsQByhNBOhOQBLhPBVhrQAxg/BjiFQAng4AwhTIBRiOQAagpAMgfQAQgqgDgnIgXAEIhEBhQgqA6gWAoQg9BjgbAqQgyBOgsA6Ig/BNQgkAtgYAjQgfAvgyA0QgbAchAA8Qg4A1hZA7IiZBkQgfAWg3AYQhGAggRAJQhTAqhpArQhHAdh6AuQiDA0iqAiQhwAWjFAbQiiARi9gSQiZgPjDgsQkEhDkXioQhAgkgggVQg1ghgmggQh2hrhMhYQhihxg6hxQg9iVgdiKIBGgBQApgBAegFQgMgkgmgPQgggMgqAFQhMAAhGAwQhAArgsBGQgjAyAKBSQAagRAZgpQAhg4AIgKQAegmA7goQAYA0AeBTg");
	this.shape_10.setTransform(18.9,20.7,0.066,0.066);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F8E26").s().p("AgvBWQghgXgJglQgLgnAXgnQAXgnApgKQAVgGAcAHQAMADAkAPQAAA0AJBnIgiATQgUAKgQACIgNABQgdAAgcgTg");
	this.shape_11.setTransform(2,17.8,0.066,0.066);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5F8E26").s().p("AgsjFQAkAVATAOQAnAvANAnQAZBHgcBKQgcBLhCAjIgnATQgDjkAging");
	this.shape_12.setTransform(1.2,15.4,0.066,0.066);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F8E26").s().p("AgVAhQgOgPgHgFQAKgZAOgdQAJADAUADQASAFAHAMQANARgLAWQgMAWgWgBIgEAAQgKAAgLgJg");
	this.shape_13.setTransform(1.6,13.8,0.066,0.066);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5F8E26").s().p("AABA2QgPAAgdgJQgIgcgCgPQgDgYAOgPQANgQAZgBIApAEQAOAdADAPQAEAZgQARQgOATgZAAIgCgBg");
	this.shape_14.setTransform(2.6,11.9,0.066,0.066);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5F8E26").s().p("AgBBhQgqABgdghQgegiAFgoQABgXAQgWQAKgQAWgVQAsgMA9APIAcAnQAOAYAAAWQADAoggAfQgdAdgkAAIgGAAg");
	this.shape_15.setTransform(7.3,10.2,0.066,0.066);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5F8E26").s().p("AgWApQgYgMAAgdQgBgcAXgNQATgLAVAIQAXAJAFAVQAMAcgbAWQgPAMgOAAQgLAAgLgHg");
	this.shape_16.setTransform(26.9,9.7,0.066,0.066);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5F8E26").s().p("AgOC1QhUgCg7g0QgngegehCQBVhNBtg2QBmg0B2gcQAeA8AIAoQAFA/gYA5QgaA8gyAkQg7AthNAAIgJAAg");
	this.shape_17.setTransform(4.4,10.3,0.066,0.066);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5F8E26").s().p("AgkA1QgbgPgHgbQgHgPAGgVIAMgkQBCAYBEAlIgXAiQgPAUgTAFQgKADgJAAQgSAAgRgJg");
	this.shape_18.setTransform(31.6,9.2,0.066,0.066);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5F8E26").s().p("Ah5A+Qg9gggphUQBugeBxgEQBzgEBtAYIgSAAIggA6QgVAfgXARQgzAshHAGIgWACQg5AAgygcg");
	this.shape_19.setTransform(29.1,9.1,0.066,0.066);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AjtiAQCKAUBHAHQBzALBegGIA5CFQheAYiDAaIjiAqQgTh+gFiDg");
	this.shape_20.setTransform(17.6,21.8,0.066,0.066);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AkLCTIgtg4IgBiSQgChbAFg4QDzA8EfgBQAbABAhgTIAPgBQAHCqANBoQhEAPhzAWQiGAYgwAKQhrAThCACQgRgXgbgig");
	this.shape_21.setTransform(13.8,21.9,0.066,0.066);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag4h1IABgGQAvAIBBATQABB9gKBfQhKiUgehdg");
	this.shape_22.setTransform(11.1,21.2,0.066,0.066);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8CC63E").s().p("AJGYmQlehbkwizQjqiCiniKQg2gugagYQgtgpgbgjQgUgzgigmQgZgeghg3QgphEgPgVQgZgigig/QgphJgRgaQgYgogohPQgphTgWglQgbgwgdhKQgehTgRgpQgnhrgKihQgFi3gIhaQBDgjAchMQAchKgZhIQgNgngnguIAVg7QAIAFANAPQANALANgCQAXABALgWQALgXgNgRQgHgMgSgFQgVgDgJgDQAUgvAhg4IA9hjQAcAJARAAQAaABAOgTQARgRgEgaQgEgPgNgdQApgqAqgfQA7AzBUADQBUACA+gwQAygjAZg8QAYg6gEg/QBIgUBmgFQgWAVgLAPQgPAXgCAXQgEApAdAhQAeAiApgBQApADAgggQAggggEgpQABgVgOgYIgcgnQBOANATAFQAZAGBxAQQBUAMAyAYQAJARAKAeIARAvQAsBuA7BWQATAcAqAxQAsAzASAZQirhniMgoQgwgPhIgMQhQgNgpgHQkogtjDBsQhjA1hPBcQhJBXguBuQhMC2gED6QgkgPgLgDQgcgHgXAGQgoAKgYAnQgXAnAMAoQAJAlAhAXQAhAXAmgFQAQgCAUgKIAigTQAYDjBdD3QAYBBApBTIBICQQBqDuC3DPQCuDEDjCWQDHCACVBKQEmCQFOA2QAoAHBLAIQBQAIAjAGIgVAAQkMAAlLhSg");
	this.shape_23.setTransform(8.8,20.4,0.066,0.066);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8CC63E").s().p("A1oPzQhegtgagOQh2hKhihJQAiALBDAbQA8AXArAGQBkAUBsgVQBjgUBgg0QCxhdB8jWIBNBSQAtAvAoAbQBjBIB6AXQB8AXB0gkQBwggBghSQBahLBAhrQBTiHAiilQAgidgRikQgHijg0iUQg2idhih4QhHhXhZg7Qhfg+hpgVQitgXhzA3QguAVgzAlQgeAWg6AxQBUhuBzg+QB/hDCAAMQB9AGBjBBQB1BJBhBvQBkCAAtCYQA4CZACCdQgCBjgCAsQgEBPgKA9QgOBogCAhQCIhWB9giQApBVA9AgQA7AhBHgHQBHgGAzgsQAXgRAVggIAgg6IASAAQAWAFAdAJIAzAQIgNAkQgFAVAGAQQAIAbAbAPQAbAOAbgIQAUgFAOgUIAYgjQDABsB7DCQB5DCARDdQhFktijiWQhThOhugnQhugnhyAHQkJAOkXDQQhvBNg9AxQhcBIhCBGQhdBfhMBvQiFg+iOggQiRgfiSACQiQgBiRAlQiNAiiFBDQgeAPg2AgQg4AhgbAOQgrgahKgkgAG+C7QgXANABAdQAAAcAYAMQAaARAagWQAbgWgMgcQgEgWgXgIQgKgDgJAAQgMAAgLAGg");
	this.shape_24.setTransform(23.8,8.2,0.066,0.066);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8CC63E").s().p("AqhF3QgSicAaiaQAbidBHiJQBBiABihjQBnhoB9g6QAkgTBAgTQBNgXAYgKQBwgGB6A7QBGAdBIA4QAzAoBIBGQAaAZAeAmIAzBFIAgAwQAQAdACAaIhLhlQgtg6gngjQhohfh4gzQiEg3iCAIQiIAKh9BMQh4BIhUB0QiUDCgoE2QgQDCAhCGQABAiAHA3IAJBYQhBh/gZi8g");
	this.shape_25.setTransform(13.8,5.1,0.066,0.066);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#70B11A").s().p("AAAFMIiMkRQhTiigdh4QgehugNiLQgIhfgEicIAngTQAIBaAFC3QAKChAnBrQARAqAeBTQAdBKAbAvQAWAlApBTQAoBQAXAnQARAaApBJQAiA/AZAiQAPAVApBEQAhA3AZAfQAiAlAUAzQijiaiRkBg");
	this.shape_26.setTransform(2.7,21.4,0.066,0.066);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#70B11A").s().p("Ai8D/QAeieBQiLQBOiPB4hpQAeBCAnAfQgqAegpArIgqgEQgZABgNAQQgOAPADAZQACAOAIAdIg8BiQggA4gUAuQgOAegKAZIgVA8QgUgOgkgWg");
	this.shape_27.setTransform(2.1,12.4,0.066,0.066);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#70B11A").s().p("AkbP7QgrgHg8gWQhDgbgigMIhqhLQgSgagrgzQgqgwgTgcQg7hWgshuIgRgwQgKgdgKgRQgxgZhVgMQhxgPgZgHQgTgEhPgOQg9gPgsAMQhmAFhIAUQgIgogeg8QCMgcCCAKQCQALB1A4QgwjcAVi4QAIhYAFgsQALhMAVg1IAwiGQAdhPAcgzQBDh8BZhlQB0htBqgvQCLg6BqASQgYAKhOAXQhAATgkATQh9A6hnBoQhiBjhBCAQhHCJgbCeQgaCaASCbQAZC8BBB/IgJhYQgHg3gBgiQAmCFAkBXQAxB1A/BWQA3BIAyAxQA9A8BBAlQAvAfBDAZQAjANBXAZQBhALBdgQQBhgRBQgvQBkg2BSheQBKhUA3hwQAsA9AgAkQAsAyAuAfQBtBPB8AcQBqAaBzgiQBrgfBahKQBthaBHiMQA5hlAYiGQAThrABiOQARCkghCeQghCkhTCIQhBBqhaBMQhhBRhwAhQhzAjh8gXQh6gWhjhJQgogagtgvIhNhTQh8DWixBeQhgA0hiATQg4ALg2AAQgyAAgwgJg");
	this.shape_28.setTransform(15.7,7.3,0.066,0.066);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#261A0A").s().p("AmWRrQgzgGhLgUQjdg8jAibQjsi8h8j7QgYgugahDIgthzQgZhCgXhgIgmilQgFgUgSgSIghgfQhHg7hFhbQhFhbgLgRQgrg/gUg3IgxiIQgehTgYgzQg7AngeAmQgIALghA3QgZApgaASQgKhSAjgyQAshGBAgrQBGgwBMAAQAqgGAgANQAmAPAMAkQgeAEgpACIhGABQAdCKA9CVQA6BxBiBxQBMBXB2BrQAmAgA1AiQAgAUBAAlQEXCmEEBEQDDArCZAQQC9ATCigTQDFgaBwgXQCqgiCDg0QB6gtBHgdQBpgrBTgpQARgJBGggQA3gZAfgVICZhkQBZg8A4g0QBAg9AbgcQAygzAfgvQAYgjAkgtIA/hOQAsg6AyhOQAbgqA9hjQAWgnAqg7IBEhgIAXgEQADAmgQAqQgMAggaAoIhRCPQgwBTgnA3QhjCGgxA+QhVBrhLBPQhOBOhyBOQhBAsiRBXQiGBIisBJQhyAvjKBMQiFAnikAeQh3AVi1AZQAjBLAEAOQAUA0gBArQgoANg2AJIhhAPQgUABgKACQgRAEgGANQgdAwgJA/QgIA4AJA+QA6gCAeAEQAwAHAgAZQAZAWAZAmIAoBCIA4geQAjgOAcAIQAbAOALAmQAGAWAJAsIgqALQgKgdgLgpQgeAAgkATIg7AiQg0AghLASQgoAKhfAOQgeAEghAAQgfAAghgEgAnCOOQgyACgoAkQgnAjgNAxQBcAfA+ALQBWAPBIgLQBPgLArgMQBDgSAvgeQgfg5gUgaQgigrgpgPQgkgPgpAGQglAEgkAVQA4ApANArIgjgDQgTgCgNgIQgkgWgbgKQgfgLgcAAIgKAAgAoAJyQhFAQi4AkQihAfhdAXQCzC4C3BLQAog1AQgPQA9g9B3gOQAfgCATgDQAbgFAUgLQgZhmAsiNQiKAZhFARgAyQC8IgDBYQgFA5ACBbIABCTIAtA4QAbAhARAXQBCgBBrgTQAwgKCHgZQBzgVBEgPQgNhogHirIgPABQiIgZhjgkQjThNiGhQQgGAlgCAzgAnqJGIDjgrQCEgZBdgZIg5iFQhdAFh0gLQhHgGiKgVQAECFATB+gA1tBfQASA7AiBRIAGACIgCAGQAeBdBLCVQALhfgBh+QgBgeAEhEQAEhAgCgjQhygyhfhCQAIBDAZBNg");
	this.shape_29.setTransform(19.4,18.8,0.066,0.066);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#261A0A").s().p("AheDlIgNgEIAAgBQgEgDgEAAIgCAAQgXgKgbgQQgagQgTgUQgVgWgMgZIgMgXQgGgNgDgLQgFgRgBgYQgBgRADgYQADgYAMgWQANgWAUgNQAPgJAQgDQARgEAQADIAJACQAFABADACQgEgOABgRQABgPAEgRQADgNAGgMQAHgNAJgJIAJgIIAKgHQAMgHASgCQAGgBAHACIANAEQAOAFANALQALAKAHAOQAIgNAKgIIAHgFIAIgEIAIgDIAJgBIAJABIAKABQAMAEALAKQAJAIAHAMQAIAMAFATQADANAAAPQAAAMgDARQALgIAPgDQANgEAPABQAPABAPAGQAPAGALALQALAKAHAMQAHAMAEAPIADAPIACAPQADAOgBARIgEAgQgGAagOAXIgHANIgIAMQgLAUgRASQgRASgUANQghAXgsANIgCAAIgGABIgBACQgsAMgrAAQgvAAgrgMgAi7hoQgMADgKAFQgLAGgIAIQgMAKgIAOQgIAOgDAQQgDARAAAVIABAZQABAOADALQADAMAJARIANAbQAPAZAQAQIAIAHIAHAHQARAOAXANQAfASAjAJQAiAIAcAAQAVABAcgDQAcgCAigKQAdgJAagOQAWgMASgRQASgRAOgVIAUghQAKgUAFgPIAEgSIADgTIABgJIAAgKQABgOgEgVQgBgWgNgTQgMgUgTgLIgNgGIgFgBIgGgCQgKgCgMAAQgLABgLADQgNADgNAJIABgOIACgOIAAgOQAAgQgGgPQgEgPgKgNQgKgLgMgHQgJgHgNAAQgNgCgMAHQgMAGgIALIAJgHIAJgGQAMgFARACQAKACAKAGQAJAGAHAJQAKAMAFAQQAFAOABARQAAAOgCAKQgCAOgGAKQgHAOgLAJQgJAHgLADQgLAEgLgDQgMgDgLgIIgJgIIgHgJQgGALgGAIQgIAKgKAFQgIAFgKABQgJACgKgBIgMgEQgHgCgEgEQgHgDgGgGIgKgMQgHgJgFgMIgHgVQgDgOABgTQAEgfAPgUQAIgLAMgHQANgIANgBQANgBAOAGQAMAFAKAJIAIAKIAHAKQAAgDgCgDIgDgFIgEgGIgGgHIgMgLQgHgFgHgDQgNgGgLABQgKgCgOAGQgLAEgLALQgJAKgHANQgDAFgCAIIgFANIgDANIgCANQgCASAFAWQgMgFgOgBIgIAAQgJAAgKABgAhGjZQgJADgHAGQgIAGgGAJQgGAIgEAKQgFAPgBARQgBARAEAQQADAPAIANQAIAOALAJQAIAHAKAEQAKADAKgBQAOAAANgJQAMgJAGgNIADgGIADgGQAHgSAAgUQAAgTgGgTQgIgZgPgNQgHgHgKgFQgJgEgLAAIgCAAQgIAAgHACgAAojUQgLAEgIAJQgIAIgGALIAEAGQAGAQACASQACARgDASIgCAGIgBAGIgCAGQALASAQAIQAIAEAKAAQAJAAAJgEQAKgEAIgJQAHgJAEgLQAHgPABgRQABgQgEgQQgEgNgGgLQgGgLgJgIQgJgJgMgDIgLgBQgHAAgGACg");
	this.shape_30.setTransform(18,15.9,0.658,0.658);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1057A5").s().p("AAREjQgggCgegXQgZgTgUgfQgxhJgPheQgOhXARhcQALg0AXgmQAcguAqgTQAZgJAcAJQAaAIAVATQBLBGAYCHQAcCeg+ByQgSAfgXATQgcAWgfAAIgBAAgAhPiIQgvAZAOBAQAOBAA2gCQAZgKAKgaQAJgZgHgdQgGgdgTgSQgQgPgVAAIgKABg");
	this.shape_31.setTransform(21.3,8.4,0.061,0.061,5.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgzAOQgOhAAvgZQAagEAUATQASARAHAdQAGAcgJAZQgJAbgZAKIgDAAQgzAAgNg+g");
	this.shape_32.setTransform(21,8,0.061,0.061,5.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhZMLQhQgQhEgnQhmg5hPhhQhLhbguhyQgzh8gOiRQgNiFAUiPQAWiVBDh/QBIiIBwhXQBhhMB5gYQB7gYByAmQAeAKA7AdQA5AcAhAKQCZCCBYD/QA9C4gCDBQgCDFhDCyIgcBCQgRAkgSAZQgbAQgsAqQgsArgaAQQg6AphGAYQhEAXhJAEQgdAEgdAAQgyAAgxgKgAhtgXQgqATgbAtQgYAmgKA0QgRBcAOBYQAPBeAwBJQAUAfAaATQAeAXAgACQAgAAAbgWQAYgTASgfQA+hygcifQgZiHhJhGQgWgSgagIQgOgEgNAAQgOAAgNAEg");
	this.shape_33.setTransform(21.9,6.9,0.061,0.061,5.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D3EEFA").s().p("AhINMQhigjhThGQhyhfhOiKQhKiBgjiZQglilAIihQAIiqA4iXQAmhlA4hSQA9hZBOg9QBKg6BWgeQBagfBZADQBmAFBgArQBgArBHBKQghgJg5gcQg7gegegJQhygmh8AYQh4AYhhBLQhwBYhICIQhDB+gWCWQgUCPANCFQAOCQAzB8QAuByBLBbQBPBhBmA5QBEAnBPAQQBOAQBQgJQBJgEBEgXQBGgYA6gpQAagQAsgrQAsgqAbgRQhFCDh2BVQh9BaiMAJQgVABgUAAQhTAAhSgdg");
	this.shape_34.setTransform(21.2,6.9,0.061,0.061,5.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#261A0A").ss(0.6,1,1).p("AAngYQAAAGgEAIQgDAIgPATQgPAUgPgRQgQgRgFgKQgGgNADgBQADgBAVAHQATAIAQgMQAQgMABAHg");
	this.shape_35.setTransform(20,22.7,1.043,1,0,0,-3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#993300").s().p("AgNAUQgQgRgFgKQgGgNADgBQADgBAVAHQATAIAQgMQAQgMABAHQAAAGgEAIQgDAIgPATQgIALgJAAQgGAAgHgIg");
	this.shape_36.setTransform(20,22.7,1.043,1,0,0,-3);

	this.instance = new lib.eye_mc();
	this.instance.parent = this;
	this.instance.setTransform(14.6,7.1,0.658,0.658,0,0,0,0.1,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FAFAD6").s().p("AlQZXQgkgGhQgIQhLgIgogHQlNg2kniQQiVhKjHiAQjkiWiujEQi2jPhqjuIhJiQQgohTgZhBQhcj3gZjjQgJhoAAg0QADj6BMi2QAuhuBKhXQBOhcBjg1QDEhsEnAtQApAHBRANQBIAMAxAPQCMAoCqBnIBpBMQBjBJB1BKQAaAOBeAtQBKAkAsAaQAbgOA4ghQA1ggAegPQCFhDCNgiQCQglCRABQCRgCCRAfQCPAgCGA+QBLhvBdhfQBChGBchIQA9gxBvhNQEXjQEJgOQBygHBuAnQBuAnBTBOQCjCWBFEtQAjDUgHCaIgCBgQgCA4gGAnQgLA9gSB6QgSBrgZBJQgrCdhuDFQhABwiGDdQiGDRi5CrQi4CrjcB2Qj+CNkpBZQlWBkkWAaQjBAWioAAQhLAAhGgFg");
	this.shape_37.setTransform(19,20.6,0.066,0.066);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FAFAD6").s().p("AgSDqQgcAAgigJQgjgJgfgSQgXgNgRgNIgHgHIgIgIQgQgPgPgaIgNgbQgJgQgDgMQgDgLgBgOIgBgZQAAgWADgRQADgPAIgOQAIgOAMgLQAIgIALgFQAKgFAMgDQAOgDANABQAOABAMAGQgFgWACgTIACgNIADgNIAFgNQACgIADgFQAHgMAJgKQALgLALgFQAOgGAKACQALAAANAFQAHADAHAGIAMALIAGAGIAEAHIADAFQACADAAACIgHgKIgIgJQgKgJgMgGQgOgFgNABQgNABgNAHQgMAHgIAMQgPATgEAfQgBAUADANIAHAWQAFAMAHAIIAKAMQAGAGAHAEQAEADAHACIAMAEQAKABAJgBQAKgCAIgFQAKgFAIgJQAGgJAGgLIAHAKIAJAIQALAIAMADQALACALgDQALgDAJgIQALgJAHgOQAGgKACgNQACgLAAgOQgBgQgFgPQgFgQgKgMQgHgIgJgGQgKgGgKgCQgRgDgMAGIgJAGIgJAHQAIgLAMgGQAMgHANABQANABAJAGQAMAHAKAMQAKAMAEAPQAGAQAAAPIAAAOIgCAPIgBANQANgIANgEQALgDALAAQAMgBAKADIAGABIAFACIANAGQATALAMATQANATABAWQAEAVgBAPIAAAJIgBAKIgDASIgEASQgFAQgKATIgUAiQgOAUgSASQgSARgWALQgaAOgdAJQgiAKgcADQgVACgRAAIgLAAg");
	this.shape_38.setTransform(18,15.8,0.658,0.658);

	this.instance_1 = new lib.eye_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.7,7,0.611,0.611,5.7,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.instance_1},{t:this.shape_30},{t:this.shape_38},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_37},{t:this.instance},{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,31.8);


(lib.levelChooseBoard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* lockBtn_1.gotoAndStop(2);
		lockBtn_1.name_txt.text="Comprehension";
		lockBtn_2.name_txt.text="Vocabulary";
		lockBtn_3.name_txt.text="Grammar";
		
		alert_txt.visible=false;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.alert_txt = new cjs.Text("To unlock Grammar, you have to play Vocabulary level.", "18px 'Calibri'", "#FF0000");
	this.alert_txt.name = "alert_txt";
	this.alert_txt.textAlign = "center";
	this.alert_txt.lineHeight = 16;
	this.alert_txt.lineWidth = 460;
	this.alert_txt.parent = this;
	this.alert_txt.setTransform(275,200.6);

	this.close_btn = new lib.close_btn();
	this.close_btn.name = "close_btn";
	this.close_btn.parent = this;
	this.close_btn.setTransform(525.4,24.5,1,1,0,0,0,14,14);

	this.lockBtn_3 = new lib.lockBtn_1();
	this.lockBtn_3.name = "lockBtn_3";
	this.lockBtn_3.parent = this;
	this.lockBtn_3.setTransform(455.6,130.5,1,1,0,0,0,75,50);
	this.lockBtn_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,3);

	this.lockBtn_2 = new lib.lockBtn_1();
	this.lockBtn_2.name = "lockBtn_2";
	this.lockBtn_2.parent = this;
	this.lockBtn_2.setTransform(275,130.5,1,1,0,0,0,75,50);
	this.lockBtn_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,3);

	this.lockBtn_1 = new lib.lockBtn_1();
	this.lockBtn_1.name = "lockBtn_1";
	this.lockBtn_1.parent = this;
	this.lockBtn_1.setTransform(94.5,130.5,1,1,0,0,0,75,50);
	this.lockBtn_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F291E").s().p("AgIBmIgFgBIgEgCIgBgDIAAi/IABgCQABgBAAAAQAAgBAAAAQABAAAAAAQABAAABgBIAFgBIAIgBIAJABIAGABIACADIABACIAAC/IgBADIgCACIgGABIgJABIgIgBg");
	this.shape.setTransform(363.4,28.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F291E").s().p("AgYBFQgNgEgIgJQgKgJgEgOQgEgNAAgTQAAgQAEgOQAFgOAJgKQAIgJANgGQAMgFAPAAQAQAAALAFQAMAFAHAJQAIAIADAMQAEAMAAANIAAAGQAAAGgDADQgDADgFAAIhOAAQAAAJABAHQACAGAFAFQAEAFAHACQAGADAJAAQAKAAAHgCIANgDIAJgDIAGgBIACAAIABACIABAEIAAAGIAAAGIgBADIgBADIgBACIgFADIgLAEIgPACQgJACgKAAQgQAAgNgFgAgJgsQgGADgDAEQgDAFgDAGQgBAGAAAHIA2AAQAAgQgHgJQgGgJgOAAQgHAAgEADg");
	this.shape_1.setTransform(352.1,31.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F291E").s().p("AgLBHIgIgBIgEgDIgCgEIgnh1IgCgFIAAgEIgBgCIABgCIADgCIAGgBIAJAAIAJAAIAGABIADACIACADIAcBfIABAEIABgEIAdhfIACgDIADgCIAFgBIAJAAIAJAAIAGABIACACIABACIAAACIAAADIgBACIgBAEIgnB1IgCAEQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBABIgIABIgNAAIgLAAg");
	this.shape_2.setTransform(337.5,31.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F291E").s().p("AgYBFQgNgEgJgJQgJgJgEgOQgEgNAAgTQAAgQAFgOQAEgOAIgKQAJgJAMgGQANgFAOAAQARAAAMAFQALAFAIAJQAHAIAEAMQADAMAAANIAAAGQAAAGgDADQgDADgFAAIhPAAQAAAJACAHQADAGADAFQAFAFAHACQAGADAJAAQAKAAAHgCIANgDIAIgDIAGgBIACAAIACACIABAEIAAAGIAAAGIAAADIgCADIgBACIgFADIgLAEIgPACQgIACgKAAQgQAAgOgFgAgJgsQgGADgDAEQgDAFgDAGQgCAGAAAHIA2AAQABgQgGgJQgIgJgOAAQgGAAgEADg");
	this.shape_3.setTransform(322.8,31.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F291E").s().p("AgoBfQgFAAgDgDQgDgCAAgHIAAirIABgDIADgCIAGgBIAJAAIAKAAIAFABIAEACIABADIAACXIA6AAIADABIACADIABAFIAAAHIAAAIIgBAFIgCACIgDABg");
	this.shape_4.setTransform(309.9,29.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F291E").s().p("AgeBHQgJgDgGgFQgHgFgDgIQgEgIAAgLQAAgLAFgJQAEgIAJgFQAJgFANgDQANgCARAAIAMAAIAAgIIgBgLQgBgFgDgDQgDgDgFgBQgEgCgGAAQgKAAgHACIgNAFIgJAEIgGACIgDgBIgCgDIgBgEIgBgGIABgIQABgCACgCIAHgFQAFgDAHgCIAPgDQAIgCAIAAQAPAAALADQALADAHAHQAHAGADAKQAEAJAAAOIAABXQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAIgKAAIgJAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgBgDIAAgLQgIAJgKAFQgLAFgLAAQgLAAgIgDgAgFALQgGABgEADQgEADgCADQgCAEAAAFQAAAIAFAFQAGAFAJAAQAHAAAGgEQAHgEAGgIIAAgWIgOAAQgJAAgFABg");
	this.shape_5.setTransform(288,31.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3F291E").s().p("AgYBFQgNgEgIgJQgKgJgEgOQgEgNAAgTQAAgQAEgOQAFgOAJgKQAIgJANgGQAMgFAPAAQAQAAALAFQAMAFAHAJQAIAIADAMQAEAMAAANIAAAGQAAAGgDADQgDADgFAAIhOAAQAAAJABAHQACAGAFAFQAEAFAHACQAGADAJAAQAKAAAHgCIANgDIAJgDIAGgBIACAAIABACIABAEIAAAGIAAAGIgBADIgBADIgBACIgFADIgLAEIgPACQgJACgKAAQgQAAgNgFgAgJgsQgGADgDAEQgDAFgDAGQgBAGAAAHIA2AAQAAgQgHgJQgGgJgOAAQgHAAgEADg");
	this.shape_6.setTransform(266.6,31.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3F291E").s().p("AgTBJIgNgDIgJgEIgEgDIgDgFIgBgKIAAgGIABgEQABgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACgBIAFACIAHAEIALAEQAHACAHAAIAJgBIAHgDIADgFQACgDAAgEQAAgEgDgDIgHgGIgJgEIgLgFIgMgFIgKgHQgEgFgDgHQgDgGAAgJQAAgKAEgIQAEgHAGgGQAHgGAKgDQAKgDALAAIAMABIALACIAIADIAEADIACACIABADIABAEIAAAFIAAAHIgCAEIgBACIgCAAIgEgBIgHgEIgJgDQgGgCgHAAIgIABQgEABgBACIgEAFQgBACgBADQAAAFAEADQACADAFACIAJAFIAMAEIALAGQAGADAFAEQAEAEADAHQADAGAAAJQAAALgEAJQgEAIgIAGQgHAGgLADQgLADgLAAIgNgBg");
	this.shape_7.setTransform(253.2,31.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F291E").s().p("AgfBFQgNgFgIgJQgJgKgEgNQgEgNAAgSQAAgPAEgOQAFgOAJgKQAJgKANgFQANgGASAAQARAAANAFQANAFAJAJQAIAJAEAOQAEANAAASQAAAPgEAOQgEAOgKAKQgIAKgOAFQgNAGgSAAQgRAAgNgFgAgNgpQgGADgEAGQgEAGgCAIQgCAIAAAKQAAAJABAJQACAIAEAGQAEAGAGADQAFADAJAAQAIAAAGgDQAHgDADgGQAFgFABgIQACgJAAgKQAAgJgCgIQgBgIgEgGQgDgGgHgDQgGgEgIAAQgIAAgGADg");
	this.shape_8.setTransform(239.1,31.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3F291E").s().p("AgfBFQgNgFgJgJQgHgKgFgNQgEgNAAgSQAAgPAFgOQAEgOAJgKQAJgKAOgFQANgGAQAAQATAAAMAFQANAFAIAJQAJAJAEAOQAEANAAASQAAAPgFAOQgDAOgKAKQgJAKgNAFQgOAGgRAAQgRAAgNgFgAgNgpQgGADgEAGQgEAGgCAIQgCAIAAAKQAAAJACAJQABAIAEAGQADAGAGADQAHADAIAAQAIAAAHgDQAGgDAEgGQADgFACgIQACgJAAgKQAAgJgBgIQgCgIgEgGQgEgGgFgDQgHgEgJAAQgHAAgGADg");
	this.shape_9.setTransform(222.9,31.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F291E").s().p("AAjBmIgGgBIgCgCIgBgDIAAhKQAAgJgCgGQgBgGgDgCQgDgEgEgCQgEgDgGAAQgFABgHAFQgIAEgHAKIAABWIgBADIgDACIgGABIgJABIgJgBIgGgBIgDgCIAAgDIAAi/IAAgCQABgBAAAAQAAgBAAAAQABAAAAAAQABAAAAgBIAGgBIAJgBIAJABIAGABIADADIABACIAABIQAJgJAKgFQAJgFAKABQAOgBAJAFQAJAFAGAHQAGAIACAKQACAJABAOIAABQIgBADIgEACIgFABIgJABIgJgBg");
	this.shape_10.setTransform(206.9,28.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3F291E").s().p("AgUBcQgPgGgLgMQgLgMgGgSQgGgSAAgYQAAgXAGgSQAHgTALgNQAMgNAQgGQAQgHATAAIAPABIAOAEIALAFIAHAFIACADIACADIAAAFIAAAHIAAAHIgBAFIgCADIgCABQgCAAgEgCIgIgGIgNgGQgHgDgLAAQgLAAgIAFQgJAFgGAIQgGAJgDAMQgEAMAAAOQAAARAEAMQADANAHAHQAGAIAIAEQAJAEALAAQALAAAHgCIANgGIAJgFQADgCACAAIACAAIACADIABAFIAAAIIAAAGIgBAFIgBADIgCADIgHAEIgLAFIgPAEQgJACgKAAQgSAAgQgGg");
	this.shape_11.setTransform(191.1,29.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ECBD00").s().p("EgnOATiQhjAAhGhGQhGhGAAhiIAA/mQAAhjBGhGQBGhGBjAAMBOeAAAQBiAABGBGQBGBGAABjIAAfmQAABihGBGQhGBGhiAAg");
	this.shape_12.setTransform(275,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.lockBtn_1},{t:this.lockBtn_2},{t:this.lockBtn_3},{t:this.close_btn},{t:this.alert_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.levelChooseBoard, new cjs.Rectangle(0,0,550,250), null);


(lib.legAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// upLeg
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.4,25.3);

	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.3,28.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({startPosition:0},1).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,15.6,27.2,19.4);


(lib.frongNorl_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.7,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-25.6},18).to({y:-22.6},19).wait(1));

	// upHand
	this.instance_1 = new lib.hand("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9,2.2,1,1,-50.7,0,0,15.3,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-58.2,x:-8.6,y:-0.1},18).to({rotation:-50.7,x:-9,y:2.2},19).wait(1));

	// Layer 3
	this.instance_2 = new lib.leg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4.7,28.7,1,1,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.04,rotation:0,skewX:44.8,skewY:47.3,x:-4.6,y:27.8},18).to({scaleX:1,rotation:44.8,skewX:0,skewY:0,x:-4.7,y:28.7},19).wait(1));

	// body
	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.6,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.05,y:5.9},18).to({scaleY:1,y:6.9},19).wait(1));

	// Layer 4
	this.instance_4 = new lib.leg("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-7,13.9,1,1,44.8,0,0,-13,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38));

	// backHand
	this.instance_5 = new lib.hand2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(4.1,2.3,1,1,135.7,0,0,-14.3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:4.1,rotation:126.8,x:4,y:0.8},18).to({regY:4,rotation:135.7,x:4.1,y:2.3},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-46.7,54.7,81.8);


(lib.frogJump_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.7,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5.1,y:-29.6},3).wait(2).to({startPosition:0},0).to({x:2.7,y:-22.6},3).wait(2));

	// upHand
	this.instance_1 = new lib.hand("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9,2.2,1,1,-50.7,0,0,15.3,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-8.7,rotation:-6.6,x:-1.5,y:-3.4},3).wait(2).to({rotation:-6.6},0).to({regY:-8.6,rotation:-50.7,x:-9,y:2.2},3).wait(2));

	// upLeg
	this.instance_2 = new lib.legAnim("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({startPosition:4},0).wait(5));

	// body
	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.6,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1,skewX:3.6,x:2.7,y:4.4},3).wait(2).to({startPosition:0},0).to({scaleY:1,skewX:0,x:1.6,y:6.9},3).wait(2));

	// Layer 6
	this.instance_4 = new lib.legAnim("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(3.1,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({startPosition:4},0).wait(5));

	// backHand
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.9,1.9,1,1,0,0,0,2.9,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:2.8,regY:-13.9,rotation:45.6,x:-4.1,y:-5.6},3).wait(2).to({startPosition:0},0).to({regX:2.9,regY:-14,rotation:0,x:0.9,y:1.9},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-46.3,54.5,81.3);


(lib.frog_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{wrongJump:1,standUp:29,rightJump:43});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		playSound("boing2");
	}
	this.frame_42 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(26).call(this.frame_42).wait(26));

	// Layer 4
	this.instance = new lib.jumpEffect();
	this.instance.parent = this;
	this.instance.setTransform(-3.3,34.3,1,1,0,0,0,3.2,2.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({_off:true},13).wait(13).to({_off:false,x:-13.4,y:32.6},0).to({_off:true},1).wait(16).to({_off:false,regX:-0.1,regY:0.1,scaleX:1.66,scaleY:1.66,x:-16.6,y:33.6},0).wait(9));

	// Layer 1
	this.frongNorl_mc = new lib.frongNorl_mc();
	this.frongNorl_mc.name = "frongNorl_mc";
	this.frongNorl_mc.parent = this;

	this.instance_1 = new lib.frogJump_mc("synched",4,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-14.3);
	this.instance_1._off = true;

	this.instance_2 = new lib.leg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.6,27.7,1,1,-19,0,0,-12.9,-4.2);

	this.instance_3 = new lib.hand("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-6.9,7.9,1,1,174.3,0,0,15.3,-8.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#261A0A").ss(0.6,1,1).p("AAngYQAAAGgEAIQgDAIgPATQgPAUgPgRQgQgRgFgKQgGgNADgBQADgBAVAHQATAIAQgMQAQgMABAHg");
	this.shape.setTransform(2.6,-5.9,1.043,1,0,180,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("AgNAUQgQgRgFgKQgGgNADgBQADgBAVAHQATAIAQgMQAQgMABAHQAAAGgEAIQgDAIgPATQgIALgJAAQgGAAgHgIg");
	this.shape_1.setTransform(2.6,-5.9,1.043,1,0,180,3);

	this.instance_4 = new lib.eye_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6.6,-29.7,1,1,-5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAFAD6").s().p("AgNCCIgGgCQgihRgSg6QgZhNgIhEQBfBDBxAyQACAjgEA/QgEBEABAeQhDgTgtgIg");
	this.shape_2.setTransform(-10.7,-10.6,0.1,0.1,-5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAFAD6").s().p("AlQZXQgkgGhQgIQhLgIgogHQlNg2kniQQiVhKjHiAQjkiWiujEQi2jPhqjuIhJiQQgohTgZhBQhcj3gZjjQgJhoAAg0QADj6BMi2QAuhuBKhXQBOhcBjg1QDEhsEnAtQApAHBRANQBIAMAxAPQCMAoCqBnIBpBMQBjBJB1BKQAaAOBeAtQBKAkAsAaQAbgOA4ghQA1ggAegPQCFhDCNgiQCQglCRABQCRgCCRAfQCPAgCGA+QBLhvBdhfQBChGBchIQA9gxBvhNQEXjQEJgOQBygHBuAnQBuAnBTBOQCjCWBFEtQAjDUgHCaIgCBgQgCA4gGAnQgLA9gSB6QgSBrgZBJQgrCdhuDFQhABwiGDdQiGDRi5CrQi4CrjcB2Qj+CNkpBZQlWBkkWAaQjBAWioAAQhLAAhGgFg");
	this.shape_3.setTransform(1.7,-9.9,0.1,0.1,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5F8E26").s().p("AgvBWQghgXgJglQgLgnAXgnQAXgnApgKQAVgGAcAHQAMADAkAPQAAA0AJBnIgiATQgUAKgQACIgNABQgdAAgcgTg");
	this.shape_4.setTransform(-24.3,-12,0.1,0.1,-5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F8E26").s().p("AgsjFQAkAVATAOQAnAvANAnQAZBHgcBKQgcBLhCAjIgnATQgDjkAging");
	this.shape_5.setTransform(-25.9,-15.6,0.1,0.1,-5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5F8E26").s().p("AgVAhQgOgPgHgFQAKgZAOgdQAJADAUADQASAFAHAMQANARgLAWQgMAWgWgBIgEAAQgKAAgLgJg");
	this.shape_6.setTransform(-25.3,-18,0.1,0.1,-5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F8E26").s().p("AABA2QgPAAgdgJQgIgcgCgPQgDgYAOgPQANgQAZgBIApAEQAOAdADAPQAEAZgQARQgOATgZAAIgCgBg");
	this.shape_7.setTransform(-24.2,-21,0.1,0.1,-5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5F8E26").s().p("AgBBhQgqABgdghQgegiAFgoQABgXAQgWQAKgQAWgVQAsgMA9APIAcAnQAOAYAAAWQADAoggAfQgdAdgkAAIgGAAg");
	this.shape_8.setTransform(-17.2,-24.3,0.1,0.1,-5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F8E26").s().p("AgWApQgYgMAAgdQgBgcAXgNQATgLAVAIQAXAJAFAVQAMAcgbAWQgPAMgOAAQgLAAgLgHg");
	this.shape_9.setTransform(12.4,-27.5,0.1,0.1,-5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F8E26").s().p("AgOC1QhUgCg7g0QgngegehCQBVhNBtg2QBmg0B2gcQAeA8AIAoQAFA/gYA5QgaA8gyAkQg7AthNAAIgJAAg");
	this.shape_10.setTransform(-21.7,-23.7,0.1,0.1,-5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F8E26").s().p("AgkA1QgbgPgHgbQgHgPAGgVIAMgkQBCAYBEAlIgXAiQgPAUgTAFQgKADgJAAQgSAAgRgJg");
	this.shape_11.setTransform(19.5,-28.9,0.1,0.1,-5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5F8E26").s().p("Ah5A+Qg9gggphUQBugeBxgEQBzgEBtAYIgSAAIggA6QgVAfgXARQgzAshHAGIgWACQg5AAgygcg");
	this.shape_12.setTransform(15.6,-28.8,0.1,0.1,-5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4h1IABgGQAvAIBBATQABB9gKBfQhKiUgehdg");
	this.shape_13.setTransform(-10.1,-8.1,0.1,0.1,-5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8CC63E").s().p("AJGYmQlehbkwizQjqiCiniKQg2gugagYQgtgpgbgjQgUgzgigmQgZgeghg3QgphEgPgVQgZgigig/QgphJgRgaQgYgogohPQgphTgWglQgbgwgdhKQgehTgRgpQgnhrgKihQgFi3gIhaQBDgjAchMQAchKgZhIQgNgngnguIAVg7QAIAFANAPQANALANgCQAXABALgWQALgXgNgRQgHgMgSgFQgVgDgJgDQAUgvAhg4IA9hjQAcAJARAAQAaABAOgTQARgRgEgaQgEgPgNgdQApgqAqgfQA7AzBUADQBUACA+gwQAygjAZg8QAYg6gEg/QBIgUBmgFQgWAVgLAPQgPAXgCAXQgEApAdAhQAeAiApgBQApADAgggQAggggEgpQABgVgOgYIgcgnQBOANATAFQAZAGBxAQQBUAMAyAYQAJARAKAeIARAvQAsBuA7BWQATAcAqAxQAsAzASAZQirhniMgoQgwgPhIgMQhQgNgpgHQkogtjDBsQhjA1hPBcQhJBXguBuQhMC2gED6QgkgPgLgDQgcgHgXAGQgoAKgYAnQgXAnAMAoQAJAlAhAXQAhAXAmgFQAQgCAUgKIAigTQAYDjBdD3QAYBBApBTIBICQQBqDuC3DPQCuDEDjCWQDHCACVBKQEmCQFOA2QAoAHBLAIQBQAIAjAGIgVAAQkMAAlLhSg");
	this.shape_14.setTransform(-13.6,-8.9,0.1,0.1,-5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8CC63E").s().p("A1oPzQhegtgagOQh2hKhihJQAiALBDAbQA8AXArAGQBkAUBsgVQBjgUBgg0QCxhdB8jWIBNBSQAtAvAoAbQBjBIB6AXQB8AXB0gkQBwggBghSQBahLBAhrQBTiHAiilQAgidgRikQgHijg0iUQg2idhih4QhHhXhZg7Qhfg+hpgVQitgXhzA3QguAVgzAlQgeAWg6AxQBUhuBzg+QB/hDCAAMQB9AGBjBBQB1BJBhBvQBkCAAtCYQA4CZACCdQgCBjgCAsQgEBPgKA9QgOBogCAhQCIhWB9giQApBVA9AgQA7AhBHgHQBHgGAzgsQAXgRAVggIAgg6IASAAQAWAFAdAJIAzAQIgNAkQgFAVAGAQQAIAbAbAPQAbAOAbgIQAUgFAOgUIAYgjQDABsB7DCQB5DCARDdQhFktijiWQhThOhugnQhugnhyAHQkJAOkXDQQhvBNg9AxQhcBIhCBGQhdBfhMBvQiFg+iOggQiRgfiSACQiQgBiRAlQiNAiiFBDQgeAPg2AgQg4AhgbAOQgrgahKgkgAG+C7QgXANABAdQAAAcAYAMQAaARAagWQAbgWgMgcQgEgWgXgIQgKgDgJAAQgMAAgLAGg");
	this.shape_15.setTransform(7.5,-29.4,0.1,0.1,-5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8CC63E").s().p("AqhF3QgSicAaiaQAbidBHiJQBBiABihjQBnhoB9g6QAkgTBAgTQBNgXAYgKQBwgGB6A7QBGAdBIA4QAzAoBIBGQAaAZAeAmIAzBFIAgAwQAQAdACAaIhLhlQgtg6gngjQhohfh4gzQiEg3iCAIQiIAKh9BMQh4BIhUB0QiUDCgoE2QgQDCAhCGQABAiAHA3IAJBYQhBh/gZi8g");
	this.shape_16.setTransform(-8.1,-32.8,0.1,0.1,-5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#70B11A").s().p("AAAFMIiMkRQhTiigdh4QgehugNiLQgIhfgEicIAngTQAIBaAFC3QAKChAnBrQARAqAeBTQAdBKAbAvQAWAlApBTQAoBQAXAnQARAaApBJQAiA/AZAiQAPAVApBEQAhA3AZAfQAiAlAUAzQijiaiRkBg");
	this.shape_17.setTransform(-22.8,-6.7,0.1,0.1,-5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#70B11A").s().p("Ai8D/QAeieBQiLQBOiPB4hpQAeBCAnAfQgqAegpArIgqgEQgZABgNAQQgOAPADAZQACAOAIAdIg8BiQggA4gUAuQgOAegKAZIgVA8QgUgOgkgWg");
	this.shape_18.setTransform(-24.8,-20.2,0.1,0.1,-5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#70B11A").s().p("AkbP7QgrgHg8gWQhDgbgigMIhqhLQgSgagrgzQgqgwgTgcQg7hWgshuIgRgwQgKgdgKgRQgxgZhVgMQhxgPgZgHQgTgEhPgOQg9gPgsAMQhmAFhIAUQgIgogeg8QCMgcCCAKQCQALB1A4QgwjcAVi4QAIhYAFgsQALhMAVg1IAwiGQAdhPAcgzQBDh8BZhlQB0htBqgvQCLg6BqASQgYAKhOAXQhAATgkATQh9A6hnBoQhiBjhBCAQhHCJgbCeQgaCaASCbQAZC8BBB/IgJhYQgHg3gBgiQAmCFAkBXQAxB1A/BWQA3BIAyAxQA9A8BBAlQAvAfBDAZQAjANBXAZQBhALBdgQQBhgRBQgvQBkg2BSheQBKhUA3hwQAsA9AgAkQAsAyAuAfQBtBPB8AcQBqAaBzgiQBrgfBahKQBthaBHiMQA5hlAYiGQAThrABiOQARCkghCeQghCkhTCIQhBBqhaBMQhhBRhwAhQhzAjh8gXQh6gWhjhJQgogagtgvIhNhTQh8DWixBeQhgA0hiATQg4ALg2AAQgyAAgwgJg");
	this.shape_19.setTransform(-4.9,-29.8,0.1,0.1,-5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FAFAD6").s().p("AgSDqQgcAAgigJQgjgJgfgSQgXgNgRgNIgHgHIgIgIQgQgPgPgaIgNgbQgJgQgDgMQgDgLgBgOIgBgZQAAgWADgRQADgPAIgOQAIgOAMgLQAIgIALgFQAKgFAMgDQAOgDANABQAOABAMAGQgFgWACgTIACgNIADgNIAFgNQACgIADgFQAHgMAJgKQALgLALgFQAOgGAKACQALAAANAFQAHADAHAGIAMALIAGAGIAEAHIADAFQACADAAACIgHgKIgIgJQgKgJgMgGQgOgFgNABQgNABgNAHQgMAHgIAMQgPATgEAfQgBAUADANIAHAWQAFAMAHAIIAKAMQAGAGAHAEQAEADAHACIAMAEQAKABAJgBQAKgCAIgFQAKgFAIgJQAGgJAGgLIAHAKIAJAIQALAIAMADQALACALgDQALgDAJgIQALgJAHgOQAGgKACgNQACgLAAgOQgBgQgFgPQgFgQgKgMQgHgIgJgGQgKgGgKgCQgRgDgMAGIgJAGIgJAHQAIgLAMgGQAMgHANABQANABAJAGQAMAHAKAMQAKAMAEAPQAGAQAAAPIAAAOIgCAPIgBANQANgIANgEQALgDALAAQAMgBAKADIAGABIAFACIANAGQATALAMATQANATABAWQAEAVgBAPIAAAJIgBAKIgDASIgEASQgFAQgKATIgUAiQgOAUgSASQgSARgWALQgaAOgdAJQgiAKgcADQgVACgRAAIgLAAg");
	this.shape_20.setTransform(-0.3,-17,1,1,-5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#261A0A").s().p("AheDlIgNgEIAAgBQgEgDgEAAIgCAAQgXgKgbgQQgagQgTgUQgVgWgMgZIgMgXQgGgNgDgLQgFgRgBgYQgBgRADgYQADgYAMgWQANgWAUgNQAPgJAQgDQARgEAQADIAJACQAFABADACQgEgOABgRQABgPAEgRQADgNAGgMQAHgNAJgJIAJgIIAKgHQAMgHASgCQAGgBAHACIANAEQAOAFANALQALAKAHAOQAIgNAKgIIAHgFIAIgEIAIgDIAJgBIAJABIAKABQAMAEALAKQAJAIAHAMQAIAMAFATQADANAAAPQAAAMgDARQALgIAPgDQANgEAPABQAPABAPAGQAPAGALALQALAKAHAMQAHAMAEAPIADAPIACAPQADAOgBARIgEAgQgGAagOAXIgHANIgIAMQgLAUgRASQgRASgUANQghAXgsANIgCAAIgGABIgBACQgsAMgrAAQgvAAgrgMgAi7hoQgMADgKAFQgLAGgIAIQgMAKgIAOQgIAOgDAQQgDARAAAVIABAZQABAOADALQADAMAJARIANAbQAPAZAQAQIAIAHIAHAHQARAOAXANQAfASAjAJQAiAIAcAAQAVABAcgDQAcgCAigKQAdgJAagOQAWgMASgRQASgRAOgVIAUghQAKgUAFgPIAEgSIADgTIABgJIAAgKQABgOgEgVQgBgWgNgTQgMgUgTgLIgNgGIgFgBIgGgCQgKgCgMAAQgLABgLADQgNADgNAJIABgOIACgOIAAgOQAAgQgGgPQgEgPgKgNQgKgLgMgHQgJgHgNAAQgNgCgMAHQgMAGgIALIAJgHIAJgGQAMgFARACQAKACAKAGQAJAGAHAJQAKAMAFAQQAFAOABARQAAAOgCAKQgCAOgGAKQgHAOgLAJQgJAHgLADQgLAEgLgDQgMgDgLgIIgJgIIgHgJQgGALgGAIQgIAKgKAFQgIAFgKABQgJACgKgBIgMgEQgHgCgEgEQgHgDgGgGIgKgMQgHgJgFgMIgHgVQgDgOABgTQAEgfAPgUQAIgLAMgHQANgIANgBQANgBAOAGQAMAFAKAJIAIAKIAHAKQAAgDgCgDIgDgFIgEgGIgGgHIgMgLQgHgFgHgDQgNgGgLABQgKgCgOAGQgLAEgLALQgJAKgHANQgDAFgCAIIgFANIgDANIgCANQgCASAFAWQgMgFgOgBIgIAAQgJAAgKABgAhGjZQgJADgHAGQgIAGgGAJQgGAIgEAKQgFAPgBARQgBARAEAQQADAPAIANQAIAOALAJQAIAHAKAEQAKADAKgBQAOAAANgJQAMgJAGgNIADgGIADgGQAHgSAAgUQAAgTgGgTQgIgZgPgNQgHgHgKgFQgJgEgLAAIgCAAQgIAAgHACgAAojUQgLAEgIAJQgIAIgGALIAEAGQAGAQACASQACARgDASIgCAGIgBAGIgCAGQALASAQAIQAIAEAKAAQAJAAAJgEQAKgEAIgJQAHgJAEgLQAHgPABgRQABgQgEgQQgEgNgGgLQgGgLgJgIQgJgJgMgDIgLgBQgHAAgGACg");
	this.shape_21.setTransform(-0.3,-17,1,1,-5);

	this.instance_5 = new lib.eye_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(3.9,-30.8,0.928,0.928,0.7);

	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.9,14.5,1,1,-30);

	this.instance_7 = new lib.leg("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(2.7,23.5,1,1,-36.2,0,0,-13,-5.5);

	this.instance_8 = new lib.hand2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(4.2,1.8,1,1,36.2,0,0,-13.8,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frongNorl_mc}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_4},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.frongNorl_mc}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.frongNorl_mc}]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.frongNorl_mc).to({_off:true},1).wait(40).to({_off:false},1).to({_off:true,y:-14.2,mode:"single",startPosition:4},1).wait(16).to({_off:false,y:0,mode:"independent"},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({y:-15.6,mode:"single"},0).to({y:-59},5).wait(3).to({y:-58},0).to({y:-15},5).to({_off:true,regX:-12.9,regY:-4.2,rotation:-19,x:0.6,y:27.7,mode:"synched",startPosition:0},1).wait(13).to({_off:false,regX:0,regY:0,rotation:0,x:0,y:-15,mode:"single",startPosition:4},0).to({y:-50},4).to({startPosition:4},1).wait(2).to({startPosition:4},0).to({y:-5.5},5).to({_off:true,y:0,mode:"independent"},1).to({_off:false,y:-14.2,mode:"single",startPosition:4},1).to({y:-58.3,mode:"synched",loop:false},7).wait(2).to({mode:"single",startPosition:6},0).to({y:-13},7).to({_off:true,y:0,mode:"independent"},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-67.7,91,114.5);


(lib._DD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* sub_btn.visible=false;
		sign_mc.visible=false;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.sub_btn = new lib.submit_mc();
	this.sub_btn.name = "sub_btn";
	this.sub_btn.parent = this;
	this.sub_btn.setTransform(93.1,69.8,1,1,0,0,0,48.5,16.7);

	this.targetArea_mc = new lib.targetArea_mc();
	this.targetArea_mc.name = "targetArea_mc";
	this.targetArea_mc.parent = this;
	this.targetArea_mc.setTransform(323.9,69.8,1,1,0,0,0,95,16.7);

	this.dragHolder_mc = new lib.dragHolder_mc();
	this.dragHolder_mc.name = "dragHolder_mc";
	this.dragHolder_mc.parent = this;
	this.dragHolder_mc.setTransform(76.9,135.5,1,1,0,0,0,53.5,16.7);

	this.sign_mc = new lib.sign_mc();
	this.sign_mc.name = "sign_mc";
	this.sign_mc.parent = this;
	this.sign_mc.setTransform(336.8,69.6,0.383,0.383,0,0,0,0.1,0.1);

	this.q_txt = new cjs.Text("New discoveries and inventions in science have made our lives more comfortable.", "bold 20px 'Calibri'", "#FFFF66");
	this.q_txt.name = "q_txt";
	this.q_txt.textAlign = "center";
	this.q_txt.lineHeight = 24;
	this.q_txt.lineWidth = 537;
	this.q_txt.parent = this;
	this.q_txt.setTransform(270.6,2);
	this.q_txt.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q_txt},{t:this.sign_mc},{t:this.dragHolder_mc},{t:this.targetArea_mc},{t:this.sub_btn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._DD, new cjs.Rectangle(-3,-3,551,155.2), null);


(lib.bushesGround = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4C7900","#449D00"],[0,1],-1.3,19,0.9,-11.4).s().p("ADxDnQg9hNhRhFQiChviGgtQibgzgvg7QgOgTgBgRIABgNIBPA4QBiA4BgAHQBpAGC7CEQBKA2A3AzQA3AzAHAXIAJAZg");
	this.shape.setTransform(789,152.6,0.661,0.863,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C831D").s().p("AhsExQgaiSgBhvQgDiuA7gtQBIg2BOguQAogWAZgLQgnAigpAwQhQBegEBBQgDAyAjB/QAYBVAmBqg");
	this.shape_1.setTransform(755.2,146.1,0.661,0.863,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#739B00").s().p("AA1DFQgZgGgxhAQg1hGgPg6QgOg2AohMIAqhCIAhA1QAmBEAZBNQAbBWgMA+QgJAxgXAAIgFgBg");
	this.shape_2.setTransform(814.7,152.9,0.661,0.863);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#739B00").s().p("AAPBwQhOg2gbgxQgXgngUhEIgPg9IBtAjQBxAuAYA4QAnBXAIAhQAOA2geAHIgKABQgiAAhGgwg");
	this.shape_3.setTransform(821.9,133.6,0.661,0.863);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#739B00").s().p("Ah+CyQgNgcACgtQADg9AihDQAfg/Bqg4IBlgrIgVBKQgbBWgfA+QgjBGhHAwQgtAfgUAAQgLAAgDgIg");
	this.shape_4.setTransform(802.1,147.3,0.661,0.863);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#739B00").s().p("ABkBgQhYgTg3gqQgyglg0g3IgqgvIB0AKQB8ATAzAmQA1AnAUAqQAPAggFAVQgCAIgWAAQgVAAgqgJg");
	this.shape_5.setTransform(825.8,120.1,0.661,0.863);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#739B00").s().p("Ai3CVQgOgvAuhPQAthOCXhHQBMgjBCgTIgkBBQgtBQguBHQgtBIhbAsQguAWglAHQgQgIgIgYg");
	this.shape_6.setTransform(799,129.9,0.661,0.863);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#739B00").s().p("Ai2B6QgqAAACgrQACgxBDg8QA9g3CjgXQBSgNBGgBIiZB6QgtAlhUAqQhXAsgjgBIgBAAg");
	this.shape_7.setTransform(803.2,112,0.661,0.863);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B6812").s().p("Ah9C7QgPg9gDhFQgKjIBeg8QBbg6BBAwQAhAYAPAkQABAMgJALQgKAMACgLQACgGgMgUQgPgZgUgPQg/gvhUBFQhRBCAKCuQAFBYAXBQIgBABQgGAAgMgxg");
	this.shape_8.setTransform(821,120.4,0.661,0.863);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6B6812").s().p("AoAF4QgBgUALgVQBdi0BUiLQCEjdBJg5QBrhUCAgjQCFgkBqAfQBaAaAwAVIAVAKIgMgFQglgQhagaQhqgfiFAkQiBAjhqBUQhXBEirErQhVCWhECIIgBgZg");
	this.shape_9.setTransform(858.7,124.2,0.661,0.863);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C6F00").s().p("AAkA/QgmgcgTgXQgOgOgigsIgfgpIBOAaQBQAfAQAdQAUAkAFAVQAFAXgMAIQgCABgEAAQgPAAgjgZg");
	this.shape_10.setTransform(885.1,97.9,0.661,0.863);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#477C00").s().p("AhFAkIg4gRQAagUAjgSQBDgkAmALQAxAOAQAKQAUALAAARQAAAQgrALIhHAMIgLABQgXAAgvgMg");
	this.shape_11.setTransform(887.7,89.4,0.661,0.863);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C6F00").s().p("AAuBLQgxgOgeghQgbgcgZgrIgTgmIBDAKQBHAPAYAYQAcAcANAhQALAfgJAOQgEAIgPAAQgNAAgXgHg");
	this.shape_12.setTransform(876.9,97.8,0.661,0.863);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#477C00").s().p("AhLACQAggzAjgJQApgLAiABQAjACADAPQADASgXAeQgZAegeAKQgbAJg4ANIgzAKQAEgaAZgpg");
	this.shape_13.setTransform(875.5,85,0.661,0.863);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C6F00").s().p("AgNBcQgagGgJgLQgOgRADgpQACglA3goIA0ggIAIAtQAGAygGAdQgIAhgVARQgPALgQAAIgLgBg");
	this.shape_14.setTransform(864.6,99.7,0.661,0.863);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C6F00").s().p("AhXAdQgggdAVgVQAQgRAtgKQAfgHA8AuQAeAVAYAYQgmAJgrAEQgTABgPAAQg6AAgWgVg");
	this.shape_15.setTransform(859.8,88.2,0.661,0.863);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#579B20").s().p("AhLgtQgDg9A7gjQA1ghAZAZQATATgBAzQgBAigKA4QgGAjg3A9QgaAegaAXQgZh1gDhYg");
	this.shape_16.setTransform(801.2,60.9,0.661,0.863);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#579B20").s().p("AA5B0Qhxgtgrg3QgpgygYg8IgRgyIBpAHQBzARAxAsQA0AwAbBQQAYBHgOARQgEAFgMAAQgcAAhMgdg");
	this.shape_17.setTransform(808.1,87.4,0.661,0.863);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#579B20").s().p("AhEC3QgqgtgChVQgChTBhhiQAdgfAlgcIAegWIAXA4QATBMgNBmQgOBmg+A0QgfAagcAFQgUgFgVgWg");
	this.shape_18.setTransform(787.2,94.1,0.661,0.863);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#579B20").s().p("Ag2BAQidhEgKhTQgHg6A1gkQAhgVBCAWQBFAXBGA6QA8AxA4B+QAcA/AQA1QgkgVjxhrg");
	this.shape_19.setTransform(780.1,58.6,0.661,0.863);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#579B20").s().p("Aj6BVQg8gUANgkQARgwBAgnQBQgxBuAFQBlAEB7AxQA9AYApAXQhBAZhRAbQiiA1hSAAQhoAAg4gSg");
	this.shape_20.setTransform(769.3,77.5,0.661,0.863);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#579B20").s().p("AiqDSQhYgCAZh0QAWhnDjhuQBIgiBTgfQApgPAcgJIhjCPQhuCYgyA2QgfAggqAUQgpAUgiAAIgDgBg");
	this.shape_21.setTransform(769.2,98.1,0.661,0.863);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#776D0C").s().p("AF7B0IgfhAQgZgyhOgoQhLgnhygaQhAgQhxAVQhXAQheAgQgiAMgeAOIgZANIAUgOQAdgTAjgOQBVgkBsgSQB1gTBGAOQBkASBUAsQA6AgAbAcQASATARAaQARAcgCAJQgCAFAAANQAAAMgDAFQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgDAAgDgIg");
	this.shape_22.setTransform(807.9,83.2,0.661,0.863);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6B6812").s().p("ApNLyQAGi3ATiuQAcj+A0jEQAsinBdifQBWiTBHgyQCbhsFCgvQBsgPBmgFQBWgEAHAEQACAChQAGQhxAKhaANQlDAwiXBpQhGAxhWCXQhdCigtCpQgyC+gcD2QgUCugGC0g");
	this.shape_23.setTransform(862.3,107.2,0.661,0.863);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#325D00").s().p("AA9BcQhHgGgqgUQgvgWgRg2QgQgyATgQQASgOAtgDQAxgEAaASQAbARAmBFQAjBCAAAVIgPABQgWAAgbgDg");
	this.shape_24.setTransform(854.4,41.6,0.661,0.863);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#325D00").s().p("AhEBlQgbgxAAgnQAAgcAehHIAdhBIBABPQBCBXACAsQADAwgnAYQgbASgrADIgCAAQgdAAgbgzg");
	this.shape_25.setTransform(864.3,64.3,0.661,0.863);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#325D00").s().p("ABgBGQhHgFgegQQgbgNhQgwIhLgvIB1gLQB7gFAoAdQAzAlAaAeQAcAggPALQgMAHgkAAIgngBg");
	this.shape_26.setTransform(893.7,50.4,0.661,0.863);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#325D00").s().p("AiaA/QAWghAYgeQBKhaAnAAQAzAAA2AQQA6ARAFAVQAFAUhBAlQg+Amg3AOQgtAMhAAEIg7ACQgCAAAUgcg");
	this.shape_27.setTransform(887.7,37.4,0.661,0.863);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#325D00").s().p("AghBDQgzgWg0hCIgqg/IBXgDQBegCAtATQA0AVAtAvQAsAugNAUQgPAVhCADIgUABQg8AAgwgWg");
	this.shape_28.setTransform(878.4,56.3,0.661,0.863);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#325D00").s().p("AhgAqQAVhhAfgbQAkgfAqgOQAogMAUALQAYANgJBAQgKBFg3AfQhRAuhJAoQAEgsAKgxg");
	this.shape_29.setTransform(871.6,37.3,0.661,0.863);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#325D00").s().p("AgcAGQgogNgvgNIgpgLIBZgPQBegMAoASQApASAdAmQAOAUAGAQQh6gZg/gVg");
	this.shape_30.setTransform(906.7,45.3,0.661,0.863);

	this.instance = new lib.grass("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(382.5,86.5,1,1,0,0,0,382.5,86.5);

	this.instance_1 = new lib.grass("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1131.4,86.5,1,1,0,0,180,382.5,86.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bushesGround, new cjs.Rectangle(0,0,1513.9,173), null);


(lib.bottomStripHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* btn_1.gotoAndStop(2);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.btn_3 = new lib.stripGram_btn();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(341.3,17.2,1,1,0,0,0,53,13);

	this.btn_2 = new lib.stripVocab_btn();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(224.8,17.2,1,1,0,0,0,57,13);

	this.btn_1 = new lib.stripComre_btn();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(85.2,17.2,1,1,0,0,0,76.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_1},{t:this.btn_2},{t:this.btn_3}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(81,0,0,0.851)").s().p("Eg+fACvIAAldMB8/AAAIAAFdg");
	this.shape.setTransform(400,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bottomStripHolder, new cjs.Rectangle(0,0,800,35), null);


(lib.mcqOpn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* sign_mc.visible=false;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.opn_txt = new cjs.Text("Option 1", "20px 'Arial'", "#663300");
	this.opn_txt.name = "opn_txt";
	this.opn_txt.textAlign = "center";
	this.opn_txt.lineHeight = 24;
	this.opn_txt.lineWidth = 173;
	this.opn_txt.parent = this;
	this.opn_txt.setTransform(95,4.7);

	this.opnBG = new lib.opnBG();
	this.opnBG.name = "opnBG";
	this.opnBG.parent = this;
	this.opnBG.setTransform(95,16.7,1,1,0,0,0,95,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.opnBG},{t:this.opn_txt}]}).wait(1));

	// Layer_2
	this.sign_mc = new lib.sign_mc();
	this.sign_mc.name = "sign_mc";
	this.sign_mc.parent = this;
	this.sign_mc.setTransform(175.4,15.9,0.383,0.383,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.sign_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcqOpn, new cjs.Rectangle(0,0,190,33.4), null);


(lib.opnHolder_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.opn_3 = new lib.mcqOpn();
	this.opn_3.name = "opn_3";
	this.opn_3.parent = this;
	this.opn_3.setTransform(95,99.1,1,1,0,0,0,95,16.7);

	this.opn_2 = new lib.mcqOpn();
	this.opn_2.name = "opn_2";
	this.opn_2.parent = this;
	this.opn_2.setTransform(95,57.9,1,1,0,0,0,95,16.7);

	this.opn_1 = new lib.mcqOpn();
	this.opn_1.name = "opn_1";
	this.opn_1.parent = this;
	this.opn_1.setTransform(95,16.7,1,1,0,0,0,95,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.opn_1},{t:this.opn_2},{t:this.opn_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.opnHolder_mc, new cjs.Rectangle(0,0,190,115.8), null);


(lib._MCQ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* opnHolder_mc.opn_1.visible=false;
		opnHolder_mc.opn_2.visible=false;
		opnHolder_mc.opn_3.visible=false;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.opnHolder_mc = new lib.opnHolder_mc();
	this.opnHolder_mc.name = "opnHolder_mc";
	this.opnHolder_mc.parent = this;
	this.opnHolder_mc.setTransform(263.9,124.3,1,1,0,0,0,95,58.3);

	this.q_txt = new cjs.Text("New discoveries and inventions in science have made our lives more comfortable.", "bold 20px 'Calibri'", "#FFFF66");
	this.q_txt.name = "q_txt";
	this.q_txt.textAlign = "center";
	this.q_txt.lineHeight = 24;
	this.q_txt.lineWidth = 537;
	this.q_txt.parent = this;
	this.q_txt.setTransform(270.6,2);
	this.q_txt.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q_txt},{t:this.opnHolder_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._MCQ, new cjs.Rectangle(-3,-3,551,184.8), null);


(lib.livesHolder_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.lifeFace_1 = new lib.lifeFace_mc();
	this.lifeFace_1.name = "lifeFace_1";
	this.lifeFace_1.parent = this;
	this.lifeFace_1.setTransform(114.9,20.3,1,1,0,0,0,17.9,15.8);

	this.lifeFace_2 = new lib.lifeFace_mc();
	this.lifeFace_2.name = "lifeFace_2";
	this.lifeFace_2.parent = this;
	this.lifeFace_2.setTransform(71.6,20.3,1,1,0,0,0,17.9,15.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFApQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAIgCgEIgBgGIABgHIACgDIAEgDIAFgBIAGABIADADIADADIABAHIgBAGIgDAEQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAIgGABIgFgBgAgFgPIgEgCIgCgFIgBgGIABgGIACgEIAEgCIAFgBIAGABIADACIADAEIABAGIgBAGIgDAFIgDACIgGABIgFgBg");
	this.shape.setTransform(47.2,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAsIgHgCIgFgCIgDgCIgCgDIAAgGIAAgEIAAgCIABgCIACAAIADABIAEADIAHACIAIABIAFAAIAEgCIACgDIABgEQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBIgDgDIgGgDIgHgCIgGgEIgGgDQgDgDgCgEQgBgEgBgGQAAgFACgFQADgFAEgDQAEgDAGgCQAGgCAHAAIAHAAIAFACIAGABIACACIABABIABACIAAACIAAAEIAAADIAAADIgBABIgBAAIgCgBIgFgCIgFgCIgIgBIgFABIgDACIgCADIgBADQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAIAEAEIAGACIAHADIAGADIAGAEQADADACAEQACAEAAAFQAAAHgCAFQgDAFgFADQgEAEgGACQgHABgGAAIgJAAg");
	this.shape_1.setTransform(41,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAqQgIgDgFgFQgFgGgDgIQgCgIAAgLQAAgKACgIQADgIAFgGQAGgGAHgDQAHgDAIAAQAKAAAHADQAHADAFAFQAEAFADAHQABAHAAAIIAAAEQAAADgBACQgCACgEAAIguAAIABAJIAEAHQACADAEABQAEACAGAAIAKgBIAIgCIAEgCIAEgBIACABIAAABIABACIAAAEIAAADIAAACIgBACIgBABIgDACIgGACIgJACIgMAAQgJAAgIgCgAgGgaIgEAEIgEAHQgBADAAAEIAgAAQABgJgFgFQgEgGgIAAQgEAAgDACg");
	this.shape_2.setTransform(32.8,21.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAArIgGAAIgFgBIgDgCIgBgCIgYhGIAAgDIgBgCIAAgBIABgCIABgBIAEAAIAFgBIAGABIADAAIADABIABACIAQA5IABACIABgCIARg5IABgCIABgBIAEAAIAFgBIAGABIACAAIACABIAAACIAAABIAAABIAAACIgBACIgXBGIgBACIgDACIgEABIgIAAg");
	this.shape_3.setTransform(24.1,21.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAA8IgEAAIgEgBIgCgBIAAgCIAAhMIAAgCIACgCIAEAAIAEgBIAFABIAEAAIABACIABACIAABMIgBACIgBABIgEABIgFAAgAgJgmQgDgCAAgHQAAgHADgCQADgDAGAAQAHAAADADQADACAAAHQAAAGgDADQgDACgHAAQgHAAgCgCg");
	this.shape_4.setTransform(17.6,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYA5QAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgCgCAAgEIAAhmIAAgCIACgBIAEgBIAFAAIAGAAIADABIACABIABACIAABaIAjAAIABABIABABIABADIAAAFIAAAEIgBADIgBACIgBAAg");
	this.shape_5.setTransform(12.2,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#277700").ss(2,1,1).p("ArsjKIUOAAQBUAAA7A7QA7A8AABTQAABUg7A7Qg7A8hUAAI0OAAg");
	this.shape_6.setTransform(75,20.3,1.002,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5D443").s().p("ArsDKIAAmUIUOAAQBUABA7A6QA7A8ABBTQgBBUg7A7Qg7A8hUgBg");
	this.shape_7.setTransform(75,20.3,1.002,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ArsDKIAAmUIUOAAQBUABA7A6QA7A8ABBTQgBBUg7A7Qg7A8hUgBg");
	this.shape_8.setTransform(76.1,22.4,1.002,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.lifeFace_2},{t:this.lifeFace_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.livesHolder_mc, new cjs.Rectangle(-1,-1,152.1,43.6), null);


(lib._lifeGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("Ag+CWIgIgCIAAgBQgDgCgCAAIgBAAQgQgGgSgLQgRgKgMgOQgOgOgIgRIgIgOQgEgJgCgHQgDgMgBgPQAAgMABgPQACgQAJgOQAIgOANgJQAKgGAKgCQAMgDAKACIAGABIAGADQgDgKAAgLQABgKADgLQACgJAEgHQAEgJAGgGIAGgFIAHgEQAIgFAMgCQAEAAAEABIAIADQAKADAIAHQAIAHAEAJQAFgJAHgFIAEgDIAFgDIAGgBIAGgBIAGAAIAGABQAIADAHAGQAGAGAFAIQAFAHADANQADAIgBAKQAAAIgCALQAIgFAJgCQAJgCAKAAQAKABAKAEQAJAEAIAHQAHAGAFAIQAEAIADAKIACAKIABAKQACAJgBALIgCAVQgEARgJAPIgFAIIgFAIQgIAOgLAMQgLALgNAJQgWAPgdAJIgBAAIgEAAIgBABQgcAIgdABQgfAAgcgJgAgrgfIACAAIgBAAIgDgBIACABgAA9gxIACgBIAAAAIgCABgAAChyIAAAAIgCgFIACAFgAAdiMIABAAIADAAIgEAAg");
	this.shape.setTransform(62.2,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Ag+CWIgIgCIAAgBQgDgCgCAAIgBAAQgQgGgSgLQgRgKgMgOQgOgOgIgRIgIgOQgEgJgCgHQgDgMgBgPQAAgMABgPQACgQAJgOQAIgOANgJQAKgGAKgCQAMgDAKACIAGABIAGADQgDgKAAgLQABgKADgLQACgJAEgHQAEgJAGgGIAGgFIAHgEQAIgFAMgCQAEAAAEABIAIADQAKADAIAHQAIAHAEAJQAFgJAHgFIAEgDIAFgDIAGgBIAGgBIAGAAIAGABQAIADAHAGQAGAGAFAIQAFAHADANQADAIgBAKQAAAIgCALQAIgFAJgCQAJgCAKAAQAKABAKAEQAJAEAIAHQAHAGAFAIQAEAIADAKIACAKIABAKQACAJgBALIgCAVQgEARgJAPIgFAIIgFAIQgIAOgLAMQgLALgNAJQgWAPgdAJIgBAAIgEAAIgBABQgcAIgdABQgfAAgcgJgAgrgfIACAAIgBAAIgDgBIACABgAA9gxIACgBIAAAAIgCABgAAChyIAAAAIgCgFIACAFgAAdiMIABAAIADAAIgEAAg");
	this.shape_1.setTransform(18,15.9);

	this.lifeFace_2 = new lib.lifeFace_mc();
	this.lifeFace_2.name = "lifeFace_2";
	this.lifeFace_2.parent = this;
	this.lifeFace_2.setTransform(62.2,15.8,1,1,0,0,0,17.9,15.8);

	this.lifeFace_1 = new lib.lifeFace_mc();
	this.lifeFace_1.name = "lifeFace_1";
	this.lifeFace_1.parent = this;
	this.lifeFace_1.setTransform(17.9,15.8,1,1,0,0,0,17.9,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lifeFace_1},{t:this.lifeFace_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._lifeGroup, new cjs.Rectangle(0,0,80.2,31.8), null);


(lib._TF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* opnHolder_mc.opn_3.visible=false;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.opnHolder_mc = new lib.opnHolder_mc();
	this.opnHolder_mc.name = "opnHolder_mc";
	this.opnHolder_mc.parent = this;
	this.opnHolder_mc.setTransform(263.9,124.3,1,1,0,0,0,95,58.3);

	this.q_txt = new cjs.Text("New discoveries and inventions in science have made our lives more comfortable.", "bold 20px 'Calibri'", "#FFFF66");
	this.q_txt.name = "q_txt";
	this.q_txt.textAlign = "center";
	this.q_txt.lineHeight = 24;
	this.q_txt.lineWidth = 537;
	this.q_txt.parent = this;
	this.q_txt.setTransform(270.6,2);
	this.q_txt.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q_txt},{t:this.opnHolder_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._TF, new cjs.Rectangle(-3,-3,551,184.8), null);


// stage content:
(lib.test_1_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//=============================================================================================================
		//--STAGE OBJS----
		//=============================================================================================================
						
						var marksAdderMC=this.mark_mc;
						marksAdderMC.visible=false;
						var charectorMC=this.Frog_mc;
						charectorMC.visible=false;
						var questionBoardMC=this.QuestionHolder_mc;
						var markMC=this.mark_mc;
						var scoreHolder=this.scorHolder_mc;
						var lifeHolder=this.livesHolder_mc;
						scoreHolder.visible=lifeHolder.visible=false;
						var grassMC=this.groundGrass;
						var treeMC=this.bgTree;
						questionBoardMC.ActTitle_txt.text="";
						//=============================================================================================================
						//--GLOBAL VARS----
						//=============================================================================================================
						var myStageW=800;
						var myStageH=480;
						var GroundHolder;
						var ACT_container;
						var lifePopUpContainer;
						var stageBlockerContainer;
						var actCompletePopUpMC;
						var InstPopUpContainer;
						var targContainer;
						var dragContainer;
						var storeUserDetailArr=new Array("", ["","","",""],["","","",""],["","","",""]);
						
						//----cookies---
						var cName;
						var pCOOKIES;
						var cStr;
						var NmeVal;
						var cookieStr;
						var cookieValue;
						
						//-----
						var opnSuffleBoo=GetOpnBooSuffle;
						var currentLevelNum=1;		
						
						var getScore=0;
						
						var totalLife=2;
						var lifeNum=totalLife;
						var getTotalQ_num=0;
						var minScore=5;
						var totalRightAns=0;
						var totalWrongAns=0;
						var totalLevel=2;
						var totalPercentage=0;
						var nextLevelBoo=false;
						
						
						var commonDrags=[];
						
						var dragLinesDevide=5;
						var questionSuffleOff=false;
						var getDragsArr=new Array();
						
						//----mcq and TF vars ---
						
						
						var opnNum=0;
						var nextLevelBoo=false;
						var TrueFalseBoo=new Boolean(false);
						var QshuffleBoo=new Boolean(true);
						
						var suffleQNum=0;
						var shuffleQ=[];
						
						var TF_str=["True","False"];
							
						var opnBTN_arr=[];
						var storeOpnW=[];
						var storeOpnH=[];
						var QTween=new Object();
						var OpnTween=new Object();
						//------
						
						var qNum=1;
						var actTmr;
						
						
						var levelNameArr=["","Comprehension","Vocabulary","Grammar"];
						
						
						//=============================================================================================================
						//--COOKIES SETUP----
						//=============================================================================================================
						function getCookie(w){
							cName = "";
							pCOOKIES = new Array();
							pCOOKIES = document.cookie.split('; ');
							for(bb = 0; bb < pCOOKIES.length; bb++){
								NmeVal  = new Array();
								NmeVal  = pCOOKIES[bb].split('=');
								if(NmeVal[0] == w){
									cName = unescape(NmeVal[1]);
								}
							}
							return cName;
						}
						
						function printCookies(w){
							cStr = "";
							pCOOKIES = new Array();
							pCOOKIES = document.cookie.split('; ');
							for(bb = 0; bb < pCOOKIES.length; bb++){
								NmeVal  = new Array();
								NmeVal  = pCOOKIES[bb].split('=');
								if(NmeVal[0]){
									cStr += NmeVal[0] + '=' + unescape(NmeVal[1]) + '; ';
								}
							}
							return cStr;
						}
						
						function setCookie(name, value, expires, path, domain, secure){
							cookieStr = name + "=" + escape(value) + "; ";
							
							if(expires){
								expires = setExpiration(expires);
								cookieStr += "expires=" + expires + "; ";
							}
							if(path){
								cookieStr += "path=" + path + "; ";
							}
							if(domain){
								cookieStr += "domain=" + domain + "; ";
							}
							if(secure){
								cookieStr += "secure; ";
							}
							
							document.cookie = cookieStr;
						}
						
						function setExpiration(cookieLife){
						    var today = new Date();
						    var expr = new Date(today.getTime() + cookieLife * 24 * 60 * 60 * 1000);
						    return  expr.toGMTString();
						}
						//=============================================================================================================
						//--LOCK LEVEL POP UP WINDOW----
						//=============================================================================================================
						function createLockLevelPopUp(){
							var levelChoose=new lib.levelChooseBoard();
							levelChoose.x=myStage/2-levelChoose.nominalBounds.width/2;
							levelChoose.y=myStage/2-levelChoose.nominalBounds.height/2;
							stage.addChild(levelChoose);
						}
						
						cookieValue = getCookie('Test1_hasVisited');
						if(cookieValue==1){
						createLockLevelPopUp()
						}
						
						// get the value of a cookie already set
						//cookieValue = getCookie('hasVisited');
						
						
						
						//=============================================================================================================
						//--GROUND CREATE----
						//=============================================================================================================
						
						function createGround(){
						
							//scorHolder_mc.score_txt.text="0/"+(getTotalQ*5);
							var xp=0; 
							var yp=0;
							getTotalQ_num=dataListArr[currentLevelNum].length-1;
							scoreHolder.score_txt.text="0/"+minScore*getTotalQ_num;
							var getTotalQ=getTotalQ_num+1;
							
							GroundHolder=new createjs.Container();
							
							for(var i=1; i<=getTotalQ; i++){
								var blockMC=new lib._block();
								blockMC.name="blockMC_"+i;
								blockMC.x=xp;
								blockMC.y=yp;
								if(i==1){
									blockMC.gotoAndStop(0);
									xp+=blockMC.nominalBounds.width+55;
								}else if(i==getTotalQ){
									blockMC.gotoAndStop(2);
									xp+=blockMC.nominalBounds.width+55;
								}else{
									blockMC.gotoAndStop(1);
									xp+=109+55;
								}		
								
								GroundHolder.addChild(blockMC);
								
							}
							GroundHolder.setBounds(0,0,xp,yp);
							/*livesHolder_mc.lifeFace_1.gotoAndStop(1);	
							livesHolder_mc.lifeFace_2.gotoAndStop(1);*/
							scoreHolder.visible=lifeHolder.visible=true;
							stage.addChild(GroundHolder);
							charectorMC.visible=true;
							GroundHolder.x=0;
							GroundHolder.y=480;	
							grassMC.x=-586;
							treeMC.x=-249;
							//groundPresent()
							
							
						}
						
						//===============================================================================
						//-----LEVEL LOADER----
						//===============================================================================
						
						function Add_ActHolder(getStr){		
							
							questionBoardMC.ActTitle_txt.text=levelNameArr[currentLevelNum];
							switch(getStr){
								case "MCQ":	
									QshuffleBoo=true;
									questionShuffle(QshuffleBoo);
									TrueFalseBoo=false;
									add_MCQ_Question(qNum);
									
								break;
								case "TRUE_FALSE":
									QshuffleBoo=true;
									questionShuffle(QshuffleBoo);
									TrueFalseBoo=true;
									add_MCQ_Question(qNum);
									/*ActivityHolder=new _TF();
									TF();*/
								break;
								case "DRAG_DROP":
									QshuffleBoo=true;
									questionShuffle(QshuffleBoo);
									Fill_Blank_Question(qNum);
								break;
							}
							createGround();
							
						}
						
						
						//===============================================================================
						//-----INSTRUCTION POP UP----
						//===============================================================================
						var instTween=new Object();
						function CreateInstBoard(){
							
							stageBlocker(true);
							var getW=0;
							var getH=0;
							InstPopUpContainer=new createjs.Container();
							var boardBG=new createjs.Shape();		
							
							var inst_text = new createjs.Text(instractionsArr[currentLevelNum], "bold 18px calibriFont_R", "#5E3417");
							inst_text.lineWidth=350;
							inst_text.textAlign="center";
							getW=inst_text.getBounds().width+50;
							getH=inst_text.getBounds().height+50;
							inst_text.x=getW/2;
							inst_text.y=20;
							
							
							var Start_shape=new createjs.Shape();	
							Start_shape.graphics.beginFill("#FF6600").drawRoundRect(0,0,150,40,12);
							Start_shape.setBounds(0,0,150,40);
							
							getH+=Start_shape.getBounds().height;
							boardBG.graphics.beginFill("#D7D76B").drawRoundRect(0,0,getW,getH,10);
							
							Start_shape.x=getW/2-Start_shape.getBounds().width/2;
							Start_shape.y=getH-(Start_shape.getBounds().height+20);
							Start_shape.addEventListener("click",START_ACT_SETUP.bind(this));
							
							var btn_text = new createjs.Text("START", "18px calibriFont_R", "#ffffff");	
							btn_text.x=getW/2-btn_text.getBounds().width/2;
							btn_text.y=Start_shape.y+(Start_shape.getBounds().height/2-btn_text.getBounds().height/2);
							
							InstPopUpContainer.addChild(boardBG,inst_text,Start_shape,btn_text);	
							stage.addChild(InstPopUpContainer);
							
							InstPopUpContainer.setBounds(0,0,getW, getH);
							//InstPopUpContainer.x=myStageW/2-InstPopUpContainer.getBounds().width/2;
							InstPopUpContainer.x=-1000;
							InstPopUpContainer.y=myStageH/2-InstPopUpContainer.getBounds().height/2;
							
							instTween = createjs.Tween.get(InstPopUpContainer).to({x: (myStageW/2-InstPopUpContainer.getBounds().width/2)}, 600);
						}
						CreateInstBoard();
						
						
						
						function START_ACT_SETUP(evnt){
							stageBlocker(false);
							Add_ActHolder(dataListArr[currentLevelNum][0]);
							stage.removeChild(InstPopUpContainer);
						}
						
						//===============================================================================
						//-----TWEEN CONTROLL----
						//===============================================================================
						var groundTween=new Object();
						var targTween=new Object();
						var treeTween=new Object();
						var grassTween=new Object();
						
						
						function characterJumControll(getJump){	
							charectorMC.gotoAndPlay(getJump);
							if(getJump=="rightJump"){
								groundTween = createjs.Tween.get(GroundHolder, {loop: false}).to({x: (GroundHolder.x-165)}, 900, createjs.Ease.RegularInOut);//.call(handleComplete);
								treeTween = createjs.Tween.get(treeMC, {loop: false}).to({x: (treeMC.x+(165/25))}, 900, createjs.Ease.RegularInOut);//.call(handleComplete);
								grassTween = createjs.Tween.get(grassMC, {loop: false}).to({x: (grassMC.x+(165/12))}, 900, createjs.Ease.RegularInOut).wait(400).call(handleComplete);
								function handleComplete(event){	
									addScore();
								}
							}else{		
								lifeUpdate(false);
							}
							
							if((dataListArr[currentLevelNum][0]=="MCQ")|| dataListArr[currentLevelNum][0]=="TRUE_FALSE"){//MCQ and True false
								if(lifeNum==0){		
									actTmr = setInterval(creatLifePopUpBoard, 2800 );
								}else{
									actTmr = setInterval(changeQuestion, 1000 );
								}
							}else{//Fil and Blank
								if(lifeNum==0){		
									actTmr = setInterval(creatLifePopUpBoard, 2800 );
								}else{
									actTmr = setInterval(fillBlank_changeQuestion, 1000 );
								}
							}
						}
						
						
						
						
						//===============================================================================
						//-----ADD SCORRE BY TWEEN----
						//===============================================================================
						var scoreTween=new Object();
						
						function addScore(){	
							markMC.visible=true;
							markMC.y=350;
							markMC.alpha=1;	
							getScore+=minScore;
							scoreTween = createjs.Tween.get(markMC).to({y: 240}, 900).to({alpha:0,y: 200}, 500).call(handleComplete);
							function handleComplete(event) {			
								scoreHolder.score_txt.text=getScore+"/"+minScore*getTotalQ_num;
							}
								
						}
						
						//===============================================================================
						//-----LIFE UPDATE----
						//===============================================================================
						function lifeUpdate(getBoo){
							if(getBoo){
								lifeNum=totalLife;
								for(var i=1; i<=totalLife; i++){
									lifeHolder.getChildByName("lifeFace_"+i).gotoAndStop(0);	
								}
							}else{
								
								lifeHolder.getChildByName("lifeFace_"+lifeNum).blast_mc.play();	
								lifeNum--;
								
							}
							
						}
						
						
						
						//===============================================================================
						//-----LIFE POPU BOX----
						//===============================================================================
						function creatLifePopUpBoard(){
							clearInterval(actTmr);	
							stageBlocker(true);
							lifePopUpContainer=new createjs.Container();
							var boardBG=new createjs.Shape();	
							boardBG.graphics.beginFill("#D7D76B").drawRoundRect(0,0,400,260,10);
							var title_text = new createjs.Text(levelNameArr[currentLevelNum], "bold 18px calibriFont_R", "#5E3417");	
							title_text.x=200-title_text.getBounds().width/2;
							title_text.y=10;
							
							var lifeFace=new lib._lifeGroup();
							lifeFace.x=200-lifeFace.nominalBounds.width/2;
							lifeFace.y=title_text.y+title_text.getBounds().height+20;	
							
							var score_text = new createjs.Text("Total score: "+getScore+"/"+minScore*getTotalQ_num, "bold 18px calibriFont_R", "#663399");	
							score_text.x=200-score_text.getBounds().width/2;
							score_text.y=lifeFace.y+lifeFace.nominalBounds.height+10;
							
							var msg_text = new createjs.Text("Oops! You have no lives points left.", "bold 18px calibriFont_R", "#990000");	
							msg_text.x=200-msg_text.getBounds().width/2;
							msg_text.y=score_text.y+score_text.getBounds().height+20;
							
							var playAgain_shape=new createjs.Shape();	
							playAgain_shape.graphics.beginFill("#FF6600").drawRoundRect(0,0,150,40,12);
							playAgain_shape.setBounds(0,0,150,40);
							playAgain_shape.x=200-playAgain_shape.getBounds().width/2;
							playAgain_shape.y=260-(playAgain_shape.getBounds().height+20);
							playAgain_shape.addEventListener("click",LIFE_PLAYAGAIN_SETUP.bind(this));
							
							var btn_text = new createjs.Text("Play Again", "18px calibriFont_R", "#ffffff");	
							btn_text.x=200-btn_text.getBounds().width/2;
							btn_text.y=playAgain_shape.y+(playAgain_shape.getBounds().height/2-btn_text.getBounds().height/2);
							
							lifePopUpContainer.addChild(boardBG,title_text,lifeFace,score_text,msg_text,playAgain_shape,btn_text);
							
							lifePopUpContainer.setBounds(0,0,400,260);
							lifePopUpContainer.x=myStageW/2-lifePopUpContainer.getBounds().width/2;
							lifePopUpContainer.y=myStageH/2-lifePopUpContainer.getBounds().height/2;
							stage.addChild(lifePopUpContainer);
						}
						
						
						
						//===============================================================================
						//-----ACT COMPLETE POP UP----
						//===============================================================================
						
						
						function actCompletePopUp(){
							clearInterval(actTmr);
							stageBlocker(true);
							actCompletePopUpMC=new lib._PopUpBox();	
							actCompletePopUpMC.x=myStageW/2-actCompletePopUpMC.nominalBounds.width/2;
							actCompletePopUpMC.y=myStageH/2-actCompletePopUpMC.nominalBounds.height/2;	
							stage.addChild(actCompletePopUpMC);
							
							createjs.Ticker.addEventListener("tick", updateEnterFrame);	
							function updateEnterFrame(event) {
								actCompletePopUpMC.playNext_mc.gotoAndStop(1);
								actCompletePopUpMC.playNext_mc.play_txt.text="Next Level";
								actCompletePopUpMC.playNext_mc.alpha=actCompletePopUpMC.playA_mc.alpha=0.5;
								createjs.Ticker.removeEventListener("tick", updateEnterFrame);
							}	
							
							actCompletePopUpMC.title_txt.text=levelNameArr[currentLevelNum];
							actCompletePopUpMC.userScroreDetail_txt.text=""+
													"Score\t\t\t"+getScore+"/"+(minScore*getTotalQ_num)+"\n"+
													"Lives\t\t\t"+lifeNum+"\n"+
													"Correct\t\t"+totalRightAns+"/"+getTotalQ_num+"\n"+
													"Incorrect\t\t"+totalWrongAns+"/"+getTotalQ_num;
							actCompletePopUpMC.userScroreDetail_txt.visible=false;
							
							updateScorePercentage();
						}
						
						
						
						//===============================================================================
						//-----SCORE PERCENTAGE UPDATE----
						//===============================================================================
						
						function updateScorePercentage(){	
							
							totalPercentage=(getScore/(minScore*getTotalQ_num))*100;	
							var countNum=0;	
							createjs.Ticker.framerate = 150;
							createjs.Ticker.addEventListener("tick", onEnterFrame);
							
							function onEnterFrame(event) {		
								countNum+=3;
								if(countNum>=totalPercentage){
									countNum=totalPercentage;
									actCompletePopUpMC.playNext_mc.alpha=actCompletePopUpMC.playA_mc.alpha=1;
									if(currentLevelNum<=2){
										actCompletePopUpMC.playA_mc.addEventListener("click",PLAY_AGAIN.bind(this));
										actCompletePopUpMC.playNext_mc.play_txt.text="Next Level";
									}else{
										actCompletePopUpMC.playNext_mc.play_txt.text="Re-Start";
										actTmr = setInterval(popUpChangeTween, 2500 );
									}
									actCompletePopUpMC.playNext_mc.addEventListener("click",PLAY_NEXT.bind(this));
									starsUpdate();
									//actTmr = setInterval(popUpChangeTween, 2500 );
									createjs.Ticker.removeEventListener("tick", onEnterFrame);
								}
								storeUserDetailArr[currentLevelNum][0]=countNum+"%";//score level
								storeUserDetailArr[currentLevelNum][1]=getScore+"/"+(minScore*getTotalQ_num);//total score
								storeUserDetailArr[currentLevelNum][2]=totalRightAns+"/"+getTotalQ_num;//right ans
								storeUserDetailArr[currentLevelNum][3]=lifeNum+"/2";//lifes
								actCompletePopUpMC.percientage_txt.text="Score level: "+parseInt(countNum)+"%";
							}
							
								
						}
						
						//===============================================================================
						//-----USER ALL LEVEL SCORE DETIAL BOARD ----
						//===============================================================================
						function popUpChangeTween(){
							clearInterval(actTmr);
							starTween = createjs.Tween.get(actCompletePopUpMC).to({x: myStageW+10}, 250, createjs.Ease.RegularInOut).wait(200).call(handleComplete);
							function handleComplete(evnt){
								actCompletePopUpMC.gotoAndStop(1);
								starTween = createjs.Tween.get(actCompletePopUpMC).to({x: (myStageW/2-555/2)}, 250, createjs.Ease.BackInOut)
								
								allLevelDetailPopUp();
							}
							
						}
						
						function allLevelDetailPopUp(){
							//clearInterval(actTmr);
							
							
							createjs.Ticker.addEventListener("tick", onEnterFrame);
							
							function onEnterFrame(event) {
								actCompletePopUpMC.playA_mc.addEventListener("click",PLAY_AGAIN.bind(this));
								for(var i=1; i<storeUserDetailArr.length; i++){
									for(var a=0; a<storeUserDetailArr[i].length; a++){						
										actCompletePopUpMC.getChildByName("userScoreDetailHolder_"+i).getChildByName("userDetail_"+(a+1)).text=storeUserDetailArr[i][a];
									}				
								}
								createjs.Ticker.removeEventListener("tick", onEnterFrame);
							}
						}
						
						//===============================================================================
						//-----STARS UPDATE IN POP UP ----
						//===============================================================================
						
						var starTween=new Object();
						var countStar=0;
						function starsUpdate(){
							countStar=0;
							var getNum=0;
							
							if((totalPercentage>=50)&& totalPercentage<=55){
								getNum=1;
								actCompletePopUpMC.msg_txt.text="Try again";
						
							}else if((totalPercentage>=56)&& totalPercentage<=85){
								getNum=2;
								actCompletePopUpMC.msg_txt.text="Good";
						
							}else if((totalPercentage>=86)&& totalPercentage<=100){
								getNum=3;
								if(totalPercentage==100){
									actCompletePopUpMC.msg_txt.text="Congratulations! You have achieved a full score.";
								}else{
									actCompletePopUpMC.msg_txt.text="Excellent";
								}
						
							}
							
							starTweenControll(getNum);
							function starTweenControll(getStarNum){
								countStar++;
								if(countStar<=getStarNum){
									//scoreTween = createjs.Tween.get(markMC).to({y: 240}, 900).to({alpha:0,y: 200}, 500).call(handleComplete);
									actCompletePopUpMC.getChildByName("star_"+countStar).gotoAndStop(1);
									actCompletePopUpMC.getChildByName("star_"+countStar).scaleX=0.1;
									actCompletePopUpMC.getChildByName("star_"+countStar).scaleY=0.1;
									starTween = createjs.Tween.get(actCompletePopUpMC.getChildByName("star_"+countStar)).to({scaleX: 1}, 150, createjs.Ease.BounceInOut);
									starTween = createjs.Tween.get(actCompletePopUpMC.getChildByName("star_"+countStar)).to({scaleY: 1}, 150, createjs.Ease.BounceInOut).call(motionStopped);		
									
									function motionStopped(evnt){
										starTweenControll(getStarNum);
										//starTween.removeEventListener(TweenEvent.MOTION_STOP, motionStopped);
									}
								}else{
									actCompletePopUpMC.userScroreDetail_txt.visible=true;
								}
							}
								
						
						}
						
						
						
						
						
						//=======================================================================================================
						//----------STAGE BLOCKER
						//=======================================================================================================
						
						function stageBlocker(getBoo=true, getContainerName="blocker", getAlpha=0.8, getMsg="", getColor="#000000"){
							if(getBoo){
								var getW=myStageW;
								var getH=myStageH;
								
								stageBlockerContainer = new createjs.Container();
								stageBlockerContainer.name=getContainerName;
								var stageBlockerShape = new createjs.Shape(new createjs.Graphics().beginFill("#000000").drawRect(0,0,getW,getH));
								stageBlockerShape.alpha=getAlpha;
								//stageBlockerContainer.addEventListener("click", STAGE_BLOCKER.bind(this));
								
								stageBlockerContainer.addChild(stageBlockerShape);
								
								if(getMsg.length>=2){//if text available
									var msgText = new createjs.Text(getMsg, "20px calibriFont_R", "#ffffff");		
									msgText.x= myStageW/2-msgText.getBounds().width/2;
									msgText.y= myStageH/2-msgText.getBounds().height/2;		
									stageBlockerContainer.addChild(msgText);	
								}		
								stage.addChild(stageBlockerContainer);		
								
							}else{
								//stage.getChildByName(getContainerName).removeEventListener("click", STAGE_BLOCKER.bind(this));
								stage.removeChild(stage.getChildByName(getContainerName));	
								
						
							}	
						}
						
						
						
						
						
						
						
						
						
						
						/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
						//===============================================================================
						//-----MCQ ACT and TRUE AND FALSE----
						//===============================================================================
						/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
						
						
						//===============================================================================
						//-----CREATE QUESTION----
						//===============================================================================
							
						
							
							var opnBTN_arr=[];
							var storeOpnW=[];
							var storeOpnH=[];
							var QTween=new Object();
							var OpnTween=new Object();
							
							var opnNum=0;
							
							//var qNum=1;
							
							//===============================================================================
								//-----SHUFFLE QUESTION----
							//===============================================================================
								
								function questionShuffle(getBoo){
									var myArray=[];
									for(var i=1; i<dataListArr[currentLevelNum].length; i++){
										myArray.push(i);
									}
									
									if(getBoo){
										function shuffle(a) {
											for (let i = a.length - 1; i > 0; i--) {
												const j = Math.floor(Math.random() * (i + 1));
												[a[i], a[j]] = [a[j], a[i]];
											}
											return a;
										}	 
										shuffleQ=shuffle(myArray);	
									}else{
										shuffleQ=myArray;	
									}
										
								}
								
								
								
							//===============================================================================
								//-----OPTION SHUFFLE----
							//===============================================================================
							var opnShuffle=[];
							function opntionShuffle(getBoo){
								var myArray=[];
								
								for(var i=1; i<=opnNum; i++){
									myArray.push(i);
								}
								
								if(getBoo){
									function shuffle(a) {
										for (let i = a.length - 1; i > 0; i--) {
											const j = Math.floor(Math.random() * (i + 1));
											[a[i], a[j]] = [a[j], a[i]];
										}
										return a;
									}	 
									opnShuffle=shuffle(myArray);
								}else{
									opnShuffle=myArray;
								}
								
							}
						//================================================================================	
						
							function add_MCQ_Question(qNum){		
								charectorMC.visible=true;
								var boardW=590;
								var boardH=220;
								
								var getW=0;
								var getH=35;
								var getSrc;	
								var getStr;
								var bitmap;
								var fontSize=18;
								var imgBoo=false;
								storeOpnW=[];
								storeOpnH=[];
								suffleQNum=shuffleQ[qNum-1];
								var getNum=suffleQNum;
								
								if(!TrueFalseBoo){
									opnNum=dataListArr[currentLevelNum][getNum].length-1;
									
								}else{
									opnNum=TF_str.length;
									opnSuffleBoo=false;
								}
								opntionShuffle(opnSuffleBoo);
								console.log(opnShuffle);
								
								ACT_container=new createjs.Container();	
								ACT_container.name="ACT_holder";
								var qHolder=new createjs.Container();
								qHolder.name="Q_holder";
								var shap_drag=new createjs.Shape();	
								var q_text;
								
								if(dataListArr[currentLevelNum][getNum][0].indexOf("||ImgSrc")>=0){
									getSrc=(dataListArr[currentLevelNum][getNum][0].split("||ImgSrc=")[1]).split("width=")[0];
									bitmap = new createjs.Bitmap(getSrc);
									getW=parseInt(((dataListArr[currentLevelNum][getNum][0].split("||ImgSrc=")[1]).split("width=")[1]).split("height=")[0])+30;
									getH=parseInt(((dataListArr[currentLevelNum][getNum][0].split("||ImgSrc=")[1]).split(" width=")[1]).split(" height=")[1])+10;		
									
									getStr=dataListArr[currentLevelNum][getNum][0].split("||ImgSrc=")[0];
									imgBoo=true;
								}else{
									imgBoo=false;
									getStr=dataListArr[currentLevelNum][getNum][0]
								}
								//alert(imgBoo);
								q_text = new createjs.Text(getStr, fontSize+"px calibriFont_R", "#4D2600");	
								if(!imgBoo){	
									getW=q_text.getBounds().width+15;
									
									if(getW>=500){
										q_text.lineWidth=485;
										fontSize=17;
										q_text.font=fontSize+"px calibriFont_R", "#4D2600";
									}
								}	
								
								getW=q_text.getBounds().width+20;
								getH=q_text.getBounds().height+10;
								
								q_text.x=getW/2-q_text.getBounds().width/2;
								q_text.y=getH/2-q_text.getBounds().height/2;
								
								shap_drag.graphics.beginFill("#E0E086").drawRoundRect(0,0,getW,getH,8);
								
								qHolder.addChild(shap_drag,q_text);	
								ACT_container.addChild(qHolder);
								
								qHolder.setBounds(0,0,getW,getH);
								qHolder.x=boardW/2-qHolder.getBounds().width/2;
								ACT_container.y=242;
						
								var mask_shape=new createjs.Shape();	
								mask_shape.graphics.beginFill("#E0B32F").drawRoundRect(2.5,223.80,589.2,boardH,1);	
								mask_shape.alpha=0;
								ACT_container.mask=mask_shape;	
								
								questionBoardMC.addChild(mask_shape,ACT_container);
								
								if(!TrueFalseBoo){	
									for(var i=1; i<=opnNum; i++){			
										var fakeOpn=new createjs.Text(dataListArr[currentLevelNum][getNum][i], "18px calibriFont_R", "#000000");				
										
										if(fakeOpn.getBounds().width>500){			
											//fakeOpn.font="18px calibriFont_R";
											fakeOpn.lineWidth=499;			
										}
										stage.addChild(fakeOpn);
										storeOpnW.push(fakeOpn.getBounds().width);
										storeOpnH.push(fakeOpn.getBounds().height);
										stage.removeChild(fakeOpn);
									}	
								}
								
								
								createOptions(qHolder.getBounds().height);
							}
						
						
						
						
							//===============================================================================
							//-----CREATE OPTIONS----
							//===============================================================================
						
							function createOptions(getY){
								
								var boardW=590;
								var boardH=220;
								var getW=0;
								var getH=0;
								var xp=0;
								var yp=0;
								opnBTN_arr=[];
								storeOpnW=storeOpnW.sort((a, b) => a - b);
								storeOpnH=storeOpnH.sort((a, b) => a - b);
								
								var getNum=suffleQNum;
						
								//opnNum=dataListArr[1].length-1
								
								var optionHolder=new createjs.Container();
								optionHolder.name="opnHolder";
								for(var i=1; i<=opnNum; i++){
									var opnBox=new createjs.Container();
									opnBox.name="opn_"+opnShuffle[i-1];
									if(!TrueFalseBoo){
										q_text = new createjs.Text(dataListArr[currentLevelNum][getNum][opnShuffle[i-1]], "18px calibriFont_R", "#4D2600");
									}else{
										q_text = new createjs.Text(TF_str[i-1], "18px calibriFont_R", "#4D2600");
									}
									q_text.name="opn_txt";
									if(q_text.getBounds().width>=500){
										q_text.lineWidth=499;
									}
									if(!TrueFalseBoo){
										getW=storeOpnW[storeOpnW.length-1]+20;
										getH=storeOpnH[storeOpnH.length-1]+10;
									}else{
										getW=65;
										getH=q_text.getBounds().width+10;
									}
									
									var shap_drag=new createjs.Shape();
									q_text.x=getW/2-q_text.getBounds().width/2;
									q_text.y=getH/2-q_text.getBounds().height/2;
									shap_drag.graphics.beginFill("#E0B32F").drawRoundRect(0,0,getW,getH,8);
									
									opnBox.x=xp;
									opnBox.y=yp;
									yp+=getH+3;
									var signMC=new lib.sign_mc();
									signMC.x=getW+10
									signMC.y=getH/2;
									signMC.visible=false;
									signMC.name="sign_mc";
									
									opnBox.addChild(shap_drag,q_text,signMC);
									opnBox.addEventListener("click", OPN_SETUP.bind(this));
									optionHolder.addChild(opnBox);
									opnBTN_arr.push(opnBox);
											
								}
								optionHolder.setBounds(0,0,getW,getH);
								//optionHolder.x=boardW/2-getW/2;
						
								var myQHolder=ACT_container.getChildByName("Q_holder");
								
								optionHolder.y=myQHolder.getBounds().height+myQHolder.getBounds().y+10;
								ACT_container.addChild(optionHolder);
								
								var myOPNHolder=ACT_container.getChildByName("opnHolder");
								myQHolder.x=-myQHolder.getBounds().width;
								myOPNHolder.x=boardW;
								Tween = createjs.Tween.get(myQHolder).to({x: (boardW/2-myQHolder.getBounds().width/2)}, 600, createjs.Ease.RegularInOut);//.wait(400).call(handleComplete);
								OpnTween = createjs.Tween.get(myOPNHolder).to({x: (boardW/2-optionHolder.getBounds().width/2)}, 600, createjs.Ease.RegularInOut).call(handleComplete);
								
							}
						
							//===============================================================================
							//-----OPN BTN SETUP----
							//===============================================================================
							var getUsrAns="";
							function OPN_SETUP(evnt){		
								evnt.currentTarget.mouseEnabled=false;
								opnEnabled(false);		
								if(TrueFalseBoo==false){
									getUsrAns=dataListArr[currentLevelNum][suffleQNum][opnNum];
								}else{
									getUsrAns=dataListArr[currentLevelNum][suffleQNum][1];
								}
								
								evnt.currentTarget.getChildByName("sign_mc").visible=true;
								
								if(evnt.currentTarget.getChildByName("opn_txt").text==getUsrAns){
									//alert(true);
									characterJumControll("rightJump");		
									evnt.currentTarget.getChildByName("sign_mc").gotoAndStop(1);	
									totalRightAns++;
									
								}else{
									//alert(false);	
									totalWrongAns++;
									evnt.currentTarget.getChildByName("sign_mc").gotoAndStop(2);
									characterJumControll("wrongJump");		
								}
								
								
								
								
							}
						
							//===============================================================================
							//-----OPN BTN ENABLED CONTROLL----
							//===============================================================================
						
							function opnEnabled(getBoo){
								for(var i=1; i<=opnNum; i++){
									opnBTN_arr[i-1].mouseEnabled=getBoo;
								}
							}
						
						
							function NextQupdate(){	
								if(getTotalQ_num==qNum){
									//actCompletePopUp();
									actTmr = setInterval(actCompletePopUp, 1500 );
								}else{
									var myQHolder=ACT_container.getChildByName("Q_holder");
									var myOPNHolder=ACT_container.getChildByName("opnHolder");
									Tween = createjs.Tween.get(myQHolder).to({x: (-myQHolder.getBounds().width+20)}, 600, createjs.Ease.RegularInOut);//.wait(400).call(handleComplete);
									OpnTween = createjs.Tween.get(myOPNHolder).to({x: (700)}, 600, createjs.Ease.RegularInOut).call(handleComplete);
									function handleComplete(event) {
										
										questionBoardMC.removeChild(ACT_container);
										if(!nextLevelBoo){
											actTmr = setInterval(updateQuestion, 1000 );
											stageBlocker(false,"blocker_mc",0.9,"Please wait...","#000000");
										}
										
									}
								}
							}
						
						
							function changeQuestion(){
								clearInterval(actTmr);
								NextQupdate();
							}
						
							function updateQuestion(){
								clearInterval(actTmr);	
								qNum++;
								add_MCQ_Question(qNum);
								
							}
						
							//===============================================================================
							//-----RESET ACT----
							//===============================================================================
						
							function resetAct(){
								qNum=0;
								getScore=0;		
								scoreHolder.score_txt.text=getScore+"/"+minScore*getTotalQ_num;
								lifeUpdate(true);
								if((dataListArr[currentLevelNum][0]=="MCQ")|| dataListArr[currentLevelNum][0]=="TRUE_FALSE"){
									NextQupdate();
								}else{
									fillBlank_NextQupdate();
								}		
								
							}
						
							//===============================================================================
							//-----LIFE PLAY AGAIN SETUP----
							//===============================================================================
						
							function LIFE_PLAYAGAIN_SETUP(evnt){
								
								stageBlocker(false);
								stage.removeChild(GroundHolder);	
								charectorMC.visible=false;
								createGround();
								stageBlocker(true,"blocker_mc",0.9,"Please wait...","#000000");
								resetAct();
								totalRightAns=0;
								totalWrongAns=0;
								stage.removeChild(lifePopUpContainer);
								
							}
						
						
							//===============================================================================
							//-----POP UP PLAY AGAIN SETUP----
							//===============================================================================
							//---PLAY AGAIN-----
							function PLAY_AGAIN(evnt){
								
								stageBlocker(false);
								
								stage.removeChild(GroundHolder);		
								charectorMC.visible=false;
								createGround();
								totalRightAns=0;
								totalWrongAns=0;
								stageBlocker(true,"blocker_mc",0.9,"Please wait...","#000000");
								resetAct();		
								stage.removeChild(actCompletePopUpMC);
							}
						
						
						//---PLAY NEXT-----
							function PLAY_NEXT(evnt){
								setCookie('Test1_hasVisited', currentLevelNum,150,'/testgame1');
							
								nextLevelBoo=true;		
								resetAct();
								totalRightAns=0;
								totalWrongAns=0;
								if(currentLevelNum<=2){
									currentLevelNum++;			
									qNum=1;				
								}else{
									currentLevelNum=1;			
								}
								
								stageBlocker(false);
								stage.removeChild(actCompletePopUpMC);
								stageBlocker(true,"blocker_mc",0.9,"Please wait...","#000000");
								actTmr = setInterval(NextLevelUpdate, 3000 );
								
									
							}
						
						//function stageBlocker(getBoo=true, getContainerName="blocker", getAlpha=0.8, getMsg="", getColor="#000000"){
							function NextLevelUpdate(){
								scoreHolder.visible=lifeHolder.visible=false;
								clearInterval(actTmr);
								//stageBlocker(false);
								qNum=1;
								nextLevelBoo=false;
								stage.removeChild(GroundHolder);
								//createGround();
								charectorMC.visible=false;
								stageBlocker(false,"blocker_mc",0.9,"Please wait...","#000000");
								questionBoardMC.ActTitle_txt.text=levelNameArr[currentLevelNum];
								CreateInstBoard();
								
								
							}
						
						
						
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
						/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
						//===============================================================================
						//-----FILL AND BLANK----
						//===============================================================================
						/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
						
						
						
						function Fill_Blank_Question(qNum){		
								charectorMC.visible=true;
								var boardW=590;
								var boardH=220;
								
								var getW=0;
								var getH=35;
								var getSrc;	
								var getStr;
								var bitmap;
								var fontSize=18;
								var imgBoo=false;
								storeOpnW=[];
								storeOpnH=[];
								suffleQNum=shuffleQ[qNum-1];
								var getNum=suffleQNum;
								
								
								opnNum=dataListArr[currentLevelNum][getNum].length-1;
								
								//opntionShuffle(opnNum);
								
								ACT_container=new createjs.Container();	
								ACT_container.name="ACT_holder";
								var qHolder=new createjs.Container();
								qHolder.name="Q_holder";
								var shap_drag=new createjs.Shape();	
								shap_drag.name="qBg_shap";
								var q_text;
								
								if(dataListArr[currentLevelNum][getNum][0].indexOf("||ImgSrc")>=0){
									getSrc=(dataListArr[currentLevelNum][getNum][0].split("||ImgSrc=")[1]).split("width=")[0];
									bitmap = new createjs.Bitmap(getSrc);
									getW=parseInt(((dataListArr[currentLevelNum][getNum][0].split("||ImgSrc=")[1]).split("width=")[1]).split("height=")[0])+30;
									getH=parseInt(((dataListArr[currentLevelNum][getNum][0].split("||ImgSrc=")[1]).split(" width=")[1]).split(" height=")[1])+10;		
									
									getStr=dataListArr[currentLevelNum][getNum][0].split("||ImgSrc=")[0];
									imgBoo=true;
								}else{
									imgBoo=false;
									getStr=dataListArr[currentLevelNum][getNum][0];
								}
								//alert(imgBoo);
								q_text = new createjs.Text(getStr, fontSize+"px calibriFont_R", "#4D2600");	
								q_text.name="qText";
								if(!imgBoo){	
									getW=q_text.getBounds().width+15;
									
									if(getW>=500){
										q_text.lineWidth=485;
										fontSize=16;
										q_text.font=fontSize+"px calibriFont_R", "#4D2600";
									}
								}	
								
								getW=q_text.getBounds().width+20;
								getH=q_text.getBounds().height+10;
								
								q_text.x=getW/2-q_text.getBounds().width/2;
								q_text.y=getH/2-q_text.getBounds().height/2;
								
								shap_drag.graphics.beginFill("#E0E086").drawRoundRect(0,0,getW,getH,8);
								
								qHolder.addChild(shap_drag,q_text);	
								ACT_container.addChild(qHolder);
								
								qHolder.setBounds(0,0,getW,getH);
								qHolder.x=boardW/2-qHolder.getBounds().width/2;
								ACT_container.y=242;
						
								var mask_shape=new createjs.Shape();	
								mask_shape.graphics.beginFill("#E0B32F").drawRoundRect(2.5,223.80,589.2,boardH,1);	
								mask_shape.alpha=0;
								ACT_container.mask=mask_shape;	
								
								questionBoardMC.addChild(mask_shape,ACT_container);	
								targContainer=new createjs.Container();
								ACT_container.addChild(targContainer);
								
								
								creatTargSudamaBox(qHolder.getBounds().height,qHolder.y);
								
							}
							
							
						function FillBlank_updateNextQuestion(qNum){
							charectorMC.visible=true;
							var q_text=ACT_container.getChildByName("Q_holder").getChildByName("qText");
							var shap_drag=ACT_container.getChildByName("Q_holder").getChildByName("qBg_shap");	
							shap_drag.graphics.clear();
							
								var boardW=590;
								var boardH=220;
								
								var getW=0;
								var getH=35;
								var getSrc;	
								var getStr;
								var bitmap;
								var fontSize=18;
								var imgBoo=false;
								storeOpnW=[];
								storeOpnH=[];
								suffleQNum=shuffleQ[qNum-1];
								var getNum=suffleQNum;
							
							if(dataListArr[currentLevelNum][getNum][0].indexOf("||ImgSrc")>=0){
									getSrc=(dataListArr[currentLevelNum][getNum][0].split("||ImgSrc=")[1]).split("width=")[0];
									bitmap = new createjs.Bitmap(getSrc);
									getW=parseInt(((dataListArr[currentLevelNum][getNum][0].split("||ImgSrc=")[1]).split("width=")[1]).split("height=")[0])+30;
									getH=parseInt(((dataListArr[currentLevelNum][getNum][0].split("||ImgSrc=")[1]).split(" width=")[1]).split(" height=")[1])+10;		
									
									getStr=dataListArr[currentLevelNum][getNum][0].split("||ImgSrc=")[0];
									imgBoo=true;
								}else{
									imgBoo=false;
									getStr=dataListArr[currentLevelNum][getNum][0];
								}
								//alert(imgBoo);
								q_text.text=getStr;	
								if(!imgBoo){	
									getW=q_text.getBounds().width+15;
									
									if(getW>=500){
										q_text.lineWidth=485;
										fontSize=16;
										q_text.font=fontSize+"px calibriFont_R", "#4D2600";
									}
								}	
								
								getW=q_text.getBounds().width+20;
								getH=q_text.getBounds().height+10;
								
								q_text.x=getW/2-q_text.getBounds().width/2;
								q_text.y=getH/2-q_text.getBounds().height/2;
								
								shap_drag.graphics.beginFill("#E0E086").drawRoundRect(0,0,getW,getH,8);
								
								var myQHolder=ACT_container.getChildByName("Q_holder");	
								myQHolder.setBounds(0,0,getW,getH);
								var Targ_holder=targContainer;
								Targ_holder.y=getH+10;
								ACT_container.getChildByName("submit_mc").y=Targ_holder.y+5;				
								ACT_container.getChildByName("sign_mc").y=Targ_holder.y+Targ_holder.getBounds().height+10;					
								
								Tween = createjs.Tween.get(myQHolder).to({x: (boardW/2-myQHolder.getBounds().width/2)}, 600, createjs.Ease.RegularInOut);//.wait(400).call(handleComplete);
								OpnTween = createjs.Tween.get(Targ_holder).to({x: (boardW/2-Targ_holder.getBounds().width/2)}, 600, createjs.Ease.RegularInOut).call(handleComplete);
								fillBlank_dragsEnabled(true);
						}
							
							
							
						//===============================================================================
						//-----CTREATE TAR BOX----
						//===============================================================================
						
						function creatTargSudamaBox(getQ_h,getQ_y){
							var boardW=590;
							var boardH=220;
							
							var bg_shap=new createjs.Shape();
							bg_shap.graphics.setStrokeStyle(1).beginStroke("#999999");	
							bg_shap.graphics.beginFill("#ffffff").drawRoundRect(0,0,250,40,10);	
							bg_shap.setBounds(0,0,250,40);
							
							var targ_text = new createjs.Text("drop here", "18px calibriFont_R", "#999999");
							targ_text.name="targ_txt";
							targ_text.textAlign="center";		
							targ_text.x=bg_shap.getBounds().width/2;
							targ_text.y=bg_shap.getBounds().height/2-targ_text.getBounds().height/2;
							
							targContainer.addChild(bg_shap,targ_text);		
							targContainer.x=boardW/2-bg_shap.getBounds().width/2;
							targContainer.y=getQ_h+getQ_y+10;
							targContainer.setBounds(targContainer.x,targContainer.y,bg_shap.getBounds().width,bg_shap.getBounds().height)
							
							//targContainer.addEventListener("click", DROP_ON_TARG.bind(this));
							
							
							var signMC=new lib.sign_mc();
								signMC.x=boardW/2;
								signMC.y=targContainer.y+targContainer.getBounds().height+10;
								signMC.visible=false;
								signMC.name="sign_mc";	
							
							var subMC=new lib.submit_mc();
								subMC.x=targContainer.x-(subMC.nominalBounds.width+10);
								subMC.y=(targContainer.getBounds().height/2-subMC.nominalBounds.height/2)+targContainer.y;
								subMC.visible=false;
								subMC.name="submit_mc";
							ACT_container.addChild(signMC,subMC);
							
							subMC.addEventListener("click",SUBMIT_SETUP.bind(this));
									
							/*subBTN.x=myStageW/2;
							subBTN.y=targContainer.y+bg_shap.getBounds().height+subBTN.nominalBounds.height;	
							nextBTN.x=signMC.x=subBTN.x;
							nextBTN.y=signMC.y=subBTN.y;
							signMC.y=subBTN.y-signMC.nominalBounds.height/2;
							
							showAnsBTN.x=subBTN.x;
							showAnsBTN.y=subBTN.y+(showAnsBTN.nominalBounds.height+10);
							tweenControll("IN")*/
							createSudamaDrag();
						
						}
						
						
						//===============================================================================
						//-----CTREATE DRAG AND DRAG AREA----
						//===============================================================================
						var clip;
						var tempID=0;
						
						function createSudamaDrag(){
							var boardW=590;
							var boardH=220;
							
							var xp=0;
							var yp=0;	
							var getW;
							var holderW=[];
							getDragsArr=[];
							if(commonDrags.length>=2){
								getDragsArr=commonDrags;
								dragLinesDevide=0;
							}else{
								for(var a=1; a<dataListArr[currentLevelNum].length; a++){
									if((dataListArr[currentLevelNum][a].length)-1>=2){//with extera drags (last one ans)
										for(var r=1; r<=(dataListArr[currentLevelNum][a].length)-1; r++){
											getDragsArr.push(dataListArr[currentLevelNum][a][r]);
										}
									}else{//with one drag in each question
										getDragsArr.push(dataListArr[currentLevelNum][a][1]);
									}
								}
							}
							
							
							var getDevide=dragLinesDevide;
							
							dragContainer=new createjs.Container();
							var dragsHolder=new createjs.Container();
							dragsHolder.name="dragHolder"
							
							var dragAra_shap= new createjs.Shape();		
							
							for(var i=1; i<=getDragsArr.length; i++){
								clip=new createjs.Container();
								clip.name="clip_"+i;
								var clip_text = new createjs.Text(getDragsArr[i-1], "18px calibriFont_R", "#ffffff");
								//var clip_text = new createjs.Text(dataListArr[opnShuffle[i-1]][1], "22px calibriFont_R", "#ffffff");
								clip_text.textAlign="left";	
								clip_text.name="clip_text"
								getW=clip_text.getBounds().width+20;
								
								var shap_drag=new createjs.Shape();	
								shap_drag.graphics.beginFill("#88B600").drawRoundRect(0,0,getW,35,8);			
								shap_drag.setBounds(0,0,getW,35); 
								clip_text.x=getW/2-clip_text.getBounds().width/2;
								clip_text.y=shap_drag.getBounds().height/2-clip_text.getBounds().height/2;
								
								/*shap_drag.filters=[_dropShadowFilter];
								shap_drag.cache(0, 0, shap_drag.getBounds().width, shap_drag.getBounds().height);*/
								
								clip.x=xp;
								clip.y=yp;
								
								xp+=shap_drag.getBounds().width+3;
								if(i%getDevide==0){
									holderW.push(xp);
									xp=0;
									yp+=shap_drag.getBounds().height+10;	
								}
								
								
								clip.addChild(shap_drag,clip_text);
								clip.addEventListener("click", DRAG_CLIP_SETUP.bind(this));		
								dragsHolder.addChild(clip);
							}
							
							if(getDevide>=1){
								//holderW.sort(Array.NUMERIC);
								holderW=holderW.sort((a, b) => a - b);
								dragsHolder.setBounds(0,0,holderW[holderW.length-1],yp+clip.getBounds().height);	
							}else{
								dragsHolder.setBounds(0,0,xp,yp+clip.getBounds().height);	
							}
							
							
							dragAra_shap.graphics.beginFill("#000000").drawRoundRect(0,0,boardW-10,dragsHolder.getBounds().height,12);	
							dragAra_shap.alpha=0.1;
							dragAra_shap.setBounds(0,0,boardW-10, dragsHolder.getBounds().height+15); 	
							
							dragsHolder.x=boardW/2-dragsHolder.getBounds().width/2;
							dragsHolder.y=dragAra_shap.getBounds().height/2-dragsHolder.getBounds().height/2;	
							
							dragContainer.x=boardW/2-dragAra_shap.getBounds().width/2;
							dragContainer.y=boardH-dragAra_shap.getBounds().height+20	;	
							
							dragContainer.addChild(dragAra_shap);//--drag area--//	
							dragContainer.addChild(dragsHolder);	
							ACT_container.addChild(dragContainer);
							
							
						}
						
						
						//===============================================================================
						//-----DRAG CLICK SETUP----
						//===============================================================================
						var clipX=0;
						var clipY=0;
						var newClip;
						stage.mouseMoveOutside = true;
						
						function DRAG_CLIP_SETUP(evnt){
							var getNum=evnt.currentTarget.name.split("_")[1]
							var getW;
							var p = stage.globalToLocal(evnt.stageX, evnt.stageY);
							
							if(tempID>=1){dragContainer.getChildByName("dragHolder").getChildByName("clip_"+tempID).alpha=1;}
							evnt.currentTarget.alpha=0.5;
							tempID=getNum;
							
							newClip=new createjs.Container();
							newClip.name="myclip"
							var clip_text = new createjs.Text(evnt.currentTarget.getChildByName("clip_text").text, "22px calibriFont_R", "#000000");
								clip_text.textAlign="left";	
								getW=clip_text.getBounds().width+20;
							
							var shap_drag=new createjs.Shape();	
							shap_drag.graphics.beginFill("#CC9900").drawRoundRect(0,0,getW,45,8);			
							shap_drag.setBounds(0,0,getW,45);	
							
							clip_text.x=getW/2-clip_text.getBounds().width/2;
							clip_text.y=shap_drag.getBounds().height/2-clip_text.getBounds().height/2;
							
							newClip.addChild(shap_drag,clip_text);
							
							newClip.x=(p.x)-getW/2;
							newClip.y=(p.y)-shap_drag.getBounds().height/2;	
							clipX=newClip.x;
							clipY=newClip.y;
							
							stage.addChild(newClip);	
							//newClip.mouseEnabled=false;
							newClip.setBounds(0,0,shap_drag.getBounds().width,shap_drag.getBounds().height);
							stage.addEventListener("stagemousemove", MOUSE_MOVE.bind(this));	
							newClip.addEventListener("click", DROP_ON_TARG.bind(this));
							
							userAns=evnt.currentTarget.getChildByName("clip_text").text;
							
						}
						
						//===============================================================================
						//-----DRAG MOVE SETUP----
						//===============================================================================
						
						function MOUSE_MOVE(evt){	
							newClip.x = (evt.localX)-newClip.getBounds().width/2;
							newClip.y = (evt.localY)-newClip.getBounds().height/2;	
						}
						
						function DROP_ON_TARG(evnt){
							var p = targContainer.globalToLocal(evnt.stageX, evnt.stageY);
							if(targContainer.hitTest(p.x, p.y)){
								//subBTN.visible=showAnsBTN.visible=nextBTN.visible=signMC.visible=false;
								ACT_container.getChildByName("submit_mc").visible=true;
								//ACT_container.getChildByName("sign_mc").visible=true;
								//ACT_container.getChildByName("sign_mc").gotoAndStop(0);
								stage.removeEventListener("stagemousemove", MOUSE_MOVE.bind(this));
								stage.removeChild(newClip);		
								//subBTN.visible=true;
								targContainer.getChildByName("targ_txt").text=userAns;
								targContainer.getChildByName("targ_txt").color="#000000"	
							}else{
								createjs.Tween.get(newClip, {loop:false}).to({x:clipX, y:clipY}, 100, createjs.Ease.regularOut).call(handleComplete);
								function handleComplete(event) {			
									if(tempID>=1){dragContainer.getChildByName("dragHolder").getChildByName("clip_"+tempID).alpha=1;}
									stage.removeChild(newClip);			
								}
							}
							
						}
						
						
						
						//===============================================================================
						//-----SUBMIT SETUP----
						//===============================================================================
						
						
						function SUBMIT_SETUP(evnt){
							ACT_container.getChildByName("sign_mc").visible=true;
							ACT_container.getChildByName("submit_mc").visible=false;
							if(userAns==dataListArr[currentLevelNum][suffleQNum][1]){		
								ACT_container.getChildByName("sign_mc").gotoAndStop(1);		
								characterJumControll("rightJump");		
								totalRightAns++;
								
							}else{
								totalWrongAns++;
								characterJumControll("wrongJump");			
								ACT_container.getChildByName("sign_mc").gotoAndStop(2);		
							}
							fillBlank_dragsEnabled(false);
							
							
							
						}
						
						
						//===============================================================================
						//-----DRAG BTN ENABLED ----
						//===============================================================================
						
						function fillBlank_dragsEnabled(getBoo){
							//for(var i=1; i<dataListArr.length; i++){		
							for(var i=1; i<=getDragsArr.length; i++){		
								tempID=0;
								if(getBoo){
									dragContainer.getChildByName("dragHolder").getChildByName("clip_"+i).alpha=1;
								}else{
									dragContainer.getChildByName("dragHolder").getChildByName("clip_"+i).alpha=0.5;
								}
								dragContainer.getChildByName("dragHolder").getChildByName("clip_"+i).mouseEnabled=getBoo;
							}
						}
						
						
						function fillBlank_NextQupdate(){	
								if(getTotalQ_num==qNum){
									//actCompletePopUp();
									actTmr = setInterval(actCompletePopUp, 1500 );
								}else{
									var myQHolder=ACT_container.getChildByName("Q_holder");
									ACT_container.getChildByName("sign_mc").visible=false;
									ACT_container.getChildByName("sign_mc").gotoAndStop(0);
									var Targ_holder=targContainer;
									Tween = createjs.Tween.get(myQHolder).to({x: (-(myQHolder.getBounds().width+200))}, 600, createjs.Ease.RegularInOut);//.call(handleComplete);//.wait(400).call(handleComplete);
									OpnTween = createjs.Tween.get(Targ_holder).to({x: (700)}, 600, createjs.Ease.RegularInOut).call(handleComplete);
									function handleComplete(event) {
										targContainer.getChildByName("targ_txt").color="#999999";	
										Targ_holder.getChildByName("targ_txt").text="drop here";
										
										if(!nextLevelBoo){
											stageBlocker(false,"blocker_mc",0.9,"Please wait...","#000000");
											actTmr = setInterval(fillBlank_updateQuestion, 1000 );
										}else{					
											questionBoardMC.removeChild(ACT_container);
										}
										
									}
								}
							}
						
						
							function fillBlank_changeQuestion(){
								clearInterval(actTmr);
								fillBlank_NextQupdate();
							}
							
							
						
							function fillBlank_updateQuestion(){
								clearInterval(actTmr);	
								qNum++;
								FillBlank_updateNextQuestion(qNum);
								
							}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.mark_mc = new lib.mark_mc();
	this.mark_mc.name = "mark_mc";
	this.mark_mc.parent = this;
	this.mark_mc.setTransform(228.9,350);

	this.Frog_mc = new lib.frog_mc();
	this.Frog_mc.name = "Frog_mc";
	this.Frog_mc.parent = this;
	this.Frog_mc.setTransform(225,365.5);

	this.QuestionHolder_mc = new lib._questionHolder();
	this.QuestionHolder_mc.name = "QuestionHolder_mc";
	this.QuestionHolder_mc.parent = this;
	this.QuestionHolder_mc.setTransform(404.2,66.4,1,1,0,0,0,294.9,221.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.QuestionHolder_mc},{t:this.Frog_mc},{t:this.mark_mc}]}).wait(1));

	// Layer 1
	this.livesHolder_mc = new lib.livesHolder_mc();
	this.livesHolder_mc.name = "livesHolder_mc";
	this.livesHolder_mc.parent = this;
	this.livesHolder_mc.setTransform(73.8,25.7,1,1,0,0,0,75,20.8);

	this.scorHolder_mc = new lib.scroreHolder_mc();
	this.scorHolder_mc.name = "scorHolder_mc";
	this.scorHolder_mc.parent = this;
	this.scorHolder_mc.setTransform(716.9,25.7,1,1,0,0,0,85.5,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scorHolder_mc},{t:this.livesHolder_mc}]}).wait(1));

	// Layer_4
	this.groundGrass = new lib.bushesGround();
	this.groundGrass.name = "groundGrass";
	this.groundGrass.parent = this;
	this.groundGrass.setTransform(-585.6,322,0.916,0.916);
	this.groundGrass.filters = [new cjs.ColorFilter(0.69, 0.69, 0.69, 1, 47.12, 40.61, 43.71, 0)];
	this.groundGrass.cache(-2,-2,1518,177);

	this.bgTree = new lib.Symbol1();
	this.bgTree.name = "bgTree";
	this.bgTree.parent = this;
	this.bgTree.setTransform(-248.6,-68.7,0.916,0.916,0,0,0,0,0.1);
	this.bgTree.filters = [new cjs.ColorFilter(0.51, 0.51, 0.51, 1, 17.15, 77.91, 107.31, 0)];
	this.bgTree.cache(-2,-2,592,605);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3B77B2","#9BDEE5"],[0,1],-0.7,-330.3,-0.8,50.4).s().p("Eg+OA4wMAAAhxfMB8dAAAMAAABxfg");
	this.shape.setTransform(400.2,240.1,1.012,0.661,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.bgTree},{t:this.groundGrass}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.6,84.9,1388.7,636.5);
// library properties:
lib.properties = {
	id: '222EC7E85D553144B04590136F109C9A',
	width: 800,
	height: 480,
	fps: 45,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"../assests/images/test_1_HTML5 Canvas_atlas_.png", id:"test_1_HTML5 Canvas_atlas_"},
		{src:"../assests/sounds/boing2.mp3", id:"boing2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['222EC7E85D553144B04590136F109C9A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;