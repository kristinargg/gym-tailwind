<template>
  <div class="pt-20 font-roboto">
    <div class="bg-class w-full h-full">
      <div class="px-4 py-2 lg:px-[165px] md:py-10">
        <img
          src="..\..\assets\img\category\Plate.png"
          alt="logo"
          class="w-[67px] mt-4 sm:mt-0"
        />
        <h1 class="text-xl md:text-2xl pt-6 pb-20 font-bold text-white">
          Cardio Class
        </h1>
      </div>
    </div>
    <div class="px-4 pt-10 md:pt-20 w-full lg:px-[165px]">
      <div
        class="
          p-6
          grid grid-cols-1
          lg:grid-cols-2
          bg-slate-100
          rounded-lg
          shadow-sm
        "
      >
        <div class="flex items-center">
          <div>
            <h1 class="text-lg md:text-2xl font-bold">FIT RUSH</h1>
            <img
              src="../../assets/img/class/female-doing-cardio-workout-in-gym-2021-08-26-19-58-09-utc.jpg"
              alt="zumba"
              class="rounded-xl w-full lg:hidden pt-2 shadow-xl"
            />
            <p class="text-justify text-base pt-6">
              Lakukan fit Rush dengan suasana yang berbeda dari biasanya hanya
              dengan 60 menit dan rasakan bedanya.
            </p>
            <div class="flex pt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-secondary"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="pl-2 text-sm md:text-base">Kevin Yanuar</span>
            </div>
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-secondary"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="pl-2 text-sm md:text-base"
                >Jalan Darmo No 323 Surabaya Utara</span
              >
            </div>
          </div>
        </div>
        <div class="pt-6 hidden md:pt-0 w-full lg:flex lg:justify-end">
          <img
            src="../../assets/img/class/female-doing-cardio-workout-in-gym-2021-08-26-19-58-09-utc.jpg"
            alt="zumba"
            class="rounded-xl w-full lg:w-3/4 shadow-xl"
          />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ClassComp',
}
</script>

<style>
.bg-class {
  background: url('../../assets/img/place.jpg');
}
</style>