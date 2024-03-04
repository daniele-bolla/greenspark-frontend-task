import axios, {
    type AxiosResponse,
    type AxiosInstance,
    type AxiosRequestConfig,
    AxiosError,
} from "axios";

const baseURL = "https://api.mocki.io/v2/016d11e8";

const config: AxiosRequestConfig = {
    baseURL
};

function apiError(error: any): any {
    if (error && "isAxiosError" in error && error.isAxiosError) {
        const { response } = error;
        return { ...response }
    }
}
const apiService: AxiosInstance = axios.create(config);

const errorHandler = (error: AxiosError) => {
    const isRespError = apiError(error)
    if (isRespError) {
        console.log(isRespError)
    }
    return Promise.reject({ ...error });
};

const successHandler = (response: AxiosResponse) => {
    const { data } = response;
    return data;
};

apiService.interceptors.response.use(
    (response) => successHandler(response),
    (error) => errorHandler(error)
);

export default apiService;
