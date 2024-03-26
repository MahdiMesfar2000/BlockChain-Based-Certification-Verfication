// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/audit/2023-03/contracts/access/AccessControl.sol";

contract Verification is AccessControl {
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE"); 
    bytes32 public constant EXPORTER_ROLE = keccak256("EXPORTER_ROLE"); 
    bytes32 public constant STUDENT_ROLE = keccak256("STUDENT_ROLE"); 
    
    constructor() { _setupRole(OWNER_ROLE, msg.sender); }
    uint16 public count_Exporters=0;
    uint16 public count_hashes=0;

    struct  Record  {
        uint blockNumber;
        uint minetime;
        string info;
        string ipfs_hash;
        address studentAddress; // New attribute for student address
        bool valid; // New attribute for validity
         }
    struct Exporter_Record{
        uint blockNumber;
        string info;
         }

     mapping (bytes32  => Record) private docHashes;
     mapping (address => Exporter_Record) private Exporters;
     
//---------------------------------------------------------------------------------------------------------//
    modifier validAddress(address _addr) {
            assert(_addr != address(0)); _; }

//---------------------------------------------------------------------------------------------------------//

    function add_Exporter(address _add,string calldata _info) external
    onlyRole(OWNER_ROLE){ 
        assert(Exporters[_add].blockNumber==0);
          _setupRole(EXPORTER_ROLE, _add);
          Exporters[_add].blockNumber = block.number;
          Exporters[_add].info = _info;
          ++count_Exporters;
        
        }

    function delete_Exporter(address _add) external  
    onlyRole(OWNER_ROLE)
    {
        assert(Exporters[_add].blockNumber!=0);
        
        Exporters[_add].blockNumber=0;
        Exporters[_add].info="";
        _revokeRole(EXPORTER_ROLE, _add);
        --count_Exporters;
        }
        
    function alter_Exporter(address _add,string calldata  _newInfo) public
    onlyRole(OWNER_ROLE)
     { 
          assert(Exporters[_add].blockNumber!=0);
             Exporters[_add].info=_newInfo; }

    function changeOwner(address _newOwner) public 
        onlyRole(OWNER_ROLE)  validAddress(_newOwner)   {  
            _revokeRole(OWNER_ROLE, msg.sender);
            _setupRole(OWNER_ROLE, _newOwner);
            }

        event addHash(address indexed _exporter,string _ipfsHash, address indexed _studentAddress);
      function addDocHash (bytes32  hash,string calldata _ipfs, address _studentAddress) public 
      onlyRole(EXPORTER_ROLE)
      {
            assert(docHashes[hash].blockNumber==0 && docHashes[hash].minetime==0);
            Record memory newRecord = Record(
            block.number,
            block.timestamp,
            Exporters[msg.sender].info,
            _ipfs,
            _studentAddress,
            true // Document is valid when added
            );
            docHashes[hash] = newRecord; 
            ++count_hashes;
            _setupRole(STUDENT_ROLE, _studentAddress);
            emit addHash(msg.sender,_ipfs,_studentAddress);
      }
      

    function findDocHash(bytes32 _hash) external view returns (uint, uint, string memory, string memory, address, bool) {
        return (
            docHashes[_hash].blockNumber,
            docHashes[_hash].minetime,
            docHashes[_hash].info,
            docHashes[_hash].ipfs_hash,
            docHashes[_hash].studentAddress,
            docHashes[_hash].valid // Return the valid attribute
        );
    }

    function deleteHash (bytes32 _hash) public
    onlyRole(EXPORTER_ROLE)
    {
    assert(docHashes[_hash].minetime!=0);
    docHashes[_hash].minetime=block.timestamp; // Update minetime to current time
    docHashes[_hash].valid = false; // Document becomes invalid when deleted
    //_revokeRole(STUDENT_ROLE, docHashes[_hash].studentAddress);
    --count_hashes;
    
    }
    
    function  getExporterInfo(address _add) external view returns(string memory){
        return (Exporters[_add].info);
    }

    function roleInfo(address _add) external view returns(bool[3] memory){
        bool[3] memory roles = [hasRole(OWNER_ROLE, _add),hasRole(EXPORTER_ROLE, _add),hasRole(STUDENT_ROLE, _add)];
        return (roles);
    }
}