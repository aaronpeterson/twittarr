$(document).ready(function () {
  $('.favorite').on('click', function(e) {
    var tweet = $(e.currentTarget).data('tweetid');
    var tweetID = tweet.split('"')[1];
    console.log(tweet);
    var url = "tweets/"+tweetID+"/favorites";
    console.log(url);
    $.ajax({
      type: 'POST',
      url: url,
      success: function (data) {
        console.log('send a favorite');
      },
      error: function (data) {
        console.log('not sent');
      }
    });
  });
  $('.follow').on('click', function(e) {
    var user = $(e.currentTarget).data('userid');
    var userID = user.split('"')[1];
    var url = "http://localhost:3000/users/"+userID+"/follow";
    console.log(url);
    $(this).text(function(i, text){
      return text === "follow" ? "unfollow": "follow";
    })
    $.ajax({
      type: 'POST',
      url: url,
      success: function (data) {
        console.log('Followed the user');
      },
      error: function (data) {
        console.log('not sent');
      }
    });
  });

  function randRange(data) {
    return data[Math.floor(data.length * Math.random())];
  }

  function toggleSomething() {
    var timeArray = [200, 500, 150, 250];
    var blurLevels = [0, 1, 2, 3];

    $("#coverBlur")
      .removeClass("blur-1 blur-2 blur-3")
      .addClass("blur-" + randRange(blurLevels));

    clearInterval(timer);
    timer = setInterval(toggleSomething, randRange(timeArray));
  }

  var timer = setInterval(toggleSomething, 1000);
  
});

