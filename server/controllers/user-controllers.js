 const { User } = require('../models');

module.exports = {

    async createUser({body}, res) {
        const newUser = await User.create(body);

        if(!newUser){
            console.log(err)
            return res.status(400).json({message: "Could not create new user"})
        }
        console.log(newUser)
        res.status(200).json(sample)
    },

    async getAllUsers(req,res) {
        const allUsers = await User.find({});

        if(!allUsers){
            console.log(err)
            return res.status(400).json({message: "No users found"});
        }
        console.log(allUsers)
        res.status(200).json(allUsers)
    },

    async getOneUser({params}, res){
        const oneUser = await User.findById(params.id);

        if(!oneUser){
            console.log(err)
            return res.status(400).json({message: "No user with that ID found"});
        }
        console.log(oneUser)
        res.status(200).json(oneUser)
    }

//   create controller routes for update and delete
};

