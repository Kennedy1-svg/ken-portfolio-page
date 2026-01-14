<script setup lang="js">
import moment from 'moment'
import SvgIcons from './SvgIcons.vue'
</script>

<template>
  <footer class="py-12 px-4 sm:px-6 lg:px-8 mx-auto">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Social Media Icons -->
      <div>
        <h2 class="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4 text-center">
          Follow Me
        </h2>
        <div class="flex space-x-6 justify-center">
          <!-- GitHub -->
          <a
            href="https://twitter.com/KennedyOhia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            class="text-gray-400 hover:text-[#1DA1F2] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="currentColor">
                <path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z">
                  <animate
                    fill="freeze"
                    attributeName="d"
                    dur="0.4s"
                    values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"
                  />
                </path>
                <path d="M3 2h5v0h-5zM16 22h5v0h-5z">
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="0.4s"
                    dur="0.4s"
                    values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"
                  />
                </path>
                <path d="M18.5 2h3.5L22 2h-3.5z">
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="0.5s"
                    dur="0.4s"
                    values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"
                  />
                </path>
              </g>
            </svg>
          </a>
          <a
            href="https://wa.me/2349096414674"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            class="text-gray-400 hover:text-green-500 transition-colors"
          >
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path
                d="M16.003 3.2c-7.054 0-12.8 5.746-12.8 12.8 0 2.256.592 4.458 1.712 6.404l-1.896 6.926 7.125-1.865a12.752 12.752 0 0 0 5.859 1.47h.001c7.054 0 12.8-5.746 12.8-12.8S23.057 3.2 16.003 3.2zm0 23.2a10.41 10.41 0 0 1-5.297-1.445l-.38-.223-4.228 1.106 1.125-4.1-.246-.422a10.44 10.44 0 0 1-1.598-5.606c0-5.758 4.688-10.446 10.446-10.446 5.758 0 10.446 4.688 10.446 10.446s-4.688 10.446-10.446 10.446zm5.822-7.765c-.316-.158-1.869-.922-2.159-1.028-.29-.106-.502-.158-.715.158s-.822 1.028-1.009 1.243c-.185.211-.368.237-.683.079s-1.335-.492-2.545-1.57c-.94-.837-1.573-1.87-1.755-2.186s-.02-.487.14-.645c.145-.145.316-.368.474-.553.158-.185.211-.316.316-.527.105-.211.053-.395-.026-.553s-.714-1.722-.978-2.36c-.257-.617-.518-.533-.714-.544-.184-.011-.395-.013-.605-.013s-.553.079-.843.395c-.29.316-1.106 1.08-1.106 2.636 0 1.555 1.132 3.06 1.29 3.273.158.211 2.228 3.4 5.399 4.77.754.325 1.342.518 1.8.662.755.24 1.44.206 1.982.125.605-.09 1.869-.76 2.134-1.494.263-.734.263-1.362.184-1.494-.079-.132-.29-.211-.605-.368z"
              />
            </svg>
          </a>

          <!-- Instagram -->
          <a
            href="https://instagram.com/_kebuka_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm9.75 2.25a.75.75 0 011.5 0v1a.75.75 0 01-1.5 0v-1zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- External Links -->
      <div>
        <h2 class="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4 text-center">
          Links
        </h2>
        <nav aria-label="External navigation">
          <ul class="space-y-3 text-center">
            <li>
              <router-link to="/" class="text-gray-700 hover:text-[#669BBC] transition">
                Home
              </router-link>
            </li>
            <li>
              <a
                href="https://github.com/Kennedy1-svg"
                class="text-gray-700 hover:text-[#669BBC] transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/chimdinma-kennedy-ohia/"
                class="text-gray-700 hover:text-[#669BBC] transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@kennyohia"
                class="text-gray-700 hover:text-[#669BBC] transition"
              >
                Medium
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1vTKIC8CP1pWmwp58ImEuHhOo4V8Nzl-hX8L8B_z61hQ/edit?usp=sharing"
                class="text-gray-700 hover:text-[#669BBC] transition"
              >
                View Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Copyright -->
      <div class="lg:col-span-3">
        <p class="text-center text-xs text-gray-400 mt-8 lg:mt-0">
          &copy; {{ new Date().getFullYear() }} Kennedy. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
