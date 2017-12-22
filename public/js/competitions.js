
$(".astro-image").click(function () {
    $("#main-list").hide();
    $("#astronomy-list").show();
    $('html,body,div').animate({
        scrollTop: $(this).offset().top},
        'slow');
});

$(".coding-image").click(function () {
    $("#main-list").hide();
    $("#coding-list").show();
    $('html,body,div').animate({
        scrollTop: $(this).offset().top},
        'slow');
});

$(".robotics-image").click(function () {
    $("#main-list").hide();
    $("#robotics-list").show();
    $('html,body,div').animate({
        scrollTop: $(this).offset().top},
        'slow');
});

$(".quizzing-image").click(function () {
    $("#main-list").hide();
    $("#quizzing-list").show();
    $('html,body,div').animate({
        scrollTop: $(this).offset().top},
        'slow');
});

$(".literature-image").click(function () {
    $("#main-list").hide();
    $("#literature-list").show();
    $('html,body,div').animate({
        scrollTop: $(this).offset().top},
        'slow');
});

$(".management-image").click(function () {
    $("#main-list").hide();
    $("#management-list").show();
    $('html,body,div').animate({
        scrollTop: $(this).offset().top},
        'slow');
});

$(".back-icon").click(function () {
    $(".back-icon").parent().parent().parent().hide();
    $("#main-list").show();
});


$(".more-details").click(function () {
    next = $(this).find('div.statement').get('0').innerHTML;
    current = $(this).parent().parent().parent().parent();


    mevents.forEach(element => {

        if (element.eventName == next) {
            mevent = element;

        }
    });
    if (mevent != undefined) {
        current.hide();
        $('#clubName').html(mevent.clubName);
        $('#eventName').html(mevent.displayName);
      
        $('#eventDate').html(mevent.eventDate);
        $('#eventVenue').html(mevent.eventVenue);
     
        if (mevent.eventName == 'StartUp Intern Fair') {
            
            $("#judges").text('Registered Statups');

        } else {
          
            $("#judges").text('Judges & Mentors');
        }
        if(mevent.sponsors == null){
            $("#sponsors").hide();
        }else{
            $("#sponsors").show();
        }

        if( mevent.eventFee == null){
            $("#fees").hide();
        }else{
            $("#fees").show();
            $('#eventFee').html(mevent.eventFee);
        }

        if( mevent.prizeWorth == null){
            $("#prizes").hide();
        }else{
            $("#prizes").show();
            $('#prizeWorth').html(mevent.prizeWorth);
        }

        if(mevent.synopsis == null){
            $("#synopsis").hide();
            $('#tab').html(mevent.eventDescription);
            $("#synopsis").parent().removeClass("uk-active");
            $("#description").parent().addClass("uk-active");
        } else {
            $("#synopsis").show();
            $('#tab').html(mevent.synopsis);
            $("#synopsis").parent().addClass("uk-active");
            $("#description").parent().removeClass("uk-active");
        }
        if(mevent.judges == null){
            $("#judges").hide();
            
        }else{
           
            $("#judges").show();
        }

        if(mevent.paymentURL == null){
            $("#payment").hide(); 
        }else{
            $("#payment").show();
        }

        if(mevent.otherURL == null){
            $("#other").hide(); 
        }else{
            $("#other").show();
            $("#oUrl").attr("href", mevent.otherURL);
        }

        if(mevent.rules == null){

           $("#rules").hide();
            
        }else{
            $("#rules").show();
      
        }

        if(mevent.eventDescription == null){

           $("#description").hide();
            
        }else{
            $("#description").show();
      
        }
       
        $("#rules").parent().removeClass("uk-active");
        $("#judges").parent().removeClass("uk-active");
        $("#contact").parent().removeClass("uk-active");
        $("#sponsors").parent().removeClass("uk-active");
        $("#details").show();
    }
    $('html,body,div').animate({
        scrollTop: $(this).offset().top},
        'slow');
});

$("#synopsis").click(function () {
    $("#synopsis").parent().addClass("uk-active");
    $("#description").parent().removeClass("uk-active");
    $("#rules").parent().removeClass("uk-active");
    $("#judges").parent().removeClass("uk-active");
    $("#contact").parent().removeClass("uk-active");
    $("#sponsors").parent().removeClass("uk-active");
    $('#tab').html(mevent.synopsis);
});

$("#description").click(function () {
    $("#synopsis").parent().removeClass("uk-active");
    $("#description").parent().addClass("uk-active");
    $("#rules").parent().removeClass("uk-active");
    $("#judges").parent().removeClass("uk-active");
    $("#contact").parent().removeClass("uk-active");
    $("#sponsors").parent().removeClass("uk-active");
    $('#tab').html(mevent.eventDescription);
});


$("#rules").click(function () {
    $("#synopsis").parent().removeClass("uk-active");
    $("#description").parent().removeClass("uk-active");
    $("#rules").parent().addClass("uk-active");
    $("#judges").parent().removeClass("uk-active");
    $("#contact").parent().removeClass("uk-active");
    $("#sponsors").parent().removeClass("uk-active");
    $('#tab').html(mevent.rules);
});


$("#judges").click(function () {
    $("#synopsis").parent().removeClass("uk-active");
    $("#description").parent().removeClass("uk-active");
    $("#rules").parent().removeClass("uk-active");
    $("#judges").parent().addClass("uk-active");
    $("#contact").parent().removeClass("uk-active");
    $("#sponsors").parent().removeClass("uk-active");
    $('#tab').html(mevent.judges);
});

$("#contact").click(function () {
    $("#synopsis").parent().removeClass("uk-active");
    $("#description").parent().removeClass("uk-active");
    $("#rules").parent().removeClass("uk-active");
    $("#judges").parent().removeClass("uk-active");
    $("#contact").parent().addClass("uk-active");
    $("#sponsors").parent().removeClass("uk-active");
    $('#tab').html(mevent.query);
});

$("#sponsors").click(function () {
    $("#synopsis").parent().removeClass("uk-active");
    $("#description").parent().removeClass("uk-active");
    $("#rules").parent().removeClass("uk-active");
    $("#judges").parent().removeClass("uk-active");
    $("#contact").parent().removeClass("uk-active");
    $("#sponsors").parent().addClass("uk-active");
    $('#tab').html(mevent.sponsors);
});



$(".back-back-icon").click(function () {
    $(".back-back-icon").parent().parent().parent().hide();
    current.show();
});

$('.wonder-away').click(function(){
    
    
    window.location.href='workshops';
    
});