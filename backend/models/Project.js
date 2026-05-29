const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a project title'],
            trim: true,
            maxlength: [100, 'Title cannot exceed 100 characters']
        },
        description: {
            type: String,
            required: [true, 'Please provide a project description'],
            maxlength: [500, 'Description cannot exceed 500 characters']
        },
        technologies: {
            type: [String],
            required: true,
            default: []
        },
        image: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: 'fas fa-code'
        },
        liveUrl: {
            type: String,
            default: null,
            match: /^https?:\/\/.+/
        },
        githubUrl: {
            type: String,
            default: null,
            match: /^https?:\/\/.+/
        },
        featured: {
            type: Boolean,
            default: false
        },
        order: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

// Index for efficient queries
projectSchema.index({ featured: -1, order: 1 });

module.exports = mongoose.model('Project', projectSchema);
