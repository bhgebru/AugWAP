/*jshint esversion: 6 */

$(function () {
    "use strict";
    $('#txtWidth').on('change',changedWidth);
    $('#start').on('click', grow);
    $('#txtGrowAmount').on('change', growSizeChanged);
     function changedNOTCircles() {
        let num = parseInt($('#txtNoCircles').val());
        $('.circle').remove();
        for (let i = 0; i < num; i++) {
            $('#footer').append($('<div>', {
                'class': 'circle',
                'css': {
                    'background-color': "#" + ((1 << 24) * Math.random() | 0).toString(16),
                    'top': i * 25 + 'px', 'left': i * 20 + 'px'
                }
            }));
        }
    }   
    let growSize = 10;
    let growthSpeed = 250;
    let timerID = null;
    let initialWidth = 50;

    function removeCircle() {
        $(this).hide();
    }

    function showCircle() {
        $('.circle')
            .css({'width': initialWidth + 'px', 'height': initialWidth + 'px'})
            .show();
    }
    
    function grow() {
        showCircle();
        if (timerID) {
            clearInterval(timerID);
            timerID = null;
        }
        timerID = setInterval(circleGrowWith, growthSpeed, growSize);
    }
    
    function changedWidth() {
        initialWidth = parseInt($('#txtWidth').val());
        grow();
    }

    function growSizeChanged() {
        growSize = parseInt($('#txtGrowAmount').val());
        grow();
    }

    function circleGrowWith(x) {
        const circle = $('.circle');
        circle.css({
            'width': parseInt(circle.css("width")) + x + 'px',
            'height': parseInt(circle.css("height")) + x + 'px'
        });
    }
    changedNOTCircles();
    $('#txtGrowRate').on('change', changedGrowthRate);
    $('#footer').on("click", 'div', removeCircle);       
    $('#txtNoCircles').on('change', changedNOTCircles); 
    function changedGrowthRate() {
        growthSpeed = parseInt($('#txtGrowRate').val());
        grow();
    }



});
