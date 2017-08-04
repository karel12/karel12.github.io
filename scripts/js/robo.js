// morphing-yes
var button1 = document.querySelector(".rr1 #button"),
    button2 = document.querySelector(".rr2 #buttonn");

TweenMax.set("#r-2", {
  visibility: "visible"
});

TweenMax.set(".clock", {
  opacity: 0
});

function morphYes() {
  var tl = new TimelineMax();
  
  tl.to(".demoOverlay.demo1-1", 0.2, {opacity:0,  ease:Sine.easeIn});
  tl.to(button1, 0.2, {scale:1.2, opacity:0.2, fill:"hsl(+=0, +=50%, +=0)", transformOrigin: "50% 50%", ease:Power3.easeOut});
  tl.to(button1, 0.3, {scale:1, opacity:1, fill:"hsl(+=0, +=0, +=0)", transformOrigin: "50% 50%", ease:Power3.easeOut});

  tl.add("begin");
  tl.to(".rr1 #fake_text-3", 0.1, {opacity:0, scale:0, ease:Sine.easeIn}, "begin");
  tl.staggerFromTo(".rr1 #rachel_smith path", 0.1, {opacity:0, scale:0, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Sine.easeOut}, 0.07, "begin+=0.2");
  tl.fromTo(".rr1 #hr", 0.4, {opacity:0, scale:0.9, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Power3.easeIn}, "begin+=0.2");
  
  tl.fromTo(".rr1 #top_text", 0.4, {opacity:0, scale:0.9, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Power3.easeIn}, "begin+=0.2");
  tl.to(".rr1 #input_field-3", 0.4, {morphSVG:{shape:"#top_text-2"}, fill: "#cdd1d4", stroke: "none", ease:Linear.easeNone},  "begin+=0.2");
  
  tl.to(".rr1 #fake_text-2", 0.4, {opacity:0, scale:0.9, transformOrigin:"50% 50%", ease:Power3.easeIn}, "begin+=0.2");
  tl.to(".rr1 #input_field-2", 0.4, {morphSVG:{shape:"#fake_text-6"}, fill: "#cdd1d4", stroke: "none", ease:Linear.easeNone},  "begin+=0.2");
  
  tl.fromTo(".rr1 #fake_text-5", 0.4, {opacity:0, scale:0.9, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Power3.easeIn}, "begin+=0.2");
  
    tl.to(".rr1 #fake_text", 0.4, {opacity:0, scale:0.9, transformOrigin:"50% 50%", ease:Power3.easeIn}, "begin+=0.2");
  tl.to(".rr1 #input_field", 0.4, {morphSVG:{shape:"#fake_text-4"}, fill: "#cdd1d4", stroke: "none", ease:Linear.easeNone},  "begin+=0.2");
  
  //button
  tl.to(button1, 0.2, {scale:1.2, opacity:0.2, fill:"hsl(+=0, +=50%, +=0)", transformOrigin: "50% 50%", ease:Power3.easeOut}, "begin+=1.5");
  tl.to(button1, 0.3, {scale:1, opacity:1, fill:"hsl(+=0, +=0, +=0)", transformOrigin: "50% 50%", ease:Power3.easeOut}, "begin+=1.7");
  tl.to(".demoOverlay.demo1-1", 0.4, {opacity:0.97, ease:Sine.easeOut});
  
  return tl;
}

//create a timeline but initially pause it so that we can control it via click
var morphYesPlay = new TimelineMax({
  paused: true
});
morphYesPlay.add(morphYes());

//this button kicks off
$(".demo1-1").on("click", function(e) {
  e.preventDefault();
  morphYesPlay.restart();
});

// morphing-no

TweenMax.set("#r-2n", {
  visibility: "visible"
});

TweenMax.set("#input_field-3n, #input_field-2n, #input_fieldn", {
  transformStyle:"preserve-3d", transformPerspective:200
});

function morphNo() {
  var tl = new TimelineMax();
  
  tl.to(".demoOverlay.demo1-2", 0.2, {opacity:0,  ease:Sine.easeIn});
  tl.to(button2, 0.2, {scale:1.2, opacity:0.2, fill:"hsl(+=0, +=50%, +=0)", transformOrigin: "50% 50%", ease:Power3.easeOut});
  tl.to(button2, 0.3, {scale:1, opacity:1, fill:"hsl(+=0, +=0, +=0)", transformOrigin: "50% 50%", ease:Power3.easeOut});

  tl.add("begin2");
  tl.to(".rr2 #fake_text-3n", 0.1, {opacity:0, scale:0, ease:Sine.easeIn}, "begin2");
  tl.staggerFromTo(".rr2 #rachel_smithn path", 0.1, {opacity:0, scale:0, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Sine.easeOut}, 0.07, "begin2+=0.2");
  tl.fromTo(".rr2 #hrn", 0.4, {opacity:0, scale:0.9, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Power3.easeIn}, "begin2+=0.2");
  
  tl.fromTo(".rr2 #top_textn", 0.4, {opacity:0, scale:0.9, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Power3.easeIn}, "begin2+=0.2");
  tl.to("#input_field-3n", 0.4, {morphSVG:{shape:"#top_text-2n"}, fill: "#cdd1d4", stroke: "none", rotationY:180, ease:Back.easeOut}, "begin2+=0.2");
  
  tl.to("#fake_text-2n", 0.4, {opacity:0, scale:0.9, transformOrigin:"50% 50%", ease:Power3.easeIn}, "begin2+=0.2");
  tl.to("#input_field-2n", 0.4, {morphSVG:{shape:"#fake_text-6n"}, fill: "#cdd1d4", stroke: "none", rotationY:180, ease:Back.easeOut}, "begin2+=0.2");
  
  tl.fromTo(".rr2 #fake_text-5n", 0.4, {opacity:0, scale:0.9, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Power3.easeIn}, "begin2+=0.2");
  
    tl.to(".rr2 #fake_textn", 0.4, {opacity:0, scale:0.9, transformOrigin:"50% 50%", ease:Power3.easeIn}, "begin2+=0.2");
  tl.to("#input_fieldn", 0.4, {morphSVG:{shape:"#fake_text-4n"}, fill: "#cdd1d4", stroke: "none", rotationY:180, ease:Back.easeOut},  "begin2+=0.2");
  
  //button
  tl.to(button2, 0.2, {scale:1.2, opacity:0.2, fill:"hsl(+=0, +=50%, +=0)", transformOrigin: "50% 50%", ease:Power3.easeOut}, "begin2+=1.5");
  tl.to(button2, 0.3, {scale:1, opacity:1, fill:"hsl(+=0, +=0, +=0)", transformOrigin: "50% 50%", ease:Power3.easeOut}, "begin2+=1.7");
  tl.to(".demoOverlay.demo1-2", 0.4, {opacity:0.97, ease:Sine.easeOut});
  
  return tl;
}

//create a timeline but initially pause it so that we can control it via click
var morphNoPlay = new TimelineMax({
  paused: true
});
morphNoPlay.add(morphNo());

//this button kicks off
$(".demo1-2").on("click", function(e) {
  e.preventDefault();
  morphNoPlay.restart();
});


// context-yes

TweenMax.set(".house", {
  visibility: "visible"
});

function contextYes() {
  var tl = new TimelineMax();
  
  tl.to(".demoOverlay.demo2-1", 0.2, {opacity:0,  ease:Sine.easeIn});
  tl.add("begin3", "+=0.3");
  tl.to(".markerPrimary.m1", 0.15, {background: "white", borderRadius:2, width:200, height:65, marginTop:-22, borderColor: "#ddd", ease:Sine.easeOut}, "begin3");
  tl.to(".markerstem", 0.3, {background: "white", width:8, height:8, borderColor: "#ddd", ease:Sine.easeOut}, "begin3");
  tl.to(".movet1", 0.3, {color: "#3b4144", y:-45, x:10, ease:Sine.easeOut}, "begin3");
  tl.staggerFromTo(".house path", 0.4, {drawSVG:"0%", opacity:0, scale:0.95, transformOrigin:"50% 50%"}, {drawSVG:"100%", opacity:1, scale:1, transformOrigin:"50% 50%", ease:Sine.easeOut}, 0.01, "begin3+=0.1");
  tl.fromTo(".houseBk", 0.3, {opacity: 0}, {opacity:1, ease:Sine.easeOut}, "begin3+=0.1");
  tl.fromTo(".bar1", 0.3, {opacity: 0}, {opacity:1, ease:Sine.easeOut}, "begin3+=0.2");
  tl.fromTo(".bar2", 0.3, {opacity: 0}, {opacity:1, ease:Sine.easeOut}, "begin3+=0.3");
  tl.to(".demoOverlay.demo2-1", 0.4, {opacity:0.97, ease:Sine.easeOut}, "begin3+=1.5");
  
  return tl;
}

//create a timeline but initially pause it so that we can control it via click
var contextYesPlay = new TimelineMax({
  paused: true
});
contextYesPlay.add(contextYes());

//this button kicks off
$(".demo2-1").on("click", function(e) {
  e.preventDefault();
  contextYesPlay.restart();
});


// context-no

function contextNo() {
  var tl = new TimelineMax();
  
  tl.to(".demoOverlay.demo2-2", 0.2, {opacity:0,  ease:Sine.easeIn});
  tl.add("begin4", "+=0.3");
  tl.fromTo(".house2", 0.1, {display:"none"}, {display:"block", ease:Linear.easeNone}, "begin4");
  tl.fromTo(".fakemodal", 0.1, {display:"none"},{display:"block", ease:Linear.easeNone}, "begin4");
  tl.to(".demoOverlay.demo2-2", 0.4, {opacity:0.97, ease:Sine.easeOut}, "begin4+=1.25");
  tl.to(".house2", 0.1, {display:"none", ease:Linear.easeNone}, "begin4+=3");
  tl.to(".fakemodal", 0.1, {display:"none", ease:Linear.easeNone}, "begin4+=3");
  
  return tl;
}

//create a timeline but initially pause it so that we can control it via click
var contextNoPlay = new TimelineMax({
  paused: true
});
contextNoPlay.add(contextNo());

//this button kicks off
$(".demo2-2").on("click", function(e) {
  e.preventDefault();
  contextNoPlay.restart();
});


// entrance-yes

function entranceYes() {
  var tl = new TimelineMax();
  
  tl.to(".demoOverlay.demo3-1", 0.2, {opacity:0,  ease:Sine.easeIn});
  tl.add("begin5", "+=0.3");
  tl.staggerFromTo(".charts g", 0.5, {opacity:0, scale:0.9, transformOrigin:"50% 50%", rotation:50}, {opacity:1, scale:1, transformOrigin:"50% 50%", rotation:0, ease:Sine.easeOut}, 0.1, "begin5");
  tl.staggerFromTo("#bbone", 0.5, {opacity:0, scale:0.9, transformOrigin:"50% 0%"}, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Sine.easeOut}, 0.1, "begin5");
  tl.staggerFromTo("#bbtwo", 0.5, {opacity:0, scale:0.9, transformOrigin:"50% 0%"}, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Sine.easeOut}, 0.1, "begin5+=0.1");

  tl.to(".demoOverlay.demo3-1", 0.4, {opacity:0.97, ease:Sine.easeOut}, "begin5+=1.25");
  
  return tl;
}

//create a timeline but initially pause it so that we can control it via click
var entranceYesPlay = new TimelineMax({
  paused: true
});
entranceYesPlay.add(entranceYes());

//this button kicks off
$(".demo3-1").on("click", function(e) {
  e.preventDefault();
  entranceYesPlay.restart();
});


// entrance-no

function entranceNo() {
  var tl = new TimelineMax();
  
  tl.to(".demoOverlay.demo3-2", 0.2, {opacity:0,  ease:Sine.easeIn});
  tl.add("begin6", "+=0.3");
  tl.staggerFromTo(".charts2 g", 0.5, {opacity:0, scale:0, transformOrigin:"50% 50%", rotation:500}, {opacity:1, scale:1, transformOrigin:"50% 50%", rotation:0, ease:Bounce.easeOut}, 0.1, "begin6");
  tl.staggerFromTo("#bbone2", 0.5, {opacity:0, scale:0, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Elastic.easeOut}, 0.1, "begin6");
  tl.staggerFromTo("#bbtwo2", 0.5, {opacity:0, scale:0, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Elastic.easeOut}, 0.1, "begin6+=0.1");

  tl.to(".demoOverlay.demo3-2", 0.4, {opacity:0.97, ease:Sine.easeOut}, "begin6+=1.25");
  
  return tl;
}

//create a timeline but initially pause it so that we can control it via click
var entranceNoPlay = new TimelineMax({
  paused: true
});
entranceNoPlay.add(entranceNo());

//this button kicks off
$(".demo3-2").on("click", function(e) {
  e.preventDefault();
  entranceNoPlay.restart();
});


// dev-yes

function devYes() {
  var tl = new TimelineMax();
  
  tl.to(".demoOverlay.demo4-1", 0.2, {opacity:0,  ease:Sine.easeIn});
  tl.to(".devYesStart", 0.05, {opacity:0.9, background:"#ff7857", borderColor:"#ff7857", scale:1.15, transformOrigin:"50% 50%", ease:Sine.easeOut}, "+=0.75");
  tl.to(".devYesStart", 0.1, {opacity:0, scale:1, transformOrigin:"50% 50%", ease:Sine.easeIn}, "+=0.1");
  tl.fromTo(".dev-yes", 0.1, {opacity:0}, {opacity:1, ease:Sine.easeOut}, "+=0.1");
  tl.add("begin7");
  tl.staggerFromTo("#washer", 0.5, {opacity:0, scale:0.9, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.1, "begin7");
  tl.staggerFromTo("#wind", 0.5, {opacity:0, scale:0.9, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.1, "begin7+=0.1");
  tl.staggerFromTo("#house", 0.5, {opacity:0, scale:0.9, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.1, "begin7+=0.2");
  tl.staggerFromTo("#bars1 path", 0.5, {opacity:0, scale:0, transformOrigin:"0% 50%"}, {opacity:1, scale:1, transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.1, "begin7");
  tl.staggerFromTo("#bars2 path", 0.5, {opacity:0, scale:0, transformOrigin:"0% 50%"}, {opacity:1, scale:1, transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.1, "begin7+=0.2");
  tl.staggerFromTo("#bars3 path", 0.5, {opacity:0, scale:0, transformOrigin:"0% 50%"}, {opacity:1, scale:1, transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.1, "begin7+=0.4");
  tl.staggerFromTo("#percent text", 0.5, {opacity:0, transformOrigin:"0% 50%"}, {opacity:1,  transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.15, "begin7+=0.2");
  tl.staggerFromTo("#text path", 0.5, {opacity:0, transformOrigin:"0% 50%"}, {opacity:1,  transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.15, "begin7");

  tl.to(".demoOverlay.demo4-1", 0.4, {opacity:0.97, ease:Sine.easeOut}, "begin7+=2.25");
  
  //tl.timeScale(1.2);
  
  return tl;
}

//create a timeline but initially pause it so that we can control it via click
var devYesPlay = new TimelineMax({
  paused: true
});
devYesPlay.add(devYes());

//this button kicks off
$(".demo4-1").on("click", function(e) {
  e.preventDefault();
  devYesPlay.restart();
});


// dev-no

function devNo() {
  var tl = new TimelineMax();
  
  tl.to(".demoOverlay.demo4-2", 0.2, {opacity:0,  ease:Sine.easeIn});
  tl.to(".devNoStart", 0.05, {opacity:0.9, background:"#ff7857", borderColor:"#ff7857", scale:1.15, transformOrigin:"50% 50%", ease:Sine.easeOut}, "+=0.75");
  tl.to(".devNoStart", 0.1, {opacity:0, scale:1, transformOrigin:"50% 50%", ease:Sine.easeIn}, "+=0.1");
  tl.add("begin8", "+=1");
  tl.fromTo(".dev-no", 0.1, {opacity:0}, {opacity:1, ease:Sine.easeOut}, "begin8");
  tl.staggerFromTo("#washern", 0.5, {opacity:0, scale:0.9, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.1, "begin8");
  tl.staggerFromTo("#windn", 0.5, {opacity:0, scale:0.9, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.1, "begin8+=0.1");
  tl.staggerFromTo("#housen", 0.5, {opacity:0, scale:0.9, transformOrigin:"50% 50%"}, {opacity:1, scale:1, transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.1, "begin8+=0.2");
  tl.staggerFromTo("#bars1n path", 0.5, {opacity:0, scale:0, transformOrigin:"0% 50%"}, {opacity:1, scale:1, transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.1, "begin8");
  tl.staggerFromTo("#bars2n path", 0.5, {opacity:0, scale:0, transformOrigin:"0% 50%"}, {opacity:1, scale:1, transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.1, "begin8+=0.2");
  tl.staggerFromTo("#bars3n path", 0.5, {opacity:0, scale:0, transformOrigin:"0% 50%"}, {opacity:1, scale:1, transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.1, "begin8+=0.4");
  tl.staggerFromTo("#percentn text", 0.5, {opacity:0, transformOrigin:"0% 50%"}, {opacity:1,  transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.15, "begin8+=0.2");
  tl.staggerFromTo("#textn path", 0.5, {opacity:0, transformOrigin:"0% 50%"}, {opacity:1,  transformOrigin:"0% 50%", ease:Sine.easeOut}, 0.15, "begin8");

  tl.to(".demoOverlay.demo4-2", 0.4, {opacity:0.97, ease:Sine.easeOut}, "begin8+=2.25");
  
  //tl.timeScale(1.2);
  
  return tl;
}

//create a timeline but initially pause it so that we can control it via click
var devNoPlay = new TimelineMax({
  paused: true
});
devNoPlay.add(devNo());

//this button kicks off
$(".demo4-2").on("click", function(e) {
  e.preventDefault();
  devNoPlay.restart();
});

$(function() {
  var wrapper = $("#wrapper"),
    $menu = $("nav");

  $menu.on("click", "a", function() {
    var $this = $(this),
      href = $this.attr("href"),
      topY = $(href).offset().top;

    TweenMax.to($(window), 1, {
      scrollTo: {
        y: topY,
        autoKill: true
      },
      ease: Power3.easeOut
    });

    return false;
  });
});