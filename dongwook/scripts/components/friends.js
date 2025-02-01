let friends = [
    { id: 1, username: 'user1', avatar: '/static/profile.jpg' },
    { id: 2, username: 'user2', avatar: '/static/profile.jpg' },
    { id: 3, username: 'user3', avatar: '/static/profile.jpg' },
];


function addFriend() {
    const newFriend = {
        id: friends.length + 1, 
        username: 'user' + (friends.length + 1),
        avatar: '/static/profile.jpg', 
    };
    friends.push(newFriend);
    renderFriends();
}

function renderFriends() {
    const friendsContainer = document.getElementById('friends');
    friendsContainer.innerHTML = '';
    
    friendsContainer.style.display = 'grid';
    friendsContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
    friendsContainer.style.gap = '16px';
    
    friends.forEach(friend => {
      const friendElement = document.createElement('div');
      friendElement.classList.add('d-flex', 'align-items-center', 'mb-2', 'justify-content-between', 'border', 'p-2', 'rounded');
      
      friendElement.style.flexDirection = 'column';
      friendElement.style.alignItems = 'center';
  
      friendElement.innerHTML = `
        <div class="d-flex flex-column align-items-center">
            <img src="${friend.avatar}" alt="${friend.username}" class="rounded-circle me-2" style="width: 40px; height: 40px;">
            <div class="d-flex align-items-center">
            <span>${friend.username}</span>
            <button class="btn btn-danger btn-sm ms-2" onclick="removeFriend(${friend.id})" style="font-size: 12px; padding: 2px 5px;">X</button>
            </div>
        </div>
        `;

      friendsContainer.appendChild(friendElement);
    });
    
    const addButton = document.createElement('button');
    addButton.classList.add('btn', 'btn-success', 'mt-2');
    addButton.style.gridColumn = 'span 2';
    addButton.textContent = 'Add Friend';
    addButton.onclick = addFriend;
  
    friendsContainer.appendChild(addButton);
}

function removeFriend(friendId) {
    friends = friends.filter(friend => friend.id !== friendId);
    renderFriends(); 
}

window.renderFriends = renderFriends; 
