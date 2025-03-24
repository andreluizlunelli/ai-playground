import { ChatGroq } from "@langchain/groq"
import {HumanMessage, SystemMessage} from "@langchain/core/messages"
import * as readlineSync from 'readline-sync'

const model = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    temperature: 0
})

console.info("To finish the program, type: quit \n")

let message  = new SystemMessage("Introduce yourself first. Say which llm you are in very short terms, and that you wanna have a nice conversation about the weather.")
let response = undefined
let readline = undefined

do {
    response = await model.invoke([message])

    console.log(response.content)

    readline = readlineSync.question('You: ')

    message = new HumanMessage(readline)

} while (readline !== "quit")
