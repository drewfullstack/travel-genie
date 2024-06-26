// screens/navigation/BookingStack.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen1 from "../onboarding/OnboardingScreen1";
import OnboardingScreen2 from "../onboarding/OnboardingScreen2";
import OnboardingScreen3 from "../onboarding/OnboardingScreen3";
import SignUp from "../auth/SignUp";
import SelectCity from "../create-booking/SelectCity";
import SelectDates from "../create-booking/SelectDates";
import SelectBudget from "../create-booking/SelectBudget";
import GenerateOutboundFlights from "../create-booking/GenerateOutboundFlights";
import GenerateInboundFlights from "../create-booking/GenerateInboundFlights";
import GenerateHotels from "../create-booking/GenerateHotels";
import GenerateExcursions from "../create-booking/GenerateExcursions";
import ConfirmBooking from "../create-booking/ConfirmBooking";
import Login from "../auth/Login";
import ExcursionDetails from "../create-booking/excursionDetails";

const Stack = createNativeStackNavigator();

const BookingStack = () => {
  return (
    <Stack.Navigator initialRouteName="onboarding1">
      <Stack.Screen
        name="select-city"
        component={SelectCity}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="select-dates"
        component={SelectDates}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="select-budget"
        component={SelectBudget}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="generate-outbound-flights"
        component={GenerateOutboundFlights}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="generate-inbound-flights"
        component={GenerateInboundFlights}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="generate-hotels"
        component={GenerateHotels}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="generate-excursions"
        component={GenerateExcursions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="confirm-booking"
        component={ConfirmBooking}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="excursion-details"
        component={ExcursionDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default BookingStack;
