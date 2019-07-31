import React from "react";
import "./ChoreTableHead.css";


const ChoreTableHead = props => {
    return (

        <div>
            
            <table className="table choreTableHead">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className="tableIndex"></th>
                        <th scope="col" className="tableChoreName">Chore Name</th>
                        <th scope="col" className="tableChoreLevel">Level</th>
                        <th scope="col" className="tableChoreDueDate">Due Date</th>
                        <th scope="col" className="tableEditBtn">Edit</th>
                        <th scope="col" className="tableDeleteBtn">Delete</th>

                    </tr>
                </thead>
               
                
                
            </table>


        </div>
    )
}


export default ChoreTableHead;