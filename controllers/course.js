const express= require('express');
const router= express.Router();
const db= require('../models');

router.get('/', (req, res)=> {
    db.course.findAll()
    .then(foundCourses => {
        console.log(foundCourses);
    })
    .catch(err => {
        console.log('find all error', err);
    })
})

router.post('/', (req, res)=> {
    db.course.findOrCreate({
        courseName: req.body.courseName,
        courseNumber: req.body.courseNumber,
        grade: req.body.grade,
        completed: req.body.completed,
    })
    .then(([createdCourse, created])=> {
        console.log(`created course: ${createdCourse}, created ${created}` );
    })
    .catch(err => {
        console.log('findOrCreate error', err);
    })
})

router.get('/:id', (req, res)=> {
    db.course.findOne({
        where: {id:req.params.id}
    })
    .then(foundCourse => {
        console.log(course);
    })
    .catch(err => {
        console.log('find one from id error', err);
    })
})

router.put('/:id', (req, res)=> {
    db.course.update({
        courseName: req.body.courseName,
        courseNumber: req.body.courseNumber,
        grade: req.body.grade,
        completed: req.body.completed},
        {where: {id: req.params.id}
    })
    .then(numRowsUpdated => {
        console.log(`${numRowsUpdated} rows were updated`);
    })
    .catch(err => {
        console.log('update error:', err);
    })
})

router.delete('/:id', (req, res)=> {
    db.course.destroy({
        where: {id: req.params.id}
    })
    .then(rowsDeleted => {
        console.log(`${rowsDeleted} rows deleted`);
    })
    .catch(err => {
        console.log('delete error:', err);
    })
})