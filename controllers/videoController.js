import { videos } from "../db";
import routes from "../routes"
export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => res.render("search", { pageTitle : "search", searchingBy : req.query.term, videos});
export const getUpload = (req, res) => res.render("upload", { pageTitle : "upload"});
export const postUpload = (req, res) => {
    const{
        body : { file,title,description }
        } = req
    // To Do : Upload and save video
    res.redirect(routes.videoDetail(324393));
}
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "videoDetail"});
export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "editVideo"});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "deleteVideo"});