import React, { Component } from "react";
import NavTabs from "../components/NavTabs/NavTabs";
import AddChore from "../components/AddChore/AddChore";
import ChoreTableHead from "../components/ChoreTableHead/ChoreTableHead";
import ChoreTableRow from "../components/ChoreTableRow/ChoreTableRow";
import ChoreModal from "../components/ChoreModal/ChoreModal";
import API from "../utils/API";

class ChoreList extends Component {
    state = {
        choreName: "",
        level: "1",
        dueDate: "",
        openChoreModal: false,
        modalChoreId: "0",
        modalChoreName: "",
        modalLevel: "1",
        modalDueDate: "",
        choreList:[]
    }

    componentDidMount() {
        console.log("called chore list");
        API.getChore()
            .then(res => this.setState({ choreList: res.data }))
            .catch(err => console.log(err))
    }

    handleChoreNameChange = event => {
        this.setState({ choreName: event.target.value })
    }

    handleLevelChange = event => {
        this.setState({ level: event.target.value })
    }

    handleDueDateChange = event => {
        this.setState({ dueDate: event.target.value })
    }

    handleSaveChore = event => {
        event.preventDefault();
        console.log('hkhk', this.state.choreName)
        let savedChore = {
            choreName: this.state.choreName,
            level: this.state.level,
            completion: false
        }
        API.saveChore(savedChore)
            .then(this.setState({ message: alert("Your chore is saved!") }))
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    handleUpdateChore = (event,id) => {
        event.preventDefault();
        console.log('evet',event);
        let updatedChore = {
            id: id,
            choreName: this.state.modalChoreName,
            level: this.state.modalLevel,
            dueDate: this.state.modalDueDate,
            completion: false
        }
        console.log('update chore', updatedChore);
        API.updateChore(updatedChore)
        .then(this.setState({openChoreModal:false}))
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
    
    loadChoreModal = item => {

            this.setState(
            {
                openChoreModal: true,
                modalChoreId: item._id,
                modalChoreName: item.choreName,
                modalLevel: item.level,
                modalDueDate: item.dueDate
            }, ()=>{
                console.log(this.state.modalChoreName);

            })
    }

    closeModalHandler =()=>{
        this.setState({openChoreModal: false})
    }
    

    handleModalChoreNameChange = event => {
        this.setState({modalChoreName: event.target.value})
    }

    handleModalLevelChange =  event => {
        this.setState({modalLevel: event.target.value})
    }

    handleModalDueDateChange = event => {
        this.setState({modalDueDate: event.target.value})
    }

    
    render() {
        return (
            <div>
                <NavTabs />
                <AddChore 
                handleChoreNameChange = {this.handleChoreNameChange}
                handleLevelChange={this.handleLevelChange}
                handleDueDateChange={this.handleDueDateChange}
                handleSaveChore={this.handleSaveChore}
                />
                <ChoreTableHead />
                <ChoreTableRow 
                choreList = {this.state.choreList}
                openChoreModal = {this.state.openChoreModal}
                handleDeleteChore = {this.handleDeleteChore}
                loadChoreModal = {this.loadChoreModal}
                handleModalChoreNameChange = {this.handleModalChoreNameChange}
                handleModalLevelChange={this.handleModalLevelChange}
                handleModalDueDateChange={this.handleModalDueDateChange}
                />
                <ChoreModal 
                show={this.state.openChoreModal} 
                close={!this.state.openChoreModal} 
                modalChoreId={this.state.modalChoreId}
                handleModalChoreNameChange = {this.handleModalChoreNameChange}
                handleModalLevelChange={this.handleModalLevelChange}
                handleModalDueDateChange={this.handleModalDueDateChange}
                handleUpdateChore={this.handleUpdateChore}
                modalChoreName={this.state.modalChoreName}
                modalLevel={this.state.modalLevel}
                modalDueDate={this.state.modalDueDate}>
                </ChoreModal>
                
            </div>
        )
    }


}

export default ChoreList