const fetchUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'John Doe' });
        }, 1000);
    });
};

const fetchUserPosts = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Post 1', 'Post 2']);
        }, 1000);
    });
};

const fetchPostComments = (post) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([`Comment 1 for ${post}`, `Comment 2 for ${post}`]);
        }, 1000);
    });
};

fetchUser()
    .then(user => {
        console.log('User:', user);
        return fetchUserPosts(user.id);
    })
    .then(posts => {
        console.log('Posts:', posts);
        return fetchPostComments(posts[0]);
    })
    .then(comments => {
        console.log('Comments:', comments);
    })
    .catch(error => {
        console.error('Error:', error);
    });
//  callback hell
function fetchUser(callback) {
    setTimeout(() => {
        callback(null, { id: 1, name: 'John Doe' });
    }, 1000);
}

function fetchUserPosts(userId, callback) {
    setTimeout(() => {
        callback(null, ['Post 1', 'Post 2']);
    }, 1000);
}

function fetchPostComments(post, callback) {
    setTimeout(() => {
        callback(null, [`Comment 1 for ${post}`, `Comment 2 for ${post}`]);
    }, 1000);
}

fetchUser((err, user) => {
    if (err) {
        return console.error('Error fetching user:', err);
    }
    console.log('User:', user);

    fetchUserPosts(user.id, (err, posts) => {
        if (err) {
            return console.error('Error fetching posts:', err);
        }
        console.log('Posts:', posts);

        fetchPostComments(posts[0], (err, comments) => {
            if (err) {
                return console.error('Error fetching comments:', err);
            }
            console.log('Comments:', comments);
        });
    });
});

console.log('Fetching user...');
