const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
// @desc Get goals
// @route GET api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).send(goals)
})

// @desc Get goals
// @route POST api/goals
// @access private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        // custom error
        // res.status(400).json({ message: 'Please add a text field'})
        // express error handler
        throw new Error('Please add a text field')
    }
    console.log(req.body);
    const goal = await Goal.create({ text: req.body.text })
    res.status(200).json(goal)
})

// @desc Update goal
// @route PUT api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedGoal)
})

// @desc Get goals
// @route DELETE api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove()

    res.status(200).json({ id: req.params.id })
})

// @desc Patch goals
// @route PATCH api/goals/:id
// @access private
const patchGoal = asyncHandler(async (req, res) => {
    res.status(200).send({
        message: `Patching ${req.params.id} Json Goals`
    })
})

module.exports = { 
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
    patchGoal
}