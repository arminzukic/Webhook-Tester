const faker = require('faker');

// Create a function to generate fake data for your payload
const generateCardPurchaseData = () => {
  return {
    action: "CARD_PURCHASE",
    billingAddress: {
      addressLine1: faker.address.streetAddress(),
      addressLine2: faker.address.secondaryAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      postCode: faker.address.zipCode(),
    },
    currency: faker.finance.currencyName(),
    cardholderMobileNumber: faker.phone.phoneNumber(),
    nameOnCard: faker.name.firstName(),
    tag: faker.random.alphaNumeric(),
  };

};

// Export the generateFakeData function
module.exports = generateCardPurchaseData;