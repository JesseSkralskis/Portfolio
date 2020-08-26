import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function Exit() {
  const copyToClip = () => {
    let text = document.getElementsByName("jesse@jessethecoder.com")[0].name;
    console.log(text);
    const el = document.createElement("textarea"); //create dummy text area
    el.value = text; // set the value of text area = to our string
    el.setAttribute("readOnly", ""); //makes invisible
    document.body.appendChild(el); //so we can use select
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <div className="exit__container">
      <div className="exit__content">
        {window.innerWidth < 768 ? (
          <h1>I hope to hear from you soon!</h1>
        ) : (
          <h1>
            I hope to <br /> hear from you soon!
          </h1>
        )}
        {window.innerWidth < 768 ? (
          <h4>
            I look forward to learning more about your team and answering any
            questions.
          </h4>
        ) : (
          <h4>
            I look forward to learning more about your team <br /> and answering
            any questions.
          </h4>
        )}

        <div className="exit__contact-container">
          {window.innerWidth < 500 ? (
            <DropdownButton
              id="dropdown-item-button"
              title="Email Me"
              size="sm"
            >
              <Dropdown.ItemText></Dropdown.ItemText>
              <Dropdown.Item
                name="jesse@jessethecoder.com"
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
              <Dropdown.ItemText></Dropdown.ItemText>
              <Dropdown.Item
                name="jesse@jessethecoder.com"
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
      </div>
    </div>
  );
}
