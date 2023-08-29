const softWrapper = document.getElementById('soft-wrapper');

const getAllSoft = async () => {
    try {
        const response = await fetch('https://64e4d240c55563802913d030.mockapi.io/softshop/api/position');
        const soft = await response.json();

        soft.forEach((position) => {
            const wrapper = document.createElement('a');
            wrapper.setAttribute('class', 'position-wrapper');
            wrapper.href = "./soft.html";
            wrapper.addEventListener('click', ()=>{
                console.log('sdadsa');
                localStorage.setItem("positionID", position.id);
        });

            const image = document.createElement('img');
            image.setAttribute('class', 'position-image');
            image.src = position.img_url;



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