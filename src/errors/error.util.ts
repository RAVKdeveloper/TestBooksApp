import { ErrorReq, ErrorCodes } from './error.entiti'


export const getError = (code: number): string | undefined => {
    
    switch(code) {
      case ErrorCodes.BADREQUEST:
      return ErrorReq.BADREQUEST
      case ErrorCodes.FORBIDEN: 
      return ErrorReq.FORBIDEN
      case ErrorCodes.NOTFOUND:
      return ErrorReq.NOTFOUND
      case ErrorCodes.SERVERINTERNAL:
      return ErrorReq.SERVERINTERNAL
    }
}