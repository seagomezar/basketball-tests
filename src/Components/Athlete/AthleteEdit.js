import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import Box from "@mui/material/Box";

export const AthleteEdit = () => (
  <Edit>
    <SimpleForm sx={{ maxWidth: 600 }}>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="name" fullWidth />
        </Box>
        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="document" fullWidth />
        </Box>
      </Box>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="birth_date" fullWidth />
          </Box>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="email" fullWidth />
        </Box>
      </Box>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="phone" fullWidth />
          </Box>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="club" fullWidth />
        </Box>
      </Box>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <TextInput source="position" fullWidth />
          </Box>
      </Box>
    </SimpleForm>
  </Edit>
);
