import React from 'react'

function Contact() {
  return (
    <div>

      <section class="bg-white px-side">
        <div class="container py-12 mx-auto">
          <div>
            <p class="font-medium text-secondary text-lg font-inter ">Contact us</p>

            <h1 class="mt-2 text-2xl font-semibold  md:text-3xl  text-white">Get in touch</h1>

            <p class="mt-3 text-black  text-lg">Our friendly team would love to hear from you.</p>
          </div>

          <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span class="inline-block p-3 text-secondary rounded-full bg-blue-100/80  ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800  ">Email</h2>
                <p class="mt-2 text-sm text-black ">Your can email us directly</p>
                <p class="mt-2 text-sm text-secondary">dangmadhukc@gmail.com</p>
              </div>

              <div>
                <span class="inline-block p-3 text-secondary rounded-full bg-blue-100/80  ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800  ">Office</h2>
                <p class="mt-2 text-sm text-black  t">Come say hello at our office HQ.</p>
                <p class="mt-2 text-sm  text-secondary ">100 Smith Street Tulsipur Dang</p>
              </div>

              <div>
                <span class="inline-block p-3  text-secondary rounded-full bg-blue-100/80 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800  ">Phone</h2>
                <p class="mt-2 text-sm text-gray-500  ">Mon-Fri from 8am to 5pm.</p>
                <p class="mt-2 text-sm  text-secondary ">+977 9857820351</p>
              </div>
            </div>

            <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.732542286837!2d82.28710029380632!3d28.118801069633662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997f48ff1e77e93%3A0x5839822148efadaa!2zVHVsc2lwdXIg4KSk4KWB4KSy4KWN4KS44KWA4KSq4KWB4KSwIDIyNDEy!5e1!3m2!1sen!2snp!4v1716054390992!5m2!1sen!2snp" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact