const { MongoClient } = require("mongodb");

const DB_USERNAME = "ivan";
const DB_PASSWORD = "Jafvrw520o";
const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@e-commerce-cluster.djjc0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const DB_DB = "e-commerce-database";

class DatabaseService {
  async populateDb(collectionName, data) {
    try {
      const collection = this.db.collection(collectionName);
      const numDocuments = await collection.countDocuments();
      if (numDocuments === 0) {
        await collection.insertMany(data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async connectToServer(uri = DB_URL) {
    try {
      this.client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await this.client.connect();
      this.db = this.client.db(DB_DB);
      // eslint-disable-next-line no-console
      console.log("Successfully connected to MongoDB.");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }
}

const dbService = new DatabaseService();

module.exports = { dbService };
