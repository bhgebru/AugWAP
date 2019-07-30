/*jshint esversion: 6 */
"use strict";
/*
var myTimer= null;
var SpeedType= {
  TURBO: 500,
  NORMAL: 1000
}
var SizeType= {
  Tiny: "6px",
  Small: "9px",
  Medium: "12px",
  Large: "15px",
  XL: "18px",
  XXL: "21px",
}
function getTrackArray() {
  var animationSelected= getUserSelection().animation;
  var resultStr= ANIMATIONS[animationSelected];
}
function doAnimation() {
  sizeCanvas();
}
function sizeCanvas() {
  var canvas= getCanvas();
  var selections= getUserSelection();
  var sizeSelected= selections.size;
  canvas.style.fontSize= SizeType[sizeSelected];
}
function getCanvas() {
  return getMeElementIded('text-area');
}
function getMeElementIded(elemName) {
  return document.getElementById(elemName);
}
function testMethod() {
  window.alert('just testing');
}
function getUserSelection() {
  var turboCh= getMeElementIded('turbo');
  var fontSizeSel= getMeElementIded('fontsize');
  var animationSel= getMeElementIded('animation');
  var selection= {
    animation: animationSel.value,
    size: fontSizeSel.value,
    turbo: turboCh.value
  };
  return selection;
}
window.onload=function(){
  var turboCh= getMeElementIded('turbo');
  turboCh.onchange= function () {

  };
  var fontSizeSel= getMeElementIded('fontsize');
  fontSizeSel.onchange= function () {
    //fontSizeSel.value;
  };
  var animationSel= getMeElementIded('animation');
  animationSel.onchange= function () {

  };
  var stopBtn= getMeElementIded('stop');

  stopBtn.onclick= function () {
    //window.alert('end clicked');
    this.disabled=true;
    startBtn.disabled=false;
  };
  var startBtn= getMeElementIded('start');
  startBtn.onclick=function () {
    stopBtn.disabled=false;
    this.disabled=true;
  };

};
*/
