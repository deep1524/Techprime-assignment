const mongoose =  require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title : {required: true, type: String},
    startDate: {required: true, type: Date},
    endDate: {required: true, type: Date},
    type: {required: true, type: String},
    reason: {required: true, type: String},
    division: {required:  true, type: String},
    category: {required: true, type: String},
    priority: {required: true, type: String},
    department: {required: true, type: String},
    location: {required: true, type: String},
    status: {required: true, default:"registered", type: String},
    updatedAt: {required: true, type: Date, default: Date.now()}
});

const ProjectModel = mongoose.model("projects", ProjectSchema);
module.exports = ProjectModel;