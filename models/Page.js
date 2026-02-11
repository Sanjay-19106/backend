import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  label: String,
  url: String,
});

const CategorySchema = new mongoose.Schema({
  title: String,
  links: [LinkSchema],
});

const SectionSchema = new mongoose.Schema({
  title: String,
  categories: [CategorySchema],
});

const PageSchema = new mongoose.Schema({
  settings: {
    name: String,
    tagline: String,
    profileImage: String,
    backgroundType: String,
    backgroundValue: String,
  },
  sections: [SectionSchema],
});

export default mongoose.model("Page", PageSchema);
