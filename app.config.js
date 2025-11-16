module.exports = {
  expo: {
    name: "in-vento",
    slug: "in-vento-uohozodpe40lbpj5kcqh",
    version: "1.0.0",

    owner: "aaronicss",


    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "invento",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    extra: {
      weatherCity: process.env.WEATHER_CITY || "Bacoor",
      weatherApiKey: process.env.WEATHER_API_KEY || "",
      "eas": {
        "projectId": "d78cf9be-62c4-4329-a898-17543a1f27de"
      },
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      package: "com.aaronicss.invento",
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#000000",
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
  },
};

