import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entitys/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: ["src/entitys/**/*.ts"],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: [],
})
