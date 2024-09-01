<template>
  <header class="w-full z-30 bg-gradient-to-r from-pink-500 to-purple-600 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg" id="header-section-container" style="min-height: 310px">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Site Branding -->
        <div id="site-branding" class="flex-1">
          <a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip">
            <img id="logo-image" class="max-w-none" src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Headphone_Exchange_Platform_1724689234/main/images/11060692b20b49389d4e3fc68b2b6428.jpeg" width="38" height="38" alt="Pirate's Booty">
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav id="desktop-navigation" class="hidden md:flex md:grow">
          <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
            <li>
              <a
                id="Buy-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200 hover:bg-purple-600 hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg hover:shadow-lg hover:rounded-lg px-2 py-1"
                href="Buy.html"
              >
                Plunder
              </a>
            </li>
            <li>
              <a
                id="Sell-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200 hover:bg-purple-600 hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg hover:shadow-lg hover:rounded-lg px-2 py-1"
                href="Sell.html"
              >
                Sell Yer Loot
              </a>
            </li>
            <li>
              <a
                id="Trade-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200 hover:bg-purple-600 hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg hover:shadow-lg hover:rounded-lg px-2 py-1"
                href="Trade.html"
              >
                Barter
              </a>
            </li>
            <li>
              <a
                id="Brands-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200 hover:bg-purple-600 hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg hover:shadow-lg hover:rounded-lg px-2 py-1"
                href="Brands.html"
              >
                Pirate Crews
              </a>
            </li>
            <li>
              <a
                id="Community-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200 hover:bg-purple-600 hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg hover:shadow-lg hover:rounded-lg px-2 py-1"
                href="Community.html"
              >
                Buccaneer's Tavern
              </a>
            </li>
          </ul>
        </nav>

        <!-- Desktop Sign In & Sign Up Links -->
        <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center">
          <li>
            <a
              id="sign-in-link"
              class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out text-white hover:text-pink-200 hover:bg-purple-600 hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg hover:shadow-lg hover:rounded-lg px-2 py-1"
              href="signin.html"
            >
              Board Ship
            </a>
          </li>
          <li class="ml-6">
            <a
              id="sign-up-link"
              class="btn-sm transition duration-150 ease-in-out w-full group relative text-white hover:text-pink-200 bg-purple-700 bg-opacity-50 hover:bg-opacity-70 rounded-full px-4 py-2 hover:shadow-lg"
              href="signup.html"
            >
              <span class="relative inline-flex items-center"> Join Crew <span id="sign-up-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-pink-300">-&gt;</span> </span>
            </a>
          </li>
        </ul>

        <!-- Shoryuken Button -->
        <div class="flex-1 flex justify-end items-center ml-4">
          <button
            id="shoryuken-button"
            class="btn-sm transition duration-150 ease-in-out text-white hover:text-yellow-300 bg-gradient-to-r from-red-600 to-orange-400 hover:from-red-500 hover:to-orange-300 rounded-full px-4 py-2 shadow-lg flex items-center"
            @click="performShoryuken"
          >
            <i class='bx bxs-hot mr-2'></i>
            Avast Ye!
          </button>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden flex items-center ml-4">
          <button
            id="hamburger-button"
            class="hamburger"
            :class="{ active: expanded }"
            @click.stop="expanded = !expanded"
            aria-controls="mobile-nav"
            :aria-expanded="expanded"
          >
            <span class="sr-only">Menu</span>
            <svg id="hamburger-icon" class="w-5 h-5 fill-current transition duration-150 ease-in-out text-white hover:text-pink-200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <rect y="2" width="20" height="2" rx="1" />
              <rect y="9" width="20" height="2" rx="1" />
              <rect y="16" width="20" height="2" rx="1" />
            </svg>
          </button>

          <nav
            id="mobile-nav"
            class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
            x-ref="mobileNav"
            :
            @click.outside="expanded = false"
            @keydown.escape.window="expanded = false"
            x-cloak
          >
            <ul id="mobile-nav-list" class="rounded-lg px-4 py-2 bg-purple-600 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg">
              <li>
                <a id="mobile-Buy-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200 hover:bg-purple-600 hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg hover:shadow-lg hover:rounded-lg px-2" href="Buy.html">Plunder</a>
              </li>
              <li>
                <a id="mobile-Sell-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200 hover:bg-purple-600 hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg hover:shadow-lg hover:rounded-lg px-2" href="Sell.html">Sell Yer Loot</a>
              </li>
              <li>
                <a id="mobile-Trade-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200 hover:bg-purple-600 hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg hover:shadow-lg hover:rounded-lg px-2" href="Trade.html">Barter</a>
              </li>
              <li>
                <a id="mobile-Brands-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200 hover:bg-purple-600 hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg hover:shadow-lg hover:rounded-lg px-2" href="Brands.html">Pirate Crews</a>
              </li>
              <li>
                <a id="mobile-Community-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200 hover:bg-purple-600 hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg hover:shadow-lg hover:rounded-lg px-2" href="Community.html">Buccaneer's Tavern</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PurpleHeaderComponent",
  data() {
    return {
      expanded: false,
      tab: null,
    };
  },
  methods: {
    // Shoryuken method
    performShoryuken() {
      console.log("Avast Ye!");
      // Add your Shoryuken logic here
    }
    // End of Shoryuken method
  }
};
</script>