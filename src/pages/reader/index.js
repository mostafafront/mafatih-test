import React from 'react'

export default function ReaderPage() {
  return (
    <>
    
		<!-- PRAYER BOX -->
		<section class="prayer-box pt-4">
			<div class="container">
				<article class="text-of-prayer pt-2 px-2 px-md-0 pb-3 mb-5 d-flex flex-column align-items-center gap-4">
					<div class="head-prayer">
						<img src="./static/assets/images/in-the-name-of-god.svg"
							 alt="in the name of god in head of text prayer">
					</div>
					<p class="prayer">
						<span class="text">
							متن توضیحی
							متن توضیحی
							متن توضیحی
							متن توضیحی
						</span>
						السَّلامُ عَلَیْکَ یَا أَبا عَبْدِاللّٰهِ، السَّلامُ عَلَیْکَ یَا ابْنَ رَسُولِ اللّٰهِ،
						السَّلامُ عَلَیْکَ یا خِیَرَهَ اللّٰهِ وَابْنَ خِیرَتِه
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, assumenda dolore earum est
						itaque laborum magnam maxime mollitia nostrum odit officiis quaerat repudiandae sapiente sint
						soluta vitae voluptatem? Accusamus, aspernatur at culpa debitis delectus dicta eius eligendi
						facere fugiat, ipsum iure libero qui quia repudiandae sequi similique vel veritatis
						voluptatibus.
						<span class="quran">
							متن قرآن
							متن قرآن
							متن قرآن
							متن قرآن
							متن قرآن
						</span>
					</p>
				</article>
			</div>
		</section>
		<!-- PRAYER BOX -->
		
		<!-- FOOTER -->
		<footer class="footer bg-very-light-green position-fixed d-flex w-100 bottom-0 bg-very-light-green footer-z">
			<div class="container">
				<div class="d-flex py-3 justify-content-between align-items-center">
					<div class="themes">
						<button class="btn setting-btn"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasBottom-setting"
								aria-controls="offcanvasBottom-setting">
							<i class="fa-regular fa-gear fa-xl"></i>
						</button>
					</div>
					<div class="speed">
						<button class="btn speed-btn"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasBottom-speed"
								aria-controls="offcanvasBottom-speed">
							1.00x
						</button>
					</div>
					<div class="play">
						<button type="button" class="btn border-0 p-0">
							<img src="./static/assets/images/play-icon.svg" alt="play icon">
						</button>
					</div>
					<div class="singer">
						<button class="btn singer-btn"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasBottom-singer"
								aria-controls="offcanvasBottom-singer">
							باسم الکربلائي
						</button>
					</div>
					<div class="select-box d-flex justify-content-end">
						<button type="button" class="btn border-0"><i class="fa-solid fa-ellipsis-vertical"></i>
						</button>
					</div>
				</div>
			</div>
		</footer>
		<!-- FOOTER -->
		
		<!-- OFFCANVAS SETTING FOOTER -->
		<div class="offcanvas offcanvas-bottom offcanvas-setting pb-5 z-in-footer-offcanvas h-75 bg-very-light-green p-3 mb-3"
			 tabindex="-1"
			 id="offcanvasBottom-setting"
			 aria-labelledby="offcanvasBottomLabel"
			 data-bs-backdrop="true">
			<div class="offcanvas-body bg-white rounded-3 d-flex flex-column overflow-hidden">
				<div class="nav nav-tabs d-flex justify-content-around" id="nav-tab" role="tablist">
					<button class="nav-link p-2 nav-tab-setting-width active"
							id="nav-home-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-home"
							type="button"
							role="tab"
							aria-controls="nav-home"
							aria-selected="true">
                        <span class="tab-footer-setting">
                            <i class="fa-regular fa-palette fa-lg"></i>
                        </span>
					</button>
					<button class="nav-link nav-tab-setting-width p-2"
							id="nav-contact-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-contact"
							type="button"
							role="tab"
							aria-controls="nav-contact"
							aria-selected="false">
                        <span class="tab-footer-setting">
                            <i class="fa-regular fa-text-size fa-lg"></i>
                        </span>
					</button>
					<button class="nav-link nav-tab-setting-width p-2"
							id="nav-disabled-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-disabled"
							type="button"
							role="tab"
							aria-controls="nav-disabled"
							aria-selected="false">
                        <span class="tab-footer-setting">
                            <i class="fa-regular fa-font fa-lg"></i>
                        </span>
					</button>
				</div>
				<div class="tab-content" id="nav-tabContent">
					<div class="tab-pane fade show active p-3"
						 id="nav-home"
						 role="tabpanel"
						 aria-labelledby="nav-home-tab"
						 tabindex="0">
						<div class="themes d-flex flex-column justify-content-between align-items-center">
							<img src="./static/assets/images/light-theme.png" alt="theme light">
							<img src="./static/assets/images/theme-sepia.png" alt="theme sepia">
							<img src="./static/assets/images/dark-theme.png" alt="theme dark">
							<img src="./static/assets/images/theme-sepia.png" alt="theme sepia">
						</div>
					</div>
					<div class="tab-pane fade"
						 id="nav-contact"
						 role="tabpanel"
						 aria-labelledby="nav-contact-tab"
						 tabindex="0">
						<div class="change-font-size d-flex flex-column justify-content-center align-items-center gap-4">
							<div id="text-to-change-font-size"
								 class="text-to-change-font-size shadow-light d-flex align-items-center justify-content-center">
								اللّٰهِ
							</div>
							<div class="buttons-for-change-font-size d-flex justify-content-center gap-3">
								<button class="btn border decrease">
									<span>
										<i class="fa-regular fa-minus fa-xs"></i>
										<i class="fa-regular fa-a"></i>
									</span>
								</button>
								<input type="number"
									   name="font-size"
									   id="fontSize"
									   class="form-control w-25 text-center"
									   readonly/>
								<button class="btn border increase">
									<span>
										<i class="fa-regular fa-plus fa-xs"></i>
										<i class="fa-regular fa-a"></i>
									</span>
								</button>
							</div>
						</div>
					</div>
					<div class="tab-pane fade P-3"
						 id="nav-disabled"
						 role="tabpanel"
						 aria-labelledby="nav-disabled-tab"
						 tabindex="0">
						<div class="change-font-family d-flex flex-column gap-4 px-3 pt-3" dir="ltr">
							<div class="change-font-family-quran">
								<h3>Quran Font style :</h3>
								<div class="font-family-box-select d-flex flex-column gap-3">
									<div class="font-family-box shadow-light font-family-box-active d-flex rounded-3 justify-content-around align-items-center"
										 id="font-family-translate-1"
										 dir="rtl">
										<span>نستعلیق :</span>
										<img src="./static/assets/images/font-family-1.png" alt="font-family-1"/>
									</div>
									<div class="font-family-box shadow-light d-flex rounded-3 justify-content-around align-items-center"
										 id="font-family-translate-2"
										 dir="rtl">
										<span>نستعلیق :</span>
										<img src="./static/assets/images/font-family-1.png" alt="font-family-1"/>
									</div>
									<div class="font-family-box shadow-light d-flex rounded-3 justify-content-around align-items-center"
										 id="font-family-translate-3"
										 dir="rtl">
										<span>نستعلیق :</span>
										<img src="./static/assets/images/font-family-1.png" alt="font-family-1"/>
									</div>
								</div>
							</div>
							<div class="change-font-family-translate">
								<h3>translation Font style :</h3>
								<div class="font-family-box-select d-flex flex-column gap-3">
									<div class="font-family-box shadow-light font-family-box-active d-flex rounded-3 justify-content-around align-items-center"
										 id="font-family-1"
										 dir="rtl">
										<span>نستعلیق :</span>
										<img src="./static/assets/images/font-family-1.png" alt="font-family-1"/>
									</div>
									<div class="font-family-box shadow-light d-flex rounded-3 justify-content-around align-items-center"
										 id="font-family-2"
										 dir="rtl">
										<span>نستعلیق :</span>
										<img src="./static/assets/images/font-family-1.png" alt="font-family-1"/>
									</div>
									<div class="font-family-box shadow-light d-flex rounded-3 justify-content-around align-items-center"
										 id="font-family-3"
										 dir="rtl">
										<span>نستعلیق :</span>
										<img src="./static/assets/images/font-family-1.png" alt="font-family-1"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- OFFCANVAS SETTING FOOTER --> */}
		
		{/* <!-- OFFCANVAS SPEED FOOTER --> */}
		<div class="offcanvas offcanvas-bottom offcanvas-speed pb-5 z-in-footer-offcanvas h-50 bg-very-light-green p-4 mb-3"
			 tabindex="-1"
			 id="offcanvasBottom-speed"
			 aria-labelledby="offcanvasBottomLabel"
			 data-bs-backdrop="true">
			<div class="offcanvas-body bg-white rounded-4 d-flex flex-column overflow-hidden justify-content-center px-4">
				<div class="change-speed d-flex flex-column justify-content-center align-items-center gap-4">
					<div id="speed-value"
						 class="text-to-change-speed d-flex align-items-center justify-content-center fw-bolder fs-3">
						1.00x
					</div>
					<div class="speed-box shadow-light">
						<form action="" enctype="multipart/form-data">
							<div class="d-flex rounded-pill">
								<div class="d-flex rounded-pill w-100 align-items-center">
									<button type="button" class="btn p-3 rounded-0 rounded-start-4">
										<i class="fa-regular fa-plus"></i></button>
									<input type="range" name="rangeInput" class="form-range" min="1" max="6" step="0.5"/>
									<button type="button" class="icon-search btn p-3 rounded-0 rounded-end-4">
										<i class="fa-solid fa-minus"></i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- OFFCANVAS SPEED FOOTER --> */}
		
		{/* <!-- OFFCANVAS SINGER FOOTER --> */}
		<div class="offcanvas offcanvas-bottom offcanvas-singer pb-5 z-in-footer-offcanvas h-75 bg-very-light-green p-3 mb-3"
			 tabindex="-1"
			 id="offcanvasBottom-singer"
			 aria-labelledby="offcanvasBottomLabel"
			 data-bs-backdrop="true">
			<div class="offcanvas-body bg-white d-flex flex-column rounded-3 p-1">
				<div class="search-singer p-3">
					<div class="form-box">
						<form action="" enctype="multipart/form-data">
							<div class="d-flex rounded-pill">
								<div class="d-flex rounded-pill w-100">
									<input type="text"
										   name="name"
										   class="input-search form-control border-0 rounded-0 rounded-start-4 bg-very-light-green"
										   placeholder="البحث في المفاتیح الجنان"/>
									<button type="button"
											class="icon-search btn p-2 rounded-0 rounded-end-4 bg-very-light-green"><i
											class="fa-solid fa-magnifying-glass"></i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="boorder-singer border w-100"></div>
				<div class="singers d-flex flex-column gap-3 p-3 overflow-y-auto">
					<div class="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
						<img class="img-singer rounded-circle position-absolute start-0"
							 src="./static/assets/images/dark-theme.png"
							 alt="photo of singer one"/>
						<span class="py-2">عبد الحي آل قمبر</span>
					</div>
					<div class="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
						<img class="img-singer rounded-circle position-absolute start-0"
							 src="./static/assets/images/singer-1.png"
							 alt="photo of singer one"/>
						<span class="py-2">عبد الحي آل قمبر</span>
					</div>
					<div class="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
						<img class="img-singer rounded-circle position-absolute start-0"
						 src="./static/assets/images/singer-1.png"
						 alt="photo of singer one"/>
						<span class="py-2">عبد الحي آل قمبر</span>
					</div>
					<div class="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
						<img class="img-singer rounded-circle position-absolute start-0"
							 src="./static/assets/images/singer-1.png"
							 alt="photo of singer one"/>
						<span class="py-2">عبد الحي آل قمبر</span>
					</div>
					<div class="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
						<img class="img-singer rounded-circle position-absolute start-0"
							 src="./static/assets/images/dark-theme.png"
							 alt="photo of singer one"/>
						<span class="py-2">عبد الحي آل قمبر</span>
					</div>
					<div class="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
						<img class="img-singer rounded-circle position-absolute start-0"
							 src="./static/assets/images/singer-1.png"
							 alt="photo of singer one"/>
						<span class="py-2">عبد الحي آل قمبر</span>
					</div>
					<div class="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
						<img class="img-singer rounded-circle position-absolute start-0"
							 src="./static/assets/images/singer-1.png"
							 alt="photo of singer one"/>
						<span class="py-2">عبد الحي آل قمبر</span>
					</div>
					<div class="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
						<img class="img-singer rounded-circle position-absolute start-0"
							 src="./static/assets/images/singer-1.png"
							 alt="photo of singer one"/>
						<span class="py-2">عبد الحي آل قمبر</span>
					</div>
					<div class="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
						<img class="img-singer rounded-circle position-absolute start-0"
							 src="./static/assets/images/dark-theme.png"
							 alt="photo of singer one"/>
						<span class="py-2">عبد الحي آل قمبر</span>
					</div>
					<div class="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
						<img class="img-singer rounded-circle position-absolute start-0"
							 src="./static/assets/images/singer-1.png"
							 alt="photo of singer one"/>
						<span class="py-2">عبد الحي آل قمبر</span>
					</div>
					<div class="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
						<img class="img-singer rounded-circle position-absolute start-0"
							 src="./static/assets/images/singer-1.png"
							 alt="photo of singer one"/>
						<span class="py-2">عبد الحي آل قمبر</span>
					</div>
					<div class="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
						<img class="img-singer rounded-circle position-absolute start-0"
							 src="./static/assets/images/singer-1.png"
							 alt="photo of singer one"/>
						<span class="py-2">عبد الحي آل قمبر</span>
					</div>
					<div class="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
						<img class="img-singer rounded-circle position-absolute start-0"
							 src="./static/assets/images/dark-theme.png"
							 alt="photo of singer one"/>
						<span class="py-2">عبد الحي آل قمبر</span>
					</div>
					<div class="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
						<img class="img-singer rounded-circle position-absolute start-0"
							 src="./static/assets/images/singer-1.png"
							 alt="photo of singer one"/>
						<span class="py-2">عبد الحي آل قمبر</span>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- OFFCANVAS SINGER FOOTER --> */}
        </div>
    </>
  )
}
