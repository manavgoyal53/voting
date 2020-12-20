export const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "branch",
				"type": "string"
			},
			{
				"name": "roll",
				"type": "uint256"
			},
			{
				"name": "voters_address",
				"type": "address"
			}
		],
		"name": "add_voter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"name": "roll_number",
						"type": "uint256"
					},
					{
						"name": "branch",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					}
				],
				"name": "candiatesInfo",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidate",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "branch",
				"type": "string"
			}
		],
		"name": "getCandidates",
		"outputs": [
			{
				"components": [
					{
						"name": "roll_number",
						"type": "uint256"
					},
					{
						"name": "branch",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "senate_head",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "branch",
				"type": "string"
			}
		],
		"name": "winningCandidate",
		"outputs": [
			{
				"components": [
					{
						"name": "roll_number",
						"type": "uint256"
					},
					{
						"name": "branch",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]