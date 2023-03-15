// ডাটা ফেচ করতে হবে - Done
// ফেচ করা ডাটা ডিসপ্লে করাতে হবে। - Done
// See More বাটন কে ফাংশনাল করবো। - Done

// See More এ একবার ক্লিক হলে এটা হাইড হয়ে যাবে-Done
// Add Modal to our Application - Done

// Make Title Dynamic - Done
// Make Logo Dynamic -  Done

// Modal is Now Dynamic
let isSearch = false;
let allData = [];
let allselectedData = getItemFromLocalStorage("selected");
console.log(allselectedData);
const loadData = () => {
  const url = "https://bd-education-techsoros.vercel.app/v1/all/";
  fetch(url)
    .then((response) => response.json)
    .then((data) => {
      allData = data;
      displayData(data.slice(0, 4));
    });
};

// ////object prototype
// const uni = {
//   id: 66,
//   name: "Sylhet International University",
//   universityType: "private",
//   established_in: 2001,
//   description:
//     "Sylhet International University (SIU) is a private university located in Sylhet, Bangladesh. Established in 2001, the university offers undergraduate and graduate programs in various disciplines such as Business Administration, Computer Science, Engineering, Law, Social Sciences, and Humanities. The university is committed to providing quality education that meets the international standards of higher education. SIU is equipped with modern facilities such as a well-stocked library, computer labs, and Wi-Fi connectivity. The university also provides a range of extracurricular activities, including sports, cultural events, and clubs to enhance the overall development of students. SIU aims to produce skilled graduates who are capable of contributing to the socio-economic development of the country.",
//   logo: {
//     title: "SIU",
//     color: "rgba(28,126,67,0.3)",
//   },
// };
const displayData = (universities) => {
  if (universities.length == 0) {
    console.log(get("error"));
    get("error").classList.remove("d-none");
  } else {
    console.log(get("error"));
    get("error").classList.add("d-none");
  }
  const container = document.getElementById("display-container");
  container.innerHTML = "";
  console.log(container);
  universities.forEach((uni) => {
    const col = document.createElement("div");
    col.classList.add("col");

    col.innerHTML = `
   
                  <div class="card mb-3" style="max-width: 540px;">
                     <div class="row g-0">
                        <div class="col-md-4">
                           <div style="background:${uni.logo.color}"
                              class="d-flex h-100 align-items-center justify-content-center">
                              <h2>${uni.logo.title}</h2>
                           </div>
                        </div>
                        <div class="col-md-8">
                           <div class="card-body">
                              <h5 class="card-title">${uni.uniname}</h5>
                              <p class="card-text">
                              ${
                                uni.description
                                  ? uni.description.slice(0, 100)
                                  : "No Data Found"
                              } ...
                              </p>
                              <button onclick=loadDatainModal(${uni.id})
                               type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              See Details
                              </button>
                              <button onclick=selectData(${uni.id})
                               type="button" class="btn btn-warning">
                              Select
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
   
    `;
    container.append(col);
    console.log(uni);
  });
  spinner(false);
};

const loadDatainModal = (id) => {
  //   console.log(id);
  const url = `https://bd-education-techsoros.vercel.app/v1/detail/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayModalData(data);
    });
};

const select = (id) => {
  const selected = allData.find((data) => data.id === id);
  if (!allselectedData.find((data) => data.id === id)) {
    allselectedData.push(selected);
    localStorage.setItem("select", JSON.stringify(allselectedData));
    showSelectedData(allselectedData);
  }
};
const showSelectedData = (data) => {
  get("select").innerHTML = "";
  if (data.length == 0) {
    get("select").innerHTML = "No University is Selected";
  }
  data.forEach((uni) => {
    get("select").innerHTML += `
   
  <div class="card mb-3" style="max-width: 540px;">
     <div class="row g-0">
        <div class="col-12">
           <div  style="background:${uni.logo}"
              class=" mt-2 d-flex h-100 align-items-center justify-content-center">
              <h2>${uni.logo.title}</h2>
           </div>
        </div>
        <div class="col-12">
           <div class="card-body">
              <h5 class="card-title">${uni.name}</h5>
              <button onclick=loadDatainModal(${uni.id})
               type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
              See Details
              </button>
              <button id="remove-${uni.id}" onclick="remove('remove-${uni.id}',${uni.id})"
               type="button" class="btn btn-dark">
               <i class="fa-solid fa-trash"></i>
              </button>
           </div>
        </div>
     </div>
  </div>

`;
  });
};
const remove = (id, uniId) => {
  get(id).parentNode.remove();
  removeItemFromLocalStorage("selected", uniId);
};

const clearAll = () => {
  clearData("selected");
  allselectedData = [];
};
///// detail object prototype
// const uni = {
//   domains: ["atishdipankaruniversity.edu.bd"],
//   country: "Bangladesh",
//   web_pages: ["http://www.adust.edu.bd/"],
//   name: "Atish Dipankar University",
//   alpha_two_code: "BD",
//   id: 3,
//   desc: "Atish Dipankar University of Science and Technology (ADUST) is a private university located in Dhaka, Bangladesh. Established in 2004, it offers undergraduate and graduate programs in a range of disciplines including Engineering, Business, Law, and Arts and Social Sciences. ADUST prides itself on its highly qualified faculty, modern facilities, and strong industry ties that provide students with opportunities for internships and practical training. The university emphasizes research, community service, and a student-centered approach to education, aimed at producing graduates who are ready to succeed in the global job market. Overall, ADUST is committed to providing a quality education that prepares students for the challenges of the 21st century.",
//   universityType: "private",
//   established_in: 2004,
//   best_subjects: [
//     "Mass Communication & Journalism",
//     "Information Technology",
//     "Botany",
//     "Forestry",
//   ],
//   keyInformations: {
//     "info-1":
//       "Atish Dipankar University of Science and Technology (ADUST) is a private university located in Dhaka, Bangladesh",
//     "info-2":
//       " Established in 2004, it offers undergraduate and graduate programs in a range of disciplines including Engineering, Business, Law, and Arts and Social Sciences",
//     "info-3":
//       " ADUST prides itself on its highly qualified faculty, modern facilities, and strong industry ties that provide students with opportunities for internships and practical training",
//     "info-4":
//       " The university emphasizes research, community service, and a student-centered approach to education, aimed at producing graduates who are ready to succeed in the global job market",
//     "info-5":
//       " Overall, ADUST is committed to providing a quality education that prepares students for the challenges of the 21st century",
//   },
//   logo: {
//     title: "ADUST",
//     color: "rgba(26,39,142,0.3)",
//   },
// };
const displayModalData = (uni) => {
  console.log(uni);

  //set Dynamic Title
  const title = get("title");
  title.innerHTML = uni.name;

  //set Logo Dynamically
  get("modal-logo").innerHTML = `
               <h1>${uni.logo.title}</h1>
               <p>${uni.name}</p>
  
  `;
  get("logo-title").innerHTML = uni.logo.title;

  //set Date Dynamically
  get("date").innerText = uni.established_in
    ? uni.established_in
    : "Date Not Found";

  //set Subject Dynamically
  get("subject").innerHTML = uni.best_subjects
    ? `${getListFromArray(uni.best_subjects)}`
    : " All Subject is Good";

  //set Website Dynamically
  get("website").innerHTML = uni.domains
    ? `
  <i class="fa-solid fa-earth-americas me-3"></i>
   <span>${uni.domains[0]}</span>
  `
    : "No Website Found";
  get("website").setAttribute("href", uni.web_pages ? uni.web_pages[0] : "#_");
  console.log(uni.keyInformations);

  //set Key Information to Modal
  get("information").innerHTML = uni.keyInformations
    ? `${getListFromObject(uni.keyInformations)}`
    : "No Information Found";
};

document.getElementById("see-more-btn").addEventListener("click", () => {
  spinner(true);
  let url;
  if (isSearch === true) {
    url = `https://bd-education-techsoros.vercel.app/v1/all/search/${
      get("input-search").value
    }`;
    console.log(url);
  } else {
    console.log(url);
    url = "https://bd-education-techsoros.vercel.app/v1/all/";
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayData(data.result);
      document.getElementById("see-more-btn").style.display = "none";
    });
});

const search = () => {
  const searchText = get("input-search").value;
  isSearch = true;
  const url = `https://bd-education-techsoros.vercel.app/v1/all/search/${searchText}`;
  spinner(true);
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data?.result.length > 4) {
        displayData(data.result.slice(0, 4));
        get("see-more-btn").style.display = "block";
      } else {
        displayData(data.result.slice(0, 4));
        get("see-more-btn").style.display = "none";
      }
    });
};

const get = (id) => {
  return document.getElementById(id);
};
const getListFromArray = (arr) => {
  console.log(arr);
  const list = arr.map((element) => `<li>${element}</li>`);
  console.log(list);
  //join Method Converts an array into a string
  return list.join("");
};
const getListFromObject = (obj) => {
  let arr = [];
  for (let key in obj) {
    arr.push(`<li class="mb-3">${obj[key]}</li>`);
  }
  return arr.join("");
};

const spinner = (isLoading) => {
  console.log(get("spinner"));
  if (isLoading) {
    console.log(isLoading);
    get("spinner").style.display = "block";
  } else {
    console.log(isLoading);
    get("spinner").style.display = "none";
  }
};

loadData();
showSelectedData(allselectedData);
