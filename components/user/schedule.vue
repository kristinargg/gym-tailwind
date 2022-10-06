<template>
  <div class="pt-20 font-roboto bg-slate-50">
    <div class="bg-header w-full h-full">
      <div>
        <h1
          class="p-24 text-center text-xl md:text-4xl font-bold lg:text-white"
        >
          Schedule
        </h1>
      </div>
    </div>
    <div class="container w-full">
      <div class="px-4 pt-10 pb-24 w-full lg:px-[165px]">
        <div class="p-6 rounded-lg">
          <!-- Calender start-->
          <div>
            <h1 class="font-bold text-lg md:text-xl">Calender</h1>
            <div
              class="p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
            >
              <button
                type="button"
                class="
                  outline outline-1
                  bg-white
                  focus:font-semibold
                  focus:bg-secondary
                  focus:text-white
                  focus:shadow-lg
                  py-1
                  rounded-md
                  shadow-md
                  transition
                  duration-500
                  hover:bg-secondary hover:outline-none
                  font-thin
                  text-xs
                "
              >
                13 June 2022 <br />
                Senin
              </button>
              <button
                type="button"
                class="
                  outline outline-1
                  bg-white
                  focus:font-semibold
                  focus:bg-secondary
                  focus:text-white
                  focus:shadow-lg
                  py-1
                  rounded-md
                  shadow-md
                  transition
                  duration-500
                  hover:bg-secondary hover:outline-none
                  text-xs
                  font-thin
                "
              >
                14 June 2022 <br />
                Selasa
              </button>
              <button
                type="button"
                class="
                  outline outline-1
                  bg-white
                  focus:font-semibold
                  focus:bg-secondary
                  focus:text-white
                  focus:shadow-lg
                  py-1
                  rounded-md
                  shadow-md
                  transition
                  duration-500
                  hover:bg-secondary hover:outline-none
                  text-xs
                  font-thin
                "
              >
                14 June 2022 <br />
                Rabu
              </button>
              <button
                type="button"
                disabled
                class="
                  bg-disabled
                  py-1
                  rounded-md
                  shadow-md
                  transition
                  duration-500
                  text-xs
                  font-thin
                "
              >
                14 June 2022 <br />
                Kamis
              </button>
              <button
                type="button"
                disabled
                class="
                  bg-disabled
                  py-1
                  rounded-md
                  shadow-md
                  transition
                  duration-500
                  text-xs
                  font-thin
                "
              >
                14 June 2022 <br />
                Sabtu
              </button>
              <button
                type="button"
                disabled
                class="
                  bg-disabled
                  py-1
                  rounded-md
                  shadow-md
                  transition
                  duration-500
                  text-xs
                  font-thin
                "
              >
                14 June 2022 <br />
                Minggu
              </button>
            </div>
          </div>
          <!-- Calender End -->
          <!-- Schedule Start -->
          <div>
            <h1 class="font-bold text-lg md:text-xl">Schedule</h1>
            <div class="p-5">
              <div class="bg-notif w-full p-2 rounded">
                <span class="text-sm">10.00 am</span>
              </div>
              <div class="w-full grid grid-cols-2 p-2 bg-white rounded">
                <div>
                  <h5 class="font-semibold text-md md:text-lg">FIT RUSH</h5>
                  <span class="text-xs"
                    >Cardio | By Kevin Yanuar | Online Class</span
                  >
                </div>
                <div class="flex justify-end items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <!-- Schedule End -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleComp',
}
</script>

<style>
.bg-header {
  background: url('../../assets/img/Ruang.png');
}
</style>