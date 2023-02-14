const main = document.querySelector(".main");
const slidebar = document.querySelector(".slidebar");
const directBanner = document.querySelector(".directions__banner");
const bannerSize = document.querySelectorAll(".banner-size");
const bannerText = document.querySelectorAll(".banner-text");
let dataSizeIndex;
dataSet();

main.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
  }
});

slidebar.addEventListener("click", () => {
  document
    .querySelector(".rectangle-no-active")
    .classList.toggle("rectangle-active");
});

const descriptionBusiness = [
  {
    text: `ГК Softline предлагает клиентам собственную линейку оборудования 
	(ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, 
	решений в области информационной безопасности.`,
  },
  {
    text: `Softline обладает всеми необходимыми государственными лицензиями 
		для организации проектов по информационной безопасности и аттестации. `,
  },
  {
    text: `ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, 
		включая ПО и оборудование собственного производства.`,
  },
  {
    text: `Softline использует современные облачные решения как российских, 
		так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.`,
  },
  {
    text: `Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. 
		В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.`,
  },
  {
    text: `200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, 
		сервисное партнерство с 30+ мировыми производителями.`,
  },
];

directBanner.addEventListener("mouseover", (e) => {
  let span = document.createElement("span");
  let data = e.target.closest(".banner-size");
  if (!data) return;
  dataSizeIndex = data.dataset.sizeIn;
  span.textContent = descriptionBusiness[dataSizeIndex].text;
  bannerText[dataSizeIndex].classList.add("banner-text__open");
  bannerText[dataSizeIndex].append(span);
});

directBanner.addEventListener("mouseout", (e) => {
  let data = e.target.closest(".banner-size");
  if (!data) return;
  dataSizeIndex = data.dataset.sizeIn;
  bannerText[dataSizeIndex].classList.remove("banner-text__open");
});

function dataSet() {
  bannerSize.forEach((item, index) => {
    item.dataset.sizeIn = index;
  });
  bannerText.forEach((item, index) => {
    item.dataset.textIn = index;
  });
}
