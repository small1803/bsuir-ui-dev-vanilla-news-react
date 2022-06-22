import styles from './Message.module.scss'

const Message = ({ message }) => <div className={styles.message}>{message}</div>;

export default Message;
