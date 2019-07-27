import React from "react";
import "./ChoreTable.css";

const ChoreTable = props => {
    return (

        <div>
            
            <table className="table choreTable">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Chore Name</th>
                        <th scope="col">Level</th>
                        <th scope="col">Due Date</th>
                        <th scope="col">Edit/ Delete</th>
                    </tr>
                </thead>
                
                {props.choreList.map((item, index)=>{
                    return(
                    <tbody>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.choreName}</td>
                        <td>{item.level}</td>
                        <td>{item.dueDate}</td>
                        <td>
                        <button data-toggle="modal" data-target="#editChore"><i className="fas fa-pen" ></i></button>
                        
                        <button id={item._id} onClick={() => props.handleDeleteChore(item._id)}>
                            <i className="fas fa-trash-alt trashCan"></i>
                        </button>
                        </td>
                    </tr>
                        
                </tbody>)
                })}
                
            </table>
            <div className="modal fade" id="editChore" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        value={props.choreList||props.choreList[0].choreName}
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}


export default ChoreTable;