import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='w-full bg-black absolute bottom-0 text-white'>
        <div className='container m-auto py-5'> 
            <div className='text-center'>
                <h2 className='text-bold-600 text-gray-500 text-3xl '>Contactos</h2>
                <p>telefono: 12321351</p>
                <p>email: bodega@gmail.com</p>
            </div>
              <div className='flex max-sm:flex-col  items-center sm:justify-between '>
                <section className='w-48 text-center'>
                    <h3>Redes sociales</h3>
                    <div className='flex justify-between mt-5 text-gray-300'>
                        <a href="https://www.facebook.com/BodegasSalentein/" target="_blank" >
                        <FontAwesomeIcon className='w-5' icon={faFacebook}/>
                        </a>
                        <a href="https://www.instagram.com/BodegasSalentein/" target="_blank" >
                            <FontAwesomeIcon className='w-5' icon={faInstagram} />
                        </a>
                        <a href="https://www.x.com/BodegasSalentein/" target="_blank" >
                            <FontAwesomeIcon className='w-5' icon={faTwitter} />
                        </a>
                        <a href="https://www.youtube.com/BodegasSalentein/" target="_blank" >
                            <FontAwesomeIcon className='w-5' icon={faYoutube} />
                        </a>
                    </div>
                </section>
                <section>
                    <h2 className='text-2xl'>Bodega Maxteina</h2>
                    <p>Pasaje 23 km: 224, Mendoza, Argentina</p>
                </section>
            </div>

        </div>
    </footer>
  )

}

export default Footer
