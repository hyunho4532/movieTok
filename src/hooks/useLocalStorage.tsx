import { toastFailure, toastSuccess } from "../shared/ui-kit/toast";

export function useLocalStorage(key: string) {

    const setItem = (userDataArray: any): void => {
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

    const removeItem = (): void => {
        try {
            window.localStorage.removeItem(key);
            toastSuccess("로그아웃 정상 진행!")
            window.location.reload()
            
        } catch (error) {
            console.error(error);
            toastFailure("로그아웃 진행 중 에러 발생!")
            window.location.reload()
        }
    };

    return { setItem, getItem, removeItem };
}