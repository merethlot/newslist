$(document).ready(function () {
  function generate_news_item(index, item) {
    console.log(item);
      // var newItem = document.createElement('<div />', {'class': "news-item"});
      // newItem.textContent = item['title'];
      var newItem = '<div class="news-item">';
      newItem    += '<div class="news-item-image" style="background:url(' + item['big_image_url'] + ');">';
      newItem    += '<div class="news-item-tag">' + item['rubric'] + '</div>';
      newItem    += '</div>' // closing image div
      newItem    += '<div class="news-item-heading">'+ item['title'] + '</div>';
      newItem    += '<div class="news-item-description"><div class="news-item-text">' + item['announce'] + '</div>';
      newItem    += '<div class="news-item-info">' + '</div>';
      newItem    += '</div>' // closing description div
      newItem    += '</div>' // closing item div
      $('.news-page').append(newItem);

  }
  $.getJSON('https://api.bcs.ru/express_articles/v1?text_length=text_length&page=page&per_page=per_page', function(data) {
      console.log(data);
      jQuery.each(data, generate_news_item);
  });

});