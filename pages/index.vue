<template>
    <div class="z-10 ">
        <div>
            <div class=" flex justify-center h-screen items-end ">
                <div class=" gradientIconic absolute z-0 w-full h-screen"></div>

                <div class="pb-8  flex flex-col gap-4 font-Kanit z-20 ">
                    <!-- title -->
                    <div class="flex flex-col  items-center justify-center ">
                        <div class="flex gap-10  justify-center place-items-center">
                            <span class="text-[5vw]  text-white bg-blue-500 rounded-xl p-7">Hy</span>
                            <span class="text-[5vw]  text-blue-500">i am</span>
                        </div>
                        <div id="Scramble" class="text-[10vw] lg:flex-none text-white font-Questrial">
                            <span>Gabriel</span>
                            <span class="font-Questrial text-blue-500">
                                Koehler
                            </span> 
                        </div>
                    </div>
                    <!-- buttons -->
                    <div class="flex min-[900px]:text-md lg:text-[1.4vw] gap-10 text-white justify-center w-full">
                        <a href="https://github.com/gabriel-Koehler" target="_blank">
                            <div
                                class="bg-blue-950 hover:shadow-xl hover:bg-blue-800 cursor-pointer w-max px-8 rounded-md flex gap-4 items-center py-3">
                                <img src="/iconGithub.svg" class="w-8" alt="">
                                <div>Github</div>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-koehler-da-silva-780915238/" target="_blank">
                            <div
                                class="bg-blue-950 hover:shadow-xl hover:bg-blue-800 cursor-pointer w-max px-8 rounded-md flex gap-4 items-center py-3">
                                <img src="/iconLinkedin.svg" class="w-8" alt="">
                                <div>Linkedin</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <FourthSection></FourthSection>
        <FifithSection></FifithSection>
    </div>
</template>
<script setup>
import { gsap } from "gsap";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

/* The following plugins are Club GSAP perks */
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

// gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,TextPlugin,ScrollSmoother,ScrambleTextPlugin);

onMounted(() => {
    gsap.to('#Scramble', { duration: 4, scrambleText: "legal hehehehheh" })
})
</script>
<style>
.gradientIconic {
    background: conic-gradient(from 180deg at 50% 50%, #88d4ff, rgba(255, 252, 252, 0));

}

/* @media (max-width: 868px) {
    .gradientIconic {
        background: conic-gradient(from -90deg at 50% 50%, #88d4ff, rgba(255, 252, 252, 0));

    }
} */
</style>