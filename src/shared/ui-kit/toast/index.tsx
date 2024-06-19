import { toast } from 'react-toastify';

export function toastSuccess(title: string) {
    toast.success(title)
}

export function toastFailure(title: string) {
    toast.error(title);
}