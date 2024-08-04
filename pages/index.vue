
<template>
    <!-- <div>oiii</div>
    <div class="bg-red-400" v-for="svg in svgs">
        {{ svg }}
        <img :src="svg" alt="">
    </div>
    <div>
        <NuxtLink to="/about">aa</NuxtLink>
    </div> -->
    <div class="bg-[#FCFFFE] h-full">
        <div class=" flex justify-center h-screen items-end bg-center bg cover bg-[url('public/radialgradient.png')]">
            <div class=" pb-32">
                <!-- title -->
                <div class="flex flex-col gap-9">
                    <div class="flex gap-10  justify-center place-items-center">
                        <span class="text-8xl text-white bg-blue-500 rounded-xl p-7">Hy</span>
                        <span class="text-7xl">i am</span>
                    </div>
                    <div class="text-9xl">Gabriel Koehler</div>
                </div>
                <!-- buttons -->
                <div></div>
            </div>
        </div>

    </div>
    <SecondSection></SecondSection>
    <ThirdSection></ThirdSection>
    <FourthSection></FourthSection>
    <FifithSection></FifithSection>
</template>
<script setup>
let svgs = ref(['/adobeillustratoricon.svg','/gitscmicon.svg'])
</script>