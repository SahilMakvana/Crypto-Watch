import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import CryptoContext from "../CryptoContext";

const Coinpage = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState();

    const [currency, symbol] = CryptoContext();

    const fetchCoin = async () => {
        const { data } = await axios.get(SingleCoin(id));
        setCoin(data);
    };

    useEffect(() => {
        fetchCoin();
    }, []);

    const useStyles = makeStyles(() => ({}));

    const classes = useStyles();

    return <div>Coinpage</div>;
};

export default Coinpage;
