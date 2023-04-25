import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
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
});