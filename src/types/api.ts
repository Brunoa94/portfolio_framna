export interface ErrorI {
  message: string;
  status: number;
}

export interface SuccessI {
  message: string;
  status: number;
}

export interface ResponseImageI {
  image: string;
  status: number;
}

export interface DeleteImageI {
  imgSrc: string;
}
