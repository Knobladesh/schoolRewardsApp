import { IValue } from '../value/value';
export interface ICard {
    teacherId:number;
    studentId:number;
    teacherName: string;
    studentName: string;
    comment: string;
    rewardValues: IValue[];
    
}