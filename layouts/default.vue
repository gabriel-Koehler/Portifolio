<template>
    <div class="h-full relative flex flex-col bg-transparent">
        <div class="
        border-[2px] 
        border-slate-200 
        fixed
        top-2 
        z-[99999] 
        rounded-md 
        left-1/2
        right-1/2
        -translate-x-1/2 
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
        <slot class="flex Z-0 w-full" />
    </div>
</template>