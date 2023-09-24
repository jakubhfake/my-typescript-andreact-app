import React, {useState} from 'react';

export const CryptoPrice = () => {
    const [data, setData] = useState(null);
    if  (data == null) {
        return <p>Wczytywanie danych...</p>
    }
}

    return <>
        <label>
            Wybierz parę kryptowalutową: <br>
            <select>

            </select>
        </label>
    </>

}