const theme = {
    typography: {
        title1: {
            fontSize: "32px",
            fontWeight: "bold",
            lineHeight: "1.5",
        },
        title2: {
            fontSize: "24px",
            fontWeight: "bold",
            lineHeight: "1.5",
        },
        title3: {
            fontSize: "20px",
            fontWeight: "bold",
            lineHeight: "1.5",
        },
        body1: {
            fontSize: "16px",
            fontWeight: "normal",
            lineHeight: "1.5",
        },
        body2: {
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "1.5",
        },
        body2Bold: {
            fontSize: "14px",
            fontWeight: "bold",
            lineHeight: "1.5",
        },
        caption: {
            fontSize: "12px",
            fontWeight: "normal",
            lineHeight: "1.5",
        },
        small: {
            fontSize: "10px",
            fontWeight: "normal",
            lineHeight: "1.5",
        },
        subtitle: {
            fontSize: "18px",
            fontWeight: "normal",
            lineHeight: "1.5",
        },
    },
    colors: {
        primary: "#007BFF",
        secondary: "#6C757D",
        red: "#FF0000",
        gray: "#6C757D",
        lightGray: "#F8F9FA",
        white: "#FFFFFF",
        black: "#000000",
    },
    iconSizes: {
        small: "16px",
        medium: "24px",
        large: "32px",
    },
} as const;

export default theme;
