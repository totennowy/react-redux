import {useState} from "react";

const UseForm = (author: string, rare: number, comment: string, id: string) => {
    const [authorInput, setAuthorInput] = useState<string>(author);
    const [rateInput, setRateInput] = useState<number>(rare);
    const [commentInput, setCommentInput] = useState<string>(comment);

    const handleChangeAuthor = (e: any) => {setAuthorInput(e.target.value)}
    const handleChangeRate = (e: any) => {setRateInput(Number(e.target.value))}
    const handleChangeComment = (e: any) => {setCommentInput(e.target.value)}

    const handleOnSubmit = (e: any) => {
        e.preventDefault();

        if (!authorInput.length) {
            return;
        }
        const rateObject = {
            author: authorInput,
            rate: rateInput,
            id,
            comment: commentInput
        }

        console.log(rateObject);

        id ? console.log('Edycja oceny') : console.log('dodaj ocene');
    }

    return {
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
    }
}

export default UseForm;