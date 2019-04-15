import * as $ from "jquery";
$(".container-item-service").on("mouseover", function() {
    $(this).find(".info-item-service").hide();
    $(this).find(".btn-show-more").show();
}).on("mouseout", function() {
    $(this).find(".info-item-service").show();
    $(this).find(".btn-show-more").hide();
});

//Catalog
let maxLi = 6;
$('.item-catalog-product').each(function () {
    var quantElem = $(this).find('.names-undercategory').children().length;
    console.log(quantElem);
    if(quantElem > maxLi) $(this).find(".link-show-more").css("display", "flex");
    $(this).find('.names-undercategory').find('li').each(function(index){
        if(index >= maxLi) $(this).hide()
    });
});
$(".item-catalog-product .link-show-more").click(function () {
    var textBtn = $(this).find('span');
    if(textBtn.html() == "Показать еще") textBtn.html("Скрыть");
    else textBtn.html("Показать еще");
    $(this).parent().find('.names-undercategory').find('li').each(function(index){
        if(index >= maxLi) $(this).slideToggle();
    });
});
