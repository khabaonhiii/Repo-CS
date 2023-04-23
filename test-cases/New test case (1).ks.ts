import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "d35b7363-189c-4ae7-9aba-35d666a930e9",
    attributes: {
      id: "btn-make-appointment",
      href: "./profile.php#login",
      class: "btn btn-dark btn-lg",
    },
    childIndex: 4,
    hashes: { "md5.v1": "3caec008087ccb7a1cb3fc698fbf83c2" },
    name: "a - Make Appointment",
    selectors: [
      {
        id: "4fd7c38f-9099-4eb1-8d8f-3a3ad12f9b86",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "a6e7ad7b-31f9-4034-bc23-672e0da47cd8",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Make Appointment",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "cc7f9e25-eef7-4168-be97-b19437dd6dbe",
    attributes: {
      type: "text",
      class: "form-control",
      placeholder: "Username",
      "aria-describedby": "demo_username_label",
      value: "John Doe",
      readonly: "",
    },
    childIndex: 2,
    hashes: { "md5.v1": "d658d4e8da92fe56536b7b268fa72a89" },
    name: "input - Username",
    selectors: [
      {
        id: "48175c1b-63cf-4834-874e-9ff0aa0e1c69",
        type: "CSS",
        value: '[value="John\\ Doe"]',
        isDefault: true,
      },
      {
        id: "b05a25b3-3dc8-42c5-a231-5a52ec46f490",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "13e64641-c79f-48a0-a5b9-b2f6c10df8aa",
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
    hashes: { "md5.v1": "57f176ba19cb19cc93acaba2dbde6b10" },
    name: "input - Username",
    selectors: [
      {
        id: "103ca357-6521-43d2-a938-577d177ac7de",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "50f0fe07-d394-4dd2-acbb-1612323445b1",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.setText(
    {
      type: "Web",
      id: "13e64641-c79f-48a0-a5b9-b2f6c10df8aa",
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
      hashes: { "md5.v1": "57f176ba19cb19cc93acaba2dbde6b10" },
      name: "input - Username",
      selectors: [
        {
          id: "103ca357-6521-43d2-a938-577d177ac7de",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "50f0fe07-d394-4dd2-acbb-1612323445b1",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "John Doe"
  );
  await web.click({
    type: "Web",
    id: "e2a8ff89-05ed-40d9-9f9c-0b75edae7c2f",
    attributes: { class: "input-group" },
    childIndex: 1,
    hashes: { "md5.v1": "a66ae4d3f9aae90c91376407907f4a15" },
    name: "div - input-group",
    selectors: [
      {
        id: "982f1bea-04df-4481-bc3c-ff32657672c8",
        type: "CSS",
        value: ".form-group:nth-child(2) .input-group",
        isDefault: true,
      },
      {
        id: "d405a561-7787-4940-a0e7-3a2c3b9ca960",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "div",
    text: "\t",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "561106a3-b2ab-4cff-a04f-80555ef72262",
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
    hashes: { "md5.v1": "fe634c654141065106a978262a410740" },
    name: "input - Password",
    selectors: [
      {
        id: "9a4fc05c-dd99-4413-9c26-e8a759653ec4",
        type: "CSS",
        value: "#txt-password",
        isDefault: true,
      },
      {
        id: "22adec44-27e1-4481-a2e4-3371a8083461",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.setEncryptedText(
    {
      type: "Web",
      id: "561106a3-b2ab-4cff-a04f-80555ef72262",
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
      hashes: { "md5.v1": "fe634c654141065106a978262a410740" },
      name: "input - Password",
      selectors: [
        {
          id: "9a4fc05c-dd99-4413-9c26-e8a759653ec4",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "22adec44-27e1-4481-a2e4-3371a8083461",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "236b9647249db138d768167fcc79fbff-U2FsdGVkX18jTHzqCyCwTFb+eEYa4sY79zkbjdK3iynpi2gaqSI+fHY0s+6MiqJR"
  );
  await web.click({
    type: "Web",
    id: "990083ec-7df2-451a-928c-9307df1d2527",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: { "md5.v1": "50aa64147a00037c420def1e18673ac9" },
    name: "button - Login",
    selectors: [
      {
        id: "9aff2321-354a-4ba1-aecb-eda5a3ea319b",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "5991d2ef-3093-441f-95e5-9bd1d7ee0da1",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Login",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
});