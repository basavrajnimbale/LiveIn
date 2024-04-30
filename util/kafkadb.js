// // install kafkajs

// const { Kafka } = require('kafkajs');

// const kafka = new Kafka({
//     clientId: 'my-app',
//     brokers: ['localhost:9092'] // Your Kafka broker address
// });

// // for producer

// const producer = kafka.producer();

// const sendMessage = async () => {
//     await producer.connect();
//     await producer.send({
//         topic: 'my-topic',
//         messages: [
//             { value: 'Hello Kafka!' }
//         ],
//     });
//     await producer.disconnect();
// };

// sendMessage();

// // for consumer 

// const consumer = kafka.consumer({ groupId: 'test-group' });

// const run = async () => {
//     await consumer.connect();
//     await consumer.subscribe({ topic: 'my-topic', fromBeginning: true });

//     await consumer.run({
//         eachMessage: async ({ topic, partition, message }) => {
//             console.log({
//                 value: message.value.toString(),
//             });
//         },
//     });
// };

// run().catch(console.error);