/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // Test / driver code (temporary). Eventually will get this from the server.
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
const createTweetElement = function(data){
  return ` <article class="tweets">
  <div class="tweetHeader">
    <span class="avatar"><img src=${data.user.avatars}><span class="avatarname">${data.user.name}</span></span>
    <span class="username">${data.user.handle}</span>
  </div>
  <p class="tweetInput">${data.content.text}</p>
  <hr class="divider">
  <div class="tweetFooter">
    <span class="timestamp">${timeago.format(data.created_at)}</span>
    <div class="icons"><i class="fas fa-book"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></div>
  </div>
</article>`
}

const renderTweets = function(tweet) {
  // loops through tweets
  for (let val of tweet){
   let new_tweet = createTweetElement(val);
    $('.postTweet').append(new_tweet);
  }
}
renderTweets(tweetData);

//  Form Submission using JQuery and AJAX
$( "#tweetForm" ).submit(function( event ) {
  console.log( $( this ).serialize() );
  event.preventDefault();
  $.ajax({
    type: "POST",
    url: '/tweets',
    data: $( this ).serialize(),
  });
});

});
