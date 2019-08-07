import React, { Component } from "react";
import NavTabs from "../components/NavTabs/NavTabs";
import RewardForm from "../components/RewardForm/RewardForm"
import API from "../utils/API";

export default class RewardList extends Component {

    state = {
        rewardLevel1Name: "",
        rewardLevel2Name: "",
        rewardLevel3Name: "",
        level: "1",
        completion: "false",

        showRewardLevel1Button: "none",
        showRewardLevel2Button: "none",
        showRewardLevel3Button: "none",

        showRewardLevel1Animation: "none",
        showRewardLevel2Animation: "none",
        showRewardLevel3Animation: "none",
        
        rewardList: [],
        level1ChoreList: [],
        level2ChoreList: [],
        level3ChoreList: []

    }

    componentDidMount() {
        API.getReward()
            .then(res => {
                let level1Name = res.data.filter(obj => obj.level === "1")[0].rewardName;
                let level2Name = res.data.filter(obj => obj.level === "2")[0].rewardName;
                let level3Name = res.data.filter(obj => obj.level === "3")[0].rewardName;

                this.setState({
                    rewardList: res.data,
                    rewardLevel1Name: level1Name,
                    rewardLevel2Name: level2Name,
                    rewardLevel3Name: level3Name
                })

            })
            .then(() => {
                API.getChoreByLevel("1")
                    .then(res => {
                        // console.log("is it here", res.data[0].chores);
                        this.setState({ level1ChoreList: res.data[0].chores })
                        const level1TotalChoreCount = res.data[0].chores.length;
                        console.log("level1TotalChoreCount: ", level1TotalChoreCount);
                        const level1CompletedChoreCount = res.data[0].chores.filter(item => item.completion === true).length;
                        console.log("level1CompletedChoreCount: ", level1CompletedChoreCount);
                        const level1ChoreCompletionStatus = res.data[0].chores.filter(item => item.completion === false).length === 0;
                        console.log("level1ChoreCompletionStatus: ", level1ChoreCompletionStatus);
                        if (level1ChoreCompletionStatus === true) {
                            this.setState({showRewardLevel1Button:"block"})
                        } else {
                            this.setState({showRewardLevel1Button:"none"})
                        }
                    })

                API.getChoreByLevel("2")
                    .then(res => {
                        // console.log("is it here", res.data[0].chores);
                        this.setState({ level2ChoreList: res.data[0].chores })
                        const level2TotalChoreCount = res.data[0].chores.length;
                        console.log("level2TotalChoreCount: ", level2TotalChoreCount);
                        const level2CompletedChoreCount = res.data[0].chores.filter(item => item.completion === true).length;
                        console.log("level2CompletedChoreCount: ", level2CompletedChoreCount);
                        const level2ChoreCompletionStatus = res.data[0].chores.filter(item => item.completion === false).length === 0;
                        console.log("level2ChoreCompletionStatus: ", level2ChoreCompletionStatus);
                        if (level2ChoreCompletionStatus === true) {
                            this.setState({showRewardLevel2Button:"block"})
                        } else {
                            this.setState({showRewardLevel2Button:"none"})
                        }
                    })

                API.getChoreByLevel("3")
                    .then(res => {
                        // console.log("is it here", res.data[0].chores);
                        this.setState({ level3ChoreList: res.data[0].chores })
                        const level3TotalChoreCount = res.data[0].chores.length;
                        console.log("level3TotalChoreCount: ", level3TotalChoreCount);
                        const level3CompletedChoreCount = res.data[0].chores.filter(item => item.completion === true).length;
                        console.log("level3CompletedChoreCount: ", level3CompletedChoreCount);
                        const level3ChoreCompletionStatus = res.data[0].chores.filter(item => item.completion === false).length === 0;
                        console.log("level3ChoreCompletionStatus: ", level3ChoreCompletionStatus);
                        if (level3ChoreCompletionStatus === true) {
                            this.setState({showRewardLevel3Button:"block"})
                        } else {
                            this.setState({showRewardLevel3Button:"none"})
                        }
                    })

            })
            .catch(err => console.log(err))

    }

    handleLevel1RewardNameChange = event => {
        this.setState({ rewardLevel1Name: event.target.value })
    }

    handleSaveLevel1Reward = event => {
        event.preventDefault();
        console.log("level1", this.state.rewardLevel1Name)
        let savedReward = {
            id: this.state.rewardList.filter(obj => obj.level === "1")[0]._id,
            rewardName: this.state.rewardLevel1Name,
            level: "1"
        }
        API.saveReward(savedReward)
            .then(this.setState({ message: alert("Your reward is saved!") }))
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    handleLevel2RewardNameChange = event => {
        this.setState({ rewardLevel2Name: event.target.value })
    }

    handleSaveLevel2Reward = event => {
        event.preventDefault();
        console.log("level 2", this.state.rewardLevel2Name)
        let savedReward = {
            id: this.state.rewardList.filter(obj => obj.level === "2")[0]._id,
            rewardName: this.state.rewardLevel2Name,
            level: "2"
        }
        API.saveReward(savedReward)
            .then(this.setState({ message: alert("Your reward is saved!") }))
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    handleLevel3RewardNameChange = event => {
        this.setState({ rewardLevel3Name: event.target.value })
    }

    handleSaveLevel3Reward = event => {
        event.preventDefault();
        console.log("level 3", this.state.rewardLevel3Name)
        let savedReward = {
            id: this.state.rewardList.filter(obj => obj.level === "3")[0]._id,
            rewardName: this.state.rewardLevel3Name,
            level: "3"
        }
        API.saveReward(savedReward)
            .then(this.setState({ message: alert("Your reward is saved!") }))
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    handleCheckboxChange = event => {
        event.preventDefault();
        // console.log("completion status", this.state.completion);
        console.log("what is event", event.target);
        const itemName = event.target.name;
        const isChecked = event.target.checked;
        console.log("last item checked:", isChecked, "\n" + itemName);
        const id = event.target.id;
        const level = event.target.getAttribute("level");
        const dueDate = event.target.getAttribute("duedate");

        console.log("combine", itemName, isChecked, id, level, dueDate);
        let chore = {
            id: id,
            choreName: itemName,
            completion: isChecked,
            dueDate: dueDate,
            level: level
        }

        API.updateChore(chore)
            // .then(this.setState({message:alert("Good job!")}))
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))


    }

    toggleRewardLevelButton = (level) => {
        const index = "showRewardLevel" + level + "Button";
        let newState = "block";
        if(this.state[index] !== "none") {
            newState = "none";
        }

        console.log("Pre reward toggle state", this.state)

        this.setState({
            [index]: newState
        }, () => {
            console.log("Post reward toggle state", this.state)
        });
    }

    toggleRewardLevelButton = (level) => {
        const indexButton = "showRewardLevel" + level + "Button";
        const indexAnimation = "showRewardLevel" + level + "Animation";
        let newButtonState = "block";
        let newAnimationState = "block";
        
        if (this.state[indexButton] !== "none") {
            newButtonState = "none";
        }

        console.log("Pre reward toggle state", this.state)

        if (this.state[indexAnimation] !== "none") {
            newAnimationState = "none";
        }

        console.log("Pre reward animation state", this.state)

        this.setState({
            [indexButton]: newButtonState
        }, () => {
            console.log("Post reward toggle state", this.state)
        });
        this.setState({
            [indexAnimation]: newAnimationState
        }, () => {
            console.log("Post animation toggle state", this.state)
        });
    }


    render() {
        return (
            <div>
                <NavTabs />
                <RewardForm
                    rewardLevel1Name={this.state.rewardLevel1Name}
                    rewardLevel2Name={this.state.rewardLevel2Name}
                    rewardLevel3Name={this.state.rewardLevel3Name}
                    completion={this.state.completion}

                    toggleRewardLevelButton={this.toggleRewardLevelButton}
                    showRewardLevel1Button={this.state.showRewardLevel1Button}
                    showRewardLevel2Button={this.state.showRewardLevel2Button}
                    showRewardLevel3Button={this.state.showRewardLevel3Button}
                    showRewardLevel1Animation={this.state.showRewardLevel1Animation}
                    showRewardLevel2Animation={this.state.showRewardLevel2Animation}
                    showRewardLevel3Animation={this.state.showRewardLevel3Animation}

                    level1ChoreList={this.state.level1ChoreList}
                    handleLevel1RewardNameChange={this.handleLevel1RewardNameChange}
                    handleSaveLevel1Reward={this.handleSaveLevel1Reward}
                    handleCheckboxChange={this.handleCheckboxChange}

                    level2ChoreList={this.state.level2ChoreList}
                    handleLevel2RewardNameChange={this.handleLevel2RewardNameChange}
                    handleSaveLevel2Reward={this.handleSaveLevel2Reward}

                    level3ChoreList={this.state.level3ChoreList}
                    handleLevel3RewardNameChange={this.handleLevel3RewardNameChange}
                    handleSaveLevel3Reward={this.handleSaveLevel3Reward}
                />

            </div>

        )
    }
}