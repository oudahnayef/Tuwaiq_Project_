const mainContainer  = $("#mainContainer");
const nameInput = $("#name frot");
const ageInput= $("#fruit price");
const  fruitprice = $("#fruit age");
// an array of students with some data
const frotName  = [
  {nameInput:"tomato ",ageInput: "1wek", fruitpriceLInput:"$2", URL: "https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38="},
  {nameInput:"banana ",ageInput: "1wek", fruitprice:"$1", URL: "https://cdn.shopify.com/s/files/1/2154/4937/products/banana_600x.jpg?v=1610541466"},
  {nameInput:"orang ",ageInput: "1wek", fruitprice:"$4" , URL:"https://images.pexels.com/photos/42059/citrus-diet-food-fresh-42059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
  {nameInput:"abel",ageInput: "1wek", fruitprice:"$2" , URL:"https://pm1.narvii.com/7097/f3140869dea500182254dcd0181037a15724197cr1-600-600v2_hq.jpg" },
];


function renderArr(array) {
  for (let i = 0; i < array.length; i++) {
    const div = $(`<div class="frotclaas"'>
        <h2>${array[i].nameInput}</h2>
        <h2>${array[i].ageInput}</h2>
        <h2>${array[i].fruitprice}</h2>
    <img class="img" src=${array[i].URL} >
        
    </div>`);
    mainContainer.append(div);
  }
}

renderArr( frotName);

function addfrot() {
  
  const newfrot = {
    frotName: nameInput.val(),
    frotAge: ageInput.val(),
    fruitprice: fruitpriceLInput.val(),
  };
 
  frotName.push(newfrot);

  renderArr([newfrot]);
}

function hideHandler() {
 
  mainContainer.hide();
}

function showHandler() {
  
  mainContainer.show();
}
