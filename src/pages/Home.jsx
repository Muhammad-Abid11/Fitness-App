import styles from './home.module.css'
import Table from '../components/table'
function Home() {

    return (
        <>
            <div className={styles.body}>
                <h1 >Home Page</h1>
                <div className={styles.content}>
                    <button className={styles.AddRecord}>Add Records</button>
                    <Table />
                </div>

            </div>
        </>
    )
}

export default Home
