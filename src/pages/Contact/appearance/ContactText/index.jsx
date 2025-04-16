import SocialMediaIcons from '../SocialMediaIcons';
function ContactText() {
    return (
        <div className='flex flex-col gap-4 justify-center items-center w-full px-4 py-8 md:p-24 text-center'>
            <h1 className='text-4xl md:text-4xl font-bold'>Want to get in touch?</h1>
            <p className='text-gray-400 text-xl p-8'>Reach out to me through my social media or email!</p>
            <SocialMediaIcons />
            <p className='text-gray-400 text-xl pt-8'>...or send me a message!</p>
        </div>
    )
}

export default ContactText;