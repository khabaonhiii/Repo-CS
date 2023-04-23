import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.click({
    type: "Web",
    id: "3cb9f316-281b-4aed-8cf3-061f8149e1a7",
    attributes: {
      id: "btn-make-appointment",
      href: "./profile.php#login",
      class: "btn btn-dark btn-lg",
    },
    childIndex: 4,
    hashes: {},
    name: "a - Make Appointment",
    selectors: [
      {
        id: "82bd4c54-0c18-4beb-a3bf-eb594d41da1d",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "f767344f-ac2e-4243-9fec-0cf962e74d24",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Make Appointment",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
  });
  await web.click({
    type: "Web",
    id: "570a818f-4fde-477c-9c34-79951e0b0cf8",
    attributes: { class: "input-group" },
    childIndex: 1,
    hashes: {},
    name: "div - input-group",
    selectors: [
      {
        id: "98d02f95-9c4b-4e19-90cf-88f458bd69d6",
        type: "CSS",
        value: ".form-group:nth-child(1) .input-group",
        isDefault: true,
      },
      {
        id: "de2848c4-83cd-42b2-b3a2-a35dbcd06c92",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "div",
    text: "\t",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
  });
  await web.click({
    type: "Web",
    id: "71b79cde-0000-4f9c-a0ed-5d0a01d504c4",
    attributes: {
      type: "text",
      class: "form-control",
      id: "txt-username",
      name: "username",
      placeholder: "Username",
      value: "",
      autocomplete: "off",
    },
    childIndex: 1,
    hashes: {},
    name: "input - Username",
    selectors: [
      {
        id: "4b354fc2-b598-48cc-a7b8-c9db547ec7e8",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "9f01cac7-be95-4d75-99ee-38cc589af497",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
  });
  await web.setText(
    {
      type: "Web",
      id: "71b79cde-0000-4f9c-a0ed-5d0a01d504c4",
      attributes: {
        type: "text",
        class: "form-control",
        id: "txt-username",
        name: "username",
        placeholder: "Username",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: {},
      name: "input - Username",
      selectors: [
        {
          id: "4b354fc2-b598-48cc-a7b8-c9db547ec7e8",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "9f01cac7-be95-4d75-99ee-38cc589af497",
          type: "Attribute",
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    },
    "John Doe"
  );
  await web.click({
    type: "Web",
    id: "1cb67774-2153-435b-b837-bc023f67984f",
    attributes: { class: "input-group" },
    childIndex: 1,
    hashes: {},
    name: "div - input-group",
    selectors: [
      {
        id: "c9809fba-d1fb-4ff6-814f-ea9f0158ee6b",
        type: "CSS",
        value: ".form-group:nth-child(2) .input-group",
        isDefault: true,
      },
      {
        id: "f8c8e3e9-9c5d-4d78-a8bf-c416b5875a2d",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "div",
    text: "\t",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
  });
  await web.click({
    type: "Web",
    id: "de03863d-c0c5-4b82-93ec-bf4e52044fef",
    attributes: {
      type: "password",
      class: "form-control",
      id: "txt-password",
      name: "password",
      placeholder: "Password",
      value: "",
      autocomplete: "off",
    },
    childIndex: 1,
    hashes: {},
    name: "input - Password",
    selectors: [
      {
        id: "bd187aba-d76e-4bb8-81b9-e1745594ebad",
        type: "CSS",
        value: "#txt-password",
        isDefault: true,
      },
      {
        id: "6c1aacc9-412a-49a4-a652-fa26cd29825b",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
  });
  await web.setEncryptedText(
    {
      type: "Web",
      id: "de03863d-c0c5-4b82-93ec-bf4e52044fef",
      attributes: {
        type: "password",
        class: "form-control",
        id: "txt-password",
        name: "password",
        placeholder: "Password",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: {},
      name: "input - Password",
      selectors: [
        {
          id: "bd187aba-d76e-4bb8-81b9-e1745594ebad",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "6c1aacc9-412a-49a4-a652-fa26cd29825b",
          type: "Attribute",
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    },
    "9ef041b1403d0199850173eceba34788-U2FsdGVkX1+nhvXxE176sqiHl+5juJp5Ah/2FsC7bA9rXFh8M1TUW4qB4lOBC4QM"
  );
  await web.click({
    type: "Web",
    id: "a2774475-6e1d-4b88-8f1f-c47b82d5f11f",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: {},
    name: "button - Login",
    selectors: [
      {
        id: "edc6c52a-606e-4a0a-983a-710f07b9b522",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "af4e11f7-bd10-421d-83c4-ffcaeffdea53",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Login",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
  });
});