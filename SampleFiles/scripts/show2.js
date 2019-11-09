//console.log(tweets)

const tweet1 = () => {

    document.querySelector('#tweet1 .username').textContent = tweets.statuses[0].user.name + " @" + tweets.statuses[0].user.screen_name;
    document.querySelector('#tweet1 .date').textContent = tweets.statuses[0].created_at;
    document.querySelector('#tweet1 .message').textContent = tweets.statuses[0].text;
}

const tweet2 = () => {

    document.querySelector('#tweet2 .username').textContent = tweets.statuses[1].user.name + " @" + tweets.statuses[1].user.screen_name;
    document.querySelector('#tweet2 .date').textContent = tweets.statuses[1].created_at;
    document.querySelector('#tweet2 .message').textContent = tweets.statuses[1].text;
}

const tweet3 = function () {

    document.querySelector('#tweet3 .username').textContent = tweets.statuses[2].user.name + " @" + tweets.statuses[2].user.screen_name;
    document.querySelector('#tweet3 .date').textContent = tweets.statuses[2].created_at;
    document.querySelector('#tweet3 .message').textContent = tweets.statuses[2].text;
}

function showAll() {

}
