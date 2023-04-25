import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "99b1b144-c738-4f17-9c57-45c2287b1a88",
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
        id: "5f19debb-deb4-451d-85ef-a78f4b9a7706",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "5887a885-2143-4b6d-895e-38c99da301d9",
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
    id: "b38113f7-6fff-4f41-9d0b-d187ba2c3d1f",
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
        id: "a45713d8-c1db-4f17-ab51-5721b6dda95f",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "bfdb10f9-5881-4a23-aa75-707629876f57",
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
      id: "b38113f7-6fff-4f41-9d0b-d187ba2c3d1f",
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
          id: "a45713d8-c1db-4f17-ab51-5721b6dda95f",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "bfdb10f9-5881-4a23-aa75-707629876f57",
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
    id: "5e9b0ecd-809f-4e44-a4e0-c7b7e905a8d6",
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
        id: "4c1107e4-4b5b-4d79-987b-67daa4268120",
        type: "CSS",
        value: "#txt-password",
        isDefault: true,
      },
      {
        id: "2e7d2159-13ce-4bb0-bbde-7f659b211638",
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
      id: "5e9b0ecd-809f-4e44-a4e0-c7b7e905a8d6",
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
          id: "4c1107e4-4b5b-4d79-987b-67daa4268120",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "2e7d2159-13ce-4bb0-bbde-7f659b211638",
          type: "Attribute",
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    },
    "f2dd79c41acfa4b283d8b489dcb0bd1b-U2FsdGVkX18kHL85mdpQYlDq49us320bXBF6Ja1Ob6t0Dt4Vmc1TvoS9SiRvJolN"
  );
  await web.click({
    type: "Web",
    id: "389b23eb-932c-49ba-adc7-f518b14301ee",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: {},
    name: "button - Login",
    selectors: [
      {
        id: "c9417bb8-cbc6-419f-bfaa-1d88c0b249e1",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "d7908942-9925-48e4-a3c8-2225114c6670",
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