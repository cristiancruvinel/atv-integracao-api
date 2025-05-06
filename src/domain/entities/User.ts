import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Contact } from "./Contact";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  nome!: string;

  @Column()
  sobrenome!: string;

  @Column()
  dataNascimento!: Date;

  @Column()
  matricula!: string;

  @Column()
  senha!: string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contatos!: Contact[];
}
