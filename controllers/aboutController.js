'use strict';

let app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.hideMain = function () {
    $('main').children().hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(app);
