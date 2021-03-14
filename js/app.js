'use strict';

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


Country.prototype.getAvgNum = function() {
  for ( let i = 0 ; i < hourArr.length ; i++ ) {
    let piece = Math.ceil( generateRandomNumber( this.minCus, this.maxCus ) * this.avgCus );
    this.randomAvg.push( piece );

  } };

Country.prototype.totalSales = function() {
  for ( let i in this.randomAvg ) {
    this.total += this.randomAvg[i];
    console.log( this.total ); }
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


tableFooter();


function generateRandomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}


