import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid"; // Import DataGrid
import { COLORS } from "../../theme";

const SaleCampaignsCard = () => {
  // Dummy data for the sales campaigns
  const campaigns = [
    {
      id: 1,
      campaign: "Research - Accordian",
      sell: 3261,
      spend: 3248,
      profit: 956
    },
    {
      id: 2,
      campaign: "BodyPaint-A36C",
      sell: 3269,
      spend: 1326,
      profit: 321
    },
    {
      id: 3,
      campaign: "House All 36CX",
      sell: 9653,
      spend: 4731,
      profit: 1356
    },
    {
      id: 4,
      campaign: "PheonixAS78C",
      sell: 4765,
      spend: 1325,
      profit: 3265
    },
    {
      id: 5,
      campaign: "SALAMANDAR_Acron",
      sell: 1242,
      spend: 946,
      profit: 432
    }
  ];

  const columns = [
    {
      field: "campaign",
      headerName: "Campaign",
      flex: 2,
      headerClassName: "customHeader",
      cellClassName: "campaignName"
    },
    {
      field: "sell",
      headerName: "Sell",
      flex: 1,
      headerClassName: "customHeader",
      cellClassName: "customOther",
      valueFormatter: (params) => `$${params.value}`
    },
    {
      field: "spend",
      headerName: "Spend",
      flex: 1,
      headerClassName: "customHeader",
      cellClassName: "customOther",
      valueFormatter: (params) => `$${params.value}`
    },
    {
      field: "profit",
      headerName: "Profit",
      flex: 1,
      headerClassName: "customHeader",
      valueFormatter: (params) => `$${params.value}`,
      cellClassName: "customProfit"
    }
  ];

  // In your CSS, define the custom colors and font
  const customStyles = `
    .customHeader {
      color: ${COLORS.primaryDark};
      font-family: "Gabarito"; 
    }
  
    .customProfit {
      color: ${COLORS.primary};
      font-family: "Gabarito";
    }

    .campaignName {
      color: ${COLORS.secondary};
      font-family: "Gabarito";
    }

    .customOther{
      color: ${COLORS.textSecnd};
      font-family: "Gabarito";
    }
  `;

  return (
    <Card variant="none" sx={{ width: "100%" }}>
      <CardContent>
        {/* Include your custom styles in the component */}
        <style>{customStyles}</style>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Gabarito",
              fontWeight: 800
            }}
          >
            Sale Campaigns
          </Typography>
          <Button
            variant="none"
            sx={{
              textTransform: "none",
              fontFamily: "Gabarito",
              fontWeight: 500,
              color: COLORS.primary,
              "&:hover": {
                background: "none",
                cursor: "pointer",
                color: COLORS.secondary
              }
            }}
          >
            See All
          </Button>
        </Box>
        <DataGrid
          rows={campaigns}
          columns={columns}
          disableColumnFilter
          disableColumnMenu
          disableColumnSelector
          hideFooterPagination
          sx={{
            border: "none",
            width: "100%",
            height: "100%",
            display: "flex"
          }}
        />
      </CardContent>
    </Card>
  );
};

export default SaleCampaignsCard;
