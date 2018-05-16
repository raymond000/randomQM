$(document).ready(function(){
  var quote;
  var author;
  function getQuote() {
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
$.getJSON(url, function(data){
  author = data.quoteAuthor;
  quote = data.quoteText;
  $("#quote").html(data.quoteText);
  
  if(author){
    $("#author").html("-" + author); 
  } else {
    author = '-unknow';
    $("#author").text(author);
  }
});
  }
  getQuote();
  $('#newquote').on('click', function(event){
    event.preventDefault();
    getQuote();
  });
  $('#tweet').on('click', function(event) {
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent("'" + quote + "' -" + author ));
  });
});
