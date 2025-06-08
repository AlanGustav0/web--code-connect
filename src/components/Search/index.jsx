import styles from './index.module.css';
import { IoMdSearch } from "react-icons/io";

export const SearchComponent = () => {
    return (
        <div className={styles.container}>
            <IoMdSearch /><input type="text" className={styles.search_input} placeholder="Digite o que você procura"/>
            <button className={styles.search_button}>Buscar</button>
        </div>
    );
}