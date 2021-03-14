'use strict';

// const frankie = {
//   name: 'Frankie',

//   age: 0,
//   getAge: function( min, max ) {
//     this.age = generateRandomNumber( min, max );
//   },

//   likes: ['napping', 'chasing', 'food'],
//   isGoodWithKids: true,
//   isGoodWithDogs: false,
//   isGoodWithOtherCat: true,
//   breed: 'British',
//   image: './images/frankie.jpeg',
//   render: function() {
//     const parentElement = document.getElementById( 'kittenProfiles' );

//     // Create Element
//     // append element to parent element
//     // set text content to the element

//     const articleElement = document.createElement( 'article' );
//     parentElement.appendChild( articleElement );

//     const h2Element = document.createElement( 'h2' );
//     articleElement.appendChild( h2Element );
//     h2Element.textContent = this.name;

//     const pElement = document.createElement( 'p' );
//     articleElement.appendChild( pElement );
//     pElement.textContent = `${this.name} is a ${this.breed}, and ${this.age} months old.`;

//     const ulElement = document.createElement( 'ul' );
//     articleElement.appendChild( ulElement );

//     for( let i = 0; i < this.likes.length; i++ ) {
//       const liElement = document.createElement( 'li' );
//       ulElement.appendChild( liElement );
//       liElement.textContent = this.likes[i];
//     }

//     const imgElement = document.createElement( 'img' );
//     articleElement.appendChild( imgElement );
//     imgElement.setAttribute( 'src', this.image );
//   }

// };

// // to get the random number you must follow these steps:

// // [1] invoke function *(must to be before [2] step)*
// frankie.getAge( 10,15 );
// // [2] invoke property
// console.log( frankie.age );
// // [3] invoke object
// console.log( frankie );

// frankie.render();



let hourArr = ['06-AM', '07-AM', '08-AM', '09-AM', '10-AM', '11-AM'];

let seattle = {
  name: 'Seattle',
  minCus: 23,
  maxCus: 65,
  avgCus: 6.3,
  randomMinMax: [],
  randomAvg: [],
  total: 0,

  getMinPlusMax: function( min, max ){
    for ( let i =0; i < hourArr.length; i++ ) {
      this.randomMinMax[i] = generateRandomNumber( min, max );
    //   console.log( this.randomMinMax );
    }
  },

  getAvgNum: function() {
    for ( let i = 0 ; i < hourArr.length ; i++ ) {
      this.randomAvg[i] = Math.ceil( this.randomMinMax[i] * this.avgCus );

    }
  },

  getTotal: function() {
    for ( let i in this.randomAvg )
      this.total += this.randomAvg[i];
    // console.log( this.total );

  },



};

function getRender(){
  const parentElement = document.getElementById( 'myDiv' );
  const myH2 = document.createElement( 'h2' );
  parentElement.appendChild( myH2 );
  myH2.textContent = seattle.name;
  // console.log( myH2.textContent );

  const myUl = document.createElement( 'ul' );
  parentElement.appendChild( myUl );

  for ( let i=0; i < hourArr.length; i++ ){
    const myLi = document.createElement( 'li' );
    myUl.appendChild( myLi );
    myLi.textContent = `${hourArr[i]} : ${seattle.randomAvg[i]} pieces.`;

  }

  const myP = document.createElement( 'p' );
  parentElement.appendChild( myP );
  myP.textContent = `Total: ${seattle.total}.`;

}



seattle.getMinPlusMax( seattle.minCus, seattle.maxCus );
// console.log( seattle.randomMinMax );
seattle.getAvgNum( seattle.avgCus );
// console.log( seattle.randomAvg );
seattle.getTotal();

// seattle.getRender();
getRender();



















function generateRandomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}


