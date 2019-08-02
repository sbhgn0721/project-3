import React from "react";
import Moment from "moment";
import "./ChoreModal.css";

const ChoreModal = props => {
    return (
            <div className="modal fade" id="editChore" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editChoreLabel">Edit Chore</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="editChoreForm">
                                <div className="form-group">
                                    <label htmlFor="choreName">Chore Name</label>
                                    <input type="text" className="form-control" id="choreName" placeholder="clean your room"
                                        value={props.modalChoreName}
                                        name="choreName"
                                        onChange={props.handleModalChoreNameChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="rewardLevel">Reward Level</label>
                                    <select className="form-control" id="rewardLevel" value={props.modalLevel} name="level" onChange={props.handleModalLevelChange}>
                                        <option value="1">Level 1</option>
                                        <option value="2">Level 2</option>
                                        <option value="3">Level 3</option>

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dueDate">Due Date</label>
                                    <input type="date" className="form-control" id="dueDate" placeholder="07/26/2019"
                                        value={Moment(props.modalDueDate).utc().format('YYYY-MM-DD')}
                                        name="dueDate"
                                        onChange={props.handleModalDueDateChange}
                                    />
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(event) => props.handleUpdateChore(event,props.modalChoreId)}>Update Chore</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default ChoreModal