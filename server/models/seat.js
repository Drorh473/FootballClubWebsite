const mongoose = require('mongoose');
const seatSchema = new mongoose.Schema({
    isTaken: { type: Boolean, required: true},
    seatnum:{type:Number,required:true},
    seatrow:{type:Number,required:true},
    section:{type:Number,required:true, ref: 'section'},
},{collection:"Seat"});

const seat = mongoose.model('seat', seatSchema);
module.exports = seat;