import React from "react";
import { FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const RightArrow = (props) => {
    return <div></div>;
};

const Review = (props) => {
    //Carousel
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    const textStyle = " text-[#fff]  ml-[50px]";

    const yellow = "#F1C40F";
    const white = "#fff";

    return (
        <>
            <div className="wrapdiv w-full ml-64">
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    autoPlay={true}
                    infinite={true}
                    autoPlaySpeed={3500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "desktop", "mobile"]}
                >
                    <div className=" w-[80%] h-[300px] border-[0.2px] border-[#FFFEF7] rounded-[10px] flex relative ">
                        <div className=" w-[300px] h-[100%] border-r-[0px]  p-[25px]">
                            <div className=" w-[100%] h-[100%] bg-[#fff] rounded-[10px] flex items-center justify-center ">
                                <img src={`/images/user/person9.png`} className=" w-[90%] h-[90%]  " alt="project1" />
                            </div>
                        </div>
                        <div className=" p-[25px] w-[600px] ">
                            <h1 className={textStyle}>
                                GG is really awesome, it contributes a lot to grow my youtube channel Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Mauris porta rhoncus neque eu vestibulum. Vivamus hendrerit purus
                                eget varius luctus. Proin condimentum suscipit magna nec pulvinar. Nulla ac ligula dolor.
                                Maecenas at vulputate odio, a semper nisl.
                            </h1>
                            <h1 className={textStyle + " mt-[50px] "}>Linda Gerrmy</h1>
                            <h1 className={textStyle}>11 Nov 2022</h1>
                        </div>
                        <div className="border-[0px] absolute right-[0px] bottom-[0px] flex items-center justify-center gap-[5px] p-[15px] ">
                            {[...Array(5)].map((x, index) => {
                                return <FaStar key={index} color={yellow} size={30} />;
                            })}
                        </div>
                    </div>



                </Carousel>
            </div>
        </>
    );
};

export default Review;




// import React from "react";
// import { FaStar } from 'react-icons/fa';
// const RightArrow = (props) => {
//     return (
//         <div>

//         </div>
//     )
// }

// const Review = (props) => {

//     const textStyle = " text-[#fff]  ml-[50px]"

//     const yellow = "#F1C40F";
//     const white = "#fff"


//     return (
//         <div className=" w-[80%] h-[300px] border-[0.2px] border-[#FFFEF7] rounded-[10px] flex relative " >
//             <div className=" w-[300px] h-[100%] border-r-[0px]  p-[25px]" >
//                 <div className=" w-[100%] h-[100%] bg-[#fff] rounded-[10px] flex items-center justify-center " >
//                     <img
//                         src={`/images/user/person9.png`}
//                         className=' w-[90%] h-[90%]  '
//                         alt="project1" />
//                 </div>
//             </div>
//             <div className=" p-[25px] w-[600px] " >
//                 <h1 className={textStyle}  >GG is really awesome, it contributes a lot to grow my youtube channel
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta rhoncus neque eu vestibulum. Vivamus hendrerit purus eget varius luctus. Proin condimentum suscipit magna nec pulvinar. Nulla ac ligula dolor. Maecenas at vulputate odio, a semper nisl.
//                 </h1>
//                 <h1 className={textStyle + ' mt-[50px] '} >Linda Germy</h1>
//                 <h1 className={textStyle} >11 Nov 2022</h1>
//             </div>
//             <div className="border-[0px] absolute right-[0px] bottom-[0px] flex items-center justify-center gap-[5px] p-[15px] " >
//                 {
//                     [...Array(5)].map((x, index) => {
//                         return (
//                             <FaStar
//                                 key={index}
//                                 color={yellow}
//                                 size={30}
//                             />
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }


// export default Review;