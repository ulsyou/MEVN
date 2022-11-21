import http from "../src/common/http";
const url = "/api/post";

export default class api {
    static async getAllPost() {
        const res = await http.get(url);
        return res.data;
    }
    static async getPostByID(id) {
        const res = await http.get(`${url}/${id}`);
        return res.data;
    }
    static async addPost(post) {
        const res = await http.post(url, post);
        return res.data;
    }
    static async updatePost(id, post) {
        const res = await http.patch(`${url}/${id}`, post);
        return res.data;
    }
    static async deletePost(id) {
        const res = await http.delete(`${url}/${id}`);
        return res.data;
    }
}