const database = 'BD3-ATV4-ISABELLY'; 
const collection = 'conversa';        

use(database); 

db.conversa.find({ contato: "Fernando" }).sort({ data_hora:  -1 });