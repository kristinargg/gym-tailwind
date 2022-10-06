<template>
  <div class="font-roboto mt-20">
    <div class="p-4 m-4 lg:p-20 lg:mx-44 rounded-xl shadow-xl">
      <div class="w-full mt-10 px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold">Forgot Your Password ?</h2>
        <p class="text-sm">Enter Your Email to Reset Your Password</p>
      </div>
      <form>
        <div class="w-full px-4 mt-10 lg:w-2/3 lg:mx-auto">
          <label for="email" class="font-bold text-primary">Email</label>
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
        <div class="w-full px-4 mt-10 mb-10 flex justify-center">
          <button
            class="
              text-xs
              md:text-base
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
            Reset password
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgetPassword',
}
</script>

<style>
</style>