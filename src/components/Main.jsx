import React from 'react';

function Main() {

  const images = [
    {
      name: 'page 1',
      url: '/images/story-images/1.webp'
    },
    {
      name: 'page 2',
      url: '/images/story-images/2.webp'
    },
    {
      name: 'page 3',
      url: '/images/story-images/3.webp'
    },
  ]

  return (
    <>
      <section id='about'>
        <div className="hero-sect">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-12 text-center h-100">
                <div className="content">
                  <img src="/images/logo.png" alt="Young Yetis" className='img-fluid' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='story'>
        <div className="story py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="images">
                  {
                    images.map(({name, url}) => {
                      return (
                        <div className="img-container" key={name}>
                          <img src={url} alt={name} className="img-fluid" />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='roadmap'>
        <div className="road-map">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <img src="/images/roadmap.png" alt="Roadmap" className='img-fluid w-100' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='team'>
        <div className="team py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 text-center">
                <div className="team-member px-4 mb-4 text-center">
                  <img src="/images/nicolas-botero.jpeg" alt="Nicolas Botero" className='img-fluid' />
                </div>
                <h3 className="name">Nicolas Botero</h3>
              </div>
              <div className="col-md-6 text-center">
                <div className="team-member px-4 mb-4 text-center">
                  <img src="/images/david-botero.jpeg" alt="David Botero" className='img-fluid' />
                </div>
                <h3 className="name">David Botero</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main