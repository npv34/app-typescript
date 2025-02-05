import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Role } from "./Role"

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar"})
    email: string

    @Column({type: "varchar"})
    password: string

    @Column({type: "varchar"})
    isActive: boolean

    @ManyToOne(() => Role, (role: Role) => role.users)
    role: Role
}