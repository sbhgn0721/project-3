import React from "react";
//import { Modal } from 'react-bootstrap';
import Moment from 'moment';


import "./ChoreTableRow.css";

const ChoreTableRow = props => {
    return (
        <div>
            <table className="table choreTableRow">

                {props.choreList.map((item, index) => {
                    return (
                        <tbody>
                            <tr key={index}>
                                <td className="tableIndex">{index + 1}</td>
                                <td className="tableChoreName">{item.choreName}</td>
                                <td className="tableChoreLevel">{item.level}</td>
                                <td className="tableChoreDueDate">{Moment(item.dueDate).utc().format('YYYY-MM-DD')}</td>
                                <td className="tableEditBtn"><button data-toggle="modal" data-target="#editChore" id="editPenBtn" onClick={() => props.loadChoreModal(item)}><i className="fas fa-pen" ></i></button></td>
                                <td className="tableDeleteBtn"><button id={item._id} onClick={() => props.handleDeleteChore(item._id)}><i className="fas fa-trash-alt"></i></button></td>
                            </tr>

                        </tbody>)
                })}
            </table>


        </div>

    )
}

export default ChoreTableRow
