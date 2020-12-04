pragma solidity ^0.4.0;
pragma experimental ABIEncoderV2;
/// @title Voting with delegation.
contract VotingBallot {
 
    struct Voter {
        uint roll_number; //roll number of the voter
        bool voted;  // if true, that person already voted
    }
    
    struct Candidate {
        uint voteCount; 
        uint roll_number;
        string branch;
    }

    mapping(address => Voter) public voters;
    
    Candidate[] public candidates;

    constructor(Candidate[] memory candiateRollNums) {

        for (uint i = 0; i < candiateRollNums.length; i++) {
            candidates.push(Candidate({
                roll_number: candiateRollNums[i].roll_number,
                voteCount: 0,
                branch: candiateRollNums[i].branch
            }));
        }
    }
    
    function vote(uint candidate) public {
        Voter storage sender = voters[msg.sender];
        
        require(!sender.voted, "Already voted.");
        sender.voted = true;
        

        // If `proposal` is out of the range of the array,
        // this will throw automatically and revert all
        // changes.
        candidates[candidate].voteCount += 1;
    }

    /// @dev Computes the winning proposal taking all
    /// previous votes into account.
    function winningCandidate() public view
            returns (uint)
    {
         uint winningVoteCount = 0;
         uint winningCandidate;
        for (uint p = 0; p < candidates.length; p++) {
            if (candidates[p].voteCount > winningVoteCount) {
                winningVoteCount = candidates[p].voteCount;
                winningCandidate = p;
            }
        }
        return winningCandidate;
    }

    // Calls winningProposal() function to get the index
    // of the winner contained in the proposals array and then
    // returns the name of the winner
    function winnerName() public view
            returns (uint roll_number)
    {
        roll_number = candidates[winningCandidate()].roll_number;
    }
    
    function getCandidates(string branch) public returns(uint []){
        uint[] result;
        for (uint i=0;i<candidates.length;i++){
            if (keccak256(abi.encodePacked(candidates[i].branch))== keccak256(abi.encodePacked(branch))) {
                result.push(candidates[i].roll_number);
            }
        }
        return result;
    }
    
}