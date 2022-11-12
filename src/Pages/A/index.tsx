/**
 * @file 原生api
 */

import Button from "./../../Components/Button/index";
import { useAudio } from "./Unit/useAudio";

const Temp: React.FC = () => {
    const [textList, startStatus, setStartStatus, loading, setLoading] = useAudio();

    const handleStart = (res: boolean) => {
        setStartStatus(res);
        if (res) {
            setLoading(true);
        }
    };

    return (
        <div>
            <Button handleChange={handleStart} status={startStatus} loading={loading} />
            <div>
                {textList.map((item, index) => (
                    <div key={index} style={{ marginTop: "15px", textAlign: "center" }}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Temp;
