import { ScrollComponent } from "@datareachable/dr_front_componentlibrary";
import React, { useState } from "react";
import { navList } from "~/DefaultData/nav";
import styles from "./style.scss";

const Main: React.FC = () => {
    const [selectIndex, setSelectIndex] = useState(0);

    const Temp = navList[selectIndex].children;

    return (
        <ScrollComponent>
            <div className={styles.navList}>
                {navList.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`${styles.navItem}${
                                selectIndex === index ? ` ${styles.navActive}` : ""
                            }`}
                            onClick={() => {
                                setSelectIndex(index);
                            }}
                        >
                            {item.content}
                        </div>
                    );
                })}
            </div>
            <div className={styles.main}>
                <Temp />
            </div>
        </ScrollComponent>
    );
};

export default Main;
