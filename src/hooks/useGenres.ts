import useData from "./useData";

export interface Genre {
    id: number;
    name: '';
    image_background: string;
}


const useGeneres = () => useData<Genre>('/genres');

export default useGeneres;