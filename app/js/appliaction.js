$(document).ready(function () {
  var loadCount = 0;
  function kFormatter(num) {
      return num > 999 ? (num/1000).toFixed(1) + 'K' : num
  }
  function generate_news_item(index, item) {
      var newItem = '';
      if ((loadCount % 2 == 1 && index == 0) || (loadCount % 2 == 0 && index == 1)) {
        newItem  += '<div class="news-item-wrapper news-item-big-wrapper"><article class="news-item">';
        newItem  += '<div class="news-item-image" style="background-image:url(' + item['big_image_url'] + ');">';
      } else {
        newItem  += '<div class="news-item-wrapper"><article class="news-item">';
        newItem  += '<div class="news-item-image" style="background-image:url(' + item['medium_image_url'] + ');">';
      }
      newItem    += '</div>'; // closing image div
      newItem    += '<div class="news-item-tag tag-type-' + item['type'] + '">' + item['rubric'] + '</div>';
      newItem    += '<div class="news-item-description">';
      newItem    += '<div class="news-item-title"><a href="' + item['article_url'] + '">' + item['title'].replace(/\\r\\n/g, "<br>") + '</a></div>';
      newItem    += '<div class="news-item-text">' + item['announce'].replace(/\\r\\n/g, "<br>") + '</div>';
      newItem    += '<div class="news-item-info">';
      newItem    += '<span class="news-item-views"><i class="icon-eye"></i>' + kFormatter(item['view_count']) + '</span>';
      newItem    += '<span class="news-item-comments"><i class="icon-question"></i>' + item['comment_count'] + '</span>';
      newItem    += '<span class="news-item-clock"><i class="icon-clock"></i>' + jQuery.timeago(item['publish_date']) + '</span>';
      newItem    += '</div>'; // closing info div
      newItem    += '</div>'; // closing description div
      newItem    += '</article></div>'; // closing item div
      $('.news-page').append(newItem);

  }
  function get_news_list () {
    var text_length = 50,
        per_page    = 5,
        page        = loadCount + 1;
    $.getJSON('https://api.bcs.ru/express_articles/v1', {
      text_length: text_length,
      per_page:    per_page,
      page:        page
    }, function(data) {
        loadCount += 1;
        jQuery.each(data, generate_news_item);
    });
    
  }
  $('.btn-news-more').click(function () {
    get_news_list();
  });
  get_news_list();  

});