import React from "react";


interface StyleSheet {
   [key: string]: React.CSSProperties;
}

export const styles: StyleSheet = {
   container: {
      backgroundColor: "#fafafa",
      height: "100%",
      overflow: "auto"
   },

   backButton: {
      backgroundColor: "#0000",
      border: "none"
   }
}