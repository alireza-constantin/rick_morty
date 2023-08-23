<template>
    <div class="mx-auto">
        <div class="shadow-2xl border-2 border-black shadow-stone-900 bg-bgColor w-[304px] h-[400px]   rounded-md items-center">

            <div data-placeholder class="h-[300px] rounded-md w-full overflow-hidden relative bg-neutral-950"></div>

            <div class="flex flex-col justify-start items-start gap-3 p-4">

                <div data-placeholder class="h-4 w-48 overflow-hidden relative bg-neutral-950"></div>
                <div data-placeholder class="flex h-4 w-48 overflow-hidden relative bg-neutral-950"></div>
                <div data-placeholder class="flex h-4 w-48 overflow-hidden relative bg-neutral-950"></div>
            </div>
        </div>
    </div>
</template>
<style>
    [data-placeholder]::after {
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