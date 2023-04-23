import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.setText(
    {
      type: "Web",
      id: "5209cd61-e5e2-4129-aee7-79e9a91d86c1",
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
          id: "24cd2a89-5f72-4b6c-a09e-40d73e8e7ecc",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "8ec883e5-73d5-43d8-a253-81ad64d4717d",
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
    id: "5209cd61-e5e2-4129-aee7-79e9a91d86c1",
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
        id: "24cd2a89-5f72-4b6c-a09e-40d73e8e7ecc",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "8ec883e5-73d5-43d8-a253-81ad64d4717d",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
  });
  await web.click({
    type: "Web",
    id: "3a627468-2e5f-4e3a-aa7e-28c21c53bac4",
    attributes: { class: "form-group" },
    childIndex: 2,
    hashes: {},
    name: "div - form-group",
    selectors: [
      {
        id: "53b5146c-d99a-4efb-9e3a-d1d51d58223a",
        type: "CSS",
        value: ".alert .form-group:nth-child(2)",
        isDefault: true,
      },
      {
        id: "dd7be48c-0e3d-4dac-8dfb-7e721e0675fc",
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
    id: "0d1effd5-df2a-468b-b071-7df6a50a0b38",
    attributes: { class: "col-sm-8" },
    childIndex: 2,
    hashes: {},
    name: "div - col-sm-8",
    selectors: [
      {
        id: "857d859f-f15e-4bac-9c0e-dea8b3c7acbd",
        type: "CSS",
        value: ".form-group:nth-child(3) div",
        isDefault: true,
      },
      {
        id: "fe7bd8d0-2513-44a5-9cc9-314d74037958",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "div",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
  });
  await web.click({
    type: "Web",
    id: "2ba7877d-e10c-4ec4-93a2-ee480592d8b1",
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
        id: "c6e860ca-1cdd-4008-b451-6a306e9d01da",
        type: "CSS",
        value: "#txt-password",
        isDefault: true,
      },
      {
        id: "5179a4e8-983a-4c77-bb6e-dd6610bd9608",
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
      id: "2ba7877d-e10c-4ec4-93a2-ee480592d8b1",
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
          id: "c6e860ca-1cdd-4008-b451-6a306e9d01da",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "5179a4e8-983a-4c77-bb6e-dd6610bd9608",
          type: "Attribute",
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    },
    "91dc121375140a4dfe8ed48463e68a55-U2FsdGVkX1/s1w6ydBebDQN7rU5L69XLd+hNvD/pSvgPpBBAYOARuAnkaPJyO8O9"
  );
  await web.click({
    type: "Web",
    id: "7492cc4d-78aa-4e47-94bd-65262c2e6886",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: {},
    name: "button - Login",
    selectors: [
      {
        id: "29087aec-d0fd-4bc5-8e69-332c030028cd",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "586125d5-0d5e-4368-b490-30a758e18b94",
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