const getJSON = (url) => {
    return new Promise((data, err) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        //console.log(xhr);
        xhr.onload = () => {
            var status = xhr.status;
            if (status === 200) {
                data(xhr.response);
            } else {
                err(status, xhr.response);
            }
        }
        xhr.send();
    });
};

getJSON('http://geekpress.fr/wp-json/wp/v2/users')
    .then((usersData) => {
        document.querySelectorAll('article').forEach((article, i) => {
            const userID = usersData[i].id;
            article.querySelector('#auteur' + i).innerHTML = usersData[i].name;
            article.querySelector('#avatar' + i).src = usersData[i].avatar_urls[96];
            article.querySelector('#description' + i).innerHTML += usersData[i].description;

            getJSON('http://geekpress.fr/wp-json/wp/v2/posts?author=' + userID)
                .then((postsData) => {
                    article.querySelector('#nb' + i).innerHTML += postsData.length;
                }).catch(err=>console.log(err));
        });
    });
