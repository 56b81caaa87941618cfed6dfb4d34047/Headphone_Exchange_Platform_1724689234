<template>
  <section id="cta-section-container">
    <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-transparent">
      <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-pink-300 bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg border border-pink-200 border-opacity-30">

        <!-- Radial gradient -->
        <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
          <div id="radial-gradient-outer" class="bg-purple-600 absolute inset-0 translate-z-0 rounded-full blur-[150px] opacity-60"></div>
          <div id="radial-gradient-inner" class="absolute w-1/3 h-1/3 translate-z-0 rounded-full blur-[50px] bg-pink-400 opacity-70"></div>
        </div>

        <!-- Blurred shape -->
        <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stop-color="#FF69B4" />
                <stop offset="100%" stop-color="#8A2BE2" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>

        <!-- Content -->
        <div id="content" class="max-w-3xl mx-auto text-center">
          <div id="content-subtitle" class="text-pink-200 font-semibold mb-4 text-lg">
              Dive into the depths and trade your treasures with ease, ye space explorers!
          </div>
          <div class="text-4xl font-bold text-white mb-6" id="content-title-container">
              Enhance Your Interstellar Adventure, Ye Cosmic Voyagers!
          </div>
          <div class="text-xl text-pink-100 mb-8" id="content-body-container">
              Discover, trade, and upgrade your starship gear in the ultimate galactic marketplace
          </div>
          <a id="content-cta-button" href="#0" class="btn transition duration-300 ease-in-out group text-purple-900 bg-gradient-to-r from-pink-300 via-purple-200 to-pink-300 hover:from-pink-400 hover:via-purple-300 hover:to-pink-400 rounded-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl">
            Soar with the Cosmic Titans!
            <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-1 transition-transform duration-300 ease-in-out ml-2 text-purple-700">→</span>
          </a>

          <a id="shoryuken-button" href="#0" class="btn transition duration-300 ease-in-out group text-purple-900 bg-gradient-to-r from-pink-300 via-purple-200 to-pink-300 hover:from-pink-400 hover:via-purple-300 hover:to-pink-400 rounded-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl mt-6">
            Conquer the Cosmos!
          </a>

          <!-- Replaced Image -->
          <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Headphone_Exchange_Platform_1724689234/main/images/62a7cb88d7da4d5190508a9e76fbf99f.jpeg" alt="CTA Image" class="mt-12 rounded-lg w-full max-w-lg mx-auto shadow-2xl" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PurpleBackgroundCtaComponent",
  data() {
    return {
      expanded: false,
      tab: null
    };
  }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>