import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from 'dotenv'

//dotenv.config()
const envPath = __dirname + '/../.env' + (process.env.NODE_ENV ? '.' + process.env.NODE_ENV : '')
dotenv.config({path : envPath})

console.log(`DB_HOST : ${process.env.DB_HOST}`)
console.log(`DB_PORT : ${process.env.DB_PORT}`)
console.log(`DB_USER : ${process.env.DB_USER}`)
console.log(`DB_NAME : ${process.env.DB_NAME}`)

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || '',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: ["src/entitys/**/*.ts"],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: [],
})
