import * as React from "react";
import useTranslation from "next-translate/useTranslation";

import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandCircleDown";

import styles from "./Accordeon.module.scss";
import { IBody, IMenu } from "../../types/menuType";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
        color: "#00a1b6",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

interface IAccordeon {
    menulist: IMenu[];
    lang: number
}

const Accordeon: React.FC<IAccordeon> = ({ menulist, lang }) => {
    const [expanded, setExpanded] = React.useState("");
    let { t } = useTranslation("menutitle");

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : "");
    };

    return (
        <Container maxWidth="md" className={styles.accordeon_block}>
            {menulist?.map((item, i) => (
                <Accordion
                    key={i}
                    expanded={expanded === `panel${i}`}
                    onChange={handleChange(`panel${i}`)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
                            {item.title[lang].title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {item.body[lang]?.map((item: IBody, i: number) => (
                            <Box sx={{ m: 2 }} key={i}>
                                <Typography
                                    sx={{ fontWeight: 700, fontSize: 18 }}
                                >
                                    {item.name}
                                </Typography>
                                <Typography sx={{ color: "text.secondary" }}>
                                    {item.description}
                                </Typography>
                                <Typography sx={{ fontSize: 18 }}>
                                    {item.price}
                                    {t("currency")}
                                </Typography>
                            </Box>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Container>
    );
}

export default Accordeon;
