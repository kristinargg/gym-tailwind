<template>
  <div class="font-roboto">
    <nuxt-link to="/">
      <div class="max-w-lg pt-18 mx-auto flex justify-center">
        <!-- <nuxt-link to="/home"> -->
        <img
          src="..\assets\img\transparan-biru.png"
          class="md:w-1/3"
          alt="logo"
        />
        <!-- </nuxt-link> -->
      </div>
    </nuxt-link>
    <form>
      <div class="w-full lg:w-2/3 lg:mx-auto">
        <div class="w-full px-4 mb-8">
          <label for="fullname" class="text-base text-primary font-bold"
            >Fullname</label
          >
          <input
            id="fullname"
            type="text"
            class="
              w-full
              bg-slate-200
              text-dark
              p-3
              rounded-md
              focus:outline-none
              focus:ring-primary
              focus:ring-1
              focus:border-primary
            "
            placeholder="Full Name"
          />
        </div>
        <div class="w-full px-4 mb-8">
          <label for="gender" class="text-base text-primary font-bold"
            >Gender</label
          >
          <select
            class="
              w-full
              bg-slate-200
              text-dark
              p-3
              rounded-md
              focus:outline-none
              focus:ring-primary
              focus:ring-1
              focus:border-primary
            "
            aria-label=".form-select-lg example"
          >
            <option selected>Open this select menu</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div>
        <div class="w-full px-4 mb-8">
          <label for="city" class="text-base text-primary font-bold"
            >City</label
          >
          <select
            class="
              w-full
              bg-slate-200
              text-dark
              p-3
              rounded-md
              focus:outline-none
              focus:ring-primary
              focus:ring-1
              focus:border-primary
            "
            aria-label=".form-select-lg example"
          >
            <option selected>Open this select menu</option>
            <option value="1">Bandung</option>
            <option value="2">Jakarta</option>
            <option value="3">Bogor</option>
            <option value="4">Yogyakarta</option>
            <option value="5">Malang</option>
          </select>
        </div>
        <div class="w-full px-4 mb-8">
          <label for="handphone" class="text-base text-primary font-bold"
            >No Handphone</label
          >
          <input
            id="handphone"
            type="handphone"
            class="
              w-full
              bg-slate-200
              text-dark
              p-3
              rounded-md
              focus:outline-none
              focus:ring-primary
              focus:ring-1
              focus:border-primary
            "
            placeholder="xxxxxxxxxxxx"
          />
        </div>
        <div class="w-full px-4 mb-8">
          <label for="email" class="text-base text-primary font-bold"
            >Email</label
          >
          <input
            id="email"
            type="email"
            class="
              w-full
              bg-slate-200
              text-dark
              p-3
              rounded-md
              focus:outline-none
              focus:ring-primary
              focus:ring-1
              focus:border-primary
            "
            placeholder="Email"
          />
        </div>
        <div class="w-full px-4 mb-4">
          <label for="password" class="text-base text-primary font-bold"
            >Password</label
          >
          <input
            id="password"
            type="password"
            class="
              w-full
              bg-slate-200
              text-dark
              p-3
              rounded-md
              focus:outline-none
              focus:ring-primary
              focus:ring-1
              focus:border-primary
            "
            placeholder="Password"
          />
        </div>
        <div class="w-full px-4 mb-4 flex justify-center">
          <button
            class="
              text-base
              font-semibold
              text-white
              bg-primary
              py-2
              px-16
              rounded-lg
              hover:opacity-90 hover:shadow-lg
              transition
              duration-500
            "
          >
            Register
          </button>
        </div>
        <div class="w-full px-4 mb-20 flex justify-center">
          <p class="text-primary">
            Have Account ?
            <nuxt-link to="/login">
              <span class="text-info hover:underline">Login</span>
            </nuxt-link>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupComp',
}
</script>