import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "3ddf8522-c788-4ebf-94c2-360d6ef75e9d",
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
        id: "9d4c178e-6f5d-460f-94ee-967f7eca6f7b",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "2a03f804-4c35-41cb-9917-20d86a5a2994",
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
    id: "2f5fef21-19a3-4a91-94f5-7980246c0252",
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
        id: "22d15072-4bc4-48bd-ac95-37dc00f97220",
        type: "CSS",
        value: "#txt-username",
        isDefault: true,
      },
      {
        id: "0acc60db-f61b-450f-b649-4bacb738ae47",
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
      id: "2f5fef21-19a3-4a91-94f5-7980246c0252",
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
          id: "22d15072-4bc4-48bd-ac95-37dc00f97220",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "0acc60db-f61b-450f-b649-4bacb738ae47",
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
    id: "ec5ea88d-2620-41a6-ac12-63a02b9813b1",
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
        id: "5207d2ae-27a8-4b54-8a20-19488368b94a",
        type: "CSS",
        value: "#txt-password",
        isDefault: true,
      },
      {
        id: "6d564038-b96e-4660-a5df-f7444c602d79",
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
      id: "ec5ea88d-2620-41a6-ac12-63a02b9813b1",
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
          id: "5207d2ae-27a8-4b54-8a20-19488368b94a",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "6d564038-b96e-4660-a5df-f7444c602d79",
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
    "855c2d76c9ffbffd3a2ca9f68067f969-U2FsdGVkX1/8HBv+sKbDnjMgIcxc0WrExe2OAM/xzyNgdBIyk6zDD2oooLRG3fPk"
  );
  await web.click({
    type: "Web",
    id: "9bce2356-38a1-4398-837a-021696de4142",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: { "md5.v1": "50aa64147a00037c420def1e18673ac9" },
    name: "button - Login",
    selectors: [
      {
        id: "066f0684-b584-4aae-b027-d6cb4e376739",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "a6fb17fa-33ea-43e7-9f0e-d62932424c9d",
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
  await web.click({
    type: "Web",
    id: "0bbf28de-040e-4a94-bdbc-fb29e2c4ec1a",
    attributes: {
      id: "combo_facility",
      name: "facility",
      class: "form-control",
    },
    childIndex: 1,
    hashes: { "md5.v1": "eb61194c54579bb83036a03574c5c597" },
    name: "select - Tokyo CURA Healthcare Center",
    selectors: [
      {
        id: "f32166bf-1154-4033-92a4-59cefe16c061",
        type: "CSS",
        value: "#combo_facility",
        isDefault: true,
      },
      {
        id: "a19c8d94-0e98-4ee5-b42f-195a5204201e",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "select",
    text: "Tokyo CURA Healthcare Center\nHongkong CURA Healthcare Center\nSeoul CURA Healthcare Center",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.selectOptionByValue(
    {
      type: "Web",
      id: "0bbf28de-040e-4a94-bdbc-fb29e2c4ec1a",
      attributes: {
        id: "combo_facility",
        name: "facility",
        class: "form-control",
      },
      childIndex: 1,
      hashes: { "md5.v1": "eb61194c54579bb83036a03574c5c597" },
      name: "select - Tokyo CURA Healthcare Center",
      selectors: [
        {
          id: "f32166bf-1154-4033-92a4-59cefe16c061",
          type: "CSS",
          value: "#combo_facility",
          isDefault: true,
        },
        {
          id: "a19c8d94-0e98-4ee5-b42f-195a5204201e",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "select",
      text: "Tokyo CURA Healthcare Center\nHongkong CURA Healthcare Center\nSeoul CURA Healthcare Center",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
      parentIframe: null,
      shadowRoot: null,
    },
    "Hongkong CURA Healthcare Center"
  );
  await web.click({
    type: "Web",
    id: "aa172b4c-b4da-49aa-86a5-d7009ec95791",
    attributes: {
      type: "radio",
      name: "programs",
      id: "radio_program_medicaid",
      value: "Medicaid",
    },
    childIndex: 1,
    hashes: { "md5.v1": "b06017ac6c5c56ea52e66759eb9c65b5" },
    name: "input - programs",
    selectors: [
      {
        id: "baccefd2-1c84-48aa-a29a-c288a3d32727",
        type: "CSS",
        value: "#radio_program_medicaid",
        isDefault: true,
      },
      {
        id: "e6703d9a-812e-47cf-8ef3-fc87fe2df4c4",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "eaff4afa-f797-4e01-92ed-50dc608b83b8",
    attributes: { class: "glyphicon glyphicon-calendar" },
    childIndex: 1,
    hashes: { "md5.v1": "61fb4a8b03cfc1ee468619bd12dd0e3c" },
    name: "span - glyphicon glyphicon-calendar",
    selectors: [
      {
        id: "499bb124-1056-4062-ad5a-9112a2cc0b50",
        type: "CSS",
        value: ".glyphicon",
        isDefault: true,
      },
      {
        id: "f6e46e76-35d5-4a98-9e2c-0336357e07a6",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "span",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "bc805ae9-f380-4ceb-bf3a-a490bf0ff1f4",
    attributes: { class: "day" },
    childIndex: 2,
    hashes: { "md5.v1": "3896359b23bb12505f65d4ac02158267" },
    name: "td - 24",
    selectors: [
      {
        id: "6e9c4773-390d-4f9d-9886-8923e17304cf",
        type: "CSS",
        value: "tr:nth-child(5) .day:nth-child(2)",
        isDefault: true,
      },
      {
        id: "ef50119b-9ed8-47fd-a89f-fd6aa2a17ee3",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "td",
    text: "24",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "3c6886da-2bb9-4799-940e-8ac5928cf9a2",
    attributes: {
      id: "btn-book-appointment",
      type: "submit",
      class: "btn btn-default",
    },
    childIndex: 1,
    hashes: { "md5.v1": "56ef00cb92ad0547b9464c968fd02681" },
    name: "button - Book Appointment",
    selectors: [
      {
        id: "febd1fdd-be07-449b-9d1c-fff3c1065f98",
        type: "CSS",
        value: "#btn-book-appointment",
        isDefault: true,
      },
      {
        id: "0d063d35-2966-4351-afae-5ea67c17ecda",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Book Appointment",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "2966a45b-b839-4ea6-bf3f-67299ab8a5de",
    attributes: {
      class: "btn btn-default",
      href: "https://katalon-demo-cura.herokuapp.com/",
    },
    childIndex: 1,
    hashes: { "md5.v1": "706652890bf1fc29e80d791a1c2f601a" },
    name: "a - Go to Homepage",
    selectors: [
      {
        id: "364bc8c1-869a-481a-836f-6848f5fcafa6",
        type: "CSS",
        value: ".btn.btn-default",
        isDefault: true,
      },
      {
        id: "604fbdef-8a53-4238-955a-50cbd7589f8b",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Go to Homepage",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/appointment.php#summary",
    parentIframe: null,
    shadowRoot: null,
  });
});