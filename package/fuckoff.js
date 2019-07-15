setInterval(function(){ fuckOff() }, 250)

$(window).bind('scroll', function() {
  fuckOff()
});

function fuckOff(){
  //Tweets with spans starting with "Promoted"
  $('span')
  .filter(function(){ return $(this).text().match("^Promoted"); })
  .closest('article')
  .css('display', 'none');

  //Trends with spans starting with "Promoted"
  $('span')
  .filter(function(){ return $(this).text().match("^Promoted"); })
  .closest('div[data-testid="trend"]')
  .css('display', 'none');

  //Who To Follow Users with spans starting with "Promoted"
  $('span')
  .filter(function(){ return $(this).text().match("^Promoted"); })
  .closest('div[data-testid="UserCell"]')
  .css('display', 'none');

  //Tweets with links with spans containing the word "follows" or "follow"
  $('a[href^="/i"]')
  .filter(function(){ return $(this).find('span').text().match(/(follows|follow)/); })
  .closest('article')
  .parent()
  .css('display', 'none');
}
