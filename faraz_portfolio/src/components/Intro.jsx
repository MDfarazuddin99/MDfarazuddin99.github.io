import React from 'react'

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Farazuddin Mohammad</h1>
      <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Full Stack Developer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
            I'm an indie full-stack developer and content creator building my
            version of the digital world one step at a time. All coding projects
            are built from the ground up, from planning and designing all the way
            to solving real-life problems with code.
            <br />
            
            My github Link is{' '}
            <a
               href="https://github.com/MDfarazuddin99"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
              Faraz
            </a>{' '}
            to more than 400k subscribers.
         </p>
    </div>
  )
}

export default Intro