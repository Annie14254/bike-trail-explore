const { Trail } = require('../models');

module.exports = {

    async createTrail({body}, res) {
        const newTrail = await Trail.create(body);

        if(!newTrail){
            console.log(err)
            return res.status(400).json({message: "Could not create new trail"})
        }
        console.log(newTrail)
        res.status(200).json(sample)
    },

    async getAllTrails(req, res) {
        const allTrails = await Trail.find({});

        if(!allTrails){
            console.log(err)
            return res.status(400).json({message: "No trails found"});
        }
        console.log(allTrails)
        res.status(200).json(allTrails)
    },

    async getOneTrail({params}, res){
        const oneTrail = await Trail.findById(params.id);

        if(!oneTrail){
            console.log(err)
            return res.status(400).json({message: "No trail with that ID found"});
        }
        console.log(oneTrail)
        res.status(200).json(oneTrail)
    }

//   create controller routes for update and delete
};

