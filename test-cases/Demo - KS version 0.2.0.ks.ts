import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
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
      hashes: {},
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
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "select",
      text: "Tokyo CURA Healthcare Center\nHongkong CURA Healthcare Center\nSeoul CURA Healthcare Center",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
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
    hashes: {},
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
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
  });
  await web.click({
    type: "Web",
    id: "eaff4afa-f797-4e01-92ed-50dc608b83b8",
    attributes: { class: "glyphicon glyphicon-calendar" },
    childIndex: 1,
    hashes: {},
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
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "span",
    text: "",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
  });
  await web.click({
    type: "Web",
    id: "bc805ae9-f380-4ceb-bf3a-a490bf0ff1f4",
    attributes: { class: "day" },
    childIndex: 2,
    hashes: {},
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
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "td",
    text: "24",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
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
    hashes: {},
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
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Book Appointment",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
  });
  await web.click({
    type: "Web",
    id: "2966a45b-b839-4ea6-bf3f-67299ab8a5de",
    attributes: {
      class: "btn btn-default",
      href: "https://katalon-demo-cura.herokuapp.com/",
    },
    childIndex: 1,
    hashes: {},
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
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Go to Homepage",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/appointment.php#summary",
  });
});