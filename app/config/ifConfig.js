var ifConfig =

{
  "api": {
    "url": "http://api.naktb.com/index.php"
  },

  "messages": {
    "formFailed": " يوجد لديك خطاء فضلاً تأكد من المعلومات المدخلة وحاول مرةاخرى contact@naktb.com",
    "formSuccess": "شكراً. تم استلام طلبك وسيقوم احد موظفين خدمات العملاء بتزويدك بتكلفة العمل خلال ٢٤ ساعة"
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
        "title": "الدرجة العلمية",
        "name": "Field102",
        "type": "radio",
        "default": "",
        "required": true,
        "order":0,
        "value": [
          "عام",
          "متخصص"
        ]
      },

      {
        "title": "نوع البحث",
        "name": "Field115",
        "type": "select",
        "default": "",
        "required": true,
        "order":1,
        "value": [
          "الكتابة الإبداعية",
          "بحث (أي نوع)",
          "مقال",
          "عرض أو خطاب",
          "استعراض كتاب / فيلم",
          "اقتراح بحوث",
          "أطروحة",
          "الرسالة",
          "خطة عمل",
          "دراسة حالة",
          "مقال القبول",
          "مراجعة مادة",
          "ببليوغرافيا مشروحة",
          "مقالات جدلية",
          "التفكير الناقد",
          "السيرة الذاتية",
          "ملخص",
          "أخرى"
        ]
      },

      {
        "title": "مجال البحث",
        "name": "Field116",
        "type": "select",
        "default": "",
        "required": true,
        "order":2,
        "value": [
          "اللغة العربية",
          "اللغة الإنجليزية",
          "التاريخ",
          "الجغرافيا",
          "علم النفس",
          "علم الاجتماع",
          "الثقافة اسلامية",
          "التربية بدنية",
          "التربية الفنية",
          "التربية الخاصة",
          "السياسات تربوية",
          "مناهج وطرق التدريس",
          "تقنيات التعليم",
          "البحوث الادارة التربوي",
          "بحوث علم النفس",
          "رياضيات",
          "احصاء",
          "كيمياء",
          "فيزياء",
          "أحياء",
          "العلوم السياسية",
          "القانون العام",
          "القانون الخاص",
          "العناية الحرجة",
          "باطني جراحي",
          "الامومة والطفولة",
          "الصحة النفسية",
          "الصحة العامة",
          "الطوارئ",
          "الموارد البشرية",
          "المحاسبة والتمويل",
          "نظم المعلومات الادارية",
          "ادارة العمليات",
          "المحاسبة",
          "الاسواق المالية والمصارف",
          "ادارة الاعمال",
          "التسويق",
          "علوم الحاسب الالي",
          "تقنية المعلومات",
          "نظم المعلومات",
          "الهندسة الميكانيكية",
          "الهندسة الصناعــية",
          "الهندسة الكهربـائــية",
          "الهندسة الكيميائية",
          "الهندسة المدنــــية",
          "التدقيق اللغوي",
          "الترجمة",
          "أخرى"
        ]
      },

      {
        "title": "الموضوع",
        "name": "Field105",
        "type": "text",
        "default": "sdsd",
        "required": false,
        "order":3,
        "value": ""
      },

      {
        "title": "تعليمات الكتابة",
        "name": "Field106",
        "type": "textarea",
        "default": "",
        "required": true,
        "order":4,
        "value": ""
      },

      {
        "title": "المراجع",
        "name": "Field107",
        "type": "number",
        "default": 0,
        "required": false,
        "order":5,
        "value": ""
      },

      {
        "title": "ارفاق ملفات اضافية",
        "name": "Field113",
        "type": "file",
        "default": "",
        "required": false,
        "order":6,
        "value": ""
      },

      {
        "title": "عدد الصفحات",
        "name": "Field108",
        "type": "number",
        "words": 275,
        "default": 2,
        "required": true,
        "order":7,
        "value": ""
      },

      {
        "title": "موعد التسليم",
        "name": "Field109",
        "type": "radio",
        "default": "",
        "required": true,
        "order":8,
        "value": [
          "٣ أيام",
          "٤ أيام",
          "٦ أيام",
          "٧ أيام",
          "١٠ أيام"
        ]
      },

      {
        "title": "عرض باور بوينت",
        "name": "Field111",
        "type": "number",
        "default": 0,
        "required": false,
        "order":9,
        "value": ""
      },

      {
        "title": "تسليم تدريجي",
        "name": "Field117",
        "type": "checkbox",
        "default": false,
        "required": false,
        "order":10,
        "value": "٢٥٪ تكلفة اضافية"
      },

      {
        "title": "البريد الالكتروني",
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
