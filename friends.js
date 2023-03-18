function loadFriends() {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => dispplayFriends(data))
}

loadFriends()

function dispplayFriends(friends) {
    console.log(friends.results);
    const moreFriend = friends.results;

    const friendDiv = document.getElementById('friends');
    for (const friend of moreFriend) {
        console.log(friend);
        const div = document.createElement('div');

        div.classList.add('friend')
        div.innerHTML = `
            <h2>${friend?.name?.title}${friend.name.first} ${friend.name.last} </h2>
            <h3>${friend.email} </h3>
            <h4>${friend.gender}</h4>
            <img src="${friend.picture.large}" alt="">
        `

        friendDiv.appendChild(div)
    }


}