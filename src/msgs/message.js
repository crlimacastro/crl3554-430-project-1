const { APIJSONResponse } = require('../utils/serverUtils.js');

class Message extends APIJSONResponse {
  constructor(text) {
    super();

    this.text = text;
    this.received = false;
  }

  flagReceived() {
    this.received = true;
  }
}

module.exports = Message;
