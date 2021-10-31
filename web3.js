var Web3 = require("web3");
var web3 = new Web3("http://localhost:7545");
// var web3 = new Web3("ws://localhost:8888");
const abi = [
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_manager",
          "type": "address[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_student",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_sex",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_brithday",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_nation",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_cardId",
          "type": "string"
        }
      ],
      "name": "addSudent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_student",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_schoolName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_layer",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_majoy",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_lengthSchooling",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_learningForm",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_Branch",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_class",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_studentId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_dateAdmission",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_studentStatus",
          "type": "string"
        }
      ],
      "name": "addEducate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_manager",
          "type": "address"
        }
      ],
      "name": "addManager",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_student",
          "type": "address"
        }
      ],
      "name": "getStudent",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "sex",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "brithday",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "nation",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "cardId",
              "type": "string"
            }
          ],
          "internalType": "struct student.person",
          "name": "a",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_student",
          "type": "address"
        }
      ],
      "name": "getEducate",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "schoolName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "layer",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "majoy",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "lengthSchooling",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "learningForm",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Branch",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "class",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "studentId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "dateAdmission",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "studentStatus",
              "type": "string"
            }
          ],
          "internalType": "struct student.educate",
          "name": "a",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_student",
          "type": "address"
        }
      ],
      "name": "approveIt",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_manager_add",
          "type": "address"
        }
      ],
      "name": "getManager",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]
var myContract = new web3.eth.Contract(abi,"0x9b4fe9a134f7c39Da64a5CcB45D7e7A131ebabAD");

// myContract1.deploy({
//     data:"0x00",
//     arguments:[["0xBC5Fd3E75368b42FBe0f15156Cd7E8791F22f0C9"]]
// })
// .send({from:"0xBC5Fd3E75368b42FBe0f15156Cd7E8791F22f0C9"})
// .on('receipt', function(receipt){
//    console.log(receipt.contractAddress) // 包含新合约地址
// })
// console.log(myContract);



// async function test() {
//     var myContract1 = new web3.eth.Contract(abi1,"0x8a04E16A15Bb402772fd6809557Bd7d2b3d53b61");
//     try {
//         await myContract1.methods.getManager("0xBC5Fd3E75368b42FBe0f15156Cd7E8791F22f0C9").call({from:"0xBC5Fd3E75368b42FBe0f15156Cd7E8791F22f0C9"})
//         .then(console.log)
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// }

// test();

async function proveManager(_inputAccount) {
  	  var accounts = await web3.eth.getAccounts();
      now_account = accounts[0];
    try{
      await myContract.methods.getManager(_inputAccount).call({from:now_account})
      .then(res=>{
        if(res == true){
          return res
        }
        else{
          return 
        }
      })  
    }
    catch(error) {
      console.log("you havent been authorized");
      console.log(error.message);
    }
      }

//       proveManager("0xECfE0B6A9B9076D9727d9adcfbD5C46315d2FD60","0xFC0EA5AC9eE3CB9fd1245828731a3396a2198300")

module.exports=web3;