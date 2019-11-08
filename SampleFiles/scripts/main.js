const StarTrekTweet = {
    name: 'Star Trek',
    handle: '@StarTrek',
    text: 'Welcome to the OFFICIAL Star Trek Twitter Page!'
}

const StarWarsTweet = {
    join: 'Join the Dark Side...',
    dare: 'if you dare.'
}

const links = ['https://twitter.com/StarWars', 'https://twitter.com/StarTrek', 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/26/1530003551-star-trek.jpg']

const modifyText = () => {
    //Change the text of message2 to be the message of the StarTrekTweet object
    //Change the text of user2 to be the handle from the StarTrekTweet object
    //Changes the text of message 2 class to be the handle from the StarTrekTweet object
    // YOUR CODE BELOW THIS LINE.
    document.getElementById('message2').innerHTML = StarTrekTweet.text;
    document.querySelector('#link2').innerHTML = StarTrekTweet.name;
    document.getElementById('user2').innerHTML = StarTrekTweet.handle;
    if (document.getElementById('message1').innerHTML != StarWarsTweet.join + StarWarsTweet.dare) {
        document.getElementById('message1').innerHTML = StarWarsTweet.join;
    }
    //Just for Fun: This condition will keep it from Changing back on each click
}

const changeLinkAndImageAttributes = function () {
    //Set the href attribute for link1 to point to the first element in the links array
    //Sets the href attribute for link2 to point to the second element in the links array
    //Sets the src attribute for the Ohlone image to point to the third element in the links array
    // YOUR CODE BELOW THIS LINE.
    document.getElementById('link1').setAttribute('href', links[0]);
    document.getElementById('link1').setAttribute('style', 'color: red;');
    document.getElementById('link2').href = links[1];
    document.querySelector('#link2').setAttribute('style', 'color: green;');
    document.querySelector('#Ohlone').src = links[2];
    document.getElementById('Ohlone').setAttribute('style', 'border: 2px solid orange;');
    document.getElementById('message1').innerHTML = StarWarsTweet.join + StarWarsTweet.dare;
}

function changeClassAttribute() {
    //Update the changeClassAttribute
    //function so that it replaces the “tweet” class with the “tweet-pink” class for the two tweets.
    // change id="tweet1" class="tweet" to id="tweet1" class="tweet-pink"
    // YOUR CODE BELOW THIS LINE
    let tweets = document.querySelectorAll('.tweet');
    tweets.forEach(tweet => {
        tweet.setAttribute('class', 'tweet-pink');
    })

}

const appendElements = () => {
    //A. An "a" element (a link) to the bottom of tweet1 that links to Ohlone College
    //(http://www.ohlone.edu) and has a link text that say "Intro to JavaScript."
    //B. An "img" element (an image) to the bottom of tweet1 that
    //points to an image of your choice,symbolizing something about the course.
    //id="tweet1"
    // YOUR CODE BELOW THIS LINE

}
