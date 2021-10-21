const mainContainer = $("#mainContainer");
const fruitNameInput = $("#fruitname");
const fruitAgeInput = $("#fruitAge");
const manyFruitInput = $("#manyFruit");
const  fruitImgInput = $("#imgURL");


const fruitArr = [
    {fruitName:"tomato ",fruitAge: "1 week", manyFruit:"$2", URL: "https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38="},
    {fruitName:"banana ",fruitAge: "1 week", manyFruit:"$1", URL: "https://cdn.shopify.com/s/files/1/2154/4937/products/banana_600x.jpg?v=1610541466"},
    {fruitName:"orange ",fruitAge: "1 week", manyFruit:"$4" , URL:"https://images.pexels.com/photos/42059/citrus-diet-food-fresh-42059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {fruitName:"apple",fruitAge: "1 week", manyFruit:"$2" , URL:"https://pm1.narvii.com/7097/f3140869dea500182254dcd0181037a15724197cr1-600-600v2_hq.jpg" },
  ];
  


function renderArr(array) {
  for (let i = 0; i < array.length; i++) {
    const div = $(`<div class="secondryContainer">
        <h2>${array[i].fruitName}</h2>
        <h2>${array[i].fruitAge}</h2>
        <h2>${array[i].manyFruit}</h2>
       <img src="${array[i].URL}">
       <button  id="delet" onclick="remove(${i})">X</button> <br>
       <a href="./bay.html"><button>buy</button></a>

       </div>`);


    mainContainer.append(div);
  }
}
// call the function with the right parameter 
renderArr(fruitArr);

function addHandler() {
  // create an object from the data we got from our inputs
  const newFruites = {
    fruitName: fruitNameInput.val(),
    fruitAge: fruitAgeInput.val(),
    manyFruit: manyFruitInput.val(),
    URL: fruitImgInput.val(),
  };
  //   we push the new object to the array of 
  fruitArr.push(newFruites);
  renderArr([newFruites]);
}
 

function remove (i) {

  fruitArr.splice(i ,1)
console.log(i)
mainContainer.html("")
renderArr(fruitArr)
}



function hideHandler() {
 mainContainer.hide();
 $(".hide").hide();

 }

function showHandler() {
mainContainer.showHandler();
$(".hide").hide();
}
// mainContainer.show(); }
 

 
