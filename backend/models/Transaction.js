const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Your blog needs a title']
    },
    description: {
        type: String,
        required: [true, 'Your blog needs a description']
    },
    body: {
        type: String,
        required: [true, "Your blog needs body text"]
    },
    user_id: String,
    timestamp: String
});

module.exports = mongoose.model('Transaction', TransactionSchema);