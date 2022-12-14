import { useState, createContext } from 'react';

export const LoadingContext = createContext();

export const LoadingProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);

    const updateIsLoading = (value) => {
        setIsLoading(value);
    };

    return (
        <LoadingContext.Provider
            value={{ isLoading, updateIsLoading }}
        >
            {children}
        </LoadingContext.Provider>
    );
};