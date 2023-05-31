const dev = {
    API_URL: "http://localhost:8080/"
};
const prod = { 
    API_URL: "bla"
};
export const config = process.env.NODE_ENV === "development" ? dev : prod;