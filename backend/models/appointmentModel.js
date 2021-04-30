import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
    {
        service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
    },
    {
        timestamps: true,
    }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;