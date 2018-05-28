let hashtag = "2018";

function getAllTweets(){
    fetch(`http://kea-alt-del.dk/twitter/api/?hashtag=${hashtag}`)
    .then(res=>res.json())
    .then(showTweets);
}


function showTweets(data){
    console.log(data);
    let template = document.querySelector("#tweetTemplate").content;
    let reTweetTemplate = document.querySelector("#reTweetTemplate").content;

    data.statuses.forEach(function(tweet){

        //For non-retweeted tweets
        let clone = template.cloneNode(true);
        let tweetList = document.querySelector("#tweet-box");
        let text = clone.querySelector(".text");
        let fullName = clone.querySelector(".full-name");
        let username = clone.querySelector(".username");
        let photo = clone.querySelector(".photo");
        let location = clone.querySelector(".location");
        let date = clone.querySelector(".date");
        let retweets = clone.querySelector(".retweets");
        let likes = clone.querySelector(".likes");
        let isRetweeted = clone.querySelector(".is-retweeted");

        //For retweeted tweets
        let reTweetClone = reTweetTemplate.cloneNode(true);
        let reTweetList = document.querySelector("#retweet-box");
        let retweeter = reTweetClone.querySelector(".retweeter");
        let isRetweeted2 = reTweetClone.querySelector(".is-retweeted");
        let retweetedText = reTweetClone.querySelector(".retweeted-text");
        

        if(tweet.retweeted_status){
            retweeter.textContent = tweet.user.name+" ";
            isRetweeted2.textContent = "It is retweeted";
            text.parentElement.style.display = "none";
            retweetedText.textContent = tweet.retweeted_status.text;
        }else{
            text.textContent = tweet.text;
            fullName.textContent = tweet.user.name;
            username.textContent = "@"+tweet.user.screen_name;
            username.setAttribute("href", `https://twitter.com/${tweet.user.screen_name}`)
            photo.style.backgroundImage = `url(${tweet.user.profile_image_url})`;
            location.textContent = tweet.user.location;
            date.textContent = tweet.created_at;
            retweets.textContent = `Retweets: ${tweet.retweet_count}`;
            likes.textContent = `Favorites: ${tweet.favorite_count}`;
            isRetweeted.textContent = "It is not retweeted";
        }



        tweetList.appendChild(clone);
        reTweetList.appendChild(reTweetClone);

    });

};

getAllTweets();