const asyncHandler = require('express-async-handler')
// @desc Get goals
// @route GET api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).send({
        message: 'Getting goals'
    })
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
    res.status(200).send({
        message: 'Create Json Goals'
    })
})

// @desc Update goal
// @route PUT api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).send({
        message: `Updating ${req.params.id} Json Goals`
    })
})

// @desc Get goals
// @route DELETE api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).send({
        message: `Deleting Json Goal ${req.params.id}`
    })
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