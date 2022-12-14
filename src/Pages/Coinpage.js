import { makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";

const Coinpage = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState();

    const { currency, symbol } = CryptoState();

    const fetchCoin = async () => {
        const { data } = await axios.get(SingleCoin(id));
        setCoin(data);
        console.log(data);
    };

    useEffect(() => {
        fetchCoin();
    }, []);

    const useStyles = makeStyles((theme) => ({
        container: {
            display: "flex",
            [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                alignItems: "center",
            },
        },
        sidebar: {
            width: "30%",
            [theme.breakpoints.down("md")]: {
                width: "100%",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 25,
            borderRight: "2px solid gray",
        },
        heading: {
            fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "Montserrat",
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.sidebar}>
                <img src={coin?.image.large} alt={coin?.name} height="200" style={{ marginBottom: 20 }} />
                <Typography varient="h3" className={classes.heading}>
                    {coin?.name}
                </Typography>
                <Typography>{coin?.description.en.split(". ")[0]}</Typography>
            </div>

            {/* chart */}
            <CoinInfo coin={coin} />
        </div>
    );
};

export default Coinpage;
