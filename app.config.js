module.exports = {
  expo: {
    name: "in-vento",
    slug: "in-vento",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "invento",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    extra: {
      weatherCity: process.env.WEATHER_CITY || "Bacoor",
      weatherApiKey: process.env.WEATHER_API_KEY || "",
      "eas": {
        "projectId": "2eebaf7b-ff06-4d7c-a1b6-6f26e877d869"
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

