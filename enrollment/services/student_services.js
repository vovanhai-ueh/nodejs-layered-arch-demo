import * as db from '../data_access/db.js'

export async function getAll() {
    return await db.query(`SELECT * from student`)
}

export async function getStudentById(id) {
    return await db.query(`SELECT * from student WHERE student_id = ${id}`)
}

export async function create(student){
    const result = await db.execute(
        `INSERT INTO student(fullname,email,phone)
    VALUES ('${student.fullname}','${student.email}','${student.phone}')`
    );
    let message = 'Error in creating student';
    if (result.affectedRows) {message = 'Student created successfully';}
    return {message};
}