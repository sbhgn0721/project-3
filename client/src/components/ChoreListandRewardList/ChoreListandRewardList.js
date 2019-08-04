import React from "react";
import "./ChoreListandRewardList.css";

const ChoreListandRewardList =() =>(
    
        <div>
            <a href="/parent/chores/" className="btn btn-secondary" id="choreList-button"><span>Chore List</span></a>
            <a href="/parent/rewards/" className="btn btn-secondary" id="rewardList-button"><span>Reward List</span></a>
        </div>
    )


export default ChoreListandRewardList;