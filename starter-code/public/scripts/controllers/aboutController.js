'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT/DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  // First of all it lives and called inside a repo.js file
  // Its hiding everything except the about section
  // app.repoView.index is being invoked as a callback
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
