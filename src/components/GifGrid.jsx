import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
	const {gifs, isLoading} = useFetchGifs(category);

	return (
		<>
			{isLoading && (<h2>Cargando...</h2>)}

			<h3>{category}</h3>

			<div className="card-grid">
				{gifs.map((gif) => (
					<GifItem key={gif.id} {...gif} />
				))}
			</div>
		</>
	);
};
