// declare all global variables

var numFamMemb,
// number of members in the family

var amtOneTimeGrantIndivid,
// dollar amount of one time grant for each individual

var hHoldEng,
// English status of head of household, Y or N




// NGO names:

var ngo1HelUn,
// Help Unlimited

var ngo2NewSt
// New Start

var ngo3BetTo,
// Better Tomorrow

var ngo4HomSa,
// Home Safe

var ngo5NewHo,
// New Home


// EXPENSES

var monthlyExpFam = {
familySize: ["monthlyExpFamOf1", "monthlyExpFamOf2", "monthlyExpFamOf3", "monthlyExpFamOf4", "monthlyExpFamOf5monthlyExpFamOf5andUp"],
monthlyExpenditure: [800, 950, 1000, 1100, 1200]
};

var monthlyExpFamOf1 = 800;
// monthly expenses for family of 1

var monthlyExpFamOf2 = 950;
// monthly expenses for family of 2

var monthlyExpFamOf3 = 1000;
// monthly expenses for family of 3

var monthlyExpFamOf4 = 1100;
// monthly expenses for family of 4

var monthlyExpFamOf5andUp = 1200;
// monthly expenses for family of 5 or more



// Operaton Variables

var amtOneTimeGrantFam = numFamMemb * amtOneTimeGrantIndivid;

var monthlyAfterExp = amtOneTimeGrantFam - monthlyExpFam;
