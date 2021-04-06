
/* check if jquery is working */
// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }

/* highlight div on mouse hover */

$(document).ready(function () {
  let data = [
    {
      'name': 'eQTechnologic | Software Engineer ',
      'logo': 'img/yocket.png',
      'content': ["Built the <b>Design Language</b> for the portal; a unified SASS Framework with all the frequently used components, which allowed faster development of components and is used extensively by other developers.", "Developed a CRM internal tool for the Management team which has functionalities to log email, call and text conversations which are used to track the progress and applications of a lead.", "Devised a <b>recommendation system</b> that had the data of the candidates collected over the past 3 years, as a feature vector, which predicted a certain list of universities based on the student profile; Helping the candidate shortlist the schools for their further education", "<b>Technologies Stack :</b> Vue.js, CakePHP, Google Firebase, Git"],
      'duration': 'Jan 2019 - May 2019',
      'link': 'https://yocket.in'
    },
    {
      'name': 'Software Engineer Intern @Senov Tech',
      'logo': 'img/senov.png',
      'content': [
        "Supervised the development of <b>DietKraft – a machine learning dietitian software</b>. DietKraft was a unified application which helped the doctors on their entire process; from managing patients to printing custom diet-charts.",
        "I extracted the nutrition data for 2000+ food items using Beautiful soup to make a food-catalogue which was used to create diet charts, and modeled interface for the patient-dietitian interaction",
        "<b>Technology Stack -</b> Laravel, React.js, Materialize.css."
      ],
      'duration': 'May 2018 - August 2018'
    },
  ]

  $(".item").click(function () {
    let background = $(this).data('color');
    let id = $(this).data('id');
    console.log(background);
    $('.modal-head').text(data[id].name);
    $('.modal-content').text('');
    let animationSpeed = 100;
    if (data[id].gray)
      $('.modal-content').append('<h1 class="dark" uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true; delay: ' + animationSpeed + '">What did I work on?</h1>');
    else
      $('.modal-content').append('<h1 uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true; delay: ' + animationSpeed + '">What did I work on?</h1>');

    animationSpeed += 100;
    $('.modal-content').append('<ul class="uk-list uk-list-bullet">');
    (data[id].content).map((x) => {
      $('.modal-content').append('<li class="content-li" uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true; delay: ' + animationSpeed + '">' + x + '</li>');
      animationSpeed += 100;
    })
    $('.modal-content').append('</ul>');

    // $('.modal-content').text(data[id].content);
    $('.modal-duration').text(data[id].duration);

    $('.modal-color').attr('class', 'uk-background-cover modal-color');
    $('.modal-color').addClass('' + background + '');

    if (data[id].link) {
      $('.modal-link-parent').show();
      $('.modal-link').text(data[id].link);
      $('.modal-link').attr('href', data[id].link);
    }
    else {
      $('.modal-link-parent').hide();
    }

    if (data[id].logo) {
      $('.modal-logo').show();
      $('.modal-logo').attr('src', data[id].logo);
    }
    else {
      $('.modal-logo').hide();
    }


    UIkit.modal('#modal-full').show();
  });

  $("#mhoverleft").hover(function () {
    $("#mhoverleft div").css("visibility", "visible");
  },
    function () {
      $("#mhoverleft div").css("visibility", "hidden");
    })

});
$(document).ready(function () {
  $("#mhoverright").hover(function () {
    $("#mhoverright div").css("visibility", "visible");
  },
    function () {
      $("#mhoverright div").css("visibility", "hidden");
    })

});


/* for slide-in animation */

$(document).ready(function () {

  //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function () {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function () {
    check_if_in_view()
  })
  //trigger our scroll event on initial load
  $(window).trigger('scroll');

});

/* Bootstrap carousal */
$(document).ready(function () {

  // Activate Carousel
  $("#carouselExampleControls").carousel();

  // Enable Carousel Indicators
  $(".item").click(function () {
    $("#carouselExampleControls").carousel(1);
  });

  // Enable Carousel Controls
  $(".left").click(function () {
    $("#carouselExampleControls").carousel("prev");
  });

});



