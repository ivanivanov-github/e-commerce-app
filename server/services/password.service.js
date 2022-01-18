class PasswordService {
  constructor() {}

  async getAllProducts() {
    try {
      return await this.collection.find({}).toArray();
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = { PasswordService };
