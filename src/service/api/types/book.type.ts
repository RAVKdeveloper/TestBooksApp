interface SaleInfo {
    buyLink: string
    country: string
    isEbook: boolean
    saleability: string
    listPrice: { amount: number, currencyCode: string }
}

interface VolumeInfo {
    allowAnonLogging: boolean
    authors: string[]
    canonicalVolumeLink: string
    categories: string[]
    contentVersion: string
    imageLinks: { smallThumbnail: string, thumbnail: string }
    infoLink: string
    pageCount: number
    previewLink: string
    publishedDate: string
    subtitle: string
    title: string
}

export interface IBook {
    id: string
    saleInfo: SaleInfo
    selfLink: string
    volumeInfo: VolumeInfo
}