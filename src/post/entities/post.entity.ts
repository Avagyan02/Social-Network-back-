import { 
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity({ name: 'page' })
export class Post {

  // @PrimaryGeneratedColumn('uuid')
  // @Generated('uuid')
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'description', type: 'text' })
  description: string;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;

  @DeleteDateColumn()
  deletedOn: Date;
}