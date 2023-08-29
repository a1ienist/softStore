const   = localStorage.getItem('id');
const deleteButton = document.getElementById('delete-button');

const addSoftToScreen = (position) => {
    const title = document.getElementById('title');
    title.innerHTML = position.title;

    const description = document.getElementById('description');
    description.innerHTML = position.description;

    const inscription = document.getElementById('inscription');
    inscription.innerHTML = position.description;

    const image = document.getElementById('soft-image');
    image.src = position.img_url;
};

const getSoft = async () => {
    try {
        const response = await fetch(
            'https://64e4d240c55563802913d030.mockapi.io/softshop/api/position/' + positionID
        );

        const position = await response.json();

        console.log(position);
        addSoftToScreen(position);
    } catch (error) {
        console.error("data err:", error);
    }
};

getSoft();

deleteButton.addEventListener("click", async () => {
    try {
        console.log(positionID);

        const response = await fetch('https://64e4d240c55563802913d030.mockapi.io/softshop/api/position/' + positionID, {
            method: 'DELETE',
        });

        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.error("err:", error);
    }
});
