let instance;

function DataBase(initialValues = {}) {
  if (instance) return instance;

  instance = {
    chats: initialValues,
    getInstance() { return this.chats; },
    connectToRoom({ roomName, userName }) {
      if (this.chats[roomName]) {
        this._instance.chats[roomName] = {
          messages: [...this._instance.chats[roomName].messages],
          users: [...this._instance.chats[roomName].users, userName],
        };

        return;
      }

      this.chats[roomName] = {
        messages: [],
        users: [userName],
      };
    },
    arrowThis: () => this,
  };

  return instance;
}

module.exports = DataBase;
