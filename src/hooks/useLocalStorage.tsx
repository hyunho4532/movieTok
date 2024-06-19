export function useLocalStorage(key: string) {

    const setItem = (userDataArray: (string | null)[] | null): void => {
        try {
            if (userDataArray != null) {
                window.localStorage.setItem(key, JSON.stringify(userDataArray));
            } else {
                console.error("userDataArray is null or undefined.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getItem = (index: number): (string | null)[] | null => {
        try {
            const storedValue = window.localStorage.getItem(key);

            if (storedValue != null) {
                const storedValueFromIndex = JSON.parse(storedValue);

                return storedValueFromIndex[index]
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    return { setItem, getItem };
}