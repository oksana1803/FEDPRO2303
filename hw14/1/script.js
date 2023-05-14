window.onload = () => {
    /*1) Зробити запит і отримати користувачів, отриману інформацію вивести в вигляді карточок, 
    стилі додати самостійно або використати bootstap  */
    let container = document.querySelector('.container');
    fetch('users.json')
        .then(response => response.json())
        .then(cardData => {
            let responseData = cardData;
            for(let i = 0; i < responseData.length; i++) {
                let cardDiv = document.createElement("div");
                cardDiv.className = 'card';
                let name = document.createElement('h1');
                let userName = document.createElement('h2');
                let email = document.createElement('a');
                let address = document.createElement('p');
                let phone = document.createElement('h2');
                let website = document.createElement('a');
                let company = document.createElement('p');
                website.href = '#';
                email.href = '#';

                name.innerHTML = `Name: ${responseData[i].name}`;
                userName.innerHTML = `UserName: ${responseData[i].username}`;
                email.innerHTML = `E-mail: ${responseData[i].email}`;
                address.innerHTML = `Street: ${responseData[i].address.street}`;
                phone.innerHTML = `Phone: ${responseData[i].phone}`;
                website.innerHTML = `Website: ${responseData[i].website}`;
                company.innerHTML = `Company: ${responseData[i].company.name}`;

                cardDiv.appendChild(name);
                cardDiv.appendChild(userName);
                cardDiv.appendChild(email);
                cardDiv.appendChild(address);
                cardDiv.appendChild(phone);
                cardDiv.appendChild(website);
                cardDiv.appendChild(company);

                container.appendChild(cardDiv);
            }
        });
}