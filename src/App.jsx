import "./App.css";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus, FaSleigh } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCart from "./components/ContactCart";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import usedisclosure from "./hook/usedisclosure";
import { ToastContainer, toast } from "react-toastify";
import Hands_Contact from "../public/Hands_Contact.png";

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isOpen, onClose, onOpen } = usedisclosure();

  // Fetch contacts from Firestore
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(contactList);
          return contactList;
        });
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    getContacts();
  }, []);

  const filterContact = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");
    // const contactsSnapshot = await getDocs(contactsRef);

    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredContacts = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-[370px] m-auto px-4">
        <Navbar />

        {/* Search & Add */}
        <div className="flex gap-2 my-4">
          <div className="flex relative flex-grow items-center">
            <FiSearch className="absolute text-white w-[24px] h-[24px] ml-2" />
            <input
              onChange={filterContact}
              type="text"
              placeholder="Search..."
              className="h-10 flex-grow rounded-md pl-9 text-white border border-white bg-transparent"
            />
          </div>
          <FaCirclePlus
            onClick={onOpen}
            className="text-4xl cursor-pointer text-white"
          />
        </div>

        {/* <div> */}
        {/* Contacts List */}
        {loading ? (
          <p className="text-white text-center">Loading contacts...</p>
        ) : contacts.length === 0 ? (
          <div className="flex justify-center items-center gap-1.5 m-auto h-[70vh]">
            <img src={Hands_Contact} alt="" className="h-15 w-15 text-center" />
            <h3 className="text-white text-center font-bold">
              Contact Not Found
            </h3>
          </div>
        ) : (
          <div className="mt-4 flex flex-col gap-3">
            {contacts.map((contact) => (
              <ContactCart contact={contact} key={contact.id} />
            ))}
          </div>
        )}
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer />
    </>

    // </div>
  );
}

export default App;
