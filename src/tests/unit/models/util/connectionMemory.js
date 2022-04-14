const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const serverMemory = new MongoMemoryServer();

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectionMemory = async () => {
    const MONGO_DB_URL = await serverMemory.getUri();
    return MongoClient.connect(MONGO_DB_URL, OPTIONS);
};

module.exports = { connectionMemory };
