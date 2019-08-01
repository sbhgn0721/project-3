import React, {Component} from "react";
import NavTabs from "../components/NavTabs/NavTabs";
import RewardForm from "../components/RewardForm/RewardForm"
import API from "../utils/API";


class RewardList extends Component{

    state = {
        rewardLevel1Name: "",
        rewardLevel2Name: "",
        rewardLevel3Name: "",
        level: "1",
        completion: "false",

        rewardList: [],
        level1ChoreList: [],
        level2ChoreList: [],
        level3ChoreList: []

    }

    componentDidMount() {
        API.getReward()
           .then(res => {
               let level1Name = res.data.filter(obj=>obj.level ==="1")[0].rewardName;
               let level2Name = res.data.filter(obj=>obj.level ==="2")[0].rewardName;
               let level3Name = res.data.filter(obj=>obj.level ==="3")[0].rewardName;

               this.setState({
                rewardList: res.data,
                rewardLevel1Name: level1Name,
                rewardLevel2Name: level2Name,
                rewardLevel3Name: level3Name})
                

            })
            .then(()=>{
                API.getChoreByLevel("1")
                    .then(res => {
                        console.log("is it here", res.data[0].chores);
                        this.setState({level1ChoreList: res.data[0].chores})
                    })

                API.getChoreByLevel("2")
                    .then(res=>{
                        console.log("is it here", res.data[0].chores);
                        this.setState({level2ChoreList: res.data[0].chores})

                    })
                API.getChoreByLevel("3")
                    .then(res=>{
                        console.log("is it here", res.data[0].chores);
                        this.setState({level3ChoreList: res.data[0].chores})

                    })

            })
           .catch(err => console.log(err))

    }

    handleLevel1RewardNameChange = event => {
        this.setState({rewardLevel1Name: event.target.value})
    }

    handleSaveLevel1Reward = event => {
        event.preventDefault();
        console.log('level1',this.state.rewardLevel1Name)
        let savedReward=  {
            id: this.state.rewardList.filter(obj=>obj.level ==="1")[0]._id,
            rewardName: this.state.rewardLevel1Name,
            level: "1"
        }
        API.saveReward(savedReward)
        .then(this.setState({message: alert("Your reward is saved!")}))
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }

    handleLevel2RewardNameChange = event => {
        this.setState({rewardLevel2Name: event.target.value})
    }

    handleSaveLevel2Reward = event => {
        event.preventDefault();
        console.log('level 2',this.state.rewardLevel2Name)
        let savedReward=  {
            id: this.state.rewardList.filter(obj=>obj.level ==="2")[0]._id,
            rewardName: this.state.rewardLevel2Name,
            level: "2"
        }
        API.saveReward(savedReward)
        .then(this.setState({message: alert("Your reward is saved!")}))
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }

    handleLevel3RewardNameChange = event => {
        this.setState({rewardLevel3Name: event.target.value})
    }

    handleSaveLevel3Reward = event => {
        event.preventDefault();
        console.log('level 3',this.state.rewardLevel3Name)
        let savedReward=  {
            id: this.state.rewardList.filter(obj=>obj.level ==="3")[0]._id,
            rewardName: this.state.rewardLevel3Name,
            level: "3"
        }
        API.saveReward(savedReward)
        .then(this.setState({message: alert("Your reward is saved!")}))
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }

    handleCheckboxChange = event => {
        event.preventDefault();
        console.log('completion status', this.state.completion);
        console.log("what is event",event.target);
        const itemName = event.target.name;
        const isChecked = event.target.checked;
        const id = event.target.id;
        const level = event.target.getAttribute('level');
        const dueDate = event.target.getAttribute('duedate');
     
        console.log("combine",itemName, isChecked, id, level,dueDate);
        let chore = {
            id:id,
            choreName: itemName,
            completion: isChecked,
            dueDate: dueDate,
            level: level
        }

        API.updateChore(chore)
       // .then(this.setState({message:alert("Good job!")}))
        .then(res => this.componentDidMount())
        .catch(err =>console.log(err))
        

    }



    render(){
        return(
            <div>
                <NavTabs />
                <RewardForm 
                rewardLevel1Name = {this.state.rewardLevel1Name}
                rewardLevel2Name = {this.state.rewardLevel2Name}
                rewardLevel3Name = {this.state.rewardLevel3Name}
                completion = {this.state.completion}


                level1ChoreList = {this.state.level1ChoreList}
                handleLevel1RewardNameChange ={this.handleLevel1RewardNameChange}
                handleSaveLevel1Reward ={this.handleSaveLevel1Reward}
                handleCheckboxChange={this.handleCheckboxChange}

                level2ChoreList = {this.state.level2ChoreList}
                handleLevel2RewardNameChange ={this.handleLevel2RewardNameChange}
                handleSaveLevel2Reward ={this.handleSaveLevel2Reward}
                
                level3ChoreList = {this.state.level3ChoreList}
                handleLevel3RewardNameChange ={this.handleLevel3RewardNameChange}
                handleSaveLevel3Reward ={this.handleSaveLevel3Reward}
                />
              

                


                
                
            </div>

        )
    }
}

export default RewardList