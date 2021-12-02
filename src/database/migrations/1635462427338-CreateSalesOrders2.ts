import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserModules21635462427338 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'userModules',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'module_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default:'now()'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default:'now()'
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKUser',
                        referencedTableName:'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_id'],
                        onDelete:'SET NULL', //CASCADE
                        onUpdate:'SET NULL', //CASCADE
                    },
                    {
                        name: 'FKModules',
                        referencedTableName:'modules',
                        referencedColumnNames: ['id'],
                        columnNames: ['module_id'],
                        onDelete:'SET NULL', //CASCADE
                        onUpdate:'SET NULL', //CASCADE
                    }

                ]
            })
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('userModules')
    }

}
