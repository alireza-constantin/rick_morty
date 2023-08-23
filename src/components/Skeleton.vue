<template>
        <div class="shadow-2xl relative w-full border-2 border-black shadow-stone-900 bg-bgColor rounded-t-lg rounded-b-md items-center mx-auto">

            <div data-placeholder class="overflow-hidden object-cover aspect-square relative rounded-lg bg-neutral-950" ></div>

            <div class="flex flex-col justify-start items-start gap-3 p-4">

                <div data-placeholder class="h-3 w-4/5 overflow-hidden relative bg-neutral-950"></div>
                <div data-placeholder class="flex h-3 w-4/5 overflow-hidden relative bg-neutral-950"></div>
            </div>
            <div data-placeholder class="h-1 bg-neutral-950 absolute overflow-hidden bottom-0 w-full rounded-b-lg"></div>
        </div>
</template>
<style>
    [data-placeholder]::after {
        z-index: 10;
        content: " ";
        box-shadow: 0 0 50px 9px rgba(254, 254, 254);
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%;
        animation: load 1s infinite;
    }

    @keyframes load {
        0% {
            left: -100%
        }

        100% {
            left: 150%
        }
    }
</style>