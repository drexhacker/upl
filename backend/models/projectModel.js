import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        thumbnail: { type: String, required: true, default: '/img/noimage.jpg' },
        images: { type: Array, required: true },
        client: { type: String, default: '' },
        location: { type: String, default: "Uganda" },
        contractor: { type: String, default: "UNIQUE PLUMBERS" },
        description: { type: String, required: true },
        isCompleted: { type: Boolean, required: true, default: false },
        remarks: { type: String, required: true }
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;