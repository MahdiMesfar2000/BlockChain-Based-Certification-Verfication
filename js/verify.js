
//Works without using metamsk 
//just provide the network address

window.CONTRACT = {

  address: '0xD870d275e833dED94804EEfF605a571cC3dE8c3a',

  network: 'https://rpc.sepolia.org/',
  explore: 'https://sepolia.etherscan.io/',
  // Your Contract ABI 
  abi:[
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
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "hash",
          "type": "bytes32"
        }
      ],
      "name": "addHash",
      "type": "event"
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

//I used Web3.providers.HttpProvider instead of MetaMask Provider so We can Verify Docs without Wallet
const web3 = new Web3(new Web3.providers.HttpProvider(window.CONTRACT.network))
const contract = new web3.eth.Contract(
  window.CONTRACT.abi,
  window.CONTRACT.address,
)

window.onload = async () => {
  $('#loader').hide()
  $('.loader-wraper').fadeOut('slow')
  //check the Url if it was Passed with document hash 
  $('#upload_file_button').attr('disabled', true)
  checkURL()
  
}
async function verify_Hash() {
  //Show the loading
  $('#loader').show()

  if (window.hashedfile) {
    await contract.methods
      .findDocHash(window.hashedfile)
      .call({ from: window.CONTRACT.address })
      .then((result) => {
        $('.transaction-status').removeClass('d-none')
        window.newHash = result
        console.log("result")
        console.log(result)
        if ((result[0] != 0) & (result[1] != 0)) {
          
          if (result[5]) { // Check if the document is valid
            //Doc Verified
            print_verification_info(result, 'verified')
          } else {
            //Doc Revoked
            print_verification_info(result, 'revoked')
          }
        } else {
          //Doc not Found
          print_verification_info(result, 'not found')
        }
      })
  }
}

function checkURL() {
  let url_string = window.location.href
  let url = new URL(url_string)
  window.hashedfile = url.searchParams.get('hash')
  if (!window.hashedfile) return

  verify_Hash()
}
// get Sha3 Hash from the file
async function get_Sha() {
  $('#note').html(`<h5 class="text-warning">Hashing Your Document 😴...</h5>`)
  $('#upload_file_button').attr('disabled', false)
  console.log('file changed')
  var file = await document.getElementById('doc-file').files[0]
  if (file) {
    var reader = new FileReader()
    reader.readAsText(file, 'UTF-8')
    reader.onload = async function (evt) {
      // var SHA256 = new Hashes.SHA256();
      // = SHA256.hex(evt.target.result);
      window.hashedfile = await web3.utils.soliditySha3(evt.target.result)
      console.log(`Document Hash : ${window.hashedfile}`)
      $('#note').html(
        `<h5 class="text-center text-info">Document Hashed  😎 </h5>`,
      )
    }
    reader.onerror = function (evt) {
      console.log('error reading file')
      return false
    }
  } else {
    window.hashedfile = null
    return false
  }
}

function print_verification_info(result, status) {
  //Default Image for not Verified Docunets
  document.getElementById('student-document').src = './files/notvalid.svg'
  $('#loader').hide()
  // when document not verfied
  if (status === 'verified') {
    $('#download-document').show()
    // when document verfied
    $('#college-name').show()
    $('#contract-address').show()
    $('#time-stamps').show()
    $('#blockNumber').show()
    $('#student-address').show()

    var t = new Date(1970, 0, 1)
    t.setSeconds(result[1])
    console.log(result[1])
    t.setHours(t.getHours() + 3)
    // hide loader
    $('#loader').hide()
    $('#doc-status').html(`<h3 class="text-info">
         Certificate Verified Successfully 😊
         <i class="text-info fa fa-check-circle" aria-hidden="true"></i>
        </h3>`)
    $('#file-hash').html(
      `<span class="text-info"><i class="fa-solid fa-hashtag"></i></span> ${truncateAddress(
        window.hashedfile,
      )}`,
    )
    $('#college-name').html(
      `<span class="text-info"><i class="fa-solid fa-graduation-cap"></i></span> ${result[2]}`,
    )
    $('#contract-address').html(
      `<span class="text-info"><i class="fa-solid fa-file-contract"></i> </span>${truncateAddress(
        window.CONTRACT.address,
      )}`,
    )
    $('#time-stamps').html(
      `<span class="text-info"><i class="fa-solid fa-clock"></i> </span>${t}`,
    )
    $('#blockNumber').html(
      `<span class="text-info"><i class="fa-solid fa-cube"></i></span> ${result[0]}`,
    )
    $('#student-address').html(
      `<span class="text-info"><i class="fa-solid fa-user"></i></span> ${truncateAddress(result[4])}`,
    )
    document.getElementById('student-document').src =
      'https://ipfs.io/ipfs/' + result[3]
    document.getElementById('download-document').href = document.getElementById(
      'student-document',
    ).src
    $('.transaction-status').show()
  } else if (status === 'revoked'){
    $('#download-document').show()
    // when document verfied
    $('#college-name').show()
    $('#contract-address').show()
    $('#time-stamps').show()
    $('#blockNumber').show()
    $('#student-address').show()

    var t = new Date(1970, 0, 1)
    t.setSeconds(result[1])
    console.log(result[1])
    t.setHours(t.getHours() + 3)
    // hide loader
    $('#loader').hide()
    $('#doc-status').html(`<h3 class="text-danger">
        Certificate Revoked 😕
         <i class="text-danger  fa fa-times-circle" aria-hidden="true"></i>
        </h3>`)
    $('#file-hash').html(
      `<span class="text-info"><i class="fa-solid fa-hashtag"></i></span> ${truncateAddress(
        window.hashedfile,
      )}`,
    )
    $('#college-name').html(
      `<span class="text-info"><i class="fa-solid fa-graduation-cap"></i></span> ${result[2]}`,
    )
    $('#contract-address').html(
      `<span class="text-info"><i class="fa-solid fa-file-contract"></i> </span>${truncateAddress(
        window.CONTRACT.address,
      )}`,
    )
    $('#time-stamps').html(
      `<span class="text-info"><i class="fa-solid fa-clock"></i> </span>${t}`,
    )
    $('#blockNumber').html(
      `<span class="text-info"><i class="fa-solid fa-cube"></i></span> ${result[0]}`,
    )
    $('#student-address').html(
      `<span class="text-info"><i class="fa-solid fa-user"></i></span> ${truncateAddress(result[4])}`,
    )
    document.getElementById('student-document').src =
      'https://ipfs.io/ipfs/' + result[3]
    document.getElementById('download-document').href = document.getElementById(
      'student-document',
    ).src
    $('.transaction-status').show()
  } 
  else {
    // document.getElementById('download-document').classList.add('d-none')
    $('#download-document').hide()
    $('#doc-status').html(`<h3 class="text-danger">
        Certificate not Verified 😕
         <i class="text-danger  fa fa-times-circle" aria-hidden="true"></i>
        </h3>`)
    $('#file-hash').html(
      `<span class="text-info"><i class="fa-solid fa-hashtag"></i></span> ${truncateAddress(
        window.hashedfile,
      )}`,
    )
    $('#college-name').hide()
    $('#contract-address').hide()
    $('#time-stamps').hide()
    $('#blockNumber').hide()
    $('#student-address').hide()
    $('.transaction-status').show()
  }
}

function truncateAddress(address) {
  if (!address) {
    return
  }
  return `${address.substr(0, 7)}...${address.substr(
    address.length - 8,
    address.length,
  )}`
}
