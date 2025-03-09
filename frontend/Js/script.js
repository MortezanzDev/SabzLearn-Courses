// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
var themeToggleDarkIcon1 = document.getElementById("theme-toggle-dark-icon1");
var themeToggleLightIcon1 = document.getElementById("theme-toggle-light-icon1");
var themeToggleLightText = document.getElementById("theme-toggle-light-text");
var themeToggleDarkText = document.getElementById("theme-toggle-dark-text");

// Change the icons and texts inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  if (themeToggleLightIcon) themeToggleLightIcon.classList.remove("hidden");
  if (themeToggleLightIcon1) themeToggleLightIcon1.classList.remove("hidden");
  if (themeToggleLightText) themeToggleLightText.classList.remove("hidden");
  if (themeToggleDarkIcon) themeToggleDarkIcon.classList.add("hidden");
  if (themeToggleDarkIcon1) themeToggleDarkIcon1.classList.add("hidden");
  if (themeToggleDarkText) themeToggleDarkText.classList.add("hidden");
} else {
  if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove("hidden");
  if (themeToggleDarkIcon1) themeToggleDarkIcon1.classList.remove("hidden");
  if (themeToggleDarkText) themeToggleDarkText.classList.remove("hidden");
  if (themeToggleLightIcon) themeToggleLightIcon.classList.add("hidden");
  if (themeToggleLightIcon1) themeToggleLightIcon1.classList.add("hidden");
  if (themeToggleLightText) themeToggleLightText.classList.add("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");
var themeToggleBtn1 = document.getElementById("theme-toggle-1");

function toggleTheme() {
  if (themeToggleDarkIcon) themeToggleDarkIcon.classList.toggle("hidden");
  if (themeToggleLightIcon) themeToggleLightIcon.classList.toggle("hidden");
  if (themeToggleDarkIcon1) themeToggleDarkIcon1.classList.toggle("hidden");
  if (themeToggleLightIcon1) themeToggleLightIcon1.classList.toggle("hidden");
  if (themeToggleDarkText) themeToggleDarkText.classList.toggle("hidden");
  if (themeToggleLightText) themeToggleLightText.classList.toggle("hidden");

  // If set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // If NOT set via local storage previously
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}

if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);
if (themeToggleBtn1) themeToggleBtn1.addEventListener("click", toggleTheme);

// Menu Mobile JS

document.addEventListener("DOMContentLoaded", function () {
  const openNav = document.querySelector(".nav-mobile__open-navigation");
  const openSort = document.querySelector(".nav-mobile__open-sort");
  const openFilter = document.querySelector(".nav-mobile__open-filter");
  const menuContent = document.querySelector(".nav-mobile-content");
  const sortContent = document.querySelector(".sort-mobile-content");
  const filterContent = document.querySelector(".filter-mobile-content");
  const overlay = document.querySelector(".screen-overlay");
  const close = document.querySelector(".close");
  const closeFilter = document.querySelector(".close-filter");
  const applyFilter = document.querySelector(".apply-filter");


  openNav.addEventListener("click", function () {
    menuContent.classList.add("active");
    overlay.classList.add("active");
  });

  openSort.addEventListener("click", function () {
    sortContent.classList.add("active");
    overlay.classList.add("active");
  });

  openFilter.addEventListener("click", function () {
    filterContent.classList.add("active");
    overlay.classList.add("active");
  });

  overlay.addEventListener("click", function () {
    menuContent.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", function () {
    sortContent.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", function () {
    filterContent.classList.remove("active");
    overlay.classList.remove("active");
  });

  close.addEventListener("click", function () {
    menuContent.classList.remove("active");
    overlay.classList.remove("active");
  });

  close.addEventListener("click", function () {
    sortContent.classList.remove("active");
    overlay.classList.remove("active");
  });

  closeFilter.addEventListener("click", function () {
    filterContent.classList.remove("active");
    overlay.classList.remove("active");
  });
  
  applyFilter.addEventListener("click", function () {
    filterContent.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// Handle Courses

const courseContainer = document.getElementById("course-container");
const resetFiltersBtn = document.getElementById("reset-filters-btn");
const searchBoxFormEl = document.getElementById("searchbox-form");
const accordionHeaderElems = Array.from(
  document.querySelectorAll(".accordion-header")
);
const accordionContentElems = Array.from(
  document.querySelectorAll(".accordion-content")
);
const categoryBtns = Array.from(document.querySelectorAll(".category-btn"));
const courseCategoryBtns = Array.from(
  document.querySelectorAll(".course-category")
);
const courseCategoryMobileBtns = Array.from(
  document.querySelectorAll(".course-category-mobile")
);
const freeCheckBoxElems = Array.from(
  document.querySelectorAll(".free-checkbox")
);
const presaleCheckBoxElems = Array.from(
  document.querySelectorAll(".presale-checkbox")
);
const checkBoxesElems = Array.from(document.querySelectorAll(".check-box"));

let coursesData = [];
let sortingBy = "همه دوره ها";
const successSvg = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>	
`;
let isHideCategory = false;
let categories = [];

// Fetch a data from API_URL
const fetchData = async (API_URL) => {
  const res = await fetch(API_URL);
  const data = await res.json();

  return data;
};

// Create a html template for course card
const createCourseTemplate = (course) => {
  const html = `
    <div class="dark:bg-[#242a38] bg-[#dfdfdf] rounded-xl flex flex-col">
        <!-- Course Banner -->
        <a href="#">
            <img src="${course.cover}" class="rounded-xl w-full"
                alt="${course.title}">
        </a>
        <!-- Course Texts -->
        <div class="px-5 pt-4 pb-3 flex flex-col gap-y-3">
            <!-- Course Title -->
            <h3 class="dana-demibold line-clamp-2">
                <a href="#">${course.title}</a>
            </h3>
            <!-- Course Description -->
            <p class="line-clamp-2 text-sm text-gray-400 dana-regular leading-6">${
              course.des
            }</p>
        </div>
        <!-- Course Status -->
        <div class="px-4.5 pb-3 flex flex-col">
            <!-- Course Rate & Teacher -->
            <div class="border-b-1 border-[#ffffff1a] flex justify-between pb-3">
                <div class="flex items-center gap-x-1 text-sm dana-regular leading-6 dark:text-[#ffffffb3] text-slate-800">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        
                    <span class="">${course.instructor}</span>
                </div>
                <div class="flex items-center text-sm text-[#f59e0b] dana-medium gap-x-1">
                    <span class="max-h-4">${course.rating}</span>
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="20"  height="20" ><defs><symbol id="star-mini" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f59e0b">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" fill="#f59e0b"></path>
                        </symbol></defs>
                        <use href="#star-mini"></use>
                    </svg>
                </div>
            </div>
            <div class="flex justify-between mt-4 items-end">
                <div class="flex items-center gap-x-1 text-sm dana-medium leading-6 dark:text-[#ffffffb3] text-slate-800">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="stroke-[#1d293d] w-5 h-5 dark:stroke-[#ffffffb3]" width="24"  height="24" ><defs><symbol id="users" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5px" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" fill="none" stroke-width="1.5px"></path>
                        </symbol></defs>
                        <use href="#users"></use>
                    </svg>
                    <span class="max-h-6">${course.students}</span>
                </div>
                <div class="flex flex-row gap-x-2 items-center">
                    <span class="bg-green-500 text-white rounded dana-medium p-1 max-h-7 leading-6 min-h-8 block pt-1.5 text-sm">${
                      course.offerPercent
                    }%</span>
                    <div class="flex flex-col gap-y-2 items-start">
                        <span class="text-gray-800 dark:text-white/70 line-through line-through-[#fff] max-h-5 -mb-2 text-sm leading-6 dana-medium">${
                          course.price
                        }</span>
                        <h3 class="text-lg text-green-500 dana-demibold leading-7.5 max-h-6">${
                          course.offerPrice || ""
                        }
                            <span class="dana-medium text-base">${
                              course.offerPrice ? "تومانءء" : "رایگان"
                            }</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
    `;

  return html;
};

// Render all courses to DOM
const renderCourses = (courses) => {
  let copyCoursesData = [...courses];
  copyCoursesData = filterCourses(courses, categories);
  copyCoursesData = sortCourses(copyCoursesData, sortingBy);
  const isFreeChecked = freeCheckBoxElems.some((check) => check.checked);
  const isPresaleChecked = presaleCheckBoxElems.some((check) => check.checked);

  if (isFreeChecked) {
    copyCoursesData = copyCoursesData.filter((course) => !course.offerPrice);
  }
  if (isPresaleChecked) {
    copyCoursesData = copyCoursesData.filter((course) => !course.preSale);
  }

  courseContainer.innerHTML = "";
  if (copyCoursesData.length) {
    copyCoursesData.forEach((course) => {
      const htmlTemplate = createCourseTemplate(course);
      courseContainer.insertAdjacentHTML("beforeend", htmlTemplate);
    });
  } else {
    courseContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="error">
      <p>متاسفانه دوره ای مطابق با جستجوی شما پیدا نشد ):</p>
      </div>
      `
    );
  }
  document.querySelector("#count_item_archive").innerHTML = courses.length;
};

// Sorting courses by a parameter
const sortCourses = (coursesData, sortBy) => {
  const sortedCourses = [...coursesData];

  switch (sortBy) {
    case "ارزان ترین":
      sortedCourses.sort((a, b) => a.offerPrice - b.offerPrice);
      break;
    case "گران ترین":
      sortedCourses.sort((a, b) => b.offerPrice - a.offerPrice);
      break;
    case "پرمخاطب ها":
      sortedCourses.sort((a, b) => b.students - a.students);
      break;
    default:
      break;
  }

  return sortedCourses;
};

// Filter courses by one or more category
const filterCourses = (coursesData, categories) => {
  if (!categories.length) return coursesData;

  let copyCoursesData = [...coursesData];
  copyCoursesData = copyCoursesData.filter((course) => {
    return categories.some((categoriesItem) => {
      return categoriesItem === course.category;
    });
  });

  return copyCoursesData;
};

window.addEventListener("load", async () => {
  coursesData = await fetchData("http://localhost:3000/api/courses");
  renderCourses(coursesData);
  courseCategoryBtns.at(0).insertAdjacentHTML("beforeend", successSvg);
  courseCategoryBtns.at(0).classList.add("text-green-500");
});
courseCategoryBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    courseCategoryBtns.forEach((btn) => {
      btn.querySelector("svg")?.remove();
      btn.classList.remove("text-green-500");
    });
    sortingBy = e.target.firstChild.textContent;
    btn.insertAdjacentHTML("beforeend", successSvg);
    btn.classList.add("text-green-500");

    let sortedCoursesData = sortCourses(coursesData, sortingBy);
    renderCourses(sortedCoursesData);
  });
});
courseCategoryMobileBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    courseCategoryMobileBtns.forEach((btn) => {
      btn.classList.remove("text-[#0a97d4]");
      btn.classList.remove("border-t-2");
      btn.classList.remove("border-[#0a97d4]");
      btn.classList.remove("border-b-2");
      btn.classList.remove("h-full");
      btn.classList.remove("items-center");
      btn.classList.remove("flex");
      btn.classList.remove("sortbtn--active");
    });
    e.target.classList.add("text-[#0a97d4]");
    e.target.classList.add("border-t-2");
    e.target.classList.add("border-[#0a97d4]");
    e.target.classList.add("border-b-2");
    e.target.classList.add("h-full");
    e.target.classList.add("items-center");
    e.target.classList.add("flex");
    e.target.classList.add("sortbtn--active");

    sortingBy = e.target.textContent;
    let sortedCoursesData = sortCourses(coursesData, sortingBy);
    renderCourses(sortedCoursesData);
  });
});
accordionHeaderElems.forEach((elem) => {
  elem.addEventListener("click", () => {
    isHideCategory = !isHideCategory;
    accordionContentElems.forEach((accContent) => {
      accContent.classList.toggle("hidden");
    });
    categoryBtns.forEach((btn) => {
      if (isHideCategory) {
        btn.style.transform = "rotate(180deg)";
      } else {
        btn.style.transform = "rotate(0deg)";
      }
    });
  });
});

checkBoxesElems.forEach((checkBox) => {
  checkBox.addEventListener("click", (e) => {
    let category = e.target.parentElement.lastElementChild.textContent;
    if (categories.includes(category)) {
      categories = categories.filter((c) => c !== category);
    } else {
      categories.push(category);
    }
    let copyCoursesData = [...coursesData];

    copyCoursesData = filterCourses(copyCoursesData, categories);
    renderCourses(copyCoursesData);
  });
});

freeCheckBoxElems.forEach((checkBox) => {
  checkBox.addEventListener("click", () => {
    let status = checkBox.checked;
    if (status) {
      let copyCoursesData = [...coursesData];
      copyCoursesData = copyCoursesData.filter(
        (course) => course.offerPrice === 0
      );

      renderCourses(copyCoursesData);
    } else {
      renderCourses(coursesData);
    }
  });
});
presaleCheckBoxElems.forEach((checkBox) => {
  checkBox.addEventListener("click", () => {
    let status = checkBox.checked;
    if (status) {
      let copyCoursesData = [...coursesData];
      copyCoursesData = copyCoursesData.filter((course) => course.preSale);

      renderCourses(copyCoursesData);
    } else {
      renderCourses(coursesData);
    }
  });
});

resetFiltersBtn.addEventListener("click", () => {
  location.reload();
});
searchBoxFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchBoxFormEl.querySelector("input").value;
  const copyCoursesData = coursesData.filter((course) =>
    course.title.includes(query)
  );

  renderCourses(copyCoursesData);
});
