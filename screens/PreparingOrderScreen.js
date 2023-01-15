import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { AppColors } from "../styles/colors";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = (props) => {
  const theme = props;
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 2000);
  }, []);

  return (
    <SafeAreaView
      className="flex-1 justify-center items-center bg-[#e54a4b]"
      //   style={
      //     theme === "light"
      //       ? { backgroundColor: AppColors.lightRed }
      //       : { backgroundColor: AppColors.darkRed }
      //   }
    >
      <Animatable.Image
        source={require("../assets/orderLanding.gif")}
        animation="slideInDown"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInDown"
        iterationCount={1}
        className="text-lg my-10 font-bold text-center text-white"
      >
        Esperando respuesta del restaurante
      </Animatable.Text>

      <Progress.Bar width={260} color="white" indeterminate={true} />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
