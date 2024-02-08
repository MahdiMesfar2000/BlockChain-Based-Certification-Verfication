// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol";
contract MyCustomContract is AccessControl 
{
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE"); 
    bytes32 public constant EXPORTER_ROLE = keccak256("EXPORTER_ROLE"); 
    bytes32 public constant STUDENT_ROLE = keccak256("STUDENT_ROLE"); 

constructor() { 
    //_setupRole(DEFAULT_ADMIN_ROLE, msg.sender); 
    _setupRole(OWNER_ROLE, msg.sender); 
    } 

function addExporter(address account) public onlyRole(OWNER_ROLE) { 
    grantRole(EXPORTER_ROLE, account);
}

function addStudent(address account) public onlyRole(EXPORTER_ROLE) { 

    grantRole(STUDENT_ROLE, account); 
} 

function studentFunction() public onlyRole(STUDENT_ROLE) { 
    // Your custom function logic for 'student' role } // Other functions... 
}
}
