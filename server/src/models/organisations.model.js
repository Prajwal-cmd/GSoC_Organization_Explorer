import mongoose, { Schema } from "mongoose";


const ProjectSchema = new Schema({
    title: { type: String },
    short_description: { type: String },
    description: { type: String },
    student_name: { type: String },
    code_url: { type: String },
    project_url: { type: String }
});
const generateYearSchema = () => ({
    type: {
        projects_url: { type: String },
        num_projects: { type: Number },
        projects: [ProjectSchema]
    }
});

const orgSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      
      index: true,
    },
    image_url: {
      type: String,
      required: true,
       
    },
    image_background_color: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      index: true,
    },
    irc_channel: {
      type: String,
    },
    contact_email: {
      type: String,
    },
    mailing_list: {
      type: String,
    },
    twitter_url: {
      type: String,
    },
    blog_url: {
      type: String,
      
    },
    topics: {
      type: [String],
      required: true,
      index:true
    },
    technologies: {
      type: [String],
      required: true,
      index:true
    },
    years: {
        type: {
            2016: generateYearSchema(),
            2017: generateYearSchema(),
            2018: generateYearSchema(),
            2019: generateYearSchema(),
            2020: generateYearSchema(),
            2021: generateYearSchema(),
            2022: generateYearSchema(),
            2023: generateYearSchema(),
            2024: generateYearSchema(),
            2025: generateYearSchema()
        },
        required: true
    }
  }
  ,
  { timestamps: true }
);

export const Organisation = mongoose.model("Organisation", orgSchema);
