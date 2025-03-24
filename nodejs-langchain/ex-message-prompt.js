import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    temperature: 0
});

const systemTemplate = "Translate the following from English into {language}";

const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", systemTemplate],
    ["user", "{text}"],
]);

const promptValue = await promptTemplate.invoke({
    language: "italian",
    text: "hi!",
});

const response = await model.invoke(promptValue);
console.log(`${response.content}`);
