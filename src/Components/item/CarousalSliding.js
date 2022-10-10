import React from 'react'

export default function CarousalSliding() {
    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <div className="relative h-full w-full" data-testid="carousel">
                    <div className="flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg snap-x indiana-scroll-container indiana-scroll-container--hide-scrollbars"><div className="w-full flex-shrink-0 transform cursor-grab snap-center" data-active="false" data-testid="carousel-item">
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2" />
                    </div>
                        <div className="w-full flex-shrink-0 transform cursor-grab snap-center" data-active="false" data-testid="carousel-item">
                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <div className="w-full flex-shrink-0 transform cursor-grab snap-center" data-active="false" data-testid="carousel-item">
                            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <div className="w-full flex-shrink-0 transform cursor-grab snap-center" data-active="false" data-testid="carousel-item">
                            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"/>
                        </div>
                        <div className="w-full flex-shrink-0 transform cursor-grab snap-center" data-active="true" data-testid="carousel-item">
                            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"/>
                        </div>
                    </div>
                    <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3">
                        <button className="h-3 w-3 rounded-full bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800" data-testid="carousel-indicator">
                        </button>
                        <button className="h-3 w-3 rounded-full bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800" data-testid="carousel-indicator">
                        </button>
                        <button className="h-3 w-3 rounded-full bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800" data-testid="carousel-indicator">
                        </button>
                        <button className="h-3 w-3 rounded-full bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800" data-testid="carousel-indicator">
                        </button>
                        <button className="h-3 w-3 rounded-full bg-white dark:bg-gray-800" data-testid="carousel-indicator">
                        </button>
                    </div>
                    <div className="absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none">
                        <button className="group" data-testid="carousel-left-control" type="button">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
                                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                                    </path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none">
                        <button className="group" data-testid="carousel-right-control" type="button">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
                                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
