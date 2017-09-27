'use strict';

let app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.hideMain = function () {
    $('main').children().hide();
    $('#about').show();
  }
  app.repoView(app.articleView.initIndexPage)
  module.aboutController = aboutController;
})(app);
