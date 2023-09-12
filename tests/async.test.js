const webhookService = require('../service/webhookService');
const createDebitModeTransaction = require('../service/sendData');
const getContentByExternalReferenceHeader = require('../helper/commonHelper');
const validateSchema = require('../helper/schemaHelper')
const { v4: uuidv4 } = require('uuid');

describe("Aasynchronous tests", () => {
    test('Test Webhoook Event 1', async () => {
        const webhookId = await webhookService.getWebhookId();
        const externalRefId = uuidv4();
        console.info(`webhoook Id: ${webhookId}, external ref: ${externalRefId}`)
    
        await createDebitModeTransaction(webhookId, externalRefId);
        await createDebitModeTransaction(webhookId, uuidv4());
    
        const webhookEvents = await webhookService.getWebhookEvents(webhookId);
        const content = getContentByExternalReferenceHeader(webhookEvents, externalRefId);
    
        expect(validateSchema(content)).toBe(true);
    });

    test('Test Webhoook Event 2', async () => {
        const webhookId = await webhookService.getWebhookId();
        const externalRefId = uuidv4();
        console.info(`webhoook Id: ${webhookId}, external ref: ${externalRefId}`)
    
        await createDebitModeTransaction(webhookId, externalRefId);
        await createDebitModeTransaction(webhookId, uuidv4());
    
        const webhookEvents = await webhookService.getWebhookEvents(webhookId);
        const content = getContentByExternalReferenceHeader(webhookEvents, externalRefId);
    
        expect(validateSchema(content)).toBe(true);
    });

    test('Test Webhoook Event 3', async () => {
        const webhookId = await webhookService.getWebhookId();
        const externalRefId = uuidv4();
        console.info(`webhoook Id: ${webhookId}, external ref: ${externalRefId}`)
    
        await createDebitModeTransaction(webhookId, externalRefId);
        await createDebitModeTransaction(webhookId, uuidv4());
    
        const webhookEvents = await webhookService.getWebhookEvents(webhookId);
        const content = getContentByExternalReferenceHeader(webhookEvents, externalRefId);
    
        expect(validateSchema(content)).toBe(true);
    });

    test('Test Webhoook Event 4', async () => {
        const webhookId = await webhookService.getWebhookId();
        const externalRefId = uuidv4();
        console.info(`webhoook Id: ${webhookId}, external ref: ${externalRefId}`)
    
        await createDebitModeTransaction(webhookId, externalRefId);
        await createDebitModeTransaction(webhookId, uuidv4());
    
        const webhookEvents = await webhookService.getWebhookEvents(webhookId);
        const content = getContentByExternalReferenceHeader(webhookEvents, externalRefId);
    
        expect(validateSchema(content)).toBe(true);
    });

    test('Test Webhoook Event 5', async () => {
        const webhookId = await webhookService.getWebhookId();
        const externalRefId = uuidv4();
        console.info(`webhoook Id: ${webhookId}, external ref: ${externalRefId}`)
    
        await createDebitModeTransaction(webhookId, externalRefId);
        await createDebitModeTransaction(webhookId, uuidv4());
    
        const webhookEvents = await webhookService.getWebhookEvents(webhookId);
        const content = getContentByExternalReferenceHeader(webhookEvents, externalRefId);
    
        expect(validateSchema(content)).toBe(true);
    });
  });