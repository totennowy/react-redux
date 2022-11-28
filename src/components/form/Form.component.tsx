import {FC} from "react";

// @models
import {ModelForm} from "./model/ModelForm.model";

// @hooks
import UseForm from "./hooks/UseForm.hooks";

// @styles
import styles from "./styles/StylesForm.module.scss";

const Form:FC<ModelForm> = ({author = '', rare = 0, comment = '', id= ''}) => {
    const {
        authorInput,
        setAuthorInput,
        rateInput,
        setRateInput,
        commentInput,
        setCommentInput,
        handleChangeAuthor,
        handleChangeRate,
        handleChangeComment,
        handleOnSubmit
    } = UseForm(author, rare, comment, id);

    return (
        <div className={styles.wrap}>
            <form onSubmit={handleOnSubmit}>
                <div className={styles.form_field}>
                    <label>Autor:</label>
                    <input
                        type="text"
                        onChange={handleChangeAuthor}
                        value={authorInput}
                    />
                </div>

                <div className={styles.form_field}>
                    <label>Ocena:</label>
                    <input
                        type="number"
                        onChange={handleChangeRate}
                        value={rateInput}
                    />
                </div>

                <div className={styles.form_field}>
                    <label>Komentarz:</label>
                    <input
                        type="text"
                        onChange={handleChangeComment}
                        value={commentInput}
                    />
                </div>
                <button type="submit">{id ? 'Edycja oceny' : 'Wyślij ocene'}</button>
            </form>
        </div>
    );
}

export default Form;