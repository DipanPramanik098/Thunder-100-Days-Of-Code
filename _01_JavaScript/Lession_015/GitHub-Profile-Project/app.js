async function github() {
    const response = await fetch('https://api.github.com/users?per_page=20');
    //Todo-> convert response to javascript Object , Not json
    const data = await response.json();
    console.log(data);

    for (const user of data) {
        //div create karenge 
        // image 
        //name

        const container = document.createElement('div');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const name = document.createElement('h2');
        name.textContent = user.login;

        // * add classes for styling
        container.classList.add('user-card');
        img.classList.add('user-img');
        name.classList.add('user-name');

        container.append(img, name);

        document.getElementById('root').append(container);
        ;
    }
}

github();

// * Search By UserName -> fetch(https://api.github.com/users/${username})
const input = document.getElementById('user-name');
const btn = document.querySelector('.searchBth');

async function searchByUserName(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    // console.log(data);
    const container = document.createElement('div');
    const img = document.createElement('img');
    img.src = data.avatar_url;

    const name = document.createElement('h2');
    name.textContent = data.login;

    // * add classes for styling
    container.classList.add('search-user-card');
    img.classList.add('user-img');
    name.classList.add('user-name');

    container.append(img, name);
    document.getElementById('result').append(container);

}

btn.addEventListener('click', (e) => {
    document.getElementById('result').textContent = "";
    // console.log(input.value);
    const username = input.value;
    searchByUserName(username);
})
