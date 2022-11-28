import {FC} from "react";

// @models
import {ModelCommentList} from "./model/ModelCommentList.model";

// @styles
import styles from "./styles/StylesCommentList.module.scss";

const CommentList:FC<ModelCommentList> = () => {
    return (
        <div className={styles.wrap}>

        </div>
    );
}

export default CommentList;