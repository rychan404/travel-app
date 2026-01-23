import AboutPic from '../assets/about-pic.jpg';

export const AboutContainer = () => {
    return (
        <div className='flex justify-between h-[70vh] bg-white'>
            <div className='p-20'>
                <h1 className='text-7xl font-[Roboto] font-bold text-stone-800'>About Us</h1>
                <p className='text-lg mt-10 w-[75ch] font-[Roboto] text-stone-900'>All Voyager is a smarter way to discover where you should travel next. We help travelers find destinations that truly fit them by balancing budget, climate preferences, and community style, whether that means a vibrant urban hub or a quiet rural escape. By combining real-world cost data with environmental and lifestyle insights, All Voyager takes the guesswork out of planning and replaces it with confidence. Wherever you’re headed, we make sure the journey starts with a place that feels right.</p>
            </div>
            <div className='p-20'>
                <img className='w-150 border-10 border-white shadow-2xl' src={AboutPic} alt="Plane flying into the sunset" />
            </div>
        </div>
    )
}