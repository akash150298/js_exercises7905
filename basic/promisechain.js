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
