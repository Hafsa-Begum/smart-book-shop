"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const banners = [
    {
        id: 1,
        image: '/images/bn-1.png'
    },
    {
        id: 2,
        image: '/images/bn-2.png'
    },
    {
        id: 3,
        image: '/images/bn-3.png'
    },
]

export function Banner() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {banners.map((banner, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Image
                                        src={banner.image}
                                        alt="My Image"
                                        layout="responsive"
                                        width={1000}
                                        height={500}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
