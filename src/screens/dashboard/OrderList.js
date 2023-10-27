import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent } from "@material-ui/core";
import { COLORS } from "../../theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    marginBottom: theme.spacing(1),
    fontFamily: "Gabarito",
    marginLeft: 3,
    fontWeight: 200,
    color: COLORS.primary
  },
  seeAllButton: {
    textTransform: "none",
    fontFamily: "Gabarito",
    fontWeight: 500,
    color: COLORS.secondary
  },
  cardList: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flex: 1,
    height: "100%"
  },
  card: {
    marginBottom: theme.spacing(2),
    minWidth: 250,
    height: 200,
    margin: "0px 20px",
    transition: "transform 0.8s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: `2px 2px 25px ${COLORS.primary}44`,
      border: "none",
      cursor: "pointer",
      height: "95%"
    }
  },
  addCard: {
    marginBottom: theme.spacing(2),
    minWidth: 150,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `2px dashed ${COLORS.tertiary}`
  },
  addButton: {
    fontFamily: "Gabarito",
    minWidth: 150,
    height: "100%",
    fontWeight: 500,
    fontSize: 50,
    color: COLORS.primary
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  cardTitle: {
    fontFamily: "Gabarito",
    fontWeight: 500,
    color: COLORS.primary
  },
  cardName: {
    fontFamily: "Gabarito",
    fontWeight: 500,
    color: COLORS.secondary
  },
  cardDetails: {
    fontFamily: "Gabarito",
    fontWeight: 500,
    color: COLORS.textSecnd
  },
  cardDescription: {
    fontFamily: "Gabarito",
    fontWeight: 300,
    color: COLORS.textMain
  },
  hoverButtonStyle: {
    background: COLORS.primary,
    justifySelf: "center",
    fontFamily: "Gabarito",
    fontWeight: 300,
    color: COLORS.white,
    textTransform: "none", // Set text to normal caps
    display: "block", // Center the button
    margin: "0px auto",
    width: "200px",
    marginTop: "15px",
    "&:hover": {
      backgroundColor: COLORS.primaryDark
    }
  }
}));

const OrderList = () => {
  const classes = useStyles();
  const [hoveredCardIndex, setHoveredCardIndex] = useState(-1);

  const handleCardHover = (index) => {
    setHoveredCardIndex(index);
  };
  const data = [
    {
      orderNumber: "2103",
      name: "Onky Pears",
      dueDate: "July 31st, 2023",
      orderAmount: 716,
      orderDetails: "Prepare & Deliver"
    },
    {
      orderNumber: "2104",
      name: "Joshua Lundt",
      dueDate: "July 31st, 2023",
      orderAmount: 346,
      orderDetails: "Shipping only"
    },
    {
      orderNumber: "2105",
      name: "Waseem Malik",
      dueDate: "July 31st, 2023",
      orderAmount: 81,
      orderDetails: "Local-dropoff"
    },
    {
      orderNumber: "2106",
      name: "Morgan Alex",
      dueDate: "July 31st, 2023",
      orderAmount: 48,
      orderDetails: "Wash Only Package"
    }
  ];

  const slicedData = data.slice(0, 4);

  return (
    <Box className={classes.root}>
      <Box className={classes.headerContainer}>
        <Typography variant="h6" className={classes.title}>
          Ongoing Orders
        </Typography>
        <Button color="primary" className={classes.seeAllButton}>
          See all
        </Button>
      </Box>
      <Box className={classes.cardList}>
        <Card variant="outlined" className={classes.addCard}>
          <Button color="primary" className={classes.addButton}>
            +
          </Button>
        </Card>
        {slicedData.map((item, index) => (
          <Card
            key={index}
            variant="outlined"
            className={classes.card}
            onMouseEnter={() => handleCardHover(index)} // Handle hover state
            onMouseLeave={() => handleCardHover(-1)}
          >
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" className={classes.cardTitle}>
                #{item.orderNumber}
              </Typography>

              <Typography variant="h5" className={classes.cardName}>
                {item.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start"
                }}
              >
                <Typography variant="body2" className={classes.cardDetails}>
                  {item.dueDate} •{" "}
                  <span style={{ color: "tomato" }}>${item.orderAmount}</span>
                </Typography>
                <Typography variant="body2" className={classes.cardDescription}>
                  {item.orderDetails}
                </Typography>
              </Box>
              {hoveredCardIndex === index && (
                <Button
                  className={classes.hoverButtonStyle}
                  onClick={() => handleFinishOrder(index)}
                >
                  Finish Order
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default OrderList;
