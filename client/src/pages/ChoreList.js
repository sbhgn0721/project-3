import React, {Component} from "react";
import AddChore from "../components/AddChore/AddChore";
import ChoreTable from "../components/ChoreTable/ChoreTable"
import API from "../utils/API";

class ChoreList extends Component {
    state= {
        choreName: "",
        level: "1",
        dueDate: "",
        choreList:[]
    }

    componentDidMount() {
        console.log("called chore list");
        API.getChore()
        .then(res => this.setState({ choreList: res.data}))
        .catch(err => console.log(err))
    }

    handleChoreNameChange = event => {
        this.setState({choreName: event.target.value})
    }

    handleLevelChange =  event => {
        this.setState({level: event.target.value})
    }

    handleDueDateChange = event => {
        this.setState({dueDate: event.target.value})
    }

    handleSaveChore =  event => {
        event.preventDefault();
        console.log('hkhk',this.state.choreName)
        let savedChore=  {
            choreName: this.state.choreName,
            level: this.state.level,
            completion: false
        }
        API.saveChore(savedChore)
        .then(this.setState({message: alert("Your chore is saved!")}))
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }

    handleDeleteChore = id => {
        if(window.confirm("delete chore item")){
            API.deleteChore(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
        }
        
    }
    
    render() {
        return(
            <div>
                <AddChore 
                handleChoreNameChange = {this.handleChoreNameChange}
                handleLevelChange={this.handleLevelChange}
                handleDueDateChange={this.handleDueDateChange}
                handleSaveChore={this.handleSaveChore}
                handleAddChore={this.handleAddChore}
                handleCancelAdd={this.handleCancelAdd}
                />
                <ChoreTable choreList = {this.state.choreList}
                handleDeleteChore = {this.handleDeleteChore}/>
            </div>
        )
    }
      
    
}

export default ChoreList