const moongoose = require ('mongoose')
const Schema = moongoose.Schema

const eventSchema = new Schema({
        id: String,
        name: String,
        url: String,
        start: String,
        user:
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ,
    },
    {
        timestamps:{
            createdAt : true,
            updatedAt : true,
        }

    })

module.exports = moongoose.model('Events',eventSchema)