import Image from 'next/image'
import styles from  './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.centerVerticalLoader}>
            <div className={styles.centerLoader}>
                <p className={styles.loaderText}>Loading...</p>
                <Image alt="pokeball"
                src='/pokeball.png'
                className = {styles.loaderAnimation}
                width={100}
                height={100} />
            </div>
        </div>
    )
  }
  
  export default Loader

