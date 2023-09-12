const axios = require('axios');
const baseUrl = require('../utils/common.js');
const generateCardPurchaseData = require('../models/cardCreationModel.js');

async function createDebitModeTransaction(webhookId, externalRef) {
    const payload = generateCardPurchaseData();
    const customHeaders = {
        'Externalreference': externalRef,
      };

  try {
    await axios.post(`${baseUrl}/${webhookId}`, payload, {
        headers: customHeaders,
      });
  } catch (error) {
    console.error('Error creating debit mode transaction:', error);
    throw error;
  }
}

module.exports = createDebitModeTransaction;
