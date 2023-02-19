const map = document.querySelector(".map");
const slidebar = document.querySelector(".slidebar");
const directBanner = document.querySelector(".directions__banner");
const bannerSize = document.querySelectorAll(".banner-size");
const bannerText = document.querySelectorAll(".banner-text");
const bannerTextDescription = document.querySelectorAll(".banner-text__description");
const sliderPhoto = document.querySelectorAll(".photo-size");
const gallerySlider = document.querySelector(".gallery__slider");
const rectangleNoActive = document.querySelector(".rectangle-no-active")
const modal = document.querySelector('.modal')
const navItem = document.querySelectorAll('.nav-container__item')
const regions = document.querySelectorAll('.regions__container')
let dataSizeIndex;
let dataRegionIndex;
dataSet();

map.addEventListener("click", (e) => {
	let region = e.target.dataset.region
	console.log(region);
	if (e.target.classList.contains('nav-container__item')) {
		const el = document.querySelector('.nav-active')
		if (el) {
			el.classList.remove('nav-active')
		}
		e.target.classList.add('nav-active')
		regions.forEach(item => {
			item.classList.add('none')
		})
		regions[region - 1].classList.remove('none')
		if (e.target.dataset.region === '0') {
			regions.forEach(item => {
				item.classList.remove('none')
			})
		}
	}
});

slidebar.addEventListener("click", () => {
	rectangleNoActive.classList.toggle("rectangle-active");
	modal.classList.toggle('modal-active')
	if (rectangleNoActive.classList.contains('rectangle-active')) {
		document.querySelectorAll('.nav-container__item').forEach(item => {
			if (item.classList.contains('nav-active')) {
				item.classList.remove('nav-active')
			}
		})
	}
});

directBanner.addEventListener("mouseover", (e) => {
	let data = e.target.closest(".banner-size");
	if (!data) return;
	dataSizeIndex = data.dataset.sizeIn;
	bannerText[dataSizeIndex].classList.add("banner-text__open");
	bannerTextDescription[dataSizeIndex].classList.add(
		"banner-text__description-active"
	);
});

directBanner.addEventListener("mouseout", (e) => {
	let data = e.target.closest(".banner-size");
	if (!data) return;
	dataSizeIndex = data.dataset.sizeIn;
	bannerText[dataSizeIndex].classList.remove("banner-text__open");
	bannerTextDescription[dataSizeIndex].classList.remove(
		"banner-text__description-active"
	);
});

function dataSet() {
	bannerSize.forEach((item, index) => {
		item.dataset.sizeIn = index;
	});
	sliderPhoto.forEach((item, index) => {
		item.dataset.numPhoto = index + 1;
	});
	navItem.forEach((item, index) => {
		item.dataset.region = index;
	});
	regions.forEach((item, index) => {
		item.dataset.region = index + 1
	})
}

//Slider Photo

$(".gallery-content__photo").slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: "linear",
});
