import styles from './table.module.css'; // Create a CSS file to style the table
const Table = () => {
    return (
        <div>
            <table class={styles.customers}>
                <tr>
                    <td>ICONs</td>
                    <td>Simon Crowther</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>ICONs</td>
                    <td>Marie Bertrand</td>
                    <td>France</td>
                </tr>
            </table>



        </div>

    );
};

export default Table;