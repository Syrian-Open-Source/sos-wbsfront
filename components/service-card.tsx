import { Paper, Typography } from "@mui/material";
import React from "react";

export interface ServiceCardProps {
  service: any;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Paper elevation={1} sx={{ padding: "2rem", minHeight: "180px" }}>
      <Typography variant="h4" fontWeight="500" paddingBottom="1rem">
        {service.title}
      </Typography>
      <Typography variant="body1" fontWeight="300" color="primary.A200">
        {service.breif}
      </Typography>
    </Paper>
  );
};
