$(document).ready(function(){

  page.init();

});

var page = {
  init: function(arguments){
    page.initStyling();
    page.initEvents();
  },

  initStyling: function(arguments){
    page.loadAndPlaceTemplate("topMenu", userData, $('.topMenuUser'));
    page.loadAndPlaceTemplate("profilePart1", userData, $('.profile'));
    // page.loadAndPlaceTemplate("profilePart2", repoData, $('.profile'));
    page.loadAndPlaceTemplate("profilePart3", orgsData, $('.profile'));
    page.loadAndPlaceTemplate("repos", repoData, $('.repoList'));
    page.loadAndPlaceHTMLTemplate($('#activityTemplates'), mappedActivityData, $('.activityList'));
  },

  initEvents: function(arguments){
    $('.mainContentMenu').on('click', 'a', page.toggleViews);

  },

  loadAndPlaceTemplate: function(tmplName, data, $target){
    var compiledTmpl = _.template(templates[tmplName]);
    var tmplString = "";
    data.forEach(function(el){
      tmplString += compiledTmpl(el);
    })
    $target.append(tmplString);
  },

  loadAndPlaceHTMLTemplate: function(tmplName, data, $target){
    var compiledTmpl = _.template($(tmplName).html());
    var tmplString = "";
    data.forEach(function(el){
      tmplString += compiledTmpl(el);
    })
    $target.append(tmplString);
  },
  toggleViews: function(event){
    $('.repoTab').toggleClass('activeElement');
    $('.activityTab').toggleClass('activeElement');
  }
};
