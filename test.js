//Information Technology

// const getListFromArray = (arr) => {
//   const list = arr.map((element) => `<li>${element}</li>`);
//   return list.join("");
// };

// console.log(getListFromArray([12, 13, 14]));
const information = {
  "info-1":
    "Atish Dipankar University of Science and Technology (ADUST) is a private university located in Dhaka, Bangladesh",
  "info-2":
    " Established in 2004, it offers undergraduate and graduate programs in a range of disciplines including Engineering, Business, Law, and Arts and Social Sciences",
  "info-3":
    " ADUST prides itself on its highly qualified faculty, modern facilities, and strong industry ties that provide students with opportunities for internships and practical training",
  "info-4":
    " The university emphasizes research, community service, and a student-centered approach to education, aimed at producing graduates who are ready to succeed in the global job market",
  "info-5":
    " Overall, ADUST is committed to providing a quality education that prepares students for the challenges of the 21st century",
};

const getListFromObject = (obj) => {
  for (let key in obj) {
    console.log(obj[key]);
  }
};

getListFromObject(information);
