let hashtag = "dogs";

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
        let retweetedText = reTweetClone.querySelector(".retweeted-text p");
        let originalTweeter = reTweetClone.querySelector(".original-tweeter");
        let originalTweeterUsername = reTweetClone.querySelector(".original-tweeter-username");
        let retweetLink = reTweetClone.querySelector(".retweet-link");
        let retweeterPhoto = reTweetClone.querySelector(".retweeter-photo");
        let dateTwo = reTweetClone.querySelector(".date-two");
        let retweets2 = reTweetClone.querySelector(".retweets2");
        let likes2 = reTweetClone.querySelector(".likes2");
        
        console.log(tweet.retweeted_status);
        if(tweet.retweeted_status){
            retweeter.textContent = tweet.user.name+" ";
            retweeter.setAttribute("href", "https://www.twitter.com/"+tweet.user.screen_name);
            text.parentElement.style.display = "none";
            retweetedText.textContent = tweet.retweeted_status.text;
            originalTweeter.textContent = tweet.retweeted_status.user.name;
            originalTweeterUsername.setAttribute("href", "https://www.twitter.com/"+tweet.retweeted_status.user.screen_name);
            originalTweeterUsername.textContent = " @"+tweet.retweeted_status.user.screen_name;
            console.log("URL: "+tweet.retweeted_status.entities.urls.expanded_url);
            //retweetLink.setAttribute("href", tweet.retweeted_status.entities.urls.expanded_url);
            retweeterPhoto.style.backgroundImage = `url(${tweet.retweeted_status.user.profile_image_url})`;
            console.log(tweet.retweeted_status.user.profile_image_url);

            let mTwo = tweet.retweeted_status.created_at.substring(4,7);
            let dTwo = tweet.retweeted_status.created_at.substring(8,10);
            let hTwo = tweet.retweeted_status.created_at.substring(11,13);
            let minTwo = tweet.retweeted_status.created_at.substring(14,16);
            let yTwo = tweet.retweeted_status.created_at.substring(26,30);
            dateTwo.textContent = `${mTwo} ${dTwo} ${yTwo} at ${hTwo}:${minTwo}`;
            retweets2.textContent = tweet.retweeted_status.retweet_count;
            likes2.textContent = tweet.retweeted_status.favorite_count;
            

            // if(retweetedText.innerHTML==""){
            //     console.log("PARENT ELEMENT: "+retweetedText.parentElement);
            // }

            //console.log(dateTwo.textContent);
        }else{
            text.textContent = tweet.text;
            fullName.textContent = tweet.user.name;
            username.textContent = "@"+tweet.user.screen_name;
            username.setAttribute("href", `https://twitter.com/${tweet.user.screen_name}`)
            photo.style.backgroundImage = `url(${tweet.user.profile_image_url})`;
            if(location.innerHTML!==null){
                location.innerHTML = "&middot;" +"  "+ tweet.user.location;
            }else{
                location.innerHTML = tweet.user.location;
            }
            
            
            let m = tweet.created_at.substring(4,7);
            let d = tweet.created_at.substring(8,10);
            let h = tweet.created_at.substring(11,13);
            let min = tweet.created_at.substring(14,16);
            let y = tweet.created_at.substring(26,30);
            date.textContent = `${m} ${d} ${y} at ${h}:${min}`;

            
            
            console.log(tweet.created_at);
            retweets.textContent = tweet.retweet_count;
            likes.textContent = tweet.favorite_count;
            //isRetweeted.textContent = "It is not retweeted";   
        }
        tweetList.appendChild(clone);
        reTweetList.appendChild(reTweetClone);

    });

};

getAllTweets();

let form = document.querySelector("#hashtag-form");
form.onsubmit = function(e){
    e.preventDefault();
    hashtag = form.hashtag.value;
    console.log(hashtag);
    document.querySelector("#tweet-box").innerHTML = "";
    document.querySelector("#retweet-box").innerHTML = "";   
    getAllTweets();
}