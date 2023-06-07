

const { User, Trail, Review } = require('../models')

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({})
        },
        trails: async () => {
            return await Trail.find({}).populate('review')
        },
        reviews: async () => {
            return await Review.find({})
        },
        review: async (parent, args) => {
            return await Review.findById(args.id)
        }
    }
}

module.exports = resolvers