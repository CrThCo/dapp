pragma solidity ^0.4.24;

contract Connect {

  struct User {
    bytes32 firstName;
    bytes32 lastName;
    bytes32 email;
  }

  struct Post {
    string  content;
    address author;
    uint256 timestamp;
    // bytes32 city;
    // bytes32 state;
    // bytes32 country;
    // bytes32 deviceUsed;
    // bytes32 dataFormat;

    // pre-identified categories of meaning, for now [1: persuasion, 2: sympathy]
    // uint8   meaningCategory;

    // score of how strongly the post is identified as a particular category, from 0 to 100
    // uint8   meaningScore;

    // top category that others interpreted the meaning as
    // uint8   interpretCategory;

    // score of how strongly others interpreted the category as
    // uint8   intepretScore;
  }

  // Each address is linked to a User
  //mapping(address => User) public userInfo;

  // The posts that each address has written
  mapping (address => Post[]) public userPosts;

  // All the posts ever written
  // Post[] public posts;

  // Set profile of a user
  //function setProfile(bytes32 _firstName, bytes32 _lastName, bytes32 _email) public {
  //  User memory user = User(_firstName, _lastName, _email);
  //  userInfo[msg.sender] = user;
  //}

  // Add a new post
  // function createPost(string _content, bytes32 _city, bytes32 _state, bytes32 _country, bytes32 _deviceUsed, bytes32 _dataFormat) public {
  function createPost(string _content) public {
    // Post memory post = Post(_content, msg.sender, now, _city, _state, _country, _deviceUsed, _dataFormat, 0, 0, 0, 0);
    Post memory post = Post(_content, msg.sender, now);
    userPosts[msg.sender].push(post);
    // posts.push(post);
  }

  // populate meaningCategory, meaningScore, interpretCategory, and interpretScore of an existing post
  // function scorePost() public { }

}
