import { serverUrl } from "./serverUrl";
import { commonAPI } from "./commonAPI";

// 1 Add video API call to the sever
export const addVideoAPI = async (reqBody) => {
    return await commonAPI('post',`${serverUrl}/allVideos`,reqBody)
}

// 2 get all videos from the server
// 3 delete a particular video from the server
// 4 add watch-history video details to the server
// 5 get watch-history video details from the server
// 6 delete watch-history video details from the server
// 7 add category into the server
// 8 get all category from the server
// 9 delete a category from the server
// 10 get a particular vedio detrails from the server
// 11 update a particular video details from the server