import React, { Component } from "react";
import NavTabs from "../components/NavTabs/NavTabs";
import ChildForm from "../components/ChildForm/ChildForm"
import API from "../utils/API";
import Moment from "moment";


class Child extends Component {

    state = {
        rewardLevel1Name: "",
        rewardLevel2Name: "",
        rewardLevel3Name: "",
        level: "1",
        completion: "false",

        rewardList: [],
        level1ChoreList: [],
        level2ChoreList: [],
        level3ChoreList: [],
        choreEvents: []
    }

    componentDidMount() {
        let choreEventArr = [];
        API.getReward()
            .then(res => {
                let level1Name = res.data.filter(obj => obj.level === "1")[0].rewardName;
                let level2Name = res.data.filter(obj => obj.level === "2")[0].rewardName;
                let level3Name = res.data.filter(obj => obj.level === "3")[0].rewardName;

                this.setState({
                    rewardList: res.data,
                    rewardLevel1Name: level1Name,
                    rewardLevel2Name: level2Name,
                    rewardLevel3Name: level3Name,
                })
            })
            .then(() => {
                API.getChoreByLevel("1")
                    .then(res => {
                        console.log("is it here", res.data[0].chores);
                        this.setState({ level1ChoreList: res.data[0].chores })
                        for (let i = 0; i < res.data[0].chores.length; i++) {
                            console.log(res.data[0].chores[i].dueDate +" - " +  Moment(res.data[0].chores[i].dueDate).format("MM/DD/YYYY"));
                            choreEventArr.push({ title: "1 - " + res.data[0].chores[i].choreName, date: res.data[0].chores[i].dueDate });
                        }
                    })

                API.getChoreByLevel("2")
                    .then(res => {
                        console.log("is it here", res.data[0].chores);
                        this.setState({ level2ChoreList: res.data[0].chores })
                        for (let i = 0; i < res.data[0].chores.length; i++) {
                            console.log(res.data[0].chores[i].dueDate +" - " +  Moment(res.data[0].chores[i].dueDate).format("MM/DD/YYYY"));
                            choreEventArr.push({ title: "2 - " + res.data[0].chores[i].choreName, date: res.data[0].chores[i].dueDate });
                        }
                    })
                API.getChoreByLevel("3")
                    .then(res => {
                        console.log("is it here", res.data[0].chores);
                        this.setState({ level3ChoreList: res.data[0].chores })
                        for (let i = 0; i < res.data[0].chores.length; i++) {
                            console.log(res.data[0].chores[i].dueDate +" - " +  Moment(res.data[0].chores[i].dueDate).format("MM/DD/YYYY"));
                            choreEventArr.push({ title: "3 - " + res.data[0].chores[i].choreName, date: res.data[0].chores[i].dueDate });
                        }
                        console.log(choreEventArr);
                        this.setState({ choreEvents: choreEventArr });
                    })
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                <NavTabs />
                <ChildForm
                    rewardLevel1Name={this.state.rewardLevel1Name}
                    rewardLevel2Name={this.state.rewardLevel2Name}
                    rewardLevel3Name={this.state.rewardLevel3Name}
                    level1ChoreList={this.state.level1ChoreList}
                    level2ChoreList={this.state.level2ChoreList}
                    level3ChoreList={this.state.level3ChoreList}
                    choreEventArr={this.state.choreEvents}
                />
            </div>
        )
    }
}

export default Child