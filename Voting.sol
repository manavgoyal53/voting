pragma solidity ^0.4.0;
pragma experimental ABIEncoderV2;

contract VotingBallot {
    
    struct Candidate {
        uint roll_number;
        string branch;
        string name;
    }
    
    struct Voter{
        uint roll_number;
        bool voted;
        string branch;
    }
    
    address public senate_head;

    mapping(address => Voter) private voters;    
    mapping(uint=>uint) private vote_count;
    mapping(string=>Candidate[]) private candidates_info;

    constructor(Candidate[] memory candiatesInfo)  {
        
        senate_head = msg.sender;
        for (uint i = 0; i < candiatesInfo.length; i++) {
            candidates_info[candiatesInfo[i].branch].push(candiatesInfo[i]);
            vote_count[candiatesInfo[i].roll_number]=0;
        }
    }
    
    function vote(uint candidate) private {
        
        require(!voters[msg.sender].voted,"You have already voted");
        vote_count[candidate] += 1;
    }
    
    function add_voter(string branch, uint roll,address voters_address) private {
        require(msg.sender==senate_head,"Access denied. Only head can add a voter");
        voters[voters_address] = Voter({roll_number:roll,branch:branch,voted:false});
    }

    function winningCandidate(string branch) private view returns (Candidate)
    {
        uint winningVoteCount = 0;
        uint winningCandidateindx;
        Candidate[] storage list = candidates_info[branch];
        uint length = list.length;
        for (uint p = 0; p <length; p++) {
            if (vote_count[list[p].roll_number] > winningVoteCount) {
                winningVoteCount = vote_count[list[p].roll_number];
                winningCandidateindx = p;
            }
        }
        return list[winningCandidateindx];
    }
    
    function getCandidates(string branch) private view returns(Candidate []){
        Candidate[] result;
        Candidate[] list = candidates_info[branch];
        uint length = list.length;
        for (uint p = 0; p<length; p++){
            result.push(list[p]);
        }
        return result;
    }
}
