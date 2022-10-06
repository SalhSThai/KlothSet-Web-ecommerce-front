import { Carousel } from 'flowbite-react'
import { Children } from 'react'

function CarousalComponent() {
    return (
        <div className='flex justify-center items-start w-screen h-[1080px]'>
            <div className=" w-5/6 h-full   ">
                <Carousel slideInterval={1000}>
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
        </div>

    )
}
function CarousalComponent2(props) {
    const { content } = props
    function NavigateIcon(navigate) {
        const { right = false} = navigate;
        return (<div className={`absolute top-0 right-0 flex justify-center items-center h-full w-1/12 ${right ? ' right-0' : ' left-0'}`}>
            <div role="button" className='rounded-full w-[64px] h-[64px]  flex justify-center items-center'>
            <i className={`fa-solid fa-2xl ${right ? 'fa-angle-right' : 'fa-angle-left'}`}></i>
            </div>
        </div>)
        }

        return (
            <div className='flex justify-center items-start w-screen h-[500px]'>
                <div className=" w-5/6 h-full ">
                    <div className='relative w-full h-full flex justify-center items-start'>
                        <NavigateIcon  />
                        <div className='w-full h-full flex justify-center items-start bg-white z-[-10] '>
                        <img className='object-cover h-full w-full'
                        src="images/carousal/Carousal3.gif"
                        alt="..."
                    />
                        </div>
                        <NavigateIcon  right />

                    </div>
                </div>
            </div>

        )
    }

export { CarousalComponent2 }
export default CarousalComponent