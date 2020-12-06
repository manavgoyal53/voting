pragma solidity ^0.4.0;
pragma experimental ABIEncoderV2;
/// @title Voting with delegation.
contract VotingBallot {
    
    struct Candidate {
        uint roll_number;
        string branch;
        string name;
    }

    mapping(address => bool) public voters_addresses;
    mapping(uint => bool) public voters_roll_nums;
    mapping(uint=>uint) vote_count;
    mapping(string=>Candidate[]) candidates_info;

    constructor(Candidate[] memory candiatesInfo) {

        for (uint i = 0; i < candiatesInfo.length; i++) {
            candidates_info[candiatesInfo[i].branch].push(candiatesInfo[i]);
        }
    }
    
    function vote(uint candidate, uint voter_roll) public {
        
        require(!voters_roll_nums[voter_roll],"You have already voted");
        require(!voters_addresses[msg.sender], "This address has already been used for voting.");

        
        voters_addresses[msg.sender] = true;
        voters_roll_nums[voter_roll] = true;

        // If `proposal` is out of the range of the array,
        // this will throw automatically and revert all
        // changes.
        vote_count[candidate] += 1;
    }

    // Computes the winning proposal taking all
    /// previous votes into account.
    function winningCandidate(string branch) public view returns (uint winningCandidate)
    {
        uint winningVoteCount = 0;
        Candidate[] list = candidates_info[branch];
        uint length = list.length;
        for (uint p = 0; p <length; p++) {
            if (vote_count[list[p].roll_number] > winningVoteCount) {
                winningVoteCount = vote_count[list[p].roll_number];
                winningCandidate = p;
            }
        }
        return winningCandidate;
    }
    
    // function getCandidates(string branch) public returns(uint []){
    //     uint[] result;
    //     for (uint i=0;i<candidates.length;i++){
    //         if (keccak256(abi.encodePacked(candidates[i].branch))== keccak256(abi.encodePacked(branch))) {
    //             result.push(candidates[i].roll_number);
    //         }
    //     }
    //     return result;
    // }
    
    function getCandidates(string branch) public returns(Candidate []){
        Candidate[] result;
        Candidate[] list = candidates_info[branch];
        uint length = list.length;
        for (uint p = 0; p<length; p++){
            result.push(list[p]);
        }
        return result;
    }
}
