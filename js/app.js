'use strict';

// // It's like the function need tto start with function keyword
// // TThe name should start with CAPS

// // console.log(Array.prototype);

// function Cat (name, likes, isGoodWithDogs, isGoodWithKids, isGoodWithOtherCat, breed) {
//   this.name = name;
//   this.likes = likes;
//   this.isGoodWithDogs = isGoodWithDogs;
//   this.isGoodWithKids = isGoodWithKids;
//   this.isGoodWithOtherCat = isGoodWithOtherCat;
//   this.breed = breed;
//   this.image = `./images/${name}.jpeg`;
//   this.age = 0;
//   Cat.allCat.push(this);
// };

// Cat.prototype.getAge = function(min, max) {
//   this.age = generateRandomNumber(min, max);
//   // console.log(age);
// };

// Cat.prototype.render = function() {
//   const parentElement = document.getElementById('kittenProfiles');

//   // Create Element
//   // append element to parent element
//   // set text content to the element

//   const articleElement = document.createElement('article');
//   parentElement.appendChild(articleElement);

//   const h2Element = document.createElement('h2');
//   articleElement.appendChild(h2Element);
//   h2Element.textContent = this.name;

//   const pElement = document.createElement('p');
//   articleElement.appendChild(pElement);
//   pElement.textContent = `${this.name} is a ${this.breed}, and ${this.age} months old.`;

//   //      <table>
//   //         <tr>
//   //           <th>Good with Kids</th>
//   //           <th>Good with Dogs</th>
//   //         </tr>
//   //         <tr>
//   //           <td>false</td>
//   //           <td>true</td>
//   //         </tr>
//   // <tr>
//   //   <td></td>
//   //   <td></td>
//   // </tr>
//   //       </table>

//   const tableElement = document.createElement('table');
//   articleElement.appendChild(tableElement);

//   const tr1Element = document.createElement('tr');
//   tableElement.appendChild(tr1Element);

//   const th1Element = document.createElement('th');
//   tr1Element.appendChild(th1Element);
//   th1Element.textContent = 'Is Good with Other Cat';

//   const th2Element = document.createElement('th');
//   tr1Element.appendChild(th2Element);
//   th2Element.textContent = 'Is Good with Kids';

//   const th3Element = document.createElement('th');
//   tr1Element.appendChild(th3Element);
//   th3Element.textContent = 'Is Good with Dog';

//   const tr2Element = document.createElement('tr');
//   tableElement.appendChild(tr2Element);

//   const td1Element = document.createElement('td');
//   tr2Element.appendChild(td1Element);
//   td1Element.textContent = this.isGoodWithOtherCat;

//   const td2Element = document.createElement('td');
//   tr2Element.appendChild(td2Element);
//   td2Element.textContent = this.isGoodWithKids;

//   const td3Element = document.createElement('td');
//   tr2Element.appendChild(td3Element);
//   td3Element.textContent = this.isGoodWithDogs;

//   const ulElement = document.createElement('ul');
//   articleElement.appendChild(ulElement);

//   for(let i = 0; i < this.likes.length; i++) {
//     const liElement = document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent = this.likes[i];
//   }

//   const imgElement = document.createElement('img');
//   articleElement.appendChild(imgElement);
//   imgElement.setAttribute('src', this.image);
// };

// Cat.allCat = [];

// const frankie = new Cat('frankie',['food', 'playing'], true, true, false, 'British');
// const jumper = new Cat('jumper', ['food', 'playing'], true, true, false, 'British');
// const serena = new Cat('serena', ['food', 'playing'], true, true, false, 'British');

// frankie.getAge(3, 12);
// jumper.getAge(3, 12);
// serena.getAge(3, 12);
// frankie.render();
// jumper.render();
// serena.render();

// console.log(Cat.allCats);

// // Helper function
// function generateRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
//   // Math.ceil
// }

// const formElement = document.getElementById('addNewCatForm');
// // console.log(formElement);

// formElement.addEventListener('submit', function(event) {
//   event.preventDefault();
//   // console.log(event.target.catName.value);

//   const catName = event.target.cat_name.value;
//   const catBreed = event.target.catBreed.value;
//   const catLike = event.target.catLike.value.split(',');
//   const isGoodWithKids = event.target.isGoodWithKids.checked;
//   const isGoodWithOtherCat = event.target.isGoodWithOtherCat.checked;
//   const isGoodWithDogs = event.target.isGoodWithDog.checked;

//   const cat = new Cat(catName, catLike, isGoodWithDogs,isGoodWithKids, isGoodWithOtherCat, catBreed);

//   formElement.reset();

//   cat.getAge(3, 12);
//   cat.render();

//   console.log(Cat.allCat);
// });
let hourArr = ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM'];


Country.allCountry = [];
function Country ( name, minCus, maxCus, avgCus ){
  this.name = name,
  this.minCus = minCus,
  this.maxCus = maxCus,
  this.avgCus = avgCus,
  this.randomMinMax = [],
  this.randomAvg = [];
  this.total = 0;
  Country.allCountry.push( this );
}


Country.prototype.getAvgNum = function() {
  for ( let i = 0 ; i < hourArr.length ; i++ ) {
    let piece = Math.ceil( generateRandomNumber( this.minCus, this.maxCus ) * this.avgCus );
    this.randomAvg.push( piece );

  } };

Country.prototype.totalSales = function() {
  for ( let i in this.randomAvg ) {
    this.total += this.randomAvg[i];
    // console.log( this.total );
  }
};

Country.prototype.render = function() {

  const myTable = document.getElementById( 'myTable' );

  const dataRows = document.createElement( 'tr' );
  myTable.appendChild( dataRows );

  const namesTd = document.createElement( 'th' );
  dataRows.appendChild( namesTd );
  namesTd.textContent = this.name;

  for ( let i = 0 ; i < hourArr.length; i++ ) {
    const dataTd = document.createElement( 'td' );
    dataRows.appendChild( dataTd );
    dataTd.textContent = `${this.randomAvg[i]}`;

  }

  let sumDaily = document.createElement( 'td' );
  dataRows.appendChild( sumDaily );
  sumDaily.textContent = `${this.total}`;


};

const tableHeader = function() {
  const parentElement = document.getElementById( 'myDiv' );
  let myTable = document.createElement( 'table' );
  parentElement.appendChild( myTable );
  myTable.setAttribute( 'id','myTable' );
  let tr1 = document.createElement( 'tr' );
  myTable.appendChild( tr1 );

  let tdCountry = document.createElement( 'th' );
  tr1.appendChild( tdCountry );
  tdCountry.textContent = 'Country';

  for ( let i =0; i < hourArr.length; i++ ) {
    const headerTh = document.createElement( 'th' );
    tr1.appendChild( headerTh );
    headerTh.textContent = `  ${hourArr[i]} `;
  }

  let dailyTotal = document.createElement( 'th' );
  tr1.appendChild( dailyTotal );
  dailyTotal.textContent = 'Daily Total';

};

tableHeader();



const tableFooter = function() {
  const parentElement = document.getElementById( 'myTable' );
  let footerTr = document.createElement( 'tr' );
  parentElement.appendChild( footerTr );

  let totalTd = document.createElement( 'th' );
  footerTr.appendChild( totalTd );
  totalTd.textContent = 'Totals';

  for ( let i=0; i < hourArr.length ; i++ ) {
    let sumIndex = document.createElement( 'td' );
    footerTr.appendChild( sumIndex );
    sumIndex.textContent = ( seattle.randomAvg[i] + tokyo.randomAvg[i] + dubai.randomAvg[i] ) ;

  }


  let lastTotal = document.createElement( 'td' );
  footerTr.appendChild( lastTotal );
  lastTotal.textContent= ( seattle.total + tokyo.total + dubai.total );
};

const seattle = new Country ( 'Seattle', 4, 35, 2.1 );
seattle.getAvgNum();
seattle.totalSales();
seattle.render();
const tokyo = new Country ( 'Tokyo', 3, 30, 2.2 );
tokyo.getAvgNum();
tokyo.totalSales();
tokyo.render();
const dubai = new Country ( 'Dubai', 11, 38, 3.7 );
dubai.getAvgNum();
dubai.totalSales();
dubai.render();




const myForm = document.getElementById( 'myForm' );
myForm.addEventListener( 'submit', function( event ) {
  event.preventDefault();

  const newCountry = event.target.enterCountry.value;
  const newMin = event.target.enterMinCus.value;
  const newMax = event.target.enterMaxCus.value;
  const newAvg = event.target.enterAvgNum.value;


  if ( newMin > newMax ) {
    alert( 'Invalid Minimum' );
    myForm.reset();
  }
  else {
    let newObj = new Country ( newCountry, newMin, newMax, newAvg );
    Country.allCountry.push( newObj );
    // console.log( newObj );
    myForm.reset();
    myTable.removeChild( myTable.lastChild );

    newObj.getAvgNum( newMin, newMax );
    newObj.totalSales();
    newObj.render();
    tableFooter();

  }

} );




// console.log( Country.allCountry );
tableFooter();




function generateRandomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}


