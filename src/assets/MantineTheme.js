import {createTheme} from "@mantine/core";

const theme = createTheme({
  fontFamily: "Inter, Montserrat, Helvetica Neue, Helvetica, sans-serif",
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: {
    fontFamily: "Greycliff CF, sans-serif"
  },
  components: {
    Input: {
      // eslint-disable-next-line no-unused-vars
      styles: theme => ({
        input: {
          "&:disabled" : {
            opacity: 1,
            pointerEvents: "unset"
          },
          "--_input-bd-focus": "#ced4da",
          "--_input-height": "37px",
        },
      }),
    }
  }
});

export default theme;
