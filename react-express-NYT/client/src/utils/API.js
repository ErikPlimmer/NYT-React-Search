import axios from "axios"; 


export default {

    getArticles: function() {
      return axios.get("/api/articles");
    },
    // Gets the book with the given id
    getBook: function(id) {
      return axios.get("/api/articles/" + id);
    },
    // Deletes the book with the given id
    deleteArticle: function(id) {
      return axios.delete("/api/articles/" + id);
    },
  
    //Saves a article to the database
    saveArticle: function(articleData) {
      return axios.post("/api/articles", articleData);
    },
    


};
// const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
// const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
// const queryOpenTag = "&q=";

// export default {
//     search: function(query) {
//         return axios.get(BASEURL + APIKEY + queryOpenTag + query);
//     }
// };