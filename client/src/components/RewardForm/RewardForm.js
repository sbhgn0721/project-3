import React from "react"
import "./RewardForm.css"
import Moment from 'moment';

const RewardForm = props => {
    return (
        <div>
            <a href="/parent/chores"><button type="submit" className="btn btn-success" id="chore-list-button">Chore List</button></a>

            <form id="rewardForm">
                <div className="form-group form-row">
                    <div className="col-auto">
                        <label htmlFor="level1Reward">Level 1 Reward</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control rewardFormInput" id="level1Reward"
                            value={props.rewardLevel1Name}
                            name="level1RewardName"
                            onChange={props.handleLevel1RewardNameChange}
                        />

                    </div>
                    <div className="col-auto">
                        <button className="saveButton" onClick={props.handleSaveLevel1Reward}><i className="fas fa-save"></i></button>
                    </div>
                </div>

                {props.level1ChoreList.map(item => {
                    return (
                    <div className="form-group form-row choreCheckList">
                        <div className="input-group ">
                            
                            <input type="checkbox" className="choreCheckListCheckBox" aria-label="Checkbox for following text input" 
                            checked={item.completion} name={item.choreName} level={item.level} duedate={item.dueDate} id={item._id} onChange={props.handleCheckboxChange}
                            />
                            
                            <p className="choreCheckListItem"><span>{item.choreName}</span>  <span></span> <span>{Moment(item.dueDate).utc().format('YYYY-MM-DD')}</span></p>
                        </div>
                    </div>)
                })}
                

                <div className="form-group form-row" id="level2RewardRow">
                    <div className="col-auto">
                        <label htmlFor="level2Reward">Level 2 Reward</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control rewardFormInput" id="level2Reward"
                            value={props.rewardLevel2Name}
                            name="level2RewardName"
                            onChange={props.handleLevel2RewardNameChange}
                        />
                    </div>
                    <div className="col-auto">
                        <button className="saveButton" onClick={props.handleSaveLevel2Reward}><i className="fas fa-save"></i></button>
                    </div>


                </div>

                {props.level2ChoreList.map(item => {
                    return (
                    <div className="form-group form-row choreCheckList">
                        <div className="input-group ">
                            <input type="checkbox" className="choreCheckListCheckBox" aria-label="Checkbox for following text input" 
                            checked={item.completion} name={item.choreName} level={item.level} duedate={item.dueDate} id={item._id} onChange={props.handleCheckboxChange}
                            />
                            <p className="choreCheckListItem"><span>{item.choreName}</span>  <span></span> <span>{Moment(item.dueDate).utc().format('YYYY-MM-DD')}</span></p>
                        </div>
                    </div>)
                })}



                <div className="form-group form-row" id="level3RewardRow">
                    <div className="col-auto">
                        <label htmlFor="level3Reward">Level 3 Reward</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control rewardFormInput" id="level3Reward"
                            value={props.rewardLevel3Name}
                            name="level3RewardName"
                            onChange={props.handleLevel3RewardNameChange}
                        />
                    </div>
                    <div className="col-auto">
                        <button className="saveButton" onClick={props.handleSaveLevel3Reward}><i className="fas fa-save"></i></button>
                    </div>

                </div>

                {props.level3ChoreList.map(item => {
                    return (
                    <div className="form-group form-row choreCheckList">
                        <div className="input-group">
                            <input type="checkbox" className="choreCheckListCheckBox" aria-label="Checkbox for following text input" 
                            checked={item.completion} name={item.choreName} level={item.level} duedate={item.dueDate} id={item._id} onChange={props.handleCheckboxChange}
                            />
                            <p className="choreCheckListItem"><span>{item.choreName}</span>  <span></span> <span>{Moment(item.dueDate).utc().format('YYYY-MM-DD')}</span></p>
                        </div>
                    </div>)
                })}



            </form>

        </div>
    )
}

export default RewardForm