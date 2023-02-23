// https://www.youtube.com/watch?v=rRgD1yVwIvE&ab_channel=TraversyMedia

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Seven', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Eight', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Nine', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Ten', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// ---------------------------------------------------------
// ---------------------------------------------------------

// FOR

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);
// ---------------------------------------------------------
// ---------------------------------------------------------

// FOREACH

// companies.forEach(function (company) {
//   console.log(company);
// });
// ---------------------------------------------------------
// ---------------------------------------------------------

// FILTER

// Filter 21 and Older

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });
// console.log(canDrink);

// Filter arrow function
// const canDrink = ages.filter((age) => age >= 21);
// console.log(canDrink);

// ---------------------------------------------------------

// Filter Retail Companies
// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// });
// console.log(retailCompanies);

// Filter arrow function
// const retailCompaies = companies.filter(
//   (company) => company.category === 'Retail'
// );
// console.log(retailCompaies);

// const eightiesCompaies = companies.filter(
//   (company) => company.start < 1990 && company.start > 1979
// );
// console.log(eightiesCompaies);

// const lastedTenYears = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(lastedTenYears);

// ---------------------------------------------------------
// ---------------------------------------------------------

// MAP

// Create array of company names

// const companyNames = companies.map(function (company) {
//   return company.name;
// });
// console.log(companyNames);

// const testMap = companies.map(function (company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(testMap);

// const testMap = companies.map(
//   (company) => `${company.name} [${company.start} - ${company.end}]`
// );
// console.log(testMap);

// Map arrow function
// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// const ageMap = ages
//   .map(age => Math.sqrt(age)) // first it squared everything
//   .map(age => age * 2); // seconde, everything was multiplied by 2
// console.log(ageMap);

// ---------------------------------------------------------
// ---------------------------------------------------------

// SORT

// Sort companies by start date ascending
// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

// Sort arrow function
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// Sort ages
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// ---------------------------------------------------------
// ---------------------------------------------------------

// REDUCE

// Without reduce
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);
// console.log(ageSum);

// Arrow function
// const ageSume = ages.reduce((total, age) => total + age, 0);
// console.log(ageSume);

// Get total years for companies
// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);
// console.log(totalYears);

// Arrow function
// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalYears);

// Combine methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(combined);

// ---------------------------------------------------------
// ---------------------------------------------------------