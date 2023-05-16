import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./scss/index.scss";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export const SimpleAccordion = () => {
  const category = [
    "Products",
    "Extra",
    "Appointment",
    "Special category",
    "Time",
  ];
  const products = [
    "Kurti",
    "Kurti",
    "Blouse",
    "Blouse",
    "Lehenga",
    "Lehenga",
    "Sari",
    "Sari",
  ];
  return (
    <div>
      {category.map((item, key) => (
        <Accordion style={{ boxShadow: "none" }} key={key}>
          <AccordionSummary
            sx={{
              margin: 0,
              padding: 0,
              "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "rotate(90deg)",
              },
              
            }}
            expandIcon={
              <MdOutlineArrowForwardIos
                style={{ color: "rgba(1, 114, 182, 1)" }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                color: "rgba(1, 114, 182, 1)",
                fontWeight: "500",
              }}
            >
              {item}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0px 10px" }}>
            <FormGroup
              className="list"
              sx={{
                display: "grid",
                gap: "10px",
                gridTemplateColumns: "1fr 1fr",
                marginBottom: "20px",
              }}
            >
              {products.map((subitem, key1) => (
                <FormControlLabel
                  key={key + key1}
                  sx={{ width: "100px" }}
                  className="list__item"
                  control={
                    <Checkbox
                      sx={{
                        color: "rgba(0, 0, 0, 0.15)",
                        padding: 0,
                        margin: 0,
                        marginRight: "10px",
                      }}
                    />
                  }
                  label={subitem}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
