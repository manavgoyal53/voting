[
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
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "voters_addresses",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidate",
				"type": "uint256"
			},
			{
				"name": "voter_roll",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "voters_roll_nums",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
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
	}
]
