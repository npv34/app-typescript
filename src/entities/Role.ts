import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { User } from "./User"

@Entity({name: "roles"})
export class Role {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar"})
    name: string

    @OneToMany(() => User, (user: User) => user.role)
    users: User[]
}