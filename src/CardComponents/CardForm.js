import React, { useEffect, useState } from "react";

//forms for creating a card
function CardForm({ handleSubmit, handleCancel, card }) {
    const [cardInfo, setCardInfo] = useState();
    useEffect(() => {
        setCardInfo(card);
    }, [card]);
    const updateForm = (event) => {
        const { name, value } = event.target;
        setCardInfo({ ...cardInfo, [name]: value });
    };
    const submit = (event) => {
        event.preventDefault();
        handleSubmit(cardInfo);
        setCardInfo({front:"", back:""});
    };

    if (!cardInfo) {
        //form for front of card
        return (
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="front">Front</label>
                    <textarea
                        className="form-control"
                        type="text"
                        id="front"
                        name="front"
                        placeholder="Front of Card"
                        value={""}
                        onChange={updateForm}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="back">Back</label>
                    <textarea
                        className="form-control"
                        name="back"
                        id="back"
                        placeholder="Back of Card"
                        value={""}
                        onChange={updateForm}
                        required
                    ></textarea>
                    <button className="btn btn-secondary my-2" onClick={handleCancel}>Done</button>
                    <button type="submit" className="btn btn-primary my-2">Save</button>
                </div>
            </form>
        );
    } else {
        //form for back of card
        return (
            <form onSubmit={submit}>   
              <div className='form-group'>
                <label htmlFor='front'>Front</label>
                <textarea
                  className='form-control'
                  type='text'
                  id='front'
                  name='front'
                  placeholder='Front of Card'
                  value={cardInfo.front}
                  onChange={updateForm}  
                  required
                ></textarea>
              </div>
              <div className='form-group'>
                <label htmlFor='back'>Back</label>
                <textarea
                  className='form-control'
                  name='back'
                  id='back'
                  placeholder='Back of Card'
                  value={cardInfo.back}
                  onChange={updateForm}
                  required
                ></textarea>
                <button className='btn btn-secondary my-2' onClick={handleCancel}>
                  Done
                </button>
                <button type='submit' className='btn btn-primary my-2'>
                  Save
                </button>
              </div>
            </form>
          );
    }
}

export default CardForm;