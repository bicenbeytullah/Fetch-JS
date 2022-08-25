let result = document.querySelector(".result");
let btn = document.querySelector(".btn");
let link = document.querySelector(".link");

btn.addEventListener("click", getRandom);

getRandom();

function getRandom () {
    fetch("https://aws.random.cat/meow")
        .then(res => res.json())
        .then(data => {
            result.innerHTML = `<img src= "${data.file}" class="img" />`;
            link.innerHTML = data.file;
            console.log(data.file)
        });
         
};
