import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend }) {
  const [newFriend, setNewFriend] = useState({
    name: "",
    image: "https://i.pravatar.cc/48",
  });
  const handleNewFriend = (e) => {
    e.preventDefault();
    if (!newFriend.name || !newFriend.image) return;

    const id = crypto.randomUUID();
    const addNewFriend = {
      id,
      name: newFriend.name,
      image: `${newFriend.image}?=${id}`,
      balance: 0,
    };
    console.log("addNewFriend : ", addNewFriend);
    onAddFriend(addNewFriend);
    setNewFriend({
      name: "",
      image: "https://i.pravatar.cc/48",
    });
  };
  return (
    <form className="form-add-friend" onSubmit={handleNewFriend}>
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input
        type="text"
        value={newFriend.name}
        onChange={(e) => setNewFriend({ ...newFriend, name: e.target.value })}
      />

      <label>📷 Image URL</label>
      <input
        type="text"
        value={newFriend.image}
        onChange={(e) => setNewFriend({ ...newFriend, image: e.target.value })}
      />
      <Button>ADD</Button>
    </form>
  );
}

export default FormAddFriend;
