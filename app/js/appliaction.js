$(document).ready(function () {
  function generate_news_item(item) {
    console.log('ok!');
      var newItem = document.createElement('<div />', {'class': "news-item"});
      newItem.textContent = item['title'];
      $('.news-list').append(newItem);

  }
  $.getJSON('https://api.bcs.ru/express_articles/v1?text_length=text_length&page=page&per_page=per_page', function(data) {
      // console.log(data);
      jQuery.each(data, generate_news_item);
  });

});