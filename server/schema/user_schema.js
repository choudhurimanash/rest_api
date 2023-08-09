import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
});

// Create a separate counter collection to store the auto-incremented value
const CounterSchema = mongoose.Schema({
    _id: { type: String, required: true },
    sequence_value: { type: Number, default: 0 }
});

const Counter = mongoose.model('counter', CounterSchema);

// Pre-save hook to auto-increment the 'id' field before saving the document
userSchema.pre('save', async function (next) {
    const doc = this;
    try {
        const counter = await Counter.findByIdAndUpdate(
            { _id: 'user_id' },
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        doc.id = counter.sequence_value;
        next();
    } catch (error) {
        next(error);
    }
});

const user = mongoose.model('user', userSchema);

export default user;
