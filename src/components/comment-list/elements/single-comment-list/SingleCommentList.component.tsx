import {FC} from "react";

// @models
import {ModelSingleCommentList} from "./model/ModelSingleCommentList.model";

// @styles
import styles from "./styles/StylesSingleCommentList.module.scss";

const SingleCommentList:FC<ModelSingleCommentList> = ({author, rate, comment}) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.single_item}>Autor: {author}</div>
            <div className={styles.single_item}>Ocena: {rate}</div>
            <div className={styles.single_item}>Komentarz: {comment}</div>
        </div>
    );
}

export default SingleCommentList;