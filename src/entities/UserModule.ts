import { 
    Column,
    CreateDateColumn,
    Entity, PrimaryColumn, UpdateDateColumn,
    JoinColumn,
    ManyToOne
} from 'typeorm'

import { v4 as uuid } from 'uuid'

import { User } from './User'
import { Module } from './Module';

@Entity('userModule')
class UserModule {

    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'user_id' })
    @ManyToOne(() => User)
    user: User;

    @Column()
    user_id: string;

    @JoinColumn({ name: 'module_id'})
    @ManyToOne(() => Module)
    module: Module;

    @Column()
    module_id: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { UserModule }