/**
* Channel.js
*
* @description :: Data model for channels stored in the database.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },

    slug: {
      type: 'string',
      unique: true,
      required: true
    },

    chats: {
      collection: 'Chat',
      via: 'postedTo'
    }

  }
};

