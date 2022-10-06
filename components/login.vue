<template>
  <div class="font-roboto">
    <nuxt-link to="/">
      <div class="max-w-lg pt-10 mx-auto flex justify-center">
        <img
          src="..\assets\img\transparan-biru.png"
          class="w-full md:w-1/2"
          alt="logo"
        />
      </div>
    </nuxt-link>
    <form>
      <div class="w-full lg:w-2/3 lg:mx-auto">
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
          />
        </div>
        <div class="px-4 flex justify-end pb-2 hover:text-info hover:underline">
          <nuxt-link to="/Login/forget-pass"> Forgot password? </nuxt-link>
        </div>
        <div class="w-full px-4 mb-4 flex justify-center">
          <nuxt-link to="/user/home">
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
              Log In
            </button>
          </nuxt-link>
        </div>
        <div class="w-full px-4 flex justify-center mb-20">
          <p class="text-primary">
            Don’t Have Account ?
            <nuxt-link to="/signup">
              <span class="text-info hover:underline">Sign Up</span>
            </nuxt-link>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginComp',
}
</script>