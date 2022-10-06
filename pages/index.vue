<template>
  <div class="font-roboto scroll-smooth">
    <header
      class="
        bg-primary
        text-white
        absolute
        top-0
        left-0
        w-full
        flex
        items-center
        z-10
      "
    >
      <div class="container">
        <div class="flex items-center justify-between lg:px-[168px]">
          <div class="">
            <img
              src="..\assets\img\logo-putih.png"
              alt="logo"
              class="w-[80px]"
            />
          </div>
          <div class="flex items-center">
            <nav
              id="nav-menu"
              class="
                hidden
                absolute
                py-5
                bg-white
                shadow-lg
                rounded-lg
                max-w-[250px]
                w-full
                right-4
                top-full
                lg:block
                lg:static
                lg:bg-transparent
                lg:max-w-full
                lg:shadow-none
                lg:rounded-none
              "
            >
              <ul class="block lg:flex">
                <li
                  class="
                    hover:rounded-full hover:bg-secondary hover:opacity-80
                    transition
                    duration-500
                  "
                >
                  <nuxt-link to="/signup">
                    <a href="#" class="text-base text-dark py-2 mx-8 flex">
                      Signup
                    </a>
                  </nuxt-link>
                </li>
                <li class="group">
                  <nuxt-link to="/login">
                    <a
                      href="#"
                      class="
                        text-base text-dark
                        py-2
                        mx-8
                        flex
                        bg-info
                        px-12
                        rounded-full
                        hover:opacity-80
                        transition
                        duration-500
                      "
                    >
                      Login
                    </a>
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- hero section start -->
    <section class="pt-28">
      <div class="container flex flex-wrap lg:px-[168px]">
        <div class="w-full px-4 lg:w-1/2">
          <p class="text-3xl sm:text-4xl leading-9 font-bold">
            Sekarang Olahraga di GYM Gapake Mahal
          </p>
          <p
            class="
              text-3xl
              sm:text-4xl
              font-semibold
              text-subhead
              font-inter
              pt-4
              py-5
            "
          >
            Mulai dari <span class="text-secondary">Rp 249.000</span>
          </p>
          <p class="text-md sm:text-lg text-subhead text-justify pb-6 sm:pb-12">
            Dapatkan akses tak terbatas ke seluruh premium GYM dengan Capstone
            GYM dan kelas gratis setiap harinya.
          </p>
          <div class="w-full px-4 lg:w-1/2 mb-12 sm:hidden">
            <img src="..\assets\img\hero.jpg" class="rounded-xl" alt="img-1" />
          </div>
          <button
            type="button"
            class="
              bg-info
              px-14
              py-2
              rounded-full
              text-sm
              sm:text-base
              text-white
              hover:opacity-80
              transition
              duration-500
            "
          >
            Mulai Membership Anda
          </button>
        </div>
        <div class="w-full px-4 lg:w-1/2 hidden pt-10 lg:pt-0 sm:block">
          <img src="..\assets\img\hero.jpg" class="rounded-xl" alt="img-1" />
        </div>
      </div>
    </section>
    <!-- hero section End -->
    <!-- Activity section start -->
    <section class="pt-20 sm:pt-40">
      <div class="container">
        <p class="text-2xl sm:text-3xl lg:px-[168px] mb-6 px-4">
          Temukan aktivitas paling tepat untik menjadi lebih sehat
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 px-4 lg:px-[168px] gap-3">
          <div class="w-full">
            <img
              src="..\assets\img\jadwal.jpg"
              alt="jadwal"
              class="rounded-lg"
            />
          </div>
          <div class="w-full">
            <img
              src="..\assets\img\place.jpg"
              alt="jadwal"
              class="rounded-lg"
            />
          </div>
          <div class="w-full">
            <img
              src="..\assets\img\class.jpg"
              alt="jadwal"
              class="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Activity section End -->

    <!-- testimoni card section start -->
    <section class="pt-20 sm:pt-28">
      <p class="text-2xl sm:text-3xl mb-6 px-4 lg:px-[168px]">
        Saatnya Sehat dengan seluruh member Casptone GYM di seluruh Indonesia
      </p>
      <div class="overflow-x-scroll px-4 lg:px-[168px] flex space-x-4">
        <div class="flex-shrink-0 bg-card p-4 w-60 rounded-xl">
          <img src="..\assets\img\test.png" alt="testimoni" />
          <p class="font-bold text-xl py-3">Borris</p>
          <p class="text-sm text-abu pb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ad
            ullam nisi repellendus.
          </p>
        </div>
        <div class="flex-shrink-0 bg-card p-4 w-60 rounded-xl">
          <img src="..\assets\img\test.png" alt="testimoni" />
          <p class="font-bold text-xl py-3">Borris</p>
          <p class="text-sm text-abu pb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ad
            ullam nisi repellendus.
          </p>
        </div>
        <div class="flex-shrink-0 bg-card p-4 w-60 rounded-xl">
          <img src="..\assets\img\raul.png" alt="testimoni" />
          <p class="font-bold text-xl py-3">Raul</p>
          <p class="text-sm text-abu pb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ad
            ullam nisi repellendus.
          </p>
        </div>
        <div class="flex-shrink-0 bg-card p-4 w-60 rounded-xl">
          <img src="..\assets\img\test.png" alt="testimoni" />
          <p class="font-bold text-xl py-3">Borris</p>
          <p class="text-sm text-abu pb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ad
            ullam nisi repellendus.
          </p>
        </div>
        <div class="flex-shrink-0 bg-card p-4 w-60 rounded-xl">
          <img src="..\assets\img\raul.png" alt="testimoni" />
          <p class="font-bold text-xl py-3">Raul</p>
          <p class="text-sm text-abu pb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ad
            ullam nisi repellendus.
          </p>
        </div>
        <div class="flex-shrink-0 bg-card p-4 w-60 rounded-xl">
          <img src="..\assets\img\test.png" alt="testimoni" />
          <p class="font-bold text-xl py-3">Borris</p>
          <p class="text-sm text-abu pb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ad
            ullam nisi repellendus.
          </p>
        </div>
        <div class="flex-shrink-0 bg-card p-4 w-60 rounded-xl">
          <img src="..\assets\img\raul.png" alt="testimoni" />
          <p class="font-bold text-xl py-3">Raul</p>
          <p class="text-sm text-abu pb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ad
            ullam nisi repellendus.
          </p>
        </div>
      </div>
    </section>
    <!-- testimoni card section End -->

    <section class="pt-20 sm:pt-44 pb-16 sm:pb-72">
      <div class="flex flex-wrap lg:px-[168px]">
        <div class="w-full px-4 md:w-1/2">
          <p class="text-3xl sm:text-4xl leading-9 font-bold mb-7">
            Dapatkan Gaya Hidup Sehat Dengan Capstone GYM
          </p>
          <p class="text-abu text-md text-justify mb-3">
            Menjadi lebih Sehat dengan ketukan jari. Mudah digunakan dan mudah
            untuk tetap konsisten. Unduh aplikasi sekarang!
          </p>
          <p class="text-abu text-md mb-10 sm:mb-[88px] leading-10">
            Booking Kelas Secara Realtime <br />
            Pilih Mentor yang kamu inginkan <br />
            Pilih Jadwal yang kamu inginkan
          </p>
          <img src="..\assets\img\download.png" alt="download" />
        </div>
        <div class="w-full px-4 md:w-1/2 mt-10 md:mt-0">
          <img src="..\assets\img\123.jpg" alt="promosi1" />
          <!-- <img src="..\assets\img\promosi2.png" alt="promosi2" /> -->
        </div>
      </div>
    </section>
    <footerPage />
  </div>
</template>

<script>
import footerPage from '~/components/footer.vue'
export default {
  name: 'IndexPage',
  components: { footerPage },
}
</script>
