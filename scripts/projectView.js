'use strict';

var projects = [];


function Project(rawObj) {
  Object.assign(this, rawObj);
  projects.push(this);
}

// need a function that will render the object's data into HTML for one project at a time. This function should probably just belong to the Project prototype.

var rawTemplateHTML = $('#projectTemplate').html();
var actualTemplateFunction = Handlebars.compile(rawTemplateHTML);

Project.prototype.georgeWritesToHTML= function(idx){
  // fill template with this object's data
  var theHTML = actualTemplateFunction(this);
  // append the newly-written html to the DOM
  // if the project's index is a multiple of 3, make a new row
  if (!(idx % 3)) {
    var newRow = $('<div class="row"></div>');
    $('main').append(newRow);
    newRow.append(theHTML);
  } else {
    $('.row:last').append(theHTML);
  }
}

rawData.forEach(function(oneProject, idx){
  var proj = new Project(oneProject);
  proj.georgeWritesToHTML(idx);
});
