<template>
  <div>
    <section class="pt-28">
      <div class="container px-4 md:px-[165px]">
        <h2 class="text-xl md:2xl">Welcome to Capstone Gym Club</h2>
        <div class="flex flex-wrap p-6 gap-7 font-inter">
          <div
            class="bg-member rounded-xl w-full md:w-1/3 px-2 text-sm text-white"
          >
            <div class="items-center flex justify-between">
              <p>Membership Card</p>
              <img
                src="..\..\assets\img\logo-putih.png"
                alt="logo"
                class="w-[72px]"
              />
            </div>
            <div>
              <p class="text-md md:text-lg font-bold">Non member</p>
              <p>00000001</p>
            </div>
            <div class="pt-6 md:pt-10 pb-3 flex justify-end">
              exp <span class="font-semibold ml-1">05/23</span>
            </div>
          </div>
          <div>
            <p class="text-lg font-bold mb-8">Hello Muhammad Ibnu</p>
            <ul class="leading-9 text-abu">
              <li>Total trained</li>
              <li>Start Join</li>
              <li>End Membership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-10">
      <h2 class="text-xl px-4 md:text-2xl mb-4 md:px-[165px]">Category</h2>
      <div
        class="
          grid grid-cols-1
          w-full
          h-full
          md:grid-cols-3
          gap-3
          px-4
          md:px-[165px]
        "
      >
        <div
          class="
            bg-[url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')]
            rounded-xl
            w-full
            h-full
            px-4
            py-4
            text-xl
            z-10
          "
        >
          <div class="items-center">
            <img
              src="..\..\assets\img\category\Plate.png"
              alt="logo"
              class="w-[67px]"
            />
          </div>
          <div>
            <p
              class="
                text-md
                md:text-lg
                font-bold
                items-end
                pt-14
                md:pt-20
                text-white
              "
            >
              Cardio
            </p>
          </div>
        </div>
        <div class="card-member1 rounded-xl w-full h-full px-4 py-4 text-xl">
          <div class="items-center">
            <img
              src="..\..\assets\img\category\strength.png"
              alt="logo"
              class="w-[67px]"
            />
          </div>
          <div>
            <p
              class="
                text-md
                md:text-lg
                font-bold
                items-end
                pt-14
                md:pt-20
                text-white
              "
            >
              Strength
            </p>
          </div>
        </div>
        <div class="card-member2 rounded-xl max-w-xl h-full px-4 py-4 text-xl">
          <div class="items-center">
            <img
              src="..\..\assets\img\category\bm.png"
              alt="logo"
              class="w-[67px]"
            />
          </div>
          <div>
            <p
              class="
                text-md
                md:text-lg
                font-bold
                items-end
                pt-14
                md:pt-20
                text-white
              "
            >
              Body & Mind
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeComp',
}
</script>

<style>
</style>