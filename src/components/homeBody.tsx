import styles from '../styles/Body.module.css'

export function Body() {
    return (
    <body>
        <section className={styles.principal}>
            <div className={styles.banner}>
                <h1>New Arrival</h1>
                <h2>Discover Our</h2>
                <h2>New Collection</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</h3>
                <button>BUY NOW</button>    
            </div>
            <div>
            </div>
        </section>
        
    </body>
    )
}