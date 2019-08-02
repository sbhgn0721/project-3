import axios from "axios"

export default {


    saveChore: function (savedChores) {
        console.log(savedChores);
        return axios.post("/api/chores", savedChores);
    },

    getChore: function () {
        return axios.get("/api/chores");
    },

    deleteChore: function (id) {
        return axios.delete("/api/chores/" + id);
    },

    updateChore: function(updatedChore) {
        console.log(updatedChore);
        let id = updatedChore.id;
        return axios.put("/api/chores/"+id, updatedChore);
    },

    saveReward: function(savedReward) {
        console.log(savedReward);
        return axios.put("/api/rewards/"+savedReward.id, savedReward);
    },

    getReward: function(){
        return axios.get("/api/rewards");
    },

    getChoreByLevel: function(level){
        return axios.get("/api/rewards/level/"+level);
    }
}