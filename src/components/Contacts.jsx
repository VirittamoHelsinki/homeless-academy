import React, { useContext, useState, useEffect } from "react";
import AppContext from "../AppContext";
import { client } from "../client";

function Contacts() {
  const { language } = useContext(AppContext);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.getEntries({
          content_type: "contact",
        });
        /* const entries = response.items.map((item) => ({
          id: item.sys.id,
          fields: item.fields, 
         })); */

        const entries = response.items.map((item) => item.fields);
        setContacts(entries);
        console.log(entries);
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
    <>
      <div className="bg-medium-green py-10 text-white">
        <h1 className="font-lexend text-center font-extrabold text-3xl lg:text-5xl p-5">
          {language === "fi-FI" ? "Homeless Academyn tiimi" : "Meet our team"}
        </h1>
        <div className="p-8 mx-auto text-left flex flex-wrap justify-center gap-12 mt-12 px-10">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex-initial basis-1/4 max-w-40 lg:max-w-none  flex flex-col items-center justify-center rounded-xl"
            >
              {/* Photo Section */}
              <div className="h-36 w-full flex items-center justify-center mb-4">
                <img
                  src={contact.profilePicture?.fields?.file?.url}
                  className="w-36 h-36 gray-800 relative mx-4 mt-4 rounded-full lg:rounded-sm overflow-hidden"
                />
              </div>

              {/* Text Section */}
              <div className="text-center flex-1">
                <dl className="mt-3 mb-5 overflow-auto">
                  <dt className="font-semibold">
                    {contact.firstName} {contact.lastName}
                  </dt>
                  <dt>{contact.title}</dt>
                  <dt className="underline">
                    <a href={`tel:${contact.phoneNumber}`}>
                      +{contact.phoneNumber}
                    </a>
                  </dt>
                  <dt className="underline">
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </dt>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contacts;
