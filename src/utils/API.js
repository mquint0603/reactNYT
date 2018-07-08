import axios from "axios";

export default {
    getArticles: function (topic, begin, end) {
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&begin_date=" + begin + "&end_date=" + end
        + "&api-key=5831fb50496e4c05b019f9f7649d5524")
    }
}