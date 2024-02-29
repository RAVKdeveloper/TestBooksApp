export const ErrorReq = {

     FORBIDEN: 'Доступ запрещён',
     BADREQUEST: 'Неверный запрос',
     NOTFOUND: 'Страница не найдена',
     SERVERINTERNAL: 'Сервер не отвечает :('

}

export enum ErrorCodes {
    FORBIDEN = 403,
    BADREQUEST = 400,
    NOTFOUND = 404,
    SERVERINTERNAL = 500
}