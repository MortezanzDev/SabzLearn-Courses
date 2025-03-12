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

  let isHideFilter = true;
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
    document.body.style.overflowY = "hidden";
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
    document.body.style.overflowY = "scroll";
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
const accordionHeaderMobileElem = document.getElementById(
  "accordion-header-mobile"
);
const accordionHeaderDesktopElem = document.getElementById(
  "accordion-header-desktop"
);
const accordionContentElem = Array.from(
  document.querySelectorAll(".accordion-content")
)[1];
const accordionElement = document.getElementById("accordion-element");
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
  document.querySelector(".error")?.remove();
  if (copyCoursesData.length) {
    copyCoursesData.forEach((course) => {
      const htmlTemplate = createCourseTemplate(course);
      courseContainer.insertAdjacentHTML("beforeend", htmlTemplate);
    });
  } else {
    document.getElementById("courses-section").insertAdjacentHTML(
      "beforeend",
      `
      <div class="error">
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="w-48 h-[216px] md:w-auto md:h-auto" width="232" height="244" viewBox="0 0 232 244" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M113.993 234C165.521 234 207.293 191.905 207.293 139.979C207.293 88.0523 165.521 45.9575 113.993 45.9575C62.4651 45.9575 20.6934 88.0523 20.6934 139.979C20.6934 191.905 62.4651 234 113.993 234Z" fill="#64748B"></path>
							<path d="M45.2847 79.0636H178.007C183.263 79.0636 187.393 83.2255 187.393 88.5225V173.085C187.393 178.382 183.263 182.544 178.007 182.544H45.2847C40.0284 182.544 35.8984 178.382 35.8984 173.085V88.5225C35.8984 83.2255 40.2161 79.0636 45.2847 79.0636Z" fill="#DAE2EB"></path>
							<path d="M60.0784 55.3662C62.5433 54.5588 63.8921 51.8906 63.0909 49.4066C62.2897 46.9226 59.642 45.5634 57.177 46.3708C54.7121 47.1781 53.3633 49.8463 54.1645 52.3303C54.9657 54.8143 57.6134 56.1735 60.0784 55.3662Z" fill="#64748B"></path>
							<path d="M75.5302 6.43204C77.2927 6.43204 78.7215 4.99218 78.7215 3.21602C78.7215 1.43986 77.2927 0 75.5302 0C73.7677 0 72.3389 1.43986 72.3389 3.21602C72.3389 4.99218 73.7677 6.43204 75.5302 6.43204Z" fill="#FFFFFF"></path>
							<path d="M220.996 85.1173C222.655 85.1173 223.999 83.7621 223.999 82.0904C223.999 80.4188 222.655 79.0636 220.996 79.0636C219.337 79.0636 217.992 80.4188 217.992 82.0904C217.992 83.7621 219.337 85.1173 220.996 85.1173Z" fill="#FFFFFF"></path>
							<path d="M147.329 40.2584C148.171 39.4833 148.229 38.1673 147.46 37.3191C146.691 36.4709 145.385 36.4116 144.544 37.1867C143.702 37.9619 143.643 39.2778 144.412 40.1261C145.181 40.9743 146.487 41.0336 147.329 40.2584Z" fill="#EAEEF9"></path>
							<path d="M190.055 133.321V174.94C190.055 180.237 185.737 184.778 180.293 184.778H43.8163C38.56 184.778 34.0547 180.426 34.0547 174.94V129.727" stroke="#FFFFFF" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
							<g filter="url(#filter0_d_1239_5368)" fill="none">
								<path d="M178.282 110.007H135.361C131.184 110.007 127.151 111.456 123.982 114.063L112.748 123.332C109.579 125.939 105.546 127.387 101.37 127.387H52.5431C47.6461 127.387 43.6133 131.443 43.6133 136.367C43.6133 136.801 43.6134 137.236 43.7575 137.67L52.6873 185.465C53.4074 189.955 57.1521 193.286 61.6171 193.286H165.607C170.072 193.286 173.817 190.1 174.537 185.61L187.068 120.29C187.932 115.366 184.619 110.876 179.722 110.007C179.29 110.007 178.714 110.007 178.282 110.007Z" fill="#FFFFFF"></path>
							</g>
							<g filter="url(#filter1_d_1239_5368)" fill="none">
								<path d="M197.75 97.1877H141.808C136.364 97.1877 131.108 99.0801 126.978 102.485L112.335 114.592C108.205 117.998 102.949 119.889 97.5048 119.889H33.8655C27.4828 119.889 22.2266 125.186 22.2266 131.618C22.2266 132.186 22.2267 132.753 22.4145 133.321L34.0534 195.749C34.992 201.614 39.8728 205.965 45.6923 205.965H181.23C187.05 205.965 191.931 201.803 192.869 195.939L209.202 110.62C210.328 104.187 206.01 98.3228 199.627 97.1877C199.064 97.1877 198.313 97.1877 197.75 97.1877Z" fill="#FFFFFF"></path>
							</g>
							<path d="M89.4319 161.887C92.7496 161.887 95.4391 159.176 95.4391 155.833C95.4391 152.489 92.7496 149.779 89.4319 149.779C86.1142 149.779 83.4248 152.489 83.4248 155.833C83.4248 159.176 86.1142 161.887 89.4319 161.887Z" fill="#64748B"></path>
							<path d="M136.742 161.698C140.059 161.698 142.749 158.988 142.749 155.644C142.749 152.301 140.059 149.59 136.742 149.59C133.424 149.59 130.734 152.301 130.734 155.644C130.734 158.988 133.424 161.698 136.742 161.698Z" fill="#64748B"></path>
							<g filter="url(#filter2_d_1239_5368)" fill="none">
								<path d="M206.786 201.634C206.035 204.85 204.909 208.066 203.595 210.903C200.028 217.714 194.584 223.2 187.826 226.605C180.88 230.2 172.62 231.524 164.172 229.821C144.649 225.659 132.071 206.552 136.201 186.878C140.331 167.203 159.291 154.529 178.815 158.69C185.761 160.204 191.956 163.609 197.024 168.528C205.66 177.23 209.227 189.716 206.786 201.634Z" fill="#FBBF24"></path>
							</g>
							<path d="M181.83 200.09L175.99 194.227L181.853 188.341C183.052 187.137 183.189 185.134 181.862 183.802C180.667 182.603 178.672 182.473 177.34 183.811L171.476 189.697L165.636 183.833C164.441 182.634 162.446 182.505 161.113 183.842C159.781 185.18 159.778 187.049 161.105 188.381L166.946 194.245L161.082 200.131C159.883 201.335 159.746 203.337 161.074 204.67C162.268 205.869 164.263 205.999 165.595 204.661L171.459 198.775L177.3 204.638C178.495 205.838 180.489 205.968 181.821 204.63C183.154 203.292 183.025 201.29 181.83 200.09Z" fill="#FFFFFF"></path>
							<path d="M105.733 118.034C99.1626 105.17 97.6608 89.4683 101.979 75.4692C106.296 61.4701 116.246 49.3627 128.823 42.5523C132.766 40.4713 137.083 38.7687 141.589 38.5796C146.094 38.3904 150.787 39.9038 153.791 43.4982C156.794 46.9034 157.358 52.3895 154.917 56.1731C152.289 59.7675 147.22 61.0917 142.903 60.1458C136.145 58.8216 130.513 53.5246 128.823 47.0926C127.134 40.6605 129.386 33.0934 134.455 28.7423C137.834 25.7155 142.34 24.2021 146.657 22.8778C167.307 16.8242 189.646 16.0674 210.672 20.6077" stroke="#FFFFFF" stroke-miterlimit="10" stroke-dasharray="4 4" fill="none"></path>
							<path d="M118.873 168.355H107.422V171.193H118.873V168.355Z" fill="#64748B"></path>
							<path d="M221.747 15.6891C221.559 18.5267 221.371 20.9861 219.306 21.5536C217.241 22.1211 216.302 20.2293 214.988 17.5809C213.674 15.1215 214.425 12.6622 216.678 12.0947C218.931 11.5272 222.122 12.2839 221.747 15.6891Z" fill="#DAE2EB"></path>
							<path d="M219.683 28.9316C220.246 25.5264 220.809 23.8238 218.932 22.8779C216.867 21.932 215.553 23.6346 213.488 25.9047C211.611 27.9857 212.737 30.8233 214.615 31.7692C216.68 32.9043 219.12 31.7692 219.683 28.9316Z" fill="#DAE2EB"></path>
							<path d="M222.122 22.8777C221.934 24.202 220.996 25.1479 219.682 25.3371C219.118 25.3371 218.555 25.3371 217.804 25.3371C215.176 24.9587 213.111 23.2561 213.299 21.5535C213.487 19.8509 215.927 18.905 218.743 19.2834C219.306 19.2834 219.869 19.4726 220.245 19.6617C221.559 20.0401 222.31 21.3643 222.122 22.8777C222.122 22.8777 222.122 22.6886 222.122 22.8777Z" fill="#64748B"></path>
							<path d="M16.7529 74.9017C16.7529 71.6857 16.7529 68.6588 19.0056 67.7129C21.4461 66.7671 22.7602 69.0372 24.4497 72.064C26.1392 74.9017 25.3883 77.7394 22.9479 78.6852C20.8829 79.6311 16.7529 79.0636 16.7529 74.9017Z" fill="#DAE2EB"></path>
							<path d="M18.0661 59.3891C17.6906 63.3618 17.1274 65.4428 19.5679 66.3887C22.0083 67.3345 23.3224 65.2536 25.5751 62.2267C27.4523 59.5783 26.1383 56.3622 23.6978 55.4164C21.2574 54.4705 18.4415 56.1731 18.0661 59.3891Z" fill="#DAE2EB"></path>
							<path d="M16 66.7671C16 65.2537 17.1264 64.1187 18.4404 63.9295C19.0036 63.7403 19.7545 63.7403 20.5054 63.9295C23.509 64.1187 25.9495 65.8213 25.7617 67.713C25.574 69.6048 23.1336 70.9291 20.13 70.5507C19.5668 70.5507 19.0036 70.3615 18.4404 70.1723C16.9386 69.794 16 68.2806 16 66.7671Z" fill="#64748B"></path>
							<path d="M28.5771 67.3346C47.9129 67.3346 83.5808 78.6853 84.144 120.115" stroke="#FFFFFF" stroke-miterlimit="10" stroke-dasharray="4 4" fill="none"></path>
							<defs>
								<filter id="filter0_d_1239_5368" x="33.6133" y="91.0072" width="163.592" height="103.279" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
									<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
									<feOffset dy="-9"></feOffset>
									<feGaussianBlur stdDeviation="5"></feGaussianBlur>
									<feColorMatrix type="matrix" values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.13 0"></feColorMatrix>
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1239_5368"></feBlend>
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1239_5368" result="shape"></feBlend>
								</filter>
								<filter id="filter1_d_1239_5368" x="0.226562" y="86.1877" width="231.154" height="152.777" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
									<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
									<feOffset dy="11"></feOffset>
									<feGaussianBlur stdDeviation="11"></feGaussianBlur>
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1239_5368"></feBlend>
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1239_5368" result="shape"></feBlend>
								</filter>
								<filter id="filter2_d_1239_5368" x="127.416" y="154.899" width="88.1211" height="88.6581" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
									<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
									<feOffset dy="5"></feOffset>
									<feGaussianBlur stdDeviation="4"></feGaussianBlur>
									<feColorMatrix type="matrix" values="0 0 0 0 0.784314 0 0 0 0 0.701961 0 0 0 0 0.690196 0 0 0 0.1 0"></feColorMatrix>
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1239_5368"></feBlend>
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1239_5368" result="shape"></feBlend>
								</filter>
							</defs>
					</svg>
          <p class="text-error">متاسفانه دوره ای مطابق با جستجوی شما پیدا نشد ):</p>
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
accordionHeaderMobileElem.addEventListener("click", () => {
  isHideCategory = !isHideCategory;
  accordionContentElem.classList.toggle("hidden");
  categoryBtns.forEach((btn) => {
    if (isHideCategory) {
      btn.style.transform = "rotate(180deg)";
    } else {
      btn.style.transform = "rotate(0deg)";
    }
  });
});
accordionHeaderDesktopElem.addEventListener("click", () => {
  accordionElement.classList.toggle("h-17");
  accordionElement.classList.toggle("overflow-hidden");
  isHideCategory = !isHideCategory;
  categoryBtns.forEach((btn) => {
    if (isHideCategory) {
      btn.style.transform = "rotate(180deg)";
    } else {
      btn.style.transform = "rotate(0deg)";
    }
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
