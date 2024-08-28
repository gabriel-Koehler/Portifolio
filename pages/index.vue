<template>
    <!-- <div>oiii</div>
    <div class="bg-red-400" v-for="svg in svgs">
        {{ svg }}
        <img :src="svg" alt="">
    </div>
    <div>
        <NuxtLink to="/about">aa</NuxtLink>
    </div> -->
    <div class="z-10">
        <div >  
            
            <div class=" flex justify-center h-screen items-end bg-center bg cover bg-[url('public/radialgradient.png')]">
                
                <div class=" pb-32 flex flex-col gap-4 font-Kanit ">
                    <!-- title -->
                    <div class="flex flex-col gap-9">
                        <div class="flex gap-10  justify-center place-items-center">
                            <span class="text-8xl text-white bg-blue-500 rounded-xl p-7">Hy</span>
                            <span class="text-7xl">i am</span>
                        </div>
                        <div id="Scramble" class="text-9xl font-Questrial">Gabriel <span class="font-Questrial text-blue-500">Koehler</span> </div>
                    </div>
                    <!-- buttons -->
                    <div class="flex  gap-10 text-white justify-center w-full">
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
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,TextPlugin,ScrollSmoother,ScrambleTextPlugin);

onMounted(()=>{
    gsap.to('#Scramble',{duration:4,scrambleText:"legal hehehehheh"})   
})
</script>
