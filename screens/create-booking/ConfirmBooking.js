import {
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import TextReg from "../TextReg";
import TextBold from "../TextBold";
import { codeToCity } from "../../utils/iataAirportCodes";
import { cityToEmoji } from "../../utils/cityToFlag";

const ConfirmBooking = ({ navigation, route }) => {
  const {
    selectedOutboundFlight,
    selectedInboundFlight,
    outboundAirport,
    inboundAirport,
    departDate,
    returnDate,
    budget,
    selectedHotel,
    selectedExcursions,
  } = route.params;

  useEffect(() => {
    console.log(selectedExcursions)
  }, []);
  return (
    <View style={styles.container}>
      <TextReg style={styles.heading}>Your Holiday</TextReg>
      <TextReg style={styles.subheading}>Hotel</TextReg>
      <ImageBackground
        source={{ uri: "https://picsum.photos/500/100" }}
        style={styles.hotelCard}
      >
        <View style={styles.overlay}>
          <TextBold style={styles.hotelName}>
            {selectedHotel.hotel.name}
          </TextBold>
          <Image source={require("../../assets/stars.png")}></Image>
        </View>
      </ImageBackground>
      <TextReg style={styles.subheading}>Flights</TextReg>
      <View style={styles.flightRow}>
        <View style={styles.flightCard}>
          <View style={styles.flagCard}>
            <TextReg style={styles.flag}>
              {cityToEmoji(outboundAirport)}
            </TextReg>
          </View>
          <TextReg>{outboundAirport}</TextReg>
          <TextReg>
            {selectedOutboundFlight.itineraries[0].segments[0].departure.at
              .split("T")[0]
              .split(":")
              .splice(0, 2)
              .join(":")}
          </TextReg>
          <TextReg>
            {selectedOutboundFlight.itineraries[0].segments[0].departure.at
              .split("T")[1]
              .split(":")
              .splice(0, 2)
              .join(":")}
          </TextReg>
        </View>
        <Image
          source={require("../../assets/arrow-right-dark.png")}
          style={styles.arrow}
        />
        <View style={styles.flightCard}>
          <View style={styles.flagCard}>
            <TextReg style={styles.flag}>{cityToEmoji(inboundAirport)}</TextReg>
          </View>
          <TextReg>{inboundAirport}</TextReg>
          <TextReg>
            {selectedOutboundFlight.itineraries[0].segments[0].arrival.at
              .split("T")[0]
              .split(":")
              .splice(0, 2)
              .join(":")}
          </TextReg>
          <TextReg>
            {selectedOutboundFlight.itineraries[0].segments[0].arrival.at
              .split("T")[1]
              .split(":")
              .splice(0, 2)
              .join(":")}
          </TextReg>
        </View>
      </View>
      <View style={styles.flightRow}>
        <View style={styles.flightCard}>
          <View style={styles.flagCard}>
            <TextReg style={styles.flag}>{cityToEmoji(inboundAirport)}</TextReg>
          </View>
          <TextReg>{inboundAirport}</TextReg>
          <TextReg>
            {selectedInboundFlight.itineraries[0].segments[0].departure.at
              .split("T")[0]
              .split(":")
              .splice(0, 2)
              .join(":")}
          </TextReg>
          <TextReg>
            {selectedInboundFlight.itineraries[0].segments[0].departure.at
              .split("T")[1]
              .split(":")
              .splice(0, 2)
              .join(":")}
          </TextReg>
        </View>
        <Image
          source={require("../../assets/arrow-right-dark.png")}
          style={styles.arrow}
        />
        <View style={styles.flightCard}>
          <View style={styles.flagCard}>
            <TextReg style={styles.flag}>
              {cityToEmoji(outboundAirport)}
            </TextReg>
          </View>
          <TextReg>{outboundAirport}</TextReg>
          <TextReg>
            {selectedInboundFlight.itineraries[0].segments[0].arrival.at
              .split("T")[0]
              .split(":")
              .splice(0, 2)
              .join(":")}
          </TextReg>
          <TextReg>
            {selectedInboundFlight.itineraries[0].segments[0].arrival.at
              .split("T")[1]
              .split(":")
              .splice(0, 2)
              .join(":")}
          </TextReg>
        </View>
      </View>
      <View>
        <TextBold style={styles.costText}>Cost</TextBold>
        <View style={styles.costRow}>
          <TextReg style={styles.costText}>Hotel (5 Night)</TextReg>
          <TextReg style={styles.price}>
            {selectedHotel.offers[0].price.total}
          </TextReg>
        </View>
        <View style={styles.costRow}>
          <TextReg style={styles.costText}>Outbound Flight</TextReg>
          <TextReg style={styles.price}>
            {Number(selectedInboundFlight.price.grandTotal)}
          </TextReg>
        </View>
        <View style={styles.costRow}>
          <TextReg style={styles.costText}>Inbound Flight</TextReg>
          <TextReg style={styles.price}>
            {Number(selectedOutboundFlight.price.grandTotal)}
          </TextReg>
        </View>
        <View style={styles.costRow}>
          <TextBold style={styles.costText}>Total</TextBold>
          <TextReg style={styles.price}>
            {Number(selectedHotel.offers[0].price.total) +
              Number(selectedInboundFlight.price.grandTotal) +
              Number(selectedOutboundFlight.price.grandTotal)}
          </TextReg>
        </View>

        <Pressable style={styles.button}>
          <TextReg style={styles.buttonText}>Confirm Trip</TextReg>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  container: {
    width: "90%",
    flex: 1,
    TextRegAlign: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,

    marginTop: 5,
    lineHeight: 40,
  },
  subheading: {
    width: "70%",

    lineHeight: 25,
    fontSize: 18,
    fontWeight: "bold",

    alignSelf: "flex-start",
    color: "black",
  },
  image: {
    width: 330,
    height: 330,
    marginTop: 20,
    marginBottom: 50,
    alignSelf: "center",
  },
  icon: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  buttonTextReg: {
    color: "white",
    fontSize: 18,
    TextRegAlign: "center",
  },
  hotelCard: {
    width: "100%",
    height: 100,
    layoutmarginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
    marginTop: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 15,
  },
  hotelName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    
  },
  flightRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
  },
  flightCard: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    width: 160,
    height: 160,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 1,
  },
  arrow: {
    height: 30,
    width: 30,
    margin: 15,
  },
  flagCard: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: 50,
    height: 60,
    width: 60,
    marginBottom: 5,
  },
  flag: {
    fontSize: 32,
  },
  costRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  price: {
    color: "#0373F3",
    fontSize: 18,
  },
  costText: {
    fontSize: 18,
  },
  buttonText: {
    color: "white",
    textAlign: "center",

    padding: 15,
    width: "100%",
    height: 55,
    fontSize: 18,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#0373F3",
    borderRadius: 50,
  },
});

export default ConfirmBooking;
