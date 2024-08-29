<!-- 
INSTRUCTION: Summary: Contains a section with the following components:
INSTRUCTION: 1. Particles animation: A canvas element for displaying a particle animation in the background.
INSTRUCTION: 2. Illustration: An SVG illustration with a gradient background and various filters applied.
INSTRUCTION: 3. Hero content: The main content of the landing page, including an announcement text, a hero text, a sub-hero text, and two buttons. The hero content is centered.
-->

<template>
  <section id="hero-section-container">
    <div id="section-container" class="relative max-w-6xl mx-auto px-4 sm:px-6 bg-white">
      <div id="hero-content-container" class="pt-32 pb-16 md:pt-52 md:pb-32">
        <!-- Hero content -->
        <div id="hero-content" class="max-w-3xl mx-auto text-center" style="position: relative; z-index: 1">
          <div id="announcement-text" class="mb-6" data-aos="fade-down">
            <div id="announcement-text-inner" class="flex relative before:absolute before:inset-0 before:blur-md before:bg-purple-500">
              <a id="announcement-link" class="flex-1 btn-sm py-0.5 transition duration-150 ease-in-out group relative before:absolute before:inset-0 before:rounded-full before:pointer-events-none shadow text-slate-300 hover:text-white before:bg-slate-800/50" 
                 href="#0" 
                 style="background: linear-gradient(theme(colors.purple.500), theme(colors.purple.500)) padding-box, linear-gradient(theme(colors.purple.500), theme(colors.purple.200) 75%, theme(colors.transparent) 100%) border-box;">
                  <span id="announcement-link-text" class="relative inline-flex items-center">
                    Introducing AudioSwap: The Ultimate Headphone Trading Platform 
                    <span id="announcement-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-purple-500">-&gt;</span>
                  </span>
              </a>
            </div>
          </div>
          <div class="flex" id="hero-text-container">
            <h1 id="hero-text" class="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" data-aos="fade-down">Trade, Upgrade, and Explore Premium Headphones</h1>
          </div>
          <div class="flex" id="sub-hero-text-container">
            <p id="sub-hero-text" class="flex-1 text-lg mb-8 text-slate-300" data-aos="fade-down" data-aos-delay="200">Join our community of audio enthusiasts to buy, sell, and swap high-quality headphones. Discover your perfect sound without breaking the bank.</p>
          </div>
          <div id="buttons-container" class="flex justify-center space-x-4 mt-8">
            <div id="get-started-button-container">
              <a id="get-started-button" 
                 class="flex items-center justify-center px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
                 href="#0">
                  Get Started 
                  <span id="get-started-arrow" class="ml-2 transform transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">→</span>
              </a>
            </div>
            <div id="docs-button-container">
              <a id="docs-button" class="flex items-center justify-center px-6 py-3 text-slate-900 bg-white rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50" href="#0">
                <svg id="docs-icon" class="shrink-0 mr-3 text-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z"/>
                </svg>
                <span id="docs-button-text">Read the docs</span>
              </a>
            </div>
          </div>

          <!-- Email Santa Form -->
          <div id="email-santa-form" class="mt-8 max-w-md mx-auto">
            <form @submit.prevent="submitEmailToSanta" class="bg-white p-6 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold mb-4 text-purple-600">Email Santa</h2>
              <div class="mb-4">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Your Name:</label>
                <input type="text" id="name" v-model="santaForm.name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required>
              </div>
              <div class="mb-4">
                <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Your Message:</label>
                <textarea id="message" v-model="santaForm.message" rows="4" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required></textarea>
              </div>
              <button type="submit" class="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
                Send to Santa
                <i class='bx bx-envelope ml-2'></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PurpleHeroComponent",
  data() {
    return {
      expanded: false,
      tab: null,
      santaForm: {
        name: '',
        message: ''
      }
    };
  },
  methods: {
    // Submit Email to Santa method
    submitEmailToSanta() {
      console.log('Sending email to Santa:', this.santaForm);
      // Add your email sending logic here
      // Reset form after submission
      this.santaForm.name = '';
      this.santaForm.message = '';
    }
    // End of Submit Email to Santa method
  }
};
</script>

<style scoped>
</style>
