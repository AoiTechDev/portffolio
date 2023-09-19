import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "@styles/styles.sass";

const font = {
  textStyles: {
    h3: {
      fontWeight: "100",
    },
  },
};

export const theme = extendTheme({ font });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
