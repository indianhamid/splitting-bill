import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);

  const [addFriendIsOpen, setAddFriendIsOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setAddFriendIsOpen(false);
  };

  const handleSelectedFriend = (friend) => {
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
    setAddFriendIsOpen(false);
  };

  const handleSplitBill = (value) => {
    // console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <>
      <h2 className="app-title">Split a bill with your friends</h2>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friends={friends}
            selectedFriend={selectedFriend}
            onSelectedFriend={handleSelectedFriend}
          />

          {addFriendIsOpen && <FormAddFriend onAddFriend={handleAddFriend} />}

          <Button
            handleBtn={() => {
              setAddFriendIsOpen(!addFriendIsOpen);
              setSelectedFriend(null);
            }}
          >
            {addFriendIsOpen ? "close" : "Add Friend"}
          </Button>
        </div>

        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}

export default App;
