$('.product').each(function(){
    $(this).on('mouseover', function(e){
        var hoverShow = $(this).find('.product-overlay');
        hoverShow.css('display', 'flex');
    });
    $(this).on('mouseout', function(e){
        var hoverHide = $(this).find('.product-overlay');
        hoverHide.css('display', 'none');
    });
});
$('.button-group').each(function(){
    var iconDefault = $(this).find('.icon');
    $(this).on('mouseover', function(e){
        iconDefault.addClass('icon-rjcc--default');
    });
    $(this).on('mouseout', function(e){
        iconDefault.removeClass('icon-rjcc--default');
    });
});
$('#search').click(function(){
    $("#searchContainer").css({'display':'block', 'opacity':'1'});
});
$('.search-close').click(function(){
    $("#searchContainer").css({'display':'none', 'opacity':'0'});
});
// $(window).on('resize', function() {
//     var width = $(window).width();
//     if(width >=767){

//     }
//     else{
//         $('#search').css('display','none');
//     }
// }).resize();