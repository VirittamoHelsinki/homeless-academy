import React, { useContext, useState, useEffect } from "react";
import AppContext from "../AppContext";
import { client } from "../client";
import "./contacts.css";
import { Icon } from "@iconify/react";
import avatar from "../assets/user.jpg";

function Contacts() {
  const { language } = useContext(AppContext);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.getEntries({
          content_type: "contact",
        });

        const entries = response.items.map((item) => item.fields);
        setContacts(entries);
      } catch (error) {
        console.log("Error fetching contacts data from Contentful:", error);
      }
    }
    fetchData();
  }, []);

  if (contacts.length === 0) {
    return (
      <div className="bg-medium-green text-center py-10 text-white font-lexend font-extrabold text-3xl lg:text-5xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-medium-green py-10 text-white">
      <h1 className="font-lexend text-center font-extrabold text-3xl lg:text-5xl p-5">
        {language === "fi-FI" ? "Homeless Academyn tiimi" : "Meet our team"}
      </h1>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
          >
            <div className="block rounded-lg  bg-custom-color shadow-secondary-2 dark:bg-surface-dark h-full flex flex-col pt-8">
              {/* <img
                className="w-36 h-36 gray-800 relative mx-auto mt-4 rounded-full  overflow-hidden "
                src={contact.profilePicture?.fields?.file?.url}
                alt="profile photo"
              /> */}

              {contact.profilePicture?.fields?.file?.url ? (
                <img
                  src={contact.profilePicture?.fields?.file?.url}
                  alt="User avatar"
                  className="w-36 h-36 gray-800 relative mx-auto mt-4 rounded-full overflow-hidden "
                />
              ) : (
                <img
                  className="w-36 h-36 gray-800 relative mx-auto mt-4 rounded-full overflow-hidden bg-white"
                  src={avatar}
                  alt="Default avatar"
                />
              )}
              <div className="p-6 text-surface dark:text-white text-center flex-grow">
                <h6 className="mb-2 text-xl font-semibold leading-tight">
                  {contact.firstName} {contact.lastName}
                </h6>
                <p className="mb-4">{contact.title}</p>
                <p className="mb-4 underline">
                  <a href={`tel:${contact.phoneNumber}`}>
                    {" "}
                    +{contact.phoneNumber}
                  </a>
                </p>


                <p
                  className="mb-4 underline emailLink"
                  data-title={contact.email}
                >
                  <a href={`mailto:${contact.email}`} className="px-4 py-2">
                    Email
                  </a>

                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
