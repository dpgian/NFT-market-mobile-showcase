import { Download, Features, SectionWrapper } from './components'
import styles from './styles/Global';
import assets from './assets'

const App = () => {
  return (
    <div>
      <SectionWrapper 
        title='Your own store of NFTs. Start Selling & Growing'
        description='Buy, store, collect NFTs, exchange & earn crypto'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
      <SectionWrapper 
        title='Smart User Interface Marketplace'
        description='Experience a buttery UI of ProNef NFT Marketpalce. Smooth constant colors of a fluent UI design.'
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title='Deployment'
        description='ProNef is built using Expo which runs natively on all users devices.'
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title='Creative way to showcase the store'
        description='The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT.'
        mockupImg={assets.mockup}
        banner='banner02'
      />
      <Download />

      <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span style={{ fontWeight: 'bold' }}>Gianpierangelo De Palma</span>
        </p>
      </div>
    </div>
  );
}

export default App;
