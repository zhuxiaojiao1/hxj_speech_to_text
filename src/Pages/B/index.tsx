/**
 * @file 科大讯飞api
 */

import Button from "./../../Components/Button/index";
import { start } from "./Unit/useAudio";

const Temp: React.FC = () => {
    const handleStart = (res: boolean) => {
        start();
    };

    return (
        <div>
            我是讯飞的api
            <Button handleChange={handleStart} status={false} loading={false} />
            <div>
                {/* {textList.map((item, index) => (
                    <div key={index} style={{ marginTop: "15px", textAlign: "center" }}>
                        {item}
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default Temp;
