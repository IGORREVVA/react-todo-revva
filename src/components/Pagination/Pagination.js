
import styles from "./Pagination.module.scss";
import {Link} from "react-router-dom";

const Pagination = ({currentPage, totalPages}) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={styles.pagination}>
           <ul className={styles.paginationList}>
               {pageNumbers.map((number, index) => (
                   <li key={number} className={index + 1 === currentPage ? styles.paginationLink + " " + styles.paginationActiveLink : styles.paginationLink}>
                       <Link to={`/react-todo-revva/todos/?page=${number}`}>
                           {number}
                       </Link>
                   </li>
               ))}
           </ul>
        </nav>
    );
};

export default Pagination;
