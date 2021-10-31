var web3 = new Web3(Web3.giverProvider || "http://localhost:7545");
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
var accoun = [];
const submit = document.querySelector('.submit');

var myContract = new web3.eth.Contract(abi, "0xD4b2BFD2DEe4F949A860B463A2f57158e98f101D");

submit.addEventListener('click', () => {
    getAccount()
  });
async function proveManager() {
    const accounts = await web3.eth.getAccounts();
    const now_accounts = accounts[0]
    try {

        // const address = document.getElementById("manager_address").value
        var student_address = document.getElementById("student_address").value;
        var name = document.getElementById("name").value;
        var sex = document.getElementById("sex").value;
        var brithdays = document.getElementById("brithday").value;
        var nations = document.getElementById("nation").value;
        var cardId = document.getElementById("cardId").value;
        var school_name = document.getElementById("school_name").value;
        var layer = document.getElementById("layer").value;
        var major = document.getElementById("major").value;
        var school_system = document.getElementById("school_system").value;
        var learning_form = document.getElementById("learning_form").value;
        var branch = document.getElementById("branch").value;
        var _class = document.getElementById("_class").value;
        var student_id = document.getElementById("student_id").value;
        var date_admission = document.getElementById("date_admission").value;
        var student_status = document.getElementById("student_status").value;
        await myContract.methods.getManager(now_accounts).call({ from: now_accounts })
            .then(manager_result => {
                if (manager_result == true) {  
                    myContract.methods.addSudent(student_address, name, sex, brithdays, nations, cardId)
                        .send({ from: now_accounts ,gasPrice: '30000000000000',gas: '1500000',})
                        .on('transactionHash', function (hash) {
                            console.log("transactionHash", hash);
                        })
                    myContract.methods.addEducate(student_address,school_name,layer,major,school_system,learning_form,branch,_class,student_id,date_admission,student_status)
                    .send({ from: now_accounts ,gasPrice: '30000000000000',gas: '1500000',})
                    .on('transactionHash', function (hash) {
                        console.log("transactionHash", hash);
                    })
                        // .on('confirmation', function (confirmationNumber, receipt) {
                        //     console.log("confirmationNumber", confirmationNumber);
                        //     console.log("receipt", receipt);
                        // })
                        // .on('receipt', function (receipt) {
                        //     // receipt 相关例子
                        //     console.log(receipt);
                        // })
                }
                else {
                    window.alert("you r not manager")
                }
            })
    }
    catch (error) {
        window.alert("not owner!!")
        console.log(error);
    }
}
    async function a(){
        var acco = await ethereum.request({ method: 'eth_requestAccounts' });
        accoun = acco[0]
    try{
        console.log("acc",accoun);  
        await myContract.methods.getManager(accoun).call({from:accoun}).then(res=>{
            if (res == true){
                window.location.href = "/manager"
            }
            else{
                window.alert("you r not manager")
                window.location.href = "/"
            }
        })
    }
    catch(err){
        console.log(err);
        window.alert("not owner")
    }
}