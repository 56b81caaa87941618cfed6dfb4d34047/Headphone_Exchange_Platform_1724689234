<!-- 
INSTRUCTION: Summary: HTML file that describes a list of features.
INSTRUCTION: It contains a grid layout with 6 feature sections, each with an icon, a title, and a description.
INSTRUCTION: The feature sections are organised in a grid of two rows, each with three columns.
-->

<template>
    <!-- Features list -->
    <div id="features-grid" class="grid md:grid-cols-3 gap-8 md:gap-12 bg-gradient-to-br from-pink-400 to-purple-600 bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-lg">
        <!-- Feature 1 -->
        <div id="feature-1" class="bg-white bg-opacity-20 rounded-lg p-6 hover:bg-opacity-30 transition duration-300">
            <div id="feature-1-header" class="flex items-center space-x-2 mb-1">
                <svg id="feature-1-icon" class="shrink-0 fill-pink-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z" />
                </svg>
               <div class="flex" id="feature-1-title-container">
                    <h4 id="feature-1-title" class="flex-1 text-white font-medium text-lg">Vast Selection</h4>
                </div>
            </div>
            <div class="flex" id="feature-1-description-container">
                <p id="feature-1-description" class="flex-1 text-sm text-pink-100">Browse through an extensive collection of headphones from top brands and independent sellers.</p>
            </div>
        </div>

        <!-- Feature 2 -->
        <div id="feature-2" class="bg-white bg-opacity-20 rounded-lg p-6 hover:bg-opacity-30 transition duration-300">
            <div id="feature-2-header" class="flex items-center space-x-2 mb-1">
                <svg id="feature-2-icon" class="shrink-0 fill-pink-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
                </svg>
                <div class="flex" id="feature-2-title-container">
                    <h4 id="feature-2-title" class="flex-1 text-white font-medium text-lg">Secure Transactions</h4>
                </div>
            </div>
            <div class="flex" id="feature-2-description-container">
                <p id="feature-2-description" class="flex-1 text-sm text-pink-100">Enjoy peace of mind with our protected payment system and verified user profiles.</p>
            </div>
        </div>

        <!-- Feature 3 -->
        <div id="feature-3" class="bg-white bg-opacity-20 rounded-lg p-6 hover:bg-opacity-30 transition duration-300">
            <div id="feature-3-header" class="flex items-center space-x-2 mb-1">
                <svg id="feature-3-icon" class="shrink-0 fill-pink-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M14 0a2 2 0 0 1 2 2v4a1 1 0 0 1-2 0V2H2v12h4a1 1 0 0 1 0 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm-1.957 10.629 3.664 3.664a1 1 0 0 1-1.414 1.414l-3.664-3.664-.644 2.578a.5.5 0 0 1-.476.379H9.5a.5.5 0 0 1-.48-.362l-2-7a.5.5 0 0 1 .618-.618l7 2a.5.5 0 0 1-.017.965l-2.578.644Z"/>
                </svg>
                <div class="flex" id="feature-3-title-container">
                    <h4 id="feature-3-title" class="flex-1 text-white font-medium text-lg">Expert Reviews</h4>
                </div>
            </div>
            <div class="flex" id="feature-3-description-container">
                <p id="feature-3-description" class="flex-1 text-sm text-pink-100">Make informed decisions with detailed product reviews from audiophiles and tech experts.</p>
            </div>
        </div>

        <!-- Feature 4 -->
        <div id="feature-4" class="bg-white bg-opacity-20 rounded-lg p-6 hover:bg-opacity-30 transition duration-300">
            <div id="feature-4-header" class="flex items-center space-x-2 mb-1">
                <svg id="feature-4-icon" class="shrink-0 fill-pink-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z"/>
                </svg>
                <div class="flex" id="feature-4-title-container">
                    <h4 id="feature-4-title" class="flex-1 text-white font-medium text-lg">Easy Listing</h4>
                </div>
            </div>
            <div class="flex" id="feature-4-description-container">
                <p id="feature-4-description" class="flex-1 text-sm text-pink-100">List your headphones for sale in minutes with our user-friendly interface and guided process.</p>
            </div>
        </div>

        <!-- Feature 5 -->
        <div id="feature-5" class="bg-white bg-opacity-20 rounded-lg p-6 hover:bg-opacity-30 transition duration-300">
            <div id="feature-5-header" class="flex items-center space-x-2 mb-1">
                <svg id="feature-5-icon" class="shrink-0 fill-pink-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z"/>
                </svg>
                <div class="flex" id="feature-5-title-container">
                    <h4 id="feature-5-title" class="flex-1 text-white font-medium text-lg">Price Comparison</h4>
                </div>
            </div>
            <div class="flex" id="feature-5-description-container">
                <p id="feature-5-description" class="flex-1 text-sm text-pink-100">Find the best deals effortlessly with our built-in price comparison tool across multiple listings.</p>
            </div>
        </div>

        <!-- Feature 6 -->
        <div id="feature-6" class="bg-white bg-opacity-20 rounded-lg p-6 hover:bg-opacity-30 transition duration-300">
            <div id="feature-6-header" class="flex items-center space-x-2 mb-1">
                <svg id="feature-6-icon" class="shrink-0 fill-pink-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M14.574 5.67a13.292 13.292 0 0 1 1.298 1.842 1 1 0 0 1 0 .98C15.743 8.716 12.706 14 8 14a6.391 6.391 0 0 1-1.557-.2l1.815-1.815C10.97 11.82 13.06 9.13 13.82 8c-.163-.243-.39-.56-.669-.907l1.424-1.424ZM.294 15.706a.999.999 0 0 1-.002-1.413l2.53-2.529C1.171 10.291.197 8.615.127 8.49a.998.998 0 0 1-.002-.975C.251 7.29 3.246 2 8 2c1.331 0 2.515.431 3.548 1.038L14.293.293a.999.999 0 1 1 1.414 1.414l-14 14a.997.997 0 0 1-1.414 0ZM2.18 8a12.603 12.603 0 0 0 2.06 2.347l1.833-1.834A1.925 1.925 0 0 1 6 8a2 2 0 0 1 2-2c.178 0 .348.03.512.074l1.566-1.566C9.438 4.201 8.742 4 8 4 5.146 4 2.958 6.835 2.181 8Z"/>
                </svg>
                <div class="flex" id="feature-6-title-container">
                    <h4 id="feature-6-title" class="flex-1 text-white font-medium text-lg">Community Forums</h4>
                </div>
            </div>
            <div class="flex" id="feature-6-description-container">
                <p id="feature-6-description" class="flex-1 text-sm text-pink-100">Connect with fellow audio enthusiasts, share experiences, and get advice on headphone selections.</p>
            </div>
        </div>
    </div>

    <!-- Santa Email Form -->
    <div class="mt-12 bg-white bg-opacity-20 rounded-lg p-8 hover:bg-opacity-30 transition duration-300 shadow-lg">
        <h3 class="text-2xl font-bold text-white mb-6">Email Santa</h3>
        <form @submit.prevent="submitSantaEmail" class="space-y-4">
            <div>
                <label for="name" class="block text-sm font-medium text-pink-100">Your Name</label>
                <input type="text" id="name" v-model="santaEmail.name" required class="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent focus:border-pink-500 focus:bg-white focus:ring-0 text-white">
            </div>
            <div>
                <label for="email" class="block text-sm font-medium text-pink-100">Your Email</label>
                <input type="email" id="email" v-model="santaEmail.email" required class="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent focus:border-pink-500 focus:bg-white focus:ring-0 text-white">
            </div>
            <div>
                <label for="message" class="block text-sm font-medium text-pink-100">Your Message to Santa</label>
                <textarea id="message" v-model="santaEmail.message" rows="4" required class="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent focus:border-pink-500 focus:bg-white focus:ring-0 text-white"></textarea>
            </div>
            <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                    Send to Santa
                </button>
            </div>
        </form>
    </div>
    <!-- Santa Contact Form -->
    <div class="mt-12 bg-white bg-opacity-20 rounded-lg p-8 hover:bg-opacity-30 transition duration-300 shadow-lg">
        <h3 class="text-2xl font-bold text-white mb-6">Contact Santa</h3>
        <form @submit.prevent="submitSantaForm" class="space-y-4">
            <div>
                <label for="name" class="block text-sm font-medium text-pink-100">Your Name</label>
                <input type="text" id="name" v-model="santaForm.name" required class="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent focus:border-pink-500 focus:bg-white focus:ring-0 text-white">
            </div>
            <div>
                <label for="email" class="block text-sm font-medium text-pink-100">Your Email</label>
                <input type="email" id="email" v-model="santaForm.email" required class="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent focus:border-pink-500 focus:bg-white focus:ring-0 text-white">
            </div>
            <div>
                <label for="message" class="block text-sm font-medium text-pink-100">Your Message to Santa</label>
                <textarea id="message" v-model="santaForm.message" rows="4" required class="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent focus:border-pink-500 focus:bg-white focus:ring-0 text-white"></textarea>
            </div>
            <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                    Send to Santa
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "PurpleFeatureGridComponent",
    data() {
        return {
            expanded: false,
            tab: null,
            santaEmail: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        // Santa email submission method
        submitSantaEmail() {
            console.log('Email sent to Santa:', this.santaEmail);
            // Add your email submission logic here
            // Reset form after submission
            this.santaEmail = {
                name: '',
                email: '',
                message: ''
            };
        }
        // End of Santa email submission method
    methods: {
        // Santa form submission method
        submitSantaForm() {
            console.log('Form submitted:', this.santaForm);
            // Add your form submission logic here
            // Reset form after submission
            this.santaForm = {
                name: '',
                email: '',
                message: ''
            };
        }
        // End of Santa form submission method
    }
};
</script>

<style scoped>

</style>
