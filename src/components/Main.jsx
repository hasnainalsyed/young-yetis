import React from 'react';
import SocialIcons from './SocialIcons';

function Main() {

  const images = [
    {
      name: 'page 1',
      url: '/images/story-images/1.png'
    },
    {
      name: 'page 2',
      url: '/images/story-images/2.png'
    },
    {
      name: 'page 3',
      url: '/images/story-images/3.png'
    },
  ]

  return (
    <>
      <section id='about'>
        <div className="hero-sect">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-12 text-center">
                <div className="content">
                  <h1>
                    <img src="/images/logo.webp" alt="Young Yetis" className='img-fluid' />
                  </h1>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <SocialIcons />
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
                <div className="content text-center">
                  <h2 className="heading">
                    Our Story
                  </h2>

                  <p>Due to climate change a new, unexplored path has opened though the Himalayas. A far-reaching cave system was discovered under what seemed like never melting ice and a new breed of yeti has surfaced from its depths.</p>
                  <p>We knew nothing of their existence aside from legend; their existence seemed like a terrifying reminder of wilder times. They however have been moving, under the ice we had been studied by them; our culture, our media and other creations influenced a new generation of young yetis.</p>
                  <p>Long ago we were enemies, they hunted us as we were a threat. They felt endangered by the sheer number of humans in the land and their desire to control. We did not seek peace as we did not believe in it, we did not bond with them as we did not believe in it. And as time went by, we retaliated against these hunters forcing their race to retreat into the caves and isolate themselves with the ice, until now.</p>
                  <p>For the last century a breach has appeared and divided their society. As technology advanced in the outside world so it did in the depths making it possible for the yetis to get a hold of our media, of a piece of the outside world.</p>
                  <p>The current leader or yeti-kind. Roual, has forbidden the study of humans and their culture. He sees this influence as corruption and evil as they oppose the beliefs of the yetis of old who created the society that survived in the shadows.  He fears the viridity and reality of this messages as they display such different worlds and technologies from what they know.</p>
                  <p>Roual and the older yetis have begun to lose control as the cultural influence has developed. The new generations go farther apart from their tradition influenced by these strange messages from the outside.</p>
                  <p>And so, a new faction of young yetis has divided from their main society. They called themselves the children of the crystal; their objective is to destroy the division between human and yeti kind bringing down biases from both sides. </p>
                  <p>During our search for answers, we have contacted a tribe of nomads local to the area. Their leader seemed euphoric when the news of the yeti came. They told a story of a prophecy, one of harmony and coexistence, knowledge only given from leader to leader in their society. A prophecy that told us much more has yet to come…</p>
                </div>

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
              <div className="col-md-6">
                <div className="team-member px-4">
                  <img src="/images/nicolas-botero.jpeg" alt="Nicolas Botero" className='img-fluid' />
                </div>
              </div>
              <div className="col-md-6">
                <div className="team-member px-4">
                  <img src="/images/david-botero.jpeg" alt="David Botero" className='img-fluid' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main