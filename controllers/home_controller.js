import Project from "../models/project.js";

const home = async (req,res) => {
  try {
    let projects = await Project.find({}).sort({cretedAt:-1});
    return res.render("home", {
      title: "issueTracker | home",
      projects,
    });
  } catch (err) {
    console.log("error", err);
    return;
  }
};

export default {home};
