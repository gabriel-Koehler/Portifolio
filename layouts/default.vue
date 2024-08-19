<template>
    <div class="h-full flex flex-col bg-transparent">
        <div class="border-[2px] 
        border-slate-200 
        
        top-0 
        z-[99999] 
        rounded-md 
        mx-auto 
        justify-center 
        bg-slate-50 
        w-max 
        px-8 
        py-2 
        flex 
        gap-4 
        shadow-lg
        ">
            <div><a href="#AboutMe">About Me</a></div>
            <div><a href="#Projects">Projects</a></div>
            <div><a href="#Skills">Skills</a></div>
            <div><a href="#ContactMe">Contact me</a></div>
        </div>
        <slot class="re Z-[0]" />
    </div>
</template>