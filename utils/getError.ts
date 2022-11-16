export type toastError = {
    response: { data: { message: any } };
    message: any;
};

/**
 *  getError().
 *
 *  Optional chaining:
 *  (err.response && err.response.data && err.response.data.message)
 */
// https://youtu.be/fBew9hQhvLU?t=551
function getError({ err }: { err: toastError | any | unknown }): any {
    if (err.response?.data?.message) {
        return err.response.data.message;
    }

    return err.message;
}

export { getError };
