import { Carousel } from 'flowbite-react'

function CarousalComponent() {
    return (
            <div className=" w-[1000px] sm:h-64 xl:h-80 2xl:h-96  ">
                <Carousel  slideInterval={1000}>
                    <img
                        src="images/carousal/Carousal3.gif"
                        alt="..."
                    />
                    <img
                        src="images/carousal/Carousal2.jpg"
                        alt="..."
                    />
                    <img
                        src="images/carousal/Carousal.jpg"
                        alt="..."
                    />
                </Carousel>
            </div>

    )
}

export default CarousalComponent