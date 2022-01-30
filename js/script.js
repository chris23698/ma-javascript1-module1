// question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
}
cat.complain();

// question 2

const heading = document.querySelector("h3");
console.log(heading);

heading.innerHTML = "Update heading"

// question 3

heading.style.fontSize = "2em"

// question 4

heading.classList.add("subheading");

console.log(heading);

// question 5

const paragraphs = document.querySelectorAll("p");
for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = paragraphs[i].style.color + "red";
}

// question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;

resultsContainer.style.backgroundColor = "yellow";

// question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catsNames (list){
    for(let i = 0; i < cats.length; i++){
        console.log(cats[i].name);
    }
}
catsNames(cats);

// question 8

const catContainer = document.querySelector(".cat-container");

  function createCats(cats) {
    let html = "";

    for (let i = 0; i < cats.length; i++) {
      let catsAge = "";

      if (cats[i].age) {
        catsAge = cats[i].age;
      } else {
        catsAge = "Unknown";
      }

      html +=`
      <div>
      <h5>Name: ${cats[i].name}</h5>
      <p>Age: ${catsAge}</p>
      </div>
      `;
    }

    return html;
  }

  catContainer.innerHTML = createCats(cats);