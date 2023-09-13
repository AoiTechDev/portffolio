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
// function MyApp({ Component, pageProps }) {
//   const router = useRouter();
//   return (
//     <ChakraProvider theme={theme}>
//       <AnimatePresence mode="wait">
//         <motion.div key={router.pathname}>
//           <Component {...pageProps} />

//           <motion.div
//             className="slide-in"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 0 }}
//             exit={{ scaleX: 1 }}
//             transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
//           ></motion.div>
//           <motion.div
//             className="slide-out"
//             initial={{ scaleX: 1 }}
//             animate={{ scaleX: 0 }}
//             exit={{ scaleX: 0 }}
//             transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
//           ></motion.div>
//         </motion.div>
//       </AnimatePresence>
//     </ChakraProvider>
//   );
// }
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
