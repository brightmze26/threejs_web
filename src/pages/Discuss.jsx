import React from 'react'
import layersEarth from '../assets/images/layers-earth.jpg'

const Discuss = () => {
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='min-w-[50%] '>
        <h1 className='head-text'>What is Earth ?</h1>
        <p className='textarea'>Earth is the dynamic planet that we call home. It formed over 4.5 billion years ago, and it has been changing ever since. Sometimes these changes happen very fast, like an earthquake or a volcanic eruption. Earth consists of land, air, water, and life. The land contains mountains, valleys and flat areas. The air is made up of different gases; it's around 78% nitrogen, 21% oxygen, and then small parts of a bunch of other stuff like hydrogen and carbon dioxide. The water includes oceans, lakes, rivers, streams, rain, snow, and ice.
        </p>
        
        <h1 className='head-second-text mt-4 mb-4'>What are the layers of the Earth?</h1>
        <img src={layersEarth} alt='layers earth' />
        <h1 className='head-third-text mt-4 mb-4'>The Crust</h1>
        <p className='textarea'>
        The first of these layers is the Crust, the surface we walk on. The crust ranges in thickness from approximately 3 - 43 miles deep and, at just 1% of the Earth's total volume, it's the thinnest layer of the Earth. The materials it's comprised from include a variety of solid rocks and minerals. Earth's crust and some of the layer below, the mantle, is broken up into large pieces called tectonic plates.
        </p>

        <h1 className='head-third-text mt-4 mb-4'>The Mantle</h1>
        <p className='textarea'>The Mantle lies directly below the crust. It's around 1,800 miles (2,897 km) deep at its thickest point, making it by far the most voluminous layer of the Earth, comprising around 85% of the planet's total mass. The mantle is composed primarily of a semi-molten rock called magma. Sometimes this erupts up through the Earth's crust, causing volcanoes. At the upper part of the mantle is a combination of solid rock, and rock that has been heated up by pressure so much it's become liquid.
        At the lower mantle, this rock is still hot enough to melt, but it remains solid due to the intense pressure it's under.
        </p>

        
        <h1 className='head-third-text mt-4 mb-4'>The Outer Core</h1>
        <p className='textarea'>Below the mantle lies the Outer Core, a liquid layer of the Earth. The materials it's made from are mostly iron and zinc, which have been heated up so much by pressure that they've become a volatile liquid.</p>

        <h1 className='head-third-text mt-4 mb-4'>The Inner Core</h1>
        <p className='textarea'>At the centre of the Earth lies the Inner Core. This is the deepest layer of the Earth and, with a radius of about 758 miles (1,220 km), it's a similar size to the moon. It's the hottest layer of the Earth due to a combination of residual heat from the Earth's formation, radioactive decay, and intense pressures caused by the gravitational pull of the sun and moon.</p>

        
        <h1 className='head-second-text mt-4 mb-4'>Natural Oscillations</h1>
        <p className='textarea'><span className='italic font-semibold '> Our Earth is always changing? </span>  Sometimes these changes happen very fast. An earthquake can split the ground in a few seconds. Lava from a volcanic eruption can spread over the side of a volcano in minutes. A heavy rainstorm can flood a neighborhood in a day. These changes are easy to see. But most changes happen so slowly we don’t notice them at all. The continents slowly creep across the surface of Earth at an average speed of eight centimeters a year. Over hundreds of millions of years, mountains form, and then slowly erode away.
        </p>

        <p className='textarea'>The natural movements present on Earth can be considered as a collaboration of nature itself.<br/>- Intense heat flowing out of the core and in the mantle makes the mantle flow in circles.<br/>- The motion of the mantle causes the plates to move.<br/>- The moving plates create volcanoes.<br/>- The volcanoes release gases into the atmosphere.<br/>- The atmosphere acts like a giant blanket, keeping the planet warm.</p>

        <h1 className='head-third-text mt-4 mb-4'>Tectonic earthquake</h1>
        <p className='textarea'>Tectonic earthquakes are a type of earthquake caused by a sudden shift on a fault line. Tectonic plates are always moving slowly, but they get stuck at their edges due to friction. When the stress on the edge overcomes the friction, an earthquake releases energy in waves that travel through the Earth's crust and cause the shaking we feel. Tectonic earthquakes can occur anywhere on Earth where there is enough accumulated elastic strain energy to drive fracture propagation along a fault plane. The Earth's surface is made up of adjacent plates that are constantly moving, with movements that can reach up to 10 cm per year.</p>

        
        <h1 className='head-third-text mt-4 mb-4'>Vulcanic earthquake</h1>
        <p className='textarea'>Vulcanic earthquakes are micro-vibrations in the local earth's crust caused by magma activity or volcanic eruptions. This type of earthquake can occur before, during, or after a volcanic eruption. The cause of volcanic earthquakes is eruptions or volcanic eruptions, which are vibrations caused by the activity of magma friction against the rock walls penetrated as magma rises to the surface of the volcano.</p>
      </div>   
    </section>  
  )
}

export default Discuss
