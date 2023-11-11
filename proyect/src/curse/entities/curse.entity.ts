import { Student } from "src/students/entities/student.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('courses')
export class Curse {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'curse_name', length: 255, unique: true })
  courseName: string;
  
  @ManyToMany(
    () => Student,
    student => student.curse,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  students?: Student[];
}