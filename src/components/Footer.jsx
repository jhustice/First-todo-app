import styles from './footer.module.css'
export default function Footer({ completetdTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total Todos: {totalTodos}</span>
      <span className={styles.item}>Completed Todos: {completetdTodos}</span>
    </div>
  );
}
