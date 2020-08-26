import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function Skills() {
  const copyToClip = () => {
    let text = document.getElementsByName("clip")[0].accessKey;

    const el = document.createElement("textarea"); //create dummy text area
    el.value = text; // set the value of text area = to our string
    el.setAttribute("readOnly", ""); //makes invisible
    document.body.appendChild(el); //so we can use select
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };
  return (
    <div className="skills__container">
      <div className="skills__emailBox">
        {typeof window !== "undefined" && window.innerWidth < 500 ? (
          <DropdownButton id="dropdown-item-button" title="Email Me" size="sm">
            <Dropdown.ItemText></Dropdown.ItemText>
            <Dropdown.Item
              name="clip"
              value="jesse@jessethecoder.com"
              onClick={() => copyToClip()}
            >
              Copy To Clipboard
            </Dropdown.Item>
            <Dropdown.Item value="mail" href="mailto:jesse@jessethecoder.com">
              Open Your Mail App
            </Dropdown.Item>
          </DropdownButton>
        ) : (
          <DropdownButton
            id="dropdown-item-button"
            title="jesse@jessethecoder.com"
            size="lg"
          >
            {" "}
            <Dropdown.ItemText></Dropdown.ItemText>
            <Dropdown.Item
              name="clip"
              value="jesse@jessethecoder.com"
              onClick={() => copyToClip()}
            >
              Copy To Clipboard
            </Dropdown.Item>
            <Dropdown.Item value="mail" href="mailto:jesse@jessethecoder.com">
              Open Your Mail App
            </Dropdown.Item>
          </DropdownButton>
        )}
      </div>
      <div className="skills__mouse"></div>
      <div className="skills__text-box-container">
        {typeof window !== "undefined" && window.innerWidth <= 768 ? (
          <h1>
            Hi, I'm Jesse, I bring a well balanced skillset and rock solid work
            ethic to the web development industry.
          </h1>
        ) : (
          <h1>
            Hi, I'm Jesse, I bring a well balanced <br /> skillset and rock
            solid work ethic to the <br /> web development industry. <br />
          </h1>
        )}

        <p>
          For the last two years I have been working as a freelance web
          developer and expanding my skillset in various programing languages.
        </p>
      </div>
      <div className="skills__picture-box">
        <div className="skills__picture"></div>
      </div>
    </div>
  );
}
