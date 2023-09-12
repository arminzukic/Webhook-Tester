const getContentByExternalReferenceHeader = (webhookEvents,  customHeaderValue) => {
  return parseBase64ToObject(filterByCustomHeaderValue(webhookEvents, customHeaderValue)[0].content_base64)
}

const parseBase64ToObject = (base64Content) => {
  try {
      // Decode the base64 string to a regular string
      const decodedString = Buffer.from(base64Content, 'base64').toString('utf8');
  
      // Parse the decoded string into a JavaScript object
      const jsonObject = JSON.parse(decodedString);
  
      return jsonObject;
    } catch (error) {
      // Handle any potential errors, e.g., invalid base64 or JSON
      console.error('Error decoding base64 to object:', error);
      return null;
    }
}

const filterByCustomHeaderValue = (webhookEvents, customHeaderValue) => {
  return webhookEvents.filter((event) => {
    if (event.headers) {
      const externalRefHeader = event.headers.find(
        (header) => header.name === 'Externalreference'
      );
      return externalRefHeader && externalRefHeader.value === customHeaderValue;
    }
    return false;
  });
}

module.exports = getContentByExternalReferenceHeader;