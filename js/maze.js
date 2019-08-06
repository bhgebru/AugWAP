window.onload= function(){
  $('#start').click(function() {
    startClicked=true;
  });
  $('#end').click(function() {
    startClicked=false;
  });
    alert("         STAAAART. Sorry you lose :(");
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
    $(".boundary").mouseover(changeBoundary1);
    $(".boundary").mouseover(changeBoundaryPop);
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
    $("#maze").mouseleave(changeBoundary1);
    $("#maze").mouseleave(changeBoundaryPop);
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

  function changeBoundaryPop(){
    if(! startClicked ){
      return;
    }
    alert("          Sorry you lose :(");
    $("h2").text("Sorry you lose :(");
    startClicked=false;
  }

  function changeBoundary1(){
    $(".boundary").each(function(index, e){
      e = $(e);
      e.addClass("youlose");
    });
    //reset();
  }

};
