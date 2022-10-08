import { Container, createTheme, TextField, ThemeProvider, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import { CryptoState } from "../CryptoContext";

const CoinsTable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState();

    const { currency } = CryptoState();

    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList);
        setCoins(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchCoins();
    }, [currency]);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#FFF",
            },
            type: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Container style={{ textAlign: "center" }}>
                <Typography variant="h4" style={{ margin: 18, fontFamily: "Montserrat" }}>
                    Cryptocurrency Prices by Market Cap
                </Typography>
                <TextField 
                    label="Search For a Crypto Currency..." 
                    variant="outlined" 
                    style={{ marginBottom: 20, width: "100%" }}
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </Container>
        </ThemeProvider>
    );
};

export default CoinsTable;
