import styles from "./style.scss";

interface ButtonProps {
    /**
     * 当语音转文字按钮变化时
     */
    handleChange: (status: boolean) => void;

    status: boolean;

    loading: boolean;
}

const Button: React.FC<ButtonProps> = ({ handleChange, status, loading }) => {
    // const [start, setStart] = useState(false);

    const handleClick = () => {
        // setStart((pre) => !pre);
        handleChange(!status);
    };

    const content = () => {
        if (loading) {
            return "设备加载中……";
        }
        const str = "语音转文";
        if (status) {
            return `结束${str}`;
        }
        return `开始${str}`;
    };

    return (
        <div className={styles.btnWrap}>
            <button onClick={handleClick} className={styles.btn} disabled={loading}>
                {content()}
            </button>
        </div>
    );
};

export default Button;
