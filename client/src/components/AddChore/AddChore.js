import React from "react";
import "./AddChore.css";

const AddChore = props => {
    return (

        <div>
            <ul>


                <li><button type="submit" className="btn btn-warning" id="save-button" onClick={props.handleSaveChore}>Save Chore</button></li>
                <li><a href="/parent/rewards"><button type="submit" className="btn btn-success" id="reward-list-button">Reward List</button></a></li>


            </ul>



            <form id="addChoreForm">
                <div className="form-group">
                    <label htmlFor="choreName">Chore Name</label>
                    <input type="text" className="form-control" id="choreName" placeholder="clean your room"
                        value={props.choreName}
                        name="choreName"
                        onChange={props.handleChoreNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rewardLevel">Reward Level</label>
                    <select className="form-control" id="rewardLevel" value={props.level} name="level" onChange={props.handleLevelChange}>
                        <option value="1">Level 1</option>
                        <option value="2">Level 2</option>
                        <option value="3">Level 3</option>

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="dueDate">Due Date</label>
                    <input type="date" className="form-control" id="dueDate" placeholder="07/26/2019"
                        value={props.dueDate}
                        name="dueDate"
                        onChange={props.handleDueDateChange}
                    />
                </div>
            </form>


        </div>
    )
}


export default AddChore;