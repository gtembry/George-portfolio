'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos', function (repo){
      repo.map(place => {
        repo.all.push(place);
      })
      callback();
    })
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
