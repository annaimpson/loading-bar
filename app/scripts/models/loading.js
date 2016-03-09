var Backbone = require('backbone');
var $ = require('jquery');

var LoadingModel = Backbone.Model.extend({
  // defaults: {
  //   'submit-button': 'Submit'
  // },
  // initialize: function(){
  //   $('.submit-button').html('Loading...');
  // }
});

var LoadingCollection = Backbone.Collection.extend({
  model: LoadingModel,
  url: 'http://swapi.co/api/people/',
  parse: function(data){
    return data.results;
  }
});

module.exports = {
  LoadingModel: LoadingModel,
  LoadingCollection: LoadingCollection
};
