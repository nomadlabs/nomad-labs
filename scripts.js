
/* Google analytics */
document.writeln(" \
<script type=\"text/javascript\"> \
  var _gaq = _gaq || []; \
  _gaq.push(['_setAccount', 'UA-XXXXXXX-XX']); \
  _gaq.push(['_trackPageview']); \
  (function() { \
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; \
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; \
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); \
  })(); \
</script>");

/* XXX: This is ugly */
$(document).ready(function() {
  setTimeout(function() {
    Cufon.replace('h1');
    Cufon.replace('h2');
    Cufon.replace('h3');
    Cufon.replace('li');

    /* Open all links in a new window */
    $("a[href^=http]").each(function(){
       if(this.href.indexOf(location.hostname) == -1) {
          $(this).attr({
             target: "_blank",
             title: "Opens in a new window"
          });
       }
    })

  }, 400);
});

$(function() {
  $('div.content').live('showoff:show', function(evt) {
    var bg_img = $('img[alt=background]', evt.target);
    var old_bg = '';
    if (bg_img.size() > 0) {
      var src = bg_img.attr('src');
      bg_img.hide();
      // Set new background on body
      old_bg = $('body').css('background-image');
      $('body')
        .css('background-image', 'url(' + src + ')')
        .addClass('fullScreen');
    } else {
      $('body').css('background-image', old_bg).removeClass('fullScreen');
    }
  });
});
