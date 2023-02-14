const main = document.querySelector(".main");
const slidebar = document.querySelector(".slidebar");
const directBanner = document.querySelector(".directions__banner");
const bannerSize = document.querySelectorAll(".banner-size");
const bannerText = document.querySelectorAll(".banner-text");
const bannerTextDescription = document.querySelectorAll(
	".banner-text__description"
);
const sliderPhoto = document.querySelectorAll('.photo-size')
const gallerySlider = document.querySelector('.gallery__slider')
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

directBanner.addEventListener("mouseover", (e) => {
	let data = e.target.closest(".banner-size");
	if (!data) return;
	dataSizeIndex = data.dataset.sizeIn;
	bannerText[dataSizeIndex].classList.add("banner-text__open");
	bannerTextDescription[dataSizeIndex].classList.add('banner-text__description-active')
});

directBanner.addEventListener("mouseout", (e) => {
	let data = e.target.closest(".banner-size");
	if (!data) return;
	dataSizeIndex = data.dataset.sizeIn;
	bannerText[dataSizeIndex].classList.remove("banner-text__open");
	bannerTextDescription[dataSizeIndex].classList.remove('banner-text__description-active')
});

function dataSet() {
	bannerSize.forEach((item, index) => {
		item.dataset.sizeIn = index;
	});
	sliderPhoto.forEach((item, index) => {
		item.dataset.numPhoto = index + 1;
	});
}

