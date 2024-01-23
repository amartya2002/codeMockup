import useStore from '@/lib/store';
import React from 'react'
import { Slider } from './ui/slider';


export default function controls() {
    const padding = useStore((state) => state.padding)

  return (
    <div>
         <Slider
        className=" my-5"
        value={[padding]}
        onValueChange={([padding]) => useStore.setState({ padding })}
        max={128}
        step={8}
      />
      <input type="range" value={padding} className='text-black' 
    onChange={(e) => useStore.setState({ padding: parseInt(e.target.value) })}
      />
      <button onClick={() => useStore.setState({ padding: 20 })}>
        Medium
      </button>
    </div>
  )
}
