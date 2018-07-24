pragma solidity ^0.4.23;

contract Users {

  struct Profile {
    string name;
    string username;
    string twitter;
    string fb;
    
  }

  mapping(address => Profile) public users;

  event UserCreated(address indexed _address, string username);
  event UserUpdated(address indexed _address, string username);
  event UserDestroyed(address indexed _address, string username);
  
  function compareStrings (string a, string b) internal pure returns (bool){
       return keccak256(a) == keccak256(b);
   }

  function exists (address _address) public view returns (bool _exists) {
    return compareStrings(users[_address].name, '');
  }

  function authenticate () public constant returns (string name, string username, string twitter, string fb) {
    require(exists(msg.sender));
    Profile memory p = users[msg.sender];
    return (p.name, p.username, p.twitter, p.fb);
  }

  function create (string name, string username, string twitter, string fb) public {
    require(!exists(msg.sender));

    Profile memory p = Profile({
      name: name,
      username: username,
      twitter: twitter,
      fb: fb
    });
    users[msg.sender] = p;
    emit UserCreated(msg.sender, username);
  }

  function destroy () public {
    require(exists(msg.sender));
    Profile memory p = users[msg.sender];
    delete users[msg.sender];
    emit UserDestroyed(msg.sender, p.username);
  }

  function get (address _address) public constant returns (string name, string username, string twitter, string fb) {
    require(exists(_address));
    Profile memory p = users[msg.sender];
    return (p.name, p.username, p.twitter, p.fb);
  }

  function update_profile(string name, string twitter, string fb) public {
    require(exists(msg.sender));
    Profile memory p = users[msg.sender];
    p.name = name;
    p.twitter = twitter;
    p.fb = fb;
    emit UserUpdated(msg.sender, p.username);
  }

}
