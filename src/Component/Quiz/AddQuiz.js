import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import data from "../../DataBase/dataDump";
import { useNavigate } from "react-router-dom";

const AddQuiz = ({ sectorData }) => {
  const navigate = useNavigate();

  const [formQuiz, setFromQuiz] = useState({});
  const [errorsQuiz, setErrorsQuiz] = useState({});
  const [checkAgree, setcheckAgree] = useState(false);
  const [agreeCondition, setAgreeCondition] = useState();


  let onChangeQuiz = ({ name, value }) => {
    setFromQuiz({ ...formQuiz, [name]: value});
    if (name === "name") {
      if (value === "") {
        setErrorsQuiz((prev) => {
          return {
            ...prev,
            [name]: "Name cann't be blank.",
          };
        });
      } else {
        setErrorsQuiz((prev) => {
          return {
            ...prev,
            [name]: null,
          };
        });
      }
    }
    if (name === "sector") {
      if (value === "" || value === null) {
        setErrorsQuiz((prev) => {
          return {
            ...prev,
            [name]: "sector cann't be blank.",
          };
        });
      } else {
        setErrorsQuiz((prev) => {
          return {
            ...prev,
            [name]: null,
          };
        });
      }
    }
  };

  const onSubmitQuiz = () => {
    setAgreeCondition(checkAgree);
    if (!formQuiz.name) {
      setErrorsQuiz((prev) => {
        return {
          ...prev,
          name: "Please add a Quiz Name",
        };
      });
    }
    if (!formQuiz.sector) {
      setErrorsQuiz((prev) => {
        return {
          ...prev,
          sector: "Please add a Sector",
        };
      });
    }

    if (
      formQuiz.name &&
      formQuiz.sector &&
      checkAgree &&
      Object.values(errorsQuiz).every((item) => !item)
    ) {
    
      onSubmit();
    }
  };
  const onSubmit = () => {
    const newForm = {
      id: Date.now() + '',
      name: formQuiz.name,
      sector:formQuiz.sector
    }
    // setFromQuiz(newForm);
    sectorData.push(newForm);
    navigate("/viewQuiz");
    console.log(sectorData);
  };

  return (
    <Paper elevation={2}>
      <div className="AddQuiz">
        <div className=" ">
          <h1 className="quizTitle">Add Quiz</h1>{" "}
          <Box sx={{ flexGrow: 1, mt: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {" "}
                <TextField
                  id="name"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={formQuiz?.name || ""}
                  label={formQuiz?.name ? "Name" : "Name *"}
                  onChange={(e) => {
                    onChangeQuiz({
                      name: "name",
                      value: e.target.value,
                      
                    });
                  }}
                  error={errorsQuiz?.name ? true : false}
                  helperText={errorsQuiz?.name}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  className="col-span-4"
                  disablePortal
                  id="sector"
                  options={data}
                  fullWidth
                  size="small"
                  isOptionEqualToValue={(option, value) =>
                    option.value === value.value
                  }
                  value={formQuiz.sector || ""}
                  onChange={(event, newValue) => {
                    onChangeQuiz({
                      name: "sector",
                      value: newValue,
                      
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      error={errorsQuiz.sector ? true : false}
                      helperText={errorsQuiz.sector}
                      {...params}
                      label={
                        formQuiz.sector === null ||
                        formQuiz.sector === "" ||
                        formQuiz.sector === undefined
                          ? "Sectors *"
                          : "Sectors"
                      }
                    />
                  )}
                />
              </Grid>
            </Grid>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                onChange={() => setcheckAgree(!checkAgree)}
                label="Agree to terms"
              />
              {agreeCondition === false ? (
                <p style={{ color: "red" }}>Please Check Agree Condition</p>
              ) : (
                ""
              )}
            </FormGroup>
          </Box>
          <div className="AddPageButtons">
            <div>
              <button className="AddButton" onClick={() => onSubmitQuiz()}>
                Add Quiz
              </button>
            </div>
            <div>
              <button
                className="ViewButton  "
                onClick={() => navigate("/viewQuiz")}
              >
                View Quiz
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    </Paper>
  );
};

export default AddQuiz;
