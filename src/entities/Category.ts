import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Post } from "./Post";

@Entity({name: "categories"})
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar"})
    name: string

    @OneToMany(() => Post, (post: Post) => post.category)
    posts: Post[]
}