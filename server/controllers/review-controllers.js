const { Review } = require('../models');

module.exports = {

    async createReview({body}, res) {
        const newReview = await Review.create(body);

        if(!newReview){
            console.log(err)
            return res.status(400).json({message: "Could not create new review"})
        }
        console.log(newReview)
        res.status(200).json(sample)
    },

    async getAllReviews(req, res) {
        const allReviews = await Review.find({});

        if(!allReviews){
            console.log(err)
            return res.status(400).json({message: "No reviews found"});
        }
        console.log(allReviews)
        res.status(200).json(allReviews)
    },

    async getOneReview({params}, res){
        const oneReview = await Review.findById(params.id);

        if(!oneReview){
            console.log(err)
            return res.status(400).json({message: "No review with that ID found"});
        }
        console.log(oneReview)
        res.status(200).json(oneReview)
    },

    async updateReview(req, res){
        const updateReview = await Review.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true})

        if(!updateReview){
            console.log(err);
            res.status(400).json({message: "No review with that ID found"})
        }
    },

    async deleteReview(req,res){
        const deleteReview = await Review.findByIdAndDelete(params.id)

        if(!deleteReview){
            console.log(err)
            res.status(400).json({message: "Could not delete review"})
        }

        console.log(deleteReview)
        res.status(200).json({message:"Successfully deleted review"})
      }

//   create controller routes for update and delete
};
