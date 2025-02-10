import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Category } from "./Category"
import { User } from "./User"
@Entity({name: "posts"})
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar"})
    title: string

    @Column({type: "varchar"})
    description?: string

    @Column({type: "text"})
    content: string

    @ManyToOne(() => Category, (category: Category) => category.posts, {onDelete: "CASCADE"})
    category: Category

    @ManyToOne(() => User, (auth: User) => auth.posts, {onDelete: "CASCADE"})
    auth: User

}