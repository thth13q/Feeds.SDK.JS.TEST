export interface IError {
    errors: object;
    status: number | undefined;
}
declare const generateError: (error: any) => void;
export default generateError;
