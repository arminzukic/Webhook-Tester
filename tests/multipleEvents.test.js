const webhookService = require('../service/webhookService');
const createDebitModeTransaction = require('../service/sendData');
const getContentByExternalReferenceHeader = require('../helper/commonHelper');
const validateSchema = require('../helper/schemaHelper')
const { v4: uuidv4 } = require('uuid');

test('Test Webhoook Event', async () => {
    const webhookId = await webhookService.getWebhookId();
    const externalRefId = uuidv4();
    console.info(`webhoook Id: ${webhookId}, external ref: ${externalRefId}`)

    await createDebitModeTransaction(webhookId, externalRefId);
    for (let i = 0; i < 99; i++) {
        await createDebitModeTransaction(webhookId, uuidv4());
    
    }

    const webhookEvents = await webhookService.getWebhookEvents(webhookId);
    const content = getContentByExternalReferenceHeader(webhookEvents, externalRefId);

    expect(validateSchema(content)).toBe(true);
});
