<template>
  <section id="cta-section-container">
    <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-transparent">
      <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-pink-300 bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg">

        <!-- Radial gradient -->
        <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
          <div id="radial-gradient-outer" class="bg-purple-600 absolute inset-0 translate-z-0 rounded-full blur-[120px] opacity-70"></div>
          <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-[40px] bg-pink-400"></div>
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
          <div id="content-subtitle" class="flex">
              Snap up, roll, and trade premium alligator scales with ease
          </div>
          <div class="flex" id="content-title-container">
              Enhance Your Swamp Sound Experience
          </div>
          <div class="flex" id="content-body-container">
              Discover, trade, and upgrade your alligator scales in the ultimate swamp marketplace
          </div>
          <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group text-purple-900 bg-gradient-to-r from-pink-300 via-purple-200 to-pink-300 hover:bg-white hover:text-purple-600 rounded-lg px-6 py-3">
            Snap In
            <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-purple-700">-&gt;</span>
          </a>

          <a id="shoryuken-button" href="#0" class="btn transition duration-150 ease-in-out group text-purple-900 bg-gradient-to-r from-pink-300 via-purple-200 to-pink-300 hover:bg-white hover:text-purple-600 rounded-lg px-6 py-3 mt-4">
            Gator Blast
          </a>

          <!-- Replaced Image -->
          <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Headphone_Exchange_Platform_1724689234/main/images/2e7aaee75f80476abc3d9358ced9159f.jpeg" alt="CTA Image" class="mt-8 rounded-lg w-full max-w-lg mx-auto" />
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