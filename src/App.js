import { useState } from "react";
import "./App.css";

function App() {
  const [contactBook, setContactBook] = useState([]);
  const [currentName, setCurrentName] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [editFlag, setEditFlag] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddContact = () => {
    setContactBook((prev) => [
      ...prev,
      { name: currentName, city: currentCity },
    ]);
  };

  const handleEditContact = () => {
    const newContactBook = contactBook;
    newContactBook[editIndex] = { name: currentName, city: currentCity };
    setContactBook(newContactBook);
    setEditFlag(false);
  };

  const handleDeleteContact = (index) => {
    setContactBook((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div style={{ margin: "10px", border: "1px solid grey" }}>
        <h2 style={{ margin: "10px" }}>Add a new contact</h2>
        <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
          <div style={{ marginRight: "10px" }}>Name</div>
          <input
            onChange={(input) => setCurrentName(input.target.value)}
            style={{ marginRight: "10px" }}
          ></input>
          <div style={{ marginRight: "10px" }}>City</div>
          <input
            onChange={(input) => setCurrentCity(input.target.value)}
            style={{ marginRight: "10px" }}
          ></input>
          {!editFlag ? (
            <button onClick={() => handleAddContact()}>Add contact</button>
          ) : (
            <button onClick={() => handleEditContact()}>Finish Edit</button>
          )}
        </div>
      </div>
      {contactBook.map((contact, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "10px",
            border: "1px solid lightblue",
          }}
        >
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h3 style={{ margin: "10px" }}>{contact.name}</h3>
              {editFlag && (
                <h3 style={{ margin: "10px", color: "dodgerblue" }}>Editing</h3>
              )}
            </div>
            <div style={{ margin: "10px" }}>City: {contact.city}</div>
          </div>
          <div style={{ margin: "10px" }}>
            <button
              onClick={() => {
                setEditFlag(true);
                setEditIndex(index);
              }}
              style={{ margin: "10px" }}
            >
              Edit
            </button>
            <button onClick={() => handleDeleteContact(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
