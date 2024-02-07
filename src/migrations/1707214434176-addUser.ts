import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUser1707214434176 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
             `CREATE TABLE "devops"."user" (userId uuid,userName varchar)`,
        )
            
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE IF EXISTS "devops"."user"`,
       )
    }

}
