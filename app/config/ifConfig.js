var ifConfig =

{
  "api": {
    //"url": "http://api.naktb.com/index.php"
  },

  "messages": {
    "formFailed": " يوجد لديك خطاء فضلاً تأكد من المعلومات المدخلة وحاول مرةاخرى contact@naktb.com",
    "formSuccess": "! شكراً لتواصلك معنا. سوف يتصل بك خدمة العملاء في أقرب وقت ممكن لمساعدتك"
  },

  "callMeBackForm": {
    "defaults": {
      'Field1': '0000000000',
      'Field3': 'اسم'
    }
  },

  "orderForm": {
    "id": "q1qdx6e10trwg4z",
    "idStamp": "N0w2t6e+EH57yQSC/MkGC4S8Z6aoFaD3dXMnWJzQHns=",

    "controls": [
      {
        "title": "Academic Level",
        "name": "Field102",
        "type": "radio",
        "default": "",
        "required": true,
        "order":0,
        "value": [
          "General",
          "Specialized"
        ]
      },

      {
        "title": "Type of Paper",
        "name": "Field115",
        "type": "select",
        "default": "",
        "required": true,
        "order":1,
        "value": [
          "Creative writing",
          "Essay (any type)",
          "Research paper",
          "Presentation or speech",
          "Book/movie review",
          "Term paper",
          "Coursework",
          "Research proposal",
          "Dissertation",
          "Thesis",
          "Business plan",
          "Case study",
          "Admission essay",
          "Article review",
          "Annotated bibliography",
          "Argumentative essays",
          "Critical thinking",
          "Biographies",
          "Thesis/Dissertation abstract",
          "Dissertation chapter - Introduction",
          "Dissertation chapter - Literature review",
          "Dissertation chapter - Methodology",
          "Dissertation chapter - Results",
          "Dissertation chapter - Discussion",
          "Dissertation chapter - Conclusion",
          "Thesis/Dissertation proposal",
          "Thesis/Dissertation chapter",
          "Capstone project",
          "Other"
        ]
      },

      {
        "title": "Subject of Discipline",
        "name": "Field116",
        "type": "select",
        "default": "",
        "required": true,
        "order":2,
        "value": [
          "Art (Fine arts, Performing arts)",
          "Classic English Literature",
          "Composition",
          "English 101",
          "Film & Theater studies",
          "History",
          "Linguistics",
          "Literature",
          "Music",
          "Philosophy",
          "Poetry",
          "Religious studies",
          "Shakespeare",
          "Anthropology",
          "Cultural and Ethnic Studies",
          "Economics",
          "Ethics",
          "Political science",
          "Psychology",
          "Social Work and Human Services",
          "Sociology",
          "Tourism",
          "Urban Studies",
          "Women's & gender studies",
          "Accounting",
          "Business Studies",
          "Finance",
          "Human Resources Management (HRM)",
          "International Relations",
          "Logistics",
          "Management",
          "Marketing",
          "Public Relations (PR)",
          "Astronomy (and other Space Sciences)",
          "Biology (and other Life Sciences)",
          "Chemistry",
          "Ecology",
          "Geography",
          "Geology (and other Earth Sciences)",
          "Physics",
          "Zoology",
          "Computer science",
          "Mathematics",
          "Statistics",
          "Agriculture",
          "Application Letters",
          "Architecture, Building and Planning",
          "Aviation",
          "Civil Engineering",
          "Communications",
          "Criminal Justice",
          "Criminal law",
          "Education",
          "Engineering",
          "Environmental studies and Forestry",
          "Family and consumer science",
          "Health Care",
          "International Trade",
          "IT, Web",
          "Law",
          "Leadership Studies",
          "Medical Sciences (Anatomy, Physiology, Pharmacology etc.)",
          "Medicine",
          "Nursing",
          "Nutrition/Dietary",
          "Public Administration",
          "Sports",
          "Technology",
          "Other (enter below)"
        ]
      },

      {
        "title": "Topic",
        "name": "Field105",
        "type": "text",
        "default": "sdsd",
        "required": false,
        "order":3,
        "value": ""
      },

      {
        "title": "Paper Instructions",
        "name": "Field106",
        "type": "textarea",
        "default": "",
        "required": true,
        "order":4,
        "value": ""
      },

      {
        "title": "Sources",
        "name": "Field107",
        "type": "number",
        "default": 0,
        "required": false,
        "order":5,
        "value": ""
      },

      {
        "title": "Additional Materials",
        "name": "Field113",
        "type": "file",
        "default": "",
        "required": false,
        "order":6,
        "value": ""
      },

      {
        "title": "Pages",
        "name": "Field108",
        "type": "number",
        "words": 275,
        "default": 2,
        "required": true,
        "order":7,
        "value": ""
      },

      {
        "title": "First Draft",
        "name": "Field109",
        "type": "radio",
        "default": "",
        "required": true,
        "order":8,
        "value": [
          "3 days",
          "4 days",
          "6 days",
          "7 days",
          "10 days"
        ]
      },

      {
        "title": "Power Point Slides",
        "name": "Field111",
        "type": "number",
        "default": 0,
        "required": false,
        "order":9,
        "value": ""
      },

      {
        "title": "Progressive Delivery",
        "name": "Field117",
        "type": "checkbox",
        "default": false,
        "required": false,
        "order":10,
        "value": "Progressive delivery"
      },

      {
        "title": "Email",
        "name": "Field110",
        "type": "email",
        "default": "",
        "required": true,
        "order":11,
        "value": ""
      }
    ]
  }
};

if (typeof window === 'undefined')
  exports.ifConfig = ifConfig;
