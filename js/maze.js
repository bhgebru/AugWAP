window.onload= function(){
  $('#start').click(function() {
    startClicked=true;
  });
  $('#end').click(function() {
    startClicked=false;
  });
  let startClicked=false;
/*
    $(".boundary").mouseover(changeBoundary1);
    $(".boundary").mouseover(changeBoundaryPop);
    $("#start").mouseover(start);
 alert("         TEST ONE. Sorry you lose :(");*/

$(function(){
    //$(document).ready();
    
    //console.log("hi");
    //$("#boundary1").mouseover(changeBoundary1);
    //$(".youlose").mouseover(changeBoundary1);
    ////$("#boundery1").mouseleave(changeBoundary1);
    $(".boundary").mouseover(signalBoundary2);
    $(".boundary").mouseover(signalBoundary);
    $("#start").mouseover(start);
    
});
  function start(){
    $("h2").text("Click the \"S\" to begin.");

    $(".boundary").each(function(index, e){
      e = $(e);
      e.removeClass("youlose");
    });
    $("#maze").mouseover(trace);
    $("#end").mouseover(end);
  }

  function trace(){
    $("#maze").mouseleave(signalBoundary2);
    $("#maze").mouseleave(signalBoundary);
  }

  function end(){
    if(! startClicked) {
      return;
    }
    alert("          you win ):");
    $("h2").text("you win ):");
    $("#end").off("mouseover");
    startClicked=false;
  }

  function signalBoundary(){
    if(! startClicked ){
      return;
    }
    alert("          Sorry you lose :(");
    $("h2").text("Sorry you lose :(");
    startClicked=false;
  }

  function signalBoundary2  (){
    $(".boundary").each(function(index, e){
      e = $(e);
      e.addClass("youlose");
    });
    //reset();
  }

};
