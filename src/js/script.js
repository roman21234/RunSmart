$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: false,
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron_left_solid_980.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron_right_solid_982.png"></button>',
      });

      $('ul.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function(){
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active')
      });

      function toggleSlide(item) {
        $(item).each(function(i){
          $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        });
      }

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');
      // Modal
      $('[data-modal=consultation]').on('click', function() { // обращение по атрибуду data-modal, действие клика
        $('.overlay, #consultation').fadeIn();                
      })
      $('.modal-1__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut();
      })


      $('.button_catalog').each(function(i){ // 
        $(this).on('click', function(){
          $('#order .modal-1__descr').text($('.catalog-item__subtitle').eq(i).text())
          $('.overlay, #order').fadeIn();
        })
      })

      $('#consultation-form').validate();
      $('#consultation form').validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true,
            
          },
        },
        messages: {
          name: "Пожалуйста, введите свое имя",
          phone: "Пожалуйста, введите свой телефон",
          email: {
            required: "Пожалуйста, введите свою электронную почту",
            email: "Неправильно введен адрес почты"
          }
        }
      });
      $('#order form').validate();

});




