const getAllTasks = (req, res) => {
    res.send('All tasks')
}
const getTask = (req, res) => {
    res.send(`Task no. ${req.params.id} fetched.`)
}
const createTasks = (req, res) => {
    res.send(req.body)
}
const updateTasks = (req, res) => {
    res.send('udpated tasks')
}
const deleteTasks = (req, res) => {
    res.send('deleted tasks')
}

module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTasks
}