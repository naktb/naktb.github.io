var ifConfig =

{
  "api": {
    "url":"http://api.naktb.com/index.php"
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

    "academicLevel": {
      "title": "Academic Level",
      "name": "Field102",
      "default": "",
      "required": true,
      "value": [
        "General",
        "Specialized"
      ]
    },

    "typeOfPaper": {
      "title": "Type of Paper",
      "name": "Field115",
      "default":"",
      "required": true,
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

    "subjectOfDiscipline": {
      "title": "Subject of Discipline",
      "name":"Field116",
      "default": "",
      "required": true,
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

    "topic": {
      "title": "Topic",
      "name": "Field105",
      "default": "sdsd",
      "required": false,
      "value": ""
    },

    "paperInstructions": {
      "title": "Paper Instructions",
      "name": "Field106",
      "default": "",
      "required": true,
      "value": ""
    },

    "sources": {
      "title": "Sources",
      "name": "Field107",
      "default": 0,
      "required": false,
      "value": ""
    },

    "additionalMaterials": {
      "title": "Additional Materials",
      "name": "Field113",
      "default": "",
      "required": false,
      "value": ""
    },

    "pages": {
      "title": "Pages",
      "name": "Field108",
      "default": "",
      "required": true,
      "value": ""
    },

    "firstDraft": {
      "title": "First Draft",
      "name": "Field109",
      "default": "",
      "required": true,
      "value": [
          "3 days",
          "4 days",
          "6 days",
          "7 days",
          "10 days"
      ]
    },

    "powerPointSlides": {
      "title": "Power Point Slides",
      "name": "Field111",
      "default": "",
      "required": false,
      "value": ""
    },

    "progressiveDelivery": {
      "title": "Progressive Delivery",
      "name": "Field111",
      "default": false,
      "required": false,
      "value": "Progressive delivery"
    },

    "email": {
      "title": "Email",
      "name": "Field110",
      "default": "",
      "required": true,
      "value": ""
    }
  }
};

if (typeof window === 'undefined')
  exports.ifConfig = ifConfig;
