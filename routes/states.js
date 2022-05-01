let express = require("express")
let States = require("../models").States

let router = express.Router()

router.get("/states", function (req, res, next) {
    States.findAll({order:["name"]} ).then(states => {
        return res.json(states)}).catch( err=> next(err))
})

router.get('/state/:name', function (req,res,next) {
    let stateName = req.params.name
    States.findOne({where: {name: stateName}}).then(state => {
        if (state) {
            return res.json(state)
        }else {
            return res.status(404).send(`State \"${stateName}\" not found`)
        }
    }).catch( err => next(err))
})
router.patch('/states/:name', function (req, res, next) {
    let stateName = req.params.name
    let stateVisited = req.body.visited

    States.update( {visited:stateVisited}, {where: {name: stateName}})
        .then(rowsUpdated => {
            let numberOfRowsUpdated = rowsUpdated[0]
            if (numberOfRowsUpdated === 1) {
                console.log(numberOfRowsUpdated)
                return res.send('ok')
            }
            console.log(numberOfRowsUpdated)
            return res.status(404).send(`state \"${stateName}\" not found`)
        }).catch(err => next(err))


})

module.exports = router