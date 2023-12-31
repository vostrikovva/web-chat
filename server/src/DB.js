class DataBase {
  static _instance = {
    chats: {},
  };

  constructor(initValue = {
    chats: {},
  }) {
    console.log('constructor ', this._instance);

    if (this._instance) return;

    this._instance = initValue;
  }

  static connectToRoom = ({ userName, roomName }) => {
    if (this._instance.chats[roomName]) {
      this._instance.chats[roomName] = {
        messages: [...this._instance.chats[roomName].messages],
        users: [...this._instance.chats[roomName].users, userName],
      };

      return;
    }

    this._instance.chats[roomName] = {
      messages: [],
      users: [userName],
    };
  };

  static getMessages = ({ roomName }) => {
    if (!this._instance.chats[roomName]) return [];

    return this._instance.chats[roomName].messages;
  };

  static sendMessage = ({ roomName, message, userName }) => {
    if (!this._instance.chats[roomName]) return;

    const messageInstance = {
      user: userName,
      content: message,
    };
    this._instance.chats[roomName].messages = [
      ...this._instance.chats[roomName].messages,
      messageInstance,
    ];
  };

  static getInstance() {
    return this._instance;
  }
}

module.exports = DataBase;
