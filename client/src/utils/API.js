import axios from "axios";

export default {
    getNYTArticles: function (topic, begin, end) {
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&begin_date=" + begin + "&end_date=" + end
        + "&api-key=5831fb50496e4c05b019f9f7649d5524")
    },
    // Gets all articles
    getSaved: function () {
        return axios.get("/api/article");
    },
    // Deletes the article with the given id
    deleteArticle: function (id) {
        return axios.delete("/api/article/" + id);
    },
    // Saves a article to the database
    saveArticle: function (articleData) {
        return axios.post("/api/article", articleData);
    }
};
