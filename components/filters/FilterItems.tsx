import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

import { Box, Stack, Chip, Badge, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const theme = createTheme({
    palette: {
        primary: {
            main: "#00a1b6",
        },
    },
});

interface IFilterItems {
    onSelect: (arg0: string) => void;
    quantity: number | null;
    filterArray: IFilter[] | null;
}

interface IFilter {
    key: string;
    value: string;
}

const FilterItems: React.FC<IFilterItems> = ({ onSelect, quantity, filterArray }) => {
    const [filteredItem, setFilteredItem] = useState("");
    const [showSelector, setShowSelector] = useState(false);
    let { t } = useTranslation("filtersitem");

    const filtersOpen = () => {
        setShowSelector(!showSelector);
        onSelect("");
        setFilteredItem("");
    };

    const handleSelect = (data: string) => {
        onSelect(data);
        setFilteredItem(data);
    };

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <FilterAltOutlinedIcon />
                <Typography
                    onClick={filtersOpen}
                    sx={{ cursor: "pointer", ml: 1 }}
                >
                    {t("filters")}
                </Typography>
            </Box>
            {showSelector && (
                <ThemeProvider theme={theme}>
                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}
                    >
                        {filterArray?.map((item) => (
                            <Badge
                                key={item.key}
                                badgeContent={
                                    item.value === filteredItem ? quantity : 0
                                }
                                color="primary"
                            >
                                <Chip
                                    sx={{ mb: 2 }}
                                    variant="outlined"
                                    color={
                                        item.value === filteredItem
                                            ? "primary"
                                            : "default"
                                    }
                                    label={item.key}
                                    onClick={() => handleSelect(item.value)}
                                />
                            </Badge>
                        ))}
                    </Stack>
                </ThemeProvider>
            )}
        </Box>
    );
}

export default FilterItems;
