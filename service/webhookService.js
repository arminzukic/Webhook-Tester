const axios = require('axios');
const baseUrl = require('../utils/common.js');

const getWebhookId = async () => {
    try {
        const response = await axios.post(`${baseUrl}/api/session`);
        return response.data.uuid;
    } catch (error) {
        throw error; 
    }
}

const getWebhookEvents = async (webhookId) => {
    try {
        const response = await axios.get(`${baseUrl}/api/session/${webhookId}/requests`);
        return response.data
    } catch (error) {
        throw error; 
    }
}

module.exports = {
    getWebhookId,
    getWebhookEvents
};