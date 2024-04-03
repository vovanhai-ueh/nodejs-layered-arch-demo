import * as db from '../data_access/db.js'

export async function getAll() {
    return await db.query(`SELECT * from course`)
}

export async function getCourseById(id) {
    return await db.query(`SELECT * from course WHERE course_id = ${id}`)
}

export async function create(course) {
    const result = await db.execute(
        `INSERT INTO course(course_name,no_credit,description)
    VALUES ('${course.course_name}','${course.no_credit}','${course.description}')`
    );
    let message = 'Error in creating Course';
    if (result.affectedRows) {
        message = 'Course created successfully';
    }
    return {message};
}