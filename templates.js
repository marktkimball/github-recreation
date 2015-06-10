var pullDate = new Date();
var date = pullDate.toISOString();

var templates = {};

templates.topMenu = [
  "<li><img src='<%= avatar_url %>'/></li>",
  "<li><%= login %></li>",
  "<li><span class='octicon octicon-plus'></span><span class='octicon octicon-triangle-down'></span></li>",
  "<li><span class='octicon octicon-inbox'></span></li>",
  "<li><span class='octicon octicon-gear'></span></li>",
  "<li><span class='octicon octicon-sign-out'></span></li>"].join("");

templates.profilePart1 =[
  "<img src='<%= avatar_url %>'/>",
  "<h2><%= name %></h2>",
  "<h4><%= login %></h4>",
  "<div class='locationInfo'>",
  "<span class='octicon octicon-location'></span> <%= location %><br/>",
  "<span class='octicon octicon-clock'></span> <%= created_at %></div>",
  "<div class='userStats'>",
  "<a href='<%= followers_url %>'><span class='stat'><%= followers %></span><br/> Followers</a>",
  "<a href='<%= starred_url %>'><span class='stat'>0</span><br/> Starred</a>",
  "<a href='<%= following_url %>'><span class='stat'><%= following %></span><br/> Following</a></div>"].join("");

templates.profilePart2 =[

].join("");

templates.profilePart3 =[
    "<h3>Organizations</h3><a class = 'avatar' href='<%= url%>'><img src = '<%= avatar_url%>'></a>"
].join("");

templates.repos = [
  "<li><div class = 'individualRepo'><div class ='repoStats'>",
  "<span><%= language %></span>",
  "<a href='#'><span class='octicon octicon-star'></span> <%= stargazers_count %></a>",
  "<a href='#'><span class='octicon octicon-git-branch'></span> <%= forks_count %></a></div>",
  "<a href='<%= html_url %>'>",
  "<h3><%= name %></h3></a>",
  "<p><%= description %></p>",
  "<p>Updated <%= updated_at %> ago</p></div></li>"
].join("");
