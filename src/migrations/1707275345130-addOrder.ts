import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOrder1707275345130 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "devops"."order" (orderId uuid,orderName varchar)`,
       )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE IF EXISTS "devops"."order"`,
       )
    }

}
