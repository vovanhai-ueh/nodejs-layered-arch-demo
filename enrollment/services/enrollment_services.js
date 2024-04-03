import * as db from '../data_access/db.js'

export async function getRegisteredCourse(student_id) {
    return await db.query(`SELECT * from course_registry WHERE student_id=${student_id}`)
}

export async function getRegisteredStudentOfCourse(course_id) {
    return await db.query(`SELECT * from course_registry WHERE course_id=${course_id}`)
}


export async function register(student_id,course_id) {
    const result = await db.execute(
        `INSERT INTO enroll_db.course_registry(student_id,course_id)
    VALUES 
    ('${student_id}','${course_id}')`
    );

    let message = 'Error in registering';

    if (result.affectedRows) {
        message = 'Course register successfully';
    }
    return {message};
}

export async function updateResult(student_id,course_id, result, note) {
    const rowsAffected = await db.execute(
        `UPDATE course_registry set result=${result}', note='${note}'
        WHERE (' student_id = ${student_id} and course_id=${course_id}')`
    );

    let message = 'Error in registering';

    if (rowsAffected.affectedRows) {
        message = 'Course register successfully';
    }
    return {message};
}