import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const model = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    temperature: 0
});

const messages = [
    new SystemMessage("Translate the following from English into Italian"),
    new HumanMessage("hi!"),
];

const stream = await model.stream(messages);

const chunks = [];
for await (const chunk of stream) {
    chunks.push(chunk);
    console.log(`${chunk.content}|`);
}
