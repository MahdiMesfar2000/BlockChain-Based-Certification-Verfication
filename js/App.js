window.CONTRACT = {
  address: '0x4ED639Bd46843177E0C0D91f5Fb74CFD1944BeD5',
  network: 'https://rpc.sepolia.org/',
  explore: 'https://sepolia.etherscan.io/',
  // Your Contract ABI 
  abi:[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_add",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_info",
          "type": "string"
        }
      ],
      "name": "add_Exporter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "hash",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_ipfs",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_studentAddress",
          "type": "address"
        }
      ],
      "name": "addDocHash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_add",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_newInfo",
          "type": "string"
        }
      ],
      "name": "alter_Exporter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "changeOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_add",
          "type": "address"
        }
      ],
      "name": "delete_Exporter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_hash",
          "type": "bytes32"
        }
      ],
      "name": "deleteHash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_exporter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_ipfsHash",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_studentAddress",
          "type": "address"
        }
      ],
      "name": "addHash",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "count_Exporters",
      "outputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "count_hashes",
      "outputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "EXPORTER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_hash",
          "type": "bytes32"
        }
      ],
      "name": "findDocHash",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_add",
          "type": "address"
        }
      ],
      "name": "getExporterInfo",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "OWNER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_add",
          "type": "address"
        }
      ],
      "name": "roleInfo",
      "outputs": [
        {
          "internalType": "bool[3]",
          "name": "",
          "type": "bool[3]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "STUDENT_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
}

//login
async function connect() {
  if (window.ethereum) {
    try {
      const selectedAccount = await window.ethereum
        .request({
          method: 'eth_requestAccounts',
        })
        .then((accounts) => {
          return accounts[0]
        })
        .catch(() => {
          throw Error('No account selected 👍')
        })

      window.userAddress = selectedAccount
      console.log(selectedAccount)
      window.localStorage.setItem('userAddress', window.userAddress)
      window.location.reload()
    } catch (error) {}
  } else {
    $('#upload_file_button').attr('disabled', true)
    $('#doc-file').attr('disabled', true)
    // Show The Warning for not detecting wallet
    document.querySelector('.alert').classList.remove('d-none')
  }
}

window.onload = async () => {
  

  window.userAddress = window.localStorage.getItem('userAddress')

  if (window.ethereum) {
    //here we need MetaMask to read and write to our Contract
    window.web3 = new Web3(window.ethereum)
    window.contract = new window.web3.eth.Contract(
      window.CONTRACT.abi,
      window.CONTRACT.address,
    )
    //checking if user loged in




    getRolesList()

    $('#loader').hide()
    $('#loginButton').hide()
    $('#recent-header').hide()
    $('.loader-wraper').fadeOut('slow')
    hide_txInfo()
    $('#upload_file_button').attr('disabled', true)
    try{
    document.getElementById('Exporter-Req-address').value = window.userAddress;
    }catch (error) {

    }

    if (window.userAddress.length > 10) {
      // let isLocked =await window.ethereum._metamask.isUnlocked();
      //  if(!isLocked) disconnect();
      
      $('#logoutButton').show()
      $('#loginButton').hide()
      $('#userAddress')
        .html(`<i class="fa-solid fa-address-card mx-2 text-primary"></i>${truncateAddress(
        window.userAddress,
      )}
       <a class="text-info" href="${window.CONTRACT.explore}/address/${
        window.userAddress
      }" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-square-arrow-up-right text-warning"></i></a>  
       </a>`)

//if admin is viewed then show the doc,exporter counters
      if (window.location.pathname == '/admin.html') await getCounters()

      await getExporterInfo()
      await get_ChainID()
      await get_ethBalance()
      $('#Exporter-info').html(
        `<i class="fa-solid fa-building-columns mx-2 text-warning"></i>${window.info}`,
      )

      setTimeout(() => {
        listen()
        
      }, 0)
    } else {
      $('#logoutButton').hide()
      $('#loginButton').show()
      $('#upload_file_button').attr('disabled', true)
      $('#doc-file').attr('disabled', true)
      $('.box').addClass('d-none')
      $('.loading-tx').addClass('d-none')
    }
  } else {
    //No metamask detected
    $('#logoutButton').hide()
    $('#loginButton').hide()
    $('.box').addClass('d-none')
    $('#upload_file_button').attr('disabled', true)
    $('#doc-file').attr('disabled', true)
    document.querySelector('.alert').classList.remove('d-none')

    // alert("Please download metamask extension first.\nhttps://metamask.io/download/");
    // window.location = "https://metamask.io/download/"
  }
  
}


function hide_txInfo() {
  $('.transaction-status').addClass('d-none')
}

function show_txInfo() {
  $('.transaction-status').removeClass('d-none')
}
async function get_ethBalance() {
  await web3.eth.getBalance(window.userAddress, function (err, balance) {
    if (err === null) {
      $('#userBalance').html(
        "<i class='fa-brands fa-gg-circle mx-2 text-danger'></i>" +
          web3.utils.fromWei(balance).substr(0, 6) +
          '',
      )
    } else $('#userBalance').html('n/a')
  })
}

if (window.ethereum) {
  window.ethereum.on('accountsChanged', function (accounts) {
    connect()
  })
}

function printUploadInfo(result) {
  $('#transaction-hash').html(
    `<a target="_blank" title="View Transaction at Polygon Scan" href="${window.CONTRACT.explore}/tx/` +
      result.transactionHash +
      '"+><i class="fa fa-check-circle font-size-2 mx-1 text-white mx-1"></i></a>' +
      truncateAddress(result.transactionHash),
  )
  $('#file-hash').html(
    `<i class="fa-solid fa-hashtag mx-1"></i> ${truncateAddress(
      window.hashedfile,
    )}`,
  )
  $('#contract-address').html(
    `<i class="fa-solid fa-file-contract mx-1"></i> ${truncateAddress(
      result.to,
    )}`,
  )
  const studentAddress = document.getElementById('student-address').value;
  $('#time-stamps').html('<i class="fa-solid fa-clock mx-1"></i>' + getTime())
  $('#blockNumber').html(
    `<i class="fa-solid fa-link mx-1"></i>${result.blockNumber}`,
  )
  $('#blockHash').html(
    `<i class="fa-solid fa-shield mx-1"></i> ${truncateAddress(
      result.blockHash,
    )}`,
  )
  $('#to-netowrk').html(
    `<i class="fa-solid fa-chart-network"></i> ${window.chainID}`,
  )
  $('#to-netowrk').hide()
  $('#gas-used').html(
    `<i class="fa-solid fa-user mx-1"></i> ${truncateAddress(studentAddress)}`,
  )
  $('#loader').addClass('d-none')
  $('#upload_file_button').addClass('d-block')
  show_txInfo()
  get_ethBalance()

  $('#note').html(`<h5 class="text-info">
   Transaction Confirmed to the BlockChain 😊<i class="mx-2 text-info fa fa-check-circle" aria-hidden="true"></i>
   </h5>`)
  listen()
}


async function sendHash() {
  $('#loader').removeClass('d-none')
  $('#upload_file_button').slideUp()
  $('#note').html(
    `<h5 class="text-info">Please confirm the transaction 🙂</h5>`,
  )
  $('#upload_file_button').attr('disabled', true)
  get_ChainID()
  // Initilize Ipfs

  const file = document.getElementById('doc-file').files[0]
  const nodeId = 'ipfs-' + Math.random();
  node = await Ipfs.create({ repo: nodeId });
  window.node = node;
  const status = node.isOnline() ? 'online' : 'offline';
  console.log(`Node status: ${status}`);
  const fileReader = new FileReader()
  fileReader.readAsArrayBuffer(file)
  fileReader.onload = async (event) => {
    let result = await node.add(fileReader.result)
    window.ipfsCid = result.path
    MyCID = window.ipfsCid + '/'
    console.log('My-CID 1: ' + MyCID)
  }

  // =================================================
  if (window.hashedfile) {
    const file = document.getElementById('doc-file').files[0]
    const nodeId = 'ipfs-' + Math.random();
    node = await Ipfs.create({ repo: nodeId });
    console.log("Your node: " + nodeId);
    const status = node.isOnline() ? 'online' : 'offline';
    console.log(`Node status: ${status}`);
    const fileReader = new FileReader()
    fileReader.readAsArrayBuffer(file)
    fileReader.onload = async (event) => {
      let result = await node.add(fileReader.result)
      window.ipfsCid = result.path
      console.log(result);
    }
    const studentAddress = document.getElementById('student-address').value;
    await window.contract.methods
    .addDocHash(window.hashedfile, window.ipfsCid, studentAddress)
    .send({ from: window.userAddress })
      .on('transactionHash', function (_hash) {
        $('#note').html(
          `<h5 class="text-info p-1 text-center">Please wait for transaction to be mined...</h5>`,
        )
      })

      .on('receipt', function (receipt) {
        printUploadInfo(receipt)
        generateQRCode()
      })

      .on('confirmation', function (confirmationNr) {})
      .on('error', function (error) {
        console.log(error.message)
        $('#note').html(`<h5 class="text-center">${error.message} 😏</h5>`)
        $('#loader').addClass('d-none')
        $('#upload_file_button').slideDown()
      })
  }
}

//delete document hash from the contract
//only the exporter who add it can delete it
async function deleteHash() {
  $('#loader').removeClass('d-none')
  $('#upload_file_button').slideUp()
  $('#note').html(
    `<h5 class="text-info">Please confirm the transaction 🙂</h5>`,
  )
  $('#upload_file_button').attr('disabled', true)
  get_ChainID()

  if (window.hashedfile) {
    await window.contract.methods
      .deleteHash(window.hashedfile)
      .send({ from: window.userAddress })
      .on('transactionHash', function (hash) {
        $('#note').html(
          `<h5 class="text-info p-1 text-center">Please wait for transaction to be mined 😴</h5>`,
        )
      })

      .on('receipt', function (receipt) {
        $('#note').html(
          `<h5 class="text-info p-1 text-center">Document Deleted 😳</h5>`,
        )

        $('#loader').addClass('d-none')
        $('#upload_file_button').slideDown()
      })

      .on('confirmation', function (confirmationNr) {
        console.log(confirmationNr)
      })
      .on('error', function (error) {
        console.log(error.message)
        $('#note').html(`<h5 class="text-center">${error.message}</h5>`)
        $('#loader').addClass('d-none')
        $('#upload_file_button').slideDown()
      })
  }
}

//get current time
function getTime() {
  let d = new Date()
  a =
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1) +
    '-' +
    d.getDate() +
    ' - ' +
    d.getHours() +
    ':' +
    d.getMinutes() +
    ':' +
    d.getSeconds()
  return a
}

//get network name based on ID
async function get_ChainID() {
  let a = await web3.eth.getChainId()
  console.log(a)
  switch (a) {
    case 1:
      window.chainID = 'Ethereum Main Network (Mainnet)'
      break
    case 80001:
      window.chainID = 'Polygon Test Network'
      break
    case 137:
      window.chainID = 'Polygon Mainnet'
      break
    case 3:
      window.chainID = 'Ropsten Test Network'
      break
    case 4:
      window.chainID = 'Rinkeby Test Network'
      break
    case 5:
      window.chainID = 'Goerli Test Network'
      break
    case 42:
      window.chainID = 'Kovan Test Network'
      break
    case 11155111:
      window.chainID = 'Sepolia Test Network'
      break
    default:
      window.chainID = 'Uknnown ChainID'
      break
  }
  let network = document.getElementById('network')
  if (network) {
    document.getElementById(
      'network',
    ).innerHTML = `<i class="text-info fa-solid fa-circle-nodes mx-2"></i>${window.chainID}`
  }
}


function get_Sha3() {
  if(window.location.pathname == '/upload.html'){
    const studentAddress = document.getElementById('student-address').value;
  var file = document.getElementById('doc-file').files[0];

  if(web3.utils.isAddress(studentAddress) && file){
    hide_txInfo();
    $('#note').html(`<h5 class="text-warning">Hashing Your Document 😴...</h5>`);
    $('#upload_file_button').attr('disabled', false);
    console.log('file changed');

    var reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = function (evt) {
      window.hashedfile = web3.utils.soliditySha3(evt.target.result);
      console.log(`Document Hash : ${window.hashedfile}`);
      $('#note').html(`<h5 class="text-center text-info">Document Hashed  😎 </h5>`);
    }
    reader.onerror = function (evt) {
      console.log('error reading file');
    }
  } else {
    window.hashedfile = null;
    $('#upload_file_button').attr('disabled', true);
    if (!web3.utils.isAddress(studentAddress)) {
      console.log('Invalid or empty Ethereum address');
    }
    if (!file) {
      console.log('File input is empty');
    }
    if (file && file.size > 256 * 1024) {
      console.log('File size exceeds 256KB');
    }
  }
  }
  else if(window.location.pathname == '/delete.html'){
  var file = document.getElementById('doc-file').files[0];
  if(file){
    hide_txInfo();
    $('#note').html(`<h5 class="text-warning">Hashing Your Document 😴...</h5>`);
    $('#upload_file_button').attr('disabled', false);
    console.log('file changed');

    var reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = function (evt) {
      window.hashedfile = web3.utils.soliditySha3(evt.target.result);
      console.log(`Document Hash : ${window.hashedfile}`);
      $('#note').html(`<h5 class="text-center text-info">Document Hashed  😎 </h5>`);
    }
    reader.onerror = function (evt) {
      console.log('error reading file');
    }
  } else {
    window.hashedfile = null;
    $('#upload_file_button').attr('disabled', true);
    if (!file) {
      console.log('File input is empty');
    }
    if (file && file.size > 256 * 1024) {
      console.log('File size exceeds 256KB');
    }
  }

}
}

//logout
function disconnect() {
  $('#logoutButton').hide()
  $('#loginButton').show()
  window.userAddress = null
  $('.wallet-status').addClass('d-none')
  window.localStorage.setItem('userAddress', null)
  $('#upload_file_button').addClass('disabled')
}

//shortcut wallet address
function truncateAddress(address) {
  if (!address) {
    return
  }
  return `${address.substr(0, 7)}...${address.substr(
    address.length - 8,
    address.length,
  )}`
}
async function Confirm2() {
  const name = document.getElementById('name').value
  const localisation = document.getElementById('localisation').value
  const site = document.getElementById('site').value
  const address = document.getElementById('Exporter-address').value
if (name && address && localisation && site) {
  const obj= {"nom":name,"public_key":address,"localisation":localisation, "site":site}
  console.log(obj)
  
  const response = await fetch('http://localhost:4000/api/workouts/'+address, {
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()

  if (!response.ok) {
    console.log(json.error)
  }
  if (response.ok) {
   
    console.log('workout updated:', json)
    location.reload()
  }


} else {
  $('#note').html(
    `<h5 class="text-center text-warning">You need to provide all info!! </h5>`,
  )
}
}


async function add_to_mango(obj) {
const response =  await fetch('http://localhost:4000/api/workouts', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()

  if (!response.ok) {
    console.log(json.error)
  }
  if (response.ok) {
   
    console.log('new workout added:', json)
    location.reload()
  }
}

async function Confirm_AcceptExporter(obj) {
  
  const name = obj.nom
  const localisation = obj.localisation
  const site = obj.site
  const address =obj.public_key
  const pending = "0"

  
if (name && address && localisation && site) {
  const obj= {"nom":name,"public_key":address,"localisation":localisation, "site":site,"pending":pending}
  //const obj= {"nom":name,"public_key":address,"localisation":localisation, "site":site}

  $('#loader').removeClass('d-none')
  $('#Confirm').attr('disabled', true)

  $('#note').html(
    `<h5 class="text-info">Please confirm the transaction 👍...</h5>`,
  )
  $('#ExporterBtn').attr('disabled', true)
  $('#delete').attr('disabled', true)
  $('#edit').attr('disabled', true)
  get_ChainID()

  try {
    await window.contract.methods
      .add_Exporter(address,name)//add to blockchain
      .send({ from: window.userAddress })

      .on('transactionHash', function (hash) {
        $('#note').html(
          `<h5 class="text-info p-1 text-center">Please wait for transaction to be mined 😴...</h5>`,
        )
      })

      .on('receipt', function (receipt) {
        $('#loader').addClass('d-none')
        $('#ExporterBtn').slideDown()
        $('#edit').slideDown()
        $('#delete').slideDown()
        console.log(receipt)
        

        console.log(obj)
  

        $('#note').html(
          `<h5 class="text-info">Exporter Added to the Blockchain 😇</h5>`,
        )
        add_to_mango(obj)//add to database
        
      })

      .on('confirmation', function (confirmationNr) {})
      .on('error', function (error) {
        console.log(error.message)
        $('#Confirm').attr('disabled', false)
        $('#note').html(`<h5 class="text-center">${error.message}</h5>`)
        $('#loader').addClass('d-none')
        $('#ExporterBtn').slideDown()
        
      })
  } catch (error) {
    $('#Confirm').attr('disabled', false)
    $('#note').html(`<h5 class="text-center">${error.message}</h5>`)
    $('#loader').addClass('d-none')
    $('#ExporterBtn').slideDown()
    $('#edit').slideDown()
    $('#delete').slideDown()
  }
  
  

} else {
  $('#note').html(
    `<h5 class="text-center text-warning">You need to provide all info!! </h5>`,
  )
}
} 

function AcceptExporter(obj){

  delete_from_mango(obj.public_key)
  Confirm_AcceptExporter(obj)

}

function RejectExporter(adress){
  delete_from_mango(adress)
  location.reload()
}

async function RequestExporter() {
  const name = document.getElementById('name').value
  const localisation = document.getElementById('localisation').value
  const site = document.getElementById('site').value

  const address = document.getElementById('Exporter-Req-address').value
  const pending = "1"
  if (name && address && localisation && site) {
    const obj= {"nom":name,"public_key":address,"localisation":localisation, "site":site,"pending":pending}
    add_to_mango(obj)
  
  } else {
    $('#note').html(
      `<h5 class="text-center text-warning">You need to provide all info!! </h5>`,
    )
  }

}

async function Confirm() {
  
  const name = document.getElementById('name').value
  const localisation = document.getElementById('localisation').value
  const site = document.getElementById('site').value
  const address = document.getElementById('Exporter-address').value
  const pending = "0"
  

  
if (name && address && localisation && site) {
  const obj= {"nom":name,"public_key":address,"localisation":localisation, "site":site,"pending":pending}
  //const obj= {"nom":name,"public_key":address,"localisation":localisation, "site":site}

  $('#loader').removeClass('d-none')
  $('#Confirm').attr('disabled', true)

  $('#note').html(
    `<h5 class="text-info">Please confirm the transaction 👍...</h5>`,
  )
  $('#ExporterBtn').attr('disabled', true)
  $('#delete').attr('disabled', true)
  $('#edit').attr('disabled', true)
  get_ChainID()

  try {
    await window.contract.methods
      .add_Exporter(address,name)//add to blockchain
      .send({ from: window.userAddress })

      .on('transactionHash', function (hash) {
        $('#note').html(
          `<h5 class="text-info p-1 text-center">Please wait for transaction to be mined 😴...</h5>`,
        )
      })

      .on('receipt', function (receipt) {
        $('#loader').addClass('d-none')
        $('#ExporterBtn').slideDown()
        $('#edit').slideDown()
        $('#delete').slideDown()
        console.log(receipt)
        

        console.log(obj)
  

        $('#note').html(
          `<h5 class="text-info">Exporter Added to the Blockchain 😇</h5>`,
        )
        add_to_mango(obj)//add to database
        
      })

      .on('confirmation', function (confirmationNr) {})
      .on('error', function (error) {
        console.log(error.message)
        $('#Confirm').attr('disabled', false)
        $('#note').html(`<h5 class="text-center">${error.message}</h5>`)
        $('#loader').addClass('d-none')
        $('#ExporterBtn').slideDown()
        
      })
  } catch (error) {
    $('#Confirm').attr('disabled', false)
    $('#note').html(`<h5 class="text-center">${error.message}</h5>`)
    $('#loader').addClass('d-none')
    $('#ExporterBtn').slideDown()
    $('#edit').slideDown()
    $('#delete').slideDown()
  }
  
  

} else {
  $('#note').html(
    `<h5 class="text-center text-warning">You need to provide all info!! </h5>`,
  )
}
} 




function back() {
  $('#loader').addClass('d-none')
  $('#name').addClass('d-none')
  $('#localisation').addClass('d-none')
  $('#site').addClass('d-none')

  $('#ExporterBtn').removeClass('d-none')
  $('#edit').removeClass('d-none')
  $('#delete').removeClass('d-none')

  $('#back').addClass('d-none')
  $('#Confirm').addClass('d-none')
  $('#note').html( `<h5 class="text-center text-warning"></h5>`,
  )
}
function back2() {
  $('#loader').addClass('d-none')
  $('#name').addClass('d-none')
  $('#localisation').addClass('d-none')
  $('#site').addClass('d-none')

  $('#ExporterBtn').removeClass('d-none')
  $('#edit').removeClass('d-none')
  $('#delete').removeClass('d-none')

  $('#back2').addClass('d-none')
  $('#Confirm2').addClass('d-none')
  $('#note').html( `<h5 class="text-center text-warning"></h5>`,
  )
}


async function addExporter() {
  const address = document.getElementById('Exporter-address').value
  if (address){
    $('#name').removeClass('d-none')
    $('#localisation').removeClass('d-none')
    $('#site').removeClass('d-none')
    $('#ExporterBtn').addClass('d-none')
    $('#edit').addClass('d-none')
    $('#delete').addClass('d-none')
    $('#back').removeClass('d-none')
    $('#Confirm').removeClass('d-none')
    $('#Confirm22').removeClass('d-none')
  //add here other inputs
}
  else {
    $('#note').html(
      `<h5 class="text-center text-warning">You need to provide address </h5>`,
    )
  }
}

async function getExporterInfo() {
  await window.contract.methods
    .getExporterInfo(window.userAddress)
    .call({ from: window.userAddress })

    .then((result) => {
      window.info = result
    })
}

async function getCounters() {
  await window.contract.methods
    .count_Exporters()
    .call({ from: window.userAddress })

    .then((result) => {
      $('#num-exporters').html(
        `<i class="fa-solid fa-building-columns mx-2 text-info"></i>${result}`,
      )
    })
  await window.contract.methods
    .count_hashes()
    .call({ from: window.userAddress })

    .then((result) => {
      $('#num-hashes').html(
        `<i class="fa-solid fa-file mx-2 text-warning"></i>${result}`,
      )
      

    })
}

async function editExporter() {
  const address = document.getElementById('Exporter-address').value
  if (address){
   
  const response = await fetch('http://localhost:4000/api/workouts'+'/'+address, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()

  if (!response.ok) {
    console.log(json.error)
    $('#note').html(
      `<h5 class="text-center text-warning">Adress not found!!</h5>`,
    )
  }
  if (response.ok) {
    $('#name').removeClass('d-none')
    $('#localisation').removeClass('d-none')
    $('#site').removeClass('d-none')
    $('#ExporterBtn').addClass('d-none')
    $('#edit').addClass('d-none')
    $('#delete').addClass('d-none')
    $('#back2').removeClass('d-none')
    $('#Confirm2').removeClass('d-none')
    console.log('workout selected:', json)
    document.getElementById('name').value=json['nom']
    document.getElementById('localisation').value=json['localisation']
    document.getElementById('site').value=json['site']
    
    //location.reload()
  }}else {
    $('#note').html(
      `<h5 class="text-center text-warning">You need to provide address </h5>`,
    )
  }

  if (info && address) {
    $('#loader').removeClass('d-none')
    $('#ExporterBtn').slideUp()
    $('#edit').slideUp()
    $('#delete').slideUp()
    $('#note').html(
      `<h5 class="text-info">Please confirm the transaction 😴...</h5>`,
    )
    $('#ExporterBtn').attr('disabled', true)
    get_ChainID()

    try {
      await window.contract.methods
        .alter_Exporter(address, info)
        .send({ from: window.userAddress })

        .on('transactionHash', function (hash) {
          $('#note').html(
            `<h5 class="text-info p-1 text-center">Please wait for transaction to be mined 😇...</h5>`,
          )
        })

        .on('receipt', function (receipt) {
          $('#loader').addClass('d-none')
          $('#ExporterBtn').slideDown()
          console.log(receipt)
          $('#note').html(
            `<h5 class="text-info">Exporter Updated Successfully 😊</h5>`,
          )
        })

        .on('confirmation', function (confirmationNr) {})
        .on('error', function (error) {
          console.log(error.message)
          $('#note').html(`<h5 class="text-center">${error.message} 👍</h5>`)
          $('#loader').addClass('d-none')
          $('#ExporterBtn').slideDown()
        })
    } catch (error) {
      $('#note').html(`<h5 class="text-center">${error.message} 👍</h5>`)
      $('#loader').addClass('d-none')
      $('#ExporterBtn').slideDown()
      $('#edit').slideDown()
      $('#delete').slideDown()
    }
  } else {
    $('#note').html(
      `<h5 class="text-center text-warning">You need to provide address & inforamtion to update 😵‍💫 </h5>`,
    )
  }
}

async function delete_from_mango(address) {
const response = await fetch('http://localhost:4000/api/workouts'+'/'+address, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()

  if (!response.ok) {
    console.log(json.error)
  }
  if (response.ok) {
   
    console.log('workout deleted:', json)
  }
}
async function deleteExporter() {
  const address = document.getElementById('Exporter-address').value
  
  
  if (address) {
    $('#loader').removeClass('d-none')
    $('#ExporterBtn').slideUp()
    $('#edit').slideUp()
    $('#delete').slideUp()
    $('#note').html(
      `<h5 class="text-info">Please confirm the transaction 😕...</h5>`,
    )
    $('#ExporterBtn').attr('disabled', true)
    get_ChainID()

    try {
      await window.contract.methods
        .delete_Exporter(address)
        .send({ from: window.userAddress })

        .on('transactionHash', function (hash) {
          $('#note').html(
            `<h5 class="text-info p-1 text-center">Please wait for transaction to be mined 😴 ...</h5>`,
          )
        })

        .on('receipt', function (receipt) {
          $('#loader').addClass('d-none')
          $('#ExporterBtn').slideDown()
          $('#edit').slideDown()
          $('#delete').slideDown()
          console.log(receipt)
          $('#note').html(
            `<h5 class="text-info">Exporter Deleted Successfully 🙂</h5>`,
          )
          delete_from_mango(address)
          
        })
        .on('error', function (error) {
          console.log(error.message)
          $('#note').html(`<h5 class="text-center">${error.message} 🙂</h5>`)
          $('#loader').addClass('d-none')
          $('#ExporterBtn').slideDown()
          $('#edit').slideDown()
          $('#delete').slideDown()
        })
    } catch (error) {
      $('#note').html(`<h5 class="text-center">${error.message} 🙂</h5>`)
      $('#loader').addClass('d-none')
      $('#ExporterBtn').slideDown()
      $('#edit').slideDown()
      $('#delete').slideDown()
    }
    location.reload()
  } else {
    $('#note').html(
      `<h5 class="text-center text-warning">You need to provide address to delete 👍</h5>`,
    )
  }
}

// Generate QR code so any one an Verify the documents
//note: if you r using local server you need to replace 127.0.0.1 with your machine local ip address got from the router
function generateQRCode() {
  document.getElementById('qrcode').innerHTML = ''
  console.log('making qr-code...')
  var qrcode = new QRCode(document.getElementById('qrcode'), {
    colorDark: '#000',
    colorLight: '#fff',
    correctLevel: QRCode.CorrectLevel.H,
  })
  if (!window.hashedfile) return
  let url = `${window.location.host}/verify.html?hash=${window.hashedfile}`
  qrcode.makeCode(url)
  document.getElementById('download-link').download = document.getElementById(
    'doc-file',
  ).files[0].name
  document.getElementById('verfiy').href = window.location.protocol + '//' + url

  function makeDownload() {
    document.getElementById('download-link').href = document.querySelector(
      '#qrcode img',
    ).src
  }
  setTimeout(makeDownload, 500)
  //  makeDownload();
}

//check old transaction and show them if exist
//Transactions in last afew hours will show but very old transactions wont show 
// cuz the pastEvents returns transactions in last 999 block
async function listen() {
  console.log('started...')
  if (window.location.pathname != '/upload.html' && window.location.pathname != '/certificates.html') return
  document.querySelector('.loading-tx').classList.remove('d-none')
  window.web3 = new Web3(window.ethereum)
  window.contract = new window.web3.eth.Contract(
    window.CONTRACT.abi,
    window.CONTRACT.address,
  )

  
  await window.contract.getPastEvents(
    'addHash',
    {
      filter: {
        _exporter: window.userAddress, //Only get the documents uploaded by current Exporter
      },
      fromBlock: (await window.web3.eth.getBlockNumber()) - 999,
      toBlock: 'latest',
    },
    function (error, events) {
      printTransactions(events)
      console.log(events)
    },
    
  )
  
  
  

}
async function getRolesList() {
  window.web3 = new Web3(window.ethereum)
  window.contract = new window.web3.eth.Contract(
    window.CONTRACT.abi,
    window.CONTRACT.address,
  )
  await getrole()
}



async function getrole(){
  await window.contract.methods
    .roleInfo(window.userAddress)
    .call({ from: window.userAddress })

    .then((result) => {
    console.log("roles:", result);
    if ((result[0])){$(document).ready(function() {$('#Admin').removeClass('d-none');});}
    if ((result[1])){$(document).ready(function() {$('#Upload').removeClass('d-none');$('#Delete').removeClass('d-none');});}
    if ((result[2])){$(document).ready(function() {$('#certificates').removeClass('d-none');});}

    if (window.location.pathname == '/admin.html')
    {
      if (!(result[0])) {window.location.href = '/index.html';}
      
    }

    if ((window.location.pathname == '/delete.html') || (window.location.pathname == '/upload.html'))
    {
      if (!(result[1])) {window.location.href = '/index.html';}
      
    }
    if (window.location.pathname == '/certificates.html')
    {
      if (!(result[2])) {window.location.href = '/index.html';}
      
    }
      
    })

  if (window.location.pathname == '/upload.html') {
    await window.contract.getPastEvents(
      'addHash',
      {
        filter: {
          _exporter: window.userAddress, //Only get the documents uploaded by current Exporter
        },
        fromBlock: (await window.web3.eth.getBlockNumber()) - 999,
        toBlock: 'latest',
      },
      function (error, events) {
        printTransactions(events)
        console.log(events)
      },
    )
  }
  else if (window.location.pathname == '/certificates.html') {
    await window.contract.getPastEvents(
      'addHash',
      {
        filter: {
          _studentAddress: window.userAddress, //Only get the documents owned by current student
        },
        fromBlock: 0,
        toBlock: 'latest',
      },
      function (error, events) {
        printTransactions(events)
        console.log(events)
        console.log(window.userAddress)
      },
    )
  }
}

//If there is past tx then show them
async function printTransactions(data) {

  if(window.location.pathname == '/upload.html'){
    document.querySelector('.transactions').innerHTML = ''
    document.querySelector('.loading-tx').classList.add('d-none')
    if (!data.length) {
      $('#recent-header').hide()
      return
    }
    $('#recent-header').show()
    const main = document.querySelector('.transactions')
    for (let i = 0; i < data.length; i++) {
      const a = document.createElement('a')
      a.href = `${window.CONTRACT.explore}` + '/tx/' + data[i].transactionHash
      a.setAttribute('target', '_blank')
      a.className =
        'col-lg-3 col-md-4 col-sm-5 m-2  bg-dark text-light rounded position-relative card'
      a.style = 'overflow:hidden;'
      const image = document.createElement('object')
      image.style = 'width:100%;height: 100%;'
      image.data = `https://ipfs.io/ipfs/${data[i].returnValues[1]}`
      const num = document.createElement('h1')
      num.append(document.createTextNode(i + 1))
      a.appendChild(image)
      num.style =
        'position:absolute; left:4px; bottom: -20px;font-size:4rem; color: rgba(20, 63, 74, 0.35);'
      a.appendChild(num)
      main.prepend(a)
    }
  }
  else if(window.location.pathname == '/certificates.html'){
    const main = document.querySelector('.transactions');
    main.innerHTML = '';
    document.querySelector('.loading-tx').classList.add('d-none');
  
    if (!data.length) {
      $('#recent-header').hide();
      return;
    }
    $('#recent-header').show();
  
    await Promise.all(data.map(async (item, i) => {
      const fileUrl = `https://ipfs.io/ipfs/${item.returnValues[1]}`;
  
      try {
        const response = await fetch(fileUrl);
        const fileData = await response.text();
        const hash = web3.utils.soliditySha3(fileData);
  
        const a = document.createElement('a');
        a.href = `/verify.html?hash=${hash}`;
        a.setAttribute('target', '_blank');
        a.className = 'col-lg-3 col-md-4 col-sm-5 m-2 bg-dark text-light rounded position-relative card';
        a.style.overflow = 'hidden';
  
        const image = document.createElement('object');
        image.style.width = '100%';
        image.style.height = '100%';
        image.data = fileUrl;
  
        const num = document.createElement('h1');
        num.textContent = i + 1;
        num.style.position = 'absolute';
        num.style.left = '4px';
        num.style.bottom = '-20px';
        num.style.fontSize = '4rem';
        num.style.color = 'rgba(20, 63, 74, 0.35)';
  
        a.appendChild(image);
        a.appendChild(num);
        main.prepend(a);
      } catch (error) {
        console.error('Error fetching file:', error);
      }
    }));
  }
}
