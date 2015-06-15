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
    page.loadAndPlaceTemplate("profilePart3", orgsData, $('.profile'));
    page.loadAndPlaceHTMLTemplate($('#activityTemplates'), mappedActivityData, $('.activityList'));
    page.loadAndPlaceHTMLTemplate($('#reposTemplate'), mappedRepoData, $('.repoList'));
  },

  initEvents: function(arguments){
    $('.topOptions').on('click', 'a', page.toggleViews);

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
    _.each(data, function(el){
      tmplString += compiledTmpl(el);
    })
    $target.append(tmplString);
  },

  toggleViews: function(event){
    event.preventDefault();
    if($(this).hasClass('repositories') === true){
      $('.repoTab').addClass('activeElement');
      $('.activityTab').removeClass('activeElement');
    }else if($(this).hasClass('publicActivity') === true){
      $('.repoTab').removeClass('activeElement');
      $('.activityTab').addClass('activeElement');
    }
  }
};
