import styles from "../../styles/Home.module.css";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {

    const pagesCount = Math.ceil(items / pageSize); // 100/10
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    console.log("PAGES FROM PAGINATION", pages)

    return (
        <div>
            <ul>
                {pages.map((page) => (
                    <li
                        key={page}
                        className={
                            page === currentPage ? "current" : "item"
                        }
                    >
                        <a onClick={() => onPageChange(page)}>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Pagination