import axios from "axios"; 

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const queryOpenTag = "&q=";

export default {
    search: function(query) {
        return axios.get(BASEURL + APIKEY + queryOpenTag + query);
    }
};