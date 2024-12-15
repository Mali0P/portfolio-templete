import { faCss3Alt, faHtml5, faPhp, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Skills() {
  return (
    <div className='skills w-[100vw] text-white m-auto h-[140vh] py-[13vw] py-[3vw] flex flex-col items-center'>

<div className="skillsContent flex h-[100%] w-[80%] ">
<div className="leftContainer basis-[50%] flex">
<h2 className='text-[4vw]'>About Me</h2>

</div>

<div className="rightContainer basis-[50%] flex justify-center items-center">
<ul className='text-[4vw] flex gap-[3vw]'>
    <li className='flex flex-col justify-center items-center'><FontAwesomeIcon icon={faHtml5} className='text-[#ea6228]' /> <span className='text-[1vw]'>Html</span></li>
    <li><FontAwesomeIcon icon={faCss3Alt} className='text-[#2763e8]' /></li>
        <li><FontAwesomeIcon icon={faSquareJs} className='text-[#ecdb1c]' /></li>
            <li><FontAwesomeIcon icon={faPhp} className='text-[#637eb5]'/></li>

    <li><FontAwesomeIcon icon={faReact} className='text-[#57d3f5]'/></li>
</ul>
</div>
</div>

    </div>
  )
}
