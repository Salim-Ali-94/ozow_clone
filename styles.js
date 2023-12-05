import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    shadow: {
  
      shadowColor: "#dddddd",
  
      shadowOffset: {
  
        width: 0,
        height: 0,
      },
  
      shadowOpacity: 1,
      shadowRadius: 5
    },
  
    button: {
  
      flex: 1,
      justifyContent: "center"
    },
  
    circleButton: {
  
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000000",
      bottom: 30,
      shadowColor: "#000000",
  
      shadowOffset: {
  
        width: 0,
        height: 1
      },
  
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 1
    },
  
    tabItem: {
  
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
  
    largerIcon: {
      
      width: 25,
      height: 25
    },
  
    spacingLeft: {
    
      paddingLeft: 20
    },
  
    spacingRight: {
    
      paddingRight: 20
    },
  
    standardIcon: {
      
      width: 20,
      height: 20
    },
  
    backIcon: {
      
      tintColor: "#fff",
      width: 20,
      height: 20
    },
  
    gradient: {
  
      flex: 1
    },
  
    ozowLogo: {
  
      width: 35,
      height: 35
    },
  
    xIcon: {
  
      width: 20,
      height: 20
    },
  
    back: {
      
      paddingLeft: 30
    }
  
});
