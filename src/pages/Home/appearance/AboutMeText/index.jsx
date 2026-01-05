function AboutMeText() {
  return (
    <div className='flex flex-col justify-center items-center md:justify-start md:items-start w-full'>
      <h1 className='text-4xl md:text-5xl font-bold pb-6 text-center md:text-left w-full'>
        <span className='text-blue-300'>Hey!</span> I'm <span className='text-gradient'>Colin Perry</span>
      </h1>
      <p className='text-gray-400 text-lg font-medium text-center md:text-left leading-relaxed'>
        I want to build products that help people live better lives, and learn as much as I can along the way.
      </p>
    </div>
  )
}

export default AboutMeText;