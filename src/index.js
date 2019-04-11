import * as $ from 'jquery';
import Swiper from 'swiper';
require('./styles/index.scss');
require('./styles/plugins.scss');
require('normalize.css');

$(document).ready(function () {
    var InfoSlider = new Swiper ('.info-slider', {
        loop: true,
        navigation: {
            nextEl: '.info-slider-button-next',
            prevEl: '.info-slider-button-prev',
        },
        grabCursor: true,
        pagination: {
            el: '.info-slider-pagination',
            clickable: true
        }
    });
    var CatalogItemsSlider = new Swiper ('.container-catalog-products', {
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
            nextEl: '.catalog-button-next',
            prevEl: '.catalog-button-prev',
        },
    });
    var PartnerSlider = new Swiper ('.partner-slider', {
        slidesPerView: 5,
        navigation: {
            nextEl: '.partner-button-next',
            prevEl: '.partner-button-prev',
        },
    });

    $(".container-item-service").on("mouseover", function() {
       $(this).find(".info-item-service").hide();
       $(this).find(".btn-show-more").show();
    })
    $(".container-item-service").on("mouseout", function() {
        $(this).find(".info-item-service").show();
        $(this).find(".btn-show-more").hide();
    });
});
