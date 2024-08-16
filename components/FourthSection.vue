<template>
    <div class="w-full h-screen bg-[#FCFFFE] ">
        <div class="flex flex-col gap-40 justify-center items-center">
            <!-- title -->
            <div class="flex justify-center mt-20 w-6 text-[3vw] h-3">
                Abbilitys
            </div>
            <!-- list -->
            <div class="flex flex-wrap justify-center w-[60%] gap-24">
                <div v-for="item in items"
                    class="border-2 w-[12%] py-6 flex gap-4 flex-col justify-center items-center transition rounded-md hover:shadow-xl hover:-translate-y-2">

                    <!-- <div :class="[url(item.image)]"></div> -->
                    <!-- <NuxtImg :src="item.image"></NuxtImg> -->
                    <img :src="item.image" class="h-10 w-10" alt="">
                    <div><a :href="item.linkWeb" target="_blank">{{item.name}}</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface abbility {
    image:string,
    linkWeb:string,
    name:string
}
const url=(a:any)=>{return "h-20 w-20 bg-center bg-cover bg-no-repeat bg-[url('"+a+"')]"}
const classStyle=ref("h-20 w-20 bg-[url('/angularicon.svg')]")
const items = ref<abbility[]>([])
items.value=[
    {
        image: "/angularicon.svg",
        linkWeb: "https://angular.io",
        name:"Angular"
    },
    {
        image:"/gitscmicon.svg",
        linkWeb:"https://gitscm.com",
        name:"Git"
    },
    {
        image: "/javaicon.svg",
        linkWeb: "https://www.java.com/ptBR/",
        name:"Java"
    },
    {
        image: "/javascripticon.svg",
        linkWeb: "https://developer.mozilla.org/ptBR/docs/Web/JavaScript",
        name:"Javascript"
    },
    {
        image: "/linuxicon.svg",
        linkWeb: "https://pt.wikipedia.org/wiki/Linux",
        name:"Linux"
    },
    {
        image: "/mysqlicon.svg",
        linkWeb: "https://www.mysql.com",
        name:"MySQL"
    },
    {
        image: "/nextjsiconsvgrepocom.svg",
        linkWeb: "https://nextjs.org",
        name:"Next.js 14"
    },
    {
        image: "/nuxticonsvgrepocom.svg",
        linkWeb: "https://nuxt.com",
        name:"Nuxt 3"
    },
    {
        image: "/photoshopsvgrepocom.svg",
        linkWeb: "https://www.adobe.com/br/products/photoshop.html",
        name:"Photoshop"
    },
    {
        image: "/pythonicon.svg",
        linkWeb: "https://www.python.org",
        name:"Python"
    },
    {
        image: "/reactjsicon.svg",
        linkWeb: "https://ptbr.legacy.reactjs.org",
        name:"React.js"
    },
    {
        image: "/springioicon.svg",
        linkWeb: "https://spring.io",
        name:"Spring Boot"
    },
    {
        image: "/vuejsicon.svg",
        linkWeb: "https://vuejs.org",
        name:"Vue.js"
    },
    {
        image: "/w3cssicon.svg",
        linkWeb: "https://developer.mozilla.org/ptBR/docs/Web/CSS",
        name:"CSS"
    },
    {
        image: "/w3html5icon.svg",
        linkWeb: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        name:"HTML"
    }
]

</script>