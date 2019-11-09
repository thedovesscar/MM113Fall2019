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

const showAll = () => {

    var tweetsLength = tweets.statuses.length;

    for (var i = 3; i < tweetsLength; i++) {

        var newTweet = document.createElement('article');
        newTweet.className = "tweet";

        var icon = document.createElement('i');
        icon.className = "fa fa-user";
        newTweet.append(icon);

        var anc = document.createElement('a');
        anc.textContent = " ";
        newTweet.append(anc);

        var user = document.createElement('span');
        user.className = "username";
        user.innerHTML = tweets.statuses[i].user.name + " @" + tweets.statuses[i].user.screen_name + " &bull; ";
        newTweet.append(user);

        var date = document.createElement('span');
        date.className = "date";
        date.textContent = tweets.statuses[i].created_at;
        newTweet.append(date);

        var message = document.createElement('div');
        message.className = "message";
        message.textContent = tweets.statuses[i].text;
        newTweet.append(message);

        document.getElementById('all').appendChild(newTweet)
    }

}
