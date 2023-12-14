import Project from "../models/project.js";
import Issue from "../models/issues.js";
//import { findById } from "../models/project.js";

//create project for user
 const create = async (req, res) => {
  try {
    Project.create({
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
    });
    return res.redirect("back");
  } catch (err) {
    console.log("error", err);
    return res.redirect("back");
  }
};

//find project and display it in project page
 const project = async (req, res) => {
  try {
    let project = await Project.findById(req.params.id).populate({
      path: 'issues',
    });
    if (project) {
      return res.render('project_page', {
        title: 'Project Page',
        project,
      });
    }
    return res.redirect('back');
  } catch (err) {
    console.log(err);
    return res.redirect('back');
  }
  // try {
  //   let project = await Project.findById(req.params.id).populate({
  //     path: "issues",
  //   });
  //   if (project) {
  //     return res.render("project_page", {
  //       title: "project page",
  //       project,
  //     });
  //   }

  //   return res.redirect("back");
  // } catch (err) {
  //   console.log("error", err);
  //   return res.redirect("back");
  // }
}

//create issue
 const createIssue = async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);
    if (project) {
      let issue = await Issue.create({
        title: req.body.title,
        description: req.body.description,
        labels: req.body.labels,
        author: req.body.author,
      });
      project.issues.push(issue);

      if (!(typeof req.body.labels === 'string')) {
        for (let label of req.body.labels) {
          let isPresent = project.labels.find((obj) => obj == label);
          if (!isPresent) {
            project.labels.push(label);
          }
        }
      } else {
        let isPresent = project.labels.find((obj) => obj == req.body.labels);
        if (!isPresent) {
          project.labels.push(req.body.labels);
        }
      }
      await project.save();
      return res.redirect(`back`);
    } else {
      return res.redirect('back');
    }
  } catch (err) {
    return res.redirect('back');
  }
  // try {
  //   let project = await Project.findById(req.params.id);
  //   if (project) {
  //     let issue = await Issue.create({
  //       title: req.body.title,
  //       description: req.body.description,
  //       labels: req.body.labels,
  //       author: req.body.author,
  //     });
  //     Project.issues.push(issue);

  //     if (!(typeof req.body.labels === "String")) {
  //       for (let label of req.body.labels) {
  //         let isPresent = project.labels.find((obj) => obj == label);
  //         if (!isPresent) {
  //           project.labels.push(label);
  //         }
  //       }
  //     } else {
  //       let isPresent = project.labels.find((obj) => obj == req.body.labels);
  //       if (!isPresent) {
  //         project.labels.push(req.body.labels);
  //       }
  //     }
  //     await project.save();
  //     return res.redirect("back");
  //   } else {
  //     return res.redirect("back");
  //   }
  // } catch (err) {
  //   return res.redirect("back");
  // }
};

export default {create,project,createIssue};