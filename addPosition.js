const positionFormButton = document.getElementById("position-button");

positionFormButton.addEventListener('click', async () => {
    const positionTitle = document.getElementById('position-title').value;
    const positionDescription = document.getElementById('position-description').value;
    const positionInstruction = document.getElementById('position-instruction').value;
    const positionImage = document.getElementById('position-image').value;

    const position = {
        title: positionTitle,
        description: positionDescription,
        instruction: positionInstruction,
        softData: [], 
        img_url: positionImage,
    };

    try {
        const response = await fetch('https://64e4d240c55563802913d030.mockapi.io/softshop/api/position', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(position)
        });

        const data = await response.json();

        if (data) {
            const messageWrapper = document.getElementById('response-message');
            messageWrapper.innerHTML = "Position was inserted";

            setTimeout(() => {
                window.location.replace("./index.html");
            }, 3000);

        }
    } catch (err) {
        console.log('err', err);
        const messageWrapper = document.getElementById("response-message"); 
        messageWrapper.innerHTML = "Position was NOT inserted, ERROR";
    }
});
