import React from "react"
import "./ChildForm.css"
import "../../fullcalendar.scss";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Moment from 'moment';

const ChildForm = props => {
    return (
        <div>
            <form id="childForm">
                <div className="form-group form-row">
                    <div className="col-auto">
                        <label htmlFor="level1Reward"><strong>Level 1 Reward</strong></label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control rewardFormInput" id="level1Reward"
                            value={props.rewardLevel1Name}
                            name="level1RewardName"
                            readOnly
                        />
                    </div>
                </div>

                {props.level1ChoreList.map(item => {
                    return (
                        <div className="form-group form-row choreCheckList">
                            <div className="input-group ">

                                <input type="checkbox" className="choreCheckListCheckBox" aria-label="Checkbox for following text input"
                                    checked={item.completion} name={item.choreName} level={item.level} duedate={item.dueDate} id={item._id} readOnly
                                />

                                <p className="choreCheckListItem"><span>{item.choreName}</span>  <span></span> <span>{Moment(item.dueDate).utc().format('MM-DD-YYYY')}</span></p>
                            </div>
                        </div>)
                })}


                <div className="form-group form-row" id="level2RewardRow">
                    <div className="col-auto">
                        <label htmlFor="level2Reward"><strong>Level 2 Reward</strong></label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control rewardFormInput" id="level2Reward"
                            value={props.rewardLevel2Name}
                            name="level2RewardName"
                            readOnly
                        />
                    </div>
                </div>

                {props.level2ChoreList.map(item => {
                    return (
                        <div className="form-group form-row choreCheckList">
                            <div className="input-group ">
                                <input type="checkbox" className="choreCheckListCheckBox" aria-label="Checkbox for following text input"
                                    checked={item.completion} name={item.choreName} level={item.level} duedate={item.dueDate} id={item._id} readOnly
                                />
                                <p className="choreCheckListItem"><span>{item.choreName}</span>  <span></span> <span>{Moment(item.dueDate).utc().format('MM-DD-YYYY')}</span></p>
                            </div>
                        </div>)
                })}



                <div className="form-group form-row" id="level3RewardRow">
                    <div className="col-auto">
                        <label htmlFor="level3Reward"><strong>Level 3 Reward</strong></label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control rewardFormInput" id="level3Reward"
                            value={props.rewardLevel3Name}
                            name="level3RewardName"
                            readOnly
                        />
                    </div>
                </div>

                {props.level3ChoreList.map(item => {
                    return (
                        <div className="form-group form-row choreCheckList">
                            <div className="input-group">
                                <input type="checkbox" className="choreCheckListCheckBox" aria-label="Checkbox for following text input"
                                    checked={item.completion} name={item.choreName} level={item.level} duedate={item.dueDate} id={item._id} readOnly
                                />
                                <p className="choreCheckListItem"><span>{item.choreName}</span>  <span></span> <span>{Moment(item.dueDate).utc().format('MM-DD-YYYY')}</span></p>
                            </div>
                        </div>)
                })}
            </form>
            <div id="calendarHolder">
                <FullCalendar
                    defaultView="dayGridWeek"
                    plugins={[dayGridPlugin]}
                    themeSystem='standard'
                    header={{ left: 'title' }} //, center:"Chores", right:"prev, next"}}
                    style={{ margin: 10 }}
                    fullscreen="false"
                    events={props.choreEventArr}
                    eventColor="purple"
                    height="parent"
                    eventTextColor="yellow"
                    displayEventTime={false}
                />
            </div>
        </div>
    )
}

export default ChildForm