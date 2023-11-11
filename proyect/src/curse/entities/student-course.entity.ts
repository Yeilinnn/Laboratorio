import { Student } from "src/students/entities/student.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Curse } from "./curse.entity";

@Entity('student_course')
export class StudentCurse {
  @PrimaryColumn({ name: 'student_id' })
  studentId: number;

  @PrimaryColumn({ name: 'course_id' })
  courseId: number;

  @ManyToOne(
    () => Student,
    student => student.curse,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
  students: Student[];

  @ManyToOne(
    () => Curse,
    curse => curse.students,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'curse_id', referencedColumnName: 'id' }])
  courses: Curse[];
}