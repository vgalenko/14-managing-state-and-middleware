'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT/DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // invoked from aboutController.js, it's making a get request to the github api which will send back (hopefully) a .json full repos according to whomever's GITHUB_TOKEN is stored in the computer or in heroku,
  // fun fact, before that happens, it needs to go through the proxyGitHub middleware before it can retrieve the data.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
