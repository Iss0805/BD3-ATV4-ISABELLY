const database = 'git';
const collection = 'conversa';

use(database);

db[collection].find({ "contato": "Júlia", msg: { $regex: "continuam", $options: "i" } });