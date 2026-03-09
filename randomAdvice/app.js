URL = "https://api.adviceslip.com/advice";
const advicePara = document.querySelector("#advice");
const adviceId = document.querySelector("#adviceId");
const  btn = document.querySelector("#btn");

const getAdvice = async () => {
    try {
        btn.disabled = true;
        btn.innerText = "Loading...";
        advicePara.innerText = "Fetching advice...";

        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        advicePara.innerText = `"${data.slip.advice}"`;
        adviceId.innerText = `Advice #${data.slip.id}`;

        changeBackground();

    } catch (error) {
        advicePara.innerText = "Something went wrong 😢";
        console.error(error);
    } finally {
        btn.disabled = false;
        btn.innerText = "Get Advice";
    }
};

function changeBackground() {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
}

btn.addEventListener("click", getAdvice);



// const getAdvice = async() => {
//     console.log("getting data....");
//     let response = await fetch(URL);
//     console.log(response); //json formar
//     let data = await response.json();
//     // console.log(data);
//     // console.log(data.slip.advice);
//     advicePara.innerText = data.slip.advice;
// }  
// btn.addEventListener("click", getAdvice);

// function getAdvice(){
//     fetch(URL).then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         advicePara.innerText = data.slip.advice;
//     });
// }


