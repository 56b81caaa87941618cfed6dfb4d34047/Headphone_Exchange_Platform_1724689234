<!--
INSTRUCTION: Summary: Contains a section with three cards with black background and white text. The three cards are side by side and each contains a detail name in bold above a detail value.
-->

<template>
  <section id="page-details-cards-component" class="py-8 bg-gradient-to-r from-purple-600 to-pink-500">
    <h2 id="details-title" class="text-2xl font-semibold mb-8 pl-4 text-white">Details</h2>
    <ul id="details-list" class="grid gap-6 min-[480px]:grid-cols-3 text-sm px-4">
      <li id="project-length" class="px-6 py-6 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg hover:bg-opacity-30 transition duration-300">
        <div class="font-medium text-white text-lg mb-2">Extensive Selection</div>
        <div class="text-pink-100">Browse thousands of headphones from top brands to niche audiophile favorites.</div>
      </li>
      <li id="start-date" class="px-6 py-6 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg hover:bg-opacity-30 transition duration-300">
        <div class="font-medium text-white text-lg mb-2" id="start-date-des-1">Secure Transactions</div>
        <time class="text-pink-100" id="start-time-des-1">Buy and sell with confidence through our protected payment system and user verification.</time>
      </li>
      <li id="end-date" class="px-6 py-6 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg hover:bg-opacity-30 transition duration-300">
        <div class="font-medium text-white text-lg mb-2" id="end-date-des-1">Community-Driven</div>
        <time class="text-pink-100" id="end-time-des-1">Connect with fellow audio enthusiasts, share reviews, and get expert advice on your next pair.</time>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "PageDetailsCardsComponent",
  data() {
    return {
      expanded: false,
      tab: null,
    };
  },
};
</script>
