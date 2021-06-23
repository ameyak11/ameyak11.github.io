
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
      'name': 'BluAge Corporation | Software Developer Intern ',
      'subtitle':'',
      'logo': '',
      'content': ["Accomplished Digital Transformation of legacy application to modern architecture by transforming, debugging, and testing a high volume of code from COBOL to C\# and AngularJS.",
        "Mentored three new team members to ensure smooth onboarding to the team."
        , "<b>Technologies :</b> CSharp, MySQL, IIS Server, COBOL <br><br><br><br><br><br><br><br><br><br>"],
      'duration': 'Dec 2020 - Present',
      'link': 'https://www.bluage.com/'
    }, {
      'name': 'eQTechnologic | Software Engineer ',
      'subtitle':'',
      'logo': '',
      'content': [" Acquired a critical customer in a short period of 3 months, by developing a connector prototype that achieved data migration, integration, and business intelligence use cases for Oracle Agile PLM For Process Application.",
        "Automated data model generation, by implementing recursive parsing algorithms to achieve extensible code and reduction in development time.",
        "Implemented data integration and migration use cases for connectors to large - scale enterprise applications like Siemens Teamcenter, PTC Windchill, and Microsoft 365 Sharepoint by integrating REST API to achieve data transformation."
        , "<b>Technologies :</b> Java, JUnit, CSharp, MySQL, Tomcat"],
      'duration': 'July 2017 - Dec 2019',
      'link': 'https://www.1eq.com/'
    }, {
      'name': 'GarageBot | Android Dev',
      'subtitle':'Digital Assistant for Vehicle Service Stations ',
      'logo': '',
      'content': ["Designed and developed the entire Android Front-End infrastructure which reduces job card management time by 50\%, resulting in a 10\% rise in revenue, and is actively used by over 300 vehicle service stations daily.",
        "Increased application speed and availability, by implementing a caching and synchronization framework to reduce API calls by over 50\%, resulting in a rise in customers for the product."
        , "<b>Technologies :</b> Java, Android, SQLite <br><br><br><br><br><br><br><br><br><br>"],
      'duration': 'June 2017 – June 2019',
      'link': 'https://garagebot.in/html/'
    }, {
      'name': 'Database Implementation | Academic project',
      'subtitle':'SQL Database implementation based on SQLite specification',
      'logo': '',
      'content': ["Implemented BTree based SQL database query parser and query execution engine.",
        "Achieved execution of basic DDL and DML commands through command line interface by implementing relational database file management as per SQLite Database Specifications."
        , "<b>Technologies :</b> Java, SQLite <br><br><br><br><br><br><br><br><br><br>"],
      'duration': 'Jan 2020 – May 2020',
      'link': 'https://github.com/ameyak11/dbimplementation'
    } , {
      'name': 'English - Hindi Translator | Machine Learning project',
      'subtitle':'Convert text in English language to Hindi Language',
      'logo': '',
      'content': ["Developed RNN based LSTM Encoder-Decoder Translation model, compared it with existing open-source models, and achieved a cross-entropy error of 0.015 over the selected test dataset."
        , "<b>Technologies :</b> Python, Keras, Pandas <br><br><br><br><br><br><br><br><br><br>"],
      'duration': 'Jan 2020 – May 2020',
      'link': 'https://github.com/ameyak11/machinetranslationmodel/'
    }, {
      'name': 'Morris Game | AI project',
      'subtitle':'Aplha-Beta pruning based Morris Game Player',
      'logo': '',
      'content': ["Developed a minimax and aplha beta pruning based bot which takes a game state as input and outputs the best possible next state"
        , "<b>Technologies :</b> Java <br><br><br><br><br><br><br><br><br><br>"],
      'duration': 'May 2020 – Aug 2020',
      'link': 'https://github.com/ameyak11/MorrisGamePlayer'
    },{
      'name': 'Varta (Smart News) | Award Winning ML Project',
      'subtitle':'Sentence extraction based news article summary generator',
      'logo': '',
      'content': ["Designed and implemented the entire data pipeline using flask to feed news article input to the NLP model that summarized the article with 64% accuracy."
        ,"Achieved personalized news feed by implementing a news recommendation system based on user profile and user activity through an Android application front end."  
        ,"State level 'Best Project Award' by ISSRD."
        ,"Second runner up in AI at National IEEE symposium."
        , "<b>Technologies :</b> Python, Python Flask, BeautifulSoup4, Celery, MongoDB <br><br><br><br><br><br><br>"],
      'duration': 'June 2016 – June 2017',
      'link': 'https://github.com/ameyak11/textsummarizer/'
    } , {
      'name': 'Creative Prims | Fun project',
      'subtitle':'Maze generation using prims algorithm',
      'logo': '',
      'content': ["This was a fun project to illustrate maze generation by tweaking prims algorithm"
        , "<b>Technologies :</b> Python <br><br><br><br><br><br><br><br><br><br>"],
      'duration': '',
      'link': 'https://github.com/ameyak11/Creative-prims'
    }
    

  ]

  $(".item").click(function () {
    let background = $(this).data('color');
    let id = $(this).data('id');
    console.log(background);
    $('.modal-head').text(data[id].name);
    $('.modal-content').text('');
    let animationSpeed = 100;
    if (data[id].gray)
      $('.modal-content').append('<h2 class="dark" uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true; delay: ' + animationSpeed + '">My Contribution</h2>');
    else
      $('.modal-content').append('<h2 uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true; delay: ' + animationSpeed + '">My Contribution</h2>');

    animationSpeed += 100;
    $('.modal-content').append('<ul class="uk-list uk-list-bullet">');
    (data[id].content).map((x) => {
      $('.modal-content').append('<li class="content-li" uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true; delay: ' + animationSpeed + '">' + x + '</li>');
      animationSpeed += 100;
    });
    $('.modal-content').append('</ul>');

    $('.modal-subtitle').text(data[id].subtitle);
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



