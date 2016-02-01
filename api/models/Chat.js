/**
* Chat.js
*
* @description :: Data model for chats stored in the database.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    content: {
      type: 'string',
      required: true
    },

    postedTo: {
      model: 'Channel',
      required: true
    }

  }
};

