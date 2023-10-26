import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-veranda lg:flex">
        <h2 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Fight Matcher
        </h2>
        
        <div className='flex flex-col gap-16'>
          <div className="flex flex-col items-center gap-4">
            <h3>Looking for a fight?</h3>
            <p>Sign up to Fight Matcher to find your next match.</p>
            <p>MMA, BJJ, Boxing, Kickboxing, Muay Thai</p>
            <p>Enter your sport and weight class to find opponents looking for a fight!</p>
          </div>

          <div className='flex gap-4'>
            <div className='text-center h-64 w-64 border-black border-2' >
              <h4>Upcoming Events</h4>
            </div>

            <div className='text-center h-64 w-64 border-black border-2' >
            <h4>Fighters</h4>
            </div>

            <div className='text-center h-64 w-64 border-black border-2' >
            <h4>Gyms</h4>
            </div>
          </div>



        </div>
      </div>
    </main>
  )
}
