import React from "react";
import { Link, withRouter } from 'react-router-dom';

import "./ChoreListandRewardList.css";

const ChoreListandRewardList =() =>(
    
        <div>
            {/* // eslint-disable-next-line */}
            <a href="/parent/chores/" className="btn btn-secondary" id="choreList-button"><span>Chore List</span></a>
            {/* // eslint-disable-next-line */}
            <a href="/parent/rewards/" className="btn btn-secondary" id="rewardList-button"><span>Reward List</span></a>

        </div>
    )


export default ChoreListandRewardList;