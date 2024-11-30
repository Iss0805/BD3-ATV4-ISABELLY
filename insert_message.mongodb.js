const database = 'BD3-ATV4-ISABELLY';
const collection = 'conversa';

use(database);

db[collection].insertMany(
    [
        
            {
                "contato": "Alice",
                "data_hora": "2024-11-18T09:00:00Z",
                "msg": "Lucas, qual é o seu desenho favorito? Eu sempre gostei muito de 'Avatar: A Lenda de Aang'."
            },
            {
                "contato": "Lucas",
                "data_hora": "2024-11-18T09:05:00Z",
                "msg": "Eu adoro 'Avatar' também, Alice! Mas 'Hora de Aventura' é o meu preferido. É tão criativo e cheio de lições escondidas."
            },
            {
                "contato": "Sophia",
                "data_hora": "2024-11-18T10:20:00Z",
                "msg": "Miguel, você já assistiu 'Rick and Morty'? Eu acho incrível como eles misturam humor com temas científicos."
            },
            {
                "contato": "Miguel",
                "data_hora": "2024-11-18T10:25:00Z",
                "msg": "Sim, Sophia! É um dos meus favoritos. Eu também curto muito 'Futurama', que tem uma vibe parecida."
            },
            {
                "contato": "Daniel",
                "data_hora": "2024-11-18T11:30:00Z",
                "msg": "Clara, lembra de quando assistíamos 'Dragon Ball Z' quando éramos crianças? Aquilo marcou minha infância."
            },
            {
                "contato": "Clara",
                "data_hora": "2024-11-18T11:35:00Z",
                "msg": "Claro, Daniel! Eu era fascinada pelas batalhas e pelo Goku. Hoje em dia, eu também gosto muito de 'My Hero Academia'."
            },
            {
                "contato": "Lara",
                "data_hora": "2024-11-18T12:45:00Z",
                "msg": "João, eu adoro 'Steven Universo'. Você já assistiu? Acho a mensagem sobre empatia e amizade incrível."
            },
            {
                "contato": "João",
                "data_hora": "2024-11-18T12:50:00Z",
                "msg": "Eu também gosto de 'Steven Universo', Lara. Mas 'Gravity Falls' é o que eu mais curto. Adoro os mistérios e o humor."
            },
            {
                "contato": "Fernando",
                "data_hora": "2024-11-18T15:00:00Z",
                "msg": "Júlia, tem algum desenho que você não cansa de assistir? Eu posso assistir 'Os Simpsons' para sempre!"
            },
            {
                "contato": "Júlia",
                "data_hora": "2024-11-18T15:10:00Z",
                "msg": "'Os Simpsons' são ótimos, Fernando. Mas nada supera 'Scooby-Doo' para mim! Adoro os mistérios e a turma da Máquina do Mistério."
            },
            {
                "contato": "Fernando",
                "data_hora": "2024-11-18T15:15:00Z",
                "msg": "Verdade, Júlia! Scooby e Salsicha são hilários. Você já assistiu os filmes? Sempre fico impressionado com como eles solucionam os casos."
            },

            {
                "contato": "Fernando",
                "data_hora": "2024-11-18T15:40:00Z",
                "msg": "Júlia, você já assistiu 'Os Simpsons' mais antigos? Eu acho que eles eram mais irreverentes na primeira temporada."
            },
            {
                "contato": "Júlia",
                "data_hora": "2024-11-18T15:45:00Z",
                "msg": "Sim, Fernando, os primeiros episódios de 'Os Simpsons' são bem mais ácidos e sarcásticos, mas continuam ótimos até hoje."
            },
            {
                "contato": "Fernando",
                "data_hora": "2024-11-18T15:50:00Z",
                "msg": "Eu adoro como 'Os Simpsons' conseguem fazer piadas atemporais. Mesmo com o passar dos anos, muitas ainda são muito atuais."
            }
        
        
    ]
);