var $ = require ('jquery');
window._ = require('underscore');
var handlebars = require('handlebars');
var models = require('./models/loading');

var submitButton = new models.LoadingCollection();

  $('.submit-button').on('click', function(){
    console.log('clicked');
    $('.submit-button').html('Loading...');
    $('.submit-button').prop('disabled', true);
    submitButton.fetch().done(function(){
      submitButton.each(function(people){
        console.log(people.get('name'));
        $('.submit-button').html('Submit');
        $('.submit-button').prop('disabled', false);
      });
    });
  });
