import profilePhoto from './assets/ProfilePhoto.jpg';

function ProfilePhoto() {
  return (
    <div className='flex justify-center items-center bg-gray-800/50 border border-white/10 h-[275px] w-[275px] rounded-3xl backdrop-blur-md'>
      <img src={profilePhoto} alt="Profile Photo" className='h-[235px] w-[235px] rounded-full border border-white/10' />
    </div>
  )
}

export default ProfilePhoto;