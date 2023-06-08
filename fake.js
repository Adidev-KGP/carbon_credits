const Chance = require('chance');
const fs = require('fs');

const chance = new Chance();
const fakeData = [];

const minInteger = 1000;
const maxInteger = 10000;

// Generate 100 fake data objects
for (let i = 0; i < 200; i++) {
  const fakeUserData = {
    dateOfIssue : chance.date(),
    type : chance.pickone(['Agriculture', 'Energy and Power Generation', 'Forestry and Land Use', 'Transportation', 'Waste Management', 'Buildings and Construction']),
    name: chance.company(),
    address: chance.address(),
    carbonCredits : chance.integer({ min: minInteger, max: maxInteger })

  };
  fakeData.push(fakeUserData);
}

// Write the fake data to data.json file
fs.writeFile('/data/data.json', JSON.stringify(fakeData, null, 2), 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Fake data generated and stored in data.json');
});
