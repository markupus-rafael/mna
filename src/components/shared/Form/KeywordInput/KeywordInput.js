import React, {useState} from "react";
import Keyword from "./keyword";

const KeywordInput = () => {
    const [keyword, setKeyword] = useState({
        items: [],
        query: ''
    });

    const renderKewords = () => keyword.items && keyword.items.map((item, index) => <Keyword item={item}
                                                                                             key={`${item}-${index}`}
                                                                                             index={index}
                                                                                             removeItem={removeItem}
    />);

    const removeItem = (index) => {
        return () => setKeyword({
            ...keyword,
            items: keyword.items.filter( (item, i) => i !== index)
        });
    };

    const handleKeyDown = (e) => {
        const { value } = e.target;
        // 13 - ENTER
        if ( e.keyCode === 13 && value.length > 0) {

            setKeyword((prevState => {
                return {
                    items: [...prevState.items, value],
                    query: ''
                }
            }))
        }
        // 8 - Delete
        if ( keyword.items.length && e.keyCode === 8 && !keyword.query.length ) {
            setKeyword(state => ({
                ...state,
                items: state.items.slice(0, state.items.length - 1)
            }));
        }
    };

    const onChange = (e) => {
        setKeyword({
            ...keyword,
            query: e.target.value
        })
    };

    return (
        <div className="mna-keyword">
            {renderKewords()}
            <input type="text"
                   name="keyword"
                   className="mna-keyword__input"
                   value={keyword.query}
                   onKeyDown={handleKeyDown}
                   onChange={onChange} />
        </div>
    )
};

export default KeywordInput;