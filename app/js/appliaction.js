$(document).ready(function () {
  function generate_news_item(index, item) {
    console.log(index);
      if (index == 0) {
        var newItem = '<div class="news-item-wrapper news-item-big-wrapper"><article class="news-item">';
      } else {
        var newItem = '<div class="news-item-wrapper"><article class="news-item">';
      }
      newItem    += '<div class="news-item-image" style="background-image:url(' + item['medium_image_url'] + ');">';
      newItem    += '</div>'; // closing image div
      newItem    += '<div class="news-item-tag">' + item['rubric'] + '</div>';
      newItem    += '<div class="news-item-description">';
      newItem    += '<div class="news-item-title">'+ item['title'].replace(/\\r\\n/g, "<br>") + '</div>';
      newItem    += '<div class="news-item-text">' + item['announce'].replace(/\\r\\n/g, "<br>") + '</div>';
      newItem    += '<div class="news-item-info">';
      newItem    += '<span class="news-item-views"><i class="icon-eye"></i>' + item['view_count'] + '</span>';
      newItem    += '<span class="news-item-comments"><i class="icon-question"></i>' + item['comment_count'] + '</span>';
      newItem    += '<span class="news-item-clock"><i class="icon-eye"></i>' + jQuery.timeago(item['publish_date']) + '</span>';
      newItem    += '</div>'; // closing info div
      newItem    += '</div>'; // closing description div
      newItem    += '</article></div>'; // closing item div
      $('.news-page').append(newItem);

  }
  $.getJSON('https://api.bcs.ru/express_articles/v1?text_length=text_length&page=page&per_page=5', function(data) {
      jQuery.each(data, generate_news_item);
  });

});