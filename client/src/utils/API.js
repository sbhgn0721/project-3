import axios from "axios"

export default {


    //save a book to the database
    saveChore: function (savedChores) {
        console.log(savedChores);
        return axios.post("/api/chores", savedChores);
    },

    getChore: function (){
        return axios.get("/api/chores");
    },

    deleteChore: function(id){
        return axios.delete("/api/chores/" + id);
    }
}