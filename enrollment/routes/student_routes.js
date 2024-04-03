import express from 'express';
const student_router = express.Router();
import * as students from '../services/student_services.js'

/* GET . */
student_router.get('/', async function (req, res, next) {
    try {
        res.json(await students.getAll());
    } catch (err) {
        console.error(`Error while getting students `, err.message);
        next(err);
    }
});
/* GET . */
student_router.get('/:id', async function (req, res, next) {
    try {
        res.json(await students.getStudentById(req.params.id));
    } catch (err) {
        console.error(`Error while getting students `, err.message);
        next(err);
    }
});

/* POST todos */
student_router.post('/', async function(req, res, next) {
    try {
        res.json(await students.create(req.body));
    } catch (err) {
        console.error(`Error while creating student`, err.message);
        next(err);
    }
});

export {student_router};