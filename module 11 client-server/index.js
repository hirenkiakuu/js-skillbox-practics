// fetching users from gorest 

async function loadUsers() {
    const response = await fetch('https://gorest.co.in/public/v2/users', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer c2af62d403e8ed73700eb2a4218752570c4934b2242eb83d6547bf3d40f1cf04', 
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    console.log(data);
}

async function addUser(id, mail) {
    fetch('https://gorest.co.in/public/v2/users', {
        method: 'POST', 
        body: JSON.stringify({
            id: id, 
            name: 'Tobey', 
            email: mail,
            gender: 'male',
            status: 'active'
        }),
        headers: {
            Authorization: 'Bearer c2af62d403e8ed73700eb2a4218752570c4934b2242eb83d6547bf3d40f1cf04',
            'Content-Type': 'application/json'
        }
    });
}



loadUsers();
addUser(1000, 'mailmail@gmail.comm');
loadUsers();

// loadUsers();


