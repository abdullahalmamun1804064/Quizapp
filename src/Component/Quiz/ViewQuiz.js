import React from 'react'
import { Box, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useNavigate } from 'react-router-dom';

const ViewQuiz = ({ sectorData  }) => {
 
  const navigate = useNavigate();
 
  return (
    <div className="ViewQuiz">
      <h1 className="ViewQuizTitle">View Quiz</h1>
      <Box sx={{ px: 2, py: 1 }}>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {sectorData.map((item) => {
            return (
              <Box className="SectorItem" sx={{ width: "30%" }} key={item.id}>
                <div key={`admin+${item}`}>
                  <div>
                    <p>
                      <b>Quiz Name: </b> {item.name}
                    </p>
                    <p className="  text-center text-xs">
                      <b>Sector : </b> {item.sector}
                    </p>

                    <div className="viewQuizButton">
                      <div>
                        <button
                          className=" EditButton "
                          onClick={() => navigate(`/editQuiz/${item.id}`)}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            );
          })}
        </Box>
      </Box>
      <div className="AddNewButton">
        <button className=" NewAddButton  " onClick={() => navigate("/")}>
          New Add
        </button>
      </div>
    </div>
  );
};

export default ViewQuiz
