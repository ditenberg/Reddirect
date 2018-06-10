function reddirect() {
    var path = window.location.pathname;
    var containsOld = window.location.host.search('old');

    if (containsOld != -1) {
        return
    }
    
    if (window.location.host === 'www.reddit.com') {
        var newLink = 'https://old.reddit.com' + path;
        window.location.href = newLink;
    }

}

reddirect();