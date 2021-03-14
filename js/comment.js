'use strict';

// function Cat ( name, likes, isGoodWithDogs, isGoodWithKids, isGoodWithOtherCat, breed ) {
//   this.name = name;
//   this.likes = likes;
//   this.isGoodWithDogs = isGoodWithDogs;
//   this.isGoodWithKids = isGoodWithKids;
//   this.isGoodWithOtherCat = isGoodWithOtherCat;
//   this.breed = breed;
//   this.image = `./images/${name}.jpeg`;
//   this.age = 0;
// }

// Cat.prototype.getAge = function( min, max ) {
//   this.age = generateRandomNumber( min, max );
// };

// Cat.prototype.render = function() {
//   const parentElement = document.getElementById( 'kittenProfiles' );

//   const articleElement = document.createElement( 'article' );
//   parentElement.appendChild( articleElement );

//   const h2Element = document.createElement( 'h2' );
//   articleElement.appendChild( h2Element );
//   h2Element.textContent = this.name;

//   const pElement = document.createElement( 'p' );
//   articleElement.appendChild( pElement );
//   pElement.textContent = `${this.name} is a ${this.breed}, and ${this.age} months old.`;

//   const tableElement = document.createElement( 'table' );
//   articleElement.appendChild( tableElement );

//   const tr1Element = document.createElement( 'tr' );
//   tableElement.appendChild( tr1Element );

//   const th1Element = document.createElement( 'th' );
//   tr1Element.appendChild( th1Element );
//   th1Element.textContent = 'Is Good with Other Cat';

//   const th2Element = document.createElement( 'th' );
//   tr1Element.appendChild( th2Element );
//   th2Element.textContent = 'Is Good with Kids';

//   const th3Element = document.createElement( 'th' );
//   tr1Element.appendChild( th3Element );
//   th3Element.textContent = 'Is Good with Dog';

//   const tr2Element = document.createElement( 'tr' );
//   tableElement.appendChild( tr2Element );

//   const td1Element = document.createElement( 'td' );
//   tr2Element.appendChild( td1Element );
//   td1Element.textContent = this.isGoodWithOtherCat;

//   const td2Element = document.createElement( 'td' );
//   tr2Element.appendChild( td2Element );
//   td2Element.textContent = this.isGoodWithKids;

//   const td3Element = document.createElement( 'td' );
//   tr2Element.appendChild( td3Element );
//   td3Element.textContent = this.isGoodWithDogs;

//   const ulElement = document.createElement( 'ul' );
//   articleElement.appendChild( ulElement );

//   for( let i = 0; i < this.likes.length; i++ ) {
//     const liElement = document.createElement( 'li' );
//     ulElement.appendChild( liElement );
//     liElement.textContent = this.likes[i];
//   }

//   const imgElement = document.createElement( 'img' );
//   articleElement.appendChild( imgElement );
//   imgElement.setAttribute( 'src', this.image );
// };

// const frankie = new Cat( 'frankie',['food', 'playing'], true, true, false, 'British' );
// const jumper = new Cat( 'jumper', ['food', 'playing'], true, true, false, 'British' );
// const serena = new Cat( 'serena', ['food', 'playing'], true, true, false, 'British' );

// frankie.getAge( 3, 12 );
// jumper.getAge( 3, 12 );
// serena.getAge( 3, 12 );

// frankie.render();
// jumper.render();
// serena.render();

// function generateRandomNumber( min, max ) {
//   return Math.floor( Math.random() * ( max - min + 1 ) + min );
// }
















let hourArr = ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM'];

function Country ( name, minCus, maxCus, avgCus ){
  this.name = name,
  this.minCus = minCus,
  this.maxCus = maxCus,
  this.avgCus = avgCus,
  this.randomMinMax = [],
  this.randomAvg = [];
  this.total = 0;
}

// Country.prototype.getMinPlusMax = function() {
//   for ( let i =0; i < hourArr.length; i++ ) {
//     let sum = generateRandomNumber( this.minCus, this.maxCus );
//     this.randomMinMax.push( sum );
//     // console.log( this.randomMinMax );
//   } };

// !!!!! I want to call prev. prototype in this prototype !!!!!
Country.prototype.getAvgNum = function() {
  for ( let i = 0 ; i < hourArr.length ; i++ ) {
    let piece = Math.ceil( generateRandomNumber( this.minCus, this.maxCus ) * this.avgCus );
    this.randomAvg.push( piece );
    // console.log( this.randomAvg );
    // console.log( this.randomAvg );
  } };

Country.prototype.totalSales = function() {
  for ( let i in this.randomAvg ) {
    this.total += this.randomAvg[i];
    console.log( this.total ); }
};

Country.prototype.render = function() {
  // const parentElement = document.getElementById( 'myDiv' );
  // let myTable = document.createElement( 'table' );
  const myTable = document.getElementById( 'myTable' );
  // parentElement.appendChild( myTable );

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



  // const myH2 = document.createElement( 'h2' );
  // parentElement.appendChild( myH2 );
  // myH2.textContent = this.name;
  // // console.log( myH2.textContent );

  // const myUl = document.createElement( 'ul' );
  // parentElement.appendChild( myUl );

  // for ( let i=0; i < hourArr.length; i++ ){
  //   const myLi = document.createElement( 'li' );
  //   myUl.appendChild( myLi );
  //   myLi.textContent = `${hourArr[i]} : ${this.randomAvg[i]} pieces.`;

  // }

  // const myP = document.createElement( 'p' );
  // parentElement.appendChild( myP );
  // myP.textContent = `Total: ${this.total}.`;



};

const tableHeader = function() {
  const parentElement = document.getElementById( 'myDiv' );
  let myTable = document.createElement( 'table' );
  // console.log( myTable.id );
  parentElement.appendChild( myTable );
  myTable.setAttribute( 'id','myTable' );
  // const myTable = document.getElementById( 'myTable' );
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
// seattle.getMinPlusMax( Country.minCus, Country.maxCus );
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


tableFooter();




// let seattle = {
//   name: 'Seattle',
//   minCus: 23,
//   maxCus: 65,
//   avgCus: 6.3,
//   randomMinMax: [],
//   randomAvg: [],
//   total: 0,

//   getMinPlusMax: function( min, max ){
//     for ( let i =0; i < hourArr.length; i++ ) {
//       this.randomMinMax[i] = generateRandomNumber( min, max );
//     //   console.log( this.randomMinMax );
//     }
//   },

//   getAvgNum: function() {
//     for ( let i = 0 ; i < hourArr.length ; i++ ) {
//       this.randomAvg[i] = Math.ceil( this.randomMinMax[i] * this.avgCus );

//     }
//   },

//   getTotal: function() {
//     for ( let i in this.randomAvg )
//       this.total += this.randomAvg[i];
//     // console.log( this.total );

//   },



// };

// function getRender(){
//   const parentElement = document.getElementById( 'myDiv' );
//   const myH2 = document.createElement( 'h2' );
//   parentElement.appendChild( myH2 );
//   myH2.textContent = seattle.name;
//   // console.log( myH2.textContent );

//   const myUl = document.createElement( 'ul' );
//   parentElement.appendChild( myUl );

//   for ( let i=0; i < hourArr.length; i++ ){
//     const myLi = document.createElement( 'li' );
//     myUl.appendChild( myLi );
//     myLi.textContent = `${hourArr[i]} : ${seattle.randomAvg[i]} pieces.`;

//   }

//   const myP = document.createElement( 'p' );
//   parentElement.appendChild( myP );
//   myP.textContent = `Total: ${seattle.total}.`;

// }



// seattle.getMinPlusMax( seattle.minCus, seattle.maxCus );
// // console.log( seattle.randomMinMax );
// seattle.getAvgNum( seattle.avgCus );
// // console.log( seattle.randomAvg );
// seattle.getTotal();

// // seattle.getRender();
// getRender();



















function generateRandomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}


