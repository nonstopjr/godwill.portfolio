import React from 'react'
import './portfolio.css'
import ronaldo from '../../assets/cristiano.jpg'
import manutd from '../../assets/manutd.png'
import hotel from '../../assets/happy.jpeg'
import mancity from '../../assets/mancity.jpg'
import bss from '../../assets/showss.jpg'
import riele from '../../assets/riele.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={manutd} alt="my fav club" />
          </div>
          <h3>This is a portfolio  of my favourite club Man Utd</h3>
          <a href="https://www.bing.com/images/search?view=detailV2&ccid=FjaKQx00&id=323329DB4502E018CA5CE6E975C117219FB037DB&thid=OIP.FjaKQx00WRsJ0ARtEBeArwHaEK&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.16368a431d34591b09d0046d101780af%3Frik%3D2zewnyEXwXXp5g%26riu%3Dhttp%253a%252f%252fcdn.wallpapersafari.com%252f8%252f0%252fMpJ4Bv.jpg%26ehk%3D3RX65rPcw0gjOgjGWXQ8UlEmEO9Y1cPFx74TC1P1KP4%253d%26risl%3D%26pid%3DImgRaw%26r%3D0&exph=900&expw=1600&q=man+united&form=IRPRST&ck=BF8753E3DCCF5FD31FEC849E1033C45B&selectedindex=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11&pivotparams=insightsToken%3Dccid_QvOLfE8D*cp_971C8971F0D3A9A95EAE7FF616703919*mid_7C334B83ECFDC2E2BD7DBDD3347EC1132C43CB4C*simid_608005505203980638*thid_OIP.QvOLfE8DsRNqtLcIOFruqQHaEK&iss=VSI&ajaxhist=0&ajaxserp=0" className='btn'>Manchester RED</a>
          <a href="https://www.bing.com/images/search?view=detailV2&ccid=qPWXptyK&id=FED485BA30D84E3ACFF54FD9A8A98332B2C70047&thid=OIP.qPWXptyK6COISwBRFDrqOQHaEK&mediaurl=https%3a%2f%2fassets.manutd.com%2fAssetPicker%2fimages%2f0%2f0%2f12%2f81%2f807252%2f1991_92-21565701663365_large.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a8f597a6dc8ae823884b0051143aea39%3frik%3dRwDHsjKDqajZTw%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=history+of+man+utdd&simid=607987251491190980&FORM=IRPRST&ck=FD1284E0877CE9ECEFD668A6953DAEDD&selectedIndex=0&ajaxhist=0&ajaxserp=0" className='btn btn-primary' target='_blank'>ABOUT</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ronaldo} alt="Legend" />
          </div>
          <h3>Cristiano Ronaldo</h3>

          <a href="https://www.bing.com/images/search?view=detailV2&ccid=M0u4kzue&id=46673F050145C6798D71000DC9919DC3F8C9553F&thid=OIP.M0u4kzuem3n8SXJz17WocAHaEK&mediaurl=https%3a%2f%2fi.redd.it%2fluprfmefavp01.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.334bb8933b9e9b79fc497273d7b5a870%3frik%3dP1XJ%252bMOdkckNAA%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=ronaldo&simid=608021529710758865&FORM=IRPRST&ck=C205B261F2164F103190D27CE85DC174&selectedIndex=43" className='btn'>Ronaldo</a>
          <a href="https://www.bing.com/videos/search?q=ronaldo+cristiano+video&&view=detail&mid=D62FB8C33DAB87968A39D62FB8C33DAB87968A39&&FORM=VRDGAR" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={riele} alt="celebrity" />
          </div>
          <h3>This is the celebrity Riele Downs</h3>
          <a href="https://www.imdb.com/name/nm1987953/" className='btn'>Riele</a>
          <a href="https://www.imdb.com/name/nm1987953/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={mancity} alt=" man blue twitter home page" />
          </div>
          <h3>This is a portfolio for Manchester City Football club</h3>
          <a href="https://www.bing.com/images/search?view=detailV2&ccid=fFaPhwxe&id=EC0377E72014B3E41EE696BFE39190475D26323E&thid=OIP.fFaPhwxe2qoTDLue3tgcVwHaHa&mediaurl=https%3A%2F%2Funicpress.com%2Fwp-content%2Fuploads%2F2019%2F05%2F%40ManCity.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.7c568f870c5edaaa130cbb9eded81c57%3Frik%3DPjImXUeQkeO%252flg%26pid%3DImgRaw%26r%3D0&exph=1200&expw=1200&q=mancity+twitter&simid=608036639406892409&form=IRPRST&ck=A8E1DAABBF1DC5E4CD74FCA63DD6A9C0&selectedindex=1&ajaxhist=0&ajaxserp=0&vt=0&sim=11" className='btn'>Blue Manchester</a>
          <a href="https://www.bing.com/videos/search?q=mancity+twitter&&view=detail&mid=C878BBBE7991D59B5DA4C878BBBE7991D59B5DA4&&FORM=VRDGAR&ru=%2Fvideos%2Fsearch%3Fq%3Dmancity%2Btwitter%26FORM%3DHDRSC4" className='btn btn-primary' target='_blank'>Pep's Title Challenge</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={bss} alt="GOD'S WORD SOFTWARE" />
          </div>
          <h3>This is a portfolio for the Bible Show Software</h3>
          <a href="https://www.bing.com/images/search?view=detailV2&ccid=WSSJsafe&id=FD5AA3BBB998B5A33AD1983B47D1E4194007C71F&thid=OIP.WSSJsafeuE4I0x6IOFfBdQHaE2&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.592489b1a7deb84e08d31e883857c175%3frik%3dH8cHQBnk0Uc7mA%26riu%3dhttp%253a%252f%252fwww.romediacrestin.info%252fimages%252fbibleshow1.jpg%26ehk%3dlTTmWGO2xZZDnzXwkCOY4QJschdx3MOufe37olzUt9Q%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=328&expw=500&q=bible+show+software+for+pc&simid=608012106561173731&FORM=IRPRST&ck=A07C91F20BDF09A73EE99193417DECF8&selectedIndex=6&ajaxhist=0&ajaxserp=0" className='btn'>BIBLE SHOW</a>
          <a href="https://www.bing.com/videos/search?q=bible+show+software+for+pc&&view=detail&mid=C6F54F4264C48EB8793EC6F54F4264C48EB8793E&&FORM=VRDGAR" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={hotel} alt="Tourist site" />
          </div>
          <h3>This is a portfolio for a Hotel</h3>
          <a href="https://www.google.com/search?q=nice+5+star+hotels&tbm=isch&ved=2ahUKEwjml5rA_db_AhW_mScCHT7SDHkQ2-cCegQIABAA&oq=nice+5+star&gs_lcp=CgNpbWcQARgAMgcIABAYEIAEMgcIABAYEIAEMgcIABAYEIAEMgcIABAYEIAEMgcIABAYEIAEOgQIIxAnOgcIABCKBRBDOgUIABCABDoKCAAQigUQsQMQQzoLCAAQgAQQsQMQgwE6CAgAELEDEIMBOgYIABAIEB5QjwlYiCpgvjRoAXAAeACAAdoDiAGXG5IBCDItMTAuMi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=OEyUZOabFL-znsEPvqSzyAc&bih=695&biw=1366#imgrc=b6xzhWSmEbhoNM" className='btn'>Hotel</a>
          <a href="https://www.capestel.com/en/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>
        
      </div>

       
    </section>
  )
}

export default Portfolio
