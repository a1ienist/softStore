const softWrapper = document.getElementById('soft-wrapper');

const getAllSoft = async () => {
    try {
        const response = await fetch('https://64e4d240c55563802913d030.mockapi.io/softshop/api/position');
        const soft = await response.json();

        soft.forEach((position) => {
            const image = document.createElement('img');
            image.setAttribute('class', 'position-image');
            image.src = position.img_url;

            const wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'position-wrapper');

            const title = document.createElement('h1');
            title.innerHTML = position.title;

            const description = document.createElement('p');
            description.innerHTML = position.description;

            wrapper.appendChild(image);
            wrapper.appendChild(title);
            wrapper.appendChild(description);

            softWrapper.appendChild(wrapper); 
        });
    } catch (error) {
        console.log('Error:', error);
    }
}

getAllSoft();
