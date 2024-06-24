fetch("https://fakestoreapi.com/products")
  .then((response) => {
    
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    
    data.forEach((information) => {
      
       let card = new Cards(information.image, information.title, information.price, information.description);
      
       
    });

    
  })
 

function Cards(image, title, price, description) {
       
 

            const div1 = document.createElement("div");
            div1.setAttribute("class", "col patient-card  ");
            mainDiv.appendChild(div1);

            const div2 = document.createElement("div");
            div2.setAttribute("class", "card ");
            div1.appendChild(div2);

            const h1card = document.createElement("h1");
            h1card.setAttribute("class", "card-title text-center");
            
            /*************************Title***************** */

            h1card.innerHTML = title;
            div2.appendChild(h1card);
           /*************************\Title***************** */
            /*************************Image***************** */
            const imag = document.createElement("img");
            imag.setAttribute("class", "card-img-top ms-5");
            imag.setAttribute("alt", "image Patient ");
            imag.src = image;

       
            div2.appendChild(imag);
            /*************************\Image***************** */

            const div3 = document.createElement("div");
            div3.setAttribute("class", "card-body");
            div2.appendChild(div3);

           
                

            const h4Date = document.createElement("h4");
            h4Date.setAttribute("class", "card-text");

            /*************************Price***************** */
            h4Date.innerHTML = price;
            div3.appendChild(h4Date);
            /*************************\Price***************** */

            const Gender = document.createElement("h4");
            Gender.setAttribute("class", "card-text");

             /*************************Descriptionr***************** */
            Gender.innerHTML =  description;
            div3.appendChild(Gender);
            
             /*************************\Descriptionr***************** */
           

  
} 


/*************************** */

const mainDiv = document.getElementById("mainDiv");

document.getElementById('submitButton').addEventListener('click', submitForm);

function submitForm(event) {

  event.preventDefault();

  const Title = document.getElementById('Title').value;
  const description = document.getElementById('description').value;
  
  var newPerson = new CreatObj(Title, description);
}


function CreatObj(Title, description) {
  
  this.Title = Title;

  this.description = description;

 

}

function renderCards() {
const div1 = document.createElement("div");
div1.setAttribute("class", "col patient-card");
mainDiv.appendChild(div1);

const div2 = document.createElement("div");
div2.setAttribute("class", "card ");
div1.appendChild(div2);

const div3 = document.createElement("div");
div3.setAttribute("class", "card-body");
div2.appendChild(div3);

const h1card = document.createElement("h1");
h1card.setAttribute("class", "card-title");
h1card.innerHTML = "<span class='title'>Title:  </span>" + patient.Title;
div3.appendChild(h1card);


const h4Date = document.createElement("h4");
h4Date.setAttribute("class", "card-text");
h4Date.innerHTML = "<span class='title'>description:  </span>" + patient.description;
div3.appendChild(h4Date);
}