
// view
zog("hi from view.js");

var app = function(app) {
	
	app.makeHorizontalPages = function(layoutManager, gridManager, guideManager) {
		
		zog("pages");
		
		p = {};

		p.first = new createjs.Container();		
		p.first.name = "first";	
		p.first.setBounds(0,0,stageW,stageH);
		

		p.main = new createjs.Container();	
		p.main.setBounds(0,0,830,1060);
		p.main.regX=830/2;
		p.main.regY=1060/2;
		p.first.addChild(p.main);


		var bg = new zim.Rectangle(830, 1060, "#FFC900");	
		zog(stageW,stageH);
		bg.setBounds(0,0,830,1060);
		p.main.addChild(bg);
		

		var listener = createjs.Ticker.on("tick", stage);

		var robot = new createjs.Container();
		robot.name = "robot";
		robot.setBounds(0,0,stageW,stageH);


/////////////////////////HEAD////////////////////////////////////////
		var ear1 = new zim.Circle(25, "black");
		//ear1.setBounds(0,0,50,50);
		ear1.x = 300;
		ear1.y = 490;
		p.main.addChild(ear1);

		var ear2 = new zim.Circle(25, "black");
		//ear2.setBounds(0,0,50,50);
		ear2.x = 500;
		ear2.y = 490;
		p.main.addChild(ear2);

		
		var head = new zim.Rectangle(200,150,"yellow",2);
		//head2.setBounds(0,0,100,100);
		head.x = 300;
		head.y = 420;
		p.main.addChild(head);

		var mouth = new zim.Rectangle(80,15,"black",2);
		//mouth.setBounds(0,0,100,100);
		mouth.x = 360;
		mouth.y = 520;
		p.main.addChild(mouth);


		var hat = new zim.Triangle(100,90,90,"yellow",4,2);
		//hat.setBounds(0,0,100,100);
		hat.x = 400;
		hat.y = 383;
		p.main.addChild(hat);

		var eyesOutline = new zim.Circle(15, "yellow", 2,2);
		//eyesOutline.setBounds(0,0,50,50);
		eyesOutline.x = 350;
		eyesOutline.y = 470;
		p.main.addChild(eyesOutline);

		var eyes = new zim.Circle(10, "black");
		//eyes.setBounds(0,0,50,50);
		eyes.x = 350;
		eyes.y = 470;
		p.main.addChild(eyes);

		
		var eyesOutline2 = new zim.Circle(15, "yellow",2,2);
		//eyesOutline2.setBounds(0,0,50,50);
		eyesOutline2.x = 450;
		eyesOutline2.y = 470;
		p.main.addChild(eyesOutline2);

		var eyes2 = new zim.Circle(10, "black");
		//eyes2.setBounds(0,0,50,50);
		eyes2.x = 450;
		eyes2.y = 470;
		p.main.addChild(eyes2);

		

///////////////////////Body//////////////////////////////////////////////
		var body = new zim.Rectangle(250,200,"yellow",2);
		//body.setBounds(0,0,100,100);
		body.x = 275;
		body.y = 580;
		p.main.addChild(body);



		var bodyShapes = new zim.Rectangle(150,30,"yellow",2);
		//bodyShapes.setBounds(0,0,100,100);
		bodyShapes.x = 350;
		bodyShapes.y = 600;
		p.main.addChild(bodyShapes);

		

		var bodyDot = new zim.Circle(6, "black");
		//bodyDot.setBounds(0,0,50,50);
		bodyDot.x = 380;
		bodyDot.y = 620;
		p.main.addChild(bodyDot);

		

		var bodyDot1 = new zim.Circle(6, "black");
		//bodyDot1.setBounds(0,0,50,50);
		bodyDot1.x = 400;
		bodyDot1.y = 620;
		p.main.addChild(bodyDot1);

		

		var bodyDot2 = new zim.Circle(6, "black");
		//bodyDot2.setBounds(0,0,50,50);
		bodyDot2.x = 420;
		bodyDot2.y = 620;
		p.main.addChild(bodyDot2);

		

		var bodyDot3 = new zim.Circle(6, "black");
		//bodyDot3.setBounds(0,0,50,50);
		bodyDot3.x = 440;
		bodyDot3.y = 620;
		p.main.addChild(bodyDot3);

		

		/*var bodyD = new zim.Rectangle(45,10,"black",2);
		bodyD.setBounds(0,0,100,100);
		bodyD.x = 460;
		bodyD.y = 615;
		p.main.addChild(bodyD);
		*/

		
///////////////////ARMS///////////////////////////////////////////
		var arm = new zim.Rectangle(70,70, "yellow", 1);
		arm.x = 205;
		arm.y = 600;
		p.main.addChild(arm);

		

		var armL = new zim.Rectangle(40,80, "yellow", 1);
		armL.x = 220;
		armL.y = 670;
		p.main.addChild(armL);

		

		var handL = new zim.Circle(20, "black", 2,2);
		handL.x = 240;
		handL.y = 750;
		p.main.addChild(handL);

		

		var hand1 = new zim.Circle(18, "yellow", 2,2);
		hand1.x = 240;
		hand1.y = 753;
		p.main.addChild(hand1)

		
		

		var arm1 = new zim.Rectangle(70,70, "yellow", 1);
		arm1.x = 525;
		arm1.y = 600;
		p.main.addChild(arm1);

		


		var armR = new zim.Rectangle(40,80, "yellow", 1);
		armR.x = 540;
		armR.y = 670;
		p.main.addChild(armR);

		
		

		var handR = new zim.Circle(20, "black", 2,2);
		handR.x = 560;
		handR.y = 750;
		p.main.addChild(handR);

	
		//stage.update(robot);

		
		var hand1R = new zim.Circle(18, "yellow", 2,2);
		hand1R.x = 560;
		hand1R.y = 753;
		p.main.addChild(hand1R)
		
	
		ear1.on("click", function() {

			createjs.Tween.get(ear1)
			.to({alpha:0},200)
			.to({alpha:1},200)
			.to({alpha:0},200)
			.to({alpha:1},200)
			.to({alpha:0},200)
			.to({alpha:1},200)
			                                             
			createjs.Tween.get(ear2)
			.to({alpha:0},200)
			.to({alpha:1},200)
			.to({alpha:0},200)
			.to({alpha:1},200)
			.to({alpha:0},200)
			.to({alpha:1},200);
			
		});
		
		ear2.on("click", function() {

			createjs.Tween.get(ear1)
			.to({alpha:0},200)
			.to({alpha:1},200)
			.to({alpha:0},200)
			.to({alpha:1},200)
			.to({alpha:0},200)
			.to({alpha:1},200)
			                                             
			createjs.Tween.get(ear2)
			.to({alpha:0},200)
			.to({alpha:1},200)
			.to({alpha:0},200)
			.to({alpha:1},200)
			.to({alpha:0},200)
			.to({alpha:1},200);
			
		});

		body.on("click", function() {
			createjs.Tween.get(body)
			.to({x:300},100)//,createjs.Ease.backIn)
			.to({x:275},100)
			.to({x:290},100)
			.to({x:275},100)

			createjs.Tween.get(arm)
			.to({x:230},100)//,createjs.Ease.backIn)
			.to({x:205},100)
			.to({x:220},100)
			.to({x:205},100)

			createjs.Tween.get(armL)
			.to({x:235},100)//,createjs.Ease.backIn)
			.to({x:220},100)
			.to({x:235},100)
			.to({x:220},100)

			createjs.Tween.get(handL)
			.to({x:255},100)//,createjs.Ease.backIn)
			.to({x:240},100)
			.to({x:255},100)
			.to({x:240},100)

			createjs.Tween.get(hand1)
			.to({x:255},100)//,createjs.Ease.backIn)
			.to({x:240},100)
			.to({x:255},100)
			.to({x:240},100)

			createjs.Tween.get(arm1)
			.to({x:550},100)//,createjs.Ease.backIn)
			.to({x:525},100)
			.to({x:540},100)
			.to({x:525},100)

			createjs.Tween.get(armR)
			.to({x:560},100)//,createjs.Ease.backIn)
			.to({x:540},100)
			.to({x:560},100)
			.to({x:540},100)

			createjs.Tween.get(handR)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)

			createjs.Tween.get(handR)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)

			createjs.Tween.get(hand1R)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)

			createjs.Tween.get(bodyShapes)
			.to({x:360},100)
			.to({x:350},100)
			.to({x:360},100)
			.to({x:350},100)
		});
		
		arm.on("click", function() {
			createjs.Tween.get(body)
			.to({x:300},100)//,createjs.Ease.backIn)
			.to({x:275},100)
			.to({x:290},100)
			.to({x:275},100)

			createjs.Tween.get(arm)
			.to({x:230},100)//,createjs.Ease.backIn)
			.to({x:205},100)
			.to({x:220},100)
			.to({x:205},100)

			createjs.Tween.get(armL)
			.to({x:235},100)//,createjs.Ease.backIn)
			.to({x:220},100)
			.to({x:235},100)
			.to({x:220},100)

			createjs.Tween.get(handL)
			.to({x:255},100)//,createjs.Ease.backIn)
			.to({x:240},100)
			.to({x:255},100)
			.to({x:240},100)

			createjs.Tween.get(hand1)
			.to({x:255},100)//,createjs.Ease.backIn)
			.to({x:240},100)
			.to({x:255},100)
			.to({x:240},100)

			createjs.Tween.get(arm1)
			.to({x:550},100)//,createjs.Ease.backIn)
			.to({x:525},100)
			.to({x:540},100)
			.to({x:525},100)

			createjs.Tween.get(armR)
			.to({x:560},100)//,createjs.Ease.backIn)
			.to({x:540},100)
			.to({x:560},100)
			.to({x:540},100)

			createjs.Tween.get(handR)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)

			createjs.Tween.get(handR)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)

			createjs.Tween.get(hand1R)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)
		});

		arm1.on("click", function() {
			createjs.Tween.get(body)
			.to({x:300},100)//,createjs.Ease.backIn)
			.to({x:275},100)
			.to({x:290},100)
			.to({x:275},100)

			createjs.Tween.get(arm)
			.to({x:230},100)//,createjs.Ease.backIn)
			.to({x:205},100)
			.to({x:220},100)
			.to({x:205},100)

			createjs.Tween.get(armL)
			.to({x:235},100)//,createjs.Ease.backIn)
			.to({x:220},100)
			.to({x:235},100)
			.to({x:220},100)

			createjs.Tween.get(handL)
			.to({x:255},100)//,createjs.Ease.backIn)
			.to({x:240},100)
			.to({x:255},100)
			.to({x:240},100)

			createjs.Tween.get(hand1)
			.to({x:255},100)//,createjs.Ease.backIn)
			.to({x:240},100)
			.to({x:255},100)
			.to({x:240},100)

			createjs.Tween.get(arm1)
			.to({x:550},100)//,createjs.Ease.backIn)
			.to({x:525},100)
			.to({x:540},100)
			.to({x:525},100)

			createjs.Tween.get(armR)
			.to({x:560},100)//,createjs.Ease.backIn)
			.to({x:540},100)
			.to({x:560},100)
			.to({x:540},100)

			createjs.Tween.get(handR)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)

			createjs.Tween.get(handR)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)

			createjs.Tween.get(hand1R)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)
		});

		armL.on("click", function() {
			createjs.Tween.get(body)
			.to({x:300},100)//,createjs.Ease.backIn)
			.to({x:275},100)
			.to({x:290},100)
			.to({x:275},100)

			createjs.Tween.get(arm)
			.to({x:230},100)//,createjs.Ease.backIn)
			.to({x:205},100)
			.to({x:220},100)
			.to({x:205},100)

			createjs.Tween.get(armL)
			.to({x:235},100)//,createjs.Ease.backIn)
			.to({x:220},100)
			.to({x:235},100)
			.to({x:220},100)

			createjs.Tween.get(handL)
			.to({x:255},100)//,createjs.Ease.backIn)
			.to({x:240},100)
			.to({x:255},100)
			.to({x:240},100)

			createjs.Tween.get(hand1)
			.to({x:255},100)//,createjs.Ease.backIn)
			.to({x:240},100)
			.to({x:255},100)
			.to({x:240},100)

			createjs.Tween.get(arm1)
			.to({x:550},100)//,createjs.Ease.backIn)
			.to({x:525},100)
			.to({x:540},100)
			.to({x:525},100)

			createjs.Tween.get(armR)
			.to({x:560},100)//,createjs.Ease.backIn)
			.to({x:540},100)
			.to({x:560},100)
			.to({x:540},100)

			createjs.Tween.get(handR)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)

			createjs.Tween.get(handR)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)

			createjs.Tween.get(hand1R)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)
		});
		
		armR.on("click", function() {
			createjs.Tween.get(body)
			.to({x:300},100)//,createjs.Ease.backIn)
			.to({x:275},100)
			.to({x:290},100)
			.to({x:275},100)

			createjs.Tween.get(arm)
			.to({x:230},100)//,createjs.Ease.backIn)
			.to({x:205},100)
			.to({x:220},100)
			.to({x:205},100)

			createjs.Tween.get(armL)
			.to({x:235},100)//,createjs.Ease.backIn)
			.to({x:220},100)
			.to({x:235},100)
			.to({x:220},100)

			createjs.Tween.get(handL)
			.to({x:255},100)//,createjs.Ease.backIn)
			.to({x:240},100)
			.to({x:255},100)
			.to({x:240},100)

			createjs.Tween.get(hand1)
			.to({x:255},100)//,createjs.Ease.backIn)
			.to({x:240},100)
			.to({x:255},100)
			.to({x:240},100)

			createjs.Tween.get(arm1)
			.to({x:550},100)//,createjs.Ease.backIn)
			.to({x:525},100)
			.to({x:540},100)
			.to({x:525},100)

			createjs.Tween.get(armR)
			.to({x:560},100)//,createjs.Ease.backIn)
			.to({x:540},100)
			.to({x:560},100)
			.to({x:540},100)

			createjs.Tween.get(handR)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)

			createjs.Tween.get(handR)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)

			createjs.Tween.get(hand1R)
			.to({x:580},100)//,createjs.Ease.backIn)
			.to({x:560},100)
			.to({x:580},100)
			.to({x:560},100)
		});


		bodyShapes.on("click", function() {

			//createjs.Tween.get(bodyShapes)
			//.to({alpha:0},3000)

			createjs.Tween.get(bodyDot)
			.to({alpha:0},1000)

			createjs.Tween.get(bodyDot1)
			.to({alpha:0},1500)

			createjs.Tween.get(bodyDot2)
			.to({alpha:0},2000)

			createjs.Tween.get(bodyDot3)
			.to({alpha:0},2500)

		});

		

		bodyDot.on("click", function() {

			//createjs.Tween.get(bodyShapes)
			//.to({alpha:0},3000)

			createjs.Tween.get(bodyDot)
			.to({alpha:0},1000)

			createjs.Tween.get(bodyDot1)
			.to({alpha:0},1500)

			createjs.Tween.get(bodyDot2)
			.to({alpha:0},2000)

			createjs.Tween.get(bodyDot3)
			.to({alpha:0},2500)

		});

		bodyDot1.on("click", function() {

			//createjs.Tween.get(bodyShapes)
			//.to({alpha:0},3000)

			createjs.Tween.get(bodyDot)
			.to({alpha:0},1000)

			createjs.Tween.get(bodyDot1)
			.to({alpha:0},1500)

			createjs.Tween.get(bodyDot2)
			.to({alpha:0},2000)

			createjs.Tween.get(bodyDot3)
			.to({alpha:0},2500)

		});

		bodyDot2.on("click", function() {

			//createjs.Tween.get(bodyShapes)
			//.to({alpha:0},3000)

			createjs.Tween.get(bodyDot)
			.to({alpha:0},1000)

			createjs.Tween.get(bodyDot1)
			.to({alpha:0},1500)

			createjs.Tween.get(bodyDot2)
			.to({alpha:0},2000)

			createjs.Tween.get(bodyDot3)
			.to({alpha:0},2500)

		});

		bodyDot3.on("click", function() {

			//createjs.Tween.get(bodyShapes)
			//.to({alpha:0},3000)

			createjs.Tween.get(bodyDot)
			.to({alpha:0},1000)

			createjs.Tween.get(bodyDot1)
			.to({alpha:0},1500)

			createjs.Tween.get(bodyDot2)
			.to({alpha:0},2000)

			createjs.Tween.get(bodyDot3)
			.to({alpha:0},2500)

		});

		eyes.on("click", function() {

			createjs.Tween.get(eyes)
			.to({alpha:0},500)//,createjs.Ease.backIn)
			.to({alpha:1},500)
				
			createjs.Tween.get(eyes2)
			.to({alpha:0},500)
			.to({alpha:1},500)
		});

		eyes2.on("click", function() {

			createjs.Tween.get(eyes)
			.to({alpha:0},500)//,createjs.Ease.backIn)
			.to({alpha:1},500)
				
			createjs.Tween.get(eyes2)
			.to({alpha:0},500)
			.to({alpha:1},500)
		});


		mouth.on("click",function(){
			createjs.Tween.get(mouth)
				.to({x:400},300)
				.to({x:320},300)
				.to({x:360},300)
		});

		hat.on("click",function(){
			createjs.Tween.get(hat)
				.to({y:370},200)
				.to({y:383},200)
				.to({y:370},200)
				.to({y:383},200)
		});

		makeTitle("Do Not Click The Robot!");
		function makeTitle(t){
			var title=new createjs.Text(t, "40px Verdana","#000000");
			title.textBaseline = "alphabetic";
			title.x = 150;
			title.y = 300;
			p.main.addChild(title);
			stage.update();
		}

		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		p.info = new createjs.Container();		
		p.info.name = "info";		
		var infoBacking = new zim.Rectangle(stageW, stageH, "#FFC900");	
		infoBacking.setBounds(0,0,stageW,stageH);
		p.info.addChild(infoBacking);

		//p.info.text = function(){
		console.log("Hi from text");
		makeTitle1("Robot X:");
		function makeTitle1(t) {
			var title1 = new createjs.Text(t, "50px Verdana", "#000000");		
			title1.textBaseline = "alphabetic";
			title1.alpha = .9;
			title1.x = 50; 
			title1.y = 300;	
			p.info.addChild(title1);
			stage.update();
		}	

		makeTitle2("A machine capable of taking over the world.");
		function makeTitle2(t) {
			var title2 = new createjs.Text(t, "40px Verdana", "#000000");		
			title2.textBaseline = "alphabetic";
			title2.alpha = .9;
			title2.x = 60; 
			title2.y = 400;	
			p.info.addChild(title2);
			stage.update();
		}	
		
		
		stage.update();	
		//}


				
		return p;
	}
	
		
	
	
	return app;

	
}(app || {});